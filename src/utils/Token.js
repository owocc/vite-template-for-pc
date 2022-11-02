/**
 * @params rememberme 用户是否勾选了记住我
 * @params token token
 */
export const setToken = (rememberme, token) => {
  //根据用户选择进行不同的存储方式
  if (rememberme) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
};

/**
 * 从本地存储/会话中获取token,优先从本地存储获取
 * @returns 返回获取的 token,如果本地和会话存储中都没有数据的话,将会返回false
 */
export const getToken = () => {
  // 本地读取token
  let token = localStorage.getItem("token");
  if (token != null) return token;
  // 会话读取token
  token = sessionStorage.getItem("token");
  if (token != null) return token;
  return null;
};

export default {
  setToken,
  getToken,
};
