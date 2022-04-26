import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmGQrqa0VjXiF8p9eK_ZKVjoWkm-5EtcM",
  authDomain: "netflix-clone-with-nextjs.firebaseapp.com",
  projectId: "netflix-clone-with-nextjs",
  storageBucket: "netflix-clone-with-nextjs.appspot.com",
  messagingSenderId: "129245151256",
  appId: "1:129245151256:web:0c3e659781f4e008d4836d",
  measurementId: "G-RD79Z79SYF"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export default app;
export { db, auth };
