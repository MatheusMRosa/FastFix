const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema ({
    profile: {type: 'String'},
    typeUser: {type: 'Number'},
    user: {type: 'String'},
    pass: {type: 'String'}
});

module.exports = mongoose.model('user', user);