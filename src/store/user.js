import { defineStore } from "pinia";
import { getToken } from "@/utils/Token";
export default defineStore("useUserStore", () => {
  //用户token,默认进入时回去本地存储查看token是否存在
  const token = ref(getToken());
  const UserInfo = ref({});

  //设置仓库中的token
  const setStoreToken = () => {
    token.value = getToken();
  };

  //获取用户信息,当拿到token后,
  const setUserInfo = () => {};
  return {
    token,
    setStoreToken,
    UserInfo,
    setUserInfo,
  };
});
