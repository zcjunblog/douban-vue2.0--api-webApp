<template>
  <div>
    <loading v-if="isLoading"></loading>
    <div class="homeNav">
      <ul class="home-nav">
        <li>
          <router-link to="/hotmovie">影院热映</router-link>
        </li>
        <li>
          <router-link to="/europemusic">欧美音乐</router-link>
        </li>
        <li>
          <router-link to="/register">注册账号</router-link>
        </li>
        <li>
          <router-link to="/login">登陆账号</router-link>
        </li>
      </ul>
    </div>
    <div class="homeLists" v-for="(item,key) in events" :key="key">
      <router-link class="home-list" :to="{name: 'ListContentView', params: { evid: item.id}}">
        <div class="home-text">
          <h3>{{item.title}}</h3>
          <p>{{item.content|subStr}}</p>
          <span>by&nbsp;{{item.owner.name}}</span>
        </div>
        <div class="home-img">
          <img :src="item.image" alt="">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Loading from '../public/Loading'
  import ListContentView from './pageview/ListContentView'
  export default {
    name: 'Home',
    components: {
      ListContentView,
      Loading
    },
    data() {
      return {
        events: [],
        isLoading: true,
        count: 10
      }
    },
    created() {
      let count =  this.count
      this.$http.get('/api/event/list?loc=108288&start=1&count='+count)
        .then((res) => {
          this.isLoading = false
          let events = res.data.events
          this.events = events
          // console.log(events)
        })
        .catch((err) => console.log(err))
    },
    // created() {
    //   this.axios({
    //     headers: {
    //       'X-Requested-With': 'XMLHttpRequest',
    //       'Content-Type': 'application/json; charset=UTF-8',
    //       'Access-Control-Allow-Origin': '*'
    //     },//设置跨域请求头
    //     method: "GET",
    //     url: "/api"
    //   })
    //     .then((res) => {
    //       let events = JSON.parse(res.data).events
    //       this.isLoading = false
    //       this.events = events
    //     })
    //     .catch(function (err) {
    //       console.log(err);
    //     });
    // },
    filters: {//过滤器+slice+正则截取字数
      subStr: function (value) {
        let newVal = value.replace(/<.*?>/g, '')
        return newVal.slice(0, 36)
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .home-nav {
    overflow: hidden;
    padding-top: 50px;
    margin: 20px;
    box-sizing: border-box;
    li {
      float: left;
      width: 50%;
      padding: 3px;
      box-sizing: border-box;
      font-size: 15px;
      a {
        background-color: #f6f6f6;
        color: #494949;
        display: block;
        text-align: center;
        line-height: 20px;
        padding: 12px 0;
        border-radius: 2px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }
  }

  .homeLists {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #e3e3e3;
    }
    .home-list {
      display: flex;
      box-sizing: border-box;
      padding: 25px 18px 25px 0;
      margin-left: 18px;
      position: relative;
      color: #494949;
      .home-text {
        position: relative;
        flex: 3;
        padding-right: 60px;
        box-sizing: border-box;
        h3 {
          text-align: justify;
          margin-bottom: 10px;
          font-size: 17px;
          font-weight: 600;
          line-height: 25px;
          max-height: 50px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        p {
          overflow: hidden;
          text-align: justify;
          color: #aaa;
          font-size: 12px;
          line-height: 1.5;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
        span {
          position: absolute;
          bottom: -14px;
          font-size: 12px;
          color: #9e9e9e;
        }
      }
      .home-img {
        flex: 1;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
