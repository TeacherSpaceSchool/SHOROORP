const GeoShoro = require('../models/geoPointShoro');

const getGeoShoro = async (data) => {
    console.log(await GeoShoro
        .find())
    return await GeoShoro
        .find({
            guidRegion: {'$regex': data.guidRegion, '$options': 'i'},
            date: data.date,
            guidPoint: {'$regex': data.guidPoint, '$options': 'i'}
        })
}

const saveGeoShoro = async (data) => {
    console.log(data.date)
    if((await GeoShoro.find({guidRegion: data.guidRegion, date: data.date, guidPoint: data.guidPoint})).length===0){
        let _object = new GeoShoro({
            point: data.point,
            geo: data.geo,
            region: data.region,
            guidPoint: data.guidPoint,
            guidRegion: data.guidRegion,
            date: data.date,});
        await GeoShoro.create(_object);
    } else {
        let _object = {
            point: data.point,
            geo: data.geo,
            region: data.region,
            guidPoint: data.guidPoint,
            guidRegion: data.guidRegion,
            date: data.date};
        await GeoShoro.updateMany({guidRegion: data.guidRegion,
            date: data.date,
            guidPoint: data.guidPoint}, _object);
    }
    return await GeoShoro
    .find({
        guidRegion: {'$regex': data.guidRegion, '$options': 'i'},
        date: data.date,
        guidPoint: {'$regex': data.guidPoint, '$options': 'i'}
    })
}

module.exports.getGeoShoro = getGeoShoro;
module.exports.saveGeoShoro = saveGeoShoro;