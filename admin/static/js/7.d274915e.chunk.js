(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{368:function(e,t,a){"use strict";a.r(t);var n=a(377),l=a(15),i=a.n(l),r=a(17),c=a(0),s=a.n(c),o=a(2),m=a.n(o),u=a(14),d=a(48),g=a(27),p=a(86),b=a(87),h=a.n(b),f=a(36),E=a.n(f),y=a(487),v=a(85),x=a(133),k=a(143),w=a(399),O=a.n(w),S=a(400),j=a.n(S),N=a(402),R=a.n(N),A=a(31),D=a.n(A),T=a(401),C=a.n(T),J=v.b.current.offsetWidth>800?500:240,W=v.b.current.offsetWidth>800?240:120,F=s.a.memo(function(e){Object(c.useEffect)(Object(r.a)(i.a.mark(function t(){var a,n,l,r,c,s,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("active"===b.status&&["admin","\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"].includes(b.role)||e.history.push("/"),-1!==u){t.next=20;break}return a=[],t.next=5,p.getDataSimple({name:"\u0420\u0435\u0433\u0438\u043e\u043d\u0418\u043c\u044f"});case 5:n=t.sent,l=0;case 7:if(!(l<n.length)){t.next=17;break}return r=[],t.next=11,p.getDataSimple({name:"\u0422\u043e\u0447\u043a\u0430\u041f\u043e\u0420\u0435\u0433\u0438\u043e\u043d\u0443",data:{region:n[l]}});case 11:for(c=t.sent,s=0;s<c.length;s++)r[s]={name:c[s],plan:0,current:0};a[l]={name:n[l],plan:0,current:0,points:r};case 14:l++,t.next=7;break;case 17:U(a),t.next=33;break;case 20:return t.next=22,p.getDataSimple({name:"\u041f\u043b\u0430\u043d\u041f\u043e\u0414\u0430\u0442\u0435",data:{date:d[u][0]}});case 22:if(o=t.sent,U(JSON.parse(o.regions)),S(o.date),_(o.norma),I(o.current),H(o._id),"\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"!==b.role){t.next=33;break}return t.next=31,p.getDataSimple({name:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"});case 31:o=t.sent,J(o);case 33:case"end":return t.stop()}},t,this)})),[]);var t=e.tableActions,a=t.setSelected,l=t.addData,o=t.setData,m=e.table,u=m.selected,d=m.data,g=e.classes,b=e.user.status,f=Object(c.useState)("2019-01-01"),v=Object(n.a)(f,2),w=v[0],S=v[1],N=Object(c.useState)({}),A=Object(n.a)(N,2),T=A[0],J=A[1],W=Object(c.useState)("2019-01-01"),F=Object(n.a)(W,2),M=F[0],H=F[1],L=Object(c.useState)(0),z=Object(n.a)(L,2),B=z[0],I=z[1],P=Object(c.useState)(0),q=Object(n.a)(P,2),Y=q[0],_=q[1],G=Object(c.useState)([]),K=Object(n.a)(G,2),Q=K[0],U=K[1];return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("br",null),-1===u?s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{views:["year","month"],label:"\u0414\u0430\u0442\u0430",className:g.textField,value:w,onChange:S}),s.a.createElement("br",null)):s.a.createElement("div",{class:g.message},s.a.createElement("h3",null,w)),s.a.createElement("div",{className:g.message},s.a.createElement("div",{style:{display:"inline-block",marginRight:"10px",verticalAlign:"middle"}},"\u0426\u0435\u043b\u044c: ",s.a.createElement("div",{style:{display:"inline-block",fontWeight:"bold"}},Y)),s.a.createElement("div",{style:{display:"inline-block",marginRight:"10px",verticalAlign:"middle"}},"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441: ",s.a.createElement("div",{style:{display:"inline-block",fontWeight:"bold"}},B))),s.a.createElement("br",null),void 0!=Q&&Q.length>0?Q.map(function(e,t){if("admin"==b.role||"\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==b.role&&T.region===e.name)return s.a.createElement(O.a,null,s.a.createElement(j.a,{expandIcon:s.a.createElement(C.a,null)},s.a.createElement(D.a,{className:g.heading},e.name),s.a.createElement(D.a,{className:g.secondaryHeading},"\u0426\u0435\u043b\u044c: ",s.a.createElement("b",{style:{color:"black"}},e.plan),"\xa0\xa0 \u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441: ",s.a.createElement("b",{style:{color:"black"}},e.current))),void 0!=e.points&&e.points.length>0?e.points.map(function(e,a){return s.a.createElement(R.a,null,s.a.createElement("center",{style:{width:"100%"}},s.a.createElement("b",null,e.name),s.a.createElement("br",null),s.a.createElement("div",{style:{width:"40px",marginRight:"10px",display:"inline-block",verticalAlign:"middle"}},"\u0426\u0435\u043b\u044c:"),s.a.createElement(h.a,{style:{marginTop:"12px",marginRight:"10px",width:"70px",display:"inline-block",verticalAlign:"middle"},type:"login",margin:"normal",value:e.plan,onChange:function(e){!function(e,t,a){var n=parseInt(e.target.value);Q[t].points[a].plan=isNaN(n)?0:n,Q[t].plan=0;for(var l=0;l<Q[t].points.length;l++)Q[t].plan+=Q[t].points[l].plan;n=0;for(var i=0;i<Q.length;i++)n+=Q[i].plan;U(Q),_(n)}(e,t,a)}}),s.a.createElement("div",{style:{display:"inline-block",marginRight:"10px",verticalAlign:"middle"}},"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441: ",s.a.createElement("div",{style:{display:"inline-block",fontWeight:"bold"}},e.current))))}):null)}):null,s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement(y.a,{className:"link",to:""},s.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){-1===u?l({search:"",sort:"",page:0,name:"\u041f\u043b\u0430\u043d",data:{norma:Y,regions:JSON.stringify(Q),date:k.a[new Date(w).getMonth()]+" "+(1900+new Date(w).getYear())}}):o({id:M,search:"",sort:"",page:0,name:"\u041f\u043b\u0430\u043d",data:{norma:Y,regions:JSON.stringify(Q)}}),a(-1)},className:g.button},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),s.a.createElement(y.a,{className:"link",to:"",onClick:function(){a(-1)}},s.a.createElement(E.a,{variant:"contained",color:"secondary",className:g.button},"\u041e\u0442\u043c\u0435\u043d\u0430"))))});Event.propTypes={classes:m.a.object.isRequired},t.default=Object(u.withStyles)(function(e){return{button:{margin:e.spacing.unit},textFieldSmall:{display:"inline-block",marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:W},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:J},urls:{margin:e.spacing.unit,width:J,maxHeight:100,overflow:"auto"},message:{width:J,marginTop:e.spacing.unit,marginBottom:e.spacing.unit,marginLeft:"calc((100% - "+J+"px)/2)",marginRight:"calc((100% - "+J+"px)/2)"},MuiPickersToolbar:{toolbar:{backgroundColor:"#000"}},MuiPickersModal:{dialogAction:{color:"#000"}},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}})(Object(d.b)(function(e){return{user:e.user,table:e.table}},function(e){return{tableActions:Object(g.b)(p,e)}})(F))}}]);
//# sourceMappingURL=7.d274915e.chunk.js.map