<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 250px;
  transform: translate(-50%, -50%);

  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  background-color: white;

  padding: 16px;
  z-index: 500;

  box-sizing: border-box;
}

.modal-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.modal-body {
  flex: 1;
  padding: 5px 0;
}
</style>