interface Coffee {
  id: number;
  title: string;
  content: string;
  price: number;
  categories: string[];
  image: string;
}

export const coffees: Coffee[] = [
  {
    id: 1,
    title: "Expresso Tradicional",
    content: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    categories: ["tradicional"],
    image: "expresso",
  },
  {
    id: 2,
    title: "Expresso Americano",
    content: "Expresso diluído, menos intenso que o tradicional",
    categories: ["tradicional"],
    price: 9.9,
    image: "americano",
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    content: "Café expresso tradicional com espuma cremosa",
    categories: ["tradicional"],
    price: 9.9,
    image: "expresso-cremoso",
  },
  {
    id: 4,
    title: "Café com Leite",
    content: "Meio a meio de expresso tradicional com leite vaporizado",
    categories: ["tradicional", "com leite"],
    price: 9.9,
    image: "cafe-com-leite",
  },
  {
    id: 5,
    title: "Expresso Gelado",
    content: "Bebida preparada com café expresso e cubos de gelo",
    categories: ["tradicional", "gelado"],
    price: 9.9,
    image: "cafe-gelado",
  },
  {
    id: 6,
    title: "Latte",
    content: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    categories: ["tradicional", "com leite"],
    price: 9.9,
    image: "latte",
  },
  {
    id: 7,
    title: "Capuccino",
    content: "Bebida com canela feita de doses iguais de café, leite e espuma",
    categories: ["tradicional", "com leite"],
    price: 9.9,
    image: "capuccino",
  },
  {
    id: 8,
    title: "Macchiato",
    content: "Café expresso misturado com um pouco de leite quente e espuma",
    categories: ["tradicional", "com leite"],
    price: 9.9,
    image: "macchiato",
  },
  {
    id: 9,
    title: "Chocolate Quente",
    content: "Bebida feita com chocolate dissolvido no leite quente e café",
    categories: ["especial", "com leite"],
    price: 9.9,
    image: "chocolate-quente",
  },
  {
    id: 10,
    title: "Mocaccino",
    content: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    categories: ["tradicional", "com leite"],
    image: "mocaccino",
  },
  {
    id: 11,
    title: "Cubano",
    content: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    categories: ["especial", "alcoólico", "gelado"],
    price: 9.9,
    image: "cubano",
  },
  {
    id: 12,
    title: "Havaiano",
    content: "Bebida adocicada preparada com café e leite de coco",
    categories: ["especial"],
    price: 9.9,
    image: "havaiano",
  },
  {
    id: 13,
    title: "Árabe",
    content: "Bebida preparada com grãos de café árabe e especiarias",
    categories: ["especial"],
    price: 9.9,
    image: "arabe",
  },
  {
    id: 14,
    title: "Irlandês",
    content: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    categories: ["especial", "alcoólico"],
    price: 9.9,
    image: "irlandes",
  },
];
