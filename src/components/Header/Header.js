import React from "react";

export default function Header() {    
    return (
    <div className="bg-gray-50 font-semibold py-4">
        <span>Anti-Amazon Shopper</span>
        <nav>
            <ul className="list-outside font-light">
                <li>Home</li>
                <li>Why not Amazon?</li>
                <li className="bg-red-500 text-white font-medium bg-opacity-75">Download the extension</li>
            </ul>
        </nav>
    </div>
    
)
}