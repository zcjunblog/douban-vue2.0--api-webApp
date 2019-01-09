<template>
  <div>
    <h2>房屋出租</h2>
    <ul class="group-list">
      <li v-for="group in groupB" :key="groupB.id">
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
    name: 'GroupListB',
    data() {
      return {
        groupB: [
          {
            title: '成都租房',
            subtype: 'group',
            id: 1834,
            images: {
              small: 'https://img3.doubanio.com/icon/g117205-2.jpg'
            },
            group_member: '43736',
            group_topic: {
              title: '天府四街临江苑套一出租个人 无中介费噢',
              time: '3分钟前更新：'
            }
          },
          {
            title: '北京租房（非中介）',
            subtype: 'group',
            id: 3234,
            images: {
              small: 'https://img3.doubanio.com/icon/g279962-3.jpg'
            },
            group_member: '53736',
            group_topic: {
              title: '9号线丰台南路站看丹桥新华街四里，次卧出租，押一付一',
              time: '刚刚更新：'
            }
          },
          {
            title: '深圳福田租房（个人房源免费推广）',
            subtype: 'group',
            id: 4234,
            images: {
              small: 'https://img3.doubanio.com/icon/g117205-2.jpg'
            },
            group_member: '4373',
            group_topic: {
              title: '福田福民岗厦复式单间整租，2800，可短租',
              time: '刚刚更新：'
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
