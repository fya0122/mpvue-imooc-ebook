<template>
  <div class="home">
    <SearchBar @onClick="onSearchBarClick" :disabled="true"/>
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
export default {
  components: {
    SearchBar
  },
  methods: {
    onSearchBarClick () {
      // 跳转到搜索页面
    }
  }
}
</script>
