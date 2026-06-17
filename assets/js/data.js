/* EXEMPLO — camada de dados do cardápio (estática, sem backend).
   Hamburgueria fictícia criada como demo de vitrine. Conteúdo e preços ilustrativos. */

export const RESTAURANT = {
  name: "Exemplo",
  kind: "Hamburgueria artesanal",
  tagline: "Carne fresca na brasa, pão na chapa, molho que a gente faz.",
  story:
    "Moemos o blend todo dia (acém com fraldinha) e selamos na chapa de ferro a 230°C. Pães e molhos saem da nossa cozinha — nunca de pacote.",
  neighborhood: "Vila Madalena",
  phone: "(27) 99965-9720",
  phoneRaw: "27999659720",
  whatsapp: "5527999659720",
  email: "ola@exemplo.com.br",
  address: {
    line1: "Rua das Brasas, 187 — Vila Madalena",
    line2: "São Paulo — SP, 05432-010",
    mapsQuery: "Rua das Brasas 187 Vila Madalena Sao Paulo SP",
  },
  hours: [
    { d: "Terça a Quinta", h: "18h — 23h30" },
    { d: "Sexta e Sábado", h: "18h — 01h" },
    { d: "Domingo", h: "18h — 23h" },
    { d: "Segunda", h: "Fechado" },
  ],
  social: { instagram: "@exemplo.burger", instagramUrl: "https://instagram.com/exemplo.burger" },
};

/* Etiquetas funcionais: marcam o item, não decoram.
   icon = chave da lib de ícones (line). tone = cor semântica no CSS. */
export const TAGS = {
  "mais-pedido": { label: "Mais pedido", icon: "star", tone: "amber" },
  novo: { label: "Novo", icon: "flame", tone: "ember" },
  picante: { label: "Picante", icon: "flame", tone: "ember" },
  vegetariano: { label: "Vegetariano", icon: "leaf", tone: "green" },
  duplo: { label: "Duplo", icon: "burger", tone: "neutral" },
  chef: { label: "Do chef", icon: "chef", tone: "neutral" },
};

export const SECTIONS = [
  {
    id: "especiais",
    title: "Especiais da Casa",
    subtitle: "Os autorais que só existem aqui, montados na ordem certa.",
    icon: "flame",
    items: [
      {
        name: "Brasa Dupla",
        description:
          "Dois discos de blend 180g selados na chapa, cheddar maturado derretido entre as camadas, cebola caramelizada no fio de mel e maionese defumada da casa no pão brioche.",
        price: 42,
        tags: ["mais-pedido", "duplo", "chef"],
      },
      {
        name: "Bacon do Lenhador",
        description:
          "Blend 180g, fatias generosas de bacon artesanal curado, cheddar maturado, picles de cebola roxa e barbecue defumado da casa no pão brioche.",
        price: 39,
        tags: ["mais-pedido"],
      },
      {
        name: "Trufado da Vila",
        description:
          "Blend 180g, queijo gruyère derretido, cogumelos paris salteados na manteiga e maionese trufada, finalizado com rúcula no pão australiano.",
        price: 46,
        tags: ["chef"],
      },
      {
        name: "Costela Defumada",
        description:
          "Costela bovina desfiada e defumada por 12 horas, queijo prato, cebola crispy e molho chipotle suave no pão brioche.",
        price: 44,
        tags: ["novo"],
      },
      {
        name: "Fogo na Brasa",
        description:
          "Blend 180g, cheddar maturado, jalapeños frescos, pimenta-de-cheiro e molho sriracha da casa com toque de mel para equilibrar o ardido no pão brioche.",
        price: 40,
        tags: ["picante"],
      },
      {
        name: "Verde da Horta",
        description:
          "Hambúrguer de grão-de-bico e beterraba grelhado na chapa, queijo coalho dourado, tomate confitado e pesto de manjericão da casa no pão australiano.",
        price: 38,
        tags: ["vegetariano", "novo"],
      },
    ],
  },
  {
    id: "smash",
    title: "Smash & Clássicos",
    subtitle: "Disco fino esmagado na chapa quente, bordas crocantes e sabor direto.",
    icon: "burger",
    items: [
      {
        name: "Smash Clássico",
        description:
          "Dois discos smash de 90g esmagados na chapa, cheddar derretido, picles e maionese da casa no pão de batata macio.",
        price: 28,
        tags: ["mais-pedido"],
      },
      {
        name: "Smash Bacon",
        description:
          "Dois discos smash de 90g, cheddar duplo, bacon picado crocante e molho da casa no pão de batata.",
        price: 32,
        tags: ["duplo"],
      },
      {
        name: "Cheeseburger Raiz",
        description:
          "Disco smash de 90g, queijo prato, cebola fatiada na chapa, ketchup e mostarda no pão de hambúrguer tradicional.",
        price: 26,
        tags: [],
      },
      {
        name: "Smash Cebola Suja",
        description:
          "Dois discos smash de 90g grelhados sobre cebola fatiada que solta no disco, cheddar maturado e molho da casa no pão de batata.",
        price: 31,
        tags: ["chef"],
      },
      {
        name: "Smash Triplo",
        description:
          "Três discos smash de 90g empilhados, cheddar entre cada camada e maionese defumada no pão de batata reforçado.",
        price: 36,
        tags: ["duplo"],
      },
    ],
  },
  {
    id: "acompanhamentos",
    title: "Acompanhamentos",
    subtitle: "Para dividir na mesa ou guardar só para você.",
    icon: "fries",
    items: [
      {
        name: "Fritas Rústicas",
        description:
          "Batatas com casca cortadas à mão, fritas crocantes por fora e macias por dentro, com sal grosso e alecrim.",
        price: 19,
        tags: ["mais-pedido"],
      },
      {
        name: "Fritas do Lenhador",
        description: "Fritas rústicas cobertas com cheddar cremoso, bacon picado e cebolinha fresca.",
        price: 27,
        tags: ["chef"],
      },
      {
        name: "Onion Rings",
        description: "Anéis de cebola empanados na cerveja, dourados e crocantes, com molho barbecue da casa.",
        price: 24,
        tags: [],
      },
      {
        name: "Bolinhas de Costela",
        description:
          "Croquetes de costela defumada empanados na panko com recheio puxento, acompanha maionese chipotle.",
        price: 28,
        tags: ["novo"],
      },
      {
        name: "Mandioca na Manteiga",
        description: "Mandioca cozida no ponto e finalizada na manteiga de garrafa com sal e pimenta-do-reino.",
        price: 18,
        tags: ["vegetariano"],
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    subtitle: "Refri artesanal, chope gelado e milkshakes encorpados.",
    icon: "drink",
    items: [
      {
        name: "Refri Artesanal de Gengibre",
        description: "Refrigerante da casa de gengibre fresco com limão siciliano, levemente picante e bem gelado.",
        price: 14,
        tags: [],
      },
      {
        name: "Limonada Suíça de Manjericão",
        description: "Limonada batida com a casca e folhas de manjericão fresco, na medida certa de doce.",
        price: 12,
        tags: [],
      },
      {
        name: "Chope Pilsen",
        description: "Chope claro e refrescante, puxado na pressão com colarinho cremoso. Copo 300ml.",
        price: 16,
        tags: [],
      },
      {
        name: "IPA Artesanal",
        description: "Cerveja IPA de produtor local, amargor equilibrado e aroma cítrico. Garrafa 500ml.",
        price: 22,
        tags: ["chef"],
      },
      {
        name: "Milkshake de Ovomaltine",
        description:
          "Sorvete de baunilha batido cremoso com Ovomaltine crocante e raspas de chocolate por cima. Copo 400ml.",
        price: 26,
        tags: ["mais-pedido"],
      },
      {
        name: "Milkshake de Doce de Leite",
        description: "Sorvete batido com doce de leite artesanal e flor de sal, finalizado com chantilly. Copo 400ml.",
        price: 27,
        tags: ["novo"],
      },
    ],
  },
  {
    id: "sobremesas",
    title: "Sobremesas",
    subtitle: "O final doce que pede mais uma colher.",
    icon: "iceCream",
    items: [
      {
        name: "Brownie na Chapa",
        description:
          "Brownie de chocolate meio amargo aquecido na chapa, bola de sorvete de creme e calda quente de chocolate.",
        price: 24,
        tags: ["mais-pedido"],
      },
      {
        name: "Petit Gâteau de Doce de Leite",
        description: "Bolinho quente com recheio de doce de leite que escorre, acompanha sorvete de baunilha.",
        price: 26,
        tags: ["chef"],
      },
      {
        name: "Cheesecake de Frutas Vermelhas",
        description: "Fatia de cheesecake cremoso sobre base crocante, coberta com calda de frutas vermelhas da casa.",
        price: 22,
        tags: [],
      },
      {
        name: "Cookie Recheado",
        description: "Cookie grande assado na hora, casquinha crocante e centro mole de chocolate ao leite. Serve quente.",
        price: 16,
        tags: ["novo"],
      },
    ],
  },
];

export const COMBOS = [
  {
    name: "Combo Brasa",
    includes: ["Brasa Dupla", "Fritas Rústicas", "Refri Artesanal de Gengibre"],
    price: 69,
    save: 6,
    note: "O autoral campeão com fritas crocantes e refri da casa.",
  },
  {
    name: "Combo Smash do Dia",
    includes: ["Smash Bacon", "Fritas Rústicas", "Chope Pilsen"],
    price: 59,
    save: 8,
    note: "Smash de bordas crocantes, fritas e chope gelado.",
  },
  {
    name: "Combo a Dois",
    includes: ["2× Smash Clássico", "Fritas do Lenhador", "2× Limonada Suíça de Manjericão"],
    price: 89,
    save: 18,
    note: "Para dividir: dois smash, fritas com cheddar e bacon e duas limonadas.",
  },
];

export const HIGHLIGHTS = [
  {
    title: "Blend moído todo dia",
    text: "Acém com fraldinha moídos na casa pela manhã e selados na chapa de ferro a 230°C.",
    icon: "flame",
  },
  {
    title: "Pão e molho da casa",
    text: "Brioche assado por padaria parceira do bairro e molhos preparados na nossa cozinha, nunca de pacote.",
    icon: "leaf",
  },
  {
    title: "Entrega rápida e quente",
    text: "Frota própria e embalagem que mantém o pão firme e a carne no ponto até a sua porta.",
    icon: "scooter",
  },
];

export const INFO = {
  delivery:
    "Entrega própria em até 45 minutos para a Vila Madalena e bairros vizinhos, ou retire no balcão em 20 minutos. Pedidos pelo WhatsApp.",
  payment: ["Pix", "Crédito", "Débito", "Dinheiro", "Vale-refeição"],
};
