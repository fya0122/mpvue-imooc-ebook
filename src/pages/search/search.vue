<template>
  <div>
    <tag-group @onBtnClick="onBtnClick" @onTagClick="onTagClick" header-text="热门搜索" btn-text="换一批" :value="tags"></tag-group>
  </div>
</template>
<script>
import TagGroup from '../../components/base/TagGroup'
export default {
  components: {
    TagGroup
  },
  methods: {
    onTagClick (tag, index) {
      console.log(tag)
      console.log(index)
    },
    onBtnClick () {
      console.log(123)
    }
  },
  data () {
    return {
      tags: ['aaaa', 'bbbb', 'cccc', 'dddddddddddd', 'eeee']
    }
  }
}
</script>
