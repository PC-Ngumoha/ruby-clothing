import CategoryMenu from "./components/category-menu/category-menu.component";

const App = () => {

  const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens (casual)",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens (casual)",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  },
  {
    "id": 6,
    "title": "womens (african)",
    "imageUrl": "https://i.ibb.co/VHmjXJR/pexels-hamid-tajik-10919896.jpg"
  },
  {
    "id": 7,
    "title": "mens (african)",
    "imageUrl": "https://i.ibb.co/v1Jfvyg/nigerian-man.jpg"
  },
  {
    "id": 8,
    "title": "bags",
    "imageUrl": "https://i.ibb.co/5FYRhjL/bags.jpg"
  }
];


  return (
    <CategoryMenu categories={categories} />
  );
}

export default App;
