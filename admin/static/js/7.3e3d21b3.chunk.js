(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{364:function(e,a,t){"use strict";t.r(a);var n=t(375),r=t(21),i=t.n(r),o=t(30),c=t(0),l=t.n(c),s=t(2),d=t.n(s),p=t(14),u=t(44),m=t(25),g=t(373),f=t(84),h=t.n(f),b=t(33),v=t.n(b),y=t(486),w=t(83),S=t(130),x=t(374),k=t(398),E=t.n(k),A=t(399),O=t.n(A),j=t(401),R=t.n(j),q=t(27),N=t.n(q),L=t(400),W=t.n(L),X=w.b.current.offsetWidth>800?500:240,F=w.b.current.offsetWidth>800?240:120,J=l.a.memo(function(e){Object(c.useEffect)(Object(o.a)(i.a.mark(function a(){var t,n,r,o,c,l,s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("active"===f.status&&["admin"].includes(f.role)||e.history.push("/"),-1!==p){a.next=20;break}return t=[],a.next=5,g.getDataSimple({name:"\u0420\u0435\u0433\u0438\u043e\u043d\u0418\u043c\u044f"});case 5:n=a.sent,r=0;case 7:if(!(r<n.length)){a.next=17;break}return o=[],a.next=11,g.getDataSimple({name:"\u0422\u043e\u0447\u043a\u0430\u041f\u043e\u0420\u0435\u0433\u0438\u043e\u043d\u0443",data:{region:n[r]}});case 11:for(c=a.sent,l=0;l<c.length;l++)o[l]={name:c[l],plan:0,current:0};t[r]={name:n[r],plan:0,current:0,points:o};case 14:r++,a.next=7;break;case 17:_(t),a.next=28;break;case 20:return a.next=22,g.getDataSimple({name:"\u041f\u043b\u0430\u043d\u041f\u043e\u0414\u0430\u0442\u0435",data:{date:u[p][0]}});case 22:s=a.sent,_(JSON.parse(s.regions)),A(s.date),T(s.norma),M(s.current),X(s._id);case 28:case"end":return a.stop()}},a,this)})),[]);var a=e.tableActions,t=a.setSelected,r=a.addData,s=a.setData,d=e.table,p=d.selected,u=d.data,m=e.classes,f=e.user.status,b=Object(c.useState)("2019-01-01"),w=Object(n.a)(b,2),k=w[0],A=w[1],j=Object(c.useState)("2019-01-01"),q=Object(n.a)(j,2),L=q[0],X=q[1],F=Object(c.useState)(0),J=Object(n.a)(F,2),H=J[0],M=J[1],z=Object(c.useState)(0),B=Object(n.a)(z,2),D=B[0],T=B[1],U=Object(c.useState)([]),C=Object(n.a)(U,2),I=C[0],_=C[1];return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),-1===p?l.a.createElement(l.a.Fragment,null,l.a.createElement(S.a,{views:["year","month"],label:"\u0414\u0430\u0442\u0430",className:m.textField,value:k,onChange:A}),l.a.createElement("br",null)):l.a.createElement("div",{class:m.message},l.a.createElement("h3",null,k)),l.a.createElement("div",{className:m.message},l.a.createElement("div",{style:{display:"inline-block",marginRight:"10px",verticalAlign:"middle"}},"\u0426\u0435\u043b\u044c: ",l.a.createElement("div",{style:{display:"inline-block",fontWeight:"bold"}},D)),l.a.createElement("div",{style:{display:"inline-block",marginRight:"10px",verticalAlign:"middle"}},"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441: ",l.a.createElement("div",{style:{display:"inline-block",fontWeight:"bold"}},H))),l.a.createElement("br",null),void 0!=I&&I.length>0?I.map(function(e,a){return l.a.createElement(E.a,null,l.a.createElement(O.a,{expandIcon:l.a.createElement(W.a,null)},l.a.createElement(N.a,{className:m.heading},e.name),l.a.createElement(N.a,{className:m.secondaryHeading},"\u0426\u0435\u043b\u044c: ",l.a.createElement("b",{style:{color:"black"}},e.plan),"\xa0\xa0 \u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441: ",l.a.createElement("b",{style:{color:"black"}},e.current))),void 0!=e.points&&e.points.length>0?e.points.map(function(e,t){return l.a.createElement(R.a,null,l.a.createElement("center",{style:{width:"100%"}},l.a.createElement("b",null,e.name),l.a.createElement("br",null),l.a.createElement("div",{style:{width:"40px",marginRight:"10px",display:"inline-block",verticalAlign:"middle"}},"\u0426\u0435\u043b\u044c:"),l.a.createElement(h.a,{style:{marginTop:"12px",marginRight:"10px",width:"70px",display:"inline-block",verticalAlign:"middle"},type:"login",margin:"normal",value:e.plan,onChange:function(e){!function(e,a,t){var n=parseInt(e.target.value);I[a].points[t].plan=isNaN(n)?0:n,I[a].plan=0;for(var r=0;r<I[a].points.length;r++)I[a].plan+=I[a].points[r].plan;n=0;for(var i=0;i<I.length;i++)n+=I[i].plan;_(I),T(n)}(e,a,t)}}),l.a.createElement("div",{style:{display:"inline-block",marginRight:"10px",verticalAlign:"middle"}},"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441: ",l.a.createElement("div",{style:{display:"inline-block",fontWeight:"bold"}},e.current))))}):null)}):null,l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(y.a,{className:"link",to:""},l.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){-1===p?(k=k.split("-"),r({search:"",sort:"",page:0,name:"\u041f\u043b\u0430\u043d",data:{norma:D,regions:JSON.stringify(I),date:x.a[parseInt(k[1])-1]+" "+k[0]}})):s({id:L,search:"",sort:"",page:0,name:"\u041f\u043b\u0430\u043d",data:{norma:D,regions:JSON.stringify(I)}}),t(-1)},className:m.button},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),l.a.createElement(y.a,{className:"link",to:"",onClick:function(){t(-1)}},l.a.createElement(v.a,{variant:"contained",color:"secondary",className:m.button},"\u041e\u0442\u043c\u0435\u043d\u0430"))))});Event.propTypes={classes:d.a.object.isRequired},a.default=Object(p.withStyles)(function(e){return{button:{margin:e.spacing.unit},textFieldSmall:{display:"inline-block",marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:F},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:X},urls:{margin:e.spacing.unit,width:X,maxHeight:100,overflow:"auto"},message:{width:X,marginTop:e.spacing.unit,marginBottom:e.spacing.unit,marginLeft:"calc((100% - "+X+"px)/2)",marginRight:"calc((100% - "+X+"px)/2)"},MuiPickersToolbar:{toolbar:{backgroundColor:"#000"}},MuiPickersModal:{dialogAction:{color:"#000"}},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}})(Object(u.b)(function(e){return{user:e.user,table:e.table}},function(e){return{tableActions:Object(m.b)(g,e)}})(J))},373:function(e,a,t){"use strict";t.r(a),t.d(a,"setData",function(){return p}),t.d(a,"addData",function(){return u}),t.d(a,"setSelected",function(){return m}),t.d(a,"getIds",function(){return g}),t.d(a,"getData",function(){return f}),t.d(a,"getDataSimple",function(){return h}),t.d(a,"deleteData",function(){return b});var n=t(21),r=t.n(n),i=t(30),o=t(47),c=t(63),l=t.n(c),s=t(378),d=t.n(s);t(374);function p(e){return function(){var a=Object(i.a)(r.a.mark(function a(t){var n,i,c,s,p,u,m,g,f,h;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,(n=new d.a).append("id",e.id),n.append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(10*e.page)),n.append("name",e.name),n.append("new",JSON.stringify(e.data)),void 0!=e.oldFile&&n.append("oldFile",e.oldFile),void 0!=e.oldFileWhatermark&&n.append("oldFileWhatermark",e.oldFileWhatermark),void 0!=e.file){for(n.append("fileLength",e.file.length),c=0;c<e.file.length;c++)n.append("file"+c,e.file[c]),n.append("fileName"+c,e.file[c].name);i={accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data; boundary=".concat(n._boundary),"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}}else i={accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin};return a.next=13,l.a.post("/data/add",n,{headers:i});case 13:for(s=a.sent,p=[],u=0;u<s.data.row.length;u++)p.push({name:s.data.row[u],options:{filter:!0,sort:!0}});if(m=[],"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(g=0;g<s.data.data.length;g++)m[g]=[s.data.data[g][0],s.data.data[g][1],s.data.data[g][2]];else if("\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(f=0;f<s.data.data.length;f++)m[f]=[s.data.data[f][0],s.data.data[f][1]];else if("\u0417\u0430\u0432\u0441\u043a\u043b\u0430\u0434\u0430"==e.name)for(h=0;h<s.data.data.length;h++)m[h]=[s.data.data[h][0]];else m=s.data.data;e={count:s.data.count,page:e.page,data:s.data.data,data1:m,row:p,search:e.search,name:e.name,sort:e.sort},t({type:o.a,payload:e}),a.next=25;break;case 22:a.prev=22,a.t0=a.catch(0),console.error(a.t0);case 25:case"end":return a.stop()}},a,this,[[0,22]])}));return function(e){return a.apply(this,arguments)}}()}function u(e){return function(){var a=Object(i.a)(r.a.mark(function a(t){var n,i,c,s,p,u,m,g,f,h;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,(n=new d.a).append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(10*e.page)),n.append("name",e.name),n.append("new",JSON.stringify(e.data)),void 0!=e.file){for(n.append("fileLength",e.file.length),c=0;c<e.file.length;c++)n.append("file"+c,e.file[c]),n.append("fileName"+c,e.file[c].name);i={accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data; boundary=".concat(n._boundary),"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}}else i={accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin};return a.next=10,l.a.post("/data/add",n,{headers:i});case 10:for(s=a.sent,p=[],u=0;u<s.data.row.length;u++)p.push({name:s.data.row[u],options:{filter:!0,sort:!0}});if(m=[],"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(g=0;g<s.data.data.length;g++)m[g]=[s.data.data[g][0],s.data.data[g][1],s.data.data[g][2]];else if("\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(f=0;f<s.data.data.length;f++)m[f]=[s.data.data[f][0],s.data.data[f][1]];else if("\u0417\u0430\u0432\u0441\u043a\u043b\u0430\u0434\u0430"==e.name)for(h=0;h<s.data.data.length;h++)m[h]=[s.data.data[h][0]];else m=s.data.data;e={count:s.data.count,page:e.page,data:s.data.data,data1:m,row:p,search:e.search,name:e.name,sort:e.sort},t({type:o.a,payload:e}),a.next=22;break;case 19:a.prev=19,a.t0=a.catch(0),console.error(a.t0);case 22:case"end":return a.stop()}},a,this,[[0,19]])}));return function(e){return a.apply(this,arguments)}}()}function m(e){return{type:o.c,payload:e}}function g(e){return function(){var a=Object(i.a)(r.a.mark(function a(t){var n,i;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(n=new d.a).append("name",e),a.next=5,l.a.post("/data/getIds",n,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 5:i=a.sent,t({type:o.b,payload:i.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error(a.t0);case 12:case"end":return a.stop()}},a,this,[[0,9]])}));return function(e){return a.apply(this,arguments)}}()}function f(e){return function(){var a=Object(i.a)(r.a.mark(function a(t){var n,i,c,s,p,u,m,g;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(n=new d.a).append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(10*e.page)),n.append("name",e.name),a.next=8,l.a.post("/data/get",n,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 8:for(i=a.sent,c=[],s=0;s<i.data.row.length;s++)c.push({name:i.data.row[s],options:{filter:!0,sort:!0}});if(p=[],"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(u=0;u<i.data.data.length;u++)p[u]=[i.data.data[u][0],i.data.data[u][1],i.data.data[u][2]];else if("\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(m=0;m<i.data.data.length;m++)p[m]=[i.data.data[m][0],i.data.data[m][1]];else if("\u0417\u0430\u0432\u0441\u043a\u043b\u0430\u0434\u0430"==e.name)for(g=0;g<i.data.data.length;g++)p[g]=[i.data.data[g][0]];else p=i.data.data;e={count:i.data.count,page:e.page,data:i.data.data,data1:p,row:c,search:e.search,name:e.name,sort:e.sort},t({type:o.a,payload:e}),a.next=20;break;case 17:a.prev=17,a.t0=a.catch(0),console.error(a.t0);case 20:case"end":return a.stop()}},a,this,[[0,17]])}));return function(e){return a.apply(this,arguments)}}()}var h=function(){var e=Object(i.a)(r.a.mark(function e(a){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(t=new d.a).append("name",a.name),void 0!==a.data&&t.append("data",JSON.stringify(a.data)),e.next=6,l.a.post("/data/get",t,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 6:return n=e.sent,e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(a){return e.apply(this,arguments)}}();function b(e){return function(){var a=Object(i.a)(r.a.mark(function a(t){var n,i,c,s,p,u,m,g;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(n=new d.a).append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(10*e.page)),n.append("name",e.name),n.append("deleted",e.deleted),void 0!=e.oldFile&&e.oldFile.length>0&&n.append("oldFile",e.oldFile),a.next=10,l.a.post("/data/delete",n,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userShoroAdmin}});case 10:for(i=a.sent,c=[],s=0;s<i.data.row.length;s++)c.push({name:i.data.row[s],options:{filter:!0,sort:!0}});if(p=[],"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(u=0;u<i.data.data.length;u++)p[u]=[i.data.data[u][0],i.data.data[u][1],i.data.data[u][2]];else if("\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==e.name)for(m=0;m<i.data.data.length;m++)p[m]=[i.data.data[m][0],i.data.data[m][1]];else if("\u0417\u0430\u0432\u0441\u043a\u043b\u0430\u0434\u0430"==e.name)for(g=0;g<i.data.data.length;g++)p[g]=[i.data.data[g][0]];else p=i.data.data;e={count:i.data.count,page:e.page,data:i.data.data,data1:p,row:c,search:e.search,name:e.name,sort:e.sort},t({type:o.a,payload:e}),a.next=22;break;case 19:a.prev=19,a.t0=a.catch(0),console.error(a.t0);case 22:case"end":return a.stop()}},a,this,[[0,19]])}));return function(e){return a.apply(this,arguments)}}()}},374:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n=["\u044f\u043d\u0432\u0430\u0440\u044c","\u0444\u0435\u0432\u0440\u0430\u043b\u044c","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0435\u043b\u044c","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u043e\u043a\u0442\u044f\u0431\u0440\u044c","\u043d\u043e\u044f\u0431\u0440\u044c","\u0434\u0435\u043a\u0430\u0431\u0440\u044c"]}}]);
//# sourceMappingURL=7.3e3d21b3.chunk.js.map