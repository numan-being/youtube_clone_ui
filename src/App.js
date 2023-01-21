import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Feed from './components/Feed';
import VideoDetails from './components/VideoDetails';
import SearchResult from './components/SearchResult';

const App = () => {
  return (
      <BrowserRouter>
      <div className='flex flex-col h-full'>
        <Header />
        <Routes>
          <Route path="/" exact element={<Feed/>} />
          <Route path="/SearchResult/:searchQuery" element={<SearchResult/>} />
          <Route path="/video/:id" element={<VideoDetails/>} />
        </Routes>
      </div>
      </BrowserRouter>
  )
};

export default App;