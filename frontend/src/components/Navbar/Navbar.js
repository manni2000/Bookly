import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import Button from '../Button/Button';
import './Navbar.css';
import logo from '../Images/cal.png';
import { useHistory } from 'react-router-dom';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    
    const history = useHistory();

    const signupHandler = () => {
        let path = `/signup`;
        history.push(path);
    };

    const signinHandler = () => {
        let path = `/signin`;
        history.push(path);
    };

    const menuItemClicked = (e) => {
        setClicked(e.target);
    };

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <img className="logo" src={logo} alt="logo" onClick={() => history.push('/')} />
                <ul className="menu-items">
                    {MenuItems.map((items, index) => {
                        return (
                            <li key={index} className="nav-item">
                                <a className="nav-link" href={items.url}>{items.title}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className="auth-buttons">
                    <p id="login" onClick={signinHandler}>Log In</p>
                    <Button onClick={signupHandler}>Get Started</Button>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
