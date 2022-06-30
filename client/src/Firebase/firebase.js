// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvjIEHu5t6VY7zQu1SkFCbKtnVM6RsYdU",
  authDomain: "rental-12a2a.firebaseapp.com",
  databaseURL: "gs://rental-12a2a.appspot.com",
  projectId: "rental-12a2a",
  storageBucket: "rental-12a2a.appspot.com",
  messagingSenderId: "751108292881",
  appId: "1:751108292881:web:107fba529e3314b59a8cb0"
};

firebase.initializeApp(firebaseConfig)

// Initialize Firebase(
const storage = firebase.storage();
export { storage, firebase as default };