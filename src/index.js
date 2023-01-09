import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBt0FCtFVozj6qseqqwodpkpvtI7h1N3Hw",
  authDomain: "jpcustoms-727e0.firebaseapp.com",
  projectId: "jpcustoms-727e0",
  storageBucket: "jpcustoms-727e0.appspot.com",
  messagingSenderId: "47342082586",
  appId: "1:47342082586:web:c08ba68802db9b39934fa3"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

