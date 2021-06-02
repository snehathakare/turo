import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarDetailCarousel() {
    return (
        <div>
            <div className="demo">
            <Carousel infiniteLoop>
                <div>
                    <img alt="turo"  src="https://resources.turo.com/f/81934/920x502/4ef0c8aebb/dennis-b-2x.jpg" />
                </div>
                <div>
                    <img alt="turo" src="https://resources.turo.com/f/81934/920x502/aa535d2a91/michael-c-2x.jpg" />
                </div>
                <div>
                    <img alt="turo" src="https://resources.turo.com/f/81934/920x502/56c9fd10ee/summer-p-2x.jpg" />
                </div>
                <div>
                    <img alt="turo" src="https://resources.turo.com/f/81934/920x502/81e2193486/vernon-b-2x.jpg" />
                </div>
            </Carousel>
        </div>
        </div>
    )
}

export default CarDetailCarousel
