import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import createStore from 'redux/createStore'
import {QueryParamProvider} from 'use-query-params'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import App from 'App'
import LoadingComponent from 'components/Loading'
import * as serviceWorker from 'serviceWorker'

import './index.css'

const {store, persistor} = createStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<LoadingComponent isAbsolute />}>
        <Router>
          <QueryParamProvider ReactRouterRoute={Route}>
            <App />
          </QueryParamProvider>
        </Router>
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
