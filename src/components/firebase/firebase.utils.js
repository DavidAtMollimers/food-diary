import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import SignIn from '../sign-in/sign-in.component';

const config = {
    apiKey: "AIzaSyAER1ILPlSxNJ4-WP4TKrDp3_9kbcqsmJs",
    authDomain: "food-diary-4ca9f.firebaseapp.com",
    projectId: "food-diary-4ca9f",
    storageBucket: "food-diary-4ca9f.appspot.com",
    messagingSenderId: "563495003874",
    appId: "1:563495003874:web:483ab1c4c311a3e04ca0bb",
    measurementId: "G-JJEVLGQNT2"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;