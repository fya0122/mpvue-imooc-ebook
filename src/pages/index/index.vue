<template>
  <div class="home">
    <search-bar :hot-search="hotSearch" @onClick="onSearchBarClick" :disabled="true"></search-bar>
    <home-card :data="homeCard"></home-card>
    <home-banner @onClick="onBannerClick" img="http://www.youbaobao.xyz/book/res/bg.jpg" title="mpvue2.0实战多端小程序上线啦" sub-title="立即体验"></home-banner>
    <div :style="{marginTop: '23px'}">
      <home-book @onBookClick="onHomeBookClick" @onMoreClick="onMoreClick" :btn-text="'换一批'" mode="col" :data="recommend" :row="1" :col="3" title="为你推荐"></home-book>
    </div>
    <div :style="{marginTop: '23px'}">
      <home-book @onBookClick="onHomeBookClick" @onMoreClick="onMoreClick" :btn-text="'换一批'" mode="row" :data="freeRead" :row="2" :col="2" title="免费阅读"></home-book>
    </div>
    <div :style="{marginTop: '23px'}">
      <home-book @onBookClick="onHomeBookClick" @onMoreClick="onMoreClick" :btn-text="'换一批'" mode="col" :data="hotBook" :row="1" :col="4" title="当前最热"></home-book>
    </div>
    <div :style="{marginTop: '23px'}">
      <home-book @onBookClick="onHomeBookClick" @onMoreClick="onMoreClick" :btn-text="'查看全部'" mode="category" :data="category" :row="3" :col="2" title="分类"></home-book>
    </div>
  </div>
</template>


<script>
import SearchBar from '../../components/home/SearchBar'
import HomeCard from '../../components/home/HomeCard'
import HomeBanner from '../../components/home/HomeBanner'
import HomeBook from '../../components/home/HomeBook'
import { getHomeData } from '../../api'

export default {
  components: {
    HomeBook,
    SearchBar,
    // ImageView,
    HomeCard,
    HomeBanner
  },
  data () {
    return {
      hotSearch: '',
      homeCard: {},
      banner: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: []
    }
  },
  mounted () {
    this.getHomeData()
  },
  methods: {
    getHomeData () {
      getHomeData({ openId: 1234 }).then((res) => {
        const { data: {
          hotSearch: {
            keyword
          },
          shelf,
          shelfCount,
          banner,
          recommend,
          freeRead,
          hotBook,
          category
        } } = res.data
        this.hotSearch = keyword
        this.banner = banner
        this.recommend = recommend
        this.freeRead = freeRead
        this.hotBook = hotBook
        this.category = category
        this.homeCard = {
          bookList: shelf,
          num: shelfCount,
          userInfo: {
            avatar: 'https://www.youbaobao.xyz/mpvue-res/logo.jpg',
            nickname: '米老鼠'
          }
        }
      })
    },
    onSearchBarClick () {
      // 跳转到搜索页面
    },
    onBannerClick () {
      console.log(123)
    },
    onMoreClick () {
      console.log('点击了更多')
    },
    onHomeBookClick () {
      console.log('点击了图片')
    }
  }
}
</script>
