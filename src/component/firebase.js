import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBkMEbLoBF6qreDwMDBvPc1HLHe3s8h5mk",
    authDomain: "people-db-dd1ac.firebaseapp.com",
    projectId: "people-db-dd1ac",
    storageBucket: "people-db-dd1ac.appspot.com",
    messagingSenderId: "354867158737",
    appId: "1:354867158737:web:d97b00e98865231c15eff0"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  // export const firebaseDb = fireDB.database().ref();
 
  export default firebase;

  // export default firebase.database().ref();