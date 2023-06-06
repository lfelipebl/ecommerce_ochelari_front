import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import { Link } from 'react-router-dom';
import axios from '../api/axios.js';
import React, { useState,useRef,useEffect } from 'react';




const URL_LOGIN = '/och/user/login';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const [showPwd, setShowPwd] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd]);


    const handleLogin = async (e) => {
        e.preventDefault();

        try{   

            const response = await axios.post(URL_LOGIN, {
                email: email,
                password: pwd,
              });

            localStorage.setItem('token',response.data.token);
            localStorage.setItem('nameUser',response.data.firstname);
            localStorage.setItem('Sesion',true);
            setSuccess(true);
        }
        catch(err){
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 401) {
                setErrMsg('¡Datos invalidos!');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    };

    return (

    <>
        <Meta title={'Inicio-de-sesión'}/>
        <BreadCrumb title='Inicio-de-sesión'/>


        {success ? (
           console.log('success')                        
        ) : (

        <div className='login-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='login-card'>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
                            <h3 className='text-center mb-3'>Iniciar sesión</h3>
                            <form onSubmit={handleLogin} className='d-flex flex-column gap-15'>

                                 {/* Email/User */}
                                 <div className='mt-4'>
                                        <h6 className=''>Correo electrónico</h6>
                                        <div className='d-flex align-items-center'> 
                                            <input
                                                type="email"
                                                id="email"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                required
                                                aria-describedby="uidnote"
                                                className='form-control'
                                                placeholder='Email'
                                            />
                                        </div>
                                    </div>

                                {/* Password */}
                                <div className='mt-4'>
                                        <h6>Contraseña</h6>
                                        <div className='d-flex align-items-center mb-4'>
                                            <input
                                                    type={showPwd ? "text" : "password"}
                                                    id="password"
                                                    onChange={(e) => setPwd(e.target.value)}
                                                    value={pwd}
                                                    required
                                                    aria-describedby="pwdnote"
                                                    className='form-control po'
                                                    placeholder='Password'
                                                />
                                                <label htmlFor='email' className='icon'>
                                                    <img onClick={() => setShowPwd(!showPwd) }
                                                        className='icon' 
                                                        src={showPwd ? '/images/shownot.svg' : '/images/show.svg'} 
                                                        alt='show'/>  
                                                </label>                                      
                                                
                                            
                                        </div>       
                                    </div>

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
        )}
    </>
  )
}

export default Login