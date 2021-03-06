const RealizatorShoro = require('../models/realizatorShoro');
const OrganizatorShoro = require('../models/organizatorShoro');
const UserShoro = require('../models/userShoro');
const mongoose = require('mongoose');
const skip1 = require('../module/const').skip;

const getRealizatorShoroName = async () => {
    let names = []
    let finds = await RealizatorShoro
        .find()
    for(let i=0; i<finds.length; i++){
        names.push({name: finds[i].name, guid: finds[i].guid})
    }
    return names.sort();
}

const getRealizatorShoroByPoint = async (point, id) => {
    let organizator = await OrganizatorShoro.findOne({user: id})
    let guidRegion = organizator.guidRegion
    let data = await RealizatorShoro.findOne({guidPoint: point, guidRegion: {'$regex': guidRegion, '$options': 'i'}})
    let res = {
        name: data.name,
        guid: data.guid,
        region: data.region,
        point: data.point,
        guidRegion: data.guidRegion,
        guidPoint: data.guidPoint,
        organizator: organizator.name,
        guidOrganizator: organizator.guid
    }
    return res
}

const getRealizatorShoro1 = async (search, sort, skip, id) => {
        let findResult = [], data = [], count;
        const row = [
            'имя',
            'точка',
            'регион',
        ];
        let organizator = await OrganizatorShoro.findOne({user: id})
        let guidRegion = organizator.guidRegion
        if(sort == undefined||sort=='')
            sort = '-updatedAt';
        else if(sort[0]=='имя'&&sort[1]=='descending')
            sort = '-name';
        else if(sort[0]=='имя'&&sort[1]=='ascending')
            sort = 'name';
        else if(sort[0]=='точка'&&sort[1]=='descending')
            sort = '-point';
        else if(sort[0]=='точка'&&sort[1]=='ascending')
            sort = 'point';
        else if(sort[0]=='регион'&&sort[1]=='descending')
            sort = '-region';
        else if(sort[0]=='регион'&&sort[1]=='ascending')
            sort = 'region';
        else if(sort[0]=='статус'&&sort[1]=='descending')
            sort = '-status';
        else if(sort[0]=='статус'&&sort[1]=='ascending')
            sort = 'status';
        if(search == ''){
            count = await RealizatorShoro.count({guidRegion: {'$regex': guidRegion, '$options': 'i'}});
            findResult = await RealizatorShoro
                .find({guidRegion: {'$regex': guidRegion, '$options': 'i'}})
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else if (mongoose.Types.ObjectId.isValid(search)) {
            count = await RealizatorShoro.count({
                $or: [
                    {_id: search},
                    {name: {'$regex': search, '$options': 'i'}},
                    {phone: {'$regex': search, '$options': 'i'}},
                    {inn: {'$regex': search, '$options': 'i'}},
                    {address: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}}
                ],
                guidRegion: {'$regex': guidRegion, '$options': 'i'}
            });
            findResult = await RealizatorShoro.find({
                $or: [
                    {_id: search},
                    {name: {'$regex': search, '$options': 'i'}},
                    {phone: {'$regex': search, '$options': 'i'}},
                    {inn: {'$regex': search, '$options': 'i'}},
                    {address: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}}
                ],
                guidRegion: {'$regex': guidRegion, '$options': 'i'}
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        } else {
            count = await RealizatorShoro.count({
                $or: [
                    {name: {'$regex': search, '$options': 'i'}},
                    {phone: {'$regex': search, '$options': 'i'}},
                    {inn: {'$regex': search, '$options': 'i'}},
                    {address: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}}
                ],
                guidRegion: {'$regex': guidRegion, '$options': 'i'}
            });
            findResult = await RealizatorShoro.find({
                $or: [
                    {name: {'$regex': search, '$options': 'i'}},
                    {phone: {'$regex': search, '$options': 'i'}},
                    {inn: {'$regex': search, '$options': 'i'}},
                    {address: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}}
                ],
                guidRegion: {'$regex': guidRegion, '$options': 'i'}
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        }
        for (let i=0; i<findResult.length; i++){
            data.push([findResult[i].name, findResult[i].point, findResult[i].region, findResult[i].phone, findResult[i].guid, findResult[i].guidRegion, findResult[i].guidPoint]);
        }
        return {data: data, count: count, row: row}

}

const getRealizatorShoro = async (search, sort, skip, region) => {
        let findResult = [], data = [], count;
        const row = [
            'имя',
            'точка',
            'регион',
        ];
        if(sort == undefined||sort=='')
            sort = '-updatedAt';
        else if(sort[0]=='имя'&&sort[1]=='descending')
            sort = '-name';
        else if(sort[0]=='имя'&&sort[1]=='ascending')
            sort = 'name';
        else if(sort[0]=='точка'&&sort[1]=='descending')
            sort = '-point';
        else if(sort[0]=='точка'&&sort[1]=='ascending')
            sort = 'point';
        else if(sort[0]=='регион'&&sort[1]=='descending')
            sort = '-region';
        else if(sort[0]=='регион'&&sort[1]=='ascending')
            sort = 'region';
        else if(sort[0]=='статус'&&sort[1]=='descending')
            sort = '-status';
        else if(sort[0]=='статус'&&sort[1]=='ascending')
            sort = 'status';
        if(search == ''){
            count = await RealizatorShoro.count({
                guidRegion: {'$regex': region, '$options': 'i'},});
            findResult = await RealizatorShoro
                .find({
                    guidRegion: {'$regex': region, '$options': 'i'},})
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else if (mongoose.Types.ObjectId.isValid(search)) {
            count = await RealizatorShoro.count({
                guidRegion: {'$regex': region, '$options': 'i'},
                $or: [
                    {_id: search},
                    {name: {'$regex': search, '$options': 'i'}},
                    {phone: {'$regex': search, '$options': 'i'}},
                    {inn: {'$regex': search, '$options': 'i'}},
                    {address: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}}
                ]
            });
            findResult = await RealizatorShoro.find({
                guidRegion: {'$regex': region, '$options': 'i'},
                $or: [
                    {_id: search},
                    {name: {'$regex': search, '$options': 'i'}},
                    {phone: {'$regex': search, '$options': 'i'}},
                    {inn: {'$regex': search, '$options': 'i'}},
                    {address: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}}
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        } else {
            count = await RealizatorShoro.count({
                guidRegion: {'$regex': region, '$options': 'i'},
                $or: [
                    {name: {'$regex': search, '$options': 'i'}},
                    {phone: {'$regex': search, '$options': 'i'}},
                    {inn: {'$regex': search, '$options': 'i'}},
                    {address: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}}
                ]
            });
            findResult = await RealizatorShoro.find({
                guidRegion: {'$regex': region, '$options': 'i'},
                $or: [
                    {name: {'$regex': search, '$options': 'i'}},
                    {phone: {'$regex': search, '$options': 'i'}},
                    {inn: {'$regex': search, '$options': 'i'}},
                    {address: {'$regex': search, '$options': 'i'}},
                    {point: {'$regex': search, '$options': 'i'}}
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1);
        }
        for (let i=0; i<findResult.length; i++){
            data.push([findResult[i].name, findResult[i].point, findResult[i].region, findResult[i].phone, findResult[i].guid, findResult[i].guidRegion, findResult[i].guidPoint]);
        }
        return {data: data, count: count, row: row}
}

const getRealizatorShoroById = async (id) => {
        let object = await RealizatorShoro.findOne({user: id});
        let user = await UserShoro.findOne({_id: object.user})
        let organizator = await OrganizatorShoro.findOne({region: object.region});
        let res = {
            status: user.status,
            name: object.name,
            organizator: organizator.name,
            phone: object.phone,
            region: object.region,
            point: object.point,
            guidRegion: object.guidRegion,
            guid: object.guid,
            guidPoint: object.guidPoint,
            guidOrganizator: organizator.guid,
            _id: object._id,
            user: object.user,
        }
        return res

}

const addRealizatorShoro = async (object) => {
        /*if(object.point==='Резерв'||await RealizatorShoro.count({region: object.region, point: object.point})===0){
            let _user = new UserShoro({
                email: object.phone,
                role: 'реализатор',
                status: object.status,
                password: object.password,
            });
            const user = await UserShoro.create(_user);
            let _object = new RealizatorShoro({
                name: object.name,
                phone: object.phone,
                point: object.point,
                region: object.region,
                user: user._id
            });
            await RealizatorShoro.create(_object);
        }*/

}

const getProfileRealizatorShoro = async (id) => {
        let object = await RealizatorShoro.findOne({user: id});
        let user = await UserShoro.findOne({_id: object.user})
        let res = {
            status: user.status,
            name: object.name,
            phone: object.phone,
            region: object.region,
            point: object.point,
            guidRegion: object.guidRegion,
            guid: object.guid,
            guidPoint: object.guidPoint,
            guidOrganizator: object.guidOrganizator,
            _id: object._id,
            user: object.user,
        }
        return res

}

const getRealizatorShoroByName = async (name, point, region, phone) => {
        let object = await RealizatorShoro.findOne({name: name, region: {'$regex': region, '$options': 'i'}, point: point, phone: phone});
        let user = await UserShoro.findOne({_id: object.user})
        let res = {
            status: user.status,
            name: object.name,
            phone: object.phone,
            region: object.region,
            point: object.point,
            guidRegion: object.guidRegion,
            guidPoint: object.guidPoint,
            _id: object._id,
            user: object.user,
        }
        return res

}

const setRealizatorShoro = async (object, id) => {
    let  aprove = false;
    let find = await RealizatorShoro.find({guidPoint: object.guidPoint});
    aprove = object.point==='Резерв'||find.length===0||(find.length==1&&find[0]._id==id)
    if(aprove) {
        if (object.password !== undefined && object.password.length > 0) {
            let user = await UserShoro.findById({_id: object.user});
            user.email = object.phone;
            user.status = object.status;
            user.password = object.password;
            await user.save();
            await RealizatorShoro.updateOne({_id: id}, {$set: object});
        } else {
            await UserShoro.updateOne({_id: object.user}, {$set: {email: object.phone, status: object.status}});
            await RealizatorShoro.updateOne({_id: id}, {$set: object});
        }
    }

}

const deleteRealizatorShoro = async (id) => {
        for(let i=0; i<id.length; i++){
            let object = await RealizatorShoro.findOne({phone: id[i]})
            await UserShoro.deleteMany({_id: {$in: object.user}});
            await RealizatorShoro.deleteMany({phone: id[i]});
        }
}

module.exports.deleteRealizatorShoro = deleteRealizatorShoro;
module.exports.getRealizatorShoro = getRealizatorShoro;
module.exports.getRealizatorShoro1 = getRealizatorShoro1;
module.exports.setRealizatorShoro = setRealizatorShoro;
module.exports.addRealizatorShoro = addRealizatorShoro;
module.exports.getRealizatorShoroByName = getRealizatorShoroByName;
module.exports.getRealizatorShoroById = getRealizatorShoroById;
module.exports.getProfileRealizatorShoro = getProfileRealizatorShoro;
module.exports.getRealizatorShoroName = getRealizatorShoroName;
module.exports.getRealizatorShoroByPoint = getRealizatorShoroByPoint;