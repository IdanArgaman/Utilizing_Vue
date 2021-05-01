<template>
  <label>
    {{ label }}
		<!-- v-bind="$attrs" copy attrs from parent to input -->
    <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners" />
  </label>
</template>

<script>
export default {
  /* 
    By default, parent scope attribute bindings that are not recognized as props will
    "fallthrough" and be applied to the root element of the child component as normal
    HTML attributes. By setting inheritAttrs to false, this default behavior can be disabled.
    The attributes are available via the $attrs instance property (new in 2.4)
    and can be explicitly bound to a non-root element using v-bind.
	*/

  inheritAttrs: false,
  props: ["label", "value"],
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners set on the parent, for example: <Wrapper @focus...></Wrapper>
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit("input", event.target.value);
          },
        }
      );
    },
  },
};
</script>

<style>
</style>