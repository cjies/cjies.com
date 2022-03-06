import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/index';
import reportWebVitals from './reportWebVitals';

// Behind the Scenes
import { BANNER, REPO_URL } from './data/console_banner';
import { MY_EMAIL } from './data/about_me';

console.info(`
  ${BANNER}
  I <3 React~~~ Ｏ(≧▽≦)Ｏ
  Behind the scenes: ${REPO_URL}
  Hiring me? ${MY_EMAIL}
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
