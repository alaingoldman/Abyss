import { IndexLink, Link } from 'react-router';
import React from 'react';

const Header = () => {
    return(
        <nav> 
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {" | "}
            <Link to="/task" activeClassName="active">Tasks</Link>
        </nav>
    );
};

export default Header;