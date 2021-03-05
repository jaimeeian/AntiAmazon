import React from 'react'
import ThemeContextProvider from './ThemeContext'

/**
 * Wrapper for global states.
 */
export default function StateWrapper({ children }) {
    return(
        <ThemeContextProvider>
            { children }
        </ThemeContextProvider>
    )
}