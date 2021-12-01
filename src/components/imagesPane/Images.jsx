import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {fetchImages} from 'redux/slices/images.asyncActions'
import {CSSTransition} from 'react-transition-group'

import Loading from '../Loading'
import InfiniteScroll from 'react-infinite-scroller'
import {ReactComponent as Heart} from 'assets/heart.svg'
import {ReactComponent as EmptyHeart} from 'assets/empty.svg'

import {Image, CardsContainer, OverlayWrapper} from './Images.styles'

const Images = React.memo(({page, setPage, value, ...props}) => {
  const dispatch = useDispatch()
  const {
    allPhotos: {totalHits, hits},
    isLoading,
    inputInitialPosition,
  } = useSelector(({images}) => images)

  const getMorePhotos = async () => {
    setPage(page + 1, 'replaceIn')
    dispatch(fetchImages(value?.trim(), page))
  }

  if (isLoading) return <Loading data-testid={`${props.testID}-loading`} />

  return (
    <>
      <CSSTransition in={inputInitialPosition} classNames='slide' timeout={300} unmountOnExit>
        <OverlayWrapper>
          <InfiniteScroll
            pageStart={page}
            //        loadMore={getMorePhotos}
            hasMore={totalHits > hits?.length}
            threshold={100}
          >
            <CardsContainer $minWidth='220px'>
              {hits?.map((picture, index) => (
                <div key={`${picture.id}-${index}`}>
                  <Image src={picture?.webformatURL} testID={props.testID} />
                  <EmptyHeart className='position-relative mt-3 ml-2' />
                </div>
              ))}
            </CardsContainer>
          </InfiniteScroll>
        </OverlayWrapper>
      </CSSTransition>
    </>
  )
})

Images.displayName = 'ImagesPane'

export default Images
