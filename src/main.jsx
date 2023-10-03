import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_-_T9Fp4zegx1PnoT70Ymcr8sl1Ucix4",
  authDomain: "cif-computacion.firebaseapp.com",
  projectId: "cif-computacion",
  storageBucket: "cif-computacion.appspot.com",
  messagingSenderId: "854978281669",
  appId: "1:854978281669:web:5d0acd0d0d99b90575b0ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;



ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
