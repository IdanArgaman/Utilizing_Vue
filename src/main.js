import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import BasicSlotsPage from './pages/basic-slots/BasicSlotsPage';

Vue.config.productionTip = false
Vue.use(VueRouter);

const AsyncHelloWorld = () => import("./components/AsyncHelloWorld.vue");

const router = new VueRouter({
  routes: [
    {path: '/async', component: AsyncHelloWorld},
    {path: '/basic-slots', component: BasicSlotsPage}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
