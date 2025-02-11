// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkZbEohyJMRyt4Hi8JndnYTUnCvzQteV4",
    authDomain: "vulnops.firebaseapp.com",
    projectId: "vulnops",
    storageBucket: "vulnops.firebasestorage.app",
    messagingSenderId: "1091375471252",
    appId: "1:1091375471252:web:daa633e4e207060a70b281",
    measurementId: "G-MS53RT7F4F"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
