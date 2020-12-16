import React from 'react'
import { useDispatch } from 'react-redux'

import { callEndpointLogin, callEndpointRegister } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'



export const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const [ registerValues, handleRegisterInputChange ] = useForm({
        fullName: '',
        mail: '',
        pass: ''
    });

    const { email, password } = formValues;
    const { fullName, mail, pass } = registerValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(callEndpointLogin(email, password));
    }

    const handleRegister = (e) => {
        e.preventDefault();

        dispatch(callEndpointRegister('Luis Riego', 'luisriego@hotmail.com', 'password'));
        // console.log(fullName, mail, pass)
    }

    return (
        <div className="register-area auth__bg-color">
            <div className="container">

                <div className="col-md-6">
                    <div className="box-for overflow">
                        <div className="col-md-12 col-xs-12 register-blocks">
                            <h2>New account : </h2> 
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="fullName" 
                                        value={fullName}
                                        onChange={ handleRegisterInputChange }/>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="mail"
                                        value={mail}
                                        onChange={ handleRegisterInputChange } />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="pass"
                                        value={pass}
                                        onChange={ handleRegisterInputChange } />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-default">Register</button>
                                </div>
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
                                    <label for="email">Email</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="email"
                                        value={email}
                                        onChange={ handleInputChange } />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password"
                                        value={password}
                                        onChange={ handleInputChange } />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-default"> Log in</button>
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
