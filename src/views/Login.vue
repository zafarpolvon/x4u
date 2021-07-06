<template>
  <div class="back">
    <Navbar
      :user="false"
      :remove="true"
      :openMenu="false"
      :menu="false"
      :check="false"
    />
    <div class="h-screen flex px-4 xl:px-0">
      <form
        @submit.prevent="submitHandler"
        class=" m-auto xl:py-8 pt-8 form xl:w-1/3 w-full shadow-xl "
      >
        <h3 class="text-center text-white xl:text-2xl text-xl">
          Добро пожадовать в X4U
        </h3>
        <div
          class="flex xl:-mx-3 mx-0 mt-4 xl:mt-12 xl:12 w-full xl:px-12 px-4"
        >
          <div class="w-full px-3 my-4">
            <div class="flex">
              <div
                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
              >
                <i class="fas fa-user text-white"></i>
              </div>
              <input
                type="text"
                class="w-full -ml-10 pl-10 pr-3 py-2 form-input outline-none"
                placeholder="Логин"
                v-model="email"
                :class="{
                  'error-boarder':
                    ($v.email.$dirty && !$v.email.required) ||
                    ($v.email.$dirty && !$v.email.email)
                }"
              />
            </div>
          </div>
        </div>
        <div class="flex xl:-mx-3 mx-0 w-full xl:px-12 px-4">
          <div class="w-full px-3 mt-0">
            <div class="flex">
              <div
                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
              >
                <i class="fas fa-lock text-white"></i>
              </div>
              <input
                type="password"
                class="w-full form-input -ml-10 pl-10 pr-3 py-2 border-2 border-gray-200 outline-none"
                placeholder="Пароль"
                v-model="password"
                :class="{
                  'error-boarder': $v.password.$dirty && !$v.password.required
                }"
              />
            </div>
          </div>
        </div>
        <div class="lex xl:-mx-3 mx-0 w-full xl:px-12 px-4">
          <div class="w-full px-3 my-12">
            <button
              type="submit"
              class="block w-full form-send text-white px-3 py-3 font-semibold"
            >
              Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import Navbar from "../components/layout/Navbar.vue";
export default {
  name: "Home",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  computed: {
    updated() {
      return this.$store.getters.USER;
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const user = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("loginUser", user);

      setTimeout(() => {
        if (localStorage.getItem("id")) {
          this.$router.push("/Profile");
        }
      }, 3000);
    }
  },
  components: {
    Navbar
  }
};
</script>
<style scoped>
.back {
  background-image: url(../assets/img/image.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 700px;
}
.form {
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border: 2px solid rgba(255, 255, 255, 0.7);
  box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(42px);
  border-radius: 10px;

  min-height: 300px;
}
.form-input {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.7);
  box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
  border-radius: 10px;
}
.form-send {
  background: #212728;
  border-radius: 5px;
}
.error-boarder {
  border-color: rgb(196, 42, 42);
}
.error {
  border-color: red;
  background: #fdd;
}
</style>
