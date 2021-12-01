import {createSlice} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import * as asyncActions from './images.asyncActions'

const images = createSlice({
  name: 'images',
  initialState: {
    allPhotos: {},
    isLoading: false,
    inputInitialPosition: false,
  },
  reducers: {
    // synchronous actions
    toggleIsLoading(state, {payload}) {
      state.isLoading = payload
    },
    clearResults(state, {payload}) {
      storage.removeItem('persist:root')
      state.isLoading = false
      state.allPhotos = {}
      state.inputInitialPosition = false
    },
    inputInitialPosition(state, {payload}) {
      state.inputInitialPosition = payload
    },
  },
  extraReducers: {
    // asynchronous actions
    [asyncActions.fetchImages.fulfilled]: (state, action) => {
      state.allPhotos = action?.payload
      state.inputInitialPosition = true
    },
  },
})

export const {toggleIsLoading, clearResults} = images.actions

export default images
