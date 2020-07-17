import './polyfills'
import React from 'react'
import ReactDOM from 'react-dom'
import Popper from 'popper.js'
import { Provider } from 'react-redux'
import { login } from './actions/auth'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer'
import { setAuthorizationToken } from './utils/functions'
import App from './App';
import * as serviceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if(localStorage.token && localStorage.user){
  setAuthorizationToken(localStorage.token);
  store.dispatch(login(JSON.parse(localStorage.user)))
}

// Required to enable animations on dropdowns/tooltips/popovers
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
