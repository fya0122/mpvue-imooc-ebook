<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <image-view height="100%" mode="scaleToFill" :src="avatar" round></image-view>
        </div>
        <div class="nickname">{{ nickname }}</div>
        <div class="shelf-text">书架共有{{ data.num }}本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wrap">
          <div @click="onHomeCardClick" v-for="item of bookList" :key="item.id" class="book-img-wrapper">
            <image-view :src="item.cover"></image-view>
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon color="#828489" size="11px" class="arrow" name="arrow"></van-icon>
        </div>
      </div>
      <div class="feedback-wrapper" @click="onHomeCardFeedBackClick">反馈</div>
    </div>
    <!-- 实际上我们在使用dialog这个组件的时候，一定要在dom上写入，否则是不生效的，这是一个坑，而且必须要写入id -->
    <van-dialog id="van-dialog"></van-dialog>
  </div>
</template>
<script>
import ImageView from './../base/ImageView'
import Dialog from 'vant-weapp/dist/dialog/dialog'
export default {
  components: {
    ImageView
  },
  props: {
    data: Object,
    hasSign: {
      // 今天是否签到
      type: Boolean,
      default: false
    },
    signDay: {
      // 连续签到天数
      type: Number,
      default: 0
    }
  },
  computed: {
    avatar () {
      return (this.data && this.data.userInfo && this.data.userInfo.avatarUrl) || ''
    },
    nickname () {
      return (this.data && this.data.userInfo && this.data.userInfo.nickName) || ''
    },
    bookList () {
      return (this.data && this.data.bookList) || []
    }
  },
  methods: {
    onHomeCardClick () { // 点击图书的时候，触发的事件
      this.$emit('onHomeCardClick')
    },
    onHomeCardFeedBackClick () {
      Dialog.confirm({
        title: '反馈',
        message: '您是否确认提交反馈信息?',
        confirmButtonText: '是',
        cancelButtonText: '否'
      }).then(() => {
        console.log('点击 是 之后的事件')
      }).catch(() => {
        console.log('点击 否 之后的事件')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home-card {
  background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
  border-radius: 15px;
  margin: 22px 20px 0;
  .home-card-inner {
    position: relative;
    padding: 21.5px 17px 20px 20px;
    box-sizing: border-box;
    .user-info {
      display: flex;
      align-items: center;
      .avatar-wrapper {
        width: 20px;
        height: 20px;
      }
      .nickname, .shelf-text {
        font-size: 12px;
        color: #fff;
      }
      .nickname {
        margin-left: 8.5px;
      }
      .shelf-text {
        opacity: 0.7;
      }
      .round-item {
        width: 4px;
        height: 4px;
        background: #a2a2a2;
        border-radius: 50%;
        margin: 0 8px;
      }
    }
    .book-info {
      display: flex;
      margin-top: 16.5px;
      .book-wrap {
        display: flex;
        flex: 1;
        justify-content: space-around;
        .book-img-wrapper {
          width: 72px;
          height: 101px;
        }
      }
      .shelf-wrapper {
        display: flex;
        align-items: center;
        .shelf {
          width: 11px;
          font-size: 11px;
          word-break: break-all;
          color: #fff;
          opacity: 0.8;
        }
      }
    }
    .feedback-wrapper {
      position: absolute;
      right: 0;
      top: 19.5px;
      border-radius: 100px 0 0 100px;
      width: 44.5px;
      height: 23.5px;
      /* background-color: #d8d8d8; */
      /* opacity: 0.3; */
      background-color: rgba(216, 216, 216, 0.3);
      color: #fff;
      font-size: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
