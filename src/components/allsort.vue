<template>
    <main>
        <div class="myhead">
            <span><van-icon name="arrow-left" @click="up" /></span>
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
        <van-tree-select height="100vw" :items="items" :main-active-index.sync="active">
  <template #content>
    <van-image
      v-if="active === 0"
      src="https://img01.yzcdn.cn/vant/apple-1.jpg"
      
    />
    <van-image
      v-if="active === 1"
      src="https://img01.yzcdn.cn/vant/apple-2.jpg"
    />
  </template>
</van-tree-select>
    </main>
</template>

<script>
export default {
data() {
    return {
         active: 0,
      items: [{ text: 'X 系列' }, { text: 'Y 系列' }, { text: 'X80 系列' }, { text: 'vivo90 系列' },{ text: '配件' }, { text: 'iOOQ 系列' }, { text: 'pro 系列' }
      ],
         
      foldright:false,
    
    };
  },
    methods:{
foldright1:function(){
            this.foldright=!this.foldright;
                    },
            up:function(){
              this.$router.go(-1);
            }
    }
}
</script>
<style scoped>
.van-icon-user-o{
   font-size: 10vw;
}
</style>