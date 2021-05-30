import './App.css';
import Home from './HomePage';
import {BrowserRouter, Route} from 'react-router-dom'
import Listing from './components/pages/CarList/Listing';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/listing">
        <Listing />
      </Route>
    </BrowserRouter>
  );
}

export default App;
