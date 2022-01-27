import React from 'react';

const SearchBar = ({value, onChange}) => {
    return (
        <input
            type="text"
            name="term"
            className="form-control my-3"
            placeholder="Search..." 
            value= {value}
            onChange= {e => onChange(e.currentTarget.value)} />
    );
}
 
export default SearchBar;