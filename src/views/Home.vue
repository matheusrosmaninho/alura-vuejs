<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      placeholder="filtre por titulo"
      @input="filtro = $event.target.value"
    />
    <ul class="lista-fotos">
      <li
        class="lista-fotos-item"
        v-for="(foto, index) in fotosComFiltro"
        :key="index"
      >
        <painel :foto="foto">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
        </painel>
      </li>
    </ul>
  </div>
</template>

<script>
import ImagemResponsiva from "../components/shared/imagem-responsiva/ImagemResponsiva.vue";
import Painel from "../components/shared/painel/Painel.vue";

export default {
  name: "Home",
  components: {
    Painel,
    ImagemResponsiva
  },
  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: ""
    };
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }
      return this.fotos;
    }
  },
  created() {
    let promise = this.$http.get("http://localhost:3000/v1/fotos");
    promise
      .then(res => res.json())
      .then(
        fotos => (this.fotos = fotos),
        arr => console.log(arr)
      );
  }
};
</script>

<style scoped>
.centralizado {
  text-align: center;
}
.lista-fotos {
  list-style: none;
}
.lista-fotos .lista-fotos-item {
  display: inline-block;
}
.filtro {
  display: block;
  width: 100%;
  padding: 1rem;
  border-radius: 0.6rem;
}
</style>
