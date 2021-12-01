import {createAsyncThunk} from '@reduxjs/toolkit'

import {imgSearchAPI} from 'api/api'

import {toggleIsLoading} from './images.slice'
import {notifyError} from 'components/notificationPopup'

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (payload, {getState, dispatch}) => {
    dispatch(toggleIsLoading(true))

    return await imgSearchAPI
      .fetchPhotos(payload)
      .catch(err => dispatch(notifyError(err?.message || 'Something went wrong...')))
      .finally(() => dispatch(toggleIsLoading(false)))
  }
)
