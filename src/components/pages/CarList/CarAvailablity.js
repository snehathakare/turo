import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CarAvailablity() {
  const classes = useStyles();
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

    return (
        <div>
            <div>
                <h4>Advance Notice</h4>
                <span>How much advance notice do you need before a trip starts?</span>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <p>Advance notice at home</p>
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
                </div>
            </div>
            <div>
                <h4>Trip Duration</h4>
                <span>What’s the shortest and longest possible trip you’ll accept?</span>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <p>Minimum trip duration</p>
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
                </div>
            </div>
            <div>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <p>Maximum trip duration</p>
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
                </div>
            </div>
        </div>
    )
}
