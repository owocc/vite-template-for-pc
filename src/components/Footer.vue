<template>
    <div v-if="$route.query.meta.is"></div>
</template>
<script setup>
import router from '@/router';
const route = router.currentRoute.value 
console.log(route)
</script>
<style lang='scss' scoped>

</style>