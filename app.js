const express = require('express')

const app = express()

// this line is required to parse the request body.
app.use(express.json())

// configure the server port.
app.listen(3000, () => {
    console.log('Server runs on port 3000')
})
