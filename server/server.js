const express = require("express");

const app = express();

app.post('/memes', (req, res) => {
    console.log(req.body)
    console.log("hi")
})

app.listen(8080, function () {
    console.log('listening on 8080');
})