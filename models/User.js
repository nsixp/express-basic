const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Silahkan isi nama.'],
    },
    email: {
        type: String,
        required: [true, 'Silahkan isi email.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isi email yang valid.']
    }
})

module.exports = mongoose.model('User', UserSchema)