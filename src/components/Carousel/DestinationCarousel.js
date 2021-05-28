import React from 'react'
import './picture-card.css'
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const destinations = [
    { src: "http://resources.turo.com/f/81934/240x240/7825448638/illo_city_losangeles-2x.png", name: "Los Angeles" },
    { src: "http://resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png", name: "Miami" },
    { src: "http://resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png", name: "Honulu" },
    { src: "http://resources.turo.com/f/81934/240x240/81f82e7068/illo_city_denver-2x.png", name: "Denver" },
    { src: "http://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png", name: "London" },
    { src: "http://resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png", name: "Toronto" },
];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

function DestinationCarousel() {
    return (
            <>
            <div>
              <h2>Browse by destination</h2>
              <Carousel breakPoints={breakPoints}>
                {destinations.map((des) => (
                       <Item>
                           <div className="pic-card" key={des.name}>
                            <img src={des.src}/>
                            <p>{des.name}</p>
                        </div>
                       </Item> 
                    ))}
              </Carousel>
            </div>
          </>
    )
}

export default DestinationCarousel
