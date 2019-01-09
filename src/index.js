import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { getUsers, deleteUser } from './api/usersApi';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody+= `<tr>
                <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
                <td><b>${user.id}</b></td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
            </tr>`;
    });

    global.document.getElementById('users').innerHTML = usersBody;
    
    const deleteLinks = global.document.getElmentsByClassName('deleteUser');
    Array.from(deleteLinks, link => {
        link.onclick = function(event) {
            const element = event.target; 
            event.preventDefault(); 
            deleteUser(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode; 
            row.parentNode.removeChild(row);
        };
    });
});

// render(
//     <Router history={browserHistory} routes={routes} />,
//     document.getElementById('app')
// );