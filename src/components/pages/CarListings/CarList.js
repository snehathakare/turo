import {React, useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import Slider from '@material-ui/core/Slider';
import '../NewList/listing.css';
import axios from "axios"
import {Link,useLocation, useHistory} from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import {API_BASE_URL} from "../../../Constants";

const carInfo = []

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: 10,
  },
  media: {
    height: 500,
  },
});

export default function CarList(props) {
  const classes = useStyles();
  let location = useLocation()
  console.log(location.state)
  let query = location.state?location.state.params:""
  const [cars, setCars] = useState(carInfo);
  const [carsInfo,setCarsInfo] = useState(null)
  //Length of data returned as a response by get request
  const [carDataLength,setcarDataLength] = useState(0)
  //Page Numbers for pagination
  const [pageNumber,setPageNumber] = useState(0)
  //Cards Per Page
  const [cardsPerPage,setcardsPerPage] = useState(20)
  //Number of Cards Visited or seen
  const pagesVisited = pageNumber * cardsPerPage

  //Function to handle and change pages on selection
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  };
  
  useEffect(() => {

      getCarsList() 
},[]);


const history = useHistory();
  const getCarsList = () => {
    const config = {
      headers: {
          'Content-Type': 'application/json',
          
      }
  };
  
  if(props.uriParams){
    if (history.location.state && history.location.state.params) {
      let state = { ...history.location.state };
      state.params = props.uriParams
      history.replace({ ...history.location, state });
  }
    
 }
  
  let url = `${API_BASE_URL}/cars/listings?from=${query.from}&to=${query.to}&where=${query.where}&page=0&size=50`
  
    axios.get(url,config).then((response)=>{
      console.log('listing',response.data.data.items)
      setCarsInfo(response.data.data.items)
      setcarDataLength(response.data.data.items[0].count)
      
     
    }).catch(err => {
      console.log(err.response)
    })
  }

  /*useEffect(() => {
    console.log("props.openLogin123",props.openLogin)
    if(localStorage.getItem("access") == null){
      console.log('ifff');
      props.handleOpenLogin(true)
    }else{
      props.handleOpenLogin(false)
    }
  });*/

  

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
    <>
      <header className="nav">
      <div className="listing-filter-stack">
          <button className="listing-filters">Best match</button>
          <div className="price-btn">
            <button className="listing-filters" onClick={() => filterPrice(140)}>Price</button>
          </div>
          <div className="slider-dropdown"><DiscreteSlider /></div>
          <button className="listing-filters" onClick={() => filterBooking(true)}>Distance</button>
          <button className="listing-filters" onClick={() => filterBooking(true)}>Latest model</button>
          {/*<button className="listing-filters" onClick={() => filterBooking(true)}>Book Instantly</button>*/}
          {/*<button className="listing-filters" onClick={() => filterDelivery('free')}>Delivery</button>*/}
          {/*<button className="listing-filters">Distance included</button>*/}
          {/*<button className="listing-filters">More filters</button>*/}
      </div>
  </header>

  <div className="car-list" style={{display:"block"}}>
      {/* {cars.map(car=>(
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
      ))} */}
      {carsInfo && carsInfo.length == 0 ?
      <h1>No Data to Display</h1>
      :  <div>
            {carsInfo && carsInfo.slice(pagesVisited,pagesVisited+cardsPerPage).map(car=>(
                <Link style={{textDecoration:'none'}} to={{
                  pathname:"/listing-details?from="+query.from+"&to="+query.to,
                  state:{
                    total_price:car.total_price,
                    item_id : car.listing_id,
                    params: query
                  },

                }}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={car.thumbnail ? car.thumbnail :"https://i.stack.imgur.com/y9DpT.jpg"}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" underline >
                          {car.maker_name ? car.maker_name+", "+car.model_name : 'No Name'}
                        </Typography>
                        <Typography className="car-rating" variant="body2" color="textSecondary" component="p" style={{ textDecoration: 'none'}}>
                          {car.feedback_score ? car.feedback_score : 'No rating'}<StarRateIcon /> ({car.trips ? car.trips : 'No trips'} trips)
                        </Typography>
                        <Typography variant="car-rating" component="h2" >
                          {car.distance?car.distance:""}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <h4 >${car.price ? car.price : 'No Price'}/day</h4>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Link>
            ))
            }</div>}


  </div>

  <div>
{ carInfo &&
<div className="paginationContent">
  <ReactPaginate 
    previousLabel={"Previous"}
    nextLabel={"Next"}
    pageCount={Math.ceil(carDataLength/cardsPerPage)}
    onPageChange={changePage}
    containerClassName={"paginationBttns"}
    previousLinkClassName={"previousBttn"}
    nextLinkClassName={"nextBttn"}
    disabledClassName={"paginationDisabled"}
    activeClassName={"paginationActive"}
  />
  <select value={cardsPerPage} onChange={e => 
    {
      setcardsPerPage(e.target.value)
      setPageNumber(0)
    }
    }>
  <option value={20}>20</option>
  <option value={50}>50</option>
  <option value={100}>100</option>
  </select>
  </div>
  
}
</div>
    </>
      
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