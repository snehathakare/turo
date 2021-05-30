import React from 'react'
import './experience.css'
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const experience = [
    { src: "http://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg", name: "Electric" },
    { src: "http://resources.turo.com/f/81934/328x262/1d0c1a5bd7/image_experience_deluxesuperdeluxe.jpg", name: "Deluxe & Super Deluxe" },
    { src: "http://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg", name: "Pet-friendly" },
    { src: "http://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg", name: "Convertibles" },
    { src: "http://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg", name: "All wheel drive" },
    { src: "http://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg", name: "Classic car" },
];

function Experience() {
    return (
        <>
        <div>
          <h2>Browse by experience</h2>
          <Carousel itemsToShow={3}>
            {experience.map((exp) => (
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

export default Experience
