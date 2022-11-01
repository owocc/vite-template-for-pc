<template>
    <div>
        <el-form label-position="top">
            <el-form-item label="手机号码">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input>
                    <template #append>
                        <!-- 验证码 -->
                        <el-button>获取验证码</el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="昵称">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input></el-input>
            </el-form-item>
            <el-form-item class="flex-s-b row-r">
                <router-link :to="{ path: '/login', query: { type: 2 } }" class="color">登录</router-link>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="max-but big-but">注册</el-button>
            </el-form-item>
            <el-divider />
            <el-form-item>
                <el-checkbox >阅读并同意<a href="">《eshop 服务协议》</a></el-checkbox>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>

</script>
<style lang='scss' scoped>
</style>