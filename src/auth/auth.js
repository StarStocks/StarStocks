//auth.js
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";
import firebaseApp from "./firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

class Userauth {
  constructor() {
    this.user = null;
    this.auth = getAuth(firebaseApp);
    this.initAuthState();
  }

  initAuthState() {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user || null;
    });
  }

  isAuthenticated() {
    return !!this.user;
  }

  getCurrentUser() {
    return this.user;
  }

  async signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async signIn(email, password) {
    try {
      await setPersistence(this.auth, browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async signOutUser() {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }
  
  async getUserDetailsAndRole() {
    if (!this.user) return null;

    const db = getFirestore();
    const userRef = doc(db, "users", this.user.uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
        const userData = docSnap.data();
        const role = userData.role || null;
        return role; // Return the role directly
    } else {
        return null;
    }
}
  
}


export default new Userauth();
