const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const user = require('./api/user');
const client = require('./api/client');
const product = require('./api/product');
const typeOfService = require('./api/typeOfService');
const cors = require('cors')
 

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use("/api/user", user);

app.use('/api/client', client);

app.use('/api/product', product);

app.use('/api/typeofservice', typeOfService);



app.listen(3030, '0.0.0.0', () => {

        console.log('He is alive');
        mongoose.connect('mongodb://fastfix:fastfix@ds036967.mlab.com:36967/fastfix');


});
