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
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
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

// Setup for google auth functionality.
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Sets up authentication tracking
export const auth = getAuth();

// Helper function
// Enables google sign-in using the popup method
export const signInWithGooglePopup = () => 
  signInWithPopup(auth, googleProvider);

// Helper function
// Enables google sign-in using the redirect method
export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider);

// Initialize db
const db = getFirestore();

// Helper function.
// Helps us to create a collection on firestore and add documents to it.
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  // Pushes it to firebase
  await batch.commit();
  console.log('Upload Done');
};

// Helper function
// retrieves the objects in the 'categories' collection
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[ title.toLowerCase() ] = items;
    return acc;
  }, {});

  return categoryMap;
};

// Helper function
// Helps create a new user in firestore on authentication
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

// Helper function
// Helps us create a new authenticated user with email and password.
export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
  if ( !email || !password ) return;
  return await createUserWithEmailAndPassword( auth, email, password );
}

// Helper function
// Helps us sign in an already authenticated user using email and password.
export const signInAuthUserWithEmailAndPassword = async ( email, password ) => {
  if ( !email || !password ) return;
  return await signInWithEmailAndPassword( auth, email, password );
}

// Helper function
// Signs out already authenticated user
export const signOutUser = async () => await signOut(auth);

// Stream listener
// Listens for changes in the authentication state of the user.
export const onAuthStateChangedListener = ( cb ) => onAuthStateChanged( auth, cb );
