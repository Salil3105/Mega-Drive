import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAC_aYy9XIp7Dw1rKJeFNns-M8vku4Q-_o",
  authDomain: "drive-storage-a897d.firebaseapp.com",
  projectId: "drive-storage-a897d",
  storageBucket: "drive-storage-a897d.appspot.com",
  messagingSenderId: "10785584046",
  appId: "1:10785584046:web:4675beabd58776ee258e3f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
