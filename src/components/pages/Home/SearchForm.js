import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './search.css'
import {Link} from 'react-router-dom'
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Typography from "@material-ui/core/Typography";

function SearchForm() {
    const [query,setQuery] = React.useState({
        where:'',
        from:'',
         to:''
      })

      const {from,to,where} = query
      const onChange = (e) =>setQuery({ ...query, [e.target.name]: e.target.value })
      function setP(e) {
        console.log(e.label)
        setQuery({
            where:e.label
        })
      }
    return (
        <div className="search-container">
            <form className="searchform">
                <div className="input-container">
                    <GooglePlacesAutocomplete
                        autocompletionRequest={{
                            componentRestrictions: {
                                country: ['us', 'ca'],
                            }
                        }}
                        apiOptions={{ language: 'en', region: 'us' }}
                        selectProps={{
                            onChange: setP,
                            placeholder:"Where"
                        }}
                        apiKey="AIzaSyDDqsqjB6WrkHlUZgXBPCsHXXpZrBWfL1E"
                    />
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
                        name="to"
                        value={to}
                        onChange={e=>onChange(e)}
                        type="datetime-local" />
                    </div>
                </div>
                <Link to={{
          pathname:"/listings-search?where="+query.where+"&from="+query.from+"&to="+query.to,
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


