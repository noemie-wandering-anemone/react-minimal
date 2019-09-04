const express = require('express')


const router = express.Router()

const request = require('superagent')


const xml2jsParser = require('superagent-xml2jsparser')

module.exports = router

router.get('/', (req, res) => {
    request.get('https://icanhazdadjoke.com/slack')
    // .accept('xml')
    // .parse(xml2jsParser)
    .then(response => {
        
       res.json(response.body)
    })
    .catch(e => {
        res.status(500).send(e.message)
    })
})
