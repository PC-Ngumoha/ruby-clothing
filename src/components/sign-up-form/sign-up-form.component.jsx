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

  const [ formFields, setFormFields ] = useState( defaultFormFields );
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = ( evt ) => {
    const { name, value } = evt.target;
    setFormFields( { ...formFields, [ name ]: value } );
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async ( evt ) => {
    evt.preventDefault();

    if ( password === confirmPassword ) {
      try {
        const { user } =
        await createAuthUserWithEmailAndPassword( email, password );
        await createUserInDatabase( user, { displayName } );
        resetFormFields();
      } catch ( err ) {
        if ( err.code === 'auth/email-already-in-use' ) {
          alert('Cannot create a new user with existing email');
        } else {
          console.log('An error occurred: \n', err.message);
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