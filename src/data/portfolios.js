const PORTFOLIO_TYPE = {
  ALL: 'ALL',
  WEB: 'WEB',
  DESIGN: 'DESIGN',
  PRESENTATION: 'PRESENTATION',
  PHOTOGRAPHY: 'PHOTOGRAPHY',
};

export const PORTFOLIO_TYPES = Object.values(PORTFOLIO_TYPE);

export default [
  {
    title: 'T-shirt Design',
    description: 'NCKU CSIE T-shirts',
    type: PORTFOLIO_TYPE.DESIGN,
    link: '',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-tshirts.png',
      details: [
        'img/detail-tshirts-1.jpg',
        'img/detail-tshirts-2.jpg',
        'img/detail-tshirts-3.jpg',
      ],
    },
  },
  {
    title: 'Jies Design',
    description: 'Creative Design',
    type: PORTFOLIO_TYPE.DESIGN,
    link: '',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-jies.png',
      details: [
        'img/detail-jies-1.jpg',
        'img/detail-jies-2.jpg',
        'img/detail-jies-3.jpg',
      ],
    },
  },
  {
    title: 'The Silence of Senses',
    description: 'Portrait Photography',
    type: PORTFOLIO_TYPE.PHOTOGRAPHY,
    link:
      'http://www.flickr.com/photos/cj_photographys/sets/72157629518314548/',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-silence.png',
      details: ['img/detail-silence.jpg'],
    },
  },
  {
    title: 'eTop.org.tw',
    description: '工程科技推廣平台',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://www.etop.org.tw/',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-etop.png',
      details: ['img/detail-etop.png'],
    },
  },
  {
    title: 'git, let it flow!',
    description: '如何讓多人協作更加輕鬆，版控更加明確',
    type: PORTFOLIO_TYPE.PRESENTATION,
    link: 'https://speakerdeck.com/cjies/git-let-it-flow',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-gitflow.png',
      details: [],
    },
    iframe:
      '<iframe src="//speakerdeck.com/player/785dcc3bce294ca4b6d6e51d8e1301f6" width="100%" height="370"></iframe>',
  },
  {
    title: 'myBook - Taiwan Mobile',
    description: 'E-Bookstore Website',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://mybook.taiwanmobile.com/book',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-mybook.png',
      details: ['img/detail-mybook.png'],
    },
  },
  {
    title: 'Run Far Outdoors',
    description: 'E-Commercial Website',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://www.rfo.com.tw/',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-runfar.png',
      details: ['img/detail-runfar.png'],
    },
  },
  {
    title: 'vital Official Document',
    description: 'Official Document Editing Platform',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://www.gsscloud.com/tw/vital/od',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-vitalOD.png',
      details: ['img/detail-vitalOD.png'],
    },
  },
  {
    title: 'Knoew',
    description: 'Book Searching and Locating System',
    type: PORTFOLIO_TYPE.WEB,
    link: '',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-knoew.png',
      details: ['img/detail-knoew.png'],
    },
  },
  {
    title: '60FPS',
    description: 'web performance tuning',
    type: PORTFOLIO_TYPE.PRESENTATION,
    link: 'http://slides.com/cjies/deck-1',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-60fps.png',
      details: [],
    },
    iframe:
      '<iframe src="//slides.com/cjies/deck-1/embed" width="100%" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
  },
  {
    title: '老屋欣力',
    description: '講述台南老屋故事之記錄短片',
    type: PORTFOLIO_TYPE.PHOTOGRAPHY,
    link: 'https://www.youtube.com/watch?v=1_kf4KP_rV0',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-oldhouse.png',
      details: [],
    },
  },
  {
    title: 'vital Payroll',
    description: 'Human Resource Software',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://www.gsscloud.com/tw/vital/payroll/',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-vitalPayroll.png',
      details: ['img/detail-vitalPayroll.png'],
    },
  },
  {
    title: 'NewRadar Mobile',
    description: 'Hybrid App Prototyping with ionic',
    type: PORTFOLIO_TYPE.WEB,
    link: 'https://dribbble.com/shots/2323982-Pull-To-Refresh',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-radarMobile.png',
      details: ['img/detail-radarMobile.png'],
    },
  },
  {
    title: 'es module bundling',
    description: 'with webpack 2',
    type: PORTFOLIO_TYPE.PRESENTATION,
    link: 'https://speakerdeck.com/cjies/es-module-bundling-with-webpack-2',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-esmodule.png',
      details: [],
    },
    iframe:
      '<iframe src="//speakerdeck.com/player/1a5dfff74ee54ae38799a8acfa58bbbd" width="100%" height="370"></iframe>',
  },
  {
    title: 'ArtCenter @ NCKU',
    description: '成大藝術中心 藝文活動推廣平台',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://digitalarchives.artcenter.ncku.edu.tw/arts/',
    modalBackdropColor: '',
    image: {
      cover: 'img/cover-artcenter.png',
      details: ['img/detail-artcenter.png'],
    },
  },
];
