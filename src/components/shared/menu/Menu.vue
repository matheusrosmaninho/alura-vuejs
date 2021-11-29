<template>
  <nav>
    <ul>
      <li v-for="(rota, index) in rotas" :key="index">
        <router-link :to="rota.path">
          {{ rota.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  props: {
    rotas: {
      type: Array,
      required: true
    }
  }
};
</script>
