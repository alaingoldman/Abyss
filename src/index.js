import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { getUsers } from './api/usersApi';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody+= `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.email}</td></tr>`;
    });

    global.document.getElementById('users').innerHTML = usersBody;

});
// render(
//     <Router history={browserHistory} routes={routes} />,
//     document.getElementById('app')
// );