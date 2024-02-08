<!-- leaderboards.vue -->
<template>
  <br>
  <div class="container-fluid">
    <div class="row">
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
                <tr v-for="entry in sortedLeaderboard" :key="entry.userId">
                  <td>{{ entry.username }}</td>
                  <td>{{ formatScore(entry.score) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import Celebs from '@/data/celebs/celebs.js';

export default {
  name: 'Leaderboard',
  setup() {
    const leaderboardEntries = ref([]);

    onMounted(async () => {
      await fetchLeaderboard();
    });

    function formatScore(score) {
      return parseFloat(score).toLocaleString(undefined, { maximumFractionDigits: 2 });
    }

    async function fetchLeaderboard() {
      const db = getFirestore();
      const leaderboardRef = collection(db, 'users'); // Assuming user data is stored in 'users' collection
      const snapshot = await getDocs(leaderboardRef);

      leaderboardEntries.value = await Promise.all(
        snapshot.docs.map(async userDoc => {
          const data = userDoc.data();
          const userId = userDoc.id;

          // Retrieve user's wallet balance
          const walletRef = doc(db, 'wallets', userId);
          const walletSnap = await getDoc(walletRef);
          const walletBalance = walletSnap.exists() ? walletSnap.data().balance : 0;

          // Retrieve user's celeb holdings
          const portfolioRef = doc(db, 'portfolios', userId);
          const portfolioSnap = await getDoc(portfolioRef);
          const portfolioData = portfolioSnap.exists() ? portfolioSnap.data() : { CelebHoldings: {} };
          const celebHoldings = portfolioData.CelebHoldings;

          let totalGains = 0;

          if (Object.keys(celebHoldings).length > 0) {
            for (const celebId in celebHoldings) {
              const holdings = celebHoldings[celebId];
              if (holdings && holdings.owned > 0) { // Using holdings.owned instead of holdings.quantity
                const currentMarketValue = await getCurrentMarketValue(celebId); 
                const owned = parseFloat(holdings.owned) || 0;
                const currentValue = owned * currentMarketValue;
                totalGains += currentValue; // If you're only interested in the current value of the owned shares
              }
            }
          }

          // Calculate the score as wallet balance + unrealized gains
          const score = walletBalance + totalGains;

          return {
            userId,
            username: data.username,
            score: score.toFixed(2),
          };
        })
      );

      // Sort the leaderboardEntries array by score in descending order
      leaderboardEntries.value.sort((a, b) => b.score - a.score);
    }

    async function getCurrentMarketValue(celebId) {
      const celebData = await Celebs.getCelebById(celebId);
      if (celebData) {
        const currentPrice = parseFloat(celebData.currentPrice) || 0;
        return currentPrice;
      } else {
        console.error(`Data missing for celebId: ${celebId}`);
        return 0; // Return 0 if data is missing
      }
    }

    return {
      leaderboardEntries,
      sortedLeaderboard: leaderboardEntries,
      formatScore,
    };
  },
};
</script>