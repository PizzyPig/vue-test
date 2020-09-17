import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import moment from "moment";
import { otherRouters } from "@/router/index";
import MuseUI from "muse-ui";
import 'muse-ui/dist/muse-ui.css';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(MuseUI);
Vue.prototype.$moment = moment;

// 路由配置
const RouterConfig = {
  routes: otherRouters
};
const router = new VueRouter(RouterConfig);

/* router.afterEach(route => {

}) */

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({
      path: '/home'
    });
  } else {
    next();
  }
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
