import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({mode, toggle}) {
 
    return (
        <div className='nav'>
            <h1 className='logo'>TextUtils</h1>

            <div className='menu'>
                <Link to="/">Home</Link>
                <Link to="about">About us</Link>
            </div>
           
            <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode === 'white'? 'Light': 'Dark'}</label>
                <input className="form-check-input" type="checkbox" role="switch" onClick={toggle} id="flexSwitchCheckDefault"/>
            </div>
        </div>
    );
}

export default Navbar;
