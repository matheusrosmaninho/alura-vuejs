<template>
  <div class="corpo">
    <meu-menu :rotas="routes" />
    <transition name="pagina">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Menu from "./components/shared/menu/Menu.vue";
import { routes } from "./routes";

export default {
  data() {
    return {
      routes
    };
  },
  components: {
    "meu-menu": Menu
  }
};
</script>

<style scoped>
.corpo {
  font-family: Arial, Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}
.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.4s;
}
</style>
