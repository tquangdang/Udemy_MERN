"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[743],{743:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(791),a=n(542),c=n(373),o=n(999),s=n(921),l=n(184);const i=e=>{const t=(0,r.useRef)(),{center:n,zoom:a}=e;return(0,r.useEffect)((()=>{const r=new window.google.maps.Map(t.current,{center:n,zoom:a});new window.google.maps.Marker({position:e.center,map:r})}),[n,a]),(0,l.jsx)("div",{ref:t,className:"map ".concat(e.className),style:e.style})};var d=n(434),u=n(895),h=n(108),m=n(508);const f=e=>{const{isLoading:t,error:n,sendRequest:a,clearError:f}=(0,m.x)(),p=(0,r.useContext)(h.V),[x,v]=(0,r.useState)(!1),[j,C]=(0,r.useState)(!1),g=()=>v(!1),y=()=>{C(!1)};return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(d.Z,{error:n,onClear:f}),(0,l.jsx)(s.Z,{show:x,onCancel:g,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,l.jsx)(o.Z,{onClick:g,children:"CLOSE"}),children:(0,l.jsx)("div",{className:"map-container",children:(0,l.jsx)(i,{center:e.coordinates,zoom:16})})}),(0,l.jsx)(s.Z,{show:j,onCancel:y,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(o.Z,{inverse:!0,onClick:y,children:"CANCEL"}),(0,l.jsx)(o.Z,{danger:!0,onClick:async()=>{C(!1);try{await a("http://localhost:5000/api"+"/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+p.token}),e.onDelete(e.id)}catch(t){}},children:"DELETE"})]}),children:(0,l.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone thereafter."})}),(0,l.jsx)("li",{className:"place-item",children:(0,l.jsxs)(c.Z,{className:"place-item__content",children:[t&&(0,l.jsx)(u.Z,{asOverlay:!0}),(0,l.jsx)("div",{className:"place-item__image",children:(0,l.jsx)("img",{src:"".concat("http://localhost:5000","/").concat(e.image),alt:e.title})}),(0,l.jsxs)("div",{className:"place-item__info",children:[(0,l.jsx)("h2",{children:e.title}),(0,l.jsx)("h3",{children:e.address}),(0,l.jsx)("p",{children:e.description})]}),(0,l.jsxs)("div",{className:"place-item__actions",children:[(0,l.jsx)(o.Z,{inverse:!0,onClick:()=>v(!0),children:"VIEW ON MAP"}),p.userId===e.creatorId&&(0,l.jsx)(o.Z,{to:"/places/".concat(e.id),children:"EDIT"}),p.userId===e.creatorId&&(0,l.jsx)(o.Z,{danger:!0,onClick:()=>{C(!0)},children:"DELETE"})]})]})})]})},p=e=>0===e.items.length?(0,l.jsx)("div",{className:"place-list center",children:(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("h2",{children:"No places found. Maybe create one?"}),(0,l.jsx)(o.Z,{to:"/places/new",children:"Share Place"})]})}):(0,l.jsx)("ul",{className:"place-list",children:e.items.map((t=>(0,l.jsx)(f,{id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace},t.id)))}),x=()=>{const[e,t]=(0,r.useState)(),{isLoading:n,error:c,sendRequest:o,clearError:s}=(0,m.x)(),i=(0,a.UO)().userId;(0,r.useEffect)((()=>{(async()=>{try{const e=await o("".concat("http://localhost:5000/api","/places/user/").concat(i));t(e.places)}catch(e){}})()}),[o,i]);return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(d.Z,{error:c,onClear:s}),n&&(0,l.jsx)("div",{className:"center",children:(0,l.jsx)(u.Z,{})}),!n&&e&&(0,l.jsx)(p,{items:e,onDeletePlace:e=>{t((t=>t.filter((t=>t.id!==e))))}})]})}},999:(e,t,n)=>{n.d(t,{Z:()=>c});n(791);var r=n(523),a=n(184);const c=e=>e.href?(0,a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,a.jsx)(r.rU,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,a.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},373:(e,t,n)=>{n.d(t,{Z:()=>a});n(791);var r=n(184);const a=e=>(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},434:(e,t,n)=>{n.d(t,{Z:()=>o});n(791);var r=n(921),a=n(999),c=n(184);const o=e=>(0,c.jsx)(r.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,c.jsx)(a.Z,{onClick:e.onClear,children:"Okay"}),children:(0,c.jsx)("p",{children:e.error})})},921:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(791),a=n(164),c=n(549),o=n(422),s=n(184);const l=e=>{const t=(0,s.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,s.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,s.jsx)("h2",{children:e.header})}),(0,s.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,s.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,s.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return a.createPortal(t,document.getElementById("modal-hook"))},i=e=>(0,s.jsxs)(r.Fragment,{children:[e.show&&(0,s.jsx)(o.Z,{onClick:e.onCancel}),(0,s.jsx)(c.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,s.jsx)(l,{...e})})]})},508:(e,t,n)=>{n.d(t,{x:()=>a});var r=n(791);const a=()=>{const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(),c=(0,r.useRef)([]),o=(0,r.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const s=new AbortController;c.current.push(s);try{const a=await fetch(e,{method:n,body:r,headers:o,signal:s.signal}),l=await a.json();if(c.current=c.current.filter((e=>e!==s)),!a.ok)throw new Error(l.message);return t(!1),l}catch(l){throw a(l.message),t(!1),l}}),[]);return(0,r.useEffect)((()=>()=>{c.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:n,sendRequest:o,clearError:()=>{a(null)}}}},523:(e,t,n)=>{n.d(t,{rU:()=>p});var r=n(880),a=n(721),c=n(791),o=n(610),s=n(462),l=n(366),i=n(554);c.Component;c.Component;var d=function(e,t){return"function"===typeof e?e(t):e},u=function(e,t){return"string"===typeof e?(0,o.createLocation)(e,null,null,t):e},h=function(e){return e},m=c.forwardRef;"undefined"===typeof m&&(m=h);var f=m((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,o=(0,l.Z)(e,["innerRef","navigate","onClick"]),i=o.target,d=(0,s.Z)({},o,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||i&&"_self"!==i||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return d.ref=h!==m&&t||n,c.createElement("a",d)}));var p=m((function(e,t){var n=e.component,a=void 0===n?f:n,p=e.replace,x=e.to,v=e.innerRef,j=(0,l.Z)(e,["component","replace","to","innerRef"]);return c.createElement(r.__RouterContext.Consumer,null,(function(e){e||(0,i.Z)(!1);var n=e.history,r=u(d(x,e.location),e.location),l=r?n.createHref(r):"",f=(0,s.Z)({},j,{href:l,navigate:function(){var t=d(x,e.location),r=(0,o.createPath)(e.location)===(0,o.createPath)(u(t));(p||r?n.replace:n.push)(t)}});return h!==m?f.ref=t||v:f.innerRef=v,c.createElement(a,f)}))})),x=function(e){return e},v=c.forwardRef;"undefined"===typeof v&&(v=x);v((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,o=e.activeClassName,h=void 0===o?"active":o,m=e.activeStyle,f=e.className,j=e.exact,C=e.isActive,g=e.location,y=e.sensitive,Z=e.strict,E=e.style,N=e.to,b=e.innerRef,w=(0,l.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.createElement(r.__RouterContext.Consumer,null,(function(e){e||(0,i.Z)(!1);var n=g||e.location,o=u(d(N,n),n),l=o.pathname,_=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=_?(0,r.matchPath)(n.pathname,{path:_,exact:j,sensitive:y,strict:Z}):null,R=!!(C?C(k,n):k),D="function"===typeof f?f(R):f,S="function"===typeof E?E(R):E;R&&(D=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(D,h),S=(0,s.Z)({},S,m));var P=(0,s.Z)({"aria-current":R&&a||null,className:D,style:S,to:o},w);return x!==v?P.ref=t||b:P.innerRef=b,c.createElement(p,P)}))}))}}]);
//# sourceMappingURL=743.884f5e49.chunk.js.map