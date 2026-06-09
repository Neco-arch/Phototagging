const { prisma } = require('../lib/prisma.js')

async function getAllleaderboard(req, res) {
    try {
        const callleaderbaord = await prisma.leaderboard.findMany()

        if (callleaderbaord.length === 0) {
            res.send("No player has attempted this")
        }

        res.send(callleaderbaord)
    } catch (error) {
        res.statusCode(400).send(error)
    }
}

async function adduserecord(req, res) {
    const username = req.body.username
    const time = req.body.time
    try {
        const result = await prisma.leaderboard.create({
            data: {
                username: username,
                time: time
            }
        })

        res.send("Add user succesfully")
    } catch (error) {
        res.send(error)
    }
}


module.exports = { getAllleaderboard, adduserecord }