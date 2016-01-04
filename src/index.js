import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducers from './redux/reducers';

const store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
