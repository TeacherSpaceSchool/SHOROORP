const mongoose = require('mongoose');

const GeoPointShoroSchema = mongoose.Schema({
    point: {
        type: String,
        required: true,
    },
    geo: String,
    region: {
        type: String,
        required: true,
    },
    guidPoint: {
        type: String,
        required: true,
    },
    guidRegion: {
        type: String,
        required: true,
    },
    date: String,
}, {
    timestamps: true
});

const GeoPointShoro = mongoose.model('GeoPointShoro', GeoPointShoroSchema);

module.exports = GeoPointShoro;