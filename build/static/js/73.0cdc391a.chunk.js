(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[73],{776:function(e,a,t){"use strict";t.r(a);var r=t(18),n=t(44),c=t(30),s=t(1),o=t.n(s),l=t(567),i=t(568),m=t(282),u=t(10),d=t(280),p=t(112),g=t(288),b=t(25),h=t.n(b),E=t(34),v=t(13),f=function(e){var a=Object(s.useState)(!1),t=Object(c.a)(a,2),b=t[0],f=t[1],_=Object(s.useState)({name:"",rut:"",email:"",phone_1:"",phone_2:"",address:"",is_active:!0}),j=Object(c.a)(_,2),O=j[0],y=j[1],x=Object(s.useRef)(null);Object(s.useEffect)((function(){q(),x.current.focus()}),[]);var q=function(){e.match.params.id&&h.a.get(E.a+"master_contractor/"+e.match.params.id).then((function(e){y({name:e.data.name,rut:e.data.rut,email:e.data.email,phone_1:e.data.phone_1,phone_2:e.data.phone_2,address:e.data.address,is_active:e.data.is_active,id:e.data.id})})).catch((function(e){e.response?v.b.error(e.response.data.message):(console.log(e),v.b.error("Error, contacte con soporte"))}))},R=function(e){if("rut"===e.target.name){var a=e.target.value;a=(a=a?a.split("-").join(""):a)?a.substring(0,a.length-1)+"-"+a.substring(a.length-1):a,y(Object(n.a)(Object(n.a)({},O),{},Object(r.a)({},e.target.name,a)))}else"is_active"===e.target.name?y(Object(n.a)(Object(n.a)({},O),{},Object(r.a)({},e.target.name,e.target.checked))):y(Object(n.a)(Object(n.a)({},O),{},Object(r.a)({},e.target.name,e.target.value)))},k=function(){e.history.replace("/masters/contractor")},C=function(){y({name:"",rut:"",email:"",phone_1:"",phone_2:"",address:"",is_active:!0}),f(!1),x.current.focus()};return o.a.createElement(l.a,null,o.a.createElement(i.a,{className:"containerDiv"},o.a.createElement(m.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},o.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement(m.a,{sm:12,md:12,lg:12},o.a.createElement(u.a,{onSubmit:function(e){var a=e.currentTarget;if(e.preventDefault(),!1===a.checkValidity())return e.stopPropagation(),void f(!0);var t=Object.assign({},O);t.id?h.a.put(E.a+"master_contractor/"+t.id,t).then((function(e){v.b.success("Registro Modificado"),k()})).catch((function(e){e.response?v.b.error(e.response.data.message):v.b.error("Error, contacte con soporte")})):h.a.post(E.a+"master_contractor",t).then((function(e){v.b.success("Registro Creado"),C()})).catch((function(e){e.response?v.b.error(e.response.data.message):v.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:b},o.a.createElement(i.a,null,o.a.createElement(g.a,Object.assign({},e.inputRut,{value:O.rut,handleChange:R,ref:x})),o.a.createElement(p.a,Object.assign({},e.inputName,{value:O.name,handleChange:R})),o.a.createElement(p.a,Object.assign({},e.inputAddress,{value:O.address,handleChange:R}))),o.a.createElement(i.a,null,o.a.createElement(p.a,Object.assign({},e.inputEmail,{value:O.email,handleChange:R})),o.a.createElement(p.a,Object.assign({},e.inputPhone,{value:O.phone_1,handleChange:R})),o.a.createElement(p.a,Object.assign({},e.inputPhone2,{value:O.phone_2,handleChange:R}))),o.a.createElement(i.a,null,o.a.createElement(u.a.Group,{className:"col-md-6 col-sm-6 col-lg-6 col-6"},o.a.createElement(u.a.Label,{style:{fontWeight:"bold"},for:"is_active"},"Empresa Activa?"),o.a.createElement("br",null),o.a.createElement("input",{type:"checkbox",id:"is_active",name:"is_active",checked:O.is_active,onChange:R,value:O.is_active}))),o.a.createElement(i.a,{className:"justify-content-center"},o.a.createElement(m.a,{sm:4,md:4,lg:4},o.a.createElement(d.a,{type:"submit",size:"sm",variant:"primary",block:!0},"Guardar")),o.a.createElement(m.a,{sm:4,md:4,lg:4},o.a.createElement(d.a,{type:"submit",size:"sm",variant:"danger",block:!0,onClick:k},"Volver")))))))};f.defaultProps={inputRut:{type:"text",required:!0,name:"rut",label:"Rut",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputName:{type:"text",required:!0,name:"name",label:"Nombre",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputAddress:{type:"textarea",required:!1,name:"address",label:"Direcci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputEmail:{type:"email",required:!1,name:"email",label:"Email",messageErrors:["Requerido*,"," Formato tipo Email*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPhone:{type:"number",required:!1,name:"phone_1",label:"Tel\xe9fono Principal",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPhone2:{type:"number",required:!1,name:"phone_2",label:"Telefono Secundario",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"}},a.default=f}}]);
//# sourceMappingURL=73.0cdc391a.chunk.js.map