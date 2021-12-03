export default {
  global: {
    componenteFormativo: '<i><i>storyboarding</i></i>',
    descripcionCurso:
      'El desarrollo audiovisual es un proceso estructurado que requiere planeación cuidadosa para lograr que la idea que se desea comunicar llegue adecuadamente al espectador, de ahí la importancia en conocer y apropiar conceptos esenciales de lenguaje audiovisual que potencien la narración de la historia y permitan desarrollar apropiadamente una propuesta gráfica mediante la creación de un <i>storyboard</i>, para así determinar si el planteamiento original se logra traducir adecuadamente a imágenes y por tanto, mantiene la esencia del mensaje.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      // {
      //   nombreRuta: 'introduccion',
      //   icono: 'fas fa-info',
      //   titulo: 'Introducción',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Lenguaje audiovisual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Guión técnico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas y formatos de <i>storyboarding</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Dibujo básico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Herramientas de dibujo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Bocetación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Perspectiva',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Abstracción y líneas de acción',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Tramas',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<i>Elevator pitch</i>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aceituno, Marcelo (2010). Seminario de producción multimedia. Secretaría de Posgrado. Universidad Nacional de Quilmes. Bernal.',
      link: 'http://libros.uvq.edu.ar/spm/42_lenguaje_audiovisual.html',
    },
    {
      referencia:
        'Bancroft, Tom (2012-2013). Character Mentor. Burlington, MA. EEUU: Focal Press.',
    },
    {
      referencia:
        'Bartolomé, A. (1987). Análisis de la producción y aplicación de programas audiovisuales didácticos. Tesis doctoral. Barcelona: Universitat de Barcelona. ',
      link: 'http://hdl.handle.net/10803/2360',
    },
    {
      referencia: 'BPlans. Noah Parsons.',
      link:
        'https://articles.bplans.com/the-7-key-components-of-a-perfect-elevator-pitch/',
    },
    {
      referencia:
        'Cámara Graells, Pere (1995). Introducción al lenguaje audiovisual. Recuperado el 10 de septiembre de 2020 en: ',
      link: 'http://peremarques.pangea.org/avmulti.htm#av',
    },
    {
      referencia:
        'Cámara, Sergi (2006). El dibujo animado. Barcelona, España: Parramón Ediciones, S.A. ',
    },
    {
      referencia:
        'Centro Audiovisual Rosario (CAR). (2011). Haciendo dibujitos en el fin del mundo, El libro de la Escuela para Animadores de Rosario. ',
      link:
        'https://openlibra.com/es/book/download/haciendo-dibujitos-en-el-fin-del-mundo ',
    },
    {
      referencia:
        'Dancyger, Ken, and Alvarez, José A. Traductor. Técnicas De Edición En Cine Y Video. Barcelona: Editorial Gedisa, 1999.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000079357 ',
    },
    {
      referencia:
        'Doucet, Ron, (2020). Drawing & Composition for visual storytelling. ',
      link: 'http://www.floobynooby.com/comp1.html#anchor ',
    },
    {
      referencia:
        'Fernández, F. y Martínez, J. (1999). Manual básico de lenguaje audiovisual y narrativa audiovisual. Barcelona, ESPAÑA: Paidós.',
    },
    {
      referencia:
        'Maldonado, M. (2018). Animatic – El Storyboard de Hoy. Blog Industria Animación. ',
      link:
        'https://www.industriaanimacion.com/2018/06/animatic-storyboard-de-hoy/ ',
    },
    {
      referencia:
        'Manrique, Ana. Dibujo. 9a Edición. ed. Barcelona: Parramón Ediciones, 2008. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000062633 ',
    },
    {
      referencia:
        'Novasur, Consejo Nacional de Televisión (CNTV). (2019). Manual de producción audiovisual. ',
      link: 'https://fliphtml5.com/ojfbf/bapc/basic ',
    },
    {
      referencia:
        'Simon, Mark (2007). Storyboard Motion in Art. Burlington, MA, EEUU: Focal Press.',
    },
  ],
  glosario: [
    {
      termino: 'Perpendicular',
      significado:
        'Es un concepto geométrico que hace referencia a la posición de un plano o línea con respecto a otro al momento en que se encuentran presentando la condición invariable de generar un ángulo de 90° entre sí.',
    },
    {
      termino: 'Punto de fuga',
      significado:
        'es un punto que se ubica sobre la línea del horizonte y desde donde se proyectan líneas que permiten la representación de objetos en perspectiva.',
    },
  ],
  complementario: [
    {
      texto: 'Novasur y CNTV. (2019). Manual de producción audiovisual.',
      tipo: 'Página web',
      link: 'https://fliphtml5.com/ojfbf/bapc/basic  ',
    },
    {
      texto: 'aprendecine.com (2017). Salto de eje y eje de acción en el cine.',
      tipo: 'Página web',
      link: 'https://aprendercine.com/salto-de-eje/ ',
    },
    {
      texto:
        'Doucet, Ron, (2020). Drawing & Composition for visual storytelling',
      tipo: 'Página web',
      link: 'http://www.floobynooby.com/comp1.html#anchor ',
    },
    {
      texto:
        'Ministerio de educación Argentina (2011), Medios audiovisuales, Animación en el aula.',
      tipo: 'Pdf',
      descarga: '/downloads/animacion_web.pdf',
    },
    {
      texto:
        'Brad Bird on how to compose shots for storyboards Y layout artists',
      tipo: 'Pdf',
      descarga: '/downloads/Brad_Bird_notes_to_compose.pdf',
    },
    {
      texto:
        'Jiménez, Oscar, (2017), Diseña tus personajes de animación con arte',
      tipo: 'Video',
      link: 'https://vimeo.com/91390586',
    },
    {
      texto:
        'TRNGL Entertainment (2020), Dolly Zoom (El efecto vértigo) | Curso de Cine',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hqcyg-g8_Ok&ab_channel=TRNGL',
    },
    {
      texto: 'La ciencia del Cine (2018). Planos y movimientos de Cámara I',
      tipo: 'Video',
      link: 'https://youtu.be/AN2I1CTn3rY',
    },
    {
      texto:
        'La ciencia del Cine (2019). Plano y Movimientos de Cámara II: Angulación.',
      tipo: 'Video',
      link: 'Vídeo	https://youtu.be/ILRjN0b30Pc',
    },
    {
      texto:
        'La ciencia del Cine (2020). Plano y Movimientos de Cámara III: Puntos de vista y movimientos.',
      tipo: 'Video',
      link: 'https://youtu.be/dBPjG2YipY4',
    },
    {
      texto:
        'La ciencia del Cine (2020), Elementos del cine: CONTINUIDAD + ERRORES en películas',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ew5WzvL-fEk&ab_channel=LacienciadelCine',
    },
    {
      texto:
        'The Damn Beast (2020), Ritmo narrativo: ¿qué es y por qué es tan importante? | el laberinto #005.	',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YwJaz7tXq1Y',
    },
    {
      texto:
        'AprenderCine.com (2017), Salto de eje y eje de acción en el cine.',
      tipo: 'Página web',
      link: 'https://aprendercine.com/salto-de-eje/ ',
    },
    {
      texto:
        'Toby Kearton (2016),Taxi Driver (1976) | Scene and Storyboard Comparison',
      tipo: 'Video',
      link: 'https://youtu.be/Ydl6wQnEQYg ',
    },
    {
      texto:
        'Floobynooby (2020), Drawing & Composition for visual storytelling.',
      tipo: 'Página web',
      link: 'http://www.floobynooby.com/comp1.html#anchor',
    },
    {
      texto: 'AllahOfw0ne (2006), "The untimely death of Pudge the fish".',
      tipo: 'Video',
      link: 'https://youtu.be/LxmT-zQc1GQ ',
    },
    {
      texto: 'Kevin Parry (2010), The Arctic Circle - Storyboard Comparison.',
      tipo: 'Video',
      link: 'https://vimeo.com/12153179 ',
    },
    {
      texto: 'Goat Zod (2019), Avengers 2 Age of Ultron Previs 2',
      tipo: 'Video',
      link: 'https://youtu.be/cG0DBZPRkTQ ',
    },
    {
      texto:
        'Negocios y Empresa (2018, Cómo hacer un Elevator Pitch que enamore al Inversor.',
      tipo: 'Video',
      link: 'https://youtu.be/EsAkvzIoEvc ',
    },
    {
      texto:
        'IurisdocTV, (2013), Elevator pitch. Tienes 20 segundos - eduCaixa',
      tipo: 'Video',
      link: 'https://youtu.be/2b3xG_YjgvI ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'John Alexander García Ángel',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Andrés Martin',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Eulises Orduz Amezquita ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño   ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
