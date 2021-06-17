import React from 'react'
import ListingNav from '../NewList/ListingNav.js'
import CarList from './CarList.js'



function ListingPage() {
    const [openLogin,setOpenLogin] = React.useState(false)
    const [uriParams,seturiParams] = React.useState('')
   
    const uriParamsHandler = (params) =>{
        seturiParams(params)
    }

    
    let handleOpenLogin=(value)=>{
        setOpenLogin(value)
    }

    


    return (
        <div>
            <ListingNav
            openLogin={openLogin} 
            uriParamsHandler={uriParamsHandler}
            handleOpenLogin={handleOpenLogin} />
            <div>
                <CarList
                 uriParams={uriParams}
                />
              
            </div>
        </div>
    )
}

export default ListingPage
