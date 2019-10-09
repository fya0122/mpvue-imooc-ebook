<template>
  <div class="home">
    <search-bar @onClick="onSearchBarClick" :disabled="true"></search-bar>
<!--    <image-view height="200px" mode="scaleToFill" src="https://www.youbaobao.xyz/mpvue-res/big.jpg"></image-view>-->
    <home-card></home-card>

  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
// import ImageView from '../../components/base/ImageView'
import HomeCard from '../../components/home/HomeCard'
export default {
  components: {
    SearchBar,
    // ImageView,
    HomeCard
  },
  methods: {
    onSearchBarClick () {
      // 跳转到搜索页面
    }
  }
}
</script>
