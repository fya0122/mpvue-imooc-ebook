<template>
  <div>
    <tag text="测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本" @onTagClick="onTagClick"></tag>
  </div>
</template>
<script>
import Tag from './../../components/base/Tag'
export default {
  components: {
    Tag
  },
  methods: {
    onTagClick () {
      console.log('你好')
    }
  }
}
</script>
