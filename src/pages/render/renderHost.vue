
<script>
export default {
  render(createElement) {
    return createElement("div", {}, [
      this.$scopedSlots.default({
        subject: "World",
      }),

      this.$scopedSlots.body({
        data: "Universe",
      }),
    ]);
  },
};
</script>

<style>
</style>