import React from 'react'
import ListingNav from './ListingNav.js'
import CarList from './CarList.js'

function Listing() {
    const [openLogin,setOpenLogin] = React.useState(false)
    const [searchData,setsearchData] = React.useState({})
    const [uriParams,seturiParams] = React.useState('')
    
    const searchDataHandler = (object) => {
        setsearchData(object)
        
    }

    const uriParamsHandler = (params) =>{
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

export default Listing
