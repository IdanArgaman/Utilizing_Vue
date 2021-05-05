<template>
  <Address v-bind="address" />
</template>

<script>
import Address from "./address";

export default {
  components: {
    Address
  },
  data() {
    return {
      address: {
        street: "Rakafot",
        state: "NY",
        city: "Ahuzat Barak",
        zip: 18000,
      },
    };
  },
};
</script>

<style>
</style>