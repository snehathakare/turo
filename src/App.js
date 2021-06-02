import './App.css';
import Home from './HomePage';
import {BrowserRouter, Route} from 'react-router-dom'
import Listing from './components/pages/CarList/Listing';
import ListNewCar from './components/pages/CarList/ListNewCar';
import CarDetails from './components/pages/CarDetails/CarDetails';

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
      <Route path="/car-details">
        <CarDetails />
      </Route>
    </BrowserRouter>
  );
}

export default App;
