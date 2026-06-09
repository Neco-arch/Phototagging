import '../assets/css/overlay.css'
import axios from 'axios'

function Redirect_main() {
    window.location.href = '/'
}


export  function Startgameoverlay({ gamestart , onclick , }) {
    if (!gamestart) {
        return (
        <dialog className="Start_Game" open={ !gamestart }>
                <button onClick={onclick} className='Play_game'>Play game</button>
                <button  onClick={Redirect_main} className='Play_game'> Back to homepage</button>
        </dialog> )
    }
    if (gamestart) {
        return null
    }
}

export function Endgameoverlay({ gameended , onclick }) {
        if ( ! gameended ) {
        return null
    }
    return (
        <dialog className="Start_Game" open={ gameended }>
                <button  onClick={onclick} className='Play_game'>Restart Game</button>
                <button  onClick={Redirect_main} className='Play_game'> Back to homepage</button>
        </dialog>)
}