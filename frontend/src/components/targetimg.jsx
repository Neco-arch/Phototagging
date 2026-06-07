export default function Targetimg({imgsrc , tagname , hasfound }) {
    if (imgsrc === undefined || tagname === undefined) {
        return null
    }

    if (hasfound) {
        return (
        <div style={{
            opacity : 0.2
        }}>
            <img src={ imgsrc } className='target'/>
            <h3>{tagname}</h3>
        </div>
        )
    }
    return(
        <div>
            <img src={ imgsrc } className='target'/>
            <h3>{tagname}</h3>
        </div>
    )
}