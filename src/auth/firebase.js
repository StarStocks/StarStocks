// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBTiaf_3zAOD2cQLTRmrasfwwYAEFM2_xc",
    authDomain: "star-stocks.firebaseapp.com",
    projectId: "star-stocks",
    storageBucket: "star-stocks.appspot.com",
    messagingSenderId: "355718848183",
    appId: "1:355718848183:web:bacea989cc122fe3123732",
    measurementId: "G-6V49EDX0DQ"
  };
  
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default app;