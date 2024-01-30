<!-- portfolio.vue -->
<template>
  <br>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3>Portfolio</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Celebrity</th>
            <th>Shares Owned</th>
            <th>Average Price</th>
            <th>Current Price</th>
            <th>Current Value</th>
            <th>Profit/Loss</th>
            <th>Invested</th>
            <th>Returned</th>
            <th>Gains</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in portfolioItems" :key="item.celebId">
            <td>
              <div class="d-flex align-items-center">
                <div class="avatar me-2">
                  <img :src="item.imgURL" @error="setDefaultImage" alt="celeb image" class="img-50 rounded-circle">
                </div>
                <h6 class="mb-0">{{ item.celebName }}</h6>
              </div>
            </td>
            <td>{{ item.owned }}</td>
            <td>{{ item.averagePrice }}</td>
            <td>{{ item.currentPrice }}</td>
            <td>{{ (item.currentPrice * item.owned).toFixed(2) }}</td>
            <td :class="{ profit: item.profitLoss >= 0, loss: item.profitLoss < 0 }">
              {{ item.profitLoss }}
              <i v-if="item.profitLoss > 0" class="text-success">▲</i>
              <i v-if="item.profitLoss < 0" class="text-danger">▼</i>
            </td>
            <td>{{ item.totalInvested }}</td>
            <td>{{ item.totalReturned }}</td>
            <td>{{ item.gains }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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

            if (celebData && holdings) {
              const currentPrice = parseFloat(celebData.currentPrice) || 0;
              const owned = parseFloat(holdings.owned) || 0;
              const averagePrice = parseFloat(holdings.averagePrice) || 0;
              const totalInvested = parseFloat(holdings.totalInvested) || 0;
              const totalReturned = parseFloat(holdings.totalReturned) || 0;
              const currentValue = owned * currentPrice;
              const gains = totalReturned - totalInvested;
              const profitLoss = (totalReturned + currentValue) - totalInvested;

              return {
                celebId,
                celebName: `${celebData.firstName} ${celebData.lastName}`,
                imgURL: celebData.imgURL,
                owned: owned.toFixed(2),
                averagePrice: averagePrice.toFixed(2),
                currentPrice: currentPrice.toFixed(2),
                currentValue: currentValue.toFixed(2),
                totalInvested: totalInvested.toFixed(2),
                totalReturned: totalReturned.toFixed(2),
                gains: gains.toFixed(2),
                profitLoss: profitLoss.toFixed(2),
              };
            } else {
              console.error(`Data missing for celebId: ${celebId}`);
              return null; // Return null for missing data
            }
          })
        );

        // Filter out any null values from the array
        portfolioItems.value = portfolioItems.value.filter(item => item !== null);
      } else {
        console.log('No portfolio data found for user:', userId);
      }

    };



    onMounted(fetchPortfolio);

    return { portfolioItems };
  },
      
  setDefaultImage(event) {
        event.target.src = '@/assets/images/user.jpg';
      }
};
</script>
