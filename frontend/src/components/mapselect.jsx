export default function MapSelectdiv({imgsrc , maplevel }) {
    return (
        <div className={"map_" + maplevel}>
            <img src={imgsrc} alt={"map_" + maplevel} id={maplevel}/>
            <h2>Map level 1</h2>
        </div>
    ) 
}