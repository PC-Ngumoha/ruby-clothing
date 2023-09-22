import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.style';

const Directory = () => {

  const categories = [
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
      "route": 'shop/hats'
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
      "route": 'shop/jackets'
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
      "route": 'shop/sneakers'
    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
      "route": 'shop/womens'
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
      "route": 'shop/mens'
    },
    {
      "id": 6,
      "title": "Womens-African",
      "imageUrl": "https://i.ibb.co/VHmjXJR/pexels-hamid-tajik-10919896.jpg",
      "route": 'shop/womens-african'
    },
    {
      "id": 7,
      "title": "Mens-African",
      "imageUrl": "https://i.ibb.co/v1Jfvyg/nigerian-man.jpg",
      "route": 'shop/mens-african'
    },
    {
      "id": 8,
      "title": "Bags",
      "imageUrl": "https://i.ibb.co/5FYRhjL/bags.jpg",
      "route": 'shop/'
    }
  ];

  return (
    <DirectoryContainer>
      {
        categories.map((category) => (
          <DirectoryItem 
            key={ category.id } 
            category={ category } /> 
        ))
      }  
    </DirectoryContainer>
  );
};

export default Directory;