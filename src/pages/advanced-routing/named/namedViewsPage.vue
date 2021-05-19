<template>
  <div>
    <h1>Named views example:</h1>
    <div>
      <router-view :prop-to-child="parseInt(id)" />
      <router-view v-if="isUser" name="user" />
      <router-view v-else name="guest" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isUser: false
    }
  }
};
</script>

<style>
</style>