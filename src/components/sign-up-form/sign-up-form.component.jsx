import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserInDatabase
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-up-form.style.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {

  // form field state values
  const [ formFields, setFormFields ] = useState( defaultFormFields );
  const { displayName, email, password, confirmPassword } = formFields;


  // Handles change in the content of the formfields as the user
  // types.
  const handleChange = ( evt ) => {
    const { name, value } = evt.target;
    setFormFields( { ...formFields, [ name ]: value } );
  };

  // reset all formfields
  const resetFormFields = () => {
    setFormFields( defaultFormFields );
  }

  // Handles the 'submit' of user data on sign-up
  const handleSubmit = async ( evt ) => {
    evt.preventDefault();

    if ( password === confirmPassword ) {
      try {
        const { user } =
        await createAuthUserWithEmailAndPassword( email, password );
        await createUserInDatabase( user, { displayName } );
        resetFormFields();
      } catch ( err ) {
        switch( err.code ) {
          case 'auth/email-already-in-use':
            alert('Sorry, but this email is already in use');
            break;
          default:
            console.log('An unexpected error occurred: \n', err.message);
        }
      }
    } else {
      alert('Your passwords do not match');
      return;
    }
  };

  return (
    <div className="sign-up-container">
      <h2 > Don't have an account ? </h2>
      <span> Sign up with email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          type="text"
          required
          onChange={ handleChange }
          name="displayName"
          value={ displayName } />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={ handleChange }
          name="email"
          value={ email } />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={ handleChange }
          name="password"
          value={ password } />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={ handleChange }
          name="confirmPassword"
          value={ confirmPassword } />

        <Button type="submit"> Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;