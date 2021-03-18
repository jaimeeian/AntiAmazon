/**
 * ThemeContext hook provides information about website's current appearance.
 */

import React, { createContext, useContext, useState, useEffect } from 'react'

function getInitialColorMode (): ThemeState {
    const persistedColorPreference = window.localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference as ThemeState;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light';
}

/**
 * Context and context providers
 */

type ThemeState = 'dark' | 'light'
type ThemeContextProps = {
    colorMode: ThemeState
    setColorMode: React.Dispatch<ThemeState>
}

export const ThemeContext = createContext<ThemeContextProps>({ 
    colorMode: 'light', 
    setColorMode: (v: ThemeState) => console.log("default state") 
})

export default function ThemeStateProvider({ children }: React.PropsWithChildren<{}>) {
    const [ colorMode, rawSetColorMode ] = useState<ThemeState>(getInitialColorMode())

    const setColorMode = (value: ThemeState) => {
        rawSetColorMode(value)
        // Persist it on update
        window.localStorage.setItem('color-mode', value)
    }
    return (
        <ThemeContext.Provider value={{ colorMode, setColorMode }}>
            { children }
        </ThemeContext.Provider>
    )
}

/**
 * Hooks
 * Use these in your components when you want to use or modify state
 * 
 * Usage: 
 * import useThemeState() from './.../ThemeContext.tsx
 * function MyComponent() {
 *      const state = useThemeState
 * }
 */

export function useThemeState() {
    return useContext(ThemeContext).colorMode
}

export function setThemeState() {
    return useContext(ThemeContext).setColorMode
}