// Celebs.js
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, query, onSnapshot } from "firebase/firestore";
import axios from 'axios';


class Celeb {
  constructor() {
    this.db = getFirestore();
    this.celebsRef = collection(this.db, 'celebs');
  }

  async updateAllCelebMentions(updateCelebMentions) {
    const celebs = await this.getAllCelebs();
    for (const celeb of celebs) {
      try {
        // Store the current mentions in 'prevmentions'
        const currentMentions = celeb.mentions;
        await updateDoc(doc(this.db, 'celebs', celeb.id), { prevmentions: currentMentions });
  
        // Fetch and update new mentions
        const newMentions = await this.getMentionsFromAPI(celeb.username);
        await updateCelebMentions(celeb.id, newMentions);
  
        // Calculate the variance in mentions
        const varmentions = newMentions - currentMentions;
  
        // Update the variance in mentions in the database
        await updateDoc(doc(this.db, 'celebs', celeb.id), { varmentions: varmentions });
  
        // Calculate the new current price by adding the variance to the existing price
        let newCurrentPrice = celeb.currentPrice + varmentions;
  
        // Apply price floor and cap
        newCurrentPrice = Math.max(10, Math.min(newCurrentPrice, 250));
  
        // Update the celebrity's current price in the database
        await updateDoc(doc(this.db, 'celebs', celeb.id), { currentPrice: newCurrentPrice });
  
      } catch (error) {
        console.error(`Error updating mentions for ${celeb.username}:`, error);
      }
    }
  }
  
  
  
  async getMentionsFromAPI(celebName) {
    try {
      const response = await axios.get(`https://StarStocks.pythonanywhere.com/celebscores`, { params: { name: celebName } });
      console.log(`${celebName} was mentioned ${response.data.mentions} times in the news today.`);
      return response.data.mentions;
    } catch (error) {
      console.error('Error fetching mentions:', error);
    }
  }
  

  async addCeleb({ firstName, lastName, username, imgURL, category, subcategory, team, mentions, issuePrice, currentPrice }) {
    const celebId = doc(this.celebsRef).id; // Generate unique ID
    const celebData = {
      firstName, 
      lastName, 
      username, 
      imgURL, 
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

  async updateCelebPrice(celebId, newPrice) {
    const db = getFirestore();
    const celebRef = doc(db, 'celebs', celebId);

    // Update the current price
    await updateDoc(celebRef, {
        currentPrice: newPrice
    });
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
