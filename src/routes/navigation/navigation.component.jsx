import { Fragment, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

// Importing the SVG logo
import { ReactComponent as RubyLogo } from '../../assets/ruby-clothing.svg';

// Import CSS
import './navigation.style.scss';

const Navigation = () => {
  // Handles click state
  // const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  // const [ clicked, setClicked ] = useState(false); 

  // const clickChangeHandler = () => { setClicked(!clicked) };
  // const updateWindowWidth = () => { setWindowWidth(window.innerWidth) };

  // useEffect(() => {
  //   window.addEventListener('resize', updateWindowWidth);
  //   if (windowWidth > 600) {
  //     setClicked(true);
  //   } else {
  //     setClicked(false);
  //   }
  //   // return () => { window.removeEventListener('resize', updateWindowWidth) };
  // }, [  windowWidth ]);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/" >
          <RubyLogo className="logo" />

          <a className="btn-toggle">
            &#9776;
          </a>
        </Link>
        <div className= "nav-links-container" >
          <Link className="nav-link" to="/shop" >
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in" >
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
