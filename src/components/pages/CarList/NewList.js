import React from 'react'
import ListingNav from './ListingNav'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete';
import './new-car.css'
import Avatar from '@material-ui/core/Avatar';
import AddressForm from './AddressForm';
import CarAvailablity from './CarAvailablity';
import CarDetails from './CarDetails';
import CarPhotos from './CarPhotos';
import Payout from './Payout';
import { Goal } from './Goal';
import Footer from '../Home/Footer.js'
import Select from 'react-select'
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import axios from "axios";
import {API_BASE_URL} from "../../../Constants";
import {useHistory} from 'react-router-dom'

function NewList() {
  const [openLogin,setOpenLogin] = React.useState(false)
  let handleOpenLogin=(value)=>{
    setOpenLogin(value)
  }
    return (
      <div>
      <ListingNav openLogin={openLogin} handleOpenLogin={handleOpenLogin}/>
      <SimpleAccordion handleOpenLogin={handleOpenLogin} />
      </div>
    )
}

export default NewList


const useStyles = makeStyles((theme) => ({  
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export function SimpleAccordion(props) {
  
  const classes = useStyles();
  const [reload,setreload] = React.useState(false)
  const [makes,setMakes]= React.useState("")
  const [models,setModels]= React.useState("")
  const [model,setModel]= React.useState("")
  let history = useHistory()


    const getMakes = function (){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('access'),
            }
        };
        let url = `${API_BASE_URL}/cars/makers`

      let options = []
        axios.get(url,config).then((response)=>{
            if(response.data.code === 200){
                let arr = response.data.data.items

                for(let i=0;i<arr.length;i++){

                    options.push({value:arr[i].title,label:arr[i].title,id:arr[i].id})
                }
                setMakes(options)
            }else{

            }
        }).catch(err => {

        })
    }

    const getModels = function (e){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('access'),
            }
        };
        setModel(e)
        let url = `${API_BASE_URL}/cars/models?make_id=${e.id}`
        let options = []
        axios.get(url,config).then((response)=>{
            if(response.data.code === 200){
                let arr = response.data.data.items
                for(let i=0;i<arr.length;i++){
                    options.push({value:arr[i].title,label:arr[i].title})
                }
                setModels(options)
            }else{

            }
        }).catch(err => {

        })
  }

  const [carModel,setcarModel] = React.useState("")
  const [carMake,setcarMake] = React.useState("")
  const [carlocation,setcarLocation] = React.useState("")

  const [mobile_number,setmobile_number] = React.useState('')
  const onChange_mobile_number = e => setmobile_number(e.target.value)

  const [carAvailablityForm,setcarAvailabilityForm] = React.useState({
    advance_notice:'',
    min_trip_duration:'',
    max_trip_duration:''
  })

  const carAvailabilityHandler = (object) =>{
    
    setcarAvailabilityForm(
      {
    advance_notice:object.notice,
    min_trip_duration:object.min,
    max_trip_duration:object.max
      }
    )

    
  }

  const [carDetailsForm,setcarDetailsForm] = React.useState({
    car_features:'',
    car_desc:''
  })

  const carDetailsHandler = (object) =>{
    
    setcarDetailsForm(
      {
        car_features:object.featuresData,
        car_desc:object.description
      }
    )
    
  }

  const [photos,setphotos] = React.useState(null)

  const photosHandler = (pics) =>{
    console.log("INside handler")
    console.log(pics)
    setphotos(pics)
  }



  const [priceForm,setpriceForm] = React.useState({
    lowest_price:'',
    highest_price:''
  })

  const priceFormHandler = (object) =>{
    
    setpriceForm(
      {
        lowest_price:object.lowest,
        highest_price:object.highest
      }
    )

  }


const submitForm = ()=>{
  
  var data = new FormData()
  data.append("carMake",carMake)
  data.append("carModel",carlocation)
  data.append("carLocation",carlocation)
  data.append("mobile_number",mobile_number)
  data.append("Car_Availability",carAvailablityForm)
  data.append("Car_Description",carDetailsForm)
  data.append("photos",photos)
  data.append("price_Form",priceForm)

  const config = {
      headers: {
        Authorization:localStorage.getItem("access")
      }
  }


  let url = `${API_BASE_URL}/cars/listings`
  console.log("DATA to be posted:")
  console.log({
    carAvailablityForm,carDetailsForm,priceForm,mobile_number,photos
  })
  
 
  axios.post(url,data,config)
      .then((res)=>{
        console.log(res)
        history.push("/")
      })
      .catch(err => {
        console.log(err.response)
        
  })
  
  window.location.reload(false)

}

const [expanded,setExpanded] = React.useState({
  car:true,
  mobile_number:false,
  carAvailablity:false,
  carDetails:false,
  carPhotos:false,
  payout:false
})

let setCarAvailabilityExpand = (previousTab,currentTab)=>{
  setExpanded({carAvailablity:previousTab,carDetails:currentTab}) //false,true
  }
  
  let setCarDetailsExpand = (previousTab,currentTab)=>{
    setExpanded({carDetails:previousTab,carPhotos:currentTab}) //false,true
  }
  
  let setCarPhotosExpand = (previousTab,currentTab)=>{
    setExpanded({carPhotos:previousTab,payout:currentTab}) //false,true
  }
  
  let setPayoutExpand = (lastTab)=>{
    setExpanded({payout:lastTab}) //false,true
  }

  return (
    <div className="root" >

        
        {localStorage.getItem("access") ? 
        <>
        <h1>List your car</h1>
      <Accordion
      onChange={() => setExpanded({car:!expanded.car})}
       expanded={expanded.car}>
        <AccordionSummary onClick={getMakes}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><h4>Your car</h4></Typography>
        </AccordionSummary>
        <AccordionDetails style={{display:"block",textAlign:"left"}}>
            <p>Make</p>
           {/* <Select options={makes} onChange={getModels}/>*/}
           <Select onChange={(e)=>setcarMake(e.target.value)}/>
            <p>Model</p>
           {/* <Select options={models}  />*/}
           <Select value={carlocation} onChange={(e)=>setcarLocation(e.target.value)}/>
            <Typography>
              <h5>Where is your car located?</h5>
                <GooglePlacesAutocomplete
                value={carlocation}
                onChange={(e)=>setcarLocation(e.target.value)}
                    apiKey="AIzaSyDDqsqjB6WrkHlUZgXBPCsHXXpZrBWfL1E"
                />
        

              {/*<AddressForm />*/}
              <button 
              onClick={()=>{
                setExpanded({car:false,mobile_number:true})
              }}
              className="btn-listing">
                Next
              </button>

          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*<Accordion>*/}
      {/*  <AccordionSummary*/}
      {/*    expandIcon={<ExpandMoreIcon />}*/}
      {/*    aria-controls="panel2a-content"*/}
      {/*    id="panel2a-header"*/}
      {/*  >*/}
      {/*    <Typography className={classes.heading}><h4>Profile photo</h4></Typography>*/}
      {/*  </AccordionSummary>*/}
      {/*  <AccordionDetails>*/}
      {/*    <Typography className="flex">*/}
      {/*      <p><Avatar /></p>*/}
      {/*      <button className="btn-listing-photo">upload photo</button><p>or</p>*/}
      {/*      <button className="btn-listing-fb">use Facebook photo</button>*/}
      {/*    </Typography>*/}
      {/*  </AccordionDetails>*/}
      {/*</Accordion>*/}
      <Accordion 
      expanded={expanded.mobile_number}
      onChange={() => setExpanded({mobile_number:!expanded.mobile_number})}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Mobile number</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="form-flex-col">
              <p>Enter your phone number</p>
              <input type="text" name="mobile_number" onChange={e => onChange_mobile_number(e)} placeholder="Enter number"/>
            </div>
            <button 
            onClick={()=>{
              setExpanded({mobile_number:false,carAvailablity:true})
            }}
            className="btn-listing">Next</button>
            <a href="/">Change your number</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*<Accordion>*/}
      {/*  <AccordionSummary*/}
      {/*    expandIcon={<ExpandMoreIcon />}*/}
      {/*    aria-controls="panel2a-content"*/}
      {/*    id="panel2a-header"*/}
      {/*  >*/}
      {/*    <Typography className={classes.heading}><h4>Driver's license</h4></Typography>*/}
      {/*  </AccordionSummary>*/}
      {/*  <AccordionDetails>*/}
      {/*    <Typography>*/}
      {/*      <div className="form-flex-row car-license">*/}
      {/*        <div className="form-flex-col">*/}
      {/*          <p>Issuing country</p>*/}
      {/*          <input type="text" />*/}
      {/*        </div>*/}
      {/*        <div className="form-flex-col">*/}
      {/*          <p>License number</p>*/}
      {/*          <input type="number" />*/}
      {/*        </div>*/}
      {/*        <div className="form-flex-col">*/}
      {/*          <p>State</p>*/}
      {/*          <input type="text" />*/}
      {/*        </div> */}
      {/*      </div>*/}
      {/*      <h5>Enter your name exactly as it appears on your driver's license</h5>*/}
      {/*      <div className="form-flex-row car-license">*/}
      {/*      <div className="form-flex-col">*/}
      {/*        <p>First name</p>*/}
      {/*        <input type="text" />*/}
      {/*      </div>*/}
      {/*        <div className="form-flex-col">*/}
      {/*          <p>Last name</p>*/}
      {/*          <input type="text" />*/}
      {/*        </div>*/}
      {/*        <div className="form-flex-col">*/}
      {/*          <p>Middle name</p>*/}
      {/*          <input type="text" />*/}
      {/*        </div>*/}
      {/*        */}
      {/*      </div>*/}
      {/*      <div className="form-flex-row car-license">*/}
      {/*      <div className="form-flex-col">*/}
      {/*        <h5>Expiration date</h5>*/}
      {/*        <input type="date" />*/}
      {/*      </div>*/}
      {/*      <div className="form-flex-col">*/}
      {/*        <h5>Date of birth</h5>*/}
      {/*        <input type="date" />*/}
      {/*      </div>*/}
      {/*        */}
      {/*      </div>*/}
      {/*      <button className="btn-listing">Next</button>*/}
      {/*    </Typography>*/}
      {/*  </AccordionDetails>*/}
      {/*</Accordion>*/}
      {/*<Accordion>*/}
      {/*  <AccordionSummary*/}
      {/*    expandIcon={<ExpandMoreIcon />}*/}
      {/*    aria-controls="panel2a-content"*/}
      {/*    id="panel2a-header"*/}
      {/*  >*/}
      {/*    <Typography className={classes.heading}><h4>Your goals</h4></Typography>*/}
      {/*  </AccordionSummary>*/}
      {/*  <AccordionDetails>*/}
      {/*    <Typography>*/}
      {/*      <Goal />*/}
      {/*    </Typography>*/}
      {/*  </AccordionDetails>*/}
      {/*</Accordion>*/}
      <Accordion 
      expanded={expanded.carAvailablity}
      onChange={() => setExpanded({carAvailablity:!expanded.carAvailablity})}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Car availablity</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <CarAvailablity 
            setCarAvailabilityExpand={setCarAvailabilityExpand}
            carAvailabilityHandler={carAvailabilityHandler} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion 
      expanded={expanded.carDetails}
      onChange={() => setExpanded({carDetails:!expanded.carDetails})}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Car Details</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <CarDetails 
            setCarDetailsExpand={setCarDetailsExpand}
            carDetailsHandler={carDetailsHandler}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion 
      expanded={expanded.carPhotos}
      onChange={() => setExpanded({carPhotos:!expanded.carPhotos})}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Car Photos</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <CarPhotos 
           setCarPhotosExpand={setCarPhotosExpand}
           photosHandler={photosHandler}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion 
      expanded={expanded.payout}
      onChange={() => setExpanded({payout:!expanded.payout})}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Payout</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Payout 
            setPayoutExpand={setPayoutExpand}
            priceFormHandler={priceFormHandler} />
          </Typography>
        </AccordionDetails>
      </Accordion>
        <button 
        className={"btn-long"} 
        
        onClick = {() => 
          submitForm()
      }
        style={{marginLeft:"70px",marginTop:"20px"}}>Continue</button>

        <Footer />
    

        </> : <h1>Please Login to add a list</h1>}

      </div>
  );
}



