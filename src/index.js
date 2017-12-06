import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Behind the Scenes
// import { repository, author, version } from '../package.json';
// import CONSOLE_BANNER from './data/console_banner';

// console.info(`
//   ${CONSOLE_BANNER}
//   I <3 React~~~ Ｏ(≧▽≦)Ｏ
//   Page version: v${version}
//   Behind the scenes: ${repository.url}
//   Hiring me? ${author.email}
// `);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
