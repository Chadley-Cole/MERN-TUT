const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV )

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Hello from Nodemon');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})