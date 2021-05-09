import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import BasicSlotsPage from './pages/basic-slots/BasicSlotsPage';
import TabPage from './pages/tabs/tabsPage.vue';
import RuesableModalPage from './pages/modal/ModalApp.vue';
import ListenersAndAttrs from './pages/listenersAndAttrs/parent.vue';
import NestedVModelPage from './pages/nested-v-model/nestedVModelPage.vue';
import BasicsPage from './pages/basics/vueBasicsPage.vue'
import DynamicFormPage from './pages/dynamic-form/dynamicFormPage.vue';
import RenderPage from './pages/render/renderPage.vue';
import CustomEventsPage from './pages/customEvents/page.vue';
import RenderlessPage from './pages/renderless/page.vue';
import AxiosHocPage from './pages/axios-hoc/page.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const AsyncHelloWorld = () => import("./pages/async/AsyncHelloWorld.vue");

const router = new VueRouter({
  routes: [
    {      
      path: '/basic',
      component: BasicsPage
    },
    {      
      path: '/axios-hoc',
      component: AxiosHocPage
    },
    {      
      path: '/renderless',
      component: RenderlessPage
    },
    {      
      path: '/custom-events',
      component: CustomEventsPage
    },
    {      
      path: '/render',
      component: RenderPage
    },
    {
      path: '/dynamic-form',
      component: DynamicFormPage
    },
    {
      path: '/nested-v-model',
      component: NestedVModelPage
    },
    {
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
    },
    {
      path: '/ListenersAndAttrs',
      component: ListenersAndAttrs
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')