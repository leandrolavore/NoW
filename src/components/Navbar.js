import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar =(props)=> {
    return (
        <header className="navheader">
            <nav className="nav">
                <div></div>
                <div className="navlogodiv"><h2 className="navlogo">N.o.W.</h2></div>
                <div className="space"></div>
                <div className="desktopnav">

                <NavLink className='navlink' to="/">Home</NavLink>
                <NavLink className='navlink' to="/search">Search</NavLink>
                <NavLink className='navlink' to="/previous">Previous</NavLink>
                </div>
                    <ul className="navlist">
                        <li>
                            <a href="/">link</a>
                        </li>
                        <li>
                            <a href="/">link</a>
                        </li>
                    </ul>
               
            </nav>
        </header>
    )
}
export default Navbar;