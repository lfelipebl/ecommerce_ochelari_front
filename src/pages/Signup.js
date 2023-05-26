import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
        <Meta title={'Registro'}/>
        <BreadCrumb title='Registro'/>

        <div className='login-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='login-card'>
                            <h3 className='text-center mb-4'>Crear cuenta de usuario</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div><input type='text' name="firstname" placeholder='Nombres' className='form-control'></input></div>
                                <div><input type='text' name="lastname" placeholder='Apellidos' className='form-control'></input></div>
                                <div><input type='email' name="email" placeholder='Email' className='form-control'></input></div>
                                <div className='mt-1 mb-2'><input type='password' name='password' placeholder='Password' className='form-control'></input></div>
                                <div className='mt-2 d-flex flex-column justify-content-center gap-15 align-items-center'>
                                    <button className='button'>Registrarte</button>
                                    <Link class='text-login-1' to="/login">Cancelar</Link>
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

export default Signup