import React from "react";
import Canvas from "./canvas"

const Layout = ({ children }) => {
    return (
        <Canvas>
            {children}
        </Canvas>
    )
}

export default Layout
