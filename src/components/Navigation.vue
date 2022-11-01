<template>
    <div>
        <el-menu class="navigation" mode="horizontal" :ellipsis="false" v-if="!$route.meta.isNav">
            <!-- TODO:获取用户信息-用户名 -->
            <el-menu-item index="0">
                <div>
                    你好 请先 <router-link :to="{ path: '/login', query: { type: 2 } }" class="color">登录</router-link>
                    或 <router-link :to="{ path: '/login', query: { type: 1 } }" class="color">注册</router-link>
                </div>
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">我的订单</el-menu-item>
            <el-sub-menu index="2">
                <template #title>购物车</template>
                <!-- TODO:购物车简略信息 -->
                <el-menu-item index="2-1">item one</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>我的</template>
                <el-menu-item index="2-1">item one</el-menu-item>
            </el-sub-menu>
        </el-menu>
        <!-- 导航下半部分 -->
        <div class="navigation-bottom">
            <div>
                <router-link to="/">
                    <img src="@/assets/images/cereshop/home/eshop.png" />
                </router-link>
            </div>
            <!-- TODO:根据路由不同进行隐藏 -->
            <div class="search-wrap" v-if="$route.meta.isSearch">
                <el-icon :size="15">
                    <i-ep-search></i-ep-search>
                </el-icon>
                <el-input v-model="searchParams"></el-input>
                <el-button type="primary">搜索</el-button>
            </div>
        </div>

    </div>
</template>
  
<script setup>


const searchParams = ref("")
</script>
  
<style lang="scss">
.flex-grow {
    flex-grow: 1;
}

.navigation {
    box-sizing: border-box;
    padding: 0 50px !important;
    height: 50px;
    border: none;
    padding: 0;
    background-color: #f1f2f7;

    .color {
        color: $color !important;
        text-decoration: none;
    }
}

.search-wrap {
    border: #ee8031 2px solid;
    display: flex;
    align-items: center;

    .el-icon {
        padding-left: 10px;
        color: $secondary;
    }

    .el-button {
        border-radius: 0;
    }

    .el-input__wrapper {
        box-shadow: none;
        width: 250px;
    }
}

.navigation-bottom {
    height: $nav-buttom-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;
}
</style>
  