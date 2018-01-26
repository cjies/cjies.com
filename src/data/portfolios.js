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
    coverImage: require('images/cover-tshirts.png'),
    detailImages: [
      require('images/detail-tshirts-1.jpg'),
      require('images/detail-tshirts-2.jpg'),
      require('images/detail-tshirts-3.jpg'),
    ],
  },
  {
    title: 'Jies Design',
    description: 'Creative Design',
    type: PORTFOLIO_TYPE.DESIGN,
    link: '',
    coverImage: require('images/cover-jies.png'),
    detailImages: [
      require('images/detail-jies-1.jpg'),
      require('images/detail-jies-2.jpg'),
      require('images/detail-jies-3.jpg'),
    ],
  },
  {
    title: 'The Silence of Senses',
    description: 'Portrait Photography',
    type: PORTFOLIO_TYPE.PHOTOGRAPHY,
    link:
      'http://www.flickr.com/photos/cj_photographys/sets/72157629518314548/',
    coverImage: require('images/cover-silence.png'),
    detailImages: [require('images/detail-silence.jpg')],
  },
  {
    title: 'eTop.org.tw',
    description: '工程科技推廣平台',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://www.etop.org.tw/',
    coverImage: require('images/cover-etop.png'),
    detailImages: [require('images/detail-etop.png')],
  },
  {
    title: 'git, let it flow!',
    description: '如何讓多人協作更加輕鬆，版控更加明確',
    type: PORTFOLIO_TYPE.PRESENTATION,
    link: 'https://speakerdeck.com/cjies/git-let-it-flow',
    coverImage: require('images/cover-gitflow.png'),
    detailImages: [],
    iframe:
      '<iframe src="//speakerdeck.com/player/785dcc3bce294ca4b6d6e51d8e1301f6" width="100%" height="370"></iframe>',
  },
  {
    title: 'myBook - Taiwan Mobile',
    description: 'E-Bookstore Website',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://mybook.taiwanmobile.com/book',
    coverImage: require('images/cover-mybook.png'),
    detailImages: [require('images/detail-mybook.png')],
  },
  {
    title: 'Run Far Outdoors',
    description: 'E-Commercial Website',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://www.rfo.com.tw/',

    coverImage: require('images/cover-runfar.png'),
    detailImages: [require('images/detail-runfar.png')],
  },
  {
    title: 'vital Official Document',
    description: 'Official Document Editing Platform',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://www.gsscloud.com/tw/vital/od',
    coverImage: require('images/cover-vitalOD.png'),
    detailImages: [require('images/detail-vitalOD.png')],
  },
  {
    title: 'Knoew',
    description: 'Book Searching and Locating System',
    type: PORTFOLIO_TYPE.WEB,
    link: '',
    coverImage: require('images/cover-knoew.png'),
    detailImages: [require('images/detail-knoew.png')],
  },
  {
    title: '60FPS',
    description: 'web performance tuning',
    type: PORTFOLIO_TYPE.PRESENTATION,
    link: 'http://slides.com/cjies/deck-1',
    coverImage: require('images/cover-60fps.png'),
    detailImages: [],
    iframe:
      '<iframe src="//slides.com/cjies/deck-1/embed" width="100%" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
  },
  {
    title: '老屋欣力',
    description: '講述台南老屋故事之記錄短片',
    type: PORTFOLIO_TYPE.PHOTOGRAPHY,
    link: 'https://www.youtube.com/watch?v=1_kf4KP_rV0',
    coverImage: require('images/cover-oldhouse.png'),
    detailImages: [],
  },
  {
    title: 'vital Payroll',
    description: 'Human Resource Software',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://www.gsscloud.com/tw/vital/payroll/',
    coverImage: require('images/cover-vitalPayroll.png'),
    detailImages: [require('images/detail-vitalPayroll.png')],
  },
  {
    title: 'NewRadar Mobile',
    description: 'Hybrid App Prototyping with ionic',
    type: PORTFOLIO_TYPE.WEB,
    link: 'https://dribbble.com/shots/2323982-Pull-To-Refresh',
    coverImage: require('images/cover-radarMobile.png'),
    detailImages: [require('images/detail-radarMobile.png')],
  },
  {
    title: 'es module bundling',
    description: 'with webpack 2',
    type: PORTFOLIO_TYPE.PRESENTATION,
    link: 'https://speakerdeck.com/cjies/es-module-bundling-with-webpack-2',
    coverImage: require('images/cover-esmodule.png'),
    detailImages: [],
    iframe:
      '<iframe src="//speakerdeck.com/player/1a5dfff74ee54ae38799a8acfa58bbbd" width="100%" height="370"></iframe>',
  },
  {
    title: 'ArtCenter @ NCKU',
    description: '成大藝術中心 藝文活動推廣平台',
    type: PORTFOLIO_TYPE.WEB,
    link: 'http://digitalarchives.artcenter.ncku.edu.tw/arts/',
    coverImage: require('images/cover-artcenter.png'),
    detailImages: [require('images/detail-artcenter.png')],
  },
];
