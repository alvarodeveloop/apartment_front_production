(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[25],{565:function(e,a,t){"use strict";var n=t(29),r=t(569),l=t(0),c=t.n(l),o=t(572),s=t(570),i=t(571),u=t(275);function m(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return m=function(){return e},e}var d=o.a.div(m());function p(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter,l=n.length;return c.a.createElement("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(l," registros..."),className:"inputPageFilter"})}function g(e,a,t){return Object(i.a)(e,t,{keys:[function(e){return e.values[a]}]})}function b(e){var a=e.columns,t=e.data,r=e.displayPaginationUp,l=e.letrasChicas,o=c.a.useMemo((function(){return{fuzzyText:g,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),i=c.a.useMemo((function(){return{Filter:p}}),[]),m=Object(s.useTable)({columns:a,data:t,defaultColumn:i,filterTypes:o,initialState:{pageIndex:0}},s.useFilters,s.useSortBy,s.usePagination),d=m.getTableProps,b=m.getTableBodyProps,E=m.headerGroups,f=m.page,h=m.prepareRow,_=m.canPreviousPage,v=m.canNextPage,y=m.pageOptions,O=m.pageCount,j=m.gotoPage,k=m.nextPage,C=m.previousPage,x=m.setPageSize,w=m.state,N=w.pageIndex,q=w.pageSize;return c.a.createElement("div",{className:"table-responsive"},r?c.a.createElement("div",{className:"pagination"},c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(0)},disabled:!_},"<<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C()},disabled:!_},"<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},">")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(O-1)},disabled:!v},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,N+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:N+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;j(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:q,onChange:function(e){x(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",c.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),c.a.createElement("thead",null,E.map((function(e,a){return c.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:a}),e.headers.map((function(e,a){return c.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:l?"14px":"15px"},key:a}),e.render("Header"),c.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),c.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),c.a.createElement("tbody",Object.assign({},b(),{className:"text-center",style:{fontSize:l?"13px":"15px"}}),f.map((function(e,a){return h(e)||c.a.createElement("tr",Object.assign({},e.getRowProps(),{key:a+"-"}),e.cells.map((function(e,a){return c.a.createElement("td",Object.assign({},e.getCellProps(),{key:a+"td"}),e.render("Cell"))})))})))),c.a.createElement("div",{className:"pagination"},c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(0)},disabled:!_},"<<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C()},disabled:!_},"<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},">")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(O-1)},disabled:!v},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,N+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:N+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;j(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:q,onChange:function(e){x(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}g.autoRemove=function(e){return!e};a.a=function(e){var a=e.data,t=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return c.a.createElement(d,null,c.a.createElement(b,{data:a,columns:t,displayPaginationUp:n,letrasChicas:r}))}},566:function(e,a,t){"use strict";var n=t(29),r=t(0),l=t.n(r),c=t(26),o=(t(282),l.a.forwardRef((function(e,a){var t,r=e.cols?e.cols:"col-md-6 col-sm-6";return"select"!==e.type&&"textarea"!==e.type?l.a.createElement(c.a.Group,{className:r},e.required?l.a.createElement(c.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(c.a.Label,{className:"fontBold"},e.label),l.a.createElement(c.a.Control,(t={ref:a,id:e.name,type:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,readOnly:!!e.readonly&&e.readonly,className:e.className?e.className:"",step:e.step?e.step:"",onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){}},Object(n.a)(t,"className","form-control-sm"),Object(n.a)(t,"disabled",e.disabled),t)),l.a.createElement(c.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"select"===e.type?l.a.createElement(c.a.Group,{className:r},e.required?l.a.createElement(c.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(c.a.Label,{className:"fontBold"},e.label),l.a.createElement(c.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",readOnly:!!e.readonly&&e.readonly,required:e.required,multiple:!!e.multiple&&e.multiple,ref:a||null,className:"form-control-sm",disabled:e.disabled},e.children),l.a.createElement(c.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"textarea"===e.type?l.a.createElement(c.a.Group,{className:r},e.required?l.a.createElement(c.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(c.a.Label,{className:"fontBold"},e.label),l.a.createElement(c.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,rows:e.rows?e.rows:2,readOnly:!!e.readonly&&e.readonly,onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){},ref:a||null,className:"form-control-sm",disabled:e.disabled}),l.a.createElement(c.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):void 0})));a.a=o},580:function(e,a,t){},590:function(e,a,t){"use strict";var n=t(29),r=t(79),l=t(68),c=t.n(l),o=t(110),s=t(78),i=t(0),u=t.n(i),m=t(562),d=t(563),p=t(277),g=t(26),b=t(275),E=t(143),f=t(566),h=t(35),_=t.n(h),v=t(45),y=t(23),O=function(e){var a=Object(i.useState)(!1),t=Object(s.a)(a,2),l=t[0],h=t[1],O=Object(i.useState)({name:"",last_names:"",rut:"",email:"",id_city:"",id_country:"",poblation:"",phone_1:"",phone_2:"",address:""}),j=Object(s.a)(O,2),k=j[0],C=j[1],x=Object(i.useState)([]),w=Object(s.a)(x,2),N=w[0],q=w[1],P=Object(i.useState)([]),S=Object(s.a)(P,2),R=S[0],F=S[1],D=Object(i.useRef)(null);Object(i.useEffect)((function(){H(),D.current.focus()}),[]);var H=function(){var a=[_.a.get(v.a+"master_countrys")];e.match.params.id&&a.push(_.a.get(v.a+"client/"+e.match.params.id)),Promise.all(a).then(function(){var e=Object(o.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(a[0].data),a[1]&&(C({name:a[1].data.name,last_names:a[1].data.last_names,rut:a[1].data.rut,email:a[1].data.email,id_city:a[1].data.id_city,id_country:a[1].data.id_country,poblation:a[1].data.poblation,phone_1:a[1].data.phone_1,phone_2:a[1].data.phone_2,address:a[1].data.address,id:a[1].data.id}),F((function(e){return a[0].data.find((function(e){return e.id==a[1].data.id_country})).cities})));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},z=function(e){if(e.persist(),"id_country"===e.target.name)F((function(a){return N.find((function(a){return a.id==e.target.value})).cities})),C(Object(r.a)(Object(r.a)({},k),{},{id_country:e.target.value,id_city:""}));else if("rut"===e.target.name){var a=e.target.value;(a=a.split("-").join(""))&&(a=a.substring(0,a.length-1)+"-"+a.substring(a.length-1)),C(Object(r.a)(Object(r.a)({},k),{},{rut:a}))}else C(Object(r.a)(Object(r.a)({},k),{},Object(n.a)({},e.target.name,e.target.value)))},T=function(a){e.isModal?e.showTable(a):e.history.replace("/masters/clients")},M=function(){C({name:"",last_names:"",rut:"",email:"",id_city:"",id_country:"",poblation:"",phone_1:"",phone_2:"",address:""}),h(!1),D.current.focus()};return u.a.createElement(m.a,null,u.a.createElement(d.a,{className:""},u.a.createElement(p.a,{sm:12,md:12,lg:12},u.a.createElement(g.a,{onSubmit:function(a){var t=a.currentTarget;if(a.preventDefault(),!1===t.checkValidity())return a.stopPropagation(),void h(!0);var n=Object.assign({},k);n.id?_.a.put(v.a+"client/"+n.id,n).then((function(e){y.b.success("Registro Modificado"),T()})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")})):_.a.post(v.a+"client",n).then((function(a){y.b.success("Registro Creado"),M(),e.isModal&&T(!0)})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:l},u.a.createElement(d.a,null,u.a.createElement(f.a,Object.assign({},e.inputRut,{value:k.rut,handleChange:z,ref:D})),u.a.createElement(E.a,Object.assign({},e.inputName,{value:k.name,handleChange:z})),u.a.createElement(E.a,Object.assign({},e.inputLastNames,{value:k.last_names,handleChange:z}))),u.a.createElement(d.a,null,u.a.createElement(E.a,Object.assign({},e.inputAddress,{value:k.address,handleChange:z})),u.a.createElement(E.a,Object.assign({},e.inputPoblation,{value:k.poblation,handleChange:z})),u.a.createElement(E.a,Object.assign({},e.inputEmail,{value:k.email,handleChange:z}))),u.a.createElement(d.a,null,u.a.createElement(E.a,Object.assign({},e.inputPhone,{value:k.phone_1,handleChange:z})),u.a.createElement(E.a,Object.assign({},e.inputPhone2,{value:k.phone_2,handleChange:z}))),u.a.createElement(d.a,null,u.a.createElement(E.a,Object.assign({},e.inputCountry,{value:k.id_country,handleChange:z}),u.a.createElement("option",{value:""},"--Seleccione--"),N.map((function(e,a){return u.a.createElement("option",{value:e.id,key:a},e.name)}))),u.a.createElement(E.a,Object.assign({},e.inputCity,{value:k.id_city,handleChange:z}),u.a.createElement("option",{value:""},"--Seleccione--"),R.map((function(e,a){return u.a.createElement("option",{value:e.id,key:a},e.name)})))),u.a.createElement(d.a,{className:"justify-content-center"},u.a.createElement(p.a,{sm:4,md:4,lg:4},u.a.createElement(b.a,{type:"submit",size:"sm",variant:"primary",block:!0},"Guardar")),u.a.createElement(p.a,{sm:4,md:4,lg:4},u.a.createElement(b.a,{type:"submit",size:"sm",variant:"danger",block:!0,onClick:function(){T(!1)}},"Volver")))))))};O.defaultProps={inputRut:{type:"text",required:!0,name:"rut",label:"Rut",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputName:{type:"text",required:!0,name:"name",label:"Nombre",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputLastNames:{type:"text",required:!0,name:"last_names",label:"Apellidos",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPoblation:{type:"text",required:!1,name:"poblation",label:"Poblaci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputAddress:{type:"textarea",required:!1,name:"address",label:"Direcci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputCountry:{type:"select",required:!0,name:"id_country",label:"Pa\xeds",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputCity:{type:"select",required:!0,name:"id_city",label:"Ciudad",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputEmail:{type:"email",required:!1,name:"email",label:"Email",messageErrors:["Requerido*,"," Formato tipo Email*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPhone:{type:"number",required:!1,name:"phone_1",label:"Tel\xe9fono Principal",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputPhone2:{type:"number",required:!1,name:"phone_2",label:"Telefono Secundario",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"}},a.a=O},604:function(e,a,t){},726:function(e,a,t){"use strict";t.r(a);var n=t(29),r=t(109),l=t(79),c=t(78),o=t(0),s=t.n(o),i=t(275),u=t(562),m=t(563),d=t(277),p=t(26),g=t(797),b=t(553),E=(t(580),t(604),t(143)),f=t(566),h=t(565),_=t(23),v=t(45),y=t(35),O=t.n(y),j=t(590),k=t(283),C=[],x=function(e){var a=Object(o.useState)({date_request:k().format("YYYY-MM-DD"),id_housing_complexe:"",id_ownership:"",id_origin:"",rut_request_person:"",contact_to:"",week_days:[],id_block_hour_from:"",id_block_hour_to:"",note:"",id:""}),t=Object(c.a)(a,2),y=t[0],x=t[1],w=Object(o.useState)({description:"",id_precint:"",id_related_failure:"",id_tipology_failure:"",id_point_failure:""}),N=Object(c.a)(w,2),q=N[0],P=N[1],S=Object(o.useState)(!1),R=Object(c.a)(S,2),F=R[0],D=R[1],H=Object(o.useState)(!1),z=Object(c.a)(H,2),T=z[0],M=z[1],B=Object(o.useState)(!1),Y=Object(c.a)(B,2),V=Y[0],L=Y[1],U=Object(o.useState)(""),A=Object(c.a)(U,2),G=A[0],I=A[1],K=Object(o.useState)([]),J=Object(c.a)(K,2),W=J[0],Q=J[1],X=Object(o.useState)(!1),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1],ae=Object(o.useState)([]),te=Object(c.a)(ae,2),ne=te[0],re=te[1],le=Object(o.useState)([]),ce=Object(c.a)(le,2),oe=ce[0],se=ce[1],ie=Object(o.useState)([]),ue=Object(c.a)(ie,2),me=ue[0],de=ue[1],pe=Object(o.useState)([]),ge=Object(c.a)(pe,2),be=ge[0],Ee=ge[1],fe=Object(o.useState)([]),he=Object(c.a)(fe,2),_e=he[0],ve=he[1],ye=Object(o.useState)([]),Oe=Object(c.a)(ye,2),je=Oe[0],ke=Oe[1],Ce=Object(o.useState)([]),xe=Object(c.a)(Ce,2),we=xe[0],Ne=xe[1],qe=Object(o.useState)([]),Pe=Object(c.a)(qe,2),Se=Pe[0],Re=Pe[1],Fe=Object(o.useState)([]),De=Object(c.a)(Fe,2),He=De[0],ze=De[1],Te=Object(o.useState)({date_delivery_onwership:"",date_inscription_conservate:"",ownership:"",phone:"",email:""}),Me=Object(c.a)(Te,2),Be=Me[0],Ye=Me[1],Ve=Object(o.useRef)(null);Object(o.useEffect)((function(){Le(),ea(),Ve.current.focus()}),[]),Object(o.useMemo)((function(){C=[{Header:"Recinto",accessor:function(e){return[e.precint.name]}},{Header:"Falla Relacionada",accessor:function(e){return[e.related.name]}},{Header:"Tipolog\xeda de Falla",accessor:function(e){return[e.tipology.name]}},{Header:"Falla Puntual",accessor:function(e){return[e.point.name]}},{Header:"Descripci\xf3n",accessor:function(e){return[e.description]}},{Header:"Acci\xf3n",Cell:function(e){var a=e.cell.row.original;return s.a.createElement(i.a,{size:"sm",variant:"danger",block:!0,onClick:function(){return aa(a.id)}},"Remover")}}]}),[]);var Le=function(){var a=[O.a.get(v.a+"client"),O.a.get(v.a+"get_block_hour"),O.a.get(v.a+"housing_complexe"),O.a.get(v.a+"params_service_origin"),O.a.get(v.a+"params_manage_problems_tipology_by_type/1"),O.a.get(v.a+"params_manage_problems_point_failures"),O.a.get(v.a+"params_manage_problems_related_failures"),O.a.get(v.a+"master_config_ss")];e.match.params.id&&a.push(O.a.get(v.a+"ownership_failure_ss_by_id_ownership_ss")),Promise.all(a).then((function(a){a[7].data?(Q(a[0].data),re(a[1].data),se(a[2].data),Ee(a[3].data),Re(a[4].data),Ne(a[5].data),ke(a[6].data),e.match.params.id&&ze(a[8].data)):(_.b.error("Debe hacer la configuraci\xf3n de las s.s primero"),setTimeout((function(){e.history.replace("/masters/config")}),1e3))})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&Le(),ee(!$)},Ae=function(e){if(e.persist(),"week_days"===e.target.name)e.target.checked?x(Object(l.a)(Object(l.a)({},y),{},Object(n.a)({},e.target.name,[].concat(Object(r.a)(y.week_days),[e.target.value])))):x(Object(l.a)(Object(l.a)({},y),{},Object(n.a)({},e.target.name,y.week_days.filter((function(a){return a!==e.target.value})))));else if("id_housing_complexe"===e.target.name)x(Object(l.a)(Object(l.a)({},y),{},Object(n.a)({},e.target.name,e.target.value))),Ke(e.target.value),Je(e.target.value);else if("id_ownership"===e.target.name)if(e.target.value){var a=me.find((function(a){return a.id==e.target.value}));Ye(a?{date_delivery_onwership:k(a.date_delivery_ownership).format("DD-MM-YYYY"),date_inscription_conservate:k(a.date_inscription_conservative).format("DD-MM-YYYY"),ownership:a.ownership_client.name+""+a.ownership_client.last_names,phone:a.ownership_client.phone,email:a.ownership_client.email}:{date_delivery_onwership:"",date_inscription_conservate:"",ownership:"",phone:"",email:""}),x(Object(l.a)(Object(l.a)({},y),{},Object(n.a)({},e.target.name,e.target.value)))}else x(Object(l.a)(Object(l.a)({},y),{},Object(n.a)({},e.target.name,e.target.value)));else if("rut_request_person"===e.target.name){var t=W.find((function(a){return a.rut===e.target.value}));t&&I(t.name+" "+t.last_names),x(Object(l.a)(Object(l.a)({},y),{},Object(n.a)({},e.target.name,e.target.value)))}else x(Object(l.a)(Object(l.a)({},y),{},Object(n.a)({},e.target.name,e.target.value)))},Ge=function(e){"id_tipology_failure"===e.target.name&&e.target.value?(Ie(e.target.value),P(Object(l.a)(Object(l.a)({},q),{},Object(n.a)({},e.target.name,e.target.value)))):P(Object(l.a)(Object(l.a)({},q),{},Object(n.a)({},e.target.name,e.target.value)))},Ie=function(e){O.a.get(v.a+"params_manage_problems_point_failures_by_tipology/"+e).then((function(e){Ne(e.data)})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error,contacte con soporte"))}))},Ke=function(e){O.a.get(v.a+"masters_ownership_by_housing_complexe/"+e).then((function(e){de(e.data)})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error,contacte con soporte"))}))},Je=function(e){O.a.get(v.a+"master_precint_by_ownership_ss/"+e).then((function(e){ve(e.data)})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error,contacte con soporte"))}))},We=function(){M(!T)},Qe=function(){L(!V)},Xe=function(){e.match.params.id?O.a.get(v.a+"ownership_failure_ss_by_id_ownership_ss/"+e.match.params.id).then((function(e){ze(e.data)})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")})):O.a.get(v.a+"ownership_failure_ss_creating").then((function(e){ze(e.data)})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))},Ze=function(){P({description:"",id_precint:"",id_related_failure:"",id_tipology_failure:"",id_point_failure:""})},$e=function(){x({date_request:k().format("YYYY-MM-DD"),id_housing_complexe:"",id_ownership:"",id_origin:"",rut_request_person:"",contact_to:"",week_days:[],id_block_hour_from:"",id_block_hour_to:"",id:"",note:""}),D(!1),Ye({date_delivery_onwership:"",date_inscription_conservate:"",ownership:"",phone:"",email:""}),Ve.current.focus(),I(""),ze([])},ea=function(){O.a.delete(v.a+"ownership_failure_ss_by_ip").then((function(e){console.log("registros borrados")})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))},aa=function(e){O.a.delete(v.a+"ownership_failure_ss/"+e).then((function(e){Xe(),_.b.success("Falla eliminada")})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))};return s.a.createElement(u.a,{fluid:!0,className:"containerDiv"},s.a.createElement(m.a,null,s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement("h4",{className:"text-center title_principal"},"Solicitud de Servicio PostVenta"))),s.a.createElement("br",null),s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement(p.a,{onSubmit:function(e){var a=e.currentTarget;if(e.preventDefault(),!1===a.checkValidity())return e.stopPropagation(),void D(!0);var t=Object.assign({},y);t.id?O.a.put(v.a+"ownership_ss/"+t.id,t).then((function(e){_.b.success("Registro Modificado"),Le(),$e(),Ze()})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")})):O.a.post(v.a+"ownership_ss",t).then((function(e){_.b.success("Registro Creado"),Le(),$e(),Ze()})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:F},s.a.createElement(m.a,{className:"justify-content-center"},s.a.createElement(d.a,{sm:4,md:4,lg:4,xs:6},s.a.createElement("br",null),"N\xfamero: ",s.a.createElement("span",{className:"alert alert-danger"},"no asignado")),s.a.createElement(E.a,Object.assign({},e.inputDateRequest,{handleChange:Ae,value:y.date_request}))),s.a.createElement(m.a,null,s.a.createElement(f.a,Object.assign({ref:Ve},e.inputProyect,{handleChange:Ae,value:y.id_housing_complexe}),s.a.createElement("option",null,"--Seleccione--"),oe.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.name)}))),s.a.createElement(E.a,Object.assign({},e.inputOwnership,{handleChange:Ae,value:y.id_ownership}),s.a.createElement("option",null,"--Seleccione--"),me.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.number)}))),s.a.createElement(d.a,{sm:3,md:3,lg:3},s.a.createElement("br",null),s.a.createElement("b",null,"Fecha Entrega Propietario:"),"\xa0",Be.date_delivery_onwership),s.a.createElement(d.a,{sm:3,md:3,lg:3},s.a.createElement("br",null),s.a.createElement("b",null,"Fecha Inscripci\xf3n Conservador:"),"\xa0",Be.date_inscription_conservate)),s.a.createElement(m.a,null,s.a.createElement(d.a,{sm:4,md:4,lg:4},s.a.createElement("b",null,"Propietario:"),"\xa0",Be.ownership),s.a.createElement(d.a,{sm:4,md:4,lg:4},s.a.createElement("b",null,"Tel\xe9fono:"),"\xa0",Be.phone_1),s.a.createElement(d.a,{sm:4,md:4,lg:4},s.a.createElement("b",null,"Mail:"),"\xa0",Be.email)),s.a.createElement("hr",null),s.a.createElement(m.a,null,s.a.createElement(E.a,Object.assign({},e.inputOrigin,{value:y.id_origin,handleChange:Ae}),s.a.createElement("option",{value:""},"--Seleccione--"),be.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.name)}))),s.a.createElement(E.a,Object.assign({},e.inputSolicita,{value:y.rut_request_person,handleChange:Ae})),s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement("br",null),s.a.createElement(i.a,{variant:"secondary",onClick:We},s.a.createElement(b.h,null))),s.a.createElement(d.a,{sm:5,md:5,lg:5},s.a.createElement("br",null),G?s.a.createElement("p",{className:"alert alert-warning"},"Solicitante: ",G):"")),s.a.createElement(m.a,null,s.a.createElement(E.a,Object.assign({},e.inputContactTo,{value:y.contact_to,handleChange:Ae}))),s.a.createElement("hr",null),s.a.createElement(m.a,null,s.a.createElement(d.a,{sm:6,md:6,lg:6},s.a.createElement("b",null,s.a.createElement("span",{className:"asterisk_red"},"*"),"D\xedas Posibles de Visita:")),s.a.createElement(d.a,{sm:6,md:6,lg:6},s.a.createElement("b",null,s.a.createElement("span",{className:"asterisk_red"},"*"),"Horario de preferencia:"))),s.a.createElement(m.a,null,s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement("label",{forHtml:"lunes"},s.a.createElement("input",{id:"lunes",type:"checkbox",value:1,checked:!!y.week_days.find((function(e){return"1"==e})),onChange:Ae,name:"week_days"}),"\xa0Lunes")),s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement("label",{forHtml:"martes"},s.a.createElement("input",{id:"martes",type:"checkbox",value:2,checked:!!y.week_days.find((function(e){return"2"==e})),onChange:Ae,name:"week_days"}),"\xa0Martes")),s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement("label",{forHtml:"miercoles"},s.a.createElement("input",{id:"miercoles",type:"checkbox",value:3,checked:!!y.week_days.find((function(e){return"3"==e})),onChange:Ae,name:"week_days"}),"\xa0Miercoles")),s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement("label",{forHtml:"jueves"},s.a.createElement("input",{id:"jueves",type:"checkbox",value:4,checked:!!y.week_days.find((function(e){return"4"==e})),onChange:Ae,name:"week_days"}),"\xa0Jueves")),s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement("label",{forHtml:"viernes"},s.a.createElement("input",{id:"viernes",type:"checkbox",value:5,checked:!!y.week_days.find((function(e){return"5"==e})),onChange:Ae,name:"week_days"}),"\xa0Viernes")),s.a.createElement(d.a,{sm:1,md:1,lg:1},s.a.createElement("label",{forHtml:"sabado"},s.a.createElement("input",{id:"sabado",type:"checkbox",value:6,checked:!!y.week_days.find((function(e){return"6"==e})),onChange:Ae,name:"week_days"}),"\xa0Sabado")),s.a.createElement(d.a,{sm:6,md:6,lg:6},s.a.createElement(m.a,null,s.a.createElement(E.a,Object.assign({},e.inputBlockDesde,{value:y.id_block_hour_from,handleChange:Ae}),s.a.createElement("option",{value:""},"--Seleccione--"),ne.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.block)}))),s.a.createElement(E.a,Object.assign({},e.inputBlockHasta,{value:y.id_block_hour_to,handleChange:Ae}),s.a.createElement("option",{value:""},"--Seleccione--"),ne.slice(1,ne.length).map((function(e,a){return s.a.createElement("option",{key:a,value:e.id},e.block)}))))),s.a.createElement(E.a,Object.assign({},e.inputNote,{value:y.note,handleChange:Ae}))),s.a.createElement("hr",null),s.a.createElement("h5",{className:"title_principal"},"Ingreso de Fallas"),s.a.createElement("br",null),s.a.createElement(m.a,null,s.a.createElement(E.a,Object.assign({},e.inputPrecint,{value:q.id_precint,handleChange:Ge}),s.a.createElement("option",{value:""},"--Seleccione--"),_e.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.precint.name)}))),s.a.createElement(E.a,Object.assign({},e.inputRelatedFail,{value:q.id_related_failure,handleChange:Ge}),s.a.createElement("option",{value:""},"--Seleccione--"),je.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.name)}))),s.a.createElement(E.a,Object.assign({},e.inputTipologyFail,{value:q.id_tipology_failure,handleChange:Ge}),s.a.createElement("option",{value:""},"--Seleccione--"),Se.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.name)}))),s.a.createElement(E.a,Object.assign({},e.inputPointFailure,{value:q.id_point_failure,handleChange:Ge}),s.a.createElement("option",{value:""},"--Seleccione--"),we.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.name)})))),s.a.createElement(m.a,null,s.a.createElement(E.a,Object.assign({},e.inputDescriptionFalil,{value:q.description,handleChange:Ge})),s.a.createElement(d.a,{sm:10,md:10,lg:10}),s.a.createElement(d.a,{sm:2,md:2,lg:2},s.a.createElement(i.a,{variant:"secondary",block:!0,type:"button",size:"sm",onClick:function(){if(!q.id_precint)return _.b.error("Debe Agregar un recinto"),!1;if(!q.id_related_failure)return _.b.error("Debe agregar una relaci\xf3n de falla"),!1;if(!q.id_tipology_failure)return _.b.error("Debe agregar una tipologia de falla"),!1;if(!q.id_point_failure)return _.b.error("Debe agregar una falla puntual"),!1;if(!q.description)return _.b.error("Debe agregar una descripci\xf3n de la falla"),!1;var a=Object.assign({},q,{id_ownership_ss:e.match.params.id?e.match.params.id:null});O.a.post(v.a+"ownership_failure_ss",a).then((function(e){Ze(),Xe(),_.b.success("Falla Agregada")})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))}},"Agregar ",s.a.createElement(b.e,null)))),s.a.createElement("br",null),s.a.createElement(m.a,{className:"justify-content-center"},s.a.createElement(d.a,{sm:3,md:3,lg:3},s.a.createElement(i.a,{size:"sm",variant:"primary",block:!0,type:"submit"},"Guardar ",s.a.createElement(b.g,null))),s.a.createElement(d.a,{sm:3,md:3,lg:3},s.a.createElement(i.a,{size:"sm",variant:"danger",block:!0,type:"button",onClick:function(){e.history.replace("/request/area/managment")}},"Cancelar")),s.a.createElement(d.a,{sm:3,md:3,lg:3},s.a.createElement(i.a,{size:"sm",variant:"secondary",block:!0,type:"button",onClick:Qe},"Ver fallas"))))))),s.a.createElement(g.a,{show:T,onHide:We,size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0},s.a.createElement(g.a.Header,{closeButton:!0,className:"header_dark"},s.a.createElement(g.a.Title,{id:"contained-modal-title-vcenter"},"Clientes registrados")),s.a.createElement(g.a.Body,null,s.a.createElement(m.a,null,$?s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement(j.a,Object.assign({isModal:!0,showTable:Ue},e))):s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement(m.a,{className:"justify-content-center"},s.a.createElement(d.a,{sm:4,md:4,lg:4,xs:6},s.a.createElement(i.a,{variant:"secondary",block:!0,onClick:Ue},"Crear Cliente ",s.a.createElement(b.d,null)))),s.a.createElement("br",null),s.a.createElement(m.a,null,s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement(h.a,{columns:[{Header:"Rut",accessor:"rut",Cell:function(e){var a=e.cell.row.original;return s.a.createElement(i.a,{variant:"link",onClick:function(){var e;e=a,x(Object(l.a)(Object(l.a)({},y),{},{rut_request_person:e.rut})),I(e.name+" "+e.last_names),M(!1)}},a.rut)}},{Header:"Nombre",accessor:function(e){return[e.name+" "+e.last_names]}},{Header:"Direcci\xf3n",accessor:"address"},{Header:"Email",accessor:"email"}],data:W})))))),s.a.createElement(g.a.Footer,null,s.a.createElement(i.a,{variant:"secondary",onClick:We},"cerrar"))),s.a.createElement(g.a,{show:V,onHide:Qe,size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0},s.a.createElement(g.a.Header,{closeButton:!0,className:"header_dark"},s.a.createElement(g.a.Title,{id:"contained-modal-title-vcenter"},"Fallas Registradas")),s.a.createElement(g.a.Body,null,s.a.createElement(m.a,null,s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement(m.a,null,s.a.createElement(d.a,{sm:12,md:12,lg:12},s.a.createElement(h.a,{columns:C,data:He})))))),s.a.createElement(g.a.Footer,null,s.a.createElement(i.a,{variant:"secondary",onClick:Qe},"cerrar"))))};x.defaultProps={inputDateRequest:{type:"date",required:!0,name:"date_request",label:"Fecha:",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputProyect:{type:"select",required:!0,name:"id_housing_complexe",label:"Proyecto:",messageErrors:["Requerido*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputOwnership:{type:"select",required:!0,name:"id_ownership",label:"Propiedad:",messageErrors:["Requerido*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputOrigin:{type:"select",required:!0,name:"id_origin",label:"Origen:",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputSolicita:{type:"text",required:!0,name:"rut_request_person",label:"Solicita:",messageErrors:["Requerido*"],cols:"col-sm-2 col-md-2 col-lg-2 col-xs-2"},inputContactTo:{type:"text",required:!1,name:"contact_to",label:"Contactar Con:",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputBlockDesde:{type:"select",required:!0,name:"id_block_hour_from",label:"Desde:",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputBlockHasta:{type:"select",required:!0,name:"id_block_hour_to",label:"Hasta:",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputNotas:{type:"textarea",required:!1,name:"notes",label:"Notas:",messageErrors:["Requerido*"],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"},inputPrecint:{type:"select",required:!1,name:"id_precint",label:"Recinto:",messageErrors:["Requerido*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputRelatedFail:{type:"select",required:!1,name:"id_related_failure",label:"Relacione su Falla con:",messageErrors:["Requerido*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputTipologyFail:{type:"select",required:!1,name:"id_tipology_failure",label:"Tipolog\xeda de Falla:",messageErrors:["Requerido*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputPointFailure:{type:"select",required:!1,name:"id_point_failure",label:"Falla Puntual:",messageErrors:["Requerido*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputDescriptionFalil:{type:"textarea",required:!1,name:"description",label:"Descripci\xf3n de la Falla:",messageErrors:["Requerido*"],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"},inputNote:{type:"textarea",required:!1,name:"note",label:"Notas:",messageErrors:[],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"}},a.default=x}}]);
//# sourceMappingURL=25.5aa5d2b3.chunk.js.map