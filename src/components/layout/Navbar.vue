<template>
  <nav
    class="z-50 navbar select-none lg:flex lg:items-stretch w-full bg-gray-600 px-0 fixed shadow-lg flex justify-between"
  >
    <div class="flex flex-no-shrink items-stretch">
      <router-link
        to="/"
        tag="a"
        class="flex-no-grow flex-no-shrink relative py-4 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark"
        ><img class="h-14" src="../../assets/img/logo.png" alt=""
      /></router-link>
      <div id="user" v-if="remove && check">
        <button
          v-if="!menu"
          @click="changeValue()"
          class="absolute top-0 z-50 xl:left-0 xl:ml-32 xl:mt-4 mt-4 right-0 mr-20 p-2"
        >
          <i class="fas fa-bars text-3xl text-gray-700"></i>
        </button>
        <button
          v-else
          @click="changeValue()"
          class="absolute top-0 z-50 xl:left-0 xl:ml-64 xl:mt-4 mt-4 right-0 mr-20 p-2"
        >
          <i class="fas fa-bars text-3xl text-gray-700"></i>
        </button>
        <div
          id="user"
          v-if="menu"
          class="absolute  top-0 z-50 left-0 ml-28 mt-6 text-white xl:block hidden"
        >
          <h4 class="text-lg font-semibold">Кабинет</h4>
        </div>
      </div>
    </div>
    <div
      class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow xl:block"
    >
      <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
        <router-link
          v-if="!user.name && remove"
          to="/login"
          tag="a"
          class="flex-no-grow flex-no-shrink relative py-4 px-4 leading-normal text-white text-xl no-underline flex items-center hover:bg-grey-dark"
          ><img
            class="h-14 w-14 mr-0 xl:mr-2 bg-center"
            src="../../assets/img/Vector.png"
            alt=""
          /><span class="hidden xl:block">Войти</span></router-link
        >
        <router-link
          v-if="user.name && remove"
          to="/profile"
          tag="a"
          class="flex-no-grow flex-no-shrink relative py-4 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
        >
          <img
            class="h-14 w-14 mr-0 xl:mr-2 rounded-full bg-gray-500 object-cover"
            :src="user.src"
            alt=""
          />
          <div class="hidden xl:block">
            <h5 class="text-xl">{{ user.name }}</h5>
            <p class="text-lg">#{{ user.id }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  props: ["openMenu", "menu", "remove", "user", "check"],
  data: () => ({
    isOpen: this.menu
  }),
  methods: {
    changeValue() {
      this.isOpen = !this.isOpen;
      this.$emit("open-menu", this.isOpen);
    }
  }
};
</script>
<style scoped>
.navbar {
  background: #10111a;
}
</style>
