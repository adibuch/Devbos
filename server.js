const express = require('express');
const app = express();

app.get('./',(res,req) => {
    res.send("Hello");
    console.log("req");
});

module.exports = app;
