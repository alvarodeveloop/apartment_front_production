(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[69],{608:function(e,a,t){},722:function(e,a,t){"use strict";t.r(a);var r=t(73),n=t.n(r),l=t(113),c=t(114),s=t(18),o=t(44),i=t(30),u=t(1),m=t.n(u),d=t(146),p=t(567),b=t(10),E=t(568),g=t(282),f=t(280),v=t(31),h=t(184),j=t(112),O=t(25),k=t.n(O),x=t(13),y=t(34),_=(t(608),function(e){var a=Object(u.useState)({name:"",email:"",rut:"",password:"",id_rol:"",id_personal:""}),t=Object(i.a)(a,2),r=t[0],v=t[1],h=Object(u.useState)([]),O=Object(i.a)(h,2),_=O[0],w=O[1],S=Object(u.useState)([]),C=Object(i.a)(S,2),q=C[0],R=C[1],N=Object(u.useState)([]),P=Object(i.a)(N,2),D=P[0],z=P[1],M=Object(u.useState)(!1),T=Object(i.a)(M,2),I=T[0],F=T[1],H=Object(u.useState)(!1),J=Object(i.a)(H,2),U=J[0],V=J[1],G=Object(u.useState)(!1),L=Object(i.a)(G,2),A=L[0],B=L[1],K=Object(u.useState)([]),Q=Object(i.a)(K,2),W=Q[0],X=Q[1];Object(u.useEffect)((function(){!function(){var a=[k.a.get(y.a+"modules"),k.a.get(y.a+"roles"),k.a.get(y.a+"personal_enterprise")];e.match.params.id>0&&a.push(k.a.get(y.a+"user/"+e.match.params.id)),Promise.all(a).then((function(a){if(z(a[0].data),R(a[1].data),X(a[2].data),e.match.params.id){v({name:a[3].data.user.name,email:a[3].data.user.email,rut:a[3].data.user.rut,password:"",id_rol:a[3].data.user.id_rol,id_personal:a[3].data.user.id_personal});var t=a[3].data.modules.map((function(e){return e.id_menu}));w(t),B(!0)}})).catch((function(e){x.b.error("Error, contacte con soporte")}))}()}),[]);var Y=function(e){if("rut"===e.target.name){var a=e.target.value;a=(a=a?a.split("-").join(""):a)?a.substring(0,a.length-1)+"-"+a.substring(a.length-1):a,v(Object(o.a)(Object(o.a)({},r),{},Object(s.a)({},e.target.name,a)))}else v(Object(o.a)(Object(o.a)({},r),{},Object(s.a)({},e.target.name,e.target.value)))},Z=function(){var e=Object(c.a)(n.a.mark((function e(a,t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.persist(),!a.target.checked){e.next=6;break}return e.next=4,w([].concat(Object(l.a)(_),[t]));case 4:e.next=7;break;case 6:w(_.filter((function(e){return e!=a.target.value})));case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),$=function(){e.history.replace("/user/list")},ee=function(){var a=Object(c.a)(n.a.mark((function a(t){var r;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.get(y.a+"menu_user");case 2:r=a.sent,e.setMenu(r.data),setTimeout((function(){$()}),1e3);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return m.a.createElement(p.a,null,m.a.createElement(b.a,{onSubmit:function(a){var t=a.currentTarget;if(a.preventDefault(),!1===t.checkValidity())return a.stopPropagation(),void F(!0);if(0===_.length)return a.stopPropagation(),F(!0),void x.b.error("Debe escoger al menos un m\xf3dulo para el usuario");var n=Object.assign({},r,{modules:_});if(!A&&!n.password)return x.b.error("Debe escribir una contrase\xf1a"),!1;A?k.a.put(y.a+"user/"+e.match.params.id,n).then((function(e){x.b.success("Usuario Modificado"),ee(!0)})).catch((function(e){var a=e.response;a?x.b.error(a.data.message):x.b.error("Error, contacte con soporte")})):k.a.post(y.a+"user",n).then((function(e){x.b.success("Usuario Registrado"),ee(!1)})).catch((function(e){var a=e.response;a?x.b.error(a.data.message):x.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:I},m.a.createElement(E.a,null,m.a.createElement(g.a,{sm:5,md:5,lg:5,xs:12,className:"containerDivSeparated"},m.a.createElement("h3",{className:"text-center font-title"},"Formulario"),m.a.createElement("br",null),m.a.createElement(E.a,null,m.a.createElement(j.a,Object.assign({},e.inputName,{handleChange:Y,value:r.name})),m.a.createElement(j.a,Object.assign({},e.inputEmail,{handleChange:Y,value:r.email}))),m.a.createElement(E.a,null,m.a.createElement(j.a,Object.assign({},e.inputRut,{handleChange:Y,value:r.rut})),m.a.createElement(j.a,Object.assign({},e.inputPassword,{handleChange:Y,value:r.password}))),m.a.createElement(E.a,null,m.a.createElement(j.a,Object.assign({},e.inputSelect,{handleChange:Y,value:r.id_rol}),m.a.createElement("option",{value:""},"--Seleccione--"),q.map((function(e,a){return m.a.createElement("option",{key:a,value:e.id},e.name_role)}))),m.a.createElement(j.a,{type:"select",label:"Personal Postventa",name:"id_personal",required:!0,messageErrors:["Requerido*"],cols:"col-md-6 col-lg-6 col-sm-6",value:r.id_personal,handleChange:Y},m.a.createElement("option",{value:""},"--Seleccione--"),W.map((function(e,a){return m.a.createElement("option",{value:e.id,key:a},e.name+" "+e.last_names)})))),U?m.a.createElement(E.a,null,m.a.createElement(g.a,{sm:6,md:6,lg:6,xs:6},m.a.createElement(f.a,{size:"sm",type:"button",variant:"primary",block:!0,onClick:function(){return V(!1)}},"Registrar Otro ",m.a.createElement(d.d,null))),m.a.createElement(g.a,{sm:6,md:6,lg:6,xs:6},m.a.createElement(f.a,{size:"sm",type:"button",variant:"warning",block:!0,onClick:$},"Ir al listado ",m.a.createElement(d.m,null)))):m.a.createElement(E.a,null,m.a.createElement(g.a,{sm:12,md:12,lg:12,xs:12,className:"text-center"},m.a.createElement(f.a,{size:"sm",type:"submit",variant:"secondary",block:!0},"Enviar ",m.a.createElement(d.d,null)),"o",m.a.createElement(f.a,{size:"sm",onClick:$,type:"button",variant:"primary",block:!0},"Ir al Listado")))),!A||5!=r.id_rol&&6!=r.id_rol?m.a.createElement(g.a,{sm:7,md:7,lg:7,xs:12,className:"containerDivSeparated"},m.a.createElement("h3",{className:"text-center font-title"},"M\xf3dulos"),m.a.createElement(E.a,null,D.map((function(e,a){return m.a.createElement(g.a,{sm:4,md:4,lg:4,xs:6,key:a},m.a.createElement(b.a.Group,null,m.a.createElement("label",{forHtml:e.name_item+e.id},m.a.createElement("input",{type:"checkbox",id:e.name_item+e.id,value:e.id,checked:!!_.find((function(a){return a==e.id})),onChange:function(a){return Z(a,e.id)}}),m.a.createElement("br",null),e.name_item)))}))),m.a.createElement(E.a,null,m.a.createElement(g.a,{sm:12,md:12,lg:12},m.a.createElement(E.a,null,m.a.createElement(g.a,{sm:6,md:6,lg:6,xs:12},m.a.createElement(f.a,{size:"sm",variant:"secondary",block:!0,onClick:function(){var e=D.map((function(e){return e.id}));w(e)}},"Seleccionar Todos ",m.a.createElement(d.b,null))),m.a.createElement(g.a,{sm:6,md:6,lg:6,xs:12},m.a.createElement(f.a,{size:"sm",variant:"secondary",block:!0,onClick:function(){w([])}},"Deseleccionar Todos ",m.a.createElement(d.l,null)))),m.a.createElement(E.a,{className:"justify-content-center"},m.a.createElement(g.a,{sm:12,md:12,lg:12},m.a.createElement("br",null),m.a.createElement("p",null,"Hacer click en el bot\xf3n enviar para guardar los cambios")))))):"")))});_.defaultProps={inputName:{type:"text",required:!0,name:"name",label:"Nombre Completo",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputEmail:{type:"email",required:!0,name:"email",label:"Email",messageErrors:["Requerido*, ","Formato tipo Email*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputRut:{type:"text",required:!0,name:"rut",label:"Documento Identidad",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputPassword:{type:"password",required:!1,name:"password",label:"Contrase\xf1a",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputSelect:{type:"select",required:!0,name:"id_rol",label:"Rol",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-12"}},a.default=Object(v.b)(null,{setMenu:h.b})(_)}}]);
//# sourceMappingURL=69.a6c8c482.chunk.js.map