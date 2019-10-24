let express = require('express');
let router = express.Router();
const PointShoro = require('../models/pointShoro');
const RegionShoro = require('../models/regionShoro');
const OrganizatorShoro = require('../models/organizatorShoro');
const NakladnayaSklad1ShoroModule = require('../module/nakladnayaSklad1Shoro');
const NakladnayaSklad1Shoro = require('../models/nakladnayaSklad1Shoro');
const NakladnayaSklad2ShoroModule = require('../module/nakladnayaSklad2Shoro');
const NakladnayaSklad2Shoro = require('../models/nakladnayaSklad2Shoro');
const PriceShoro = require('../models/priceShoro');
const TaraShoro = require('../models/taraShoro');
const RealizatorShoro = require('../models/realizatorShoro');
const UserShoro = require('../models/userShoro');
let logger = require('logger').createLogger('integrate1C.log');
let { checkInt, month1 } = require('../module/const');

/* GET home page. */
router.post('/put', async (req, res, next) => {
    try{
        logger.info(req.body);
        if(req.body.elements[0].attributes.mode==='manager'){
            for(let i = 0; i<req.body.elements[0].elements.length; i++) {
                //guid   req.body.elements[0].elements[i].attributes.guid
                //del   req.body.elements[0].elements[i].attributes.del
                //name   req.body.elements[0].elements[i].elements[0].text
                if(req.body.elements[0].elements[i].attributes.del!=='1') {
                    let find = await OrganizatorShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid});
                    if (find == null) {
                        let _user = new UserShoro({
                            email: '',
                            role: 'организатор',
                            status: 'active',
                            password: '12345678',
                        });
                        let _object = new OrganizatorShoro({
                            name: req.body.elements[0].elements[i].elements[0].text,
                            phone: '',
                            region: 'Резерв',
                            user: _user._id,
                            guidRegion: 'lol',
                            guid: req.body.elements[0].elements[i].attributes.guid
                        });
                        _user.email = _object._id
                        _object.phone = _object._id
                        await UserShoro.create(_user);
                        await OrganizatorShoro.create(_object);
                    }
                    else if (find.name !== req.body.elements[0].elements[i].elements[0].text) {
                        await OrganizatorShoro.updateMany({guid: req.body.elements[0].elements[i].attributes.guid}, {$set: {name: req.body.elements[0].elements[i].elements[0].text}});
                    }
                } else {
                    let object = await OrganizatorShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                    if(object!==null){
                        await UserShoro.deleteMany({_id: {$in: object.user}});
                        await OrganizatorShoro.deleteMany({guid: req.body.elements[0].elements[i].attributes.guid});
                    }
                }
            }
        }
        else if(req.body.elements[0].attributes.mode==='place'){
            for(let i = 0; i<req.body.elements[0].elements.length; i++){
                if(req.body.elements[0].elements[i].attributes.del!=='1') {
                    let find = await RegionShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid});
                    if (find == null) {
                        find = new RegionShoro({
                            name: ((req.body.elements[0].elements[i].elements[0].text).replace('\r\n', '')).trim(),
                            guid: req.body.elements[0].elements[i].attributes.guid
                        });
                        await RegionShoro.create(find);
                        find = new PointShoro({
                            name: 'Резерв',
                            guid: 'lol',
                            region: ((req.body.elements[0].elements[i].elements[0].text).replace('\r\n', '')).trim(),
                            guidRegion: req.body.elements[0].elements[i].attributes.guid
                        });
                        await PointShoro.create(find);
                    }
                    else if (find.name !== ((req.body.elements[0].elements[i].elements[0].text).replace('\r\n', '')).trim()) {
                        await RegionShoro.updateMany({guid: req.body.elements[0].elements[i].attributes.guid}, {$set: {name: ((req.body.elements[0].elements[i].elements[0].text).replace('\r\n', '')).trim()}});
                        await PointShoro.updateMany({guidRegion: req.body.elements[0].elements[i].attributes.guid}, {$set: {region: ((req.body.elements[0].elements[i].elements[0].text).replace('\r\n', '')).trim()}});
                        await OrganizatorShoro.updateMany({guidRegion: req.body.elements[0].elements[i].attributes.guid}, {$set: {region: ((req.body.elements[0].elements[i].elements[0].text).replace('\r\n', '')).trim()}});
                        await RealizatorShoro.updateMany({guidRegion: req.body.elements[0].elements[i].attributes.guid}, {$set: {region: ((req.body.elements[0].elements[i].elements[0].text).replace('\r\n', '')).trim()}});
                    }
                    for (let i1 = 1; i1 < req.body.elements[0].elements[i].elements.length; i1++) {
                        if(req.body.elements[0].elements[i].elements[i1].attributes.del!=='1') {
                            let find = await PointShoro.findOne({guid: req.body.elements[0].elements[i].elements[i1].attributes.guid});
                            if (find == null) {
                                find = new PointShoro({
                                    name: ((req.body.elements[0].elements[i].elements[i1].elements[0].text).replace('\r\n', '')).trim(),
                                    guid: req.body.elements[0].elements[i].elements[i1].attributes.guid,
                                    region: ((req.body.elements[0].elements[i].elements[0].text).replace('\r\n', '')).trim(),
                                    guidRegion: req.body.elements[0].elements[i].attributes.guid
                                });
                                await PointShoro.create(find);
                            } else if (find.name !== ((req.body.elements[0].elements[i].elements[0].text).replace('\r\n', '')).trim()) {
                                await PointShoro.updateMany({guid: req.body.elements[0].elements[i].elements[i1].attributes.guid}, {$set: {name: ((req.body.elements[0].elements[i].elements[i1].elements[0].text).replace('\r\n', '')).trim()}});
                                await RealizatorShoro.updateMany({guidPoint: req.body.elements[0].elements[i].elements[i1].attributes.guid}, {$set: {point: ((req.body.elements[0].elements[i].elements[i1].elements[0].text).replace('\r\n', '')).trim()}});
                            }
                        } else {
                            await PointShoro.deleteMany({guid: req.body.elements[0].elements[i].elements[i1].attributes.guid})
                            await RealizatorShoro.updateMany({guidPoint: req.body.elements[0].elements[i].elements[i1].attributes.guid}, {$set: {point: 'Резерв',guidPoint: 'lol'}});
                        }
                    }
                }
                else {
                    await RegionShoro.deleteMany({guid: req.body.elements[0].elements[i].attributes.guid})
                    await PointShoro.deleteMany({guidRegion: req.body.elements[0].elements[i].attributes.guid})
                    await OrganizatorShoro.updateMany({guidRegion: req.body.elements[0].elements[i].attributes.guid}, {$set: {region: 'Резерв', guidRegion: 'lol'}});
                    await RealizatorShoro.updateMany({guidRegion: req.body.elements[0].elements[i].attributes.guid}, {$set: {region: 'Резерв', guidRegion: 'lol', point: 'Резерв',guidPoint: 'lol'}});
                }
            }
        }
        else if(req.body.elements[0].attributes.mode==='seller'){
            for(let i = 0; i<req.body.elements[0].elements.length; i++) {
                //guid   req.body.elements[0].elements[i].attributes.guid
                //del   req.body.elements[0].elements[i].attributes.del
                //name   req.body.elements[0].elements[i].elements[0].text
                if(req.body.elements[0].elements[i].attributes.del!=='1') {
                    let find = await RealizatorShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid});
                    if (find == null) {
                        let _user = new UserShoro({
                            email: '',
                            role: 'реализатор',
                            status: 'active',
                            password: '12345678',
                        });
                        let _object = new RealizatorShoro({
                            name: req.body.elements[0].elements[i].elements[0].text,
                            phone: '',
                            region: 'Резерв',
                            point: 'Резерв',
                            user: _user._id,
                            guidRegion: 'lol',
                            guidPoint: 'lol',
                            guid: req.body.elements[0].elements[i].attributes.guid
                        });
                        _user.email = _object._id
                        _object.phone = _object._id
                        await UserShoro.create(_user);
                        await RealizatorShoro.create(_object);
                    }
                    else if (find.name !== req.body.elements[0].elements[i].elements[0].text) {
                        await RealizatorShoro.updateMany({guid: req.body.elements[0].elements[i].attributes.guid}, {$set: {name: req.body.elements[0].elements[i].elements[0].text}});
                    }
                } else {
                    let object = await RealizatorShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                    if(object!==null){
                        await UserShoro.deleteMany({_id: {$in: object.user}});
                        await RealizatorShoro.deleteMany({guid: req.body.elements[0].elements[i].attributes.guid});
                    }
                }
            }
        }
        else if(req.body.elements[0].attributes.mode==='product'){
            let date = req.body.elements[0].attributes.date.split('.')
            date = new Date(date[1]+'.'+date[0]+'.'+date[2])
            let find = await PriceShoro.findOne();
            let find1 = await TaraShoro.findOne();
            if(find===null||find1===null||find.date===undefined||date>find.date||find1.date===undefined||date>find1.date){
                await PriceShoro.deleteMany();
                await TaraShoro.deleteMany();
                for(let i = 0; i<req.body.elements[0].elements.length; i++) {
                    if(req.body.elements[0].elements[i].name==='item'){
                        let name = ''
                        let price = ''
                        if(req.body.elements[0].elements[i].elements[0].text.includes('Максым')) name = 'Максым'
                        else if(req.body.elements[0].elements[i].elements[0].text.includes('Чалап')) name = 'Чалап'
                        else if(req.body.elements[0].elements[i].elements[0].text.includes('Квас')) name = 'Квас'
                        else name = 'Стакан Легенда'
                        for(let i1 = 0; i1<req.body.elements[0].elements[i].elements.length; i1++) {
                            if(req.body.elements[0].elements[i].elements[i1].name==='price')
                                price = req.body.elements[0].elements[i].elements[i1].elements[0].text
                        }
                        let _object = new PriceShoro({
                            name: name,
                            price: price,
                            date: date,
                            guid: req.body.elements[0].elements[i].attributes.guid
                        });
                        await PriceShoro.create(_object);
                    } else if(req.body.elements[0].elements[i].name==='tare') {
                        let _object = new TaraShoro({
                            name: req.body.elements[0].elements[i].elements[0].text,
                            size: req.body.elements[0].elements[i].attributes.size,
                            date: date,
                            guid: req.body.elements[0].elements[i].attributes.guid
                        });
                        await TaraShoro.create(_object);
                    }
                }
            }
        }
        else if(req.body.elements[0].attributes.mode==='motion'){
            let date = req.body.elements[0].attributes.date.split('.')
            date = date[0]+' '+month1[parseInt(date[1])-1]+' '+date[2]
            if(req.body.elements[0].attributes.type==='Выдача'){
                let organizator = await OrganizatorShoro.findOne({guid: req.body.elements[0].attributes.to})
                if(organizator!==null) {
                    for (let i = 0; i < req.body.elements[0].elements.length; i++) {
                        let item = await PriceShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                        if (item !== null && item.name !== 'Стакан Легенда') {
                            let findNakladnayaSklad1Shoro = await NakladnayaSklad1ShoroModule.getNakladnayaSklad1ShoroByData(date, organizator.guid, organizator.guidRegion)
                            if (findNakladnayaSklad1Shoro === null) {
                                let _object = new NakladnayaSklad1Shoro({
                                    dataTable: '{"vydano":{"n":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false},"r":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d1":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d2":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d3":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"i":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false}},"vozvrat":{"n":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false},"r":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d1":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d2":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d3":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"s":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"i":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false}}}',
                                    data: date,
                                    organizator: organizator.name,
                                    region: organizator.region,
                                    disabled: false,
                                    guidRegion: organizator.guidRegion,
                                    guidOrganizator: organizator.guid,
                                });
                                findNakladnayaSklad1Shoro = await NakladnayaSklad1Shoro.create(_object);
                            }
                            let findDataNakladnayaSklad1Shoro = JSON.parse(findNakladnayaSklad1Shoro.dataTable)
                            if (item.name === 'Максым') {
                                findDataNakladnayaSklad1Shoro['vydano']['r']['ml'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['ml'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['ml'])
                            }
                            else if (item.name === 'Чалап') {
                                findDataNakladnayaSklad1Shoro['vydano']['r']['chl'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['chl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['chl'])
                            }
                            else if (item.name === 'Квас') {
                                findDataNakladnayaSklad1Shoro['vydano']['r']['kl'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['kl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['kl'])
                            }
                            findDataNakladnayaSklad1Shoro = JSON.stringify(findDataNakladnayaSklad1Shoro)
                            await NakladnayaSklad1Shoro.updateOne({_id: findNakladnayaSklad1Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad1Shoro}});
                        } else {
                            if (item === null)
                                item = await TaraShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                            if (item !== null) {
                                let findNakladnayaSklad2Shoro = await NakladnayaSklad2ShoroModule.getNakladnayaSklad2ShoroByData(date, organizator.guid, organizator.guidRegion)
                                if (findNakladnayaSklad2Shoro === null) {
                                    let _object = new NakladnayaSklad2Shoro({
                                        dataTable: '{"vydano":{"r":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d1":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d2":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d3":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"i":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false}},"vozvrat":{"r":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d1":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d2":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d3":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"i":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"v":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"s":{"s02":"","s0502":"","sh02":"","s04":"","s0504":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"iv":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false}}}',
                                        data: date,
                                        organizator: organizator.name,
                                        region: organizator.region,
                                        disabled: false,
                                        guidRegion: organizator.guidRegion,
                                        guidOrganizator: organizator.guid,
                                    });
                                    findNakladnayaSklad2Shoro = await NakladnayaSklad2Shoro.create(_object);
                                }
                                let findDataNakladnayaSklad2Shoro = JSON.parse(findNakladnayaSklad2Shoro.dataTable)
                                if (item.name === 'Стакан Легенда') {
                                    findDataNakladnayaSklad2Shoro['vydano']['r']['l'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['l'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['l'])
                                }
                                else if (item.size === '0.20') {
                                    findDataNakladnayaSklad2Shoro['vydano']['r']['sh02'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['sh02'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['sh02'])
                                }
                                else if (item.size === '0.40') {
                                    findDataNakladnayaSklad2Shoro['vydano']['r']['sh04'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['sh04'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['sh04'])
                                }
                                else if (item.size === '1.00') {
                                    findDataNakladnayaSklad2Shoro['vydano']['r']['b'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['b'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['b'])
                                }
                                findDataNakladnayaSklad2Shoro = JSON.stringify(findDataNakladnayaSklad2Shoro)
                                await NakladnayaSklad2Shoro.updateOne({_id: findNakladnayaSklad2Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad2Shoro}});
                            }
                        }
                    }
                }
            }
            else if(req.body.elements[0].attributes.type==='Доливка 1'){
                let organizator = await OrganizatorShoro.findOne({guid: req.body.elements[0].attributes.to})
                if(organizator!==null) {
                    for (let i = 0; i < req.body.elements[0].elements.length; i++) {
                        let item = await PriceShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                        if (item !== null && item.name !== 'Стакан Легенда') {
                            let findNakladnayaSklad1Shoro = await NakladnayaSklad1ShoroModule.getNakladnayaSklad1ShoroByData(date, organizator.guid, organizator.guidRegion)
                            if (findNakladnayaSklad1Shoro === null) {
                                let _object = new NakladnayaSklad1Shoro({
                                    dataTable: '{"vydano":{"n":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false},"r":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d1":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d2":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d3":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"i":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false}},"vozvrat":{"n":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false},"r":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d1":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d2":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d3":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"s":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"i":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false}}}',
                                    data: date,
                                    organizator: organizator.name,
                                    region: organizator.region,
                                    disabled: false,
                                    guidRegion: organizator.guidRegion,
                                    guidOrganizator: organizator.guid,
                                });
                                findNakladnayaSklad1Shoro = await NakladnayaSklad1Shoro.create(_object);
                            }
                            let findDataNakladnayaSklad1Shoro = JSON.parse(findNakladnayaSklad1Shoro.dataTable)
                            if (item.name === 'Максым') {
                                findDataNakladnayaSklad1Shoro['vydano']['d1']['ml'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['ml'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['ml'])
                            }
                            else if (item.name === 'Чалап') {
                                findDataNakladnayaSklad1Shoro['vydano']['d1']['chl'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['chl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['chl'])
                            }
                            else if (item.name === 'Квас') {
                                findDataNakladnayaSklad1Shoro['vydano']['d1']['kl'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['kl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['kl'])
                            }
                            findDataNakladnayaSklad1Shoro = JSON.stringify(findDataNakladnayaSklad1Shoro)
                            await NakladnayaSklad1Shoro.updateOne({_id: findNakladnayaSklad1Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad1Shoro}});
                        } else {
                            if (item === null)
                                item = await TaraShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                            if (item !== null) {
                                let findNakladnayaSklad2Shoro = await NakladnayaSklad2ShoroModule.getNakladnayaSklad2ShoroByData(date, organizator.guid, organizator.guidRegion)
                                if (findNakladnayaSklad2Shoro === null) {
                                    let _object = new NakladnayaSklad2Shoro({
                                        dataTable: '{"vydano":{"r":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d1":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d2":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d3":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"i":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false}},"vozvrat":{"r":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d1":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d2":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d3":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"i":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"v":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"s":{"s02":"","s0502":"","sh02":"","s04":"","s0504":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"iv":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false}}}',
                                        data: date,
                                        organizator: organizator.name,
                                        region: organizator.region,
                                        disabled: false,
                                        guidRegion: organizator.guidRegion,
                                        guidOrganizator: organizator.guid,
                                    });
                                    findNakladnayaSklad2Shoro = await NakladnayaSklad2Shoro.create(_object);
                                }
                                let findDataNakladnayaSklad2Shoro = JSON.parse(findNakladnayaSklad2Shoro.dataTable)
                                if (item.name === 'Стакан Легенда') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d1']['l'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['l'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['l'])
                                }
                                else if (item.size === '0.20') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d1']['sh02'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['sh02'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['sh02'])
                                }
                                else if (item.size === '0.40') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d1']['sh04'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['sh04'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['sh04'])
                                }
                                else if (item.size === '1.00') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d1']['b'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['b'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['b'])
                                }
                                findDataNakladnayaSklad2Shoro = JSON.stringify(findDataNakladnayaSklad2Shoro)
                                await NakladnayaSklad2Shoro.updateOne({_id: findNakladnayaSklad2Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad2Shoro}});
                            }
                        }
                    }
                }
            }
            else if(req.body.elements[0].attributes.type==='Доливка 2'){
                let organizator = await OrganizatorShoro.findOne({guid: req.body.elements[0].attributes.to})
                if(organizator!==null) {
                    for (let i = 0; i < req.body.elements[0].elements.length; i++) {
                        let item = await PriceShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                        if (item !== null && item.name !== 'Стакан Легенда') {
                            let findNakladnayaSklad1Shoro = await NakladnayaSklad1ShoroModule.getNakladnayaSklad1ShoroByData(date, organizator.guid, organizator.guidRegion)
                            if (findNakladnayaSklad1Shoro === null) {
                                let _object = new NakladnayaSklad1Shoro({
                                    dataTable: '{"vydano":{"n":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false},"r":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d1":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d2":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d3":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"i":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false}},"vozvrat":{"n":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false},"r":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d1":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d2":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d3":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"s":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"i":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false}}}',
                                    data: date,
                                    organizator: organizator.name,
                                    region: organizator.region,
                                    disabled: false,
                                    guidRegion: organizator.guidRegion,
                                    guidOrganizator: organizator.guid,
                                });
                                findNakladnayaSklad1Shoro = await NakladnayaSklad1Shoro.create(_object);
                            }
                            let findDataNakladnayaSklad1Shoro = JSON.parse(findNakladnayaSklad1Shoro.dataTable)
                            if (item.name === 'Максым') {
                                findDataNakladnayaSklad1Shoro['vydano']['d2']['ml'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['ml'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['ml'])
                            }
                            else if (item.name === 'Чалап') {
                                findDataNakladnayaSklad1Shoro['vydano']['d2']['chl'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['chl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['chl'])
                            }
                            else if (item.name === 'Квас') {
                                findDataNakladnayaSklad1Shoro['vydano']['d2']['kl'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['kl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['kl'])
                            }
                            findDataNakladnayaSklad1Shoro = JSON.stringify(findDataNakladnayaSklad1Shoro)
                            await NakladnayaSklad1Shoro.updateOne({_id: findNakladnayaSklad1Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad1Shoro}});
                        } else {
                            if (item === null)
                                item = await TaraShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                            if (item !== null) {
                                let findNakladnayaSklad2Shoro = await NakladnayaSklad2ShoroModule.getNakladnayaSklad2ShoroByData(date, organizator.guid, organizator.guidRegion)
                                if (findNakladnayaSklad2Shoro === null) {
                                    let _object = new NakladnayaSklad2Shoro({
                                        dataTable: '{"vydano":{"r":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d1":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d2":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d3":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"i":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false}},"vozvrat":{"r":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d1":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d2":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d3":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"i":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"v":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"s":{"s02":"","s0502":"","sh02":"","s04":"","s0504":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"iv":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false}}}',
                                        data: date,
                                        organizator: organizator.name,
                                        region: organizator.region,
                                        disabled: false,
                                        guidRegion: organizator.guidRegion,
                                        guidOrganizator: organizator.guid,
                                    });
                                    findNakladnayaSklad2Shoro = await NakladnayaSklad2Shoro.create(_object);
                                }
                                let findDataNakladnayaSklad2Shoro = JSON.parse(findNakladnayaSklad2Shoro.dataTable)
                                if (item.name === 'Стакан Легенда') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d2']['l'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['l'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['l'])
                                }
                                else if (item.size === '0.20') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d2']['sh02'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['sh02'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['sh02'])
                                }
                                else if (item.size === '0.40') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d2']['sh04'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['sh04'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['sh04'])
                                }
                                else if (item.size === '1.00') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d2']['b'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['b'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['b'])
                                }
                                findDataNakladnayaSklad2Shoro = JSON.stringify(findDataNakladnayaSklad2Shoro)
                                await NakladnayaSklad2Shoro.updateOne({_id: findNakladnayaSklad2Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad2Shoro}});
                            }
                        }
                    }
                }
            }
            else if(req.body.elements[0].attributes.type==='Доливка 3'){
                let organizator = await OrganizatorShoro.findOne({guid: req.body.elements[0].attributes.to})
                if(organizator!==null) {
                    for (let i = 0; i < req.body.elements[0].elements.length; i++) {
                        let item = await PriceShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                        if (item !== null && item.name !== 'Стакан Легенда') {
                            let findNakladnayaSklad1Shoro = await NakladnayaSklad1ShoroModule.getNakladnayaSklad1ShoroByData(date, organizator.guid, organizator.guidRegion)
                            if (findNakladnayaSklad1Shoro === null) {
                                let _object = new NakladnayaSklad1Shoro({
                                    dataTable: '{"vydano":{"n":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false},"r":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d1":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d2":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d3":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"i":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false}},"vozvrat":{"n":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false},"r":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d1":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d2":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d3":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"s":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"i":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false}}}',
                                    data: date,
                                    organizator: organizator.name,
                                    region: organizator.region,
                                    disabled: false,
                                    guidRegion: organizator.guidRegion,
                                    guidOrganizator: organizator.guid,
                                });
                                findNakladnayaSklad1Shoro = await NakladnayaSklad1Shoro.create(_object);
                            }
                            let findDataNakladnayaSklad1Shoro = JSON.parse(findNakladnayaSklad1Shoro.dataTable)
                            if (item.name === 'Максым') {
                                findDataNakladnayaSklad1Shoro['vydano']['d3']['ml'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['ml'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['ml'])
                            }
                            else if (item.name === 'Чалап') {
                                findDataNakladnayaSklad1Shoro['vydano']['d3']['chl'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['chl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['chl'])
                            }
                            else if (item.name === 'Квас') {
                                findDataNakladnayaSklad1Shoro['vydano']['d3']['kl'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vydano']['i']['kl'] = checkInt(findDataNakladnayaSklad1Shoro['vydano']['n']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['r']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d1']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d2']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vydano']['d3']['kl'])
                            }
                            findDataNakladnayaSklad1Shoro = JSON.stringify(findDataNakladnayaSklad1Shoro)
                            await NakladnayaSklad1Shoro.updateOne({_id: findNakladnayaSklad1Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad1Shoro}});
                        } else {
                            if (item === null)
                                item = await TaraShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                            if (item !== null) {
                                let findNakladnayaSklad2Shoro = await NakladnayaSklad2ShoroModule.getNakladnayaSklad2ShoroByData(date, organizator.guid, organizator.guidRegion)
                                if (findNakladnayaSklad2Shoro === null) {
                                    let _object = new NakladnayaSklad2Shoro({
                                        dataTable: '{"vydano":{"r":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d1":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d2":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d3":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"i":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false}},"vozvrat":{"r":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d1":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d2":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d3":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"i":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"v":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"s":{"s02":"","s0502":"","sh02":"","s04":"","s0504":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"iv":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false}}}',
                                        data: date,
                                        organizator: organizator.name,
                                        region: organizator.region,
                                        disabled: false,
                                        guidRegion: organizator.guidRegion,
                                        guidOrganizator: organizator.guid,
                                    });
                                    findNakladnayaSklad2Shoro = await NakladnayaSklad2Shoro.create(_object);
                                }
                                let findDataNakladnayaSklad2Shoro = JSON.parse(findNakladnayaSklad2Shoro.dataTable)
                                if (item.name === 'Стакан Легенда') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d3']['l'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['l'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['l'])
                                }
                                else if (item.size === '0.20') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d3']['sh02'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['sh02'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['sh02'])
                                }
                                else if (item.size === '0.40') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d3']['sh04'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['sh04'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['sh04'])
                                }
                                else if (item.size === '1.00') {
                                    findDataNakladnayaSklad2Shoro['vydano']['d3']['b'] = req.body.elements[0].attributes.del === '1' ? 0 : checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vydano']['i']['b'] = checkInt(findDataNakladnayaSklad2Shoro['vydano']['r']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d1']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d2']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vydano']['d3']['b'])
                                }
                                findDataNakladnayaSklad2Shoro = JSON.stringify(findDataNakladnayaSklad2Shoro)
                                await NakladnayaSklad2Shoro.updateOne({_id: findNakladnayaSklad2Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad2Shoro}});
                            }
                        }
                    }
                }
            }
            else if(req.body.elements[0].attributes.type==='Съем'){
                let organizator = await OrganizatorShoro.findOne({guid: req.body.elements[0].attributes.from})
                if(organizator!==null){
                    for(let i = 0; i<req.body.elements[0].elements.length; i++) {
                        let item = await PriceShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                        if(item!==null&&item.name !== 'Стакан Легенда'){
                            let findNakladnayaSklad1Shoro = await NakladnayaSklad1ShoroModule.getNakladnayaSklad1ShoroByData(date, organizator.guid, organizator.guidRegion)
                            if(findNakladnayaSklad1Shoro===null){
                                let _object = new NakladnayaSklad1Shoro({
                                    dataTable: '{"vydano":{"n":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false},"r":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d1":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d2":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d3":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"i":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false}},"vozvrat":{"n":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false},"r":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d1":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d2":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"d3":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"s":{"m25":"","ml":"","ch25":"","ch10":"","chl":"","k25":"","k10":"","kl":"","o":false,"p":false},"i":{"m25":"","ml":"","ch25":0,"ch10":0,"chl":0,"k25":"","k10":"","kl":"","o":false,"p":false}}}',
                                    data: date,
                                    organizator: organizator.name,
                                    region: organizator.region,
                                    disabled: false,
                                    guidRegion: organizator.guidRegion,
                                    guidOrganizator: organizator.guid,
                                });
                                findNakladnayaSklad1Shoro = await NakladnayaSklad1Shoro.create(_object);
                            }
                            let findDataNakladnayaSklad1Shoro = JSON.parse(findNakladnayaSklad1Shoro.dataTable)
                            if(item.name === 'Максым'){
                                findDataNakladnayaSklad1Shoro['vozvrat']['s']['ml'] = req.body.elements[0].attributes.del==='1'?0:checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vozvrat']['i']['ml'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['n']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['ml']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['ml'])
                            }
                            else if(item.name === 'Чалап'){
                                findDataNakladnayaSklad1Shoro['vozvrat']['s']['chl'] = req.body.elements[0].attributes.del==='1'?0:checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vozvrat']['i']['chl'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['n']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['chl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['chl'])
                            }
                            else if(item.name === 'Квас'){
                                findDataNakladnayaSklad1Shoro['vozvrat']['s']['kl'] = req.body.elements[0].attributes.del==='1'?0:checkInt(req.body.elements[0].elements[i].attributes.qty)
                                findDataNakladnayaSklad1Shoro['vozvrat']['i']['kl'] = checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['n']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['r']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d1']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d2']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['d3']['kl']) + checkInt(findDataNakladnayaSklad1Shoro['vozvrat']['s']['kl'])
                            }
                            findDataNakladnayaSklad1Shoro = JSON.stringify(findDataNakladnayaSklad1Shoro)
                            await NakladnayaSklad1Shoro.updateOne({_id: findNakladnayaSklad1Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad1Shoro}});
                        } else {
                            if(item === null)
                                item = await TaraShoro.findOne({guid: req.body.elements[0].elements[i].attributes.guid})
                            if(item!==null) {
                                let findNakladnayaSklad2Shoro = await NakladnayaSklad2ShoroModule.getNakladnayaSklad2ShoroByData(date, organizator.guid, organizator.guidRegion)
                                if(findNakladnayaSklad2Shoro===null){
                                    let _object = new NakladnayaSklad2Shoro({
                                        dataTable: '{"vydano":{"r":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d1":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d2":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d3":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"i":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false}},"vozvrat":{"r":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d1":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d2":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"d3":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"i":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"v":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"s":{"s02":"","s0502":"","sh02":"","s04":"","s0504":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false},"iv":{"s02":"","sh02":"","s04":"","sh04":"","l":"","b":"","pm":"","pv":"","o":false,"p":false}}}',
                                        data: date,
                                        organizator: organizator.name,
                                        region: organizator.region,
                                        disabled: false,
                                        guidRegion: organizator.guidRegion,
                                        guidOrganizator: organizator.guid,
                                    });
                                    findNakladnayaSklad2Shoro = await NakladnayaSklad2Shoro.create(_object);
                                }
                                let findDataNakladnayaSklad2Shoro = JSON.parse(findNakladnayaSklad2Shoro.dataTable)
                                if(item.name === 'Стакан Легенда'){
                                    findDataNakladnayaSklad2Shoro['vozvrat']['s']['l'] = req.body.elements[0].attributes.del==='1'?0:checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vozvrat']['iv']['l'] = checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['i']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['v']['l']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['s']['l'])

                                }
                                else if(item.size === '0.20'){
                                    findDataNakladnayaSklad2Shoro['vozvrat']['s']['sh02'] = req.body.elements[0].attributes.del==='1'?0:checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vozvrat']['iv']['sh02'] = checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['i']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['v']['sh02']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['s']['sh02'])

                                }
                                else if(item.size === '0.40'){
                                    findDataNakladnayaSklad2Shoro['vozvrat']['s']['sh04'] = req.body.elements[0].attributes.del==='1'?0:checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vozvrat']['iv']['sh04'] = checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['i']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['v']['sh04']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['s']['sh04'])
                                }
                                else if(item.size === '1.00'){
                                    findDataNakladnayaSklad2Shoro['vozvrat']['s']['b'] = req.body.elements[0].attributes.del==='1'?0:checkInt(req.body.elements[0].elements[i].attributes.qty)
                                    findDataNakladnayaSklad2Shoro['vozvrat']['iv']['b'] = checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['i']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['v']['b']) + checkInt(findDataNakladnayaSklad2Shoro['vozvrat']['s']['b'])
                                }
                                findDataNakladnayaSklad2Shoro = JSON.stringify(findDataNakladnayaSklad2Shoro)
                                await NakladnayaSklad2Shoro.updateOne({_id: findNakladnayaSklad2Shoro._id}, {$set: {dataTable: findDataNakladnayaSklad2Shoro}});
                            }
                        }
                    }
                }
            }
        }
        await res.status(200);
        await res.end('success')
    } catch (err) {
        logger.info(err.message);
        console.error(err)
        res.status(501);
        res.end('error')
    }
});

module.exports = router;
