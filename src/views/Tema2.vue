<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Guión técnico

    .cajon.color-acento-contenido.p-4.mb-4
      .row.justify-content-center
        .col-lg-3.col-7.d-flex.align-items-center
          figure.mb-4
            img(src='@/assets/curso/tema2/img01.svg') 
        .col-lg-7.d-flex.align-items-center
          p.mb-4 Al igual que el storyboard, no hay un formato único para desarrollarlo, más bien responde a las necesidades del producto audiovisual y al equipo de producción. En este documento, a partir del guion literario, se planean cada uno de los planos que compondrán las secuencias, describiendo el tipo de plano, ángulo, movimientos de cámara, sonidos, efectos especiales, diálogos y duración.
      

    .tabla-a.color-acento-botones.mb-5 
      table
        caption Nota: ejemplo de plano de guion técnico
        thead
          tr
            th Secuencia
            th Plano
            th(colspan=4) Descripción
            th Ángulo
            th Lente
            th(colspan=2) Diálogo
            th(colspan=2) Sonido
            th Duración
            th Duración total
        tbody
          tr
            td.text-center 1
            td.text-center 1
            td(colspan=4) Plano entero (FS). Leve Dolly in hacia el personaje. El personaje mira su reloj y se ve un poco preocupado.
            td.text-center Normal
            td.text-center 35 mm
            td(colspan=2) Personaje 1 - ¿Qué habrá asado? Humm...
            td(colspan=2) Música de tensión. Sonido de las manecillas del reloj.
            td.text-center 5"
            td.text-center 5"

    .row.justify-content-center
      .col-lg-8
        p.mb-5.text-center <b>El guion técnico puede ser complementado con otra columna denominada plano de planta, donde se describe de forma gráfica la ubicaciónde los personajes y la cámara, como se muestra a continuación:</b>
    
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2/img02.svg') 

    div.fondo(:style="{'background-image': `url(${require('@/assets/curso/tema2/img03.svg')})`}")
      div.t2-border.mb-5.py-5.px-4
        h3 Regla de los 180°
        p.mb-4 En la imagen anterior, adicional a un plano de planta, se puede visualizar una de las reglas más importantes al momento de componer planos cinematográficos: <b>la regla de los 180°</b>.
        p.mb-4 Esta regla dicta que existe una línea imaginaria denominada “eje de acción”, la cual se establece por la dirección de las miradas entre los personajes, o también por la dirección del movimiento de un personaje. Una vez dispuesta la cámara a un costado de la acción (ver imagen 2, cámara B), se tiene una referencia espacial de los personajes la cual se debe mantener, con el fin de no confundir al espectador o llegar a romper la continuidad espacial de la escena. Se ve que en la imagen 2, cámara A, B y C, los personajes siempre aparecen al costado izquierdo y derecho del encuadre respectivamente; no obstante, para la cámara D, se observa que la posición de los personajes se intercambió, y de ser estas 4 cámaras, planos de una misma escena, se caería en lo que se denomina “ruptura de eje”.
        p.mb-0 Esta regla, como todas en el lenguaje audiovisual, se puede romper, pero de manera consciente sabiendo que eso generará caos, confusión o desequilibrio. Para ampliar un poco este tema puede acceder al material complementario de estudio denominado AprenderCine.com (2017), <b>Salto de eje y eje de acción en el cine</b>.

      h3 Consideraciones previas
      div.mb-5.px-4
        p.mb-5 Para el desarrollo del guion técnico se deben tener presentes las unidades que permiten separar una acción de otra:
        .row.mb-4
          .col-lg-1.p-0.d-flex.justify-content-end
            figure.num
              img(src='@/assets/curso/num1.svg') 
          .col-lg-11.pt-2
            p.mb-1 <b>Secuencia</b>
            p.mb-0 Es una unidad narrativa e independiente que posee significado. Tiene su propio inicio, desarrollo y conclusión de una situación dramática. La secuencia puede desarrollarse en un escenario o en varios, así como también puede estar compuesto por una o varias escenas. Puede desarrollarse de manera lineal o narrarse por fragmentos y mezclarse con otras secuencias (NOVASUR).
            
        .row.mb-4
          .col-lg-1.p-0.d-flex.justify-content-end
            figure.num
              img(src='@/assets/curso/num2.svg') 
          .col-lg-11.pt-2
            p.mb-1 <b>Escena</b>
            p.mb-0 Unidad de acción que se delimita por el espacio y tiempo. Si la acción cambia de escenario o hay una alteración en el tiempo, es necesario un cambio de escena. Una escena puede estar compuesta por uno o varios planos.
            
        .row.mb-4
          .col-lg-1.p-0.d-flex.justify-content-end
            figure.num
              img(src='@/assets/curso/num3.svg') 
          .col-lg-11.pt-2
            p.mb-1 <b>Toma</b>
            p.mb-4 Lapso de tiempo desde que el director dice “acción” y se comienza a grabar, hasta el momento que dice “corten” y se detiene. En una grabación existen muchas tomas hasta que un plano salga como el director lo desea. Más adelante, la toma correcta es seleccionada y combinada por edición (montaje) (NOVASUR).
            p.mb-0 Usualmente en animación no hay tomas, dado que los planos que se animan se han planeado con rigor y no hay oportunidad, por tiempo y presupuesto, de hacer varias tomas para una misma acción narrativa.

        .row.mb-4
          .col-lg-1.p-0.d-flex.justify-content-end
            figure.num
              img(src='@/assets/curso/num4.svg') 
          .col-lg-11.pt-2
            p.mb-1 <b>Plano</b>
            p.mb-0 Unidad básica del lenguaje audiovisual con significado, donde se define la dimensión de los objetos dentro del encuadre.


    Separador 
    
    

</template>

<script>
export default {
  name: 'Tema2',
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
