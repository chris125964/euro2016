//require('./style.css');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from './pages/App';
import List from './pages/List';
import Groups from './pages/Groups';
import User from './pages/User';
import Login from './pages/Login';

import routes from './routes';

const appHistory = useRouterHistory(createHashHistory)({
  queryKey: false
});

ReactDOM.render(
  <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
    {routes}
  </Router>,
  document.getElementById('app')
);
