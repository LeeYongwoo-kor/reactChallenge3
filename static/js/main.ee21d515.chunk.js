(this.webpackJsonpreactChallenge3=this.webpackJsonpreactChallenge3||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var c,r,o=n(0),i=n.n(o),a=n(14),j=n.n(a),O=n(8),l=n(22),u=n(24),b=n(4),s=n(5),d=n(2);!function(e){e.TO_DO="TO_DO",e.DOING="DOING",e.DONE="DONE"}(c||(c={})),function(e){e.ID="TODOS"}(r||(r={}));var D=localStorage.getItem(r.ID),f=Object(O.b)({key:"toDo",default:JSON.parse(D)||[]}),x=Object(O.b)({key:"category",default:c.TO_DO}),h=Object(O.c)({key:"toDoSelector",get:function(e){var t=e.get,n=t(f);console.log(n);var c=t(x);return console.log(x),n.filter((function(e){return e.category===c}))}}),g=n(7),v=n(23),I=n(3);var p=function(){var e=Object(O.f)(f),t=Object(O.e)(x),n=Object(v.a)(),c=n.register,o=n.handleSubmit,i=n.setValue;return Object(I.jsxs)("form",{onSubmit:o((function(n){var c=n.toDo;e((function(e){var n=[{text:c,id:Date.now(),category:t}].concat(Object(g.a)(e));return localStorage.setItem(r.ID,JSON.stringify(n)),n})),i("toDo","")})),children:[Object(I.jsx)("input",Object(s.a)(Object(s.a)({},c("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(I.jsx)("button",{children:"Add"})]})};var N=function(e){var t=e.text,n=e.category,o=e.id,i=Object(O.f)(f),a=function(e){i((function(n){var c=n.findIndex((function(e){return e.id===o})),i={text:t,id:o,category:e},a=[].concat(Object(g.a)(n.slice(0,c)),[i],Object(g.a)(n.slice(c+1)));return localStorage.setItem(r.ID,JSON.stringify(a)),a}))};return Object(I.jsxs)("li",{children:[Object(I.jsx)("span",{children:t}),n!==c.DOING&&Object(I.jsx)("button",{onClick:function(){return a(c.DOING)},children:"Doing"}),n!==c.TO_DO&&Object(I.jsx)("button",{onClick:function(){return a(c.TO_DO)},children:"ToDo"}),n!==c.DONE&&Object(I.jsx)("button",{onClick:function(){return a(c.DONE)},children:"Done"}),Object(I.jsx)("button",{onClick:function(){i((function(e){var t=e.findIndex((function(e){return e.id===o})),n=[].concat(Object(g.a)(e.slice(0,t)),Object(g.a)(e.slice(t+1)));return localStorage.setItem(r.ID,JSON.stringify(n)),n}))},children:"Delete"})]})};var m=function(){var e=Object(O.e)(h),t=Object(O.d)(x),n=Object(d.a)(t,2),r=n[0],o=n[1];return Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{children:"To Dos"}),Object(I.jsx)("hr",{}),Object(I.jsxs)("select",{value:r,onInput:function(e){o(null===e||void 0===e?void 0:e.currentTarget.value)},children:[Object(I.jsx)("option",{value:c.TO_DO,children:"To Do"}),Object(I.jsx)("option",{value:c.DOING,children:"Doing"}),Object(I.jsx)("option",{value:c.DONE,children:"Done"})]}),Object(I.jsx)(p,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(I.jsx)(N,Object(s.a)({},e),e.id)}))]})};var S,y=function(){return Object(I.jsx)(u.a,{basename:"/reactChallenge3",children:Object(I.jsx)(b.c,{children:Object(I.jsx)(b.a,{path:"/",element:Object(I.jsx)(m,{})})})})},T=n(25),k=Object(T.a)(S||(S=Object(l.a)(["\n\n"])));var C=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(k,{}),Object(I.jsx)(y,{})]})};j.a.render(Object(I.jsx)(i.a.StrictMode,{children:Object(I.jsx)(O.a,{children:Object(I.jsx)(C,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ee21d515.chunk.js.map