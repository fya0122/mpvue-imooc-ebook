<template>
  <div class="home">
    <search-bar @onClick="onSearchBarClick" :disabled="true"></search-bar>
<!--    <image-view height="200px" mode="scaleToFill" src="https://www.youbaobao.xyz/mpvue-res/big.jpg"></image-view>-->
    <home-card></home-card>
    <home-banner @onClick="onBannerClick" img="http://www.youbaobao.xyz/book/res/bg.jpg" title="mpvue2.0实战多端小程序上线啦" sub-title="立即体验"></home-banner>
    <div :style="{marginTop: '23px'}">
      <home-book title="为你推荐"></home-book>
    </div>
  </div>
</template>



<script>
import SearchBar from '../../components/home/SearchBar'
// import ImageView from '../../components/base/ImageView'
import HomeCard from '../../components/home/HomeCard'
import HomeBanner from '../../components/home/HomeBanner'
import HomeBook from '../../components/home/HomeBook'
export default {
  components: {
    HomeBook,
    SearchBar,
    // ImageView,
    HomeCard,
    HomeBanner
  },
  methods: {
    onSearchBarClick () {
      // 跳转到搜索页面
    },
    onBannerClick () {
      console.log(123)
    }
  }
}
</script>
