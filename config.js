import * as firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDuriVC6gYzxOndgcMkexMMywdnZoDoFvk",
  authDomain: "wireless-expert-11da6.firebaseapp.com",
  databaseURL: "https://wireless-expert-11da6-default-rtdb.firebaseio.com",
  projectId: "wireless-expert-11da6",
  storageBucket: "wireless-expert-11da6.appspot.com",
  messagingSenderId: "427864129344",
  appId: "1:427864129344:web:1e91604558afac03c384a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();