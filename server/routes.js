const express = require('express')


const router = express.Router()

const request = require('superagent')


const xml2jsParser = require('superagent-xml2jsparser')

module.exports = router



router.get('/penguin', (req, res) => {
    request.get('https://reststop.randomhouse.com/resources/authors?start=0&max=0&expandLevel=1&firstName=Ernest&lastName=Hemingway')
    .accept('xml')
    .parse(xml2jsParser)
    .then(response => {
        console.log(response.body)
       let author = {
        authorName:response.body.authors.author[0].authordisplay,
        spotlight:response.body.authors.author[0].spotlight
      } 
    
      res.json(author)
    })
    .catch(e => {
        res.status(500).send(e.message)
    })
})

router.get('/jokes', (req, res) => {
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
