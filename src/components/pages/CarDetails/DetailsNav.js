import React from 'react'
import './details-nav.css'

function DetailsNav() {
    return (
        <div>
            <header className="nav">
                <div className="nav-left-link">
                        <div className="logo">
                            <a href="/">TURO</a>
                        </div>
                        <a href="#overview">Overview</a>
                        <a href="#features">Features</a>
                        <a href="#ratings">Reviews</a>
                        <a href="#location">Location</a>
                </div>
                <div className="nav-right-links">
                    <p>price</p>    
                </div>
            </header>
        </div>
    )
}

export default DetailsNav
