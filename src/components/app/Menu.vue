<template>
  <transition name="fade" :css="animated">
    <div
      class="xl:w-1/4 w-full fixed xl:relative z-40 back h-screen pt-20"
      v-if="menu"
    >
      <div class="border-t menu-color mx-8"></div>
      <li
        :class="navBarColor === 'Profile' ? 'menu-color-on' : 'menu-color'"
        class="flex pl-6 pt-8 menu-color"
      >
        <router-link @click.native="openMenu" to="/profile" tag="a">
          <span class="flex flex-row">
            <i class="fas fa-user text-xl pr-2"></i>
            <h5 class="text-xl">Профиль</h5>
          </span>
        </router-link>
      </li>
      <li
        :class="navBarColor === 'AllUsers' ? 'menu-color-on' : 'menu-color'"
        class="flex menu-color pl-6 pt-8"
      >
        <router-link :class="{ color: navBarColor }" to="/allusers">
          <span @click.native="openMenu" id="menu" class="flex flex-row">
            <i class="fas fa-search text-xl pr-2"></i>
            <h5 class="text-xl">Поиск</h5>
          </span>
        </router-link>
      </li>
      <li
        :class="navBarColor === 'Settings' ? 'menu-color-on' : 'menu-color'"
        class="flex menu-color pl-6 pt-8"
      >
        <router-link to="/settings" href="#">
          <span @click="changeValue()" class="flex flex-row">
            <i class="fas fa-cog text-xl pr-2"></i>
            <h5 class="text-xl">Настройки</h5>
          </span>
        </router-link>
      </li>
      <li class="flex menu-color pl-6 pt-8">
        <router-link to="/" tag="a">
          <span
            @click="changeValue()"
            @click.prevent="logout"
            class="flex flex-row"
          >
            <i class="fas fa-sign-out-alt text-xl pr-2"></i>
            <h5 class="text-xl">Выход</h5>
          </span>
        </router-link>
      </li>
    </div>
  </transition>
</template>

<script>
export default {
  name: "menubar",
  props: {
    menu: {
      type: Boolean
    },
    openMenu: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    isOpen: this.openMenu
  }),
  methods: {
    changeValue() {
      this.$emit("open-menu", this.isOpen);
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.go();
    }
  },
  computed: {
    navBarColor() {
      return this.$route.meta.navBarColor;
    }
  }
};
</script>

<style scoped>
.back {
  background: #10111a;
  min-height: 700px;
}
.menu-color {
  color: #a2a2a7;
}
.menu-color-on {
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: none;
}

.fade-enter,
.fade-leave-to {
  opacity: none;
}
@media screen and (min-width: 310px) and (max-width: 640px) {
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
