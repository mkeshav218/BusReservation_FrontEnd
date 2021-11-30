import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Navbar() {
 

  return (
    <div>
        <div className="navbar">
            <Link to="login" className="menu-bars">
                <FaIcons.FaBars/>
            </Link>
        </div>
    </div>
  );
}

export default Navbar;