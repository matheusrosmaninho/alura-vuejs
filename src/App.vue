<template>
  <div class="corpo">
    <nav>
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="route.path">
            {{ route.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <transition name="pagina">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes";

export default {
  data() {
    return {
      routes
    };
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
