// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';

import { HashRouter } from 'react-router-dom';
import { render } from 'react-dom';
import * as React from "react";
import * as ReactDOM from "react-dom";

render((
    <HashRouter>
        <App/>
    </HashRouter>
),document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//     <HashRouter hashType="noslash">
//         <App/>
//     </HashRouter>
// , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();



// import './styles/styles.css'; //Webpack can import CSS files too!
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'babel-polyfill';

// import App from './components/App';
// import { HashRouter  } from 'react-router-dom';
// import { render } from 'react-dom';
// import * as React from "react";
// import * as ReactDOM from "react-dom";

// ReactDOM.render(
//     <HashRouter hashType="noslash">
//         <App/>
//     </HashRouter>
// , document.getElementById('root'));

// render((
//     <HashRouter hashType="noslash">
//         <App/>
//     </HashRouter>
// ),document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));