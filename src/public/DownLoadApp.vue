<template>
  <div class="down">
    <div class="douimg">
      <img src="../assets/img/download.png" alt="" width="58">
      <div class="duoimg-txt">
        <strong>豆瓣</strong><br>
        <span>我们的精神角落</span>
      </div>
    </div>
    <a href="#">去 App Store 免费下载 iOS 客户端</a>
  </div>
</template>

<script>
  export default {
    name: 'DownLoadApp'
  }
</script>

<style scoped>
  .down {
    text-align: center;
    height: 120px;
    margin: 40px 0 36px 0;
  }

  a {
    color: #42bd56;
  }

  strong {
    font-size: 24px;

  }
  .douimg{
    margin-bottom: 20px;
    vertical-align: middle;
  }
  .duoimg-txt{
    position: relative;
    top: -5px;
    left: 5px;
    font-size: 14px;
    display: inline-block;
    text-align: left;
    line-height: 20px;
    width: 100px;
  }
</style>
