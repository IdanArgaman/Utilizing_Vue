<template>
  <div>
    <Address v-model="address"></Address>
    JSON: {{ address }}
  </div>
</template>

<script>
import Address from "./address.vue";

export default {
  components: { Address },
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
  routeConfig: {
    path: "/nested-v-model",
  },
  displayName: "Nested v-model",
};
</script>

<style>
</style>