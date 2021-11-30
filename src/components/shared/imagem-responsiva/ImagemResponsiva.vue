<template>
  <img :src="url" :alt="titulo" />
</template>

<script>
export default {
  name: "ImagemResponsiva",
  props: {
    url: {
      type: String
    },
    titulo: {
      type: String,
      default: "Titulo não encontrado"
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
