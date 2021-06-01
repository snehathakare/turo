import React from 'react'
import './photos.css'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import Carousel from "react-elastic-carousel";
import Item from "../../Carousel/Item";

function CarPhotos() {
    return (
        <div className="car-photos">
            <span>High quality photos increase your earning potential by attracting more guests. Upload at least 6 photos, including multiple exterior angles with the whole car in frame, as well as interior shots. 
                <a href>Learn more here.</a></span>
            <div className="car-photo-info">
                <p><WbSunnyIcon /></p>
                <p>Shoot during the daytime</p>
                <p><EmojiTransportationIcon /></p>
                <p>Take clear, crisp photos</p>
            </div>
            <div className="car-photo-info">
                <p><AllInclusiveIcon /></p>
                <p>Try somewhere open or scenic</p>
                <p><BatteryAlertIcon /></p>
                <p>Look out for moving cars</p>
            </div>
            <CarCarousel />
            <h6>Photos must be at least 640px by 320px and smaller than 10mb</h6>
            <button className="primary-btn">Add Photos</button>
        </div>
    )
}

export default CarPhotos

const cars = [
    { src: "https://resources.turo.com/client/v2/builds/assets/90fc53f16da638d42844b914968201c9.jpg", name: "Left side" },
    { src: "https://resources.turo.com/client/v2/builds/assets/d629a47e51b379ca616029767422451b.jpg", name: "Front" },
    { src: "https://resources.turo.com/client/v2/builds/assets/77989d4a82d1fe0eced30773ac900b5e.jpg", name: "Right side" },
    { src: "https://resources.turo.com/client/v2/builds/assets/c841d10f77909920173b1c0e20cde790.jpg", name: "Back" },
    { src: "https://resources.turo.com/client/v2/builds/assets/f8339d9981e53c2806da049c2212e629.jpg", name: "" },
    { src: "https://resources.turo.com/client/v2/builds/assets/7bc84eeaa5baad3821ac5afb6f743f98.jpg", name: "Inside" },
];

export function CarCarousel() {
    return (
        <>
        <div>
          <Carousel itemsToShow={3}>
            {cars.map((exp) => (
                   <Item key={exp.name} maxWidth="100%">
                       <div className="exp-card">
                        <img src={exp.src} alt="turo"/>
                        <p>{exp.name}</p>
                    </div>
                   </Item> 
                ))}
          </Carousel>
        </div>
      </>
    )
}

