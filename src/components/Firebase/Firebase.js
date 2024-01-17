
import 'firebase/firestore';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyBcXQAJhP2lXqb5WHSXLhIIj9IFH9b0l8I",
    authDomain: "raseindia-1cf4c.firebaseapp.com",
    projectId: "raseindia-1cf4c",
    storageBucket: "raseindia-1cf4c.appspot.com",
    messagingSenderId: "878751477386",
    appId: "1:878751477386:web:be3c248c1ffaff47ec0773",
    measurementId: "G-ESYR65ECQC"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
