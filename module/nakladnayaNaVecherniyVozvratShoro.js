const NakladnayaNaVecherniyVozvratShoro = require('../models/nakladnayaNaVecherniyVozvratShoro');
const OrganizatorShoro = require('../models/organizatorShoro');
const mongoose = require('mongoose');
const skip1 = require('../module/const').skip;
const getToday = require('../module/const').getToday;

const getNakladnayaNaVecherniyVozvratShoroOrganizator = async (search, sort, skip, id) => {
    let findResult = [], data = [], count;
        const row = [
            'организатор',
            'дата',
        ];
        let organizator = await OrganizatorShoro.findOne({user: id})
        let guidRegion = organizator.guidRegion
        let guidOrganizator = organizator.guid
        if(sort == undefined||sort=='')
            sort = '-updatedAt';
        else if(sort[0]=='дата'&&sort[1]=='descending')
            sort = '-data';
        else if(sort[0]=='дата'&&sort[1]=='ascending')
            sort = 'data';
        if(search == ''){
            count = await NakladnayaNaVecherniyVozvratShoro.count({guidOrganizator: guidOrganizator, guidRegion: {'$regex': guidRegion, '$options': 'i'}});
            findResult = await NakladnayaNaVecherniyVozvratShoro
                .find({guidOrganizator: guidOrganizator, guidRegion: {'$regex': guidRegion, '$options': 'i'}})
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else if (mongoose.Types.ObjectId.isValid(search)) {
            count = await NakladnayaNaVecherniyVozvratShoro.count({
                guidOrganizator: guidOrganizator, guidRegion: {'$regex': guidRegion, '$options': 'i'},
                $or: [
                    {_id: search},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await NakladnayaNaVecherniyVozvratShoro.find({
                guidOrganizator: guidOrganizator, guidRegion: {'$regex': guidRegion, '$options': 'i'},
                $or: [
                    {_id: search},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        } else {
            count = await NakladnayaNaVecherniyVozvratShoro.count({
                guidOrganizator: guidOrganizator, guidRegion: {'$regex': guidRegion, '$options': 'i'},
                $or: [
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await NakladnayaNaVecherniyVozvratShoro.find({
                guidOrganizator: guidOrganizator, guidRegion: {'$regex': guidRegion, '$options': 'i'},
                $or: [
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        }
        for (let i=0; i<findResult.length; i++){
            data.push([findResult[i].organizator + ': ' + findResult[i].region, findResult[i].data, findResult[i].guidOrganizator, findResult[i].guidRegion]);
        }
        return {data: data, count: count, row: row}

}

const getNakladnayaNaVecherniyVozvratShoroToday = async (search, sort, skip) => {
        let findResult = [], data = [], count;
        const row = [
            'организатор',
            'дата',
        ];
        if(sort == undefined||sort=='')
            sort = '-updatedAt';
        else if(sort[0]=='организатор'&&sort[1]=='descending')
            sort = '-organizator';
        else if(sort[0]=='организатор'&&sort[1]=='ascending')
            sort = 'organizator';
        else if(sort[0]=='дата'&&sort[1]=='descending')
            sort = '-data';
        else if(sort[0]=='дата'&&sort[1]=='ascending')
            sort = 'data';
        let date = await getToday()
        if(search == ''){
            count = await NakladnayaNaVecherniyVozvratShoro.count({data: date});
            findResult = await NakladnayaNaVecherniyVozvratShoro
                .find({data: date})
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else if (mongoose.Types.ObjectId.isValid(search)) {
            count = await NakladnayaNaVecherniyVozvratShoro.count({
            data: date,
                $or: [
                    {_id: search},
                    {region: {'$regex': search, '$options': 'i'}},
                    {organizator: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await NakladnayaNaVecherniyVozvratShoro.find({
                data: date,
                $or: [
                    {_id: search},
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {region: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        } else {
            count = await NakladnayaNaVecherniyVozvratShoro.count({
                data: date,
                $or: [
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {region: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await NakladnayaNaVecherniyVozvratShoro.find({
                data: date,
                $or: [
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {region: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        }
        for (let i=0; i<findResult.length; i++){
            data.push([findResult[i].organizator + ': ' + findResult[i].region, findResult[i].data, findResult[i].guidOrganizator, findResult[i].guidRegion]);
        }
        return {data: data, count: count, row: row}

}

const getNakladnayaNaVecherniyVozvratShoro = async (search, sort, skip, region) => {
        let findResult = [], data = [], count;
        const row = [
            'организатор',
            'дата',
        ];
        if(sort == undefined||sort=='')
            sort = '-updatedAt';
        else if(sort[0]=='организатор'&&sort[1]=='descending')
            sort = '-organizator';
        else if(sort[0]=='организатор'&&sort[1]=='ascending')
            sort = 'organizator';
        else if(sort[0]=='дата'&&sort[1]=='descending')
            sort = '-data';
        else if(sort[0]=='дата'&&sort[1]=='ascending')
            sort = 'data';
        if(search == ''){
            count = await NakladnayaNaVecherniyVozvratShoro.count({guidRegion: {'$regex': region, '$options': 'i'}});
            findResult = await NakladnayaNaVecherniyVozvratShoro
                .find({guidRegion: {'$regex': region, '$options': 'i'}})
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else if (mongoose.Types.ObjectId.isValid(search)) {
            count = await NakladnayaNaVecherniyVozvratShoro.count({
                guidRegion: {'$regex': region, '$options': 'i'},
                $or: [
                    {_id: search},
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await NakladnayaNaVecherniyVozvratShoro.find({
                guidRegion: {'$regex': region, '$options': 'i'},
                $or: [
                    {_id: search},
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        } else {
            count = await NakladnayaNaVecherniyVozvratShoro.count({
                guidRegion: {'$regex': region, '$options': 'i'},
                $or: [
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await NakladnayaNaVecherniyVozvratShoro.find({
                guidRegion: {'$regex': region, '$options': 'i'},
                $or: [
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        }
        for (let i=0; i<findResult.length; i++){
            data.push([findResult[i].organizator + ': ' + findResult[i].region, findResult[i].data, findResult[i].guidOrganizator, findResult[i].guidRegion]);
        }
        return {data: data, count: count, row: row}

}

const addNakladnayaNaVecherniyVozvratShoro = async (object) => {
        if(await NakladnayaNaVecherniyVozvratShoro.findOne({data: object.data, guidOrganizator: object.guidOrganizator, guidRegion: object.guidRegion})===null){
            let _object = new NakladnayaNaVecherniyVozvratShoro(object);
            await NakladnayaNaVecherniyVozvratShoro.create(_object);
        }

}

const getNakladnayaNaVecherniyVozvratShoroByData = async (data, organizator, region) => {
        return(await NakladnayaNaVecherniyVozvratShoro.findOne({data: data, guidOrganizator: organizator, guidRegion: {'$regex': region, '$options': 'i'}}))

}

const setNakladnayaNaVecherniyVozvratShoro = async (object, id) => {
        await NakladnayaNaVecherniyVozvratShoro.updateOne({_id: id}, {$set: object});

}

const deleteNakladnayaNaVecherniyVozvratShoro = async (id) => {
        for(let i=0; i<id.length; i++){
            let id1 = id[i].split('|')
            id1[0] = id1[1].split(': ')[0]
            id1[1] = id1[1].split(': ')[1]
            await NakladnayaNaVecherniyVozvratShoro.deleteMany({data: id1[2],
                guidOrganizator: id1[0],
                guidRegion: id1[1]})

        }

}

module.exports.getNakladnayaNaVecherniyVozvratShoroToday = getNakladnayaNaVecherniyVozvratShoroToday;
module.exports.deleteNakladnayaNaVecherniyVozvratShoro = deleteNakladnayaNaVecherniyVozvratShoro;
module.exports.getNakladnayaNaVecherniyVozvratShoro = getNakladnayaNaVecherniyVozvratShoro;
module.exports.setNakladnayaNaVecherniyVozvratShoro = setNakladnayaNaVecherniyVozvratShoro;
module.exports.addNakladnayaNaVecherniyVozvratShoro = addNakladnayaNaVecherniyVozvratShoro;
module.exports.getNakladnayaNaVecherniyVozvratShoroOrganizator = getNakladnayaNaVecherniyVozvratShoroOrganizator;
module.exports.getNakladnayaNaVecherniyVozvratShoroByData = getNakladnayaNaVecherniyVozvratShoroByData;