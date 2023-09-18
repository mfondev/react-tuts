// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDltYr2WtrSOCOcpSeguak-GQzKQ5NgGMU',
  authDomain: 'first-react-auth-598ec.firebaseapp.com',
  projectId: 'first-react-auth-598ec',
  storageBucket: 'first-react-auth-598ec.appspot.com',
  messagingSenderId: '513043387737',
  appId: '1:513043387737:web:eca590929ae2f3a80ee848',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
