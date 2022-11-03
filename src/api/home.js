import request from "@/utils/request";

/**
 *
 * @returns 返回商品分类信息
 */
export const reqCategory = () =>
  request({
    url: "/category",
    method: "get",
  });

/**
 *
 * @returns 返回精品推荐数据
 */
export const reqBastList = () =>
  request({
    url: "/index/bastList",
    method: "get",
  });

export const reqLike = () =>
  request({
    url: "/index/like",
    method: "get",
  });
