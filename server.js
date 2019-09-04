const express = require('express')

const port = process.env.PORT || 3000
const routes = require ('./server/routes')

const server = express()
server.use(express.static('public'))
server.use(express.json())
server.use('/api', routes)

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
