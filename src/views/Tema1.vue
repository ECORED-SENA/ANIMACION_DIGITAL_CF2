<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Lenguaje audiovisual

    .row.justify-content-center.mb-5.t1-fondo1
      .col-10.pt-5.px-4
        figure.mb-5
          img(src='@/assets/curso/tema1/img01.png') 
        p.mb-0 El lenguaje audiovisual hace referencia a la comunicación mediante sonidos e imágenes. Es una forma de expresión que integra el lenguaje verbal (escrito y hablado), visual y sonoro. Como lo expresa Antonio R. Bartolomé:

    .row.justify-content-center.mb-5
      .col-10
        .bloque-texto-d.color-acento-contenido.p-2
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              p.mb-0 La clave del lenguaje audiovisual es que el significado del mensaje viene dado por la interacción sonido-imagen, dentro de un contexto secuencial. En el Lenguaje Audiovisual, tal como lo entendemos aquí, las músicas, los efectos sonoros, los ruidos y los silencios colaboran en la transmisión del mensaje, no como "fondo" o "complemento" sino conformando realmente el mensaje. 
              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              p.mb-0  <b>(BARTOLOMÉ, 1987) (ACEITUNO, 2010)</b>

    p.mb-4.text-center El lenguaje audiovisual está compuesto por cuatro aspectos principalmente

    .row.justify-content-center.mb-4
      .col-lg-5.col-5.d-flex.align-items-center
        figure.mb-4
          img(src='@/assets/curso/tema1/img02.svg') 
      .col-lg-5.d-flex.align-items-center
        div
          .row.mb-4
            .col-lg-1.p-0
              figure.num
                img(src='@/assets/curso/tema1/img03.svg') 
            .col-lg-11.pt-2
              p.mb-1 <b>Morfológico</b>
              p.mb-0 Hace referencia a sus elementos constitutivos, es decir, la imagen, el sonido y el movimiento. Estos elementos establecen una dimensión temporal y espacial.
          .row.mb-4
            .col-lg-1.p-0
              figure.num
                img(src='@/assets/curso/tema1/img04.svg') 
            .col-lg-11.pt-2
              p.mb-1 <b>Sintáctico</b>
              p.mb-0 Son aquellas reglas y principios que ayudarán a estructurar y combinar los elementos morfológicos con el fin de expresar significado en conjunto.
          .row.mb-4
            .col-lg-1.p-0
              figure.num
                img(src='@/assets/curso/tema1/img05.svg') 
            .col-lg-11.pt-2
              p.mb-1 <b>Semántico</b>
              p.mb-0 Es el significado de cada elemento, ya sea denotativo (lo que literalmente significa) o connotativo (lo que se interpreta o valora de manera particular por cada individuo). Cada elemento morfo-sintáctico cumple una función semántica.
          .row.mb-4
            .col-lg-1.p-0
              figure.num
                img(src='@/assets/curso/tema1/img06.svg') 
            .col-lg-11.pt-2
              p.mb-1 <b>Estético</b>
              p.mb-0 Pretende crear o producir una sensación de belleza, armonía, agrado y gracia.

    p.mb-5.text-center <b>Ahora, es bueno profundizar en el aspecto sintáctico del lenguaje audiovisual, pese a que este tiene un valor técnico, trabaja en conjunto con el aspecto semántico. Es así como, cada elección de plano o ángulo responderá a las emociones, sentimientos e información que se quiera transmitir a los espectadores. (CAR, 2011) :</b>

    LineaTiempoD.color-primario
      .row(numero="1" titulo="Campo")
        p.mb-0 Es el espacio, entorno o escenario.
      .row(numero="2" titulo="Encuadre")
        p.mb-0 Es el límite físico que recorta un fragmento del campo dentro de un rectángulo, de acuerdo con una posición y ángulo de visión concretos.
      .row(numero="3" titulo="Formato o relación de aspecto")
        p.mb-5 Es la proporción de ancho y alto del encuadre. Existen dos formatos estándar: formato 4:3 y 16:9. Originalmente estas relaciones responden a la proporción de la pantalla de televisión y a la del cine, respectivamente. Hoy día obedece más a criterios estéticos del director. (CÁMARA, 2006)
        .row.justify-content-center.mb-5
          .col-lg-8
            figure.mb-2 
              img(src='@/assets/curso/tema1/img07.png') 
            div.p-2(style="background-color: white")
              p.mb-0.text-small Ejemplo de campo, encuadre y aspecto
        
        .row.justify-content-center
          .col-lg-10
            .bloque-texto-f.color-acento-contenido.pt-4.px-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto Podría decirse que la cámara equivale al ojo humano, y dentro de una producción audiovisual, el director ‘manipula’ al público, mostrándole la realidad que al director interesa y de la manera que él desea. Para esto se vale de los tipos de planos, ángulos y movimientos de cámara. 
              .bloque-texto-f__autor.mb-3
                p.mb-0 <b>-  (ACEITUNO, 2010)</b>
            
      .div(numero="4" titulo="Plano")
        p.mb-5 Es la unidad narrativa más pequeña con significado. Se pueden dividir según su ángulo de corte (CÁMARA, 2006), usualmente tomando como referencia la figura humana.
        SlyderA.pb-4
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img08.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num1.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Gran Plano General / <i><i>Extreme</i> <i>Long Shot</i></i> (ELS)
              p.mb-0 Tiene el mayor ángulo de corte posible. Tiene el objetivo de mostrar la mayor cantidad de información acerca del entorno y los personajes solo representan un punto más dentro de todo el paisaje.

          .row.justify-content-center
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img09.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num2.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Plano General / <i>Long Shot</i> (LS)
              p.mb-0 Sigue teniendo un valor descriptivo y se pueden observar a los personajes. Brinda información del lugar donde se desarrollará la historia.

          .row.justify-content-center
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img10.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num3.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Plano Entero/ <i>Full Shot</i> (FS)
              p.mb-0 Muestra al personaje de cuerpo completo dentro de un lugar. Tiene un valor narrativo, en el cual se observan con claridad las acciones y movimientos de los personajes.

          .row.justify-content-center
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img11.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num4.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Plano Americano/ <i>American Shot</i> (AS)
              p.mb-0 Se muestra al personaje desde la cabeza hasta las rodillas. Su origen viene de las películas Western donde era importante mostrar las manos del personaje al momento de tomar su pistola. Es un plano narrativo y expresivo, donde el personaje como el entorno tienen gran importancia.
          
          .row.justify-content-center
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img12.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num5.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Plano medio/ <i>Medium Shot</i> (MS)
              p.mb-0 Corte a la altura de la cintura. A pesar de que se clasifica como un plano narrativo más que expresivo; aumenta la importancia del rostro del personaje y su expresividad, restándole atención al escenario. Es un plano muy cómodo para trabajar los diálogos de los personajes, desde el cual se puede hacer una transición a un plano general o un primer plano sin brusquedad. Tiene la facultad de tener mayor duración en pantalla frente a otros planos. (Cámara, 2006)
          
          .row.justify-content-center
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img13.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num6.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Primer Plano/ <i>Close Up</i> (CU)
              p.mb-0 El encuadre se ve ocupado casi por completo por el rostro del personaje, partiendo desde su cuello o mentón. Es un plano expresivo, donde todos los elementos dramáticos se centran en las emociones y proceso de pensamiento del personaje.
          
          .row.justify-content-center
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img14.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num7.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Primerísimo Primer Plano/ Plano Detalle/ <i>Extreme</i> <i>Close Up</i> (ECU)
              p.mb-0 Recoge un fragmento o detalle de un objeto o personaje. Es un plano expresivo que funciona para remarcar detalles o acciones que con otro tipo de planos pasarían desapercibidos.
                        
      .row(numero="5" titulo="Ángulo")
        p.mb-5 Es el que determina el punto de vista de la cámara, que provee un recurso expresivo al momento de mostrar el aspecto psicológico de un plano.
        SlyderA.pb-4
          .row.justify-content-center.mb-0
            .col-lg-3.col-6
              figure.mb-4
                img(src='@/assets/curso/tema1/img15.svg') 
            .col-lg-7.d-flex.align-items-center
              div
                .row.justify-content-star.pb-2.mb-4.num-bor.m-0
                  .col-1.p-0.celnum
                    figure.num
                      img(src='@/assets/curso/num1.svg') 
                  .col-10.ps-1.pt-2
                    h3.mb-0 Normal o nivel de horizonte
                p.mb-0 La cámara se encuentra a la altura del horizonte o los ojos del personaje. Brinda naturalidad y estabilidad, dado que es un punto de vista cercano a la realidad.<br>(CÁMARA, 2006)

          .row.justify-content-center.mb-0
            .col-lg-3.col-6
              figure.mb-4
                img(src='@/assets/curso/tema1/img16.svg') 
            .col-lg-7.d-flex.align-items-center
              div
                .row.justify-content-star.pb-2.mb-4.num-bor.m-0
                  .col-1.p-0.celnum
                    figure.num
                      img(src='@/assets/curso/num2.svg') 
                  .col-10.ps-1.pt-2
                    h3.mb-0 Picado (vista de pájaro)
                    p.mb-0 La cámara está por encima de la línea de horizonte y fija su objetivo hacia abajo. Este ángulo es útil, junto con un ELS, para mostrar paisajes. Si se usa en un FS y un personaje, se venderá la idea de inferioridad o vulnerabilidad.

          .row.justify-content-center.mb-0
            .col-lg-3.col-6
              figure.mb-4
                img(src='@/assets/curso/tema1/img17.svg') 
            .col-lg-7.d-flex.align-items-center
              div
                .row.justify-content-star.pb-2.mb-4.num-bor.m-0
                  .col-1.p-0.celnum
                    figure.num
                      img(src='@/assets/curso/num3.svg') 
                  .col-10.ps-1.pt-2
                    h3.mb-0  Cenital
                    p.mb-0 La cámara se encuentra paralela al suelo. Suelen ser planos descriptivos, para mostrar una ubicación o el desplazamiento de un personaje dentro del escenario.

          .row.justify-content-center.mb-0
            .col-lg-3.col-6
              figure.mb-4
                img(src='@/assets/curso/tema1/img18.svg') 
            .col-lg-7.d-flex.align-items-center
              div
                .row.justify-content-star.pb-2.mb-4.num-bor.m-0
                  .col-1.p-0.celnum
                    figure.num
                      img(src='@/assets/curso/num4.svg') 
                  .col-10.ps-1.pt-2
                    h3.mb-0 Contrapicado
                    p.mb-0 La cámara está ubicada por debajo de la línea de horizonte. Este punto de vista brinda la sensación de superioridad o importancia.
                             
          .row.justify-content-center.mb-0
            .col-lg-3.col-6
              figure.mb-4
                img(src='@/assets/curso/tema1/img19.svg') 
            .col-lg-7.d-flex.align-items-center
              div
                .row.justify-content-star.pb-2.mb-4.num-bor.m-0
                  .col-1.p-0.celnum
                    figure.num
                      img(src='@/assets/curso/num5.svg') 
                  .col-10.ps-1.pt-2
                    h3.mb-0 Nadir
                    p.mb-0 La cámara se coloca bajo el suelo y se exagera la sensación del ángulo en contrapicado.
                
          .row.justify-content-center.mb-0
            .col-lg-3.col-6
              figure.mb-4
                img(src='@/assets/curso/tema1/img20.svg') 
            .col-lg-7.d-flex.align-items-center
              div
                .row.justify-content-star.pb-2.mb-4.num-bor.m-0
                  .col-1.p-0.celnum
                    figure.num
                      img(src='@/assets/curso/num6.svg') 
                  .col-10.ps-1.pt-2
                    h3.mb-0 Tres cuartos
                    p.mb-0 El personaje u objeto aparece ligeramente girado en el eje horizontal. Suele usarse para romper el efecto de <i>twinning</i> o espejo y brindar sensación de profundidad              

          .row.justify-content-center.mb-0
            .col-lg-3.col-6
              figure.mb-4
                img(src='@/assets/curso/tema1/img21.svg') 
            .col-lg-7.d-flex.align-items-center
              div
                .row.justify-content-star.pb-2.mb-4.num-bor.m-0
                  .col-1.p-0.celnum
                    figure.num
                      img(src='@/assets/curso/num7.svg') 
                  .col-10.ps-1.pt-2
                    h3.mb-0 Sobre el hombro
                    p.mb-0 Es un tipo de angulación ideal para mostrar las conversaciones de los personajes.
                
          .row.justify-content-center.mb-0
            .col-lg-3.col-6
              figure.mb-4
                img(src='@/assets/curso/tema1/img22.svg') 
            .col-lg-7.d-flex.align-items-center
              div
                .row.justify-content-star.pb-2.mb-4.num-bor.m-0
                  .col-1.p-0.celnum
                    figure.num
                      img(src='@/assets/curso/num8.svg') 
                  .col-10.ps-1.pt-2
                    h3.mb-0 Espaldas
                    p.mb-0 La cámara se encuentra ubicada literalmente a la espalda del personaje.                

          .row.justify-content-center.mb-0
            .col-lg-3.col-6
              figure.mb-4
                img(src='@/assets/curso/tema1/img23.svg') 
            .col-lg-7.d-flex.align-items-center
              div
                .row.justify-content-star.pb-2.mb-4.num-bor.m-0
                  .col-1.p-0.celnum
                    figure.num
                      img(src='@/assets/curso/num9.svg') 
                  .col-10.ps-1.pt-2
                    h3.mb-0 Oblicuo 
                    p.mb-0 También denominado plano holandés, donde la cámara está inclinada, de tal manera que la imagen parece torcida. Esto genera una sensación de inestabilidad e inseguridad.
                
      .row(numero="6" titulo="Movimientos de cámara")
        p.mb-5 Son aquellos que generan encuadres móviles, en los cuales se puede describir un escenario o una acción.
        SlyderA.pb-4.mb-5
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img24.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num1.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 <i>Dolly</i> <i>in/out</i>
              p.mb-0 La cámara se desplaza hacia adentro <i>(in)</i> o hacia afuera <i>(out)</i> del escenario. Aunque pueda ser similar al <i>Zoom</i> <i>in/out</i>, el <i>dolly </i> mantiene el foco y el efecto generado aporta mayor dinamismo, profundidad y potencia las perspectivas. (CÁMARA, 2006)

          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img25.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num2.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 <i>Zoom</i> <i>in/out</i>
              p.mb-0 La cámara permanece estática pero el lente se abre o cierra, causando que los objetos se acerquen o se alejen. (ACEITUNO, 2010).                  
          
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img26.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num3.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 <i>Dolly</i> <i>Zoom</i> o efecto vértigo
              p.mb-0 Es un efecto combinado entre el desplazamiento de la cámara hacia adelante o hacia atrás (<i>Dolly</i>) con un efecto óptico de zoom.<br>Desde una búsqueda simple en Internet o a través del material complementario puede visualizar un ejemplo propuesto por <b><i>TRNGL Entertainment</i> (2020), <i>Dolly</i> <i>Zoom</i> (El efecto vértigo) | Curso de Cine</b>.                  
          
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img27.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num4.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Panorámica / <i>Pan</i>
              p.mb-0 La cámara permanece anclada en un punto y gira sobre su propio eje, de derecha a izquierda o viceversa.
                            
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img28.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num5.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 <i>Tild up/down</i>
              p.mb-0 La cámara permanece anclada y sube o baja en el eje vertical.
                  
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img29.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num6.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 <i>Travelling</i>
              p.mb-4 Es el desplazamiento de la cámara sobre un vehículo (rieles, grúa). Existen varios tipos (MARQUÈS, 1995):
              p.mb-0 <b>Lateral:</b> para acompañar al personaje cuando se desplaza.<br><b>Ascendente / descendente:</b> el movimiento es hacia arriba o hacia abajo.<br><b>Circular:</b> desplazamiento alrededor del personaje
                            
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img30.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num7.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0  <i>Shake</i>
              p.mb-0 Temblor en la cámara que es originado por un golpe violento al personaje o el escenario. Pueden dar sensación de un temblor, la caída de algo muy pesado o una explosión. (CÁMARA, 2006)                  
          
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img31.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num8.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Barrido/Zip Pan
              p.mb-0 Es una panorámica o travelling corta que se realiza a gran velocidad, causando que los objetos se vean borrosos. Se usa como transición entre dos encuadres o para mostrar un repentino cambio de punto de vista. (CÁMARA, 2006)                  

        .row.justify-content-center.mb-0
          .col-10
            .cajon.color-primario.p-4
              p.mb-5 Puede verificar desde una búsqueda en <i>internet</i> o desde el material complementario algunos de los siguientes vídeos en los cuales se presentan ejemplos de los diferentes planos, ángulos y movimientos de cámara.
              .row.justify-content-center.mb-0
                .col-10
                  a.t1.anexo.mb-4(href="https://www.youtube.com/watch?v=AN2I1CTn3rY" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/link.svg")
                    .anexo__texto
                      p <b>Ejemplo.</b> La ciencia del Cine (2018), Planos y Movimientos de Cámara I.

                  a.t1.anexo.mb-4(href="https://www.youtube.com/watch?v=ILRjN0b30Pc" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/link.svg")
                    .anexo__texto
                      p <b>Ejemplo.</b> La ciencia del Cine (2019), Plano y Movimientos de Cámara II: Angulación.

                  a.t1.anexo.mb-4(href="https://www.youtube.com/watch?v=dBPjG2YipY4" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/link.svg")
                    .anexo__texto
                      p <b>Ejemplo.</b> La ciencia del Cine (2020), Plano y Movimientos de Cámara III: Puntos de vista y movimientos. 
          
      .row(numero="7" titulo="Composición")
        p.mb-4 Hace referencia a las diferentes opciones de distribución de los elementos que hacen parte de una escena o imagen dentro del encuadre.
        p.mb-5 La tarea del director es orientar o dirigir la atención de la audiencia hacia lo esencial, teniendo presente que son pocos segundos los que tiene el espectador para apreciar y entender cada plano. Para este fin, se vale de reglas de composición.
        SlyderA.pb-4
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img32.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num1.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Regla de tercios
                  p.mb-0 El encuadre se divide en tres partes iguales, horizontal y verticalmente (ver imagen A). Los puntos donde se interceptan las líneas (puntos de color de la imagen A) son los puntos de mayor interés de la composición, por tal motivo, los elementos deberán disponerse en esos puntos o lo más cerca posible de ellos. La distribución en tercios rompe la simetría que produce la composición en el centro (comparar imagen A y B) (<i>BANCROFT</i>, 2012).              
          
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img33.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num2.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Líneas 
                  p.mb-0 La dirección que toman las líneas en el encuadre ayuda a dirigir la vista del espectador. Las líneas verticales transmiten rectitud y orden, las horizontales ofrecen reposo y estabilidad, las curvas son sensualidad y las oblicuas desequilibrio y movimiento (CÁMARA, 2006).              
          
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img34.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num3.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Luz
                  p.mb-0 El ojo del espectador se dirigirá a los objetos o zona que se encuentre iluminada, mientras que las zonas oscuras perderán importancia.
          
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img35.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num4.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Enfoque selectivo
                  p.mb-0 Se enfoca un elemento del encuadre y los demás aparecerán borrosos. Es un efecto similar a como los seres humanos ven.
                        
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img36.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num5.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Color
                  p.mb-0 Se hace uso de la teoría del color con el fin de destacar un objeto dentro de muchos.              
          
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img37.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num6.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0  Composición áurea o golden ratio 
                  p.mb-0 Distribución basada en la serie de <i>Fibonacci</i> (matemáticas). Es un patrón que está presente en la naturaleza.                        
          
      .row(numero="8" titulo="Continuidad")
        p.mb-5 Más conocido como <i>raccord</i>. Tiene que ver con la relación que existe entre los diferentes planos a fin de que no se pierda la sensación de unidad. Cada plano de una escena, similar a una cadena, tendrá que servir de base para el siguiente.
        .row.justify-content-center.mb-0
          .col-10
            .cajon.color-primario.p-4
              p.mb-5 Se debe tener en cuenta la continuidad en espacio, tiempo, iluminación y vestuario. Uno de los principales es el espacio, el cual nos dice que, si un personaje sale de plano por un lado del encuadre, en el siguiente plano deberá entrar por el lado contrario. (MARQUÈS, 1995).
              .row.justify-content-center.mb-0
                .col-10
                  a.t1.anexo.mb-4(href="https://www.youtube.com/watch?v=ew5WzvL-fEk" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/link.svg")
                    .anexo__texto
                      p <b>Ejemplo.</b> La ciencia del Cine (2020), Elementos del cine: CONTINUIDAD + ERRORES en películas.
      .row(numero="9" titulo="Ritmo")
        p.mb-5 Está al servicio de la narrativa y depende directamente de la sensación que se quiere transmitir. Dentro de un audiovisual se puede tener tanto un ritmo dinámico, como un ritmo suave. Como su nombre lo indica, el ritmo dinámico se caracteriza por mayor cambio de planos de corta duración (MS, CU) lo cual crea una sensación de acción y movimiento. En contraste, el ritmo suave suele tener planos de mayor duración y potencia la lectura de las expresiones y pensamientos de los personajes. La clave estará entonces, en lograr un equilibrio entre estos dos tipos de ritmo (MARQUÈS, 1995).
        .row.justify-content-center.mb-0
          .col-10
            .cajon.color-primario.p-4
              p.mb-5 El ritmo está condicionado entonces por el ritmo interno del plano, dado por las acciones que en él suceden, así como también por el encuadre, la variación de centros de interés, el movimiento de la cámara o del zoom, y la combinación con los planos anteriores y posteriores (Fernández, F. Martínez, J. 1999).
              .row.justify-content-center.mb-0
                .col-10
                  a.t1.anexo.mb-4(href="https://www.youtube.com/watch?v=YwJaz7tXq1Y" target="_blank")
                    .anexo__icono
                      img(src="@/assets/curso/link.svg")
                    .anexo__texto
                      p <b>Ejemplo.</b> Ritmo narrativo: ¿qué es y por qué es tan importante? 
      .row(numero="10" titulo="Elipsis y transiciones")
        p.mb-4 Este elemento se equipará a los signos de puntuación en la escritura. La elipsis es la omisión del tiempo muerto con el objetivo de mostrar solo aquellas acciones relevantes, significativas y atractivas, por cualquier forma de transición. Podemos pasar de hoy a mañana, al próximo siglo o a los próximos milenios (Fernández, F. Martínez, J. 1999). Es la herramienta narrativa que ayuda a pasar de una secuencia a otra para avanzar en la historia en tiempo y espacio (CÁMARA, 2006).
        p.mb-5 Una elipsis se realiza mediante el uso de transiciones, las cuales son variadas y cada una posee su propio valor expresivo.
        SlyderA.pb-4
          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img38.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num1.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Corte
                  p.mb-0 Conocido como corte directo o seco. Es el paso limpio de un plano a otro. Sugiere continuidad narrativa e imprime un carácter dinámico y natural. Se entiende que no transcurre tiempo entre las escenas que se conectan. Se debe prestar especial atención al <i>raccord</i> visual, con el fin que el espectador no note el recurso.                  

          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img39.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num2.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Fundido encadenado / cross-dissolve
                  p.mb-0 La transición entre dos escenas es gradual y el tiempo que tome este desvanecimiento indicará la intensidad del cambio. Suele usarse para cambios de tiempo no muy largos, mostrar al mismo personaje en otras situaciones o llegar a mostrar saltos en el tiempo al pasado o posible futuro. Este recurso suele combinarse con un efecto de agua y así vender una idea irreal, imaginación o sueño. Luego del corte directo, es el recurso más usado.                  

          .row.justify-content-center.mb-0
            .col-10
              figure.mb-4
                img(src='@/assets/curso/tema1/img40.svg') 
              .row.justify-content-center.pb-2.mb-4.num-bor
                .col-1.pe-0
                  figure.num
                    img(src='@/assets/curso/num3.svg') 
                .col-11.ps-0.pt-2
                  h3.mb-0 Fundido a negro o de negro / <i>Fade in-out</i>
                  p.mb-0 El plano se oscurece hasta llenar la pantalla de negro, o de negro gradualmente deja ver la imagen del siguiente plano. Se utiliza para inicios y finales de secuencias, o también para transmitir el paso de un periodo largo de tiempo (CÁMARA, 2006).
                  
    Separador     

</template>

<script>
export default {
  name: 'Tema1',
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
