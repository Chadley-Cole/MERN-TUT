const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/')

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})