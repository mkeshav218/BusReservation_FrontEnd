import React from 'react';
import {Link} from 'react-router-dom';
import logo from './img/main_logo.PNG'
class Header extends React.Component{
    
    render(){ 

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div >
                        <Link to="/">
                        <img src={logo} height={50} width={50} alt=""/>
                        </Link>
                    </div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/" style={{color:"white"}}>Idyllic Travels</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end" >
                        <li><Link className="nav-link" to="/register" style={{color:"white"}}>Register</Link></li>
                        <li><Link className="nav-link" to="/login" style={{color:"white"}}>Login</Link></li>
                        <li><Link className="nav-link" to="/searchbus" style={{color:"white"}}>Search Bus</Link></li>
                        <li><Link className="nav-link" to="/search" style={{color:"white"}}>Search Ticket</Link></li>
                        <li><Link className="nav-link" to="/cancel" style={{color:"white"}}>Cancel Ticket</Link></li>
                        <li><Link className="nav-link" to="/logout" style={{color:"white"}}>Logout</Link></li>
                        <li><Link className="nav-link" to="/aboutus" style={{color:"white"}}>About Us</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;