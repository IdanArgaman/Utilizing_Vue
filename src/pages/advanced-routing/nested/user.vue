<template>
  <div>
    <h2>User Details Page:</h2>
    User ID: {{ $route.params.userId }}
    <ul>
      <li>
        <router-link :to="{ name: 'posts' }"
          >Posts</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'likes' }"
          >Likes</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style></style>
