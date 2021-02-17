import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBr5S1ujZBVPW9S3C2UlHRgi81SL4TQ5B8",
    authDomain: "linkedin-ego.firebaseapp.com",
    projectId: "linkedin-ego",
    storageBucket: "linkedin-ego.appspot.com",
    messagingSenderId: "953132165633",
    appId: "1:953132165633:web:40185e334d8d42a7b5ee00"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };