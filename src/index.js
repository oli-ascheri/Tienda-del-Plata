import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ySVmUFORRy8rbIZ-9rH29Pm58fcCoSg",
  authDomain: "coderhouse-ecommerce-52cf6.firebaseapp.com",
  projectId: "coderhouse-ecommerce-52cf6",
  storageBucket: "coderhouse-ecommerce-52cf6.appspot.com",
  messagingSenderId: "826188329358",
  appId: "1:826188329358:web:129fbbf6def36c651df4df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode> 
    <App />
//   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
