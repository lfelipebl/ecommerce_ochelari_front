import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    {/* Footer top*/}
    <footer className='py-5'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-15 align-items-center'>
              <img src='images/Newsletter.svg'  alt='Newsletter'/>
              <h4 className='mb-0 text-white'>Únete a OCH y mantente al corriente</h4>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group">
              <input 
                type="text" 
                className="form-control py-1" 
                placeholder="*Dirección de correo electrónico" 
                aria-label="*Dirección de correo electrónico" 
                aria-describedby="basic-addon2"
              />
              <span 
                className="input-group-text p-3" 
                id="basic-addon2">
                  SUSCRÍBETE 
              </span>
            </div>
          </div>
        </div>
        <div className='row align-items-center justify-content-end mt-3'>
          <div className='col-7'>
            <p className='text-white '>* Acepta <span> </span> 
              <Link to="/" className='text-white text-decoration-underline' >Términos y condiciones</Link> y<span> </span> 
              <Link to="/" className='text-white text-decoration-underline' >Política de tratamiento de datos</Link></p>
          </div>
        </div>
      </div>
    </footer>

    {/* Footer main*/}
    <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <h5 className='text-white'>Contáctanos</h5>
            <div className='footer-links d-flex flex-column'>
                <Link to='/contact' className='text-white py-2 mb-1'>Servicio al cliente</Link>
                <a href='https://wa.me/573504504073' className='text-white py-2 mb-1'>Chatea con nostros</a>
                <a href='mailto:' className='text-white py-2 mb-1'>servicioalcliente@och.com</a>
            </div>
          </div>
          <div className='col-3'>
            <h5 className='text-white'>Información</h5>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Política de tratamiento de datos</Link>
              <Link className='text-white py-2 mb-1'>Política de envíos y devoluciones</Link>
              <Link className='text-white py-2 mb-1'>Términos y condiciones</Link>
            </div>
          </div>
          <div className='col-2'>
            <h5 className='text-white'>Accesos</h5>
            <div className='footer-links d-flex flex-column'>
              <Link to='/' className='text-white py-2 mb-1'>Home</Link>
              <Link to='/store'className='text-white py-2 mb-1'>Store</Link>
              <Link to='/contact' contact className='text-white py-2 mb-1'>Servicio al cliente</Link>
            </div>
          </div>
          <div className='col-2'>
            <h5 className='text-white'>Categorías</h5>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Lentes de sol</Link>
              <Link className='text-white py-2 mb-1'>Lentes de vista</Link>
              <Link className='text-white py-2 mb-1'>Accesorios</Link>
            </div>
          </div> 

          <div className='col-2'>
            <h5 className='text-white'>Redes sociales</h5>
            <div className='social-icons d-flex align-items-center gap-15'>
              <a href='/'>
                <img src='images/Whatsapp.svg' alt='social icons'/>
              </a>
              <a href='/'>
                <img src='images/Instagram.svg' alt='social icons'/>
              </a>
              <a href='/'>
                <img src='images/Facebook.svg' alt='social icons'/>
              </a>
            </div>
          </div> 

        </div>
      </div>
    </footer>

    {/* Footer buttom*/}
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'> &copy; { new Date().getFullYear()} Powered by Developer´s GRAVITI</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
  }

export default Footer;