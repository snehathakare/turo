import React from 'react'
import ListingNav from '../NewList/ListingNav.js'
import CarList from './CarList.js'

import {useHistory, useLocation} from 'react-router-dom'

function ListingPage() {
    const [openLogin,setOpenLogin] = React.useState(false)
    const [searchData,setsearchData] = React.useState({})
    const [uriParams,seturiParams] = React.useState('')


    const searchDataHandler = (object) => {
        console.log(object)
        setsearchData(object)
        
    }

    const uriParamsHandler = (params) =>{
        console.log(params)
        seturiParams(params)

    }

    
    let handleOpenLogin=(value)=>{
        setOpenLogin(value)
    }

    


    return (
        <div>
            <ListingNav
            searchDataHandler={searchDataHandler}
            openLogin={openLogin} 
            uriParamsHandler={uriParamsHandler}
            handleOpenLogin={handleOpenLogin} />
            <div>
                <CarList
                 searchData={searchData}
                 uriParams={uriParams}
                />
              
            </div>
        </div>
    )
}

export default ListingPage
