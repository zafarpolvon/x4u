<template>
  <div class="px-8 w-1/3">
    <label class="text-profile">{{ label }}</label>
    <input v-model="name" name="hen" class="input-profile" :type="type" />
  </div>
</template>

<script>
export default {
  props: ["label", "text", "type", "name"],
  mounted() {
    console.log(this.name.hen);
  },
  computed: {}
};
</script>

<style>
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
