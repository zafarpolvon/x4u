<template>
  <div id="app" class="h-full">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    menu: true
  }),
  methods: {}
};
</script>
<style>
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  src: local("Montserrat"), url("./assets/fonts/Montserrat.woff") format("woff");
}
#app {
  font-family: "Montserrat";
}
html {
  min-height: 700px;
}
</style>
