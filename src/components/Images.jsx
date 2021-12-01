import React, {useRef, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {fetchImages} from 'redux/slices/images.asyncActions'

import Loading from './Loading'
import Figure from 'react-bootstrap/Figure'
import InfiniteScroll from 'react-infinite-scroller'

const Images = () => {
  const pageNumber = useRef(1)
  const dispatch = useDispatch()
  const {allPhotos: images} = useSelector(({images}) => images)

  const getMorePhotos = async () => {
    pageNumber.current++
    dispatch(fetchImages({page: pageNumber.current}))
  }

  if (!images) {
    return
  }

  return (
    <div>
      <InfiniteScroll
        pageStart={pageNumber}
        loadMore={getMorePhotos}
        hasMore={images?.allPhotos?.totalHits > images?.allPhotos?.hits?.length}
        threshold={100}
      >
        <div className='flexImagelist'>
          {images?.hits?.map((picture, index) => (
            <Figure key={`${picture.id}-${index}`}>
              <Figure.Image width={window.innerWidth / 3} src={picture?.previewURL} />
            </Figure>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Images
