(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[76],{733:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(44),o=t(30),i=t(1),l=t.n(i),c=t(567),s=t(568),m=t(282),d=t(10),u=t(280),p=t(112),b=t(288),g=t(25),f=t.n(g),_=t(34),E=t(13),h=function(e){var a=Object(i.useState)(!1),t=Object(o.a)(a,2),g=t[0],h=t[1],v=Object(i.useState)([]),j=Object(o.a)(v,2),O=j[0],y=j[1],q=Object(i.useState)([]),x=Object(o.a)(q,2),C=x[0],k=x[1],S=Object(i.useState)([]),R=Object(o.a)(S,2),N=R[0],M=R[1],w=Object(i.useState)([]),A=Object(o.a)(w,2),F=A[0],I=A[1],P=Object(i.useState)({code:"",name:"",id_family:"",id_brand:"",id_models:"",id_measurement_unit:"",additional_information:""}),U=Object(o.a)(P,2),V=U[0],z=U[1],B=Object(i.useRef)(null);Object(i.useEffect)((function(){D(),B.current.focus()}),[]);var D=function(){var a=[f.a.get(_.a+"master_families"),f.a.get(_.a+"master_brand"),f.a.get(_.a+"master_models"),f.a.get(_.a+"master_measurement_unit")];e.match.params.id&&a.push(f.a.get(_.a+"master_precint/"+e.match.params.id)),Promise.all(a).then((function(e){y(e[0].data),k(e[1].data),M(e[2].data),I(e[3].data),e[4]&&z({code:e[4].data.code,name:e[4].data.name,id_family:e[4].data.id_family,id_brand:e[4].data.id_brand,id_models:e[4].data.id_models,id_measurement_unit:e[4].data.id_measurement_unit,additional_information:e[4].data.additional_information})})).catch((function(e){e.response?E.b.error(e.response.data.message):E.b.error("Error, contacte con soporte")}))},J=function(e){z(Object(r.a)(Object(r.a)({},V),{},Object(n.a)({},e.target.name,e.target.value)))},G=function(){e.history.replace("/masters/precint")},T=function(){z({code:"",name:"",id_family:"",id_brand:"",id_models:"",id_measurement_unit:"",additional_information:""}),h(!1),B.current.focus()};return l.a.createElement(c.a,null,l.a.createElement(s.a,{className:"containerDiv"},l.a.createElement(m.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},l.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(m.a,{sm:12,md:12,lg:12},l.a.createElement(d.a,{onSubmit:function(e){var a=e.currentTarget;if(e.preventDefault(),!1===a.checkValidity())return e.stopPropagation(),void h(!0);var t=Object.assign({},V);t.id?f.a.put(_.a+"master_precint/"+t.id,t).then((function(e){E.b.success("Registro Modificado"),G()})).catch((function(e){e.response?E.b.error(e.response.data.message):E.b.error("Error, contacte con soporte")})):f.a.post(_.a+"master_precint",t).then((function(e){E.b.success("Registro Creado"),T()})).catch((function(e){e.response?E.b.error(e.response.data.message):E.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:g},l.a.createElement(s.a,null,l.a.createElement(b.a,Object.assign({},e.inputCode,{value:V.code,handleChange:J,ref:B})),l.a.createElement(p.a,Object.assign({},e.inputName,{value:V.name,handleChange:J}))),l.a.createElement(s.a,null,l.a.createElement(p.a,Object.assign({},e.inputFamily,{value:V.id_family,handleChange:J}),l.a.createElement("option",{value:""},"--Seleccione--"),O.map((function(e,a){return l.a.createElement("option",{value:e.id,key:a},e.name)}))),l.a.createElement(p.a,Object.assign({},e.inputModels,{value:V.id_models,handleChange:J}),l.a.createElement("option",{value:""},"--Seleccione--"),N.map((function(e,a){return l.a.createElement("option",{value:e.id,key:a},e.name)}))),l.a.createElement(p.a,Object.assign({},e.inputBrand,{value:V.id_brand,handleChange:J}),l.a.createElement("option",{value:""},"--Seleccione--"),C.map((function(e,a){return l.a.createElement("option",{value:e.id,key:a},e.name)})))),l.a.createElement(s.a,null,l.a.createElement(p.a,Object.assign({},e.inputUnit,{value:V.id_measurement_unit,handleChange:J}),l.a.createElement("option",{value:""},"--Seleccione--"),F.map((function(e,a){return l.a.createElement("option",{value:e.id,key:a},e.name)}))),l.a.createElement(p.a,Object.assign({},e.inputAdditionalInformation,{value:V.additional_information,handleChange:J}))),l.a.createElement(s.a,{className:"justify-content-center"},l.a.createElement(m.a,{sm:4,md:4,lg:4},l.a.createElement(u.a,{type:"submit",size:"sm",variant:"primary",block:!0},"Guardar")),l.a.createElement(m.a,{sm:4,md:4,lg:4},l.a.createElement(u.a,{type:"submit",size:"sm",variant:"danger",block:!0,onClick:G},"Volver")))))))};h.defaultProps={inputCode:{type:"text",required:!0,name:"code",label:"C\xf3digo",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputName:{type:"text",required:!0,name:"name",label:"Nombre",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputFamily:{type:"select",required:!0,name:"id_family",label:"Familia",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputModels:{type:"select",required:!1,name:"id_models",label:"Modelo",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputUnit:{type:"select",required:!0,name:"id_measurement_unit",label:"Unidad de Medida",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputBrand:{type:"select",required:!0,name:"id_brand",label:"Marca",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputAdditionalInformation:{type:"textarea",required:!1,name:"additional_information",label:"Informaci\xf3n Adicional",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"}},a.default=h}}]);
//# sourceMappingURL=76.17eb47a9.chunk.js.map