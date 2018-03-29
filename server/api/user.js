const express = require('express');
const user = require('../entities/user');

const app = express();

app.get("", (req,res) => {
    user.find({}, {__v: false, pass: false}, (err, data) => {
        if (err) {
            return res.sendStatus(500)
        }
        res.json(data || [])
    })
})

module.exports = app

