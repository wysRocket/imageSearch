export const SET_QUERY = 'SET_QUERY'
export const GET_PHOTOS = 'GET_PHOTOS'
export const SET_PHOTOS = 'SET_PHOTOS'
export const SAVE_SEARCH = 'SAVE_SEARCH'

const handlers = {
  DEFAULT: state => state,
  [SET_PHOTOS]: (state, {payload}) => ({
    ...state,
    photos: {...state.photos, hits: [...state.photos.hits, ...payload.photos]},
  }),
}

export const imgSearchReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
