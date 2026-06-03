import { useParams } from 'react-router-dom'
import firstmap from '../assets/maps/firstmap.png'
import { useState } from 'react'

export default function Gamepage() {
    const { mapid } = useParams()
    const [imglevel , setimagelevel] = useState(parseInt(mapid))
    let imgsrc
    if (imglevel === 1 ) {
        console.log("Hello world")
        imgsrc = firstmap
    }

    const getcondinate = (e) => {
        console.log(e)
    }

    return (
        <main>
            <div>
                Timer : 
            </div>
            <div className='target'>

            </div>
            <div className="level">
                <img alt={'map' + imglevel} src={imgsrc} onClick={getcondinate}/>
            </div>
        </main>
    )
}