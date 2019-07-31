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
                            <a href="https://github.com/leandrolavore"><img style={{height: "40px", width: "40px"}} src={require("../links/git-white.png")}/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/leandrolavore/"><img style={{height: "40px", width: "40px"}} src={require("../links/linkedin.ico")}/></a>
                        </li>
                    </ul>
               
            </nav>
        </header>
    )
}
export default Navbar;