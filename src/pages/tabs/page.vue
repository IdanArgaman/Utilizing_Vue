<template lang="html">
  <div class='wrapper'>
    <button class='change__style' @click='changeStyle()'>Change Style</button>
    <tabs :mode="mode">
      <tab title="Tab 1">Hello From Tab 1</tab>
      <tab title="Tab 2">Hello From Tab 2</tab>
      <tab title="Tab 3">Hello From Tab 3</tab>
      <tab title="Tab 4">Hello From Tab 4</tab>
    </tabs>
  </div>
</template>

<script>
// Thanks to: https://learnvue.co/2019/12/building-reusable-components-in-vuejs-tabs/

import Tab from "./tab.vue";
import Tabs from "./tabs.vue";

export default {
  components: {
    Tab,
    Tabs,
  },
  data() {
    return {
      mode: "light",
    };
  },
  methods: {
    changeStyle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
  routeConfig: {
    path: "/tabs",
  },
  displayName: 'A Tab Component Using $children'
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  font-family: "Karla", sans-serif;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  margin: 0;
  padding: 20px;
}

.change__style {
  background-color: #eee;
  font-size: 1em;
  margin-bottom: 10px;
  padding: 5px;
}
</style>