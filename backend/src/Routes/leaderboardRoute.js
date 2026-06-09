const express = require('express');
const { getAllleaderboard, adduserecord } = require('../controller/leaderboard.js')
const leaderboard = express()

leaderboard.get('/', getAllleaderboard,)
leaderboard.post('/adduser', adduserecord   )

module.exports = leaderboard