<template>
  <div id="app">
    <nav>
      <router-link v-for="item in items" :to="item.path" :key="item.name">{{item.name}}</router-link>
    </nav>
    <div class="view"><router-view></router-view></div>
  </div>
</template>

<script>
import * as Pages from "./pages";

export default {
  name: "App",
  components: {},
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.items = Object.keys(Pages).map((key) => ({
      name: Pages[key].displayName,
      path: Pages[key].path || Pages[key].routeConfig.path,
    }));
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
