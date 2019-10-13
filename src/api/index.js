import { get } from '../utils/request'
const API_URL = 'https://test.youbaobao.xyz:18081'

// index.vue 获取首页数据
export function getHomeData (params) {
  return get(`${API_URL}/book/home/v2`, params)
}

// index.vue 获取"为你推荐"数据
export function recommendChangeRecommend () {
  return get(`${API_URL}/book/home/recommend/v2`)
}

// index.vue 获取"免费阅读"数据
export function recommendChangeFreeRead () {
  return get(`${API_URL}/book/home/freeRead/v2`)
}

// index.vue 获取"当前最热"数据
export function recommendChangeHotBook () {
  return get(`${API_URL}/book/home/hotBook/v2`)
}
