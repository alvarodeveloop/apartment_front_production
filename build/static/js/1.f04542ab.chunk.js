(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[1],{586:function(e,n,t){"use strict";var a,o=t(2),r=t(4),i=t(6),c=t.n(i),s=t(193),l=t(1),d=t.n(l),u=t(82),f=t(194),p=((a={})[u.b]="show",a[u.a]="show",a),b=d.a.forwardRef((function(e,n){var t=e.className,a=e.children,i=Object(r.a)(e,["className","children"]),b=Object(l.useCallback)((function(e){Object(f.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return d.a.createElement(u.e,Object(o.a)({ref:n,addEndListener:s.a},i,{onEnter:b}),(function(e,n){return d.a.cloneElement(a,Object(o.a)({},n,{className:c()("fade",t,a.props.className,p[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade",n.a=b},587:function(e,n,t){"use strict";var a=t(2),o=t(1),r=t.n(o),i=t(6),c=t.n(i);n.a=function(e){return r.a.forwardRef((function(n,t){return r.a.createElement("div",Object(a.a)({},n,{ref:t,className:c()(n.className,e)}))}))}},640:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(115),o=t(1),r=function(e){var n;return"undefined"===typeof document?null:null==e?Object(a.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(n=e)?void 0:n.nodeType)&&e||null)};function i(e,n){var t=Object(o.useState)((function(){return r(e)})),a=t[0],i=t[1];if(!a){var c=r(e);c&&i(c)}return Object(o.useEffect)((function(){n&&a&&n(a)}),[n,a]),Object(o.useEffect)((function(){var n=r(e);n!==a&&i(n)}),[e,a]),a}},721:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(1);function o(e){var n=function(e){var n=Object(a.useRef)(e);return n.current=e,n}(e);Object(a.useEffect)((function(){return function(){return n.current()}}),[])}},800:function(e,n,t){"use strict";var a,o=t(4),r=t(2),i=t(14),c=t(6),s=t.n(c),l=t(265),d=t(117),u=t(115),f=t(266);function p(e){if((!a&&0!==a||e)&&d.a){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),a=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return a}var b=t(1),h=t.n(b);function m(e){void 0===e&&(e=Object(u.a)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}var g=t(269),v=t(68),O=t(3),E=t.n(O),y=t(40),j=t.n(y),w=t(268),k=t(721),N=t(267),x=t(29),C=t(183);function R(e,n){e.classList?e.classList.add(n):Object(C.a)(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function F(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function S(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=F(e.className,n):e.setAttribute("class",F(e.className&&e.className.baseVal||"",n))}var M=t(108);function T(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function D(e){var n;return T(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=T(e)?Object(u.a)():Object(u.a)(e),t=T(e)||n.defaultView;return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var A=["template","script","style"],B=function(e,n,t){[].forEach.call(e.children,(function(e){-1===n.indexOf(e)&&function(e){var n=e.nodeType,t=e.tagName;return 1===n&&-1===A.indexOf(t.toLowerCase())}(e)&&t(e)}))};function H(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}var P,_=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,a=void 0===t||t,o=n.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=p()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return function(e,n){var t=-1;return e.some((function(e,a){return!!n(e,a)&&(t=a,!0)})),t}(this.data,(function(n){return-1!==n.modals.indexOf(e)}))},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt(Object(M.a)(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(M.a)(n,t)},n.removeContainerStyle=function(e,n){var t=e.style;Object.keys(t).forEach((function(e){n.style[e]=t[e]}))},n.add=function(e,n,t){var a=this.modals.indexOf(e),o=this.containers.indexOf(n);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,a=n.backdrop;B(e,[t,a],(function(e){return H(!0,e)}))}(n,e),-1!==o)return this.data[o].modals.push(e),a;var r={modals:[e],classes:t?t.split(/\s+/):[],overflowing:D(n)};return this.handleContainerOverflow&&this.setContainerStyle(r,n),r.classes.forEach(R.bind(null,n)),this.containers.push(n),this.data.push(r),a},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),a=this.data[t],o=this.containers[t];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(n,1),0===a.modals.length)a.classes.forEach(S.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(a,o),this.hideSiblingNodes&&function(e,n){var t=n.dialog,a=n.backdrop;B(e,[t,a],(function(e){return H(!1,e)}))}(o,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var r=a.modals[a.modals.length-1],i=r.backdrop;H(!1,r.dialog),H(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),z=t(640);function I(e){var n=e||(P||(P=new _),P),t=Object(b.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,a){return n.add(t.current,e,a)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:Object(b.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:Object(b.useCallback)((function(e){t.current.backdrop=e}),[])})}var L=Object(b.forwardRef)((function(e,n){var t=e.show,a=void 0!==t&&t,i=e.role,c=void 0===i?"dialog":i,s=e.className,l=e.style,u=e.children,f=e.backdrop,p=void 0===f||f,O=e.keyboard,E=void 0===O||O,y=e.onBackdropClick,C=e.onEscapeKeyDown,R=e.transition,F=e.backdropTransition,S=e.autoFocus,M=void 0===S||S,T=e.enforceFocus,D=void 0===T||T,A=e.restoreFocus,B=void 0===A||A,H=e.restoreFocusOptions,P=e.renderDialog,_=e.renderBackdrop,L=void 0===_?function(e){return h.a.createElement("div",e)}:_,U=e.manager,W=e.container,K=e.containerClassName,V=e.onShow,$=e.onHide,J=void 0===$?function(){}:$,q=e.onExit,G=e.onExited,Q=e.onExiting,X=e.onEnter,Y=e.onEntering,Z=e.onEntered,ee=Object(o.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ne=Object(z.a)(W),te=I(U),ae=Object(w.a)(),oe=Object(N.a)(a),re=Object(b.useState)(!a),ie=re[0],ce=re[1],se=Object(b.useRef)(null);Object(b.useImperativeHandle)(n,(function(){return te}),[te]),d.a&&!oe&&a&&(se.current=m()),R||a||ie?a&&ie&&ce(!1):ce(!0);var le=Object(x.a)((function(){if(te.add(ne,K),he.current=Object(v.a)(document,"keydown",pe),be.current=Object(v.a)(document,"focus",(function(){return setTimeout(ue)}),!0),V&&V(),M){var e=m(document);te.dialog&&e&&!Object(g.a)(te.dialog,e)&&(se.current=e,te.dialog.focus())}})),de=Object(x.a)((function(){var e;(te.remove(),null==he.current||he.current(),null==be.current||be.current(),B)&&(null==(e=se.current)||null==e.focus||e.focus(H),se.current=null)}));Object(b.useEffect)((function(){a&&ne&&le()}),[a,ne,le]),Object(b.useEffect)((function(){ie&&de()}),[ie,de]),Object(k.a)((function(){de()}));var ue=Object(x.a)((function(){if(D&&ae()&&te.isTopModal()){var e=m();te.dialog&&e&&!Object(g.a)(te.dialog,e)&&te.dialog.focus()}})),fe=Object(x.a)((function(e){e.target===e.currentTarget&&(null==y||y(e),!0===p&&J())})),pe=Object(x.a)((function(e){E&&27===e.keyCode&&te.isTopModal()&&(null==C||C(e),e.defaultPrevented||J())})),be=Object(b.useRef)(),he=Object(b.useRef)(),me=R;if(!ne||!(a||me&&!ie))return null;var ge=Object(r.a)(Object(r.a)({role:c,ref:te.setDialogRef,"aria-modal":"dialog"===c||void 0},ee),{},{style:l,className:s,tabIndex:-1}),ve=P?P(ge):h.a.createElement("div",ge,h.a.cloneElement(u,{role:"document"}));me&&(ve=h.a.createElement(me,{appear:!0,unmountOnExit:!0,in:!!a,onExit:q,onExiting:Q,onExited:function(){ce(!0);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];null==G||G.apply(void 0,n)},onEnter:X,onEntering:Y,onEntered:Z},ve));var Oe=null;if(p){var Ee=F;Oe=L({ref:te.setBackdropRef,onClick:fe}),Ee&&(Oe=h.a.createElement(Ee,{appear:!0,in:!!a},Oe))}return h.a.createElement(h.a.Fragment,null,j.a.createPortal(h.a.createElement(h.a.Fragment,null,Oe,ve),ne))})),U={show:E.a.bool,container:E.a.any,onShow:E.a.func,onHide:E.a.func,backdrop:E.a.oneOfType([E.a.bool,E.a.oneOf(["static"])]),renderDialog:E.a.func,renderBackdrop:E.a.func,onEscapeKeyDown:E.a.func,onBackdropClick:E.a.func,containerClassName:E.a.string,keyboard:E.a.bool,transition:E.a.elementType,backdropTransition:E.a.elementType,autoFocus:E.a.bool,enforceFocus:E.a.bool,restoreFocus:E.a.bool,restoreFocusOptions:E.a.shape({preventScroll:E.a.bool}),onEnter:E.a.func,onEntering:E.a.func,onEntered:E.a.func,onExit:E.a.func,onExiting:E.a.func,onExited:E.a.func,manager:E.a.instanceOf(_)};L.displayName="Modal",L.propTypes=U;var W=Object.assign(L,{Manager:_}),K=t(110),V=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",$=".sticky-top",J=".navbar-toggler",q=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))||this).adjustAndStore=function(e,n,t){var a,o=n.style[e];n.dataset[e]=o,Object(M.a)(n,((a={})[e]=parseFloat(Object(M.a)(n,e))+t+"px",a))},n.restore=function(e,n){var t,a=n.dataset[e];void 0!==a&&(delete n.dataset[e],Object(M.a)(n,((t={})[e]=a,t)))},n}Object(i.a)(n,e);var t=n.prototype;return t.setContainerStyle=function(n,t){var a=this;if(e.prototype.setContainerStyle.call(this,n,t),n.overflowing){var o=p();Object(K.a)(t,V).forEach((function(e){return a.adjustAndStore("paddingRight",e,o)})),Object(K.a)(t,$).forEach((function(e){return a.adjustAndStore("margingRight",e,-o)})),Object(K.a)(t,J).forEach((function(e){return a.adjustAndStore("margingRight",e,o)}))}},t.removeContainerStyle=function(n,t){var a=this;e.prototype.removeContainerStyle.call(this,n,t),Object(K.a)(t,V).forEach((function(e){return a.restore("paddingRight",e)})),Object(K.a)(t,$).forEach((function(e){return a.restore("margingRight",e)})),Object(K.a)(t,J).forEach((function(e){return a.restore("margingRight",e)}))},n}(_),G=t(586),Q=t(72),X=Object(Q.a)("modal-body"),Y=h.a.createContext({onHide:function(){}}),Z=t(7),ee=h.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.centered,c=e.size,l=e.children,d=e.scrollable,u=Object(o.a)(e,["bsPrefix","className","centered","size","children","scrollable"]),f=(t=Object(Z.b)(t,"modal"))+"-dialog";return h.a.createElement("div",Object(r.a)({},u,{ref:n,className:s()(f,a,c&&t+"-"+c,i&&f+"-centered",d&&f+"-scrollable")}),h.a.createElement("div",{className:t+"-content"},l))}));ee.displayName="ModalDialog";var ne=ee,te=Object(Q.a)("modal-footer"),ae={label:E.a.string.isRequired,onClick:E.a.func},oe=h.a.forwardRef((function(e,n){var t=e.label,a=e.onClick,i=e.className,c=Object(o.a)(e,["label","onClick","className"]);return h.a.createElement("button",Object(r.a)({ref:n,type:"button",className:s()("close",i),onClick:a},c),h.a.createElement("span",{"aria-hidden":"true"},"\xd7"),h.a.createElement("span",{className:"sr-only"},t))}));oe.displayName="CloseButton",oe.propTypes=ae,oe.defaultProps={label:"Close"};var re=oe,ie=h.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.closeLabel,i=e.closeButton,c=e.onHide,l=e.className,d=e.children,u=Object(o.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);t=Object(Z.b)(t,"modal-header");var f=Object(b.useContext)(Y),p=Object(x.a)((function(){f&&f.onHide(),c&&c()}));return h.a.createElement("div",Object(r.a)({ref:n},u,{className:s()(l,t)}),d,i&&h.a.createElement(re,{label:a,onClick:p}))}));ie.displayName="ModalHeader",ie.defaultProps={closeLabel:"Close",closeButton:!1};var ce,se=ie,le=t(587),de=Object(le.a)("h4"),ue=Object(Q.a)("modal-title",{Component:de}),fe={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ne};function pe(e){return h.a.createElement(G.a,e)}function be(e){return h.a.createElement(G.a,e)}var he=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))||this).state={style:{}},n.modalContext={onHide:function(){return n.props.onHide()}},n.setModalRef=function(e){n._modal=e},n.handleDialogMouseDown=function(){n._waitingForMouseUp=!0},n.handleMouseUp=function(e){n._waitingForMouseUp&&e.target===n._modal.dialog&&(n._ignoreBackdropClick=!0),n._waitingForMouseUp=!1},n.handleClick=function(e){n._ignoreBackdropClick||e.target!==e.currentTarget?n._ignoreBackdropClick=!1:n.props.onHide()},n.handleEnter=function(e){var t;e&&(e.style.display="block",n.updateDialogStyle(e));for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];n.props.onEnter&&(t=n.props).onEnter.apply(t,[e].concat(o))},n.handleEntering=function(e){for(var t,a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];n.props.onEntering&&(t=n.props).onEntering.apply(t,[e].concat(o)),Object(l.a)(window,"resize",n.handleWindowResize)},n.handleExited=function(e){var t;e&&(e.style.display="");for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];n.props.onExited&&(t=n.props).onExited.apply(t,o),Object(f.a)(window,"resize",n.handleWindowResize)},n.handleWindowResize=function(){n.updateDialogStyle(n._modal.dialog)},n.getModalManager=function(){return n.props.manager?n.props.manager:(ce||(ce=new q),ce)},n.renderBackdrop=function(e){var t=n.props,a=t.bsPrefix,o=t.backdropClassName,i=t.animation;return h.a.createElement("div",Object(r.a)({},e,{className:s()(a+"-backdrop",o,!i&&"show")}))},n}Object(i.a)(n,e);var t=n.prototype;return t.componentWillUnmount=function(){Object(f.a)(window,"resize",this.handleWindowResize)},t.updateDialogStyle=function(e){if(d.a){var n=this.getModalManager().isContainerOverflowing(this._modal),t=e.scrollHeight>Object(u.a)(e).documentElement.clientHeight;this.setState({style:{paddingRight:n&&!t?p():void 0,paddingLeft:!n&&t?p():void 0}})}},t.render=function(){var e=this.props,n=e.bsPrefix,t=e.className,a=e.style,i=e.dialogClassName,c=e.children,l=e.dialogAs,d=e["aria-labelledby"],u=e.show,f=e.animation,p=e.backdrop,b=e.keyboard,m=e.onEscapeKeyDown,g=e.onShow,v=e.onHide,O=e.container,E=e.autoFocus,y=e.enforceFocus,j=e.restoreFocus,w=e.restoreFocusOptions,k=e.onEntered,N=e.onExit,x=e.onExiting,C=(e.onExited,e.onEntering,e.onEnter,e.onEntering,e.backdropClassName,Object(o.a)(e,["bsPrefix","className","style","dialogClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onExited","onEntering","onEnter","onEntering","backdropClassName"])),R=!0===p?this.handleClick:null,F=Object(r.a)({},a,{},this.state.style);return f||(F.display="block"),h.a.createElement(Y.Provider,{value:this.modalContext},h.a.createElement(W,{show:u,backdrop:p,container:O,keyboard:b,autoFocus:E,enforceFocus:y,restoreFocus:j,restoreFocusOptions:w,onEscapeKeyDown:m,onShow:g,onHide:v,onEntered:k,onExit:N,onExiting:x,manager:this.getModalManager(),ref:this.setModalRef,style:F,className:s()(t,n),containerClassName:n+"-open",transition:f?pe:void 0,backdropTransition:f?be:void 0,renderBackdrop:this.renderBackdrop,onClick:R,onMouseUp:this.handleMouseUp,onEnter:this.handleEnter,onEntering:this.handleEntering,onExited:this.handleExited,"aria-labelledby":d},h.a.createElement(l,Object(r.a)({},C,{onMouseDown:this.handleDialogMouseDown,className:i}),c)))},n}(h.a.Component);he.defaultProps=fe;var me=Object(Z.a)(he,"modal");me.Body=X,me.Header=se,me.Title=ue,me.Footer=te,me.Dialog=ne,me.TRANSITION_DURATION=300,me.BACKDROP_TRANSITION_DURATION=150;n.a=me}}]);
//# sourceMappingURL=1.f04542ab.chunk.js.map