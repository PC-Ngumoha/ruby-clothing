import {
  signInWithGooglePopup,
  createUserInDatabase
} from '../../utils/firebase/firebase.util';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response);
    createUserInDatabase( user );
  };

  return (
    <div>
      <h1> I'm the SignIn Page </h1>
      <button onClick={logGoogleUser} >
        Click to sign in with google
      </button>
    </div>
  );
};

export default SignIn;
