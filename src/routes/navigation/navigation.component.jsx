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
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks
} from './navigation.style';

const Navigation = () => {
  const { currentUser } = useContext( UserContext );
  const { displayed } = useContext(CartContext);
  // console.log( currentUser );
  
  return (
    <Fragment>
      <NavigationContainer>
        <NavLink to="/" >
          <RubyLogo className="logo" />
        </NavLink>
        <NavLinks >
          <NavLink to="/shop" >
            SHOP
          </NavLink>
          {
            currentUser ? 
            (
              <NavLink as="span" onClick={ signOutUser }>
                SIGN OUT
              </NavLink>
            ) : 
            (
              <NavLink to="/auth" >
                SIGN IN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {
          displayed && <CartDropdown />
        }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
