export const SET_QW = 'SET_QW';
export const GET_PHOTOS = 'GET_PHOTOS';
export const SET_PHOTOS = 'SET_PHOTOS';
export const SAVE_SEARCH = 'SAVE_SEARCH';

export const imgSearchReducer = (state, action) => {
    switch (action.type) {
        case GET_PHOTOS: {
            return {...state, photos: {...state.photos, hits: 
                [...state.photos.hits, ...action.photos ]}}
        }
        case SET_PHOTOS: {
            return {...state, photos: action.payload }
        }
        case SET_QW: {
            return {...state, qw: action.qw }
        }
        case SAVE_SEARCH: {
            return {...state, imgHistory: [...state.imgHistory,
            action.note]}
        }
                
        default: return state;
}}

