const Product = require('../models/Product')

module.exports = {
    index: async (req, res) => {
        try {
            const products = await Product.find()
            if (products.length > 0) {
                res.status(200).json({
                    status: true,
                    data: products,
                    method: req.method,
                    url: req.url
                })
            } else {
                res.json({
                    status: false,
                    message: "Data masih kosong."
                })
            }
        } catch (error) {
            res.status(400).json({ success: false })
        }
    },

    show: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: product,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditemukan."
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    },

    store: async (req, res) => {
        try {
            const product = await Product.create(req.body)
            res.status(200).json({
                status: true,
                data: product,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambah."
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    },

    update: async (req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body,{
                new: true,
                runValidator: true
            })
            res.status(200).json({
                status: true,
                data: product,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah."
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    },

    delete: async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus."
            })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    }
}