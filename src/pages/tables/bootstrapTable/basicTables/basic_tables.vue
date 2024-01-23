<template>
    <Breadcrumbs title="Portfolio"/>
    <div class="container-fluid basic_table">
        <div class="row">
            <portfolio/>
        </div>
    </div>
</template>
<script>
import portfolio from "./table.vue"

export default {
    components:{
        portfolio,
    }
}
</script>