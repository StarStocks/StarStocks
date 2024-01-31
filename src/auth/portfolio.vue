<!-- portfoliocards.vue -->
<template>
	<br>
    <div class="container-fluid">
        <div class="row mt-5">
            <div class="col-12 col-sm-6 col-md-6 col-lg-2" v-for="item in portfolioItems" :key="item.celebId">
				<div class="card">
					<h1 class="card-img-top f-w-900 px-2" style="background-color:#05152a; color:#fff;">{{ item.currentPrice }}</h1>
					<div class="image-container">
						<img :src="item.imgURL" @error="setDefaultImage" alt="celeb image" width="100%">
						<div class="gradient-overlay"></div>
					</div>



					<div class="card-body pt-0 px-0">
						<div class="flex-row justify-content-between text-center mb-0 px-3">
							<h4 class="f-w-900 mb-0">{{ item.surname }}</h4>
							<h6 class="text-muted f-w-600 mb-0">{{ item.subcategory }}</h6>
							<h6 class="text-muted f-w-200 mb-0">{{ item.team }}</h6>
						</div>
						<hr class="mt-2 mx-3" />
						<div class="d-flex flex-row justify-content-between px-3 pb-4">
							<div class="d-flex flex-column">
							<h6 class="text-muted mb-0">Own</h6>
							<small class="text-muted mb-0">Excludes Sold</small>
							<h6 class="text-muted mb-0">Gained</h6>
							<small class="text-muted mb-0">In {{ item.totalInvested }}</small>
							<h6 class="text-muted mb-0">Avg. Price</h6>
              <h6 class="text-muted mb-0">Cur. Price</h6>
							<h6 class="text-muted mb-0">Cur. Value</h6>
							</div>
							<div class="d-flex flex-column">
							<h6 class="mb-0">{{ item.owned }}</h6>
							<small class="mb-0 text-muted text-right">Sold 0.00</small>
							<h6 class="mb-0">{{ item.gains }}</h6>
							<small class="text-muted mb-0">Out {{ item.totalReturned }}</small>
							<h6 class="mb-0">{{ item.averagePrice }}</h6>
              <h6 class="mb-0">{{ item.currentPrice }}</h6>
							<h6 class="mb-0">{{ (item.currentPrice * item.owned).toFixed(0) }}</h6>
							</div>
						</div>
            <div class="d-flex flex-row mid justify-content-between px-2 pt-1 pb-1" 
            :class="{'bg-danger': item.profitLoss < 0, 'bg-success': item.profitLoss >= 0}" 
            style="color:#fff">
            <div class="d-flex flex-column">
								<h6 class="mb-0">Profit/Loss</h6>
							</div>
							<div class="d-flex flex-column">
							<h5 class="mb-0" :class="{ profit: item.profitLoss >= 0, loss: item.profitLoss < 0 }">
              {{ item.profitLoss }}
              <i v-if="item.profitLoss > 0" class="text-success">▲</i>
              <i v-if="item.profitLoss < 0" class="text-danger">▼</i></h5>
							</div>
						</div>
						<div class="mx-0 mt-3 mb-0 text-center">
							<button type="button" class="btn btn-primary btn-block mb-0 me-3">
							<small>BUY</small>
							</button>
							<button type="button" class="btn btn-secondary btn-block">
							<small>SELL</small>
							</button>
						</div>
					</div>
				</div>
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
                category: celebData.category,
                subcategory: celebData.subcategory,
                team: celebData.team,
                surname: celebData.lastName,
                imgURL: celebData.imgURL,
                owned: owned.toFixed(2),
                averagePrice: averagePrice.toFixed(0),
                currentPrice: currentPrice.toFixed(0),
                currentValue: currentValue.toFixed(2),
                totalInvested: totalInvested.toFixed(2),
                totalReturned: totalReturned.toFixed(2),
                gains: gains.toFixed(0),
                profitLoss: profitLoss.toFixed(0),
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

body {
    background: #f5f1ee;
    font-family: "Roboto", sans-serif;
}

.card {
    border-radius: 10px;
}

.card-img-top {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: -1em;
    z-index: 1;
}

.card-body {
    position: relative;
    z-index: 3;
    background: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-top: 0em;
    padding-top: 0em;
}

.image-container {
    position: relative;
    z-index: 2;
}

.gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%);
}
span.text-muted {
  font-size: 12px;
}
small.text-muted {
  font-size: 8px;
}
h5.mb-0 {
  font-size: 1rem;
}
small.ghj {
  font-size: 9px;
}
.mid {
  background: #ecedf1;
}
h6.ml-1 {
  font-size: 13px;
}
small.key {
  text-decoration: underline;
  font-size: 9px;
  cursor: pointer;
}
.btn-danger {
  color: #ffcbd2;
}
.btn-danger:focus {
  box-shadow: none;
}
small.justify-content-center {
  font-size: 9px;
  cursor: pointer;
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .col-sm-4 {
    margin-bottom: 50px;
  }
}
</style>
