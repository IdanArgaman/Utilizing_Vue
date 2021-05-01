import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import BasicSlotsPage from './pages/basic-slots/BasicSlotsPage';
import TabPage from './pages/tabs/tabsPage.vue';
import RuesableModalPage from './pages/modal/ModalApp.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const AsyncHelloWorld = () => import("./pages/async/AsyncHelloWorld.vue");

const router = new VueRouter({
  routes: [{
      path: '/async',
      component: AsyncHelloWorld
    },
    {
      path: '/basic-slots',
      component: BasicSlotsPage
    },
    {
      path: '/tabs',
      component: TabPage
    },
    {
      path: '/modal',
      component: RuesableModalPage
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')