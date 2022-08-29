import './components/Nav Bar/NavBar.css';
import NavBar from './components/Nav Bar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Hola!'/>
    </div>
  );
}

export default App;
