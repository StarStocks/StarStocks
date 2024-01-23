<template>
<Breadcrumbs title="Leaderboards" />
<div class="container-fluid ">
    <div class="row">
        <pieChart />
    </div>
    <div class="row">
        <mainleaderboard />
    </div>
</div>
</template>

<script>
import pieChart from "./pieChart.vue"
import mainleaderboard from "./mainleaderboard.vue"
export default {
    components: {
        pieChart, mainleaderboard
    }
};
</script>
