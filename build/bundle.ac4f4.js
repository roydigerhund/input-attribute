!function(e){function n(_){if(t[_])return t[_].exports;var r=t[_]={i:_,l:!1,exports:{}};return e[_].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,_){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(n.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(_,r,function(n){return e[n]}.bind(null,r));return _},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s="mdyV")}({hosL:function(e,n,t){"use strict";function _(e,n){for(var t in n)e[t]=n[t];return e}function r(e){var n=e.parentNode;n&&n.removeChild(e)}function o(e,n,t){var _,r,o,u={};for(o in n)"key"==o?_=n[o]:"ref"==o?r=n[o]:u[o]=n[o];if(arguments.length>2&&(u.children=arguments.length>3?C.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===u[o]&&(u[o]=e.defaultProps[o]);return l(e,u,_,r,null)}function l(e,n,t,_,r){var o={type:e,props:n,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++w:r};return null!=H.vnode&&H.vnode(o),o}function u(e){return e.children}function i(e,n){this.props=e,this.context=n}function c(e,n){if(null==n)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?c(e):null}function f(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return f(e)}}function a(e){(!e.__d&&(e.__d=!0)&&D.push(e)&&!s.__r++||M!==H.debounceRendering)&&((M=H.debounceRendering)||L)(s)}function s(){for(var e;s.__r=D.length;)e=D.sort((function(e,n){return e.__v.__b-n.__v.__b})),D=[],e.some((function(e){var n,t,r,o,l,u;e.__d&&(l=(o=(n=e).__v).__e,(u=n.__P)&&(t=[],(r=_({},o)).__v=o.__v+1,b(u,o,r,n.__n,void 0!==u.ownerSVGElement,null!=o.__h?[l]:null,t,null==l?c(o):l,o.__h),k(t,o),o.__e!=l&&f(o)))}))}function p(e,n,t,_,r,o,i,f,a,s){var p,v,y,m,g,k,S,P=_&&_.__k||U,T=P.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(m=t.__k[p]=null==(m=n[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?l(null,m,null,null,m):Array.isArray(m)?l(u,{children:m},null,null,null):m.__b>0?l(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(y=P[p])||y&&m.key==y.key&&m.type===y.type)P[p]=void 0;else for(v=0;v<T;v++){if((y=P[v])&&m.key==y.key&&m.type===y.type){P[v]=void 0;break}y=null}b(e,m,y=y||O,r,o,i,f,a,s),g=m.__e,(v=m.ref)&&y.ref!=v&&(S||(S=[]),y.ref&&S.push(y.ref,null,m),S.push(v,m.__c||g,m)),null!=g?(null==k&&(k=g),"function"==typeof m.type&&null!=m.__k&&m.__k===y.__k?m.__d=a=d(m,a,e):a=h(e,m,y,P,g,a),s||"option"!==t.type?"function"==typeof t.type&&(t.__d=a):e.value=""):a&&y.__e==a&&a.parentNode!=e&&(a=c(y))}for(t.__e=k,p=T;p--;)null!=P[p]&&("function"==typeof t.type&&null!=P[p].__e&&P[p].__e==t.__d&&(t.__d=c(_,p+1)),E(P[p],P[p]));if(S)for(p=0;p<S.length;p++)x(S[p],S[++p],S[++p])}function d(e,n,t){var _,r;for(_=0;_<e.__k.length;_++)(r=e.__k[_])&&(r.__=e,n="function"==typeof r.type?d(r,n,t):h(t,r,r,e.__k,r.__e,n));return n}function h(e,n,t,_,r,o){var l,u,i;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||r!=o||null==r.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(r),l=null;else{for(u=o,i=0;(u=u.nextSibling)&&i<_.length;i+=2)if(u==r)break e;e.insertBefore(r,o),l=o}return void 0!==l?l:r.nextSibling}function v(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||j.test(n)?t:t+"px"}function y(e,n,t,_,r){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||v(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||v(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_||e.addEventListener(n,o?g:m,o):e.removeEventListener(n,o?g:m,o);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function m(e){this.l[e.type+!1](H.event?H.event(e):e)}function g(e){this.l[e.type+!0](H.event?H.event(e):e)}function b(e,n,t,r,o,l,c,f,a){var s,d,h,v,y,m,g,b,k,x,E,T=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(a=t.__h,f=n.__e=t.__e,n.__h=null,l=[f]),(s=H.__b)&&s(n);try{e:if("function"==typeof T){if(b=n.props,k=(s=T.contextType)&&r[s.__c],x=s?k?k.props.value:s.__:r,t.__c?g=(d=n.__c=t.__c).__=d.__E:("prototype"in T&&T.prototype.render?n.__c=d=new T(b,x):(n.__c=d=new i(b,x),d.constructor=T,d.render=P),k&&k.sub(d),d.props=b,d.state||(d.state={}),d.context=x,d.__n=r,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=T.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=_({},d.__s)),_(d.__s,T.getDerivedStateFromProps(b,d.__s))),v=d.props,y=d.state,h)null==T.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==T.getDerivedStateFromProps&&b!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,x),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,x)||n.__v===t.__v){d.props=b,d.state=d.__s,n.__v!==t.__v&&(d.__d=!1),d.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),d.__h.length&&c.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,x),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,y,m)}))}d.context=x,d.props=b,d.state=d.__s,(s=H.__r)&&s(n),d.__d=!1,d.__v=n,d.__P=e,s=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(r=_(_({},r),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(m=d.getSnapshotBeforeUpdate(v,y)),E=null!=s&&s.type===u&&null==s.key?s.props.children:s,p(e,Array.isArray(E)?E:[E],n,t,r,o,l,c,f,a),d.base=n.__e,n.__h=null,d.__h.length&&c.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=S(t.__e,n,t,r,o,l,c,a);(s=H.diffed)&&s(n)}catch(e){n.__v=null,(a||null!=l)&&(n.__e=f,n.__h=!!a,l[l.indexOf(f)]=null),H.__e(e,n,t)}}function k(e,n){H.__c&&H.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){H.__e(e,n.__v)}}))}function S(e,n,t,_,o,l,u,i){var f,a,s,d=t.props,h=n.props,v=n.type,m=0;if("svg"===v&&(o=!0),null!=l)for(;m<l.length;m++)if((f=l[m])&&(f===e||(v?f.localName==v:3==f.nodeType))){e=f,l[m]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,i=!1}if(null===v)d===h||i&&e.data===h||(e.data=h);else{if(l=l&&C.call(e.childNodes),a=(d=t.props||O).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!i){if(null!=l)for(d={},m=0;m<e.attributes.length;m++)d[e.attributes[m].name]=e.attributes[m].value;(s||a)&&(s&&(a&&s.__html==a.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(function(e,n,t,_,r){var o;for(o in t)"children"===o||"key"===o||o in n||y(e,o,null,t[o],_);for(o in n)r&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||y(e,o,n[o],t[o],_)}(e,h,d,o,i),s)n.__k=[];else if(m=n.props.children,p(e,Array.isArray(m)?m:[m],n,t,_,o&&"foreignObject"!==v,l,u,l?l[0]:t.__k&&c(t,0),i),null!=l)for(m=l.length;m--;)null!=l[m]&&r(l[m]);i||("value"in h&&void 0!==(m=h.value)&&(m!==e.value||"progress"===v&&!m)&&y(e,"value",m,d.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==e.checked&&y(e,"checked",m,d.checked,!1))}return e}function x(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){H.__e(e,t)}}function E(e,n,t){var _,o;if(H.unmount&&H.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||x(_,null,n)),null!=(_=e.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(e){H.__e(e,n)}_.base=_.__P=null}if(_=e.__k)for(o=0;o<_.length;o++)_[o]&&E(_[o],n,"function"!=typeof e.type);t||null==e.__e||r(e.__e),e.__e=e.__d=void 0}function P(e,n,t){return this.constructor(e,t)}function T(e,n,t){var _,r,l;H.__&&H.__(e,n),r=(_="function"==typeof t)?null:t&&t.__k||n.__k,l=[],b(n,e=(!_&&t||n).__k=o(u,null,[e]),r||O,O,void 0!==n.ownerSVGElement,!_&&t?[t]:r?null:n.firstChild?C.call(n.childNodes):null,l,!_&&t?t:r?r.__e:n.firstChild,_),k(l,e)}function A(e,n){T(e,n,A)}t.d(n,"d",(function(){return T})),t.d(n,"b",(function(){return A})),t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return H}));var C,H,w,D,L,M,O={},U=[],j=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;C=U.slice,H={__e:function(e,n){for(var t,_,r;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return t.__E=t}catch(n){e=n}throw e}},w=0,i.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof e&&(e=e(_({},t),this.props)),e&&_(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),a(this))},i.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),a(this))},i.prototype.render=u,D=[],L="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s.__r=0},mdyV:function(e,n,t){"use strict";t.r(n);var _=t("hosL"),r=_.a,o=_.d,l=_.b,u=function(e){return e&&e.default?e.default:e},i=function(e){return"/"===e[e.length-1]?e:e+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(t.p+"sw.js"),"function"==typeof u(t("qVkA"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=u(t("qVkA")),n={},_=document.querySelector('[type="__PREACT_CLI_DATA__"]');_&&(n=JSON.parse(decodeURI(_.innerHTML)).preRenderData||n);var f={preRenderData:n},a=n.url?i(n.url):"",s=l&&a===i(location.pathname);c=(s?l:o)(r(e,{CLI_DATA:f}),document.body,c)}()}},qVkA:function(e,n,t){"use strict";function _(e,n){s.c.__h&&s.c.__h(f,e,p||n),p=0;var t=f.__H||(f.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function r(e){return p=1,function(e,n,t){var r=_(c++,2);return r.t=e,r.__c||(r.__=[t?t(n):i(void 0,n),function(e){var n=r.t(r.__[0],e);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=f),r.__}(i,e)}function o(){d.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(l),e.__H.__h.forEach(u),e.__H.__h=[]}catch(n){e.__H.__h=[],s.c.__e(n,e.__v)}})),d=[]}function l(e){var n=f;"function"==typeof e.__c&&e.__c(),f=n}function u(e){var n=f;e.__c=e.__(),f=n}function i(e,n){return"function"==typeof n?n(e):n}t.r(n);var c,f,a,s=t("hosL"),p=0,d=[],h=s.c.__b,v=s.c.__r,y=s.c.diffed,m=s.c.__c,g=s.c.unmount;s.c.__b=function(e){f=null,h&&h(e)},s.c.__r=function(e){v&&v(e),c=0;var n=(f=e.__c).__H;n&&(n.__h.forEach(l),n.__h.forEach(u),n.__h=[])},s.c.diffed=function(e){y&&y(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==d.push(n)&&a===s.c.requestAnimationFrame||((a=s.c.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(_),b&&cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);b&&(n=requestAnimationFrame(t))})(o)),f=void 0},s.c.__c=function(e,n){n.some((function(e){try{e.__h.forEach(l),e.__h=e.__h.filter((function(e){return!e.__||u(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],s.c.__e(t,e.__v)}})),m&&m(e,n)},s.c.unmount=function(e){g&&g(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(l)}catch(e){s.c.__e(e,n.__v)}};var b="function"==typeof requestAnimationFrame;n.default=function(){var e=r(""),n=e[0],t=e[1],_=r(""),o=_[0],l=_[1];return Object(s.a)("div",null,Object(s.a)("input",{type:"email",class:"test-class",name:"email",value:n,onInput:function(e){return t(e.currentTarget.value)},placeholder:"Email"}),Object(s.a)("input",{type:"text",class:"test-class",name:"username",value:o,onInput:function(e){return l(e.currentTarget.value)},placeholder:"Username"}))}}});
//# sourceMappingURL=bundle.ac4f4.js.map