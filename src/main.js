import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import VuexPersistence from "vuex-persist";

import "./assets/css/tailwind.css";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
