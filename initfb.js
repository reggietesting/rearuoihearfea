
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAehwtynecd70N5dFthB26yV3WrL4F6BF4",
    authDomain: "pokcodeorg.firebaseapp.com",
    databaseURL: "https://pokcodeorg-default-rtdb.firebaseio.com",
    projectId: "pokcodeorg",
    storageBucket: "pokcodeorg.appspot.com",
    messagingSenderId: "166029833681",
    appId: "1:166029833681:web:839e7d3277a92190e25cf0",
    measurementId: "G-4PMFRFFPLW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);