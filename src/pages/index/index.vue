<template>
  <div class="home">
    <search-bar @onClick="onSearchBarClick" :disabled="true"></search-bar>
    <!--    <image-view height="200px" mode="scaleToFill" src="https://www.youbaobao.xyz/mpvue-res/big.jpg"></image-view>-->
    <home-card></home-card>
    <home-banner @onClick="onBannerClick" img="http://www.youbaobao.xyz/book/res/bg.jpg" title="mpvue2.0实战多端小程序上线啦" sub-title="立即体验"></home-banner>
    <div :style="{marginTop: '23px'}">
      <home-book @onMoreClick="onMoreClick" :btn-text="'换一批'" :mode="'col'" :data="data" :row="2" :col="1" title="为你推荐"></home-book>
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
  data () {
    return {
      data: [
        {
          'id': 34,
          'fileName': '2018_Book_GeographiesOfTheUniversity',
          'cover': 'https://www.youbaobao.xyz/book/res/img/Geography/978-3-319-75593-9_CoverFigure.jpg',
          'title': 'Geographies of the University',
          'author': 'Peter Meusburger',
          'publisher': 'Springer International Publishing',
          'bookId': '2018_Book_GeographiesOfTheUniversity',
          'category': 7,
          'categoryText': 'Geography',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        },
        {
          'id': 59,
          'fileName': '2018_Book_DrinkingInVictorianAndEdwardia',
          'cover': 'https://www.youbaobao.xyz/book/res/img/History/978-3-319-92964-4_CoverFigure.jpg',
          'title': 'Drinking in Victorian and Edwardian Britain',
          'author': 'Thora Hands',
          'publisher': 'Springer International Publishing',
          'bookId': '2018_Book_DrinkingInVictorianAndEdwardia',
          'category': 8,
          'categoryText': 'History',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        },
        {
          'id': 60,
          'fileName': '2018_Book_HarnessingThePowerOfTheCrimina',
          'cover': 'https://www.youbaobao.xyz/book/res/img/History/978-3-319-77908-9_CoverFigure.jpg',
          'title': 'Harnessing the Power of the Criminal Corpse',
          'author': 'Sarah Tarlow',
          'publisher': 'Springer International Publishing',
          'bookId': '2018_Book_HarnessingThePowerOfTheCrimina',
          'category': 8,
          'categoryText': 'History',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        },
        {
          'id': 75,
          'fileName': '2018_Book_TheEuropeanBloodAndMarrowTrans',
          'cover': 'https://www.youbaobao.xyz/book/res/img/MedicineAndPublicHealth/978-3-319-50026-3_CoverFigure.jpg',
          'title': 'The European Blood and Marrow Transplantation Textbook for Nurses',
          'author': 'Michelle Kenyon',
          'publisher': 'Springer International Publishing',
          'bookId': '2018_Book_TheEuropeanBloodAndMarrowTrans',
          'category': 17,
          'categoryText': 'MedicineAndPublicHealth',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        }
      ]
    }
  },
  methods: {
    onSearchBarClick () {
      // 跳转到搜索页面
    },
    onBannerClick () {
      console.log(123)
    },
    onMoreClick () {
      console.log('点击了更多')
    }
  }
}
</script>
