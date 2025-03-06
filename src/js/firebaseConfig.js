import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBK7bV1tQ89Fv9zBgzVTrXpYw7X_e8_wt4",
    authDomain: "tasks-workshop-50703.firebaseapp.com",
    projectId: "tasks-workshop-50703",
    storageBucket: "tasks-workshop-50703.firebasestorage.app",
    messagingSenderId: "420550030677",
    appId: "1:420550030677:web:4f313a128f21b573536bdc"
  };

  const app = initializeApp(firebaseConfig); 
  export const database = getFirestore(app)
  export default app; 

  