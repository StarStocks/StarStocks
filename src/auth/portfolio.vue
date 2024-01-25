<template>
    <div class="portfolio">
      <h1>Your Portfolio</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Celebrity</th>
            <th>Shares Owned</th>
            <th>Average Price</th>
            <th>Current Price</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in portfolioItems" :key="item.celebId">
            <td>{{ item.celebName }}</td>
            <td>{{ item.owned }}</td>
            <td>{{ item.averagePrice }}</td>
            <td>{{ item.currentPrice }}</td>
            <td :class="{ profit: item.profitLoss >= 0, loss: item.profitLoss < 0 }">
              {{ item.profitLoss }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getFirestore, doc, getDoc } from 'firebase/firestore';
  import Userauth from '@/auth/auth.js';
  import Celebs from '@/data/celebs/celebs.js';
  
  export default {
    name: 'Portfolio',
    setup() {
      const portfolioItems = ref([]);
  
      const fetchPortfolio = async () => {
        const db = getFirestore();
        const userId = Userauth.getCurrentUser().uid;
        const portfolioRef = doc(db, 'portfolios', userId);
        const docSnap = await getDoc(portfolioRef);
  
        if (docSnap.exists()) {
          const celebHoldings = docSnap.data().CelebHoldings;
          portfolioItems.value = await Promise.all(
            Object.keys(celebHoldings).map(async celebId => {
              const celebData = await Celebs.getCelebById(celebId);
              return {
                celebId,
                celebName: celebData.firstName + ' ' + celebData.lastName,
                owned: celebHoldings[celebId].owned,
                averagePrice: celebHoldings[celebId].averagePrice,
                currentPrice: celebData.currentPrice,
                profitLoss: (celebData.currentPrice - celebHoldings[celebId].averagePrice) * celebHoldings[celebId].owned
              };
            })
          );
        } else {
          console.log('No portfolio data found');
        }
      };
  
      onMounted(() => {
        fetchPortfolio();
      });
  
      return { portfolioItems };
    }
  };
  </script>
  
  <style scoped>
  .profit {
    color: green;
  }
  .loss {
    color: red;
  }
  </style>
  