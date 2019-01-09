<template>
  <div class="group">
    <div class="content">
      <div class="write">
        <div class="img">
          <img src="../../assets/img/default.jpg" alt="" width="40">
          <span>请先登陆</span>
        </div>
        <div class="icon">
          <img src="../../assets/img/ic_status_pen.png" alt="">
          <img src="../../assets/img/ic_status_camera.png" alt="">
        </div>
      </div>
      <!--小组列表-->
      <group-list-a></group-list-a>
      <group-list-b></group-list-b>
      <group-list-c></group-list-c>
    </div>
    <down-load-app></down-load-app>
  </div>
</template>

<script>
  import DownLoadApp from '../../public/DownLoadApp'
  import GroupListA from './group/GroupListA'
  import GroupListB from './group/GroupListB'
  import GroupListC from './group/GroupListC'

  export default {
    name: 'Group',
    components: {
      GroupListC,
      GroupListB,
      GroupListA,
      DownLoadApp
    }
  }
</script>

<style lang="scss" scoped>
  .group{
    margin-top: 47px;
  }
  .content {
    padding: 15px;
    .write{
      display: flex;
      margin: 0 -18px 5px;
      padding: 0px 18px;
      cursor: pointer;
      border-bottom: 1px solid #E8E8E8;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      .img{
        flex: 1;
        display: flex;
        align-items: center;
        span{
          color: #aaa;
          padding-left: 15px;
        }
        img{
          border-radius: 50%;
        }
      }
      .icon{
        text-align: right;
        flex: 0 0 100px;
        img{
          margin-right: 20px;
        }
      }
    }
  }
</style>
