import { useState } from 'react';
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_CLASSES } from '../button/button.component';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.util';

import {
  SignInContainer,
  FormHeader,
  Buttons
} from './sign-in-form.style.jsx';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  // Update form fields state as the user types into
  // each of the fields.
  const handleChange = ( evt ) => {
    const { name, value } = evt.target;
    setFormFields({ ...formFields, [ name ]: value });
  };

  // resets form fields on completion of sign-in
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Handles regular sign-in
  const handleSubmit = async ( evt ) => {
    evt.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch ( err ) {
      switch ( err.code ) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('Cannot find user for given email');
          break;
        default:
          console.log( err.message );
      }  
    }
  };

  // Handles google social sign-in
  const signInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <FormHeader> Already have an account ? </FormHeader>
      <span> sign in with your email and password </span>
      <form onSubmit={ handleSubmit }>
        <FormInput 
          label="email"
          type="email"
          required
          name="email"
          value={ email }
          onChange={ handleChange }
        />

        <FormInput 
          label="password"
          type="password"
          required
          name="password"
          value={ password }
          onChange={ handleChange }
        />

        <Buttons>
          <Button type="submit" > Sign In </Button>
          <Button
            type="button"
            buttonType={ BUTTON_CLASSES.google }
            onClick={ signInWithGoogle } >
            Google Sign In
          </Button>
        </Buttons>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;