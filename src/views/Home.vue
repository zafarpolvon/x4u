<template>
  <div class="home">
    <Navbar
      :user="updated"
      :remove="true"
      :openMenu="false"
      :menu="updated"
      :check="false"
    />
    <div class="container mx-auto pt-16 xl:px-0 px-4">
      <div class="login mt-10">
        <div class="flex flex-col xl:flex-row">
          <div
            class="xl:w-3/5 w-full text-center xl:px-10  px-5 xl:mt-16 mt-8 mb-10"
          >
            <VueSlickCarousel :arrows="true" :dots="false" :autoplay="true">
              <div class="text-white mt-4 xl:mt-12">
                <h2 class="text-2xl xl:text-4xl font-semibold">
                  Расширьте свои возможности
                </h2>
                <p class="text-lg xl:text-3xl">
                  Приобретайте знания у проверенных спецов и ученых
                </p>
              </div>
              <div class="text-white mt-4 xl:mt-12">
                <h2 class="text-2xl xl:text-4xl font-semibold">
                  Продвигай свою карьеру уже сегодня
                </h2>
                <p class="text-lg xl:text-3xl">
                  Изучай основные бизнес-курсы с реальными кейсами
                </p>
              </div>
            </VueSlickCarousel>
          </div>
          <div class="xl:w-2/5 w-full mb-12 xl:px-5 px-0 mt-10 xl:mt-0">
            <Message />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
import Message from "../components/app/Message.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Home",
  data: () => ({
    user: {}
  }),
  computed: {
    updated() {
      return this.$store.getters.USER;
    }
  },
  components: {
    Navbar,
    Footer,
    Message,
    VueSlickCarousel
  }
};
</script>
<style scoped>
.home {
  background: rgba(0, 0, 0, 0.4);
  background-image: url("http://x4upoddomen.itmaker.uz/public/uploads/1625575233.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
