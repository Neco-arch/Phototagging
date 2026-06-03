import '../assets/css/targetbox.css'

export default function Targetbox({ visiblity, positionX, positionY }) {
    if (visiblity === false) return null

    if (positionY === 0 && positionX === 0) return null

    return (
        <div className="targetbox" style={{
            position: 'absolute',
            top: positionY,
            left: positionX,
        }}>
        </div>
    )
}