(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{378:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(393),i=n(7),l=n.n(i),c=n(17),o=n(0),s=n.n(o),u=n(3),p=n.n(u),d=n(4),m=n(63),f=n(38),g=n(80),b=n(101),h=n.n(b),y=n(49),v=n.n(y),E=n(419),O=n(100),x=n(102),k=n(33),j=n(409),w=n.n(j),S=n(410),R=n.n(S),N=n(411),C=n.n(N),T=n(41),D=n.n(T),A=n(401),J=n.n(A),M=void 0===O.b||O.b.current.offsetWidth>800?500:240,P=(void 0===O.b||O.b.current.offsetWidth,s.a.memo(function(e){Object(o.useEffect)(function(){function t(){return(t=Object(c.a)(l.a.mark(function t(){var n,a,r,i,c,o,s,u,p;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("active"===b.status&&["admin","\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"].includes(b.role)||e.history.push("/"),-1!==d){t.next=21;break}return n=[],t.next=5,g.getDataSimple({name:"\u0420\u0435\u0433\u0438\u043e\u043d\u0418\u043c\u044f"});case 5:if(void 0===(a=t.sent)){t.next=19;break}r=0;case 8:if(!(r<a.length)){t.next=18;break}return i=[],t.next=12,g.getDataSimple({name:"\u0422\u043e\u0447\u043a\u0430\u041f\u043e\u0420\u0435\u0433\u0438\u043e\u043d\u0443",data:{region:a[r].guid}});case 12:for(c=t.sent,o=0;o<c.length;o++)i[o]={name:c[o].name,guidPoint:c[o].guid,plan:"",current:0};n[r]={name:a[r].name,guidRegion:a[r].guid,plan:0,current:0,points:i};case 15:r++,t.next=8;break;case 18:ee(n);case 19:t.next=37;break;case 21:return t.next=23,g.getDataSimple({name:"\u041f\u043b\u0430\u043d\u041f\u043e\u0414\u0430\u0442\u0435",data:{date:m[d][0]}});case 23:if(void 0===(s=t.sent)){t.next=37;break}if(ee(JSON.parse(s.regions)),S(s.date),V(s.norma),I(s.current),K(s._id),"\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"!==b.role){t.next=37;break}for(u=JSON.parse(s.regions),p=0;p<u.length;p++)A.region===u[p].name&&(V(JSON.parse(s.regions)[0].plan),I(JSON.parse(s.regions)[0].current));return t.next=35,g.getDataSimple({name:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"});case 35:s=t.sent,M(s);case 37:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[]);var t=e.tableActions,n=t.setSelected,i=t.addData,u=t.setData,p=e.table,d=p.selected,m=p.data,f=e.classes,b=e.user.status,y=Object(o.useState)("2019-01-01"),O=Object(r.a)(y,2),j=O[0],S=O[1],N=Object(o.useState)({}),T=Object(r.a)(N,2),A=T[0],M=T[1],P=Object(o.useState)({}),q=Object(r.a)(P,2),_=q[0],H=q[1],W=Object(o.useState)("2019-01-01"),z=Object(r.a)(W,2),F=z[0],K=z[1],L=Object(o.useState)(0),Y=Object(r.a)(L,2),B=Y[0],I=Y[1],G=Object(o.useState)(0),Q=Object(r.a)(G,2),U=Q[0],V=Q[1],X=Object(o.useState)([]),Z=Object(r.a)(X,2),$=Z[0],ee=Z[1];return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("br",null),-1===d?s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{views:["year","month"],label:"\u0414\u0430\u0442\u0430",className:f.textField,value:j,onChange:S}),s.a.createElement("br",null)):s.a.createElement("div",{class:f.message},s.a.createElement("h3",null,j)),s.a.createElement("div",{className:f.message},s.a.createElement("div",{style:{display:"inline-block",marginRight:"10px",verticalAlign:"middle"}},"\u0426\u0435\u043b\u044c: ",s.a.createElement("div",{style:{display:"inline-block",fontWeight:"bold"}},U)),s.a.createElement("div",{style:{display:"inline-block",marginRight:"10px",verticalAlign:"middle"}},"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441: ",s.a.createElement("div",{style:{display:"inline-block",fontWeight:"bold"}},0!==U&&""!==U?Math.round(100*B/U)+"%":B))),s.a.createElement("br",null),void 0!=$&&$.length>0?$.map(function(e,t){if("admin"==b.role||"\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440"==b.role&&A.region===e.name)return s.a.createElement(w.a,{key:t,onClick:function(){(_=Object(a.a)({},_))[e.name]=!0,H(_)}},s.a.createElement(R.a,{expandIcon:s.a.createElement(J.a,null)},s.a.createElement(D.a,{className:f.heading},e.name),s.a.createElement(D.a,{className:f.secondaryHeading},"\u0426\u0435\u043b\u044c: ",s.a.createElement("b",{style:{color:"black"}},e.plan),"\xa0\xa0 \u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441: ",s.a.createElement("b",{style:{color:"black"}},0!==e.plan&&""!==e.plan?Math.round(100*e.current/e.plan)+"%":e.current))),!0===_[e.name]&&void 0!=e.points&&e.points.length>0?e.points.map(function(e,n){return s.a.createElement(C.a,{key:t},s.a.createElement("center",{style:{width:"100%"}},s.a.createElement("b",null,e.name),s.a.createElement("br",null),s.a.createElement("div",{style:{width:"40px",marginRight:"10px",display:"inline-block",verticalAlign:"middle"}},"\u0426\u0435\u043b\u044c:"),s.a.createElement(h.a,{style:{marginTop:"12px",marginRight:"10px",width:"70px",display:"inline-block",verticalAlign:"middle"},type:"number",margin:"normal",value:e.plan,onChange:function(e){!function(e,t,n){var a=parseInt(e.target.value);$[t].points[n].plan=isNaN(a)?"":a,$[t].plan=0;for(var r=0;r<$[t].points.length;r++)$[t].plan+=Object(k.a)($[t].points[r].plan);a=0;for(var i=0;i<$.length;i++)a+=Object(k.a)($[i].plan);ee($),V(a)}(e,t,n)}}),s.a.createElement("div",{style:{display:"inline-block",marginRight:"10px",verticalAlign:"middle"}},"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441: ",s.a.createElement("div",{style:{display:"inline-block",fontWeight:"bold"}},0!==e.plan&&""!==e.plan?Math.round(100*e.current/e.plan)+"%":e.current))))}):null)}):null,s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement(E.a,{className:"link",to:""},s.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){-1===d?i({search:"",sort:"",page:0,name:"\u041f\u043b\u0430\u043d",data:{norma:U,regions:JSON.stringify($),date:k.c[new Date(j).getMonth()]+" "+(1900+new Date(j).getYear())}}):u({id:F,search:"",sort:"",page:0,name:"\u041f\u043b\u0430\u043d",data:{norma:U,regions:JSON.stringify($)}}),n(-1)},className:f.button},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),s.a.createElement(E.a,{className:"link",to:"",onClick:function(){n(-1)}},s.a.createElement(v.a,{variant:"contained",color:"secondary",className:f.button},"\u041e\u0442\u043c\u0435\u043d\u0430"))))}));Event.propTypes={classes:p.a.object.isRequired},t.default=Object(d.withStyles)(function(e){return{button:{margin:e.spacing.unit},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:M},message:{width:M,marginTop:e.spacing.unit,marginBottom:e.spacing.unit,marginLeft:"calc((100% - "+M+"px)/2)",marginRight:"calc((100% - "+M+"px)/2)"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}})(Object(m.b)(function(e){return{user:e.user,table:e.table}},function(e){return{tableActions:Object(f.b)(g,e)}})(P))},401:function(e,t,n){"use strict";var a=n(391);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=(0,a(n(392)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"ExpandMore");t.default=i},419:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(3),l=n.n(i),c=n(28),o=n.n(c),s=n(104),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),l=0;l<r;l++)i[l]=arguments[l];return n=a=p(this,e.call.apply(e,[this].concat(i))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!d(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,i=n.to;r?t.replace(i):t.push(i)}},p(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);o()(this.context.router,"You should not use <Link> outside a <Router>"),o()(void 0!==t,'You must specify the "to" property');var i=this.context.router.history,l="string"===typeof t?Object(s.b)(t,null,null,i.location):t,c=i.createHref(l);return r.a.createElement("a",u({},a,{onClick:this.handleClick,href:c,ref:n}))},t}(r.a.Component);m.propTypes={onClick:l.a.func,target:l.a.string,replace:l.a.bool,to:l.a.oneOfType([l.a.string,l.a.object]).isRequired,innerRef:l.a.oneOfType([l.a.string,l.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:l.a.shape({history:l.a.shape({push:l.a.func.isRequired,replace:l.a.func.isRequired,createHref:l.a.func.isRequired}).isRequired}).isRequired},t.a=m}}]);
//# sourceMappingURL=11.c6739710.chunk.js.map