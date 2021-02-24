import React from "react"
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import classNames from 'classnames'

export default function Layout ({ children, className="" }) {
    return(
        <div className="bg-gray-100 min-h-screen d-flex">
            <Header />
            <div className={classNames(
                "px-4 lg:px-8 py-8",
                className
            )}>
                { children }
            </div>
            <Footer />
        </div>
    )
}