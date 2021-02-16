import React from "react"
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import classNames from 'classnames'

export default function Layout ({ children, className="" }) {
    return(
        <div className="container mx-auto xs:mx-10 sm:mx-10 bg-gray-100 min-h-screen">
            <Header />
            <div className={classNames(
                "px-4 py-8",
                className
            )}>
                { children }
            </div>
            <Footer />
        </div>
    )
}