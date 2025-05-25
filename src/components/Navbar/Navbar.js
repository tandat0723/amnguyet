import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="navbar navbar-expand-lg bg-dark">
            <nav className='nav'>
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" height="30" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={`nav-link ${isActive('/') ? 'active' : 'inactive'}`}
                            >
                                Vấn Đáp
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/tips"
                                className={`nav-link ${isActive('/tips') ? 'active' : 'inactive'}`}
                            >
                                Tips
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/profile"
                                className={`nav-link ${isActive('/profile') ? 'active' : 'inactive'}`}
                            >
                                Về chúng tôi
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;