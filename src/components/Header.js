import React from 'react';
import {BsSearch} from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Header top*/}
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>¡Eleva tu Estilo a otro Nivel, gafas Exclusivas para Ver y ser Visto!</p>
            </div>
            <div className='col-6'>
              <div>
                  <Link to='/contact' className='d-flex align-items-center justify-content-end gap-10'>
                    <img src="images/Phone.svg" alt="Favourite"></img>
                    <p className='mb-0 text-white'> Servicio al cliente</p>
                  </Link>
              </div>
            </div>
          </div>
        </div>  
      </header>

      {/* Header upper*/}
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2 align-items-center'>
              <h1>
                <Link to='/' className='text-logo'>OCH</Link>
              </h1>
            </div>
            <div className='col-5'>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control py-2" 
                placeholder="Busca productos aquí" 
                aria-label="Busca productos aquí" 
                aria-describedby="basic-addon2"
              />
              <span 
                className="input-group-text p-3" 
                id="basic-addon2">
                  <BsSearch className='fs-6'/>  
              </span>
            </div>
            </div>
            <div className='col-5'>
              <div className='header-uuper-links d-flex align-items-center justify-content-between gap-10'>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10'>
                    <img src="images/Favourite.svg" alt="Favourite"></img>
                    <p className='mb-0 text-white'> Favoritos <br />Lista de deseos</p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center gap-10'>
                    <img src="images/Login.svg" alt="Login"></img>
                    <p className='mb-0 text-white'> Inicio de sesión <br />Mi cuenta</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <img src="images/Cart.svg" alt="Cart"></img>
                    <div className='d-flex flex-colum gap-10'>
                      <span className='badge bg-white text-dark'>50</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Header bottom*/}
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 me-5 d-flex align-items-center"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                              <img src='images/Category.svg' alt='category'></img>
                              <span className='me-5 d-inlinne-block'>Categorías</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">Lentes de sol</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Lentes de vista</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Accesorios</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Store</NavLink>
                    <NavLink to="/">Marcas</NavLink>
                    <NavLink to="/new-in">Blog</NavLink>
                    <NavLink to="/">Ofertas</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </ >
    )
}

export default Header;  