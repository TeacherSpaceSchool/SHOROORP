(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"setProfile",function(){return l}),n.d(t,"showDrawer",function(){return p}),n.d(t,"getElsom",function(){return f});var a=n(7),r=n.n(a),o=n(12),c=n(48),i=n(31),s=n.n(i),u=n(39),d=n.n(u);function l(e){return{type:c.a,payload:e}}function p(e){return{type:c.b,payload:e}}var f=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(n=new d.a).append("wallet",t.wallet),e.next=5,s.a.post("http://88.212.253.143:1000/payment/elsom/check",n);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},13:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return c}),n.d(t,"h",function(){return i}),n.d(t,"i",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return d}),n.d(t,"e",function(){return l});var a="GET_DATA",r="GET_IDS",o="SET_SELECTED",c="SET_SELECTED_POINT",i="SET_SELECTED_REGION",s="SET_TYPE_STATISTIC",u="SET_OLD_FILE",d="SET_DELETED_ID",l="SET_POINT"},14:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var a=n(7),r=n.n(a),o=n(12),c=n(149),i=n(38),s=n(18),u=void 0,d=function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)("Shoro",6,{upgrade:function(e){Object(i.b)(e),Object(s.b)(e)}});case 2:u=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},166:function(e,t,n){e.exports=n(9)},171:function(e,t,n){},175:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return u});var a=n(7),r=n.n(a),o=n(12),c=n(14),i=function(e){try{e.deleteObjectStore("getSimple")}catch(t){console.log(t)}e.createObjectStore("getSimple",{keyPath:"id",autoIncrement:!0}).createIndex("name","name",{unique:!0})},s=function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===c.a){e.next=4;break}return e.next=3,c.a.getFromIndex("getSimple","name",t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===c.a){e.next=12;break}return e.next=3,c.a.getFromIndex("getSimple","name",t);case 3:if(void 0!==(a=e.sent)){e.next=9;break}return e.next=7,c.a.add("getSimple",{name:t,data:n});case 7:e.next=12;break;case 9:return a.data=n,e.next=12,c.a.put("getSimple",a);case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},25:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return i});var a="AUTHENTICATED",r="UNAUTHENTICATED",o="ERROR_AUTHENTICATED",c="SET_STATUS",i="SET_REITING"},26:function(e,t,n){"use strict";n.r(t),n.d(t,"showSnackBar",function(){return r}),n.d(t,"closeSnackBar",function(){return o});var a=n(49);function r(e){return{type:a.b,payload:{title:e}}}function o(){return{type:a.a}}},29:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s});var a=["\u044f\u043d\u0432\u0430\u0440\u044c","\u0444\u0435\u0432\u0440\u0430\u043b\u044c","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0435\u043b\u044c","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u043e\u043a\u0442\u044f\u0431\u0440\u044c","\u043d\u043e\u044f\u0431\u0440\u044c","\u0434\u0435\u043a\u0430\u0431\u0440\u044c"],r={"\u044f\u043d\u0432\u0430\u0440\u044c":31,"\u0444\u0435\u0432\u0440\u0430\u043b\u044c":28,"\u043c\u0430\u0440\u0442":31,"\u0430\u043f\u0440\u0435\u043b\u044c":30,"\u043c\u0430\u0439":31,"\u0438\u044e\u043d\u044c":30,"\u0438\u044e\u043b\u044c":31,"\u0430\u0432\u0433\u0443\u0441\u0442":31,"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c":30,"\u043e\u043a\u0442\u044f\u0431\u0440\u044c":31,"\u043d\u043e\u044f\u0431\u0440\u044c":30,"\u0434\u0435\u043a\u0430\u0431\u0440\u044c":31},o={"\u044f\u043d\u0432\u0430\u0440\u044c":"\u0434\u0435\u043a\u0430\u0431\u0440\u044c","\u0444\u0435\u0432\u0440\u0430\u043b\u044c":"\u044f\u043d\u0432\u0430\u0440\u044c","\u043c\u0430\u0440\u0442":"\u0444\u0435\u0432\u0440\u0430\u043b\u044c","\u0430\u043f\u0440\u0435\u043b\u044c":"\u043c\u0430\u0440\u0442","\u043c\u0430\u0439":"\u0430\u043f\u0440\u0435\u043b\u044c","\u0438\u044e\u043d\u044c":"\u043c\u0430\u0439","\u0438\u044e\u043b\u044c":"\u0438\u044e\u043d\u044c","\u0430\u0432\u0433\u0443\u0441\u0442":"\u0438\u044e\u043b\u044c","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c":"\u0430\u0432\u0433\u0443\u0441\u0442","\u043e\u043a\u0442\u044f\u0431\u0440\u044c":"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u043d\u043e\u044f\u0431\u0440\u044c":"\u043e\u043a\u0442\u044f\u0431\u0440\u044c","\u0434\u0435\u043a\u0430\u0431\u0440\u044c":"\u043d\u043e\u044f\u0431\u0440\u044c"},c=10,i=function(e){return(e=e.split(" "))[0]-=1,0===e[0]&&(e[0]=r[e[1]],e[1]=o[e[1]],"\u0434\u0435\u043a\u0430\u0431\u0440\u044c"===e[1]&&(e[2]-=1)),e[0]+" "+e[1]+" "+e[2]},s=function(e){return isNaN(parseInt(e))?0:parseInt(e)}},38:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return u});var a=n(7),r=n.n(a),o=n(12),c=n(14),i=function(e){try{e.deleteObjectStore("status")}catch(t){console.log(t)}e.createObjectStore("status",{keyPath:"id",autoIncrement:!0})},s=function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===c.a){e.next=4;break}return e.next=3,c.a.get("status",t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===c.a){e.next=12;break}return e.next=3,c.a.get("status",t);case 3:if(void 0!==(a=e.sent)){e.next=9;break}return e.next=7,c.a.add("status",{data:n});case 7:e.next=12;break;case 9:return a.data=n,e.next=12,c.a.put("status",a);case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},48:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a="SHOW_DRAWER",r="SET_PROFILE"},49:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a="CLOSE_SNACKBAR",r="SHOW_SNACKBAR"},54:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a="SET_MINI_DIALOG",r="SHOW_MINI_DIALOG"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"setData",function(){return g}),n.d(t,"addData",function(){return v}),n.d(t,"setSelected",function(){return y}),n.d(t,"setTypeStatistic",function(){return m}),n.d(t,"setPoint",function(){return S}),n.d(t,"setSelectedPoint",function(){return O}),n.d(t,"setSelectedRegion",function(){return x}),n.d(t,"setDeletedId",function(){return w}),n.d(t,"setOldFile",function(){return j}),n.d(t,"getData",function(){return k}),n.d(t,"getDataSimple",function(){return E}),n.d(t,"deleteData",function(){return A});var a=n(7),r=n.n(a),o=n(12),c=n(13),i=n(26),s=n(29),u=n(31),d=n.n(u),l=n(39),p=n.n(l),f=n(9),h=n(18);function b(e,t){var n=[];if("\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440"==e)for(var a=0;a<t.length;a++)n[a]=[t[a][0],t[a][1],t[a][2]];else if("\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==e)for(var r=0;r<t.length;r++)n[r]=[t[r][0],t[r][1]];else if("\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==e)for(var o=0;o<t.length;o++)n[o]=[t[o][0],t[o][1]];else if(["\u041e\u0442\u0447\u0435\u0442 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u0430","\u041e\u0442\u0447\u0435\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u0430","\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u043d\u0430 \u0432\u0435\u0447\u0435\u0440\u043d\u0438\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0442","\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u043d\u0430 \u043f\u0443\u0441\u0442\u0443\u044e \u0442\u0430\u0440\u0443","\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0441\u043a\u043b\u0430\u0434 \u21161","\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0441\u043a\u043b\u0430\u0434 \u21162"].includes(e.replace(" \u0441\u0435\u0433\u043e\u0434\u043d\u044f","")))for(var c=0;c<t.length;c++)n[c]=[t[c][0],t[c][1]];else if("\u0411\u043b\u043e\u0433"==e)for(var i=0;i<t.length;i++){var s=t[i][2].substring(0,200)+"...";n[i]=[t[i][0],t[i][1],s,t[i][3]]}else n=JSON.parse(JSON.stringify(t));return n}function g(e){var t=e.name+e.search+e.sort+JSON.stringify(e.page*s.d);return void 0!==e.region?t+=e.region:void 0!==f.store.getState().table.region&&(t+=f.store.getState().table.region),void 0!==e.point?t+=e.point:void 0!==f.store.getState().table.point&&(t+=f.store.getState().table.point),navigator.onLine?function(){var n=Object(o.a)(r.a.mark(function n(a){var o,i,u,l,g,v,y,m,S,O;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,(o=new p.a).append("id",e.id),o.append("search",e.search),o.append("sort",e.sort),o.append("skip",JSON.stringify(e.page*s.d)),o.append("name",e.name),o.append("new",JSON.stringify(e.data)),void 0!==f.store.getState().table.region&&o.append("region",f.store.getState().table.region),void 0!==f.store.getState().table.point&&o.append("point",f.store.getState().table.point),console.log(f.store.getState().table.region),void 0!=e.oldFile&&o.append("oldFile",e.oldFile),void 0!=e.oldFileWhatermark&&o.append("oldFileWhatermark",e.oldFileWhatermark),void 0!=e.file){for(o.append("fileLength",e.file.length),u=0;u<e.file.length;u++)o.append("file"+u,e.file[u]),o.append("fileName"+u,e.file[u].name);i={accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data; boundary=".concat(o._boundary),"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}}else i={accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin};return n.next=16,d.a.post("/data/add",o,{headers:i});case 16:if(void 0===(l=n.sent)||void 0===l.data){n.next=29;break}for(g=[],v=0;v<l.data.row.length;v++)g.push({name:l.data.row[v],options:{filter:!0,sort:!0}});return n.next=22,b(e.name,l.data.data);case 22:for(y=n.sent,g.unshift("\u2116"),m=0;m<l.data.data.length;m++)y[m].unshift((e.page*s.d+m+1).toString());e={count:l.data.count,page:e.page,data:l.data.data,data1:y,row:g,search:e.search,name:e.name,sort:e.sort},Object(h.c)(t,e),n.next=33;break;case 29:return n.next=31,Object(h.a)(t);case 31:void 0!==(S=n.sent)&&(e=S.data);case 33:a({type:c.a,payload:e}),n.next=43;break;case 36:return n.prev=36,n.t0=n.catch(0),console.error(n.t0),n.next=41,Object(h.a)(t);case 41:void 0!==(O=n.sent)&&a({type:c.a,payload:O.data});case 43:case"end":return n.stop()}},n,this,[[0,36]])}));return function(e){return n.apply(this,arguments)}}():(f.store.dispatch(Object(i.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")),function(){var e=Object(o.a)(r.a.mark(function e(n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)(t);case 2:void 0!==(a=e.sent)&&n({type:c.a,payload:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}function v(e){var t=e.name+e.search+e.sort+JSON.stringify(e.page*s.d);return void 0!==e.region?t+=e.region:void 0!==f.store.getState().table.region&&(t+=f.store.getState().table.region),void 0!==e.point?t+=e.point:void 0!==f.store.getState().table.point&&(t+=f.store.getState().table.point),navigator.onLine?function(){var n=Object(o.a)(r.a.mark(function n(a){var o,u,l,g,v,y,m,S,O,x;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,(o=new p.a).append("search",e.search),o.append("sort",e.sort),o.append("skip",JSON.stringify(e.page*s.d)),o.append("name",e.name),o.append("new",JSON.stringify(e.data)),void 0!==f.store.getState().table.region&&o.append("region",f.store.getState().table.region),void 0!==f.store.getState().table.point&&o.append("point",f.store.getState().table.point),void 0!=e.file){for(o.append("fileLength",e.file.length),l=0;l<e.file.length;l++)o.append("file"+l,e.file[l]),o.append("fileName"+l,e.file[l].name);u={accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data; boundary=".concat(o._boundary),"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}}else u={accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin};return n.next=12,d.a.post("/data/add",o,{headers:u});case 12:if(void 0===(g=n.sent)||void 0===g.data){n.next=25;break}for(v=[],y=0;y<g.data.row.length;y++)v.push({name:g.data.row[y],options:{filter:!0,sort:!0}});return n.next=18,b(e.name,g.data.data);case 18:for(m=n.sent,v.unshift("\u2116"),S=0;S<g.data.data.length;S++)m[S].unshift((e.page*s.d+S+1).toString());e={count:g.data.count,page:e.page,data:g.data.data,data1:m,row:v,search:e.search,name:e.name,sort:e.sort},Object(h.c)(t,e),n.next=30;break;case 25:return f.store.dispatch(Object(i.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")),n.next=28,Object(h.a)(t);case 28:void 0!==(O=n.sent)&&(e=O.data);case 30:a({type:c.a,payload:e}),n.next=41;break;case 33:return n.prev=33,n.t0=n.catch(0),f.store.dispatch(Object(i.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")),console.error(n.t0),n.next=39,Object(h.a)(t);case 39:void 0!==(x=n.sent)&&a({type:c.a,payload:x.data});case 41:case"end":return n.stop()}},n,this,[[0,33]])}));return function(e){return n.apply(this,arguments)}}():(f.store.dispatch(Object(i.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")),function(){var e=Object(o.a)(r.a.mark(function e(n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)(t);case 2:void 0!==(a=e.sent)&&n({type:c.a,payload:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}function y(e){return{type:c.f,payload:e}}function m(e){return{type:c.i,payload:e}}function S(e){return{type:c.e,payload:e}}function O(e){return{type:c.g,payload:e}}function x(e){return{type:c.h,payload:e}}function w(e){return{type:c.c,payload:e}}function j(e){return{type:c.d,payload:e}}function k(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a,o,u,l,g,v,y,m,S,O;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.name+e.search+e.sort+JSON.stringify(e.page*s.d),(o=new p.a).append("search",e.search),o.append("sort",e.sort),o.append("skip",JSON.stringify(e.page*s.d)),o.append("name",e.name),void 0!==e.region?(o.append("region",e.region),a+=e.region):void 0!==f.store.getState().table.region&&(o.append("region",f.store.getState().table.region),a+=f.store.getState().table.region),void 0!==e.point?(o.append("point",e.point),a+=e.point):void 0!==f.store.getState().table.point&&(o.append("point",f.store.getState().table.point),a+=f.store.getState().table.point),t.prev=8,""!==e.name){t.next=14;break}e={count:0,page:0,data:[],data1:[],row:[],search:e.search,name:e.name,sort:e.sort},n({type:c.a,payload:e}),t.next=48;break;case 14:if(!navigator.onLine){t.next=42;break}return t.next=17,d.a.post("/data/get",o,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 17:if(void 0===(u=t.sent)||void 0===u.data){t.next=30;break}for(l=[],g=0;g<u.data.row.length;g++)l.push({name:u.data.row[g],options:{filter:!0,sort:!0}});return t.next=23,b(e.name,u.data.data);case 23:for(v=t.sent,l.unshift("\u2116"),y=0;y<u.data.data.length;y++)v[y].unshift((e.page*s.d+y+1).toString());e={count:u.data.count,page:e.page,data:u.data.data,data1:v,row:l,search:e.search,name:e.name,region:e.region,point:e.point,sort:e.sort},Object(h.c)(a,e),t.next=40;break;case 30:return t.next=32,Object(h.a)(a);case 32:if(t.t0=t.sent,t.t1=void 0,t.t0===t.t1){t.next=40;break}return f.store.dispatch(Object(i.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")),t.next=38,Object(h.a)(a);case 38:void 0!==(m=t.sent)&&(e=m.data);case 40:t.next=47;break;case 42:return f.store.dispatch(Object(i.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")),t.next=45,Object(h.a)(a);case 45:void 0!==(S=t.sent)&&(e=S.data);case 47:void 0!==e&&n({type:c.a,payload:e});case 48:t.next=56;break;case 50:return t.prev=50,t.t2=t.catch(8),t.next=54,Object(h.a)(a);case 54:void 0!==(O=t.sent)&&n({type:c.a,payload:O.data});case 56:case"end":return t.stop()}},t,this,[[8,50]])}));return function(e){return t.apply(this,arguments)}}()}d.a.interceptors.response.use(function(e){return e},function(e){return e.response.data.includes("to be unique")?f.store.dispatch(Object(i.showSnackBar)("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u0441\u044f")):e.response.data.includes("Could not proxy request")?f.store.dispatch(Object(i.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")):e.response.data.includes("No such user")?f.store.dispatch(Object(i.showSnackBar)("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")):e.response.data.includes("Login failed")?f.store.dispatch(Object(i.showSnackBar)("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")):(console.log(e.response.data),f.store.dispatch(Object(i.showSnackBar)(e.response.data))),e});var E=function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a,o,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n={data:void 0},a=t.name,(o=new p.a).append("name",t.name),void 0!==t.data&&(o.append("data",JSON.stringify(t.data)),a+=JSON.stringify(t.data)),e.prev=5,!navigator.onLine){e.next=24;break}return e.next=9,d.a.post("/data/get",o,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 9:if(n=e.sent,e.t0=void 0===n||void 0===n.data,!e.t0){e.next=17;break}return e.next=14,Object(h.a)(a);case 14:e.t1=e.sent,e.t2=void 0,e.t0=e.t1!==e.t2;case 17:if(!e.t0){e.next=21;break}return e.next=20,Object(h.a)(a);case 20:n=e.sent;case 21:Object(h.c)(a,n.data),e.next=28;break;case 24:return f.store.dispatch(Object(i.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")),e.next=27,Object(h.a)(a);case 27:n=e.sent;case 28:if(void 0===n){e.next=30;break}return e.abrupt("return",n.data);case 30:e.next=39;break;case 32:return e.prev=32,e.t3=e.catch(5),e.next=36,Object(h.a)(a);case 36:if(void 0===(c=e.sent)){e.next=39;break}return e.abrupt("return",c.data);case 39:case"end":return e.stop()}},e,this,[[5,32]])}));return function(t){return e.apply(this,arguments)}}();function A(e){var t=e.name+e.search+e.sort+JSON.stringify(e.page*s.d);return void 0!==e.region?t+=e.region:void 0!==f.store.getState().table.region&&(t+=f.store.getState().table.region),void 0!==e.point?t+=e.point:void 0!==f.store.getState().table.point&&(t+=f.store.getState().table.point),navigator.onLine?function(){var n=Object(o.a)(r.a.mark(function n(a){var o,u,l,g,v,y,m,S;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(o=new p.a).append("search",e.search),o.append("sort",e.sort),o.append("skip",JSON.stringify(e.page*s.d)),o.append("name",e.name),o.append("deleted",e.deleted),void 0!==f.store.getState().table.region&&o.append("region",f.store.getState().table.region),void 0!==f.store.getState().table.point&&o.append("point",f.store.getState().table.point),void 0!=e.oldFile&&e.oldFile.length>0&&o.append("oldFile",e.oldFile),n.next=12,d.a.post("/data/delete",o,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 12:if(void 0===(u=n.sent)||void 0===u.data){n.next=25;break}for(l=[],g=0;g<u.data.row.length;g++)l.push({name:u.data.row[g],options:{filter:!0,sort:!0}});return n.next=18,b(e.name,u.data.data);case 18:for(v=n.sent,l.unshift("\u2116"),y=0;y<u.data.data.length;y++)v[y].unshift((e.page*s.d+y+1).toString());e={count:u.data.count,page:e.page,data:u.data.data,data1:v,row:l,search:e.search,name:e.name,sort:e.sort},Object(h.c)(t,e),n.next=30;break;case 25:return f.store.dispatch(Object(i.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")),n.next=28,Object(h.a)(t);case 28:void 0!==(m=n.sent)&&(e=m.data);case 30:void 0!==e&&a({type:c.a,payload:e}),n.next=39;break;case 33:return n.prev=33,n.t0=n.catch(0),n.next=37,Object(h.a)(t);case 37:void 0!==(S=n.sent)&&a({type:c.a,payload:S.data});case 39:case"end":return n.stop()}},n,this,[[0,33]])}));return function(e){return n.apply(this,arguments)}}():(f.store.dispatch(Object(i.showSnackBar)("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c")),function(){var e=Object(o.a)(r.a.mark(function e(n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)(t);case 2:void 0!==(a=e.sent)&&n({type:c.a,payload:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}},9:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),i=(n(171),n(93)),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var d=n(55),l=n(33),p=n(17),f=n(25),h={authenticated:!1,error:!1,status:{},reiting:{}};var b=n(54),g={title:"",child:null,show:!1};var v=n(48),y={drawer:!1,profile:{}};var m=n(13),S={count:0,page:0,data:[],data1:[],row:[],search:"",name:"",sort:"",selected:-1,ids:{},point1:{},deletedId:"",oldFile:"",region:"region",point:"point",typeStatistic:{what:"",name:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"}};var O=n(49),x={title:"",show:!1};var w=Object(l.c)({mini_dialog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.b:return Object(p.a)({},e,{show:t.payload});case b.a:return Object(p.a)({},e,{title:t.payload.title,child:t.payload.child});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.a:return Object(p.a)({},e,{authenticated:!0,error:!1});case f.e:return Object(p.a)({},e,{authenticated:!1,error:!1});case f.b:return Object(p.a)({},e,{error:t.payload});case f.d:return Object(p.a)({},e,{status:t.payload});case f.c:return Object(p.a)({},e,{reiting:t.payload});default:return e}},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.b:return Object(p.a)({},e,{ids:t.payload});case m.f:return Object(p.a)({},e,{selected:t.payload});case m.a:var n=Object(p.a)({},e,{count:t.payload.count,page:t.payload.page,data:t.payload.data,data1:t.payload.data1,row:t.payload.row,search:t.payload.search,name:t.payload.name,sort:t.payload.sort});return void 0!==t.payload.region&&(n.region=t.payload.region),void 0!==t.payload.point&&(n.point=t.payload.point),n;case m.e:return Object(p.a)({},e,{point1:t.payload});case m.d:return Object(p.a)({},e,{oldFile:t.payload});case m.c:return Object(p.a)({},e,{deletedId:t.payload});case m.i:return Object(p.a)({},e,{typeStatistic:t.payload});case m.g:return Object(p.a)({},e,{point:t.payload});case m.h:return Object(p.a)({},e,{region:t.payload});default:return e}},snackbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a:return Object(p.a)({},e,{show:!1});case O.b:return Object(p.a)({},e,{title:t.payload.title,show:!0});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.b:return Object(p.a)({},e,{drawer:t.payload});case v.a:return Object(p.a)({},e,{profile:t.payload});default:return e}}}),j=n(143);var k=n(586),E=n(95),A=n(6),T=n(148),L=n(147),N=n.n(L),P=n(14);n.d(t,"store",function(){return B}),Object(P.b)();var R,I=Object(A.createMuiTheme)({overrides:{MuiPickersToolbar:{toolbar:{backgroundColor:"#202124"}},MuiPickersCalendarHeader:{switchHeader:{}},MuiPickersDay:{day:{color:"#202124"},isSelected:{backgroundColor:"#202124"},current:{color:"#202124"}},MuiPickersModal:{dialogAction:{color:"#202124"}}}}),B=Object(l.d)(w,R,Object(l.a)(j.a));c.a.hydrate(r.a.createElement(A.MuiThemeProvider,{theme:I},r.a.createElement(E.b,{utils:T.a,locale:N.a},r.a.createElement(k.a,null,r.a.createElement(d.a,{store:B},r.a.createElement(i.a,null))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");s?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):u(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):u(t,e)})}else console.log("service worker dont work")}()},93:function(e,t,n){"use strict";n.d(t,"b",function(){return B});var a=n(7),r=n.n(a),o=n(12),c=n(0),i=n.n(c),s=(n(175),n(55)),u=n(33),d=n(98),l=n(101),p=n(369),f=n(28),h=n(370),b=n(72),g=Object(c.lazy)(function(){return Promise.all([n.e(2),n.e(0),n.e(4)]).then(n.bind(null,371))}),v=Object(c.lazy)(function(){return n.e(5).then(n.bind(null,372))}),y=Object(c.lazy)(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,388))}),m=Object(c.lazy)(function(){return Promise.all([n.e(25),n.e(7)]).then(n.bind(null,373))}),S=Object(c.lazy)(function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,374))}),O=Object(c.lazy)(function(){return Promise.all([n.e(27),n.e(9)]).then(n.bind(null,375))}),x=Object(c.lazy)(function(){return Promise.all([n.e(1),n.e(10)]).then(n.bind(null,376))}),w=Object(c.lazy)(function(){return Promise.all([n.e(1),n.e(11)]).then(n.bind(null,377))}),j=Object(c.lazy)(function(){return Promise.all([n.e(1),n.e(12)]).then(n.bind(null,378))}),k=Object(c.lazy)(function(){return Promise.all([n.e(1),n.e(13)]).then(n.bind(null,379))}),E=Object(c.lazy)(function(){return Promise.all([n.e(1),n.e(14)]).then(n.bind(null,380))}),A=Object(c.lazy)(function(){return Promise.all([n.e(1),n.e(15)]).then(n.bind(null,381))}),T=Object(c.lazy)(function(){return Promise.all([n.e(1),n.e(26),n.e(16)]).then(n.bind(null,382))}),L=Object(c.lazy)(function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,383))}),N=Object(c.lazy)(function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,384))}),P=Object(c.lazy)(function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,385))}),R=Object(c.lazy)(function(){return Promise.all([n.e(2),n.e(0),n.e(20)]).then(n.bind(null,386))}),I=Object(c.lazy)(function(){return Promise.all([n.e(1),n.e(0),n.e(21)]).then(n.bind(null,387))}),B=i.a.createRef();function _(e,t,n){return function(a){return i.a.createElement(c.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(e,Object.assign({},a,{history:t,location:n})))}}t.a=Object(h.a)(Object(s.b)(function(e){return{user:e.user}},function(e){return{userActions:Object(u.b)(d,e),appActions:Object(u.b)(l,e)}})(function(e){var t=e.userActions,n=t.checkAuthenticated,a=t.setStatus,s=t.setReiting,u=e.appActions.setProfile,d=e.user.authenticated;return Object(c.useEffect)(Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!d){e.next=13;break}return e.next=5,a();case 5:return e.next=7,Object(b.getDataSimple)({name:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"});case 7:return void 0!==(t=e.sent)&&u(t),e.next=11,Object(b.getDataSimple)({name:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0441\u0432\u043e\u0439"});case 11:void 0!==(t=e.sent)&&s(t);case 13:case"end":return e.stop()}},e,this)})),[]),i.a.createElement("div",{ref:B,className:"App"},i.a.createElement(c.Suspense,{fallback:null},i.a.createElement(y,{history:e.history,location:e.location})),i.a.createElement(c.Suspense,{fallback:null},i.a.createElement(m,{history:e.history})),i.a.createElement("div",{className:"App-body"},i.a.createElement(p.a,null,i.a.createElement(f.a,{path:"/",exact:!0,component:_(v,e.history,e.location)}),i.a.createElement(f.a,{path:"/plan",exact:!0,component:_(x,e.history,e.location)}),i.a.createElement(f.a,{path:"/nnpt",exact:!0,component:_(w,e.history,e.location)}),i.a.createElement(f.a,{path:"/ns1",exact:!0,component:_(j,e.history,e.location)}),i.a.createElement(f.a,{path:"/ns2",exact:!0,component:_(k,e.history,e.location)}),i.a.createElement(f.a,{path:"/nnvv",exact:!0,component:_(E,e.history,e.location)}),i.a.createElement(f.a,{path:"/oo",exact:!0,component:_(T,e.history,e.location)}),i.a.createElement(f.a,{path:"/or",exact:!0,component:_(A,e.history,e.location)}),i.a.createElement(f.a,{path:"/rr",exact:!0,component:_(L,e.history,e.location)}),i.a.createElement(f.a,{path:"/ro",exact:!0,component:_(N,e.history,e.location)}),i.a.createElement(f.a,{path:"/blog",exact:!0,component:_(R,e.history,e.location)}),i.a.createElement(f.a,{path:"/FAQ",exact:!0,component:_(g,e.history,e.location)}),i.a.createElement(f.a,{path:"/profile",exact:!0,component:_(P,e.history,e.location)}),i.a.createElement(f.a,{path:"/statistic",exact:!0,component:_(I,e.history,e.location)}))),i.a.createElement(c.Suspense,{fallback:null},i.a.createElement(S,null)),i.a.createElement(c.Suspense,{fallback:null},i.a.createElement(O,null)))}))},98:function(e,t,n){"use strict";n.r(t),n.d(t,"signin",function(){return l}),n.d(t,"checkAuthenticated",function(){return p}),n.d(t,"setReiting",function(){return f}),n.d(t,"logout",function(){return h}),n.d(t,"setStatus",function(){return b});var a=n(7),r=n.n(a),o=n(12),c=n(25),i=n(54),s=n(31),u=n.n(s),d=n(38);function l(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/signin?email="+e.email+"&password="+e.password);case 3:if(void 0===(a=t.sent).data){t.next=11;break}return localStorage.userShoroAdmin=a.data,t.next=8,n({type:c.a});case 8:return t.next=10,n({type:i.b,payload:!1});case 10:window.location.reload();case 11:t.next=18;break;case 13:return t.prev=13,t.t0=t.catch(0),console.log(t.t0),t.next=18,n({type:c.b,payload:!0});case 18:case"end":return t.stop()}},t,this,[[0,13]])}));return function(e){return t.apply(this,arguments)}}()}function p(){return function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{localStorage.userShoroAdmin?t({type:c.a}):t({type:c.e})}catch(n){t({type:c.e})}case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}function f(e){return{type:c.c,payload:e}}function h(){return function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userShoroAdmin"),t({type:c.e}),window.location.reload();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}function b(){return function(){var e=Object(o.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n={data:void 0},!navigator.onLine){e.next=21;break}return e.next=5,u.a.post("/users/status",{},{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 5:if(n=e.sent,e.t0=void 0===n||void 0===n.data,!e.t0){e.next=13;break}return e.next=10,Object(d.a)(1);case 10:e.t1=e.sent,e.t2=void 0,e.t0=e.t1!==e.t2;case 13:if(!e.t0){e.next=17;break}return e.next=16,Object(d.a)(1);case 16:n=e.sent;case 17:return e.next=19,Object(d.c)(1,n.data);case 19:e.next=24;break;case 21:return e.next=23,Object(d.a)(1);case 23:n=e.sent;case 24:if(void 0===n.data){e.next=27;break}return e.next=27,t({type:c.d,payload:n.data});case 27:e.next=38;break;case 29:return e.prev=29,e.t3=e.catch(0),e.next=33,Object(d.a)(1);case 33:if(void 0===(a=e.sent)){e.next=38;break}return a=a.data,e.next=38,t({type:c.d,payload:a});case 38:case"end":return e.stop()}},e,this,[[0,29]])}));return function(t){return e.apply(this,arguments)}}()}}},[[166,28,23]]]);
//# sourceMappingURL=main.807bca92.chunk.js.map