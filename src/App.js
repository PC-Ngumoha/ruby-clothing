const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Sneakers'
    },
    {
      id: 4,
      title: 'Casual (Womens)'
    },
    {
      id: 5,
      title: 'Casual (Mens)'
    },
    {
      id: 6,
      title: 'African Traditional (Womens)'
    },
    {
      id: 7,
      title: 'African Traditional (Mens)'
    },
    {
      id: 8,
      title: 'Corporate (Womens)'
    },
    {
      id: 9,
      title: 'Corporate (Mens)'
    }
  ];

  return (
    <div className="categories-container">
      {
        categories.map(({ id, title }) => (
          <div className="category-container" key={ id }>
            <div className="category-body-container">
            {/* <img /> */}
            <h2> { title } </h2>
            <p> Shop Now </p>
            </div>
          </div>
        ))
      }  
    </div>
  );
}

export default App;
