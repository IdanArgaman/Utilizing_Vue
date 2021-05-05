<template>
  <button>{{label}}</button>
</template>

<script>
export default {
    props: ['label']        
}
</script>

<style>
button {
  width: auto;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>