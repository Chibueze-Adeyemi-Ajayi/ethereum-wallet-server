const express = require('express');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
    //res.sendStatus(200);
    res.send("Hello world! modified");
    res.end()
});

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${port}`);
});