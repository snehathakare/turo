import React from 'react'
import './banner.css'
import SearchForm from './SearchForm'

function Banner() {
    return (
        <div className="banner">
            <img className="banner-img" src="http://resources.turo.com/f/81934/3000x800/a2b40ace75/1500-us-2x.jpg" />
            <SearchForm />
        </div>
    )
}

export default Banner
