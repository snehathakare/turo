import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tips from './Tips';
import './availablity.css'

export default function CarAvailablity(props) {
  const [notice, setNotice] = React.useState('');
  const [min, setMinTrip] = React.useState('');
  const [max, setMaxTrip] = React.useState('');

  const handleChange = (event) => {
    setNotice(event.target.value);
  };
  const handleChangeMin = (event) => {
    setMinTrip(event.target.value);
  };
  const handleChangeMax = (event) => {
    setMaxTrip(event.target.value);
  };

  const submitHandler = ()=>{
    props.carAvailabilityHandler({notice,min,max})
    props.setCarAvailabilityExpand(false,true)
  }
  
    return (
        <div>
            <div className="avail-flex">
                <h4>Advance Notice</h4>
                <span>How much advance notice do you need before a trip starts?</span>
                <div className="notice-flex">
                    <FormControl variant="outlined">
                        <h5>Advance notice at home</h5>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={notice}
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>Select</em>
                        </MenuItem>
                        <MenuItem value={10}>1 day</MenuItem>
                        <MenuItem value={20}>6 hours</MenuItem>
                        <MenuItem value={30}>12 hours</MenuItem>
                        </Select>
                    </FormControl>
                    <Tips text="51% of trips at home locations are booked on shorter notice than your current requirement of 1 day."/>
                </div>
            </div>
            <div>
                <h4>Trip Duration</h4>
                <span>What’s the shortest and longest possible trip you’ll accept?</span>
                <div className="notice-flex">
                    <FormControl variant="outlined">
                        <h5>Minimum trip duration</h5>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={min}
                        onChange={handleChangeMin}
                        >
                        <MenuItem value="">
                            <em>Select</em>
                        </MenuItem>
                        <MenuItem value={10}>1 day</MenuItem>
                        <MenuItem value={20}>2 days</MenuItem>
                        <MenuItem value={30}>3 days</MenuItem>
                        </Select>
                    </FormControl>
                    <Tips text="A 1 day minimum opens you up to 100% of trips!"/>
                </div>
            </div>
            <div>
                <div className="notice-flex">
                    <FormControl variant="outlined">
                        <h5>Maximum trip duration</h5>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={max}
                        onChange={handleChangeMax}
                        >
                        <MenuItem value="">
                            <em>Select</em>
                        </MenuItem>
                        <MenuItem value={10}>1 month</MenuItem>
                        <MenuItem value={20}>6 days</MenuItem>
                        <MenuItem value={30}>12 weeks</MenuItem>
                        <MenuItem value={10}>6 months</MenuItem>
                        <MenuItem value={20}>Any</MenuItem>
                        </Select>   
                    </FormControl>
                    <Tips text="1% of booked trips are longer than your current maximum of 1 month."/>
                    
                </div>
                <button onClick={()=>{submitHandler()}}className="primary-btn">Next</button>
            </div>
        </div>
    )
}
