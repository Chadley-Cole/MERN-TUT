const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (, req)=> {
    res.send('Hello from express');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})