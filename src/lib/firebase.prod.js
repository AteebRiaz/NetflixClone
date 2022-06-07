import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDV3A-Xcuw6RFHcu_KkwUdNc7CspTsc41I",
    authDomain: "netflix-3829f.firebaseapp.com",
    projectId: "netflix-3829f",
    storageBucket: "netflix-3829f.appspot.com",
    messagingSenderId: "244527867647",
    appId: "1:244527867647:web:e22489df97db4b7620ceca"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };