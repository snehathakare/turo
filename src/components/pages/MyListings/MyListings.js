import React from 'react'
import './my-listing.css'
import Nav from '../Home/Nav'
import Footer from '../Home/Footer'
import { Card } from '@material-ui/core'

const carInfo = [{src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/Rd_FCKsTRrau_ZhPWh1MHg.730x390.jpg", 
        name:"Tesla Model S 2018", trips:"11" ,rating:"5.0", book_now: true, delivery: 'free'},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/JFxpbWXsSPeTyVGajafUuw.730x390.jpg", 
        name:"Tesla Model 3 2019", trips:"26" ,rating:"5.0", delivery: 'free'},
]

const MyListings = () => {
    return (
        <div>
            <Nav />
            <h2 className="flex">Your listings</h2>
            {carInfo.map(car=>(
                <div className="listing-card" key={car.name}>
                    <Card>
                        <div className="listing-container">
                            <div className="listing-left">
                                    <img src={car.src} alt="car"/>
                            </div>
                            <div className="listing-right">
                                <div className="text-light">
                                    <h3>{car.name}</h3>
                                    <p>Last Booked on: <span>12 May 2021</span></p>
                                    <span>Total trips: </span><span>{car.trips}</span>
                                    <p><span>Total billed amount: </span>${car.amount}</p>
                                    <button className="profile-primary-btn">Edit listing</button>
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

export default MyListings
