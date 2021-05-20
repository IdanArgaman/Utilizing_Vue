<template>
  <div>
    <h1>Named views example:</h1>
    <div>
      <router-view :prop-to-child="parseInt(id)" />
      <router-view v-if="isUser" name="user" />
      <router-view v-else name="guest" />
    </div>
  </div>
</template>

<script>
import NamedRoutingUserComponent from "./user.vue";
import NamedRoutingGuestComponent from "./guest.vue";
import NamedRoutingChildComponent from "./child.vue";

export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isUser: false,
    };
  },
  routeConfig: {
    path: "/routing-named/:id",
    props: true,
    children: [
      {
        path: "child",
        components: {
          default: NamedRoutingChildComponent,
          user: NamedRoutingUserComponent,
          guest: NamedRoutingGuestComponent,
        },
      },
    ],
  },
  displayName: 'Routing - Using Named Routes',
  path: "/routing-named/1234/child"
};
</script>

<style>
</style>