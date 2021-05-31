import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './search.css'
import { Redirect } from 'react-router';

function SearchForm() {
    return (
        <div className="search-container">
            <form className="searchform">
                <div className="input-container">
                    <div>Where</div>
                    <div>
                        <input type="text" placeholder="City, Airport, address or hotel"/>
                    </div>
                </div>
                <div className="input-container">
                    <div>From</div>
                    <div>
                        <input type="datetime-local" placeholder="date" />
                    </div>
                </div>
                <div className="input-container">
                    <div>Until</div>
                    <div>
                        <input type="datetime-local" />
                    </div>
                </div>
                <button className="search-button"><SearchIcon /></button>
            </form>
        </div>
    )
}

export default SearchForm


