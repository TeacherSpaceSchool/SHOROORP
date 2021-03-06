const PriceShoro = require('../models/priceShoro');
const skip1 = require('../module/const').skip;
const mongoose = require('mongoose');

const getPriceShoroAll = async () => {
        let res = {}
        let find1 = await PriceShoro
                .find()
        for(let i = 0; i<find1.length; i++){
            res[find1[i].name] = find1[i].price
        }
        return res

}

const getPriceShoro = async (search, sort, skip) => {
        let findResult = [], data = [], count;
        const row = [
            'название',
            'цена'
        ];
        if(sort == undefined||sort=='')
            sort = '-updatedAt';
        else if(sort[0]=='название'&&sort[1]=='descending')
            sort = '-name';
        else if(sort[0]=='название'&&sort[1]=='ascending')
            sort = 'name';
        else if(sort[0]=='цена'&&sort[1]=='descending')
            sort = '-price';
        else if(sort[0]=='цена'&&sort[1]=='ascending')
            sort = 'price';
        else if(sort[0]=='создан'&&sort[1]=='descending')
            sort = '-updatedAt';
        else if(sort[0]=='создан'&&sort[1]=='ascending')
            sort = 'updatedAt';
        if(search == ''){
            count = await PriceShoro.count();
            findResult = await PriceShoro
                .find()
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else if (mongoose.Types.ObjectId.isValid(search)) {
            count = await PriceShoro.count({
                $or: [
                    {_id: search},
                    {name: {'$regex': search, '$options': 'i'}},
                    {price: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await PriceShoro.find({
                $or: [
                    {_id: search},
                    {name: {'$regex': search, '$options': 'i'}},
                    {price: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        } else {
            count = await PriceShoro.count({
                $or: [
                    {name: {'$regex': search, '$options': 'i'}},
                    {price: {'$regex': search, '$options': 'i'}},
                ]
            });
            findResult = await PriceShoro.find({
                $or: [
                    {name: {'$regex': search, '$options': 'i'}},
                    {price: {'$regex': search, '$options': 'i'}},
                ]
            })
                .sort(sort)
                .skip(parseInt(skip))
                .limit(skip1)
        }
        for (let i=0; i<findResult.length; i++){
            data.push([ findResult[i].name, findResult[i].price]);
        }
        return {data: data, count: count, row: row}

}

const addPriceShoro = async (object) => {
        let _object = new PriceShoro(object);
        await PriceShoro.create(_object);

}

const setPriceShoro = async (object, id) => {
        await PriceShoro.updateOne({name: id}, {$set: object});

}

const deletePriceShoro = async (id) => {
        await PriceShoro.deleteMany({name: {$in: id}});
}

module.exports.deletePriceShoro = deletePriceShoro;
module.exports.getPriceShoro = getPriceShoro;
module.exports.setPriceShoro = setPriceShoro;
module.exports.addPriceShoro = addPriceShoro;
module.exports.getPriceShoroAll = getPriceShoroAll;