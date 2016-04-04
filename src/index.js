import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import routes from './routes';

const appHistory = useRouterHistory(createHashHistory)({
  	queryKey: false
});

ReactDOM.render(
  // console.log('index # render');
  <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
      {routes}
  </Router>,
  document.getElementById('app')
);
