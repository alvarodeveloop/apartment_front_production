(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[57],{571:function(e,a,n){"use strict";var t=n(18),r=n(574),l=n(1),c=n.n(l),s=n(577),i=n(575),o=n(576),u=n(280);function m(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return m=function(){return e},e}var p=s.a.div(m());function d(e){var a=e.column,n=a.filterValue,t=a.preFilteredRows,r=a.setFilter,l=t.length;return c.a.createElement("input",{value:n||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(l," registros..."),className:"inputPageFilter"})}function g(e,a,n){return Object(o.a)(e,n,{keys:[function(e){return e.values[a]}]})}function E(e){var a=e.columns,n=e.data,r=e.displayPaginationUp,l=e.letrasChicas,s=c.a.useMemo((function(){return{fuzzyText:g,text:function(e,a,n){return e.filter((function(e){var t=e.values[a];return void 0===t||String(t).toLowerCase().startsWith(String(n).toLowerCase())}))}}}),[]),o=c.a.useMemo((function(){return{Filter:d}}),[]),m=Object(i.useTable)({columns:a,data:n,defaultColumn:o,filterTypes:s,initialState:{pageIndex:0}},i.useFilters,i.useSortBy,i.usePagination),p=m.getTableProps,E=m.getTableBodyProps,b=m.headerGroups,f=m.page,h=m.prepareRow,v=m.canPreviousPage,w=m.canNextPage,y=m.pageOptions,x=m.pageCount,N=m.gotoPage,P=m.nextPage,k=m.previousPage,C=m.setPageSize,O=m.state,j=O.pageIndex,_=O.pageSize;return c.a.createElement("div",{className:"table-responsive"},r?c.a.createElement("div",{className:"pagination"},c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return N(0)},disabled:!v},"<<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},"<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return P()},disabled:!w},">")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return N(x-1)},disabled:!w},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,j+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(t.a)({type:"number",defaultValue:j+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;N(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:_,onChange:function(e){C(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",c.a.createElement("table",Object.assign({},p(),{className:"table table-bordered"}),c.a.createElement("thead",null,b.map((function(e,a){return c.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:a}),e.headers.map((function(e,a){return c.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:l?"14px":"15px"},key:a}),e.render("Header"),c.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),c.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),c.a.createElement("tbody",Object.assign({},E(),{className:"text-center",style:{fontSize:l?"13px":"15px"}}),f.map((function(e,a){return h(e)||c.a.createElement("tr",Object.assign({},e.getRowProps(),{key:a+"-"}),e.cells.map((function(e,a){return c.a.createElement("td",Object.assign({},e.getCellProps(),{key:a+"td"}),e.render("Cell"))})))})))),c.a.createElement("div",{className:"pagination"},c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return N(0)},disabled:!v},"<<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},"<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return P()},disabled:!w},">")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return N(x-1)},disabled:!w},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,j+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(t.a)({type:"number",defaultValue:j+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;N(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:_,onChange:function(e){C(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}g.autoRemove=function(e){return!e};a.a=function(e){var a=e.data,n=e.columns,t=e.displayPaginationUp,r=e.letrasChicas;return c.a.createElement(p,null,c.a.createElement(E,{data:a,columns:n,displayPaginationUp:t,letrasChicas:r}))}},589:function(e,a,n){},617:function(e,a,n){"use strict";var t=n(1),r=n.n(t),l=n(567),c=n(568),s=n(282);a.a=function(e){return r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement(s.a,{sm:6,md:6,lg:6},r.a.createElement("h4",{className:"text-center"},"Propietario"),r.a.createElement(c.a,null,r.a.createElement(s.a,{sm:12,md:12,lg:12},"Solicita",r.a.createElement("br",null),r.a.createElement("b",null,e.user.name))),r.a.createElement("br",null),r.a.createElement(c.a,null,r.a.createElement(s.a,{sm:12,md:12,lg:12},"Tel\xe9fono:",r.a.createElement("br",null),r.a.createElement("b",null,e.ownership?e.ownership.ownership.ownership_client.phone_1?e.ownership.ownership.ownership_client.phone_1:"no posee":""))),r.a.createElement("br",null),r.a.createElement(c.a,null,r.a.createElement(s.a,{sm:12,md:12,lg:12},"Correo Electr\xf3nico:",r.a.createElement("br",null),r.a.createElement("b",null,e.user.email),r.a.createElement("br",null)))),r.a.createElement(s.a,{sm:6,md:6,lg:6},r.a.createElement("h4",{className:"text-center"},"Propiedad"),r.a.createElement(c.a,null,r.a.createElement(s.a,{sm:12,md:12,lg:12},"N\xfamero:",r.a.createElement("br",null),r.a.createElement("b",null,e.ownership?e.ownership.ownership.number:""))),r.a.createElement("br",null),r.a.createElement(c.a,null,r.a.createElement(s.a,{sm:12,md:12,lg:12},"Proyecto:",r.a.createElement("br",null),r.a.createElement("b",null,e.ownership?e.ownership.ownership.housing_complexe.name_client_administration:""))),r.a.createElement("br",null),r.a.createElement(c.a,null,r.a.createElement(s.a,{sm:12,md:12,lg:12},"Estacionamiento(s):",r.a.createElement("br",null),e.ownership?r.a.createElement(r.a.Fragment,null,e.ownership.ownership.parkings.filter((function(e){return 2==e.type})).map((function(e,a){return r.a.createElement("span",{key:a},r.a.createElement("b",null,e.name),r.a.createElement("br",null))}))):"",r.a.createElement("b",null))),r.a.createElement("br",null),r.a.createElement(c.a,null,r.a.createElement(s.a,{sm:12,md:12,lg:12},"Bodega(s):",r.a.createElement("br",null),e.ownership?r.a.createElement(r.a.Fragment,null,e.ownership.ownership.parkings.filter((function(e){return 1==e.type})).map((function(e){return r.a.createElement("span",null,r.a.createElement("b",null,e.name),r.a.createElement("br",null))}))):"",r.a.createElement("b",null))))))}},791:function(e,a,n){"use strict";n.r(a);var t=n(18),r=n(44),l=n(30),c=n(1),s=n.n(c),i=n(31),o=n(567),u=n(568),m=n(282),p=n(10),d=n(280),g=n(571),E=n(25),b=n.n(E),f=n(288),h=n(112),v=n(34),w=n(13),y=n(617),x=n(289);n(589);a.default=Object(i.b)((function(e){return{id_ownership_selected:e.ownership.ownership_selected,ownership:e.ownership.ownerships.find((function(a){return a.id_ownership==e.ownership.ownership_selected})),user:e.auth.user}}),{})((function(e){var a=Object(c.useState)({reason:"",description:""}),n=Object(l.a)(a,2),i=n[0],E=n[1],N=Object(c.useState)(!1),P=Object(l.a)(N,2),k=P[0],C=P[1],O=Object(c.useState)([]),j=Object(l.a)(O,2),_=j[0],z=j[1],S=Object(c.useState)(!1),R=Object(l.a)(S,2),F=R[0],T=R[1],M=Object(c.useRef)(null);Object(c.useEffect)((function(){q()}),[e.id_ownership_selected]),Object(c.useEffect)((function(){M.current.focus(),q()}),[e.id_ownership_selected]);var q=function(){b.a.get(v.a+"query_ownership/"+e.id_ownership_selected+"/"+e.ownership.id_user).then((function(e){z(e.data)})).catch((function(e){e.response?w.b.error(e.response.data.message):w.b.error("Error, contacte con soporte")}))},D=function(e){E(Object(r.a)(Object(r.a)({},i),{},Object(t.a)({},e.target.name,e.target.value)))},H=function(){E({reason:"",description:""}),C(!1),T(!1)};return s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement(y.a,{ownership:e.ownership,user:e.user}))),s.a.createElement("hr",null),s.a.createElement(u.a,null,s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement(p.a,{onSubmit:function(a){var n=a.currentTarget;if(a.preventDefault(),!1===n.checkValidity())return a.stopPropagation(),void C(!0);var t=Object.assign({},i,{id_ownership:e.id_ownership_selected,id_user:e.ownership.id_user});T(!0),b.a.post(v.a+"query_ownership",t).then((function(e){w.b.success("Registro Creado"),q(),H()})).catch((function(e){T(!1),e.response?w.b.error(e.response.data.message):w.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:k},s.a.createElement(u.a,null,s.a.createElement(f.a,{ref:M,type:"select",name:"reason",label:"Motivo",required:!0,cols:"col-md-6 col-sm-6 col-lg-6",messageErrors:["Requerido*"],handleChange:D,value:i.reason},s.a.createElement("option",{value:""},"--Seleccione--"),s.a.createElement("option",{value:"1"},"Consulta"),s.a.createElement("option",{value:"2"},"Reclamo"),s.a.createElement("option",{value:"3"},"Otros"))),s.a.createElement(u.a,null,s.a.createElement(h.a,{type:"textarea",name:"description",label:"Descripci\xf3n",required:!0,cols:"col-md-12 col-sm-12 col-lg-12",messageErrors:["Requerido*"],handleChange:D,value:i.description})),s.a.createElement(u.a,{className:"justify-content-center"},s.a.createElement(m.a,{sm:6,md:6,lg:6},s.a.createElement(d.a,{disabled:F,variant:"primary",size:"sm",block:!0,type:"submit"},"Enviar"))),F?s.a.createElement(u.a,null,s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement("br",null),s.a.createElement("p",{className:"alert alert-danger text-center"},"Enviando..."))):""))),s.a.createElement("br",null),s.a.createElement(u.a,null,s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement(g.a,{columns:[{Header:"Razon",accessor:function(e){return 1==e.reason?["Consulta"]:2==e.reason?["Reclamo"]:["Otros"]}},{Header:"Descripci\xf3n",accessor:"description"},{Header:"Creaci\xf3n",accessor:function(e){return[x(e.createdAt).format("DD-MM-YYYY")]}}],data:_}))))}))}}]);
//# sourceMappingURL=57.fb778485.chunk.js.map