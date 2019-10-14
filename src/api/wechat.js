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
      console.log('getSetting走到了err', err)
    }
  })
}
