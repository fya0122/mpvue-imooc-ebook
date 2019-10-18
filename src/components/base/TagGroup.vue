<template>
  <div class="tag-group-wrapper">
    <div class="tag-group-header">
      <div class="header-text">{{ headerText }}</div>
      <div @click="onBtnClick" class="header-btn">{{ btnText }}</div>
    </div>
    <div class="tag-group">
      <div class="tag-group-inner" v-for="(item, index) of value" :key="index">
        <tag @onTagClick="onTagClick(item, index)" :text="item"></tag>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from './Tag'
export default {
  components: {
    Tag
  },
  props: {
    headerText: String,
    btnText: String,
    value: Array
  },
  methods: {
    onTagClick (text, index) {
      this.$emit('onTagClick', text, index)
    },
    onBtnClick () {
      this.$emit('onBtnClick')
    }
  }
}
</script>

<style scoped lang="scss">
.tag-group-wrapper {
  .tag-group-header {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 20px;
    .header-text {
      color: #333;
    }
    .header-btn {
      color: #3696ef;
    }
  }
  .tag-group {
    display: flex;
    flex-flow: row wrap;
    padding: 4px 10px 0 10px;
    .tag-group-inner {
      padding: 12px 6px 0 6px;
    }
  }
}
</style>
