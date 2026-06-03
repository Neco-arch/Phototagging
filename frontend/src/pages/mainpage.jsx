import { useState } from 'react'
import firstmap from '../assets/maps/firstmap.png'
import MapSelectdiv from '../components/mapselect'

export default function Mainpage() {

    const [userselect , Saveuserselect] = useState(null)

const redirecttomap = (e) => {
    const selected = e.target.id
    Saveuserselect(selected)
    if (selected !== null) {
        window.location.href = 'map/' + selected
    }
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

