import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchImages} from 'redux/slices/images.asyncActions'

const SearchBar = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = event => {
    event.preventDefault()
    value.trim() && dispatch(fetchImages({qw: value?.trim()}))
  }

  return (
    <div>
      <form onSubmit={onFormSubmit} className='flexContainer'>
        <input
          className='inputStyle'
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
