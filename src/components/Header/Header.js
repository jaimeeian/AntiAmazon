import React from "react";

export default function Header() {
    const [menuIsOpen,setMenu] = React.useState(false)   
    return (
    <div className="bg-gray-50 font-semibold py-4">
        <span>Anti-Amazon Shopper</span>
        <nav>
            <button className={"inline-block"} onClick = {() => setMenu(!menuIsOpen)}>
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