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
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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
          <Typography className={classes.heading}><h4>Your car</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="form-flex">
            <h5>Where is your car located?</h5>
            <input type="text" placeHolder="Enter address"/>
            <AddressForm />
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Profile photo</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="flex">
            <p><Avatar /></p>
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
          <Typography className={classes.heading}><h4>Mobile number</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="form-flex">
              <p>Enter your phone number</p>
              <input type="text" placeholder="Enter number"/>
            </div>
            <button className="btn-listing">Next</button>
            <a href="/">Change your mobile number</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Driver's license</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="form-flex car-license">
              <p>Issuing country</p>
              <input type="text" />
              <p>License number</p>
              <input type="number" />
              <p>State</p>
              <input type="text" />
            </div>
            <div className="form-flex car-license">
              <p>First name</p>
              <input type="text" />
              <p>Last name</p>
              <input type="text" />
              <p>Middle name</p>
              <input type="text" />
            </div>
            <div className="form-flex car-license">
              <p>Expiration date</p>
              <input type="date" />
              <p>Date of birth</p>
              <input type="date" />
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
          <Typography className={classes.heading}><h4>Your goals</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MultilineTextFields />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Car availablity</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Car Details</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Car Photos</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><h4>Payout</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

//select inputs


const finGoals = [
  {
    value: 'Cover you car payment'
  },
  {
    value: 'Side business'

  },
  {
    value: 'Not sure yet'
  },
];
const usage = [
  {
    value: 'Never'
  },
  {
    value: 'Rarely: Once a month'

  },
  {
    value: 'Sometimes: Fortnightly'
  },
  {
    value: 'Often: Twice a week'
  },
  {
    value: 'Always: Everyday'
  },
];
const frequency = [
  {
    value: 'Not sure yet'
  },
  {
    value: 'As often as possible'

  },
  {
    value: 'Rarely'
  },
];


export function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('Select');
  const [share, setUsage] = React.useState(usage);
  const [freq, setFrequency] = React.useState(frequency);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeUsage = (event) => {
    setUsage(event.target.value);
  };
  const handleChangeFrequency = (event) => {
    setFrequency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="form-flex">
        <span>What is your primary financial goal for sharing this car on Turo?</span>
        <TextField
          id="filled-select-currency"
          select
          value={currency}
          onChange={handleChange}
          variant="filled"
        >
          {finGoals.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <span>How often do you or your family currently use this car?</span>
        <TextField
          id="filled-select-currency"
          select
          value={share}
          onChange={handleChangeUsage}
          variant="filled"
        >
          {usage.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <span>How often do you want to share your car?</span>
        <TextField
          id="filled-select-currency"
          select
          value={freq}
          onChange={handleChangeFrequency}
          variant="filled"
        >
          {frequency.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}