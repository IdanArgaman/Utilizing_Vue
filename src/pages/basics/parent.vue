<template>
  <div>
    <Address v-bind="data" />
    {{ data }}
  </div>
</template>

<script>
import Address from "./address";

export default {
  props: {
      data: {
          type: Object,
          default: () => {}
      }
  },
  components: {
    Address,
  },
  mounted() {
      console.log('Parent mounted!')
  }
};
</script>

<style>
</style>