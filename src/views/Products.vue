<template>
  <v-container fluid class="my-0 mx-auto pa-0">
    <Navbar />
    <v-container>
      <v-row class="pa-4">
        <v-col class="col-md-6 my-auto">
          <p class="text-center text-h4">Products - Under Construction</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            assumenda molestiae ipsum. Omnis, voluptatum odit. Harum aspernatur
            ad, voluptatibus earum consectetur veniam deleniti aliquam veritatis
            rem quod itaque vero obcaecati! Reiciendis voluptates, ipsam quas
            hic
          </p>
        </v-col>
        <v-col class="col-md-6">
          <v-img src="../assets/svg/profile-users.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-container>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "ProductsView",
  components: { Navbar, Footer },

  data() {
    return {};
  },
  methods: {},
};
</script>
