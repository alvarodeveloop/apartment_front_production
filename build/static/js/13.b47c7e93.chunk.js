(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[13],{567:function(e,a,t){"use strict";var n=t(24),r=t(0),o=t.n(r),l=t(27),i=(t(284),o.a.forwardRef((function(e,a){var t,r=e.cols?e.cols:"col-md-6 col-sm-6";return"select"!==e.type&&"textarea"!==e.type?o.a.createElement(l.a.Group,{className:r},e.required?o.a.createElement(l.a.Label,{className:"fontBold"},o.a.createElement("span",{className:"asterisk_red"},"*"),e.label):o.a.createElement(l.a.Label,{className:"fontBold"},e.label),o.a.createElement(l.a.Control,(t={ref:a,id:e.name,type:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,readOnly:!!e.readonly&&e.readonly,className:e.className?e.className:"",step:e.step?e.step:"",onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){}},Object(n.a)(t,"className","form-control-sm"),Object(n.a)(t,"disabled",e.disabled),t)),o.a.createElement(l.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return o.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"select"===e.type?o.a.createElement(l.a.Group,{className:r},e.required?o.a.createElement(l.a.Label,{className:"fontBold"},o.a.createElement("span",{className:"asterisk_red"},"*"),e.label):o.a.createElement(l.a.Label,{className:"fontBold"},e.label),o.a.createElement(l.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",readOnly:!!e.readonly&&e.readonly,required:e.required,multiple:!!e.multiple&&e.multiple,ref:a||null,className:"form-control-sm",disabled:e.disabled},e.children),o.a.createElement(l.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return o.a.createElement("span",{key:a,className:"error-input"},e)})),")")):"textarea"===e.type?o.a.createElement(l.a.Group,{className:r},e.required?o.a.createElement(l.a.Label,{className:"fontBold"},o.a.createElement("span",{className:"asterisk_red"},"*"),e.label):o.a.createElement(l.a.Label,{className:"fontBold"},e.label),o.a.createElement(l.a.Control,{id:e.name,as:e.type,name:e.name,onChange:e.handleChange,value:e.value,placeholder:e.placeholder?e.placeholder:"",required:e.required,rows:e.rows?e.rows:2,readOnly:!!e.readonly&&e.readonly,onKeyUp:e.handleKeyUp?e.handleKeyUp:function(){},ref:a||null,className:"form-control-sm",disabled:e.disabled}),o.a.createElement(l.a.Control.Feedback,{type:"invalid"},"(",e.messageErrors.map((function(e,a){return o.a.createElement("span",{key:a,className:"error-input"},e)})),")")):void 0})));a.a=i},575:function(e,a,t){(function(t){var n,r,o;r=[],void 0===(o="function"===typeof(n=function(){"use strict";function a(e,a,t){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){l(n.response,a,t)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var a=new XMLHttpRequest;a.open("HEAD",e,!1);try{a.send()}catch(e){}return 200<=a.status&&299>=a.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof t&&t.global===t?t:void 0,l=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,l){var i=o.URL||o.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):n(c.href)?a(e,t,l):r(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,t,o){if(t=t||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,a){return"undefined"==typeof a?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),t);else if(n(e))a(e,t,o);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){r(l)}))}}:function(e,t,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var l="application/octet-stream"===e.type,i=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||l&&i)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var e=s.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},s.readAsDataURL(e)}else{var m=o.URL||o.webkitURL,d=m.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout((function(){m.revokeObjectURL(d)}),4e4)}});o.saveAs=l.saveAs=l,e.exports=l})?n.apply(a,r):n)||(e.exports=o)}).call(this,t(69))},576:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(56),l=t(187),i=t(22);a.a=function(e){var a=Object(o.a)(e,{activeKey:"onSelect"}),t=a.id,c=a.generateChildId,s=a.onSelect,m=a.activeKey,d=a.transition,u=a.mountOnEnter,_=a.unmountOnExit,p=a.children,b=Object(n.useMemo)((function(){return c||function(e,a){return t?t+"-"+a+"-"+e:null}}),[t,c]),E=Object(n.useMemo)((function(){return{onSelect:s,activeKey:m,transition:d,mountOnEnter:u,unmountOnExit:_,getControlledId:function(e){return b(e,"tabpane")},getControllerId:function(e){return b(e,"tab")}}}),[s,m,d,u,_,b]);return r.a.createElement(l.a.Provider,{value:E},r.a.createElement(i.a.Provider,{value:s},p))}},577:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(5),l=t.n(o),i=t(0),c=t.n(i),s=t(6),m=c.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.as,i=void 0===o?"div":o,m=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),u=Object(s.b)(t,"tab-content");return c.a.createElement(i,Object(n.a)({ref:a},d,{className:l()(m,u)}))}));a.a=m},578:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(5),l=t.n(o),i=t(0),c=t.n(i),s=t(6),m=t(187),d=t(22),u=t(582);var _=c.a.forwardRef((function(e,a){var t=function(e){var a=Object(i.useContext)(m.a);if(!a)return e;var t=a.activeKey,o=a.getControlledId,l=a.getControllerId,c=Object(r.a)(a,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==c.transition,_=Object(d.b)(e.eventKey);return Object(n.a)({},e,{active:null==e.active&&null!=_?Object(d.b)(t)===_:e.active,id:o(e.eventKey),"aria-labelledby":l(e.eventKey),transition:s&&(e.transition||c.transition||u.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:c.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:c.unmountOnExit})}(e),o=t.bsPrefix,_=t.className,p=t.active,b=t.onEnter,E=t.onEntering,g=t.onEntered,v=t.onExit,h=t.onExiting,y=t.onExited,f=t.mountOnEnter,O=t.unmountOnExit,x=t.transition,j=t.as,C=void 0===j?"div":j,k=(t.eventKey,Object(r.a)(t,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),N=Object(s.b)(o,"tab-pane");if(!p&&!x&&O)return null;var q=c.a.createElement(C,Object(n.a)({},k,{ref:a,role:"tabpanel","aria-hidden":!p,className:l()(_,N,{active:p})}));return x&&(q=c.a.createElement(x,{in:p,onEnter:b,onEntering:E,onEntered:g,onExit:v,onExiting:h,onExited:y,mountOnEnter:f,unmountOnExit:O},q)),c.a.createElement(m.a.Provider,{value:null},c.a.createElement(d.a.Provider,{value:null},q))}));_.displayName="TabPane",a.a=_},582:function(e,a,t){"use strict";var n,r=t(1),o=t(3),l=t(5),i=t.n(l),c=t(190),s=t(0),m=t.n(s),d=t(80),u=t(191),_=((n={})[d.b]="show",n[d.a]="show",n),p=m.a.forwardRef((function(e,a){var t=e.className,n=e.children,l=Object(o.a)(e,["className","children"]),p=Object(s.useCallback)((function(e){Object(u.a)(e),l.onEnter&&l.onEnter(e)}),[l]);return m.a.createElement(d.e,Object(r.a)({ref:a,addEndListener:c.a},l,{onEnter:p}),(function(e,a){return m.a.cloneElement(n,Object(r.a)({},a,{className:i()("fade",t,n.props.className,_[e])}))}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade",a.a=p},583:function(e,a,t){"use strict";var n=t(1),r=t(0),o=t.n(r),l=t(5),i=t.n(l);a.a=function(e){return o.a.forwardRef((function(a,t){return o.a.createElement("div",Object(n.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},594:function(e,a,t){"use strict";var n=t(11),r=t(0),o=t.n(r),l=t(576),i=t(577),c=t(578),s=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},a}(o.a.Component);s.Container=l.a,s.Content=i.a,s.Pane=c.a,a.a=s},595:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(0),l=t.n(o),i=(t(287),t(56)),c=t(556),s=t(189),m=t(188),d=t(576),u=t(577),_=t(578);function p(e,a){var t=0;return l.a.Children.map(e,(function(e){return l.a.isValidElement(e)?a(e,t++):e}))}function b(e){var a;return function(e,a){var t=0;l.a.Children.forEach(e,(function(e){l.a.isValidElement(e)&&a(e,t++)}))}(e,(function(e){null==a&&(a=e.props.eventKey)})),a}function E(e){var a=e.props,t=a.title,n=a.eventKey,r=a.disabled,o=a.tabClassName,i=a.id;return null==t?null:l.a.createElement(m.a,{as:s.a,eventKey:n,disabled:r,id:i,className:o},t)}var g=l.a.forwardRef((function(e,a){var t=Object(i.a)(e,{activeKey:"onSelect"}),o=t.id,s=t.onSelect,m=t.transition,g=t.mountOnEnter,v=t.unmountOnExit,h=t.children,y=t.activeKey,f=void 0===y?b(h):y,O=Object(r.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return l.a.createElement(d.a,{ref:a,id:o,activeKey:f,onSelect:s,transition:m,mountOnEnter:g,unmountOnExit:v},l.a.createElement(c.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),p(h,E)),l.a.createElement(u.a,null,p(h,(function(e){var a=Object(n.a)({},e.props);return delete a.title,delete a.disabled,delete a.tabClassName,l.a.createElement(_.a,a)}))))}));g.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},g.displayName="Tabs";a.a=g},596:function(e,a,t){"use strict";var n=t(1),r=t(3),o=t(5),l=t.n(o),i=t(0),c=t.n(i),s=t(6),m=t(70),d=t(583),u=t(192),_=c.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.className,i=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(r.a)(e,["bsPrefix","className","variant","as"]),_=Object(s.b)(t,"card-img");return c.a.createElement(d,Object(n.a)({ref:a,className:l()(i?_+"-"+i:_,o)},u))}));_.displayName="CardImg",_.defaultProps={variant:null};var p=_,b=Object(d.a)("h5"),E=Object(d.a)("h6"),g=Object(m.a)("card-body"),v=c.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.className,m=e.bg,d=e.text,_=e.border,p=e.body,b=e.children,E=e.as,v=void 0===E?"div":E,h=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(s.b)(t,"card"),f=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return c.a.createElement(u.a.Provider,{value:f},c.a.createElement(v,Object(n.a)({ref:a},h,{className:l()(o,y,m&&"bg-"+m,d&&"text-"+d,_&&"border-"+_)}),p?c.a.createElement(g,null,b):b))}));v.displayName="Card",v.defaultProps={body:!1},v.Img=p,v.Title=Object(m.a)("card-title",{Component:b}),v.Subtitle=Object(m.a)("card-subtitle",{Component:E}),v.Body=g,v.Link=Object(m.a)("card-link",{Component:"a"}),v.Text=Object(m.a)("card-text",{Component:"p"}),v.Header=Object(m.a)("card-header"),v.Footer=Object(m.a)("card-footer"),v.ImgOverlay=Object(m.a)("card-img-overlay");a.a=v},749:function(e,a,t){"use strict";t.r(a);var n=t(110),r=t(24),o=t(48),l=t(47),i=t(0),c=t.n(i),s=t(29),m=t(563),d=t(564),u=t(278),_=t(27),p=t(596),b=t(595),E=t(594),g=t(276),v=t(554),h=t(28),y=t.n(h),f=t(143),O=t(567),x=t(14),j=t(41),C=t(285),k=t(575),N=t.n(k),q=function(e){var a=Object(i.useRef)(null),t=Object(i.useState)({name:"",id_enterprise:"",id_city:"",street:"",number:"",stage:"",number_living:"",date_municipal_reception:"",acronym:"",type_proyect:"",block_mza:!1,manager_postventa:"",admin_postventa:"",name_admin_postventa:"",phone_admin_postventa:"",dir_proyect_postventa:"",name_dir_proyect_postventa:"",other_destinatary_postventa:"",manager_email:!1,admin_email:!1,dir_email:!1,other_email:!1,precint_by_housing_complexes:[],precint_by_housing_complexes_model:[],hard_data:!1,hard_data_information_limit_date:!1,"totales_a\xf1o_1":!1,"totales_a\xf1o_2":!1,"totales_a\xf1o_3":!1,"totales_a\xf1o_4":!1,solicitude_year_1:"",solicitude_year_2:"",solicitude_year_3:"",solicitude_year_4:"",observation_year_1:"",observation_year_2:"",observation_year_3:"",observation_year_4:"",rut_administration_client:"",user_client_administration:"",password_client_administration:"",name_client_administration:"",email_client_administration:"",phone_client_administration:"",fileAdjunt:"",id_model_precint:""}),s=Object(l.a)(t,2),h=s[0],k=s[1],q=Object(i.useState)(""),w=Object(l.a)(q,2),S=w[0],R=w[1],P=Object(i.useState)([]),A=Object(l.a)(P,2),T=A[0],K=A[1],L=Object(i.useState)([]),D=Object(l.a)(L,2),Y=D[0],M=D[1],B=Object(i.useState)([]),U=Object(l.a)(B,2),F=U[0],I=U[1],z=Object(i.useState)([]),H=Object(l.a)(z,2),V=(H[0],H[1]),G=Object(i.useState)(null),J=Object(l.a)(G,2),X=J[0],Q=J[1],W=Object(i.useState)(!1),Z=Object(l.a)(W,2),$=Z[0],ee=Z[1],ae=Object(i.useState)([]),te=Object(l.a)(ae,2),ne=te[0],re=te[1],oe=Object(i.useState)([]),le=Object(l.a)(oe,2),ie=le[0],ce=le[1];Object(i.useEffect)((function(){e.config_ss&&Object.keys(e.config_ss).length>0?(a.current.focus(),me(),e.match.params.id&&de(e.match.params.id)):(x.b.error("Debe hacer la configuraci\xf3n primero"),setTimeout((function(){e.history.replace("/masters/config")}),1e3))}),[]);var se=function(e){"block_mza"===e.target.name||"manager_email"===e.target.name||"admin_email"===e.target.name||"dir_email"===e.target.name||"other_email"===e.target.name||"hard_data"===e.target.name||"hard_data_information_limit_date"===e.target.name||-1!==e.target.name.indexOf("totales_a\xf1o")?k(Object(o.a)(Object(o.a)({},h),{},Object(r.a)({},e.target.name,e.target.checked))):k(Object(o.a)(Object(o.a)({},h),{},Object(r.a)({},e.target.name,e.target.value)))},me=function(){var e=[y.a.get(j.a+"master_cities"),y.a.get(j.a+"enterprise"),y.a.get(j.a+"master_enclosure"),y.a.get(j.a+"master_config_file"),y.a.get(j.a+"params_model_property")];Promise.all(e).then((function(e){M(e[0].data),K(e[1].data),I(e[2].data),Q(e[3].data),ce(e[4].data)})).catch((function(e){e.response?x.b.error(e.response.data.message):x.b.error("Error, contacte con soporte")}))},de=function(e){y.a.get(j.a+"housing_complexe/"+e).then((function(e){k({name:e.data.name,id_enterprise:e.data.id_enterprise,id_city:e.data.id_city,street:e.data.street,number:e.data.number,stage:e.data.stage,number_living:e.data.number_living,date_municipal_reception:C(e.data.date_municipal_reception).format("YYYY-MM-DD"),acronym:e.data.acronym,type_proyect:e.data.type_proyect,block_mza:e.data.block_mza,manager_postventa:e.data.manager_postventa,admin_postventa:e.data.admin_postventa,name_admin_postventa:e.data.name_admin_postventa,phone_admin_postventa:e.data.phone_admin_postventa,dir_proyect_postventa:e.data.dir_proyect_postventa,name_dir_proyect_postventa:e.data.name_dir_proyect_postventa,other_destinatary_postventa:e.data.other_destinatary_postventa,manager_email:e.data.manager_email,admin_email:e.data.admin_email,dir_email:e.data.dir_email,other_email:e.data.other_email,precint_by_housing_complexes:e.data.precints.filter((function(e){return!e.is_by_model})).map((function(e){return e.id_precint})),precint_by_housing_complexes_model:e.data.precints.filter((function(e){return e.is_by_model})).map((function(e){return e.id_precint})),hard_data:e.data.hard_data,hard_data_information_limit_date:e.data.hard_data_information_limit_date,"totales_a\xf1o_1":e.data.totales_a\u00f1o_1,"totales_a\xf1o_2":e.data.totales_a\u00f1o_2,"totales_a\xf1o_3":e.data.totales_a\u00f1o_3,"totales_a\xf1o_4":e.data.totales_a\u00f1o_4,solicitude_year_1:e.data.solicitude_year_1,solicitude_year_2:e.data.solicitude_year_2,solicitude_year_3:e.data.solicitude_year_3,solicitude_year_4:e.data.solicitude_year_4,observation_year_1:e.data.observation_year_1,observation_year_2:e.data.observation_year_2,observation_year_3:e.data.observation_year_3,observation_year_4:e.data.observation_year_4,rut_administration_client:e.data.rut_administration_client,user_client_administration:e.data.user_client_administration,name_client_administration:e.data.name_client_administration,email_client_administration:e.data.email_client_administration,phone_client_administration:e.data.phone_client_administration,fileAdjunt:"",id:e.data.id,id_model_precint:e.data.id_model_precint}),e.data.files&&re(e.data.files)})).catch((function(e){e.response?x.b.error(e.response.data.message):(console.log(e),x.b.error("Error, contacte con soporte"))}))},ue=function(){e.history.push("/masters/housing_complexes")},_e=function(e){e.persist(),-1!==e.target.name.indexOf("model")?e.target.checked?k(Object(o.a)(Object(o.a)({},h),{},{precint_by_housing_complexes_model:[].concat(Object(n.a)(h.precint_by_housing_complexes_model),[e.target.value])})):k(Object(o.a)(Object(o.a)({},h),{},{precint_by_housing_complexes_model:h.precint_by_housing_complexes_model.filter((function(a){return a!=e.target.value}))})):e.target.checked?k(Object(o.a)(Object(o.a)({},h),{},{precint_by_housing_complexes:[].concat(Object(n.a)(h.precint_by_housing_complexes),[e.target.value])})):k(Object(o.a)(Object(o.a)({},h),{},{precint_by_housing_complexes:h.precint_by_housing_complexes.filter((function(a){return a!=e.target.value}))}))};return c.a.createElement(m.a,{fluid:!0},c.a.createElement(d.a,{className:"containerDiv"},c.a.createElement(u.a,{sm:12,md:12,lg:12,xs:12,className:"text-right"},c.a.createElement("span",{className:"text-danger"},"*Campos Obligatorios"),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement(u.a,{sm:12,md:12,lg:12},c.a.createElement(_.a,{onSubmit:function(e){var t=e.currentTarget;if(e.preventDefault(),!1===t.checkValidity())return e.stopPropagation(),ee(!0),void x.b.error("Hay campos que no cumplen con los requisitos, verifique por favor");var n=Object.assign({},h),r=new FormData;Object.keys(h).forEach((function(e,a){"fileAdjunt"===e?r.append("documents",h[e]):r.append(e,h[e])})),n.id?y.a.put(j.a+"housing_complexe/"+n.id,r).then((function(e){x.b.success("Registro Modificado"),setTimeout((function(){ue()}),1e3)})).catch((function(e){e.response?x.b.error(e.response.data.message):(console.log(e),x.b.error("Error, contacte con soporte"))})):y.a.post(j.a+"housing_complexe",r).then((function(e){x.b.success("Registro Creado"),k({name:"",id_enterprise:"",id_city:"",street:"",number:"",stage:"",number_living:"",date_municipal_reception:"",acronym:"",type_proyect:"",block_mza:!1,manager_postventa:"",admin_postventa:"",name_admin_postventa:"",phone_admin_postventa:"",dir_proyect_postventa:"",name_dir_proyect_postventa:"",other_destinatary_postventa:"",manager_email:!1,admin_email:!1,dir_email:!1,other_email:!1,precint_by_housing_complexes:[],precint_by_housing_complexes_model:[],hard_data:!1,hard_data_information_limit_date:!1,"totales_a\xf1o_1":!1,"totales_a\xf1o_2":!1,"totales_a\xf1o_3":!1,"totales_a\xf1o_4":!1,solicitude_year_1:"",solicitude_year_2:"",solicitude_year_3:"",solicitude_year_4:"",observation_year_1:"",observation_year_2:"",observation_year_3:"",observation_year_4:"",rut_administration_client:"",user_client_administration:"",password_client_administration:"",name_client_administration:"",email_client_administration:"",phone_client_administration:"",fileAdjunt:"",id_model_precint:""}),ee(!1),document.getElementById("file_adjunt").value="",a.current.focus(),R("")})).catch((function(e){e.response?x.b.error(e.response.data.message):(console.log(e),x.b.error("Error, contacte con soporte"))}))},noValidate:!0,validated:$},c.a.createElement(d.a,null,c.a.createElement(O.a,Object.assign({},e.inputName,{handleChange:se,value:h.name,ref:a})),c.a.createElement(f.a,Object.assign({},e.inputEnterprise,{value:h.id_enterprise,handleChange:se}),c.a.createElement("option",{value:""},"--Seleccione--"),T.map((function(e,a){return c.a.createElement("option",{value:e.id,key:a},e.name)})))),c.a.createElement(d.a,null,c.a.createElement(f.a,Object.assign({},e.inputCity,{value:h.id_city,handleChange:se}),c.a.createElement("option",{value:""},"--Seleccione--"),Y.map((function(e,a){return c.a.createElement("option",{value:e.id,key:a},e.name)}))),c.a.createElement(f.a,Object.assign({},e.inputStreet,{value:h.street,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputNumber,{value:h.number,handleChange:se}))),c.a.createElement(d.a,null,c.a.createElement(f.a,Object.assign({},e.inputStage,{value:h.stage,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputNumberLiving,{value:h.number_living,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputDateMunicipalReception,{value:h.date_municipal_reception,handleChange:se}))),c.a.createElement(d.a,null,c.a.createElement(f.a,Object.assign({},e.inputAcronym,{value:h.acronym,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputTypeProyect,{value:h.type_proyect,handleChange:se}),c.a.createElement("option",{value:""},"--Seleccione--"),c.a.createElement("option",{value:"1"},"Extensi\xf3n"),c.a.createElement("option",{value:"2"},"Altura"),c.a.createElement("option",{value:"3"},"Serviu")),c.a.createElement(u.a,{sm:4,md:4,lg:4},c.a.createElement("br",null),c.a.createElement("label",{for:"block_mza"},c.a.createElement("input",{type:"checkbox",name:"block_mza",id:"block_mza",checked:h.block_mza,onChange:se}),"\xa0 Con Block/Mza."))),c.a.createElement(d.a,null,c.a.createElement(u.a,{sm:12,md:12,lg:12},c.a.createElement(p.a,{style:{borderColor:"rgb(87, 154, 223)"}},c.a.createElement(p.a.Body,null,c.a.createElement(b.a,Object(r.a)({defaultActiveKey:"email",id:"uncontrolled-tab-example",variant:"pills"},"id","aqui_esto"),c.a.createElement(E.a,{eventKey:"email",title:"E-mails"},c.a.createElement("br",null),c.a.createElement(d.a,null,c.a.createElement(f.a,Object.assign({},e.inputManagerPostventa,{value:h.manager_postventa,handleChange:se})),c.a.createElement(u.a,{sm:3,md:3,lg:3,xs:6},c.a.createElement("br",null),c.a.createElement("label",{for:"check1_postventa"},c.a.createElement("input",{id:"check1_postventa",type:"checkbox",name:"manager_email",checked:h.manager_email,onChange:se}),"\xa0Recibe Correo"))),c.a.createElement(d.a,null,c.a.createElement(f.a,Object.assign({},e.inputAdminPostventa,{value:"null"!==h.admin_postventa?h.admin_postventa:"",handleChange:se})),c.a.createElement(u.a,{sm:3,md:3,lg:3,xs:6},c.a.createElement("br",null),c.a.createElement("label",{for:"check2_postventa"},c.a.createElement("input",{id:"check2_postventa",type:"checkbox",name:"admin_email",checked:h.admin_email,onChange:se}),"\xa0Recibe Correo")),c.a.createElement(f.a,Object.assign({},e.inputNameAdminPostventa,{value:h.name_admin_postventa,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputPhoneAdminPostventa,{value:h.phone_admin_postventa,handleChange:se}))),c.a.createElement(d.a,null,c.a.createElement(f.a,Object.assign({},e.inputDirProyectPostventa,{value:"null"!==h.dir_proyect_postventa?h.dir_proyect_postventa:"",handleChange:se})),c.a.createElement(u.a,{sm:3,md:3,lg:3,xs:6},c.a.createElement("br",null),c.a.createElement("label",{for:"check3_postventa"},c.a.createElement("input",{id:"check3_postventa",type:"checkbox",name:"dir_email",checked:h.dir_email,onChange:se}),"\xa0Recibe Correo")),c.a.createElement(f.a,Object.assign({},e.inputNameDirProyectPostventa,{value:h.name_dir_proyect_postventa,handleChange:se}))),c.a.createElement(d.a,null,c.a.createElement(f.a,Object.assign({},e.inputOtherDestinatary,{value:"null"!==h.other_destinatary_postventa?h.other_destinatary_postventa:"",handleChange:se})),c.a.createElement(u.a,{sm:3,md:3,lg:3,xs:6},c.a.createElement("br",null),c.a.createElement("label",{for:"check4_postventa"},c.a.createElement("input",{id:"check4_postventa",type:"checkbox",name:"other_email",checked:h.other_email,onChange:se}),"\xa0Recibe Correo")))),c.a.createElement(E.a,{eventKey:"recinto_habitacional",title:"Recinto x Conjunto Habitacional"},c.a.createElement("br",null),c.a.createElement(d.a,null,F.map((function(e,a){return c.a.createElement(u.a,{sm:3,md:3,lg:3,key:a},c.a.createElement("label",{for:"check_"+e.name},c.a.createElement("input",{id:"check_"+e.name,type:"checkbox",name:"precint_housing_complexe",checked:!!h.precint_by_housing_complexes.find((function(a){return a==e.id})),value:e.id,onChange:_e}),"\xa0 ",e.name))})))),c.a.createElement(E.a,{eventKey:"recinto_habitacional_by_model",title:"Recinto x Modelo de Propiedad"},c.a.createElement("br",null),c.a.createElement(d.a,null,c.a.createElement(u.a,{sm:5,md:5,lg:5},c.a.createElement("label",null,"Modelos"),c.a.createElement("select",Object(r.a)({className:"form-control",onChange:function(e){var a=e.target.value;k(Object(o.a)(Object(o.a)({},h),{},{id_model_precint:a,precint_by_housing_complexes_model:[]})),a?V():V([])},value:h.id_model_precint},"value",h.id_model_precint),c.a.createElement("option",{value:""},"--Seleccione--"),ie.map((function(e,a){return c.a.createElement("option",{key:a,value:e.id},e.name)}))))),c.a.createElement("br",null),h.id_model_precint?c.a.createElement(d.a,null,F.map((function(e,a){return c.a.createElement(u.a,{sm:3,md:3,lg:3,key:a},c.a.createElement("label",{forhtml:"check_"+e.name},c.a.createElement("input",{id:"check_"+e.name,type:"checkbox",name:"precint_by_housing_complexes_model",checked:!!h.precint_by_housing_complexes_model.find((function(a){return a==e.id})),value:e.id,onChange:_e}),"\xa0",e.name))}))):""),c.a.createElement(E.a,{eventKey:"adjunt_data",title:"Datos Adjuntos"},c.a.createElement(d.a,null,c.a.createElement(u.a,{sm:4,md:4,lg:4,xs:4},c.a.createElement("br",null),c.a.createElement(g.a,{variant:"secondary",block:!0,onClick:function(){document.getElementById("file_adjunt").click()}},"Archivos Comunes"),c.a.createElement("input",{accept:e.config_ss?e.config_ss.valid_format_documents:"",type:"file",name:"file_adjunt",id:"file_adjunt",style:{display:"none"},onChange:function(a){-1!==e.config_ss.valid_format_documents.indexOf(a.target.files[0].type.split("/")[1])?(k(Object(o.a)(Object(o.a)({},h),{},{fileAdjunt:a.target.files[0]})),R(a.target.files[0].name)):(x.b.error("El tipo de archivo no es valido"),document.getElementById("file_adjunt").value="",document.getElementById("file_adjunt").src="")}})),c.a.createElement(u.a,{sm:4,md:4,lg:4,xs:4},c.a.createElement("br",null),S)),c.a.createElement("br",null),c.a.createElement(d.a,null,ne.map((function(a,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{size:"sm",variant:"link",onClick:function(){var e;e=a,y.a.get(j.a+"housing_complexe_download_file/"+e.id,{responseType:"blob"}).then((function(a){N.a.saveAs(a.data,e.name)})).catch((function(e){e.response?x.b.error(e.response.data.message):(console.log(e),x.b.error("Error, contacte con soporte"))}))}},a.name),c.a.createElement(g.a,{size:"sm",variant:"dark",onClick:function(){var t;t=a,y.a.delete(j.a+"housing_complexe_destroy_file/"+t.id).then((function(a){x.b.success("Archivo Eliminado"),de(e.match.params.id)})).catch((function(e){e.response?x.b.error(e.response.data.message):(console.log(e),x.b.error("Error, contacte con soporte"))}))}},c.a.createElement(v.j,null)))})))),c.a.createElement(E.a,{eventKey:"hard_data",title:"Datos Duros"},c.a.createElement(d.a,null,c.a.createElement(u.a,{sm:4,md:4,lg:4,xs:4},c.a.createElement("b",null,"Se consideran las S.S emitidas hasta la fecha: ",X?C(X.date_hard_data).format("DD-MM-YYYY"):""," ")),c.a.createElement(u.a,{sm:4,md:4,lg:4,xs:4},c.a.createElement("label",{for:"hard_data_checkbox"},c.a.createElement("input",{type:"checkbox",id:"hard_data_checkbox",name:"hard_data",checked:h.hard_data,onChange:se}),"\xa0 Con Datos Duros")),c.a.createElement(u.a,{sm:4,md:4,lg:4,xs:4},c.a.createElement("label",{for:"hard_data_checkbox1"},c.a.createElement("input",{type:"checkbox",id:"hard_data_checkbox1",name:"hard_data_information_limit_date",checked:h.hard_data_information_limit_date,onChange:se}),"\xa0 Con informaci\xf3n antes del ",X?X.date_hard_data.split("-")[0]:""))),c.a.createElement(d.a,null,c.a.createElement(u.a,{sm:3,md:3,lg:3,xs:3,className:"text-center"},c.a.createElement("label",{for:"totales_a\xf1o_1"},c.a.createElement("input",{type:"checkbox",id:"totales_a\xf1o_1",name:"totales_a\xf1o_1",checked:h.totales_a\u00f1o_1,onChange:se}),c.a.createElement("br",null),c.a.createElement("b",null,"TOTALES A\xd1O 1"))),c.a.createElement(u.a,{sm:3,md:3,lg:3,xs:3,className:"text-center"},c.a.createElement("label",{for:"totales_a\xf1o_2"},c.a.createElement("input",{type:"checkbox",id:"totales_a\xf1o_2",name:"totales_a\xf1o_2",checked:h.totales_a\u00f1o_2,onChange:se}),c.a.createElement("br",null),c.a.createElement("b",null,"TOTALES A\xd1O 2"))),c.a.createElement(u.a,{sm:3,md:3,lg:3,xs:3,className:"text-center"},c.a.createElement("label",{for:"totales_a\xf1o_3"},c.a.createElement("input",{type:"checkbox",id:"totales_a\xf1o_3",name:"totales_a\xf1o_3",checked:h.totales_a\u00f1o_3,onChange:se}),c.a.createElement("br",null),c.a.createElement("b",null,"TOTALES A\xd1O 3"))),c.a.createElement(u.a,{sm:3,md:3,lg:3,xs:3,className:"text-center"},c.a.createElement("label",{for:"totales_a\xf1o_4"},c.a.createElement("input",{type:"checkbox",id:"totales_a\xf1o_4",name:"totales_a\xf1o_4",checked:h.totales_a\u00f1o_4,onChange:se}),c.a.createElement("br",null),c.a.createElement("b",null,"TOTALES A\xd1O 4")))),c.a.createElement(d.a,null,c.a.createElement(f.a,Object.assign({},e.inputSolicitudeYear1,{value:h.solicitude_year_1,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputSolicitudeYear2,{value:h.solicitude_year_2,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputSolicitudeYear3,{value:h.solicitude_year_3,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputSolicitudeYear4,{value:h.solicitude_year_4,handleChange:se}))),c.a.createElement(d.a,null,c.a.createElement(f.a,Object.assign({},e.inputObservationYear1,{value:h.observation_year_1,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputObservationYear2,{value:h.observation_year_2,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputObservationYear3,{value:h.observation_year_3,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputObservationYear4,{value:h.observation_year_4,handleChange:se})))),c.a.createElement(E.a,{eventKey:"admin_ss",title:"Administraci\xf3n S.S"},c.a.createElement("br",null),c.a.createElement(d.a,null,c.a.createElement(f.a,{type:"text",required:!1,name:"name_client_administration",label:"Nombre:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:h.name_client_administration,handleChange:se}),c.a.createElement(f.a,{type:"text",required:!1,name:"email_client_administration",label:"Email:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:h.email_client_administration,handleChange:se}),c.a.createElement(f.a,{type:"text",required:!1,name:"phone_client_administration",label:"Telefono:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4",value:h.phone_client_administration,handleChange:se})),c.a.createElement(d.a,null,c.a.createElement(f.a,Object.assign({},e.inputRutAdministrationClient,{value:h.rut_administration_client,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputUserClientAdministration,{value:h.user_client_administration,handleChange:se})),c.a.createElement(f.a,Object.assign({},e.inputPasswordClientAdministration,{value:h.password_client_administration,handleChange:se}))))))))),c.a.createElement(d.a,{className:"justify-content-center"},c.a.createElement(u.a,{sm:4,md:4,lg:4,xs:12},c.a.createElement("br",null),c.a.createElement(g.a,{variant:"primary",block:!0,size:"sm",type:"submit"},"Guardar")),c.a.createElement(u.a,{sm:4,md:4,lg:4,xs:12},c.a.createElement("br",null),c.a.createElement(g.a,{variant:"info",block:!0,size:"sm",type:"button",onClick:ue},"Volver")))))))};q.defaultProps={inputName:{type:"text",required:!0,name:"name",label:"Nombre",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputEnterprise:{type:"select",required:!0,name:"id_enterprise",label:"Empresa",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputCity:{type:"select",required:!0,name:"id_city",label:"Ciudad",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputStreet:{type:"text",required:!0,name:"street",label:"Calle",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputNumber:{type:"number",required:!0,name:"number",label:"N\xfamero",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputStage:{type:"number",required:!0,name:"stage",label:"Etapa",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputNumberLiving:{type:"number",required:!0,name:"number_living",label:"Cant.Viviendas",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputDateMunicipalReception:{type:"date",required:!1,name:"date_municipal_reception",label:"Fecha Recepci\xf3n Municipal",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputAcronym:{type:"text",required:!1,name:"acronym",label:"Siglas",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputTypeProyect:{type:"select",required:!0,name:"type_proyect",label:"Tipo Proyecto",messageErrors:["Requerido*"],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputManagerPostventa:{type:"email",required:!0,name:"manager_postventa",label:"Encargado Postventa",messageErrors:["Requerido*, ","Formato Email*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputAdminPostventa:{type:"email",required:!1,name:"admin_postventa",label:"Admin",messageErrors:["Requerido*, ","Formato Email*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputNameAdminPostventa:{type:"text",required:!1,name:"name_admin_postventa",label:"Nombre",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputPhoneAdminPostventa:{type:"number",required:!1,name:"phone_admin_postventa",label:"Tel\xe9fono",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputDirProyectPostventa:{type:"email",required:!1,name:"dir_proyect_postventa",label:"Dir.Proyecto",messageErrors:["Requerido*, ","Formato Email*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputNameDirProyectPostventa:{type:"text",required:!1,name:"name_dir_proyect_postventa",label:"Nombre",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputOtherDestinatary:{type:"email",required:!1,name:"other_destinatary_postventa",label:"Otro Destinatario",messageErrors:["Requerido*, ","Formato Email*"],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputSolicitudeYear1:{type:"number",required:!1,name:"solicitude_year_1",label:"Solicitudes",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputObservationYear1:{type:"number",required:!1,name:"observation_year_1",label:"Observaciones",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputSolicitudeYear2:{type:"number",required:!1,name:"solicitude_year_2",label:"Solicitudes",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputObservationYear2:{type:"number",required:!1,name:"observation_year_2",label:"Observaciones",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputSolicitudeYear3:{type:"number",required:!1,name:"solicitude_year_3",label:"Solicitudes",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputObservationYear3:{type:"number",required:!1,name:"observation_year_3",label:"Observaciones",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputSolicitudeYear4:{type:"number",required:!1,name:"solicitude_year_4",label:"Solicitudes",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputObservationYear4:{type:"number",required:!1,name:"observation_year_4",label:"Observaciones",messageErrors:[],cols:"col-sm-3 col-md-3 col-lg-3 col-xs-3"},inputRutAdministrationClient:{type:"number",required:!1,name:"rut_administration_client",label:"RUT de cliente administraci\xf3n:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputUserClientAdministration:{type:"text",required:!1,name:"user_client_administration",label:"Usuario:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"},inputPasswordClientAdministration:{type:"password",required:!1,name:"password_client_administration",label:"Contrase\xf1a:",messageErrors:[],cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"}},a.default=Object(s.b)((function(e){return{config_ss:e.configs.config}}),{})(q)}}]);
//# sourceMappingURL=13.b47c7e93.chunk.js.map