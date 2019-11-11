<template>
  <div class="search-item-wrapper" @click="onClickSearchItem">
    <div class="search-item-icon">
      <div class="icon-wrapper">
        <van-icon :name="icon" color="rgba(0, 0, 0, 0.5)" :style="{width: '20px', height: '20px'}"></van-icon>
      </div>
    </div>
    <div class="search-item-info">
      <div class="search-item-title">{{ title }}</div>
      <div class="search-item-sub-title">{{ subTitle }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    subTitle: String,
    icon: String
  },
  methods: {
    onClickSearchItem () {
      this.$emit('onClickSearchItem')
    }
  }
}
</script>
<style lang="scss" scoped>
.search-item-wrapper {
  padding: 15px;
  height: 36.5px;
  display: flex;
  align-items: center;
  .search-item-icon {
    .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #f7f7f9;
    }
  }
  .search-item-info {
    margin-left: 10px;
    .search-item-title {
      color: #333;
      font-size: 14px;
      line-height: 20px;
    }
    .search-item-sub-title {
      color: rgba(0, 0, 0, 0.45);
      font-size: 12px;
      line-height: 16.5px;
    }
  }
}
</style>
