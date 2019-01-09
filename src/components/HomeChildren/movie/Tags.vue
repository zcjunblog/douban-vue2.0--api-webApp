<template>
<div class="movie-tags">
  <ul>
    <li v-for="(m,k) in movieTags" :key="k">
      <a :href="dbUrl+m.href">{{m.title}}<span></span></a>
    </li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'Tags',
    data(){
      return{
        dbUrl: 'https://m.douban.com/',
        movieTags: [
          {
            title: '经典',
            href: 'movie/classic'
          },
          {
            title: '冷门',
            href: 'movie/underrated'
          },
          {
            title: '高分',
            href: 'movie/doubantop'
          },
          {
            title: '动作',
            href: 'movie/action'
          },
          {
            title: '喜剧',
            href: 'movie/comedy'
          },
          {
            title: '爱情',
            href: 'movie/love'
          },
          {
            title: '悬疑',
            href: 'movie/mystery'
          },
          {
            title: '恐怖',
            href: 'movie/horror'
          },
          {
            title: '科幻',
            href: 'movie/scifi'
          },
          {
            title: '治愈',
            href: 'movie/sweet'
          },
          {
            title: '文艺',
            href: 'movie/artfilm'
          },
          {
            title: '成长',
            href: 'movie/youth'
          },
          {
            title: '动画',
            href: 'movie/animation'
          },
          {
            title: '华语',
            href: 'movie/chinese'
          },
          {
            title: '欧美',
            href: 'movie/western'
          },
          {
            title: '韩国',
            href: 'movie/korean'
          },
          {
            title: '日本',
            href: 'movie/japanese'
          }
        ]
      }
    }
  }
</script>

<style scoped>
ul{
  padding: 1.12rem 0 1.88rem;
  color: #eee;
  font-size: .9rem;
  overflow: hidden;
  text-align: center;
}
  li{
    width: 42.5%;
    border-top: solid 1px #eee;
    border-right: solid 1px #eee;
    float: left;
    padding-right: 1.12rem;
    height: 2.64rem;
  }
  a{
    float: left;
    display: inline-block;
    width: 100%;
    line-height: 2.64rem;
    color: #42bd56;
  }
  span{
    color: #ccc;
    float: right;
    font-weight: bold;
    display: inline-block;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    width: .5rem;
    height: .5rem;
    transform: rotate(-45deg);
    margin-top: 1rem;
  }
</style>
