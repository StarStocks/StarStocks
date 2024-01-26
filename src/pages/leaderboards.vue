<template>
  <br>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
          <h3>Leaderboard</h3>
      </div>

      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.username }}</td>
              <td>{{ user.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection,getDoc, getDocs, doc } from 'firebase/firestore';
import Celebs from '@/data/celebs/celebs.js';

export default {
  name: 'Leaderboard',
  setup() {
    const users = ref([]);

    onMounted(fetchUsers);

    async function fetchUsers() {
      const db = getFirestore();
      const leaderboardRef = collection(db, 'leaderboard');
      const leaderboardSnap = await getDocs(leaderboardRef);

      users.value = await Promise.all(
        leaderboardSnap.docs.map(async (doc) => {
          const userId = doc.id;
          const userData = await getUserData(db, userId);
          const walletData = await getWalletData(db, userId);
          const portfolioValue = await calculatePortfolioValue(db, userId);
          const score = walletData.balance + portfolioValue;
          return {
            id: userId,
            username: userData.username,
            score: score.toFixed(2)
          };
        })
      );
    }

    async function getWalletData(db, userId) {
      const walletRef = doc(db, 'wallets', userId);
      const walletSnap = await getDoc(walletRef);
      return walletSnap.exists() ? walletSnap.data() : { balance: 0 };
    }

    async function calculatePortfolioValue(db, userId) {
      let totalPortfolioValue = 0;
      const portfolioRef = doc(db, 'portfolios', userId);
      const portfolioSnap = await getDoc(portfolioRef);
      if (portfolioSnap.exists()) {
        const celebHoldings = portfolioSnap.data().CelebHoldings;
        for (const celebId in celebHoldings) {
          const holdings = celebHoldings[celebId];
          const celebData = await Celebs.getCelebById(celebId);
          totalPortfolioValue += holdings.owned * celebData.currentPrice;
        }
      }
      return totalPortfolioValue;
    }

    async function getUserData(db, userId) {
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        console.error(`User data not found for user with ID: ${userId}`);
        return { username: 'Unknown' };
      }
    }

    return { users };
  }
};
</script>
