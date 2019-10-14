import { getOpenId } from './index'
export function getUserSettings (auth, onSuccess, onFail) {
  mpvue.getSetting({
    success (res) {
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail (err) {
      console.log('getSetting走到了err', err) // 直接抛出异常
    }
  })
}

export function getUserInfo (onSuccess, onFail) {
  mpvue.getUserInfo({
    success (res) {
      const { userInfo } = res
      if (userInfo) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail (res) {
      console.log(res) // 直接抛出异常
    }
  })
}

export function setStorageSync (key, data) {
  mpvue.setStorageSync(key, data)
}

export function getStorageSync (key) {
  return mpvue.getStorageSync(key)
}

export function getUserOpenId (callback) {
  mpvue.login({
    success (res) {
      if (res.code) {
        const { code } = res
        // 拿到code
        getOpenId(code).then(response => {
          const { data: { data: { openid } } } = response
          setStorageSync('openId', openid)
          callback && callback(openid)
        }).catch(err => {
          console.log(err) // 直接抛出异常
        })
      } else {
        console.log(res) // 直接抛出异常
      }
    },
    fail (res) {
      console.log(res) // 直接抛出异常
    }
  })
}
