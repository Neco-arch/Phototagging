const { prisma } = require('../lib/prisma.js')

async function Gettarget(req, res, next) {
    const PosX = req.body.posx
    const PosY = req.body.posy
    const mapchoosen = req.body.map
    if (mapchoosen === undefined || PosX === undefined || PosY === undefined) {
        res.send("Body request is missing ")
    }
    const mapid = await prisma.map.findFirst({
        where: {
            map_name: mapchoosen
        }
    })

    const result = await prisma.coordinate.findMany({
        where: {
            map_id: mapid.id
        }
    })

    if (mapid.length === 0) {
        return res.status(404).json({ error: "Map not found." });
    }

    if (result.length === 0) {
        return res.status(404).json({ error: "Cordinate not found." });
    }

    req.alltarget = result
    req.posx = PosX
    req.posy = PosY

    next()
}

async function Validate(req, res, next) {
    for (let i = 0 ; i < req.alltarget.length ; i++) {
        
    }

}

module.exports = { Gettarget, Validate } 