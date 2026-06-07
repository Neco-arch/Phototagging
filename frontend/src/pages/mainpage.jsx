import { useEffect, useState } from 'react'
import firstmap from '../assets/maps/firstmap.png'
import MapSelectdiv from '../components/mapselect'

export default function Mainpage() {
    const [mapselection , savemapselection] = useState([
        "Castle" , 
    ])

const redirecttomap = (e) => {
    const selectedid = e.target.id
    const mapselected = mapselection[selectedid - 1]

    window.location.href = "/map/" + mapselected
}

    return (
        <main>
            <h2>To start game press image </h2>
            <div className="MapSelector" onClick={redirecttomap}>
                <MapSelectdiv imgsrc={firstmap} maplevel={1}/>
            </div>
        </main>
    )
}

