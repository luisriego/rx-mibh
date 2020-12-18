import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { HomeRouter } from './HomeRouter';
import { Navbar } from '../components/main/Navbar';

import { MainScreen } from '../pages/MainScreen';


export const AppRouter = () => {

    // Esto va ha captar los cambios en el state (login, logout, cambio id ...)
    // const dispatch = useDispatch
    // useEffect(() => {
    //     getUser(token) => {
    //         if ( token? ) {
    //             dispatch( docodeToken(token) )
    //         }
    //     }
    // }, [])

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route 
                        exact
                        path="/" 
                        component={ MainScreen }
                    />
                    <Route 
                        path="/*"
                        component={ HomeRouter }
                    />
                    <Redirect to="/404" />
                </Switch>
            </div>
        </Router>
    )
}
