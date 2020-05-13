const express = require('express')

const server = express()


server.get('/', (request, response) => {
  return response.json({ok: true})
})

server.listen(3000, () => console.log('server on'))