import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { AuthRouter, HomeRouter } from './HomeRouter';
import { Navbar } from '../components/main/Navbar';

import { LoginScreen } from '../pages/auth/LoginScreen';
import { PropertiesScreen } from '../pages/properties/PropertiesScreen';
import { NotFoundScreen } from '../pages/exceptions/NotFoundScreen';
import { MainScreen } from '../pages/MainScreen';

export const AppRouter = () => {
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
                    {/* <Redirect to="/404" /> */}
                </Switch>
            </div>
        </Router>
    )
}
