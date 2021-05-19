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
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
li {
  margin-left: 25px;
}
</style>
