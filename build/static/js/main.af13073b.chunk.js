(this.webpackJsonpmodule3=this.webpackJsonpmodule3||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),i=n.n(r),a=n(8),o=n.n(a);n(20),n(21);function u(t){var e=t.title,n=t.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:e}),n]})}var b=n(9),l=n.n(b),s=n(2),j=Object(s.b)("contactList/AddContact",(function(t,e,n){return{payload:{name:t,number:e,id:n}}})),d=Object(s.b)("contactList/DeleteContact"),f=n(4);var O=Object(f.b)((function(t){return{contacts:t.contacts,filter:t.filter}}),(function(t){return{deleteContact:function(e){return t(d(e))}}}))((function(t){var e=t.contacts,n=t.filter,r=t.deleteContact;return Object(c.jsx)(u,{title:"Contacts",children:e.filter((function(t){return t.name.toLowerCase().includes(n)})).map((function(t){return Object(c.jsxs)("div",{children:[t.name," ",t.number,Object(c.jsx)("button",{onClick:function(){return r(t.id)},children:"delete"})]},l.a.generate())}))})}));var m=Object(f.b)((function(t){return{contacts:t.contacts}}),(function(t){return{addContact:function(e,n,c){return t(j(e,n,c))}}}))((function(t){var e=t.contacts,n=t.addContact;return Object(c.jsx)(u,{title:"Phonebook",children:Object(c.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault();var c=t.target,r=c.name,i=c.number;e.filter((function(t){return t.name===r.value})).length>0?alert("user already exists"):n(r.value,i.value,l.a.generate())},children:[Object(c.jsxs)("label",{htmlFor:"name",children:["Name ",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",id:"name"})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{htmlFor:"number",children:["Number ",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",id:"number"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]})})})),x=Object(s.b)("filter/setFilter");var h=Object(f.b)(null,(function(t){return{setFilter:function(e){return t(x(e))}}}))((function(t){var e=t.setFilter;return Object(c.jsx)("label",{htmlFor:"filter",children:Object(c.jsx)("input",{type:"text",id:"filter",onChange:function(t){var n=t.target.value;e(n.toLowerCase())}})})}));var v,p=Object(f.b)((function(t){return{contacts:t.contacts}}))((function(t){var e=t.contacts;return Object(r.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(e))}),[e]),Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{}),Object(c.jsx)(h,{}),Object(c.jsx)(O,{})]})})),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),i(t),a(t)}))},C=n(5),y=n(6);var F=Object(s.c)(function(){var t=JSON.parse(localStorage.getItem("contacts"));return t&&Object(y.a)(t).length>0&&Object(y.a)(t)||[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]}(),(v={},Object(C.a)(v,j,(function(t,e){var n=e.payload;return[].concat(Object(y.a)(t),[n])})),Object(C.a)(v,d,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),v)),S=Object(s.c)("",Object(C.a)({},x.type,(function(t,e){return e.payload}))),L=Object(s.a)({reducer:{filter:S,contacts:F},devTools:!1});o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f.a,{store:L,children:Object(c.jsx)(p,{})})}),document.getElementById("root")),g()}},[[36,1,2]]]);
//# sourceMappingURL=main.af13073b.chunk.js.map