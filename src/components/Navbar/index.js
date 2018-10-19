import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className = "form-inline">
                <Link 
                className="btn btn-outline-primary"
                to='/login'
                >
               Login
                </Link>
                
                <Link 
                className="btn btn-outline-primary"
                to='/profile'
                >
                Profile
                </Link>

                <Link 
                className="btn btn-outline-primary"
                to='/alumni'
                >
                Alumni
                </Link>
            </form>
        </nav>
    )
}
export default Navbar;