import './App.css';
import Home from './HomePage';
import {BrowserRouter, Route} from 'react-router-dom'
import Listing from './components/pages/CarList/Listing';
import ListNewCar from './components/pages/CarList/ListNewCar';
import UserProfile from './components/pages/Profile/UserProfile';

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
    </BrowserRouter>
  );
}

export default App;
