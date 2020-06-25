const GeoShoro = require('../models/geoPointShoro');

const getGeoShoro = async (data) => {
    return await GeoShoro
        .find({
            guidRegion: {'$regex': data.guidRegion, '$options': 'i'},
            guidPoint: {'$regex': data.guidPoint, '$options': 'i'}
        })
}

const saveGeoShoro = async (data) => {
    if((await GeoShoro.find({guidRegion: data.guidRegion, guidPoint: data.guidPoint})).length===0){
        let _object = new GeoShoro({
            point: data.point,
            geo: data.geo,
            region: data.region,
            guidPoint: data.guidPoint,
            guidRegion: data.guidRegion});
        await GeoShoro.create(_object);
    } else {
        let _object = {
            point: data.point,
            geo: data.geo,
            region: data.region,
            guidPoint: data.guidPoint,
            guidRegion: data.guidRegion};
        await GeoShoro.updateMany({
            guidRegion: data.guidRegion,
            guidPoint: data.guidPoint
        }, _object);
    }
    return await GeoShoro.find({
        guidRegion: {'$regex': data.guidRegion, '$options': 'i'},
        guidPoint: {'$regex': data.guidPoint, '$options': 'i'}
    })
}

module.exports.getGeoShoro = getGeoShoro;
module.exports.saveGeoShoro = saveGeoShoro;