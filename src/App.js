import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import BlockchainRoad from "./BlockchainRoad"
import BackendRoad from "./BackendRoad"
import FrontendRoad from "./FrontendRoad"
import {Bot} from './Bot';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Bot></Bot>
      <Routes>
        <Route path="/" exact element={<Header/>}/>
        <Route path="/blockchain" element={<BlockchainRoad/>}/>
        <Route path="/backend" element={<BackendRoad/>}/>
        <Route path="/frontend" element={<FrontendRoad/>}/>
      </Routes>
    </div>
  )
}

export default App