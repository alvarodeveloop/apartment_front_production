(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[29],{565:function(e,t,a){"use strict";var n=a(29),r=a(569),l=a(0),o=a.n(l),c=a(572),s=a(570),i=a(571),u=a(275);function m(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return m=function(){return e},e}var d=c.a.div(m());function p(e){var t=e.column,a=t.filterValue,n=t.preFilteredRows,r=t.setFilter,l=n.length;return o.a.createElement("input",{value:a||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(l," registros..."),className:"inputPageFilter"})}function f(e,t,a){return Object(i.a)(e,a,{keys:[function(e){return e.values[t]}]})}function b(e){var t=e.columns,a=e.data,r=e.displayPaginationUp,l=e.letrasChicas,c=o.a.useMemo((function(){return{fuzzyText:f,text:function(e,t,a){return e.filter((function(e){var n=e.values[t];return void 0===n||String(n).toLowerCase().startsWith(String(a).toLowerCase())}))}}}),[]),i=o.a.useMemo((function(){return{Filter:p}}),[]),m=Object(s.useTable)({columns:t,data:a,defaultColumn:i,filterTypes:c,initialState:{pageIndex:0}},s.useFilters,s.useSortBy,s.usePagination),d=m.getTableProps,b=m.getTableBodyProps,g=m.headerGroups,E=m.page,v=m.prepareRow,h=m.canPreviousPage,y=m.canNextPage,C=m.pageOptions,N=m.pageCount,k=m.gotoPage,O=m.nextPage,x=m.previousPage,j=m.setPageSize,P=m.state,w=P.pageIndex,S=P.pageSize;return o.a.createElement("div",{className:"table-responsive"},r?o.a.createElement("div",{className:"pagination"},o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k(0)},disabled:!h},"<<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!h},"<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O()},disabled:!y},">")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k(N-1)},disabled:!y},">>")," ",o.a.createElement("span",null,"P\xe1gina"," ",o.a.createElement("strong",null,w+1," de ",C.length)," "),o.a.createElement("span",{className:"ml-3"},"| ",o.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),o.a.createElement("input",Object(n.a)({type:"number",defaultValue:w+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;k(t)},className:"inputPage"},"onChange",(function(e){e.target.value>C.length&&(e.target.value=1)}))))," ",o.a.createElement("select",{value:S,onChange:function(e){j(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return o.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",o.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),o.a.createElement("thead",null,g.map((function(e,t){return o.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:t}),e.headers.map((function(e,t){return o.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:l?"14px":"15px"},key:t}),e.render("Header"),o.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),o.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),o.a.createElement("tbody",Object.assign({},b(),{className:"text-center",style:{fontSize:l?"13px":"15px"}}),E.map((function(e,t){return v(e)||o.a.createElement("tr",Object.assign({},e.getRowProps(),{key:t+"-"}),e.cells.map((function(e,t){return o.a.createElement("td",Object.assign({},e.getCellProps(),{key:t+"td"}),e.render("Cell"))})))})))),o.a.createElement("div",{className:"pagination"},o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k(0)},disabled:!h},"<<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return x()},disabled:!h},"<")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O()},disabled:!y},">")," ",o.a.createElement(u.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k(N-1)},disabled:!y},">>")," ",o.a.createElement("span",null,"P\xe1gina"," ",o.a.createElement("strong",null,w+1," de ",C.length)," "),o.a.createElement("span",{className:"ml-3"},"| ",o.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),o.a.createElement("input",Object(n.a)({type:"number",defaultValue:w+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;k(t)},className:"inputPage"},"onChange",(function(e){e.target.value>C.length&&(e.target.value=1)}))))," ",o.a.createElement("select",{value:S,onChange:function(e){j(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return o.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}f.autoRemove=function(e){return!e};t.a=function(e){var t=e.data,a=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return o.a.createElement(d,null,o.a.createElement(b,{data:t,columns:a,displayPaginationUp:n,letrasChicas:r}))}},566:function(e,t,a){"use strict";var n=a(29),r=a(0),l=a.n(r),o=a(26),c=(a(282),l.a.forwardRef((function(e,t){var a,r=e.cols?e.cols:"col-md-6 col-sm-6";return"select"!==e.type&&"textarea"!==e.type?l.a.createElement(o.a.Group,{className:r},e.required?l.a.createElement(o.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(o.a.Label,{className:"fontBold"},e.label),l.a.createElement(o.a.Control,(a={ref:t,id:e.name,type:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,readOnly:!!e.readonly&&e.readonly,className:e.className?e.className:"",step:e.step?e.step:"",onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){}},Object(n.a)(a,"className","form-control-sm"),Object(n.a)(a,"disabled",e.disabled),a)),l.a.createElement(o.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,t){return l.a.createElement("span",{key:t,className:"error-input"},e)})),")")):"select"===e.type?l.a.createElement(o.a.Group,{className:r},e.required?l.a.createElement(o.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(o.a.Label,{className:"fontBold"},e.label),l.a.createElement(o.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",readOnly:!!e.readonly&&e.readonly,required:e.required,multiple:!!e.multiple&&e.multiple,ref:t||null,className:"form-control-sm",disabled:e.disabled},e.children),l.a.createElement(o.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,t){return l.a.createElement("span",{key:t,className:"error-input"},e)})),")")):"textarea"===e.type?l.a.createElement(o.a.Group,{className:r},e.required?l.a.createElement(o.a.Label,{className:"fontBold"},l.a.createElement("span",{className:"asterisk_red"},"*"),e.label):l.a.createElement(o.a.Label,{className:"fontBold"},e.label),l.a.createElement(o.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,rows:e.rows?e.rows:2,readOnly:!!e.readonly&&e.readonly,onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){},ref:t||null,className:"form-control-sm",disabled:e.disabled}),l.a.createElement(o.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,t){return l.a.createElement("span",{key:t,className:"error-input"},e)})),")")):void 0})));t.a=c},567:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var a=document.createElementNS(e,"filter");a.setAttribute("id","gaussian-blur"),a.appendChild(t);var n=document.createElementNS(e,"svg");n.setAttribute("id","react-confirm-alert-firm-svg"),n.setAttribute("class","react-confirm-alert-svg"),n.appendChild(a),document.body.appendChild(n)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,i.render)(c.default.createElement(p,e),t)}(e)};var o=a(0),c=u(o),s=u(a(2)),i=a(35);function u(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=(r=n=function(e){function t(){var e,a,n;m(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return a=n=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.handleClickButton=function(e){e.onClick&&e.onClick(),n.close()},n.handleClickOverlay=function(e){var t=n.props,a=t.closeOnClickOutside,r=t.onClickOutside,l=e.target===n.overlay;a&&l&&(r(),n.close())},n.close=function(){var e=n.props.afterClose;g(),b(),f(e)},n.keyboardClose=function(e){var t=n.props,a=t.closeOnEscape,r=t.onKeypressEscape,l=27===e.keyCode;a&&l&&(r(e),n.close())},n.componentDidMount=function(){document.addEventListener("keydown",n.keyboardClose,!1)},n.componentWillUnmount=function(){document.removeEventListener("keydown",n.keyboardClose,!1),n.props.willUnmount()},n.renderCustomUI=function(){var e=n.props,t=e.title,a=e.message,r=e.buttons;return(0,e.customUI)({title:t,message:a,buttons:r,onClose:n.close})},d(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.message,r=t.buttons,l=t.childrenElement,o=t.customUI;return c.default.createElement("div",{className:"react-confirm-alert-overlay",ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},c.default.createElement("div",{className:"react-confirm-alert"},o?this.renderCustomUI():c.default.createElement("div",{className:"react-confirm-alert-body"},a&&c.default.createElement("h1",null,a),n,l(),c.default.createElement("div",{className:"react-confirm-alert-button-group"},r.map((function(t,a){return c.default.createElement("button",{key:a,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(o.Component),n.propTypes={title:s.default.string,message:s.default.string,buttons:s.default.array.isRequired,childrenElement:s.default.func,customUI:s.default.func,closeOnClickOutside:s.default.bool,closeOnEscape:s.default.bool,willUnmount:s.default.func,afterClose:s.default.func,onClickOutside:s.default.func,onKeypressEscape:s.default.func},n.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},r);function f(e){var t=document.getElementById("react-confirm-alert-firm-svg");t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function b(){var e=document.getElementById("react-confirm-alert");e&&((0,i.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function g(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=p},568:function(e,t,a){},573:function(e,t,a){"use strict";var n=a(1),r=a(3),l=a(0),o=a.n(l),c=a(2),s=a.n(c),i=a(553),u={id:s.a.any,href:s.a.string,onClick:s.a.func,title:s.a.node.isRequired,disabled:s.a.bool,menuRole:s.a.string,renderMenuOnMount:s.a.bool,rootCloseEvent:s.a.string,bsPrefix:s.a.string,variant:s.a.string,size:s.a.string},m=o.a.forwardRef((function(e,t){var a=e.title,l=e.children,c=e.bsPrefix,s=e.rootCloseEvent,u=e.variant,m=e.size,d=e.menuRole,p=e.renderMenuOnMount,f=e.disabled,b=e.href,g=e.id,E=Object(r.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id"]);return o.a.createElement(i.a,Object(n.a)({ref:t},E),o.a.createElement(i.a.Toggle,{id:g,href:b,size:m,variant:u,disabled:f,childBsPrefix:c},a),o.a.createElement(i.a.Menu,{role:d,renderOnMount:p,rootCloseEvent:s},l))}));m.displayName="DropdownButton",m.propTypes=u,t.a=m},779:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(79),l=a(78),o=a(0),c=a.n(o),s=a(573),i=a(553),u=a(562),m=a(563),d=a(277),p=a(26),f=a(275),b=a(565),g=a(40),E=a.n(g),v=a(566),h=a(51),y=a(23),C=a(567),N=(a(568),[]),k=function(e){var t=Object(o.useState)(!1),a=Object(l.a)(t,2),g=a[0],k=a[1],O=Object(o.useState)([]),x=Object(l.a)(O,2),j=x[0],P=x[1],w=Object(o.useState)({name:"",state:!0}),S=Object(l.a)(w,2),_=S[0],z=S[1],B=Object(o.useRef)(null);Object(o.useEffect)((function(){return I(),B.current.focus(),function(){N=[]}}),[]),Object(o.useMemo)((function(){N=[{Header:"C\xf3digo",accessor:"id"},{Header:"Nombre",accessor:"name"},{Header:"Estado",accessor:function(e){return[e.state?"Activo":"Inactivo"]}},{Header:"Acciones",Cell:function(e){var t=e.cell.row.original.id;return c.a.createElement(s.a,{id:"drop"+t,title:"Seleccione",block:"true"},c.a.createElement(i.a.Item,{onClick:function(){return R(e.cell.row.original)}},"Modificar"),c.a.createElement(i.a.Item,{onClick:function(){return U(t)}},"Eliminar"))}}]}),[]);var M=function(){z({name:"",state:!0})},U=function(e){Object(C.confirmAlert)({customUI:function(t){var a=t.onClose;return c.a.createElement("div",{className:"custom-ui-edit"},c.a.createElement("h1",null,"\xbfEsta seguro?"),c.a.createElement("p",{className:"font-alert"},"\xbfDesea realmente borrar este registro?"),c.a.createElement("button",{className:"button-alert",onClick:function(){!function(e){E.a.delete(h.a+"master_brand/"+e).then((function(e){y.b.success("Registro Eliminado"),I()})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))}(e),a()}},"Si, Aceptar"),c.a.createElement("button",{className:"button-alert",onClick:a},"No"))}})},I=function(){E.a.get(h.a+"master_brand").then((function(e){P(e.data)})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},R=function(e){z({name:e.name,id:e.id,state:e.state}),B.current.focus()},L=function(e){if("state"===e.target.name){var t="false"!==e.target.value;z(Object(r.a)(Object(r.a)({},_),{},Object(n.a)({},e.target.name,t)))}else z(Object(r.a)(Object(r.a)({},_),{},Object(n.a)({},e.target.name,e.target.value)))};return c.a.createElement(u.a,null,c.a.createElement(m.a,{className:"containerDiv"},c.a.createElement(d.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},c.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement(d.a,{sm:12,md:12,lg:12,xs:12},c.a.createElement(p.a,{onSubmit:function(e){var t=e.currentTarget;if(e.preventDefault(),!1===t.checkValidity())return e.stopPropagation(),void k(!0);var a=Object.assign({},_);a.id?E.a.put(h.a+"master_brand/"+a.id,a).then((function(e){y.b.success("Registro Modificado"),I(),M()})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")})):E.a.post(h.a+"master_brand",a).then((function(e){y.b.success("Registro Creado"),I(),M()})).catch((function(e){e.response?y.b.error(e.response.data.message):y.b.error("Error, contacte con soporte")}))},noValidate:!0,validated:g},c.a.createElement(m.a,null,c.a.createElement(v.a,Object.assign({ref:B},e.inputName,{value:_.name,handleChange:L})),c.a.createElement(d.a,{sm:6,md:6,lg:6},c.a.createElement("label",{className:"form-control-label"},"Estado"),c.a.createElement(m.a,null,c.a.createElement(d.a,{sm:3,md:3,lg:3},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"state",onChange:L,value:!0,checked:!!_.state}),"\xa0\xa0Activo")),c.a.createElement(d.a,{sm:4,md:4,lg:4},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"state",onChange:L,value:!1,checked:!_.state}),"\xa0\xa0Inactivo"))))),c.a.createElement(m.a,{className:"justify-content-center"},c.a.createElement(d.a,{sm:6,md:6,lg:6},c.a.createElement("br",null),c.a.createElement(f.a,{type:"submit",variant:"primary",block:!0},"Guardar Datos"))))),c.a.createElement(d.a,{sm:12,md:12,lg:12,xs:12},c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(b.a,{data:j,columns:N}))))};k.defaultProps={inputName:{type:"text",required:!0,name:"name",label:"Marca",messageErrors:["Requerido*"],cols:"col-sm-6 col-md-6 col-lg-6 col-xs-6"}},t.default=k}}]);
//# sourceMappingURL=29.a7faf9a3.chunk.js.map