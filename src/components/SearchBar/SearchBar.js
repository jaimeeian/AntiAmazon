import React from 'react'

export default function SearchBar({value, onChange, className=""}) {
    return(
        <input 
            type="text"
            className={"block p-2 rounded-full border-black" + " " + className}
            value={value} 
            onChange={onChange} 
            placeholder="search here..." 
        />
    )
}
