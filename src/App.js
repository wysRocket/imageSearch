import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import { ImgSearchState } from './context/ImgSearchState';
import Images from './components/Images';

function App() {
  
  return ( 
    <ImgSearchState >
      <div className = "App" >
        <SearchBar />
        <Images />
      </div>       
    </ImgSearchState>
  );
}

export default App;
