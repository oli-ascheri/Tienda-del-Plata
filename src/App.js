import './components/Nav Bar/NavBar.css'; 
import NavBar from './components/Nav Bar/NavBar.js';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';
import React from "react"
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/pages/Cart/Cart';

function App() {
 
  return (

    // Routing
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='compra/:id' element={<ItemDetailContainer />} />
        <Route path='category/:category' element={<ItemListContainer/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='/' element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
