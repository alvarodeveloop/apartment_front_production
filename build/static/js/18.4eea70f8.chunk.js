(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[18],{580:function(e,t,n){"use strict";var a=n(27),r=n(584),o=n(0),l=n.n(o),i=n(587),c=n(585),s=n(586),u=n(139);function m(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return m=function(){return e},e}var d=i.a.div(m());function f(e){var t=e.column,n=t.filterValue,a=t.preFilteredRows,r=t.setFilter,o=a.length;return l.a.createElement("input",{value:n||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(o," registros..."),className:"inputPageFilter"})}function p(e,t,n){return Object(s.a)(e,n,{keys:[function(e){return e.values[t]}]})}function g(e){var t=e.columns,n=e.data,r=e.displayPaginationUp,o=e.letrasChicas,i=l.a.useMemo((function(){return{fuzzyText:p,text:function(e,t,n){return e.filter((function(e){var a=e.values[t];return void 0===a||String(a).toLowerCase().startsWith(String(n).toLowerCase())}))}}}),[]),s=l.a.useMemo((function(){return{Filter:f}}),[]),m=Object(c.useTable)({columns:t,data:n,defaultColumn:s,filterTypes:i,initialState:{pageIndex:0}},c.useFilters,c.useSortBy,c.usePagination),d=m.getTableProps,g=m.getTableBodyProps,b=m.headerGroups,v=m.page,E=m.prepareRow,y=m.canPreviousPage,h=m.canNextPage,C=m.pageOptions,k=m.pageCount,N=m.gotoPage,O=m.nextPage,x=m.previousPage,P=m.setPageSize,w=m.state,j=w.pageIndex,M=w.pageSize;return l.a.createElement("div",{className:"table-responsive"},r?l.a.createElement("div",{className:"pagination"},l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return N(0)},disabled:!y},"<<")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!y},"<")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O()},disabled:!h},">")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return N(k-1)},disabled:!h},">>")," ",l.a.createElement("span",null,"P\xe1gina"," ",l.a.createElement("strong",null,j+1," de ",C.length)," "),l.a.createElement("span",{className:"ml-3"},"| ",l.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),l.a.createElement("input",Object(a.a)({type:"number",defaultValue:j+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;N(t)},className:"inputPage"},"onChange",(function(e){e.target.value>C.length&&(e.target.value=1)}))))," ",l.a.createElement("select",{value:M,onChange:function(e){P(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return l.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",l.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),l.a.createElement("thead",null,b.map((function(e,t){return l.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:t}),e.headers.map((function(e,t){return l.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:o?"14px":"15px"},key:t}),e.render("Header"),l.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),l.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),l.a.createElement("tbody",Object.assign({},g(),{className:"text-center",style:{fontSize:o?"13px":"15px"}}),v.map((function(e,t){return E(e)||l.a.createElement("tr",Object.assign({},e.getRowProps(),{key:t+"-"}),e.cells.map((function(e,t){return l.a.createElement("td",Object.assign({},e.getCellProps(),{key:t+"td"}),e.render("Cell"))})))})))),l.a.createElement("div",{className:"pagination"},l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return N(0)},disabled:!y},"<<")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!y},"<")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O()},disabled:!h},">")," ",l.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return N(k-1)},disabled:!h},">>")," ",l.a.createElement("span",null,"P\xe1gina"," ",l.a.createElement("strong",null,j+1," de ",C.length)," "),l.a.createElement("span",{className:"ml-3"},"| ",l.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),l.a.createElement("input",Object(a.a)({type:"number",defaultValue:j+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;N(t)},className:"inputPage"},"onChange",(function(e){e.target.value>C.length&&(e.target.value=1)}))))," ",l.a.createElement("select",{value:M,onChange:function(e){P(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return l.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}p.autoRemove=function(e){return!e};t.a=function(e){var t=e.data,n=e.columns,a=e.displayPaginationUp,r=e.letrasChicas;return l.a.createElement(d,null,l.a.createElement(g,{data:t,columns:n,displayPaginationUp:a,letrasChicas:r}))}},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var a=document.createElementNS(e,"svg");a.setAttribute("id","react-confirm-alert-firm-svg"),a.setAttribute("class","react-confirm-alert-svg"),a.appendChild(n),document.body.appendChild(a)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,s.render)(i.default.createElement(f,e),t)}(e)};var l=n(0),i=u(l),c=u(n(6)),s=n(38);function u(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=(r=a=function(e){function t(){var e,n,a;m(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return n=a=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.handleClickButton=function(e){e.onClick&&e.onClick(),a.close()},a.handleClickOverlay=function(e){var t=a.props,n=t.closeOnClickOutside,r=t.onClickOutside,o=e.target===a.overlay;n&&o&&(r(),a.close())},a.close=function(){var e=a.props.afterClose;b(),g(),p(e)},a.keyboardClose=function(e){var t=a.props,n=t.closeOnEscape,r=t.onKeypressEscape,o=27===e.keyCode;n&&o&&(r(e),a.close())},a.componentDidMount=function(){document.addEventListener("keydown",a.keyboardClose,!1)},a.componentWillUnmount=function(){document.removeEventListener("keydown",a.keyboardClose,!1),a.props.willUnmount()},a.renderCustomUI=function(){var e=a.props,t=e.title,n=e.message,r=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:r,onClose:a.close})},d(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.message,r=t.buttons,o=t.childrenElement,l=t.customUI;return i.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},i.default.createElement("div",{className:"react-confirm-alert"},l?this.renderCustomUI():i.default.createElement("div",{className:"react-confirm-alert-body"},n&&i.default.createElement("h1",null,n),a,o(),i.default.createElement("div",{className:"react-confirm-alert-button-group"},r.map((function(t,n){return i.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(l.Component),a.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func},a.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},r);function p(e){var t=document.getElementById("react-confirm-alert-firm-svg");t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function g(){var e=document.getElementById("react-confirm-alert");e&&((0,s.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function b(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=f},583:function(e,t,n){},588:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),l=n.n(o),i=n(6),c=n.n(i),s=n(571),u={id:c.a.any,href:c.a.string,onClick:c.a.func,title:c.a.node.isRequired,disabled:c.a.bool,menuRole:c.a.string,renderMenuOnMount:c.a.bool,rootCloseEvent:c.a.string,bsPrefix:c.a.string,variant:c.a.string,size:c.a.string},m=l.a.forwardRef((function(e,t){var n=e.title,o=e.children,i=e.bsPrefix,c=e.rootCloseEvent,u=e.variant,m=e.size,d=e.menuRole,f=e.renderMenuOnMount,p=e.disabled,g=e.href,b=e.id,v=Object(r.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id"]);return l.a.createElement(s.a,Object(a.a)({ref:t},v),l.a.createElement(s.a.Toggle,{id:b,href:g,size:m,variant:u,disabled:p,childBsPrefix:i},n),l.a.createElement(s.a.Menu,{role:d,renderOnMount:f,rootCloseEvent:c},o))}));m.displayName="DropdownButton",m.propTypes=u,t.a=m},597:function(e,t){},603:function(e,t){},604:function(e,t){},788:function(e,t,n){"use strict";n.r(t);var a=n(77),r=n(0),o=n.n(r),l=n(139),i=n(588),c=n(571),s=n(570),u=n(140),m=n(84),d=n(572),f=n(580),p=n(582),g=(n(583),n(43)),b=n.n(g),v=n(28),E=n(76),y=n(44),h=n(590),C=n(602),k=n(286),N=[];t.default=function(e){var t=Object(r.useState)([]),n=Object(a.a)(t,2),g=n[0],O=n[1];Object(r.useEffect)((function(){return P(),function(){N=[]}}),[]),Object(r.useMemo)((function(){N=[{Header:"Rut",accessor:"rut",Cell:function(e){return o.a.createElement(l.a,{variant:"link",onClick:function(){w(e.cell.row.original)}},e.cell.row.original.rut)}},{Header:"Nombre",accessor:"name"},{Header:"Apellidos",accessor:"last_names"},{Header:"Direcci\xf3n",accessor:"address"},{Header:"Email",accessor:"email"},{Header:"Acciones",Cell:function(e){var t=e.cell.row.original.id;return o.a.createElement(i.a,{id:"drop"+t,title:"Seleccione",block:"true",size:"sm"},o.a.createElement(c.a.Item,{onClick:function(){return w(e.cell.row.original)}},"Modificar"),o.a.createElement(c.a.Item,{onClick:function(){return x(t)}},"Eliminar"))}}]}),[]);var x=function(e){Object(p.confirmAlert)({customUI:function(t){var n=t.onClose;return o.a.createElement("div",{className:"custom-ui-edit"},o.a.createElement("h1",null,"\xbfEsta seguro?"),o.a.createElement("p",{className:"font-alert"},"\xbfDesea realmente borrar este registro?"),o.a.createElement("button",{className:"button-alert",onClick:function(){!function(e){b.a.delete(E.a+"client/"+e).then((function(e){v.NotificationManager.success("Registro Eliminado"),P()})).catch((function(e){e.response?v.NotificationManager.error(e.response.data.message):v.NotificationManager.error("Error, contacte con soporte")}))}(e),n()}},"Si, Aceptar"),o.a.createElement("button",{className:"button-alert",onClick:n},"No"))}})},P=function(){b.a.get(E.a+"client").then((function(e){O(e.data)})).catch((function(e){e.response?v.NotificationManager.error(e.response.data.message):v.NotificationManager.error("Error, contacte con soporte")}))},w=function(t){e.history.replace("/masters/clients/form/"+t.id)};return o.a.createElement(s.a,{fluid:!0},o.a.createElement(u.a,{className:"containerDiv"},o.a.createElement(m.a,{sm:12,md:12,lg:12},o.a.createElement(u.a,{className:"justify-content-center"},o.a.createElement(m.a,{sm:4,md:4,lg:4},o.a.createElement(l.a,{variant:"secondary",size:"sm",block:!0,onClick:function(){e.history.replace("/masters/clients/form")}},"Crear Cliente ",o.a.createElement(d.d,null))),o.a.createElement(m.a,{sm:4,md:4,lg:4},o.a.createElement(l.a,{variant:"success",size:"sm",block:!0,onClick:function(){var e=C.utils.book_new(),t=[["Rut","Dv","Nombre","Apellidos","Direcci\xf3n","Poblaci\xf3n","Cod.Pa\xeds","Cod.Ciudad","Fono1","Fono2","Email"]];e.Props={Title:"Reporte de Clientes",Subject:"Exportaci\xf3n de Data",Author:"Veanx tecnology",CreatedDate:k().format("YYYY-MM-DD")},e.SheetNames.push("Clientes"),g.forEach((function(e,n){t.push([e.rut,e.rut.split("-")[1],e.name,e.last_names,e.address,e.poblation,e.id_country,e.id_city,e.phone1,e.phone2,e.email])}));var n=C.utils.aoa_to_sheet(t);e.Sheets.Clientes=n;var a=C.write(e,{bookType:"xlsx",type:"binary"}),r=Object(y.b)(a);Object(h.saveAs)(new Blob([r],{type:"application/octet-stream"}),"Reporte de Clientes"+k().format("DD-MM-YYYY")+".xlsx")}},"Exportar a Excel ",o.a.createElement(d.f,null))))),o.a.createElement(m.a,{sm:12,md:12,lg:12},o.a.createElement("br",null),o.a.createElement(f.a,{data:g,columns:N}))))}}}]);
//# sourceMappingURL=18.4eea70f8.chunk.js.map