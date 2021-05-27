import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './nav.css'

function Nav() {
    return (
        <header className="nav">
            <div className="nav-left-link">
                <div className="logo"><a href="/">TURO</a></div>
            </div>
            <div className="nav-right-links">
                <a href="/">Become a host</a>
                <a href="/">Learn More</a>
                <a href="/">Trips</a>
                <a href="/">Messages</a>
                <PersonOutlineIcon/>
            </div>
        </header>
    )
}

export default Nav
