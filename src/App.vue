<template>
  <div id="app">
    <AsyncHelloWorld />
    <br/>
    <BaseLayout>
      <template #header="{date, msg}">
        Header template, date from scope "{{ date }}", "{{ msg }}"
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template #footer="{magicNumber, msg}">
        <p>
          Footer template, data from scope: "{{ magicNumber }}", "{{ msg }}"
        </p>
      </template>
    </BaseLayout>
  </div>
</template>

<script>
// import AsyncHelloWorld from './components/AsyncHelloWorld';

import BaseLayout from "./components/baseLayout";
export default {
  name: "App",
  components: {
    BaseLayout,
    // AsyncHelloWorld
    AsyncHelloWorld: () => import("./components/AsyncHelloWorld.vue"),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
