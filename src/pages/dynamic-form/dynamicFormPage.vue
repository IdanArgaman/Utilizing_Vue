<template>
  <div>
    <component
      v-for="(control, idx) in schema"
      :is="map[control.type]"
      :key="idx"
      v-bind="control"
      v-model="data[control.path]"
    ></component>

    <div style="padding: 10px 0px">Form Data: {{ data }}</div>
  </div>
</template>

<script>
import dynamicInput from "./components/dynamic-input";
import dynamicButton from "./components/dynamic-button";
import dynamicGroup from "./components/dynamic-group";

const map = {
  text: dynamicInput,
  button: dynamicButton,
  group: dynamicGroup
};

export default {
  components: {
    dynamicInput,
    dynamicButton,
    dynamicGroup,
  },
  data() {
    return {
      map: map,
      schema: [
        {
          type: "text",
          path: "firstName",
          label: "First Name",
          validation: (v) => v !== 'hello'
        },
        {
          type: "text",
          path: "lastName",
          label: "Last Name",
        },
        {
          type: "group",
          path: "address",
          label: "Address",
          fields: [
            {
              type: "text",
              path: "street",
              label: "Street",
            },
            {
              type: "text",
              path: "zip",
              label: "ZIP",
            },
          ],
        },
        {
          type: "button",
          label: "Send",
        },
      ],
      data: {
        firstName: "Idan",
        lastName: "Argaman",
        address: {
            street: 'Rakafot',
            zip: 1800
        }
      },
    };
  },
};
</script>

<style>
</style>