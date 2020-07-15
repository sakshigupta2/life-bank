import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA-xYZJmNxOmg3Odj1GA9_fytCKq-TLzt8",
  authDomain: "life-saver-bank-46100.firebaseapp.com",
  databaseURL: "https://life-saver-bank-46100.firebaseio.com",
  projectId: "life-saver-bank-46100",
  storageBucket: "life-saver-bank-46100.appspot.com",
  messagingSenderId: "1052782253559",
  appId: "1:1052782253559:web:7183fa422f62350a368af2"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
