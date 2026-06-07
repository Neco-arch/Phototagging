const { prisma } = require('../lib/prisma.js')

async function Gettarget(req, res, next) {
    const PosX = req.body.posx
    const PosY = req.body.posy
    const character = req.body.character
    const screenWidth = req.body.screenWidth
    const screenHeight = req.body.screenHeight
    const mapchoosen = req.body.map
    if (mapchoosen === undefined || PosX === undefined || PosY === undefined || character === undefined) {
        res.send("Body request is missing ")
    }
    const mapid = await prisma.map.findFirst({
        where: {
            map_name: mapchoosen
        }
    })

    const result = await prisma.coordinate.findMany({
        where: {
            map_id: mapid.id,
            character: character
        }
    })

    if (mapid.length === 0) {
        return res.status(404).json({ error: "Map not found." });
    }

    if (result.length === 0) {
        return res.status(404).json({ error: "Cordinate Or Character not found. " });
    }

    req.target = result
    req.posx = PosX
    req.posy = PosY
    req.screenWidth = screenWidth
    req.screenHeight = screenHeight
    next()
}

async function Validate(req, res, next) {
    const TOLERANCE = 0.005
    const currenttarget = req.target[0]

    console.log(req.screenWidth)
    const dx = (currenttarget.posx - req.posx) / req.screenWidth;
    const dy = (currenttarget.posy - req.posy) / req.screenHeight;
    const distance = Math.sqrt(dx * dx + dy * dy);

    console.log(distance)

    if (distance <= TOLERANCE) {
        res.send("Matched")
    } else {
        res.send("Not matched")
    }

}

module.exports = { Gettarget, Validate } 