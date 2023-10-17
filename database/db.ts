import * as admin from "firebase-admin"
import * as serviceAccount from "./key.json"
// var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://dwf-modulo-6-default-rtdb.firebaseio.com"
}); 

const firestore = admin.firestore();
const rtdb = admin.database();

export {firestore, rtdb}