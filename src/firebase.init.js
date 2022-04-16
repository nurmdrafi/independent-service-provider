import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  /* apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId, */

  apiKey: "AIzaSyAnagFV2Mo4EjjTG9hjxw8k5AbJ7AOmK9g",
  authDomain: "rock-fitness.firebaseapp.com",
  projectId: "rock-fitness",
  storageBucket: "rock-fitness.appspot.com",
  messagingSenderId: "1029953566227",
  appId: "1:1029953566227:web:2aa9360128ed48332f71e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
