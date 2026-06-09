export default function Timer({ sec , gameend , gamestart }) {
    if (gameend) {
        return ( null )
    }
    
    if (gamestart) {
        return(<h2>
            { parseFloat(sec) }
        </h2>)
    }


}