<template>
  <Modal>
    <template #header>
      <h3>Test Modal #1</h3>
    </template>

    <p>Body of modal #1</p>

    <template #footer>
      <button @click="close('Modal closed')" class="btn btn-primary">
        Close Modal
      </button>
      <button @click="dismiss('Modal dismissed')" class="btn btn-primary">
        Dismiss Modal
      </button>
    </template>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: { Modal },
  props: {
    close: {
      type: Function,
      required: true,
    },
    dismiss: {
      type: Function,
      required: true,
    },
  },
};
</script>