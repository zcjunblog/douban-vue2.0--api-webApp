<template>
  <div>
    <header-bar></header-bar>
    <div class="bookView">
      <top-dowd-load></top-dowd-load>
      <h1>{{book.title}}</h1>
      <div class="content">
        <!--头部文字图片信息-->
        <div class="mc-text">
          <div class="mc-txt">
            <rating v-if="book.rating" :rating="book.rating"></rating>
            <span>人评价</span>
            <p>{{book.summary}}</p>
          </div>
          <div class="mc-img">
            <img :src="'https://images.weserv.nl/?url='+book.image" alt="" width="100" height="140">
          </div>
        </div>
        <!--购买-->
        <div class="buy">
          <a href="#">在豆瓣购买</a>
          <span>{{book.price}}元起</span>
        </div>
        <!--想看-->
        <div class="listen">
          <a href="#">想读</a>
          <a href="#">在读</a>
          <a href="#">读过</a>
        </div>
        <!--标签-->
        <div class="tags">
          <p>相关标签</p>
          <ul>
            <li v-for="(tag,t) in tags" :key="t.count">{{tag.name}}</li>
          </ul>
        </div>
      </div>
      <!--广告-->
      <div class="ad">
        <img src="../../assets/img/ad2.jpg" alt="" width="100%" height="96">
        <span class="ad-img">广告</span>
      </div>
      <down-load-app></down-load-app>
    </div>
  </div>
</template>

<script>
  import Rating from '../../public/Rating'
  import HeaderBar from '../HeaderBar'
  import TopDowdLoad from '../../public/TopDowdLoad'
  import DownLoadApp from '../../public/DownLoadApp'
  export default {
    name: 'BookView',
    data(){
      return{
        book:{},
        tags:[]
      }
    },
    components: {
      HeaderBar,
      TopDowdLoad,
      Rating,
      DownLoadApp
    },
    created() {
      const id = this.$route.params.bkid
          this.axios.get('/api/book/'+id)
            .then((res)=>{
              let book = res.data
              let tags = res.data.tags
              this.tags = tags
              this.book = book
              // console.log(tags)
            })
            .catch((err)=>console.log(err))
    }
  }
</script>

<style lang="scss">
  .bookView {
    margin-top: 47px;
    h1 {
      text-align: left;
      padding: 15px;
      margin: 15px 0 5px;
      font-size: 24px;
      line-height: 36px;
      word-break: break-all;
    }
    .content {
      padding: 0 15px;
      .mc-text {
        display: flex;
        line-height: 28px;
        .mc-txt {
          flex: 2;
          span {
            color: #aaa
          }
          .rating {
            display: inline-block;
            margin-right: 26px;
            span {
              color: #494949;
            }
          }
          p {
            color: #494949;
            margin-top: 15px;
            padding-right: 24px;
            font-size: 14px;
            line-height: 1.6;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:10;
            overflow: hidden;
            text-align: justify;
          }
          .star-full {
            display: inline-block;
            width: 13px;
            height: 13px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==);
            background-size: cover;
          }

          .star-gray {
            display: inline-block;
            width: 13px;
            height: 13px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=);
            background-size: cover;
          }

          .star-half {
            display: inline-block;
            width: 13px;
            height: 13px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAyhJREFUSA29l89rE0EUx99siqZgm0YFC00KVXuwUSMUpGitBaFgi0VEhIqHWkHw4B+gCIognrz1ZrwKVVSqtYIn9SDVHkQFQSOEmkYqaNOkQjRt8vxuyK6TzUx+LLQDm3nzfsxn982b2Q2Ry8bP/JOJROLT3Nyc380UhpsgnvLvJhLDzLzDMIwzbuZwBSZDnLNgQvyXLV0tfd1gvkcbiNh+SoDDSHd3LTDZp24wbfINkxBb5Uk8Ho+dAVlfSa4fLAwV5HQ8Hm+sBHLa6gLzdGOAmAackyDdPlwnnfpK47rAxBtHkWZdjCoTWrZukrIAxv4B9GyZoajAE/ch3Tt1dqe+ZjBNtfQDvN05gTQGW4xJ44qi4Kf+ETxLEF4+9D7KF3trzNRSsBE1O9Oc2PMhCxi2l91WIf3EwZKGPo0+VeytsalLw+d7Aw6Du3aYKThzIEqs1QYNcGgFrNV0RF/wl3tLBoZfF6zr+7Ng0ELyCDFPrBcXqX4P1n4DdfqHBpMjgN9YazigT1KpVG9bW1u8sKJYCRaDyStE+VHcQHYtbgDQW5FI5HgoFPptzl9WOjzdchjqR6iMqu9ZRVWX3TOAK7guBIPBO7LRWcMkBpdeEq/2IAlfZUc3MoCLuAacUHOuMrCpFEPLXygDONOMOXbZvgHaA+gLVbwSbDqKE8u/8NTvVEG16ABNAxrV+WrBhQBBfbrAanocFKH5+fktOj8tmB82mUFdusAa9CKfzx/S+WnB5PUgqHjm6aKr6PEhqM2YHsz6oCo824x0Y2uqmx5sVFlfJrNwnquntbXhaDTabI8kQQnmSWrCCbZP8pNEXkG136Qfi3sDgcAxVO8pGBckB1n0eL3eXllhyUowNWw+iOX1WE52z/QG7+tucTR5uXDGwwD4/Ww2uwvibVz4UCltunVWgw0uLQqmZWTgIr1dPCCGkh9Lpybq6OhYwsF/PpfL9SMDn2U7xsp1VoOZpG3Aj4kyXXiJjItreN4Krb29/VUmkwljG10H0HrZdMdiMa8zzPxiULUZJG0bce6SGEo9UDnodJ2dnX9hu4p/FxP40B+HzLOzs6iL0vYPbfQF9yQ167cAAAAASUVORK5CYII=);
            background-size: cover;
          }

          .average {
            padding-right: 8px;
            font-size: 15px;
          }
        }
        .mc-img {
          text-align: right;
          flex: 1;
        }
      }
    }
    .listen{
      display: flex;
      a{
        flex: 1;
        display: inline-block;
        height: 30px;
        width: 128px;
        margin:20px 10px;
        line-height: 30px;
        font-size: 15px;
        text-align: center;
        color: #ffb712;
        border: 1px solid #ffb712;
        border-radius: 3px;
      }
    }
    .tags{
      margin-bottom: 10px;
      p{
        color: #aaa;
        margin: 0 0 15px;
        font-size: 15px;
      }
      ul{
        li{
          display: inline-block;
          margin-right: 10px;
          padding: 5px 10px;
          border-radius: 15px;
          margin-bottom: 10px;
          font-size: 13px;
          border: 1px solid #42bd56;
          color: #42bd56;
          background-color: #effaf0;
        }
      }
    }
    .ad{
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
  }
  .buy{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #E8E8E8;
    border-top: 1px solid #E8E8E8;
    a{
      flex: 2;
      color: #42bd56;
      font-size: 15px;
    }
    span{
      flex: 1;
      text-align: right;
      color: #ccc;
      font-size: 14px;
    }
  }
</style>
