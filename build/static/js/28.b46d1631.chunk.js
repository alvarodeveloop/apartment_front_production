(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[28],{580:function(e,a,t){"use strict";var n=t(27),r=t(584),l=t(0),o=t.n(l),c=t(587),s=t(585),i=t(586),u=t(139);function m(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return m=function(){return e},e}var d=c.a.div(m());function f(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter,l=n.length;return o.a.createElement("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(l," registros..."),className:"inputPageFilter"})}function p(e,a,t){return Object(i.a)(e,t,{keys:[function(e){return e.values[a]}]})}function g(e){var a=e.columns,t=e.data,r=e.displayPaginationUp,l=e.letrasChicas,c=o.a.useMemo((function(){return{fuzzyText:p,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),i=o.a.useMemo((function(){return{Filter:f}}),[]),m=Object(s.useTable)({columns:a,data:t,defaultColumn:i,filterTypes:c,initialState:{pageIndex:0}},s.useFilters,s.useSortBy,s.usePagination),d=m.getTableProps,g=m.getTableBodyProps,b=m.headerGroups,E=m.page,v=m.prepareRow,h=m.canPreviousPage,y=m.canNextPage,C=m.pageOptions,N=m.pageCount,k=m.gotoPage,O=m.nextPage,x=m.previousPage,j=m.setPageSize,P=m.state,w=P.pageIndex,M=P.pageSize;return o.a.createElement("div",{className:"table-responsive"},r?o.a.createElement("div",{className:"pagination"},o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k(0)},disabled:!h},"<<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!h},"<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O()},disabled:!y},">")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k(N-1)},disabled:!y},">>")," ",o.a.createElement("span",null,"P\xe1gina"," ",o.a.createElement("strong",null,w+1," de ",C.length)," "),o.a.createElement("span",{className:"ml-3"},"| ",o.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),o.a.createElement("input",Object(n.a)({type:"number",defaultValue:w+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;k(a)},className:"inputPage"},"onChange",(function(e){e.target.value>C.length&&(e.target.value=1)}))))," ",o.a.createElement("select",{value:M,onChange:function(e){j(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return o.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",o.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),o.a.createElement("thead",null,b.map((function(e,a){return o.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:a}),e.headers.map((function(e,a){return o.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:l?"14px":"15px"},key:a}),e.render("Header"),o.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),o.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),o.a.createElement("tbody",Object.assign({},g(),{className:"text-center",style:{fontSize:l?"13px":"15px"}}),E.map((function(e,a){return v(e)||o.a.createElement("tr",Object.assign({},e.getRowProps(),{key:a+"-"}),e.cells.map((function(e,a){return o.a.createElement("td",Object.assign({},e.getCellProps(),{key:a+"td"}),e.render("Cell"))})))})))),o.a.createElement("div",{className:"pagination"},o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k(0)},disabled:!h},"<<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!h},"<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O()},disabled:!y},">")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k(N-1)},disabled:!y},">>")," ",o.a.createElement("span",null,"P\xe1gina"," ",o.a.createElement("strong",null,w+1," de ",C.length)," "),o.a.createElement("span",{className:"ml-3"},"| ",o.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),o.a.createElement("input",Object(n.a)({type:"number",defaultValue:w+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;k(a)},className:"inputPage"},"onChange",(function(e){e.target.value>C.length&&(e.target.value=1)}))))," ",o.a.createElement("select",{value:M,onChange:function(e){j(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return o.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}p.autoRemove=function(e){return!e};a.a=function(e){var a=e.data,t=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return o.a.createElement(d,null,o.a.createElement(g,{data:a,columns:t,displayPaginationUp:n,letrasChicas:r}))}},581:function(e,a,t){"use strict";var n=t(27),r=t(0),l=t.n(r),o=t(22),c=(t(285),l.a.forwardRef((function(e,a){var t,r=e.cols?e.cols:"col-md-6 col-sm-6";return"select"!==e.type&&"textarea"!==e.type?l.a.createElement(o.a.Group,{className:r},e.required?l.a.createElement(o.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(o.a.Label,{className:"fontBold"},e.label),l.a.createElement(o.a.Control,(t={ref:a,id:e.name,type:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,readOnly:!!e.readonly&&e.readonly,className:e.className?e.className:"",step:e.step?e.step:"",onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){}},Object(n.a)(t,"className","form-control-sm"),Object(n.a)(t,"disabled",e.disabled),t)),l.a.createElement(o.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"select"===e.type?l.a.createElement(o.a.Group,{className:r},e.required?l.a.createElement(o.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(o.a.Label,{className:"fontBold"},e.label),l.a.createElement(o.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",readOnly:!!e.readonly&&e.readonly,required:e.required,multiple:!!e.multiple&&e.multiple,ref:a||null,className:"form-control-sm",disabled:e.disabled},e.children),l.a.createElement(o.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"textarea"===e.type?l.a.createElement(o.a.Group,{className:r},e.required?l.a.createElement(o.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(o.a.Label,{className:"fontBold"},e.label),l.a.createElement(o.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,rows:e.rows?e.rows:2,readOnly:!!e.readonly&&e.readonly,onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){},ref:a||null,className:"form-control-sm",disabled:e.disabled}),l.a.createElement(o.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return l.a.createElement("span",{key:a,className:"error-input"},e)})),")")):void 0})));a.a=c},582:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,r,l=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}();a.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",a=document.createElementNS(e,"feGaussianBlur");a.setAttribute("stdDeviation","0.3");var t=document.createElementNS(e,"filter");t.setAttribute("id","gaussian-blur"),t.appendChild(a);var n=document.createElementNS(e,"svg");n.setAttribute("id","react-confirm-alert-firm-svg"),n.setAttribute("class","react-confirm-alert-svg"),n.appendChild(t),document.body.appendChild(n)}(),function(e){var a=document.getElementById("react-confirm-alert");a||(document.body.children[0].classList.add("react-confirm-alert-blur"),(a=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(a)),(0,i.render)(c.default.createElement(f,e),a)}(e)};var o=t(0),c=u(o),s=u(t(6)),i=t(38);function u(e){return e&&e.__esModule?e:{default:e}}function m(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function d(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}var f=(r=n=function(e){function a(){var e,t,n;m(this,a);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(l))),n.handleClickButton=function(e){e.onClick&&e.onClick(),n.close()},n.handleClickOverlay=function(e){var a=n.props,t=a.closeOnClickOutside,r=a.onClickOutside,l=e.target===n.overlay;t&&l&&(r(),n.close())},n.close=function(){var e=n.props.afterClose;b(),g(),p(e)},n.keyboardClose=function(e){var a=n.props,t=a.closeOnEscape,r=a.onKeypressEscape,l=27===e.keyCode;t&&l&&(r(e),n.close())},n.componentDidMount=function(){document.addEventListener("keydown",n.keyboardClose,!1)},n.componentWillUnmount=function(){document.removeEventListener("keydown",n.keyboardClose,!1),n.props.willUnmount()},n.renderCustomUI=function(){var e=n.props,a=e.title,t=e.message,r=e.buttons;return(0,e.customUI)({title:a,message:t,buttons:r,onClose:n.close})},d(n,t)}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),l(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.title,n=a.message,r=a.buttons,l=a.childrenElement,o=a.customUI;return c.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(a){return e.overlay=a},onClick:this.handleClickOverlay},c.default.createElement("div",{className:"react-confirm-alert"},o?this.renderCustomUI():c.default.createElement("div",{className:"react-confirm-alert-body"},t&&c.default.createElement("h1",null,t),n,l(),c.default.createElement("div",{className:"react-confirm-alert-button-group"},r.map((function(a,t){return c.default.createElement("button",{key:t,onClick:function(){return e.handleClickButton(a)},className:a.className},a.label)}))))))}}]),a}(o.Component),n.propTypes={title:s.default.string,message:s.default.string,buttons:s.default.array.isRequired,childrenElement:s.default.func,customUI:s.default.func,closeOnClickOutside:s.default.bool,closeOnEscape:s.default.bool,willUnmount:s.default.func,afterClose:s.default.func,onClickOutside:s.default.func,onKeypressEscape:s.default.func},n.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},r);function p(e){var a=document.getElementById("react-confirm-alert-firm-svg");a.parentNode.removeChild(a),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function g(){var e=document.getElementById("react-confirm-alert");e&&((0,i.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function b(){document.body.classList.remove("react-confirm-alert-body-element")}a.default=f},583:function(e,a,t){},588:function(e,a,t){"use strict";var n=t(1),r=t(2),l=t(0),o=t.n(l),c=t(6),s=t.n(c),i=t(571),u={id:s.a.any,href:s.a.string,onClick:s.a.func,title:s.a.node.isRequired,disabled:s.a.bool,menuRole:s.a.string,renderMenuOnMount:s.a.bool,rootCloseEvent:s.a.string,bsPrefix:s.a.string,variant:s.a.string,size:s.a.string},m=o.a.forwardRef((function(e,a){var t=e.title,l=e.children,c=e.bsPrefix,s=e.rootCloseEvent,u=e.variant,m=e.size,d=e.menuRole,f=e.renderMenuOnMount,p=e.disabled,g=e.href,b=e.id,E=Object(r.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id"]);return o.a.createElement(i.a,Object(n.a)({ref:a},E),o.a.createElement(i.a.Toggle,{id:b,href:g,size:m,variant:u,disabled:p,childBsPrefix:c},t),o.a.createElement(i.a.Menu,{role:d,renderOnMount:f,rootCloseEvent:s},l))}));m.displayName="DropdownButton",m.propTypes=u,a.a=m},766:function(e,a,t){"use strict";t.r(a);var n=t(27),r=t(78),l=t(77),o=t(0),c=t.n(o),s=t(588),i=t(571),u=t(570),m=t(140),d=t(84),f=t(22),p=t(139),g=t(580),b=t(43),E=t.n(b),v=t(581),h=t(76),y=t(28),C=t(582),N=(t(583),[]),k=function(e){var a=Object(o.useState)(!1),t=Object(l.a)(a,2),b=t[0],k=t[1],O=Object(o.useState)([]),x=Object(l.a)(O,2),j=x[0],P=x[1],w=Object(o.useState)({name:"",state:!0}),M=Object(l.a)(w,2),S=M[0],_=M[1],z=Object(o.useRef)(null);Object(o.useEffect)((function(){return I(),z.current.focus(),function(){N=[]}}),[]),Object(o.useMemo)((function(){N=[{Header:"C\xf3digo",accessor:"id"},{Header:"Nombre",accessor:"name"},{Header:"Estado",accessor:function(e){return[e.state?"Activo":"Inactivo"]}},{Header:"Acciones",Cell:function(e){var a=e.cell.row.original.id;return c.a.createElement(s.a,{id:"drop"+a,title:"Seleccione",block:"true"},c.a.createElement(i.a.Item,{onClick:function(){return R(e.cell.row.original)}},"Modificar"),c.a.createElement(i.a.Item,{onClick:function(){return U(a)}},"Eliminar"))}}]}),[]);var B=function(){_({name:"",state:!0})},U=function(e){Object(C.confirmAlert)({customUI:function(a){var t=a.onClose;return c.a.createElement("div",{className:"custom-ui-edit"},c.a.createElement("h1",null,"\xbfEsta seguro?"),c.a.createElement("p",{className:"font-alert"},"\xbfDesea realmente borrar este registro?"),c.a.createElement("button",{className:"button-alert",onClick:function(){!function(e){E.a.delete(h.a+"master_enclosure/"+e).then((function(e){y.NotificationManager.success("Registro Eliminado"),I()})).catch((function(e){e.response?y.NotificationManager.error(e.response.data.message):y.NotificationManager.error("Error, contacte con soporte")}))}(e),t()}},"Si, Aceptar"),c.a.createElement("button",{className:"button-alert",onClick:t},"No"))}})},I=function(){E.a.get(h.a+"master_enclosure").then((function(e){P(e.data)})).catch((function(e){e.response?y.NotificationManager.error(e.response.data.message):y.NotificationManager.error("Error, contacte con soporte")}))},R=function(e){_({name:e.name,id:e.id,state:e.state}),z.current.focus()},L=function(e){if("state"===e.target.name){var a="false"!==e.target.value;_(Object(r.a)(Object(r.a)({},S),{},Object(n.a)({},e.target.name,a)))}else _(Object(r.a)(Object(r.a)({},S),{},Object(n.a)({},e.target.name,e.target.value)))};return c.a.createElement(u.a,null,c.a.createElement(m.a,{className:"containerDiv"},c.a.createElement(d.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},c.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement(d.a,{sm:12,md:12,lg:12,xs:12},c.a.createElement(f.a,{onSubmit:function(e){var a=e.currentTarget;if(e.preventDefault(),!1===a.checkValidity())return e.stopPropagation(),void k(!0);var t=Object.assign({},S);t.id?E.a.put(h.a+"master_enclosure/"+t.id,t).then((function(e){y.NotificationManager.success("Registro Modificado"),I(),B()})).catch((function(e){e.response?y.NotificationManager.error(e.response.data.message):y.NotificationManager.error("Error, contacte con soporte")})):E.a.post(h.a+"master_enclosure",t).then((function(e){y.NotificationManager.success("Registro Creado"),I(),B()})).catch((function(e){e.response?y.NotificationManager.error(e.response.data.message):y.NotificationManager.error("Error, contacte con soporte")}))},noValidate:!0,validated:b},c.a.createElement(m.a,null,c.a.createElement(v.a,Object.assign({ref:z},e.inputName,{value:S.name,handleChange:L})),c.a.createElement(d.a,{sm:6,md:6,lg:6},c.a.createElement("label",{className:"form-control-label"},"Estado"),c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:3,md:3,lg:3},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"state",onChange:L,value:!0,checked:!!S.state}),"\xa0\xa0Activo")),c.a.createElement(d.a,{sm:4,md:4,lg:4},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"state",onChange:L,value:!1,checked:!S.state}),"\xa0\xa0Inactivo"))))),c.a.createElement(m.a,{className:"justify-content-center"},c.a.createElement(d.a,{sm:6,md:6,lg:6},c.a.createElement("br",null),c.a.createElement(p.a,{type:"submit",variant:"primary",block:!0},"Guardar Datos"))))),c.a.createElement(d.a,{sm:12,md:12,lg:12,xs:12},c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(g.a,{data:j,columns:N}))))};k.defaultProps={inputName:{type:"text",required:!0,name:"name",label:"Recinto",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"}},a.default=k}}]);
//# sourceMappingURL=28.b46d1631.chunk.js.map