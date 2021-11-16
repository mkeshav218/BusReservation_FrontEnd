import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    
    render(){ 

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end" >
                        <li><Link className="nav-link" to="/register">Register</Link></li>
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/searchbus">Search Bus</Link></li>
                        <li><Link className="nav-link" to="/search">Search Ticket</Link></li>
                        <li><Link className="nav-link" to="/cancel">Cancel Ticket</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                        <li><Link className="nav-link" to="/aboutus">About Us</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;