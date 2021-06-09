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

function CarDetails(props) {
  const classes = useStyles();
  const [description,setdescription] =React.useState("")
  const descriptionHandler = e => {
    setdescription(e.target.value)
  }

  const [featuresData, setFeaturesData] = React.useState({
    allwheel: false,
    allwheel2: false,
    androidAuto:false,
    androidAuto2:false,
    usbCharger:false,
    usbCharger2:false,
    sunroof:false,
    sunroof2:false,
    petFriendly:false,
    petFriendly2:false,
    bluetooth:false,
    bluetooth2:false
    
})

const { allwheel,allwheel2,androidAuto,androidAuto2, 
  usbCharger,usbCharger2,sunroof,sunroof2,petFriendly,petFriendly2,
bluetooth,bluetooth2} = featuresData

const onChange = e => setFeaturesData({ ...featuresData, [e.target.name]: e.target.checked })

const submitHandler = e => {
  props.carDetailsHandler({featuresData,description})
  props.setCarDetailsExpand(false,true)
}

    return (
        <div className={classes.root}>
          <FormLabel component="legend">Car Features</FormLabel>
          <div className="car-checkbox">
              <FormGroup>
                <FormControlLabel
                  name="allwheel"
                  value={allwheel}
                  onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="All Wheel drive"
                />
                <FormControlLabel
                name="androidAuto"
                value={androidAuto}
                onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="Android Auto"
                />
                <FormControlLabel
                name="usbCharger"
                value={usbCharger}
                onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="USB Charger"
                />
                <FormControlLabel
                name="sunroof"
                value={sunroof}
                onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="Sunroof"
                />
                <FormControlLabel
                name="petFriendly"
                value={petFriendly}
                onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="Pet Friendly"
                />
                <FormControlLabel
                name="bluetooth"
                value={bluetooth}
                onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="Bluetooth"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                name="allwheel2"
                value={allwheel2}
                onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="All Wheel drive"
                />
                <FormControlLabel
                name="androidAuto2"
                value={androidAuto2}
                onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="Android Auto"
                />
                <FormControlLabel
                name="usbCharger2"
                value={usbCharger2}
                onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="USB Charger"
                />
                <FormControlLabel
                name="sunroof2"
                value={sunroof2}
                onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="Sunroof"
                />
                <FormControlLabel
                name="petFriendly2"
                value={petFriendly2}
                onChange={e => onChange(e)}
                  control={<Checkbox />}
                  label="Pet Friendly"
                />
                <FormControlLabel
                name="bluetooth2"
                value={bluetooth2}
                onChange={e => onChange(e)}
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
              <textarea 
              value={description}
              onChange={descriptionHandler}
              placeholder="Include car description"></textarea>
            </div>
          </div>
          <div className="car-checkbox">
              <button className="primary-btn" onClick={submitHandler}>Next</button>
          </div>
        </div>
    )
}

export default CarDetails
