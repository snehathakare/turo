import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './listing.css'
import FormDialogLogin from "../Home/FormDialogLogin"
import FormDialogSignup from "../Home/FormDialogSignup"
import FormDialogForgotPass from "../Home/FormDialogForgotPass";
import axios from "axios"
import Avatar from '@material-ui/core/Avatar';
import {API_BASE_URL} from "../../../Constants";


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
      until:''
    })

    const {where,from,until} = query
    const onChange = (e) =>setQuery({ ...query, [e.target.name]: e.target.value })

    const handleSearch = ()=> {

      props.uriParamsHandler(query)

/**       let url = `http://185.241.5.135:3000/api/cars/listing?query=${query}`

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
        **/
    }
    
    
    const {first_name,last_name,user_profile_img} = profileData

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
      first_name:response.data.data.first_name,
      last_name: response.data.data.last_name,
      user_profile_img:response.data.data.profile_img_url
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
                    <div className="listing-nav-input">
                        <input 
                        name="where"
                        value={where}
                        onChange={e=>onChange(e)}
                        type="text" 
                        placeholder="City, Airport, address or hotel"/>
                    </div>
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
                        <button onClick={handleSearch}>
                              Search
                        </button>
                    </div>
                    {localStorage.getItem("access") == null ? 
                    <>
                    <FormDialogLogin 
                    handleOpenLogin={props.handleOpenLogin}
                    setLoggedIn={setLoggedIn} loginDialog={loginState} changeLoginDialog={changeLoginState} registerDialog={registerState} changeForgotDialog={changeForgotState} changeRegisterDialog={changeRegisterState} />
                    <FormDialogSignup changeLoginDialog={changeLoginState} registerDialog={registerState} changeRegisterDialog={changeRegisterState} />
                    <FormDialogForgotPass  forgotPassDialog={forgotPassState} changeLoginDialog={changeLoginState} changeForgotDialog={changeForgotState}/>
                    </>
                    : 
                    <div className="loggedin-items">
                    <div className="nav-username">
                      <p>Hi, {first_name} {last_name}</p>
                    </div>
                    <Avatar src={user_profile_img}>
                    {first_name.slice(0,1).toUpperCase()}{last_name.slice(0,1).toUpperCase()}
                  </Avatar>
                  
                  <button onClick={LogoutHandler}>
                    Log Out
                  </button>
                  </div>
}
                    
                </div>
            </div>
            <div className="nav-right-links">
                <PersonOutlineIcon/>
            </div>
        </header>
    )
}