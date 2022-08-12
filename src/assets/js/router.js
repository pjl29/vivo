// 引入组件
// import 文件名字 from 地址
import VueRouter from 'vue-router'
import index from '../../components/index.vue'
import my from '../../components/my.vue'
import Shopping from '../../components/Shopping.vue'
import login from '../../components/login.vue'
import allsort from '../../components/allsort.vue'
import product from '../../components/product.vue'
// export default 导出文件
var router= new VueRouter({
  routes:[
      {
          path:'/index',
          component:index,
      },
      {
        path:'/my',
        component:my,
    },
    {
      path:'/Shopping',
      component:Shopping,
  },
  {
    path:'/login',
    component:login,
  },
  {
    path:'/allsort',
    component:allsort,
  },
  {
    path:'/product',
    component:product,
  },
    {
        path:"/*",
        redirect:'/index'
    }
  ]
})
// 导出
export default router;