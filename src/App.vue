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
    <router-view />
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
</style>
