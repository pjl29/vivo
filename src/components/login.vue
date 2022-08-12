<template>
    <main>
         <div class="myhead">
          <span><van-icon name="arrow-left" @click="up" /></span>
            <h2></h2>
            <h1><span><van-icon name="user-o" @click="foldright1" /></span></h1>
        </div>
        <div class="foldright" v-show="foldright" >
           <ul>
            <li><router-link to="/index">首页</router-link></li>
            <li><router-link to="/Shopping">购物车</router-link></li>
            <li><router-link to="/login">登录注册</router-link></li>
            <li><router-link to="/allsort">全部分类</router-link></li>
            <li><router-link to="/my">个人中心</router-link></li>
          </ul>
        </div>
        <div v-show="spanuser1"> 
        <div class="login-logo">
            <img src="img/login-logo.png" alt="">
            <h3>短信验证登陆</h3>
        </div>
        <div class="pwd">
            <span  @click="spanuser" >账号登陆</span>
        </div>
        <van-form @submit="onSubmit">
  <van-field
    
    name="手机号"
    label="手机号"
    placeholder="手机号"
    :rules="[{ required: true, message: '请填写手机号' }]"
  />
    
   <van-field
  
  center
  clearable
  label="短信验证码"
  placeholder="请输入短信验证码"
>
  <template #button>
    <van-button size="small" type="primary">发送验证码</van-button>
  </template>
</van-field>

  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">登陆</van-button>
  </div>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="zc">注册</van-button>
  </div>
</van-form>
</div>

<div v-show="spanuser2"> 
        <div class="login-logo">
            <img src="img/login-logo.png" alt="">
            <h3>账号登陆</h3>
        </div>
        <div class="pwd">
            <span  @click="spanuser22">短信登陆</span>
        </div>
        <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">登陆</van-button>
  </div>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="zc">注册</van-button>
  </div>
</van-form>
</div>


   
      <div v-show="register"> 
        <div class="login-logo">
            <img src="img/login-logo.png" alt="">
            <h3>账号注册</h3>
        </div>

        <van-form @submit="onSubmit">
  <van-field
    
    name="手机号"
    label="手机号"
    placeholder="手机号"
    :rules="[{ required: true, message: '请填写手机号' }]"
  />
    
    <van-field
  
  center
  clearable
  label="短信验证码"
  placeholder="请输入短信验证码"
>
  <template #button>
    <van-button size="small" type="primary">发送验证码</van-button>
  </template>
</van-field>

  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">确认</van-button>
  </div>
</van-form>
<div class="xieyi"><van-checkbox v-model="checked" shape="square"></van-checkbox>已阅读并同意<a href="">服务协议</a>和<a href="">隐私政策</a></div>
</div>
  
    </main>
</template>


<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      spanuser1:true,
      foldright:false,
      spanuser2:false,
      register:false,
       checked: true,
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
     foldright1:function(){
            this.foldright=!this.foldright;
                    },
                
     spanuser:function(){
        this.spanuser1=!this.spanuser1;
        this.spanuser2=!this.spanuser2;
        },

        spanuser22:function(){
        this.spanuser1=!this.spanuser1;
        this.spanuser2=!this.spanuser2;
        },
        zc:function(){
            this.spanuser1=false;
            this.spanuser2=false;
            this.register=true;
        },
         up:function(){
              this.$router.go(-1);
            }
  }
}
</script>
<style scoped>
.login-logo{
    width: 90vw;
    margin: 0vw auto;
    text-align: center;
}
.login-logo img{
    width: 40vw;
}
.pwd{
    width: 90vw;
    margin: 0vw auto;
    margin-top: 10vw;
    display: flex;
    justify-content: flex-end;
}
.input-inner{
    
    width: 60vw;
    height: 10vw;
    border: none;
    border-bottom:1px solid rgb(110, 110, 110) ;
}
.yz{
     width: 90vw;
    margin: 0vw auto;
}
.xieyi{
    display: flex;
    justify-content: center;
}
.van-icon-user-o{
   font-size: 10vw;
}
</style>