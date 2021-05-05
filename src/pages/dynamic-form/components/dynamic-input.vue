<template>
  <div class="dynamic-input">
    <label :for="value">{{ label }}</label>
    <input :id="value" type="text" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  props: ["label","value"],
  methods: {
    onInput($event) {
      this.$emit('input', $event.target.value);
    }
  }
};
</script>

<style>
.dynamic-input {
  padding: 5px;
}

label {
  display: inline-block;
  width: 150px;
}

input[type=text], select {
  width: 200px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>