import firebase from "firebase";
// import "firebase/storage";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh7aPkf-OlzNd0bR3P9AjoLKlIez2PS4E",
  authDomain: "krokoclock.firebaseapp.com",
  projectId: "krokoclock",
  storageBucket: "krokoclock.appspot.com",
  messagingSenderId: "102570065758",
  appId: "1:102570065758:web:b9f792ed36299dcd1e99cf",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = app.storage();
const projectFirestore = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, app };
