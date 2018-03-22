const express = require('express');
const mongoose = require('mongoose');
const client = require('./entities/client');

const app = express();



app.get('/api/client',(req,res) => {
    //populate
    client.find({}, (err, list)=>{
        res.json(list);
    })

});


app.get('/api/addjose',(req,res) => {
    let jose = new client({
        nome: 'Jose',
        ordens: [
            {
                numero: 1
            }
        ]
    });
    jose.save((error, saved) => {
        if (error) {
            console.error("Error: ",error);
            return res.sendStatus(500);
        }
        res.json(saved);
    });
});



app.listen(3030,'0.0.0.0', () => {

        console.log('He is alive');
        mongoose.connect('mongodb://localhost/test');

        console.log('client: ',client.find({}));

});