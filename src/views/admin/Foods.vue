<template>
  <div>
    <AdminNavbar />

    <v-container class="mt-4">
      <div style="display: flex; justify-content: flex-end" class="mb-4">
        <v-btn color="primary" @click="showAddFoodDialog()"> Add Food </v-btn>
      </div>

      <v-row class="pa-4" v-if="foods.length < 1">
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
      <v-dialog v-model="addFoodDialog" persistent max-width="600px" scrollable>
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Food</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container>
              <v-form ref="foodForm" v-model="foodFormValid" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Food Name"
                      name="foodName"
                      :rules="nameRules"
                      v-model="food.name"
                      type="text"
                      color="primary"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="food.description"
                      name="foodDescription"
                      rows="2"
                      :rules="descriptionRules"
                      color="primary"
                      placeholder="Type your description here..."
                      filled
                      required
                    ></v-textarea>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Food Quantity"
                      name="foodQuantity"
                      :rules="quantityRules"
                      v-model="food.quantity"
                      type="number"
                      color="primary"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Food Price"
                      name="foodPrice"
                      :rules="priceRules"
                      v-model="food.price"
                      type="number"
                      color="primary"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="pl-0">
                    <v-file-input
                      :rules="imgRules"
                      accept="image/png, image/jpeg, image/bmp"
                      prepend-inner-icon="mdi-camera"
                      label="Food Image"
                      dense
                      color=""
                      prepend-icon=""
                      v-model="food.image"
                      @change="getImageUrl"
                    >
                    </v-file-input>
                  </v-col>
                  <v-col cols="12" v-if="imageUrl">
                    <v-img
                      name="i"
                      :src="imageUrl"
                      width="130"
                      height="130"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="addFoodDialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="addFood()"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-row>
        <v-col
          v-for="(food, index) in foods"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <FoodCard :food="food" :imageUrl="imageUrl" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AdminNavbar from "../../components/admin/AdminNavbar.vue";
import FoodCard from "../../components/admin/FoodCard.vue";
export default {
  name: "FoodsPage",
  components: { AdminNavbar, FoodCard },

  data() {
    return {
      addFoodDialog: false,
      foods: [],
      food: {
        name: "",
        description: "",
        image: [],
        quantity: null,
        price: null,
      },
      imageUrl: "",
      foodFormValid: true,
      nameRules: [(value) => !!value || "name is required"],
      priceRules: [(value) => !!value || "price is required"],
      quantityRules: [(value) => !!value || "quantity is required"],
      imgRules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
        (v) => !!v || "This field is required",
      ],
      descriptionRules: [(value) => !!value || "Description is required"],
    };
  },
  methods: {
    showAddFoodDialog() {
      this.addFoodDialog = true;
    },

    addFood() {
      if (!this.$refs.foodForm.validate()) return;
      this.foods.push({ ...this.food, imageUrl: this.imageUrl });
      this.addFoodDialog = false;
      // this.$refs.foodForm.reset();
    },
    getImageUrl() {
      if (this.food.image) {
        this.imageUrl = URL.createObjectURL(this.food.image);
      } else {
        this.imageUrl =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
      }
    },
  },
  mounted() {},
};
</script>
