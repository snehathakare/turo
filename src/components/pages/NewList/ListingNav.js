import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './listing.css'
import FormDialogLogin from "../Auth/FormDialogLogin"
import FormDialogSignup from "../Auth/FormDialogSignup"
import FormDialogForgotPass from "../Auth/FormDialogForgotPass";
import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import {API_BASE_URL} from "../../../Constants";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import {Link, useHistory} from "react-router-dom";


export default function ListingNav(props) {
    const [loginState,setLoginState] = React.useState(false)
    const [registerState,setRegisterState] = React.useState(false)
    const [forgotPassState,setForgotPassState] = React.useState(false)
    const [isLoggedIn,setLoggedIn] = React.useState(false)
    const [profileData,setProfileData] = React.useState({
      first_name : '',
      last_name : '',
      user_profile_img : null
  
    })

    //Query states
    const [query,setQuery] = React.useState({
      where:'',
      from:'',
      to:''
    })

    const {where,from,until} = query
    const onChange = (e) =>setQuery({ ...query, [e.target.name]: e.target.value })
    const {first_name,last_name} = profileData

    const handleSearch = ()=> {
      props.uriParamsHandler(query)

        let url = `${API_BASE_URL}/cars/listings?from=${query.from}&to=${query.to}&where=${query.where}&page=0&size=50`


        const config = {
            headers:{
                'Authorization': localStorage.getItem('access'),
            }
        }

        axios.get(url,config)
        .then(response =>{
            console.log("Response Data from Search")
            console.log(response.data)
            props.searchDataHandler(response.data.data.items)

        })
        .catch(err=>{
            console.log(err.response)
        })

    }
    
    
    const {user_profile_img} = profileData
    function setP(e) {
        console.log(e.label)
        setQuery({
            where:e.label
        })
    }
  const fetch_UserDetails = async ()=>{
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('access'),
          
      }
  };

  let url = `${API_BASE_URL}/user/details?token=${localStorage.getItem('access')}`
  console.log(url)
   axios.get(url,config).then((response)=>{
    setProfileData({
      user_profile_img:response.data.data.profile_img_url,
       last_name: response.data.data.last_name,
      first_name: response.data.data.first_name,
    })
    
    console.log(user_profile_img)
  }).catch(err => {
    console.log(err.response)
  })
    
}

React.useEffect(() => {
    
 
  if(isLoggedIn){
    fetch_UserDetails()
  }
  
},[isLoggedIn]);


  let changeForgotState=(value)=>{
    setForgotPassState(value)
  }
  let changeLoginState=(value)=>{
    setLoginState(value)
  }

  let changeRegisterState = (value)=>{
    setRegisterState(value)
  }

  const LogoutHandler = () =>{
    props.handleOpenLogin(true)
    localStorage.removeItem('access')
  }

  const load_user = ()=> {
    
    let token = localStorage.getItem('access')
    if(token){
      setLoggedIn(true)
      let expires = localStorage.getItem("expires")
      let currentDate = new Date()
      let dateNow = currentDate.getTime()
      let result = expires - dateNow
      if(result < 0){
        localStorage.removeItem("access")
        localStorage.removeItem("expires")
        setLoginState(true)
        setLoggedIn(false)
      }
    }
    else{
      setLoggedIn(false)
    } 
  }

  

  React.useEffect(() => {
    {console.log('openLogin',props.openLogin)}
    load_user();
},[isLoggedIn]);

React.useEffect(()=>{

    if(localStorage.getItem("access")){
      props.handleOpenLogin(false)
      setLoginState(true)
    }
    else{
        props.handleOpenLogin(true)
        //setLoginState(false)
    }
    

},[localStorage.getItem("access")])


    return (
        <header className="nav">
            
            <div className="nav-left-link">
                <div className="logo"><a href="/">TURO</a></div>
                <div className="listing-search">
                    <div>Where</div>
                    <GooglePlacesAutocomplete
                        autocompletionRequest={{
                            componentRestrictions: {
                                country: ['us', 'ca'],
                            }
                        }}
                        apiOptions={{ language: 'en', region: 'us' }}
                        selectProps={{
                            onChange:setP,
                            placeholder:"Where"
                        }}
                        apiKey="AIzaSyDDqsqjB6WrkHlUZgXBPCsHXXpZrBWfL1E"
                    />
                    <div>From</div>
                    <div className="listing-nav-input">
                        <input 
                        name="from"
                        value={from}
                        onChange={e=>onChange(e)}
                        type="datetime-local" 
                        placeholder="date" />
                    </div>
                    <div>Until</div>
                    <div className="listing-nav-input">
                        <input 
                        name="until"
                        value={until}
                        onChange={e=>onChange(e)}
                        type="datetime-local" 
                        placeholder="date" />
                    </div>
                    <div className="search-btn">
                        <button onClick={handleSearch}
                            className="search-button"><SearchIcon />
                        </button>
                    </div>
                    {localStorage.getItem("access") == null ? 
                    <div className="nav-right-links">
                        <a className="custom_a" href="/new-list">List your car</a>
                    <FormDialogLogin 
                    handleOpenLogin={props.handleOpenLogin}
                    setLoggedIn={setLoggedIn} loginDialog={loginState} changeLoginDialog={changeLoginState} registerDialog={registerState} changeForgotDialog={changeForgotState} changeRegisterDialog={changeRegisterState} />
                    <FormDialogSignup changeLoginDialog={changeLoginState} registerDialog={registerState} changeRegisterDialog={changeRegisterState} />
                    <FormDialogForgotPass  forgotPassDialog={forgotPassState} changeLoginDialog={changeLoginState} changeForgotDialog={changeForgotState}/>
                    </div>
                    :
                        <div className="loggedin-items">
                            <div className="nav-right-links">
                                <a className="custom_a" href="/new-list">List your car</a>
                                <div className="nav-dropdown">
                                    <a className="custom_a" href="/">Hi, {first_name} {last_name}</a>
                                    <div className="dropdown-content">
                                        <ul>
                                            <a href="/my-bookings" className="a_no_dec"> <li>My Trips</li></a>
                                            <a href="/my-lisitings" className="a_no_dec"> <li>My Listings</li></a>
                                            <a href="/my-account" className="a_no_dec"> <li>My Account</li></a>
                                            <li onClick={LogoutHandler}>Log out</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/*<Avatar src={user_profile_img}>*/}
                            {/*    {first_name.slice(0,1).toUpperCase()}{last_name.slice(0,1).toUpperCase()}*/}
                            {/*</Avatar>*/}

                        </div>
}
                    
                </div>
            </div>
            <div className="nav-right-links">
                {user_profile_img?
                    <Avatar src={user_profile_img}>
                </Avatar>:<PersonOutlineIcon/>
                }
            </div>
        </header>
    )
}