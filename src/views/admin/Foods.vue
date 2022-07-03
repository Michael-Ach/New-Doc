<template>
  <div>
    <AdminNavbar />

    <v-container class="mt-4">
      <div style="display: flex; justify-content: flex-end" class="mb-4">
        <v-btn color="primary" @click="showaddFoodDialog()"> Add Food </v-btn>
      </div>

      <v-row class="pa-4">
        <v-col class="col-md-6 my-auto">
          <p class="text-center text-h4" id="category-list">Foods</p>
          <p id="category-item1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            assumenda molestiae ipsum. Omnis, voluptatum odit. Harum aspernatur
            ad, voluptatibus earum consectetur veniam deleniti aliquam veritatis
            rem quod itaque vero obcaecati! Reiciendis voluptates, ipsam quas
            hic
          </p>
        </v-col>
        <v-col class="col-md-6" id="category-item2">
          <v-img src="../../assets/svg/food.svg"></v-img>
        </v-col>
      </v-row>
      <v-dialog v-model="addFoodDialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal first name*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="[
                      'Skiing',
                      'Ice hockey',
                      'Soccer',
                      'Basketball',
                      'Hockey',
                      'Reading',
                      'Writing',
                      'Coding',
                      'Basejump',
                    ]"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="addFoodDialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="addFoodDialog = false">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import AdminNavbar from "./AdminNavbar.vue";
export default {
  name: "FoodsPage",
  components: { AdminNavbar },

  data() {
    return {
      addFoodDialog: false,
    };
  },
  methods: {
    showaddFoodDialog() {
      this.addFoodDialog = true;
    },
  },
  mounted() {},
};
</script>
