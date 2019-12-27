import React, { useState } from "react"
import Rectangle from "../../components/rectangle"
import { useControls } from "../../containers/controls"
import { useEffect } from "react"

const Player = (controls) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [direction, setDirection] = useState({ x: 0, y: 0 })

    const move = (direction) => {
        setPosition({ x: position.x + direction.x, y: position.y + direction.y })
    }

    useEffect(() => {
        controls.subscribe("Player", "KeyW", () => setDirection({ x: 0, y: -10 }))
        controls.subscribe("Player", "KeyA", () => setDirection({ x: -10, y: 0 }))
        controls.subscribe("Player", "KeyS", () => setDirection({ x: 0, y: 10 }))
        controls.subscribe("Player", "KeyD", () => setDirection({ x: 10, y: 0 }))
    }, [])

    useEffect(() => {
        move(direction)
    }, [direction])

    return <Rectangle pos={position} size={{ width: 10, height: 10 }} />
}

export default useControls(Player)