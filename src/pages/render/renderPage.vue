<template>
  <RenderHost>
    <template v-slot="{ subject }">
        Hello {{ subject }}<br/><br/>
    </template>
    <template v-slot:body="{ data }">
        Hello {{ data }}
    </template>
  </RenderHost>
</template>

<script>
import RenderHost from "./renderHost.vue";
export default {
  components: { RenderHost },
};
</script>

<style>
</style>