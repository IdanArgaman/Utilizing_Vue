<template>
  <div>
    <component
      v-for="(control, idx) in fields"
      :is="map[control.type]"
      :key="idx"
      v-bind="control"
      v-model="value[control.path]"
    ></component>
  </div>
</template>

<script>
import dynamicInput from "./dynamic-input";
import dynamicButton from "./dynamic-button";
import dynamicGroup from "./dynamic-group";

const map = {
  text: dynamicInput,
  button: dynamicButton,
  group: dynamicGroup,
};

export default {
  props: ["label", "value", "fields"],
  components: {
    dynamicInput,
    dynamicButton,
    dynamicGroup,
  },
  data() {
    return {
      map: map,
    };
  },
   watch: {
    value: {
      handler(newVal) {
        this.$emit("input", newVal);
      },
      deep: true,
    },
  },
  mounted() {},
};
</script>

<style>
</style>