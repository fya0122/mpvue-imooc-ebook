<template>
  <div class="auth-wrapper">
    <div class="auth">
      <div class="auth-info">
        <div class="auth-img">
          <image-view src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"></image-view>
        </div>
        <div class="sub-title">登录小慕读书</div>
        <div class="title">全球好书免费读</div>
      </div>
      <button class="auth-btn">授权登录</button>
    </div>
  </div>
</template>
<script>
import ImageView from './ImageView'
export default {
  components: {
    ImageView
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
    .auth-info {
      .auth-img {}
      .sub-title {}
      .title {}
    }
    .auth-btn {}
  }
}
</style>
