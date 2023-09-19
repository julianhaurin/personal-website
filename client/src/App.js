
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact';

import "./css/App.css"

function App (props) {

  const [darkMode, setDarkMode] = React.useState(true)

  function toggleTheme() {
    setDarkMode(darkMode => !darkMode)

  }

  return (
    <div className={`${darkMode ? "dark" : ""} font-sans`}>

      <NavBar darkMode={darkMode} toggleTheme={toggleTheme}/>
    
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>

    </div>
  )

}

export default App;
