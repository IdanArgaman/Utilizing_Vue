<template>
  <button @click="addTimeBtnClicked">Add Time</button>
</template>

<script>

// The Child control is used with v-model.

// We configured the to accept its value through a "times" property and
// it emits new value using the "update" event!

// So the parent can use the child component using"
// <Child v-model="data" />
// OR
// <Child :times="data" @update="times => this.times = times" />

export default {
  model: {
    prop: "times",
    event: "update",
  },
  props: {
      times: {
          required: true
      }
  },
  methods: {
    addTimeBtnClicked() {
      this.$emit("update",[...this.times, new Date()]);
    },
  },
};
</script>

<style>
</style>