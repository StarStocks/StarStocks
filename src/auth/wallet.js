// wallet.js
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Transactions from "./transactions.js";

export default class Wallet {

  constructor(userId) {
    this.db = getFirestore();
    this.userId = userId;
    this.walletRef = doc(this.db, 'wallets', userId);
  }

  async initializeWallet() {
    const walletSnap = await getDoc(this.walletRef);
    if (!walletSnap.exists()) {
      await setDoc(this.walletRef, { balance: 1000 });
      const transactions = new Transactions();
      await transactions.logTransaction(
        this.userId,      // userID 
        "",               // celebID
        1,                // qty
        10000,             // price
        10000,             // totalprice
        "New user registered - initial balance gifted", 
        "deposit"         // changeType
      );
    }
  }

  async getWalletData() {
    try {
      const walletSnap = await getDoc(this.walletRef);
      return walletSnap;
    } catch (error) {
      console.error("Error fetching wallet data:", error);
      throw error;
    }
  }

  async updateBalance(newBalance) {
    try {
      await updateDoc(this.walletRef, { balance: newBalance });
      // console.log("Wallet balance updated successfully");
    } catch (error) {
      console.error("Error updating wallet balance:", error);
      throw error;
    }
  }
}