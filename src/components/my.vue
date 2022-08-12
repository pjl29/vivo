<template>
    <main>
        <div class="myhead">
            <span><van-icon name="arrow-left" @click="up" /></span>
            <h2>个人中心</h2>
            <h1><span><van-icon name="user-o" @click="foldright" /></span></h1>
        </div>
                <div class="foldright" v-show="foldright1" >
           <ul>
            <li><router-link to="/index">首页</router-link></li>
            <li><router-link to="/Shopping">购物车</router-link></li>
            <li><router-link to="/login">登录注册</router-link></li>
            <li><router-link to="/allsort">全部分类</router-link></li>
            <li><router-link to="/my">个人中心</router-link></li>
          </ul>
        </div>
        <div class="menbor-info">
            <div class="img"><img src="img/meimg.png" alt=""></div>
            <div class="myname">
                <h3>暴龙战士</h3>
                <p><van-icon name="vip-card" /> 普通会员</p>
            </div>
            <div class="new-bag">
                <p>限时新人红包<van-icon name="gift" /></p>
            </div>
        </div>
        <ul class="mod-djqxx">
            <li>
                <h3>0</h3>
                <p>优惠券</p>
            </li>
            <li>
                <h3>0</h3>
                <p>换新鼓励金</p>
            </li>
            <li>
                <h3>0</h3>
                <p>积分</p>
            </li>
        </ul>
        <div class="myorder">
            <p>我的订单</p>
            <span>更多></span>
        </div>
        <ul class="order-wrap">
            <li>
                <van-icon name="card" />
                <p>待付款</p>
            </li>
             <li>
                <van-icon name="send-gift" />
                <p>待收货</p>
            </li>
             <li>
                <van-icon name="comment" />
                <p>待评价</p>
            </li>
             <li>
                <van-icon name="gold-coin" />
                <p>退款/售后</p>
            </li>
        </ul>
        <ul class="mod-info">
            <li>
                <p><van-icon name="coupon-o" />我的回收单</p>
                <p>></p>
            </li>
            <li>
                <p><van-icon name="point-gift-o" />我的奖品</p>
                <p>></p>
            </li>
            <li>
                <p><van-icon name="like-o" />我的收藏</p>
                <p>></p>
            </li>
            <li>
                <p><van-icon name="comment-o" />我的评价</p>
                <p>></p>
            </li>
            <li>
                <p><van-icon name="question-o" />我的回答</p>
                <p>></p>
            </li>
            <li>
                <p><van-icon name="manager-o" />我的收货地址</p>
                <p>></p>
            </li>
        </ul>
        <ul class="footer-link">
            <li>特色服务</li>
            <li>|</li>
            <li>小V客服</li>
            <li>|</li>
            <li>退出登录</li>
            <li>|</li>
            <li>选购手机</li>
        </ul>
        <p class="rights">©2022shop.vivo.com.cn <img src="img/polick.png" alt=""></p>
    </main>
</template>

<script>
export default {
    data(){
        return{
            foldright1:false,
        }
    
    },
        methods:{
            foldright:function(){
            this.foldright1=!this.foldright1;
                    },
                        up:function(){
              this.$router.go(-1);
            }
                },
             
}
</script>
<style>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
head{
    height: 20vw;
    background: brown;
   
}
.menbor-info{
    width: 100vw;
    height: 30vw;
    margin: 0px auto;
    background: -webkit-linear-gradient(bottom,rgba(255, 255, 255, 0.15),hsla(0,0%,59%,0),rgba(243, 12, 212, 0.15)) no-repeat;
    display: flex;
    justify-content: space-between;
    
}
.menbor-info img{
    width: 30vw;
}
.menbor-info .img>img{
    border-radius: 50%;
}
.menbor-info .myname h3{
    margin-top: 12vw;
}
.menbor-info .myname p{
    margin-top: 0vw;
}
.van-icon-vip-card{
    color: rgb(62, 62, 194);
}
.new-bag p{
    margin-top: 12vw;
    color: crimson;
}
.van-icon-gift{
    color: crimson;
}
.mod-djqxx{
     width: 90vw;
     margin: 0px auto;
    display: flex;
    justify-content: space-between;
    margin-top: 5vw;
}
.mod-djqxx li{
     text-align: center;
     margin-top: 1vw;
}
.myorder{
    width: 90vw;
     margin: 0px auto;
    display: flex;
    justify-content: space-between;
    margin-top: 10vw;
}
.order-wrap{
    width: 90vw;
     margin: 0px auto;
    display: flex;
    justify-content: space-between;
    margin-top: 5vw;
}
.order-wrap i{
  font-size: 10vw;
  color: rgb(196, 29, 29);
}
.order-wrap li{
  text-align: center;
     margin-top: 1vw;
}
.mod-info{
    width: 90vw;
     margin: 0px auto;
     margin-top: 5vw;
    
}
.mod-info li{
     display: flex;
    justify-content: space-between;
    margin-bottom: 5vw;
}
.mod-info li p{
    color: rgb(94, 94, 94);
}
.mod-info i{
     font-size: 7vw;
     margin-right: 2vw;
}
.footer-link{
    width: 90vw;
     margin: 0px auto;
    display: flex;
    justify-content: space-between;
    margin-top: 10vw;
}
.footer-link li{
    font-size: 3vw;
    color:#a5a5a5;
}
.rights{
    width: 90vw;
     margin: 0px auto;
    font-size: 3vw;
    color:#a5a5a5;
    text-align: center;
    margin-bottom: 10vw;
}
.rights img{
    width: 4vw;
}
.myhead{
    line-height: 15vw;
    display: flex;
    justify-content: space-between;
    height: 15vw;
    background: -webkit-linear-gradient(bottom,rgba(243, 12, 212, 0.15),rgba(243, 12, 212, 0.15),rgba(243, 12, 212, 0.15)) no-repeat;
}

.van-icon-arrow-left{
    font-size: 10vw;
    margin-top: 2vw;
}
.van-icon-user-o{
   font-size: 10vw;
}
</style>