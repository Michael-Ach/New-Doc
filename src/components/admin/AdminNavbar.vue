<template>
  <div>
    <v-app-bar color="indigo lighten-1" dense dark height="65" app>
      <v-app-bar-nav-icon
        v-if="mini"
        @click="mini = !mini"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>richCode</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon x-large>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="item in menuList"
            :key="item.title"
            @click="logOut"
          >
            <v-list-item-title> {{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      :mini-variant.sync="mini"
      permanent
      class="indigo lighten-1"
      dark
      ><v-list-item></v-list-item>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon>mdi-account</v-icon>
        </v-list-item-avatar>

        <v-list-item-title class="subtitle-1"
          >Master richCode</v-list-item-title
        >
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
          class="my-6"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="subtitle-1">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AdminNavbar",
  components: {},

  data() {
    return {
      drawer: true,
      name: null,
      email: null,
      items: [
        { title: "Overview", icon: "mdi-kodi", link: "/admin/overview" },
        { title: "Restaurants", icon: "mdi-store", link: "/admin/restaurants" },
        { title: "Orders", icon: "mdi-gift", link: "/admin/orders" },
      ],
      mini: false,
      menuList: [{ title: "LogOut" }],
    };
  },
  methods: {
    logOut() {
      this.$router.push("/");
    },
  },

  computed: {
    navDrawer() {
      // Use in computed property
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return this.drawer;
        case "md":
          return "500px";
        case "lg":
          return "600px";
        case "xl":
          return "600px";
      }
      return "300px";
    },
  },
};
</script>

<style scoped></style>
