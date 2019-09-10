import React from 'react';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Navbar = ({title}) => {
  
        return (
            <nav className="navbar bg-primary">
                <h1>
                <i className="fab fa-github"></i>
                    {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        );
    
}

//default props
Navbar.defaultProps = {
    title: 'hell'
}
//use props types
Navbar.propTypes = {
    title: propTypes.string.isRequired
}

export default Navbar;