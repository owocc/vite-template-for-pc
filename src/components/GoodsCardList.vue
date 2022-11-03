<!-- 渲染多个列表 -->
<template>
    <div class="list-container">
        <h2>{{ title ? title : "标题" }}</h2>
        <div class="card-list">
            <GoodsCard height="420px" v-for="card in cardList" :key="card.id" :cardData="card" />
        </div>
    </div>
</template>
<script setup>
import GoodsCard from '@/components/base/GoodsCard.vue'
const props = defineProps(['height', 'title', 'cardList'])
</script>
<style lang='scss' scoped>
.list-container {
    width: 100%;
}

.card-list {
    width: 100%;
    gap: 5%;
    display: grid;
    margin-top: 10px;
    grid-template-columns: repeat(4, 1fr);
    flex-wrap: wrap;
    padding-bottom: 10px;
}
</style>