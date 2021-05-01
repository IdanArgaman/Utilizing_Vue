<template>
  <div>
    <Wrapper data-simple="check" @focus="say('Input focus')" v-model="modelData"></Wrapper>
    <p>
      {{ message }}
    </p>
    <p>
      {{ modelData }}
    </p>
  </div>
</template>

<script>
import Wrapper from "./wrapper";

export default {
  components: {
    Wrapper,
  },
  data() {
      return {
          message: null,
          modelData: 'Hi'
      }
  },
  methods: {
      say(val) {
          this.message = new Date().toTimeString() + " " + val
      }
  }
};
</script>

<style>
</style>