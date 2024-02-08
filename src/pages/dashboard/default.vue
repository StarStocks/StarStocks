<template>
    <div class="view">
        <div>
            <div class="container-fluid">
                <div class="page-title">
                    <div class="row">
                        <div class="col-6 d-flex">
                            <h3>Dashboard</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row widget-grid">
                    <WelcomeCard />
                    <PurchaseSaleCard />
                </div>
            </div>


        </div>
    </div>
</template>



<script>
import WelcomeCard from "./default/WelcomeCard.vue";
import PurchaseSaleCard from "./default/PurchaseSaleCard.vue";

export default {
    components: {
        WelcomeCard,
        PurchaseSaleCard,
    },
};
</script>
