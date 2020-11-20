import React from "react"

export default function Layout ({children}) {
    return(
        <div className="container mx-auto xs:mx-10 sm:mx-10 prose bg-gray-100 min-h-screen">
            {children}
        </div>
    )
}