import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAiXEfqQllt6qNppEcw9UxrmxaSbQAdFt0",
  authDomain: "whatsapp-by-mak.firebaseapp.com",
  databaseURL: "https://whatsapp-by-mak.firebaseio.com",
  projectId: "whatsapp-by-mak",
  storageBucket: "whatsapp-by-mak.appspot.com",
  messagingSenderId: "656692338083",
  appId: "1:656692338083:web:0b5635856b3f1b1af70e16",
  measurementId: "G-DNX1HQKTS1"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };