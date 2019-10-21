const mongoose = require('mongoose');

const TaraShoroSchema = mongoose.Schema({
    name: String,
    size: String,
    guid: String
}, {
    timestamps: true
});


const TaraShoro = mongoose.model('TaraShoro', TaraShoroSchema);

module.exports = TaraShoro;