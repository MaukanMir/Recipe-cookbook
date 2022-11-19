import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQXtvZaIiDtE-4HigtnTw4JdytONqt1dE",
    authDomain: "cooking-ninja-site-e567c.firebaseapp.com",
    projectId: "cooking-ninja-site-e567c",
    storageBucket: "cooking-ninja-site-e567c.appspot.com",
    messagingSenderId: "98801344977",
    appId: "1:98801344977:web:6207707cf2c086f99280f0"
  };

  //Init firebase

firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();


//Export files

export {projectFirestore}