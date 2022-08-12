<template>
    <main>
        <div class="myhead">
            <span><van-icon name="arrow-left" @click="up" /></span>
            <h2></h2>
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
        <div class="banner2">
            <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
            </van-swipe-item>
            </van-swipe>
        </div>
        <div class="storage">
            <span>12GB+512GB</span><span>12GB+256GB</span>
        </div>
        <div class="promotion">
          <div class="price-itme">
            <span>￥5969</span> <span class="contaiternew">新人价￥5959</span>
            <p>
              <span>支持积分抵现</span> <span>24期免息</span>
            </p>
          </div>
          <div class="price-right">
              <img src="img/ms.png" alt="">
              <van-count-down :time="time">
    <template #default="timeData">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
    </template>
  </van-count-down>
          </div>
        </div>
        <div class="content">
          <span>新人</span>
          <span>订单满10.1减10</span>
          <span>领卷></span>
        </div>
        <div class="list-box1">
          <div class="list-boxleft">
            <p><img src="img/hotsp.png" alt=""> vivo X80 Pro 天玑9000版 12GB+256GB 至黑 </p>
          </div>
          <div class="list-box1right">
              <div>
                <van-icon name="cart-circle-o" />
                <p>对比</p>
              </div>
              <div>
                <van-icon name="like-o" />
                <p>收藏</p>
              </div>
          </div>
        </div>
        <div class="list-box2">
          <p>[限时直降30元]蔡司T*光学镜头|自研芯片V1+|天玑9000版</p>
        </div>
        <div class="list-box3">
          <span>同系列</span>
          <span>vivo X80 Pro></span>
          <span>vivo X80></span>
        </div>
        <div class="wrap2">
              <ul class="tit-list2">
                <li>
                  <img src="img/wrap.png" alt="">
                </li>
              </ul>
          </div>
          <div class="discount">
            <div class="v-listname">优惠</div>
            <div class="listdesc"><span>24期免息</span> <span>花呗24期免息，每期仅需</span><span>249.5元</span></div>
          </div>
          <div class="activity">
              <div class="v-listname">活动</div>
              <div class="listdesc2"> <span>以旧换新</span> <span>官方以旧换新，最高5099元补贴</span></div>
          </div>
           <div class="activity2">
            <div class="listdesc2"> <span>购物赠积分</span> <span>支付后返实付金额相等数值积分</span></div>
           </div>
           <div class="activity3">
            <div class="listdesc3"> <span>学生价</span> <span>晒单有礼</span><span>分期满减</span></div>
           </div>
           <div class="renewal">
            <span>免费定制</span>
            <span>多款式可选</span>
           </div>
           <div class="activity4">
            <div class="v-listname">已选</div>
            <div class="listdesc4"> <span>12GB+256GB至黑</span></div>
            <div>></div>
           </div>
            <div class="activity5">
            <div class="v-listname">送至</div>
            <div class="listdesc5"> <span><van-icon name="location-o" />点击选择送货地址</span></div>
            <div>></div>
           </div>
            <div class="activity6">
             <div class="v-listname">保障</div>
            <div class="listdesc6"> 
              <span><van-icon name="gold-coin-o" />七天无理由退换</span>
            <span><van-icon name="passed" />正品保障</span>
            <span><van-icon name="shield-o" />全国联保</span>
            </div>
            </div>
            <div class="list-view-head">
              <p>商品评价（1800+）</p> <span>好评度99%</span>
            </div>
            <div class="list-view-main">
              <div class="list-view-main1">
                  <img src="img/pl.png" alt="">
                  <span>无敌暴龙战士</span>
              </div>
              <div class="list-view-main2">
                <p>说实话很惊艳！做工很细腻，天玑的处理器搭配vivo的优化，各方面都跻身国内一流了！很满意！</p>
              </div>
              <div class="list-view-main3">
                <img src="img/pl1.webp" alt="">
                <img src="img/pl2.webp" alt="">
              </div>
            </div>
            <div class="list-view-head">
              <p>问答（1）</p> <span>查看全部</span>
            </div>
            <div class="listmain">
              <p><van-icon name="question-o" />有无充电器送</p><span>3个回答</span>
            </div>
            <div class="hottitle">
              <p>热门推荐</p>
              <ul class="tit-list">
                
                <li v-for="(item,index) in titlist" :key="index">
                  <img :src="item.src" alt="">
                  <p>{{item.title}}</p>
                  <p>{{item.title2}}</p>
                  <span class="new">{{item.title3}}</span>
                </li>
              </ul>
            </div>
            <div class="detail">
              <div class="datailhead">
                <img src="img/cs1.webp" alt="">
                 <img src="img/cs2.webp" alt="">
              </div>
              <div class="datailmain">
                <img src="img/cs3.webp" alt="">
              </div>
            </div>
            <div class="datasrc">
              <img src="img/datasrc4.webp" alt="">
              <img src="img/datasrc3.webp" alt="">
              <img src="img/datasrc2.webp" alt="">
            </div>
            <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
  <van-goods-action-icon icon="cart-o" text="购物车" />
  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
            <div class="yk">
              <h3>你可能喜欢</h3>
            </div>
            <div class="floor-container">
          <ul class="phone-list">
            <li v-for="(item,index) in plist" :key="index">
                <img :src="item.src" alt="">
              <h4>{{item.title}}</h4>
              <span>{{item.title2}}</span>
              <p>{{item.title3}}</p>
            </li>
          </ul>
            </div>
    </main>
</template>

<script>
export default {
     data(){
        return{
            current: 0,
            foldright1:false,
            time: 30 * 60 * 60 * 1000,
             images: [
        'img/parduct1.png',
        'img/parduct2.png',
        'img/parduct3.png',
        'img/parduct4.png',
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

        }
    
    },
        methods:{
            foldright:function(){
            this.foldright1=!this.foldright1;
                    },
                        up:function(){
              this.$router.go(-1);
            },
            onChange(index) {
      this.current = index;
    },
                },
}
</script>

<style scoped>
.banner2 img{
    width: 100%;
}
.banner2 .van-swipe__track{
  height: 70vw;
}
.storage{
  
  display: flex;
  justify-content: space-around;
  
  background: #e53524;
   border-top-left-radius:5vw ;
  border-top-right-radius:5vw ;
}
.storage span:nth-of-type(1){
  background: #c52113;
  padding: 5vw 12vw;
  border-top-left-radius:5vw ;
  border-top-right-radius:5vw ;
  color: #fff;
}
.storage span:nth-of-type(2){
  background: #fa563a;
  padding: 5vw 10vw;
  border-top-left-radius:5vw ;
  border-top-right-radius:5vw ;
  color: #fff;
}
.promotion{
  display: flex;
  background:rgb(228, 35, 73);
  padding: 2vw;
}
.price-itme{
  margin-top: 3vw;
  margin-left: 3vw;
}
.price-itme>span:nth-of-type(1){
  color: #fff;
}
.price-itme .contaiternew{
  background-image: linear-gradient(129deg,hsla(0,0%,100%,.83) 8%,#fff 31%,hsla(0,0%,100%,.77));
  color: #ff3353;
  padding: 3vw;
  border-radius: 2vw;
}
.price-itme p{
  margin-top: 5vw;
  margin-bottom: 2vw;
  font-size: 3vw;
}.price-itme p span{
  background: rgba(0,0,0,.1);
  color: #ffcccb;
  padding: 1vw;
  border-radius: 1vw;
}
.price-right img{
  margin-top: 2vw;
  width: 20vw;
  margin-left: 10vw;
}

.colon {
    display: inline-block;
    margin: 0 4px;
    color: #ffffff;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: rgb(243, 66, 66);
    font-size: 5vw;
    text-align: center;
    background-color: #ffffff;
  }
  .van-count-down{
    margin-top: 2vw;
    margin-left: 10vw;
  }
.content{
  width: 90vw;
  margin: 0vw auto;
  margin-top: 5vw;
}
.content span:nth-of-type(1){
  background-image: linear-gradient(83deg,rgba(255,62,91,.9),rgba(255,69,69,.9));
  color: #fff;
  padding: 0vw 1vw;
}
.content span:nth-of-type(2){
      background-color: #f10313;
  color: #fff;
  padding: 0vw 1vw;
}
.content span:nth-of-type(3){
   color: #f10313;
   margin-left: 30vw;
}
.list-box1{
  width: 90vw;
  margin: 0vw auto;
  display: flex;
  justify-content: space-around;
  margin-top: 5vw;
}
.list-boxleft img{
  width: 10vw;
}

.list-boxleft p{
  font-size: 5.5vw;
  color: #000;
}
.list-box1right{
  display: flex;
}
.list-box1right i{
  font-size: 9vw;
}
.list-box2{
   width: 90vw;
  margin: 0vw auto;
  margin-top: 3vw;
}
.list-box2 p{
  font-size: 3vw;
  color: #929191;
}
.list-box3{
  width: 90vw;
  margin: 0vw auto;
  margin-top: 3vw;
   display: flex;
   justify-content: space-around;
}
.list-box3 span{
  color: #929191;
  font-size: 3vw;
}
.list-box3 span:nth-of-type(2){
  background: #ffdbe0;
  padding: 1vw;
  border-radius: 2vw;
}
.list-box3 span:nth-of-type(3){
  background: #ffdbe0;
  padding: 1vw;
  border-radius: 2vw;
}
.wrap2{
  width: 90vw;
  margin: 0px auto;
  overflow: hidden;
  margin-top: 5vw;
}
.wrap2 img{
  height: 20vw;
}
.wrap2 .tit-list2{
  
  overflow-x: auto;
  overflow-y: hidden;
}
.discount{
  width: 90vw;
  margin: 0px auto;
  display: flex;
  
}
.v-listname{
  color: #929191;
  font-size: 3vw;
  margin-left: 0vw;
  margin-right: 10vw;
}
.listdesc span{
  font-size: 3vw;
  color: #f10313;

}
.listdesc span:nth-of-type(2){
  color: #000;
}
.activity{
  width: 90vw;
  margin: 0px auto;
  display: flex;
  margin-top: 2vw;
  
}
.listdesc2 span:nth-of-type(1){
  color: #f10313;
  font-size: 2vw;
  border-radius: 3vw;
  border: 1px solid #929191;
  padding:0vw 1vw;
}
.listdesc2 span{
  font-size: 3vw;
}
.activity2{
  width: 90vw;
  margin: 0px auto;
  margin-top: 2vw;
}
.activity2 div{
  margin-left: 17vw;
}
.activity3{
  width: 90vw;
  margin: 0px auto;
  margin-top: 2vw;
}
.listdesc3{
  margin-left: 17vw;
}
.listdesc3 span{
  color: #f10313;
  font-size: 2vw;
  border-radius: 3vw;
  border: 1px solid #929191;
  padding:0vw 1vw;
}
.renewal{
  
  margin: 0px auto;
  display: flex;
  justify-content: center;
  margin-top: 5vw;
  background: #ffeaed;
  padding: 2vw;
}
.renewal span:nth-of-type(1){
  color: #f10313;
}
.activity4{
  width: 90vw;
  margin: 0px auto;
  margin-top: 2vw;
  display: flex;
}
.listdesc4 span{
  font-size: 4vw;
}

.activity5{
  width: 90vw;
  margin: 0px auto;
  margin-top: 4vw;
  display: flex;
}
.listdesc5 span{
  font-size: 4vw;
}
.listdesc5 .van-icon-location-o{
  color: #fd3030;
}

.activity6{
  width: 90vw;
  margin: 0px auto;
  margin-top: 4vw;
  display: flex;
}
.listdesc6 span{
  font-size: 3vw;
}
.listdesc6 i{
  color: #fd3030;
}
.listdesc6{
  display: flex;
  justify-content: space-around;
}
.list-view-head{
  width: 90vw;
  margin: 0px auto;
  margin-top: 10vw;
  display: flex;
  justify-content: space-between;
}
.list-view-head span{
  font-size: 3vw;
  color: #929191;
}
.list-view-main{
  width: 90vw;
  margin: 0px auto;
  margin-top: 4vw;
  margin-bottom: 10vw;
}

.list-view-main1 img{
  width: 10vw;
  margin-right: 5vw;
}
.list-view-main1 span{
  font-size: 4vw;
  color: #929191;
}
.list-view-main2{
  font-size: 3vw;
  margin-top: 3vw;
}
.list-view-main3 img{
  width: 20vw;
  margin-right: 5vw;
  border-radius: 3vw;
}

.listmain{
  width: 90vw;
  margin: 0px auto;
  margin-top: 2vw;
  display: flex;
  justify-content: space-between;
}
.listmain span{
  font-size: 3vw;
  color: #929191;
}
.hottitle{
  width: 90vw;
  margin: 0px auto;
  margin-top: 10vw;
}





.hottitle .tit-list  img{
  
  width: 80px;
  height: 80px;
}
.hottitle ul  li{
  width: 30%;
   text-align: center;
   font-size: 11px;
   color: #666666;
}
.hottitle{
  width: 90vw;
  margin: 0px auto;
  overflow: hidden;
  margin-top: 5vw;
}

.hottitle .tit-list{
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.hottitle ul  li .new{
 color: #ee0a24;
}
.detail{
  
  margin: 0px auto;
  margin-top: 10vw;
  background: #000;
}
.datailhead img{
  width: 40vw;
  margin-left: 5vw;
}
.datailmain img{
  width: 90vw;
}
.datasrc img{
  width: 100vw;
}
.yk{
  width: 90vw;
   margin: 0px auto;
   margin-top: 5vw;
}
.van-icon-user-o{
   font-size: 10vw;
}
</style>