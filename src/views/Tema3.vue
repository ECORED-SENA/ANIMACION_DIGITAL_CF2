<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Técnicas y formatos de <i>storyboarding</i>

    .row.justify-content-center.mb-5.t1-fondo1
      .col-10.pt-5.px-4
        figure.mb-5
          img(src='@/assets/curso/tema3/img01.svg') 
        p.mb-4 Para hacer un <i>storyboard</i> no hace falta ser un experto en el dibujo, dado que existen otras alternativas para el desarrollo del mismo. Si bien es cierto que el dibujo es el estándar de la industria y el más usado por su versatilidad y agilidad, se pueden encontrar técnicas como el uso de fotografías, dibujar sobre una imagen de referencia o incluso el uso de <i>software</i> gratuito.
        p.mb-0 Los cuadros de <i>storyboard</i> no pretenden ser obras de arte, sino que más bien pueden ser bocetos rápidos que logran plasmar adecuadamente las ideas del director, preferiblemente mientras que este las está comunicando al equipo.

    .row.justify-content-center.mb-4
      .col-lg-7.d-flex.align-items-center
        div.mb-4
          p.mb-4 Dado que con seguridad muchos de los cuadros se corregirán o se cambiarán completamente según las necesidades narrativas, no vale la pena detallarlos en una primera instancia. Un ejemplo perfecto de esto es el <i>storyboard</i> de la película <i>Taxi Driver</i> (1976) del director Martin Scorsese y el cual puede visualizarlo desde el material complementario.
          p.mb-4 Otra opción es el uso de fotografías propias o algunos fotogramas de películas. Estas imágenes también pueden ser usadas como una base y posteriormente dibujar sobre ellas, dado que una de las principales dificultades al desarrollar un <i>storyboard</i> es la capacidad de traducir lo que establece el guion técnico a una viñeta.
          p.mb-0 Por otra parte, es posible usar <i>software</i> gratuitos como <span ><a style="color: #3D87E5" href='http://storyboardthat.com' target="_blank"><i>storyboardthat</i></a></span>. <b>Sin embargo, esta opción no es la más profesional y aconsejable</b>, dado que se limita a las opciones dadas por el programa y no siempre responde a las ideas del director, ni al estilo visual del proyecto.
      .col-lg-5.col-6.d-flex.align-items-center
        figure.mb-4
          img(src='@/assets/curso/tema3/img02.svg') 

    div.fondo(:style="{'background-image': `url(${require('@/assets/curso/tema2/img03.svg')})`}")
      div.t2-border.mb-5.py-5
        h3 Proceso
        div.px-4.mb-5        
          p.mb-4 El nivel de acabado de un <i>storyboard</i> responde directamente al tipo de producto audiovisual y las necesidades del cliente o del director. Usualmente en publicidad se busca que las viñetas tengan una gran calidad, destacando siempre el producto, pero se cuenta con tiempos cortos de ejecución; mientras que en largometrajes se dispone de gran presupuesto y tiempo, buscando ser muy certeros en cada plano, dejando indicaciones adicionales de movimientos de cámara, entradas y salidas de personajes, incidencia de la luz, etc. Por ende, se sugiere a continuación las fases de desarrollo de un <i>storyboard</i> genérico:
          div.mb-5.px-4          
            .row.mb-4
              .col-lg-1.p-0.d-flex.justify-content-end
                figure.num
                  img(src='@/assets/curso/num1.svg') 
              .col-lg-11.pt-2
                p.mb-1 <b>Visión del director</b>
                p.mb-0 En esta fase se debe leer detenidamente el guion literario y el guion técnico (si existe) de toda la producción. El director suele reunirse con el equipo de producción o el artista de <i>storyboard</i>, con el fin de transmitir sus ideas, referentes e inspiración. Es el momento ideal para tener papel y lápiz y tomar nota.
            .row.mb-4
              .col-lg-1.p-0.d-flex.justify-content-end
                figure.num
                  img(src='@/assets/curso/num2.svg') 
              .col-lg-11.pt-2
                p.mb-1 <b><i>thumbnails</i></b>
                p.mb-0 Son pequeños bocetos rápidos que ayudan a tener un primer acercamiento a lo que será el <i>storyboard</i>. No se pierde el tiempo en detalles, se piensa más en el tipo de plano, ángulo y el ritmo.
            .row.mb-4
              .col-lg-1.p-0.d-flex.justify-content-end
                figure.num
                  img(src='@/assets/curso/num3.svg') 
              .col-lg-11.pt-2
                p.mb-1 <b>Rough</b>
                p.mb-0 Tras la presentación de los <i>thumbnails</i> al director y anotar las correcciones, se procede a una siguiente versión más trabajada del <i>storyboard</i>, posiblemente haciendo uso de un formato en limpio. Se invierte tiempo en la puesta en escena (<i>staging</i>) de cada plano, así como también en plasmar líneas de acción y siluetas claras. Aún en esta etapa hay posibilidades de cambios por parte del director.
            .row.mb-4
              .col-lg-1.p-0.d-flex.justify-content-end
                figure.num
                  img(src='@/assets/curso/num4.svg') 
              .col-lg-11.pt-2
                p.mb-1 <b>Clean</b>
                p.mb-0 El director ha aprobado cada viñeta y se procede a entintar y dar color. En este punto suele digitalizarse el <i>storyboard</i>, con el fin de usarlo en la construcción del <i>animatic</i>. No es estrictamente necesario llegar hasta esta fase en todos los proyectos audiovisuales. Es muy útil para producciones que son realizadas en diferentes estudios y el director no está disponible todo el tiempo para aclarar dudas.

      h3 Formatos
      div.px-4.mb-5        
        p.mb-5 Como se mencionó anteriormente, no existe un formato universal para el desarrollo del <i>storyboard</i>, sin embargo, resulta útil tener una guía como se presenta a continuación:
    
    .row.justify-content-center.mb-5
      .col-lg-10.px-5
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img03.svg') 
              figcaption Leyenda de la imagen

          .t3.tarjeta.color-acento-contenido.p-3(x="61%" y="1%" numero="1")
            p.mb-0 <b>Información general/ observaciones:</b> como su nombre lo indica, es la sección donde se debe escribir la secuencia a la que pertenece la hoja de <i>story</i>, el número de página o algunas notas aclaratorias.

          .t3.tarjeta.color-acento-contenido.p-3(x="28%" y="19%" numero="2")
            p.mb-0 <b>Dibujo:</b> espacio para ilustrar lo que se quiere mostrar en el audiovisual.

          .t3.tarjeta.color-acento-contenido.p-3(x="28%" y="42.8%" numero="3")
            p.mb-0 <b>Descripción:</b> especifica detalles de la viñeta. También se agregan allí los diálogos y sonidos.
        
    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-0 El formato presentado nos brinda la posibilidad de recortar cada viñeta y pegarlas sobre un tablero y así facilitar su corrección y lectura. Esto, en el caso de un proyecto donde todo el equipo se encuentra en un mismo lugar. Si este no es el caso, lo mejor será digitalizar cada cuadro y ordenarlo en un documento en la nube.

    .row.justify-content-center
      .col-lg-7
        a.t1.anexo.mb-4(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link.svg")
          .anexo__texto
            p <b>Recurso Web.</b> <i>Floobynooby</i> (2020), <i>Drawing & Composition for visual storytelling</i>.

        a.t1.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/pdf.svg")
          .anexo__texto
            p <b>Material complementario.</b> Ministerio de educación Argentina (2011), medios audiovisuales, animación en el aula.

        a.t1.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/pdf.svg")
          .anexo__texto
            p <b>Recurso.</b> Formato <i>storyboard</i>.
    Separador     

</template>

<script>
export default {
  name: 'Tema3',
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
