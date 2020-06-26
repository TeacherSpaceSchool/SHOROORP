const OtchetRealizatoraShoro = require('../models/otchetRealizatoraShoro');
const OtchetOrganizatoraShoro = require('../models/otchetOrganizatoraShoro');
const OtchetOrganizatoraShoroModule = require('../module/otchetOrganizatoraShoro');
const RealizatorShoro = require('../models/realizatorShoro');
const NakladnayaNaVecherniyVozvratShoro = require('../models/nakladnayaNaVecherniyVozvratShoro');
const NakladnayaSklad1Shoro = require('../models/nakladnayaSklad1Shoro');
const NakladnayaSklad2Shoro = require('../models/nakladnayaSklad2Shoro');
const getTomorrow = require('./const').getTomorrow;
const OrganizatorShoro = require('../models/organizatorShoro');
const PlanShoro = require('../models/planShoro');
const mongoose = require('mongoose');
const skip1 = require('../module/const').skip;
const checkInt = require('../module/const').checkInt;
const checkMonth = require('../module/const').checkMonth;
const getToday = require('../module/const').getToday;
const prepareXML = require('../module/outXMLShoro').prepareXML;

const getOtchetRealizatoraShoroOrganizator = async (search, sort, skip, id, point) => {
        let findResult = [], data = [], count;
        const row = [
            'реализатор',
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
            count = await OtchetRealizatoraShoro.count({guidOrganizator: guidOrganizator,guidRegion: {'$regex': guidRegion, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'}});
            findResult = await OtchetRealizatoraShoro
                .find({guidOrganizator: guidOrganizator,guidRegion: {'$regex': guidRegion, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'}})
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else if (mongoose.Types.ObjectId.isValid(search)) {
            count = await OtchetRealizatoraShoro.count({
                guidOrganizator: guidOrganizator,guidRegion: {'$regex': guidRegion, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'},
                $or: [
                    {_id: search},
                    {data: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {organizator: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await OtchetRealizatoraShoro.find({
                guidOrganizator: guidOrganizator,guidRegion: {'$regex': guidRegion, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'},
                $or: [
                    {_id: search},
                    {data: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {organizator: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        } else {
            count = await OtchetRealizatoraShoro.count({
                guidOrganizator: guidOrganizator,guidRegion: {'$regex': guidRegion, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'},
                $or: [
                    {data: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {organizator: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await OtchetRealizatoraShoro.find({
                guidOrganizator: guidOrganizator,guidRegion: {'$regex': guidRegion, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'},
                $or: [
                    {data: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {organizator: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        }
        for (let i=0; i<findResult.length; i++){
            data.push([findResult[i].realizator + ': ' + findResult[i].region + ' - ' + findResult[i].point, findResult[i].data, findResult[i].guidRegion, findResult[i].guidPoint, findResult[i].guidRealizator]);
        }
        return {data: data, count: count, row: row}

}

const getOtchetRealizatoraShoroRealizator = async (search, sort, skip, id) => {
        let findResult = [], data = [], count;
        const row = [
            'реализатор',
            'дата',
        ];
        let realizator = await RealizatorShoro.findOne({user: id})
        let guidPoint = realizator.guidPoint
        let guidRealizator = realizator.guid
        realizator = realizator.name
        if(sort == undefined||sort=='')
            sort = '-updatedAt';
        else if(sort[0]=='дата'&&sort[1]=='descending')
            sort = '-data';
        else if(sort[0]=='дата'&&sort[1]=='ascending')
            sort = 'data';
        if(search == ''){
            count = await OtchetRealizatoraShoro.count({guidRealizator: guidRealizator, guidPoint: guidPoint});
            findResult = await OtchetRealizatoraShoro
                .find({guidRealizator: guidRealizator, guidPoint: guidPoint})
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else if (mongoose.Types.ObjectId.isValid(search)) {
            count = await OtchetRealizatoraShoro.count({
                guidRealizator: guidRealizator, guidPoint: guidPoint,
                $or: [
                    {_id: search},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await OtchetRealizatoraShoro.find({
                guidRealizator: guidRealizator, guidPoint: guidPoint,
                $or: [
                    {_id: search},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        } else {
            count = await OtchetRealizatoraShoro.count({
                guidRealizator: guidRealizator, guidPoint: guidPoint,
                $or: [
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await OtchetRealizatoraShoro.find({
                guidRealizator: guidRealizator, guidPoint: guidPoint,
                $or: [
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        }
        for (let i=0; i<findResult.length; i++){
            data.push([findResult[i].realizator + ': ' + findResult[i].region + ' - ' + findResult[i].point, findResult[i].data, findResult[i].guidRegion, findResult[i].guidPoint, findResult[i].guidRealizator]);
        }
        return {data: data, count: count, row: row}

}

const getOtchetRealizatoraShoro = async (search, sort, skip, region, point) => {
        let findResult = [], data = [], count;
        const row = [
            'организатор',
            'дата',
        ];
        if(sort == undefined||sort=='')
            sort = '-updatedAt';
        else if(sort[0]=='реализатор'&&sort[1]=='descending')
            sort = '-реализатор';
        else if(sort[0]=='реализатор'&&sort[1]=='ascending')
            sort = 'реализатор';
        else if(sort[0]=='дата'&&sort[1]=='descending')
            sort = '-data';
        else if(sort[0]=='дата'&&sort[1]=='ascending')
            sort = 'data';
        if(search == ''){
            count = await OtchetRealizatoraShoro.count({guidRegion: {'$regex': region, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'}});
            findResult = await OtchetRealizatoraShoro
                .find({guidRegion: {'$regex': region, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'}})
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else if (mongoose.Types.ObjectId.isValid(search)) {
            count = await OtchetRealizatoraShoro.count({
                guidRegion: {'$regex': region, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'},
                $or: [
                    {_id: search},
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await OtchetRealizatoraShoro.find({
                guidRegion: {'$regex': region, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'},
                $or: [
                    {_id: search},
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        } else {
            count = await OtchetRealizatoraShoro.count({
                guidRegion: {'$regex': region, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'},
                $or: [
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await OtchetRealizatoraShoro.find({
                guidRegion: {'$regex': region, '$options': 'i'},guidPoint: {'$regex': point, '$options': 'i'},
                $or: [
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {data: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        }
        for (let i=0; i<findResult.length; i++){
            data.push([findResult[i].realizator + ': ' + findResult[i].region + ' - ' + findResult[i].point, findResult[i].data, findResult[i].guidRegion, findResult[i].guidPoint, findResult[i].guidRealizator]);
        }
        return {data: data, count: count, row: row}

}

const getOtchetRealizatoraShoroToday = async (search, sort, skip, region) => {
        let findResult = [], data = [], count;
        const row = [
            'организатор',
            'дата',
        ];
        if(sort == undefined||sort=='')
            sort = '-updatedAt';
        else if(sort[0]=='реализатор'&&sort[1]=='descending')
            sort = '-реализатор';
        else if(sort[0]=='реализатор'&&sort[1]=='ascending')
            sort = 'реализатор';
        else if(sort[0]=='дата'&&sort[1]=='descending')
            sort = '-data';
        else if(sort[0]=='дата'&&sort[1]=='ascending')
            sort = 'data';
        let date = await getToday()
        if(search == ''){
            count = await OtchetRealizatoraShoro.count({guidRegion: {'$regex': region, '$options': 'i'}, data: date});
            findResult = await OtchetRealizatoraShoro
                .find({guidRegion: {'$regex': region, '$options': 'i'}, data: date})
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else if (mongoose.Types.ObjectId.isValid(search)) {
            count = await OtchetRealizatoraShoro.count({
                guidRegion: {'$regex': region, '$options': 'i'}, data: date,
                $or: [
                    {_id: search},
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await OtchetRealizatoraShoro.find({
                guidRegion: {'$regex': region, '$options': 'i'}, data: date,
                $or: [
                    {_id: search},
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        } else {
            count = await OtchetRealizatoraShoro.count({
                guidRegion: {'$regex': region, '$options': 'i'}, data: date,
                $or: [
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await OtchetRealizatoraShoro.find({
                guidRegion: {'$regex': region, '$options': 'i'}, data: date,
                $or: [
                    {organizator: {'$regex': search, '$options': 'i'}},
                    {realizator: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        }
        for (let i=0; i<findResult.length; i++){
            data.push([
                findResult[i].realizator + ': ' + findResult[i].region + ' - ' + findResult[i].point,
                findResult[i].data,
                findResult[i].guidRegion,
                findResult[i].guidPoint,
                findResult[i].guidRealizator
            ]);
         }
        return {data: data, count: count, row: row}

}

const addOtchetRealizatoraShoro = async (object) => {
        if(await OtchetRealizatoraShoro.findOne({data: object.data, guidRealizator: object.guidRealizator, guidPoint: object.guidPoint})===null){
            let _object = new OtchetRealizatoraShoro(object);
            await OtchetRealizatoraShoro.create(_object)
            await calculateAll(object)
            await prepareXML(object.data, object.guidRegion, object.guidOrganizator)
        }
}

const getOtchetRealizatoraShoroByDate = async (data, organizator, region) => {
        return(await OtchetRealizatoraShoro.find({data: data, guidOrganizator: organizator, guidRegion: {'$regex': region, '$options': 'i'}}))
}

const getOtchetRealizatoraShoroByData = async (data, realizator, region, point) => {
        return(await OtchetRealizatoraShoro.findOne({
            data: data,
            guidRealizator: realizator,
            guidRegion: {'$regex': region, '$options': 'i'},
            guidPoint: {'$regex': point, '$options': 'i'}}))
}

const setOtchetRealizatoraShoro = async (object, id) => {
    await OtchetRealizatoraShoro.updateOne({_id: id}, {$set: object});
    await calculateAll(object)
    await prepareXML(object.data, object.guidRegion, object.guidOrganizator)
}

const deleteOtchetRealizatoraShoro = async (id) => {
        for(let i=0; i<id.length; i++){
            let id1 = id[i].split('|')
            let object = await OtchetRealizatoraShoro.findOne({
                guidRealizator: id1[0],
                guidRegion: id1[1],
                guidPoint: id1[2],
                data: id1[3],
            })

            await OtchetRealizatoraShoro.deleteMany({
                guidRealizator: id1[0],
                guidRegion: id1[1],
                guidPoint: id1[2],
                data: id1[3],
                })

            await calculateAll(object)
            await prepareXML(object.data, object.guidRegion, object.guidOrganizator)

        }

}

const calculateAll = async (object) => {
        let findOrganizator = await OtchetOrganizatoraShoro.findOne({data: object.data, guidRegion: object.guidRegion, guidOrganizator: object.guidOrganizator})
        if(findOrganizator===null) {
            await OtchetOrganizatoraShoroModule.createOtchetOrganizatoraShoro(object.data, object.organizator, object.region, object.guidOrganizator, object.guidRegion)
            findOrganizator = await OtchetOrganizatoraShoro.findOne({data: object.data, guidRegion: object.guidRegion, guidOrganizator: object.guidOrganizator})
        }
        let findRealizators = await OtchetRealizatoraShoro.find({data: object.data, guidRegion: object.guidRegion, guidOrganizator: object.guidOrganizator})
    
        
    
        let findNakladnayaNaVecherniyVozvratShoro = await NakladnayaNaVecherniyVozvratShoro.findOne({data: object.data, guidRegion: object.guidRegion, guidOrganizator: object.guidOrganizator})
        let findDataNakladnayaNaVecherniyVozvratShoro
        if(findNakladnayaNaVecherniyVozvratShoro!==null){
            findDataNakladnayaNaVecherniyVozvratShoro = JSON.parse(findNakladnayaNaVecherniyVozvratShoro.dataTable)
            findDataNakladnayaNaVecherniyVozvratShoro['m']['data'] = []
            findDataNakladnayaNaVecherniyVozvratShoro['ch']['data'] = []
            findDataNakladnayaNaVecherniyVozvratShoro['k']['data'] = []
            findDataNakladnayaNaVecherniyVozvratShoro['m']['all'] = 0
            findDataNakladnayaNaVecherniyVozvratShoro['ch']['all'] = 0
            findDataNakladnayaNaVecherniyVozvratShoro['k']['all'] = 0
            for(let i = 0; i<findRealizators.length; i++){
                let addDataTable = JSON.parse(findRealizators[i].dataTable)
                if(addDataTable.vozvrat.v.mn.length>0&&checkInt(addDataTable.vozvrat.v.ml)>0) {
                    findDataNakladnayaNaVecherniyVozvratShoro['m']['data'].push({
                        '№': addDataTable.vozvrat.v.mn,
                        'l': addDataTable.vozvrat.v.ml
                    })
                    findDataNakladnayaNaVecherniyVozvratShoro['m']['all'] += checkInt(addDataTable.vozvrat.v.ml)
                }
                if(addDataTable.vozvrat.v.mn1.length>0&&checkInt(addDataTable.vozvrat.v.ml1)>0) {
                    findDataNakladnayaNaVecherniyVozvratShoro['m']['data'].push({
                        '№': addDataTable.vozvrat.v.mn1,
                        'l': addDataTable.vozvrat.v.ml1
                    })
                    findDataNakladnayaNaVecherniyVozvratShoro['m']['all'] += checkInt(addDataTable.vozvrat.v.ml1)
                }
                if(addDataTable.vozvrat.v.kn.length>0&&checkInt(addDataTable.vozvrat.v.kl)>0) {
                    findDataNakladnayaNaVecherniyVozvratShoro['k']['data'].push({
                        '№': addDataTable.vozvrat.v.kn,
                        'l': addDataTable.vozvrat.v.kl
                    })
                    findDataNakladnayaNaVecherniyVozvratShoro['k']['all'] += checkInt(addDataTable.vozvrat.v.kl)
                }
                if(addDataTable.vozvrat.v.kn1.length>0&&checkInt(addDataTable.vozvrat.v.kl1)>0) {
                    findDataNakladnayaNaVecherniyVozvratShoro['k']['data'].push({
                        '№': addDataTable.vozvrat.v.kn1,
                        'l': addDataTable.vozvrat.v.kl1
                    })
                    findDataNakladnayaNaVecherniyVozvratShoro['k']['all'] += checkInt(addDataTable.vozvrat.v.kl1)
                }
            }
            findDataNakladnayaNaVecherniyVozvratShoro = JSON.stringify(findDataNakladnayaNaVecherniyVozvratShoro)
            await NakladnayaNaVecherniyVozvratShoro.updateOne({_id: findNakladnayaNaVecherniyVozvratShoro._id}, {$set: {dataTable: findDataNakladnayaNaVecherniyVozvratShoro}});
        }

        let findNakladnayaSklad1Shoro = await NakladnayaSklad1Shoro.findOne({data: getTomorrow(object.data), guidRegion: object.guidRegion, guidOrganizator: object.guidOrganizator})
        let findDataNakladnayaSklad1Shoro
        if(findNakladnayaSklad1Shoro!==null){
            findDataNakladnayaSklad1Shoro = JSON.parse(findNakladnayaSklad1Shoro.dataTable)
            findDataNakladnayaSklad1Shoro['vydano']['n']['ch25'] = 0
            findDataNakladnayaSklad1Shoro['vydano']['n']['ch10'] = 0
            findDataNakladnayaSklad1Shoro['vydano']['n']['chl'] = 0
            for(let i = 0; i<findRealizators.length; i++){
                let addDataTable = JSON.parse(findRealizators[i].dataTable)
                if(checkInt(addDataTable.vozvrat.v.chl)>0){
                    findDataNakladnayaSklad1Shoro['vydano']['n']['chl'] += checkInt(addDataTable.vozvrat.v.chl)
                    if(addDataTable.vozvrat.v.chn25.length>0){
                        findDataNakladnayaSklad1Shoro['vydano']['n']['ch25'] += 1

                    }
                    if(addDataTable.vozvrat.v.chn10.length>0){
                        findDataNakladnayaSklad1Shoro['vydano']['n']['ch10'] += 1

                    }
                }
                if(checkInt(addDataTable.vozvrat.v.chl1)>0){
                    findDataNakladnayaSklad1Shoro['vydano']['n']['chl'] += checkInt(addDataTable.vozvrat.v.chl1)
                    if(addDataTable.vozvrat.v.chn251.length>0){
                        findDataNakladnayaSklad1Shoro['vydano']['n']['ch25'] += 1

                    }
                    if(addDataTable.vozvrat.v.chn101.length>0){
                        findDataNakladnayaSklad1Shoro['vydano']['n']['ch10'] += 1

                    }
                }
            }
            findDataNakladnayaSklad1Shoro['vydano']['i']['chl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['chl'])
            findDataNakladnayaSklad1Shoro['vydano']['i']['ch10'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['ch10']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['ch10']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['ch10']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['ch10']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['ch10'])
            findDataNakladnayaSklad1Shoro['vydano']['i']['ch25'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['ch25']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['ch25']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['ch25']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['ch25']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['ch25'])
            findDataNakladnayaSklad1Shoro = JSON.stringify(findDataNakladnayaSklad1Shoro)
            await NakladnayaSklad1Shoro.updateOne({_id: findNakladnayaSklad1Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad1Shoro}});
        }

        findNakladnayaSklad1Shoro = await NakladnayaSklad1Shoro.findOne({data: object.data, guidRegion: object.guidRegion, guidOrganizator: object.guidOrganizator})
        if(findNakladnayaSklad1Shoro!==null){
            findDataNakladnayaSklad1Shoro = JSON.parse(findNakladnayaSklad1Shoro.dataTable)

            findDataNakladnayaSklad1Shoro['vydano']['r']['ml'] = 0
            findDataNakladnayaSklad1Shoro['vydano']['r']['chl'] = 0
            findDataNakladnayaSklad1Shoro['vydano']['r']['kl'] = 0

            findDataNakladnayaSklad1Shoro['vydano']['d1']['ml'] = 0
            findDataNakladnayaSklad1Shoro['vydano']['d1']['chl'] = 0
            findDataNakladnayaSklad1Shoro['vydano']['d1']['kl'] = 0

            findDataNakladnayaSklad1Shoro['vydano']['d2']['ml'] = 0
            findDataNakladnayaSklad1Shoro['vydano']['d2']['chl'] = 0
            findDataNakladnayaSklad1Shoro['vydano']['d2']['kl'] = 0

            findDataNakladnayaSklad1Shoro['vydano']['d3']['ml'] = 0
            findDataNakladnayaSklad1Shoro['vydano']['d3']['chl'] = 0
            findDataNakladnayaSklad1Shoro['vydano']['d3']['kl'] = 0

            findDataNakladnayaSklad1Shoro['vozvrat']['n']['ch25'] = 0
            findDataNakladnayaSklad1Shoro['vozvrat']['n']['ch10'] = 0
            findDataNakladnayaSklad1Shoro['vozvrat']['n']['chl'] = 0

            findDataNakladnayaSklad1Shoro['vozvrat']['s']['ml'] = 0
            findDataNakladnayaSklad1Shoro['vozvrat']['s']['chl'] = 0
            findDataNakladnayaSklad1Shoro['vozvrat']['s']['kl'] = 0
            findDataNakladnayaSklad1Shoro['vozvrat']['s']['m25'] = 0
            findDataNakladnayaSklad1Shoro['vozvrat']['s']['ch25'] = 0
            findDataNakladnayaSklad1Shoro['vozvrat']['s']['ch10'] = 0
            findDataNakladnayaSklad1Shoro['vozvrat']['s']['k10'] = 0

            for(let i = 0; i<findRealizators.length; i++){
                let addDataTable = JSON.parse(findRealizators[i].dataTable)
                if(checkInt(addDataTable.vozvrat.v.chl)>0){
                    findDataNakladnayaSklad1Shoro['vozvrat']['s']['chl'] += checkInt(addDataTable.vozvrat.v.chl)
                    findDataNakladnayaSklad1Shoro['vozvrat']['n']['chl'] += checkInt(addDataTable.vozvrat.v.chl)
                    if(addDataTable.vozvrat.v.chn25.length>0){
                        findDataNakladnayaSklad1Shoro['vozvrat']['n']['ch25'] += 1
                        findDataNakladnayaSklad1Shoro['vozvrat']['s']['ch25'] += 1
                    }
                    if(addDataTable.vozvrat.v.chn10.length>0){
                        findDataNakladnayaSklad1Shoro['vozvrat']['n']['ch10'] += 1
                        findDataNakladnayaSklad1Shoro['vozvrat']['s']['ch10'] += 1

                    }
                }
                if(checkInt(addDataTable.vozvrat.v.chl1)>0){
                    findDataNakladnayaSklad1Shoro['vozvrat']['s']['chl'] += checkInt(addDataTable.vozvrat.v.chl1)
                    findDataNakladnayaSklad1Shoro['vozvrat']['n']['chl'] += checkInt(addDataTable.vozvrat.v.chl1)
                    if(addDataTable.vozvrat.v.chn251.length>0){
                        findDataNakladnayaSklad1Shoro['vozvrat']['n']['ch25'] += 1
                        findDataNakladnayaSklad1Shoro['vozvrat']['s']['ch25'] += 1
                    }
                    if(addDataTable.vozvrat.v.chn101.length>0){
                        findDataNakladnayaSklad1Shoro['vozvrat']['n']['ch10'] += 1
                        findDataNakladnayaSklad1Shoro['vozvrat']['s']['ch10'] += 1
                    }
                }
                if(checkInt(addDataTable.vozvrat.v.ml)>0) {
                    findDataNakladnayaSklad1Shoro['vozvrat']['s']['ml'] += checkInt(addDataTable.vozvrat.v.ml)
                    if(addDataTable.vozvrat.v.mn.length>0){
                        findDataNakladnayaSklad1Shoro['vozvrat']['s']['m25'] += 1
                    }
                }
                if(checkInt(addDataTable.vozvrat.v.ml1)>0) {
                    findDataNakladnayaSklad1Shoro['vozvrat']['s']['ml'] += checkInt(addDataTable.vozvrat.v.ml1)
                    if(addDataTable.vozvrat.v.mn1.length>0){
                        findDataNakladnayaSklad1Shoro['vozvrat']['s']['m25'] += 1
                    }
                }
                if(checkInt(addDataTable.vozvrat.v.kl)>0) {
                    findDataNakladnayaSklad1Shoro['vozvrat']['s']['kl'] += checkInt(addDataTable.vozvrat.v.kl)
                    if(addDataTable.vozvrat.v.kn.length>0){
                        findDataNakladnayaSklad1Shoro['vozvrat']['s']['k10'] += 1
                    }
                }
                if(checkInt(addDataTable.vozvrat.v.kl1)>0) {
                    findDataNakladnayaSklad1Shoro['vozvrat']['s']['kl'] += checkInt(addDataTable.vozvrat.v.kl1)
                    if(addDataTable.vozvrat.v.kn1.length>0){
                        findDataNakladnayaSklad1Shoro['vozvrat']['s']['k10'] += 1
                    }
                }

                if(checkInt(addDataTable.vydano.r.ml)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['r']['ml'] += checkInt(addDataTable.vydano.r.ml)
                }
                if(checkInt(addDataTable.vydano.r.chl)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['r']['chl'] += checkInt(addDataTable.vydano.r.chl)
                }
                if(checkInt(addDataTable.vydano.r.kl)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['r']['kl'] += checkInt(addDataTable.vydano.r.kl)
                }

                if(checkInt(addDataTable.vydano.d1.ml)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['d1']['ml'] += checkInt(addDataTable.vydano.d1.ml)
                }
                if(checkInt(addDataTable.vydano.d1.chl)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['d1']['chl'] += checkInt(addDataTable.vydano.d1.chl)
                }
                if(checkInt(addDataTable.vydano.d1.kl)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['d1']['kl'] += checkInt(addDataTable.vydano.d1.kl)
                }

                if(checkInt(addDataTable.vydano.d2.ml)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['d2']['ml'] += checkInt(addDataTable.vydano.d2.ml)
                }
                if(checkInt(addDataTable.vydano.d2.chl)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['d2']['chl'] += checkInt(addDataTable.vydano.d2.chl)
                }
                if(checkInt(addDataTable.vydano.d2.kl)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['d2']['kl'] += checkInt(addDataTable.vydano.d2.kl)
                }

                if(checkInt(addDataTable.vydano.d3.ml)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['d3']['ml'] += checkInt(addDataTable.vydano.d3.ml)
                }
                if(checkInt(addDataTable.vydano.d3.chl)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['d3']['chl'] += checkInt(addDataTable.vydano.d3.chl)
                }
                if(checkInt(addDataTable.vydano.d3.kl)>0) {
                    findDataNakladnayaSklad1Shoro['vydano']['d3']['kl'] += checkInt(addDataTable.vydano.d3.kl)
                }

            }


            findDataNakladnayaSklad1Shoro['vydano']['i']['ml'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['ml'])
            findDataNakladnayaSklad1Shoro['vydano']['i']['kl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['kl'])
            findDataNakladnayaSklad1Shoro['vydano']['i']['chl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['chl'])

            findDataNakladnayaSklad1Shoro['vozvrat']['i']['ml'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['ml'])
            findDataNakladnayaSklad1Shoro['vozvrat']['i']['kl'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['kl'])
            findDataNakladnayaSklad1Shoro['vozvrat']['i']['chl'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['chl'])
            findDataNakladnayaSklad1Shoro['vozvrat']['i']['ch10'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['ch10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['ch10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['ch10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['ch10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['ch10'])
            findDataNakladnayaSklad1Shoro['vozvrat']['i']['ch25'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['ch25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['ch25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['ch25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['ch25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['ch25'])
            findDataNakladnayaSklad1Shoro['vozvrat']['i']['k10'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['k10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['k10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['k10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['k10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['k10'])
            findDataNakladnayaSklad1Shoro['vozvrat']['i']['m25'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['m25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['m25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['m25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['m25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['m25'])
            findDataNakladnayaSklad1Shoro['vozvrat']['i']['k10'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['k10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['k10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['k10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['k10']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['k10'])
            findDataNakladnayaSklad1Shoro['vozvrat']['i']['m25'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['m25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['m25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['m25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['m25']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['m25'])

            findDataNakladnayaSklad1Shoro = JSON.stringify(findDataNakladnayaSklad1Shoro)
            await NakladnayaSklad1Shoro.updateOne({_id: findNakladnayaSklad1Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad1Shoro}});
        }

    let findNakladnayaSklad2Shoro = await NakladnayaSklad2Shoro.findOne({data: object.data, guidRegion: object.guidRegion, guidOrganizator: object.guidOrganizator})
    if(findNakladnayaSklad2Shoro!==null){
        let findDataNakladnayaSklad2Shoro = JSON.parse(findNakladnayaSklad2Shoro.dataTable)

        findDataNakladnayaSklad2Shoro['vydano']['r']['sh02'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['r']['sh04'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['r']['l'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['r']['b'] = 0

        findDataNakladnayaSklad2Shoro['vydano']['d1']['sh02'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['d1']['sh04'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['d1']['l'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['d1']['b'] = 0

        findDataNakladnayaSklad2Shoro['vydano']['d2']['sh02'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['d2']['sh04'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['d2']['l'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['d2']['b'] = 0

        findDataNakladnayaSklad2Shoro['vydano']['d3']['sh02'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['d3']['sh04'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['d3']['l'] = 0
        findDataNakladnayaSklad2Shoro['vydano']['d3']['b'] = 0

        findDataNakladnayaSklad2Shoro['vozvrat']['s']['sh02'] = 0
        findDataNakladnayaSklad2Shoro['vozvrat']['s']['sh04'] = 0
        findDataNakladnayaSklad2Shoro['vozvrat']['s']['l'] = 0
        findDataNakladnayaSklad2Shoro['vozvrat']['s']['b'] = 0

        for(let i = 0; i<findRealizators.length; i++){
            let addDataTable = JSON.parse(findRealizators[i].dataTable)
            if(checkInt(addDataTable.vozvrat.v.s02)>0) {
                findDataNakladnayaSklad2Shoro['vozvrat']['s']['sh02'] += checkInt(addDataTable.vozvrat.v.s02)
            }
            if(checkInt(addDataTable.vozvrat.v.s04)>0) {
                findDataNakladnayaSklad2Shoro['vozvrat']['s']['sh04'] += checkInt(addDataTable.vozvrat.v.s04)
            }
            if(checkInt(addDataTable.vozvrat.v.sl)>0) {
                findDataNakladnayaSklad2Shoro['vozvrat']['s']['l'] += checkInt(addDataTable.vozvrat.v.sl)
            }
            if(checkInt(addDataTable.vozvrat.v.b)>0) {
                findDataNakladnayaSklad2Shoro['vozvrat']['s']['b'] += checkInt(addDataTable.vozvrat.v.b)
            }

            if(checkInt(addDataTable.vydano.r.s02)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['r']['sh02'] += checkInt(addDataTable.vydano.r.s02)
            }
            if(checkInt(addDataTable.vydano.r.s04)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['r']['sh04'] += checkInt(addDataTable.vydano.r.s04)
            }
            if(checkInt(addDataTable.vydano.r.sl)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['r']['l'] += checkInt(addDataTable.vydano.r.sl)
            }
            if(checkInt(addDataTable.vydano.r.b)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['r']['b'] += checkInt(addDataTable.vydano.r.b)
            }

            if(checkInt(addDataTable.vydano.d1.s02)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d1']['sh02'] += checkInt(addDataTable.vydano.d1.s02)
            }
            if(checkInt(addDataTable.vydano.d1.s04)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d1']['sh04'] += checkInt(addDataTable.vydano.d1.s04)
            }
            if(checkInt(addDataTable.vydano.d1.sl)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d1']['l'] += checkInt(addDataTable.vydano.d1.sl)
            }
            if(checkInt(addDataTable.vydano.d1.b)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d1']['b'] += checkInt(addDataTable.vydano.d1.b)
            }

            if(checkInt(addDataTable.vydano.d2.s02)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d2']['sh02'] += checkInt(addDataTable.vydano.d2.s02)
            }
            if(checkInt(addDataTable.vydano.d2.s04)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d2']['sh04'] += checkInt(addDataTable.vydano.d2.s04)
            }
            if(checkInt(addDataTable.vydano.d2.sl)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d2']['l'] += checkInt(addDataTable.vydano.d2.sl)
            }
            if(checkInt(addDataTable.vydano.d2.b)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d2']['b'] += checkInt(addDataTable.vydano.d2.b)
            }

            if(checkInt(addDataTable.vydano.d3.s02)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d3']['sh02'] += checkInt(addDataTable.vydano.d3.s02)
            }
            if(checkInt(addDataTable.vydano.d3.s04)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d3']['sh04'] += checkInt(addDataTable.vydano.d3.s04)
            }
            if(checkInt(addDataTable.vydano.d3.sl)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d3']['l'] += checkInt(addDataTable.vydano.d3.sl)
            }
            if(checkInt(addDataTable.vydano.d3.b)>0) {
                findDataNakladnayaSklad2Shoro['vydano']['d3']['b'] += checkInt(addDataTable.vydano.d3.b)
            }

        }


        findDataNakladnayaSklad2Shoro['vydano']['i']['sh02'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['sh02'])
        findDataNakladnayaSklad2Shoro['vydano']['i']['sh04'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['sh04'])
        findDataNakladnayaSklad2Shoro['vydano']['i']['l'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['l'])
        findDataNakladnayaSklad2Shoro['vydano']['i']['b'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['b'])

        findDataNakladnayaSklad2Shoro['vozvrat']['iv']['sh02'] = checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['i']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['v']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['s']['sh02'])
        findDataNakladnayaSklad2Shoro['vozvrat']['iv']['sh04'] = checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['i']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['v']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['s']['sh04'])
        findDataNakladnayaSklad2Shoro['vozvrat']['iv']['l'] = checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['i']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['v']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['s']['l'])
        findDataNakladnayaSklad2Shoro['vozvrat']['iv']['b'] = checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['i']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['v']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['s']['b'])

        findDataNakladnayaSklad2Shoro = JSON.stringify(findDataNakladnayaSklad2Shoro)
        await NakladnayaSklad2Shoro.updateOne({_id: findNakladnayaSklad2Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad2Shoro}});
    }

        let findPlan = await PlanShoro.findOne({date: (object.data).substring(3)})
        if(findPlan!==null) {
            let findPlanRegions = JSON.parse(findPlan.regions)
            findPlan.current = 0
            for (let i = 0; i < findPlanRegions.length; i++) {
                if (findPlanRegions[i]['name'] == object.region) {
                    findPlanRegions[i]['current'] = 0
                    for (let i1 = 0; i1 < findPlanRegions[i]['points'].length; i1++) {
                        if (findPlanRegions[i]['points'][i1]['name'] == object.point) {
                            let findOtchetRealizatoraShoro = await OtchetRealizatoraShoro.find({data: {'$regex': (object.data).substring(3), '$options': 'i'}, region: findPlanRegions[i]['guidRegion'], point: findPlanRegions[i]['points'][i1]['guidPoint']});
                            findPlanRegions[i]['points'][i1]['current'] = 0
                            for (let i2 = 0; i2 < findOtchetRealizatoraShoro.length; i2++) {
                                findPlanRegions[i]['points'][i1]['current'] += checkInt(JSON.parse(findOtchetRealizatoraShoro[i2].dataTable)['i']['iv'])
                            }
                        }
                        findPlanRegions[i]['current'] += checkInt(findPlanRegions[i]['points'][i1]['current'])
                    }
                }
                findPlan.current += checkInt(findPlanRegions[i]['current'])
            }
            await PlanShoro.updateOne({_id: findPlan._id}, {
                $set: {
                    regions: JSON.stringify(findPlanRegions),
                    current: findPlan.current
                }
            });
        }

             let findDataTable = JSON.parse(findOrganizator.dataTable)

            findDataTable.p.m.v = 0
            findDataTable.p.ch.v = 0
            findDataTable.p.k.v = 0
            findDataTable.p.sl.v = 0
            findDataTable.p.s02.v = 0
            findDataTable.p.s04.v = 0
            findDataTable.p.b.v = 0

            findDataTable.p.m.o = 0
            findDataTable.p.ch.o = 0
            findDataTable.p.k.o = 0
            findDataTable.p.sl.o = 0
            findDataTable.p.s02.o = 0
            findDataTable.p.s04.o = 0
            findDataTable.p.b.o = 0

            findDataTable.p.m.s = 0
            findDataTable.p.ch.s = 0
            findDataTable.p.k.s = 0
            findDataTable.p.sl.s = 0
            findDataTable.p.s02.s = 0
            findDataTable.p.s04.s = 0
            findDataTable.p.b.s = 0

            findDataTable.p.m.pl = 0
            findDataTable.p.ch.pl = 0
            findDataTable.p.k.pl = 0
            findDataTable.p.sl.pl = 0
            findDataTable.p.s02.pl = 0
            findDataTable.p.s04.pl = 0
            findDataTable.p.b.pl = 0

            findDataTable.p.m.ps = 0
            findDataTable.p.ch.ps = 0
            findDataTable.p.k.ps = 0
            findDataTable.p.sl.ps = 0
            findDataTable.p.s02.ps = 0
            findDataTable.p.s04.ps = 0
            findDataTable.p.b.ps = 0

            findDataTable.p.m.ktt = findRealizators.length
            findDataTable.p.ch.ktt = findRealizators.length
            findDataTable.p.k.ktt = findRealizators.length
            findDataTable.p.sl.ktt = findRealizators.length
            findDataTable.p.s02.ktt = findRealizators.length
            findDataTable.p.s04.ktt = findRealizators.length
            findDataTable.p.b.ktt = findRealizators.length
            findDataTable.r.otr = findRealizators.length*100
            findDataTable.r.ntp = 0
            findDataTable.r.att = 0
            findDataTable.r.inc = 0

            findDataTable['p']['i'] = 0
            findDataTable['i'] = 0

            let dolivkiM = [], dolivkiCh = [], dolivkiK = [], dolivkiSl = [], dolivkiS02 = [], dolivkiS04 = [], dolivkiB = []

            if(findDataTable['time']===undefined){
                findDataTable['time'] = {
                    'r': '',
                    'd1': '',
                    'd2': '',
                    'd3': '',
                    's': '',
                }
            }

            for(let i = 0; i<findRealizators.length; i++){
                let addDataTable = JSON.parse(findRealizators[i].dataTable)


                if(findDataTable['time']['r'].length===0&&addDataTable.vydano.r.time.length>0){
                    findDataTable['time']['r'] = addDataTable.vydano.r.time
                }
                if(findDataTable['time']['d1'].length===0&&addDataTable.vydano.d1.time.length>0){
                    findDataTable['time']['d1'] = addDataTable.vydano.d1.time
                }
                if(findDataTable['time']['d2'].length===0&&addDataTable.vydano.d2.time.length>0){
                    findDataTable['time']['d2'] = addDataTable.vydano.d2.time
                }
                if(findDataTable['time']['d3'].length===0&&addDataTable.vydano.d3.time.length>0){
                    findDataTable['time']['d3'] = addDataTable.vydano.d3.time
                }
                if(findDataTable['time']['s'].length===0&&addDataTable.vozvrat.v.time.length>0){
                    findDataTable['time']['s'] = addDataTable.vozvrat.v.time
                }



                if(addDataTable.vydano.d3.ml.length>0){
                    dolivkiM[i]=3
                }
                else if(addDataTable.vydano.d2.ml.length>0){
                    dolivkiM[i]=2
                }
                else if(addDataTable.vydano.d1.ml.length>0){
                    dolivkiM[i]=1
                }
                else {
                    dolivkiM[i]=0
                }

                if(addDataTable.vydano.d3.kl.length>0){
                    dolivkiK[i]=3
                }
                else if(addDataTable.vydano.d2.kl.length>0){
                    dolivkiK[i]=2
                }
                else if(addDataTable.vydano.d1.kl.length>0){
                    dolivkiK[i]=1
                }
                else {
                    dolivkiK[i]=0
                }

                if(addDataTable.vydano.d3.chl.length>0){
                    dolivkiCh[i]=3
                }
                else if(addDataTable.vydano.d2.chl.length>0){
                    dolivkiCh[i]=2
                }
                else if(addDataTable.vydano.d1.chl.length>0){
                    dolivkiCh[i]=1
                }
                else {
                    dolivkiCh[i]=0
                }

                if(addDataTable.vydano.d3.sl.length>0){
                    dolivkiSl[i]=3
                }
                else if(addDataTable.vydano.d2.sl.length>0){
                    dolivkiSl[i]=2
                }
                else if(addDataTable.vydano.d1.sl.length>0){
                    dolivkiSl[i]=1
                }
                else {
                    dolivkiSl[i]=0
                }


                if(addDataTable.vydano.d3.s02.length>0){
                    dolivkiS02[i]=3
                }
                else if(addDataTable.vydano.d2.s02.length>0){
                    dolivkiS02[i]=2
                }
                else if(addDataTable.vydano.d1.s02.length>0){
                    dolivkiS02[i]=1
                }
                else {
                    dolivkiS02[i]=0
                }

                if(addDataTable.vydano.d3.s04.length>0){
                    dolivkiS04[i]=3
                }
                else if(addDataTable.vydano.d2.s04.length>0){
                    dolivkiS04[i]=2
                }
                else if(addDataTable.vydano.d1.s04.length>0){
                    dolivkiS04[i]=1
                }
                else {
                    dolivkiS04[i]=0
                }

                if(addDataTable.vydano.d3.b!==0){
                    dolivkiB[i]=3
                }
                if(addDataTable.vydano.d1.b){
                    dolivkiB[i]=1
                }
                if(addDataTable.vydano.d2.b!==0){
                    dolivkiB[i]=2
                }

                findDataTable.p.m.v += checkInt(addDataTable.vydano.i.ml)
                findDataTable.p.ch.v += checkInt(addDataTable.vydano.i.chl)
                findDataTable.p.k.v += checkInt(addDataTable.vydano.i.kl)
                findDataTable.p.sl.v += checkInt(addDataTable.vydano.i.sl)
                findDataTable.p.s02.v += checkInt(addDataTable.vydano.i.s02)
                findDataTable.p.s04.v += checkInt(addDataTable.vydano.i.s04)
                findDataTable.p.b.v += checkInt(addDataTable.vydano.i.b)

                findDataTable.p.m.o += checkInt(addDataTable.vozvrat.v.ml)
                findDataTable.p.ch.o += checkInt(addDataTable.vozvrat.v.chl)
                findDataTable.p.k.o += checkInt(addDataTable.vozvrat.v.kl)
                findDataTable.p.m.o += checkInt(addDataTable.vozvrat.v.ml)
                findDataTable.p.ch.o += checkInt(addDataTable.vozvrat.v.chl)
                findDataTable.p.k.o += checkInt(addDataTable.vozvrat.v.kl1)
                findDataTable.p.m.o += checkInt(addDataTable.vozvrat.v.ml1)
                findDataTable.p.ch.o += checkInt(addDataTable.vozvrat.v.chl1)
                findDataTable.p.k.o += checkInt(addDataTable.vozvrat.v.kl1)
                findDataTable.p.sl.o += checkInt(addDataTable.vozvrat.v.sl)
                findDataTable.p.s02.o += checkInt(addDataTable.vozvrat.v.s02)
                findDataTable.p.s04.o += checkInt(addDataTable.vozvrat.v.s04)
                findDataTable.p.b.o += checkInt(addDataTable.vozvrat.v.b)

                findDataTable.p.m.s += checkInt(addDataTable.vozvrat.s.ml)
                findDataTable.p.ch.s += checkInt(addDataTable.vozvrat.s.chl)
                findDataTable.p.k.s += checkInt(addDataTable.vozvrat.s.kl)
                 findDataTable.p.sl.s += checkInt(addDataTable.vozvrat.s.sl)
                findDataTable.p.s02.s += checkInt(addDataTable.vozvrat.s.s02)
                findDataTable.p.s04.s += checkInt(addDataTable.vozvrat.s.s04)
                findDataTable.p.b.s += checkInt(addDataTable.vozvrat.s.b)

                findDataTable.p.m.pl += checkInt(addDataTable.vozvrat.p.ml)
                findDataTable.p.ch.pl += checkInt(addDataTable.vozvrat.p.chl)
                findDataTable.p.k.pl += checkInt(addDataTable.vozvrat.p.kl)
                findDataTable.p.sl.pl += checkInt(addDataTable.vozvrat.p.sl)
                findDataTable.p.s02.pl += checkInt(addDataTable.vozvrat.p.s02)
                findDataTable.p.s04.pl += checkInt(addDataTable.vozvrat.p.s04)
                findDataTable.p.b.pl += checkInt(addDataTable.vozvrat.p.b)

                findDataTable.p.m.ps += checkInt(addDataTable.vozvrat.virychka.ml)
                findDataTable.p.ch.ps += checkInt(addDataTable.vozvrat.virychka.chl)
                findDataTable.p.k.ps += checkInt(addDataTable.vozvrat.virychka.kl)
                findDataTable.p.sl.ps += checkInt(addDataTable.vozvrat.virychka.sl)
                findDataTable.p.s02.ps += checkInt(addDataTable.vozvrat.virychka.s02)
                findDataTable.p.s04.ps += checkInt(addDataTable.vozvrat.virychka.s04)
                findDataTable.p.b.ps += checkInt(addDataTable.vozvrat.virychka.b)

                findDataTable.r.ntp += checkInt(addDataTable.i.n)
                findDataTable.r.att += checkInt(addDataTable.i.m)
                findDataTable.r.inc += checkInt(addDataTable.i.inc)

            }

            findDataTable.p.m.kd = dolivkiM.length>0?Math.max.apply(Math, dolivkiM):0;
            findDataTable.p.k.kd = dolivkiK.length>0?Math.max.apply(Math, dolivkiK):0;
            findDataTable.p.ch.kd = dolivkiCh.length>0?Math.max.apply(Math, dolivkiCh):0;
            findDataTable.p.sl.kd = dolivkiSl.length>0?Math.max.apply(Math, dolivkiSl):0;
            findDataTable.p.s02.kd = dolivkiM.length>0?Math.max.apply(Math, dolivkiS02):0;
            findDataTable.p.s04.kd = dolivkiK.length>0?Math.max.apply(Math, dolivkiS04):0;
            findDataTable.p.b.kd = dolivkiCh.length>0?Math.max.apply(Math, dolivkiB):0;

            findDataTable['p']['i'] = checkInt(findDataTable['p']['m']['ps']) + checkInt(findDataTable['p']['ch']['ps']) + checkInt(findDataTable['p']['k']['ps']) + checkInt(findDataTable['p']['sl']['ps'])
            findDataTable['i'] = checkInt(findDataTable['p']['i']) - checkInt(findDataTable['r']['otr']) - checkInt(findDataTable['r']['oo']) - checkInt(findDataTable['r']['inc']) - checkInt(findDataTable['r']['ntp']) - checkInt(findDataTable['r']['att']) - checkInt(findDataTable['r']['at']) - checkInt(findDataTable['r']['vs'])

            findDataTable = JSON.stringify(findDataTable)
            await OtchetOrganizatoraShoro.updateOne({_id: findOrganizator._id}, {$set: {dataTable: findDataTable}});




}

const getReiting = async (date) => {
        let dataPlan = await PlanShoro.findOne({date: await checkMonth(date)})
    if(dataPlan!=null) {
        dataPlan = JSON.parse(dataPlan.regions)
        let reiting = []
        for (let i = 0; i < dataPlan.length; i++) {
            reiting[i] = {
                name: dataPlan[i].name,
                guidRegion: dataPlan[i].guidRegion,
                score: dataPlan[i].plan !== 0 && dataPlan[i].plan !== '' ? Math.round(dataPlan[i].current * 100 / dataPlan[i].plan) + '%' : dataPlan[i].current
            }
        }
        reiting.sort((a, b) => (b.score - a.score))
        for (let i = 0; i < reiting.length; i++) {
            reiting[i] = {number: i + 1, name: reiting[i].name, score: reiting[i].score + '%'}
        }
        return (reiting)
    } else return undefined
}

const getReiting1 = async (date) => {
        let dataPlan = await PlanShoro.findOne({date: await checkMonth(date)})
    if(dataPlan!=null) {
        dataPlan = JSON.parse(dataPlan.regions)
        let reiting = []
        for(let i = 0; i < dataPlan.length; i++){
            for(let i1 = 0; i1 < dataPlan[i].points.length; i1++) {
                reiting.push({
                    name:  dataPlan[i].name+ ' - ' + dataPlan[i].points[i1].name,
                    guidPoint: dataPlan[i].guidPoint,
                    score: dataPlan[i].points[i1].plan!==0&&dataPlan[i].points[i1].plan!==''?Math.round(dataPlan[i].points[i1].current*100/dataPlan[i].points[i1].plan)+'%':dataPlan[i].points[i1].current})
            }
        }
        reiting.sort((a, b) => (b.score - a.score))
        for(let i = 0; i < reiting.length; i++){
            reiting[i] = {number: i+1, name: reiting[i].name, score: reiting[i].score+'%'}
        }
        return(reiting)
    } else return undefined

}

const getReitingMyOrganizator = async (id) => {
    let dataPlan = await PlanShoro.findOne({date: await checkMonth(new Date())})
    let reitingN = ''
    if(dataPlan!=null) {
            dataPlan = JSON.parse(dataPlan.regions)
            let organizator = await OrganizatorShoro.findOne({user: id})
            let guidRegion = organizator.guidRegion
            let reiting = []
            for (let i = 0; i < dataPlan.length; i++) {
                reiting[i] = {
                    name: dataPlan[i].name,
                    guidRegion: dataPlan[i].guidRegion,
                    score: dataPlan[i].plan !== 0 && dataPlan[i].plan !== '' ? Math.round(dataPlan[i].current * 100 / dataPlan[i].plan) + '%' : dataPlan[i].current
                }
            }
            reiting.sort((a, b) => (b.score - a.score))
            for (let i = 0; i < reiting.length; i++) {
                if (reiting[i].guidRegion === guidRegion)
                    reitingN = {number: i + 1, name: reiting[i].name, score: reiting[i].score}
            }
            return (reitingN)
    } else return (undefined)

}

const getReitingMyRealizator = async (id) => {
    let dataPlan = await PlanShoro.findOne({date: await checkMonth(new Date())})
    if(dataPlan!=null) {
        dataPlan = JSON.parse(dataPlan.regions)
        let realizator = await RealizatorShoro.findOne({user: id})
        let guidRegion = realizator.guidRegion
        let guidPoint = realizator.guidPoint
        let reiting = []
        let reitingN = ''
        for (let i = 0; i < dataPlan.length; i++) {
            for (let i1 = 0; i1 < dataPlan[i].points.length; i1++) {
                reiting.push({
                    name: dataPlan[i].name + ': ' + dataPlan[i].points[i1].name,
                    guidRegion: dataPlan[i].guidRegion,
                    guidPoint: dataPlan[i].points[i1].guidPoint,
                    score: dataPlan[i].points[i1].plan !== 0 && dataPlan[i].points[i1].plan !== '' ? Math.round(dataPlan[i].points[i1].current * 100 / dataPlan[i].points[i1].plan) + '%' : dataPlan[i].points[i1].current
                })
            }
        }
        reiting.sort((a, b) => (b.score - a.score))
        for (let i = 0; i < reiting.length; i++) {
            if (reiting[i].guidRegion == guidRegion, reiting[i].guidPoint == guidPoint)
                reitingN = {number: i + 1, name: reiting[i].name, score: reiting[i].score + '%'}
        }
        return (reitingN)
    } else return undefined

}

module.exports.getReitingMyOrganizator = getReitingMyOrganizator;
module.exports.getReitingMyRealizator = getReitingMyRealizator;
module.exports.getReiting1 = getReiting1;
module.exports.getReiting = getReiting;
module.exports.calculateAll = calculateAll;
module.exports.deleteOtchetRealizatoraShoro = deleteOtchetRealizatoraShoro;
module.exports.getOtchetRealizatoraShoro = getOtchetRealizatoraShoro;
module.exports.getOtchetRealizatoraShoroToday = getOtchetRealizatoraShoroToday;
module.exports.setOtchetRealizatoraShoro = setOtchetRealizatoraShoro;
module.exports.addOtchetRealizatoraShoro = addOtchetRealizatoraShoro;
module.exports.getOtchetRealizatoraShoroRealizator = getOtchetRealizatoraShoroRealizator;
module.exports.getOtchetRealizatoraShoroOrganizator = getOtchetRealizatoraShoroOrganizator;
module.exports.getOtchetRealizatoraShoroByData = getOtchetRealizatoraShoroByData;
module.exports.getOtchetRealizatoraShoroByDate = getOtchetRealizatoraShoroByDate;