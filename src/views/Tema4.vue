<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Dibujo básico

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.png')})`}"
      ) 
      .bloque-texto-g__texto.p-5
        p.mb-0 El dibujo es una forma expresión humana y una de las más efectivas, ya que bien ejecutado es capaz de superar incluso la barrera del idioma, tanto así que algunos se han constituido en símbolos que son mundialmente utilizados para representar conceptos específicos; por ejemplo, la señal de prohibido o las figuras de hombre y mujer que se ponen en la entrada de los baños públicos.<br><br>En su definición más básica, el dibujo es el arte de representar objetos mediante el uso de líneas sobre una superficie, y es una de las formas más sencillas de representación gráfica.
      
    p.mb-5 Actualmente, las técnicas de dibujo se dividen en dos grandes ramas definidas principalmente por la naturaleza de las herramientas usadas y estas son las técnicas análogas y las digitales. Las técnicas análogas hacen referencia a todas aquellas que hacen uso de instrumentos o herramientas tradicionales como lo son el lápiz y el papel principalmente, aunque no se restringen solo a estos 2, mientras que las digitales hacen uso de computadores y una amplia gama de herramientas tanto de hardware como de software.
    
    .row.justify-content-center.t1-fondo1.pb-5
      .col-10.pt-5.px-4
        figure.mb-5
          img(src='@/assets/curso/tema4/img02.png') 
        p.mb-0 A su vez dentro de estas 2 ramas existen un gran abanico de categorías, las cuales se definen principalmente por el tipo de materiales que se emplean para realizarlas; por ejemplo, técnicas secas o aguadas dentro de las análogas o técnicas vectoriales o mapas de bits para el caso de las digitales. Sin embargo, al ser la intención de este documento hacer una introducción básica se abordarán una serie de conceptos útiles para realizar una representación gráfica de ideas simple y efectiva orientada a la realización de storyboard.
    
    Separador 


    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Herramientas de dibujo

    p.mb-5 Para dibujar existen muchos instrumentos, utensilios y herramientas, a continuación, se da una breve descripción de algunos de los más utilizados clasificados según su uso:

    .row.justify-content-center.t4-fondo1.pb-5
      .col-10.pt-5.px-4
        figure.mb-5
          img(src='@/assets/curso/tema4/img03.png') 

    div.LineaTiempoD-t4.mb-5
      LineaTiempoD.color-secundario
        div(numero="A" titulo="Lápices y portamina")    
          p.mb-4 El lápiz es un instrumento para dibujo o escritura que consiste habitualmente en una barra (conocida también como mina) compuesta de una mezcla de grafito y arcilla o cera encapsulada en un cilindro de madera (actualmente se usan muchos otros materiales como plástico, papel, etc.) que le da soporte a la mina, también son fabricados de colores mediante el uso de diferentes pigmentos, pero para dibujo el más usado suele ser el lápiz de grafito.
          p.mb-5 Los lápices de grafito se marcan con letras y números según la composición de la mina usando la H (del inglés Hard) para las minas duras y la B (del inglés Back) para las minas blandas, entre más dura sea la mina más claro será el trazo dejado por el lápiz y en contraposición, entre más blanda sea la mina más oscuro será el trazo debido a que así el lápiz deja sobre el soporte mayor cantidad de grafito.
          figure.mb-5
            img(src='@/assets/curso/tema4/img04.svg') 
          p.mb-0 El portaminas es otro instrumento de dibujo análogo al lápiz con la diferencia de que tiene un sistema mecánico para proveer las minas, las cuales se pueden reemplazar una vez se acaban.
        
        div(numero="B" titulo="Bolígrafos y plumas")
          p.mb-5 Son instrumentos de escritura que cuentan con sistemas mecánicos para dosificar tinta. Aunque principalmente son usados para escribir es común que algunos artistas los usen para dibujar.
          figure
            img(src='@/assets/curso/tema4/img05.png') 

        div(numero="C" titulo="Sacapuntas y bisturí")  
          p.mb-5 Los sacapuntas son utensilios usados para desbastar el recubrimiento de madera de los lápices a medida que se va desgastando la mina, existen muchos modelos de sacapuntas, pero su finalidad es la misma, también es común hacer uso de cuchillas como los bisturí para hacer el desbaste de la madera y afilar las puntas de las minas a medida que se gastan.
          figure
            img(src='@/assets/curso/tema4/img06.png') 

        div(numero="D" titulo="Papeles")  
          p.mb-4 El papel es un material obtenido del procesamiento de fibras vegetales de las que se obtiene pulpa de celulosa mediante métodos de molienda, la cual es procesada y prensada para obtener láminas delgadas de características variables según el proceso que se les aplique.
          p.mb-5 Existen diferentes tipos de papel destinados a variedad de aplicaciones, aunque en principio todos sirven para dibujar, entre los más comunes y fáciles de conseguir se encuentra el papel bond de 75 gramos que regularmente es de uso de oficina, sin embargo, en casi cualquier papelería o tienda de implementos de arte se consiguen más variedades.
          figure
            img(src='@/assets/curso/tema4/img07.png') 

        div(numero="E" titulo="Gomas de borrar")          
          p.mb-5 Son instrumentos diseñados para eliminar trazos de lápiz y de algunas tintas borrables, hay de consistencia rígida, aunque con algo de flexibilidad y algunas maleables como la goma limpia tipos.
          figure
            img(src='@/assets/curso/tema4/img08.png') 

    .row.justify-content-center.t4-fondo1.pb-5
      .col-10.pt-5.px-4
        figure.mb-5
          img(src='@/assets/curso/tema4/img09.png') 

    h2 Hardware
    p.mb-5 Actualmente existen muchas alternativas de equipos de cómputo y periféricos útiles para desarrollar ilustraciones que van desde los teléfonos móviles, hasta computadores de escritorio pasando por computadores y portátiles, tablets y otros periféricos especializados en la ilustración digital 2D y 3D.
    
    div.LineaTiempoD-t4.mb-5
      LineaTiempoD.color-secundario
        div(numero="A" titulo="Teléfonos móviles")    
          p.mb-5 Actualmente la capacidad de cómputo de los teléfonos móviles supera con creces la poseída por los computadores de escritorio de finales de los 90, especialmente los que encajan en la categoría de Smartphone, ya que en su mayoría poseen una pantalla táctil de suficiente tamaño que brinda la posibilidad de dibujar sobre ella como si se tratara de una libreta de bolsillo digital, gracias a esta característica y las diferentes aplicaciones y algunos utensilios como los stylus (este último no es indispensable) los smartphones se convierten en una alternativa al alcance de la mayoría de personas para realizar dibujos digitales.
          figure
            img(src='@/assets/curso/tema4/img10.png') 

        div(numero="B" titulo="Tablets")    
          p.mb-4 Son dispositivos con grandes pantallas táctiles, habitualmente mayores a 7” y que funcionan generalmente bajo los mismos sistemas operativos que los Smartphones, como lo son android, iOs y en algunos casos Windows, gracias a esto la mayoría de aplicaciones disponibles para teléfonos móviles están disponibles también para las tablets y dado su tamaño de pantalla son una alternativa más cómoda para dibujar que un smartphone.
          p.mb-5 El dispositivo más usado de esta categoría por artistas dedicados a la ilustración sin lugar a dudas es el iPad de Apple, sin embargo, en el mercado existen muchas otras alternativas con funcionalidades iguales o similares en un amplio rango de precios.
          figure
            img(src='@/assets/curso/tema4/img11.png') 
                      
        div(numero="C" titulo="Computadores")    
          p.mb-4 Los computadores son la alternativa más utilizada en cuanto a trabajo profesional se refiere, principalmente por las posibilidades de personalización según las necesidades y porque ofrecen más capacidad de cómputo que alternativas como móviles o tablets y por tanto son capaces de ejecutar aplicaciones más potentes para ilustración.
          p.mb-5 Existen en 2 grandes categorías que son equipos de escritorio y equipos portátiles diferenciándose principalmente por su volumen y peso lo que hace que el equipo deba ser usado en una estación fija para el caso de los equipos de escritorio o tenga la posibilidad de ser transportado con libertad para el caso de los portátiles (conocidos también como laptops).
          figure
            img(src='@/assets/curso/tema4/img12.png') 

        div(numero="D" titulo="Tabletas gráficas")    
          p.mb-4 Las tabletas gráficas son un periférico de entrada que se conecta a un computador de escritorio o portátil, e incluso algunos modelos actuales permiten conexión con smartphones compatibles, constan de una superficie plana sobre la cual se interactúa por medio de un lápiz que es capaz de detectar la posición, contacto, presión y en ocasiones inclinación para transferir esa información al trazo representado en pantalla.
          p.mb-5 Las hay de muchas marcas, modelos y precios siendo los fabricantes especializados más conocidos Wacom, Xp Pen y Huion, existen otros fabricantes, pero por presencia en el mercado los modelos de estos tres fabricantes son los más sencillos de encontrar en la región de Latinoamérica.
          figure
            img(src='@/assets/curso/tema4/img13.png') 
                      
        div(numero="E" titulo="Pantallas gráficas")    
          p.mb-4 En esencia tienen el mismo funcionamiento que una tableta gráfica, salvo que la superficie sobre la cual se interactúa con el lápiz funciona también como monitor, razón por la cual la experiencia de uso es más natural, pero en contraposición su costo es más elevado.
          p.mb-5 Al igual que con las tabletas gráficas, las marcas de dispositivos más fáciles de encontrar en la región son Wacom, Xp Pen y Huion.
          figure
            img(src='@/assets/curso/tema4/img14.png') 
                      
    h2 Software
    p.mb-4 El software es el conjunto de instrucciones (Programas) que permiten la utilización de los equipos de cómputo, el principal es el sistema operativo el cual cumple la función de ser base para la operación del equipo y de otros programas. Las plataformas más populares actualmente para ordenadores de escritorio y portátiles son Windows, macOS y Linux en sus diversas distribuciones y iOS y Android para dispositivos móviles, lo que ocasiona que la mayoría de aplicaciones para dibujo se centren en estos sistemas operativos.
    p.mb-5 A continuación, se listan algunas de las aplicaciones más populares gratuitas y de pago para las distintas plataformas.
   
    .row.justify-content-center.mb-4 
      .col-lg-3.d-flex
        a(href="https://support.microsoft.com/es-es/windows/obtener-microsoft-paint-a6b9578c-ed1c-5b09-0699-4ed8115f9aa9" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img15.png')
            h3.text-center Paint
            p.text-small Es un programa básico de dibujo, viene integrado con Windows y aunque no se suele usar a nivel profesional es una buena alternativa para empezar a explorar.

      .col-lg-3.d-flex
        a(href="https://krita.org/en/" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img16.png')
            h3.text-center Krita
            p.text-small Es un programa de pintura digital gratuito y open source muy potente lo que lo hace uno de los más populares y por tanto es muy fácil encontrar tutoriales sobre él, está disponible para Windows, macOS y Linux.

      .col-lg-3.d-flex
        a(href="https://inkscape.org/" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img17.png')
            h3.text-center Inkscape
            p.text-small Es un editor de gráficos vectoriales gratuito y open source disponible para plataformas Linux, Windows y macOS.
      .col-lg-3.d-flex
        a(href="https://www.sketchbook.com/" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img18.png')
            h3.text-center Autodesk Sketchbook
            p.text-small Es el programa de dibujo de Autodesk y literalmente traduce libreta de bocetos, es de los programas más sencillos y fáciles de aprender, pero potentes para ilustración, está disponible para Windows, macOS, iOS y Android y actualmente es de uso gratuito.

    .row.justify-content-center.mb-4
      .col-lg-3.d-flex
        a(href="https://www.gimp.org/" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img19.png')
            h3.text-center Gimp
            p.text-small Es la alternativa gratuita y open source a Photoshop por excelencia, y de las opciones más potentes para edición de fotografías, está disponible para Linux, Windows y macOs.
      
      .col-lg-3.d-flex
        a(href="https://magmastudio.io/" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img20.png')
            h3.text-center Magmastudio
            p.text-small Es una plataforma de uso web que permite la participación de varios autores a la vez en la creación de imágenes, tiene alternativas gratuitas y de pago y se puede acceder a él desde un explorador web como Chrome, Firefox o Edge
      
      .col-lg-3.d-flex
        a(href="https://www.adobe.com/products/photoshop.html" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img21.png')
            h3.text-center Adobe Photoshop
            p.text-small Es uno de los programas más conocidos del mundo de la casa Adobe, aunque inicialmente era para edición fotográfica se ha vuelto muy popular para ilustración digital, es de pago por suscripción con versión de prueba por 30 días y está disponible para Windows y macOS.
     
      .col-lg-3.d-flex
        a(href="https://www.adobe.com/products/illustrator.html" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img22.png')
            h3.text-center Adobe Illustrator
            p.text-small Es un programa de diseño vectorial de la casa Adobe es de pago por suscripción con versión de prueba por 30 días y está disponible para Windows y macOS.
      
    .row.justify-content-center.mb-4
      .col-lg-3.d-flex
        a(href="https://www.clipstudio.net/es/" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img23.png')
            h3.text-center Clip Studio Paint
            p.text-small Antiguamente Manga Studio es un programa de pago para ilustración digital, está disponible para Windows, macOS y iOS y tiene una versión de prueba de 30 días.

      .col-lg-3.d-flex
        a(href="https://www.painterartist.com/en/product/painter/#overview" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img24.png')
            h3.text-center Corel Painter
            p.text-small Es un programa pago muy potente de pintura digital disponible para Windows y macOS, ofrece alternativas de único pago y suscripción y prueba gratis de 30 días.

      .col-lg-3.d-flex
        a(href="https://www.coreldraw.com/la/" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img25.png')
            h3.text-center Corel Draw
            p.text-small Es la competencia directa de illustrator y se centra en dibujo y diseño vectorial y dependiendo de su versión está disponible para Windows, macOS y web.

      .col-lg-3.d-flex
        a(href="https://affinity.serif.com/en-us/designer/" target="_blank").d-flex
          .tarjeta--boton.color-acento-contenido.p-4.py-5
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema4/img26.png')
            h3.text-center Afinity Designer
            p.text-small es un programa de diseño que permite el intercalar entre el uso de pixeles y vectores lo que lo hace bastante versátil, es de pago y está disponible para Windows, macOS y iOs.
    
    .row.justify-content-center
      .col-lg-12.d-flex
        a(href="https://procreate.art/" target="_blank").w-100.d-flex
          .tarjeta--boton.color-acento-contenido.p-5.w-100
            .row.justify-content-center
              .col-3
                figure
                  img(src='@/assets/curso/tema4/img27.png')
              .col-2.d-flex.align-items-center
                h3.mb-0.w-100.text-center Procreate
              .col-7.d-flex.align-items-center
                p.text-small.mb-0.w-100 Es una aplicación para dibujo y pintura digital que ha venido tomando bastante relevancia, es de pago y está disponible exclusivamente para iOS.
  
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
