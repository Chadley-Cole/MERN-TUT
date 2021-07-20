const express = require('express');
const cors = require
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors)

app.get('/', (req, res)=> {
    res.send('Hello from express');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})