<template>
  <button @click="disparaAcao" :class="`botao ${estiloDoBotao}`" :type="tipo">
    {{ rotulo }}
  </button>
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
    },
    confirmacao: {
      type: Boolean,
      default: false
    },
    estilo: {
      type: String,
      default: "padrao"
    }
  },
  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao") {
        return "botao-padrao";
      }
      if (this.estilo == "perigo") {
        return "botao-perigo";
      }
    }
  },
  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operação?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
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
