import {combineReducers, configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import images from './slices/images.slice'
import * as notificationPopup from 'components/notificationPopup'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  images: images.reducer,
  [notificationPopup.name]: notificationPopup.reducer,
})

export default function createStore(initialState) {
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const middleware = [thunkMiddleware]
  const storeConfig = {
    reducer: persistedReducer,
    middleware,
  }

  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
  }

  if (initialState) {
    storeConfig.preloadedState = initialState
  }

  const store = configureStore(storeConfig)
  const persistor = persistStore(store)
  return {store, persistor}
}
