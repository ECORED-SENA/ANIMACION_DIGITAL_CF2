<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Dibujo básico

    Separador 


    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Herramientas de dibujo
    Separador

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Bocetación
    Separador

    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Perspectiva
    Separador

    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Abstracción y líneas de acción
    Separador

    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Tramas
    Separador

    
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
