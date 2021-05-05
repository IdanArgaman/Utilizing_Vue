<template>
  <div>
      Using v-bind to get all props:<br/><br/>
      Street: {{ street }}<br/>
      State: {{ state }}<br/>
      City: {{ city }}<br/>
      Zip: {{ zip }}<br/>
  </div>
</template>
<script>
export default {
  components: {  },
  props: [
      "street", 
      "state",
      "city",
      "zip"
  ],
};
</script>