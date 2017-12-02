import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyA2kMWKKF-QSOB0oTxyeb7zoHgo6ZUVyik",
  authDomain: "groceryapp-f69fc.firebaseapp.com",
  databaseURL: "https://groceryapp-f69fc.firebaseio.com",
  projectId: "groceryapp-f69fc",
  storageBucket: "groceryapp-f69fc.appspot.com",
  messagingSenderId: "592881313811"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
