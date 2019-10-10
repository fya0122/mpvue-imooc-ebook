<template>
  <div class="image-view" @click="onClick">
    <img v-show="!isLoading && !error" @load="onLoad" @error="onError" :class="round ? 'round image' : 'image'" :style="{ height: height }" :src="src" :mode="mode" :lazy-load="lazyLoad"/>
    <img v-show="isLoading || error" :class="round ? 'round image' : 'image'" :style="{ height: height }" src="https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg" :mode="mode" :lazy-load="lazyLoad"/>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'widthFix'
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    /* 是否原型图片，默认是false */
    round: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  watch: {
    src (newVal, oldVal) {
    }
  },
  data () {
    return {
      isLoading: true,
      error: false
    }
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    },
    // 图片加载成功
    onLoad () {
      this.isLoading = false
      this.error = false
      // console.log('我是onLoad事件')
    },
    // 图片加载失败
    onError () {
      this.error = true
      this.isLoading = false
      // console.log('我是onError事件')
    }
  }
}
</script>
<style lang="scss" scoped>
.image-view {
  width: 100%;
  .image {
    width: 100%;
    &.round {
      border-radius: 50%;
    }
  }
}
</style>
