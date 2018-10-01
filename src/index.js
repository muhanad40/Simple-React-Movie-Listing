require('whatwg-fetch');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

require('./styles/main.scss');
import store from "./store";
import AppContainer from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
