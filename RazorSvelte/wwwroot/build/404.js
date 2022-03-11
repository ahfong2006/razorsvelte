var notfound=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let g;function p(t){g=t}const m=[],b=[],v=[],y=[],_=Promise.resolve();let $=!1;function E(t){v.push(t)}const A=new Set;let w=0;function x(){const t=g;do{for(;w<m.length;){const t=m[w];w++,p(t),C(t.$$)}for(p(null),m.length=0,w=0;b.length;)b.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];A.has(e)||(A.add(e),e())}v.length=0}while(m.length);for(;y.length;)y.pop()();$=!1,A.clear(),p(t)}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const T=new Set;function S(t,e){t&&t.i&&(T.delete(t),t.i(e))}function O(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),undefined.c.push((()=>{T.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function N(t){t&&t.c()}function L(t,n,o,i){const{fragment:l,on_mount:a,on_destroy:c,after_update:u}=t.$$;l&&l.m(n,o),i||E((()=>{const n=a.map(e).filter(s);c?c.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(E)}function k(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(m.push(t),$||($=!0,_.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,s,o,i,l,a,u,d=[-1]){const f=g;p(e);const h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||f.$$.root};u&&u(h.root);let m=!1;if(h.ctx=o?o(e,s.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),m&&D(e,t)),n})):[],h.update(),m=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();s.intro&&S(e.$$.fragment),L(e,s.target,s.anchor,s.customElement),x()}p(f)}class M{$destroy(){k(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=(I="urls",JSON.parse((t=>{let e=document.querySelector(`input#${t}[type=hidden]`);if(!e)return null;let n=e.value;return e.remove(),n})(I)));var I;function P(e){let n,r;return{c(){n=u("a"),r=d("Login"),h(n,"class","btn btn-outline-success"),h(n,"href",q.loginUrl)},m(t,e){a(t,n,e),l(n,r)},p:t,d(t){t&&c(n)}}}function z(e){let n,r,s,o,i;return{c(){n=u("div"),r=u("div"),r.textContent=`${e[0].email}`,s=f(),o=u("a"),i=d("Logout"),h(r,"class","nav-item p-2"),h(o,"class","btn btn-outline-success"),h(o,"href",q.logoutUrl),h(n,"class","navbar-nav")},m(t,e){a(t,n,e),l(n,r),l(n,s),l(n,o),l(o,i)},p:t,d(t){t&&c(n)}}}function U(e){let n,r,s,o,i,g,p,m,b,v,y,_,$,E,A,w,x,C,T,S,O,N,L,k,D,j,M,I;let U=function(t,e){return t[0].isSigned?z:P}(e),H=U(e);return{c(){n=f(),r=u("header"),s=u("nav"),o=u("div"),i=u("a"),g=d("RazorSvelte"),p=f(),m=u("button"),m.innerHTML='<span class="navbar-toggler-icon"></span>',b=f(),v=u("div"),y=u("ul"),_=u("li"),$=u("a"),E=d("Home"),A=f(),w=u("li"),x=u("a"),C=d("Privacy"),T=f(),S=u("li"),O=u("a"),N=d("Authorized Access"),L=f(),k=u("li"),D=u("a"),j=d("Spa Example"),M=f(),I=u("div"),H.c(),h(i,"class","navbar-brand"),h(i,"href",q.indexUrl),h(m,"class","navbar-toggler"),h(m,"type","button"),h(m,"data-bs-toggle","collapse"),h(m,"data-bs-target","#navbarCollapse"),h(m,"aria-controls","navbarCollapse"),h(m,"aria-expanded","false"),h(m,"aria-label","Toggle navigation"),h($,"class","nav-link active"),h($,"href",q.indexUrl),h(_,"class","nav-item"),h(x,"class","nav-link"),h(x,"href",q.privacyUrl),h(w,"class","nav-item"),h(O,"class","nav-link"),h(O,"href",q.authorizedUrl),h(S,"class","nav-item"),h(D,"class","nav-link"),h(D,"href",q.spaUrl),h(k,"class","nav-item"),h(y,"class","navbar-nav me-auto mb-2 mb-md-0"),h(I,"class","d-flex"),h(v,"class","collapse navbar-collapse"),h(v,"id","navbarCollapse"),h(o,"class","container-fluid"),h(s,"class","navbar navbar-expand-md navbar-light fixed-top bg-light")},m(t,e){a(t,n,e),a(t,r,e),l(r,s),l(s,o),l(o,i),l(i,g),l(o,p),l(o,m),l(o,b),l(o,v),l(v,y),l(y,_),l(_,$),l($,E),l(y,A),l(y,w),l(w,x),l(x,C),l(y,T),l(y,S),l(S,O),l(O,N),l(y,L),l(y,k),l(k,D),l(D,j),l(v,M),l(v,I),H.m(I,null)},p(t,[e]){H.p(t,e)},i:t,o:t,d(t){t&&c(n),t&&c(r),H.d()}}}function H(t){return[(()=>{const t={},e=[];for(let n of document.getElementsByTagName("input"))"hidden"==n.type&&(n.id.startsWith("is")?t[n.id]="true"==n.value.toLowerCase():t[n.id]=n.value,e.push(n));for(let t of e)t.remove();return t})()]}class Y extends M{constructor(t){super(),j(this,t,H,U,o,{})}}function B(e){let n,r,s,o,i,g,p;return{c(){n=f(),r=u("footer"),s=u("div"),o=u("span"),i=d("© 2021 - RazorSvelte - "),g=u("a"),p=d("Privacy"),h(g,"href",q.privacyUrl),h(o,"class","text-muted"),h(s,"class","container py-5"),h(r,"class","footer mt-auto py-3 bg-light")},m(t,e){a(t,n,e),a(t,r,e),l(r,s),l(s,o),l(o,i),l(o,g),l(g,p)},p:t,i:t,o:t,d(t){t&&c(n),t&&c(r)}}}class K extends M{constructor(t){super(),j(this,t,null,B,o,{})}}function R(t){let e,n,r,s,o,l;e=new Y({});const d=t[1].default,h=function(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}(d,t,t[0],null);return o=new K({}),{c(){N(e.$$.fragment),n=f(),r=u("main"),h&&h.c(),s=f(),N(o.$$.fragment)},m(t,i){L(e,t,i),a(t,n,i),a(t,r,i),h&&h.m(r,null),a(t,s,i),L(o,t,i),l=!0},p(t,[e]){h&&h.p&&(!l||1&e)&&function(t,e,n,r,s,o){if(s){const l=i(e,n,r,o);t.p(l,s)}}(h,d,t,t[0],l?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(d,t[0],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[0]),null)},i(t){l||(S(e.$$.fragment,t),S(h,t),S(o.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),O(h,t),O(o.$$.fragment,t),l=!1},d(t){k(e,t),t&&c(n),t&&c(r),h&&h.d(t),t&&c(s),k(o,t)}}}function F(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class W extends M{constructor(t){super(),j(this,t,F,R,o,{})}}function Q(t){let e;return{c(){e=u("div"),e.innerHTML='<h1 class="text-danger">404 Not Found</h1> \n        \n        <p>This page doesn&#39;t seem to exists.</p>',h(e,"class","container text-center")},m(t,n){a(t,e,n)},d(t){t&&c(e)}}}function V(t){let e,n;return e=new W({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){N(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}const J="transitionend",X=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},Z=t=>{const e=X(t);return e&&document.querySelector(e)?e:null},G=t=>{const e=X(t);return e?document.querySelector(e):null},tt=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),et=t=>tt(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,nt=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},rt=[],st=t=>{"function"==typeof t&&t()},ot=(t,e,n=!0)=>{if(!n)return void st(t);const r=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),s=Number.parseFloat(n);return r||s?(e=e.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(n))):0})(e)+5;let s=!1;const o=({target:n})=>{n===e&&(s=!0,e.removeEventListener(J,o),st(t))};e.addEventListener(J,o),setTimeout((()=>{s||(t=>{t.dispatchEvent(new Event(J))})(e)}),r)},it=new Map;var lt={set(t,e,n){it.has(t)||it.set(t,new Map);const r=it.get(t);r.has(e)||0===r.size?r.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get:(t,e)=>it.has(t)&&it.get(t).get(e)||null,remove(t,e){if(!it.has(t))return;const n=it.get(t);n.delete(e),0===n.size&&it.delete(t)}};const at=/[^.]*(?=\..*)\.|.*/,ct=/\..*/,ut=/::\d+$/,dt={};let ft=1;const ht={mouseenter:"mouseover",mouseleave:"mouseout"},gt=/^(mouseenter|mouseleave)/i,pt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function mt(t,e){return e&&`${e}::${ft++}`||t.uidEvent||ft++}function bt(t){const e=mt(t);return t.uidEvent=e,dt[e]=dt[e]||{},dt[e]}function vt(t,e,n=null){const r=Object.keys(t);for(let s=0,o=r.length;s<o;s++){const o=t[r[s]];if(o.originalHandler===e&&o.delegationSelector===n)return o}return null}function yt(t,e,n){const r="string"==typeof e,s=r?n:e;let o=Et(t);return pt.has(o)||(o=t),[r,s,o]}function _t(t,e,n,r,s){if("string"!=typeof e||!t)return;if(n||(n=r,r=null),gt.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r?r=t(r):n=t(n)}const[o,i,l]=yt(e,n,r),a=bt(t),c=a[l]||(a[l]={}),u=vt(c,i,o?n:null);if(u)return void(u.oneOff=u.oneOff&&s);const d=mt(i,e.replace(at,"")),f=o?function(t,e,n){return function r(s){const o=t.querySelectorAll(e);for(let{target:i}=s;i&&i!==this;i=i.parentNode)for(let l=o.length;l--;)if(o[l]===i)return s.delegateTarget=i,r.oneOff&&At.off(t,s.type,e,n),n.apply(i,[s]);return null}}(t,n,r):function(t,e){return function n(r){return r.delegateTarget=t,n.oneOff&&At.off(t,r.type,e),e.apply(t,[r])}}(t,n);f.delegationSelector=o?n:null,f.originalHandler=i,f.oneOff=s,f.uidEvent=d,c[d]=f,t.addEventListener(l,f,o)}function $t(t,e,n,r,s){const o=vt(e[n],r,s);o&&(t.removeEventListener(n,o,Boolean(s)),delete e[n][o.uidEvent])}function Et(t){return t=t.replace(ct,""),ht[t]||t}const At={on(t,e,n,r){_t(t,e,n,r,!1)},one(t,e,n,r){_t(t,e,n,r,!0)},off(t,e,n,r){if("string"!=typeof e||!t)return;const[s,o,i]=yt(e,n,r),l=i!==e,a=bt(t),c=e.startsWith(".");if(void 0!==o){if(!a||!a[i])return;return void $t(t,a,i,o,s?n:null)}c&&Object.keys(a).forEach((n=>{!function(t,e,n,r){const s=e[n]||{};Object.keys(s).forEach((o=>{if(o.includes(r)){const r=s[o];$t(t,e,n,r.originalHandler,r.delegationSelector)}}))}(t,a,n,e.slice(1))}));const u=a[i]||{};Object.keys(u).forEach((n=>{const r=n.replace(ut,"");if(!l||e.includes(r)){const e=u[n];$t(t,a,i,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!=typeof e||!t)return null;const r=nt(),s=Et(e),o=e!==s,i=pt.has(s);let l,a=!0,c=!0,u=!1,d=null;return o&&r&&(l=r.Event(e,n),r(t).trigger(l),a=!l.isPropagationStopped(),c=!l.isImmediatePropagationStopped(),u=l.isDefaultPrevented()),i?(d=document.createEvent("HTMLEvents"),d.initEvent(s,a,!0)):d=new CustomEvent(e,{bubbles:a,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((t=>{Object.defineProperty(d,t,{get:()=>n[t]})})),u&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==l&&l.preventDefault(),d}};function wt(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function xt(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const Ct={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${xt(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${xt(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=wt(t.dataset[n])})),e},getDataAttribute:(t,e)=>wt(t.getAttribute(`data-bs-${xt(e)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},Tt={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let r=t.parentNode;for(;r&&r.nodeType===Node.ELEMENT_NODE&&3!==r.nodeType;)r.matches(e)&&n.push(r),r=r.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!(t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))(t)&&(t=>!(!tt(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"))(t)))}};const St="collapse",Ot="bs.collapse",Nt={toggle:!0,parent:null},Lt={toggle:"boolean",parent:"(null|element)"},kt="show",Dt="collapse",jt="collapsing",Mt="collapsed",qt=":scope .collapse .collapse",It='[data-bs-toggle="collapse"]';class Pt extends class{constructor(t){(t=et(t))&&(this._element=t,lt.set(this._element,this.constructor.DATA_KEY,this))}dispose(){lt.remove(this._element,this.constructor.DATA_KEY),At.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){ot(t,e,n)}static getInstance(t){return lt.get(et(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=Tt.find(It);for(let t=0,e=n.length;t<e;t++){const e=n[t],r=Z(e),s=Tt.find(r).filter((t=>t===this._element));null!==r&&s.length&&(this._selector=r,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Nt}static get NAME(){return St}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=Tt.find(qt,this._config.parent);e=Tt.find(".collapse.show, .collapse.collapsing",this._config.parent).filter((e=>!t.includes(e)))}const n=Tt.findOne(this._selector);if(e.length){const r=e.find((t=>n!==t));if(t=r?Pt.getInstance(r):null,t&&t._isTransitioning)return}if(At.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e.forEach((e=>{n!==e&&Pt.getOrCreateInstance(e,{toggle:!1}).hide(),t||lt.set(e,Ot,null)}));const r=this._getDimension();this._element.classList.remove(Dt),this._element.classList.add(jt),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(jt),this._element.classList.add(Dt,kt),this._element.style[r]="",At.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[r]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(At.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,(t=>{t.offsetHeight})(this._element),this._element.classList.add(jt),this._element.classList.remove(Dt,kt);const e=this._triggerArray.length;for(let t=0;t<e;t++){const e=this._triggerArray[t],n=G(e);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(jt),this._element.classList.add(Dt),At.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(kt)}_getConfig(t){return(t={...Nt,...Ct.getDataAttributes(this._element),...t}).toggle=Boolean(t.toggle),t.parent=et(t.parent),((t,e,n)=>{Object.keys(n).forEach((r=>{const s=n[r],o=e[r],i=o&&tt(o)?"element":null==(l=o)?`${l}`:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(s).test(i))throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${i}" but expected type "${s}".`)}))})(St,t,Lt),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=Tt.find(qt,this._config.parent);Tt.find(It,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=G(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(Mt):t.classList.add(Mt),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const n=Pt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}var zt,Ut;return At.on(document,"click.bs.collapse.data-api",It,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=Z(this);Tt.find(e).forEach((t=>{Pt.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),zt=Pt,Ut=()=>{const t=nt();if(t){const e=zt.NAME,n=t.fn[e];t.fn[e]=zt.jQueryInterface,t.fn[e].Constructor=zt,t.fn[e].noConflict=()=>(t.fn[e]=n,zt.jQueryInterface)}},"loading"===document.readyState?(rt.length||document.addEventListener("DOMContentLoaded",(()=>{rt.forEach((t=>t()))})),rt.push(Ut)):Ut(),new class extends M{constructor(t){super(),j(this,t,null,V,o,{})}}({target:document.body})}();
