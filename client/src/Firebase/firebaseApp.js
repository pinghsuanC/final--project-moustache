import firebaseConfig from "./firebase_config";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
