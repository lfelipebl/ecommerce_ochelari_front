import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
        <Meta title={'Servicio-al-cliente'}/>
        <BreadCrumb title='Servicio-al-cliente'/>

        <div className='contact-wrapper py-3 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <div className='contact-wrapper d-flex justify-content-between gap-5'>
                  <div>
                    <h3 className='contact-title mb-4'>Contáctanos</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div><input type="text" className='form-control' placeholder='Nombre completo'></input></div>
                      <div><input type="text" className='form-control' placeholder='Direccion de correo electrónico'></input></div>
                      <div><input type="text" className='form-control' placeholder='Teléfono o celular de contacto'></input></div>
                      <div><textarea className='w-100 form-control' placeholder='Comentarios' name='' id='' cols="30" rows="4"></textarea></div>
                      <div><button className='button'>Enviar</button></div>
                    </form>
                  </div>
                  <div>
                    <h3 className='contact-title mb-4'>Canales de servicio al cliente</h3>
                    <div>
                        <ul className='ps-0'>
                          <li className='mb-3 d-flex align-items-center gap-10 '><img  src='images/contact-home.svg' alt='contact'/>Bogotá, Colombia</li>
                          <li className='mb-3 d-flex align-items-center gap-10 '><img  src='images/contact-email.svg' alt='contact'/><a href='mailto:' className='text-a'>servicioalcliente@och.com</a></li>
                          <li className='mb-3 d-flex align-items-center gap-10 '><img  src='images/contact-phone.svg' alt='contact'/><a href='https://wa.me/573504504073' className=''>Chatea con nostros</a></li>
                          <li className='mb-3 d-flex align-items-center gap-10 '><img  src='images/contact-info.svg' alt='contact'/>{Date()}</li>
                        </ul> 
                    </div>
                    <div className='col-2 align-items-center mt-5'>
                      <h1><Link to='/' className='text-logo'>ochelari.com.co</Link></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Contact