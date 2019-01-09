<template>
  <div>
    <header-bar></header-bar>
    <loading v-if="isLoading"></loading>
    <div class="actor">
      <h1>{{actor.name}}-{{actor.name_en}}</h1>
      <div class="pers">
      <div class="xinxi">
        <p>性别：{{actor.gender}}</p>
        <p>生日：{{actor.birthday}}</p>
        <p>星座：{{actor.constellation}}</p>
        <p>出生地：{{actor.born_place}}</p>
      </div>
        <div class="persimg">
          <img :src="'https://images.weserv.nl/?url='+avatars.small" alt="" width="100">
        </div>
      </div>
      <a href="#" class="collect">收藏</a>
      <div class="introduce">
        <p>影人介绍</p>
        <span>{{actor.summary}}</span>
      </div>
      <div class="photos">
        <p>照片({{photos.length}})</p>
        <ul>
          <li v-for="(p,u) in photos" :key="u"><img :src="'https://images.weserv.nl/?url='+p.image" alt="照片" height="120"></li>
        </ul>
      </div>
    </div>
    <down-load-app></down-load-app>
  </div>
</template>

<script>
  import HeaderBar from '../HeaderBar'
  import Loading from '../../public/Loading'
  import DownLoadApp from '../../public/DownLoadApp'

  export default {
    name: 'ActorView',
    components: {
      HeaderBar,
      Loading,
      DownLoadApp
    },
    data(){
      return{
        actor:{},
        avatars:{},
        photos:[],
        works:[],
        isLoading:true
      }
    },
    created() {
      const id = this.$route.params.acid
      this.axios.get('api/movie/celebrity/' + id + '?apikey=0df993c66c0c636e29ecbb5344252a4a')
        .then((res) => {
          this.isLoading = false
          let actor = res.data
          let avatars = actor.avatars
          let photos = actor.photos
          let works = actor.works
          this.works = actor.works
          this.photos =photos
          this.actor =actor
          this.avatars = avatars
          // console.log(works)
        })
        .catch((err)=>console.log(err))
    }
  }
</script>

<style lang="scss" scoped>
  .actor {
    padding: 15px;
    margin-top: 47px;
    h1{
      margin: 15px 0 5px;
      font-size: 24px;
      line-height: 32px;
      word-break: break-all;
    }
    .pers{
      display: flex;
      .xinxi{
        flex: 2;
        p{
          color: #494949;
          margin-top: 10px;
          padding-right: 24px;
          font-size: 14px;
          line-height: 1.6;
        }
      }
      .persimg{
        flex: 1;
        text-align: center;
      }
    }
    .collect{
      display: block;
      height: 30px;
      width: 128px;
      margin-right: 10px;
      line-height: 30px;
      font-size: 15px;
      text-align: center;
      color: #ffb712;
      border: 1px solid #ffb712;
      border-radius: 3px;
    }
    .introduce{
      p{
        color: #aaa;
        margin: 20px 0;
        font-size: 15px;
      }
      span{
        font-size: 15px;
        color: #494949;
        line-height: 20px;
        text-align: justify;
      }
    }
    .photos{
      p{
        color: #aaa;
        font-size: 15px;
        margin: 20px 0;
      }
      ul{
        height: 140px;
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        li{
          display: inline-block;
        }
      }
    }
  }
</style>
