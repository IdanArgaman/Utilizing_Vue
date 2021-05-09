<template>
  <RenderLessTasks v-model="tasks">
      <!-- When using the abbreviated syntax we should wrap the template content with div
      if we don't do so, $scopedSlots.default would return multiple root elements -->

      <!-- Using the renderless technic, the renderless component provides the functionality
      and the template provides the UI that is exposed to this functionality by the 
      scoped slots -->
    <template
      #default="{ tasks, removeTask, addTask, inputProps, inputEvents }">
      <div>
        <ul>
          <li v-for="task in tasks" :key="task">
            {{ task.name }} <button type="button" @click="removeTask(task)">Remove</button>
          </li>
        </ul>
        Add Task
        <input type="text" v-bind="inputProps" v-on="inputEvents" />
        <button type="button" @click="addTask">Add</button>
      </div>
    </template>
  </RenderLessTasks>
</template>
<script>
import RenderLessTasks from "./renderlessTasks";

export default {
  components: {
    RenderLessTasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
};
</script>
<style lang="">
</style>