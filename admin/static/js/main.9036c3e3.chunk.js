(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{162:function(e,t,a){e.exports=a(18)},167:function(e,t,a){},17:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r}),a.d(t,"f",function(){return o}),a.d(t,"g",function(){return i}),a.d(t,"h",function(){return c}),a.d(t,"i",function(){return d}),a.d(t,"d",function(){return s}),a.d(t,"c",function(){return u}),a.d(t,"e",function(){return l});var n="GET_DATA",r="GET_IDS",o="SET_SELECTED",i="SET_SELECTED_POINT",c="SET_SELECTED_REGION",d="SET_TYPE_STATISTIC",s="SET_OLD_FILE",u="SET_DELETED_ID",l="SET_POINT"},171:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),i=a.n(o),c=(a(167),a(90)),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=a(52),l=a(29),p=a(16),f=a(23),h={authenticated:!1,error:!1,status:{},reiting:{}};var g=a(50),m={title:"",child:null,show:!1};var b=a(44),y={drawer:!1,profile:{}};var v=a(17),S={count:0,page:0,data:[],data1:[],row:[],search:"",name:"",sort:"",selected:-1,ids:{},point1:{},deletedId:"",oldFile:"",region:"region",point:"point",typeStatistic:{what:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}};var w=a(45),O={title:"",show:!1};var j=Object(l.c)({mini_dialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.b:return Object(p.a)({},e,{show:t.payload});case g.a:return Object(p.a)({},e,{title:t.payload.title,child:t.payload.child});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.a:return Object(p.a)({},e,{authenticated:!0,error:!1});case f.e:return Object(p.a)({},e,{authenticated:!1,error:!1});case f.b:return Object(p.a)({},e,{error:t.payload});case f.d:return Object(p.a)({},e,{status:t.payload});case f.c:return Object(p.a)({},e,{reiting:t.payload});default:return e}},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.b:return Object(p.a)({},e,{ids:t.payload});case v.f:return Object(p.a)({},e,{selected:t.payload});case v.a:var a=Object(p.a)({},e,{count:t.payload.count,page:t.payload.page,data:t.payload.data,data1:t.payload.data1,row:t.payload.row,search:t.payload.search,name:t.payload.name,sort:t.payload.sort});return void 0!==t.payload.region&&(a.region=t.payload.region),void 0!==t.payload.point&&(a.point=t.payload.point),a;case v.e:return Object(p.a)({},e,{point1:t.payload});case v.d:return Object(p.a)({},e,{oldFile:t.payload});case v.c:return Object(p.a)({},e,{deletedId:t.payload});case v.i:return Object(p.a)({},e,{typeStatistic:t.payload});case v.g:return Object(p.a)({},e,{point:t.payload});case v.h:return Object(p.a)({},e,{region:t.payload});default:return e}},snackbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.a:return Object(p.a)({},e,{show:!1});case w.b:return Object(p.a)({},e,{title:t.payload.title,show:!0});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.b:return Object(p.a)({},e,{drawer:t.payload});case b.a:return Object(p.a)({},e,{profile:t.payload});default:return e}}}),E=a(140);var A=a(582),k=a(92),x=a(12),T=a(145),R=a(144),L=a.n(R);a.d(t,"store",function(){return I});var P,q=Object(x.createMuiTheme)({overrides:{MuiPickersToolbar:{toolbar:{backgroundColor:"#202124"}},MuiPickersCalendarHeader:{switchHeader:{}},MuiPickersDay:{day:{color:"#202124"},isSelected:{backgroundColor:"#202124"},current:{color:"#202124"}},MuiPickersModal:{dialogAction:{color:"#202124"}}}}),I=Object(l.d)(j,P,Object(l.a)(E.a));i.a.hydrate(r.a.createElement(x.MuiThemeProvider,{theme:q},r.a.createElement(k.b,{utils:T.a,locale:L.a},r.a.createElement(A.a,null,r.a.createElement(u.a,{store:I},r.a.createElement(c.a,null))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");d?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}else console.log("service worker dont work")}()},23:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"e",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"d",function(){return i}),a.d(t,"c",function(){return c});var n="AUTHENTICATED",r="UNAUTHENTICATED",o="ERROR_AUTHENTICATED",i="SET_STATUS",c="SET_REITING"},31:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"d",function(){return i}),a.d(t,"b",function(){return c}),a.d(t,"a",function(){return d});var n=["\u044f\u043d\u0432\u0430\u0440\u044c","\u0444\u0435\u0432\u0440\u0430\u043b\u044c","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0435\u043b\u044c","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u043e\u043a\u0442\u044f\u0431\u0440\u044c","\u043d\u043e\u044f\u0431\u0440\u044c","\u0434\u0435\u043a\u0430\u0431\u0440\u044c"],r={"\u044f\u043d\u0432\u0430\u0440\u044c":31,"\u0444\u0435\u0432\u0440\u0430\u043b\u044c":28,"\u043c\u0430\u0440\u0442":31,"\u0430\u043f\u0440\u0435\u043b\u044c":30,"\u043c\u0430\u0439":31,"\u0438\u044e\u043d\u044c":30,"\u0438\u044e\u043b\u044c":31,"\u0430\u0432\u0433\u0443\u0441\u0442":31,"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c":30,"\u043e\u043a\u0442\u044f\u0431\u0440\u044c":31,"\u043d\u043e\u044f\u0431\u0440\u044c":30,"\u0434\u0435\u043a\u0430\u0431\u0440\u044c":31},o={"\u044f\u043d\u0432\u0430\u0440\u044c":"\u0434\u0435\u043a\u0430\u0431\u0440\u044c","\u0444\u0435\u0432\u0440\u0430\u043b\u044c":"\u044f\u043d\u0432\u0430\u0440\u044c","\u043c\u0430\u0440\u0442":"\u0444\u0435\u0432\u0440\u0430\u043b\u044c","\u0430\u043f\u0440\u0435\u043b\u044c":"\u043c\u0430\u0440\u0442","\u043c\u0430\u0439":"\u0430\u043f\u0440\u0435\u043b\u044c","\u0438\u044e\u043d\u044c":"\u043c\u0430\u0439","\u0438\u044e\u043b\u044c":"\u0438\u044e\u043d\u044c","\u0430\u0432\u0433\u0443\u0441\u0442":"\u0438\u044e\u043b\u044c","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c":"\u0430\u0432\u0433\u0443\u0441\u0442","\u043e\u043a\u0442\u044f\u0431\u0440\u044c":"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u043d\u043e\u044f\u0431\u0440\u044c":"\u043e\u043a\u0442\u044f\u0431\u0440\u044c","\u0434\u0435\u043a\u0430\u0431\u0440\u044c":"\u043d\u043e\u044f\u0431\u0440\u044c"},i=10,c=function(e){return(e=e.split(" "))[0]-=1,0===e[0]&&(e[0]=r[e[1]],e[1]=o[e[1]],"\u0434\u0435\u043a\u0430\u0431\u0440\u044c"===e[1]&&(e[2]-=1)),e[0]+" "+e[1]+" "+e[2]},d=function(e){return isNaN(parseInt(e))?0:parseInt(e)}},44:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n="SHOW_DRAWER",r="SET_PROFILE"},45:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n="CLOSE_SNACKBAR",r="SHOW_SNACKBAR"},50:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n="SET_MINI_DIALOG",r="SHOW_MINI_DIALOG"},51:function(e,t,a){"use strict";a.r(t),a.d(t,"showSnackBar",function(){return r}),a.d(t,"closeSnackBar",function(){return o});var n=a(45);function r(e){return{type:n.b,payload:{title:e}}}function o(){return{type:n.a}}},69:function(e,t,a){"use strict";a.r(t),a.d(t,"setData",function(){return h}),a.d(t,"addData",function(){return g}),a.d(t,"setSelected",function(){return m}),a.d(t,"setTypeStatistic",function(){return b}),a.d(t,"setPoint",function(){return y}),a.d(t,"setSelectedPoint",function(){return v}),a.d(t,"setSelectedRegion",function(){return S}),a.d(t,"setDeletedId",function(){return w}),a.d(t,"setOldFile",function(){return O}),a.d(t,"getIds",function(){return j}),a.d(t,"getData",function(){return E}),a.d(t,"getDataSimple",function(){return A}),a.d(t,"deleteData",function(){return k});var n=a(15),r=a.n(n),o=a(20),i=a(17),c=a(51),d=a(31),s=a(26),u=a.n(s),l=a(33),p=a.n(l),f=a(18);function h(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){var n,o,c,s,l,h,g,m,b,y,v,S,w,O,j;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,(n=new p.a).append("id",e.id),n.append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(e.page*d.d)),n.append("name",e.name),n.append("new",JSON.stringify(e.data)),void 0!==f.store.getState().table.region&&n.append("region",f.store.getState().table.region),void 0!==f.store.getState().table.point&&n.append("point",f.store.getState().table.point),void 0!=e.oldFile&&n.append("oldFile",e.oldFile),void 0!=e.oldFileWhatermark&&n.append("oldFileWhatermark",e.oldFileWhatermark),void 0!=e.file){for(n.append("fileLength",e.file.length),c=0;c<e.file.length;c++)n.append("file"+c,e.file[c]),n.append("fileName"+c,e.file[c].name);o={accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data; boundary=".concat(n._boundary),"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}}else o={accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin};return t.next=15,u.a.post("/data/add",n,{headers:o});case 15:for(s=t.sent,l=[],h=0;h<s.data.row.length;h++)l.push({name:s.data.row[h],options:{filter:!0,sort:!0}});if(g=[],"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(m=0;m<s.data.data.length;m++)g[m]=[s.data.data[m][0],s.data.data[m][1],s.data.data[m][2]];else if("\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(b=0;b<s.data.data.length;b++)g[b]=[s.data.data[b][0],s.data.data[b][1]];else if("\u0417\u0430\u0432\u0441\u043a\u043b\u0430\u0434\u0430"==e.name)for(y=0;y<s.data.data.length;y++)g[y]=[s.data.data[y][0]];else if("\u0411\u043b\u043e\u0433"==e.name)for(v=0;v<s.data.data.length;v++)S=s.data.data[v][2].substring(0,200)+"...",g[v]=[s.data.data[v][0],s.data.data[v][1],S,s.data.data[v][3]];else for(w=0;w<s.data.data.length;w++)for(g[w]=[],O=0;O<s.data.data[w].length-1;O++)g[w].push(s.data.data[w][O]);for(l.unshift("\u2116"),j=0;j<s.data.data.length;j++)g[j].unshift((e.page*d.d+j+1).toString());e={count:s.data.count,page:e.page,data:s.data.data,data1:g,row:l,search:e.search,name:e.name,sort:e.sort},a({type:i.a,payload:e}),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(0),console.error(t.t0);case 29:case"end":return t.stop()}},t,this,[[0,26]])}));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){var n,o,c,s,l,h,g,m,b,y,v,S,w,O,j;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,(n=new p.a).append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(e.page*d.d)),n.append("name",e.name),n.append("new",JSON.stringify(e.data)),void 0!==f.store.getState().table.region&&n.append("region",f.store.getState().table.region),void 0!==f.store.getState().table.point&&n.append("point",f.store.getState().table.point),void 0!=e.file){for(n.append("fileLength",e.file.length),c=0;c<e.file.length;c++)n.append("file"+c,e.file[c]),n.append("fileName"+c,e.file[c].name);o={accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data; boundary=".concat(n._boundary),"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}}else o={accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin};return t.next=12,u.a.post("/data/add",n,{headers:o});case 12:for(s=t.sent,l=[],h=0;h<s.data.row.length;h++)l.push({name:s.data.row[h],options:{filter:!0,sort:!0}});if(g=[],"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(m=0;m<s.data.data.length;m++)g[m]=[s.data.data[m][0],s.data.data[m][1],s.data.data[m][2]];else if("\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(b=0;b<s.data.data.length;b++)g[b]=[s.data.data[b][0],s.data.data[b][1]];else if("\u0417\u0430\u0432\u0441\u043a\u043b\u0430\u0434\u0430"==e.name)for(y=0;y<s.data.data.length;y++)g[y]=[s.data.data[y][0]];else if("\u0411\u043b\u043e\u0433"==e.name)for(v=0;v<s.data.data.length;v++)S=s.data.data[v][2].substring(0,200)+"...",g[v]=[s.data.data[v][0],s.data.data[v][1],S,s.data.data[v][3]];else for(w=0;w<s.data.data.length;w++)for(g[w]=[],O=0;O<s.data.data[w].length-1;O++)g[w].push(s.data.data[w][O]);for(l.unshift("\u2116"),j=0;j<s.data.data.length;j++)g[j].unshift((e.page*d.d+j+1).toString());e={count:s.data.count,page:e.page,data:s.data.data,data1:g,row:l,search:e.search,name:e.name,sort:e.sort},a({type:i.a,payload:e}),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(0),console.error(t.t0);case 26:case"end":return t.stop()}},t,this,[[0,23]])}));return function(e){return t.apply(this,arguments)}}()}function m(e){return{type:i.f,payload:e}}function b(e){return{type:i.i,payload:e}}function y(e){return{type:i.e,payload:e}}function v(e){return{type:i.g,payload:e}}function S(e){return{type:i.h,payload:e}}function w(e){return{type:i.c,payload:e}}function O(e){return{type:i.d,payload:e}}function j(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){var n,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(n=new p.a).append("name",e),t.next=5,u.a.post("/data/getIds",n,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 5:o=t.sent,a({type:i.b,payload:o.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}function E(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){var n,o,c,s,l,h,g,m,b,y,v,S,w;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,""!==e.name){t.next=6;break}e={count:0,page:0,data:[],data1:[],row:[],search:e.search,name:e.name,sort:e.sort},a({type:i.a,payload:e}),t.next=24;break;case 6:return(n=new p.a).append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(e.page*d.d)),n.append("name",e.name),void 0!==e.region?n.append("region",e.region):void 0!==f.store.getState().table.region&&n.append("region",f.store.getState().table.region),void 0!==e.point?n.append("point",e.point):void 0!==f.store.getState().table.point&&n.append("point",f.store.getState().table.point),t.next=15,u.a.post("/data/get",n,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 15:for(o=t.sent,c=[],s=0;s<o.data.row.length;s++)c.push({name:o.data.row[s],options:{filter:!0,sort:!0}});if(l=[],"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(h=0;h<o.data.data.length;h++)l[h]=[o.data.data[h][0],o.data.data[h][1],o.data.data[h][2]],console.log([l[h]]);else if("\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(g=0;g<o.data.data.length;g++)l[g]=[o.data.data[g][0],o.data.data[g][1]];else if("\u0417\u0430\u0432\u0441\u043a\u043b\u0430\u0434\u0430"==e.name)for(m=0;m<o.data.data.length;m++)l[m]=[o.data.data[m][0]];else if("\u0411\u043b\u043e\u0433"==e.name)for(b=0;b<o.data.data.length;b++)y=o.data.data[b][2].substring(0,200)+"...",l[b]=[o.data.data[b][0],o.data.data[b][1],y,o.data.data[b][3]];else for(v=0;v<o.data.data.length;v++)for(l[v]=[],S=0;S<o.data.data[v].length-1;S++)l[v].push(o.data.data[v][S]);for(c.unshift("\u2116"),w=0;w<o.data.data.length;w++)l[w].unshift((e.page*d.d+w+1).toString());e={count:o.data.count,page:e.page,data:o.data.data,data1:l,row:c,search:e.search,name:e.name,region:e.region,point:e.point,sort:e.sort},a({type:i.a,payload:e});case 24:t.next=29;break;case 26:t.prev=26,t.t0=t.catch(0),console.error(t.t0);case 29:case"end":return t.stop()}},t,this,[[0,26]])}));return function(e){return t.apply(this,arguments)}}()}u.a.interceptors.response.use(function(e){return e},function(e){return e.response.data.includes("to be unique")?f.store.dispatch(Object(c.showSnackBar)("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u0441\u044f")):e.response.data.includes("Could not proxy request")?f.store.dispatch(Object(c.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")):e.response.data.includes("No such user")?f.store.dispatch(Object(c.showSnackBar)("\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b")):(console.log(e.response.data),f.store.dispatch(Object(c.showSnackBar)(e.response.data))),e});var A=function(){var e=Object(o.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new p.a).append("name",t.name),void 0!==t.data&&a.append("data",JSON.stringify(t.data)),e.next=6,u.a.post("/data/get",a,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 6:return n=e.sent,e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}();function k(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){var n,o,c,s,l,h,g,m,b,y,v,S,w;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(n=new p.a).append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(e.page*d.d)),n.append("name",e.name),n.append("deleted",e.deleted),console.log(f.store.getState().table.region),void 0!==f.store.getState().table.region&&n.append("region",f.store.getState().table.region),void 0!==f.store.getState().table.point&&n.append("point",f.store.getState().table.point),void 0!=e.oldFile&&e.oldFile.length>0&&n.append("oldFile",e.oldFile),t.next=13,u.a.post("/data/delete",n,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 13:for(o=t.sent,c=[],s=0;s<o.data.row.length;s++)c.push({name:o.data.row[s],options:{filter:!0,sort:!0}});if(l=[],"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(h=0;h<o.data.data.length;h++)l[h]=[o.data.data[h][0],o.data.data[h][1],o.data.data[h][2]];else if("\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(g=0;g<o.data.data.length;g++)l[g]=[o.data.data[g][0],o.data.data[g][1]];else if("\u0417\u0430\u0432\u0441\u043a\u043b\u0430\u0434\u0430"==e.name)for(m=0;m<o.data.data.length;m++)l[m]=[o.data.data[m][0]];else if("\u0411\u043b\u043e\u0433"==e.name)for(b=0;b<o.data.data.length;b++)y=o.data.data[b][2].substring(0,200)+"...",l[b]=[o.data.data[b][0],o.data.data[b][1],y,o.data.data[b][3]];else for(v=0;v<o.data.data.length;v++)for(l[v]=[],S=0;S<o.data.data[v].length-1;S++)l[v].push(o.data.data[v][S]);for(c.unshift("\u2116"),w=0;w<o.data.data.length;w++)l[w].unshift((e.page*d.d+w+1).toString());e={count:o.data.count,page:e.page,data:o.data.data,data1:l,row:c,search:e.search,name:e.name,sort:e.sort},a({type:i.a,payload:e}),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(0),console.error(t.t0);case 27:case"end":return t.stop()}},t,this,[[0,24]])}));return function(e){return t.apply(this,arguments)}}()}},90:function(e,t,a){"use strict";a.d(t,"b",function(){return N});var n=a(15),r=a.n(n),o=a(20),i=a(0),c=a.n(i),d=(a(171),a(52)),s=a(29),u=a(95),l=a(98),p=a(365),f=a(25),h=a(366),g=a(69),m=Object(i.lazy)(function(){return Promise.all([a.e(2),a.e(0),a.e(4)]).then(a.bind(null,367))}),b=Object(i.lazy)(function(){return a.e(5).then(a.bind(null,368))}),y=Object(i.lazy)(function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,384))}),v=Object(i.lazy)(function(){return Promise.all([a.e(25),a.e(7)]).then(a.bind(null,369))}),S=Object(i.lazy)(function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,370))}),w=Object(i.lazy)(function(){return Promise.all([a.e(27),a.e(9)]).then(a.bind(null,371))}),O=Object(i.lazy)(function(){return Promise.all([a.e(1),a.e(10)]).then(a.bind(null,372))}),j=Object(i.lazy)(function(){return Promise.all([a.e(1),a.e(11)]).then(a.bind(null,373))}),E=Object(i.lazy)(function(){return Promise.all([a.e(1),a.e(12)]).then(a.bind(null,374))}),A=Object(i.lazy)(function(){return Promise.all([a.e(1),a.e(13)]).then(a.bind(null,375))}),k=Object(i.lazy)(function(){return Promise.all([a.e(1),a.e(14)]).then(a.bind(null,376))}),x=Object(i.lazy)(function(){return Promise.all([a.e(1),a.e(15)]).then(a.bind(null,377))}),T=Object(i.lazy)(function(){return Promise.all([a.e(1),a.e(26),a.e(16)]).then(a.bind(null,378))}),R=Object(i.lazy)(function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,379))}),L=Object(i.lazy)(function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,380))}),P=Object(i.lazy)(function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,381))}),q=Object(i.lazy)(function(){return Promise.all([a.e(2),a.e(0),a.e(20)]).then(a.bind(null,382))}),I=Object(i.lazy)(function(){return Promise.all([a.e(1),a.e(0),a.e(21)]).then(a.bind(null,383))}),N=c.a.createRef();function _(e,t,a){return function(n){return c.a.createElement(i.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(e,Object.assign({},n,{history:t,location:a})))}}t.a=Object(h.a)(Object(d.b)(function(e){return{user:e.user}},function(e){return{userActions:Object(s.b)(u,e),appActions:Object(s.b)(l,e)}})(function(e){var t=e.userActions,a=t.checkAuthenticated,n=t.setStatus,d=t.setReiting,s=e.appActions.setProfile;return Object(i.useEffect)(Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:return e.next=4,n();case 4:return e.next=6,Object(g.getDataSimple)({name:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"});case 6:return void 0!==(t=e.sent)&&s(t),e.next=10,Object(g.getDataSimple)({name:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0441\u0432\u043e\u0439"});case 10:t=e.sent,console.log(t),void 0!==t&&d(t);case 13:case"end":return e.stop()}},e,this)})),[]),c.a.createElement("div",{ref:N,className:"App"},c.a.createElement(i.Suspense,{fallback:null},c.a.createElement(y,{history:e.history,location:e.location})),c.a.createElement(i.Suspense,{fallback:null},c.a.createElement(v,{history:e.history})),c.a.createElement("div",{className:"App-body"},c.a.createElement(p.a,null,c.a.createElement(f.a,{path:"/",exact:!0,component:_(b,e.history,e.location)}),c.a.createElement(f.a,{path:"/plan",exact:!0,component:_(O,e.history,e.location)}),c.a.createElement(f.a,{path:"/nnpt",exact:!0,component:_(j,e.history,e.location)}),c.a.createElement(f.a,{path:"/ns1",exact:!0,component:_(E,e.history,e.location)}),c.a.createElement(f.a,{path:"/ns2",exact:!0,component:_(A,e.history,e.location)}),c.a.createElement(f.a,{path:"/nnvv",exact:!0,component:_(k,e.history,e.location)}),c.a.createElement(f.a,{path:"/oo",exact:!0,component:_(T,e.history,e.location)}),c.a.createElement(f.a,{path:"/or",exact:!0,component:_(x,e.history,e.location)}),c.a.createElement(f.a,{path:"/rr",exact:!0,component:_(R,e.history,e.location)}),c.a.createElement(f.a,{path:"/ro",exact:!0,component:_(L,e.history,e.location)}),c.a.createElement(f.a,{path:"/blog",exact:!0,component:_(q,e.history,e.location)}),c.a.createElement(f.a,{path:"/FAQ",exact:!0,component:_(m,e.history,e.location)}),c.a.createElement(f.a,{path:"/profile",exact:!0,component:_(P,e.history,e.location)}),c.a.createElement(f.a,{path:"/statistic",exact:!0,component:_(I,e.history,e.location)}))),c.a.createElement(i.Suspense,{fallback:null},c.a.createElement(S,null)),c.a.createElement(i.Suspense,{fallback:null},c.a.createElement(w,null)))}))},95:function(e,t,a){"use strict";a.r(t),a.d(t,"signin",function(){return u}),a.d(t,"checkAuthenticated",function(){return l}),a.d(t,"setReiting",function(){return p}),a.d(t,"logout",function(){return f}),a.d(t,"setStatus",function(){return h});var n=a(15),r=a.n(n),o=a(20),i=a(23),c=a(50),d=a(26),s=a.n(d);function u(e){return function(){var t=Object(o.a)(r.a.mark(function t(a){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("/users/signin?email="+e.email+"&password="+e.password);case 3:return n=t.sent,localStorage.userShoroAdmin=n.data,t.next=7,a({type:i.a});case 7:return t.next=9,a({type:c.b,payload:!1});case 9:window.location.reload(),t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,a({type:i.b,payload:!0});case 16:case"end":return t.stop()}},t,this,[[0,12]])}));return function(e){return t.apply(this,arguments)}}()}function l(){return function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{localStorage.userShoroAdmin?t({type:i.a}):t({type:i.e})}catch(a){t({type:i.e})}case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}function p(e){return{type:i.c,payload:e}}function f(){return function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userShoroAdmin"),t({type:i.e}),window.location.reload();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}function h(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/status",{},{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 3:return void 0===(a=e.sent).data&&(a.data={}),e.next=7,t({type:i.d,payload:a.data});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()}},98:function(e,t,a){"use strict";a.r(t),a.d(t,"setProfile",function(){return l}),a.d(t,"showDrawer",function(){return p}),a.d(t,"getElsom",function(){return f});var n=a(15),r=a.n(n),o=a(20),i=a(44),c=a(26),d=a.n(c),s=a(33),u=a.n(s);function l(e){return{type:i.a,payload:e}}function p(e){return{type:i.b,payload:e}}var f=function(){var e=Object(o.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new u.a).append("wallet",t.wallet),e.next=5,d.a.post("http://88.212.253.143:1000/payment/elsom/check",a);case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()}},[[162,28,23]]]);
//# sourceMappingURL=main.9036c3e3.chunk.js.map