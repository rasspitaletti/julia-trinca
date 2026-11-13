/**
 * Dados reais da cliente, extraídos do site publicado
 * (https://nimbus-khaki-alpha.vercel.app/) em 13/11/2026.
 * Todo texto e link do site sai daqui. Não inventar dados novos.
 */

export const site = {
  name: "Julia Trinca",
  role: "Nutricionista Esportiva",
  crn: "CRN 92208/P",
  url: "https://nimbus-khaki-alpha.vercel.app",
  title: "Julia Trinca | Nutricionista Esportiva",
  description:
    "Conheça Julia Trinca, nutricionista esportiva. Uma abordagem acolhedora para cuidar da alimentação, respeitar seu corpo e encontrar equilíbrio na rotina.",
  ogDescription:
    "Nutrição esportiva com uma abordagem acolhedora, equilibrada e humanizada.",
  links: {
    whatsapp: "https://wa.me/message/HVLWZ4OHDPNBK1",
    instagram: "https://www.instagram.com/jutrinca.nutri/",
    instagramHandle: "@jutrinca.nutri",
  },
} as const;

export const nav = [
  { href: "#sobre", label: "Sobre mim" },
  { href: "#abordagem", label: "Minha abordagem" },
  { href: "#acompanhamento", label: "Acompanhamento" },
  { href: "#online", label: "Atendimento online" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  kicker: "Nutrição com presença",
  titleA: "Cuide de você",
  titleB: "sem deixar de viver",
  lead: "Te mostro como cuidar da alimentação e gostar do seu corpo sem deixar de viver.",
  sub: "Uma alimentação equilibrada pode fazer parte da sua rotina de forma leve, consciente e sem abrir mão do prazer de comer.",
  note: "A sua rotina, o seu ritmo, o seu cuidado.",
  caption: "Nutrição que cabe na vida real",
};

export const values = [
  "Equilíbrio alimentar",
  "Nutrição esportiva",
  "Relação positiva com o corpo",
  "Sem tudo ou nada",
  "Do seu jeito",
  "Com acolhimento",
  "Bem-estar",
  "Autonomia",
];

export const about = {
  greeting: "Um prazer ter você por aqui",
  title: "Prazer, sou Julia Trinca.",
  paragraphs: [
    "Sou Julia Trinca, nutricionista esportiva, e acredito que cuidar da alimentação também é aprender a respeitar o próprio corpo e encontrar equilíbrio na rotina.",
    "Meu propósito é mostrar que uma relação mais leve com a comida pode caminhar junto com seus objetivos, sem que você precise deixar de viver os momentos que ama.",
  ],
};

export const approach = {
  title: "Uma nutrição que combina com a sua vida.",
  intro:
    "Mais do que seguir regras, cuidar da alimentação é construir escolhas que façam sentido para você.",
  items: [
    {
      id: "equilibrio",
      title: "Equilíbrio alimentar",
      tag: "Sem tudo ou nada",
      text: "Uma alimentação saudável pode ser construída com escolhas conscientes, flexibilidade e respeito à sua rotina.",
      image: "/images/services/equilibrio.webp",
      alt: "Tigela colorida com folhas, legumes, cogumelos e pão tostado",
    },
    {
      id: "esportiva",
      title: "Nutrição esportiva",
      tag: "Do seu jeito",
      text: "A alimentação é uma parte importante do cuidado com o corpo, da prática de atividades físicas e dos objetivos individuais.",
      image: "/images/services/esportiva.webp",
      alt: "Mulher correndo em um parque arborizado",
    },
    {
      id: "corpo",
      title: "Relação positiva com o corpo",
      tag: "Com acolhimento",
      text: "Um olhar acolhedor para a alimentação, valorizando bem-estar, autonomia e respeito à individualidade.",
      image: "/images/services/corpo.webp",
      alt: "Smoothie bowl verde com mirtilos, framboesas e sementes",
    },
  ],
  closing: "Uma relação mais gentil começa nas pequenas escolhas.",
};

export const stories = {
  title: "A vida também acontece à mesa e pelo caminho.",
  intro:
    "Mais espaço para o prazer de comer, para a sua rotina e para tudo o que faz você se sentir bem.",
  items: [
    {
      kicker: "Escolhas com equilíbrio",
      title: "Comida de verdade",
      text: "Um prato cheio de cor, sabor e possibilidades.",
      image: "/images/gallery/comida-de-verdade.webp",
      alt: "Tigela com vegetais coloridos, grãos e abacate",
    },
    {
      kicker: "Alimentação com prazer",
      title: "Prazer em cada pausa",
      text: "Lanches gostosos que acompanham o seu dia.",
      image: "/images/gallery/prazer-em-cada-pausa.webp",
      alt: "Smoothie cor-de-rosa com frutas vermelhas frescas",
    },
    {
      kicker: "Movimento com leveza",
      title: "Energia para viver",
      text: "Nutrição que caminha junto com o que você ama fazer.",
      image: "/images/gallery/energia-para-viver.webp",
      alt: "Mulher correndo em um parque iluminado pelo sol",
    },
  ],
  note: "Sem cardápio de perfeição. Mais presença no seu dia a dia.",
};

export const process = {
  title: "Seu cuidado começa com um primeiro passo.",
  intro:
    "Sem fórmulas prontas. Uma conversa de cada vez, respeitando o que faz sentido para você.",
  steps: [
    {
      title: "Primeiro contato",
      text: "Entre em contato para tirar dúvidas e conhecer as informações sobre o atendimento.",
      image: "/images/backgrounds/primeiro-contato.webp",
      alt: "Torrada com abacate, tomate e rúcula ao lado de uma bebida quente",
    },
    {
      title: "Conhecendo seus objetivos",
      text: "Um espaço para conversar sobre suas necessidades, sua rotina e o que você busca com a nutrição.",
      image: "/images/backgrounds/habitos.webp",
      alt: "Banca de feira com frutas frescas e coloridas",
    },
    {
      title: "Construindo novos hábitos",
      text: "O acompanhamento nutricional pode ajudar você a desenvolver escolhas alimentares mais conscientes e sustentáveis.",
      image: "/images/gallery/corrida.webp",
      alt: "Mulher correndo em um parque em um dia frio",
    },
  ],
  cta: "Quero começar meu acompanhamento",
  ctaNote: "Uma conversa pode ser um ótimo começo.",
};

export const quote = {
  text: "Você não precisa deixar de viver para cuidar da sua alimentação.",
  sign: "Mais leveza. Mais você.",
};

export const contact = {
  kicker: "O próximo passo é seu",
  title: "Vamos cuidar da sua alimentação juntos?",
  text: "Cada pessoa tem sua própria rotina, seus objetivos e sua história. Entre em contato e descubra como dar o primeiro passo para uma relação mais equilibrada com a alimentação.",
  footerLine: "Nutrição, equilíbrio e cuidado em cada escolha.",
};

/** Fotos de bancos abertos: créditos exibidos no rodapé. */
export const photoCredits = [
  { title: "Mulher de top esportivo segurando uma tigela de comida", author: "Look Studio (Unsplash)", license: "Licença Unsplash", url: "https://unsplash.com/photos/S0T98VD2KZs" },
  { title: "Samambaias verdes em um fundo preto", author: "Kendal (Unsplash)", license: "Licença Unsplash", url: "https://unsplash.com/photos/hnysCJrPpkc" },
  { title: "Salad bowl, Kiedrich", author: "Gerda Arendt", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Salad_bowl,_Kiedrich.jpg" },
  { title: "Running in a park in Brussels - 2023", author: "European Commission (Christophe Licoppe)", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Running_in_a_park_in_Brussels_-_2023_-_P060598-420352.jpg" },
  { title: "Green smoothie bowl with berries and seeds", author: "Miscellaneous contributor", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Green_smoothie_bowl_with_berries_and_seeds.jpg" },
  { title: "Smashed Avocado on Sourdough Toast with Chai Latte", author: "Andy Li", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Smashed_Avocado_on_Sourdough_Toast_with_Chai_Latte_-_M%26S_cafe_2023-08-08.jpg" },
  { title: "Running in a park in Brussels (P060598-109033)", author: "European Commission (Christophe Licoppe)", license: "CC BY 4.0", url: "https://commons.wikimedia.org/w/index.php?curid=129712608" },
  { title: "Fresh Fruit Market", author: "rawpixel", license: "CC0", url: "https://www.rawpixel.com/image/5967158/fresh-fruit-market" },
  { title: "Cooking vegetables in a kitchen with a woman preparing food near a window", author: "Shixart1985", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Cooking_vegetables_in_a_kitchen_with_a_woman_preparing_food_near_a_window.jpg" },
  { title: "Fruit stalls at Ljubljana Central Market 02", author: "domdomegg", license: "CC BY 4.0", url: "https://commons.wikimedia.org/w/index.php?curid=45989212" },
] as const;
