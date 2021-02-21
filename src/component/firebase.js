import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  // export const firebaseDb = fireDB.database().ref();
 
  export default firebase;

  // export default firebase.database().ref();
