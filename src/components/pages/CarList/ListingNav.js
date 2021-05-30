import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './listing.css'


export default function ListingNav() {
    return (
        <header className="nav">
            <div className="nav-left-link">
                <div className="logo"><a href="/">TURO</a></div>
                <div className="listing-search">
                    <div>Where</div>
                    <div className="listing-nav-input">
                        <input type="text" placeholder="City, Airport, address or hotel"/>
                    </div>
                    <div>From</div>
                    <div className="listing-nav-input">
                        <input type="datetime-local" placeholder="date" />
                    </div>
                    <div>Until</div>
                    <div className="listing-nav-input">
                        <input type="datetime-local" placeholder="date" />
                    </div>
                </div>
            </div>
            <div className="nav-right-links">
                <PersonOutlineIcon/>
            </div>
        </header>
    )
}