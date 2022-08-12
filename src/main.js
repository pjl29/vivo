import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import router from './assets/js/router.js'
import { Popup } from 'vant';
Vue.use(Popup);
import Vant from 'vant';
import 'vant/lib/index.css';
import { NavBar } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { CountDown } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Icon } from 'vant';
import { Button } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { TreeSelect } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(TreeSelect);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(CountDown);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(Vant);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
