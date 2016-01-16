import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducer';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
