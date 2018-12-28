import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBDJLR-DaeMzGhHvTCN6oHwi9f7F4k4ahM",
    authDomain: "bookfire-5066b.firebaseapp.com",
    databaseURL: "https://bookfire-5066b.firebaseio.com",
    projectId: "bookfire-5066b",
    storageBucket: "bookfire-5066b.appspot.com",
    messagingSenderId: "1006371883541"
  };
  firebase.initializeApp(config);

export default firebase;