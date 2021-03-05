import React from "react"
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import classNames from 'classnames'
import { useThemeState } from '../../state/ThemeContext'

/**
 * Use this component to use the Layout in other pages/components.
 * Mainly used as a container component for state.
 */
export default function Layout ({ children, className="" }) {
    const { darkMode } = useThemeState()
    return(
        <div className={classNames(
            "bg-gray-100 min-h-screen flex flex-col",
            darkMode ? `bg-gray-800 text-gray-100` : `bg-gray-100 text-black`
        )}>
            <Header />
            <main className={classNames("px-4 lg:px-8 py-8", className)}>
                { children }
            </main>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}