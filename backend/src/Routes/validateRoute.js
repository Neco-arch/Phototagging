const { prisma } = require('../lib/prisma.js')
const express = require('express');
const { Gettarget, Validate } = require('../controller/validate_C.js')

const route = express()

route.get('/', (req, res) => {
    res.send('Hello world')
})

route.post('/validate', Gettarget, Validate)


module.exports = route