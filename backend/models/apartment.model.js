const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
    rooms: { type: Number, required: true, min: 1},
    name: { type: String, required: true, maxlength: 99},
    price: { type: Number, require: true, min: 1},
    description: {type: String, require: true, maxlength: 999}
}, {
    timestamps: true,
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;