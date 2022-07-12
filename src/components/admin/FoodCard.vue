<template>
  <v-container>
    <v-card class="card__border" @click="goToFoodsPages()">
      <v-card-title class="pa-1 pb-0">
        <v-spacer></v-spacer>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              dense
              v-for="item in actionList"
              :key="item.icon"
              @click="() => {}"
            >
              <v-list-item-title dense class="caption"
                ><v-icon>{{ item.icon }}</v-icon
                ><span class="mx-1"></span>{{ item.text }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-col>
        <v-img
          class="img_border"
          :lazy-src="imageUrl"
          :src="imageUrl"
          height="230px"
        >
        </v-img>
      </v-col>
      <v-col class="text-start py-0 my-0">
        <v-chip small class="px-5 projectPrimary--text" color="#272dc066"
          >hb</v-chip
        >
      </v-col>
      <v-col class="text-start pl-4 pb-1">
        <span class="car-name" @click="goToFoodsPages()"> {{ food.name }}</span>
      </v-col>
      <v-col class="text-start pl-4 pt-0 pb-1 projectColor--text">
        <span> GHS 44</span>
        <span class="black--text pl-1">|</span>
        <span> GHS 123 </span>
        <span>
          <v-divider
            class="black--text"
            color="blue"
            inset
            vertical
          ></v-divider>
        </span>
        <span class="car_detail_font black--text">per month</span>
      </v-col>
      <v-col class="py-0"><v-divider></v-divider></v-col>
      <v-container class="py-0">
        <v-row>
          <v-col>
            <v-icon small>mdi-merge</v-icon>
            <span class="car_detail_font">km</span>
          </v-col>
          <v-col class="px-xs-0">
            <v-icon small>mdi-car-shift-pattern</v-icon>
            <span class="car_detail_font">kj</span>
          </v-col>
          <v-col class="px-0">
            <v-icon small>mdi-gas-station</v-icon>
            <span class="car_detail_font">jhj</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["food", "imageUrl"],
  components: {},

  data() {
    return {
      dialog: false,
      actionList: [
        {
          icon: "mdi-pencil",
          text: "Edit",
        },
        {
          icon: "mdi-delete",
          text: "Delete",
        },
      ],
    };
  },
  methods: {
    goToFoodsPages() {
      this.$router.push("/admin/foods");
    },
  },
  mounted() {},
  computed: {
    attRow() {
      // Use in computed property
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "4";
        case "sm":
          return "4";
        case "md":
          return "6";
        case "lg":
          return "6";
        case "xl":
          return "4";
      }
      return "6";
    },
  },
};
</script>

<style scoped>
.img_border {
  border-radius: 8px;
}
.card__border {
  border-radius: 10px;
}

.loan_btn {
  border: 1px solid #0633a1;
  padding: 2px 8px;
  color: #0633a1;
  border-radius: 4px;
  font-size: 15px;
}

.car_detail_font {
  font-size: 12.7px;
}

.finance_btn {
  border: 1px solid #0633a1;
  padding: 2px 10px 2px 10px;
  color: white;
  border-radius: 5px;
  background-color: #272dc0;
}

.loan_btn:hover {
  background-color: rgb(246, 246, 246);
}

.finance_btn:hover {
  background-color: rgb(54, 9, 252);
}

.img-card {
  position: relative;
}

.heart-icon {
  position: absolute;
  top: 0;
  right: 5px;
}

.pic-icon {
  position: absolute;
  bottom: 0;
  right: 15px;
}

.card-text-item {
  position: absolute;
  bottom: 0;
  right: 5px;
}

.car-name {
  text-decoration: none;
  color: #000;
}

.car-name:hover {
  cursor: pointer;
  color: #0633a1;
}
</style>
