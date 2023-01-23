import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Feed from "./components/Feed.jsx";


const App = () => {
  return (
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
};

export default App;
