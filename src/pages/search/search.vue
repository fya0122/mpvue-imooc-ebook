<template>
  <div>
    <search-list></search-list>
  </div>
</template>
<script>

import SearchList from '../../components/search/SearchList'
export default {
  components: {
    SearchList
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
    }
  }
}
</script>
