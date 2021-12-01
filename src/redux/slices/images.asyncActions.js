import {createAsyncThunk} from '@reduxjs/toolkit'

import {imgSearchAPI} from 'api/api'

import {toggleIsLoading, persistQueryWord} from './images.slice'
import {notifyError} from 'components/notificationPopup'

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (payload, {getState, dispatch}) => {
    const {qw = '', page = 1} = payload
    dispatch(toggleIsLoading(true))
    qw && dispatch(persistQueryWord(qw))

    return await imgSearchAPI
      .fetchPhotos(qw || getState.images.queryWord, page)
      .catch(err => dispatch(notifyError(err?.message || 'Something went wrong...')))
      .finally(() => dispatch(toggleIsLoading(false)))
  }
)
