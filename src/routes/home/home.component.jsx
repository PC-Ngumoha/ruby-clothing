import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

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
    "title": "Womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "Mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  },
  {
    "id": 6,
    "title": "Womens-African",
    "imageUrl": "https://i.ibb.co/VHmjXJR/pexels-hamid-tajik-10919896.jpg"
  },
  {
    "id": 7,
    "title": "Mens-African",
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
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
