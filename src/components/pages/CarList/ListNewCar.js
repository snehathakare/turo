import React from 'react'
import ListingNav from './ListingNav'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './new-car.css'
import Avatar from '@material-ui/core/Avatar';
import AddressForm from './AddressForm';
import CarAvailablity from './CarAvailablity';
import CarDetails from './CarDetails';
import CarPhotos from './CarPhotos';
import Payout from './Payout';
import { Goal } from './Goal';
import Footer from '../Home/Footer.js'

function ListNewCar() {
    return (
        <div>
            <ListingNav />
            <SimpleAccordion />
        </div>
    )
}

export default ListNewCar


const useStyles = makeStyles((theme) => ({  
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className="root">
        <h1>List your car</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} component={'span'}><h4>Your car</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <div className="form-flex-col">
              <h5>Where is your car located?</h5>
              <input type="text" placeholder="Enter address"/>
              <AddressForm />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} component={'span'}><h4>Profile photo</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="flex" component={'span'}>
            <p><Avatar component={'span'}/></p>
            <button className="btn-listing-photo">upload photo</button><p>or</p>
            <button className="btn-listing-fb">use Facebook photo</button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} component={'span'}><h4>Mobile number</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <div className="form-flex-col">
              <p>Enter your phone number</p>
              <input type="text" placeholder="Enter number"/>
            </div>
            <button className="btn-listing">Next</button>
            <a href="/">Change your number</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} component={'span'}><h4>Driver's license</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <div className="form-flex-row car-license">
              <div className="form-flex-col">
                <p>Issuing country</p>
                <input type="text" />
              </div>
              <div className="form-flex-col">
                <p>License number</p>
                <input type="number" />
              </div>
              <div className="form-flex-col">
                <p>State</p>
                <input type="text" />
              </div> 
            </div>
            <h5>Enter your name exactly as it appears on your driver's license</h5>
            <div className="form-flex-row car-license">
            <div className="form-flex-col">
              <p>First name</p>
              <input type="text" />
            </div>
              <div className="form-flex-col">
                <p>Last name</p>
                <input type="text" />
              </div>
              <div className="form-flex-col">
                <p>Middle name</p>
                <input type="text" />
              </div>
              
            </div>
            <div className="form-flex-row car-license">
            <div className="form-flex-col">
              <h5>Expiration date</h5>
              <input type="date" />
            </div>
            <div className="form-flex-col">
              <h5>Date of birth</h5>
              <input type="date" />
            </div>
              
            </div>
            <button className="btn-listing">Next</button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} component={'span'}><h4>Your goals</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <Goal />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} component={'span'}><h4>Car availablity</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <CarAvailablity />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} component={'span'}><h4>Car Details</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <CarDetails />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} component={'span'}><h4>Car Photos</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
           <CarPhotos />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} component={'span'}><h4>Payout</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <Payout />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Footer />
    </div>
  );
}
