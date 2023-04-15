import {getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCgwUD3F6hfWgQe5ovsgvNirswzO3no3oY",
    authDomain: "loni-tiffin-center.firebaseapp.com",
    databaseURL: "https://loni-tiffin-center-default-rtdb.firebaseio.com",
    projectId: "loni-tiffin-center",
    storageBucket: "loni-tiffin-center.appspot.com",
    messagingSenderId: "536511721785",
    appId: "1:536511721785:web:48e960902625463cadb8e8",
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };
