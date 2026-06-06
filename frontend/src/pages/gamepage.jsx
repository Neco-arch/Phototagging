import '../assets/css/gamepage.css'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import Targetbox from '../components/targetbox'
import Tag from '../components/tag'
import axios from 'axios'

// First map target 

import firstmap from '../assets/maps/firstmap.png'
import First_target from '../assets/maps/firstmap_target/First.png';
import Second_target from '../assets/maps/firstmap_target/Second.png'
import Third_target from '../assets/maps/firstmap_target/Thrid.png'


export default function Gamepage() {
    const [renderKey, setRenderKey] = useState(0);
    const { mapid } = useParams()
    const [imglevel , setimagelevel] = useState(parseInt(mapid))
    const [targetboxvisiblity , settargetboxvisiblity] = useState(false)
    const [coordinate , setcoordinate] = useState({
        x : 0 , y : 0
    })

    const [targetdata , savetargetdata] = useState([
        {
            name : "Exicting guy",
            found : false,
        },
        {
            name : "Panic guy",
            found : false,
        }, 
        {
            name : "Chill guy",
            found : false,
        }
    ])
    let imgsrc

    if (imglevel === 1 ) {
        imgsrc = firstmap
    }

    const getcondinate = (e) => {
        setcoordinate({
            ...coordinate , x : e.clientX , y : e.clientY
        })
        settargetboxvisiblity(true)
    }

    const chooseTarget = (e) => {
    }



    const clicktag = (e) => {
        console.log(e.target.dataset.user)
    }
    return (
        <main>
            <div>
                Timer : 
            </div>
            <div className='target_wrapper'>
                <div>
                    <img src={ First_target } className='target'/>
                    <h3>Exicting guy</h3>
                </div>
                <div>
                    <img src={ Second_target} className='target'/>
                    <h3>Panic guy</h3>
                </div>
                <div>
                    <img src={ Third_target} className='target'/>
                    <h3>Chill guy</h3>
                </div>
            </div>
            <div className="level">
                    <Targetbox visiblity={targetboxvisiblity} positionY={coordinate.y} positionX={coordinate.x}/>
                    <Tag name={ targetdata[0].name } visiblity={targetboxvisiblity} posX={coordinate.x - 30} posY={coordinate.y + 20} onclick={clicktag} data={targetdata[0].name}/>
                    <Tag name={ targetdata[1].name } visiblity={targetboxvisiblity} posX={coordinate.x - 30} posY={coordinate.y + 50} onclick={clicktag} data={targetdata[1].name}/>
                    <Tag name={ targetdata[2].name } visiblity={targetboxvisiblity} posX={coordinate.x - 30} posY={coordinate.y + 80} onclick={clicktag} data={targetdata[2].name}/>
                <img alt={'map' + imglevel} src={imgsrc} onClick={getcondinate}/>
            </div>
        </main>
    )
}