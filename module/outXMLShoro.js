const OtchetRealizatoraShoro = require('../models/otchetRealizatoraShoro');
const OutXMLShoro = require('../models/outXMLShoro');
let { month1 } = require('../module/const');
const PriceShoro = require('../models/priceShoro');
const TaraShoro = require('../models/taraShoro');
const xml = require('xml');

module.exports.prepareXML = async (date, guidRegion, guidOrganizator)=>{
    let findProducts = await PriceShoro.find(), products = {}
    for(let i=0;i<findProducts.length;i++){
        products[findProducts[i].name] = findProducts[i].guid
    }
    let findTares = await TaraShoro.find(), tares = {}
    for(let i=0;i<findTares.length;i++){
        tares[findTares[i].size] = findTares[i].guid
    }
    let data = { points: [] }
    await OutXMLShoro.deleteMany({
        guidRegion: guidRegion,
        date: date,
    })
    let otchetRealizators = await OtchetRealizatoraShoro.find({data: date, guidRegion: guidRegion})
    let dateXML = date.split(' ')
    for(let i=0;i<month1.length;i++){
        if(dateXML[1]===month1[i]){
            dateXML[1] = (i+1).toString()
            if(dateXML[1].length===1)
                dateXML[1] = '0'+dateXML[1]
        }
    }
    data.date = dateXML[0]+'.'+dateXML[1]+'.'+dateXML[2]
    data.manager = otchetRealizators[0].guidOrganizator
    data.region = otchetRealizators[0].guidRegion
    for(let i=0;i<otchetRealizators.length;i++){
        let dataOtchetRealizator = JSON.parse(otchetRealizators[i].dataTable)
        data.points[i] = {
            guid: otchetRealizators[i].guidPoint,
            seller: otchetRealizators[i].guidRealizator,
            time_from: dataOtchetRealizator['vydano']['r']['time']+':00',
            time_to: dataOtchetRealizator['vozvrat']['v']['time']+':00',
            cash: dataOtchetRealizator['i']['fv']+'.00',
            rent: dataOtchetRealizator['i']['m']+'.00',
            meal: dataOtchetRealizator['i']['o']+'.00',
            products: [
                {
                    guid: products['Максым'],
                    issued: dataOtchetRealizator['vydano']['i']['ml'].toString(),
                    sold: dataOtchetRealizator['vozvrat']['p']['ml'].toString()
                },
                {
                    guid: products['Чалап'],
                    issued: dataOtchetRealizator['vydano']['i']['chl'].toString(),
                    sold: dataOtchetRealizator['vozvrat']['p']['chl'].toString()
                },
                {
                    guid: products['Квас'],
                    issued: dataOtchetRealizator['vydano']['i']['kl'].toString(),
                    sold: dataOtchetRealizator['vozvrat']['p']['kl'].toString()
                },
                {
                    guid: products['Стакан Легенда'],
                    issued: dataOtchetRealizator['vydano']['i']['sl'].toString(),
                    sold: dataOtchetRealizator['vozvrat']['p']['sl'].toString()
                },
            ],
            tares: [
                {
                    guid: tares['0.20'],
                    issued: dataOtchetRealizator['vydano']['i']['s02'].toString(),
                    sold: dataOtchetRealizator['vozvrat']['p']['s02'].toString()
                },
                {
                    guid: tares['0.40'],
                    issued: dataOtchetRealizator['vydano']['i']['s04'].toString(),
                    sold: dataOtchetRealizator['vozvrat']['p']['s04'].toString()
                },
                {
                    guid: tares['1.00'],
                    issued: dataOtchetRealizator['vydano']['i']['b'].toString(),
                    sold: dataOtchetRealizator['vozvrat']['p']['b'].toString()
                },
            ]
        }
    }
    let object = new OutXMLShoro({
        data: data,
        date: date,
        guidRegion: guidRegion,
        guidOrganizator: guidOrganizator
    });
    await OutXMLShoro.create(object);

}

module.exports.generateXML = async ()=>{
    let result = [ { root: [ { _attr: { mode: 'sales'} }] } ];
    let outXMLShoros = await OutXMLShoro.find()
    for(let i=0;i<outXMLShoros.length;i++){
        let item = { item: [{ _attr: { date: outXMLShoros[i].data.date, manager: outXMLShoros[i].guidOrganizator, region: outXMLShoros[i].guidRegion}}]};
        for(let ii=0;ii<outXMLShoros[i].data.points.length;ii++){
            let place = { place: [{ _attr: { guid: outXMLShoros[i].data.points[ii].guid, seller: outXMLShoros[i].data.points[ii].seller, time_from: outXMLShoros[i].data.points[ii].time_from, time_to: outXMLShoros[i].data.points[ii].time_to, cash: outXMLShoros[i].data.points[ii].cash, rent: outXMLShoros[i].data.points[ii].rent, meal: outXMLShoros[i].data.points[ii].meal}}]};
            for(let iii=0;iii<outXMLShoros[i].data.points[ii].products.length;iii++){
                place.place.push({ product: [{ _attr: { guid: outXMLShoros[i].data.points[ii].products[iii].guid,  issued: outXMLShoros[i].data.points[ii].products[iii].issued,  sold: outXMLShoros[i].data.points[ii].products[iii].sold }}]})
            }
            for(let iii=0;iii<outXMLShoros[i].data.points[ii].tares.length;iii++){
                place.place.push({ tare: [{ _attr: { guid: outXMLShoros[i].data.points[ii].tares[iii].guid,  issued: outXMLShoros[i].data.points[ii].tares[iii].issued,  sold: outXMLShoros[i].data.points[ii].tares[iii].sold }}]})
            }
            (item.item).push(place)
        }
        (result[0].root).push(item)
    }
    result = xml(result, true)
    return result
}


