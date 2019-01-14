import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'babel-polyfill';

import { Router, browserHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);