const mongoose = require('mongoose');
const schema = mongoose.Schema;

const client = new schema({
    name: {type: 'String'},
    cpf_cpnj: {type: 'String'},
    typeClient: [[{type: 'String'}]],
    company: {type: 'String'},
    phone: {type: 'Number'},
    email: {type: 'String'},
    address: {type: 'String'},
    orderOfServices: [
        {
            descService: {type: 'String'},
            time: {type: 'String'},
            price: {type: 'Number'},
            products: [{type: schema.Types.ObjectId, ref: 'products'}],
            typeOfService: [{type: schema.Types.ObjectId, ref: 'typeOfService'}]
        }
    ]
});

module.exports = mongoose.model('client', client);