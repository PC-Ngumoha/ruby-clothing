/**
 * firebase.util.js
 * 
 * contains configuration code that enables us work with firebase in the
 * rest of the app.
 */
import { initializeApp } from 'firebase/app';

import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDm5pO6sdSYHRwOdaJJDmKCTfn2CqVg5Kc",
  authDomain: "ruby-clothing-db-bea4d.firebaseapp.com",
  projectId: "ruby-clothing-db-bea4d",
  storageBucket: "ruby-clothing-db-bea4d.appspot.com",
  messagingSenderId: "643062257197",
  appId: "1:643062257197:web:ba6c92e8d59bfb2a74caa4"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => 
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider);

// Initialize db
const db = getFirestore();

export const createUserInDatabase = async ( userAuth, extraInfo ) => {
  if ( !userAuth ) return;

  const userRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc( userRef );

  if ( !userSnapshot.exists() ) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc( userRef, {
        displayName,
        email,
        createdAt,
        ...extraInfo
      });
    } catch( error ) {
      console.log(
        'Could not create user for the following reason:\n',
        error.message
      );
    }
  }

  return userRef;
};

export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
  if ( !email || !password ) return;
  return await createUserWithEmailAndPassword( auth, email, password );
}

export const signInAuthUserWithEmailAndPassword = async ( email, password ) => {
  if ( !email || !password ) return;
  return await signInWithEmailAndPassword( auth, email, password );
}
