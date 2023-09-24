import { createContext, useEffect, useReducer } from "react";

import { onAuthStateChangedListener, createUserInDatabase } from "../utils/firebase/firebase.util";
import { createAction } from "../utils/reducer/reducer.util";

// Manages user context.
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});


export const USER_ACTIONS = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const userReducer = (state, action) => {
  console.log('Dispatched');
  console.log(action);
  const { type, payload } = action;

  switch ( type ) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      throw new Error(`Unhandled type ${ type } in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null
};

export const UserProvider = ({ children }) => {
  const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE)
  console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch(
      createAction(
        USER_ACTIONS.SET_CURRENT_USER,
        user
      )
    );
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(( user ) => {
      if ( user ) {
        createUserInDatabase(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={ value } >{ children }</UserContext.Provider>
};