(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[20],{565:function(e,a,t){"use strict";var n=t(29),r=t(569),l=t(0),o=t.n(l),c=t(572),s=t(570),i=t(571),u=t(275);function m(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return m=function(){return e},e}var d=c.a.div(m());function p(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter,l=n.length;return o.a.createElement("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(l," registros..."),className:"inputPageFilter"})}function g(e,a,t){return Object(i.a)(e,t,{keys:[function(e){return e.values[a]}]})}function b(e){var a=e.columns,t=e.data,r=e.displayPaginationUp,l=e.letrasChicas,c=o.a.useMemo((function(){return{fuzzyText:g,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),i=o.a.useMemo((function(){return{Filter:p}}),[]),m=Object(s.useTable)({columns:a,data:t,defaultColumn:i,filterTypes:c,initialState:{pageIndex:0}},s.useFilters,s.useSortBy,s.usePagination),d=m.getTableProps,b=m.getTableBodyProps,f=m.headerGroups,E=m.page,h=m.prepareRow,v=m.canPreviousPage,y=m.canNextPage,_=m.pageOptions,N=m.pageCount,C=m.gotoPage,x=m.nextPage,O=m.previousPage,j=m.setPageSize,P=m.state,k=P.pageIndex,S=P.pageSize;return o.a.createElement("div",{className:"table-responsive"},r?o.a.createElement("div",{className:"pagination"},o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C(0)},disabled:!v},"<<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O()},disabled:!v},"<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!y},">")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C(N-1)},disabled:!y},">>")," ",o.a.createElement("span",null,"P\xe1gina"," ",o.a.createElement("strong",null,k+1," de ",_.length)," "),o.a.createElement("span",{className:"ml-3"},"| ",o.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),o.a.createElement("input",Object(n.a)({type:"number",defaultValue:k+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;C(a)},className:"inputPage"},"onChange",(function(e){e.target.value>_.length&&(e.target.value=1)}))))," ",o.a.createElement("select",{value:S,onChange:function(e){j(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return o.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",o.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),o.a.createElement("thead",null,f.map((function(e,a){return o.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:a}),e.headers.map((function(e,a){return o.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:l?"14px":"15px"},key:a}),e.render("Header"),o.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),o.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),o.a.createElement("tbody",Object.assign({},b(),{className:"text-center",style:{fontSize:l?"13px":"15px"}}),E.map((function(e,a){return h(e)||o.a.createElement("tr",Object.assign({},e.getRowProps(),{key:a+"-"}),e.cells.map((function(e,a){return o.a.createElement("td",Object.assign({},e.getCellProps(),{key:a+"td"}),e.render("Cell"))})))})))),o.a.createElement("div",{className:"pagination"},o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C(0)},disabled:!v},"<<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O()},disabled:!v},"<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!y},">")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C(N-1)},disabled:!y},">>")," ",o.a.createElement("span",null,"P\xe1gina"," ",o.a.createElement("strong",null,k+1," de ",_.length)," "),o.a.createElement("span",{className:"ml-3"},"| ",o.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),o.a.createElement("input",Object(n.a)({type:"number",defaultValue:k+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;C(a)},className:"inputPage"},"onChange",(function(e){e.target.value>_.length&&(e.target.value=1)}))))," ",o.a.createElement("select",{value:S,onChange:function(e){j(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return o.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}g.autoRemove=function(e){return!e};a.a=function(e){var a=e.data,t=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return o.a.createElement(d,null,o.a.createElement(b,{data:a,columns:t,displayPaginationUp:n,letrasChicas:r}))}},566:function(e,a,t){"use strict";var n=t(29),r=t(0),l=t.n(r),o=t(26),c=(t(282),l.a.forwardRef((function(e,a){var t,r=e.cols?e.cols:"col-md-6 col-sm-6";return"select"!==e.type&&"textarea"!==e.type?l.a.createElement(o.a.Group,{className:r},e.required?l.a.createElement(o.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(o.a.Label,{className:"fontBold"},e.label),l.a.createElement(o.a.Control,(t={ref:a,id:e.name,type:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,readOnly:!!e.readonly&&e.readonly,className:e.className?e.className:"",step:e.step?e.step:"",onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){}},Object(n.a)(t,"className","form-control-sm"),Object(n.a)(t,"disabled",e.disabled),t)),l.a.createElement(o.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"select"===e.type?l.a.createElement(o.a.Group,{className:r},e.required?l.a.createElement(o.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(o.a.Label,{className:"fontBold"},e.label),l.a.createElement(o.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",readOnly:!!e.readonly&&e.readonly,required:e.required,multiple:!!e.multiple&&e.multiple,ref:a||null,className:"form-control-sm",disabled:e.disabled},e.children),l.a.createElement(o.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"textarea"===e.type?l.a.createElement(o.a.Group,{className:r},e.required?l.a.createElement(o.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(o.a.Label,{className:"fontBold"},e.label),l.a.createElement(o.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,rows:e.rows?e.rows:2,readOnly:!!e.readonly&&e.readonly,onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){},ref:a||null,className:"form-control-sm",disabled:e.disabled}),l.a.createElement(o.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):void 0})));a.a=c},578:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),l=t(283),o=t(583),c=[{Header:"Nro",accessor:"id",Cell:function(e){return r.a.createElement(o.a,{variant:"danger",style:{fontSize:"14px"}},e.cell.row.original.id)}},{Header:"Fecha",accessor:function(e){return[l(e.createdAt).format("DD-MM-YYYY hh:mm:ss")]}},{Header:"Autor",accessor:function(e){return[e.user.email]}},{Header:"Detalle",accessor:"detail",Cell:function(e){var a=e.cell.row.original;return-1===a.detail.indexOf("/")?a.detail.split("@").map((function(e,a){return r.a.createElement("div",{style:{width:"100%"}},e,r.a.createElement("hr",null))})):a.detail.split("/").map((function(e,a){return r.a.createElement("div",{style:{width:"100%"}},e,r.a.createElement("br",null))}))}},{Header:"Privado",accessor:function(e){return e.is_private?["Si"]:["No"]}},{Header:"Documento",accessor:function(e){return["-"]}}],s=[{Header:"Nro",accessor:"id",Cell:function(e){return r.a.createElement(o.a,{variant:"danger",style:{fontSize:"14px"}},e.cell.row.original.id)}},{Header:"Fecha",accessor:function(e){return[l(e.createdAt).format("DD-MM-YYYY hh:mm:ss")]}},{Header:"Autor",accessor:function(e){return[e.user.email]}},{Header:"Detalle",accessor:"detail",Cell:function(e){var a=e.cell.row.original;return-1!==a.detail.indexOf("/")?a.detail.split("/").map((function(e,a){return r.a.createElement("div",{style:{width:"100%"}},e,r.a.createElement("br",null))})):a.detail.split("@").map((function(e,a){return r.a.createElement("div",{style:{width:"100%"}},e,r.a.createElement("br",null))}))}},{Header:"Privado",accessor:function(e){return e.is_private?["Si"]:["No"]}},{Header:"Documento",accessor:function(e){return["-"]}}]},580:function(e,a,t){},583:function(e,a,t){"use strict";var n=t(1),r=t(3),l=t(5),o=t.n(l),c=t(0),s=t.n(c),i=t(6),u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,c=e.pill,u=e.className,m=e.as,d=void 0===m?"span":m,p=Object(r.a)(e,["bsPrefix","variant","pill","className","as"]),g=Object(i.b)(t,"badge");return s.a.createElement(d,Object(n.a)({ref:a},p,{className:o()(u,g,c&&g+"-pill",l&&g+"-"+l)}))}));u.displayName="Badge",u.defaultProps={pill:!1},a.a=u},585:function(e,a){},587:function(e,a){},588:function(e,a){},740:function(e,a,t){"use strict";t.r(a);var n=t(29),r=t(79),l=t(78),o=t(0),c=t.n(o),s=t(275),i=t(583),u=t(562),m=t(563),d=t(277),p=t(26),g=t(797),b=t(553),f=(t(580),t(566)),E=t(143),h=t(23),v=t(35),y=t.n(v),_=t(45),N=t(565),C=t(283),x=t(578),O=t(46),j=t(574),P=t(586),k=[],S=function(e){var a=Object(o.useState)({id_reason_close:"",nro_ballot:"",to:"",from:"",id_status:"",id_priority:"",id_housing_complexe:"",number_ownership:"",number_ss:"",radio_option:""}),t=Object(l.a)(a,2),v=t[0],S=t[1],w=Object(o.useState)(!1),Y=Object(l.a)(w,2),D=Y[0],H=(Y[1],Object(o.useState)([])),M=Object(l.a)(H,2),F=M[0],q=M[1],z=Object(o.useState)([]),T=Object(l.a)(z,2),B=T[0],R=T[1],U=Object(o.useState)([]),A=Object(l.a)(U,2),L=A[0],G=A[1],I=Object(o.useState)([]),K=Object(l.a)(I,2),V=K[0],J=K[1],W=Object(o.useState)([]),Q=Object(l.a)(W,2),X=Q[0],Z=Q[1],$=Object(o.useState)(!1),ee=Object(l.a)($,2),ae=ee[0],te=ee[1],ne=Object(o.useState)([]),re=Object(l.a)(ne,2),le=re[0],oe=re[1],ce=Object(o.useState)(!1),se=Object(l.a)(ce,2),ie=se[0],ue=se[1],me=Object(o.useRef)(null);Object(o.useEffect)((function(){return ge(),function(){k=[]}}),[]),Object(o.useMemo)((function(){k=[{Header:"Nro.SS",accessor:"id",Cell:function(e){var a=e.cell.row.original;return c.a.createElement(s.a,{variant:"link",block:!0,onClick:function(){return fe(a)}},a.id)}},{Header:"FechaEmisi\xf3n",accessor:function(e){return[C(e.date_request).format("DD-MM-YYYY")]}},{Header:"Proyecto",accessor:function(e){return[e.housing.name]}},{Header:"Cliente",accessor:function(e){return e.client?[e.client.name+" "+e.client.last_names]:[]}},{Header:"Depto.",accessor:function(e){return e.ownership?[e.ownership.number]:["no posee"]},Cell:function(e){var a=e.cell.row.original.ownership;if(a){var t=Object(O.a)(C().tz("America/Santiago"),C(a.date_inscription_conservative),"year");return t<3?a.number:t>=3&&t<5?c.a.createElement(i.a,{variant:"danger",className:"font-badge"},a.number):c.a.createElement(i.a,{variant:"dark",className:"font-badge"},a.number)}return""}},{Header:"M\xf3delo",accessor:function(e){return e.ownership?[e.ownership.models.name]:["no posee"]}},{Header:"Prioridad",accessor:function(e){return[e.priority.name]}},{Header:"Nro.Papeleta",accessor:function(e){return e.nro_ballot?[e.nro_ballot]:[]}},{Header:"Estado",accessor:function(e){return[e.status.status]},Cell:function(e){var a=e.cell.row.original;return 0===a.failures.length?c.a.createElement(i.a,{variant:"warning",className:"font-badge"},a.status.status):a.status.status}},{Header:"Fecha Inspecci\xf3n",accessor:function(e){return e.date_inspection?[C(e.date_inspection).format("DD-MM-YYYY")]:[]}},{Header:"D\xedas Inspecci\xf3n",accessor:function(e){return e.date_inspection?[Object(O.a)(C(e.date_inspection),C(e.date_request))]:[]}},{Header:"Fecha Ejecuci\xf3n",accessor:function(e){return e.date_execution?[C(e.date_execution).format("DD-MM-YYYY")]:[]}},{Header:"Fecha(N/C/A)",accessor:function(e){return e.date_close?[C(e.date_close).format("DD-MM-YYYY")]:[]}},{Header:"D\xedas Cierre",accessor:function(e){return e.date_close?[Object(O.a)(C(e.date_close),C(e.date_execution))]:[]}},{Header:"Total D\xedas",accessor:function(e){return e.date_close?[Object(O.a)(C(e.date_close),C(e.date_request))]:[]}},{Header:"Total Presupuesto",accessor:function(e){return[]},Cell:function(e){var a=e.cell.row.original,t=0;return a.failures.forEach((function(e,a){t+=parseFloat(e.material_cost)+parseFloat(e.workforce_cost)+parseFloat(e.third_party_cost)})),isNaN(t)?0:t}},{Header:"Seguimiento",Cell:function(e){var a=e.cell.row.original;return c.a.createElement(s.a,{variant:"secondary",block:!0,size:"sm",onClick:function(){return pe(a.followings)}},c.a.createElement(b.d,null))}}]}),[]);var de=function(){ue(!ie)},pe=function(e){oe(e),de()},ge=function(){var e=[y.a.get(_.a+"get_status"),y.a.get(_.a+"params_service_priority"),y.a.get(_.a+"housing_complexe"),y.a.get(_.a+"params_service_reason_close_to_finish"),y.a.get(_.a+"ownership_ss")];Promise.all(e).then((function(e){q(e[0].data),R(e[1].data),G(e[2].data),J(e[3].data),Z(e[4].data),console.log(e[4].data,"aqioo")})).catch((function(e){e.response?h.b.error(e.response.data.message):(console.log(e),h.b.error("Error, contacte con soporte"))}))},be=function(e){if("radio_option"===e.target.name){var a="true"===e.target.value;S(Object(r.a)(Object(r.a)({},v),{},Object(n.a)({},e.target.name,a)))}else S(Object(r.a)(Object(r.a)({},v),{},Object(n.a)({},e.target.name,e.target.value)))},fe=function(a){e.history.replace("/request/property/managment/form/"+a.id)};return c.a.createElement(u.a,{fluid:!0},c.a.createElement(m.a,{className:"containerDiv"},c.a.createElement(d.a,{sm:12,md:12,lg:12},c.a.createElement(m.a,{className:""},c.a.createElement(d.a,{sm:12,md:12,lg:12},c.a.createElement("h4",{className:"text-center title_principal"},"Gesti\xf3n Solicitudes de Servicio"),c.a.createElement("hr",null))),c.a.createElement(p.a,{onSubmit:function(e){e.preventDefault(),te(!0);var a=Object.assign({},v);y.a.post(_.a+"ownership_ss_by_filter",a).then((function(e){Z(e.data),te(!1)})).catch((function(e){e.response?h.b.error(e.response.data.message):h.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:D},c.a.createElement(m.a,null,c.a.createElement(f.a,Object.assign({},e.inputSS,{value:v.number_ss,handleChange:be,ref:me})),c.a.createElement(E.a,Object.assign({},e.inputProperty,{value:v.number_ownership,handleChange:be})),c.a.createElement(E.a,Object.assign({},e.inputProyect,{value:v.id_housing_complexe,handleChange:be}),c.a.createElement("option",{value:""},"--Seleccione--"),L.map((function(e,a){return c.a.createElement("option",{value:e.id,key:a},e.name)})))),c.a.createElement(m.a,null,c.a.createElement(E.a,Object.assign({},e.inputPriority,{value:v.id_priority,handleChange:be}),c.a.createElement("option",{value:""},"Todas..."),B.map((function(e,a){return c.a.createElement("option",{value:e.id,key:a},e.name)}))),c.a.createElement(E.a,Object.assign({},e.inputStatus,{value:v.id_status,handleChange:be}),c.a.createElement("option",{value:""},"Todas..."),F.map((function(e,a){return c.a.createElement("option",{key:a,value:e.id},e.status)}))),c.a.createElement(E.a,Object.assign({},e.inputFrom,{value:v.from,handleChange:be}))),c.a.createElement(m.a,null,c.a.createElement(E.a,Object.assign({},e.inputTo,{value:v.to,handleChange:be})),c.a.createElement(E.a,Object.assign({},e.inputNumberPapeleta,{value:v.nro_ballot,handleChange:be})),c.a.createElement(E.a,Object.assign({},e.inputReasonClose,{value:v.id_reason_close,handleChange:be}),c.a.createElement("option",{value:""},"Todos..."),V.map((function(e,a){return c.a.createElement("option",{value:e.id,key:a},e.name)})))),c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:3,md:3,lg:3},c.a.createElement("label",{forhtml:"radio_option"},c.a.createElement("input",{id:"radio_option",type:"radio",name:"radio_option",value:!0,checked:!0===v.radio_option,onChange:be}),"\xa0Mostrar Todos")),c.a.createElement(d.a,{sm:3,md:3,lg:3},c.a.createElement("label",{forhtml:"radio_option1"},c.a.createElement("input",{id:"radio_option1",type:"radio",name:"radio_option",value:!1,checked:!1===v.radio_option,onChange:be}),"\xa0Fallas Cerradas OK (PVC)")),c.a.createElement(d.a,{sm:6,md:6,lg:6},c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:12,md:12,lg:12},"Garant\xedas Vencidas de Propiedad")),c.a.createElement("br",null),c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:6,md:6,lg:6},c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:6,md:6,lg:6},c.a.createElement("div",{className:"div_garanty_1"})),c.a.createElement(d.a,{sm:6,md:6,lg:6},"3 a\xf1os"))),c.a.createElement(d.a,{sm:6,md:6,lg:6},c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:6,md:6,lg:6},c.a.createElement("div",{className:"div_garanty_2"})),c.a.createElement(d.a,{sm:6,md:6,lg:6},"5 o 10 a\xf1os")))))),c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:3,md:3,lg:3},c.a.createElement(s.a,{size:"sm",type:"submit",variant:"secondary",block:!0},"Buscar")),c.a.createElement(d.a,{sm:3,md:3,lg:3},c.a.createElement(s.a,{size:"sm",type:"button",variant:"secondary",block:!0,onClick:function(){var e=P.utils.book_new(),a=[["Nr.SS","Fecha Emisi\xf3n","Proyecto","Cliente","Depto.","Modelo","Prioridad","Nro.Papeleta","Estado","Motivo Cierre","Fecha Inspecci\xf3n","D\xedas Diferencia","Fecha Ejecuci\xf3n","Fecha(N/C/A)","D\xedas Diferencia","Total D\xedas","Total Presupuesto"]];e.Props={Title:"Reporte de Solicitudes de Propiedad",Subject:"Exportaci\xf3n de Data",Author:"Veanx tecnology",CreatedDate:C().format("YYYY-MM-DD")},e.SheetNames.push("Seguimientos");var t=0;X.forEach((function(e,n){e.failures.forEach((function(e,a){t+=parseFloat(e.material_cost)+parseFloat(e.workforce_cost)+parseFloat(e.third_party_cost)})),a.push([e.id,C(e.date_request).format("DD-MM-YYYY"),e.housing.name,e.client?e.client.name+" "+e.client.last_names:"",e.ownership.number,e.ownership.models.name,e.priority.name,e.nro_ballot,e.status.status,e.reason_close?e.reason_close.name:"",e.date_inspection?C(e.date_inspection).format("DD-MM-YYYY"):"",e.date_inspection?Object(O.a)(C(e.date_inspection),C(e.date_request)):"",e.date_execution?C(e.date_execution).format("DD-MM-YYYY"):"",e.date_close?C(e.date_close).format("DD-MM-YYYY"):"",e.date_close?Object(O.a)(C(e.date_close),C(e.date_execution)):"",e.date_close?Object(O.a)(C(e.date_close),C(e.date_request)):"",t]),t=0}));var n=P.utils.aoa_to_sheet(a);e.Sheets.Seguimientos=n;var r=P.write(e,{bookType:"xlsx",type:"binary"}),l=Object(O.b)(r);Object(j.saveAs)(new Blob([l],{type:"application/octet-stream"}),"Reporte de Seguimientos"+C().format("DD-MM-YYYY")+".xlsx")}},"Exportar a Excel"))),ae?c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:12,md:12,lg:12},c.a.createElement("br",null),c.a.createElement("p",{className:"alert alert-info text-center"},"Cargado Registros..."))):""),c.a.createElement("br",null),c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:6,md:6,lg:6},c.a.createElement("h5",{className:"title_principal"},"Listado de S.S")),c.a.createElement(d.a,{sm:1,md:1,lg:1,className:"div_garanty_3"}),c.a.createElement(d.a,{sm:2,md:2,lg:2},"Fallas Ok"),c.a.createElement(d.a,{sm:3,md:3,lg:3},c.a.createElement("h5",{className:"title_principal text-right"},"N\xb0 de Registros: ",X.length))),c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:12,md:12,lg:12},c.a.createElement(N.a,{columns:k,data:X,displayPaginationUp:!0}))))),c.a.createElement(g.a,{show:ie,onHide:de,size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static"},c.a.createElement(g.a.Header,{closeButton:!0,style:{backgroundColor:"black",color:"white"}},c.a.createElement(g.a.Title,{id:"contained-modal-title-vcenter"},"Seguimientos")),c.a.createElement(g.a.Body,null,c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:12,md:12,lg:12},c.a.createElement(N.a,{columns:x.a,data:le,letrasChicas:!0})))),c.a.createElement(g.a.Footer,null,c.a.createElement(s.a,{size:"sm",variant:"danger",onClick:de},"Cerrar"))))};S.defaultProps={inputSS:{type:"text",required:!1,name:"number_ss",label:"N\xfamero SS:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputProperty:{type:"text",required:!1,name:"number_ownership",label:"Propiedad N\xfamero:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputProyect:{type:"select",required:!1,name:"id_housing_complexe",label:"Proyecto:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPriority:{type:"select",required:!1,name:"id_priority",label:"Prioridad:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputStatus:{type:"select",required:!1,name:"id_status",label:"Estado:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputFrom:{type:"date",required:!1,name:"from",label:"Desde:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputTo:{type:"date",required:!1,name:"to",label:"Hasta:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputNumberPapeleta:{type:"number",required:!1,name:"nro_ballot",label:"N\xb0 Papeleta:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputReasonClose:{type:"select",required:!1,name:"id_reason_close",label:"Motivo de Cierre:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"}},a.default=S}}]);
//# sourceMappingURL=20.1a1f1acb.chunk.js.map