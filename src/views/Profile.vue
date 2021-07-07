<template>
  <div class="profile">
    <Navbar
      :user="updated"
      :remove="true"
      :openMenu="openMenu"
      :menu="menu"
      @open-menu="openMenu"
      :check="true"
    />

    <div class="flex xl:flex-row flex-col w-full">
      <Menu @open-menu="openMenu" :menu="menu" :openMenu="openMenu" />

      <div class="mt-28 flex xl:flex-row flex-col w-full px-4 xl:px-0">
        <user-info :user="updated" :parents="parents" />
        <div class="w-full mt-10 xl:mt-0">
          <radial-bar
            :diameter="280"
            :completed-steps="updated.id"
            :total-steps="totalSteps"
            :startColor="updated.tarif ? '#454550' : '#f2c94c'"
            :stopColor="updated.tarif ? '#454550' : '#f2c94c'"
            :innerStrokeColor="'#CFD8DC'"
            :innerStrokeWidth="30"
            :strokeWidth="30"
            class="mx-auto"
          >
            <p class="text-2xl font-semibold">{{ updated.id }}</p>
            <p
              class="text-2xl font-semibold"
              v-if="updated.tarif && !updated.parent"
            >
              Premium
            </p>
            <p class="text-2xl font-semibold" v-else>Vip</p>
          </radial-bar>
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
    updateCount: 0,
    totalSteps: 1000000,
    width: null,
    persons: [],
    user: {}
  }),
  async mounted() {
    this.user = await this.$store.dispatch("getInfo");
    this.persons = await this.$store.dispatch("loadData");
    if (this.width > 1200) {
      this.menu = true;
    } else {
      this.menu = false;
    }
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
  computed: {
    parents() {
      return this.persons.filter(num =>
        num.parent
          ? String(num.parent).includes(this.user.passport_series)
          : null
      );
    },
    updated() {
      return this.$store.getters.USER;
    }
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
.button-profile {
  height: 50px;
  background: #212728;
  border-radius: 5px;
}
</style>
