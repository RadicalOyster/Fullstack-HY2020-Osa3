(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(13),r=t.n(l),u=t(2),c=function(e){var n=e.persons,t=e.filter,a=e.removePerson;return o.a.createElement("div",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,n){return o.a.createElement("p",{key:e.id},e.name," ",e.number," ",o.a.createElement("button",{onClick:function(){return a(e)}},"delete"))})))},i=function(e){return o.a.createElement("form",{onSubmit:e.addPerson},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},m=function(e){return o.a.createElement("div",null,"filter shown by: ",o.a.createElement("input",{value:e.filter,onChange:e.handleFilterChange}))},d=t(3),s=t.n(d),f="api/persons",h=function(){return s.a.get(f)},b=function(e){return s.a.post(f,e)},p=function(e){return s.a.delete(f+"/"+e.id)},g=function(e,n){return s.a.put("".concat(f,"/").concat(e),n)},v=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],l=n[1];Object(a.useEffect)((function(){h().then((function(e){l(e.data)})),T(null)}),[]),console.log("render",t.length,"persons");var r=Object(a.useState)(""),d=Object(u.a)(r,2),s=d[0],f=d[1],v=Object(a.useState)(""),E=Object(u.a)(v,2),w=E[0],C=E[1],j=Object(a.useState)(""),O=Object(u.a)(j,2),N=O[0],k=O[1],S=Object(a.useState)([]),y=Object(u.a)(S,2),P=y[0],T=y[1];return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement((function(){return null===P?null:o.a.createElement("div",{className:"notification"},P.content)}),null),o.a.createElement(m,{filter:N,handleFilterChange:function(e){console.log(e.target.value),k(e.target.value)}}),o.a.createElement("h1",null,"Add new"),o.a.createElement(i,{addPerson:function(e){if(e.preventDefault(),0===t.filter((function(e){return e.name===s})).length)b({name:s,number:w}).then((function(e){console.log(e.data.name,e.data.number,e.data.id);var n={name:e.data.name,number:e.data.number,id:e.data.id};l(t.concat(n)),console.log(t)})).catch((function(e){console.log(e.response.data),T({content:e.response.data}),setTimeout((function(){T(null)}),5e3)})),T({content:"Added "+s+" to the phonebook"}),setTimeout((function(){T(null)}),5e3);else if(window.confirm("".concat(s," is already added to the phonebook, replace the old number with a new one?"))){var n=t.filter((function(e){return e.name===s}))[0];n.number=w,g(n.id,n).then((function(e){h().then((function(e){console.log(e.data),t.concat(e.data)})),T({content:"Updated "+s+"'s phone number"}),setTimeout((function(){T(null)}),5e3)}))}},newName:s,handleNameChange:function(e){console.log(e.target.value),f(e.target.value)},newNumber:w,handleNumberChange:function(e){console.log(e.target.value),C(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(c,{persons:t,filter:N,removePerson:function(e){window.confirm("Delete "+e.name+"?")&&p(e).then((function(n){console.log("HEYHEY"),l(t.filter((function(n){return n.id!==e.id})))})),T({content:"Removed "+e.name+" from the phonebook"}),setTimeout((function(){T(null)}),5e3)}}))};t(36);r.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.10a56485.chunk.js.map