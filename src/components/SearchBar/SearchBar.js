import React from 'react'

export default function SearchBar({value, onChange}) {
    return(
        <input 
            type="text"
            className="p-2 rounded-full border-black" 
            value={value} 
            onChange={onChange} 
            placeholder="search here..." 
        />
    )
}
