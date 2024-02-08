<template>
    <div class="stats">
        <span class="font-primary profile-nav">
            <span class="">Balance </span>
            <b>{{ formattedBalance }}</b>
        </span>
    </div>
</template>

<script>
import Userauth from '@/auth/auth.js';
import Wallet from "@/auth/wallet.js";

export default {
    data() {
        return {      
            userBalance: 0.00, // User's balance
        };
    },
    computed: {
        formattedBalance() {
            // Format the balance as a string with comma separators for thousands
            return this.userBalance.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        },
    },
    async created() {
        await this.checkAndFetchData();
    },
    methods: {     
        async checkAndFetchData() {
            if (Userauth.isAuthenticated()) {
                await this.fetchData();
            } else {
                console.log("User not authenticated");
            }
        },
        async fetchData() {
            const userId = Userauth.getCurrentUser()?.uid;
            if (!userId) {
                console.error("User not authenticated");
                return;
            }
            const wallet = new Wallet(userId);
            await wallet.initializeWallet();
            const walletSnapshot = await wallet.getWalletData();
            if (walletSnapshot.exists()) {
                this.userBalance = walletSnapshot.data().balance;
            } else {
                console.log("No wallet data found for the user");
            }
        },
    },
};
</script>
