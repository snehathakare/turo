import React from 'react'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import './tips.css'

function Tips({text}) {
    return (
        <div className="tips">
            <h5>Tips to get more bookings</h5>
            <div className="tips-flex">
                <WbIncandescentIcon />
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Tips
