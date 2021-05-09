<template>
  <div class="container">
    <header>
      <slot name="header" v-bind="headerData"></slot>
    </header>
    <main>
      <br />
      Default Content:
      <slot></slot>
    </main>
    <footer>
      <slot name="footer" v-bind="footerData"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerData: {
        date: new Date(),
        msg: 'Hi, I"m a header',
      },
      footerData: {
        magicNumber: 1000,
        msg: 'Hi, I"m a footer'
      }
    };
  },
};
</script>

<style></style>
