(this["webpackJsonpcoding-test"]=this["webpackJsonpcoding-test"]||[]).push([[0],{122:function(t,e,a){t.exports=a(138)},127:function(t,e,a){},129:function(t,e,a){},131:function(t,e,a){},138:function(t,e,a){"use strict";a.r(e);var n=a(3),r=a.n(n),o=a(40),c=a.n(o),l=(a(127),a(12)),i=a.n(l),s=a(41),u=a(42),d=a(22),f=a(50),m=a(49),p=a(29),h=a(43),g=(a(129),a(48)),v=a(6),b=a(140),w=a(21),y=a.n(w),E=a(26),x=a.n(E),M=a(11),k=(a(131),function(t){var e=t.xdim,a=t.ydim,o=t.margin,c=t.xdata,l=t.ydata,i=Object(n.useRef)(null);Object(n.useEffect)((function(){var t=M.f(i.current);s(t),u(t),d(t)}),[e,a,o,c,l]);var s=function(t){var n=M.d().domain(c).range([o.left,e+o.left]),r=M.a(n);t.append("g").call(r).attr("transform","translate(0, ".concat(a+o.top,")"));var i=M.e().domain([0,M.c(l)]).range([a,0]),s=M.b(i);t.append("g").call(s).attr("transform","translate(".concat(o.left,", ").concat(o.top,")"))},u=function(t){var e=M.e().domain([0,M.c(l)]).range([0,a]),n=l.map((function(t){return e(t)}));t.selectAll("rect").data(n).enter().append("rect").attr("width",f.bandwidth()).attr("height",(function(t){return t})).attr("x",(function(t,e){return f(c[e])})).attr("y",(function(t){return o.top+a-t})).attr("fill","#19d3da").attr("stroke","rgba(0, 0, 0, 0.3)"),t.selectAll("text").data(n).enter().append("text").text((function(t){return t})).attr("x",(function(t,e){return 70*e})).attr("y",(function(t,e){return a-10*t-3}))},d=function(t){t.append("text").text("Number of Each Month Posts in 2019").attr("text-anchor","middle").attr("x",(o.left+o.right+e)/2).attr("y",o.top/2),t.append("text").text("Number of Posts").attr("x",-(o.top+o.bottom+a)/2).attr("y",o.left/2).attr("transform","rotate(-90, ".concat(o.left/2,", ").concat(o.top/2,")"))},f=M.d().domain(c).range([o.left,e+o.left]).padding(.2);M.e().domain([0,M.c(l)]).range([a,0]);return r.a.createElement("div",{className:"the-chart"},r.a.createElement("svg",{viewBox:"0 0 ".concat(e+o.left+o.right," ").concat(a+o.top+o.bottom),preserveAspectRatio:"xMinYMin",width:"100%",height:"100%",style:{backgroundColor:"#686d76"},ref:i}))});function N(){var t=Object(h.a)(["\n{\n  allPosts(count: 100) {\n    id\n    title\n    body\n    published\n    createdAt\n    author {\n      id\n      firstName\n      lastName\n      avatar\n    }\n  }\n}\n"]);return N=function(){return t},t}var A=new g.a({uri:"https://fakerql.stephix.uk/graphql"}),D=y()(N()),O=[];function j(){return P.apply(this,arguments)}function P(){return(P=Object(p.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",A.query({query:D}).then((function(t){for(var e=[0,0,0,0,0,0,0,0,0,0,0,0],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=0;n<t.data.allPosts.length;n++){for(var r=parseFloat(t.data.allPosts["".concat(n)].createdAt),o=x()(new Date(r)).format("MMM Do YY"),c=0;c<a.length;c++)o.includes(a[c])&&(e[c]+=1);console.log(t)}return O=[].concat(e),e})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(){return(J=Object(p.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j();case 3:t.sent,t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){J.apply(this,arguments)}(),console.log(O);var S=function(t){Object(f.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).toggleDiv=function(){var t=n.state.show;n.setState({show:!t})},n.state={show:!0},n.toggleDiv=n.toggleDiv.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"render",value:function(){var t=this,e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=0;return r.a.createElement(v.a,{client:A},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"Data Histrogram")),r.a.createElement(b.a,{query:D},(function(t){var a=t.loading,n=t.error,o=t.data;if(a)return r.a.createElement("div",{className:"loading-div"},"Loading...");if(n)return r.a.createElement("div",null,"Error ",n.toString());if(o){for(var c=[0,0,0,0,0,0,0,0,0,0,0,0],l=0;l<o.allPosts.length;l++)for(var i=parseFloat(o.allPosts["".concat(l)].createdAt),s=x()(new Date(i)).format("MMM Do YY"),u=0;u<e.length;u++)s.includes(e[u])&&(c[u]+=1);return console.log(c),r.a.createElement("div",{className:"histogram"},r.a.createElement(k,{xdim:750,ydim:500,margin:{top:80,bottom:80,left:120,right:120},xdata:e,ydata:c}),r.a.createElement("hr",{style:{color:"#eeeeee",backgroundColor:"#eeeeee",borderTop:"1px solid #eeeeee",borderRadius:40,width:"70%"}}))}})),r.a.createElement(b.a,{query:D},(function(e){var n=e.loading,o=e.error,c=e.data;return n?r.a.createElement("div",{className:"loading-div"},"Loading..."):o?r.a.createElement("div",null,"Error ",o.toString()):r.a.createElement("div",{className:"data-div"},r.a.createElement("button",{className:"button",onClick:t.toggleDiv},"Show data"),t.state.show&&c.allPosts.map((function(t){a++;var e=x()(new Date(parseFloat(t.createdAt))).format("MMM Do YY");return r.a.createElement("div",{key:t.id},"Date ".concat(a-parseFloat(c.allPosts.length),": ").concat(e))})))})),r.a.createElement("footer",null,"by Mocanu Sebastian")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[122,1,2]]]);
//# sourceMappingURL=main.ca6111ce.chunk.js.map