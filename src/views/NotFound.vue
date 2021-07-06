<template>
  <div class="home">
    <Navbar
      :user="user"
      :remove="true"
      :openMenu="false"
      :menu="false"
      :check="false"
    />
    <div class="container mx-auto pt-20 xl:px-0 px-4">
      <div class="login mt-16">
        <div class="flex flex-col xl:flex-row">
          <div class="w-full text-center h-full xl:pr-10 pr-0  mt-8">
            <div class="text-white">
              <h2 class="text-2xl xl:text-4xl font-semibold">
                Страница не найдено
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="fixed w-full bottom-0" />
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
import Message from "../components/app/Message.vue";

export default {
  name: "Home",
  data: () => ({
    user: {}
  }),
  async mounted() {
    this.user = await this.$store.dispatch("getInfo");
    console.log(this.user);
  },
  components: {
    Navbar,
    Footer,
    Message
  }
};
</script>
<style scoped>
.home {
  background: rgba(0, 0, 0, 0.4);
  background-image: url(../assets/img/image.png);
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 700px;
}
</style>
