import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

// Importing the SVG logo
import { ReactComponent as RubyLogo } from '../../assets/ruby-clothing.svg';

// Import CSS
import './navigation.style.scss';

const Navigation = () => {
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
