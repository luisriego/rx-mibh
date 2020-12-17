import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { callEndpointLogin, callEndpointRegister } from '../../actions/auth'
import { beginLoading, endLoading } from '../../actions/ui';
import { useForm } from '../../hooks/useForm'



export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);
console.log(loading);
    const [alertMessage, setAlertMessage] = useState(null);

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const [ registerValues, handleRegisterInputChange ] = useForm({
        fullName: '',
        mail: '',
        password1: '',
        password2: '',
    });

    const { email, password } = formValues;
    const { fullName, mail, password1, password2 } = registerValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(beginLoading());
        dispatch(callEndpointLogin(email, password));
        dispatch(endLoading());
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ) {
            dispatch(beginLoading());
            dispatch(callEndpointRegister(fullName, mail, password1));
            dispatch(endLoading());
        }
    }

    // Este método valida los datos del formulario de registro de usuario. 
    const isFormValid = () => {
        if ( fullName.trim().length === 0 ) {
            setAlertMessage('O nome é requerido!');
            return false;
        } else if ( !validator.isEmail(mail) ) {
            setAlertMessage('Por favor intruduza um email válido!');
            return false;
        } else if ( password1 !== password2 ) {
            setAlertMessage('As senhas devem coincidir!');
            return false;
        } else if ( password1.length < 6 ) {
            setAlertMessage('Senha muito curta, por favor introduza 6 carateres mínimo!');
            return false;
        }

        setAlertMessage(null);
        return true;
    }

    return (
        <div className="register-area auth__bg-color">
            <div className="container">

                <div className="col-md-6">
                    <div className="box-for overflow">
                        <div className="col-md-12 col-xs-12 register-blocks">
                            <h2>Criar nova conta : </h2> 
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="fullName" 
                                        value={fullName}
                                        onChange={ handleRegisterInputChange }/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="mail"
                                        value={mail}
                                        onChange={ handleRegisterInputChange } />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password1"
                                        value={password1}
                                        onChange={ handleRegisterInputChange } />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password2"
                                        value={password2}
                                        onChange={ handleRegisterInputChange } />
                                </div>
                                <div className="text-center">
                                    <button 
                                        disabled={loading}
                                        type="submit" 
                                        className="btn btn-default"
                                    >
                                        Register
                                    </button>
                                </div>
                                { alertMessage &&
                                    <div className="alert alert-sm alert-danger mt-1" role="alert">
                                        { alertMessage }
                                    </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="box-for overflow">                         
                        <div className="col-md-12 col-xs-12 login-blocks">
                            <h2>Login : </h2> 
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="email"
                                        value={email}
                                        onChange={ handleInputChange } />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password"
                                        value={password}
                                        onChange={ handleInputChange } />
                                </div>
                                <div className="text-center">
                                    <button disabled={loading} type="submit" className="btn btn-default"> Log in</button>
                                </div>
                            </form>
                            <br />
                            
                            <h2>Social login :  </h2> 
                            
                            <p>
                            <a className="login-social" href="http://www.google.com"><i className="fa fa-facebook"></i>&nbsp;Facebook</a> 
                            <a className="login-social" href="http://www.google.com"><i className="fa fa-google-plus"></i>&nbsp;Gmail</a> 
                            <a className="login-social" href="http://www.google.com"><i className="fa fa-twitter"></i>&nbsp;Twitter</a>  
                            </p> 
                        </div>
                        
                    </div>
                </div>

            </div>
        </div> 
    )
}
