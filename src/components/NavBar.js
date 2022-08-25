import logo2 from '../tdp-logo.png';

const NavBar = () => {
    return (
        <div className='Nav-bar'>
            <div className='Nav-bar-sup'> 
                <img src={logo2} className="App-logo2"/>
                <div>
                    <input type="text" className='Nav-bar-search' placeholder="Buscar productos, marcas y mas..."/>
                    <button className='Nav-bar-search-button'>Buscar</button>
                </div>    
                <button className='Nav-bar-login'>Login</button>
            </div>
            <div className='Nav-bar-inf'>
                <ul className='Nav-bar-categories'>
                    <li><a>Tecnologia</a></li>
                    <li><a>Vehiculos</a></li>
                    <li><a>Belleza y Cuidado Personal</a></li>
                    <li><a>Moda</a></li>
                    <li><a>Deportes y Fitness</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar