(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[69],{608:function(e,a,t){},722:function(e,a,t){"use strict";t.r(a);var r=t(73),n=t.n(r),l=t(113),c=t(114),o=t(18),s=t(44),i=t(30),u=t(1),m=t.n(u),d=t(146),p=t(567),b=t(10),E=t(568),f=t(282),g=t(280),h=t(31),v=t(184),j=t(112),O=t(25),k=t.n(O),x=t(13),y=t(34),w=(t(608),function(e){var a=Object(u.useState)({name:"",email:"",rut:"",password:"",id_rol:""}),t=Object(i.a)(a,2),r=t[0],h=t[1],v=Object(u.useState)([]),O=Object(i.a)(v,2),w=O[0],S=O[1],_=Object(u.useState)([]),C=Object(i.a)(_,2),q=C[0],R=C[1],N=Object(u.useState)([]),D=Object(i.a)(N,2),P=D[0],M=D[1],T=Object(u.useState)(!1),I=Object(i.a)(T,2),F=I[0],H=I[1],J=Object(u.useState)(!1),U=Object(i.a)(J,2),V=U[0],G=U[1],L=Object(u.useState)(!1),z=Object(i.a)(L,2),A=z[0],B=z[1];Object(u.useEffect)((function(){!function(){var a=[k.a.get(y.a+"modules"),k.a.get(y.a+"roles")];e.match.params.id>0&&a.push(k.a.get(y.a+"user/"+e.match.params.id)),Promise.all(a).then((function(a){if(M(a[0].data),R(a[1].data),e.match.params.id){h({name:a[2].data.user.name,email:a[2].data.user.email,rut:a[2].data.user.rut,password:"",id_rol:a[2].data.user.id_rol});var t=a[2].data.modules.map((function(e){return e.id_menu}));S(t),B(!0)}})).catch((function(e){x.b.error("Error, contacte con soporte")}))}()}),[]);var K=function(e){h(Object(s.a)(Object(s.a)({},r),{},Object(o.a)({},e.target.name,e.target.value)))},Q=function(){var e=Object(c.a)(n.a.mark((function e(a,t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.persist(),!a.target.checked){e.next=6;break}return e.next=4,S([].concat(Object(l.a)(w),[t]));case 4:e.next=7;break;case 6:S(w.filter((function(e){return e!=a.target.value})));case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),W=function(){e.history.replace("/user/list")},X=function(){var a=Object(c.a)(n.a.mark((function a(t){var r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.get(y.a+"menu_user");case 2:r=a.sent,e.setMenu(r.data),t?setTimeout((function(){e.history.push("/user/list")}),1e3):(h({name:"",email:"",rut:"",password:"",id_rol:""}),S([]),H(!1),G(!0));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return m.a.createElement(p.a,null,m.a.createElement(b.a,{onSubmit:function(a){var t=a.currentTarget;if(a.preventDefault(),!1===t.checkValidity())return a.stopPropagation(),void H(!0);if(0===w.length)return a.stopPropagation(),H(!0),void x.b.error("Debe escoger al menos un m\xf3dulo para el usuario");var n=Object.assign({},r,{modules:w});if(!A&&!n.password)return x.b.error("Debe escribir una contrase\xf1a"),!1;A?k.a.put(y.a+"user/"+e.match.params.id,n).then((function(e){x.b.success("Usuario Modificado"),X(!0)})).catch((function(e){var a=e.response;a?x.b.error(a.data.message):x.b.error("Error, contacte con soporte")})):k.a.post(y.a+"user",n).then((function(e){x.b.success("Usuario Registrado"),X(!1)})).catch((function(e){var a=e.response;a?x.b.error(a.data.message):x.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:F},m.a.createElement(E.a,null,m.a.createElement(f.a,{sm:5,md:5,lg:5,xs:12,className:"containerDivSeparated"},m.a.createElement("h3",{className:"text-center font-title"},"Formulario"),m.a.createElement("br",null),m.a.createElement(E.a,null,m.a.createElement(j.a,Object.assign({},e.inputName,{handleChange:K,value:r.name})),m.a.createElement(j.a,Object.assign({},e.inputEmail,{handleChange:K,value:r.email}))),m.a.createElement(E.a,null,m.a.createElement(j.a,Object.assign({},e.inputRut,{handleChange:K,value:r.rut})),m.a.createElement(j.a,Object.assign({},e.inputPassword,{handleChange:K,value:r.password}))),m.a.createElement(E.a,null,m.a.createElement(j.a,Object.assign({},e.inputSelect,{handleChange:K,value:r.id_rol}),m.a.createElement("option",{value:""},"--Seleccione--"),q.map((function(e,a){return m.a.createElement("option",{key:a,value:e.id},e.name_role)})))),V?m.a.createElement(E.a,null,m.a.createElement(f.a,{sm:6,md:6,lg:6,xs:6},m.a.createElement(g.a,{type:"button",variant:"primary",block:!0,onClick:function(){return G(!1)}},"Registrar Otro ",m.a.createElement(d.d,null))),m.a.createElement(f.a,{sm:6,md:6,lg:6,xs:6},m.a.createElement(g.a,{type:"button",variant:"warning",block:!0,onClick:W},"Ir al listado ",m.a.createElement(d.m,null)))):m.a.createElement(E.a,null,m.a.createElement(f.a,{sm:12,md:12,lg:12,xs:12,className:"text-center"},m.a.createElement(g.a,{type:"submit",variant:"secondary",block:!0},"Enviar ",m.a.createElement(d.d,null)),"o",m.a.createElement(g.a,{onClick:W,type:"button",variant:"primary",block:!0},"Ir al Listado")))),!A||5!=r.id_rol&&6!=r.id_rol?m.a.createElement(f.a,{sm:7,md:7,lg:7,xs:12,className:"containerDivSeparated"},m.a.createElement("h3",{className:"text-center font-title"},"M\xf3dulos"),m.a.createElement(E.a,null,P.map((function(e,a){return m.a.createElement(f.a,{sm:4,md:4,lg:4,xs:6,key:a},m.a.createElement(b.a.Group,null,m.a.createElement("label",{forHtml:e.name_item+e.id},m.a.createElement("input",{type:"checkbox",id:e.name_item+e.id,value:e.id,checked:!!w.find((function(a){return a==e.id})),onChange:function(a){return Q(a,e.id)}}),m.a.createElement("br",null),e.name_item)))}))),m.a.createElement(E.a,null,m.a.createElement(f.a,{sm:12,md:12,lg:12},m.a.createElement(E.a,null,m.a.createElement(f.a,{sm:6,md:6,lg:6,xs:12},m.a.createElement(g.a,{variant:"secondary",block:!0,onClick:function(){var e=P.map((function(e){return e.id}));S(e)}},"Seleccionar Todos ",m.a.createElement(d.b,null))),m.a.createElement(f.a,{sm:6,md:6,lg:6,xs:12},m.a.createElement(g.a,{variant:"secondary",block:!0,onClick:function(){S([])}},"Deseleccionar Todos ",m.a.createElement(d.l,null)))),m.a.createElement(E.a,{className:"justify-content-center"},m.a.createElement(f.a,{sm:12,md:12,lg:12},m.a.createElement("br",null),m.a.createElement("p",null,"Hacer click en el bot\xf3n enviar para guardar los cambios")))))):"")))});w.defaultProps={inputName:{type:"text",required:!0,name:"name",label:"Nombre Completo",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputEmail:{type:"email",required:!0,name:"email",label:"Email",messageErrors:["Requerido*, ","Formato tipo Email*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputRut:{type:"text",required:!0,name:"rut",label:"Documento Identidad",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputPassword:{type:"password",required:!1,name:"password",label:"Contrase\xf1a",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputSelect:{type:"select",required:!0,name:"id_rol",label:"Rol",messageErrors:["Requerido*"],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"}},a.default=Object(h.b)(null,{setMenu:v.b})(w)}}]);
//# sourceMappingURL=69.e79ffa36.chunk.js.map