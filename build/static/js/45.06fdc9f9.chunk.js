(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[45],{571:function(e,t,a){"use strict";var n=a(18),r=a(574),o=a(1),c=a.n(o),l=a(577),i=a(575),s=a(576),u=a(280);function m(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return m=function(){return e},e}var d=l.a.div(m());function p(e){var t=e.column,a=t.filterValue,n=t.preFilteredRows,r=t.setFilter,o=n.length;return c.a.createElement("input",{value:a||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(o," registros..."),className:"inputPageFilter"})}function f(e,t,a){return Object(s.a)(e,a,{keys:[function(e){return e.values[t]}]})}function b(e){var t=e.columns,a=e.data,r=e.displayPaginationUp,o=e.letrasChicas,l=c.a.useMemo((function(){return{fuzzyText:f,text:function(e,t,a){return e.filter((function(e){var n=e.values[t];return void 0===n||String(n).toLowerCase().startsWith(String(a).toLowerCase())}))}}}),[]),s=c.a.useMemo((function(){return{Filter:p}}),[]),m=Object(i.useTable)({columns:t,data:a,defaultColumn:s,filterTypes:l,initialState:{pageIndex:0}},i.useFilters,i.useSortBy,i.usePagination),d=m.getTableProps,b=m.getTableBodyProps,g=m.headerGroups,E=m.page,v=m.prepareRow,h=m.canPreviousPage,y=m.canNextPage,_=m.pageOptions,O=m.pageCount,j=m.gotoPage,C=m.nextPage,k=m.previousPage,N=m.setPageSize,x=m.state,S=x.pageIndex,P=x.pageSize;return c.a.createElement("div",{className:"table-responsive"},r?c.a.createElement("div",{className:"pagination"},c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(0)},disabled:!h},"<<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!h},"<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C()},disabled:!y},">")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(O-1)},disabled:!y},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,S+1," de ",_.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:S+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;j(t)},className:"inputPage"},"onChange",(function(e){e.target.value>_.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:P,onChange:function(e){N(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",c.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),c.a.createElement("thead",null,g.map((function(e,t){return c.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:t}),e.headers.map((function(e,t){return c.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:o?"14px":"15px"},key:t}),e.render("Header"),c.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),c.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),c.a.createElement("tbody",Object.assign({},b(),{className:"text-center",style:{fontSize:o?"13px":"15px"}}),E.map((function(e,t){return v(e)||c.a.createElement("tr",Object.assign({},e.getRowProps(),{key:t+"-"}),e.cells.map((function(e,t){return c.a.createElement("td",Object.assign({},e.getCellProps(),{key:t+"td"}),e.render("Cell"))})))})))),c.a.createElement("div",{className:"pagination"},c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(0)},disabled:!h},"<<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!h},"<")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return C()},disabled:!y},">")," ",c.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j(O-1)},disabled:!y},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,S+1," de ",_.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:S+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;j(t)},className:"inputPage"},"onChange",(function(e){e.target.value>_.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:P,onChange:function(e){N(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}f.autoRemove=function(e){return!e};t.a=function(e){var t=e.data,a=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return c.a.createElement(d,null,c.a.createElement(b,{data:t,columns:a,displayPaginationUp:n,letrasChicas:r}))}},572:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var a=document.createElementNS(e,"filter");a.setAttribute("id","gaussian-blur"),a.appendChild(t);var n=document.createElementNS(e,"svg");n.setAttribute("id","react-confirm-alert-firm-svg"),n.setAttribute("class","react-confirm-alert-svg"),n.appendChild(a),document.body.appendChild(n)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,s.render)(l.default.createElement(p,e),t)}(e)};var c=a(1),l=u(c),i=u(a(3)),s=a(40);function u(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=(r=n=function(e){function t(){var e,a,n;m(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.handleClickButton=function(e){e.onClick&&e.onClick(),n.close()},n.handleClickOverlay=function(e){var t=n.props,a=t.closeOnClickOutside,r=t.onClickOutside,o=e.target===n.overlay;a&&o&&(r(),n.close())},n.close=function(){var e=n.props.afterClose;g(),b(),f(e)},n.keyboardClose=function(e){var t=n.props,a=t.closeOnEscape,r=t.onKeypressEscape,o=27===e.keyCode;a&&o&&(r(e),n.close())},n.componentDidMount=function(){document.addEventListener("keydown",n.keyboardClose,!1)},n.componentWillUnmount=function(){document.removeEventListener("keydown",n.keyboardClose,!1),n.props.willUnmount()},n.renderCustomUI=function(){var e=n.props,t=e.title,a=e.message,r=e.buttons;return(0,e.customUI)({title:t,message:a,buttons:r,onClose:n.close})},d(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.message,r=t.buttons,o=t.childrenElement,c=t.customUI;return l.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},l.default.createElement("div",{className:"react-confirm-alert"},c?this.renderCustomUI():l.default.createElement("div",{className:"react-confirm-alert-body"},a&&l.default.createElement("h1",null,a),n,o(),l.default.createElement("div",{className:"react-confirm-alert-button-group"},r.map((function(t,a){return l.default.createElement("button",{key:a,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(c.Component),n.propTypes={title:i.default.string,message:i.default.string,buttons:i.default.array.isRequired,childrenElement:i.default.func,customUI:i.default.func,closeOnClickOutside:i.default.bool,closeOnEscape:i.default.bool,willUnmount:i.default.func,afterClose:i.default.func,onClickOutside:i.default.func,onKeypressEscape:i.default.func},n.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},r);function f(e){var t=document.getElementById("react-confirm-alert-firm-svg");t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function b(){var e=document.getElementById("react-confirm-alert");e&&((0,s.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function g(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=p},573:function(e,t,a){},578:function(e,t,a){"use strict";var n=a(2),r=a(4),o=a(1),c=a.n(o),l=a(3),i=a.n(l),s=a(559),u={id:i.a.any,href:i.a.string,onClick:i.a.func,title:i.a.node.isRequired,disabled:i.a.bool,menuRole:i.a.string,renderMenuOnMount:i.a.bool,rootCloseEvent:i.a.string,bsPrefix:i.a.string,variant:i.a.string,size:i.a.string},m=c.a.forwardRef((function(e,t){var a=e.title,o=e.children,l=e.bsPrefix,i=e.rootCloseEvent,u=e.variant,m=e.size,d=e.menuRole,p=e.renderMenuOnMount,f=e.disabled,b=e.href,g=e.id,E=Object(r.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id"]);return c.a.createElement(s.a,Object(n.a)({ref:t},E),c.a.createElement(s.a.Toggle,{id:g,href:b,size:m,variant:u,disabled:f,childBsPrefix:l},a),c.a.createElement(s.a.Menu,{role:d,renderOnMount:p,rootCloseEvent:i},o))}));m.displayName="DropdownButton",m.propTypes=u,t.a=m},803:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(1),o=a.n(r),c=a(567),l=a(568),i=a(282),s=a(18),u=a(44),m=a(578),d=a(559),p=a(10),f=a(280),b=a(571),g=a(25),E=a.n(g),v=a(288),h=a(112),y=a(34),_=a(13),O=a(572),j=(a(573),[]),C=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),c=a[0],g=a[1],C=Object(r.useState)([]),k=Object(n.a)(C,2),N=k[0],x=k[1],S=Object(r.useState)({name:"",type_failure:"",is_active:!1}),P=Object(n.a)(S,2),w=P[0],R=P[1],M=Object(r.useState)([]),I=Object(n.a)(M,2),z=(I[0],I[1],Object(r.useState)({name:"",type_failure:"",is_active:!1})),A=Object(n.a)(z,2),T=(A[0],A[1],Object(r.useState)([])),U=Object(n.a)(T,2),D=(U[0],U[1],Object(r.useState)({name:"",type_failure:"",is_active:!1})),F=Object(n.a)(D,2),B=(F[0],F[1],Object(r.useRef)(null));Object(r.useRef)(null);Object(r.useEffect)((function(){return L(),B.current.focus(),function(){j=[]}}),[]),Object(r.useMemo)((function(){j=[{Header:"Nombre",accessor:"name"},{Header:"Tipo",accessor:function(e){return 1==e.type_failure?"Propiedades":"\xc1reas Comunes"}},{Header:"Activo",accessor:function(e){return e.is_active?["Si"]:["No"]}},{Header:"Acciones",Cell:function(e){var t=e.cell.row.original.id;return o.a.createElement(m.a,{id:"drop"+t,title:"Seleccione",block:"true"},o.a.createElement(d.a.Item,{onClick:function(){return H(e.cell.row.original)}},"Agregar Fallas Puntuales"),o.a.createElement(d.a.Item,{onClick:function(){return G(e.cell.row.original)}},"Modificar"),o.a.createElement(d.a.Item,{onClick:function(){return V(t)}},"Eliminar"))}}]}),[]);var H=function(t){e.displaySection(2,t.id)},q=function(){R({name:"",type_failure:"",is_active:!1})},V=function(e){Object(O.confirmAlert)({customUI:function(t){var a=t.onClose;return o.a.createElement("div",{className:"custom-ui-edit"},o.a.createElement("h1",null,"\xbfEsta seguro?"),o.a.createElement("p",{className:"font-alert"},"\xbfDesea realmente borrar este registro?"),o.a.createElement("button",{className:"button-alert",onClick:function(){!function(e){E.a.delete(y.a+"params_manage_problems_tipology/"+e).then((function(e){_.b.success("Registro Eliminado"),L()})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))}(e),a()}},"Si, Aceptar"),o.a.createElement("button",{className:"button-alert",onClick:a},"No"))}})},L=function(){E.a.get(y.a+"params_manage_problems_tipology").then((function(e){x(e.data)})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))},G=function(e){R({name:e.name,type_failure:e.type_failure,is_active:e.is_active,id:e.id}),B.current.focus()},K=function(e){"is_active"===e.target.name?R(Object(u.a)(Object(u.a)({},w),{},Object(s.a)({},e.target.name,e.target.checked))):R(Object(u.a)(Object(u.a)({},w),{},Object(s.a)({},e.target.name,e.target.value)))};return o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},o.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement("h4",{className:"text-center"},"Tipolog\xeda de Fallas")),o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement(p.a,{onSubmit:function(e){var t=e.currentTarget;if(e.preventDefault(),!1===t.checkValidity())return e.stopPropagation(),void g(!0);var a=Object.assign({},w);a.id?E.a.put(y.a+"params_manage_problems_tipology/"+a.id,a).then((function(e){_.b.success("Registro Modificado"),L(),q()})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")})):E.a.post(y.a+"params_manage_problems_tipology",a).then((function(e){_.b.success("Registro Creado"),L(),q()})).catch((function(e){e.response?_.b.error(e.response.data.message):_.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:c},o.a.createElement(l.a,null,o.a.createElement(v.a,Object.assign({ref:B},e.inputName,{handleChange:K,value:w.name})),o.a.createElement(h.a,Object.assign({},e.inputTypeFailure,{handleChange:K,value:w.type_failure}),o.a.createElement("option",{value:""},"--Seleccione--"),o.a.createElement("option",{value:"1"},"Propiedades"),o.a.createElement("option",{value:"2"},"\xc1reas Comunes"))),o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:6,md:6,lg:6},o.a.createElement("label",{for:"checkbox_visible"},o.a.createElement("input",{type:"checkbox",name:"is_active",id:"checkbox_visible",checked:w.is_active,onChange:K}),"\xa0 Activa")),o.a.createElement(i.a,{sm:6,md:6,lg:6},o.a.createElement(f.a,{type:"submit",variant:"primary",block:!0},"Guardar Datos"))))),o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(b.a,{data:N,columns:j})))))};C.defaultProps={inputName:{type:"text",required:!0,name:"name",label:"Nombre",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"},inputTypeFailure:{type:"select",required:!0,name:"type_failure",label:"Tipo",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"}};var k=C,N=[],x=0,S=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),c=a[0],g=a[1],h=Object(r.useState)([]),j=Object(n.a)(h,2),C=j[0],k=j[1],S=Object(r.useState)(""),P=Object(n.a)(S,2),w=P[0],R=P[1],M=Object(r.useState)({name:"",urgent:!1,id_tipology_failure:e.id,is_active:!1}),I=Object(n.a)(M,2),z=I[0],A=I[1],T=Object(r.useRef)(null);Object(r.useEffect)((function(){x=e.id,T.current.focus(),A(Object(u.a)(Object(u.a)({},z),{},{id_tipology_failure:x})),B()}),[e.id]),Object(r.useEffect)((function(){return function(){N=[],x=0}}),[]),Object(r.useMemo)((function(){N=[{Header:"Nombre",accessor:"name"},{Header:"Urgente",accessor:function(e){return e.urgent?["Si"]:["No"]}},{Header:"Activo",accessor:function(e){return e.is_active?["Si"]:["No"]}},{Header:"Acciones",Cell:function(e){var t=e.cell.row.original.id;return o.a.createElement(m.a,{id:"drop"+t,title:"Seleccione",block:"true"},o.a.createElement(d.a.Item,{onClick:function(){return U(e.cell.row.original)}},"Agregar Soluci\xf3nes"),o.a.createElement(d.a.Item,{onClick:function(){return H(e.cell.row.original)}},"Modificar"),o.a.createElement(d.a.Item,{onClick:function(){return F(t)}},"Eliminar"))}}]}),[]);var U=function(t){e.displaySection(3,t.id)},D=function(){A({name:"",urgent:!1,is_active:!1,id_tipology_failure:x}),T.current.focus()},F=function(e){Object(O.confirmAlert)({customUI:function(t){var a=t.onClose;return o.a.createElement("div",{className:"custom-ui-edit"},o.a.createElement("h1",null,"\xbfEsta seguro?"),o.a.createElement("p",{className:"font-alert"},"\xbfDesea realmente borrar este registro?"),o.a.createElement("button",{className:"button-alert",onClick:function(){!function(e){E.a.delete(y.a+"params_manage_problems_point_failures/"+e).then((function(e){_.b.success("Registro Eliminado"),B()})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error, contacte con soporte"))}))}(e),a()}},"Si, Aceptar"),o.a.createElement("button",{className:"button-alert",onClick:a},"No"))}})},B=function(){E.a.get(y.a+"params_manage_problems_tipology/"+x).then((function(e){k(e.data.point_failures),R(e.data.name)})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error, contacte con soporte"))}))},H=function(e){A({name:e.name,urgent:e.urgent,is_active:e.is_active,id:e.id,id_tipology_failure:e.id_tipology_failure}),T.current.focus()},q=function(e){"is_active"===e.target.name||"urgent"===e.target.name?A(Object(u.a)(Object(u.a)({},z),{},Object(s.a)({},e.target.name,e.target.checked))):A(Object(u.a)(Object(u.a)({},z),{},Object(s.a)({},e.target.name,e.target.value)))};return o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},o.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement("h4",{className:"text-center"},"Fallas de ",w)),o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement(p.a,{onSubmit:function(e){var t=e.currentTarget;if(e.preventDefault(),!1===t.checkValidity())return e.stopPropagation(),void g(!0);var a=Object.assign({},z);a.id?E.a.put(y.a+"params_manage_problems_point_failures/"+a.id,a).then((function(e){_.b.success("Registro Modificado"),B(),D()})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error, contacte con soporte"))})):E.a.post(y.a+"params_manage_problems_point_failures",a).then((function(e){_.b.success("Registro Creado"),B(),D()})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error, contacte con soporte"))}))},noValidate:!0,validated:c},o.a.createElement(l.a,null,o.a.createElement(v.a,Object.assign({ref:T},e.inputName,{handleChange:q,value:z.name})),o.a.createElement(i.a,{sm:6,md:6,lg:6},o.a.createElement("br",null),o.a.createElement("label",{for:"checkbox_visible1"},o.a.createElement("input",{type:"checkbox",name:"urgent",id:"checkbox_visible1",checked:z.urgent,onChange:q}),"\xa0 Urgente"))),o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:6,md:6,lg:6},o.a.createElement("br",null),o.a.createElement("label",{for:"checkbox_visible_point"},o.a.createElement("input",{type:"checkbox",name:"is_active",id:"checkbox_visible_point",checked:z.is_active,onChange:q}),"\xa0 Activa")),o.a.createElement(i.a,{sm:6,md:6,lg:6},o.a.createElement(f.a,{type:"submit",variant:"primary",block:!0},"Guardar Datos"))))),o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(b.a,{data:C,columns:N})))))};S.defaultProps={inputName:{type:"text",required:!0,name:"name",label:"Nombre",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"}};var P=S,w=[],R=0,M=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),c=a[0],g=a[1],h=Object(r.useState)([]),j=Object(n.a)(h,2),C=j[0],k=j[1],N=Object(r.useState)(""),x=Object(n.a)(N,2),S=x[0],P=x[1],M=Object(r.useState)([]),I=Object(n.a)(M,2),z=I[0],A=I[1],T=Object(r.useState)({id_solution:"",id_point_failure:""}),U=Object(n.a)(T,2),D=U[0],F=U[1],B=Object(r.useRef)(null);Object(r.useEffect)((function(){R=e.id,B.current.focus(),F(Object(u.a)(Object(u.a)({},D),{},{id_point_failure:R})),V()}),[e.id]),Object(r.useEffect)((function(){return L(),function(){w=[],R=0}}),[]),Object(r.useMemo)((function(){w=[{Header:"Soluci\xf3n",accessor:function(e){return[e.solution.name]}},{Header:"Acciones",Cell:function(e){var t=e.cell.row.original.id;return o.a.createElement(m.a,{id:"drop"+t,title:"Seleccione",block:"true",size:"sm"},o.a.createElement(d.a.Item,{onClick:function(){return G(e.cell.row.original)}},"Modificar"),o.a.createElement(d.a.Item,{onClick:function(){return q(t)}},"Eliminar"))}}]}),[]);var H=function(){F({id_solution:"",id_point_failure:R}),B.current.focus()},q=function(e){Object(O.confirmAlert)({customUI:function(t){var a=t.onClose;return o.a.createElement("div",{className:"custom-ui-edit"},o.a.createElement("h1",null,"\xbfEsta seguro?"),o.a.createElement("p",{className:"font-alert"},"\xbfDesea realmente borrar este registro?"),o.a.createElement("button",{className:"button-alert",onClick:function(){!function(e){E.a.delete(y.a+"params_manage_problems_solutions_point_failure/"+e).then((function(e){_.b.success("Registro Eliminado"),V()})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error, contacte con soporte"))}))}(e),a()}},"Si, Aceptar"),o.a.createElement("button",{className:"button-alert",onClick:a},"No"))}})},V=function(){E.a.get(y.a+"params_manage_problems_point_failures/"+R).then((function(e){k(e.data.solutions),P(e.data.name)})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error, contacte con soporte"))}))},L=function(){E.a.get(y.a+"params_manage_problems_solutions").then((function(e){A(e.data)})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error, contacte con soporte"))}))},G=function(e){F({id_solution:e.id_solution,id_point_failure:e.id_point_failure,id:e.id}),B.current.focus()};return o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},o.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement("h4",{className:"text-center"},"Soluci\xf3n de ",S)),o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement(p.a,{onSubmit:function(e){var t=e.currentTarget;if(e.preventDefault(),!1===t.checkValidity())return e.stopPropagation(),void g(!0);var a=Object.assign({},D);a.id?E.a.put(y.a+"params_manage_problems_solutions_point_failure/"+a.id,a).then((function(e){_.b.success("Registro Modificado"),V(),H()})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error, contacte con soporte"))})):E.a.post(y.a+"params_manage_problems_solutions_point_failure",a).then((function(e){_.b.success("Registro Creado"),V(),H()})).catch((function(e){e.response?_.b.error(e.response.data.message):(console.log(e),_.b.error("Error, contacte con soporte"))}))},noValidate:!0,validated:c},o.a.createElement(l.a,null,o.a.createElement(v.a,Object.assign({ref:B},e.inputSolution,{handleChange:function(e){F(Object(u.a)(Object(u.a)({},D),{},Object(s.a)({},e.target.name,e.target.value)))},value:D.id_solution}),o.a.createElement("option",{value:""},"--Seleccione--"),z.map((function(e,t){return o.a.createElement("option",{value:e.id,key:t},e.name)})))),o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:6,md:6,lg:6},o.a.createElement(f.a,{size:"sm",type:"submit",variant:"primary",block:!0},"Guardar Datos"))))),o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(b.a,{data:C,columns:w})))))};M.defaultProps={inputSolution:{type:"select",required:!0,name:"id_solution",label:"Soluci\xf3n",messageErrors:["Requerido*"],cols:"col-sm-12 col-md-12 col-lg-12 col-xs-12"}};var I=M;t.default=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),s=a[0],u=a[1],m=Object(r.useState)(null),d=Object(n.a)(m,2),p=d[0],f=d[1],b=Object(r.useState)(!1),g=Object(n.a)(b,2),E=g[0],v=g[1],h=Object(r.useState)(null),y=Object(n.a)(h,2),_=y[0],O=y[1],j=function(e,t){2==e?(u(!0),f(t)):(v(!0),O(t))};return o.a.createElement(c.a,{fluid:!0},o.a.createElement(l.a,{className:"containerDiv"},o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12,className:""},o.a.createElement("h4",{className:"title_principal"},"Mantenedor de Fallas"),o.a.createElement("hr",null)),o.a.createElement(i.a,{sm:12,md:12,lg:12,xs:12},o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:6,md:6,lg:6},o.a.createElement(k,{displaySection:j})),s?o.a.createElement(i.a,{sm:6,md:6,lg:6},o.a.createElement(P,{displaySection:j,id:p})):""),E?o.a.createElement(l.a,null,o.a.createElement(i.a,{sm:6,md:6,lg:6},o.a.createElement(I,{displaySection:j,id:_}))):"")))}}}]);
//# sourceMappingURL=45.06fdc9f9.chunk.js.map