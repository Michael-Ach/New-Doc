<template>
  <div>
    <Navbar />
    <div><v-img src="../assets/loginPage.jpg" height="400"></v-img></div>
    <div class="text-center pt-8">
      <h1 class="">Explore our top deals</h1>
      <h1 class="">from out top rated dealers</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="n in 8" :key="n">
          <v-card :loading="loading" class="mx-auto my-3" max-width="344">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" src="../assets/svg/product.svg"></v-img>

            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

              <div>
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-5">
        <v-flex xs12 sm4>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Company info</div>
            </v-card-title>
            <v-card-text>
              We are not a company. We hate companies. Just imagine us like the
              guys from the Silicon Valley series.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Inspiring creativity</div>
            </v-card-title>
            <v-card-text>
              Are you a creative person? Do you like techy stuff? Complete the
              email form by writing your skills and interests
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",

  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      loading: false,
    };
  },
};
</script>
