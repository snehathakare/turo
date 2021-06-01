import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './car-details.css'
import Tips from './Tips';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'column',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function CarDetails() {
  const classes = useStyles();
    return (
        <div className={classes.root}>
          <FormLabel component="legend">Car Features</FormLabel>
          <div className="car-checkbox">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="All Wheel drive"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Android Auto"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="USB Charger"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Sunroof"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Pet Friendly"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Bluetooth"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="All Wheel drive"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Android Auto"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="USB Charger"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Sunroof"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Pet Friendly"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Bluetooth"
                />
              </FormGroup>
          </div>
          <div className="car-description">
           <div>
            <h4>Description</h4>
              <p>Tell guests what makes your car unique and why they'll love driving it.</p>
           </div>
            <div className="car-description">
              <div className="car-checkbox"><Tips text="Listings with descriptions of at least 100 words are up to three times more likely to get booked."/></div>
              <textarea placeholder="Include car description"></textarea>
            </div>
          </div>
          <div className="car-checkbox">
              <button className="primary-btn">Next</button>
          </div>
        </div>
    )
}

export default CarDetails
