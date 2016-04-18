import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import App from './pages/App';
import List from './pages/List';
import Groups from './pages/Groups';
import User from './pages/User';
import Tables from './pages/Tables';
import Login from './pages/Login';


const routes = (
    <Route path="/" component={ App } >
        <IndexRoute component={ Login } />
        <Route path="/list" component={List} name="list"/>
        <Route path="/groups" component={Groups} />
        <Route path="/user" component={User} />
        <Route path="/tables" component={Tables} />
        <Route path="/login" component={Login} />
    </Route>
);

export default routes;
