const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16,
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
      },
    ],
  },
  {
    title: 'Jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
    ],
  },
  {
    title: 'Womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
      },
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ],
  },
  {
    title: 'Womens-African',
    items: [
      {
        id: 36,
        name: 'Beauty Blue',
        imageUrl: 'https://i.ibb.co/54bmKbf/beauty-blouse.jpg',
        price: 30,
      },
      {
        id: 37,
        name: 'Hot Mistress',
        imageUrl: 'https://i.ibb.co/C14f0jz/hot-mistress.jpg',
        price: 25,
      },
      {
        id: 38,
        name: 'Culture Flair',
        imageUrl: 'https://i.ibb.co/mcZBZ8v/culture-flair.jpg',
        price: 27,
      },
      {
        id: 39,
        name: 'Yoruba Gele',
        imageUrl: 'https://i.ibb.co/fpspR3Q/Yoruba-Gele.jpg',
        price: 17,
      },
      {
        id: 40,
        name: 'Colorful Gown',
        imageUrl: 'https://i.ibb.co/9wmk9w8/colorful-gown.jpg',
        price: 40,
      },
      {
        id: 41,
        name: 'Igbo Scarf',
        imageUrl: 'https://i.ibb.co/4mMpgzx/igbo-scarf.jpg',
        price: 25,
      }
    ]
  },
  {
    title: 'Mens-African',
    items: [
      {
        id: 42,
        name: 'Baban Rigga',
        imageUrl: 'https://i.ibb.co/nwsqCZ7/baban-rigga.jpg',
        price: 22,
      },
      {
        id: 43,
        name: 'Third Man',
        imageUrl: 'https://i.ibb.co/5WcsC4F/pexels-thirdman-6109441.jpg',
        price: 20,
      },
      {
        id: 44,
        name: 'Ankara',
        imageUrl: 'https://i.ibb.co/F5fy4bS/ankara.jpg',
        price: 16,
      },
      {
        id: 45,
        name: 'Isi Agu',
        imageUrl: 'https://i.ibb.co/hZNXhDW/isiagu.jpg',
        price: 25,
      },
      {
        id: 46,
        name: 'Yoruba Buba',
        imageUrl: 'https://i.ibb.co/nnrJz7y/Yoruba-Mens.jpg',
        price: 25,
      },
      {
        id: 47,
        name: 'Senator',
        imageUrl: 'https://i.ibb.co/3WFhFR6/senator.jpg',
        price: 25,
      }
    ]
  },
  {
    title: 'Bags',
    items: [
      {
        id: 48,
        name: 'Hike Bag',
        imageUrl: 'https://i.ibb.co/b1GYrq7/hike-bag.jpg',
        price: 25,
      },
      {
        id: 49,
        name: 'Safe Journey',
        imageUrl: 'https://i.ibb.co/VN9QCKg/safe-journey.jpg',
        price: 28,
      },
      {
        id: 50,
        name: 'Hike Traveler',
        imageUrl: 'https://i.ibb.co/0mD4CSM/hike-traveler.jpg',
        price: 25,
      },
      {
        id: 51,
        name: 'Lilibag',
        imageUrl: 'https://i.ibb.co/xMm8RX8/lilibag.jpg',
        price: 25,
      },
      {
        id: 52,
        name: 'Baggy Brown',
        imageUrl: 'https://i.ibb.co/XsFQq36/baggy-brown.jpg',
        price: 17,
      },
      {
        id: 53,
        name: 'Keepers',
        imageUrl: 'https://i.ibb.co/xhNqJz8/keepers.jpg',
        price: 25,
      },
    ]
  }
];

export default SHOP_DATA;
