import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import Slider from '@material-ui/core/Slider';
import './listing.css';

const carInfo = [{src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/Rd_FCKsTRrau_ZhPWh1MHg.730x390.jpg", 
        name:"Tesla Model S 2018", price:140, trips:"51" ,rating:"5.0", book_now: true, delivery: 'free'},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/JFxpbWXsSPeTyVGajafUuw.730x390.jpg", 
        name:"Tesla Model 3 2019", price:170, trips:"51" ,rating:"5.0", delivery: 'free'},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/oZeBOX5wRhugcdt3tta6nQ.730x390.jpg", 
        name:"Mercedes-Benz", price:53, trips:"51" ,rating:"5.0",book_now: true},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ifykpaWSTwONE1qqUkjlig.730x390.jpg", 
        name:"Audi A5 2018", price:100, trips:"51" ,rating:"5.0"},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/Rd_FCKsTRrau_ZhPWh1MHg.730x390.jpg", 
        name:"Tesla Model 2019", price:120, trips:"51" ,rating:"5.0", delivery: 'free'},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/Rd_FCKsTRrau_ZhPWh1MHg.730x390.jpg", 
        name:"Tesla Model S 2018", price:140, trips:"51" ,rating:"5.0", delivery: 'free'},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/JFxpbWXsSPeTyVGajafUuw.730x390.jpg", 
        name:"Tesla Model 3 2019", price:170, trips:"51" ,rating:"5.0", delivery: 'free'},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/oZeBOX5wRhugcdt3tta6nQ.730x390.jpg", 
        name:"Mercedes-Benz", price:53, trips:"51" ,rating:"4.0"},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ifykpaWSTwONE1qqUkjlig.730x390.jpg", 
        name:"Audi A5 2018", price:100, trips:"51" ,rating:"5.0", book_now: true},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/Rd_FCKsTRrau_ZhPWh1MHg.730x390.jpg", 
        name:"Tesla Model 2019", price:120, trips:"51" ,rating:"5.0", delivery: 'free'},
]

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

export default function CarList() {
  const classes = useStyles();
  const [cars, setCars] = useState(carInfo);

  const filterPrice = (price) => {
    const updatedItems = carInfo.filter((car) =>{
      return car.price > price
    })
    setCars(updatedItems);
  }

  const filterBooking = (book) => {
    const updatedItems = carInfo.filter((car) =>{
      return car.book_now === book
    })
    setCars(updatedItems);
  }

  const filterDelivery = (del) => {
    const updatedItems = carInfo.filter((car) =>{
      return car.delivery === del
    })
    setCars(updatedItems);
  }

  return(
        <>
          <header className="nav">
          <div className="listing-filter-stack">
              <button className="listing-filters">Sort by</button>
              <div className="price-btn"><button className="listing-filters" onClick={() => filterPrice(140)}>Price</button></div>
              <div className="slider-dropdown"><DiscreteSlider /></div>
              <button className="listing-filters" onClick={() => filterBooking(true)}>Book Instantly</button>
              <button className="listing-filters" onClick={() => filterDelivery('free')}>Delivery</button>
              <button className="listing-filters">Distance included</button>
              <button className="listing-filters">More filters</button>
          </div>
      </header>
      <div className="car-list">
          {cars.map(car=>(
              <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={car.src}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {car.name}
                    </Typography>
                    <Typography className="car-rating" variant="body2" color="textSecondary" component="p">
                    {car.rating}<StarRateIcon /> ({car.trips} trips)
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <h4>${car.price}/day</h4>
                    </CardActions>
                </CardActionArea>
              </Card>
          ))}
      </div>
        </>
  )
    
}

function valuetext(value) {
  return `$${value}`;
}

export function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Price
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={50}
        marks
        min={10}
        max={1000}
      />
    </div>
  );
}




