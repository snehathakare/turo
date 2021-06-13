import React from 'react'
import './bookings.css'
import Nav from '../Home/Nav'
import Footer from '../Home/Footer'
import { Card } from '@material-ui/core'

const carInfo = [{src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/Rd_FCKsTRrau_ZhPWh1MHg.730x390.jpg", 
        name:"Tesla Model S 2018", amount:140, trips:"51" ,rating:"5.0", book_now: true, delivery: 'free'},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/JFxpbWXsSPeTyVGajafUuw.730x390.jpg", 
        name:"Tesla Model 3 2019", amount:170, trips:"51" ,rating:"5.0", delivery: 'free'},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/oZeBOX5wRhugcdt3tta6nQ.730x390.jpg", 
        name:"Mercedes-Benz", amount:53, trips:"51" ,rating:"5.0",book_now: true},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ifykpaWSTwONE1qqUkjlig.730x390.jpg", 
        name:"Audi A5 2018", amount:100, trips:"51" ,rating:"5.0"},
]

const MyBookings = () => {
    return (
        <div>
            <Nav />
            <h2 className="flex">Trips History</h2>
            {carInfo.map(car=>(
                <div className="bookings-card">
                    <Card>
                        <div className="bookings-container">
                            <div className="bookings-left">
                                    <img src={car.src} alt="car"/>
                            </div>
                            <div className="bookings-right">
                                <div className="text-light">
                                    <p>Booking date: <span>12 May 2021</span></p>
                                    <span>Distance covered: </span><span>{car.trips} mi</span>
                                    <p><span>Billed amount: </span>${car.amount}</p>
                                    <button className="profile-primary-btn">Book again</button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
            <div className="flex footer-bg">
                <Footer />
            </div>
        </div>
    )
}

export default MyBookings
