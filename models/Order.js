const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Silahkan isi ID user.']
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Silahkan isi ID produk.']
    },
    amount: {
        type: Number,
        required: [true, 'Silahkan isi jumlah produk.']
    },
    date: {
        type: Date,
        required: [true, 'Silahkan isi tanggal pesanan.']
    }
});

module.exports = mongoose.model('Order', OrderSchema);