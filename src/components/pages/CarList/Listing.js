import React from 'react'
import ListingNav from './ListingNav.js'

function Listing() {
    return (
        <div>
            <ListingNav />
            <header className="nav">
                <div className="listing-filter-stack">
                    <button className="listing-filters">Sort by</button>
                    <button className="listing-filters">Price</button>
                    <button className="listing-filters">Book Instantly</button>
                    <button className="listing-filters">Delivery</button>
                    <button className="listing-filters">Distance included</button>
                    <button className="listing-filters">More filters</button>
                </div>
            </header>
        </div>
    )
}

export default Listing
