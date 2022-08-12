<template>
    <main>
        <router-view></router-view>
        
        <header>
          <div class="header">
            <span><van-icon name="wap-nav" v-on:click="foldleft1"  v-show="iconnav"/></span>
            <p>vivo</p>
            <span><van-icon name="search" /></span>
            <span><van-icon name="user-o" v-on:click="foldright1" v-show="iconuser" /></span>
          </div>
        </header>
        <div class="foldright" v-show="foldright" >
          <ul>
            <li><router-link to="/index">首页</router-link></li>
            <li><router-link to="/Shopping">购物车</router-link></li>
            <li><router-link to="/login">登录注册</router-link></li>
            <li><router-link to="/allsort">全部分类</router-link></li>
            <li><router-link to="/my">个人中心</router-link></li>
          </ul>
        </div>
        <div class="foldleft" v-show="foldleft">
          <van-collapse v-model="activeName" accordion>
  <van-collapse-item title="热门链接" name="1">
    <ul>
        <li>S15系列</li>
        <li>X80系列</li>
        <li>NEX系列</li>
        <li>X80系列</li>
        <li>X note</li>
        <li>常见问题</li>
    </ul>
  </van-collapse-item>
  <van-collapse-item title="在线购买" name="2">
    <ul>
        <li>官方商城</li>
        <li>选购手机</li>
        <li>选购配件</li>
        <li>企业服务</li>
        <li>以旧换新</li>
        <li>保障服务</li>
    </ul>
  </van-collapse-item>
  <van-collapse-item title="服务支持" name="3">
    <ul>
        <li>体验店</li>
        <li>服务首页</li>
        <li>真伪查询</li>
        <li>预约维修</li>
        <li>服务政策</li>
        <li>安全公告</li>
    </ul>
  </van-collapse-item>
  <van-collapse-item title="官方社媒" name="4">
    <ul>
        <li>官方社区</li>
        <li>新浪微博</li>
        <li>百度贴吧</li>
    </ul>
  </van-collapse-item>
  <van-collapse-item title="关于vivo" name="5">
    <ul>
        <li>vivo介绍</li>
        <li>购买平台</li>
        <li>新闻资讯</li>
        <li>工作机会</li>
        <li>隐私中心</li>
        <li>辅助功能</li>
    </ul>
  </van-collapse-item>
</van-collapse>
        </div>
        <div class="banner">
            <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
            </van-swipe-item>
            </van-swipe>
        </div>
        <ul class="nav-item">
               <li v-for="(item,index) in list" :key="index">
                    <img :src="item.src" alt="">
                    <!-- <span>{{item.title}}</span> -->
               </li>
          </ul>
          <div class="tit">
            <span> 距离本场结束：</span>
            <van-count-down :time="time">
    <template #default="timeData">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
    </template>
  </van-count-down>
  <span>更多>></span>
          </div>
          <div class="wrap">
              <ul class="tit-list">
                
                <li v-for="(item,index) in titlist" :key="index">
                  <router-link to="/product">
                  <img :src="item.src" alt="">
                  <p>{{item.title}}</p>
                  <p>{{item.title2}}</p>
                  <span class="new">{{item.title3}}</span>
                  <span class="low">{{item.title4}}</span>
                  </router-link>
                </li>
              </ul>
          </div>
          <div class="title"><h2>-热销商品-</h2></div>
          <div class="floor">
            <img src="img/floor1.png" alt="">
            <div class="floor-right">
              <h4>iQOO 10</h4>
              <span>第一代骁龙8+</span>
              <p>￥4299</p>
            </div>
          </div>
          <ul class="floor-list">
            <li v-for="(item,index) in flist" :key="index">
                <img :src="item.src" alt="">
              <h4>{{item.title}}</h4>
              <span>{{item.title2}}</span>
              <p>{{item.title3}}</p>
            </li>
          </ul>
          <div class="title"><h2>-精品手机-</h2></div>
          <div class="floor-container"><img src="img/vivoX80.png" alt=""></div>
          <ul class="phone-list">
            <li v-for="(item,index) in plist" :key="index">
                <img :src="item.src" alt="">
              <h4>{{item.title}}</h4>
              <span>{{item.title2}}</span>
              <p>{{item.title3}}</p>
            </li>
          </ul>
          <p class="hot-phone">更多热卖手机>></p>
           <div class="title"><h2>-精品配件-</h2></div>
           <ul class="parts-list">
              <li v-for="(item,index) in partslist" :key="index">
                <img :src="item.src" alt="">
              <h4>{{item.title}}</h4>
              <span>{{item.title2}}</span>
              <p>{{item.title3}}</p>
            </li>
           </ul>
           <p class="hot-phone">更多精品配件>></p>
           <div class="title"><h2>-热点推荐-</h2></div>
           <ul class="hot-all">
            <li>
              <a href="">vivo X Flod</a>
            </li>
            <li>
              <a href="">X80 Pro</a>
            </li>
            <li>
              <a href="">S12 系列</a>
            </li>
            <li>
              <a href="">iQOO</a>
            </li>
            <li>
              <a href="">TWS Air</a>
            </li>
            <li>
              <a href="">vivo Pad</a>
            </li>
            <li>
              <a href="">免费定制</a>
            </li>
            <li>
              <a href="">碎屏宝</a>
            </li>
           </ul>
           <van-collapse v-model="activeName" accordion>
  <van-collapse-item title="热门链接" name="1">
    <ul>
        <li>S15系列</li>
        <li>X80系列</li>
        <li>NEX系列</li>
        <li>X80系列</li>
        <li>X note</li>
        <li>常见问题</li>
    </ul>
  </van-collapse-item>
  <van-collapse-item title="在线购买" name="2">
    <ul>
        <li>官方商城</li>
        <li>选购手机</li>
        <li>选购配件</li>
        <li>企业服务</li>
        <li>以旧换新</li>
        <li>保障服务</li>
    </ul>
  </van-collapse-item>
  <van-collapse-item title="服务支持" name="3">
    <ul>
        <li>体验店</li>
        <li>服务首页</li>
        <li>真伪查询</li>
        <li>预约维修</li>
        <li>服务政策</li>
        <li>安全公告</li>
    </ul>
  </van-collapse-item>
  <van-collapse-item title="官方社媒" name="4">
    <ul>
        <li>官方社区</li>
        <li>新浪微博</li>
        <li>百度贴吧</li>
    </ul>
  </van-collapse-item>
  <van-collapse-item title="关于vivo" name="5">
    <ul>
        <li>vivo介绍</li>
        <li>购买平台</li>
        <li>新闻资讯</li>
        <li>工作机会</li>
        <li>隐私中心</li>
        <li>辅助功能</li>
    </ul>
  </van-collapse-item>
</van-collapse>
      <div class="footer">
        <van-icon name="chat-o" /> <span>在线客服</span>
       <p class="footer-one"> <van-icon name="phone-o" /> <span>全国客户服务热线 7*24小时</span></p>
       <p class="Telephone">400-678-9688</p>

       <p class="footer-one"> <van-icon name="service-o" /> <span>全国客户服务热线 7*24小时</span></p>
       <p>(适用于X Flod、X Note、NEX系列)</p>
        <p class="Telephone">400-678-9688</p>

        <p class="footer-one"> <van-icon name="envelop-o" /> <span>服务监督邮箱</span></p>
        <p>vivo @vivo.com</p>

        <p class="footer-one"> <van-icon name="label-o" /> <span>关注vivo</span></p>

        <p class="footer-one"> <van-icon name="gem-o" /> <span>Select Location</span></p>
      </div>
      <div class="footder">
          <p>2011-2022 广东天宸网络科技有限公司 版权所有</p>
          <p>隐私政策|用户协议|营业执照| 粤B2-20150324</p>
          <p>ICP备14052990|粤公网安备 4419000200424</p>
      </div>
    </main>
</template>
<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

export default {
  
  data() {
      
    return {
      foldleft:false,
      foldright:false,
      iconnav:true,
      iconuser:true,
      activeName: '1',
       time: 30 * 60 * 60 * 1000,
      images: [
        'img/banner-link1.jpg',
        'img/banner-link2.png',
        'img/banner-link3.png',
        'img/banner-link4.png',
      ],
       list:[
                    {
                         src:'img/nav-item.png',
                         title:'手机'
                    },
                     {
                        src:'img/nav-item2.png',
                         title:'充电'
                    },
                     {
                        src:'img/nav-item3.png',
                         title:'音乐'
                    },
                     {
                       src:'img/nav-item4.png',
                         title:'全部分类'
                    },
                     {
                       src:'img/nav-item.png',
                         title:'秒杀'
                    },
                     {
                         src:'img/nav-item6.png',
                         title:'以旧换新'
                    },
                     {
                         src:'img/nav-item7.png',
                         title:'免费定制'
                    },
                     {
                        src:'img/nav-item8.png',
                         title:'碎屏宝'
                    }
               ],

               titlist:[
                    {
                         src:'img/tit-list.png',
                          title:'vivo8Pro',
                         title2:'闪充数据线',
                         title3:'￥9',
                         title4:'￥49'
                    },
                     {
                        src:'img/tit-list2.png',
                          title:'vivowhif',
                         title2:'智能手表',
                         title3:'￥299',
                         title4:'￥499'
                    },
                     {
                        src:'img/tit-list3.png',
                         title:'Qoo/adq',
                         title2:'Neo5',
                         title3:'￥4299',
                         title4:'￥4999'
                    },
                     {
                       src:'img/tit-list4.png',
                          title:'iQoo 20W',
                         title2:'充电宝',
                         title3:'￥99',
                         title4:'￥999'
                    },
                     {
                       src:'img/tit-list5.png',
                          title:'vivo8Pro',
                         title2:'12GB+512GB',
                         title3:'￥4299',
                         title4:'￥4999'
                    },
                     {
                         src:'img/tit-list6.png',
                          title:'IQOO8 原装',
                         title2:'保护膜 透明',
                         title3:'￥9',
                         title4:'￥19'
                    },
                     {
                         src:'img/tit-list7.png',
                          title:'体脂称Q1',
                         title2:'黄色',
                         title3:'￥299',
                         title4:'￥499'
                    },
                     {
                        src:'img/tit-list8.png',
                          title:'vivo I77',
                         title2:'12GB+512GB',
                         title3:'￥1519',
                         title4:'￥1999'
                    },
                          {
                       src:'img/tit-list9.png',
                          title:'vivo T1原装保护壳',
                         title2:'透明',
                         title3:'￥9',
                         title4:'￥199'
                    },
                     {
                       src:'img/tit-list10.png',
                           title:'vivo T1原装保护壳',
                         title2:'透明',
                         title3:'￥9',
                         title4:'￥199'
                    },
                     {
                        src:'img/tit-list11.png',
                          title:'vivoY77',
                         title2:'12GB+512GB',
                         title3:'￥1299',
                         title4:'￥4999'
                    },
                     {
                         src:'img/tit-list12.png',
                         title:'vivo8Pro',
                         title2:'8GB+512GB',
                         title3:'￥4299',
                         title4:'￥4999'
                    },
                     {
                        src:'img/tit-list13.png',
                          title:'vivo8Pro',
                         title2:'8GB+256G',
                         title3:'￥499',
                         title4:'￥5999'
                    }
                    
               ],


                flist:[
                    {
                         src:'img/floor2.png',
                          title:'vivo X80 Pro',
                         title2:'光学镜头',
                         title3:'￥5999',
                         
                    },
                     {
                        src:'img/floor3.png',
                          title:'vivowhif',
                         title2:'高通骁龙 870',
                         title3:'￥2099',
                        
                    }
                     
               ],

                plist:[
                    {
                         src:'img/tit-list8.png',
                          title:'vivo X80 Pro',
                         title2:'光学镜头',
                         title3:'￥5299',
                         
                    },
                     {
                        src:'img/tit-list9.png',
                          title:'vivo880',
                         title2:'双卡双待闪充',
                         title3:'￥1099',
                        
                    },
                     {
                         src:'img/floor2.png',
                          title:'vivoX86',
                         title2:'折叠屏',
                         title3:'￥9999',
                         
                    },
                     {
                        src:'img/tit-list10.png',
                          title:'vivowhif',
                         title2:'高通骁龙 870',
                         title3:'￥209',
                        
                    },{
                         src:'img/tit-list11.png',
                          title:'vivo X80 Pro',
                         title2:'超大摄像头',
                         title3:'￥599',
                         
                    },
                     {
                        src:'img/tit-list12.png',
                          title:'vivoY77',
                         title2:'80w双芯闪充',
                         title3:'￥3099',
                        
                    }
               ],



                partslist:[
                    {
                         src:'img/parts1.png',
                          title:'vivo Pad平板电脑',
                         title2:'垮台协同办公',
                         title3:'￥2499',
                         
                    },
                     {
                       src:'img/parts2.png',
                          title:'vivo WATCH 2',
                         title2:'e SIM 独立通信',
                         title3:'￥1299',
                        
                    },
                     {
                         src:'img/parts3.png',
                          title:'vivo TWS Air',
                         title2:'蓝牙耳机',
                         title3:'￥199',
                         
                    },
                     {
                       src:'img/parts4.png',
                          title:'无线影音耳机',
                         title2:'1.99mm大动圈',
                         title3:'￥199',
                        
                    },{
                        src:'img/parts5.png',
                          title:'IQOO极风散热',
                         title2:'秒速制冷降温',
                         title3:'￥199',
                         
                    },
                     {
                       src:'img/parts6.png',
                          title:'闪充套餐',
                         title2:'44W闪充',
                         title3:'￥149',
                        
                    }
               ]
    };
  },
  methods:{

                    foldleft1:function(){
                        this.foldleft=!this.foldleft;
                        
                         this.iconuser=!this.iconuser;
                    },

                     foldright1:function(){
                        this.foldright=!this.foldright;
                        this.iconnav=!this.iconnav;
                    }
                }
}



</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  list-style: none;
}
a{
  color: #000;
}
 .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ee0a24;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
  }
.tit{
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0px auto;
  
}
.tit>span{
  font-size: 2vw;
}
.nav-item{
     width:100%;
     overflow: hidden;
     margin: 5vw auto;
     background: rgb(255, 255, 255);
}
.nav-item img{
     width:60%;
}
.nav-item li{
     width:25%;
     text-align: center;
     float: left;
     text-align: center;
}
.nav-item span{
    font-size: 13px;
    color: #666666;
     display: block;
}
.banner img{
    width: 100%;
      

}
.banner .van-swipe__track{
  height: 70vw;
}
header{
    height: 20vw;
    
    overflow: hidden;
}
.header{
  display: flex;
  justify-content: space-between;
  margin-top: 5vw;
}
.header p{
  font-size: 10vw;
}
.header .van-icon-wap-nav{
  font-size: 10vw;
}
.header .van-icon-search{
   font-size: 10vw;
}
.header .van-icon-user-o{
   font-size: 10vw;
}

.wrap .tit-list  img{
  
  width: 80px;
  height: 80px;
}
.wrap ul  li{
  width: 30%;
   text-align: center;
   font-size: 11px;
   color: #666666;
}
.wrap{
  width: 90vw;
  margin: 0px auto;
  overflow: hidden;
  margin-top: 5vw;
}

.wrap .tit-list{
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.wrap ul  li .new{
 color: #ee0a24;
}
.wrap ul  li .low{
 text-decoration: line-through;
}
::-webkit-scrollbar{display: none;}

.title{
  font-size: 5vw;
  background: #e2e2e2;
  height: 15vw;
  text-align: center;
  line-height: 15vw;
}
h2{
  display: block;
  width: 90vw;
  text-align: center;
  color: #666666;
  margin-top: 5vw;
  margin-bottom: 5vw;
  margin: 0px auto;
}
.floor{
  margin-top: 5vw;
  display: flex;
  width: 90vw;
  margin: 0px auto;
  justify-content: center;
}
.floor>img{
  width: 50vw;
  height: 50vw;
}
.floor-right h4{
  margin-top: 5vw;
  
}
.floor-right p{
  margin-top: 20vw;
  
}
.floor-right p{
  color: #ee0a24;
}
.floor-list{
  display: flex;
  width: 90vw;
  margin: 0px auto;
  margin-bottom: 5vw;
}
.floor-list li{
  text-align: center;
  width: 50vw;
}
.floor-list li img{
  height: 30vw;
  width: 30vw;
}
.floor-list li p{
  color: #ee0a24;
}
.floor-container{
  width: 100vw;
}
.floor-container img{
  height: 40vw;
  width: 100vw;
}
.phone-list{
 
  width: 90%;
  margin: 0px auto;
    display: flex;
  flex-wrap: wrap;
}

.phone-list li{
  width: 45vw;
  text-align: center;
}
.phone-list li img{
  width: 30vw;
  height: 30vw;
}
.phone-list li p{
 color: #ee0a24;
}
.hot-phone{
  width: 90vw;
  text-align: center;
  margin: 5vw auto;
}

.parts-list{
 
  width: 90%;
  margin: 0px auto;
    display: flex;
  flex-wrap: wrap;
}

.parts-list li{
  width: 45vw;
  text-align: center;
}
.parts-list li img{
  width: 30vw;
  height: 30vw;
}
.parts-list li p{
 color: #ee0a24;
}

.hot-all{
  width: 90vw;
   margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10vw;
}
.hot-all li{
  width: 20vw;
  margin-top: 4vw;
  border: 1px solid #666666;
  border-radius: 15px;
  text-align: center;
   padding: 1vw 0vw;
}
.hot-all li a{
  color: black;
  font-size: 13px;
 
}
.van-collapse-item li{
  margin-bottom: 3vw;
}

.footer{
  width: 90vw;
  margin: 0px auto;
  margin-top: 10vw;
  border-bottom:1px solid #c0c0c0 ;
  border-top:1px solid #c0c0c0 ;
  padding: 5vw 0vw;
}
.footer .footer-one{
  margin-top: 5vw;
}
.footer .Telephone{
  font-size: 24px;
  margin-left: 20px;
  margin-top: 2px;
}
.footder{
  width: 90vw;
  margin: 0px auto;
}
.footder p{
  color: #a5a5a5;
  font-size: 14px;
}
.foldright{
  background: #ffffff;
  position: fixed;
  top: 13vw;
  right: 0vw;
  z-index: 2;
  padding: 2vw 4vw;
  border-radius: 10px;

}
.foldright li{
  margin-bottom: 2vw;
}
</style>
