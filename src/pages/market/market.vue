<!-- market.vue -->
<template>   
    <br> 
    <div class="col-sm-6"> 

        <!-- Modal -->
        <div v-if="showModal" class="modal fade show" style="display: block;" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add New Star</h5>
                            <button type="button" class="btn-close" @click="showModal = false"></button>
                        </div>

                        <div class="modal-body">
                            <form @submit.prevent="addNewCeleb" class="row g-3">
                                <div class="col-md-6">
                                    <input type="text" v-model="newCeleb.firstName" class="form-control" placeholder="First Name">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" v-model="newCeleb.lastName" class="form-control" placeholder="Last Name">
                                </div>
                                <div class="col-12">
                                    <input type="text" v-model="newCeleb.username" class="form-control" placeholder="Username">
                                </div>
                                <div class="col-12">
                                    <input type="text" v-model="newCeleb.imgURL" class="form-control" placeholder="Image URL">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" v-model="newCeleb.category" class="form-control" placeholder="Category">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" v-model="newCeleb.subcategory" class="form-control" placeholder="Subcategory">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" v-model="newCeleb.team" class="form-control" placeholder="Team">
                                </div>
                                <div class="col-md-6">
                                    <input type="number" v-model="newCeleb.issuePrice" class="form-control" placeholder="Issue Price">
                                </div>
                                <div class="col-md-6">
                                    <input type="number" v-model="newCeleb.currentPrice" class="form-control" placeholder="Current Price">
                                </div>
                            </form>
                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
                            <button type="button" class="btn btn-primary" @click="addNewCeleb">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Optional Overlay -->
        <div v-if="showModal" class="modal-backdrop fade show">
        </div>

        <!-- Tabs view -->

        <!-- <div class="col-md-12">
        <div class="card tab-vertical">
            <div class="card-header">
                <h5>Tabs Vertical</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <div class="nav flex-column nav-pills nav-primary" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-filters-tab" data-bs-toggle="pill" href="#v-pills-filters" role="tab" aria-controls="v-pills-filters" aria-selected="true">Filters</a>
                            <a class="nav-link" id="v-pills-category-tab" data-bs-toggle="pill" href="#v-pills-category" role="tab" aria-controls="v-pills-category" aria-selected="false" tabindex="-1">Category</a>
                            <a class="nav-link" id="v-pills-sub-category-tab" data-bs-toggle="pill" href="#v-pills-sub-category" role="tab" aria-controls="v-pills-sub-category" aria-selected="false" tabindex="-1">Sub-Category</a>
                            <a class="nav-link" id="v-pills-teams-tab" data-bs-toggle="pill" href="#v-pills-teams" role="tab" aria-controls="v-pills-teams" aria-selected="false" tabindex="-1">Teams</a>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade active show" id="v-pills-filters" role="tabpanel" aria-labelledby="v-pills-filters-tab">
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <tbody>
                                            <tr>
                                                <td>All shares</td>
                                                <td>Owned shares only</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="v-pills-category" role="tabpanel" aria-labelledby="v-pills-category-tab">
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <tbody>
                                            <tr>
                                                <td>Media</td>
                                                <td>Football</td>
                                                <td>Politics</td>
                                                <td>Motorsport</td>
                                                <td>Music</td>
                                                <td>Boxing</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="v-pills-sub-category" role="tabpanel" aria-labelledby="v-pills-sub-category-tab">

                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <tbody>
                                            <tr>
                                                <td>Actors & Actresses</td>
                                                <td>Presenter</td>
                                                <td>Business</td>
                                                <td>English League</td>
                                                <td>Royal Family</td>
                                                <td>Motorleague One</td>
                                                <td>Presenter</td>
                                                <td>Singer</td>
                                                <td>Ministerial</td>
                                                <td>Activist</td>
                                                <td>Governor</td>
                                                <td>Heavyweight</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div class="tab-pane fade" id="v-pills-teams" role="tabpanel" aria-labelledby="v-pills-teams-tab">

                                <div class="table-responsive">
                                    <table class="table table-striped table-hover">
                                        <tbody>
                                            <tr>
                                                <td>Bees</td>
                                                <td>Cannons</td>
                                                <td>Clarets</td>
                                                <td>Cockerels</td>
                                                <td>Cottages</td>
                                                <td>Eagles</td>
                                                <td>Hammers</td>
                                                <td>Hats</td>
                                                <td>Lions</td>
                                                <td>London Blues</td>
                                                <td>Man Blues</td>
                                                <td>Man Reds</td>
                                                <td>Merseyside Blues</td>
                                                <td>Merseyside Reds</td>
                                                <td>Midlands Yellows</td>
                                                <td>Scimitars</td>
                                                <td>Seagulls</td>
                                                <td>Seahorses</td>
                                                <td>Southwest Reds</td>
                                                <td>Trees</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div> -->
        
    <div class="container-fluid">
        <div class="row widget-grid">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5>Filters</h5>
                    </div>
                    
                    <div class="card-body">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                            <button @click="toggleShowOwned" class="btn btn-primary">
                                                {{ showOwnedOnly ? 'Show All Stars' : 'Show Owned Stars Only' }}
                                            </button>
                                            <button v-if="isAdmin" class="btn btn-warning" @click="showModal = true">Add new (Admin)</button>
                                            <button v-if="isAdmin" class="btn btn-warning" @click="updateAllCelebMentions">Get score (Admin)</button>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6"> 
                <div class="card small-widget mb-sm-0"> 
                    <div class="card-body success"><span class="f-light">Balance</span>
                        <div class="d-flex align-items-end gap-1">
                            <h4>{{ this.userBalance.toFixed(2) }}</h4>
                        </div>

                        <div class="bg-gradient">
                            <svg class="stroke-icon svg-fill">
                            <use href="@/assets/svg/icon-sprite.svg#profit"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    


        <!-- 
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5>Filters</h5>
                </div>
                
                <div class="card-body">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>Owned</th>
                                    <th>Categories</th>
                                    <th>Subcategories</th>
                                    <th>Teams</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>                        
                                            <button @click="toggleShowOwned" class="btn btn-primary">
                                                {{ showOwnedOnly ? 'Show All Stars' : 'Show Owned Stars Only' }}
                                            </button>
                                        </td>
                                        <td> 
                                            <input type="checkbox" @change="handleCheckboxChange('Football', $event)">
                                            <span class="tree-row-txt">Football</span>
                                        </td>
                                        <td>
                                            <input type="checkbox" @change="handleCheckboxChange('English League', $event)">
                                            <span class="tree-row-txt">English League</span>
                                        </td>
                                        <td>
                                            <input type="checkbox" @change="handleCheckboxChange('Man Red', $event)">
                                            <span class="tree-row-txt">Man Red</span>
                                        </td>
                                    </tr>

                                    <tr>                     
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <input type="checkbox" @change="handleCheckboxChange('Man Red', $event)">
                                            <span class="tree-row-txt">Man Blue</span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <input type="checkbox" @change="handleCheckboxChange('Merseyside Red', $event)">
                                            <span class="tree-row-txt">Merseyside Red</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td> 
                                            <input type="checkbox" @change="handleCheckboxChange('Media', $event)">
                                            <span class="tree-row-txt">Media</span>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        -->

        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Star</th>
                        <th>Actions</th>
                        <th>Owned</th>
                        <th>Average Price</th>
                        <th>Current Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="celeb in filteredCelebs" :key="celeb.id">
                        <td>
                            <div class="d-flex align-items-center">
                                <div class="avatar me-2">
                                    <img :src="celeb.imgURL" alt="celeb image" class="img-70 rounded-circle">
                                </div>
                                    <h6 class="mb-0">{{ celeb.firstName }} {{ celeb.lastName }}</h6>
                            </div>
                        </td>

                        <td>
                            <button class="btn btn-primary btn-sm" @click="openBuyModal(celeb)">Buy</button>
                            <p></p>
                            <button class="btn btn-secondary btn-sm" @click="openSellModal(celeb)">Sell</button>
                        </td>
                        <td>{{ celeb.owned ? celeb.owned.toFixed(2) : '0.00' }}</td>
                        <td>{{ celeb.averagePrice ? celeb.averagePrice.toFixed(2) : '0.00' }}</td>
                        <td>
                            <span :class="{'badge rounded-pill badge-success': celeb.varmentions > 0, 'badge rounded-pill badge-danger': celeb.varmentions < 0}">
                                {{ celeb.currentPrice ? celeb.currentPrice.toFixed(2) : '0.00' }}
                            </span>
                                <i v-if="celeb.varmentions > 0" class="text-success">
                                    <div class="font-success f-w-500"><i class="icon-arrow-up icon-rotate me-1"></i><span>{{ celeb.varmentions }}</span></div>
                                </i>

                                <i v-if="celeb.varmentions < 0" class="text-danger">                                    
                                    <div class="font-danger f-w-500"><i class="icon-arrow-down icon-rotate me-1"></i><span>{{ celeb.varmentions }}</span></div>
                                </i>
                            
                        </td>
                        


                    </tr>
                </tbody>
            </table>

            <div v-if="showBuyModal" class="modal fade show" style="display: block;" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Buy shares in {{ selectedCeleb.firstName }} {{ selectedCeleb.lastName }}</h5>
                            <button type="button" class="btn-close" @click="closeBuyModal"></button>
                        </div>

                        <div class="modal-body">
                            <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                <th>Current Balance</th>
                                <th>Current Price</th>
                                <th>Total Price</th>
                                <th>New Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{{ this.userBalance.toFixed(2) }}</td>
                                <td>{{ selectedCeleb ? selectedCeleb.currentPrice.toFixed(2) : '' }}</td>
                                <td>{{ totalPrice.toFixed(2) }}</td>
                                <td>{{ (this.userBalance - totalPrice).toFixed(2) }}</td>
                                </tr>
                            </tbody>
                            </table>

                            <br>
                            <div class="form-group">
                                <label for="buyQuantity">Quantity to Buy</label>
                                <input type="text" v-model="buyQuantity" @input="validateInput('buyQuantity')" class="form-control" id="buyQuantity" placeholder="Enter quantity">
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeBuyModal">Cancel</button>
                            <button type="button" class="btn btn-primary" @click="confirmPurchase">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div v-if="showBuyModal" class="modal-backdrop fade show"></div>

            <div v-if="showSellModal" class="modal fade show" style="display: block;" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Sell shares in {{ selectedCeleb.firstName }} {{ selectedCeleb.lastName }}</h5>
                            <button type="button" class="btn-close" @click="closeSellModal"></button>
                        </div>

                        <div class="modal-body">
                            <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                <th>Current Balance</th>
                                <th>Current Price</th>
                                <th>Total Price</th>
                                <th>New Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{{ this.userBalance.toFixed(2) }}</td>
                                <td>{{ selectedCeleb ? selectedCeleb.currentPrice.toFixed(2) : '' }}</td>
                                <td>{{ totalPrice.toFixed(2) }}</td>
                                <td>{{ (this.userBalance + totalPrice).toFixed(2) }}</td>
                                </tr>
                            </tbody>
                            </table>

                            <br>
                            <div class="form-group">
                                <label for="sellQuantity">Quantity to Sell (Maximum: {{ selectedCeleb && selectedCeleb.owned ? selectedCeleb.owned.toFixed(2) : '0.00' }})</label>
                                <input type="text" v-model="sellQuantity" @input="validateInput('sellQuantity')" class="form-control" id="sellQuantity" placeholder="Enter quantity">
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeSellModal">Cancel</button>
                            <button type="button" class="btn btn-primary" @click="confirmSale">Sell</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div v-if="showSellModal" class="modal-backdrop fade show">
            </div>
            
        </div>
    </div>

</template>
  
<script>
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import Userauth from '@/auth/auth.js';
import Wallet from "@/auth/wallet.js";
import Transactions from '@/auth/transactions.js';
import Celebs from '@/data/celebs/celebs.js';

export default {
    data() {
        return {      
            newCeleb: {
            firstName: '',
            lastName: '',
            username: '', 
            imgURL: '', 
            category: '', 
            subcategory: '', 
            team: '', 
            prevmentions: '',
            mentions: '', 
            varmentions: '', 
            issuePrice: '', 
            currentPrice: '',
            },

            checkedCategories: {
            'Football': false,
            'English League': false,
            },
            celebs: [], // Array to store celebrities
            showOwnedOnly: false,
            operationType: 'buy',
            showModal: false,
            showBuyModal: false,
            showSellModal: false,
            isAdmin: false,
            userBalance: 0.00, // User's balance
            buyQuantity: 0.00, // Quantity to buy
            sellQuantity: 0.00, // Quantity to sell
            selectedCeleb: null, // Initialize selected celebrity to null
            initialTotalPrice: 0.00, // Initialize total price to 0

        };
    },

           
    async created() {
        // Initial fetch when the component is created
        await this.checkAndFetchData();
    },
    
    async mounted() {
        // Watch for authentication changes
        onAuthStateChanged(Userauth.auth, async (user) => {
            if (user) {
                // User is signed in
                await this.checkAndFetchData();
            } else {
                // User is signed out
                // Handle the unauthenticated state
            }
        });
                
        // Subscribe to celeb updates
        Celebs.subscribeToCelebUpdates((updatedCelebs) => {
            this.celebs = updatedCelebs;
        });
    },

    computed: {

        totalPrice() {
            if (this.selectedCeleb) {
                const quantity = this.operationType === 'buy' ? this.buyQuantity : this.sellQuantity;
                return this.selectedCeleb.currentPrice * parseFloat(quantity || 0);
            }
            return 0.00;
        },
        
        filteredCelebs() {
            let result = this.celebs;

            // Filter based on 'showOwnedOnly'
            if (this.showOwnedOnly) {
                result = result.filter(celeb => celeb.owned > 0);
            }

            // Further filter based on checked categories
            if (Object.values(this.checkedCategories).some(value => value)) {
                result = result.filter(celeb => {
                    // Check if any of the celeb's categories, subcategories, or teams are checked
                    return this.checkedCategories[celeb.category] || 
                        this.checkedCategories[celeb.subcategory] || 
                        this.checkedCategories[celeb.team];
                });
            }

            return result;
        },
    },
    
    methods: {     

        async checkAndFetchData() {
            await this.fetchData();
        },
        
        async updateAllCelebMentions() {
            await Celebs.updateAllCelebMentions(this.updateCelebMentions);
        },

        async updateCelebMentions(celebId, mentions) {
            const db = getFirestore(); // Get the FirebaseFirestore instance
            const celebRef = doc(db, 'celebs', celebId); // Use it here
            await updateDoc(celebRef, {
                mentions: mentions
            });
        },

        async fetchData() {
            // Ensure user is authenticated before proceeding
            if (!Userauth.isAuthenticated()) {
                console.error("User not authenticated");
                return; // Exit the function if user is not authenticated
            }

            const userId = Userauth.getCurrentUser().uid;

            // Fetching user balance
            const wallet = new Wallet(userId);
            await wallet.initializeWallet();
            const walletSnapshot = await wallet.getWalletData();
            if (walletSnapshot.exists()) {
                this.userBalance = walletSnapshot.data().balance;
            } else {
                console.log("No wallet data found for the user");
            }

            // Fetching celebrities
            this.celebs = await Celebs.getAllCelebs();

            // Fetching user portfolio
            const db = getFirestore();
            const portfolioRef = doc(db, 'portfolios', userId);
            const portfolioSnap = await getDoc(portfolioRef);

            if (portfolioSnap.exists()) {
                const celebHoldings = portfolioSnap.data().CelebHoldings || {};
                this.updateCelebsWithPortfolio(celebHoldings);
            } else {
                console.log("No portfolio data found for the user");
            }

            // Fetching user role for admin check
            const userRole = await Userauth.getUserDetailsAndRole();
            this.isAdmin = userRole?.role === 'Admin';
        },

        
        // Method to toggle the state
        toggleShowOwned() {
            this.showOwnedOnly = !this.showOwnedOnly;
        },

        handleCheckboxChange(category, event) {
            this.checkedCategories[category] = event.target.checked;
        },

        async openBuyModal(celeb) {
            try {
                const celebData = await Celebs.getCelebById(celeb.id);
                this.selectedCeleb = celebData;
                this.operationType = 'buy';
                this.showBuyModal = true;
                this.buyQuantity = 0.00; // Reset or initialize buyQuantity
            } catch (error) {
                console.error("Error fetching celeb data:", error);
                // Handle the error appropriately
            }
        },

        closeBuyModal() {
            this.showBuyModal = false;
        },

        async openSellModal(celeb) {
            try {
                const celebData = await Celebs.getCelebById(celeb.id);
                this.selectedCeleb = { ...celebData, owned: celeb.owned };
                this.operationType = 'sell';
                this.showSellModal = true;
                this.sellQuantity = 0.00;
            } catch (error) {
                console.error("Error fetching celeb data:", error);
            }
        },

        closeSellModal() {
            this.showSellModal = false;
        },



        async confirmPurchase() {
            const newBalance = this.userBalance - this.totalPrice;

            if (newBalance >= 0) {
                const quantityAsNumber = parseFloat(this.buyQuantity);

                // Log the transaction
                const transactions = new Transactions();
                await transactions.logTransaction(
                    Userauth.getCurrentUser().uid,
                    this.selectedCeleb.id,
                    quantityAsNumber,
                    this.selectedCeleb.currentPrice,
                    this.totalPrice,
                    "Shares bought",
                    "bought",
                );

                // Update the portfolio
                const userId = Userauth.getCurrentUser().uid;
                await this.updatePortfolio(userId, this.selectedCeleb.id, quantityAsNumber, this.selectedCeleb.currentPrice, true);

                // Update the user's wallet balance
                const wallet = new Wallet(Userauth.getCurrentUser().uid);
                await wallet.updateBalance(newBalance);

                // Update local user balance state
                this.userBalance = newBalance;

                // Close the modal
                this.closeBuyModal();

                // Fetch the updated data to reflect changes
                await this.fetchData();

                // Display an alert after a short delay
                setTimeout(() => {
                    alert("Purchase confirmed successfully.");
                }, 100);

            } else {
                // Display an error message or prevent the purchase
                setTimeout(() => {
                    alert("Insufficient funds to make the purchase.");
                }, 100);
            }
        },


        async confirmSale() {
            const newBalance = this.userBalance + this.totalPrice;

            // Calculate the total sale amount
            const totalSaleAmount = this.selectedCeleb.currentPrice * parseFloat(this.sellQuantity);
            const ownedShares = this.selectedCeleb.owned; // Assuming this represents the number of shares you own

            if (parseFloat(this.sellQuantity) > 0 && parseFloat(this.sellQuantity) <= ownedShares) {

                // Log the sell transaction
                const transactions = new Transactions();
                await transactions.logTransaction(
                    Userauth.getCurrentUser().uid,
                    this.selectedCeleb.id,
                    this.sellQuantity,
                    this.selectedCeleb.currentPrice,
                    totalSaleAmount,
                    "Shares sold",
                    "sold",
                );

                // Update the portfolio
                const userId = Userauth.getCurrentUser().uid;
                await this.updatePortfolio(userId, this.selectedCeleb.id, parseFloat(this.sellQuantity), this.selectedCeleb.currentPrice, false);
 
                // Update the wallet balance
                const wallet = new Wallet(Userauth.getCurrentUser().uid);
                await wallet.updateBalance(newBalance);

                // Update local user balance state
                this.userBalance = newBalance;

                // Close the sell modal
                this.closeSellModal();
                
                // Fetch the updated data to reflect changes
                await this.fetchData();

                // Display an alert after a short delay
                setTimeout(() => {
                    alert("Sale confirmed successfully.");
                }, 100);

            } else {
                setTimeout(() => {
                    alert("Sale declined. You do not own enough shares.");
                }, 100);
            }
        },


        async addNewCeleb() {
            try {
                const celebId = await Celebs.addCeleb(this.newCeleb);
                console.log("New Celeb added with ID:", celebId);
                // Clear form, update table, etc.
                this.showModal = false;
            } catch (error) {
                console.error("Error adding celeb:", error);
            }
        },



        updateCelebsWithPortfolio(holdingsData) {
            this.celebs = this.celebs.map(celeb => {
                const holdings = holdingsData[celeb.id] || { owned: 0, averagePrice: 0 };
                return { ...celeb, owned: holdings.owned, averagePrice: holdings.averagePrice };
            });
        },



        validateInput(quantityType) {
            // Check if the quantity type is valid
            if (!['buyQuantity', 'sellQuantity'].includes(quantityType)) {
                console.error('Invalid quantity type for validation');
                return;
            }

            // Remove any leading zeros
            this[quantityType] = this[quantityType].replace(/^0+/, '');

            // Remove any non-numeric or non-decimal characters (except one decimal point)
            this[quantityType] = this[quantityType].replace(/[^0-9.]/g, '');

            // Split the input into integer and decimal parts
            const parts = this[quantityType].split('.');

            // Ensure there's at most one decimal point
            if (parts.length > 2) {
                this[quantityType] = parts[0] + '.' + parts.slice(1).join('');
            }

            // Restrict to two decimal places
            if (parts.length === 2) {
                parts[1] = parts[1].substring(0, 2); // Truncate to two decimal places
                this[quantityType] = parts.join('.');
            }        
        },

        async updatePortfolio(userId, celebId, quantity, price, isPurchase) {
            const db = getFirestore();
            const portfolioRef = doc(db, 'portfolios', userId);
            const portfolioSnap = await getDoc(portfolioRef);
            let portfolioData = portfolioSnap.exists() ? portfolioSnap.data() : {};
            let celebHoldings = portfolioData.CelebHoldings || {};
            let holdings = celebHoldings[celebId] || {
                bought: 0,
                sold: 0,
                owned: 0,
                averagePrice: 0,
                totalInvested: 0,
                totalReturned: 0
            };

            if (isPurchase) {
                holdings.bought += quantity;
                holdings.owned += quantity;
                let newInvested = holdings.totalInvested + (quantity * price);
                holdings.totalInvested = isNaN(newInvested) ? holdings.totalInvested : newInvested;
                // Update average price only if there are owned shares
                if (holdings.owned > 0) {
                holdings.averagePrice = ((holdings.averagePrice * (holdings.owned - quantity)) + (price * quantity)) / holdings.owned;
                }
            } else {
                holdings.sold += quantity;
                holdings.owned -= quantity;
                let newReturned = holdings.totalReturned + (quantity * price);
                holdings.totalReturned = isNaN(newReturned) ? holdings.totalReturned : newReturned;
            }

            // Validate holdings to ensure no NaN values
            Object.keys(holdings).forEach(key => {
                if (typeof holdings[key] === 'number' && isNaN(holdings[key])) {
                console.error(`${key} is NaN for celebId: ${celebId}, resetting to 0.`);
                holdings[key] = 0; // Reset NaN to 0 or handle as needed
                }
            });

            celebHoldings[celebId] = holdings;
            portfolioData.CelebHoldings = celebHoldings;

            try {
                if (portfolioSnap.exists()) {
                await updateDoc(portfolioRef, portfolioData);
                } else {
                await setDoc(portfolioRef, portfolioData);
                }
                // console.log(`Portfolio updated for userId: ${userId}, celebId: ${celebId}`);
            } catch (error) {
                console.error(`Error updating portfolio for userId: ${userId}, celebId: ${celebId}: `, error);
            }
            }


    },



};
</script>
