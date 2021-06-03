import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './car-carousel.css'

function CarDetailCarousel() {
    return (
        <Carousel infiniteLoop>
            <div>
                <img alt="turo"  src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/1r8WMPz-SdijEYaYYC8THw.1440x700.jpg" />
            </div>
            <div>
                <img alt="turo" src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ysK2UJIAS_SBqZmd-UbNTw.1440x700.jpg" />
            </div>
            <div>
                <img alt="turo" src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/FVSUiPeXTfiMytP_pyVY2g.1440x700.jpg" />
            </div>
            <div>
                <img alt="turo" src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/gg2wnf2YQ06utI-B7B_lvg.1440x700.jpg" />
            </div>
        </Carousel>
    )
}

export default CarDetailCarousel
