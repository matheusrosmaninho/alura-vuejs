<template>
  <img :src="url" :alt="titulo" />
</template>

<script>
export default {
  name: "ImagemResponsiva",
  props: {
    url: {
      type: String,
      default: "https://via.placeholder.com/150"
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
