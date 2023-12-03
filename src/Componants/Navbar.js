import React from 'react';
import "../Css/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Dictionary App</h1>
            <div className='links'>
                <Link to="">Home</Link>
                <Link to="history">History</Link>
            </div>
        </div>
    );
}

export default Navbar;
