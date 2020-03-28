import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App/index';
import * as serviceWorker from './serviceWorker';

// Behind the Scenes
import { repository, author, version } from '../package.json';
import CONSOLE_BANNER from './data/console_banner';

console.info(`
  ${CONSOLE_BANNER}
  I <3 React~~~ Ｏ(≧▽≦)Ｏ
  Page version: v${version}
  Behind the scenes: ${repository.url}
  Hiring me? ${author.email}
`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
