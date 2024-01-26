<!-- portfolio.vue -->
<template>
  <br>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
          <h3>Portfolio</h3>
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
                <td :class="{ profit: item.profitLoss >= 0, loss: item.profitLoss < 0 }">
                  {{ ((item.currentPrice - item.averagePrice) * item.owned).toFixed(2) }}
                </td>
              </tr>
          </tbody>
        </table>
      </div>
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
              const celebData = await Celebs.getCelebById(celebId);
              return {
                ...celebData,
                celebId,
                celebName: celebData.firstName + ' ' + celebData.lastName,
                owned: parseFloat(celebHoldings[celebId].owned).toFixed(2),
                averagePrice: parseFloat(celebHoldings[celebId].averagePrice).toFixed(2),
                currentPrice: parseFloat(celebData.currentPrice).toFixed(2),
                profitLoss: (parseFloat(celebData.currentPrice) - parseFloat(celebHoldings[celebId].averagePrice)) * parseFloat(celebHoldings[celebId].owned)
              };
            })
          );
        } else {
          console.log('No portfolio data found');
        }
      };

    onMounted(fetchPortfolio);


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
  