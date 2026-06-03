import { useParams } from 'react-router-dom'
import firstmap from '../assets/maps/firstmap.png'
import { useState } from 'react'
import Targetbox from '../components/targetbox'

export default function Gamepage() {
    const { mapid } = useParams()
    const [imglevel , setimagelevel] = useState(parseInt(mapid))
    const [targetboxvisiblity , settargetboxvisiblity] = useState(false)
    const [coordinate , setcoordinate] = useState({
        x : 0 , y : 0
    })
    let imgsrc

    if (imglevel === 1 ) {
        imgsrc = firstmap
    }

    const getcondinate = (e) => {
        console.log(e)
        setcoordinate({
            ...coordinate , x : e.clientX , y : e.clientY
        })
        settargetboxvisiblity(true)
    }

    return (
        <main>
            <div>
                Timer : 
            </div>
            <div className='target'>

            </div>
            <div className="level">
                <div>
                    <Targetbox visiblity={targetboxvisiblity} positionY={coordinate.y} positionX={coordinate.x}/>
                </div>
                <img alt={'map' + imglevel} src={imgsrc} onClick={getcondinate}/>
            </div>
        </main>
    )
}