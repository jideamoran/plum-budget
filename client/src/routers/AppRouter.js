import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/LoginForm/LoginForm';
import Signup from '../components/SignupForm/SignupForm';

 
const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </Switch>
    </BrowserRouter>
);
 
export default AppRouter;