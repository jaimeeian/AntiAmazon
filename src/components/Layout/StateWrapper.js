import React from 'react'
import ThemeContextProvider from '../../state/ThemeContext'

/**
 * Wrapper for global states.
 * ONLY use as a parent to the <Layout> component
 */
export default function StateWrapper({ children }) {
    return(
        <ThemeContextProvider>
            { children }
        </ThemeContextProvider>
    )
}