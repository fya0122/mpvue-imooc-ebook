<template>
  <div class="search-list-wrapper">
    <search-item></search-item>
    <search-item></search-item>
    <search-item></search-item>
    <search-table></search-table>
  </div>
</template>
<script>
import SearchItem from './SearchItem'
import SearchTable from './SearchTable'
export default {
  components: {SearchTable, SearchItem},
  methods: {
    showList () {}
  }
}
</script>
