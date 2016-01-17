import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducer';

const store = createStore(reducers);

// Behind the Scenes
import { repository, author } from '../package.json';
import banner from '../static/data/banner.txt';
console.info(
  ' \n' +
  banner +
  ' \n' +
  'I <3 React~~~ Ｏ(≧▽≦)Ｏ \n' +
  'Behind the scenes: ' + repository.url + ' \n' +
  'Hiring me? ' + author.email
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
