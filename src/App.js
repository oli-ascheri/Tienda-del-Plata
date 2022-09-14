import './components/Nav Bar/NavBar.css'; 
import NavBar from './components/Nav Bar/NavBar.js';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import React from "react"
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 
  return (

    // Routing
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='compra/:id' element={<ItemDetailContainer />} />
        <Route path="category/:category" element={<ItemListContainer />} />
        <Route path="/computacion" element={<ItemListContainer  />} />
        <Route path="/camaras" element={<ItemListContainer />} />
        <Route path="/videojuegos" element={<ItemListContainer />} />
        <Route path='/' element={<ItemListContainer greeting={'Hola!'}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
