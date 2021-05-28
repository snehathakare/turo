import React from 'react'
import './experience.css'
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const destinations = [
    { src: "http://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg", name: "Electric" },
    { src: "http://resources.turo.com/f/81934/328x262/1d0c1a5bd7/image_experience_deluxesuperdeluxe.jpg", name: "Deluxe & Super Deluxe" },
    { src: "http://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg", name: "Pet-friendly" },
    { src: "http://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg", name: "Convertibles" },
    { src: "http://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg", name: "All wheel drive" },
    { src: "http://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg", name: "Classic car" },
];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


function Experience() {
    return (
        <>
        <div>
          <h2>Browse by experience</h2>
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

export default Experience
