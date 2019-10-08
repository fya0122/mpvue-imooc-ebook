<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <van-icon class="search" name="search" size="16px" color="#858C96"/>
      <input placeholder-style="color: #ADB4BE" @confirm="onConfirm" confirm-type="seach" @change="onChange" v-model="searchWord" :placeholder="hotSearch.length === 0 ? '搜索' : hotSearch" :disabled="disabled" :focus="focus" :maxlength="limit" class="search-bar-input"/>
      <van-icon v-if="searchWord.length > 0" @click="onClearClick" class="clear" name="clear"/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    /* 此刻focus是false，但会引发每输入一个字符，就导致focus为false，键盘自动消失的BUG，所以首页的input，肯定是要false，并且，disabled为true的 */
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    onSearchBarClick () {
      this.$emit('onClick')
    },
    onClearClick () {
      this.searchWord = ''
      this.$emit('onClear')
    },
    onChange (e) {
      const { value } = e.mp.detail
      this.$emit('onChange', value)
    },
    onConfirm (e) {
      const { value } = e.mp.detail
      this.$emit('onConfirm', value)
    },
    setValue (v) {
      this.searchWord = v
    },
    getValue () {
      return this.searchWord
    }
  }
}
</script>
<style lang="scss" scoped>
.search-bar {
  padding: 10px 15px;
  height: 40px;
  .search-bar-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #f5f7f9;
    border-radius: 20px;
    padding: 2px 15px;
    display: flex;
    align-items: center;
    .search {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .search-bar-input {
      flex: 1;
      color: #333;
      font-size: 14px;
      margin-left: 5px;
      background: transparent;
    }
    .clear {
      display: flex;
      align-items: center;
      height: 100%;
      &:active {
        opacity: 0.7;
      }
    }
  }
}
</style>
