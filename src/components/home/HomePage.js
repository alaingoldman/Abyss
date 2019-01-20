import {Link} from 'react-router'; 
import React from 'react';

class HomePage extends React.Component {
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

export default HomePage;