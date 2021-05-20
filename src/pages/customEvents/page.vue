<template>
  <div>
    <!-- Using v-model -->
    <Child v-model="times" />
    <div v-for="time in times" :key="time.getTime()">
      {{ time }}
    </div>

    <br />

    <!-- Using prop and event -->
    <Child :times="moreTimes" @update="(times) => (this.moreTimes = times)" />
    <div v-for="(time, idx) in moreTimes" :key="idx">
      {{ time }}
    </div>
  </div>
</template>

<script>
import Child from "./child";

export default {
  components: {
    Child,
  },
  data() {
    return {
      times: [new Date()],
      moreTimes: [new Date()],
    };
  },
  routeConfig: {
    path: "/custom-events"
  },
  displayName: "Vue Custom Events",
};
</script>

<style>
</style>