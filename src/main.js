import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import App from './app'

import { rootReducer, rootEpic } from './modules'

const epicMiddleware = createEpicMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, logger)
)

epicMiddleware.run(rootEpic)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
