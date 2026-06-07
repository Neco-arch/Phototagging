import "../assets/css/gamepage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Targetbox from "../components/targetbox";
import Tag from "../components/tag";
import axios from "axios";
import Targetimg from "../components/targetimg";

// First map target

import firstmap from "../assets/maps/firstmap.png";
import First_target from "../assets/maps/firstmap_target/First.png";
import Second_target from "../assets/maps/firstmap_target/Second.png";
import Third_target from "../assets/maps/firstmap_target/Thrid.png";

export default function Gamepage() {
  let imgsrc;
  const [renderKey, setRenderKey] = useState(0);
  const { mapname } = useParams();
  const [targetboxvisiblity, settargetboxvisiblity] = useState(false);
  const [coordinate, setcoordinate] = useState({
    x: 0,
    y: 0,
    normalizeX : 0,
    normalizeY : 0,
  });

  const [targetdata, savetargetdata] = useState([
    {
      name: "Exicting guy",
      found: false,
    },
    {
      name: "Panic guy",
      found: false,
    },
    {
      name: "Chill guy",
      found: false,
    },
  ]);

  if (mapname === "Castle") {
    imgsrc = firstmap;
  }

  
  const getcondinate = (e) => {
    const rect = e.target.getBoundingClientRect();
    const absx = (e.clientX - rect.left) / rect.width;
    const absy = (e.clientY - rect.top) / rect.height;
    setcoordinate(prev => ({ ...prev, x: e.clientX, y: e.clientY, normalizeX : absx , normalizeY : absy }));
    settargetboxvisiblity(true);
  };

  const chooseTarget = async (e, charactername) => {
    const requestbody = {
      map: "Castle",
      posx: coordinate.normalizeX,
      posy: coordinate.normalizeY,
      character: charactername,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
    const request = await axios.post(
      "http://localhost:3000/validate",
      requestbody,
    );
    console.log(request);
    if (request.data === "Matched") {
      for (let i = 0; i < targetdata.length; i++) {
        if (targetdata[i].name === charactername) {
          savetargetdata(
            targetdata.map((target) =>
              target.name === charactername
                ? { ...target, found: true }
                : target,
            ),
          );
        }
      }
    }
  };

  const clicktag = (e) => {
    chooseTarget(e , e.target.dataset.user)
  };
  return (
    <main>
      <div className="timerwarpper"></div>
      <div className="target_wrapper">
        <Targetimg
          imgsrc={First_target}
          tagname={targetdata[0].name}
          hasfound={targetdata[0].found}
        />
        <Targetimg
          imgsrc={Second_target}
          tagname={targetdata[1].name}
          hasfound={targetdata[1].found}
        />
        <Targetimg
          imgsrc={Third_target}
          tagname={targetdata[2].name}
          hasfound={targetdata[2].found}
        />
      </div>
      <div className="level">
        <Targetbox
          visiblity={targetboxvisiblity}
          positionY={coordinate.y}
          positionX={coordinate.x}
        />
        <Tag
          name={targetdata[0].name}
          visiblity={targetboxvisiblity}
          posX={coordinate.x - 30}
          posY={coordinate.y + 20}
          onclick={clicktag}
          data={targetdata[0].name}
          hasfound={targetdata[0].found}
        />
        <Tag
          name={targetdata[1].name}
          visiblity={targetboxvisiblity}
          posX={coordinate.x - 30}
          posY={coordinate.y + 50}
          onclick={clicktag}
          data={targetdata[1].name}
          hasfound={targetdata[1].found}
        />
        <Tag
          name={targetdata[2].name}
          visiblity={targetboxvisiblity}
          posX={coordinate.x - 30}
          posY={coordinate.y + 80}
          onclick={clicktag}
          data={targetdata[2].name}
          hasfound={targetdata[2].found}
        />
        <img alt={mapname} src={imgsrc} onClick={getcondinate} />
      </div>
    </main>
  );
}
