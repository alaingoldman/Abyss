import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'babel-polyfill';

import App from './components/App';
import { HashRouter  } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';

render((
    <HashRouter hashType="noslash">
        <App/>
    </HashRouter>
),document.getElementById('root'));