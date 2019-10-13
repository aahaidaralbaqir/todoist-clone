import firebase from "firebase/app";
import 'firebase/firestore';
const firebaseConfig = firebase.initializeApp({
   apiKey: "AIzaSyDhi-lT4NoNfw63TdvlWawoG8q51Hr3JX4",
   authDomain: "todoist-tut-8a504.firebaseapp.com",
   databaseURL: "https://todoist-tut-8a504.firebaseio.com",
   projectId: "todoist-tut-8a504",
   storageBucket: "todoist-tut-8a504.appspot.com",
   messagingSenderId: "250958929114",
   appId: "1:250958929114:web:6b66dc775bf5bbb2"
});

export {firebaseConfig as firebase};