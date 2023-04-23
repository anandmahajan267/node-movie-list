const express = require('express')
const appRouter = require('./routes/app.router');
const app = express()

// this line is required to parse the request body.
app.use(express.json())
app.use('/api', appRouter);
// configure the server port.
app.listen(3000, () => {
    console.log('Server runs on port 3000')
})
