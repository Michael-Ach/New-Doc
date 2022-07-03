<template>
  <div>
    <AdminNavbar />

    <v-container class="mt-16">
      <v-row class="pa-4">
        <v-col class="col-md-6 my-auto">
          <p class="text-center text-h4" id="category-list">Overiew</p>
          <p id="category-item1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            assumenda molestiae ipsum. Omnis, voluptatum odit. Harum aspernatur
            ad, voluptatibus earum consectetur veniam deleniti aliquam veritatis
            rem quod itaque vero obcaecati! Reiciendis voluptates, ipsam quas
            hic
          </p>
        </v-col>
        <v-col class="col-md-6" id="category-item2">
          <v-img src="../../assets/svg/overview.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AdminNavbar from "./AdminNavbar.vue";
export default {
  name: "OverviewPage",
  components: { AdminNavbar },

  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
