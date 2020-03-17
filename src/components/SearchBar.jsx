import React, {useState, useContext} from 'react';
import { ImgSearchContext } from '../context/imgSearchContext';
import {NavLink} from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState('')
  const imgSearch = useContext(ImgSearchContext)

const onFormSubmit = (event) => {
  event.preventDefault()

  if (value.trim()) {
    imgSearch.setPhotos(value.trim()).then(() => {
    imgSearch.setQW(value)
    
}).catch(()=> {

})
//setValue('')
}
}

return (
<div>
  <form onSubmit={onFormSubmit} 
    className="flexContainer">
      <label>
        <h2>Image Search: </h2>
      </label>
        <input className="inputStyle" 
        type="text" 
        value={value} 
        onChange={e => setValue(e.target.value)} />
        
  </form>
</div>
)
}

export default SearchBar;