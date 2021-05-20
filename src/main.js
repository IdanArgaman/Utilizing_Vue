import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import * as Pages from './pages';

Vue.config.productionTip = false
Vue.use(VueRouter);

const AsyncHelloWorld = () => import("./pages/async/AsyncHelloWorld.vue");

const router = new VueRouter({
  routes: [
    {
      path: '/async',
      component: AsyncHelloWorld
    },
  ]
})

Object.keys(Pages).forEach(key => {
  router.addRoute({
    ...Pages[key].routeConfig,
    component: Pages[key]
  })
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')