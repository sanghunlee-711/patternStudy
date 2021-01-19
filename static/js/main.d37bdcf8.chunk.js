(this.webpackJsonppattern=this.webpackJsonppattern||[]).push([[0],{19:function(n,t,e){},22:function(n,t,e){"use strict";e.r(t);var i=e(1),c=e(0),o=e.n(c),r=e(10),a=e.n(r),u=(e(19),e(2)),d=e(4),l=e(5),f=e(3);function s(){var n=Object(u.a)(["\n  width: 100%;\n  /* padding: 20px 0; */\n  border-top: 1px solid black;\n  color: #489cc1;\n\n  &:nth-child(odd) {\n    border-top: 1px solid #f7f7f7;\n    border-bottom: 1px solid #f7f7f7;\n  }\n  &:nth-child(even) {\n    border-top: none;\n    border-bottom: 1px solid #f7f7f7;\n  }\n"]);return s=function(){return n},n}function j(){var n=Object(u.a)(["\n  background-color: ",";\n  text-decoration: ",";\n\n  display: flex;\n  justify-content: space-between;\n\n  padding: 10px;\n"]);return j=function(){return n},n}function h(){var n=Object(u.a)(["\n  display: flex;\n  margin-left: 10px;\n  input {\n    margin-left: 10px;\n  }\n  span {\n    margin-left: 10px;\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n  margin-right: 10px;\n\n  button {\n    background-color: ",";\n  }\n"]);return b=function(){return n},n}function g(){var n=Object(u.a)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: spac;\n  align-items: center;\n  padding: 0;\n\n  button {\n    background-color: white;\n    border: none;\n  }\n"]);return g=function(){return n},n}var p=f.a.ul(g()),v=f.a.div(b(),(function(n){return n.forlining?"whitesmoke":"white"})),x=f.a.div(h()),m=f.a.div(j(),(function(n){return n.forlining?"whitesmoke":"white"}),(function(n){return n.forlining?"line-through":"none"})),O=f.a.li(s()),k=function(n){var t;return Object(i.jsx)(p,{children:null===(t=n.itemList)||void 0===t?void 0:t.map((function(t,e){return Object(i.jsx)(O,{children:Object(i.jsxs)(m,{forlining:t.todoChecking,children:[Object(i.jsxs)(x,{children:[Object(i.jsx)("div",{onClick:function(){return n.todoCheck(t.id,t.todoChecking)},children:t.todoChecking?Object(i.jsx)("i",{className:"far fa-check-square"}):Object(i.jsx)("i",{className:"far fa-square"})}),t.check?Object(i.jsx)("input",{type:"text",name:"modify",value:n.changeValue,onChange:function(t){return n.modifyInput(t)}}):Object(i.jsx)("span",{children:t.typedValue})]}),Object(i.jsxs)(v,{forlining:t.todoChecking,children:[t.check?Object(i.jsx)("button",{onClick:function(){return n.doneFunc(t.id,t.typedValue,n.changeValue)},children:Object(i.jsx)("i",{className:"fas fa-check-circle"})}):Object(i.jsx)("button",{name:"done",onClick:function(){return n.modifyFunc(t.id,t.typedValue)},children:Object(i.jsx)("i",{className:"fas fa-pen"})}),Object(i.jsx)("button",{name:"delete",onClick:function(){return n.deleteFunc(t.id)},children:Object(i.jsx)("i",{className:"far fa-trash-alt"})})]})]})},"thisKey".concat(t.id+e))}))})};function y(){var n=Object(u.a)(["\n  color: goldenrod;\n  text-align: center;\n  width: 100%;\n  margin-left: 1vw;\n"]);return y=function(){return n},n}function w(){var n=Object(u.a)(["\n  transition: all 0.5s ease-in-out;\n  background-color: #f7e43b;\n  width: ","%;\n  height: 100%;\n  border-radius: 4px;\n\n  div {\n    transition: all 0.5s ease-in-out;\n    color: goldenrod;\n    position: absolute;\n    padding: 15px 0px 15px 30px;\n    margin: auto 0;\n  }\n  animation-name: chargeShowing;\n  animation-duration: 3s;\n\n  @keyframes chargeShowing {\n    from {\n      background-color: goldenrod;\n      width: 100%;\n    }\n    to {\n      background-color: white;\n      width: 0;\n    }\n  }\n"]);return w=function(){return n},n}function C(){var n=Object(u.a)(["\n  margin-left: 10vw;\n  min-width: 10vw;\n  max-width: 10vw;\n  height: 5vh;\n  border: 1px solid goldenrod;\n  border-radius: 4px;\n"]);return C=function(){return n},n}function S(){var n=Object(u.a)(["\n  position: fixed;\n  bottom: 5vh;\n  right: 20vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return n},n}var F=f.a.div(S()),N=f.a.div(C()),V=f.a.div(w(),(function(n){return void 0===n.count||null===n.count||isNaN(n.count)?0:n.count})),E=f.a.span(y()),I=function(n){return Object(i.jsxs)(F,{children:[Object(i.jsx)(N,{children:Object(i.jsx)(V,{count:n.count})}),Object(i.jsxs)(E,{children:[isNaN(n.count)?0:n.count.toLocaleString(void 0,{maximumFractionDigits:3}),"%"]})]})},L=function(n){return fetch(n,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(n){if(console.log(n.json()),!n.ok)throw new Error(n.statusText);return n.json().then((function(n){return n}))}))};function T(){var n=Object(u.a)(["\n  color: #525e65;\n  font-size: 40px;\n  text-align: center;\n  margin: 20px 0;\n  /* position: absolute; */\n  animation-duration: 3s;\n  animation-name: slideIn;\n\n  @keyframes slideIn {\n    from {\n      margin-left: 100%;\n      width: 300%;\n    }\n\n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n"]);return T=function(){return n},n}function q(){var n=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  input {\n    width: 70%;\n    height: 40px;\n    margin-left: 10px;\n    border: 1px solid goldenrod;\n  }\n  i {\n    margin-left: 10px;\n    /* background-color: #f7f7f7; */\n    color: #489cc1;\n  }\n"]);return q=function(){return n},n}function D(){var n=Object(u.a)(["\n  position: static;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  background-color: #ffff;\n  width: 60vw;\n  height: 70vh;\n"]);return D=function(){return n},n}function B(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n"]);return B=function(){return n},n}function J(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #489cc1;\n  width: 100vw;\n  height: 100vh;\n"]);return J=function(){return n},n}var P=f.a.section(J()),z=f.a.div(B()),A=f.a.div(D()),H=f.a.div(q()),K=f.a.span(T()),M=function(){var n=Object(c.useState)({title:"",typedValue:"",id:0,check:!1}),t=Object(l.a)(n,2),e=t[0],o=(t[1],Object(c.useState)([])),r=Object(l.a)(o,2),a=r[0],u=r[1],f=Object(c.useState)(""),s=Object(l.a)(f,2),j=s[0],h=s[1],b=Object(c.useState)(""),g=Object(l.a)(b,2),p=g[0],v=g[1],x=Object(c.useState)(0),m=Object(l.a)(x,2),O=m[0],y=m[1];Object(c.useEffect)((function(){L("./data/data.json").then((function(n){u(null===n||void 0===n?void 0:n.map((function(n){return Object(d.a)(Object(d.a)({},n),{},{check:!1,todoCheck:!1})})))})).catch((function(n){console.log("Have Error in UseEffect",n)}))}),[]),Object(c.useEffect)((function(){C(a)}),[a]),Object(c.useEffect)((function(){C(a)}),[a]);var w=function(n){var t=n.target,e=t.name,i=t.value;"modify"===String(e)?v(i):"make"===String(e)&&h(i)},C=function(n){var t=0,e=void 0!==(null===n||void 0===n?void 0:n.length)?n.length:1;null===n||void 0===n||n.forEach((function(n){return n.todoChecking?t+=1:t})),y(t/e*100)};return Object(i.jsx)(P,{children:Object(i.jsxs)(A,{children:[Object(i.jsx)(z,{children:Object(i.jsx)(K,{children:"TODOLIST"})}),Object(i.jsxs)(H,{children:[Object(i.jsx)("input",{name:"make",type:"text",value:j,onChange:function(n){return w(n)}}),Object(i.jsx)("i",{className:"fas fa-plus-square fa-3x",onClick:function(){return function(n){u(null===a||void 0===a?void 0:a.concat({title:"sample".concat(a.length+1),typedValue:n,id:a.length+1,check:!1,todoChecking:!1})),h("")}(j)}})]}),Object(i.jsx)(k,{item:e,itemList:a,deleteFunc:function(n){u(null===a||void 0===a?void 0:a.filter((function(t){return t.id!==n})))},modifyFunc:function(n,t){v(t),u(null===a||void 0===a?void 0:a.map((function(t){return t.id===n?Object(d.a)(Object(d.a)({},t),{},{check:!0}):t})))},doneFunc:function(n,t,e){u(null===a||void 0===a?void 0:a.map((function(t){return t.id===n?Object(d.a)(Object(d.a)({},t),{},{typedValue:e.length>0?e:t.typedValue,check:!1}):t}))),v("")},changeValue:p,modifyInput:w,todoCheck:function(n,t){u(t?null===a||void 0===a?void 0:a.map((function(t){return t.id===n?Object(d.a)(Object(d.a)({},t),{},{todoChecking:!1}):t})):null===a||void 0===a?void 0:a.map((function(t){return t.id===n?Object(d.a)(Object(d.a)({},t),{},{todoChecking:!0}):t})))}}),Object(i.jsx)(I,{count:O,itemList:null===a||void 0===a?void 0:a.length})]})})},U=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,23)).then((function(t){var e=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;e(n),i(n),c(n),o(n),r(n)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root")),U()}},[[22,1,2]]]);
//# sourceMappingURL=main.d37bdcf8.chunk.js.map