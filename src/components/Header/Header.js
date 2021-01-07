import React from "react";

export default function Header() {
    const [menuIsOpen,setMenu] = React.useState(false)   
    return (
    <div className="bg-gray-50 font-semibold py-4">
        <span>Anti-Amazon Shopper</span>
        <nav>
            <button className="inline-block inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick = {() => setMenu(!menuIsOpen)}>
                toggle menu
            </button>
            <ul className={menuIsOpen? "list-outside font-light list-none" : "hidden"}>
                <li>Home</li>
                <li>Why not Amazon?</li>
                <li className="bg-red-500 text-white font-medium bg-opacity-75">Download the extension</li>
            </ul>
        </nav>
    </div>
    
)
}