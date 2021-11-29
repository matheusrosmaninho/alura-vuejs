<template>
  <button class="botao botao-perigo" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
  name: "Botao",
  props: {
    tipo: {
      type: String,
      required: true
    },
    rotulo: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
