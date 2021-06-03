import React,{useState} from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import WbSunnyIcon from '@material-ui/icons/WbSunnyOutlined';
import BluetoothIcon from '@material-ui/icons/BluetoothOutlined';
import './features.css'

function Features() {
    const [readMore,setReadMore]=useState(false);
    const extraContent=<div>
        <table className="extra-content features-col features-row">
           <tr>
               <td><WbSunnyIcon />Sunroof</td>
               <td><BluetoothIcon />Bluetooth</td>
           </tr>
           <tr>
           </tr>
           <tr>
               <td><AddCircleOutlineIcon />USB charging</td>
               <td><PlayCircleOutlineIcon />Push Button Start</td>
           </tr>
           <tr>
               <td><AddCircleOutlineIcon />Upgraded Taller Windshield</td>
               <td><PlayCircleOutlineIcon />Apple CarPlay</td>
           </tr>
           <tr>
               <td><AddCircleOutlineIcon />Automatic transmission</td>
               <td><PlayCircleOutlineIcon />Security Package</td>
           </tr>
        </table>
    </div>
    const linkName=readMore?'Less':'More'
    return (
        <div className="App">
        <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><button className="nav-btn-outlined">{linkName}</button></a>
        {readMore && extraContent}
        </div>
    );
}

export default Features
