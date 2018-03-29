const express = require('express');
const product = require('../entities/product');

const app = express();

app.get("", (req,res) => {
    product.find({}, (err, data) => {
        if (err) {
            return res.sendStatus(500)
        }
        res.json(data || [])
    })
})

module.exports = app