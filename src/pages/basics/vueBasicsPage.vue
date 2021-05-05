<template>
  <div>
    <Address v-bind="address" />
    <br/>
    <Parent :data="address" data-xxx="temp" />
  </div>
</template>

<script>
import Address from "./address";
import Parent from "./parent";
export default {
  components: {
    Address,
    Parent,
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