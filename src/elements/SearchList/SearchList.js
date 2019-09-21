import React from 'react';
import './SearchList.css';

const SearchList = (props) => {
    return(
        <div className="search-list-container"> 
            <div>{props.nombre}</div>
            <div>{props.fecha}</div>
        </div>
    )
}

export default SearchList;
