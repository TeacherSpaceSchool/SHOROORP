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
    for(let i=0;i<otchetRealizators.length;i++){
        let dataOtchetRealizator = JSON.parse(otchetRealizators[i].dataTable)
        let time_from = ''
        if(dataOtchetRealizator['vydano']['r']['time']&&dataOtchetRealizator['vydano']['r']['time'].length){
            time_from = `${dataOtchetRealizator['vydano']['r']['time']}:00`
        }
        else if(dataOtchetRealizator['vydano']['d1']['time']&&dataOtchetRealizator['vydano']['d1']['time'].length){
            time_from = `${dataOtchetRealizator['vydano']['d1']['time']}:00`
        }
        else if(dataOtchetRealizator['vydano']['d2']['time']&&dataOtchetRealizator['vydano']['d2']['time'].length){
            time_from = `${dataOtchetRealizator['vydano']['d2']['time']}:00`
        }
        else if(dataOtchetRealizator['vydano']['d3']['time']&&dataOtchetRealizator['vydano']['d3']['time'].length){
            time_from = `${dataOtchetRealizator['vydano']['d3']['time']}:00`
        }
        let returneds = {
            'ml': (dataOtchetRealizator['vozvrat']['v']['ml']?dataOtchetRealizator['vozvrat']['v']['ml']:0)+(dataOtchetRealizator['vozvrat']['v']['ml1']?dataOtchetRealizator['vozvrat']['v']['ml1']:0),
            'chl': (dataOtchetRealizator['vozvrat']['v']['chl']?dataOtchetRealizator['vozvrat']['v']['chl']:0)+(dataOtchetRealizator['vozvrat']['v']['chl1']?dataOtchetRealizator['vozvrat']['v']['chl1']:0),
            'kl': (dataOtchetRealizator['vozvrat']['v']['kl']?dataOtchetRealizator['vozvrat']['v']['kl']:0)+(dataOtchetRealizator['vozvrat']['v']['kl1']?dataOtchetRealizator['vozvrat']['v']['kl1']:0)
        }
        data.points[i] = {
            guid: otchetRealizators[i].guidPoint,
            seller: otchetRealizators[i].guidRealizator,
            time_from: time_from,
            time_to: dataOtchetRealizator['vozvrat']['v']['time']&&dataOtchetRealizator['vozvrat']['v']['time'].length?`${dataOtchetRealizator['vozvrat']['v']['time']}:00`:'00:00:00',
            cash: `${dataOtchetRealizator['i']['fv']}.00`,
            rent: `${dataOtchetRealizator['i']['m']?dataOtchetRealizator['i']['m']:'0'}.00`,
            meal: `${dataOtchetRealizator['i']['o']}.00`,
            products: [
                {
                    guid: products['Максым'],
                    issued: `${dataOtchetRealizator['vydano']['i']['ml']?dataOtchetRealizator['vydano']['i']['ml']:'0'}.00`,
                    sold: `${dataOtchetRealizator['vozvrat']['p']['ml']?dataOtchetRealizator['vozvrat']['p']['ml']:'0'}.00`,
                    returned: `${returneds['ml']}.00`
                },
                {
                    guid: products['Чалап'],
                    issued: `${dataOtchetRealizator['vydano']['i']['chl']?dataOtchetRealizator['vydano']['i']['chl']:'0'}.00`,
                    sold: `${dataOtchetRealizator['vozvrat']['p']['chl']?dataOtchetRealizator['vozvrat']['p']['chl']:'0'}.00`,
                    returned: `${returneds['chl']}.00`
                },
                {
                    guid: products['Квас'],
                    issued: `${dataOtchetRealizator['vydano']['i']['kl']?dataOtchetRealizator['vydano']['i']['kl']:'0'}.00`,
                    sold: `${dataOtchetRealizator['vozvrat']['p']['kl']?dataOtchetRealizator['vozvrat']['p']['kl']:'0'}.00`,
                    returned: `${returneds['kl']}.00`
                },
                {
                    guid: products['Стакан Легенда'],
                    issued: `${dataOtchetRealizator['vydano']['i']['sl']?dataOtchetRealizator['vydano']['i']['sl']:'0'}.00`,
                    sold: `${dataOtchetRealizator['vozvrat']['p']['sl']?dataOtchetRealizator['vozvrat']['p']['sl']:'0'}.00`,
                    returned: `${dataOtchetRealizator['vozvrat']['v']['sl']?dataOtchetRealizator['vozvrat']['v']['sl']:'0'}.00`
                },
            ],
            tares: [
                {
                    guid: tares['0.20'],
                    issued: `${dataOtchetRealizator['vydano']['i']['s02']?dataOtchetRealizator['vydano']['i']['s02']:'0'}.00`,
                    sold: `${dataOtchetRealizator['vozvrat']['p']['s02']?dataOtchetRealizator['vozvrat']['p']['s02']:'0'}.00`,
                    returned: `${dataOtchetRealizator['vozvrat']['v']['s02']?dataOtchetRealizator['vozvrat']['v']['s02']:'0'}.00`
                },
                {
                    guid: tares['0.40'],
                    issued: `${dataOtchetRealizator['vydano']['i']['s04']?dataOtchetRealizator['vydano']['i']['s04']:'0'}.00`,
                    sold: `${dataOtchetRealizator['vozvrat']['p']['s04']?dataOtchetRealizator['vozvrat']['p']['s04']:'0'}.00`,
                    returned: `${dataOtchetRealizator['vozvrat']['v']['s04']?dataOtchetRealizator['vozvrat']['v']['s04']:'0'}.00`
                },
                {
                    guid: tares['1.00'],
                    issued: `${dataOtchetRealizator['vydano']['i']['b']?dataOtchetRealizator['vydano']['i']['b']:'0'}.00`,
                    sold: `${dataOtchetRealizator['vozvrat']['p']['b']?dataOtchetRealizator['vozvrat']['p']['b']:'0'}.00`,
                    returned: `${dataOtchetRealizator['vozvrat']['v']['b']?dataOtchetRealizator['vozvrat']['v']['b']:'0'}.00`
                },
            ]
        }
    }
    console.log(guidOrganizator)
    if(!(await OutXMLShoro.findOne({date: dateXML[0]+'.'+dateXML[1]+'.'+dateXML[2], guidRegion: guidRegion?guidRegion:'', guidOrganizator: guidOrganizator?guidOrganizator:''}))) {
        let object = new OutXMLShoro({
            data: data,
            date: dateXML[0] + '.' + dateXML[1] + '.' + dateXML[2],
            guidRegion: guidRegion ? guidRegion : '',
            guidOrganizator: guidOrganizator ? guidOrganizator : ''
        });
        await OutXMLShoro.create(object);
    }
    else {
        await OutXMLShoro.updateMany({date: dateXML[0]+'.'+dateXML[1]+'.'+dateXML[2], guidRegion: guidRegion?guidRegion:'', guidOrganizator: guidOrganizator?guidOrganizator:''}, {data: data});
    }

}

module.exports.generateXML = async ()=>{
    let result = [ { root: [ { _attr: { mode: 'sales'} }] } ];
    let outXMLShoros = await OutXMLShoro.find()
    for(let i=0;i<outXMLShoros.length;i++){
        let item = { item: [{ _attr: { date: outXMLShoros[i].date, manager: outXMLShoros[i].guidOrganizator, region: outXMLShoros[i].guidRegion}}]};
        for(let ii=0;ii<outXMLShoros[i].data.points.length;ii++){
            let place = { place: [{ _attr: { guid: outXMLShoros[i].data.points[ii].guid, seller: outXMLShoros[i].data.points[ii].seller, time_from: outXMLShoros[i].data.points[ii].time_from, time_to: outXMLShoros[i].data.points[ii].time_to, cash: outXMLShoros[i].data.points[ii].cash, rent: outXMLShoros[i].data.points[ii].rent, meal: outXMLShoros[i].data.points[ii].meal}}]};
            for(let iii=0;iii<outXMLShoros[i].data.points[ii].products.length;iii++){
                place.place.push({ product: [{ _attr: { guid: outXMLShoros[i].data.points[ii].products[iii].guid,  issued: outXMLShoros[i].data.points[ii].products[iii].issued,  returned: outXMLShoros[i].data.points[ii].products[iii].returned }}]})
            }
            for(let iii=0;iii<outXMLShoros[i].data.points[ii].tares.length;iii++){
                place.place.push({ tare: [{ _attr: { guid: outXMLShoros[i].data.points[ii].tares[iii].guid,  issued: outXMLShoros[i].data.points[ii].tares[iii].issued,  returned: outXMLShoros[i].data.points[ii].tares[iii].returned }}]})
            }
            (item.item).push(place)
        }
        (result[0].root).push(item)
    }
    result = xml(result, true)
    return result
}


