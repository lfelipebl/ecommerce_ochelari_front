import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <Meta title={'Inicio-de-sesión'}/>
        <BreadCrumb title='Inicio-de-sesión'/>

        <div className='login-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='login-card'>
                            <h3 className='text-center mb-3'>Iniciar sesión</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div><input type='email' name="email" placeholder='Email' className='form-control'></input></div>
                                <div className='mt-1 mb-2'><input type='password' name='password' placeholder='Password' className='form-control'></input></div>
                                <div><Link to='/forgotpassword' className='pass'>¿Olvidaste tu contraseña?</Link></div>
                                <div className='mt-2 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button' type='submit'>Iniciar sesión</button>
                                    <Link to='/signup' ><button className='button signup'>Regístrate aquí</button></Link>
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

export default Login