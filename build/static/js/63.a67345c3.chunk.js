(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[63],{571:function(e,a,t){"use strict";var n=t(18),r=t(574),l=t(1),c=t.n(l),o=t(577),s=t(575),i=t(576),m=t(280);function u(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return u=function(){return e},e}var d=o.a.div(u());function p(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter,l=n.length;return c.a.createElement("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(l," registros..."),className:"inputPageFilter"})}function g(e,a,t){return Object(i.a)(e,t,{keys:[function(e){return e.values[a]}]})}function b(e){var a=e.columns,t=e.data,r=e.displayPaginationUp,l=e.letrasChicas,o=c.a.useMemo((function(){return{fuzzyText:g,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),i=c.a.useMemo((function(){return{Filter:p}}),[]),u=Object(s.useTable)({columns:a,data:t,defaultColumn:i,filterTypes:o,initialState:{pageIndex:0}},s.useFilters,s.useSortBy,s.usePagination),d=u.getTableProps,b=u.getTableBodyProps,E=u.headerGroups,f=u.page,_=u.prepareRow,h=u.canPreviousPage,v=u.canNextPage,y=u.pageOptions,j=u.pageCount,O=u.gotoPage,k=u.nextPage,x=u.previousPage,C=u.setPageSize,q=u.state,w=q.pageIndex,N=q.pageSize;return c.a.createElement("div",{className:"table-responsive"},r?c.a.createElement("div",{className:"pagination"},c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(0)},disabled:!h},"<<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!h},"<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},">")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(j-1)},disabled:!v},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,w+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:w+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;O(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:N,onChange:function(e){C(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",c.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),c.a.createElement("thead",null,E.map((function(e,a){return c.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:a}),e.headers.map((function(e,a){return c.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:l?"14px":"15px"},key:a}),e.render("Header"),c.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),c.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),c.a.createElement("tbody",Object.assign({},b(),{className:"text-center",style:{fontSize:l?"13px":"15px"}}),f.map((function(e,a){return _(e)||c.a.createElement("tr",Object.assign({},e.getRowProps(),{key:a+"-"}),e.cells.map((function(e,a){return c.a.createElement("td",Object.assign({},e.getCellProps(),{key:a+"td"}),e.render("Cell"))})))})))),c.a.createElement("div",{className:"pagination"},c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(0)},disabled:!h},"<<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!h},"<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},">")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(j-1)},disabled:!v},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,w+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:w+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;O(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:N,onChange:function(e){C(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}g.autoRemove=function(e){return!e};a.a=function(e){var a=e.data,t=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return c.a.createElement(d,null,c.a.createElement(b,{data:a,columns:t,displayPaginationUp:n,letrasChicas:r}))}},595:function(e,a,t){"use strict";var n=t(18),r=t(44),l=t(73),c=t.n(l),o=t(114),s=t(30),i=t(1),m=t.n(i),u=t(567),d=t(568),p=t(282),g=t(10),b=t(280),E=t(112),f=t(288),_=t(25),h=t.n(_),v=t(34),y=t(13),j=function(e){var a=Object(i.useState)(!1),t=Object(s.a)(a,2),l=t[0],_=t[1],j=Object(i.useState)({name:"",last_names:"",rut:"",email:"",id_city:"",id_country:"",poblation:"",phone_1:"",phone_2:"",address:""}),O=Object(s.a)(j,2),k=O[0],x=O[1],C=Object(i.useState)([]),q=Object(s.a)(C,2),w=q[0],N=q[1],P=Object(i.useState)([]),R=Object(s.a)(P,2),S=R[0],z=R[1],M=Object(i.useRef)(null);Object(i.useEffect)((function(){B(),M.current.focus()}),[]);var B=function(){var a=[h.a.get(v.a+"master_countrys")];e.match.params.id&&a.push(h.a.get(v.a+"client/"+e.match.params.id)),Promise.all(a).then(function(){var e=Object(o.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(a[0].data),a[1]&&(x({name:a[1].data.name,last_names:a[1].data.last_names,rut:a[1].data.rut,email:a[1].data.email,id_city:a[1].data.id_city,id_country:a[1].data.id_country,poblation:a[1].data.poblation,phone_1:a[1].data.phone_1,phone_2:a[1].data.phone_2,address:a[1].data.address,id:a[1].data.id}),z((function(e){return a[0].data.find((function(e){return e.id==a[1].data.id_country})).cities})));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},F=function(e){if(e.persist(),"id_country"===e.target.name)z((function(a){return w.find((function(a){return a.id==e.target.value})).cities})),x(Object(r.a)(Object(r.a)({},k),{},{id_country:e.target.value,id_city:""}));else if("rut"===e.target.name){var a=e.target.value;(a=a.split("-").join(""))&&(a=a.substring(0,a.length-1)+"-"+a.substring(a.length-1)),x(Object(r.a)(Object(r.a)({},k),{},{rut:a}))}else x(Object(r.a)(Object(r.a)({},k),{},Object(n.a)({},e.target.name,e.target.value)))},D=function(a){e.isModal?e.showTable(a):e.history.replace("/masters/clients")},T=function(){x({name:"",last_names:"",rut:"",email:"",id_city:"",id_country:"",poblation:"",phone_1:"",phone_2:"",address:""}),_(!1),M.current.focus()};return m.a.createElement(u.a,null,m.a.createElement(d.a,{className:""},m.a.createElement(p.a,{sm:12,md:12,lg:12},m.a.createElement(g.a,{onSubmit:function(a){var t=a.currentTarget;if(a.preventDefault(),!1===t.checkValidity())return a.stopPropagation(),void _(!0);var n=Object.assign({},k);n.id?h.a.put(v.a+"client/"+n.id,n).then((function(e){y.b.success("Registro Modificado"),D()})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")})):h.a.post(v.a+"client",n).then((function(a){y.b.success("Registro Creado"),T(),e.isModal&&D(!0)})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:l},m.a.createElement(d.a,null,m.a.createElement(f.a,Object.assign({},e.inputRut,{value:k.rut,handleChange:F,ref:M})),m.a.createElement(E.a,Object.assign({},e.inputName,{value:k.name,handleChange:F})),m.a.createElement(E.a,Object.assign({},e.inputLastNames,{value:k.last_names,handleChange:F}))),m.a.createElement(d.a,null,m.a.createElement(E.a,Object.assign({},e.inputAddress,{value:k.address,handleChange:F})),m.a.createElement(E.a,Object.assign({},e.inputPoblation,{value:k.poblation,handleChange:F})),m.a.createElement(E.a,Object.assign({},e.inputEmail,{value:k.email,handleChange:F}))),m.a.createElement(d.a,null,m.a.createElement(E.a,Object.assign({},e.inputPhone,{value:k.phone_1,handleChange:F})),m.a.createElement(E.a,Object.assign({},e.inputPhone2,{value:k.phone_2,handleChange:F}))),m.a.createElement(d.a,null,m.a.createElement(E.a,Object.assign({},e.inputCountry,{value:k.id_country,handleChange:F}),m.a.createElement("option",{value:""},"--Seleccione--"),w.map((function(e,a){return m.a.createElement("option",{value:e.id,key:a},e.name)}))),m.a.createElement(E.a,Object.assign({},e.inputCity,{value:k.id_city,handleChange:F}),m.a.createElement("option",{value:""},"--Seleccione--"),S.map((function(e,a){return m.a.createElement("option",{value:e.id,key:a},e.name)})))),m.a.createElement(d.a,{className:"justify-content-center"},m.a.createElement(p.a,{sm:4,md:4,lg:4},m.a.createElement(b.a,{type:"submit",size:"sm",variant:"primary",block:!0},"Guardar")),m.a.createElement(p.a,{sm:4,md:4,lg:4},m.a.createElement(b.a,{type:"submit",size:"sm",variant:"danger",block:!0,onClick:function(){D(!1)}},"Volver")))))))};j.defaultProps={inputRut:{type:"text",required:!0,name:"rut",label:"Rut",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputName:{type:"text",required:!0,name:"name",label:"Nombre",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputLastNames:{type:"text",required:!0,name:"last_names",label:"Apellidos",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPoblation:{type:"text",required:!1,name:"poblation",label:"Poblaci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputAddress:{type:"textarea",required:!1,name:"address",label:"Direcci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputCountry:{type:"select",required:!0,name:"id_country",label:"Pa\xeds",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputCity:{type:"select",required:!0,name:"id_city",label:"Ciudad",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputEmail:{type:"email",required:!1,name:"email",label:"Email",messageErrors:["Requerido*,"," Formato tipo Email*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPhone:{type:"number",required:!1,name:"phone_1",label:"Tel\xe9fono Principal",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputPhone2:{type:"number",required:!1,name:"phone_2",label:"Telefono Secundario",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"}},a.a=j},738:function(e,a,t){"use strict";t.r(a);var n=t(113),r=t(44),l=t(18),c=t(30),o=t(1),s=t.n(o),i=t(31),m=t(567),u=t(568),d=t(282),p=t(10),g=t(280),b=t(800),E=t(112),f=t(288),_=t(25),h=t.n(_),v=t(34),y=t(13),j=t(146),O=t(571),k=t(595),x=t(289),C=!1,q=function(e){var a=Object(o.useState)(!1),t=Object(c.a)(a,2),i=t[0],_=t[1],q=Object(o.useState)([]),w=Object(c.a)(q,2),N=w[0],P=w[1],R=Object(o.useState)([]),S=Object(c.a)(R,2),z=S[0],M=S[1],B=Object(o.useState)([]),F=Object(c.a)(B,2),D=F[0],T=F[1],I=Object(o.useState)([]),Y=Object(c.a)(I,2),H=Y[0],V=Y[1],A=Object(o.useState)(""),G=Object(c.a)(A,2),L=G[0],U=G[1],J=Object(o.useState)(""),W=Object(c.a)(J,2),K=W[0],Q=W[1],X=Object(o.useState)(!1),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1],ae=Object(o.useState)(!1),te=Object(c.a)(ae,2),ne=te[0],re=te[1],le=Object(o.useState)([]),ce=Object(c.a)(le,2),oe=ce[0],se=ce[1],ie=Object(o.useState)(""),me=Object(c.a)(ie,2),ue=(me[0],me[1]),de=Object(o.useState)(""),pe=Object(c.a)(de,2),ge=(pe[0],pe[1]),be=Object(o.useState)(""),Ee=Object(c.a)(be,2),fe=Ee[0],_e=Ee[1],he=Object(o.useState)(null),ve=Object(c.a)(he,2),ye=ve[0],je=ve[1],Oe=Object(o.useState)(Object(l.a)({number:"",id_housing_complexe:"",id_block_mzna:"",id_type_ownership:"",number_rooms:"",number_bathrooms:"",address:"",square_mtr:"",id_models:"",date_signature_writing:"",date_inscription_conservative:"",date_delivery_ownership:"",id_client_ownership:"",id_client_lessee:"",file:"",parkings:[],cellars:[],user:"",password:""},"file","")),ke=Object(c.a)(Oe,2),xe=ke[0],Ce=ke[1],qe=Object(o.useRef)(null);Object(o.useEffect)((function(){if(e.config_ss&&Object.keys(e.config_ss).length>0)return we(),qe.current.focus(),function(){C=!1};y.b.error("Debe hacer su configuraci\xf3n primero"),setTimeout((function(){e.history.replace("/masters/config")}),1e3)}),[]),Object(o.useMemo)((function(){[]}),[]);var we=function(){var a=[h.a.get(v.a+"housing_complexe"),h.a.get(v.a+"master_block"),h.a.get(v.a+"params_model_property"),h.a.get(v.a+"type_ownership"),h.a.get(v.a+"client")];e.match.params.id&&a.push(h.a.get(v.a+"masters_ownership/"+e.match.params.id)),Promise.all(a).then((function(e){P(e[0].data),M(e[1].data),V(e[2].data),T(e[3].data),se(e[4].data),e[5]&&(Ce({number:e[5].data.number,id_housing_complexe:e[5].data.id_housing_complexe,id_block_mzna:e[5].data.id_block_mzna,id_type_ownership:e[5].data.id_type_ownership,number_rooms:e[5].data.number_rooms,number_bathrooms:e[5].data.number_bathrooms,address:e[5].data.address,square_mtr:e[5].data.square_mtr,id_models:e[5].data.id_models,date_signature_writing:x(e[5].data.date_signature_writing).format("YYYY-MM-DD"),date_inscription_conservative:x(e[5].data.date_inscription_conservative).format("YYYY-MM-DD"),date_delivery_ownership:x(e[5].data.date_delivery_ownership).format("YYYY-MM-DD"),id_client_ownership:e[5].data.id_client_ownership,id_client_lessee:e[5].data.id_client_lessee,file:e[5].data.file,parkings:e[5].data.parkings.length>0?e[5].data.parkings.filter((function(e){return 2==e.type})).map((function(e){return e.name})):[],cellars:e[5].data.parkings.length>0?e[5].data.parkings.filter((function(e){return 1==e.type})).map((function(e){return e.name})):[],user:e[5].data.user,password:"",id:e[5].data.id}),_e(e[5].data.file))})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},Ne=function(e){e.persist();var a=e.target.value;"id_client_lessee"===e.target.name||"id_client_ownership"===e.target.name?(a=(a=a?a.split("-").join(""):a)?a.substring(0,a.length-1)+"-"+a.substring(a.length-1):a,Ce(Object(r.a)(Object(r.a)({},xe),{},Object(l.a)({},e.target.name,a)))):Ce(Object(r.a)(Object(r.a)({},xe),{},Object(l.a)({},e.target.name,e.target.value)))},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&we(),ee(!$)},Re=function(){e.history.replace("/masters/ownerships")},Se=function(){Ce(Object(l.a)({number:"",id_housing_complexe:"",id_block_mzna:"",id_type_ownership:"",number_rooms:"",number_bathrooms:"",address:"",square_mtr:"",id_models:"",date_signature_writing:"",date_inscription_conservative:"",date_delivery_ownership:"",id_client_ownership:"",id_client_lessee:"",file:"",parkings:[],cellars:[],user:"",password:""},"file","")),_(!1),qe.current.focus(),U(""),Q(""),ue(""),ge(""),_e(""),je(null)},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];"lesee"===e?C=!0:"ownership"===e&&(C=!1),ne||ee(!1),re(!ne)},Me=function(e,a){var t=e.target.value,n=oe.find((function(e){return e.rut===t}));n&&("lesee"===a?Q(n.name+" "+n.last_names):U(n.name+" "+n.last_names))},Be=function(e){if("parking"===e){var a=document.getElementById("name_parking").value;document.getElementById("name_parking").value="",a?Ce(Object(r.a)(Object(r.a)({},xe),{},{parkings:[].concat(Object(n.a)(xe.parkings),[a])})):y.b.error("El campo estacionamiento no puede estar vacio")}else{var t=document.getElementById("name_celler").value;document.getElementById("name_celler").value="",t?Ce(Object(r.a)(Object(r.a)({},xe),{},{cellars:[].concat(Object(n.a)(xe.cellars),[t])})):y.b.error("El campo bodega no puede estar vacio")}},Fe=function(e,a){Ce("parking"===e?Object(r.a)(Object(r.a)({},xe),{},{parkings:xe.parkings.filter((function(e){return e!==a}))}):Object(r.a)(Object(r.a)({},xe),{},{cellars:xe.cellars.filter((function(e){return e!==a}))}))};return s.a.createElement(m.a,null,s.a.createElement(u.a,{className:"containerDiv"},s.a.createElement(d.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},s.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),s.a.createElement("br",null),s.a.createElement("br",null)),s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement(p.a,{onSubmit:function(e){var a=e.currentTarget;if(e.preventDefault(),!1===a.checkValidity())return e.stopPropagation(),void _(!0);var t=Object.assign({},xe),n=new FormData;Object.keys(xe).forEach((function(e,a){n.append(e,xe[e])})),ye&&n.append("document",ye),t.id?h.a.put(v.a+"masters_ownership/"+t.id,n).then((function(e){y.b.success("Registro Modificado"),Se(),setTimeout((function(){Re()}),1e3)})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")})):h.a.post(v.a+"masters_ownership",n).then((function(e){y.b.success("Registro Creado"),Se()})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:i},s.a.createElement(u.a,null,s.a.createElement(f.a,{type:"text",required:!0,name:"number",label:"N\xfamero",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:xe.number,handleChange:Ne,ref:qe}),s.a.createElement(E.a,{type:"select",required:!0,name:"id_housing_complexe",label:"Conjunto Habitacional",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:xe.id_housing_complexe,handleChange:Ne},s.a.createElement("option",{value:""},"--Seleccione--"),N.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.name)}))),s.a.createElement(E.a,{type:"select",required:!0,name:"id_type_ownership",label:"Tipo Vivienda",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:xe.id_type_ownership,handleChange:Ne},s.a.createElement("option",{value:""},"--Seleccione--"),D.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.name)})))),s.a.createElement(u.a,null,s.a.createElement(E.a,{type:"number",required:!0,name:"number_rooms",label:"Cantidad. Dormitorios",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:xe.number_rooms,handleChange:Ne}),s.a.createElement(E.a,{type:"number",required:!0,name:"number_bathrooms",label:"Cantidad Ba\xf1os",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:xe.number_bathrooms,handleChange:Ne}),s.a.createElement(E.a,{type:"textarea",required:!1,name:"address",label:"Direcci\xf3n",rows:1,messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:xe.address,handleChange:Ne})),s.a.createElement(u.a,null,s.a.createElement(E.a,{type:"select",required:!1,name:"id_block_mzna",label:"Block Mzna",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:xe.id_block_mzna,handleChange:Ne},s.a.createElement("option",{value:""},"--Seleccione--"),z.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.name)})))),s.a.createElement(u.a,null,s.a.createElement(E.a,{type:"number",required:!1,name:"square_mtr",label:"Metros Cuadrados",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6",value:xe.square_mtr,handleChange:Ne}),s.a.createElement(E.a,{type:"select",required:!0,name:"id_models",label:"Modelo",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6",value:xe.id_models,handleChange:Ne},s.a.createElement("option",{value:""},"--Seleccione--"),H.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.name)})))),s.a.createElement(u.a,null,s.a.createElement(d.a,{sm:5,md:5,lg:5},s.a.createElement("label",null,s.a.createElement("b",null,"Bodega")),s.a.createElement("input",{type:"text",name:"name_celler",label:"Bodega",id:"name_celler",className:"form-control form-control-sm",size:"sm"})),s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement(g.a,{type:"button",variant:"success",className:"margin_col",size:"sm",block:!0,onClick:function(){Be("celler")}},s.a.createElement(j.d,null))),s.a.createElement(d.a,{sm:5,md:5,lg:5},s.a.createElement("label",null,s.a.createElement("b",null,"Estacionamiento")),s.a.createElement("input",{type:"text",name:"name_parking",id:"name_parking",className:"form-control form-control-sm",size:"sm"})),s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement(g.a,{type:"button",variant:"success",className:"margin_col",size:"sm",block:!0,onClick:function(){Be("parking")}},s.a.createElement(j.d,null)))),s.a.createElement(u.a,null,s.a.createElement(d.a,{sm:6,md:6,lg:6},s.a.createElement("br",null),xe.cellars.map((function(e,a){return s.a.createElement("h6",null,e," ",s.a.createElement(g.a,{variant:"danger",size:"sm",onClick:function(){Fe("cellar",e)}},s.a.createElement(j.k,null)))}))),s.a.createElement(d.a,{sm:6,md:6,lg:6},s.a.createElement("br",null),xe.parkings.map((function(e,a){return s.a.createElement("h6",null,e," ",s.a.createElement(g.a,{variant:"danger",size:"sm",onClick:function(){Fe("parking",e)}},s.a.createElement(j.k,null)))})))),s.a.createElement("br",null),s.a.createElement(u.a,null,s.a.createElement(E.a,{type:"date",required:!1,name:"date_signature_writing",label:"Fecha Firma Escritura",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:xe.date_signature_writing,handleChange:Ne}),s.a.createElement(E.a,{type:"date",required:!1,name:"date_inscription_conservative",label:"Fecha Inscripci\xf3n Conservador",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:xe.date_inscription_conservative,handleChange:Ne}),s.a.createElement(E.a,{type:"date",required:!1,name:"date_delivery_ownership",label:"Fecha Entrega Propietario",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:xe.date_delivery_ownership,handleChange:Ne})),s.a.createElement(u.a,null,s.a.createElement(d.a,{sm:3,md:3,lg:3},s.a.createElement(u.a,null,s.a.createElement(E.a,{type:"text",required:!0,name:"id_client_ownership",label:"Propietario",messageErrors:["Requerido*"],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12",value:xe.id_client_ownership,handleChange:Ne,handleOnBlur:function(e){Me(e,"ownership")}})),s.a.createElement(u.a,null,s.a.createElement(d.a,{sm:12,md:12,lg:12},L?s.a.createElement(s.a.Fragment,null,L,s.a.createElement("br",null),s.a.createElement("br",null)):""))),s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement(g.a,{variant:"info",className:"margin_col",block:!0,size:"sm",onClick:function(){return ze("ownership")}}," ",s.a.createElement(j.d,null)," ")),s.a.createElement(d.a,{sm:3,md:3,lg:3},s.a.createElement(u.a,null,s.a.createElement(E.a,{type:"text",required:!1,name:"id_client_lessee",label:"Arrendatario:",messageErrors:["Requerido*"],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12",value:xe.id_client_lessee,handleChange:Ne,handleOnBlur:function(e){Me(e,"lesee")}})),s.a.createElement(u.a,null,s.a.createElement(d.a,{sm:12,md:12,lg:12},K?s.a.createElement(s.a.Fragment,null,K,s.a.createElement("br",null),s.a.createElement("br",null)):""))),s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement(g.a,{variant:"info",className:"margin_col",block:!0,size:"sm",onClick:function(){return ze("lesee")}}," ",s.a.createElement(j.d,null)," ")),s.a.createElement(d.a,{sm:4,md:4,lg:4},s.a.createElement("h6",{className:"margin_col"},"Mail:"))),s.a.createElement(u.a,null,s.a.createElement(E.a,{type:"text",required:!0,name:"user",label:"Usuario Acceso (a sistema online):",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6",value:xe.user,handleChange:Ne}),s.a.createElement(E.a,{type:"password",required:!e.match.params.id,name:"password",label:"Clave Acceso (a sistema online):",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6",value:xe.password,handleChange:Ne})),s.a.createElement(u.a,null,s.a.createElement(d.a,{sm:3,md:3,lg:3},s.a.createElement(g.a,{block:!0,size:"sm",variant:"secondary",onClick:function(){document.getElementById("input_document").click()}},"Documento Propietario"),s.a.createElement("input",{accept:e.config_ss?e.config_ss.valid_format_documents:"",type:"file",id:"input_document",style:{display:"none"},onChange:function(a){-1!==e.config_ss.valid_format_documents.indexOf(a.target.files[0].type.split("/")[1])?(je(a.target.files[0]),_e(a.target.files[0].name)):(y.b.error("El tipo de archivo no es valido"),document.getElementById("input_document").value="",document.getElementById("input_document").src="")}})),s.a.createElement(d.a,{sm:4,md:4,lg:4},"null"!==fe&&fe?fe:"")),s.a.createElement(u.a,null,s.a.createElement(d.a,{sm:12,md:12,lg:12},"null"!==fe&&fe?s.a.createElement(s.a.Fragment,null,s.a.createElement("b",null,xe.file),"\xa0\xa0",s.a.createElement(g.a,{size:"sm",variant:"danger",type:"button",onClick:function(){return e=xe.file,void h.a.delete(v.a+"masters_ownership_destroy_file/"+e+"/"+xe.id).then((function(e){y.b.success("Archivo eliminado"),Ce(Object(r.a)(Object(r.a)({},xe),{},{file:""}))})).catch((function(e){e.response?y.b.error(e.response.data.message):(console.log(e),y.b.error("Error, contacte con soporte"))}));var e}},s.a.createElement(j.k,null))):"")),s.a.createElement("br",null),s.a.createElement(u.a,{className:"justify-content-center"},s.a.createElement(d.a,{sm:4,md:4,lg:4},s.a.createElement(g.a,{type:"submit",size:"sm",variant:"primary",block:!0},"Guardar")),s.a.createElement(d.a,{sm:4,md:4,lg:4},s.a.createElement(g.a,{type:"submit",size:"sm",variant:"danger",block:!0,onClick:Re},"Volver")))))),s.a.createElement(b.a,{show:ne,onHide:ze,size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0},s.a.createElement(b.a.Header,{closeButton:!0,className:"header_dark"},s.a.createElement(b.a.Title,{id:"contained-modal-title-vcenter"},"Clientes registrados")),s.a.createElement(b.a.Body,null,s.a.createElement(u.a,null,$?s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement(k.a,Object.assign({isModal:!0,showTable:Pe},e))):s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement(u.a,{className:"justify-content-center"},s.a.createElement(d.a,{sm:4,md:4,lg:4,xs:6},s.a.createElement(g.a,{variant:"secondary",block:!0,onClick:Pe},"Crear Cliente ",s.a.createElement(j.d,null)))),s.a.createElement("br",null),s.a.createElement(u.a,null,s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement(O.a,{columns:[{Header:"Rut",accessor:"rut",Cell:function(e){var a=e.cell.row.original;return s.a.createElement(g.a,{variant:"link",onClick:function(){var e;e=a,C?(Ce(Object(r.a)(Object(r.a)({},xe),{},{id_client_lessee:e.rut})),Q(e.name+" "+e.last_names)):(Ce(Object(r.a)(Object(r.a)({},xe),{},{id_client_ownership:e.rut})),U(e.name+" "+e.last_names)),re(!1)}},a.rut)}},{Header:"Nombre",accessor:function(e){return[e.name+" "+e.last_names]}},{Header:"Direcci\xf3n",accessor:"address"},{Header:"Email",accessor:"email"}],data:oe})))))),s.a.createElement(b.a.Footer,null,s.a.createElement(g.a,{variant:"secondary",onClick:ze},"cerrar"))))};q.defaultProps={inputNumber:{type:"text",required:!0,name:"rut",label:"Rut",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"}},a.default=Object(i.b)((function(e){return{config_ss:e.configs.config}}),{})(q)}}]);
//# sourceMappingURL=63.a67345c3.chunk.js.map