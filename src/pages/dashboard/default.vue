<template>
    <div>
        <Breadcrumbs title="Dashboard" />

        <div class="container-fluid">
            <div class="row widget-grid">
                <WelcomeCard />
                <PurchaseSaleCard />
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
