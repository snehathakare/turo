import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import './carousel-card.css'

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
            <div>
            <Carousel itemsToShow={1}>
                {info.map((info) => (
                    <Item maxWidth="100%">
                        <div className="carousel-card">
                                <img src={info.src} alt="turo"/>
                                <div className="carousel-card-text">
                                    <h2>{info.heading}</h2>
                                    <p>{info.text}</p>
                                    <button className="primary-btn">Browse Cars</button>
                                </div>
                            </div>
                    </Item> 
                    ))}
            </Carousel>
            </div>
            </>
    )
}

export default CarouselCard
