import './App.css';
import Home from './HomePage';
import {BrowserRouter, Route} from 'react-router-dom';
import Listing from './components/pages/CarList/Listing';
import ListNewCar from './components/pages/CarList/ListNewCar';
import UserProfile from './components/pages/Profile/UserProfile';
import MyBookings from './components/pages/MyBookings/MyBookings';
import MyListings from './components/pages/MyListings/MyListings';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/listing">
        <Listing />
      </Route>
      <Route path="/newlist">
        <ListNewCar />
      </Route>
      <Route path="/profile">
        <UserProfile />
      </Route>
      <Route path="/mybooking">
        <MyBookings />
      </Route>
      <Route path="/mylisting">
        <MyListings />
      </Route>
    </BrowserRouter>
  );
}

export default App;
