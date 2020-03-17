import React, {useReducer} from 'react'
import {ImgSearchContext} from './imgSearchContext'
import {imgSearchReducer} from './imgSearchReducer'
import {imgSearchAPI} from './../api/api';
import {SET_PHOTOS, GET_PHOTOS, SET_QW, SAVE_SEARCH} from './imgSearchReducer'

export const ImgSearchState = ({children}) => {
  const initialState = {
    qw: '',
    loading: false,
    photos: { },
    imgHistory: [ ],
  }
  const [state, dispatch] = useReducer(imgSearchReducer, initialState)

  const setPhotos = async(qw) => {
    let response = await imgSearchAPI.getPhotos(qw)
    dispatch({type: SET_PHOTOS, payload: response.data})
    saveSearch(qw, response.data.total)
  }
  const setQW = (qw) => dispatch({type: SET_QW, qw})

  const getPhotos = async(qw, page = 1) => {
    let response = await imgSearchAPI.getPhotos(qw, page)
 //   console.log('getPhotos',response.data)
    dispatch({type: GET_PHOTOS, photos:response.data.hits})
  }
  
  const saveSearch = (title, totalHits) => {
    const note = {title,
      date: new Date().toJSON(),
      totalHits
    }
    console.log(note)
    dispatch({type: SAVE_SEARCH, note})
  }

  return (
    <ImgSearchContext.Provider value={{ setPhotos, getPhotos, 
      setQW, 
      loading: state.loading, 
      photos: state.photos,
      imgHistory: state.imgHistory,
      qw: state.qw}}>
      {children}
    </ImgSearchContext.Provider>
  )
}
