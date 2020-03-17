import React, {useEffect, useContext} from 'react';
import { ImgSearchContext } from './../context/imgSearchContext';
import Loading from './Loading';
import Figure from 'react-bootstrap/Figure'
import InfiniteScroll from 'react-infinite-scroller';
import HistoryTable from './HistoryTable';

let page = 1;
const Images = () => {
  const imgSearch = useContext(ImgSearchContext)

  if (!imgSearch.photos.hits) {return (<HistoryTable />)}

const getMorePhotos = async () => {
    page++;
    imgSearch.getPhotos(imgSearch.qw, page)
    }

return (
  <div>
    <HistoryTable imgHistory={imgSearch.imgHistory}/>
    <InfiniteScroll 
      pageStart={page} 
      loadMore={getMorePhotos}
      hasMore={imgSearch.photos.totalHits > imgSearch.photos.hits.length} 
      threshold={100}>
        <div className="flexImagelist">
            {imgSearch.photos.hits.map((i, index) =>
            <Figure key={index}>
                <Figure.Image width={window.innerWidth / 3} src={i.previewURL} />
            </Figure>
            )}
        </div>
    </InfiniteScroll>
</div>
)
}

export default Images;