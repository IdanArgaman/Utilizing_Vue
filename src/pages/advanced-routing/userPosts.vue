<template>
  <div>
    <h2>User Posts</h2>
    User ID: {{ $route.params.userId }}
    <ul>
      <li>Post1</li>
      <li>Post2</li>
      <li>Post3</li>
      <li>Post4</li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style></style>
