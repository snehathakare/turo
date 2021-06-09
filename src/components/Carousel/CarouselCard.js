import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel-card.css'
import './support.css'

const info = [
    { src: "http://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg",
     heading: "Find the perfect car to conquer the great outdoors", 
     text:"Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees." },
     { src: "http://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg",
     heading: "Find the perfect car to conquer the great outdoors", 
     text:"Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees." },
     { src: "http://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg",
     heading: "Find the perfect car to conquer the great outdoors", 
     text:"Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees." },
     { src: "http://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg",
     heading: "Find the perfect car to conquer the great outdoors", 
     text:"Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees." },
     { src: "http://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg",
     heading: "Find the perfect car to conquer the great outdoors", 
     text:"Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees." },
];

function CarouselCard() {
    return (
            <>
            <div className="demo">
                <Carousel showArrows>
                {info.map((info) => (
                    <>
                        <div className="carousel-card">
                            <img alt="turo"  src={info.src} />
                            <div className="carousel-card-text">
                                <h2><p>{info.text}</p></h2>
                                <p>{info.text}</p>
                                <button className="primary-btn">Browse</button>
                            </div>
                        </div>
                    </>
                ))}
                </Carousel>
            </div>
            </>
    )
}

export default CarouselCard
