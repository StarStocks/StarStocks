// Celebs.js
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, query, onSnapshot } from "firebase/firestore";

class Celeb {
  constructor() {
    this.db = getFirestore();
    this.celebsRef = collection(this.db, 'celebs');
  }

  async addCeleb({ firstName, lastName, username, imgURL, desc, category, subcategory, team, mentions, issuePrice, currentPrice }) {
    const celebId = doc(this.celebsRef).id; // Generate unique ID
    const celebData = {
      firstName, 
      lastName, 
      username, 
      imgURL, 
      desc, 
      category, 
      subcategory, 
      team, 
      
      mentions, 
      issuePrice, 
      currentPrice,
      dateAdded: new Date()
    };

    await setDoc(doc(this.db, 'celebs', celebId), celebData);
    return celebId;
  }

  async getAllCelebs() {
    const q = query(this.celebsRef);
    const querySnapshot = await getDocs(q);
    const celebsArray = [];
    querySnapshot.forEach((doc) => {
      celebsArray.push({ id: doc.id, ...doc.data() });
    });
    return celebsArray;
  }

  async getCelebById(celebId) {
    const celebDocRef = doc(this.celebsRef, celebId);
    const celebDocSnap = await getDoc(celebDocRef);

    if (celebDocSnap.exists()) {
      return { id: celebDocSnap.id, ...celebDocSnap.data() };
    } else {
      throw new Error(`Celeb with ID ${celebId} not found.`);
    }
  }
  
  subscribeToCelebUpdates(callback) {
    const q = query(this.celebsRef);
    onSnapshot(q, (querySnapshot) => {
      const celebsArray = [];
      querySnapshot.forEach((doc) => {
        celebsArray.push({ id: doc.id, ...doc.data() });
      });
      callback(celebsArray);
    });
  }

}

export default new Celeb();
