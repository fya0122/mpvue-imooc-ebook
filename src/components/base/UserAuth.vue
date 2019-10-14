<template>
  <div class="auth-wrapper">
    <div class="auth">
      <div class="auth-info">
        <div class="auth-img">
          <image-view round src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"></image-view>
        </div>
        <div class="sub-title">登录小慕读书</div>
        <div class="title">全球好书免费读</div>
      </div>
      <button @getuserinfo="getUserInfoUserAuth" open-type="getUserInfo" class="auth-btn">授权登录</button>
    </div>
  </div>
</template>
<script>
import ImageView from './ImageView'
export default {
  components: {
    ImageView
  },
  methods: {
    getUserInfoUserAuth () {
      this.$emit('getUserInfoUserAuth')
    }
  }
}
</script>
<style lang="scss" scoped>
.auth-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #999;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  .auth {
    width: 270px;
    height: 248px;
    background-color: #f5f5f5;
    border-radius: 18px;
    position: relative;
    .auth-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 22.5px;
      .auth-img {
        width: 74px;
      }
      .sub-title {
        font-size: 13px;
        color: #999;
        line-height: 18.5px;
        margin-top: 18px;
      }
      .title {
        font-size: 16px;
        color: #333;
        font-weight: 400;
        line-height: 22.5px;
        margin-top: 3.5px;
      }
    }
    .auth-btn {
      position: absolute;
      width: 100%;
      bottom: 0;
      color: #fff;
      font-size: 15px;
      height: 49px;
      line-height: 49px;
      background-image: linear-gradient(90deg, #1ea3f5 0%, #0f87fc 100%);
      border-radius: 0 0 18px 18px;
    }
  }
}
</style>
