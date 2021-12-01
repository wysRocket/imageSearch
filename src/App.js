import {useSelector} from 'react-redux'
import {useQueryParam, NumberParam, StringParam, withDefault} from 'use-query-params'
/* Components */
import SearchBar from './components/SearchBar'
import Images from './components/imagesPane/Images'
/* styles */
import './App.scss'

function App() {
  const [value, setValue] = useQueryParam('search', StringParam)
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1))
  const {inputInitialPosition} = useSelector(({images}) => images)

  return (
    <div className={`${inputInitialPosition ? 'App inputCenter' : 'App'}`}>
      <SearchBar value={value} setValue={setValue} />
      <Images page={page} value={value} setPage={setPage} />
    </div>
  )
}

export default App
