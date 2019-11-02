const mongoose = require('mongoose');

const outXMLShoroSchema = mongoose.Schema({
    data: mongoose.Schema.Types.Mixed,
    date: String,
    guidRegion: String,
    guidOrganizator: String,
}, {
    timestamps: true
});


const outXMLShoro = mongoose.model('outXMLShoro', outXMLShoroSchema);

module.exports = outXMLShoro;