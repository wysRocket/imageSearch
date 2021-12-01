import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'
import {fetchImages} from 'redux/slices/images.asyncActions'
import {clearResults} from 'redux/slices/images.slice'

const SearchBar = React.memo(({setValue}) => {
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const onFormSubmit = e => {
    e.preventDefault()
    if (!inputRef.current.value.trim()) {
      dispatch(clearResults())
      return window.location.assign('/')
    }
    setValue(inputRef?.current?.value, 'replaceIn')
    dispatch(fetchImages({qw: inputRef?.current?.value?.trim()}))
  }

  return (
    <form className='flexContainer' onSubmit={onFormSubmit}>
      <input className='inputStyle' placeholder='Search' type='text' ref={inputRef} />
      <button className='buttonStyle' type='submit'>
        Search
      </button>
    </form>
  )
})

SearchBar.displayName = 'SearchBar'

export default SearchBar
