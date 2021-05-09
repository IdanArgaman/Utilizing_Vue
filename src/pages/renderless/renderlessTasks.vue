<script>
export default {
  model: {
    prop: "tasks",
    event: "update",
  },
  data() {
    return {
      input: ""
    }
  },
  props: {
    tasks: { required: true },
    removeOnBackspace: { default: true },
  },
  methods: {
    removeTask(task) {
      this.$emit(
        "update",
        this.tasks.filter((t) => t.id !== task.id)
      );
    },
    addTask() {
      if(this.input === '') {
        return;
      } 
      this.$emit("update", [...this.tasks, {name: this.input, id: new Date().getTime()}]);
      this.clearInput();
    },
    clearInput() {
      this.input = "";
    },
  },
  render() {
    return this.$scopedSlots.default({
      tasks: this.tasks,
      removeTask: this.removeTask,
      addTask: this.addTask,
      inputProps: {
         value: this.input
      },
      inputEvents: {
        input: e => (this.input = e.target.value)
      }
    })[0];
  },
};
</script>
<style >
</style>