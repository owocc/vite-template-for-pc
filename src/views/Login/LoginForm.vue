<template>
    <div>
        <el-form label-position="top" ref="userForm" :rules="rules" :model="params">
            <el-form-item label="手机号码" prop="username">
                <el-input v-model="params.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="params.password" show-password></el-input>
            </el-form-item>
            <el-form-item class="flex-s-b">
                <el-checkbox label="七天免登录" v-model="rememberme"></el-checkbox>
                <router-link :to="{ path: '/login', query: { type: 1 } }" class="color">用户注册</router-link>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="max-but big-but" @click="loginEvent(userForm)">立即登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
import { login } from '@/api/user'
import { setToken } from '@/utils/Token'
import useUserStore from '@/store/user'

//初始化仓库
const userStore = useUserStore();
//导入安装的全局对象
const { proxy } = getCurrentInstance()
//获取表单对象
const userForm = ref()

const params = reactive({
    username: '',
    password: ''
})

//表单验证方式
const rules = reactive({
    username: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
})
//是否记住登录状态
//如果用户选择了记住登录状态,那么就将 token 存到本地存储,如果没有,那么就存到本次会话窗口里
const rememberme = ref(false)

const loginEvent = (formEl) => {
    if (!formEl) return
    formEl.validate(async (valid) => {
        if (valid) {
            const res = await login(toRaw(params))
            if (res.status == 200) {
                //设置token存储到本地/会话中
                setToken(rememberme.value, res.data.token)
                //设置仓库token
                userStore.setStoreToken()
                //获取用户信息,存储到
            }
        } else {
            proxy.$message({
                type: 'warning',
                message: "请检查手机号或密码是否为空"
            })
            return false
        }
    })
}
</script>
<style lang='scss' scoped>

</style>