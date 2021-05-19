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
import NestedRoutingPage from './pages/advanced-routing/nested/nestedRoutingPage.vue';
import UserPage from './pages/advanced-routing/nested/user.vue';
import UserLikes from './pages/advanced-routing/nested/userLikes.vue';
import UserPosts from './pages/advanced-routing/nested/userPosts.vue';
import NamedRoutingPage from './pages/advanced-routing/named/namedViewsPage.vue';
import NamedRoutingUserComponent from './pages/advanced-routing/named/user.vue';
import NamedRoutingGuestComponent from './pages/advanced-routing/named/guest.vue';
import NamedRoutingChildComponent from './pages/advanced-routing/named/child.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const AsyncHelloWorld = () => import("./pages/async/AsyncHelloWorld.vue");

const router = new VueRouter({
  routes: [{
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
    },
    {
      path: '/routing-named/:id',
      component: NamedRoutingPage,
      props: true,
      children: [{
        path: "child",
        components: {
          default: NamedRoutingChildComponent,
          user: NamedRoutingUserComponent,
          guest: NamedRoutingGuestComponent,
        },
      }, ],
    },
    {
      path: '/routing-nested',
      component: NestedRoutingPage,
      children: [{
        name: 'user',
        path: ':userId',
        component: UserPage,
        children: [{
            name: 'likes',
            path: 'likes',
            component: UserLikes,
          },
          {
            name: 'posts',
            path: 'posts',
            component: UserPosts,
          }
        ]
      }]
    }
  ]
})

Vue.prototype.append = (path, pathToAppend) =>
  path + (path.endsWith('/') ? '' : '/') + pathToAppend;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')