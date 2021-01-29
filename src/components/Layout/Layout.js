import React from "react"
import Header from "../Header/Header"
import Footer from '../Footer/Footer'

export default function Layout ({ children }) {
    return(
        <div className="container mx-auto xs:mx-10 sm:mx-10 bg-gray-100 min-h-screen px-4">
            <Header />
            { children }
            <Footer />
        </div>
    )
}