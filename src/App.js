import './components/Nav Bar/NavBar.css';
import NavBar from './components/Nav Bar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import React from "react"

function App() {
 
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Hola!'/>
      <ItemCount />
    </div>
  );
}

export default App;
