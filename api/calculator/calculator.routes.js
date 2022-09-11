const express = require('express')
const { calculate } = require('./calculator.controller')

const router = express.Router()

router.get('/', calculate)

module.exports = router