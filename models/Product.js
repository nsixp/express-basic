const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Silahkan isi nama.'],
    },
    desc: {
        type: String,
        required: [true, 'Silahkan isi deskripsi.'],
    },
    price: {
        type: Number,
        required: [true, 'Silahkan isi harga.'],
    },
    stock: {
        type: Number,
        required: [true, 'Silahkan isi stok.'],
    }
})

module.exports = mongoose.model('Product', ProductSchema)