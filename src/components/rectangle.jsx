import { useCanvas } from "./canvas"

const RectangleWithCanvas = ({
    canvas,
    pos = { x: 0, y: 0 },
    size = { width: 0, height: 0 },
    border = { size: 1, color: "black" }
}) => {
    canvas.beginPath()
    canvas.rect(pos.x, pos.y, size.width, size.height)
    canvas.lineWidth = border.size
    canvas.strokeStyle = border.color
    canvas.stroke()
    return null
}

const Rectangle = useCanvas(RectangleWithCanvas)
export default Rectangle