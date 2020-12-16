import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { PageHead } from '../components/main/PageHead';
import { RegisterScreen } from '../pages/auth/RegisterScreen';
import { NotFoundScreen } from '../pages/exceptions/NotFoundScreen';
import { PropertiesScreen } from '../pages/properties/PropertiesScreen';
import { PropertyDetailScreen } from '../pages/properties/PropertyDetailScreen';
import { SubmitPropertyScreen } from '../pages/properties/SubmitPropertyScreen';

export const HomeRouter = () => {
    return (
        <div>
            <PageHead />
            <Switch>
                <Route 
                    exact
                    path="/login"
                    component={ RegisterScreen }
                />
                <Route 
                    exact
                    path="/register"
                    component={ RegisterScreen }
                />
                <Route 
                    exact
                    path="/properties"
                    component={ PropertiesScreen }
                />
                <Route 
                    exact
                    path="/property/:id"
                    component={ PropertyDetailScreen }
                />
                <Route 
                    exact
                    path="/submit_property"
                    component={ SubmitPropertyScreen }
                />
                <Route 
                    path="/404"
                    component={ NotFoundScreen }
                />
                <Redirect to="/404" />
            </Switch>
        </div>
    )
}
