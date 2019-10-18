<template>
  <div @click="onTagClick" class="tag-wrapper">
    <div style="font-size: 20px" class="tag">{{ text }}</div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    onTagClick () {
      this.$emit('onTagClick')
    }
  }
}
</script>
<style scoped lang="scss">
.tag-wrapper {
  background: #f7f7f9;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  padding: 6px 17px;
  .tag {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #272e37;
    font-size: 14px;
  }
}
</style>
