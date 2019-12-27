import React, { useRef, useEffect, useState, useContext } from "react";

const CanvasContext = React.createContext()

const Canvas = ({ children }) => {
    const canvasRef = useRef(null)
    const [context, setContext] = useState()
    useEffect(() => {
        console.log(canvasRef.current.getContext("2d"))
        setContext(canvasRef.current.getContext("2d"))
    }, [])
    return (
        <React.Fragment>
            <canvas ref={canvasRef} style={{ outline: "black 1px solid" }} />
            {
                !context ? null :
                    <CanvasContext.Provider value={context}>
                        {children}
                    </CanvasContext.Provider>
            }
        </React.Fragment>
    )
}

export const useCanvas = (Component) =>
    (props) => <Component canvas={useContext(CanvasContext)} {...props} />

export default Canvas