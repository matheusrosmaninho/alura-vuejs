<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">
      {{ foto.titulo }}
    </h2>
    <div class="painel-conteudo" v-show="visivel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Painel",
  props: {
    foto: {
      type: Object,
      default: {
        url: "https://via.placeholder.com/150",
        titulo: "Imagem não encontrada"
      }
    }
  },
  data() {
    return {
      visivel: true
    };
  }
};
</script>

<style scoped>
/* estilo do painel */
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}
.imagem-responsiva {
  width: 100%;
}
* {
  box-shadow: 5px 5px 5px;
}
</style>
