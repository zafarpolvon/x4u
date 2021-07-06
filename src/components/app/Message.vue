<template>
  <form @submit.prevent="submitHandler" class="xl:py-10 py-5 px-6 form">
    <h3 class="text-center text-white text-2xl">
      Добро пожадовать в X4U
    </h3>
    <div class="flex -mx-3 xl:mt-8 mt-4">
      <div class="w-full px-3 my-4">
        <div class="flex">
          <div
            class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
          >
            <svg
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.74677 11.2485C11.304 11.2485 13.3772 8.73047 13.3772 5.62429C13.3772 2.51804 12.6965 0 8.74677 0C4.79701 0 4.11621 2.51804 4.11621 5.62429C4.11621 8.73047 6.18943 11.2485 8.74677 11.2485Z"
                fill="white"
              />
              <path
                d="M0.000910564 19.8361C0.000121992 19.6467 -0.000666579 19.7827 0.000910564 19.8361V19.8361Z"
                fill="white"
              />
              <path
                d="M17.4922 19.9839C17.4947 19.9321 17.493 19.6242 17.4922 19.9839V19.9839Z"
                fill="white"
              />
              <path
                d="M17.4828 19.6088C17.397 14.1978 16.6903 12.6559 11.2825 11.6799C11.2825 11.6799 10.5212 12.6499 8.74696 12.6499C6.97267 12.6499 6.2113 11.6799 6.2113 11.6799C0.86249 12.6453 0.112822 14.1643 0.0142508 19.433C0.00616797 19.8633 0.00242228 19.8859 0.000976562 19.8359C0.00130513 19.9295 0.00169927 20.1026 0.00169927 20.4044C0.00169927 20.4044 1.28917 22.9999 8.74696 22.9999C16.2046 22.9999 17.4922 20.4044 17.4922 20.4044C17.4922 20.2105 17.4923 20.0757 17.4925 19.9839C17.4911 20.0148 17.4882 19.9549 17.4828 19.6088Z"
                fill="white"
              />
            </svg>
          </div>
          <input
            type="text"
            class="w-full -ml-10 pl-10 pr-3 py-2 form-input outline-none"
            placeholder="Имя"
            v-model="name"
            :class="
              $v.name.$dirty && !$v.name.required
                ? 'error-boarder'
                : 'form-input'
            "
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-4">
        <div class="flex ">
          <div
            class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
          >
            <svg
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.74677 11.2485C11.304 11.2485 13.3772 8.73047 13.3772 5.62429C13.3772 2.51804 12.6965 0 8.74677 0C4.79701 0 4.11621 2.51804 4.11621 5.62429C4.11621 8.73047 6.18943 11.2485 8.74677 11.2485Z"
                fill="white"
              />
              <path
                d="M0.000910564 19.8361C0.000121992 19.6467 -0.000666579 19.7827 0.000910564 19.8361V19.8361Z"
                fill="white"
              />
              <path
                d="M17.4922 19.9839C17.4947 19.9321 17.493 19.6242 17.4922 19.9839V19.9839Z"
                fill="white"
              />
              <path
                d="M17.4828 19.6088C17.397 14.1978 16.6903 12.6559 11.2825 11.6799C11.2825 11.6799 10.5212 12.6499 8.74696 12.6499C6.97267 12.6499 6.2113 11.6799 6.2113 11.6799C0.86249 12.6453 0.112822 14.1643 0.0142508 19.433C0.00616797 19.8633 0.00242228 19.8859 0.000976562 19.8359C0.00130513 19.9295 0.00169927 20.1026 0.00169927 20.4044C0.00169927 20.4044 1.28917 22.9999 8.74696 22.9999C16.2046 22.9999 17.4922 20.4044 17.4922 20.4044C17.4922 20.2105 17.4923 20.0757 17.4925 19.9839C17.4911 20.0148 17.4882 19.9549 17.4828 19.6088Z"
                fill="white"
              />
            </svg>
          </div>
          <input
            type="email"
            class="w-full form-input -ml-10 pl-10 pr-3 py-2 border-2 border-gray-200 outline-none"
            placeholder="Логин / Адрес электронной почты"
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
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-4">
        <div class="flex">
          <div
            class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8171 16.008C18.4277 14.8196 17.0176 14.0998 15.6453 15.2864L14.8258 16.0035C14.2262 16.5241 13.1115 18.9565 8.80137 13.9984C4.49218 9.04653 7.05651 8.27552 7.65698 7.75942L8.48094 7.04137C9.84613 5.85211 9.33093 4.35497 8.3463 2.81386L7.75212 1.8804C6.76301 0.342877 5.68593 -0.666879 4.31715 0.520594L3.57756 1.16684C2.97261 1.60754 1.2816 3.04005 0.871415 5.76145C0.377756 9.02678 1.93502 12.766 5.50283 16.8688C9.06615 20.9733 12.555 23.035 15.8598 22.9991C18.6063 22.9695 20.265 21.4957 20.7838 20.9599L21.5261 20.3127C22.8913 19.1261 22.0431 17.918 20.6528 16.727L19.8171 16.008Z"
                fill="white"
              />
            </svg>
          </div>
          <input
            type="text"
            class="w-full -ml-10 pl-10 form-input pr-3 py-2 border-2 border-gray-200 outline-none"
            placeholder="Номер телефона"
            v-model="number"
            :class="{
              'error-boarder':
                ($v.number.$dirty && !$v.number.required) ||
                ($v.number.$dirty && !$v.number.numeric)
            }"
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 xl:mb-8 mb-4">
        <div class="flex">
          <div class="w-10 z-10 pl-3 pt-3 text-center pointer-events-none">
            <svg
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.980097 2.27459C4.13676 4.94793 9.67571 9.65116 11.3037 11.1176C11.5222 11.3156 11.7566 11.4162 12 11.4162C12.2428 11.4162 12.4768 11.3165 12.6949 11.1195C14.3242 9.65161 19.8632 4.94793 23.0199 2.27459C23.2164 2.10846 23.2464 1.81647 23.0873 1.61338C22.7195 1.14408 22.171 0.875 21.5833 0.875H2.41665C1.82894 0.875 1.28049 1.14408 0.912714 1.61343C0.7536 1.81647 0.783563 2.10846 0.980097 2.27459Z"
                fill="white"
              />
              <path
                d="M23.2221 3.72332C23.0522 3.64426 22.8524 3.67184 22.7111 3.79259C19.2104 6.76022 14.7426 10.5641 13.3369 11.8308C12.5479 12.543 11.4529 12.543 10.6621 11.8298C9.16381 10.4798 4.14658 6.2146 1.28892 3.79255C1.14665 3.6718 0.946389 3.64516 0.777932 3.72328C0.608576 3.80194 0.5 3.97134 0.5 4.15803V16.2083C0.5 17.2654 1.35958 18.125 2.41668 18.125H21.5834C22.6404 18.125 23.5 17.2654 23.5 16.2083V4.15803C23.5 3.97134 23.3914 3.80149 23.2221 3.72332Z"
                fill="white"
              />
            </svg>
          </div>
          <textarea
            rows="2"
            cols="10"
            class="w-full -ml-10 pl-10 form-input pr-3 py-2 border-2 border-gray-200 outline-none"
            placeholder="Отправить сообщение"
            v-model="message"
            :class="{
              'error-boarder': $v.message.$dirty && !$v.message.required
            }"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="flex -mx-3">
      <div class="w-full px-3 my-5">
        <button
          type="submit"
          class="block w-full form-send text-white px-3 py-3 font-semibold"
        >
          Отправить
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import { required, email, numeric } from "vuelidate/lib/validators";
export default {
  name: "Home",
  data: () => ({
    name: "",
    email: "",
    number: "",
    message: ""
  }),
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    number: {
      required,
      numeric
    },
    message: {
      required
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$router.push("Login");
    }
  }
};
</script>
<style scoped>
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
