<template>
  <div class="profile h-full">
    <Navbar
      :user="updated"
      :remove="true"
      :openMenu="openMenu"
      :menu="menu"
      @open-menu="openMenu"
      :check="true"
    />
    <div class="flex flex-row">
      <Menu @open-menu="openMenu" :menu="menu" :openMenu="openMenu" />
      <div class="overflow-auto allusers xl:h-screen h-full w-full ">
        <div class="relative text-gray-600 mt-24 flex justify-center">
          <button type="submit" class="absolute search-button top-0 mt-3 ml-6">
            <i class="fas fa-search text-lg text-white"></i>
          </button>
          <input
            type="search"
            name="serch"
            placeholder="Поиск"
            class="bg-white h-14 px-12 pr-6 text-lg focus:outline-none border-2 search-input"
            v-model="search"
          />
        </div>
        <div
          class="my-6  flex xl:flex-row flex-col w-full"
          :key="person.id"
          v-for="person in filteredBlogs"
        >
          <user-info :parents="false" v-if="search.length > 0" :user="person" />
          <div class="w-full ">
            <radial-bar
              v-if="search.length > 0"
              :diameter="280"
              :completed-steps="person.id"
              :total-steps="totalSteps"
              :startColor="person.tarif ? '#454550' : '#f2c94c'"
              :stopColor="person.tarif ? '#454550' : '#f2c94c'"
              :innerStrokeColor="'#CFD8DC'"
              :innerStrokeWidth="30"
              :strokeWidth="30"
              class="mx-auto"
            >
              <p class="text-2xl font-semibold">{{ person.id }}</p>
              <p class="text-2xl font-semibold" v-if="person.tarif">Premium</p>
              <p class="text-2xl font-semibold" v-else>Vip</p>
            </radial-bar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar.vue";
import Menu from "../components/app/Menu.vue";
import Input from "../components/app/Input.vue";
import UserInfo from "../components/app/UserInfo.vue";
import RadialBar from "../components/app/RadialBar.vue";

export default {
  name: "Home",
  props: ["menu", "openMenu"],
  data: () => ({
    menu: true,
    persons: [],
    search: "",
    completedSteps: 999999,
    totalSteps: 50,
    width: null,
    user: {}
  }),
  // Number(num.id).includes(this.search)
  computed: {
    updated() {
      return this.$store.getters.USER;
    },
    filteredBlogs: function() {
      let str = this.search.toUpperCase();
      if (
        this.search.substr(0, 2).constructor === String &&
        this.search.length > 6
      ) {
        return this.persons.filter(num => String(num.parent).includes(str));
      } else {
        return this.persons.filter(num => String(num.id).includes(this.search));
      }
    }
  },
  async mounted() {
    if (this.width > 400) {
      this.menu = true;
    } else {
      this.menu = false;
    }
    this.persons = await this.$store.dispatch("loadData");
    this.user = await this.$store.dispatch("getInfo");
  },
  methods: {
    openMenu() {
      this.menu = !this.menu;
    },
    updateWidth() {
      this.width = window.innerWidth;
    }
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },

  components: {
    Navbar,
    Menu,
    Input,
    UserInfo,
    RadialBar
  }
};
</script>
<style scoped>
.profile {
  min-height: 700px;
}
.button-profile {
  height: 50px;
  background: #212728;
  border-radius: 5px;
}
.allusers {
  border-radius: 4px;
  padding: 5px 20px;
}
.search-input {
  width: 500px;
  background: #161624;
  border-radius: 34.2px;
  color: #fff;
}
.search-button {
  margin-right: 475px;
}
</style>
