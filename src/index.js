import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(ReduxThunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />    
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
document.querySelector('#manifest').setAttribute('href', `${process.env.BASENAME}manifest.json`);

if (module.hot) {
  module.hot.accept();
}