import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Memes from "./Pages/Memes";
import Meme from './Pages/Meme';
function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route   path="/" element={<Home />}/>
          <Route   path="home" element={<Home />} />
          <Route   path="memes" element={<Memes />}>
               <Route   path=":memeID" element={<Meme />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
