import React from "react"
import Header from "../Header/Header"

export default function Layout ({children}) {
    return(
        <div className="container mx-auto xs:mx-10 sm:mx-10 prose bg-gray-100 min-h-screen">
            <Header />
            {children}
        </div>
    )
}