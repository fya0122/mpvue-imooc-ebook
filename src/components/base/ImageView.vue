<template>
  <div class="image-view" @click="onImageViewClick" :style="{ height }">
    <img v-show="!isLoading && !error" @load="onImageViewLoad" @error="onImageViewError" :class="round ? 'round image' : 'image'" :style="{ height: height }" :src="src" :mode="mode" :lazy-load="lazyLoad"/>
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
      // 一定要在图片渲染完成的时候
      if (newVal && newVal.length > 0 && newVal !== oldVal) {
        this.$nextTick(() => {
          this.isLoading = true
          this.error = false
        })
      }
    }
  },
  computed: {
  },
  data () {
    return {
      isLoading: true,
      error: false
    }
  },
  methods: {
    onImageViewClick () {
      this.$emit('onImageViewClick')
    },
    // 图片加载成功
    onImageViewLoad () {
      this.isLoading = false
      this.error = false
    },
    // 图片加载失败
    onImageViewError () {
      this.error = true
      this.isLoading = false
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
    &.filterYes {
      -webkit-filter: blur(9px);
      filter: blur(9px);
    }
  }
}
</style>
