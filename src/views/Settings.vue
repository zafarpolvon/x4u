<template>
  <div class="profile h-screen">
    <Navbar
      :user="updated"
      :remove="true"
      :openMenu="openMenu"
      :menu="menu"
      @open-menu="openMenu"
      :check="true"
    />

    <div class="flex flex-row xl:pb-0 pb-24">
      <Menu @open-menu="openMenu" :menu="menu" :openMenu="openMenu" />

      <form @submit.prevent="submitHandler" class="w-full">
        <li class="flex flex-wrap mt-24">
          <div class="px-8 xl:w-1/3 w-full">
            <label class="text-profile">Фамилия</label>
            <input
              disabled
              v-model="lastname"
              class="input-profile"
              type="text"
            />
          </div>
          <div class="px-8 xl:w-1/3 w-full mt-4 xl:mt-0">
            <label class="text-profile">Имя</label>
            <input disabled v-model="name" class="input-profile" type="text" />
          </div>
          <div class="px-8 xl:w-1/3 w-full mt-4 xl:mt-0">
            <label class="text-profile">Отчество</label>
            <input
              disabled
              v-model="patronymic"
              class="input-profile"
              type="text"
            />
          </div>
        </li>
        <li class="flex flex-wrap mt-5">
          <div class="px-8 xl:w-1/3 w-full mt-4 xl:mt-0">
            <label class="text-profile">Серия паспорта</label>
            <input
              v-model="passport_series"
              class="input-profile"
              type="text"
              disabled
            />
          </div>
          <div class="px-8 xl:w-1/3 w-full mt-4 xl:mt-0">
            <label class="text-profile">Дата рождения</label>
            <input
              disabled
              v-model="date_of_birth"
              class="input-profile"
              type="date"
            />
          </div>
          <div class="px-8 xl:w-1/3 w-full mt-4 xl:mt-0">
            <label class="text-profile">Дата регистрации</label>
            <input
              disabled
              v-model="created_at"
              class="input-profile"
              type="date"
            />
          </div>
        </li>
        <li class="flex flex-wrap mt-5">
          <div class="px-8 w-full mt-4 xl:mt-0">
            <label class="text-profile">Место прописки</label>
            <input
              disabled
              v-model="address"
              class="input-profile"
              type="text"
            />
          </div>
        </li>
        <li class="flex flex-wrap mt-5">
          <div class="px-8 xl:w-1/3 w-full mt-4 xl:mt-0">
            <label class="text-profile">ID</label>
            <input disabled v-model="id" class="input-profile" type="text" />
          </div>
          <div class="px-8 xl:w-1/3 w-full mt-4 xl:mt-0">
            <label class="text-profile">Электронная почта</label>
            <input disabled v-model="email" class="input-profile" type="text" />
          </div>
          <!-- <a href="#" class="px-8 xl:w-1/3 w-full mt-4 xl:mt-0">
            <button
              type="submit"
              class="button-profile text-center bg-green-500 text-white w-full mt-8"
            >
              <p>Сохранить</p>
            </button>
          </a> -->
        </li>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar.vue";
import Menu from "../components/app/Menu.vue";
import Input from "../components/app/Input.vue";

export default {
  name: "Home",
  props: ["menu", "openMenu"],

  data: () => ({
    menu: true,
    name: "",
    address: "",
    created_at: "",
    date_of_birth: "",
    email_verified_at: "",
    id: null,
    lastname: "",
    passport_series: "",
    patronymic: "",
    phone: "",
    tarif: null,
    email: "",
    width: null
  }),
  async mounted() {
    if (this.width > 400) {
      this.menu = true;
    } else {
      this.menu = false;
    }
    this.user = await this.$store.dispatch("getInfo");

    this.address = this.updated.address;
    this.name = this.updated.name;
    this.email = this.updated.email;
    this.created_at = this.updated.created_at;
    this.date_of_birth = this.updated.date_of_birth;
    this.id = this.updated.id;
    this.lastname = this.updated.lastname;
    this.passport_series = this.updated.passport_series;
    this.patronymic = this.updated.patronymic;
    this.phone = this.updated.phone;
    this.tarif = this.updated.address;
  },
  computed: {
    updated() {
      return this.$store.getters.USER;
    }
  },
  methods: {
    openMenu() {
      this.menu = !this.menu;
    },
    submitHandler() {
      const info = {
        lastname: this.name.value,
        name: this.name,
        patronymic: this.patronymic,
        pasport_series: this.passport_series,
        date_of_birth: this.date_of_birth,
        created_at: this.created_at,
        address: this.address,
        id: this.id,
        email: this.email
      };
      console.log(info);
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
    Input
  }
};
</script>
<style scoped>
.button-profile {
  height: 50px;
  background: #212728;
  border-radius: 5px;
}
.input-profile {
  width: 100%;
  height: 50px;
  border: 1.5px solid #2e2e2e;
  box-sizing: border-box;
  margin-top: 5px;
  font-weight: 500;
  font-size: 25px;
  padding: 0 10px;
}
.text-profile {
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #a2a2a7;
}
</style>
