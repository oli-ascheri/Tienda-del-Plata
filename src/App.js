import './components/Nav Bar/NavBar.css';
import NavBar from './components/Nav Bar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from "react"

function App() {
 
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Hola!'}/>
      <ItemDetailContainer />
      <ItemCount />
    </div>
  );
}

export default App;
