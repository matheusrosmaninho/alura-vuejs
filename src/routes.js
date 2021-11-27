import Cadastro from "./views/Cadastro.vue";
import Home from "./views/Home.vue";

export const routes = [
  {
    title: "Home",
    path: "/",
    component: Home
  },
  {
    title: "Cadastro",
    path: "/cadastro",
    component: Cadastro
  }
];
