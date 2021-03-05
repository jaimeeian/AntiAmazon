import "./src/styles/index.css"
import React from 'react'
import StateWrapper from './src/state/StateWrapper'

export const wrapRootElement = ({ element }) => {
    return(
        <StateWrapper>
            { element }
        </StateWrapper>
    )
}