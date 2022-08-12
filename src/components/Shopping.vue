<template>
    <main>
        <div class="myhead">
            <span><van-icon name="arrow-left" @click="up" /></span>
            <h2>购物车</h2>
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
        <div class="shopping-main">
            <img src="img/Shopping.png" alt="">
            <p>您的购物车还没有任何商品</p>
        </div>
        
        <div class="btn">
            <van-button round color="#00acff" plain>去逛逛</van-button>
             <van-button round color="#00acff" plain>我的收藏</van-button>
        </div>
        <p>-为您推荐-</p>
         <ul class="phone-list">
            <li v-for="(item,index) in plist" :key="index">
                <img :src="item.src" alt="">
              <h4>{{item.title}}</h4>
              <span>{{item.title2}}</span>
              <p>{{item.title3}}</p>
            </li>
          </ul>
    </main>
</template>

<script>
export default {
    data(){
        return{
            foldright1:false,
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

<style scoped>
.shopping-main{
    width: 90vw;
    margin: 0vw auto;
    text-align: center;
    margin-top: 20vw;
}
.shopping-main p{
    color: #888;
    font-size: 3vw;
    margin-top: 5vw;
}
.shopping-main>img{
    width: 50vw;
}
.btn{
    width: 90vw;
    margin: 0vw auto;
    margin-top: 10vw;
    display: flex;
    justify-content:space-around;
}
main>p{
    width: 90vw;
    margin: 0vw auto;
    text-align: center;
    color: #333;
    margin-top: 20vw;
    margin-bottom: 10vw;
}
.van-icon-user-o{
   font-size: 10vw;
}
</style>