const Order = require('../models/Order');

module.exports = {
    index: async (req, res) => {
        try {
            const orders = await Order.find()
                .populate('user', 'name')
                .populate('product', 'name');

            if (orders.length > 0) {
                res.status(200).json({
                    status: true,
                    data: orders,
                    method: req.method,
                    url: req.url
                });
            } else {
                res.json({
                    status: false,
                    message: "Data masih kosong."
                });
            }
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    },

    show: async (req, res) => {
        try {
            const order = await Order.findById(req.params.id)
                .populate('user', 'name')
                .populate('product', 'name');

            if (order) {
                res.status(200).json({
                    status: true,
                    data: order,
                    method: req.method,
                    url: req.url,
                    message: "Data berhasil ditemukan."
                });
            } else {
                res.status(404).json({
                    status: false,
                    message: "Data tidak ditemukan."
                });
            }
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    },

    store: async (req, res) => {
        try {
            const order = await Order.create(req.body);
            res.status(200).json({
                status: true,
                data: order,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambah."
            });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
                .populate('user', 'name')
                .populate('product', 'name');

            if (order) {
                res.status(200).json({
                    status: true,
                    data: order,
                    method: req.method,
                    url: req.url,
                    message: "Data berhasil diubah."
                });
            } else {
                res.status(404).json({
                    status: false,
                    message: "Data tidak ditemukan."
                });
            }
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const order = await Order.findByIdAndDelete(req.params.id);
            if (order) {
                res.json({
                    status: true,
                    method: req.method,
                    url: req.url,
                    message: "Data berhasil dihapus."
                });
            } else {
                res.status(404).json({
                    status: false,
                    message: "Data tidak ditemukan."
                });
            }
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
};