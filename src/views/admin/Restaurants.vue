<template>
  <div>
    <AdminNavbar />

    <v-container class="mt-4">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div>
          <span style="font-weight: 700; font-size: 24px; margin-left: 12px"
            >Restaurants</span
          >
        </div>
        <div class="mb-4">
          <v-btn color="primary" @click="showAddRestaurantDialog()">
            Add restaurant
          </v-btn>
        </div>
      </div>

      <v-row class="pa-4" v-if="restaurants.length < 1">
        <v-col class="col-md-6 my-auto">
          <p class="text-center text-h4" id="category-list">Restaurants</p>
          <p id="category-item1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            assumenda molestiae ipsum. Omnis, voluptatum odit. Harum aspernatur
            ad, voluptatibus earum consectetur veniam deleniti aliquam veritatis
            rem quod itaque vero obcaecati! Reiciendis voluptates, ipsam quas
            hic
          </p>
        </v-col>
        <v-col class="col-md-6" id="category-item2">
          <v-img src="../../assets/svg/date.svg"></v-img>
        </v-col>
      </v-row>
      <v-dialog
        v-model="showRestaurantDialog"
        persistent
        max-width="600px"
        scrollable
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Restaurant</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container>
              <v-form
                ref="restaurantFormRef"
                v-model="restaurantFormValid"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Merchant Name"
                      name="merchantName"
                      :rules="nameRules"
                      v-model="merchant.name"
                      type="text"
                      color="primary"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Merchant Email"
                      name="merchantEmail"
                      :rules="emailRules"
                      v-model="merchant.email"
                      type="text"
                      color="primary"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="merchant.password"
                      :rules="passwordRules"
                      label="Merchant Password"
                      name="merchantPassword"
                      prepend-icon=""
                      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      :type="passwordShow ? 'text' : 'password'"
                      color="primary"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Merchant Contact"
                      name="merchantContact"
                      :rules="phoneNumberRules"
                      v-model="merchant.contact"
                      type="text"
                      color="primary"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Merchant Location"
                      name="merchantLocation"
                      :rules="nameRules"
                      v-model="merchant.location"
                      type="text"
                      color="primary"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-col cols="12" class="pl-0">
                      <!-- <v-file-input
                        :rules="imgRules"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-inner-icon="mdi-camera"
                        label="Merchant Logo"
                        dense
                        color=""
                        prepend-icon=""
                        v-model="merchant.image"
                        @change="getImageUrl"
                      >
                      </v-file-input> -->
                      <v-file-input
                        multiple
                        accept="image/*"
                        show-size
                        ref="mediaAssetRef"
                        v-model="merchant.image"
                        label="Media Uploads"
                        @change="onAddFiles"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12" v-if="merchant.imageUrl">
                      <v-img
                        name="i"
                        :src="merchant.imageUrl"
                        width="130"
                        height="130"
                      ></v-img>
                    </v-col>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="showRestaurantDialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              v-if="!editRestaurantChecker"
              text
              @click="addToRestaurants()"
            >
              Save
            </v-btn>
            <v-btn
              color="blue darken-1"
              v-if="editRestaurantChecker"
              text
              @click="updateRestaurant()"
            >
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-row>
        <v-col
          v-for="(restaurant, index) in restaurants"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <RestaurantCard
            :restaurant="restaurant"
            @triggerGetRestaurant="getRestaurant"
            @triggerShowRestaurantDialog="setRestaurantDialog"
            @triggerEditRestaurantChecker="setEditToMode"
            @triggerDeleteRestaurant="deleteRestaurant"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-overlay :value="uploadOverlay">
      <v-progress-circular indeterminate size="100"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import AdminNavbar from "../../components/admin/AdminNavbar.vue";
import RestaurantCard from "../../components/admin/RestaurantCard.vue";

export default {
  name: "RestaurantsPage",
  components: { AdminNavbar, RestaurantCard },

  data() {
    return {
      showRestaurantDialog: false,
      addRestaurantDialog: false,
      editRestaurantChecker: false,
      merchant: {
        name: "",
        email: "",
        password: "",
        contact: "",
        image: [],
        location: "",
        imageUrl: "",
      },

      fileUrl: "",
      files: [],
      uploadOverlay: false,

      passwordShow: false,
      restaurantFormValid: true,
      nameRules: [(value) => !!value || "name is required"],
      emailRules: [
        (value) => !!value || "E-mail is required",
        (value) => /.+@.+\..+/.test(value) || "E-mail must be valid",
      ],
      passwordRules: [
        (value) => !!value || "Password is required",
        // (value) => value > 5 || "Password must be valid",
      ],
      phoneNumberRules: [
        (v) =>
          /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
            v
          ) || "Enter a valid phone number",
      ],
      imgRules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
        (v) => !!v || "This field is required",
      ],
    };
  },
  methods: {
    showAddRestaurantDialog() {
      this.showRestaurantDialog = true;
      // this.$refs.restaurantFormRef.reset();
      this.$nextTick(() => {
        this.$refs.restaurantFormRef.reset();
      });
      this.editRestaurantChecker = false;
    },
    setRestaurantDialog() {
      this.showRestaurantDialog = true;
      this.setEditToMode();
    },

    addToRestaurants() {
      if (!this.$refs.restaurantFormRef.validate()) return;
      this.$store.dispatch("addToRestaurants", this.merchant);
      this.showRestaurantDialog = false;
      this.$nextTick(() => {
        this.$refs.restaurantFormRef.reset();
      });
      // this.$refs.restaurantFormRef.reset();
      this.merchant = { ...this.restaurant };
      // this.getRestaurant(this.merchant.email);
    },

    updateRestaurant() {
      if (!this.$refs.restaurantFormRef.validate()) return;
      this.$store.dispatch("updateRestaurant", this.merchant);
      this.showRestaurantDialog = false;
    },

    deleteRestaurant() {
      this.$store.dispatch("deleteRestaurant", this.merchant);
      // this.showRestaurantDialog = false;
    },

    getImageUrl() {
      if (this.merchant.image) {
        this.merchant.imageUrl = URL.createObjectURL(this.merchant.image);
      } else {
        this.merchant.imageUrl =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
      }
    },

    getRestaurant(id) {
      this.$store.dispatch("getRestaurant", id);
      this.merchant = { ...this.restaurant };
    },

    setEditToMode() {
      this.editRestaurantChecker = true;
    },

    resetRestaurantData() {
      this.merchant.name = "";
      this.merchant.email = "";
      this.merchant.password = "";
      this.merchant.contact = "";
      this.merchant.image = [];
      this.merchant.location = "";
      this.merchant.imageUrl = "";
    },

    // Get image and upload to cloudinary method
    onAddFiles(files) {
      this.files = files;
      console.log(this.files, "1");
      this.uploadOverlay = true;
      if (this.files.length > 0) {
        console.log(this.files, "2");

        this.files.forEach((file) => {
          this.uploadFileToCloudinary(file)
            .then((data) => {
              this.fileUrl = data.url;
              this.merchant.imageUrl = data.url;

              this.uploadOverlay = false;
            })
            .catch(() => {
              this.uploadOverlay = false;
            });
        });
      }
      // this.uploadOverlay = false;
    },

    // Upload functionality method
    uploadFileToCloudinary(file) {
      return new Promise(function (resolve, reject) {
        //Ideally these to lines would be in a .env file
        const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${process.env.VUE_APP_CLOUD_NAME}/upload`;
        const CLOUDINARY_UPLOAD_PRESET =
          process.env.VUE_APP_CLOUD_UPLOAD_PRESET;

        let formData = new FormData();
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("folder", "social-media");
        formData.append("file", file);

        let request = new XMLHttpRequest();
        request.open("POST", CLOUDINARY_URL, true);
        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        request.onreadystatechange = () => {
          // File uploaded successfully
          if (request.readyState === 4 && request.status === 200) {
            let response = JSON.parse(request.responseText);
            resolve(response);
          }

          // Not succesfull, let find our what happened
          if (request.status !== 200) {
            let response = JSON.parse(request.responseText);
            let error = response.error.message;
            alert("error, status code not 200 " + error);
            reject(error);
          }
        };

        request.onerror = (err) => {
          alert("error: " + err);
          reject(err);
        };

        request.send(formData);
      });
    },
  },
  computed: {
    restaurants() {
      return this.$store.state.restaurants;
    },
    restaurant() {
      return this.$store.state.restaurant;
    },
  },
  mounted() {},
};
</script>
