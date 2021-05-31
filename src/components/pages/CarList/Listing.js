import React from 'react'
import ListingNav from './ListingNav.js'
import CarList from './CarList.js'

function Listing() {
    return (
        <div>
            <ListingNav />
            <div>
                <CarList />
            </div>
        </div>
    )
}

export default Listing
