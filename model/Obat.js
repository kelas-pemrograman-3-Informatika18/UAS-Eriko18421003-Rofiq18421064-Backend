const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ObatSchema = new Schema({
    namaObat: {
        type: String
    },
    harga: {
        type: Number
    },
    tahun: {
        type: String,
        default: '2020'
    },
    golongan: {
        type: String
    },
    deskripsi: {
        type: String
    },
    image: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('obat', ObatSchema)