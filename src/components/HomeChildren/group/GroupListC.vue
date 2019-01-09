<template>
  <div>
    <h2>热门小组</h2>
    <ul class="group-list">
      <li v-for="group in groupC" :key="groupC.id">
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
    name: 'GroupListC',
    data() {
      return {
        groupC: [
          {
            title: '我爱代购&amp;海淘☺微信号',
            subtype: 'group',
            id: 8534,
            images: {
              small: 'https://img3.doubanio.com/view/group/sqxs/public/4d960a7f101c441.jpg'
            },
            group_member: '431999',
            group_topic: {
              title: '靠谱小日代 薇信直播定位+邮寄单号 可拼邮可直邮 保证品 ～笔芯',
              time: '4分钟前更新：'
            }
          },
          {
            title: 'PiaPia团✿团购',
            subtype: 'group',
            id:5264,
            images: {
              small: 'https://img3.doubanio.com/icon/g573696-2.jpg'
            },
            group_member: '96960',
            group_topic: {
              title: '【想买】之前团过的包要吗？',
              time: '1小时前更新：'
            }
          },
          {
            title: '我们一起海淘',
            subtype: 'group',
            id: 2434,
            images: {
              small: 'https://img3.doubanio.com/icon/g25704-22.jpg'
            },
            group_member: '743736',
            group_topic: {
              title: '靠谱小日代 薇信直播定位+邮寄单号 可拼邮可直邮 保正品～笔芯',
              time: '3分钟前更新：'
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    padding: 10px 0;
    font-size: 18px;
    color: #111;
    margin: 10px 0;
  }

  .group-list {
    li {
      margin-bottom: 15px;
      border-bottom: 1px solid #e8e8e8;
      .list {
        display: flex;
        img {
          flex: 0 0 50px;
        }
        a {
          padding-left: 15px;
          font-size: 18px;
          color: #111;
          flex: 1;
        }
        span {
          text-align: right;
          color: #ccc;
          font-size: 15px;
          flex: 0 0 60px;
        }
      }
      p {
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

  .more-group {
    text-align: center;
    font-size: 16px;
    color: #42bd56;
    margin-bottom: 30px;
    margin-top: 30px;
  }
</style>
