import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

// Importing the SVG logo
import { ReactComponent as RubyLogo } from '../../assets/ruby-clothing.svg';

// Import CSS
import './navigation.style.scss';

const Navigation = () => {
  const { currentUser } = useContext( UserContext );
  const { displayed } = useContext(CartContext);
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
          <CartIcon />
        </div>
        {
          displayed && <CartDropdown />
        }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
