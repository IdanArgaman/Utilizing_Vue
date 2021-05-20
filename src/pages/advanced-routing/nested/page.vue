<template>
  <div>
    <h1>Advanced Routing Page</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'user', params: { userId: 1 } }"
          >User1</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'user', params: { userId: 2 } }"
          >User2</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'user', params: { userId: 3 } }"
          >User3</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'user', params: { userId: 4 } }"
          >User4</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

import UserPage from './user.vue';
import UserLikes from './userLikes.vue';
import UserPosts from './userPosts.vue';

export default {
  mounted() {
    console.log(this.$route);
  },
  routeConfig:{
      path: '/routing-nested',
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
    },
    displayName: 'Routing - Using Nested Routes'
};
</script>

<style>
li {
  margin-left: 25px;
}
</style>
