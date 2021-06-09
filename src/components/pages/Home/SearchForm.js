import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './search.css'
import {Link} from 'react-router-dom'

function SearchForm() {
 
    const [query,setQuery] = React.useState({
        where:'',
        from:'',
        until:''
      })
  
      const {where,from,until} = query
      const onChange = (e) =>setQuery({ ...query, [e.target.name]: e.target.value })
  
    return (
        <div className="search-container">
            <form className="searchform">
                <div className="input-container">
                    <div>Where</div>
                    <div>
                        <input 
                        name="where"
                        value={where}
                        onChange={e=>onChange(e)}
                        type="text" 
                        placeholder="City, Airport, address or hotel"/>
                    </div>
                </div>
                <div className="input-container">
                    <div>From</div>
                    <div>
                        <input 
                        name="from"
                        value={from}
                        onChange={e=>onChange(e)}
                        type="datetime-local" placeholder="date" />
                    </div>
                </div>
                <div className="input-container">
                    <div>Until</div>
                    <div>
                        <input 
                        name="until"
                        value={until}
                        onChange={e=>onChange(e)}
                        type="datetime-local" />
                    </div>
                </div>
                <Link to={{
          pathname:"/listing",
          state:{
            params : query
          }
          }}>
                <button 
                className="search-button"><SearchIcon />
                </button>
                </Link>
            </form>
        </div>
    )
}

export default SearchForm


