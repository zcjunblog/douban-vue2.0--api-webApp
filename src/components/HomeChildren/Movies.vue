<template>
  <div>
    <header-bar></header-bar>
    <div class="content">
      <!--电影展示-->
      <div class="header">
        <div class="header-title">
          <h3>影院热映</h3>
          <a href="#">更多</a>
        </div>
        <!--横向滑动展示-->
        <div class="movies-show">
          <hot></hot>
        </div>
      </div>
      <div class="header">
        <div class="header-title">
          <h3>评分最高</h3>
          <a href="#">更多</a>
        </div>
        <!--横向滑动展示-->
        <div class="movies-show">
          <free></free>
        </div>
      </div>
      <div class="header">
        <div class="header-title">
          <h3>新片速递</h3>
          <a href="#">更多</a>
        </div>
        <!--横向滑动展示-->
        <div class="movies-show">
          <coming></coming>
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
  import Hot from '../HomeChildren/movie/Hot'
  import Free from '../HomeChildren/movie/Free'
  import Coming from '../HomeChildren/movie/Coming'
  import Tags from '../HomeChildren/movie/Tags'
  import DownLoadApp from '../../public/DownLoadApp'

  export default {
    name: 'Movies',
    components: {
      HeaderBar,
      Coming,
      Free,
      Hot,
      Tags,
      DownLoadApp
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 15px;
    margin-top: 34px;
    .header {
      height: 260px;
      .movies-show {
        height: 230px;
      }
    }
    .header-title {
      display: flex;
      line-height: 40px;
      height: 40px;
      h3 {
        flex: 1;
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
