<!-- portfolio.vue -->
<template>
  <!-- ... existing template ... -->
  <div class="table-responsive">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Celebrity</th>
          <th>Shares Owned</th>
          <th>Average Price</th>
          <th>Current Price</th>
          <th>Current Value</th>
          <th>Invested</th>
          <th>Sales</th>
          <th>Gains</th>
          <th>Profit/Loss</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in portfolioItems" :key="item.celebId">
          <td>
            <div class="d-flex align-items-center">
              <div class="avatar me-2">
                <img :src="item.imgURL" alt="celeb image" class="img-50 rounded-circle">
              </div>
              <h6 class="mb-0">{{ item.celebName }}</h6>
            </div>
          </td>
          <td>{{ item.owned }}</td>
          <td>{{ item.averagePrice }}</td>
          <td>{{ item.currentPrice }}</td>
          <td>{{ (item.currentPrice * item.owned).toFixed(2) }}</td>

          <td>{{ typeof item.invested === 'number' ? item.invested.toFixed(2) : '0.00' }}</td>
          <td>{{ typeof item.sales === 'number' ? item.sales.toFixed(2) : '0.00' }}</td>
          <td>{{ typeof item.gains === 'number' ? item.gains.toFixed(2) : '0.00' }}</td>
          <td :class="{ profit: item.profitLoss >= 0, loss: item.profitLoss < 0 }">
              {{ ((item.currentPrice - item.averagePrice) * item.owned).toFixed(2) }}
              <i v-if="item.profitLoss > 0" class="text-success">▲</i>
              <i v-if="item.profitLoss < 0" class="text-danger">▼</i>
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
            const holdings = celebHoldings[celebId];
            const celebData = await Celebs.getCelebById(celebId);

            // Ensure celebData and holdings are valid
            if (celebData && holdings) {
              const currentPrice = parseFloat(celebData.currentPrice) || 0;
              const owned = parseFloat(holdings.owned) || 0;
              const averagePrice = parseFloat(holdings.averagePrice) || 0;
              const invested = parseFloat(holdings.invested) || 0;
              const sales = parseFloat(holdings.sales) || 0;

              const currentValue = owned * currentPrice;
              const gains = sales - invested;
              const profitLoss = currentValue - invested;

              return {
                ...celebData,
                celebId,
                celebName: `${celebData.firstName} ${celebData.lastName}`,
                owned: owned.toFixed(2),
                averagePrice: averagePrice.toFixed(2),
                currentPrice: currentPrice.toFixed(2),
                currentValue: currentValue.toFixed(2),
                invested: invested.toFixed(2),
                sales: sales.toFixed(2),
                gains: gains.toFixed(2),
                profitLoss: profitLoss.toFixed(2),
              };
            } else {
              console.error(`Data missing for celebId: ${celebId}`);
              return null;
            }
          })
        );

        portfolioItems.value = portfolioItems.value.filter(item => item !== null);
      } else {
        console.log('No portfolio data found');
      }
    };

    onMounted(fetchPortfolio);

    return { portfolioItems };
  }

};
</script>