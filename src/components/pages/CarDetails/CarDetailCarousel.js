import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './car-carousel.css'

function CarDetailCarousel(props) {
    let imageArr = []
    console.log(props.images)
    if (props.images!==""){
        const images = JSON.parse(props.images)
        console.log(images)
        Object.keys(images).forEach(function(key) {
            imageArr.push(images[key])
            console.log(images[key])
        })
    }

    return (
        <Carousel infiniteLoop>
            {imageArr.length>0? imageArr.map(image=>(
                <div>
                    <img alt="turo"  src={"http://185.241.5.135:3000/uploads/images/cars/"+image} />
                </div>
            )):<div>
                <img alt="turo"  src={"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"} />
            </div>}

            {/*}*/}


        </Carousel>
    )
}

export default CarDetailCarousel
