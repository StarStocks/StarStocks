<template>
    <br>
    <div class="col-sm-6"> 
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
    
    <div class="col-sm-6"> 
        <!-- Trigger Button for Modal -->
        <button v-if="isAdmin" class="btn btn-primary" @click="showModal = true">Add new Celebrity</button>
    
        <!-- Modal -->
        <div v-if="showModal" class="modal fade show" style="display: block;" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">Add New Celebrity</h5>
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
                            <div class="col-12">
                                <textarea v-model="newCeleb.desc" class="form-control" placeholder="Description" rows="3"></textarea>
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
                                <input type="number" v-model="newCeleb.mentions" class="form-control" placeholder="Mentions">
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
    <div v-if="showModal" class="modal-backdrop fade show"></div>

    
    <br>
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header">
                <h3>Market</h3>
            </div>

            <div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Owned</th>
                        <th>Average Price</th>
                        <th>Current Price</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="celeb in celebs" :key="celeb.id">
                        <td>{{ celeb.firstName }} {{ celeb.lastName }}</td>
                        <td><div class="avatar"><img :src="celeb.imgURL" alt="celeb image" class="img-100 rounded-circle"></div></td>
                        <td>{{ celeb.desc }}</td>
                        <td>{{ celeb.category }} - {{ celeb.subcategory }} - {{ celeb.team }}</td>
                        <td>1.00</td>
                        <td>1.00</td>
                        <td>{{ celeb.currentPrice.toFixed(2) }}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" @click="openBuyModal(celeb)">Buy</button>
                            <p></p>
                            <button class="btn btn-secondary btn-sm" @click="openSellModal(celeb)">Sell</button>
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
                                    <label for="sellQuantity">Quantity to Sell</label>
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
                
                <div v-if="showSellModal" class="modal-backdrop fade show"></div>

                
                
            </div>
        </div>
    </div>
</template>
  
<script>
import Celebs from '@/data/celebs/celebs.js';
import Userauth from '@/auth/auth.js';
import Wallet from "@/auth/wallet.js";
import Transactions from '@/auth/transactions.js';

export default {
    data() {
        return {      
            newCeleb: {
            firstName: '',
            lastName: '',
            username: '', 
            imgURL: '', 
            desc: '', 
            category: '', 
            subcategory: '', 
            team: '', 
            mentions: '', 
            issuePrice: '', 
            currentPrice: '',
            },

            celebs: [], // Array to store celebrities
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

    computed: {

        totalPrice() {
            if (this.selectedCeleb) {
                const quantity = this.operationType === 'buy' ? this.buyQuantity : this.sellQuantity;
                return this.selectedCeleb.currentPrice * parseFloat(quantity || 0);
            }
            return 0.00;
        }
    },
    
    methods: {

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
                this.selectedCeleb = celebData;
                this.operationType = 'sell';
                this.showSellModal = true;
                this.sellQuantity = 0.00; // Reset or initialize buyQuantity
            } catch (error) {
                console.error("Error fetching celeb data:", error);
                // Handle the error appropriately
            }
        },

        closeSellModal() {
            this.showSellModal = false;
        },

        async confirmPurchase() {
            const newBalance = this.userBalance - this.totalPrice;

            if (newBalance >= 0) {
                // Convert buyQuantity to a number
                const quantityAsNumber = parseFloat(this.buyQuantity);

                // Log the transaction
                const transactions = new Transactions();
                await transactions.logTransaction(
                    Userauth.getCurrentUser().uid, // User ID
                    this.selectedCeleb.id,
                    quantityAsNumber,              // Converted quantity
                    this.selectedCeleb.currentPrice,                    
                    this.totalPrice,
                    "Shares bought",
                    "bought",
                );

                // Update the user's wallet balance
                const wallet = new Wallet(Userauth.getCurrentUser().uid);
                await wallet.updateBalance(newBalance);
                
                // Update local user balance state
                this.userBalance = newBalance;

                // Close the modal
                this.closeBuyModal();

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
            // Calculate the total sale amount
            const totalSaleAmount = this.selectedCeleb.currentPrice * parseFloat(this.sellQuantity);

            // Update the user's wallet balance
            const newBalance = this.userBalance + totalSaleAmount;
            
            if (this.sellQuantity > 0 && totalSaleAmount <= this.userBalance) {
                // Log the sell transaction
                const transactions = new Transactions();
                await transactions.logTransaction(
                    Userauth.getCurrentUser().uid, // User ID
                    this.selectedCeleb.id,
                    this.sellQuantity,              // Quantity sold
                    this.selectedCeleb.currentPrice,
                    totalSaleAmount,
                    "Shares sold",
                    "sold",
                );

                // Update the wallet balance
                const wallet = new Wallet(Userauth.getCurrentUser().uid);
                await wallet.updateBalance(newBalance);

                // Update local user balance state
                this.userBalance = newBalance;

                // Close the sell modal
                this.closeSellModal();

                // Display an alert after a short delay
                setTimeout(() => {
                    alert("Sale confirmed successfully.");
                }, 100);

            } else {
                // Display an error message or prevent the purchase
                setTimeout(() => {
                    alert("Sale declined.");
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

        async fetchData() {
            const userId = Userauth.getCurrentUser().uid;
            const wallet = new Wallet(userId);

            await wallet.initializeWallet();
            const walletSnapshot = await wallet.getWalletData();
            if (walletSnapshot.exists()) {
                this.userBalance = walletSnapshot.data().balance;
            }

            this.celebs = await Celebs.getAllCelebs();
            const userRole = await Userauth.getUserDetailsAndRole();
            this.isAdmin = userRole === 'admin';
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
    }
    },

        
    async created() {
        await this.fetchData();
    },

    async mounted() {

        await this.fetchData();
        Celebs.subscribeToCelebUpdates((updatedCelebs) => {
            this.celebs = updatedCelebs;
        });

    }
};
</script>
  