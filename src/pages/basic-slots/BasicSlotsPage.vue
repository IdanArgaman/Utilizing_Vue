<template>
  <BaseLayout>
    <template #header="{date, msg}">
      Header template, date from scope "{{ date }}", "{{ msg }}"
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template #footer="{magicNumber, msg}">
      <p>Footer template, data from scope: "{{ magicNumber }}", "{{ msg }}"</p>
      <p>Good Morning!</p>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";

export default {
  components: { BaseLayout },
};
</script>

<style></style>
