const express = require('express');
const client = require('../entities/client');

const app = express();

app.get("", (req,res) => {
    client.find({}, (err, data) => {
        if (err) {
            return res.sendStatus(500)
        }
        res.json(data || [])
    })
})

app.put("", (req,res) => {
    let _new = new client (req.body)
    _new.save((err, saved) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(saved)
    })
})

app.delete("/:id", (req, res) => {
    //TODO fazer modificação para ativo e inativo
    client.findByIdAndRemove(id, (err, data) => {
        if (err){
            return res.sendStatus(500)
        }
        return res.sendStatus(200)
    })
})

app.post("/:id", (req, res) => {
    client.findByIdAndUpdate(id, req.body, (err, data) => {
        if (err) {
            return res.sendStatus(500)
        }
        return res.sendStatus(200)
    })
})

module.exports = app