import axios from "axios";
import { ElMessage, ElLoading } from "element-plus";
import useUserStore from "@/store/user";

//挂载仓库
const userStore = useUserStore();
//获取app上挂载的全局方法

const request = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 5000,
});

//加载动画
let loadingInstance;
//请求拦截器
request.interceptors.request.use(
  //正常发送请求
  (config) => {
    //token
    loadingInstance = ElLoading.service({ fullscreen: true }); //创建加载动画
    config.headers["Authorization"] = "Bearer " + userStore.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
request.interceptors.response.use(
  (response) => {
    loadingInstance.close();
    if (response.data.status >= 200 && response.data.status < 300) {
      return response.data;
    } else {
      ElMessage({
        type: "warning",
        message: response.data.msg,
      });
      return response.data.msg;
    }
  },
  //axios拦截器,当状态码不为2开头时触发(大概率不会有机会触发),除非,咩有连接到后台
  (error) => {
    ElMessage({
      type: "error",
      message: `错误: ${error}`,
    });
    return Promise.reject(error);
  }
);
export default request;
