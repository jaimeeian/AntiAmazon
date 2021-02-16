import React from 'react'
import classNames from 'classnames'

export default function SearchBar({value, onChange, placeholder="Search here...", className=""}) {
    return(
        <input 
            type="text"
            className={classNames(
                "block py-3 px-5 rounded-full min-w-full sm:min-w-0 border-black border-1",
                className
            )}
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
        />
    )
}
