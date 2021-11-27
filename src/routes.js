import Cadastro from "./views/Cadastro.vue";
import Home from "./views/Home.vue";

export const routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "/cadastro",
    component: Cadastro
  }
];
