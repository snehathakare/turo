import React from 'react'
import './image.css'

function ImageDesign() {
    return (
        <div className="image-design">
            <img src="https://blog.turo.com/blog/wp-content/uploads/2021/04/Kyle_Engman_21-copy-2_lesssmall.jpg" alt="turo"/>
            <div className="image-overlap">
                <h5>FEATURED TRAVELOGUE</h5>
                <h2>An Olympic experience in Washington</h2>
                <p>Discover the epic waterfalls, moody weather, and lush forests of coastal Washington.</p>
                <a href="/">Read more</a>
            </div>
        </div>
    )
}

export default ImageDesign
