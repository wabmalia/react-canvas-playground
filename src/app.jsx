import React from "react"
import Rectangle from "./components/rectangle"
import Layout from "./components/layout"
import Controls from "./containers/controls"
import Player from "./features/player/player"

export const App = () =>
    <Controls>
        <Layout>
            <Player/>
        </Layout>
    </Controls>