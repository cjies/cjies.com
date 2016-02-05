import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducer';

const store = createStore(reducers);

// Behind the Scenes
import { repository, author, version } from '../package.json';
import banner from '../static/data/banner.txt';
console.info(`
  ${banner}
  I <3 React~~~ Ｏ(≧▽≦)Ｏ
  Page version: v${version}
  Behind the scenes: ${repository.url}
  Hiring me? ${author.email}
`);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
