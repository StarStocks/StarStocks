// transactions.js

import { getFirestore, doc, setDoc, Timestamp } from "firebase/firestore";

export default class Transactions {
  constructor() {
    this.db = getFirestore();
  }

  async logTransaction(userId, celebId, quantity, price, totalprice, reason, changeType) {
    try {
      const transactionData = {
          userId: userId,
          celebId: celebId,
          quantity: quantity,
          price: price,
          totalprice: totalprice,
          reason: reason,
          changeType: changeType, // Now using the changeType parameter
          timestamp: Timestamp.now()
      };

      // Generate a unique ID for each transaction
      const transactionId = this.generateTransactionId();

      // Specify the document path with the generated transactionId
      const transactionDocRef = doc(this.db, 'transactions', transactionId);

      // Set the data for the specified document path
      await setDoc(transactionDocRef, transactionData);

    } catch (error) {
      console.error("Error logging transaction:", error.message);
      throw error; // Re-throw the error for higher-level error handling, if needed
    }
  }

  generateTransactionId() {
    const timestamp = Date.now();
    const randomPortion = Math.floor(Math.random() * 1000000); // Random number for additional uniqueness
    return `${timestamp}-${randomPortion}`;
  }
}
