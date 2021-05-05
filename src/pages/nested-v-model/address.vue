<template>
  <div>
    <input name="street" v-model="value.street" />
    <input name="city" v-model="value.city" />
    <!-- A nested component we also want to emit an "input" event in order to catch
         changes coming form it!
     -->
    <State v-model="value.state" />
    <input name="zip" v-model="value.zip" />
  </div>
</template>
<script>
import State from "./state";

export default {
  components: {
    State,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  watch: {
    // Using watch to detect changes coming from even in nested element
    // Alsom using a watch allows us to avoid using change detection DOM events 
    // on the element in use!
    localAddress: {
      handler(newVal) {
        this.$emit("input", newVal);
      },
      // Note the deep, used in order to catch nested change
      deep: true,
    },
  },
};
</script>