<template>
    <Breadcrumbs title="Transactions" />

    <div class="container-fluid">
        <div class="email-wrap bookmark-wrap">
            <div class="row">
                <transactions/>
            </div>
        </div>
    </div>
</template>

<script>
import transactions from './transactions.vue'
export default {
    components: {
        transactions
    },
}
</script>
