import './App.css';
import Home from './HomePage';
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Listing from './components/pages/CarList/Listing';
import NewList from './components/pages/CarList/NewList';
import FormDialogSignup from './components/pages/Home/FormDialogSignup';
import CarDetails from './components/pages/CarDetails/CarDetails';
import AccountActionPage from "./components/pages/MyAccount/AccountActionPage";

function App() {

  
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
        <Route exact path="/account" component={AccountActionPage} />
        
        <Route path="/signup">
        <FormDialogSignup  />
      </Route>
        
      <Route path="/listing">
        <Listing />
      </Route>
      <Route path="/newlist">
        <NewList />
      </Route>
      <Route path="/car-details">
        <CarDetails />
      </Route>
    </BrowserRouter>
  );
}

export default App;
