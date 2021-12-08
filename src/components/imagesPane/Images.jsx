import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {fetchImages} from 'redux/slices/images.asyncActions'
import {addToFavorites} from 'redux/slices/images.slice'
import {CSSTransition} from 'react-transition-group'

import Loading from '../Loading'
import InfiniteScroll from 'react-infinite-scroll-component'
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

  const fetchMoreData = () => {
    setPage(page + 1, 'replaceIn')
    dispatch(fetchImages({qw: value?.trim(), page}))
  }

  return isLoading ? (
    <Loading data-testid={`${props.testID}-loading`} />
  ) : (
    <CSSTransition in={inputInitialPosition} classNames='slide' timeout={300} unmountOnExit>
      <OverlayWrapper id='scrollableDiv'>
        <InfiniteScroll
          dataLength={hits?.length || 0}
          next={fetchMoreData}
          hasMore={totalHits > hits?.length}
          loader={<h4>Loading...</h4>}
        >
          <CardsContainer $minWidth='220px'>
            {hits?.map((picture, index) => (
              <div key={`${picture.id}-${index}`}>
                <Image src={picture?.webformatURL} testID={props.testID} />
                {picture.favorite ? (
                  <Heart
                    className='position-relative mt-3 ml-2'
                    onClick={() => dispatch(addToFavorites(picture.id))}
                  />
                ) : (
                  <EmptyHeart
                    className='position-relative mt-3 ml-2'
                    onClick={() => dispatch(addToFavorites(picture.id))}
                  />
                )}
              </div>
            ))}
          </CardsContainer>
        </InfiniteScroll>
      </OverlayWrapper>
    </CSSTransition>
  )
})

Images.displayName = 'ImagesPane'

export default Images
