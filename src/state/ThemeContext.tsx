/**
 * ThemeContext hook provides information about website's current appearance.
 */

import React, { createContext, useContext, useReducer } from 'react'

/** 
 * Type definitions for theme state
 */

interface ThemeState {
    darkMode: boolean
}

interface ThemeStateContextProps {
    state: ThemeState,
    dispatch: React.Dispatch<Action>
}

type Action =
    | { type: 'SET_DARK_MODE', payload: boolean }
    | { type: 'TOGGLE_DARK_MODE', payload: undefined }

/**
 * Writes new values to state.
 * @param {ThemeState} state - previous state of theme
 * @param {Action} action - new action to take, and data payload for that action
 */
function themeStateReducer(state: ThemeState, action: Action) {
    const { type, payload } = action
    switch (type) {
        case 'SET_DARK_MODE':
            return {
                ...state,
                darkMode: payload
            }
        case 'TOGGLE_DARK_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            throw new Error(`${type} isn't a valid action type.`)
    }
}

/**
 * Context and context providers
 */

const initialState = {
    darkMode: false
}

const ThemeContext = createContext<ThemeStateContextProps>({
    state: initialState,
    dispatch: () => console.log('placeholder dispatch function')
} as ThemeStateContextProps)

export default function ThemeStateProvider({ children }: React.PropsWithChildren<{}>) {
    const [ state, dispatch ] = useReducer(themeStateReducer, initialState)
    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
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
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("useThemeState() must be called from within a ThemeProvider component or its descendant.")
    return context.state
}

export function useThemeReducer() {
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("useThemeReducer() must be called from within a ThemeProvider component or its descendant.")
    return context.dispatch
}