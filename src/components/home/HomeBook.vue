<template>
  <div class="home-book">
    <div class="home-book-header">{{ title }}</div>
    <div class="home-book-content">2</div>
    <div class="home-book-footer">3</div>
  </div>
</template>
<script>
import { HOME_BOOK_MODE } from '../../utils/const'

export default {
  props: {
    // 标题栏
    title: {
      type: String,
      default: ''
    },
    // 图书列表
    data: {
      type: Array,
      default: []
    },
    // 按钮文本
    btnText: {
      type: String,
      default: ''
    },
    // 行数
    row: {
      type: Number,
      default: 0
    },
    // 列数
    col: {
      type: Number,
      default: 1
    },
    // 模式
    mode: {
      type: String,
      // 显示模式，row - 按行显示，col - 按列显示，category - 分类显示
      default: HOME_BOOK_MODE.ROW
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: true
    },
    // 是否显示按钮
    showBtn: {
      type: Boolean,
      default: true
    },
    // 是否显示背景
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 点击更多按钮事件
    onMoreClick () {},
    // 图书点击事件
    onBookClick () {}
  }
}
</script>
<style lang="scss" scoped>
.home-book {
  .home-book-header {
    padding: 13px 0 0 20.5px;
  }
  .home-book-content {}
  .home-book-footer {}
}
</style>
