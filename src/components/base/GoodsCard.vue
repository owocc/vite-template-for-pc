<template>
    <!-- TODO:点击跳转到商品详情 -->
    <div class="card">
        <el-image class="image" :src="api + cardData.image" fit="fill"></el-image>
        <b>商品名称</b>
        <div class="price-wrap">
            <b class="price">{{cardData.price ? cardData.price : "¥00.00"}}</b>
            <span class="del">{{cardData.otPrice ?  cardData.otPrice :"¥99.99"}}</span>
        </div>
        <el-divider class="divider" />
        <span class="discription">{{cardData.storeInfo ? cardData.storeInfo :"商品描述信息..."}}</span>
    </div>
</template>
<script setup>
const props = defineProps(['height', 'cardData'])
const api = getCurrentInstance().proxy.$api
</script>
<style lang='scss' scoped>
.card {
    width: 100%;
    min-height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2%;
    height: v-bind("props.height");
    padding-bottom: 20px;
    transition: all .3s;

    &:hover {
        box-shadow: 0 0 8px rgba($color: #000000, $alpha: .1);
    }

    .image {
        height: 100%;
        width: 100%;
    }

    .divider {
        width: 50%;
        margin: 5px 0;
    }
}

.price-wrap {
    display: flex;
    gap: 15px;
    align-items: center;
    .price {
        color: $color;
        font-size: 1.2rem;
    }

    .del {
        text-decoration: line-through;
    }
}

.discription {
    color: rgba($color: #000000, $alpha: .5);
}
</style>