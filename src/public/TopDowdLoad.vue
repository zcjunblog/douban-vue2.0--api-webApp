<template>
  <!--下载app-->
  <div class="list-banner">
    <div class="text">
      <span>用 App 打开 <br> 更多优质原创内容</span>
    </div>
    <div class="button">
      <a href="">急速下载</a>
      <a href="">打开</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'TopDowdLoad'
    }
</script>

<style lang="scss" scoped>
  .list-banner {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 15px;
    height: 85px;
    width: 100%;
    background: url("../assets/img/app.jpg") center center no-repeat;
    background-size: cover;
    .text {
      flex: 1;
      font-size: 14px;
      font-weight: normal;
      line-height: 22px;
      color: #2CA532;
    }
    .button {
      flex: 1;
      text-align: right;
      a {
        border: 1px solid #42bd56;
        margin-left: 8px;
        font-size: 13px;
        font-weight: bold;
        padding: 5px 14px;
        border-radius: 3px;
      }
      & > a:first-child {
        color: #fff;
        background: #42bd56;
      }
      & > a:last-child {
        color: #42bd56;
        border-radius: 3px;
      }
    }
  }
</style>
