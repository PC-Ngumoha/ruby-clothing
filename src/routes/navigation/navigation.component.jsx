import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.util";
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartDisplayed } from "../../store/cart/cart.selector";

// Importing the SVG logo
import { ReactComponent as RubyLogo } from '../../assets/ruby-clothing.svg';

// Import CSS
import {
  NavigationContainer,
  NavLink,
  NavLinks
} from './navigation.style';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const displayed = useSelector(selectCartDisplayed);
  
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
