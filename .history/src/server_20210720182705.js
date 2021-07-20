const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(corse)

app.get('/', (req, res)=> {
    res.send('Hello from express');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})