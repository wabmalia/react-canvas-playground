import React, { useEffect } from "react"
import Rectangle from "./components/rectangle"
import Layout from "./components/layout"
import Controls from "./containers/controls"

export const App = () =>
    <Controls>
        <Layout>
            <Rectangle onKeyDown={(event) => console.log(event)} pos={{ x: 10, y: 10 }} size={{ width: 10, height: 10 }} />
        </Layout>
    </Controls>