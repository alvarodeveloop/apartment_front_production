(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[69],{566:function(e,a,t){"use strict";var n=t(29),r=t(0),l=t.n(r),s=t(26),o=(t(282),l.a.forwardRef((function(e,a){var t,r=e.cols?e.cols:"col-md-6 col-sm-6";return"select"!==e.type&&"textarea"!==e.type?l.a.createElement(s.a.Group,{className:r},e.required?l.a.createElement(s.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(s.a.Label,{className:"fontBold"},e.label),l.a.createElement(s.a.Control,(t={ref:a,id:e.name,type:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,readOnly:!!e.readonly&&e.readonly,className:e.className?e.className:"",step:e.step?e.step:"",onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){}},Object(n.a)(t,"className","form-control-sm"),Object(n.a)(t,"disabled",e.disabled),t)),l.a.createElement(s.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"select"===e.type?l.a.createElement(s.a.Group,{className:r},e.required?l.a.createElement(s.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(s.a.Label,{className:"fontBold"},e.label),l.a.createElement(s.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",readOnly:!!e.readonly&&e.readonly,required:e.required,multiple:!!e.multiple&&e.multiple,ref:a||null,className:"form-control-sm",disabled:e.disabled},e.children),l.a.createElement(s.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"textarea"===e.type?l.a.createElement(s.a.Group,{className:r},e.required?l.a.createElement(s.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(s.a.Label,{className:"fontBold"},e.label),l.a.createElement(s.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,rows:e.rows?e.rows:2,readOnly:!!e.readonly&&e.readonly,onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){},ref:a||null,className:"form-control-sm",disabled:e.disabled}),l.a.createElement(s.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):void 0})));a.a=o},590:function(e,a,t){"use strict";var n=t(29),r=t(79),l=t(68),s=t.n(l),o=t(110),c=t(78),i=t(0),m=t.n(i),u=t(562),d=t(563),p=t(277),b=t(26),h=t(275),g=t(143),E=t(566),y=t(35),f=t.n(y),v=t(45),_=t(23),O=function(e){var a=Object(i.useState)(!1),t=Object(c.a)(a,2),l=t[0],y=t[1],O=Object(i.useState)({name:"",last_names:"",rut:"",email:"",id_city:"",id_country:"",poblation:"",phone_1:"",phone_2:"",address:""}),j=Object(c.a)(O,2),q=j[0],C=j[1],N=Object(i.useState)([]),k=Object(c.a)(N,2),x=k[0],R=k[1],w=Object(i.useState)([]),P=Object(c.a)(w,2),L=P[0],S=P[1],B=Object(i.useRef)(null);Object(i.useEffect)((function(){K(),B.current.focus()}),[]);var K=function(){var a=[f.a.get(v.a+"master_countrys")];e.match.params.id&&a.push(f.a.get(v.a+"client/"+e.match.params.id)),Promise.all(a).then(function(){var e=Object(o.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(a[0].data),a[1]&&(C({name:a[1].data.name,last_names:a[1].data.last_names,rut:a[1].data.rut,email:a[1].data.email,id_city:a[1].data.id_city,id_country:a[1].data.id_country,poblation:a[1].data.poblation,phone_1:a[1].data.phone_1,phone_2:a[1].data.phone_2,address:a[1].data.address,id:a[1].data.id}),S((function(e){return a[0].data.find((function(e){return e.id==a[1].data.id_country})).cities})));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))},U=function(e){if(e.persist(),"id_country"===e.target.name)S((function(a){return x.find((function(a){return a.id==e.target.value})).cities})),C(Object(r.a)(Object(r.a)({},q),{},{id_country:e.target.value,id_city:""}));else if("rut"===e.target.name){var a=e.target.value;(a=a.split("-").join(""))&&(a=a.substring(0,a.length-1)+"-"+a.substring(a.length-1)),C(Object(r.a)(Object(r.a)({},q),{},{rut:a}))}else C(Object(r.a)(Object(r.a)({},q),{},Object(n.a)({},e.target.name,e.target.value)))},T=function(a){e.isModal?e.showTable(a):e.history.replace("/masters/clients")},F=function(){C({name:"",last_names:"",rut:"",email:"",id_city:"",id_country:"",poblation:"",phone_1:"",phone_2:"",address:""}),y(!1),B.current.focus()};return m.a.createElement(u.a,null,m.a.createElement(d.a,{className:""},m.a.createElement(p.a,{sm:12,md:12,lg:12},m.a.createElement(b.a,{onSubmit:function(a){var t=a.currentTarget;if(a.preventDefault(),!1===t.checkValidity())return a.stopPropagation(),void y(!0);var n=Object.assign({},q);n.id?f.a.put(v.a+"client/"+n.id,n).then((function(e){_.b.success("Registro Modificado"),T()})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")})):f.a.post(v.a+"client",n).then((function(a){_.b.success("Registro Creado"),F(),e.isModal&&T(!0)})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:l},m.a.createElement(d.a,null,m.a.createElement(E.a,Object.assign({},e.inputRut,{value:q.rut,handleChange:U,ref:B})),m.a.createElement(g.a,Object.assign({},e.inputName,{value:q.name,handleChange:U})),m.a.createElement(g.a,Object.assign({},e.inputLastNames,{value:q.last_names,handleChange:U}))),m.a.createElement(d.a,null,m.a.createElement(g.a,Object.assign({},e.inputAddress,{value:q.address,handleChange:U})),m.a.createElement(g.a,Object.assign({},e.inputPoblation,{value:q.poblation,handleChange:U})),m.a.createElement(g.a,Object.assign({},e.inputEmail,{value:q.email,handleChange:U}))),m.a.createElement(d.a,null,m.a.createElement(g.a,Object.assign({},e.inputPhone,{value:q.phone_1,handleChange:U})),m.a.createElement(g.a,Object.assign({},e.inputPhone2,{value:q.phone_2,handleChange:U}))),m.a.createElement(d.a,null,m.a.createElement(g.a,Object.assign({},e.inputCountry,{value:q.id_country,handleChange:U}),m.a.createElement("option",{value:""},"--Seleccione--"),x.map((function(e,a){return m.a.createElement("option",{value:e.id,key:a},e.name)}))),m.a.createElement(g.a,Object.assign({},e.inputCity,{value:q.id_city,handleChange:U}),m.a.createElement("option",{value:""},"--Seleccione--"),L.map((function(e,a){return m.a.createElement("option",{value:e.id,key:a},e.name)})))),m.a.createElement(d.a,{className:"justify-content-center"},m.a.createElement(p.a,{sm:4,md:4,lg:4},m.a.createElement(h.a,{type:"submit",size:"sm",variant:"primary",block:!0},"Guardar")),m.a.createElement(p.a,{sm:4,md:4,lg:4},m.a.createElement(h.a,{type:"submit",size:"sm",variant:"danger",block:!0,onClick:function(){T(!1)}},"Volver")))))))};O.defaultProps={inputRut:{type:"text",required:!0,name:"rut",label:"Rut",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputName:{type:"text",required:!0,name:"name",label:"Nombre",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputLastNames:{type:"text",required:!0,name:"last_names",label:"Apellidos",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPoblation:{type:"text",required:!1,name:"poblation",label:"Poblaci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputAddress:{type:"textarea",required:!1,name:"address",label:"Direcci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputCountry:{type:"select",required:!0,name:"id_country",label:"Pa\xeds",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputCity:{type:"select",required:!0,name:"id_city",label:"Ciudad",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputEmail:{type:"email",required:!1,name:"email",label:"Email",messageErrors:["Requerido*,"," Formato tipo Email*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPhone:{type:"number",required:!1,name:"phone_1",label:"Tel\xe9fono Principal",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputPhone2:{type:"number",required:!1,name:"phone_2",label:"Telefono Secundario",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"}},a.a=O},775:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(590),s=t(563),o=t(277);a.default=function(e){return r.a.createElement(s.a,{className:"containerDiv"},r.a.createElement(o.a,{sm:12,md:12,lg:12},r.a.createElement(l.a,Object.assign({isModal:!1,showTable:function(){}},e))))}}}]);
//# sourceMappingURL=69.4f1ed815.chunk.js.map