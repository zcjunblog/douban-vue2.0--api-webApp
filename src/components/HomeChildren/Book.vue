<template>
  <div>
    <header-bar></header-bar>
    <div class="content">
      <!--书籍展示-->
      <div class="header">
        <div class="header-title">
          <h3>最受关注图书｜虚构类</h3>
          <a href="#">更多</a>
        </div>
        <!--横向滑动展示-->
        <div class="book-show">
          <fiction></fiction>
        </div>
      </div>
      <div class="header">
        <div class="header-title">
          <h3>最受关注图书｜非虚构类</h3>
          <a href="#">更多</a>
        </div>
        <!--横向滑动展示-->
        <div class="book-show">
        <non-fiction></non-fiction>
        </div>
      </div>
      <div class="header sell">
        <div class="header-title">
          <h3>豆瓣书店</h3>
          <a href="#">更多</a>
        </div>
        <!--推荐购买书籍-->
        <div class="book-sell">
         <div class="bookImg">
           <img src="../../assets/img/sellbook.jpg" alt="" width="100" height="140">
         </div>
          <div class="bookDetail">
            <a href="#">吉本芭娜娜作品系列</a>
            <span>¥ 295</span>
            <p>生命是一个疗伤的过程，吉本芭娜娜全新套装治愈2019</p>
          </div>
        </div>
        <!--横向滑动展示-->
        <div class="book-show">
          <travel></travel>
        </div>
      </div>
    </div>
    <!--标签-->
    <h3 class="tags-title">分类浏览</h3>
    <tags></tags>
    <!--广告-->
    <div class="mv-ad">
      <img src="../../assets/img/ad3.jpg" alt="" width="100%" height="96">
      <span class="ad-img">广告</span>
    </div>
    <!--app下载-->
    <down-load-app></down-load-app>
  </div>
</template>

<script>
  import HeaderBar from '../HeaderBar'
  import Tags from '../HomeChildren/movie/Tags'
  import DownLoadApp from '../../public/DownLoadApp'
  import Travel from './book/Travel'
  import Fiction from './book/Fiction'
  import NonFiction from './book/NonFiction'

  export default {
    name: 'Movies',
    components: {
      HeaderBar,
      Tags,
      DownLoadApp,
      Travel,
      Fiction,
      NonFiction
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 15px;
    margin-top: 34px;
    .header {
      height: 260px;
      .book-show {
        height: 230px;
      }
    }
    .header-title {
      display: flex;
      line-height: 40px;
      height: 40px;
      h3 {
        flex: 0 0 220px;
        color: #111;
        font-size: 1.06rem;
      }
      a {
        flex: 1;
        font-size: .9rem;
        line-height: 40px;
        text-align: right;
        color: #42bd56;
      }
    }
    .sell{
      height: 400px;
    }
    .book-sell{
      display: flex;
      height: 140px;
      .bookImg{
        flex: 1;
      }
      .bookDetail{
        flex: 2;
        a{
          float: left;
          font-size: 19px;
          color: #494949;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
        span{
          float: right;
          color: #E76648;
          font-size: 16px;
          line-height: 22px;
        }
        p{
          margin-top: 30px;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.5;
          color: #9B9B9B;
        }
      }
    }
  }
  .tags-title{
    font-size: 18px;
    color: #111;
    padding-left: 15px;
    font-size: 1.06rem;
  }
  .mv-ad{
    line-height: 96px;
    height: 96px;
    position: relative;
    .ad-img{
      color: #aaa;
      position: absolute;
      bottom: 0;
      right: 0;
      display: inline-block;
      width: 34px;
      height: 23px;
      padding: 2px;
      line-height: 23px;
      text-align: center;
      background-color: rgba(0,0,0,0.4);
    }
  }
</style>
