<template>
  <div>
    <header-bar></header-bar>
    <loading v-if="isLoading"></loading>
    <div class="movie-detail">
      <top-dowd-load></top-dowd-load>
      <div class="content">
        <h1>{{movie.title}}</h1>
        <!--头部信息-->
        <div class="text">
          <div class="left">
            <rating v-if="movie.rating" :rating="movie.rating"></rating>
            <span>{{movie.ratings_count}}人评价</span>
            <p>
              <span>{{movie.year}}/</span>
              <span v-for="(n,i) in movie.genres" :key="i">{{n}}/</span>
              <span>{{directors.name}}(导演)/</span>
              <span v-for="cast in casts" :key="cast.id">{{cast.name}}/</span>
              <!--<span v-for="(contry,k) in movie.countries" :key="k">{{contry}}</span>-->
              <span>{{contry}}</span>
            </p>
            <a href="#">用App查看影人资料</a>
          </div>
          <div class="right">
            <img :src="imgs.small" alt="" width="100" height="140">
          </div>
        </div>
        <!--看过-->
        <div class="login">
          <router-link to="/">想看</router-link>
          <router-link to="/">看过</router-link>
        </div>
        <!--简介详情-->
        <div class="detail">
          <span> {{movie.title}}的剧情简介</span>
          <div class="txt">
            <p>{{movie.summary}}</p>
          </div>
          <div class="actor">
            <span>影人</span>
            <ul>
              <li v-for="c in casts" :key="c.id">
                <router-link :to="{name:'ActorView',params:{acid:c.id}}">
                  <div class="actorImg"><img :src="'https://images.weserv.nl/?url='+c.avatars.small" alt="演员" height="140" width="100"></div>
                  <p>{{c.name}}</p>
                  <span>演员</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!--评论部分-->
        <!--<div class="related">-->
          <!--<p>{{movie.title}}的短评</p>-->
          <!--<div class="user">-->
            <!--<img src="../../assets/img/txImg.png" alt="头像" height="40">-->
            <!--<rating v-if="movie.rating" :rating="movie.rating"></rating>-->
          <!--</div>-->
        <!--</div>-->
        <div class="ad">
          <img src="../../assets/img/ad.jpg" alt="" width="100%" height="96">
          <span>广告</span>
        </div>
      </div>
    </div>
    <down-load-app></down-load-app>
  </div>
</template>

<script>
  import HeaderBar from '../HeaderBar'
  import TopDowdLoad from '../../public/TopDowdLoad'
  import Rating from '../../public/Rating'
  import Loading from '../../public/Loading'
  import DownLoadApp from '../../public/DownLoadApp'

  export default {
    name: 'Movie',
    data() {
      return {
        movie: {},
        isLoading: true,
        imgs: {},
        casts: [],
        directors: [],
        contry: [],
        comment:[]
      }
    },
    components: {
      HeaderBar,
      TopDowdLoad,
      Rating,
      Loading,
      DownLoadApp
    },
    created() {
      const id = this.$route.params.id
      this.axios.get('api/movie/subject/' + id)
        .then((res) => {
          this.isLoading = false
          let movie = res.data
          let imgs = movie.images
          let casts = movie.casts
          let directors = movie.directors[0]
          let contry = movie.countries[0]
          // this.$set(casts,casts)
          this.casts = casts
          this.imgs = imgs
          this.movie = movie
          this.directors = directors
          this.contry = contry
          // console.log(movie)
        })
        .catch((err) => console.log(err))
      // this.axios.get('/comement/'+id+'&parent=movie&apikey=GDAHhEue3IG14xZVS4PBhQ4KkescpJJr3Nm3HJtRb4xx7md0FdmwfCaoYqua0qn3')
      //   .then((res)=>{
      //     let comment = res.data.data
      //     this.comment = comment
      //     console.log(comment)
      //   })
      //   .catch((err)=>console.log(err))
    }
  }
</script>

<style lang="scss">
  .movie-detail {
    margin-top: 47px;
  }

  .content {
    padding: 15px;
    span {
      color: #aaa;
    }
    h1 {
      margin: 15px 0 5px;
      font-size: 24px;
      line-height: 32px;
      word-break: break-all;
    }
    .rating {
      display: inline-block;
      margin-right: 20px;
    }
    .star-full {
      display: inline-block;
      width: 15px;
      height: 15px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==);
      background-size: cover;
    }

    .star-gray {
      display: inline-block;
      width: 15px;
      height: 15px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=);
      background-size: cover;
    }

    .star-half {
      display: inline-block;
      width: 15px;
      height: 15px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAyhJREFUSA29l89rE0EUx99siqZgm0YFC00KVXuwUSMUpGitBaFgi0VEhIqHWkHw4B+gCIognrz1ZrwKVVSqtYIn9SDVHkQFQSOEmkYqaNOkQjRt8vxuyK6TzUx+LLQDm3nzfsxn982b2Q2Ry8bP/JOJROLT3Nyc380UhpsgnvLvJhLDzLzDMIwzbuZwBSZDnLNgQvyXLV0tfd1gvkcbiNh+SoDDSHd3LTDZp24wbfINkxBb5Uk8Ho+dAVlfSa4fLAwV5HQ8Hm+sBHLa6gLzdGOAmAackyDdPlwnnfpK47rAxBtHkWZdjCoTWrZukrIAxv4B9GyZoajAE/ch3Tt1dqe+ZjBNtfQDvN05gTQGW4xJ44qi4Kf+ETxLEF4+9D7KF3trzNRSsBE1O9Oc2PMhCxi2l91WIf3EwZKGPo0+VeytsalLw+d7Aw6Du3aYKThzIEqs1QYNcGgFrNV0RF/wl3tLBoZfF6zr+7Ng0ELyCDFPrBcXqX4P1n4DdfqHBpMjgN9YazigT1KpVG9bW1u8sKJYCRaDyStE+VHcQHYtbgDQW5FI5HgoFPptzl9WOjzdchjqR6iMqu9ZRVWX3TOAK7guBIPBO7LRWcMkBpdeEq/2IAlfZUc3MoCLuAacUHOuMrCpFEPLXygDONOMOXbZvgHaA+gLVbwSbDqKE8u/8NTvVEG16ABNAxrV+WrBhQBBfbrAanocFKH5+fktOj8tmB82mUFdusAa9CKfzx/S+WnB5PUgqHjm6aKr6PEhqM2YHsz6oCo824x0Y2uqmx5sVFlfJrNwnquntbXhaDTabI8kQQnmSWrCCbZP8pNEXkG136Qfi3sDgcAxVO8pGBckB1n0eL3eXllhyUowNWw+iOX1WE52z/QG7+tucTR5uXDGwwD4/Ww2uwvibVz4UCltunVWgw0uLQqmZWTgIr1dPCCGkh9Lpybq6OhYwsF/PpfL9SMDn2U7xsp1VoOZpG3Aj4kyXXiJjItreN4Krb29/VUmkwljG10H0HrZdMdiMa8zzPxiULUZJG0bce6SGEo9UDnodJ2dnX9hu4p/FxP40B+HzLOzs6iL0vYPbfQF9yQ167cAAAAASUVORK5CYII=);
      background-size: cover;
    }
    .average {
      font-size: 15px;
      color: #494949;
    }
    .text {
      display: flex;
      height: 140px;
      margin-bottom: 35px;
      .left {
        flex: 2;
        p {
          margin-top: 15px;
          padding-right: 24px;
          font-size: 14px;
          line-height: 1.6;
          span {
            color: #494949;
          }
        }
        a {
          display: block;
          margin-top: 10px;
          line-height: 1;
          font-size: 14px;
          color: #42bd56;
        }
      }
      .right {
        flex: 1;
        padding: 5px 0px;
      }
    }
    .login {
      display: flex;
      margin-bottom: 20px;
      a {
        display: block;
        height: 30px;
        margin-right: 10px;
        line-height: 30px;
        font-size: 15px;
        text-align: center;
        color: #ffb712;
        border: 1px solid #ffb712;
        border-radius: 3px;
        -ms-flex: 1;
        flex: 1;
      }
    }
    .txt {
      margin: 20px 0;
      p {
        font-size: 15px;
        color: #494949;
        line-height: 20px;
      }
    }
    .actor {
      ul {
        height: 220px;
        margin-top: 20px;
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        li {
          margin-right: 10px;
          display: inline-block;
          text-align: center;
          p {
            font-size: 14px;
            line-height: 1.5;
            white-space: normal;
            text-align: center;
            color: #494949;
            margin: 6px 0;
          }
          span {
          }
        }
      }
    }
    .related{
      p{
        color: #aaa;
        font-size: 15px;
      }
    }
    .ad{
      line-height: 96px;
      height: 96px;
      position: relative;
      span{
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
  }
</style>
