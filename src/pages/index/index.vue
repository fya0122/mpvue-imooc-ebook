<template>
  <div>
    <div v-if="isAuth" class="home">
      <search-bar :hot-search="hotSearch" @onSearchBarClick="onSearchBarClick" :disabled="true"></search-bar>
      <home-card :data="homeCard"></home-card>
      <home-banner @onHomeBannerClick="onHomeBannerClick" img="http://www.youbaobao.xyz/book/res/bg.jpg" title="mpvue2.0实战多端小程序上线啦" sub-title="立即体验"></home-banner>
      <div :style="{marginTop: '23px'}">
        <home-book ref="home_book_recommend" @onHomeBookImgClick="onHomeBookImgClick" @onHomeBookBtnClick="recommendChange('recommend')" :btn-text="'换一批'" mode="col" :data="recommend" :row="1" :col="3" title="为你推荐"></home-book>
      </div>
      <div :style="{marginTop: '23px'}">
        <home-book @onHomeBookImgClick="onHomeBookImgClick" @onHomeBookBtnClick="recommendChange('freeRead')" :btn-text="'换一批'" mode="row" :data="freeRead" :row="2" :col="2" title="免费阅读"></home-book>
      </div>
      <div :style="{marginTop: '23px'}">
        <home-book @onHomeBookImgClick="onHomeBookImgClick" @onHomeBookBtnClick="recommendChange('hotBook')" :btn-text="'换一批'" mode="col" :data="hotBook" :row="1" :col="4" title="当前最热"></home-book>
      </div>
      <div :style="{marginTop: '23px'}">
        <home-book @onHomeBookImgClick="onHomeBookImgClick" @onHomeBookBtnClick="reCategoryChange" :btn-text="'查看全部'" mode="category" :data="category" :row="3" :col="2" title="分类"></home-book>
      </div>
    </div>
    <user-auth @getUserInfoUserAuth="init" v-else></user-auth>
  </div>
</template>


<script>
import SearchBar from '../../components/home/SearchBar'
import HomeCard from '../../components/home/HomeCard'
import HomeBanner from '../../components/home/HomeBanner'
import HomeBook from '../../components/home/HomeBook'
import UserAuth from '../../components/base/UserAuth'
import {
  getHomeData,
  recommendChangeRecommend,
  recommendChangeFreeRead,
  recommendChangeHotBook,
  register
} from '../../api'
import {
  getUserSettings,
  getUserInfo,
  setStorageSync,
  getStorageSync,
  getUserOpenId,
  showLoading, hideLoading
} from '../../api/wechat'

export default {
  components: {
    HomeBook,
    SearchBar,
    // ImageView,
    HomeCard,
    HomeBanner,
    UserAuth
  },
  data () {
    return {
      hotSearch: '',
      homeCard: {},
      banner: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: [],
      // ture表示经过授权的
      isAuth: true
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getUserSettings()
    },
    getUserSettings () {
      getUserSettings('userInfo', () => {
        this.isAuth = true
        this.getUserInfoUserAuth()
      }, () => {
        this.isAuth = false
      })
    },
    // 授权组件的getUserInfo方法
    getUserInfoUserAuth () {
      getUserInfo((res) => {
        showLoading('正在加载')
        setStorageSync('userInfo', res.userInfo)
        const openId = getStorageSync('openId')
        if (!openId || openId.length === 0) {
          getUserOpenId((myOpenId) => {
            this.getHomeData(myOpenId, res.userInfo)
            register(myOpenId, res.userInfo)
          })
        } else {
          this.getHomeData(openId, res.userInfo)
          register(openId, res.userInfo)
        }
      }, (err) => {
        // 也建议在这里抛出异常
        console.log('no~')
        console.log(err)
      })
    },
    getHomeData (openId, userInfo) {
      getHomeData({ openId }).then((res) => {
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
          userInfo: userInfo
        }
        hideLoading()
      }).catch(() => {
        hideLoading()
      })
    },
    // search-bar组件的点击
    onSearchBarClick () {
      this.$router.push('/pages/search/main')
    },
    // home-banner组件的点击
    onHomeBannerClick () {
      console.log('onHomeBannerClick')
    },
    // home-book组件的点击
    onHomeBookImgClick () {
      console.log('onHomeBookImgClick')
    },
    // home-book组件的按钮点击
    recommendChange (key) {
      if (key === 'recommend') {
        recommendChangeRecommend().then((res) => {
          this.recommend = res.data.data
        })
      } else if (key === 'freeRead') {
        recommendChangeFreeRead().then((res) => {
          this.freeRead = res.data.data
        })
      } else if (key === 'hotBook') {
        recommendChangeHotBook().then((res) => {
          this.hotBook = res.data.data
        })
      }
    },
    // home-book组件的查看全部分类的跳转页面
    reCategoryChange () {
    }
  }
}
</script>
