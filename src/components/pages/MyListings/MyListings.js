import React from 'react'
import './my-listing.css'
import Nav from '../Home/Nav'
import Footer from '../Home/Footer'
import { Card } from '@material-ui/core'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const carInfo = [{src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/Rd_FCKsTRrau_ZhPWh1MHg.730x390.jpg", 
        name:"Tesla Model S 2018", trips:"11" ,rating:"5.0", book_now: true, delivery: 'free'},
        {src:"https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/JFxpbWXsSPeTyVGajafUuw.730x390.jpg", 
        name:"Tesla Model 3 2019", trips:"26" ,rating:"5.0", delivery: 'free'},
]

function ActiveListing () {
  return  (
            <div>
                <h2 className="flex">Your active listings</h2>
                {carInfo.map(car=>(
                <div className="listing-card" key={car.name}>
                    <Card>
                        <div className="listing-container">
                            <div className="listing-left">
                                    <img src={car.src} alt="car"/>
                            </div>
                            <div className="listing-right">
                                <div className="text-light">
                                    <h3>{car.name}</h3>
                                    <p>Last Booked on: <span>12 May 2021</span></p>
                                    <span>Total trips: </span><span>{car.trips}</span>
                                    <p><span>Total billed amount: </span>${car.amount}</p>
                                    <button className="profile-primary-btn">Edit listing</button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
            </div>
  )
}

function PreviousListing () {
    return  (
              <div>
                  <h2 className="flex">Previous orders</h2>
                  {carInfo.map(car=>(
                  <div className="listing-card" key={car.name}>
                      <Card>
                          <div className="listing-container">
                              <div className="listing-left">
                                      <img src={car.src} alt="car"/>
                              </div>
                              <div className="listing-right">
                                  <div className="text-light">
                                      <h3>{car.name}</h3>
                                      <p>Last Booked on: <span>12 May 2021</span></p>
                                      <span>Total trips: </span><span>{car.trips}</span>
                                      <p><span>Total billed amount: </span>${car.amount}</p>
                                      <button className="profile-primary-btn">View more</button>
                                  </div>
                              </div>
                          </div>
                      </Card>
                  </div>
              ))}
              </div>
    )
  }

const MyListings = () => {
    return (
        <div>
            <Nav />
            <SimpleTabs />
            <div className="flex footer-bg">
                <Footer />
            </div>
        </div>
    )
}

export default MyListings

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Orders" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <ActiveListing />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PreviousListing />
      </TabPanel>
    </div>
  );
}
