<template>
  <div>
    <h1><span @click="goback"></span>登陆豆瓣</h1>
    <div class="content">
      <!--<form>-->
      <div class="input" style="border-bottom: 0px">
        <input type="text" placeholder="手机号/邮箱" name="userid">
      </div>
      <div class="input pwd" name="password">
        <input :type="pwdtype?'password':'text'" minlength="6" placeholder="密码(最少6位)" value="1ah55lla51">
        <div class="show-pwd" @click="pwdShow()">
          <span class="show-pwd1"></span>
          <span class="show-pwd2" v-show="isShow"></span>
        </div>
      </div>
      <button :type="regtype" @click="isRegister()">{{register}}</button>
      <p><a href="#">免密码登录</a>找回密码</p>
      <!--</form>-->
      <div class="down"><router-link to="/register">注册豆瓣账号</router-link><a href="/">下载豆瓣App</a></div>
    </div>
    <!--第三方登陆-->
    <div class="qq-login">
    <p>第三方登录</p>
      <div class="other-login">
        <a href="#"><img src="../assets/img/sina.png" alt=""></a>
        <a href="#"><img src="../assets/img/weixin.png" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MusicView',
    data() {
      return {
        regtype: 'submit',
        register: '登陆',
        isShow: false,
        pwdtype: 'true'
      }
    },
    methods: {
      isRegister() {
        this.register = '登陆中...'
        document.querySelector('button').setAttribute('style', 'background:#aaa')
      },
      pwdShow() {
        this.isShow = !this.isShow
        this.pwdtype = !this.pwdtype
      },
      goback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    margin: 30px 0;
    font-size: 30px;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    span{
      position: absolute;
      height: 16px;
      width: 16px;
      background-image: url(../assets/img/x.png);
      background-size: 16px;
      top: 15px;
      left: 15px;
    }
  }
  .content {
    padding: 25px;
    .input {
      padding: 0 10px;
      color: #494949;
      height: 44px;
      background: #fff;
      border: 1px solid #d7d7d7;
      overflow: hidden;
      input {
        font-size: 16px;
        border: 0 none;
        width: 96%;
        background: #fff;
        height: 30px;
        line-height: 30px;
        margin-top: 7px;
        outline: 0;
        -webkit-appearance: none;
        &::-webkit-input-placeholder {
          color: #c7c7c7;
        }
      }
    }
    button {
      outline: none;
      margin-top: 15px;
      font-size: 16px;
      border-radius: 3px;
      border: 0 none;
      background-color: rgba(66,189,86,.5);
      display: block;
      width: 100%;
      height: 44px;
      color: #fff;
      -webkit-user-select: none;
      -webkit-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }
    p {
      position: relative;
      text-align: right;
      margin-top: 20px;
      font-size: 15px;
      color: #494949;
      a {
        position: absolute;
        left: 0;
        color: #42bd56;
      }
    }
    .down {
      margin-top: 40px;
      width: 100%;
      text-align: center;
      a {
        margin:0 20px;
        font-size: 15px;
        color: #42bd56;
      }
    }
    .pwd {
      position: relative;
      .show-pwd1 {
        position: absolute;
        right: 2px;
        top: 0;
        display: block;
        height: 100%;
        width: 32px;
        background: url(data:image/png;base64,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) no-repeat center center;
        background-size: 18px;
        z-index: 3;
      }
      .show-pwd2 {
        position: absolute;
        right: 2px;
        top: 0;
        display: block;
        height: 100%;
        width: 32px;
        background: url(data:image/png;base64,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) no-repeat center center;
        background-size: 18px;
        z-index: 3;
      }
    }
  }
  .qq-login{
    p{
      margin: 55px 0 25px 0;
      color: #bababa;
      font-size: 13px;
      line-height: 1;
      text-align: center;
    }
    .other-login{
      text-align: center;
      a{
       img{
         display: inline-block;
         vertical-align: middle;
         width: 66px;
         height: 66px;
         background: transparent no-repeat 50% 50%;
         background-size: 100%;
         overflow: hidden;
         line-height: 66px;
         font-size: 0;
         margin: 0 15px;
       }
      }
    }
  }
</style>
