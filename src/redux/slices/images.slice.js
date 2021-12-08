import {createSlice} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import * as asyncActions from './images.asyncActions'
import {isEmpty} from 'lodash'

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
    addToFavorites(state, {payload}) {
      const pictureIndex = state.allPhotos.hits.findIndex(imgObj => imgObj.id === payload)
      state.allPhotos.hits[pictureIndex].favorite = !state.allPhotos.hits[pictureIndex].favorite
    },
  },
  extraReducers: {
    // asynchronous actions
    [asyncActions.fetchImages.fulfilled]: (state, {payload}) => {
      state.allPhotos = isEmpty(state.allPhotos)
        ? payload
        : {...state.allPhotos, hits: state.allPhotos.hits.concat(payload.hits)}
      state.inputInitialPosition = true
    },
  },
})

export const {toggleIsLoading, clearResults, addToFavorites} = images.actions

export default images
