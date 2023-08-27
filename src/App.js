import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from 'features/Home';
import MobileHome from 'features/MobileHome';
import AppSettings from 'features/AppSettings';
import { detectMobile } from 'features/app/utils';

function App() {

  const isMobile = detectMobile();

  return (
    <>
      { isMobile ? <Routes>
          <Route path="/" element={ <MobileHome /> } exact />
        </Routes> :
        <Routes>
          <Route path="/" element={ <Home /> } exact />
          <Route path="/appsettings" element={ <AppSettings /> } />
        </Routes>
       }
    </> 
  );
}

export default App;
