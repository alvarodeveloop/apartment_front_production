(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[62],{565:function(e,a,t){"use strict";var n=t(29),r=t(569),l=t(0),c=t.n(l),s=t(572),o=t(570),i=t(571),m=t(275);function u(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return u=function(){return e},e}var d=s.a.div(u());function p(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter,l=n.length;return c.a.createElement("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(l," registros..."),className:"inputPageFilter"})}function g(e,a,t){return Object(i.a)(e,t,{keys:[function(e){return e.values[a]}]})}function b(e){var a=e.columns,t=e.data,r=e.displayPaginationUp,l=e.letrasChicas,s=c.a.useMemo((function(){return{fuzzyText:g,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),i=c.a.useMemo((function(){return{Filter:p}}),[]),u=Object(o.useTable)({columns:a,data:t,defaultColumn:i,filterTypes:s,initialState:{pageIndex:0}},o.useFilters,o.useSortBy,o.usePagination),d=u.getTableProps,b=u.getTableBodyProps,E=u.headerGroups,f=u.page,h=u.prepareRow,_=u.canPreviousPage,v=u.canNextPage,y=u.pageOptions,j=u.pageCount,O=u.gotoPage,k=u.nextPage,C=u.previousPage,x=u.setPageSize,N=u.state,q=N.pageIndex,w=N.pageSize;return c.a.createElement("div",{className:"table-responsive"},r?c.a.createElement("div",{className:"pagination"},c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(0)},disabled:!_},"<<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C()},disabled:!_},"<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},">")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(j-1)},disabled:!v},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,q+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:q+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;O(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:w,onChange:function(e){x(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",c.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),c.a.createElement("thead",null,E.map((function(e,a){return c.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:a}),e.headers.map((function(e,a){return c.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:l?"14px":"15px"},key:a}),e.render("Header"),c.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),c.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),c.a.createElement("tbody",Object.assign({},b(),{className:"text-center",style:{fontSize:l?"13px":"15px"}}),f.map((function(e,a){return h(e)||c.a.createElement("tr",Object.assign({},e.getRowProps(),{key:a+"-"}),e.cells.map((function(e,a){return c.a.createElement("td",Object.assign({},e.getCellProps(),{key:a+"td"}),e.render("Cell"))})))})))),c.a.createElement("div",{className:"pagination"},c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(0)},disabled:!_},"<<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C()},disabled:!_},"<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},">")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(j-1)},disabled:!v},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,q+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:q+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;O(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:w,onChange:function(e){x(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}g.autoRemove=function(e){return!e};a.a=function(e){var a=e.data,t=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return c.a.createElement(d,null,c.a.createElement(b,{data:a,columns:t,displayPaginationUp:n,letrasChicas:r}))}},566:function(e,a,t){"use strict";var n=t(29),r=t(0),l=t.n(r),c=t(26),s=(t(282),l.a.forwardRef((function(e,a){var t,r=e.cols?e.cols:"col-md-6 col-sm-6";return"select"!==e.type&&"textarea"!==e.type?l.a.createElement(c.a.Group,{className:r},e.required?l.a.createElement(c.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(c.a.Label,{className:"fontBold"},e.label),l.a.createElement(c.a.Control,(t={ref:a,id:e.name,type:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,readOnly:!!e.readonly&&e.readonly,className:e.className?e.className:"",step:e.step?e.step:"",onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){}},Object(n.a)(t,"className","form-control-sm"),Object(n.a)(t,"disabled",e.disabled),t)),l.a.createElement(c.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"select"===e.type?l.a.createElement(c.a.Group,{className:r},e.required?l.a.createElement(c.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(c.a.Label,{className:"fontBold"},e.label),l.a.createElement(c.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",readOnly:!!e.readonly&&e.readonly,required:e.required,multiple:!!e.multiple&&e.multiple,ref:a||null,className:"form-control-sm",disabled:e.disabled},e.children),l.a.createElement(c.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"textarea"===e.type?l.a.createElement(c.a.Group,{className:r},e.required?l.a.createElement(c.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(c.a.Label,{className:"fontBold"},e.label),l.a.createElement(c.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,rows:e.rows?e.rows:2,readOnly:!!e.readonly&&e.readonly,onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){},ref:a||null,className:"form-control-sm",disabled:e.disabled}),l.a.createElement(c.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):void 0})));a.a=s},586:function(e,a,t){"use strict";var n=t(29),r=t(79),l=t(68),c=t.n(l),s=t(110),o=t(78),i=t(0),m=t.n(i),u=t(562),d=t(563),p=t(277),g=t(26),b=t(275),E=t(143),f=t(566),h=t(40),_=t.n(h),v=t(51),y=t(23),j=function(e){var a=Object(i.useState)(!1),t=Object(o.a)(a,2),l=t[0],h=t[1],j=Object(i.useState)({name:"",last_names:"",rut:"",email:"",id_city:"",id_country:"",poblation:"",phone_1:"",phone_2:"",address:""}),O=Object(o.a)(j,2),k=O[0],C=O[1],x=Object(i.useState)([]),N=Object(o.a)(x,2),q=N[0],w=N[1],P=Object(i.useState)([]),R=Object(o.a)(P,2),S=R[0],z=R[1],B=Object(i.useRef)(null);Object(i.useEffect)((function(){F(),B.current.focus()}),[]);var F=function(){var a=[_.a.get(v.a+"master_countrys")];e.match.params.id&&a.push(_.a.get(v.a+"client/"+e.match.params.id)),Promise.all(a).then(function(){var e=Object(s.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(a[0].data),a[1]&&(C({name:a[1].data.name,last_names:a[1].data.last_names,rut:a[1].data.rut,email:a[1].data.email,id_city:a[1].data.id_city,id_country:a[1].data.id_country,poblation:a[1].data.poblation,phone_1:a[1].data.phone_1,phone_2:a[1].data.phone_2,address:a[1].data.address,id:a[1].data.id}),z((function(e){return a[0].data.find((function(e){return e.id==a[1].data.id_country})).cities})));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},M=function(e){if(e.persist(),"id_country"===e.target.name)z((function(a){return q.find((function(a){return a.id==e.target.value})).cities})),C(Object(r.a)(Object(r.a)({},k),{},{id_country:e.target.value,id_city:""}));else if("rut"===e.target.name){var a=e.target.value;(a=a.split("-").join(""))&&(a=a.substring(0,a.length-1)+"-"+a.substring(a.length-1)),C(Object(r.a)(Object(r.a)({},k),{},{rut:a}))}else C(Object(r.a)(Object(r.a)({},k),{},Object(n.a)({},e.target.name,e.target.value)))},D=function(a){e.isModal?e.showTable(a):e.history.replace("/masters/clients")},T=function(){C({name:"",last_names:"",rut:"",email:"",id_city:"",id_country:"",poblation:"",phone_1:"",phone_2:"",address:""}),h(!1),B.current.focus()};return m.a.createElement(u.a,null,m.a.createElement(d.a,{className:""},m.a.createElement(p.a,{sm:12,md:12,lg:12},m.a.createElement(g.a,{onSubmit:function(a){var t=a.currentTarget;if(a.preventDefault(),!1===t.checkValidity())return a.stopPropagation(),void h(!0);var n=Object.assign({},k);n.id?_.a.put(v.a+"client/"+n.id,n).then((function(e){y.b.success("Registro Modificado"),D()})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")})):_.a.post(v.a+"client",n).then((function(a){y.b.success("Registro Creado"),T(),e.isModal&&D(!0)})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:l},m.a.createElement(d.a,null,m.a.createElement(f.a,Object.assign({},e.inputRut,{value:k.rut,handleChange:M,ref:B})),m.a.createElement(E.a,Object.assign({},e.inputName,{value:k.name,handleChange:M})),m.a.createElement(E.a,Object.assign({},e.inputLastNames,{value:k.last_names,handleChange:M}))),m.a.createElement(d.a,null,m.a.createElement(E.a,Object.assign({},e.inputAddress,{value:k.address,handleChange:M})),m.a.createElement(E.a,Object.assign({},e.inputPoblation,{value:k.poblation,handleChange:M})),m.a.createElement(E.a,Object.assign({},e.inputEmail,{value:k.email,handleChange:M}))),m.a.createElement(d.a,null,m.a.createElement(E.a,Object.assign({},e.inputPhone,{value:k.phone_1,handleChange:M})),m.a.createElement(E.a,Object.assign({},e.inputPhone2,{value:k.phone_2,handleChange:M}))),m.a.createElement(d.a,null,m.a.createElement(E.a,Object.assign({},e.inputCountry,{value:k.id_country,handleChange:M}),m.a.createElement("option",{value:""},"--Seleccione--"),q.map((function(e,a){return m.a.createElement("option",{value:e.id,key:a},e.name)}))),m.a.createElement(E.a,Object.assign({},e.inputCity,{value:k.id_city,handleChange:M}),m.a.createElement("option",{value:""},"--Seleccione--"),S.map((function(e,a){return m.a.createElement("option",{value:e.id,key:a},e.name)})))),m.a.createElement(d.a,{className:"justify-content-center"},m.a.createElement(p.a,{sm:4,md:4,lg:4},m.a.createElement(b.a,{type:"submit",size:"sm",variant:"primary",block:!0},"Guardar")),m.a.createElement(p.a,{sm:4,md:4,lg:4},m.a.createElement(b.a,{type:"submit",size:"sm",variant:"danger",block:!0,onClick:function(){D(!1)}},"Volver")))))))};j.defaultProps={inputRut:{type:"text",required:!0,name:"rut",label:"Rut",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputName:{type:"text",required:!0,name:"name",label:"Nombre",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputLastNames:{type:"text",required:!0,name:"last_names",label:"Apellidos",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPoblation:{type:"text",required:!1,name:"poblation",label:"Poblaci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputAddress:{type:"textarea",required:!1,name:"address",label:"Direcci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputCountry:{type:"select",required:!0,name:"id_country",label:"Pa\xeds",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputCity:{type:"select",required:!0,name:"id_city",label:"Ciudad",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputEmail:{type:"email",required:!1,name:"email",label:"Email",messageErrors:["Requerido*,"," Formato tipo Email*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPhone:{type:"number",required:!1,name:"phone_1",label:"Tel\xe9fono Principal",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputPhone2:{type:"number",required:!1,name:"phone_2",label:"Telefono Secundario",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"}},a.a=j},732:function(e,a,t){"use strict";t.r(a);var n=t(109),r=t(79),l=t(29),c=t(78),s=t(0),o=t.n(s),i=t(36),m=t(562),u=t(563),d=t(277),p=t(26),g=t(275),b=t(790),E=t(143),f=t(566),h=t(40),_=t.n(h),v=t(51),y=t(23),j=t(554),O=t(565),k=t(586),C=t(283),x=!1,N=function(e){var a=Object(s.useState)(!1),t=Object(c.a)(a,2),i=t[0],h=t[1],N=Object(s.useState)([]),q=Object(c.a)(N,2),w=q[0],P=q[1],R=Object(s.useState)([]),S=Object(c.a)(R,2),z=S[0],B=S[1],F=Object(s.useState)([]),M=Object(c.a)(F,2),D=M[0],T=M[1],I=Object(s.useState)([]),Y=Object(c.a)(I,2),H=Y[0],L=Y[1],U=Object(s.useState)(""),V=Object(c.a)(U,2),A=V[0],G=V[1],K=Object(s.useState)(""),J=Object(c.a)(K,2),W=J[0],Q=J[1],X=Object(s.useState)(!1),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1],ae=Object(s.useState)(!1),te=Object(c.a)(ae,2),ne=te[0],re=te[1],le=Object(s.useState)([]),ce=Object(c.a)(le,2),se=ce[0],oe=ce[1],ie=Object(s.useState)(""),me=Object(c.a)(ie,2),ue=(me[0],me[1]),de=Object(s.useState)(""),pe=Object(c.a)(de,2),ge=(pe[0],pe[1]),be=Object(s.useState)(""),Ee=Object(c.a)(be,2),fe=Ee[0],he=Ee[1],_e=Object(s.useState)(null),ve=Object(c.a)(_e,2),ye=ve[0],je=ve[1],Oe=Object(s.useState)(Object(l.a)({number:"",id_housing_complexe:"",id_block_mzna:"",id_type_ownership:"",number_rooms:"",number_bathrooms:"",address:"",square_mtr:"",id_models:"",date_signature_writing:"",date_inscription_conservative:"",date_delivery_ownership:"",id_client_ownership:"",id_client_lessee:"",file:"",parkings:[],cellars:[],user:"",password:""},"file","")),ke=Object(c.a)(Oe,2),Ce=ke[0],xe=ke[1],Ne=Object(s.useRef)(null);Object(s.useEffect)((function(){if(e.config_ss&&Object.keys(e.config_ss).length>0)return qe(),Ne.current.focus(),function(){x=!1};y.b.error("Debe hacer su configuraci\xf3n primero"),setTimeout((function(){e.history.replace("/masters/config")}),1e3)}),[]),Object(s.useMemo)((function(){[]}),[]);var qe=function(){var a=[_.a.get(v.a+"housing_complexe"),_.a.get(v.a+"master_block"),_.a.get(v.a+"master_models"),_.a.get(v.a+"type_ownership"),_.a.get(v.a+"client")];e.match.params.id&&a.push(_.a.get(v.a+"masters_ownership/"+e.match.params.id)),Promise.all(a).then((function(e){P(e[0].data),B(e[1].data),L(e[2].data),T(e[3].data),oe(e[4].data),e[5]&&(xe({number:e[5].data.number,id_housing_complexe:e[5].data.id_housing_complexe,id_block_mzna:e[5].data.id_block_mzna,id_type_ownership:e[5].data.id_type_ownership,number_rooms:e[5].data.number_rooms,number_bathrooms:e[5].data.number_bathrooms,address:e[5].data.address,square_mtr:e[5].data.square_mtr,id_models:e[5].data.id_models,date_signature_writing:C(e[5].data.date_signature_writing).format("YYYY-MM-DD"),date_inscription_conservative:C(e[5].data.date_inscription_conservative).format("YYYY-MM-DD"),date_delivery_ownership:C(e[5].data.date_delivery_ownership).format("YYYY-MM-DD"),id_client_ownership:e[5].data.id_client_ownership,id_client_lessee:e[5].data.id_client_lessee,file:e[5].data.file,parkings:e[5].data.parkings.length>0?e[5].data.parkings.filter((function(e){return 2==e.type})).map((function(e){return e.name})):[],cellars:e[5].data.parkings.length>0?e[5].data.parkings.filter((function(e){return 1==e.type})).map((function(e){return e.name})):[],user:e[5].data.user,password:"",id:e[5].data.id}),he(e[5].data.file))})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},we=function(e){e.persist();var a=e.target.value;"id_client_lessee"===e.target.name||"id_client_ownership"===e.target.name?(a=(a=a?a.split("-").join(""):a)?a.substring(0,a.length-1)+"-"+a.substring(a.length-1):a,xe(Object(r.a)(Object(r.a)({},Ce),{},Object(l.a)({},e.target.name,a)))):xe(Object(r.a)(Object(r.a)({},Ce),{},Object(l.a)({},e.target.name,e.target.value)))},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&qe(),ee(!$)},Re=function(){e.history.replace("/masters/ownerships")},Se=function(){xe(Object(l.a)({number:"",id_housing_complexe:"",id_block_mzna:"",id_type_ownership:"",number_rooms:"",number_bathrooms:"",address:"",square_mtr:"",id_models:"",date_signature_writing:"",date_inscription_conservative:"",date_delivery_ownership:"",id_client_ownership:"",id_client_lessee:"",file:"",parkings:[],cellars:[],user:"",password:""},"file","")),h(!1),Ne.current.focus(),G(""),Q(""),ue(""),ge(""),he(""),je(null)},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];"lesee"===e?x=!0:"ownership"===e&&(x=!1),ne||ee(!1),re(!ne)},Be=function(e,a){var t=e.target.value,n=se.find((function(e){return e.rut===t}));n&&("lesee"===a?Q(n.name+" "+n.last_names):G(n.name+" "+n.last_names))},Fe=function(e){if("parking"===e){var a=document.getElementById("name_parking").value;document.getElementById("name_parking").value="",a?xe(Object(r.a)(Object(r.a)({},Ce),{},{parkings:[].concat(Object(n.a)(Ce.parkings),[a])})):y.b.error("El campo estacionamiento no puede estar vacio")}else{var t=document.getElementById("name_celler").value;document.getElementById("name_celler").value="",t?xe(Object(r.a)(Object(r.a)({},Ce),{},{cellars:[].concat(Object(n.a)(Ce.cellars),[t])})):y.b.error("El campo bodega no puede estar vacio")}},Me=function(e,a){xe("parking"===e?Object(r.a)(Object(r.a)({},Ce),{},{parkings:Ce.parkings.filter((function(e){return e!==a}))}):Object(r.a)(Object(r.a)({},Ce),{},{cellars:Ce.cellars.filter((function(e){return e!==a}))}))};return o.a.createElement(m.a,null,o.a.createElement(u.a,{className:"containerDiv"},o.a.createElement(d.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},o.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement(d.a,{sm:12,md:12,lg:12},o.a.createElement(p.a,{onSubmit:function(e){var a=e.currentTarget;if(e.preventDefault(),!1===a.checkValidity())return e.stopPropagation(),void h(!0);var t=Object.assign({},Ce),n=new FormData;Object.keys(Ce).forEach((function(e,a){n.append(e,Ce[e])})),ye&&n.append("document",ye),t.id?_.a.put(v.a+"masters_ownership/"+t.id,n).then((function(e){y.b.success("Registro Modificado"),Se(),setTimeout((function(){Re()}),1e3)})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")})):_.a.post(v.a+"masters_ownership",n).then((function(e){y.b.success("Registro Creado"),Se()})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:i},o.a.createElement(u.a,null,o.a.createElement(f.a,{type:"text",required:!0,name:"number",label:"N\xfamero",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:Ce.number,handleChange:we,ref:Ne}),o.a.createElement(E.a,{type:"select",required:!0,name:"id_housing_complexe",label:"Conjunto Habitacional",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:Ce.id_housing_complexe,handleChange:we},o.a.createElement("option",{value:""},"--Seleccione--"),w.map((function(e,a){return o.a.createElement("option",{value:e.id,key:a},e.name)}))),o.a.createElement(E.a,{type:"select",required:!0,name:"id_type_ownership",label:"Tipo Vivienda",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:Ce.id_type_ownership,handleChange:we},o.a.createElement("option",{value:""},"--Seleccione--"),D.map((function(e,a){return o.a.createElement("option",{value:e.id,key:a},e.name)})))),o.a.createElement(u.a,null,o.a.createElement(E.a,{type:"number",required:!0,name:"number_rooms",label:"Cantidad. Dormitorios",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:Ce.number_rooms,handleChange:we}),o.a.createElement(E.a,{type:"number",required:!0,name:"number_bathrooms",label:"Cantidad Ba\xf1os",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:Ce.number_bathrooms,handleChange:we}),o.a.createElement(E.a,{type:"textarea",required:!1,name:"address",label:"Direcci\xf3n",rows:1,messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:Ce.address,handleChange:we})),o.a.createElement(u.a,null,o.a.createElement(E.a,{type:"select",required:!1,name:"id_block_mzna",label:"Block Mzna",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:Ce.id_block_mzna,handleChange:we},o.a.createElement("option",{value:""},"--Seleccione--"),z.map((function(e,a){return o.a.createElement("option",{value:e.id,key:a},e.name)})))),o.a.createElement(u.a,null,o.a.createElement(E.a,{type:"number",required:!1,name:"square_mtr",label:"Metros Cuadrados",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6",value:Ce.square_mtr,handleChange:we}),o.a.createElement(E.a,{type:"select",required:!0,name:"id_models",label:"Modelo",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6",value:Ce.id_models,handleChange:we},o.a.createElement("option",{value:""},"--Seleccione--"),H.map((function(e,a){return o.a.createElement("option",{value:e.id,key:a},e.name)})))),o.a.createElement(u.a,null,o.a.createElement(d.a,{sm:5,md:5,lg:5},o.a.createElement("label",null,o.a.createElement("b",null,"Bodega")),o.a.createElement("input",{type:"text",name:"name_celler",label:"Bodega",id:"name_celler",className:"form-control form-control-sm",size:"sm"})),o.a.createElement(d.a,{sm:1,md:1,lg:1},o.a.createElement(g.a,{type:"button",variant:"success",className:"margin_col",size:"sm",block:!0,onClick:function(){Fe("celler")}},o.a.createElement(j.d,null))),o.a.createElement(d.a,{sm:5,md:5,lg:5},o.a.createElement("label",null,o.a.createElement("b",null,"Estacionamiento")),o.a.createElement("input",{type:"text",name:"name_parking",id:"name_parking",className:"form-control form-control-sm",size:"sm"})),o.a.createElement(d.a,{sm:1,md:1,lg:1},o.a.createElement(g.a,{type:"button",variant:"success",className:"margin_col",size:"sm",block:!0,onClick:function(){Fe("parking")}},o.a.createElement(j.d,null)))),o.a.createElement(u.a,null,o.a.createElement(d.a,{sm:6,md:6,lg:6},o.a.createElement("br",null),Ce.cellars.map((function(e,a){return o.a.createElement("h6",null,e," ",o.a.createElement(g.a,{variant:"danger",size:"sm",onClick:function(){Me("cellar",e)}},o.a.createElement(j.j,null)))}))),o.a.createElement(d.a,{sm:6,md:6,lg:6},o.a.createElement("br",null),Ce.parkings.map((function(e,a){return o.a.createElement("h6",null,e," ",o.a.createElement(g.a,{variant:"danger",size:"sm",onClick:function(){Me("parking",e)}},o.a.createElement(j.j,null)))})))),o.a.createElement("br",null),o.a.createElement(u.a,null,o.a.createElement(E.a,{type:"date",required:!1,name:"date_signature_writing",label:"Fecha Firma Escritura",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:Ce.date_signature_writing,handleChange:we}),o.a.createElement(E.a,{type:"date",required:!1,name:"date_inscription_conservative",label:"Fecha Inscripci\xf3n Conservador",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:Ce.date_inscription_conservative,handleChange:we}),o.a.createElement(E.a,{type:"date",required:!1,name:"date_delivery_ownership",label:"Fecha Entrega Propietario",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:Ce.date_delivery_ownership,handleChange:we})),o.a.createElement(u.a,null,o.a.createElement(d.a,{sm:3,md:3,lg:3},o.a.createElement(u.a,null,o.a.createElement(E.a,{type:"text",required:!0,name:"id_client_ownership",label:"Propietario",messageErrors:["Requerido*"],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12",value:Ce.id_client_ownership,handleChange:we,handleOnBlur:function(e){Be(e,"ownership")}})),o.a.createElement(u.a,null,o.a.createElement(d.a,{sm:12,md:12,lg:12},A?o.a.createElement(o.a.Fragment,null,A,o.a.createElement("br",null),o.a.createElement("br",null)):""))),o.a.createElement(d.a,{sm:1,md:1,lg:1},o.a.createElement(g.a,{variant:"info",className:"margin_col",block:!0,size:"sm",onClick:function(){return ze("ownership")}}," ",o.a.createElement(j.d,null)," ")),o.a.createElement(d.a,{sm:3,md:3,lg:3},o.a.createElement(u.a,null,o.a.createElement(E.a,{type:"text",required:!1,name:"id_client_lessee",label:"Arrendatario:",messageErrors:["Requerido*"],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12",value:Ce.id_client_lessee,handleChange:we,handleOnBlur:function(e){Be(e,"lesee")}})),o.a.createElement(u.a,null,o.a.createElement(d.a,{sm:12,md:12,lg:12},W?o.a.createElement(o.a.Fragment,null,W,o.a.createElement("br",null),o.a.createElement("br",null)):""))),o.a.createElement(d.a,{sm:1,md:1,lg:1},o.a.createElement(g.a,{variant:"info",className:"margin_col",block:!0,size:"sm",onClick:function(){return ze("lesee")}}," ",o.a.createElement(j.d,null)," ")),o.a.createElement(d.a,{sm:4,md:4,lg:4},o.a.createElement("h6",{className:"margin_col"},"Mail:"))),o.a.createElement(u.a,null,o.a.createElement(E.a,{type:"text",required:!0,name:"user",label:"Usuario Acceso (a sistema online):",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6",value:Ce.user,handleChange:we}),o.a.createElement(E.a,{type:"password",required:!e.match.params.id,name:"password",label:"Clave Acceso (a sistema online):",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6",value:Ce.password,handleChange:we})),o.a.createElement(u.a,null,o.a.createElement(d.a,{sm:3,md:3,lg:3},o.a.createElement(g.a,{block:!0,size:"sm",variant:"secondary",onClick:function(){document.getElementById("input_document").click()}},"Documento Propietario"),o.a.createElement("input",{accept:e.config_ss?e.config_ss.valid_format_documents:"",type:"file",id:"input_document",style:{display:"none"},onChange:function(a){-1!==e.config_ss.valid_format_documents.indexOf(a.target.files[0].type.split("/")[1])?(je(a.target.files[0]),he(a.target.files[0].name)):(y.b.error("El tipo de archivo no es valido"),document.getElementById("input_document").value="",document.getElementById("input_document").src="")}})),o.a.createElement(d.a,{sm:4,md:4,lg:4},fe||"")),o.a.createElement(u.a,null,o.a.createElement(d.a,{sm:12,md:12,lg:12},fe?o.a.createElement(o.a.Fragment,null,o.a.createElement("b",null,Ce.file),"\xa0\xa0",o.a.createElement(g.a,{size:"sm",variant:"danger",type:"button",onClick:function(){return e=Ce.file,void _.a.delete(v.a+"masters_ownership_destroy_file/"+e+"/"+Ce.id).then((function(e){y.b.success("Archivo eliminado"),xe(Object(r.a)(Object(r.a)({},Ce),{},{file:""}))})).catch((function(e){e.response?y.b.error(e.response.data.message):(console.log(e),y.b.error("Error, contacte con soporte"))}));var e}},o.a.createElement(j.j,null))):"")),o.a.createElement("br",null),o.a.createElement(u.a,{className:"justify-content-center"},o.a.createElement(d.a,{sm:4,md:4,lg:4},o.a.createElement(g.a,{type:"submit",size:"sm",variant:"primary",block:!0},"Guardar")),o.a.createElement(d.a,{sm:4,md:4,lg:4},o.a.createElement(g.a,{type:"submit",size:"sm",variant:"danger",block:!0,onClick:Re},"Volver")))))),o.a.createElement(b.a,{show:ne,onHide:ze,size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0},o.a.createElement(b.a.Header,{closeButton:!0,className:"header_dark"},o.a.createElement(b.a.Title,{id:"contained-modal-title-vcenter"},"Clientes registrados")),o.a.createElement(b.a.Body,null,o.a.createElement(u.a,null,$?o.a.createElement(d.a,{sm:12,md:12,lg:12},o.a.createElement(k.a,Object.assign({isModal:!0,showTable:Pe},e))):o.a.createElement(d.a,{sm:12,md:12,lg:12},o.a.createElement(u.a,{className:"justify-content-center"},o.a.createElement(d.a,{sm:4,md:4,lg:4,xs:6},o.a.createElement(g.a,{variant:"secondary",block:!0,onClick:Pe},"Crear Cliente ",o.a.createElement(j.d,null)))),o.a.createElement("br",null),o.a.createElement(u.a,null,o.a.createElement(d.a,{sm:12,md:12,lg:12},o.a.createElement(O.a,{columns:[{Header:"Rut",accessor:"rut",Cell:function(e){var a=e.cell.row.original;return o.a.createElement(g.a,{variant:"link",onClick:function(){var e;e=a,x?(xe(Object(r.a)(Object(r.a)({},Ce),{},{id_client_lessee:e.rut})),Q(e.name+" "+e.last_names)):(xe(Object(r.a)(Object(r.a)({},Ce),{},{id_client_ownership:e.rut})),G(e.name+" "+e.last_names)),re(!1)}},a.rut)}},{Header:"Nombre",accessor:function(e){return[e.name+" "+e.last_names]}},{Header:"Direcci\xf3n",accessor:"address"},{Header:"Email",accessor:"email"}],data:se})))))),o.a.createElement(b.a.Footer,null,o.a.createElement(g.a,{variant:"secondary",onClick:ze},"cerrar"))))};N.defaultProps={inputNumber:{type:"text",required:!0,name:"rut",label:"Rut",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"}},a.default=Object(i.b)((function(e){return{config_ss:e.configs.config}}),{})(N)}}]);
//# sourceMappingURL=62.2be8726e.chunk.js.map