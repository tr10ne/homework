import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
  onValue,
  push,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBttARaz4h90AkpX-9hn4RZSi59bMNSV_c",
  authDomain: "to-do-list-a173f.firebaseapp.com",
  databaseURL: "https://to-do-list-a173f-default-rtdb.firebaseio.com",
  projectId: "to-do-list-a173f",
  storageBucket: "to-do-list-a173f.appspot.com",
  messagingSenderId: "776142440850",
  appId: "1:776142440850:web:af5d38aaf17da278d9d94b",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, child, update, remove, onValue, push };
