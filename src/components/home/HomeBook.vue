<template>
  <div class="home-book">
    <div class="home-book-header">{{ title }}</div>
    <div class="home-book-content">
      <!-- 再次重申：实际开发，不要用index当做key -->
      <div class="home-book-row" v-for="(item, index) of bookData" :key="index">
        <div :style="{ flex: '0 0 ' + (100 / col) + '%' }" class="home-book-col" v-for="(book, bookIndex) of item" :key="bookIndex">
          <div v-if="mode === HOME_BOOK_MODE.COL || mode === HOME_BOOK_MODE.ROW" @click="onHomeBookImgClick" :style="{flexDirection: mode === HOME_BOOK_MODE.COL ? 'column' : 'row'}" class="book-wrapper">
            <image-view :src="book.cover"></image-view>
            <div v-if="mode === HOME_BOOK_MODE.COL" class="book-title-wrapper book-title-col">
              <div class="book-title">{{ book.title }}</div>
            </div>
            <div v-else class="book-title-wrapper book-title-row">
              <div class="book-title">{{ book.title }}</div>
              <div class="book-title-author-wrapper">
                <div class="book-title book-author">{{ book.author }}</div>
                <div class="book-title book-author">{{ book.categoryText }}</div>
              </div>
            </div>
          </div>
          <div class="category-wrapper" v-else>
            <div class="category-text">{{ book.text }}</div>
            <div class="category-num">{{ book.num }}</div>
            <div class="category-img-wrapper">
              <div class="category-img1">
                <image-view :src="book.cover"></image-view>
              </div>
              <div class="category-img2">
                <image-view :src="book.cover2"></image-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-book-footer" v-if="showBtn" @click="onHomeBookBtnClick">
      <van-button round custom-class="home-book-btn">{{ btnText }}</van-button>
    </div>
  </div>
</template>
<script>
import { HOME_BOOK_MODE, CATEGORY } from '../../utils/const'
import ImageView from '../base/ImageView'

export default {
  components: {
    ImageView
  },
  props: {
    // 标题栏
    title: {
      type: String,
      default: ''
    },
    // 图书列表
    data: {
      type: Array,
      default: []
    },
    // 按钮文本
    btnText: {
      type: String,
      default: ''
    },
    // 行数
    row: {
      type: Number,
      default: 0
    },
    // 列数
    col: {
      type: Number,
      default: 1
    },
    // 模式
    mode: {
      type: String,
      // 显示模式，row - 按行显示，col - 按列显示，category - 分类显示
      default: HOME_BOOK_MODE.ROW
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: true
    },
    // 是否显示按钮
    showBtn: {
      type: Boolean,
      default: true
    },
    // 是否显示背景
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 点击更多按钮事件
    onHomeBookBtnClick () {
      this.$emit('onHomeBookBtnClick')
    },
    // 图书点击事件
    onHomeBookImgClick () {
      this.$emit('onHomeBookImgClick')
    }
  },
  computed: {
    HOME_BOOK_MODE () {
      return HOME_BOOK_MODE
    },
    /* 二维数组 */
    bookData () {
      const { col, row, data } = this
      if (data && data.length > 0) {
        // 新增，目的是把英文弄成中文的
        data.forEach(book => {
          book.text = CATEGORY[book.categoryText.toLowerCase()]
        })
        const number = row * col
        const _bookData = data.slice(0, number)
        const _bookDataRow = []
        let _row = 0
        while (_row < row) {
          _bookDataRow.push(_bookData.slice(_row * col, _row * col + col))
          _row++
        }
        return _bookDataRow
      } else {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home-book {
  .home-book-header {
    padding: 13px 0 0 20.5px;
  }
  .home-book-content {
    padding: 0 12px;
    margin-top: 10.5px;
    .home-book-row {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 12px;
      .home-book-col {
        padding: 0 8px;
        box-sizing: border-box;
        .book-wrapper {
          display: flex;
          .book-title-wrapper {
            &.book-title-col {
              .book-title {
                font-size: 12px;
                color: #212731;
                line-height: 16.5px;
                max-height: 33px;
                font-weight: 500;
                overflow: hidden;
                word-break: break-word;
              }
            }
            &.book-title-row {
              flex: 0 0 50%;
              padding: 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .book-title {
                font-size: 14px;
                color: #1f1f1f;
                line-height: 18px;
                max-height: 36px;
                overflow: hidden;
                word-break: break-word;
              }
              .book-author {
                font-size: 12px;
                color: #868686;
                line-height: 14px;
                max-height: 14px;
              }
            }
          }
        }
        .category-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #f8f9f8;
          border-radius: 10px;
          height: 96px;
          box-sizing: border-box;
          padding: 13px 0 14.5px 16px;
          .category-text {
            width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #212832;
            font-size: 16px;
            line-height: 22.5px;
          }
          .category-num {
            color: #868686;
            font-size: 12px;
            line-height: 16.5px;
          }
          .category-img-wrapper {
            position: absolute;
            right: 0;
            bottom: 0;
            .category-img1 {
              position: absolute;
              right: 0;
              bottom: -5px;
              z-index: 100;
              width: 48px;
              >>>.image {
                border-radius: 0 0 10px 0;
              }
            }
            .category-img2 {
              position: absolute;
              right: 30px;
              bottom: -5px;
              z-index: 90;
              width: 36px;
            }
          }
        }
      }
    }
  }
  .home-book-footer {
    margin-top: 12px;
    padding: 12px 20px 20px;
    >>>.home-book-btn {
      width: 100%;
      font-size: 14px;
      color: #3696ef;
      border: 1px solid #edeeee;
    }
  }
}
</style>
