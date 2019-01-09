<template>
<div>
<h2>热门小组</h2>
  <ul class="group-list">
    <li v-for="group in groupA" :key="groupA.id">
     <div class="list">
       <img :src="group.images.small" alt="" width="42" height="42">
       <a href="#">{{group.title}}</a>
       <span>{{group.id}}人</span>
     </div>
      <p>{{group.group_topic.time}}{{group.group_topic.title}}</p>
    </li>
  </ul>
  <p class="more-group">更多相关小组</p>
</div>
</template>

<script>
  export default {
    name: 'GroupListA',
    data(){
      return{
        groupA:[
          {
            title: '想不想很多人帮你！',
            subtype: 'group',
            id: 1234,
            images: {
              small: 'https://img1.doubanio.com/icon/g14859-17.jpg'
            },
            group_member: '431999',
            group_topic: {
              title: '想转专业去学日语大家有神马建议？',
              time: '4分钟前更新：'
            }
          },
          {
            title: '我们都有秘密',
            subtype: 'group',
            id: 1894,
            images: {
              small: 'https://img3.doubanio.com/view/group/sqxs/public/70b12cb23995a14.jpg'
            },
            group_member: '96960',
            group_topic: {
              title: '北京 征个女生',
              time: '1分钟前更新：'
            }
          },
          {
            title: '文艺青年装逼会',
            subtype: 'group',
            id: 5824,
            images: {
              small: 'https://img1.doubanio.com/icon/g17947-8.jpg'
            },
            group_member: '43736',
            group_topic: {
              title: '文艺青年装逼会',
              time: '3分钟前更新：'
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
h2{
  padding: 10px 0;
  font-size: 18px;
  color: #111;
  margin: 10px 0;
}
  .group-list{
    li{
      margin-bottom: 15px;
      border-bottom: 1px solid #e8e8e8;
     .list{
       display: flex;
       img{
         flex: 0 0 50px;
       }
       a{
         padding-left: 15px;
         font-size: 18px;
         color: #111;
         flex: 1;
       }
       span{
         text-align: right;
         color: #ccc;
         font-size: 15px;
         flex: 0 0 60px;
       }
     }
      p{
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 15px;
        color: #aaa;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
.more-group{
  text-align: center;
  font-size: 16px;
  color: #42bd56;
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
