(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[71],{571:function(e,a,t){"use strict";var n=t(18),r=t(574),s=t(1),l=t.n(s),c=t(577),o=t(575),i=t(576),u=t(280);function m(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return m=function(){return e},e}var p=c.a.div(m());function d(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter,s=n.length;return l.a.createElement("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(s," registros..."),className:"inputPageFilter"})}function g(e,a,t){return Object(i.a)(e,t,{keys:[function(e){return e.values[a]}]})}function b(e){var a=e.columns,t=e.data,r=e.displayPaginationUp,s=e.letrasChicas,c=l.a.useMemo((function(){return{fuzzyText:g,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),i=l.a.useMemo((function(){return{Filter:d}}),[]),m=Object(o.useTable)({columns:a,data:t,defaultColumn:i,filterTypes:c,initialState:{pageIndex:0}},o.useFilters,o.useSortBy,o.usePagination),p=m.getTableProps,b=m.getTableBodyProps,f=m.headerGroups,v=m.page,E=m.prepareRow,h=m.canPreviousPage,x=m.canNextPage,y=m.pageOptions,P=m.pageCount,C=m.gotoPage,N=m.nextPage,w=m.previousPage,k=m.setPageSize,O=m.state,j=O.pageIndex,z=O.pageSize;return l.a.createElement("div",{className:"table-responsive"},r?l.a.createElement("div",{className:"pagination"},l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C(0)},disabled:!h},"<<")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return w()},disabled:!h},"<")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return N()},disabled:!x},">")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C(P-1)},disabled:!x},">>")," ",l.a.createElement("span",null,"P\xe1gina"," ",l.a.createElement("strong",null,j+1," de ",y.length)," "),l.a.createElement("span",{className:"ml-3"},"| ",l.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),l.a.createElement("input",Object(n.a)({type:"number",defaultValue:j+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;C(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",l.a.createElement("select",{value:z,onChange:function(e){k(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return l.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",l.a.createElement("table",Object.assign({},p(),{className:"table table-bordered"}),l.a.createElement("thead",null,f.map((function(e,a){return l.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:a}),e.headers.map((function(e,a){return l.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:s?"14px":"15px"},key:a}),e.render("Header"),l.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),l.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),l.a.createElement("tbody",Object.assign({},b(),{className:"text-center",style:{fontSize:s?"13px":"15px"}}),v.map((function(e,a){return E(e)||l.a.createElement("tr",Object.assign({},e.getRowProps(),{key:a+"-"}),e.cells.map((function(e,a){return l.a.createElement("td",Object.assign({},e.getCellProps(),{key:a+"td"}),e.render("Cell"))})))})))),l.a.createElement("div",{className:"pagination"},l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C(0)},disabled:!h},"<<")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return w()},disabled:!h},"<")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return N()},disabled:!x},">")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C(P-1)},disabled:!x},">>")," ",l.a.createElement("span",null,"P\xe1gina"," ",l.a.createElement("strong",null,j+1," de ",y.length)," "),l.a.createElement("span",{className:"ml-3"},"| ",l.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),l.a.createElement("input",Object(n.a)({type:"number",defaultValue:j+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;C(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",l.a.createElement("select",{value:z,onChange:function(e){k(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return l.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}g.autoRemove=function(e){return!e};a.a=function(e){var a=e.data,t=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return l.a.createElement(p,null,l.a.createElement(b,{data:a,columns:t,displayPaginationUp:n,letrasChicas:r}))}},781:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(44),s=t(30),l=t(1),c=t.n(l),o=t(567),i=t(568),u=t(282),m=t(10),p=t(280),d=(t(571),t(25)),g=t.n(d),b=t(288),f=t(112),v=t(34),E=t(13),h=function(e){var a=Object(l.useState)(!1),t=Object(s.a)(a,2),d=t[0],h=t[1],x=Object(l.useState)({password_actual:"",password:"",password_repeat:""}),y=Object(s.a)(x,2),P=y[0],C=y[1],N=Object(l.useRef)(null);Object(l.useEffect)((function(){N.current.focus()}),[]);var w=function(e){C(Object(r.a)(Object(r.a)({},P),{},Object(n.a)({},e.target.name,e.target.value)))};return c.a.createElement(o.a,null,c.a.createElement(i.a,{className:"containerDiv"},c.a.createElement(u.a,{sm:12,md:12,lg:12,xs:12,className:""},c.a.createElement("h4",{className:"title_principal"},"Cambiar Contrase\xf1a"),c.a.createElement("hr",null)),c.a.createElement(u.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},c.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement(u.a,{sm:12,md:12,lg:12,xs:12},c.a.createElement(m.a,{onSubmit:function(e){var a=e.currentTarget;if(e.preventDefault(),!1===a.checkValidity())return e.stopPropagation(),void h(!0);var t=Object.assign({},P);g.a.post(v.a+"user_change_password",t).then((function(e){E.b.success("Contrase\xf1a Cambiada"),C({password:"",password_repeat:"",password_actual:""})})).catch((function(e){e.response?E.b.error(e.response.data.message):E.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:d},c.a.createElement(i.a,null,c.a.createElement(b.a,Object.assign({ref:N},e.inputPasswordActual,{value:P.password_actual,handleChange:w})),c.a.createElement(f.a,Object.assign({},e.inputPassword,{value:P.password,handleChange:w}))),c.a.createElement(i.a,null,c.a.createElement(f.a,Object.assign({},e.inputPasswordRepeat,{value:P.password_repeat,handleChange:w})),c.a.createElement(u.a,{sm:6,md:6,lg:6},c.a.createElement("br",null),c.a.createElement(p.a,{size:"sm",type:"submit",variant:"primary",block:!0},"Guardar Datos")))))))};h.defaultProps={inputPasswordActual:{type:"password",required:!0,name:"password_actual",label:"Contrase\xf1a Actual",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputPassword:{type:"password",required:!0,name:"password",label:"Contrase\xf1a Nueva",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputPasswordRepeat:{type:"password",required:!0,name:"password_repeat",label:"Repita Contrase\xf1a",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"}},a.default=h}}]);
//# sourceMappingURL=71.d3681ad3.chunk.js.map