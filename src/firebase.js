import { initiaizeApp, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCeyCb9hQsxkgc2CinT1fVHEuOAniJKjdY",
    authDomain: "todo-app-6bc9b.firebaseapp.com",
    projectId: "todo-app-6bc9b",
    storageBucket: "todo-app-6bc9b.appspot.com",
    messagingSenderId: "113059264106",
    appId: "1:113059264106:web:382dddbfc7d57c599ffc13",
    measurementId: "G-BDFERE161H"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export { db }
  