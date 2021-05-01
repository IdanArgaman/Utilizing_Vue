<template>
  <div id="modal-app">
    <ModalRoot />
    <button @click="addModal" class="btn btn-primary">Open modal</button>
  </div>
</template>

<script>
import ModalRoot from "./components/ModalRoot.vue";
import ModalService from "./services/modal.service";
import TestModal from "./components/TestModal.vue";

export default {
  name: "ModalApp",
  components: { ModalRoot },
  methods: {
    addModal() {
      ModalService.open(TestModal)
        .then((v) => alert("confirmed: " + v))
        .catch((v) => alert("dismissed" + v));
    },
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