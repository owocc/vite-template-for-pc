<template>
    <div>
        <el-form label-position="top">
            <el-form-item label="手机号码">
                <el-input v-model="params.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="params.password" show-password></el-input>
            </el-form-item>
            <el-form-item class="flex-s-b">
                <el-checkbox label="七天免登录"></el-checkbox>
                <router-link :to="{ path: '/login', query: { type: 1 } }" class="color">用户注册</router-link>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="max-but big-but">立即登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
const params = reactive({
    username: '',
    password: ''
})
// console.log(toRaw(params));

</script>
<style lang='scss' scoped>

</style>