import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">KNOW YOUR NEIGHBOURHOOD</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/home">HOME</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/aboutus">ABOUT US</NavLink>        
                                        </li>
                                        
                                        <li>
                                            <NavLink to="/contactus">CONTACT US</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/termsandconditions">TERMS AND CONDITIONS</NavLink>        
                                        </li>

                                         <li>
                                            <NavLink to="/view-stores">STORES</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/profile">PROFILE</NavLink>
                                        </li>
                                        <li>
                                            <a onClick={this.props.onLogout}>LOGOUT</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        
                                        <li>
                                            <NavLink to="/home">HOME</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/aboutus">ABOUT US</NavLink>        
                                        </li>
                                        
                                        <li>
                                            <NavLink to="/contactus">CONTACT US</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/termsandconditions">TERMS AND CONDITIONS</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/login">LOGIN</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup">SIGNUP</NavLink>        
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;