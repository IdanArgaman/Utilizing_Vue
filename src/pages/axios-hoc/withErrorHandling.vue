<template lang="">
    <div>
        <div class="modal" :class="{'open': isOpen}">
            {{ error }}
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: ["axios"],
  data() {
    return {
      error: "",
      isOpen: false,
    };
  },
  created() {
    this.reqInterceptor = this.axios.interceptors.request.use(function(req) {
      this.isOpen = false;
      return req;
    }.bind(this));

    this.resInterceptor = this.axios.interceptors.response.use(
      (res) => res,
      function(error)  {
        this.error = error;
        this.isOpen = true;
      }.bind(this));
  },
  beforeDestroy() {
    this.axios.interceptors.request.eject(this.reqInterceptor);
    this.axios.interceptors.response.eject(this.resInterceptor);
  },
};
</script>
<style>
.modal {
  position: fixed;
  top: 0;
  left: calc(50% - 100px);
  width: 200px;
  height: 100px;
  background: White;
  border: 1px solid #ccc;
  display: none;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 75%);
  top: calc(50% - 50px);
}

.modal.open {
  display: block;
}
</style>