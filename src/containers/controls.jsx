import React, { useEffect, useContext, useState } from "react"

const ControlsContext = React.createContext()

const subscribers = []
const Controls = ({ children }) => {
    const keyDown = (event) => {
        subscribers.filter(sub => sub.key == event.code)?.forEach(sub => sub.callback())
    }
    useEffect(() => {
        document.addEventListener("keydown", keyDown)
        return () => document.removeEventListener("keydown", keyDown)
    })

    return (
        <ControlsContext.Provider value={{
            subscribe: (name, key, callback) => subscribers.push({ name, key, callback })
        }} >
            {children}
        </ControlsContext.Provider >
    )
}

export const useControls = (Component) => (props) => {
    const value = useContext(ControlsContext)
    return < Component {...value} {...props} />
}

export default Controls