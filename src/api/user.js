import request from "@/utils/request";

//用户相关API

/**
 * 用户登录
 * @params data 用户账号和密码 username 和 password 字段
 */
export const login = (data) =>
  request({
    url: "/login",
    method: "post",
    data,
  });

/**
 * 获取用户信息
 */
export const getUserInfo = () =>
  request({
    url: "/userinfo",
    method: "get",
  });

export default {
  login,
};
