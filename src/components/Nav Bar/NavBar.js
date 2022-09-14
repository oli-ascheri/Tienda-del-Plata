import logo2 from '../../img/tdp-logo.png';
import CartWidget from '../CartWidget/CartWidget';
import '../CartWidget/CartWidget.css'
import { NavLink } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <div className='Nav-bar'>
            <div className='Nav-bar-sup'> 
                <NavLink to={'/'} >  <img src={logo2} className="App-logo2"/>  </NavLink>
                <div>
                    <input type="text" className='Nav-bar-search' placeholder="Buscar productos, marcas y mas..."/>
                    <button className='Nav-bar-search-button'>Buscar</button>
                </div>    
                <button className='Nav-bar-login'>Login</button>
            </div>
            <div className='Nav-bar-inf'>
                <div>
                    <ul className='Nav-bar-categories'>
                        <li><NavLink 
                                to={'/category/celulares'}
                                style=   {({isActive}) => 
                                isActive
                                ? {textDecoration:'none', color :'rgb(249, 221, 80)'}
                                : {textDecoration:'none', color :'white'}}> 
                                Celulares y telefonia  
                                </NavLink>
                        </li>
                        <li><NavLink 
                                to={'/category/computacion'}
                                style=   {({isActive}) => 
                                isActive
                                ? {textDecoration:'none', color :'rgb(249, 221, 80)'}
                                : {textDecoration:'none', color :'white'}}> 
                                Computacion  
                                </NavLink>
                        </li>
                        <li><NavLink 
                                to={'/category/camaras'}
                                style=   {({isActive}) => 
                                isActive
                                ? {textDecoration:'none', color :'rgb(249, 221, 80)'}
                                : {textDecoration:'none', color :'white'}}> 
                                Camaras y accesorios  
                                </NavLink>
                        </li>
                        <li><NavLink 
                                to={'/category/videojuegos'}
                                style=   {({isActive}) => 
                                isActive
                                ? {textDecoration:'none', color :'rgb(249, 221, 80)'}
                                : {textDecoration:'none', color :'white'}}> 
                                Consolas y Videojuegos  
                                </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget />
                </div>    
            </div>
        </div>
    )
}

export default NavBar