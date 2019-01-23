import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return(
        <nav> 
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink exact to="/courses" activeClassName="active">Courses</NavLink>
            {" | "}
            <NavLink exact to="/about" activeClassName="active">About</NavLink>
            {" | "}
            <NavLink exact to="/task" activeClassName="active">Tasks</NavLink>
        </nav>
    );
};

export default Header;