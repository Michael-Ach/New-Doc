<template>
  <div>
    <v-app-bar color="indigo lighten-1" dark fixed app>
      <v-toolbar-title @click="goToHome" class="logo">richCode</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down" style="margin-left: 50px">
        <v-btn text @click="goToHome">Home</v-btn>
        <v-btn text @click="goToProducts">Products</v-btn>
        <v-btn text @click="goToAbout">About</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-btn text outlined class="hidden-sm-and-down" @click="goToLoginPage()">
        Login</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" flat app temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(item, i) in navigationItems" :key="i">
            <v-list-item-icon>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="popUpDrawer(item)">
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-snackbar
      v-model="snackbar"
      timeout="4000"
      top
      center
      :color="upgradeValue ? 'green' : 'red'"
    >
      {{ snackBarText }}
      <template v-slot:action="{ attrs }">
        <v-btn
          fab
          v-bind="attrs"
          x-small
          color="grey"
          @click="snackbar = false"
        >
          <v-icon>mdi-close </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: "NavbarView",
  data() {
    return {
      drawer: false,
      group: null,
      selectedItem: 1,
      navigationItems: [
        { title: "login", icon: "login", text: "Login" },
        { title: "signUp", icon: "kodi", text: "Sign Up" },
        { title: "product", icon: "redhat", text: "Products" },
        { title: "about", icon: "poker-chip", text: "About" },
        { title: "about", icon: "cart", text: "Cart" },
      ],
      credentialDialog: false,
      tab: "tab-1",
      loginEmail: "",
      loginPassword: "",
      loginPasswordShow: false,
      signUpName: "",
      signUpEmail: "",
      signUpPassword: "",
      signUpPasswordShow: false,
      message: "",
      loadingBtn: false,
      loading: false,
      loginFormValid: true,
      signUpFormValid: true,
      snackBarText: "",
      snackbar: false,
      upgradeValue: null,
      nameRules: [(value) => !!value || "Name is required"],
      loginEmailRules: [
        (value) => !!value || "E-mail is required",
        (value) => /.+@.+\..+/.test(value) || "E-mail must be valid",
      ],
      signUpEmailRules: [
        (value) => !!value || "E-mail is required",
        (value) => /.+@.+\..+/.test(value) || "E-mail must be valid",
      ],
      loginPasswordRules: [
        (value) => !!value || "Password is required",
        // (value) => value < 5 || "Password must be valid",
      ],
      signUpPasswordRules: [
        (value) => !!value || "Password is required",
        // (value) => value > 5 || "Password must be valid",
      ],
      selectRules: [(v) => !!v || "Select a payment option"],
      messageRules: [(v) => !!v || "Message is required"],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    register() {},
    login() {},
    popUpDrawer(item) {
      if (item.text == "Login") {
        this.tab = "tab-1";
        this.credentialDialog = true;
      } else if (item.text == "Sign Up") {
        this.tab = "tab-2";
        this.credentialDialog = true;
      } else if (item.text == "Cart") {
        this.$store.commit("changeCart", true);
      } else if (item.text == "Products") {
        this.goToProducts();
      } else if (item.text == "About") {
        this.goToAbout();
      }
    },
    goToHome() {
      this.$router.push("/");
    },
    goToAbout() {
      this.$router.push("/about");
    },
    goToProducts() {
      this.$router.push("/products");
    },
    goToLoginPage() {
      this.$router.push("/login");
    },
  },

  components: {},

  mounted() {},
};
</script>

<style scoped>
.logo:hover {
  cursor: pointer;
}
</style>
