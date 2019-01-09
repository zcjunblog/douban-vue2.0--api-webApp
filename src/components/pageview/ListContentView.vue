<template>
  <div>
    <header-bar></header-bar>
    <loading v-if="isLoading"></loading>
    <div class="list-content">
      <top-dowd-load></top-dowd-load>
      <!--内容部分-->
      <div class="content">
        <h2>{{detail.title}}<span>{{detail.loc_name}}</span></h2>
        <div class="img"><img :src="detail.image_lmobile"></div>
        <div class="detail">
          <p><span>开始时间: </span>{{detail.begin_time}}</p>
          <p><span>结束时间: </span>{{detail.end_time}}</p>
          <p><span>类型: </span>{{detail.category_name}}</p>
          <p><span>费用: </span>{{detail.fee_str}}</p>
          <p><span>地点: </span>{{detail.address}}</p>
          <p><span>购票开始时间: </span>{{detail.time_str}}</p>
        </div>
        <div class="text">
          <h2>活动详情</h2>
          <span v-html="detail.content"></span>
        </div>
        <div class="author">
          <a :href="alt">
            <img :src="avatar">
            <div class="txt">
              <p><span>作者： </span>{{authorName}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <down-load-app></down-load-app>
  </div>
</template>

<script>
  import HeaderBar from '../HeaderBar'
  import Loading from '../../public/Loading'
  import DownLoadApp from '../../public/DownLoadApp'
  import TopDowdLoad from '../../public/TopDowdLoad'

  export default {

    // console.log(id)
    name: 'ListContentView',
    components: {
      HeaderBar,
      Loading,
      DownLoadApp,
      TopDowdLoad
    },
    data() {
      return {
        isLoading: true,
        detail: [],
        alt:'',
        avatar:'',
        authorName:''
      }
    },
    created() {
      const id =this.$route.params.evid
      this.$http.get('/api/event/'+id)
        .then((res) => {
          this.isLoading = false
          let detail = res.data
          let alt = detail.owner.alt
          let avatar =detail.owner.avatar
          let authorName =detail.owner.name
          this.authorName = authorName
          this.avatar =avatar
          this.alt =alt
          this.detail = detail
          // console.log(authorName)
        })
        .catch((err) => console.log(err))
    },
    // created() {
    //   this.axios({
    //     headers: {
    //       'X-Requested-With': 'XMLHttpRequest',
    //       'Content-Type': 'json; charset=UTF-8',
    //       'Access-Control-Allow-Origin': '*'
    //     },//设置跨域请求头
    //     method: "GET",
    //     url: "/list"
    //   })
    //     .then((res) => {
    //       let detail = JSON.parse(res.data)
    //       this.isLoading = false
    //       this.detail = detail
    //       console.log(detail)
    //     })
    //     .catch(function (err) {
    //       console.log(err);
    //     });
    // }
    // beforeRouteEnter: (to, from, next) => {
    //   next((vm) => {
    //     // console.log(vm.$router.params.id)
    //     vm.axios({
    //       headers: {
    //         'X-Requested-With': 'XMLHttpRequest',
    //         'Content-Type': 'application/json; charset=UTF-8',
    //         'Access-Control-Allow-Origin': '*'
    //       },//设置跨域请求头
    //       method: "GET",
    //       url:('/list/:id', {params: {id: 'id'}})
    //     })
    //       .then((res) => {
    //         let events = JSON.parse(res.data)
    //         this.isLoading = false
    //         this.events = events
    //         console.log(events);
    //       })
    //       .catch(function (err) {
    //         console.log(err);
    //       });
    //   })
    // }
  }
</script>

<style lang="scss" scoped>
  .list-content {
    margin-top: 47px;
    background-color: #fff;
  }

  .content {
    padding: 10px;
    h2 {
      line-height: 28px;
      margin: 20px 0;
      font-weight: bold;
      font-size: 18px;
      color: #494949;
      span {
        display: inline-block;
        padding: 4px 8px;
        margin-bottom: 4px;
        vertical-align: middle;
        line-height: 18px;
        font-size: 12px;
        color: #fff;
        background-color: #FF8263;
        border-radius: 2px;
      }
    }
    .img {
      max-width: 650px;
      text-align: center;
      margin-bottom: 20px;
      img {
        width: 300px;
      }
    }
    .detail {
      line-height: 30px;
      font-size: 14px;
      span {
        color: #666666;
      }
    }
    .text {
      max-width: 650px;
      overflow: hidden;
      h2 {
        color: #072;
      }
      img {
        width: 300px;
      }
    }
    .author {
      position: relative;
      height: 100px;
      line-height: 140px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 15px;
        box-sizing: border-box;
        img {
          height: 40px;
          width: 40px !important;
          border-radius: 50%;
          margin-right: 34px;
        }
        .txt {
          font-size: 16px;
          font-weight: bold;
          color: #494949;
          span {
            color: #8c8c8c;
          }
        }
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 10px;
        height: 10px;
        right: 18px;
        top: 48px;
        border: 2px solid #ccc;
        border-bottom: 0;
        border-left: 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transform-origin: top;
        transform-origin: top;
      }
    }
  }
</style>
