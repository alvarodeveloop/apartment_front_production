(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[24],{571:function(e,a,t){"use strict";var n=t(18),r=t(574),l=t(1),c=t.n(l),o=t(577),i=t(575),s=t(576),u=t(280);function m(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return m=function(){return e},e}var d=o.a.div(m());function p(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter,l=n.length;return c.a.createElement("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(l," registros..."),className:"inputPageFilter"})}function g(e,a,t){return Object(s.a)(e,t,{keys:[function(e){return e.values[a]}]})}function b(e){var a=e.columns,t=e.data,r=e.displayPaginationUp,l=e.letrasChicas,o=c.a.useMemo((function(){return{fuzzyText:g,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),s=c.a.useMemo((function(){return{Filter:p}}),[]),m=Object(i.useTable)({columns:a,data:t,defaultColumn:s,filterTypes:o,initialState:{pageIndex:0}},i.useFilters,i.useSortBy,i.usePagination),d=m.getTableProps,b=m.getTableBodyProps,E=m.headerGroups,_=m.page,f=m.prepareRow,h=m.canPreviousPage,v=m.canNextPage,y=m.pageOptions,j=m.pageCount,O=m.gotoPage,k=m.nextPage,x=m.previousPage,C=m.setPageSize,w=m.state,q=w.pageIndex,P=w.pageSize;return c.a.createElement("div",{className:"table-responsive"},r?c.a.createElement("div",{className:"pagination"},c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(0)},disabled:!h},"<<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!h},"<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},">")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(j-1)},disabled:!v},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,q+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:q+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;O(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:P,onChange:function(e){C(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",c.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),c.a.createElement("thead",null,E.map((function(e,a){return c.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:a}),e.headers.map((function(e,a){return c.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:l?"14px":"15px"},key:a}),e.render("Header"),c.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),c.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),c.a.createElement("tbody",Object.assign({},b(),{className:"text-center",style:{fontSize:l?"13px":"15px"}}),_.map((function(e,a){return f(e)||c.a.createElement("tr",Object.assign({},e.getRowProps(),{key:a+"-"}),e.cells.map((function(e,a){return c.a.createElement("td",Object.assign({},e.getCellProps(),{key:a+"td"}),e.render("Cell"))})))})))),c.a.createElement("div",{className:"pagination"},c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(0)},disabled:!h},"<<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!h},"<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},">")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(j-1)},disabled:!v},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,q+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:q+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;O(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:P,onChange:function(e){C(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}g.autoRemove=function(e){return!e};a.a=function(e){var a=e.data,t=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return c.a.createElement(d,null,c.a.createElement(b,{data:a,columns:t,displayPaginationUp:n,letrasChicas:r}))}},584:function(e,a,t){},595:function(e,a,t){"use strict";var n=t(18),r=t(44),l=t(73),c=t.n(l),o=t(114),i=t(30),s=t(1),u=t.n(s),m=t(567),d=t(568),p=t(282),g=t(10),b=t(280),E=t(112),_=t(288),f=t(25),h=t.n(f),v=t(34),y=t(13),j=function(e){var a=Object(s.useState)(!1),t=Object(i.a)(a,2),l=t[0],f=t[1],j=Object(s.useState)({name:"",last_names:"",rut:"",email:"",id_city:"",id_country:"",poblation:"",phone_1:"",phone_2:"",address:""}),O=Object(i.a)(j,2),k=O[0],x=O[1],C=Object(s.useState)([]),w=Object(i.a)(C,2),q=w[0],P=w[1],N=Object(s.useState)([]),S=Object(i.a)(N,2),R=S[0],F=S[1],D=Object(s.useRef)(null);Object(s.useEffect)((function(){H(),D.current.focus()}),[]);var H=function(){var a=[h.a.get(v.a+"master_countrys")];e.match.params.id&&a.push(h.a.get(v.a+"client/"+e.match.params.id)),Promise.all(a).then(function(){var e=Object(o.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(a[0].data),a[1]&&(x({name:a[1].data.name,last_names:a[1].data.last_names,rut:a[1].data.rut,email:a[1].data.email,id_city:a[1].data.id_city,id_country:a[1].data.id_country,poblation:a[1].data.poblation,phone_1:a[1].data.phone_1,phone_2:a[1].data.phone_2,address:a[1].data.address,id:a[1].data.id}),F((function(e){return a[0].data.find((function(e){return e.id==a[1].data.id_country})).cities})));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},z=function(e){if(e.persist(),"id_country"===e.target.name)F((function(a){return q.find((function(a){return a.id==e.target.value})).cities})),x(Object(r.a)(Object(r.a)({},k),{},{id_country:e.target.value,id_city:""}));else if("rut"===e.target.name){var a=e.target.value;(a=a.split("-").join(""))&&(a=a.substring(0,a.length-1)+"-"+a.substring(a.length-1)),x(Object(r.a)(Object(r.a)({},k),{},{rut:a}))}else x(Object(r.a)(Object(r.a)({},k),{},Object(n.a)({},e.target.name,e.target.value)))},T=function(a){e.isModal?e.showTable(a):e.history.replace("/masters/clients")},M=function(){x({name:"",last_names:"",rut:"",email:"",id_city:"",id_country:"",poblation:"",phone_1:"",phone_2:"",address:""}),f(!1),D.current.focus()};return u.a.createElement(m.a,null,u.a.createElement(d.a,{className:""},u.a.createElement(p.a,{sm:12,md:12,lg:12},u.a.createElement(g.a,{onSubmit:function(a){var t=a.currentTarget;if(a.preventDefault(),!1===t.checkValidity())return a.stopPropagation(),void f(!0);var n=Object.assign({},k);n.id?h.a.put(v.a+"client/"+n.id,n).then((function(e){y.b.success("Registro Modificado"),T()})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")})):h.a.post(v.a+"client",n).then((function(a){y.b.success("Registro Creado"),M(),e.isModal&&T(!0)})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:l},u.a.createElement(d.a,null,u.a.createElement(_.a,Object.assign({},e.inputRut,{value:k.rut,handleChange:z,ref:D})),u.a.createElement(E.a,Object.assign({},e.inputName,{value:k.name,handleChange:z})),u.a.createElement(E.a,Object.assign({},e.inputLastNames,{value:k.last_names,handleChange:z}))),u.a.createElement(d.a,null,u.a.createElement(E.a,Object.assign({},e.inputAddress,{value:k.address,handleChange:z})),u.a.createElement(E.a,Object.assign({},e.inputPoblation,{value:k.poblation,handleChange:z})),u.a.createElement(E.a,Object.assign({},e.inputEmail,{value:k.email,handleChange:z}))),u.a.createElement(d.a,null,u.a.createElement(E.a,Object.assign({},e.inputPhone,{value:k.phone_1,handleChange:z})),u.a.createElement(E.a,Object.assign({},e.inputPhone2,{value:k.phone_2,handleChange:z}))),u.a.createElement(d.a,null,u.a.createElement(E.a,Object.assign({},e.inputCountry,{value:k.id_country,handleChange:z}),u.a.createElement("option",{value:""},"--Seleccione--"),q.map((function(e,a){return u.a.createElement("option",{value:e.id,key:a},e.name)}))),u.a.createElement(E.a,Object.assign({},e.inputCity,{value:k.id_city,handleChange:z}),u.a.createElement("option",{value:""},"--Seleccione--"),R.map((function(e,a){return u.a.createElement("option",{value:e.id,key:a},e.name)})))),u.a.createElement(d.a,{className:"justify-content-center"},u.a.createElement(p.a,{sm:4,md:4,lg:4},u.a.createElement(b.a,{type:"submit",size:"sm",variant:"primary",block:!0},"Guardar")),u.a.createElement(p.a,{sm:4,md:4,lg:4},u.a.createElement(b.a,{type:"submit",size:"sm",variant:"danger",block:!0,onClick:function(){T(!1)}},"Volver")))))))};j.defaultProps={inputRut:{type:"text",required:!0,name:"rut",label:"Rut",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputName:{type:"text",required:!0,name:"name",label:"Nombre",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputLastNames:{type:"text",required:!0,name:"last_names",label:"Apellidos",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPoblation:{type:"text",required:!1,name:"poblation",label:"Poblaci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputAddress:{type:"textarea",required:!1,name:"address",label:"Direcci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputCountry:{type:"select",required:!0,name:"id_country",label:"Pa\xeds",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputCity:{type:"select",required:!0,name:"id_city",label:"Ciudad",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputEmail:{type:"email",required:!1,name:"email",label:"Email",messageErrors:["Requerido*,"," Formato tipo Email*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPhone:{type:"number",required:!1,name:"phone_1",label:"Tel\xe9fono Principal",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputPhone2:{type:"number",required:!1,name:"phone_2",label:"Telefono Secundario",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"}},a.a=j},609:function(e,a,t){},730:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(113),l=t(44),c=t(30),o=t(1),i=t.n(o),s=t(280),u=t(567),m=t(568),d=t(282),p=t(10),g=t(800),b=t(146),E=t(49),_=(t(584),t(609),t(112)),f=t(288),h=t(571),v=t(13),y=t(34),j=t(25),O=t.n(j),k=t(595),x=t(289),C=[],w=function(e){var a=Object(o.useState)({date_request:x().format("YYYY-MM-DD"),id_housing_complexe:"",id_ownership:"",id_origin:"",rut_request_person:"",contact_to:"",week_days:[],id_block_hour_from:"",id_block_hour_to:"",note:"",id:""}),t=Object(c.a)(a,2),j=t[0],w=t[1],q=Object(o.useState)({description:"",id_precint:"",id_related_failure:"",id_tipology_failure:"",id_point_failure:""}),P=Object(c.a)(q,2),N=P[0],S=P[1],R=Object(o.useState)(!1),F=Object(c.a)(R,2),D=F[0],H=F[1],z=Object(o.useState)(!1),T=Object(c.a)(z,2),M=T[0],Y=T[1],B=Object(o.useState)(!1),V=Object(c.a)(B,2),A=V[0],I=V[1],L=Object(o.useState)(""),G=Object(c.a)(L,2),J=G[0],U=G[1],W=Object(o.useState)([]),K=Object(c.a)(W,2),Q=K[0],X=K[1],Z=Object(o.useState)(!1),$=Object(c.a)(Z,2),ee=$[0],ae=$[1],te=Object(o.useState)([]),ne=Object(c.a)(te,2),re=ne[0],le=ne[1],ce=Object(o.useState)([]),oe=Object(c.a)(ce,2),ie=oe[0],se=oe[1],ue=Object(o.useState)([]),me=Object(c.a)(ue,2),de=me[0],pe=me[1],ge=Object(o.useState)([]),be=Object(c.a)(ge,2),Ee=be[0],_e=be[1],fe=Object(o.useState)([]),he=Object(c.a)(fe,2),ve=he[0],ye=he[1],je=Object(o.useState)([]),Oe=Object(c.a)(je,2),ke=Oe[0],xe=Oe[1],Ce=Object(o.useState)([]),we=Object(c.a)(Ce,2),qe=we[0],Pe=we[1],Ne=Object(o.useState)([]),Se=Object(c.a)(Ne,2),Re=Se[0],Fe=Se[1],De=Object(o.useState)([]),He=Object(c.a)(De,2),ze=He[0],Te=He[1],Me=Object(o.useState)({date_delivery_onwership:"",date_inscription_conservate:"",ownership:"",phone:"",email:""}),Ye=Object(c.a)(Me,2),Be=Ye[0],Ve=Ye[1],Ae=Object(o.useRef)(null);Object(o.useEffect)((function(){return E.a.toggleCollapsed(),Ie(),aa(),Ae.current.focus(),function(){E.a.toggleCollapsed()}}),[]),Object(o.useMemo)((function(){C=[{Header:"Recinto",accessor:function(e){return[e.precint.name]}},{Header:"Falla Relacionada",accessor:function(e){return[e.related.name]}},{Header:"Tipolog\xeda de Falla",accessor:function(e){return[e.tipology.name]}},{Header:"Falla Puntual",accessor:function(e){return[e.point.name]}},{Header:"Descripci\xf3n",accessor:function(e){return[e.description]}},{Header:"Acci\xf3n",Cell:function(e){var a=e.cell.row.original;return i.a.createElement(s.a,{size:"sm",variant:"danger",block:!0,onClick:function(){return ta(a.id)}},"Remover")}}]}),[]);var Ie=function(){var a=[O.a.get(y.a+"client"),O.a.get(y.a+"get_block_hour"),O.a.get(y.a+"housing_complexe"),O.a.get(y.a+"params_service_origin"),O.a.get(y.a+"params_manage_problems_tipology_by_type/1"),O.a.get(y.a+"params_manage_problems_point_failures"),O.a.get(y.a+"params_manage_problems_related_failures"),O.a.get(y.a+"master_config_ss")];e.match.params.id&&a.push(O.a.get(y.a+"ownership_failure_ss_by_id_ownership_ss")),Promise.all(a).then((function(a){a[7].data?(X(a[0].data),le(a[1].data),se(a[2].data),_e(a[3].data),Fe(a[4].data),Pe(a[5].data),xe(a[6].data),e.match.params.id&&Te(a[8].data)):(v.b.error("Debe hacer la configuraci\xf3n de las s.s primero"),setTimeout((function(){e.history.replace("/masters/config")}),1e3))})).catch((function(e){e.response?v.b.error(e.response.data.message):v.b.error("Error, contacte con soporte")}))},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&Ie(),ae(!ee)},Ge=function(e){if(e.persist(),"week_days"===e.target.name)e.target.checked?w(Object(l.a)(Object(l.a)({},j),{},Object(n.a)({},e.target.name,[].concat(Object(r.a)(j.week_days),[e.target.value])))):w(Object(l.a)(Object(l.a)({},j),{},Object(n.a)({},e.target.name,j.week_days.filter((function(a){return a!==e.target.value})))));else if("id_housing_complexe"===e.target.name)w(Object(l.a)(Object(l.a)({},j),{},Object(n.a)({},e.target.name,e.target.value))),We(e.target.value),Ke(e.target.value);else if("id_ownership"===e.target.name)if(e.target.value){var a,t=de.find((function(a){return a.id==e.target.value}));if(t)Ve({date_delivery_onwership:x(t.date_delivery_ownership).format("DD-MM-YYYY"),date_inscription_conservate:x(t.date_inscription_conservative).format("DD-MM-YYYY"),ownership:t.ownership_client.name+" "+t.ownership_client.last_names,phone:t.ownership_client.phone,email:t.ownership_client.email}),w(Object(l.a)(Object(l.a)({},j),{},(a={},Object(n.a)(a,e.target.name,e.target.value),Object(n.a)(a,"rut_request_person",t.id_client_ownership),a))),U(t.ownership_client.name+" "+t.ownership_client.last_names);else Ve({date_delivery_onwership:"",date_inscription_conservate:"",ownership:"",phone:"",email:""}),w(Object(l.a)(Object(l.a)({},j),{},Object(n.a)({},e.target.name,e.target.value)))}else w(Object(l.a)(Object(l.a)({},j),{},Object(n.a)({},e.target.name,e.target.value)));else if("rut_request_person"===e.target.name){var c=Q.find((function(a){return a.rut===e.target.value}));c&&U(c.name+" "+c.last_names),w(Object(l.a)(Object(l.a)({},j),{},Object(n.a)({},e.target.name,e.target.value)))}else w(Object(l.a)(Object(l.a)({},j),{},Object(n.a)({},e.target.name,e.target.value)))},Je=function(e){"id_tipology_failure"===e.target.name&&e.target.value?(Ue(e.target.value),S(Object(l.a)(Object(l.a)({},N),{},Object(n.a)({},e.target.name,e.target.value)))):S(Object(l.a)(Object(l.a)({},N),{},Object(n.a)({},e.target.name,e.target.value)))},Ue=function(e){O.a.get(y.a+"params_manage_problems_point_failures_by_tipology/"+e).then((function(e){Pe(e.data)})).catch((function(e){e.response?v.b.error(e.response.data.message):(console.log(e),v.b.error("Error,contacte con soporte"))}))},We=function(e){O.a.get(y.a+"masters_ownership_by_housing_complexe/"+e).then((function(e){pe(e.data)})).catch((function(e){e.response?v.b.error(e.response.data.message):(console.log(e),v.b.error("Error,contacte con soporte"))}))},Ke=function(e){O.a.get(y.a+"master_precint_by_ownership_ss/"+e).then((function(e){ye(e.data)})).catch((function(e){e.response?v.b.error(e.response.data.message):(console.log(e),v.b.error("Error,contacte con soporte"))}))},Qe=function(){Y(!M)},Xe=function(){I(!A)},Ze=function(){e.match.params.id?O.a.get(y.a+"ownership_failure_ss_by_id_ownership_ss/"+e.match.params.id).then((function(e){Te(e.data)})).catch((function(e){e.response?v.b.error(e.response.data.message):v.b.error("Error, contacte con soporte")})):O.a.get(y.a+"ownership_failure_ss_creating").then((function(e){Te(e.data)})).catch((function(e){e.response?v.b.error(e.response.data.message):v.b.error("Error, contacte con soporte")}))},$e=function(){S({description:"",id_precint:"",id_related_failure:"",id_tipology_failure:"",id_point_failure:""})},ea=function(){w({date_request:x().format("YYYY-MM-DD"),id_housing_complexe:"",id_ownership:"",id_origin:"",rut_request_person:"",contact_to:"",week_days:[],id_block_hour_from:"",id_block_hour_to:"",id:"",note:""}),H(!1),Ve({date_delivery_onwership:"",date_inscription_conservate:"",ownership:"",phone:"",email:""}),Ae.current.focus(),U(""),Te([])},aa=function(){O.a.delete(y.a+"ownership_failure_ss_by_ip").then((function(e){console.log("registros borrados")})).catch((function(e){e.response?v.b.error(e.response.data.message):v.b.error("Error, contacte con soporte")}))},ta=function(e){O.a.delete(y.a+"ownership_failure_ss/"+e).then((function(e){Ze(),v.b.success("Falla eliminada")})).catch((function(e){e.response?v.b.error(e.response.data.message):v.b.error("Error, contacte con soporte")}))};return i.a.createElement(u.a,{fluid:!0,className:"containerDiv"},i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:12,md:12,lg:12},i.a.createElement("h4",{className:"text-center title_principal"},"Solicitud de Servicio PostVenta"))),i.a.createElement("br",null),i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:12,md:12,lg:12},i.a.createElement(p.a,{onSubmit:function(e){var a=e.currentTarget;if(e.preventDefault(),!1===a.checkValidity())return e.stopPropagation(),void H(!0);var t=Object.assign({},j);t.id?O.a.put(y.a+"ownership_ss/"+t.id,t).then((function(e){v.b.success("Registro Modificado"),Ie(),ea(),$e()})).catch((function(e){e.response?v.b.error(e.response.data.message):v.b.error("Error, contacte con soporte")})):O.a.post(y.a+"ownership_ss",t).then((function(e){v.b.success("Registro Creado"),Ie(),ea(),$e()})).catch((function(e){e.response?v.b.error(e.response.data.message):v.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:D},i.a.createElement(m.a,{className:"justify-content-center"},i.a.createElement(d.a,{sm:4,md:4,lg:4,xs:6},i.a.createElement("br",null),"N\xfamero: ",i.a.createElement("span",{className:"alert alert-danger"},"no asignado")),i.a.createElement(_.a,Object.assign({},e.inputDateRequest,{handleChange:Ge,value:j.date_request}))),i.a.createElement(m.a,null,i.a.createElement(f.a,Object.assign({ref:Ae},e.inputProyect,{handleChange:Ge,value:j.id_housing_complexe}),i.a.createElement("option",null,"--Seleccione--"),ie.map((function(e,a){return i.a.createElement("option",{value:e.id,key:a},e.name)}))),i.a.createElement(_.a,Object.assign({},e.inputOwnership,{handleChange:Ge,value:j.id_ownership}),i.a.createElement("option",null,"--Seleccione--"),de.map((function(e,a){return i.a.createElement("option",{value:e.id,key:a},e.number)})))),i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:6,md:6,lg:6},i.a.createElement("br",null),i.a.createElement("b",null,"Fecha Entrega Propietario:"),i.a.createElement("br",null),Be.date_delivery_onwership),i.a.createElement(d.a,{sm:6,md:6,lg:6},i.a.createElement("br",null),i.a.createElement("b",null,"Fecha Inscripci\xf3n Conservador:"),i.a.createElement("br",null),Be.date_inscription_conservate)),i.a.createElement("br",null),i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:4,md:4,lg:4},i.a.createElement("b",null,"Propietario:"),i.a.createElement("br",null),Be.ownership),i.a.createElement(d.a,{sm:4,md:4,lg:4},i.a.createElement("b",null,"Tel\xe9fono:"),i.a.createElement("br",null),Be.phone_1),i.a.createElement(d.a,{sm:4,md:4,lg:4},i.a.createElement("b",null,"Mail:"),i.a.createElement("br",null),Be.email)),i.a.createElement("hr",null),i.a.createElement(m.a,null,i.a.createElement(_.a,Object.assign({},e.inputOrigin,{value:j.id_origin,handleChange:Ge}),i.a.createElement("option",{value:""},"--Seleccione--"),Ee.map((function(e,a){return i.a.createElement("option",{value:e.id,key:a},e.name)}))),i.a.createElement(_.a,Object.assign({},e.inputSolicita,{value:j.rut_request_person,handleChange:Ge})),i.a.createElement(d.a,{sm:1,md:1,lg:1},i.a.createElement("br",null),i.a.createElement(s.a,{variant:"secondary",onClick:Qe},i.a.createElement(b.h,null))),i.a.createElement(d.a,{sm:5,md:5,lg:5},i.a.createElement("br",null),J?i.a.createElement("p",{className:"alert alert-warning"},"Solicitante: ",J):"")),i.a.createElement(m.a,null,i.a.createElement(_.a,Object.assign({},e.inputContactTo,{value:j.contact_to,handleChange:Ge}))),i.a.createElement("hr",null),i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:6,md:6,lg:6},i.a.createElement("b",null,i.a.createElement("span",{className:"asterisk_red"},"*"),"D\xedas Posibles de Visita:")),i.a.createElement(d.a,{sm:6,md:6,lg:6},i.a.createElement("b",null,i.a.createElement("span",{className:"asterisk_red"},"*"),"Horario de preferencia:"))),i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:1,md:1,lg:1},i.a.createElement("label",{forHtml:"lunes"},i.a.createElement("input",{id:"lunes",type:"checkbox",value:1,checked:!!j.week_days.find((function(e){return"1"==e})),onChange:Ge,name:"week_days"}),"\xa0Lunes")),i.a.createElement(d.a,{sm:1,md:1,lg:1},i.a.createElement("label",{forHtml:"martes"},i.a.createElement("input",{id:"martes",type:"checkbox",value:2,checked:!!j.week_days.find((function(e){return"2"==e})),onChange:Ge,name:"week_days"}),i.a.createElement("br",null),"Martes")),i.a.createElement(d.a,{sm:1,md:1,lg:1},i.a.createElement("label",{forHtml:"miercoles"},i.a.createElement("input",{id:"miercoles",type:"checkbox",value:3,checked:!!j.week_days.find((function(e){return"3"==e})),onChange:Ge,name:"week_days"}),i.a.createElement("br",null),"Miercoles")),i.a.createElement(d.a,{sm:1,md:1,lg:1},i.a.createElement("label",{forHtml:"jueves"},i.a.createElement("input",{id:"jueves",type:"checkbox",value:4,checked:!!j.week_days.find((function(e){return"4"==e})),onChange:Ge,name:"week_days"}),i.a.createElement("br",null),"Jueves")),i.a.createElement(d.a,{sm:1,md:1,lg:1},i.a.createElement("label",{forHtml:"viernes"},i.a.createElement("input",{id:"viernes",type:"checkbox",value:5,checked:!!j.week_days.find((function(e){return"5"==e})),onChange:Ge,name:"week_days"}),i.a.createElement("br",null),"Viernes")),i.a.createElement(d.a,{sm:1,md:1,lg:1},i.a.createElement("label",{forHtml:"sabado"},i.a.createElement("input",{id:"sabado",type:"checkbox",value:6,checked:!!j.week_days.find((function(e){return"6"==e})),onChange:Ge,name:"week_days"}),i.a.createElement("br",null),"Sabado")),i.a.createElement(d.a,{sm:6,md:6,lg:6},i.a.createElement(m.a,null,i.a.createElement(_.a,Object.assign({},e.inputBlockDesde,{value:j.id_block_hour_from,handleChange:Ge}),i.a.createElement("option",{value:""},"--Seleccione--"),re.map((function(e,a){return i.a.createElement("option",{value:e.id,key:a},e.block)}))),i.a.createElement(_.a,Object.assign({},e.inputBlockHasta,{value:j.id_block_hour_to,handleChange:Ge}),i.a.createElement("option",{value:""},"--Seleccione--"),re.slice(1,re.length).map((function(e,a){return i.a.createElement("option",{key:a,value:e.id},e.block)}))))),i.a.createElement(_.a,Object.assign({},e.inputNote,{value:j.note,handleChange:Ge}))),i.a.createElement("hr",null),i.a.createElement("h5",{className:"title_principal"},"Ingreso de Fallas"),i.a.createElement("br",null),i.a.createElement(m.a,null,i.a.createElement(_.a,Object.assign({},e.inputPrecint,{value:N.id_precint,handleChange:Je}),i.a.createElement("option",{value:""},"--Seleccione--"),ve.map((function(e,a){return i.a.createElement("option",{value:e.id_precint,key:a},e.precint.name)}))),i.a.createElement(_.a,Object.assign({},e.inputRelatedFail,{value:N.id_related_failure,handleChange:Je}),i.a.createElement("option",{value:""},"--Seleccione--"),ke.map((function(e,a){return i.a.createElement("option",{value:e.id,key:a},e.name)}))),i.a.createElement(_.a,Object.assign({},e.inputTipologyFail,{value:N.id_tipology_failure,handleChange:Je}),i.a.createElement("option",{value:""},"--Seleccione--"),Re.map((function(e,a){return i.a.createElement("option",{value:e.id,key:a},e.name)}))),i.a.createElement(_.a,Object.assign({},e.inputPointFailure,{value:N.id_point_failure,handleChange:Je}),i.a.createElement("option",{value:""},"--Seleccione--"),qe.map((function(e,a){return i.a.createElement("option",{value:e.id,key:a},e.name)})))),i.a.createElement(m.a,null,i.a.createElement(_.a,Object.assign({},e.inputDescriptionFalil,{value:N.description,handleChange:Je})),i.a.createElement(d.a,{sm:10,md:10,lg:10}),i.a.createElement(d.a,{sm:2,md:2,lg:2},i.a.createElement(s.a,{variant:"secondary",block:!0,type:"button",size:"sm",onClick:function(){if(!N.id_precint)return v.b.error("Debe Agregar un recinto"),!1;if(!N.id_related_failure)return v.b.error("Debe agregar una relaci\xf3n de falla"),!1;if(!N.id_tipology_failure)return v.b.error("Debe agregar una tipologia de falla"),!1;if(!N.id_point_failure)return v.b.error("Debe agregar una falla puntual"),!1;if(!N.description)return v.b.error("Debe agregar una descripci\xf3n de la falla"),!1;var a=Object.assign({},N,{id_ownership_ss:e.match.params.id?e.match.params.id:null});O.a.post(y.a+"ownership_failure_ss",a).then((function(e){$e(),Ze(),v.b.success("Falla Agregada")})).catch((function(e){e.response?v.b.error(e.response.data.message):v.b.error("Error, contacte con soporte")}))}},"Agregar ",i.a.createElement(b.e,null)))),i.a.createElement("br",null),i.a.createElement(m.a,{className:"justify-content-center"},i.a.createElement(d.a,{sm:3,md:3,lg:3},i.a.createElement(s.a,{size:"sm",variant:"primary",block:!0,type:"submit"},"Guardar ",i.a.createElement(b.g,null))),i.a.createElement(d.a,{sm:3,md:3,lg:3},i.a.createElement(s.a,{size:"sm",variant:"danger",block:!0,type:"button",onClick:function(){e.history.replace("/request/area/managment")}},"Cancelar")),i.a.createElement(d.a,{sm:3,md:3,lg:3},i.a.createElement(s.a,{size:"sm",variant:"secondary",block:!0,type:"button",onClick:Xe},"Ver fallas"))))))),i.a.createElement(g.a,{show:M,onHide:Qe,size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0},i.a.createElement(g.a.Header,{closeButton:!0,className:"header_dark"},i.a.createElement(g.a.Title,{id:"contained-modal-title-vcenter"},"Clientes registrados")),i.a.createElement(g.a.Body,null,i.a.createElement(m.a,null,ee?i.a.createElement(d.a,{sm:12,md:12,lg:12},i.a.createElement(k.a,Object.assign({isModal:!0,showTable:Le},e))):i.a.createElement(d.a,{sm:12,md:12,lg:12},i.a.createElement(m.a,{className:"justify-content-center"},i.a.createElement(d.a,{sm:4,md:4,lg:4,xs:6},i.a.createElement(s.a,{variant:"secondary",block:!0,onClick:Le},"Crear Cliente ",i.a.createElement(b.d,null)))),i.a.createElement("br",null),i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:12,md:12,lg:12},i.a.createElement(h.a,{columns:[{Header:"Rut",accessor:"rut",Cell:function(e){var a=e.cell.row.original;return i.a.createElement(s.a,{variant:"link",onClick:function(){var e;e=a,w(Object(l.a)(Object(l.a)({},j),{},{rut_request_person:e.rut})),U(e.name+" "+e.last_names),Y(!1)}},a.rut)}},{Header:"Nombre",accessor:function(e){return[e.name+" "+e.last_names]}},{Header:"Direcci\xf3n",accessor:"address"},{Header:"Email",accessor:"email"}],data:Q})))))),i.a.createElement(g.a.Footer,null,i.a.createElement(s.a,{variant:"secondary",onClick:Qe},"cerrar"))),i.a.createElement(g.a,{show:A,onHide:Xe,size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0},i.a.createElement(g.a.Header,{closeButton:!0,className:"header_dark"},i.a.createElement(g.a.Title,{id:"contained-modal-title-vcenter"},"Fallas Registradas")),i.a.createElement(g.a.Body,null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:12,md:12,lg:12},i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:12,md:12,lg:12},i.a.createElement(h.a,{columns:C,data:ze})))))),i.a.createElement(g.a.Footer,null,i.a.createElement(s.a,{variant:"secondary",onClick:Xe},"cerrar"))))};w.defaultProps={inputDateRequest:{type:"date",required:!0,name:"date_request",label:"Fecha:",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputProyect:{type:"select",required:!0,name:"id_housing_complexe",label:"Proyecto o Conjunto Habitacional:",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputOwnership:{type:"select",required:!0,name:"id_ownership",label:"Propiedad:",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputOrigin:{type:"select",required:!0,name:"id_origin",label:"Origen:",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputSolicita:{type:"text",required:!0,name:"rut_request_person",label:"Solicita:",messageErrors:["Requerido*"],cols:"col-sm-2 col-md-2 col-lg-2 col-xs-2"},inputContactTo:{type:"text",required:!1,name:"contact_to",label:"Contactar Con:",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputBlockDesde:{type:"select",required:!0,name:"id_block_hour_from",label:"Desde:",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputBlockHasta:{type:"select",required:!0,name:"id_block_hour_to",label:"Hasta:",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputNotas:{type:"textarea",required:!1,name:"notes",label:"Notas:",messageErrors:["Requerido*"],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"},inputPrecint:{type:"select",required:!1,name:"id_precint",label:"Recinto:",messageErrors:["Requerido*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputRelatedFail:{type:"select",required:!1,name:"id_related_failure",label:"Relacione su Falla con:",messageErrors:["Requerido*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputTipologyFail:{type:"select",required:!1,name:"id_tipology_failure",label:"Tipolog\xeda de Falla:",messageErrors:["Requerido*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputPointFailure:{type:"select",required:!1,name:"id_point_failure",label:"Falla Puntual:",messageErrors:["Requerido*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputDescriptionFalil:{type:"textarea",required:!1,name:"description",label:"Descripci\xf3n de la Falla:",messageErrors:["Requerido*"],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"},inputNote:{type:"textarea",required:!1,name:"note",label:"Notas:",messageErrors:[],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"}},a.default=w}}]);
//# sourceMappingURL=24.4d167e85.chunk.js.map