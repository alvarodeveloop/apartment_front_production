(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[62],{571:function(e,a,t){"use strict";var n=t(18),r=t(574),l=t(1),c=t.n(l),s=t(577),o=t(575),i=t(576),m=t(280);function u(){var e=Object(r.a)(["\n\n  .button-pagination{\n    margin-right: 10px;\n  }\n\n  .inputPage{\n    display: inline-block;\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .inputPageFilter{\n    display: inline-block;\n    width: 80%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .pagination {\n    padding: 0.5rem;\n    display: flex;\n    justify-content: center;\n  }\n\n  .tr_cabecera{\n    background-color: rgb(218, 236, 242);\n    color: black;\n  }\n"]);return u=function(){return e},e}var d=s.a.div(u());function b(e){var a=e.column,t=a.filterValue,n=a.preFilteredRows,r=a.setFilter,l=n.length;return c.a.createElement("input",{value:t||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"Buscar en ".concat(l," registros..."),className:"inputPageFilter"})}function g(e,a,t){return Object(i.a)(e,t,{keys:[function(e){return e.values[a]}]})}function p(e){var a=e.columns,t=e.data,r=e.displayPaginationUp,l=e.letrasChicas,s=c.a.useMemo((function(){return{fuzzyText:g,text:function(e,a,t){return e.filter((function(e){var n=e.values[a];return void 0===n||String(n).toLowerCase().startsWith(String(t).toLowerCase())}))}}}),[]),i=c.a.useMemo((function(){return{Filter:b}}),[]),u=Object(o.useTable)({columns:a,data:t,defaultColumn:i,filterTypes:s,initialState:{pageIndex:0}},o.useFilters,o.useSortBy,o.usePagination),d=u.getTableProps,p=u.getTableBodyProps,E=u.headerGroups,h=u.page,f=u.prepareRow,v=u.canPreviousPage,N=u.canNextPage,y=u.pageOptions,x=u.pageCount,O=u.gotoPage,j=u.nextPage,k=u.previousPage,C=u.setPageSize,S=u.state,P=S.pageIndex,_=S.pageSize;return c.a.createElement("div",{className:"table-responsive"},r?c.a.createElement("div",{className:"pagination"},c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(0)},disabled:!v},"<<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},"<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j()},disabled:!N},">")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(x-1)},disabled:!N},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,P+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:P+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;O(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:_,onChange:function(e){C(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))):"",c.a.createElement("table",Object.assign({},d(),{className:"table table-bordered"}),c.a.createElement("thead",null,E.map((function(e,a){return c.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"text-center",key:a}),e.headers.map((function(e,a){return c.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"tr_cabecera",style:{fontSize:l?"14px":"15px"},key:a}),e.render("Header"),c.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""),c.a.createElement("div",null,e.canFilter?e.render("Filter"):null))})))}))),c.a.createElement("tbody",Object.assign({},p(),{className:"text-center",style:{fontSize:l?"13px":"15px"}}),h.map((function(e,a){return f(e)||c.a.createElement("tr",Object.assign({},e.getRowProps(),{key:a+"-"}),e.cells.map((function(e,a){return c.a.createElement("td",Object.assign({},e.getCellProps(),{key:a+"td"}),e.render("Cell"))})))})))),c.a.createElement("div",{className:"pagination"},c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(0)},disabled:!v},"<<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return k()},disabled:!v},"<")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return j()},disabled:!N},">")," ",c.a.createElement(m.a,{size:"sm",className:"button-pagination",variant:"secondary",onClick:function(){return O(x-1)},disabled:!N},">>")," ",c.a.createElement("span",null,"P\xe1gina"," ",c.a.createElement("strong",null,P+1," de ",y.length)," "),c.a.createElement("span",{className:"ml-3"},"| ",c.a.createElement("span",{className:"ml-2"},"Ir a la P\xe1gina:"," "),c.a.createElement("input",Object(n.a)({type:"number",defaultValue:P+1,onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;O(a)},className:"inputPage"},"onChange",(function(e){e.target.value>y.length&&(e.target.value=1)}))))," ",c.a.createElement("select",{value:_,onChange:function(e){C(Number(e.target.value))},className:"inputPage"},[10,20,30,40,50].map((function(e){return c.a.createElement("option",{key:e,value:e},"Mostrar ",e)})))))}g.autoRemove=function(e){return!e};a.a=function(e){var a=e.data,t=e.columns,n=e.displayPaginationUp,r=e.letrasChicas;return c.a.createElement(d,null,c.a.createElement(p,{data:a,columns:t,displayPaginationUp:n,letrasChicas:r}))}},596:function(e,a,t){},747:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(44),l=t(30),c=t(1),s=t.n(c),o=t(567),i=t(568),m=t(282),u=t(10),d=t(280),b=(t(571),t(25)),g=t.n(b),p=t(288),E=t(112),h=t(34),f=t(13),v=(t(289),t(596),t(611)),N={responsive:!0,maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,title:{display:!0,text:"Cantidad S.S Emitidas por Mes"}},y={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[]};a.default=function(e){var a=Object(c.useState)({id_housing_complexe:"",year:""}),t=Object(l.a)(a,2),b=t[0],x=t[1],O=Object(c.useState)("Buscar..."),j=Object(l.a)(O,2),k=j[0],C=(j[1],Object(c.useState)(!1)),S=Object(l.a)(C,2),P=S[0],_=S[1],z=Object(c.useState)([]),w=Object(l.a)(z,2),M=w[0],A=w[1],D=Object(c.useState)([]),F=Object(l.a)(D,2),T=F[0],J=F[1],I=Object(c.useState)([]),R=Object(l.a)(I,2),B=R[0],V=R[1],q=Object(c.useState)(!1),H=Object(l.a)(q,2),U=H[0],G=H[1],L=Object(c.useState)(!1),W=Object(l.a)(L,2),K=W[0],Q=W[1],X=Object(c.useState)(!0),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=Object(c.useState)(!0),ae=Object(l.a)(ee,2),te=ae[0],ne=ae[1];Object(c.useEffect)((function(){return le(),function(){y={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[]}}}),[]),Object(c.useEffect)((function(){K&&re()}),[K]);var re=function(){B.forEach((function(e,a){y.datasets.push({label:e.name,backgroundColor:h.b[a],borderColor:h.b[a],borderWidth:1,hoverBackgroundColor:h.b[a],hoverBorderColor:h.b[a],data:[e.enero,e.febrero,e.marzo,e.abril,e.mayo,e.junio,e.julio,e.agosto,e.septiembre,e.octubre,e.noviembre,e.diciembre]})})),G(!0)},le=function(){var e=[g.a.get(h.a+"housing_complexe"),g.a.get(h.a+"ownership_ss_years_service")];Promise.all(e).then((function(e){A(e[0].data),J(e[1].data)})).catch((function(e){e.response?f.b.error(e.response.data.message):(console.log(e),f.b.error("Error, contacte con soporte"))}))},ce=function(e){x(Object(r.a)(Object(r.a)({},b),{},Object(n.a)({},e.target.name,e.target.value)))};return s.a.createElement(o.a,{fluid:!0},s.a.createElement(i.a,{className:"containerDiv"},s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement("h4",{className:"text-center title_principal"},"INDICADORES DE POSTVENTA (Cantidad S.S Emitidas por Mes)")),s.a.createElement(m.a,{sm:12,md:12,lg:12,style:{display:Z?"block":"none"}},s.a.createElement(u.a,{onSubmit:function(e){var a=e.currentTarget;if(e.preventDefault(),!1===a.checkValidity())return e.stopPropagation(),void _(!0);var t=Object.assign({},b);g.a.post(h.a+"indicators_ss_by_month",t).then((function(e){V(e.data.ss_by_month),Q(!0),$(!1)})).catch((function(e){e.response?f.b.error(e.response.data.message):(console.log(e),f.b.error("Error, contacte con soporte"))}))},noValidate:!0,validated:P},s.a.createElement(i.a,null,s.a.createElement(p.a,{type:"select",name:"id_housing_complexe",label:"Proyecto",required:!0,cols:"col-md-4 col-sm-4 col-lg-4",messageErrors:["Requerido*"],value:b.id_housing_complexe,handleChange:ce},s.a.createElement("option",{value:""},"--Seleccione--"),M.map((function(e,a){return s.a.createElement("option",{value:e.id,key:a},e.name)}))),s.a.createElement(E.a,{type:"select",name:"year",label:"A\xf1o",required:!0,cols:"col-md-4 col-sm-4 col-lg-4",messageErrors:["Requerido*"],value:b.year,handleChange:ce},s.a.createElement("option",{value:""},"--Seleccione--"),T.map((function(e,a){return s.a.createElement("option",{value:e.year,key:a},e.year)}))),s.a.createElement(m.a,{sm:4,md:4,lg:4},s.a.createElement("br",null),s.a.createElement(d.a,{variant:"secondary",block:!0,size:"sm",type:"submit"},k))))),s.a.createElement(m.a,{sm:12,md:12,lg:12,style:{display:Z?"none":"block"}},s.a.createElement("br",null),s.a.createElement(i.a,null,s.a.createElement(m.a,{sm:10,md:10,lg:10,className:"title_font"},s.a.createElement("h5",null,"Cantidad de S.S Emitidas por Mes")),s.a.createElement(m.a,{sm:2,md:2,lg:2,className:"title_font"},s.a.createElement("h5",null,"A\xf1o: ",b.year))),s.a.createElement(i.a,{className:""},s.a.createElement(m.a,{sm:12,md:12,lg:12,className:"table-responsive"},s.a.createElement("table",{className:"table table-bordered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"th_class"},"Proyecto Inmobiliario"),s.a.createElement("th",{className:"th_class"},"Enero"),s.a.createElement("th",{className:"th_class"},"Febrero"),s.a.createElement("th",{className:"th_class"},"Marzo"),s.a.createElement("th",{className:"th_class"},"Abril"),s.a.createElement("th",{className:"th_class"},"Mayo"),s.a.createElement("th",{className:"th_class"},"Junio"),s.a.createElement("th",{className:"th_class"},"Julio"),s.a.createElement("th",{className:"th_class"},"Agosto"),s.a.createElement("th",{className:"th_class"},"Septiembre"),s.a.createElement("th",{className:"th_class"},"Octubre"),s.a.createElement("th",{className:"th_class"},"Noviembre"),s.a.createElement("th",{className:"th_class"},"Diciembre"))),s.a.createElement("tbody",{className:""},B.map((function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",{className:""},e.name),s.a.createElement("td",{className:"text-right"},e.enero),s.a.createElement("td",{className:"text-right"},e.febrero),s.a.createElement("td",{className:"text-right"},e.marzo),s.a.createElement("td",{className:"text-right"},e.abril),s.a.createElement("td",{className:"text-right"},e.mayo),s.a.createElement("td",{className:"text-right"},e.junio),s.a.createElement("td",{className:"text-right"},e.julio),s.a.createElement("td",{className:"text-right"},e.agosto),s.a.createElement("td",{className:"text-right"},e.septiembre),s.a.createElement("td",{className:"text-right"},e.octubre),s.a.createElement("td",{className:"text-right"},e.noviembre),s.a.createElement("td",{className:"text-right"},e.diciembre))})))))),s.a.createElement("br",null),Z?"":s.a.createElement(i.a,null,s.a.createElement(m.a,{sm:12,md:12,lg:12},s.a.createElement(v.a,{data:y,redraw:U,options:N}))),s.a.createElement("br",null),s.a.createElement("br",null),te?s.a.createElement(i.a,{className:"justify-content-center"},s.a.createElement(m.a,{sm:4,md:4,lg:4},s.a.createElement(d.a,{type:"button",variant:"secondary",size:"sm",block:!0,onClick:function(){ne(!1),console.log(B,"aquimenor"),setTimeout((function(){window.print()}),400),setTimeout((function(){ne(!0)}),1500)}},"Imprimir Pdf")),s.a.createElement(m.a,{sm:4,md:4,lg:4},s.a.createElement(d.a,{type:"button",variant:"secondary",size:"sm",block:!0,onClick:function(){y={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[]},$(!0),G(!1),Q(!1)}},"Nueva Consulta"))):"")))}}}]);
//# sourceMappingURL=62.746ca12d.chunk.js.map