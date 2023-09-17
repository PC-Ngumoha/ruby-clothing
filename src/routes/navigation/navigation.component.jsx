import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

// Importing the SVG logo
import { ReactComponent as RubyLogo } from '../../assets/ruby-clothing.svg';

// Import CSS
import './navigation.style.scss';

const Navigation = () => {
  const { currentUser } = useContext( UserContext );
  // console.log( currentUser );

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
          {
            currentUser ? 
            (
              <span className="nav-link" onClick={ signOutUser }>
                SIGN OUT
              </span>
            ) : 
            (
              <Link className="nav-link" to="/auth" >
                SIGN IN
              </Link>
            )
          }
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
