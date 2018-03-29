const express = require('express');
const typeOfService = require('../entities/typeOfService');

const app = express();

app.get("", (req,res) => {
    typeOfService.find({}, (err, data) => {
        if (err) {
            return res.sendStatus(500)
        }
        res.json(data || [])
    })
})

module.exports = app