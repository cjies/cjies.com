import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/index';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
