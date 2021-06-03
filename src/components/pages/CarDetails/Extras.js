import React,{useState} from 'react'
import './features.css'

function Extras() {
    const [readMore,setReadMore]=useState(false);
    const extraContent=<div>
        <div className="extra-content features-col features-row">
           <div>
               <h5>Helmet</h5>
               <p>We have one large adult helmet for rent </p>
               <p>$price/day</p>
           </div>
           <div className="line-separator"></div>
           <div>
               <h5>Prepaid refuel</h5>
               <p>Save time, make drop-off a breeze, and avoid additional fees by adding this Extra, which allows you to return my car at any fuel level. Price includes up to a full tank of gas. </p>
               <p>$price/day</p>
           </div>
           <div className="line-separator"></div>
        </div>
    </div>
    const linkName=readMore?'Less':'More'
    return (
        <div className="App">
        <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><button className="nav-btn-outlined">{linkName}</button></a>
        {readMore && extraContent}
        </div>
    );
}

export default Extras
