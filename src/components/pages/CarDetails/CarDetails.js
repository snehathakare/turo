import React, {useEffect} from 'react'
import Nav from '../Home/Nav.js'
import Footer from '../Home/Footer.js'
import DetailsNav from './DetailsNav.js'
import './car-details.css'
import { Avatar } from '@material-ui/core'
import CarDetailForm from './CarDetailForm.js'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CarDetailCarousel from './CarDetailCarousel.js';
import Map from './Map.js';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarRateIcon from '@material-ui/icons/StarRate';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EvStationIcon from '@material-ui/icons/EvStationOutlined';
import Features from './Features.js'
import Extras from './Extras.js'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Tabs from './Tabs'

const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar-top").classList.add("visiblity");  
      document.querySelector(".navbar-bottom").classList.remove("visibility");
      document.querySelector(".navbar-bottom").classList.add("navbar-fixed");
    } else {
       document.querySelector(".navbar-top").classList.remove("visibility");
       document.querySelector(".navbar-bottom").classList.add("visibility");
     }
  };

function CarDetails() {
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
  }, [])

    return (
        <div>
            <div className="navbar-top"><Nav /></div>
            <div className="navbar-bottom visibility"><DetailsNav /></div>
            <div><CarDetailCarousel /></div>
            <div className="overview" id="overview">
                <div className="overview-left">
                    <table>
                    <tr className="overview-left-info">
                        <td>
                            <h4>The car</h4>
                        </td>
                        <td>
                            <h1>Car name</h1>
                            <p className="features-flex">5.0 <StarRateIcon /> (51 trips)</p>
                            <div className="features-flex">
                                <table>
                                <tr>
                                    <td><LocalGasStationIcon /> <p>26 MPG</p></td>
                                    <td><EvStationIcon /> <p>Gas (Premium)</p></td>
                                </tr>
                                <tr>
                                    <td><AirlineSeatReclineExtraIcon /> <p>2 seats</p></td>
                                    <td><DriveEtaIcon /> <p>2 doors</p></td>
                                </tr>
                                </table>  
                            </div>
                        </td>
                    </tr>
                    <tr className="overview-left-info">
                        <td>
                            <h4>Hosted by</h4>
                        </td>
                        <td className="details-flex">
                            <div className="features-flex">
                                <Avatar />
                                <div className="owner-details">
                                    <h3>Owner</h3>
                                    <p>Joined Jul 2018 . 4 trips</p>
                                    <p>Typically responds in 8 minutes</p>
                                </div>
                            </div>
                            <div className="details-flex">
                                <p>Paul has completed training on enhanced cleaning and disinfection practices.</p>
                                <a href="/">Learn More</a>
                            </div>
                        </td>
                    </tr>
                    <tr className="overview-left-info">
                        <td>
                            <h4>Description</h4>
                        </td>
                        <td>
                            <p>Very spacious for a smaller car! Has black leather interior, a sunroof, and navigation system! This is a luxury ride. Turbo diesel is what the TDI stands for! Great gas mileage!</p>
                        </td>
                    </tr>
                    <tr className="overview-left-info" id="features">
                        <td>
                            <h4>Features</h4>
                        </td>
                        <td>
                        <tr>
                            <td><AddCircleOutlineIcon />Automatic transmission</td>
                            <td><PlayCircleOutlineIcon />Apple CarPlay</td>
                        </tr>
                            <Features />
                        </td>
                    </tr>
                    <tr className="overview-left-info">
                        <td>
                            <h4>Extras</h4>
                        </td>
                        <td>
                            <p>Add optional Extras to your trip at checkout.</p>
                            <p><Extras /></p>
                        </td>
                    </tr>
                    <tr className="overview-left-info">
                        <td>
                            <h4>Guidelines</h4>
                        </td>
                        <td>
                            <p>No smoking.</p>
                        </td>
                    </tr>
                    <tr id="ratings" className="overview-left-info">
                        <td>
                            <h4>Ratings and Reviews</h4>
                        </td>
                        <td>
                            <div>
                                <div className="features-flex">
                                    <h1>5.0</h1>
                                    <StarRateIcon />
                                    <p>(4 ratings)</p>
                                </div> 
                            </div>
                            <div className="overview-left-info">
                                <Avatar />
                                <div>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Typography component="legend"/>
                                        <Rating
                                        name="simple-controlled"
                                        // value={value}
                                        // onChange={(event, newValue) => {
                                        //     setValue(newValue);
                                        // }}
                                        />
                                    </Box>
                                    <p>Teresa, May 2018</p>
                                    <p>This was our first experience with Turo and Paul made it an awesome one! We had a blast & will absolutely rent again!</p>
                                </div>
                            </div>
                            <div className="line-separator"></div>
                        </td>
                    </tr>   
                    </table>
                    </div> 
                <div className="overview-right">
                    <div>
                        <h2>$39 / day</h2>
                        <p>$116 total + fees</p>
                        <div className="line-separator"></div>
                    </div>
                    <div>
                        <CarDetailForm />
                        <div className="line-separator"></div>
                    </div>
                    <div>
                        <Tabs />
                        <div className="line-separator"></div>
                    </div>
                    <div className="links-flex">
                        <button className="padding-top-bottom nav-btn-outlined features-flex btn-long center">
                            <FavoriteBorderIcon/> 
                            <p>Add to favourites</p>
                        </button>
                        <div className="padding-top-bottom">
                            <FacebookIcon/> 
                            <TwitterIcon />
                            <EmailIcon />
                            <DescriptionIcon />
                        </div>
                        <div className="line-separator"></div>
                    </div>
                    <div className="links-flex">
                        <a href="/">Report listing</a>
                        <a href="/">Cancellation policy</a>
                    </div>
                </div>
            </div>
            <div id="location"><Map /></div>
            <div className="overview-left-info"><Footer /></div>
        </div>
    )
}

export default CarDetails
