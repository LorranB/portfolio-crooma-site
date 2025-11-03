<?php
// send.php — envia e VOLTA para a mesma página (reload), sem mensagem
header('Content-Type: text/html; charset=utf-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Ajuste os caminhos se colocar a pasta em outro lugar
require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';
require __DIR__ . '/phpmailer/Exception.php';

function cleanText($v){
  return trim(filter_var($v, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW|FILTER_FLAG_STRIP_HIGH));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  exit('Método não permitido.');
}

$name    = isset($_POST['name'])    ? cleanText($_POST['name'])    : '';
$email   = isset($_POST['email'])   ? filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) : '';
$message = isset($_POST['message']) ? trim($_POST['message'])       : '';

if (!$name || !$email || !$message) {
  http_response_code(400);
  exit('Dados inválidos.');
}

$mail = new PHPMailer(true);
try {
  // SMTP Hostinger
  $mail->isSMTP();
  $mail->Host       = 'smtp.hostinger.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'bruno.sanches@croomastudio.com';   // <-- SEU E-MAIL
  $mail->Password   = '439811BRUbru.';                   // <-- SENHA DA CAIXA DE E-MAIL
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;     // TLS (porta 587)
  $mail->Port       = 587;                                // use 465 + ENCRYPTION_SMTPS se preferir SSL

  // Remetente precisa ser o mesmo do SMTP (SPF/DMARC)
  $mail->setFrom('bruno.sanches@croomastudio.com', 'Site CROOMA');
  // Destino (pode ser o mesmo)
  $mail->addAddress('bruno.sanches@croomastudio.com', 'Bruno CROOMA');

  // Responder para quem preencheu o form
  $mail->addReplyTo($email, $name);

  // Conteúdo
  $mail->CharSet = 'UTF-8';
  $mail->isHTML(true);
  $mail->Subject = 'Contato pelo site';
  $mail->Body    = "<b>Nome:</b> ".htmlspecialchars($name)."<br>"
                 . "<b>E-mail:</b> ".htmlspecialchars($email)."<br><br>"
                 . nl2br(htmlspecialchars($message));
  $mail->AltBody = "Nome: $name\nE-mail: $email\n\n$message";

  $mail->send();

  // Volta para a página anterior (reload visual)
  $back = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '/';
  if (!headers_sent()) {
    header('Location: ' . $back);
    exit;
  }
  // fallback
  echo '<!doctype html><meta http-equiv="refresh" content="0;url='.htmlspecialchars($back, ENT_QUOTES).'"><script>location.href='.json_encode($back).'</script>';
  exit;

} catch (Exception $e) {
  http_response_code(500);
  // Em caso de falha, também volta para a página anterior (opcional)
  $back = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '/';
  echo '<!doctype html><meta charset="utf-8"><p style="font:14px/1.4 system-ui">Falha no envio. Tente novamente.</p>';
  echo '<script>setTimeout(function(){ location.href = '.json_encode($back).' }, 1200);</script>';
  exit;
}
