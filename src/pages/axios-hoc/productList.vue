<template lang="">
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "./axiosInstance";

export default {
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    axios.get("http://localhost/products.json");
  },
};
</script>
<style lang="">
</style>