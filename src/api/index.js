import {get, post} from '../utils/request'
import { APP_ID, APP_SECRET } from '../utils/const'

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

// 获取微信用户的openId
export function getOpenId (code) {
  return get(`${API_URL}/openId/get`, {
    appId: APP_ID,
    secret: APP_SECRET,
    code
  })
}

// 注册
export function register (openId, userInfo) {
  return post(`${API_URL}/user/register`, {
    openId,
    platform: mpvuePlatform,
    ...userInfo
  })
}
