import { Outlet } from "react-router-dom";
import CategoryMenu from "../../components/category-menu/category-menu.component";

const Home = () => {

  const categories = [
  {
    "id": 1,
    "title": "Hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "Jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "Women's (casual)",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "Men's (casual)",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  },
  {
    "id": 6,
    "title": "Women's (african)",
    "imageUrl": "https://i.ibb.co/VHmjXJR/pexels-hamid-tajik-10919896.jpg"
  },
  {
    "id": 7,
    "title": "Men's (african)",
    "imageUrl": "https://i.ibb.co/v1Jfvyg/nigerian-man.jpg"
  },
  {
    "id": 8,
    "title": "Bags",
    "imageUrl": "https://i.ibb.co/5FYRhjL/bags.jpg"
  }
];


  return (
    <div>
      <Outlet />
      <CategoryMenu categories={categories} />
    </div>
  );
}

export default Home;
