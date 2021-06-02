import React from 'react'

function CarDetailForm() {
    return (
        <div className="car-details-form">
            <div>
                <label>Trip start</label>
                <input type="datetime-local"/>
            </div>
           <div>
                <label>Trip end</label>
                <input type="datetime-local" />
           </div>
            <div>
                <label>Pickup & return location</label>
                <input type="text" />
            </div>
            <button className="primary-btn">Continue</button>
        </div>
    )
}

export default CarDetailForm
