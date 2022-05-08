import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import Register from '../components/Register';
import PrivateRoute from './PrivateRoute';

AppRoutes.propTypes = {

};

function AppRoutes(props) {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} exact />
                <PrivateRoute path="/users">
                </PrivateRoute>
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    );
}

export default AppRoutes;