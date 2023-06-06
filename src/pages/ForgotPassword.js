import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
        <Meta title={'Recuperar-contraseña'}/>
        <BreadCrumb title='Recuperar-contraseña'/>

        <div className='login-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='login-card'>
                            <h3 className='text-center mb-3'>Restablece tu contraseña</h3>
                            <p className='text-login-1 text-center mt-2 mb-3'>Enviaremos un correo electrónico para restablecer tu contraseña</p>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div><input type='email' name="email" placeholder='Email' className='form-control'></input></div>
                                <div className='mt-2 d-flex flex-column justify-content-center gap-15 align-items-center'>
                                    <button className='button'>Enviar</button>
                                    <Link className='text-login-1' to="/login">Cancelar</Link>
                                </div>    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ForgotPassword