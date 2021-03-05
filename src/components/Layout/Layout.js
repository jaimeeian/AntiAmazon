import React from "react"
import StateWrapper from './StateWrapper'
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import classNames from 'classnames'

export default function Layout ({ children, className="" }) {
    return(
        <StateWrapper>
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <Header />
                <div className={classNames(
                    "px-4 lg:px-8 py-8",
                    className
                )}>
                    { children }
                </div>
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </StateWrapper>
    )
}