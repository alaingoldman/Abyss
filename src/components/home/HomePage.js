import { Link } from 'react-router-dom'; 
import React from 'react';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Sight Admin</h1>
                <p> React and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}