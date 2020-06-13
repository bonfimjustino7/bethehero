import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncidents';
import { isAuthenticate } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        isAuthenticate() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    } />
);



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon} />
                <Route path='/register' component={Register} />
                <PrivateRoute path='/profile' component={Profile} />
                <PrivateRoute path='/incidents/new' component={NewIncidents} />
            </Switch>
        </BrowserRouter>
    );

}
