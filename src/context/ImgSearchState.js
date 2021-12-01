import React, {useReducer} from 'react'
import {ImgSearchContext} from './imgSearchContext'
import {imgSearchReducer} from './imgSearchReducer'
import {imgSearchAPI} from './../api/api'
import {SET_PHOTOS} from './imgSearchReducer'

export const ImgSearchState = ({children}) => {
  const [state, dispatch] = useReducer(imgSearchReducer, {photos: {}})

  const getPhotos = async (qw, page = 1) => {
    const response = await imgSearchAPI.fetchPhotos(qw, page).catch(err => console.log(err))
    response && dispatch({type: SET_PHOTOS, photos: response.data.hits})
  }

  return (
    <ImgSearchContext.Provider
      value={{
        getPhotos,
        loading: state.loading,
        photos: state.photos,
      }}
    >
      {children}
    </ImgSearchContext.Provider>
  )
}
