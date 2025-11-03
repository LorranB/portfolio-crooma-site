(function () {
  "use strict";
  const LANG_KEY = "lang";

  // =====================================================
  // i18n Dictionary (EN/PT) — grouped with clear sections
  // =====================================================
  const T = {
    // ===== HERO =====
    "hero.desc": {
      en: "We design identity, social media, websites, apps and printed materials — a complete visual orbit for your brand. From first spark to full presence.",
      pt: "Criamos identidade, redes sociais, sites, apps e materiais impressos — uma órbita visual completa para sua marca. Do primeiro insight à presença total.",
    },
    "hero.subtitle": {
      en: "We design identity, social media, websites, apps and printed materials — a complete visual orbit for your brand. From first spark to full presence",
      pt: "Criamos identidade, redes sociais, sites, aplicativos e materiais impressos — uma órbita visual completa para sua marca. Do primeiro insight à presença total.",
    },
    "hero.tagline": {
      en: "Brand Design Studio",
      pt: "Estúdio de Design de Marca",
    },
    "hero.title": {
      en: "All your brand phases in one place.",
      pt: "Todas as fases da sua marca em um só lugar.",
    },

    // ===== NAVIGATION =====
    "nav.contact": { en: "Contact us", pt: "Fale conosco" },
    "nav.home": { en: "Home", pt: "Início" },
    "nav.portfolio": { en: "Portfolio", pt: "Portfólio" },

    // ===== CTA / BUTTONS =====
    "btn.goHome": { en: "← Go Home", pt: "← Voltar ao Início" },
    "btn.nextProject": { en: "Next Project →", pt: "Próximo Projeto →" },
    "cta.talk": { en: "Talk to us", pt: "Fale com a gente" },
    "cta.work": { en: "Check out our work", pt: "Veja nosso portfólio" },

    // ===== FORMS =====
    "form.email": { en: "Email:", pt: "E-mail:" },
    "form.message": { en: "Message:", pt: "Mensagem:" },
    "form.name": { en: "Name:", pt: "Nome:" },
    "form.send": { en: "Send your message", pt: "Enviar mensagem" },
    "ph.email": { en: "Type your email.", pt: "Digite seu e-mail." },
    "ph.message": {
      en: "Tell us about your project.",
      pt: "Conte sobre o seu projeto.",
    },
    "ph.name": { en: "Type your full name.", pt: "Digite seu nome completo." },

    // ===== ABOUT =====
    "about.card.service": { en: "// services →", pt: "// serviços →" },
    "about.card.local": { en: "// place →", pt: "// local →" },
    "about.card.tag": { en: "// tag →", pt: "// tag →" },
    "about.card.year": { en: "// year →", pt: "// ano →" },
    "about.card1.p1": {
      en: "Transforming brands into constellations that shine through visual identity, online presence, and digital experience. We align purpose and aesthetics to create designs that resonate through space and time.",
      pt: "Transformamos marcas em constelações que brilham por meio de identidade visual, presença online e experiência digital. Alinhamos propósito e estética para criar designs que ressoam no tempo e no espaço.",
    },
    "about.card1.tags": { en: "// visual identity // videos and motion // brand design", pt: "// identidade visual // videos e motion // design de marca" },
    "about.card1.title": { en: "Essence", pt: "Essência" },
    "about.card2.p1": {
      en: "Our approach merges art and structure — we navigate through research, design systems, and storytelling to craft visuals that speak and strategies that move. Each brand we create has its own gravity, its own light.",
      pt: "Nossa abordagem une arte e estrutura — navegamos por pesquisa, sistemas de design e storytelling para criar visuais que falam e estratégias que movem. Cada marca que criamos tem sua própria gravidade, sua própria luz.",
    },
    "about.card2.tags": {
      en: "// digital presence // social media // web & apps",
      pt: "// presença digital // redes sociais // web & apps",
    },
    "about.card2.title": { en: "Orbit", pt: "Órbita" },
    "about.subtitle.intro": {
      en: " At Crooma Design Studio, every project revolves around two core ideas:",
      pt: " No Crooma Design Studio, todo projeto é envolvido por duas principais ideias:",
    },
    "about.title": { en: "About the project.", pt: "Sobre o projeto." },
    "about.title.long": {
      en: "We believe that design creates and connects identities across galaxies of <strong>creativity and strategy.</strong>",
      pt: "Acreditamos que o design cria e conecta identidades através de galáxias de <strong>criatividade e estratégia.</strong>",
    },

    // ===== CARDS =====
    "card.identity.desc": {
      en: "Logo, palette, typography, brand rules",
      pt: "Logo, paleta, tipografia, diretrizes da marca",
    },
    "card.identity.title": { en: "Identity", pt: "Identidade" },
    "card.sites.desc": {
      en: "Design, layouts, responsive, prototypes",
      pt: "Design, layouts, responsivo, protótipos",
    },
    "card.sites.title": { en: "Sites & Apps", pt: "Sites & Apps" },
    "card.social.desc": {
      en: "Templates, posts, reels, content management",
      pt: "Templates, posts, reels, gerenciamento de conteúdo",
    },
    "card.social.title": { en: "Social Media", pt: "Redes Sociais" },

    // ===== OVERLAY (PROJECT BANNERS) =====
    "overlay.burgues": { en: "O Burguês", pt: "O Burguês" },
    "overlay.burgues.sub": {
      en: "Outdoor and Flyer design.",
      pt: "Design de Outdoor e Flyer",
    },
    "overlay.confie": {
      en: "Confie Pilates Studio",
      pt: "Estúdio de Pilates Confie",
    },
    "overlay.confie.sub": {
      en: "Complete Branding and Visual Identity.",
      pt: "Branding completo e Identidade Visual.",
    },
    "overlay.dejane": {
      en: "Course Dejane Almeida",
      pt: "Curso Dejane Almeida",
    },
    "overlay.dejane.sub": { en: "Visual Identity.", pt: "Identidade Visual." },
    "overlay.fire": { en: "Fire", pt: "Fire" },
    "overlay.fire.sub": {
      en: "Logo Construction and Social Media.",
      pt: "Construção de Logo e Social Media",
    },
    "overlay.hipica": { en: "Hípica Fluminense", pt: "Hípica Fluminense" },
    "overlay.hipica.sub": {
      en: "Logo Construction.",
      pt: "Construção de Logo",
    },
    "overlay.institute": {
      en: "Institute Dr. Gabriel Machado",
      pt: "Instituto Dr. Gabriel Machado",
    },
    "overlay.institute.sub": {
      en: "Logo reBranding.",
      pt: "Rebranding de Logo",
    },
    "overlay.luxmed": { en: "Luxmed", pt: "Luxmed" },
    "overlay.luxmed.sub": {
      en: "Visual Identity.",
      pt: "Identidade Visual",
    },
    "overlay.neonuttra": { en: "Neonuttra", pt: "Neonuttra" },
    "overlay.neonuttra.sub": {
      en: "Social media and Branding material designs.",
      pt: "Social media en Design de materiais de Branding",
    },
    "overlay.paula": { en: "Paula Ismério", pt: "Paula Ismério" },
    "overlay.paula.sub": {
      en: "Logo Construction and Social Media.",
      pt: "Construção de Logo e Social Media",
    },
    "overlay.trader": { en: "Trader Raiz", pt: "Trader Raiz" },
    "overlay.trader.sub": {
      en: "Complete reBranding, Visual Identity and Social Media.",
      pt: "ReBranding completo, Identidade Visual e Social Media",
    },

    // ===== PROJECT DESCRIPTIONS =====

    "project.burgues.desc": {
      en: "A bold and expressive visual for marketing materials that highlight flavor and attitude — connecting design and appetite.",
      pt: "Um visual ousado e expressivo para materiais de marketing que destacam sabor e atitude — conectando design e apetite.",
    },
    "project.confie.desc": {
      en: "A complete visual identity developed for a new Pilates studio, built from the naming stage to the entire visual presence of the brand.",
      pt: "Uma identidade visual completa desenvolvida para um novo estúdio de Pilates, construída desde o nome até toda a presença visual da marca.",
    },
    "project.dejane.desc": {
      en: "A full visual identity for an course focused on empowerment and personal growth, with an aesthetic that connects professionalism and emotion.",
      pt: "Uma identidade visual completa para um curso voltado ao empoderamento e crescimento pessoal, com uma estética que conecta profissionalismo e emoção.",
    },
    "project.fire.desc": {
      en: "A strong and energetic identity created for a fitness brand that inspires determination and growth. The FIRE project combines vibrant contrasts and sharp typography to reflect power, progress, and motivation.",
      pt: "Uma identidade forte e energética criada para uma marca fitness que inspira determinação e crescimento. O projeto FIRE combina contrastes vibrantes e tipografia marcante para refletir poder, progresso e motivação.",
    },
    "project.hipica.desc": {
      en: "A contemporary logo that captures tradition, movement, and elegance — representing one of Rio’s classic equestrian spaces.",
      pt: "Um logotipo contemporâneo que captura tradição, movimento e elegância — representando um dos espaços equestres clássicos do Rio.",
    },
    "project.institute.desc": {
      en: "A logo rebranding that renews authority and modernity while preserving the professional legacy of a beauty and estethical institute.",
      pt: "Um rebranding de logotipo que renova autoridade e modernidade, preservando o legado profissional de um instituto de beleza e estética.",
    },
    "project.luxmed.desc": {
      en: "A modern visual identity for a medical clinic that values clarity, sophistication, and human connection. The goal was to represent trust and innovation through minimalist and elegant design.",
      pt: "Uma identidade visual moderna para uma clínica médica que valoriza clareza, sofisticação e conexão humana. O objetivo foi representar confiança e inovação através de um design minimalista e elegante.",
    },
    "project.neonuttra.desc": {
      en: "A vibrant and healthy aesthetic for a nutrition brand — merging energy, modernity, and clarity through design.",
      pt: "Uma estética vibrante e saudável para uma marca de nutrição — unindo energia, modernidade e clareza através do design.",
    },
    "project.paula.desc": {
      en: "An extrovert and personal brand identity created for a financial marketing personality, combining bright colors, figures and an extrovert context.",
      pt: "Uma identidade de marca extrovertida e pessoal criada para uma personalidade do marketing financeiro, combinando cores vibrantes, figuras e um contexto extrovertido.",
    },
    "project.trader.desc": {
      en: "A complete rebranding for a financial education brand that connects modern design with authentic communication — reinforcing reliability and expertise.",
      pt: "Um rebranding completo para uma marca de educação financeira que conecta design moderno com comunicação autêntica — reforçando confiabilidade e autoridade.",
    },

    // ===== PROJECT SUBTITLES (replaced with About the project texts) =====

    "project.burgues.subtitle": {
      en: "We created vibrant compositions for O Burguês that capture attention from afar. The visual direction combines contrast, strong typography, and color balance to enhance visibility and personality in print materials.",
      pt: "Criamos composições vibrantes para O Burguês que capturam atenção à distância. A direção visual combina contraste, tipografia forte e equilíbrio de cores para reforçar personalidade e visibilidade nos materiais impressos.",
    },
    "project.confie.subtitle": {
      en: "We've created this brand from the skretch, composing name, colors, space and the message from the brand. The concept blends purple and pink tones with a modern aesthetic, creating a cohesive and striking identity across both digital and physical spaces.",
      pt: "Criamos essa marca desde o início, compondo nome, cores, espaço e mensagem da marca. O conceito mistura tons de roxo e rosa com uma estética moderna, criando uma identidade marcante e coesa em todos os espaços físicos e digitais.",
    },
    "project.dejane.subtitle": {
      en: "The project for Course Dejane Almeida aimed to translate inspiration into visuals. Typography, color palette, and layout composition were designed to reflect confidence, creativity, and direction for the student's journey.",
      pt: "O projeto para o curso Dejane Almeida buscou traduzir inspiração em elementos visuais. Tipografia, paleta de cores e composição foram pensadas para refletir confiança, criatividade e direção na jornada dos alunos.",
    },
    "project.fire.subtitle": {
      en: "FIRE challenged us to build a logo and visual system that captured the brand's intense, motivational spirit. The concept centers on transformation and inner strength — bringing together flame-inspired shapes and bold visuals that ignite attention.",
      pt: "O projeto FIRE nos desafiou a criar um logotipo e um sistema visual que capturassem o espírito intenso e motivador da marca. O conceito gira em torno da transformação e da força interior — unindo formas inspiradas em chamas e visuais marcantes que atraem atenção.",
    },
    "project.hipica.subtitle": {
      en: "For Hípica Fluminense, we crafted a minimalist emblem that symbolizes balance and equestrian grace. The design preserves heritage while adapting to digital use with modern composition and clear shapes.",
      pt: "Para a Hípica Fluminense, criamos um emblema minimalista que simboliza equilíbrio e graça equestre. O design preserva o legado enquanto se adapta ao uso digital com composição moderna e formas claras.",
    },
    "project.institute.subtitle": {
      en: "Our goal was to modernize the Institute's identity without losing its original roots. The new symbol unites precision, modernism and complexity, enhancing credibility and timelessness within the esthetical segment.",
      pt: "Nosso objetivo foi modernizar a identidade do Instituto sem perder suas raízes originais. O novo símbolo une precisão, modernidade e complexidade, fortalecendo a credibilidade e a atemporalidade dentro do segmento estético.",
    },
    "project.luxmed.subtitle": {
      en: "For LUXMED, we developed a complete visual identity system that merges professional aesthetics with soft tones and refined typography. The result is a timeless, luminous brand that communicates care and confidence.",
      pt: "Para a LUXMED, desenvolvemos um sistema de identidade visual completo que une estética profissional com tons suaves e tipografia refinada. O resultado é uma marca luminosa e atemporal, que comunica cuidado e confiança.",
    },
    "project.neonuttra.subtitle": {
      en: "CROOMA developed a colorful, consistent visual system for Neonuttra's social media and printed materials. The identity translates vitality and transparency, enhancing brand recognition across platforms.",
      pt: "A CROOMA desenvolveu um sistema visual colorido e consistente para as redes sociais e materiais impressos da Neonuttra. A identidade traduz vitalidade e transparência, fortalecendo o reconhecimento da marca em múltiplas plataformas.",
    },
    "project.paula.subtitle": {
      en: "The Paula Ismério identity expresses proximity and extroversion. Through joyful figures, strong colors, and a vivid and modern rhythm, we designed a logo and social media system that mirror her personalized and human-centered approach.",
      pt: "A identidade de Paula Ismério expressa proximidade e extroversão. Por meio de formas alegres, cores fortes e um ritmo visual vívido e moderno, desenvolvemos um logotipo e um sistema de mídias sociais que refletem sua abordagem personalizada e centrada no ser humano.",
    },
    "project.trader.subtitle": {
      en: "CROOMA reimagined Trader Raiz's entire visual presence, creating a clean and consistent brand ecosystem. From identity and typography to social media visuals, every element was crafted to reflect strategy, authority, and clarity.",
      pt: "A CROOMA redesenhou toda a presença visual da Trader Raiz, criando um ecossistema de marca limpo e consistente. Da identidade e tipografia aos visuais de redes sociais, cada elemento foi feito para refletir estratégia, autoridade e clareza.",
    },

    // ===== PORTFOLIO (SECTION) =====
    "portfolio.subtitle": {
      en: "A journey through the brands we've designed, where strategy and creativity align in the same orbit.",
      pt: "Uma jornada pelas marcas que criamos, onde estratégia e criatividade orbitam em alinhamento.",
    },
    "portfolio.title": { en: "Portfolio", pt: "Portfólio" },

    // ===== CONTACT =====
    "contact.begin": {
      en: "Contact us now and begin your mission:",
      pt: "Fale com a gente e inicie sua missão:",
    },
    "contact.digital": {
      en: "Establishing digital presence:",
      pt: "Presença digital:",
    },
    "contact.digital.desc": {
      en: "Websites, Apps and Social Media services.",
      pt: "Sites, Apps e serviços de Redes Sociais.",
    },
    "contact.form.legend": { en: "Contact Form", pt: "Formulário de Contato" },
    "contact.fullbrand": {
      en: "Full brand design:",
      pt: "Design de marca completo:",
    },
    "contact.fullbrand.desc": {
      en: "Visual identity, digital and printed materials.",
      pt: "Identidade visual, materiais digitais e impressos.",
    },
    "contact.galaxy": { en: "GALAXY!", pt: "GALÁXIA!" },
    "contact.lets": { en: "Let's build your ", pt: "Vamos construir sua " },
    "contact.wework": {
      en: "We work with startups and established businesses to shape their visual universe.",
      pt: "Trabalhamos com startups e empresas consolidadas para moldar seu universo visual.",
    },

    // ===== FOOTER =====
    "footer.copy": {
      en: "© CROOMA Design Studio — Brand design in orbit",
      pt: "© CROOMA Design Studio — Design de marca em órbita",
    },
  };

  // ==================================
  // i18n Apply Helpers
  // ==================================
  function applyLang(lang) {
    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (T[k] && T[k][lang] !== undefined) {
        el.innerText = T[k][lang];
      }
    });
    // HTML nodes
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const k = el.getAttribute("data-i18n-html");
      if (T[k] && T[k][lang] !== undefined) {
        el.innerHTML = T[k][lang];
      }
    });
    // Placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const k = el.getAttribute("data-i18n-ph");
      if (T[k] && T[k][lang] !== undefined) {
        el.setAttribute("placeholder", T[k][lang]);
      }
    });
  }

  // ==================================
  // Language Switch + Initial State
  // ==================================
  function setLanguage(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
    applyLang(lang);
    const en = document.getElementById("lang-en");
    const pt = document.getElementById("lang-pt");
    if (en && pt) {
      en.classList.toggle("active", lang === "en");
      pt.classList.toggle("active", lang === "pt");
    }
  }

  window.setLanguage = setLanguage;
  window.T = T;
  const saved = (function () {
    try {
      return localStorage.getItem(LANG_KEY);
    } catch (e) {
      return null;
    }
  })();
  setLanguage(saved === "pt" ? "pt" : "en");
})();
