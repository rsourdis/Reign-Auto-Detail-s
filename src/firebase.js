import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDG81ZS4YNQkkLltuJS452GP3gNXuDyQuw",
  authDomain: "reigndetailing.firebaseapp.com",
  databaseURL: "https://reigndetailing.firebaseio.com",
  projectId: "reigndetailing",
  storageBucket: "reigndetailing.appspot.com",
  messagingSenderId: "523227379376",
  appId: "1:523227379376:web:bc2356c0ef2c2d4a2ded75",
  measurementId: "G-SXSLFMHZJM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth};