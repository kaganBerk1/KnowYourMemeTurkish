import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Memes from "./Pages/Memes";
import Meme from './Pages/Meme';
import Login from './Pages/Login';
import CreateMeme from './Pages/CreateMeme';
import RequireAuth from './components/RequireAuth';

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [language, setLanguage] = React.useState("");
  React.useEffect(() => {
    let lang = navigator.language || navigator.userLanguage; 
    if(lang!=="tr"){
      lang="en"
    }
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    
    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */

    /// set language
    setLanguage(lang)

  }, []);

  return (
    <BrowserRouter>
      <Routes>
          <Route   path="/" element={<Home lang={language}/>}/>
          <Route   path="home" element={<Home lang={language} />} />
          <Route   path="memes" element={<Memes  lang={language} width={width} />}/>
          <Route   path="memes/:memeID" element={<Meme lang={language} width={width} />} />
          <Route   path="login" element={<Login width={width} />} />
          <Route element={<RequireAuth></RequireAuth>}>
            <Route   path="create" element={<CreateMeme width={width} />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
