export const initialStore = {
  menu: 1,
  projects: [
    {
      h3: 'Contador público',
      h4: 'Frontend React.js',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_232234.png`,
      tech: ['html', 'css', 'javascript', 'react.js', 'sass'],
      link: 'https://ldulivo.github.io/ezequiel_vargas/'
    },
    {
      h3: 'RomeoBeer',
      h4: 'FullStack Next.js y React.js',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_232354.png`,
      tech: ['html', 'css', 'javascript', 'react.js', 'next.js', 'sass'],
      link: 'https://romeobeer.vercel.app/'
    },
    {
      h3: 'Climatizacion',
      h4: 'Frontend React.js',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_232434.png`,
      tech: ['html', 'css', 'javascript', 'react.js', 'sass'],
      link: 'https://ldulivo.github.io/cristian_facello/'
    },
    {
      h3: 'eCommerce',
      h4: 'Oracle ONE Alura',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_232606.png`,
      tech: ['html', 'css', 'javascript', 'react.js', 'sass'],
      link: 'https://ldulivo.github.io/ecommerce_oracle_one/'
    },
    {
      h3: 'Formación Terapeuta',
      h4: 'Frontend React.js',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_232830.png`,
      tech: ['html', 'css', 'javascript', 'react.js'],
      link: 'https://ldulivo.github.io/formacion_terapeuta_transgeneracional/'
    },
    {
      h3: 'Cocktail',
      h4: 'Frontend React.js y Redux.js',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_232723.png`,
      tech: ['html', 'css', 'javascript', 'react.js', 'sass', 'redux.js'],
      link: 'https://ldulivo.github.io/the_cocktail_db/'
    },
    {
      h3: 'Poke Ahorcado',
      h4: 'Oracle ONE Alura',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_232947.png`,
      tech: ['html', 'css', 'javascript'],
      link: 'https://ldulivo.github.io/oracle_ONE_alura_challenge_sprint_02/'
    },
    {
      h3: 'Calculadora',
      h4: 'Freecodecamp',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_233253.png`,
      tech: ['html', 'css', 'javascript'],
      link: 'https://ldulivo.github.io/freecodecamp_calculator/'
    },
    {
      h3: 'Markdown',
      h4: 'Freecodecamp',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_233406.png`,
      tech: ['html', 'css', 'javascript', 'react.js'],
      link: 'https://ldulivo.github.io/freecodecamp_markdown_previewer/'
    },
    {
      h3: 'Temporizador',
      h4: 'Freecodecamp',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_233201.png`,
      tech: ['html', 'css', 'javascript', 'react.js'],
      link: 'https://ldulivo.github.io/freecodecamp_clock/'
    },
    {
      h3: 'Frases aleatorias',
      h4: 'Freecodecamp',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_233519.png`,
      tech: ['html', 'css', 'javascript'],
      link: 'https://ldulivo.github.io/freecodecampRandomPhrases/'
    },
    {
      h3: 'Caja de ritmos',
      h4: 'Freecodecamp',
      img: `${process.env.PUBLIC_URL}/static/Screenshot_20221006_233326.png`,
      tech: ['html', 'css', 'javascript'],
      link: 'https://ldulivo.github.io/freecodecamp_drum_machine/'
    },
  ],
  academic: {
    institute: [
      {
        header: '2022',
        h3: 'Desarrollo WEB Js/Node.Js Full Stack',
        h4: 'GOBIERNO DE LA CIUDAD DE BUENOS AIRES - MINISTERIO DE EDUCACIÓN.',
        footer: [
          'Ha logrado asimilar las bases de la programación, comprender el ecosistema del desarrollo web, leer e interpretar código propio y ajeno, identificar fallas en un proyecto e implementar las modificaciones necesarias para resolverlo. Como también resolver problemas y errores con autonomía, buscando información en documentación oficial, buscadores y foros afines a la comunidad siempre considerando las buenas prácticas en desarrollo y diseño web.'
        ],
        link: 'https://www.buenosaires.gob.ar/educacion/codocodo/el-programa',
        important: false
      },
      {
        header: '2012 - 2015',
        h3: 'Tecnicatura Universitaria en Redes de Datos y Telecomunicaciones',
        h4: 'Universidad Nacional de Cuyo - Argentina.',
        footer: [
          'Instalar, administrar y reparar servidores. Conocer los protocolos de red tales como TCP/IP, HTML, SSH, FTP, entre otros.',
          'Mantenimiento y administración de Redes de computadoras LAN y WAN.',
          'Seleccionar, instalar y especificar cableado e instalaciones para redes.'
        ],
        link: 'https://www.uncuyo.edu.ar/estudios/carrera/tecnicatura-universitaria-en-redes-de-datos-y-telecomunicaciones',
        important: true
      },
      {
        header: '2014',
        h3: 'Curso de redes de área amplia y encaminamiento.',
        h4: 'IUT Bayonne Pays Basque - Francia',
        footer: [
          'Conocimientos para desplegar una red mediante routers',
          'Protocolos IP.',
          'Redes de área amplia (WAN).'
        ],
        link: 'https://www.iutbayonne.univ-pau.fr/diplomes-universitaires/administration-systemes-reseaux',
        important: false
      },
    ],
    online: [
      {
        header: '2022',
        h3: 'Certificación en JavaScript Básico.',
        h4: 'OpenBootcamp',
        footer: [
          'Certificación de nivel básico de lenguaje de programación JavaScript'
        ],
        link: 'https://community.open-bootcamp.com/user/ldulivo/certificaciones/a1a2422e-9359-4194-9c8e-086eb6d1eb88',
        important: false
      },
      {
        header: '2022',
        h3: 'Certificación en HTML Y CSS Básico.',
        h4: 'OpenBootcamp',
        footer: [
          'Certificación de nivel básico de diseño con HTML y CSS'
        ],
        link: 'https://community.open-bootcamp.com/user/ldulivo/certificaciones/b6afae83-ae43-4187-a85b-9b705a7461e9',
        important: false
      },
      {
        header: '2022',
        h3: 'Formación Principiante en Programación F2T2 - ONE.',
        h4: 'Alura Latam',
        footer: [
          ''
        ],
        link: '',
        important: false
      },
      {
        header: '2022',
        h3: 'Front End Development Libraries.',
        h4: 'freeCodeCamp',
        footer: [
          'Developer Certification, representing approximately 300 hours of coursework.'
        ],
        link: 'https://www.freecodecamp.org/certification/ldulivo/front-end-development-libraries',
        important: false
      },
    ]
  }
}

const storeReducer = (state, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default storeReducer