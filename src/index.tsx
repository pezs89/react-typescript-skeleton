import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import { configureStore } from './store';

const initialState = {}

ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <App />,
  </Provider>,
  document.querySelector('#root')
);