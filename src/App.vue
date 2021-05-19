<template>
  <div id="app">
    <nav>
      <router-link to="/basic">Basics Vue</router-link>
      <router-link to="/dynamic-form">Dynamic Form</router-link>
      <router-link to="/nested-v-model">Nested v-model</router-link>
      <router-link to="/async">Async Component</router-link>
      <router-link to="/basic-slots">Basic Slots</router-link>
      <router-link to="/tabs">Tabs</router-link>
      <router-link to="/modal">Reusable Modal</router-link>
      <router-link to="/ListenersAndAttrs">Listeners and Attrs</router-link>
      <router-link to="/render">Using Render Function</router-link>
      <router-link to="/custom-events">Playing with custom events</router-link>
      <router-link to="/renderless">Renderless component</router-link>
      <router-link to="/axios-hoc">Axios HOC</router-link>
      <router-link to="/routing-nested">Routing - Nested</router-link>
      <router-link to="/routing-named/1234">Routing - Named</router-link>
    </nav>
    <div class="view"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 600px;
}

.view {
  text-align: initial;
  margin: 10px;
  padding: 5px;
  border: 1px solid black;
  box-shadow: inset 0 0 10px #ccc;
  flex: 1;
}
nav a:link,
nav a:visited {
  background-color: purple;
  border: none;
  color: #ffffff;
  padding: 15px 32px;
  text-align: center;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}

nav a:hover,
nav a:active {
  background-color: #6d0062;
}
</style>
