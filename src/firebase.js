import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2OgD0ogf-5TdOo3rOFJ0riuU2g10CbTQ",
    authDomain: "telegram-clone-319d3.firebaseapp.com",
    databaseURL: "https://telegram-clone-319d3.firebaseio.com",
    projectId: "telegram-clone-319d3",
    storageBucket: "telegram-clone-319d3.appspot.com",
    messagingSenderId: "328076821762",
    appId: "1:328076821762:web:6ee42ced0e2389817d2e1b",
    measurementId: "G-GFZ59EPEYC"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
