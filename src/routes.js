import React from 'react';
import {  Route, IndexRoute } from 'react-router';

import App from './pages/App';
import List from './pages/List';
import Groups from './pages/Groups';
import User from './pages/User';


const routes = (
      <Route path="/" component={ App } >
        <IndexRoute component={ List } />
        <Route path="/groups" component={Groups}/>
        <Route path="/user" component={User}/>
      </Route>
);

export default routes;