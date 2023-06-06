import React, { useRef, useState, useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import { Link } from 'react-router-dom';
import axios from '../api/axios.js';
import moment from 'moment';

const USER_REGEX = /[@]/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*/+-]).{8,24}$/; 
const URL_REGISTER = '/och/user/register';


const Signup = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const [birthdate, setBirthDate] = useState('');
    const [validBirthDate, setValidBirthDate] = useState(false);
    const [birthdateFocus, setBirthDateFocus] = useState(false);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [showPwd, setShowPwd] = useState(false);
    const [showConfPwd, setShowConfPwd] = useState(false)

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));

    }, [user]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);


    useEffect(() => {
        const fechaActual = moment();
        const birthDay = moment(birthdate);
        const edad = fechaActual.diff(birthDay, 'years');
        setValidBirthDate(edad >= 18);
    },[birthdate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);

        const fechaActual = moment();
        const birthDay = moment(birthdate);
        const edad = fechaActual.diff(birthDay, 'years');

        if(!v1 || !v2 ){
            setErrMsg(" ¡Validar datos ingresados! ");
            return;
        }else if(edad < 18){
            setErrMsg(" ¡El usurio debe ser mayor de edad! ");
            return    
        }   

        try {

            const response = await axios.post(URL_REGISTER,
                JSON.stringify({ firstname: firstname, lastname:lastname, birthDay: birthdate, email: user, password:pwd }),
                {
                    headers: {  'Content-Type': 'application/json' },
                }
            );
            setSuccess(true);
            let respuesta=response.status;
            respuesta=' ';
            console.log(respuesta);
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Usuario ya registrado');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    };

  return (
    <>
        <Meta title={'Registro'}/>
        <BreadCrumb title='Registro'/>

        {success ? (
                setTimeout(() => {
                    window.location.href = '/login';
                   }, 1000)                       
        ) : (

        <div className='login-wrapper home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='login-card'>
                            <section>
                                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
                                <h3 className='text-center mb-5'>Crear cuenta de usuario</h3>
                                <form onSubmit={handleSubmit}>

                                    {/* Nombres */}
                                    <div className=''>
                                        <h6 className=''>Nombres</h6>
                                        <div> 
                                            <input
                                                type="text"
                                                id="firstname"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setFirstName(e.target.value)}
                                                value={firstname}
                                                required
                                                className='form-control'
                                                placeholder='Nombres'
                                            />
                                        </div>
                                    </div>


                                    {/* Apellidos */}
                                    <div className='mt-4'>
                                        <h6 className=''>Apellidos</h6>
                                        <div> 
                                            <input
                                                type="text"
                                                id="lastname"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setLastName(e.target.value)}
                                                value={lastname}
                                                required
                                                className='form-control'
                                                placeholder='Apellidos'
                                            />
                                        </div>
                                    </div>


                                    {/* Fecha de nacimiento */}
                                    <div className='mt-4'>
                                        <h6 className=''>Fecha de nacimiento</h6>
                                        <div className='d-flex align-items-center'>
                                            <label htmlFor='email'>
                                                <img src='/images/crosspassword.svg' alt='cross' className={validBirthDate ? "valid" : "hide"} />
                                                <img src='/images/checkpassword.svg' alt='check' className={validBirthDate || !birthdate ? "hide" : "invalid"} />
                                            </label>
                                            <input
                                                    type="date"
                                                    id="birthdate"
                                                    onChange={(e) => setBirthDate(e.target.value)}
                                                    value={birthdate}
                                                    required
                                                    aria-invalid={validBirthDate ? "false" : "true"}
                                                    aria-describedby="datenote"
                                                    className='form-control form-date'
                                                    onFocus={() => setBirthDateFocus(true)}
                                                    onBlur={() => setBirthDateFocus(false)}
                                                />
                                        </div>
                                        <p id="datenote" className={birthdateFocus && !validBirthDate ? "instructions" : "offscreen"}>
                                            El usuario debe tener mas de 18 años de edad
                                        </p>
                                    </div>


                                    {/* Email/User */}
                                    <div className='mt-4'>
                                        <h6 className=''>Correo electrónico</h6>
                                        <div className='d-flex align-items-center'> 
                                            <label htmlFor='email'>
                                                <img src='/images/crosspassword.svg' alt='cross' className={validName ? "valid" : "hide"} />
                                                <img src='/images/checkpassword.svg' alt='check' className={validName || !user ? "hide" : "invalid"} />
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                ref={userRef}
                                                autoComplete="off"
                                                onChange={(e) => setUser(e.target.value)}
                                                value={user}
                                                required
                                                aria-invalid={validName ? "false" : "true"}
                                                aria-describedby="uidnote"
                                                onFocus={() => setUserFocus(true)}
                                                onBlur={() => setUserFocus(false)}
                                                className='form-control'
                                                placeholder='Email'
                                            />
                                        </div>
                                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                            Debe ser una cuenta de correo electrónico
                                        </p>
                                    </div>

                                    
                                    {/* Password */}
                                    <div className='mt-4'>
                                        <h6>Contraseña</h6>
                                        <div className='d-flex align-items-center mb-4'>
                                            <label htmlFor='email'>
                                                    <img src='/images/crosspassword.svg' alt='cross' className={validPwd ? "valid" : "hide"} />
                                                    <img src='/images/checkpassword.svg' alt='check' className={validPwd || !pwd ? "hide" : "invalid"} />  
                                            </label>
                                            <input
                                                    type={showPwd ? "text" : "password"}
                                                    id="password"
                                                    onChange={(e) => setPwd(e.target.value)}
                                                    value={pwd}
                                                    required
                                                    aria-invalid={validPwd ? "false" : "true"}
                                                    aria-describedby="pwdnote"
                                                    onFocus={() => setPwdFocus(true)}
                                                    onBlur={() => setPwdFocus(false)}
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
                                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                            Debe tener de 8 a 24 caracteres.<br />
                                            Debe incluir letras mayúsculas y minúsculas, un número y un carácter especial.<br />
                                            Caracteres especiales permitidos: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                        </p>        
                                    </div>

                                    {/* Confirm password */}
                                    <div className='mt-4'>
                                        <h6>Confirmar contraseña</h6>
                                        <div className='d-flex align-items-center mb-4'>
                                            <label htmlFor='email'>
                                                    <img src='/images/crosspassword.svg' alt='cross' className={validMatch && matchPwd ? "valid" : "hide"} />
                                                    <img src='/images/checkpassword.svg' alt='check' className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                            </label>  
                                            <input
                                                type={showConfPwd ? "text" : "password"}
                                                id="confirm_pwd"
                                                onChange={(e) => setMatchPwd(e.target.value)}
                                                value={matchPwd}
                                                required
                                                aria-invalid={validMatch ? "false" : "true"}
                                                aria-describedby="confirmnote"
                                                onFocus={() => setMatchFocus(true)}
                                                onBlur={() => setMatchFocus(false)}
                                                className='form-control'
                                                placeholder='Confirm Password'
                                            /> 
                                            <label htmlFor='email' className='icon'>
                                                    <img onClick={() => setShowConfPwd(!showConfPwd) }
                                                        className='icon' 
                                                        src={showConfPwd ? '/images/shownot.svg' : '/images/show.svg'}  
                                                        alt='show'/>  
                                                </label>          
                                        </div>
                                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                            La confirmación de la contraseña debe coincidir.
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className='d-flex flex-column justify-content-center gap-15 align-items-center mt-4'>
                                        <button className='button'>Registrarte</button>
                                        <Link className='text-login-1' to="/login">Iniciar sesión</Link>
                                    </div>

                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
  )
}

export default Signup