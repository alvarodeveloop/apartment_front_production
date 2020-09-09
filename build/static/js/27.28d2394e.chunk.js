(this["webpackJsonpappwork-react-starter"]=this["webpackJsonpappwork-react-starter"]||[]).push([[27],{579:function(n,e,t){"use strict";var a=t(1),r=t.n(a),i=t(58),o=t(190),c=t(26);e.a=function(n){var e=Object(i.a)(n,{activeKey:"onSelect"}),t=e.id,u=e.generateChildId,l=e.onSelect,s=e.activeKey,d=e.transition,m=e.mountOnEnter,E=e.unmountOnExit,v=e.children,b=Object(a.useMemo)((function(){return u||function(n,e){return t?t+"-"+e+"-"+n:null}}),[t,u]),f=Object(a.useMemo)((function(){return{onSelect:l,activeKey:s,transition:d,mountOnEnter:m,unmountOnExit:E,getControlledId:function(n){return b(n,"tabpane")},getControllerId:function(n){return b(n,"tab")}}}),[l,s,d,m,E,b]);return r.a.createElement(o.a.Provider,{value:f},r.a.createElement(c.a.Provider,{value:l},v))}},580:function(n,e,t){"use strict";var a=t(2),r=t(4),i=t(6),o=t.n(i),c=t(1),u=t.n(c),l=t(7),s=u.a.forwardRef((function(n,e){var t=n.bsPrefix,i=n.as,c=void 0===i?"div":i,s=n.className,d=Object(r.a)(n,["bsPrefix","as","className"]),m=Object(l.b)(t,"tab-content");return u.a.createElement(c,Object(a.a)({ref:e},d,{className:o()(s,m)}))}));e.a=s},581:function(n,e,t){"use strict";var a=t(2),r=t(4),i=t(6),o=t.n(i),c=t(1),u=t.n(c),l=t(7),s=t(190),d=t(26),m=t(586);var E=u.a.forwardRef((function(n,e){var t=function(n){var e=Object(c.useContext)(s.a);if(!e)return n;var t=e.activeKey,i=e.getControlledId,o=e.getControllerId,u=Object(r.a)(e,["activeKey","getControlledId","getControllerId"]),l=!1!==n.transition&&!1!==u.transition,E=Object(d.b)(n.eventKey);return Object(a.a)({},n,{active:null==n.active&&null!=E?Object(d.b)(t)===E:n.active,id:i(n.eventKey),"aria-labelledby":o(n.eventKey),transition:l&&(n.transition||u.transition||m.a),mountOnEnter:null!=n.mountOnEnter?n.mountOnEnter:u.mountOnEnter,unmountOnExit:null!=n.unmountOnExit?n.unmountOnExit:u.unmountOnExit})}(n),i=t.bsPrefix,E=t.className,v=t.active,b=t.onEnter,f=t.onEntering,O=t.onEntered,p=t.onExit,x=t.onExiting,y=t.onExited,j=t.mountOnEnter,h=t.unmountOnExit,C=t.transition,K=t.as,N=void 0===K?"div":K,g=(t.eventKey,Object(r.a)(t,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(l.b)(i,"tab-pane");if(!v&&!C&&h)return null;var P=u.a.createElement(N,Object(a.a)({},g,{ref:e,role:"tabpanel","aria-hidden":!v,className:o()(E,w,{active:v})}));return C&&(P=u.a.createElement(C,{in:v,onEnter:b,onEntering:f,onEntered:O,onExit:p,onExiting:x,onExited:y,mountOnEnter:j,unmountOnExit:h},P)),u.a.createElement(s.a.Provider,{value:null},u.a.createElement(d.a.Provider,{value:null},P))}));E.displayName="TabPane",e.a=E},586:function(n,e,t){"use strict";var a,r=t(2),i=t(4),o=t(6),c=t.n(o),u=t(193),l=t(1),s=t.n(l),d=t(82),m=t(194),E=((a={})[d.b]="show",a[d.a]="show",a),v=s.a.forwardRef((function(n,e){var t=n.className,a=n.children,o=Object(i.a)(n,["className","children"]),v=Object(l.useCallback)((function(n){Object(m.a)(n),o.onEnter&&o.onEnter(n)}),[o]);return s.a.createElement(d.e,Object(r.a)({ref:e,addEndListener:u.a},o,{onEnter:v}),(function(n,e){return s.a.cloneElement(a,Object(r.a)({},e,{className:c()("fade",t,a.props.className,E[n])}))}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",e.a=v},594:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t(0),r=function(n){return Object(a.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"}}]})(n)};r.displayName="IoIosSend"},597:function(n,e,t){"use strict";var a=t(14),r=t(1),i=t.n(r),o=t(579),c=t(580),u=t(581),l=function(n){function e(){return n.apply(this,arguments)||this}return Object(a.a)(e,n),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(i.a.Component);l.Container=o.a,l.Content=c.a,l.Pane=u.a,e.a=l},598:function(n,e,t){"use strict";var a=t(2),r=t(4),i=t(1),o=t.n(i),c=(t(291),t(58)),u=t(560),l=t(192),s=t(191),d=t(579),m=t(580),E=t(581);function v(n,e){var t=0;return o.a.Children.map(n,(function(n){return o.a.isValidElement(n)?e(n,t++):n}))}function b(n){var e;return function(n,e){var t=0;o.a.Children.forEach(n,(function(n){o.a.isValidElement(n)&&e(n,t++)}))}(n,(function(n){null==e&&(e=n.props.eventKey)})),e}function f(n){var e=n.props,t=e.title,a=e.eventKey,r=e.disabled,i=e.tabClassName,c=e.id;return null==t?null:o.a.createElement(s.a,{as:l.a,eventKey:a,disabled:r,id:c,className:i},t)}var O=o.a.forwardRef((function(n,e){var t=Object(c.a)(n,{activeKey:"onSelect"}),i=t.id,l=t.onSelect,s=t.transition,O=t.mountOnEnter,p=t.unmountOnExit,x=t.children,y=t.activeKey,j=void 0===y?b(x):y,h=Object(r.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{ref:e,id:i,activeKey:j,onSelect:l,transition:s,mountOnEnter:O,unmountOnExit:p},o.a.createElement(u.a,Object(a.a)({},h,{role:"tablist",as:"nav"}),v(x,f)),o.a.createElement(m.a,null,v(x,(function(n){var e=Object(a.a)({},n.props);return delete e.title,delete e.disabled,delete e.tabClassName,o.a.createElement(E.a,e)}))))}));O.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},O.displayName="Tabs";e.a=O}}]);
//# sourceMappingURL=27.28d2394e.chunk.js.map