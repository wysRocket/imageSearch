import {createSlice} from '@reduxjs/toolkit'
import * as asyncActions from './images.asyncActions'

const images = createSlice({
  name: 'images',
  initialState: {
    allPhotos: [],
    isLoading: false,
    queryWord: '',
  },
  reducers: {
    // synchronous actions
    toggleIsLoading(state, {payload}) {
      state.isLoading = payload
    },
    persistQueryWord(state, {payload}) {
      state.queryWord = payload
    },
  },
  extraReducers: {
    // asynchronous actions
    [asyncActions.fetchImages.fulfilled]: (state, action) => {
      state.allPhotos = action?.payload
    },
  },
})

export const {toggleIsLoading, persistQueryWord} = images.actions

export default images
