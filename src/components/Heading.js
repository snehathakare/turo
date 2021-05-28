import React from 'react'
import './heading.css'

export const Heading1 = ({text}) => {
    return (
        <div className="heading">
            <div className="heading-text">
                <p>{text}</p>
            </div>
            <div className="heading-bg"></div>
        </div>
    )
}

export const Heading2 = ({text, description, button}) => {
    return (
        <div className="heading">
            <div className="heading-text-2">
                <h2>{text}</h2>
            </div>
            <div className="heading-bg-2"></div>
            <div><p>{description}</p></div>
            {button && <div><button className="primary-btn">{button}</button></div>}
        </div>
    )
}



