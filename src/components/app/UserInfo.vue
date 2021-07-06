<template>
  <div class="w-full xl:px-8 px-0 mt-0 ">
    <div
      class="back shadow-xl px-8 text-lg"
      :class="user.tarif ? 'premium' : 'vip'"
    >
      <h5 class="pt-4 pb-1"><span class="pr-4">#</span> ID: {{ user.id }}</h5>
      <h5 class="py-1">
        <i class="fas fa-user pr-3 "></i>
        {{ user.lastname }} {{ user.name }} {{ user.patronymic }}
      </h5>
      <h5 class="py-1">
        <i class="far fa-calendar-alt pr-3"></i>
        {{ user.date_of_birth }}
      </h5>
      <h5 class="py-1">
        <i class="fas fa-passport pr-3"></i>
        {{ user.passport_series }}
      </h5>
      <h5 class="py-1 flex">
        <i class="fas fa-map-marker-alt pr-5 pt-2"></i>
        {{ user.address }}
      </h5>
      <h5 class="py-1">
        <i class="fas fa-envelope pr-3"></i>
        {{ user.email }}
      </h5>
      <h5 v-if="parents.length" class="py-1">
        <i class="fas fa-users pr-3"></i>
        Ученики: ({{ parents.length }})
      </h5>
      <h5 v-else class="py-1">
        <i class="fas fa-users pr-3"></i>

        ({{ 0 }})
      </h5>
      <h5 class="pb-4 pt-1">
        <span class="pr-4">#</span>
        ID: {{ user.id }}
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "userInfo",
  props: ["user", "parents"]
};
</script>
<style scoped>
.premium {
  background: #454550;
  color: #fff;
}
.vip {
  background: #f2c94c;
  color: #454550;
}
</style>
