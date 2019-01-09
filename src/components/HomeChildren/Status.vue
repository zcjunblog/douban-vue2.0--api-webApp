<template>
  <div class="status">
    <top-dowd-load></top-dowd-load>
    <div class="content">
      <div class="write">
        <div class="img">
          <img src="../../assets/img/default.jpg" alt="" width="40">
          <span>登录发广播</span>
        </div>
        <div class="icon">
          <img src="../../assets/img/ic_status_pen.png" alt="">
          <img src="../../assets/img/ic_status_camera.png" alt="">
        </div>
      </div>
      <!--广播列表-->
      <ul class="status-list">
        <li v-for="(statu,key) in status" :key="key">
          <div class="desc">
            <div class="img">
              <img :src="statu.author.avatar" alt="" width="40" height="40">
            </div>
            <div class="txt">
              <p>{{statu.author.name}}<span>写了新日记</span><br> <span class="time">{{statu.time}}</span></p>
              <div class="card">
                <p>{{statu.text}}</p>
              </div>
              <!--点赞-->
              <div class="like-more">
                <div class="like">
                  <img src="../../assets/img/ic_like_gray.png" alt=""  height="25" width="25">
                  <img src="../../assets/img/ic_comment.png" alt="" height="25" width="25">
                  <img src="../../assets/img/ic_retweet_gray.png" alt="" height="25" width="25">
                </div>
                <div class="more">
                  <img src="../../assets/img/more.png" alt="" width="22">
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <p class="more-statu">显示更多广播</p>
    <down-load-app></down-load-app>
  </div>
</template>

<script>
  import TopDowdLoad from '../../public/TopDowdLoad'
  import DownLoadApp from '../../public/DownLoadApp'

  export default {
    name: 'Status',
    data(){
      return{
        status:[]
      }
    },
    components: {
      TopDowdLoad,
      DownLoadApp
    },
    created(){
      this.axios.get('/api/group/topic/33488193/comments')
        .then((res)=>{
          let status =res.data.comments
          this.status = status
          // console.log(status)
        })
        .catch((err)=>console.log(err))
    }
  }
</script>

<style lang="scss" scoped>
  .status{
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
    .status-list{
      overflow: hidden;
      display: block;
      padding: 4px;
      font-size: 14px;
      li{
        padding-bottom: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-left: 5px;
        .desc{
          display: flex;
          .img{
            flex: 0 0 50px;
            img{
              border-radius: 50%;
            }
          }
          .txt{
            flex: 1;
            P{
              height: 40px;
              font-size: 17px;
              font-weight: bold;
              line-height: 1;
              color: #494949;
              .time{
                margin-left: 0;
                font-size: 14px;
              }
              span{
                margin-left: 10px;
                color: #aaa;
                font-weight: normal;
              }
            }
            .card{
              p{
                padding: 15px;
                margin: 10px 0 20px;
                border-radius: 2px;
                background: #f9f9f9;
                font-weight: normal;
                height: auto;
                line-height: 1.5;
              }
            }
            .like-more{
              display: flex;
              .like{
                flex: 1;
                img{
                  margin-left: 5px;
                }
              }
              .more{
                flex: 0 0 25px;
              }
            }
          }
        }
      }
    }
  }
  .more-statu{
    text-align: center;
    font-size: 16px;
    color: #42bd56;
  }
</style>
