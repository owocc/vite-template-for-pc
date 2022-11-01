<template>
    <div class="bg-wrap">
        <div class="container">
            <div class="page-title">
                <img src="@/assets/images/dzuo.png" />
                <span>{{ $route.query.type == 1 ? '注册' : '登录' }}</span>
                <img src="@/assets/images/dyou.png"/>
            </div>
            <component :is="currentForm"></component>
        </div>
        <!-- registration- -->
    </div>
</template>
<script setup>
import router from '@/router';
import { computed, } from 'vue';
import LoginForm from './LoginForm.vue'
import RegistrationForm from './RegistrationForm.vue'

const currentForm = computed(() => {
    if (router.currentRoute.value.query.type == 1) {
        return markRaw(RegistrationForm)
    }
    else {
        return markRaw(LoginForm)
    }
})

</script>
<style lang='scss' scoped>
.bg-wrap {
    min-height: calc(100vh - $nav-buttom-height);
    width: 100vw;
    background-image: url('@/assets/images/loginBg.jpg');
    background-size: cover;
    display: flex;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
}

.container {
    width: 35%;
    background: #fff;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: .1);
}

.page-title {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;

    img {
        height: 3px;
    }

    span {
        color: $color;
        font-size: 1.8rem;
    }

}
</style>