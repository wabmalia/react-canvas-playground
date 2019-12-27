import React, {useEffect, useContext} from "react"

const ControlsContext = React.createContext()

const Controls = ({ children }) => {
    const keyDown = (code) => console.log(code)
    useEffect(() => {
        document.addEventListener("keydown", keyDown)
        return () => document.removeEventListener("keydown", keyDown)
    })
    return (
        <ControlsContext.Provider>
            {children}
        </ControlsContext.Provider>
    )
}

export const useControls = (Component) =>
    (props) => <Component controls={useContext(ControlsContext)} {...props} />

export default Controls