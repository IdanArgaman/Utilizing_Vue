<template>
  <select v-model="localState">
    <!-- Note how to use v-for on object, the second parameter is the key -->
    <option
      :key="abbreviation"
      v-for="(state, abbreviation) in states"
      :value="abbreviation"
      v-html="state"
    ></option>
  </select>
</template>
<script >
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      states: {
        NY: "New York",
        WI: "Wisconsin",
      },
    };
  },
  computed: {
      // Note how to implement v-model without using DOM element events
      // In this case we are using the computed setter
    localState: {
      get() {
        return this.value;
      },
      set(localState) {
        this.$emit("input", localState);
      },
    },
  },
};
</script>

<style>
</style>