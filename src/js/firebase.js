import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyANl0N12680INoE7CdqQ5QJCRCAnlO4vCA',
  authDomain: 'xxx-restaurant.firebaseapp.com',
  projectId: 'xxx-restaurant',
  storageBucket: 'xxx-restaurant.appspot.com',
  messagingSenderId: '276034716154',
  appId: '1:276034716154:web:df7d0b258e6a1e29742443',
  measurementId: 'G-N8BKCR8D66'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export { auth }
