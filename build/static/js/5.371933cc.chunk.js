(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[5],{571:function(e,a,t){"use strict";var n=t(18),r=t(574),l=t(1),o=t.n(l),s=t(577),c=t(575),i=t(576),u=t(280);function m(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return m=function(){return e},e}var d=s.a.div(m());function p(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter,l=n.length;return o.a.createElement("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(l," registros..."),className:"inputPageFilter"})}function g(e,a,t){return Object(i.a)(e,t,{keys:[function(e){return e.values[a]}]})}function b(e){var a=e.columns,t=e.data,r=e.displayPaginationUp,l=e.letrasChicas,s=o.a.useMemo((function(){return{fuzzyText:g,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),i=o.a.useMemo((function(){return{Filter:p}}),[]),m=Object(c.useTable)({columns:a,data:t,defaultColumn:i,filterTypes:s,initialState:{pageIndex:0}},c.useFilters,c.useSortBy,c.usePagination),d=m.getTableProps,b=m.getTableBodyProps,f=m.headerGroups,E=m.page,_=m.prepareRow,h=m.canPreviousPage,v=m.canNextPage,y=m.pageOptions,O=m.pageCount,j=m.gotoPage,x=m.nextPage,S=m.previousPage,P=m.setPageSize,C=m.state,w=C.pageIndex,N=C.pageSize;return o.a.createElement("div",{className:"table-responsive"},r?o.a.createElement("div",{className:"pagination"},o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(0)},disabled:!h},"<<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return S()},disabled:!h},"<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!v},">")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(O-1)},disabled:!v},">>")," ",o.a.createElement("span",null,"P\xe1gina"," ",o.a.createElement("strong",null,w+1," de ",y.length)," "),o.a.createElement("span",{className:"ml-3"},"| ",o.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),o.a.createElement("input",Object(n.a)({type:"number",defaultValue:w+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;j(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",o.a.createElement("select",{value:N,onChange:function(e){P(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return o.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",o.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),o.a.createElement("thead",null,f.map((function(e,a){return o.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:a}),e.headers.map((function(e,a){return o.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:l?"14px":"15px"},key:a}),e.render("Header"),o.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),o.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),o.a.createElement("tbody",Object.assign({},b(),{className:"text-center",style:{fontSize:l?"13px":"15px"}}),E.map((function(e,a){return _(e)||o.a.createElement("tr",Object.assign({},e.getRowProps(),{key:a+"-"}),e.cells.map((function(e,a){return o.a.createElement("td",Object.assign({},e.getCellProps(),{key:a+"td"}),e.render("Cell"))})))})))),o.a.createElement("div",{className:"pagination"},o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(0)},disabled:!h},"<<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return S()},disabled:!h},"<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!v},">")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(O-1)},disabled:!v},">>")," ",o.a.createElement("span",null,"P\xe1gina"," ",o.a.createElement("strong",null,w+1," de ",y.length)," "),o.a.createElement("span",{className:"ml-3"},"| ",o.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),o.a.createElement("input",Object(n.a)({type:"number",defaultValue:w+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;j(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",o.a.createElement("select",{value:N,onChange:function(e){P(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return o.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}g.autoRemove=function(e){return!e};a.a=function(e){var a=e.data,t=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return o.a.createElement(d,null,o.a.createElement(b,{data:a,columns:t,displayPaginationUp:n,letrasChicas:r}))}},584:function(e,a,t){},585:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return c}));var n=t(1),r=t.n(n),l=t(289),o=t(588),s=[{Header:"Nro",accessor:"id",Cell:function(e){return r.a.createElement(o.a,{variant:"danger",style:{fontSize:"14px"}},e.cell.row.original.id)}},{Header:"Fecha",accessor:function(e){return[l(e.createdAt).format("DD-MM-YYYY hh:mm:ss")]}},{Header:"Autor",accessor:function(e){return[e.user.email]}},{Header:"Detalle",accessor:"detail",Cell:function(e){var a=e.cell.row.original;return-1===a.detail.indexOf("/")?a.detail.split("@").map((function(e,a){return r.a.createElement("div",{style:{width:"100%"}},e,r.a.createElement("hr",null))})):a.detail.split("/").map((function(e,a){return r.a.createElement("div",{style:{width:"100%"}},e,r.a.createElement("br",null))}))}},{Header:"Privado",accessor:function(e){return e.is_private?["Si"]:["No"]}},{Header:"Documento",accessor:function(e){return["-"]}}],c=[{Header:"Nro",accessor:"id",Cell:function(e){return r.a.createElement(o.a,{variant:"danger",style:{fontSize:"14px"}},e.cell.row.original.id)}},{Header:"Fecha",accessor:function(e){return[l(e.createdAt).format("DD-MM-YYYY hh:mm:ss")]}},{Header:"Autor",accessor:function(e){return[e.user.email]}},{Header:"Detalle",accessor:"detail",Cell:function(e){var a=e.cell.row.original;return-1!==a.detail.indexOf("/")?a.detail.split("/").map((function(e,a){return r.a.createElement("div",{style:{width:"100%"}},e,r.a.createElement("br",null))})):a.detail.split("@").map((function(e,a){return r.a.createElement("div",{style:{width:"100%"}},e,r.a.createElement("br",null))}))}},{Header:"Privado",accessor:function(e){return e.is_private?["Si"]:["No"]}},{Header:"Documento",accessor:function(e){return["-"]}}]},588:function(e,a,t){"use strict";var n=t(2),r=t(4),l=t(6),o=t.n(l),s=t(1),c=t.n(s),i=t(7),u=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,s=e.pill,u=e.className,m=e.as,d=void 0===m?"span":m,p=Object(r.a)(e,["bsPrefix","variant","pill","className","as"]),g=Object(i.b)(t,"badge");return c.a.createElement(d,Object(n.a)({ref:a},p,{className:o()(u,g,s&&g+"-pill",l&&g+"-"+l)}))}));u.displayName="Badge",u.defaultProps={pill:!1},a.a=u},590:function(e,a){},592:function(e,a){},593:function(e,a){},745:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(44),l=t(30),o=t(1),s=t.n(o),c=t(280),i=t(567),u=t(568),m=t(282),d=t(10),p=t(800),g=(t(584),t(288)),b=t(112),f=t(13),E=t(25),_=t.n(E),h=t(34),v=t(571),y=t(289),O=t(585),j=t(50),x=t(582),S=t(591),P=[],C=function(e){var a=Object(o.useState)({id_reason_close:"",nro_ballot:"",to:"",from:"",id_status_ss:"",id_priority:"",id_housing_complexe:"",number_ownership:"",number_ss:"",radio_option:"",id_precint:"",id_status_failure:"",id_reason_failure:"",id_tipology_failure:"",id_point_failure:""}),t=Object(l.a)(a,2),E=t[0],C=t[1],w=Object(o.useState)(!1),N=Object(l.a)(w,2),k=N[0],F=(N[1],Object(o.useState)([])),H=Object(l.a)(F,2),M=H[0],Y=H[1],D=Object(o.useState)([]),T=Object(l.a)(D,2),z=T[0],R=T[1],q=Object(o.useState)([]),V=Object(l.a)(q,2),I=V[0],A=V[1],B=Object(o.useState)([]),L=Object(l.a)(B,2),U=L[0],G=L[1],J=Object(o.useState)([]),W=Object(l.a)(J,2),K=W[0],Q=W[1],X=Object(o.useState)([]),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],ae=Object(o.useState)([]),te=Object(l.a)(ae,2),ne=te[0],re=te[1],le=Object(o.useState)([]),oe=Object(l.a)(le,2),se=oe[0],ce=oe[1],ie=Object(o.useState)([]),ue=Object(l.a)(ie,2),me=ue[0],de=ue[1],pe=Object(o.useState)([]),ge=Object(l.a)(pe,2),be=ge[0],fe=ge[1],Ee=Object(o.useState)([]),_e=Object(l.a)(Ee,2),he=_e[0],ve=_e[1],ye=Object(o.useState)(!1),Oe=Object(l.a)(ye,2),je=Oe[0],xe=Oe[1],Se=Object(o.useRef)(null);Object(o.useEffect)((function(){return Pe(!0),setTimeout((function(){Se.current.focus()}),500),function(){P=[]}}),[]),Object(o.useMemo)((function(){P=[{Header:"Nro.SS",accessor:function(e){return[e.ownership_ss.id]}},{Header:"Fecha Emisi\xf3n",accessor:function(e){return[y(e.ownership_ss.date_request).format("DD-MM-YYYY")]}},{Header:"Fecha Aplica PVC",accessor:function(e){return[]}},{Header:"Cliente",accessor:function(e){return[e.ownership_ss.client.name+" "+e.ownership_ss.client.last_names]}},{Header:"Depto.",accessor:function(e){return[e.ownership_ss.ownership.number]}},{Header:"M\xf3delo",accessor:function(e){return[e.ownership_ss.ownership.models.name]}},{Header:"Proyecto",accessor:function(e){return[e.ownership_ss.housing.name]}},{Header:"Recinto",accessor:function(e){return[e.precint.name]}},{Header:"Tipolog\xeda de Falla",accessor:function(e){return[e.tipology.name]}},{Header:"Falla Puntual",accessor:function(e){return[e.point.name]}},{Header:"Motivo Falla",accessor:function(e){return e.reason_failure?[e.reason_failure.name]:[]}},{Header:"Prioridad",accessor:function(e){return[e.ownership_ss.priority.name]}},{Header:"Nro.Papeleta",accessor:function(e){return[e.ownership_ss.nro_ballot]}},{Header:"Seguimiento",Cell:function(e){var a=e.cell.row.original;return s.a.createElement(c.a,{type:"button",size:"sm",onClick:function(){return Ce(a.following_failure)},block:!0,variant:"secondary"},"Seguimientos")}},{Header:"Estado",accessor:function(e){return[e.status.status]}},{Header:"Motivo Cierre",accessor:function(e){return e.reason_close?[e.reason_close.name]:[]}},{Header:"Fecha Cierre",accessor:function(e){return e.date_close?[y(e.date_close).format("DD-MM-YYYY")]:[]}},{Header:"Valor Materiales",accessor:"material_cost"},{Header:"Valor Mano de Obra",accessor:"workforce_cost"},{Header:"Valor Tercero",accessor:"third_party_cost"}]}),[]);var Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=[_.a.get(h.a+"get_status"),_.a.get(h.a+"get_status_failure"),_.a.get(h.a+"housing_complexe"),_.a.get(h.a+"params_service_priority"),_.a.get(h.a+"master_precint"),_.a.get(h.a+"params_manage_problems_tipology"),_.a.get(h.a+"params_manage_problems_point_failures"),_.a.get(h.a+"get_reason_failures"),_.a.get(h.a+"params_service_reason_close")],t=[_.a.get(h.a+"ownership_failure_ss")];e&&(t=t.concat(a)),Promise.all(t).then((function(a){fe(a[0].data),e&&(Y(a[1].data),R(a[2].data),A(a[3].data),G(a[4].data),Q(a[5].data),ee(a[6].data),re(a[7].data),ce(a[8].data),de(a[9].data))})).catch((function(e){e.response?f.b.error(e.response.data.message):(console.log(e),f.b.error("Error, contacte con soporte"))}))},Ce=function(e){ve(e),we()},we=function(){xe(!je)},Ne=function(e){"radio_option"===e.target.name?C(Object(r.a)(Object(r.a)({},E),{},Object(n.a)({},e.target.name,e.target.checked))):C(Object(r.a)(Object(r.a)({},E),{},Object(n.a)({},e.target.name,e.target.value)))};return s.a.createElement(i.a,{fluid:!0},s.a.createElement(u.a,{className:"containerDiv"},s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement(u.a,{className:""},s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement("h4",{className:"text-center title_principal"},"SEGUIMIENTO DE FALLAS POR SOLICITUDES DE SERVICIO"),s.a.createElement("hr",null))),s.a.createElement(u.a,null,s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement(d.a,{onSubmit:function(e){e.preventDefault();var a=Object.assign({},E);_.a.post(h.a+"ownership_failure_ss_by_filter",a).then((function(e){fe(e.data)})).catch((function(e){e.response?f.b.error(e.response.data.message):f.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:k},s.a.createElement(u.a,null,s.a.createElement(g.a,Object.assign({},e.inputSS,{value:E.number_ss,handleChange:Ne,ref:Se})),s.a.createElement(b.a,Object.assign({},e.inputProperty,{value:E.number_ownership,handleChange:Ne})),s.a.createElement(b.a,Object.assign({},e.inputNumberPapeleta,{value:E.nro_ballot,handleChange:Ne}))),s.a.createElement(u.a,null,s.a.createElement(b.a,Object.assign({},e.inputProyect,{value:E.id_housing_complexe,handleChange:Ne}),s.a.createElement("option",{value:""},"--Seleccione--"),I.map((function(e,a){return s.a.createElement("option",{key:a,value:e.id},e.name)}))),s.a.createElement(b.a,Object.assign({},e.inputPriority,{value:E.id_priority,handleChange:Ne}),s.a.createElement("option",{value:""},"Todas..."),U.map((function(e,a){return s.a.createElement("option",{key:a,value:e.id},e.name)}))),s.a.createElement(b.a,Object.assign({},e.inputRecinto,{value:E.id_precint,handleChange:Ne}),s.a.createElement("option",{value:""},"--Seleccione--"),K.map((function(e,a){return s.a.createElement("option",{key:a,value:e.id},e.name)})))),s.a.createElement(u.a,null,s.a.createElement(b.a,Object.assign({},e.inputTipologyFail,{value:E.id_tipology_failure,handleChange:Ne}),s.a.createElement("option",{value:""},"--Seleccione--"),$.map((function(e,a){return s.a.createElement("option",{key:a,value:e.id},e.name)}))),s.a.createElement(b.a,Object.assign({},e.inputPuntualFail,{value:E.id_point_failure,handleChange:Ne}),s.a.createElement("option",{value:""},"--Seleccione--"),ne.map((function(e,a){return s.a.createElement("option",{key:a,value:e.id},e.name)}))),s.a.createElement(b.a,Object.assign({},e.inputStatusSS,{value:E.id_status_ss,handleChange:Ne}),s.a.createElement("option",{value:""},"Todas..."),M.map((function(e,a){return s.a.createElement("option",{key:a,value:e.id},e.status)})))),s.a.createElement(u.a,null,s.a.createElement(b.a,Object.assign({},e.inputStautsFail,{value:E.id_status_failure,handleChange:Ne}),s.a.createElement("option",{value:""},"--Seleccione--"),z.map((function(e,a){return s.a.createElement("option",{key:a,value:e.id},e.status)}))),s.a.createElement(b.a,Object.assign({},e.inputFrom,{value:E.from,handleChange:Ne})),s.a.createElement(b.a,Object.assign({},e.inputTo,{value:E.to,handleChange:Ne}))),s.a.createElement(u.a,null,s.a.createElement(b.a,Object.assign({},e.inputReasonFail,{value:E.id_reason_failure,handleChange:Ne}),s.a.createElement("option",{value:""},"Todos..."),se.map((function(e,a){return s.a.createElement("option",{key:a,value:e.id},e.name)}))),s.a.createElement(b.a,Object.assign({},e.inputReasonClose,{value:E.id_reason_close,handleChange:Ne}),s.a.createElement("option",{value:""},"Todos..."),me.map((function(e,a){return s.a.createElement("option",{key:a,value:e.id},e.name)}))),s.a.createElement(m.a,{sm:4,md:4,lg:4},s.a.createElement("br",null),s.a.createElement("label",{forHtml:"show_all"},s.a.createElement("input",{id:"show_all",type:"checkbox",name:"radio_option",checked:E.radio_option,onChange:Ne}),"\xa0Mostrar Todos"))),s.a.createElement(u.a,null,s.a.createElement(m.a,{sm:3,md:3,lg:3},s.a.createElement(c.a,{size:"sm",type:"submit",variant:"secondary",block:!0},"Buscar")),s.a.createElement(m.a,{sm:3,md:3,lg:3},s.a.createElement(c.a,{size:"sm",type:"button",variant:"secondary",block:!0,onClick:function(){var e=S.utils.book_new(),a=[["Nr.SS","Fecha Emisi\xf3n","Cliente","Departamento","Modelo","Proyecto","Recinto","Tipologia de Falla","Falla Puntual","Motivo Falla","Prioridad","Nro.Papeleta","Estado","Motivo Cierre","Fecha Cierre","Valor Materiales","Valor Mano de Obra","Valor Tercero"]];e.Props={Title:"Reporte de Fallas de Propiedad",Subject:"Exportaci\xf3n de Data",Author:"Veanx tecnology",CreatedDate:y().format("YYYY-MM-DD")},e.SheetNames.push("Fallas");be.forEach((function(e,t){a.push([e.ownership_ss.id,y(e.ownership_ss.date_request).format("DD-MM-YYYY"),e.ownership_ss.client?e.ownership_ss.client.name+" "+e.ownership_ss.client.last_names:"",e.ownership_ss.ownership.number,e.ownership_ss.ownership.models.name,e.ownership_ss.housing.name,e.precint.name,e.tipology.name,e.point.name,e.reason_failure?e.reason_failure.name:"",e.ownership_ss.priority.name,e.ownership_ss.nro_ballot,e.status.status,e.reason_close?e.reason_close.name:"",e.date_close?y(e.date_close).format("DD-MM-YYYY"):"",e.material_cost?Object(j.d)(e.material_cost):"",e.workforce_cost?Object(j.d)(e.workforce_cost):"",e.third_party_cost?Object(j.d)(e.third_party_cost):""])}));var t=S.utils.aoa_to_sheet(a);e.Sheets.Fallas=t;var n=S.write(e,{bookType:"xlsx",type:"binary"}),r=Object(j.b)(n);Object(x.saveAs)(new Blob([r],{type:"application/octet-stream"}),"Reporte de Fallas de Propiedad"+y().format("DD-MM-YYYY")+".xlsx")}},"Exportar a Excel")))))),s.a.createElement("br",null),s.a.createElement(u.a,null,s.a.createElement(m.a,{sm:6,md:6,lg:6},s.a.createElement("h5",{className:"title_principal"},"Listado de S.S")),s.a.createElement(m.a,{sm:6,md:6,lg:6},s.a.createElement("h5",{className:"title_principal text-right"},"N\xb0 de Registros: 0"))),s.a.createElement(u.a,null,s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement(v.a,{columns:P,data:be,displayPaginationUp:!0}))))),s.a.createElement(p.a,{show:je,onHide:we,size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static"},s.a.createElement(p.a.Header,{closeButton:!0,style:{backgroundColor:"black",color:"white"}},s.a.createElement(p.a.Title,{id:"contained-modal-title-vcenter"},"Seguimientos")),s.a.createElement(p.a.Body,null,s.a.createElement(u.a,null,s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement(v.a,{columns:O.b,data:he,letrasChicas:!0})))),s.a.createElement(p.a.Footer,null,s.a.createElement(c.a,{size:"sm",variant:"danger",onClick:we},"Cerrar"))))};C.defaultProps={inputSS:{type:"text",required:!1,name:"number_ss",label:"N\xfamero SS:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputProperty:{type:"text",required:!1,name:"number_ownership",label:"Propiedad N\xfamero:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputProyect:{type:"select",required:!1,name:"id_housing_complexe",label:"Proyecto:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPriority:{type:"select",required:!1,name:"id_priority",label:"Prioridad:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputStatusSS:{type:"select",required:!1,name:"id_status_ss",label:"Estado S.S:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputFrom:{type:"date",required:!1,name:"from",label:"Desde:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputTo:{type:"date",required:!1,name:"to",label:"Hasta:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputNumberPapeleta:{type:"number",required:!1,name:"nro_ballot",label:"N\xb0 Papeleta:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputReasonClose:{type:"select",required:!1,name:"id_reason_close",label:"Motivo de Cierre:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputRecinto:{type:"select",required:!1,name:"id_precint",label:"Recinto:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputTipologyFail:{type:"select",required:!1,name:"id_tipology_failure",label:"Tipolog\xeda de Falla:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPuntualFail:{type:"select",required:!1,name:"id_point_failure",label:"Falla Puntual:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputStautsFail:{type:"select",required:!1,name:"id_status_failure",label:"Estado Falla:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputReasonFail:{type:"select",required:!1,name:"id_reason_failure",label:"Motivo de Falla:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"}},a.default=C}}]);
//# sourceMappingURL=5.371933cc.chunk.js.map