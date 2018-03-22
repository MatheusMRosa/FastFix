const mongoose = require('mongoose');
const schema = mongoose.Schema;

const client = new schema({
   nome: {type: 'String'},
    ordens: [
        {
            numero: {type: 'Number'},
            produtos: [schema.Types.ObjectId]
        }
    ]
});

module.exports = mongoose.model('client', client)