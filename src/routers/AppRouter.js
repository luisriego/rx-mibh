import React from 'react'
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
