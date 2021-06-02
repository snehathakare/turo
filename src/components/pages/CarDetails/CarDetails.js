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

const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar-top").classList.add("visiblity");  
    } else {
       document.querySelector(".navbar-bottom").classList.remove("visibility");
     }
  };

function CarDetails() {
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   }
  }, [])

    return (
        <div>
            <div className="navbar-top"><Nav /></div>
            <div className="navbar-bottom .visibility"><DetailsNav /></div>
            <div><CarDetailCarousel /></div>
            <div className="overview" id="overview">
                <div className="overview-left">left
                    <div className="overview-left-info">
                        <div>The car</div>
                        <div>
                            <h2>Car name</h2>
                            <p>rating (trips)</p>
                        </div>
                    </div>
                    <div className="overview-left-info">
                        <div><p>Hosted by</p></div>
                        <div>
                            <Avatar />
                            <h3>Owner</h3>
                            <p>joined , trips</p>
                        </div>
                    </div>
                    <div className="overview-left-info">
                        <div><p>Description</p></div>
                        <div>
                            <p>Very spacious for a smaller car! Has black leather interior, a sunroof, and navigation system! This is a luxury ride. Turbo diesel is what the TDI stands for! Great gas mileage!</p>
                        </div>
                    </div>
                    <div className="overview-left-info">
                        <div><p>Features</p></div>
                        <div>
                            <p>feature name</p>
                            <p><button>More</button></p>
                        </div>
                    </div>
                    <div className="overview-left-info">
                        <div><p>Extras</p></div>
                        <div>
                            <p>Add optional Extras to your trip at checkout.</p>
                            <p><button>More</button></p>
                        </div>
                    </div>
                    <div className="overview-left-info">
                        <div><p>Guidelines</p></div>
                        <div>No smoking.</div>
                    </div>
                    <div id="ratings" className="overview-left-info">
                        <div>ratings and reviews</div>
                        <div>
                            <Avatar />
                            <p>star rating</p>
                            <p>review</p>
                        </div>
                        <div>
                            <Avatar />
                            <p>star rating</p>
                            <p>review</p>
                        </div>
                        <div>
                            <Avatar />
                            <p>star rating</p>
                            <p>review</p>
                        </div>
                        <div>
                            <Avatar />
                            <p>star rating</p>
                            <p>review</p>
                        </div>
                    </div>
                </div>    
                <div className="overview-right">right
                    <div>
                        <h2>$39 / day</h2>
                        <p>$116 total + fees</p>
                        <div className="line-separator"></div>
                    </div>
                    <div>
                        <CarDetailForm />
                        <div className="line-separator"></div>
                    </div>
                    <div>tabs
                        <div className="line-separator"></div>
                    </div>
                    <div className="links-flex">
                        <button className="padding-top-bottom"><FavoriteBorderIcon/> Add to favourites</button>
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
            <Map />
            <div><Footer /></div>
        </div>
    )
}

export default CarDetails
