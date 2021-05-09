<template>
  <BaseLayout>
    <template #header="{ date, msg }">
       <!-- We should note that the slot has an access to the component data! -->
      <div class="msg">{{ test }}</div>
      <p>Header template. Data from scope: 
        <ul>
          <li>{{ date }}</li>
          <li>{{ msg }}</li>
        </ul>
      </p>
    </template>

    <p>
      <span class="msg">{{ test }}</span><br/>
      A paragraph for the main content.
    </p>
    <p>And another one.</p>
    <br />

    <template #footer="{ magicNumber, msg }">
      <div class="msg">{{ test }}</div>
      <p>Footer template, data from scope: "{{ magicNumber }}", "{{ msg }}"</p>
      <p>Good Morning!</p>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";

export default {
  components: { BaseLayout },
  data() {
    return {
      test: "Test Data From Page", // The slot (even if scoped) has an access to this data
    };
  },
};
</script>

<style>
.msg {
  background: red;
  color: white;
  display: inline-block;
}
</style>
