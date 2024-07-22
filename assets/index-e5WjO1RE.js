function Mw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Am(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vw={exports:{}},Fd={},jw={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yl=Symbol.for("react.element"),lk=Symbol.for("react.portal"),uk=Symbol.for("react.fragment"),ck=Symbol.for("react.strict_mode"),dk=Symbol.for("react.profiler"),hk=Symbol.for("react.provider"),fk=Symbol.for("react.context"),pk=Symbol.for("react.forward_ref"),mk=Symbol.for("react.suspense"),gk=Symbol.for("react.memo"),vk=Symbol.for("react.lazy"),cy=Symbol.iterator;function yk(t){return t===null||typeof t!="object"?null:(t=cy&&t[cy]||t["@@iterator"],typeof t=="function"?t:null)}var Uw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fw=Object.assign,Bw={};function Yo(t,e,n){this.props=t,this.context=e,this.refs=Bw,this.updater=n||Uw}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zw(){}zw.prototype=Yo.prototype;function km(t,e,n){this.props=t,this.context=e,this.refs=Bw,this.updater=n||Uw}var Cm=km.prototype=new zw;Cm.constructor=km;Fw(Cm,Yo.prototype);Cm.isPureReactComponent=!0;var dy=Array.isArray,$w=Object.prototype.hasOwnProperty,bm={current:null},Hw={key:!0,ref:!0,__self:!0,__source:!0};function Ww(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$w.call(e,r)&&!Hw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Yl,type:t,key:s,ref:o,props:i,_owner:bm.current}}function _k(t,e){return{$$typeof:Yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yl}function wk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hy=/\/+/g;function qh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wk(""+t.key):e.toString(36)}function vc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yl:case lk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qh(o,0):r,dy(i)?(n="",t!=null&&(n=t.replace(hy,"$&/")+"/"),vc(i,e,n,"",function(c){return c})):i!=null&&(Rm(i)&&(i=_k(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",dy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+qh(s,a);o+=vc(s,e,n,u,i)}else if(u=yk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+qh(s,a++),o+=vc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lu(t,e,n){if(t==null)return t;var r=[],i=0;return vc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ek(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},yc={transition:null},Tk={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:yc,ReactCurrentOwner:bm};function qw(){throw Error("act(...) is not supported in production builds of React.")}Te.Children={map:Lu,forEach:function(t,e,n){Lu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lu(t,function(){e++}),e},toArray:function(t){return Lu(t,function(e){return e})||[]},only:function(t){if(!Rm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Te.Component=Yo;Te.Fragment=uk;Te.Profiler=dk;Te.PureComponent=km;Te.StrictMode=ck;Te.Suspense=mk;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tk;Te.act=qw;Te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)$w.call(e,u)&&!Hw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Yl,type:t.type,key:i,ref:s,props:r,_owner:o}};Te.createContext=function(t){return t={$$typeof:fk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hk,_context:t},t.Consumer=t};Te.createElement=Ww;Te.createFactory=function(t){var e=Ww.bind(null,t);return e.type=t,e};Te.createRef=function(){return{current:null}};Te.forwardRef=function(t){return{$$typeof:pk,render:t}};Te.isValidElement=Rm;Te.lazy=function(t){return{$$typeof:vk,_payload:{_status:-1,_result:t},_init:Ek}};Te.memo=function(t,e){return{$$typeof:gk,type:t,compare:e===void 0?null:e}};Te.startTransition=function(t){var e=yc.transition;yc.transition={};try{t()}finally{yc.transition=e}};Te.unstable_act=qw;Te.useCallback=function(t,e){return nn.current.useCallback(t,e)};Te.useContext=function(t){return nn.current.useContext(t)};Te.useDebugValue=function(){};Te.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Te.useEffect=function(t,e){return nn.current.useEffect(t,e)};Te.useId=function(){return nn.current.useId()};Te.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Te.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Te.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Te.useMemo=function(t,e){return nn.current.useMemo(t,e)};Te.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Te.useRef=function(t){return nn.current.useRef(t)};Te.useState=function(t){return nn.current.useState(t)};Te.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Te.useTransition=function(){return nn.current.useTransition()};Te.version="18.3.1";jw.exports=Te;var j=jw.exports;const Ne=Am(j),Ik=Mw({__proto__:null,default:Ne},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sk=j,Ak=Symbol.for("react.element"),kk=Symbol.for("react.fragment"),Ck=Object.prototype.hasOwnProperty,bk=Sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rk={key:!0,ref:!0,__self:!0,__source:!0};function Gw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ck.call(e,r)&&!Rk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ak,type:t,key:s,ref:o,props:i,_owner:bk.current}}Fd.Fragment=kk;Fd.jsx=Gw;Fd.jsxs=Gw;Vw.exports=Fd;var g=Vw.exports,zf={},Kw={exports:{}},An={},Qw={exports:{}},Yw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,ee){var ie=W.length;W.push(ee);e:for(;0<ie;){var me=ie-1>>>1,ce=W[me];if(0<i(ce,ee))W[me]=ee,W[ie]=ce,ie=me;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ee=W[0],ie=W.pop();if(ie!==ee){W[0]=ie;e:for(var me=0,ce=W.length,ve=ce>>>1;me<ve;){var Pe=2*(me+1)-1,Me=W[Pe],Be=Pe+1,kt=W[Be];if(0>i(Me,ie))Be<ce&&0>i(kt,Me)?(W[me]=kt,W[Be]=ie,me=Be):(W[me]=Me,W[Pe]=ie,me=Pe);else if(Be<ce&&0>i(kt,ie))W[me]=kt,W[Be]=ie,me=Be;else break e}}return ee}function i(W,ee){var ie=W.sortIndex-ee.sortIndex;return ie!==0?ie:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,E=!1,A=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(W){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=W)r(c),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(c)}}function O(W){if(k=!1,I(W),!A)if(n(u)!==null)A=!0,Yt(F);else{var ee=n(c);ee!==null&&ge(O,ee.startTime-W)}}function F(W,ee){A=!1,k&&(k=!1,S(v),v=-1),E=!0;var ie=m;try{for(I(ee),f=n(u);f!==null&&(!(f.expirationTime>ee)||W&&!R());){var me=f.callback;if(typeof me=="function"){f.callback=null,m=f.priorityLevel;var ce=me(f.expirationTime<=ee);ee=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(u)&&r(u),I(ee)}else r(u);f=n(u)}if(f!==null)var ve=!0;else{var Pe=n(c);Pe!==null&&ge(O,Pe.startTime-ee),ve=!1}return ve}finally{f=null,m=ie,E=!1}}var P=!1,T=null,v=-1,_=5,C=-1;function R(){return!(t.unstable_now()-C<_)}function D(){if(T!==null){var W=t.unstable_now();C=W;var ee=!0;try{ee=T(!0,W)}finally{ee?b():(P=!1,T=null)}}else P=!1}var b;if(typeof y=="function")b=function(){y(D)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,at=ye.port2;ye.port1.onmessage=D,b=function(){at.postMessage(null)}}else b=function(){x(D,0)};function Yt(W){T=W,P||(P=!0,b())}function ge(W,ee){v=x(function(){W(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){A||E||(A=!0,Yt(F))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var ie=m;m=ee;try{return W()}finally{m=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ie=m;m=W;try{return ee()}finally{m=ie}},t.unstable_scheduleCallback=function(W,ee,ie){var me=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?me+ie:me):ie=me,W){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ie+ce,W={id:d++,callback:ee,priorityLevel:W,startTime:ie,expirationTime:ce,sortIndex:-1},ie>me?(W.sortIndex=ie,e(c,W),n(u)===null&&W===n(c)&&(k?(S(v),v=-1):k=!0,ge(O,ie-me))):(W.sortIndex=ce,e(u,W),A||E||(A=!0,Yt(F))),W},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(W){var ee=m;return function(){var ie=m;m=ee;try{return W.apply(this,arguments)}finally{m=ie}}}})(Yw);Qw.exports=Yw;var Pk=Qw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xk=j,Sn=Pk;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xw=new Set,ml={};function Vs(t,e){Lo(t,e),Lo(t+"Capture",e)}function Lo(t,e){for(ml[t]=e,t=0;t<e.length;t++)Xw.add(e[t])}var jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$f=Object.prototype.hasOwnProperty,Nk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fy={},py={};function Ok(t){return $f.call(py,t)?!0:$f.call(fy,t)?!1:Nk.test(t)?py[t]=!0:(fy[t]=!0,!1)}function Dk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Lk(t,e,n,r){if(e===null||typeof e>"u"||Dk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pm=/[\-:]([a-z])/g;function xm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pm,xm);Dt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pm,xm);Dt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pm,xm);Dt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nm(t,e,n,r){var i=Dt.hasOwnProperty(e)?Dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lk(e,n,i,r)&&(n=null),r||i===null?Ok(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qr=xk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mu=Symbol.for("react.element"),ao=Symbol.for("react.portal"),lo=Symbol.for("react.fragment"),Om=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),Jw=Symbol.for("react.provider"),Zw=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),qf=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),ci=Symbol.for("react.lazy"),eE=Symbol.for("react.offscreen"),my=Symbol.iterator;function Aa(t){return t===null||typeof t!="object"?null:(t=my&&t[my]||t["@@iterator"],typeof t=="function"?t:null)}var tt=Object.assign,Gh;function ja(t){if(Gh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gh=e&&e[1]||""}return`
`+Gh+t}var Kh=!1;function Qh(t,e){if(!t||Kh)return"";Kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ja(t):""}function Mk(t){switch(t.tag){case 5:return ja(t.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 2:case 15:return t=Qh(t.type,!1),t;case 11:return t=Qh(t.type.render,!1),t;case 1:return t=Qh(t.type,!0),t;default:return""}}function Gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lo:return"Fragment";case ao:return"Portal";case Hf:return"Profiler";case Om:return"StrictMode";case Wf:return"Suspense";case qf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zw:return(t.displayName||"Context")+".Consumer";case Jw:return(t._context.displayName||"Context")+".Provider";case Dm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lm:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case ci:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}function Vk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===Om?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jk(t){var e=tE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vu(t){t._valueTracker||(t._valueTracker=jk(t))}function nE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=tE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kf(t,e){var n=e.checked;return tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rE(t,e){e=e.checked,e!=null&&Nm(t,"checked",e,!1)}function Qf(t,e){rE(t,e);var n=Mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yf(t,e.type,Mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yf(t,e,n){(e!=="number"||$c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ua=Array.isArray;function So(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Ua(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mi(n)}}function iE(t,e){var n=Mi(e.value),r=Mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _y(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ju,oE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ju=ju||document.createElement("div"),ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ju.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uk=["Webkit","ms","Moz","O"];Object.keys(Ya).forEach(function(t){Uk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ya[e]=Ya[t]})});function aE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ya.hasOwnProperty(t)&&Ya[t]?(""+e).trim():e+"px"}function lE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=aE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Fk=tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(t,e){if(e){if(Fk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function ep(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tp=null;function Mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var np=null,Ao=null,ko=null;function wy(t){if(t=Zl(t)){if(typeof np!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Wd(e),np(t.stateNode,t.type,e))}}function uE(t){Ao?ko?ko.push(t):ko=[t]:Ao=t}function cE(){if(Ao){var t=Ao,e=ko;if(ko=Ao=null,wy(t),e)for(t=0;t<e.length;t++)wy(e[t])}}function dE(t,e){return t(e)}function hE(){}var Yh=!1;function fE(t,e,n){if(Yh)return t(e,n);Yh=!0;try{return dE(t,e,n)}finally{Yh=!1,(Ao!==null||ko!==null)&&(hE(),cE())}}function vl(t,e){var n=t.stateNode;if(n===null)return null;var r=Wd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var rp=!1;if(jr)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){rp=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{rp=!1}function Bk(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Xa=!1,Hc=null,Wc=!1,ip=null,zk={onError:function(t){Xa=!0,Hc=t}};function $k(t,e,n,r,i,s,o,a,u){Xa=!1,Hc=null,Bk.apply(zk,arguments)}function Hk(t,e,n,r,i,s,o,a,u){if($k.apply(this,arguments),Xa){if(Xa){var c=Hc;Xa=!1,Hc=null}else throw Error(H(198));Wc||(Wc=!0,ip=c)}}function js(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ey(t){if(js(t)!==t)throw Error(H(188))}function Wk(t){var e=t.alternate;if(!e){if(e=js(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ey(i),t;if(s===r)return Ey(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function mE(t){return t=Wk(t),t!==null?gE(t):null}function gE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gE(t);if(e!==null)return e;t=t.sibling}return null}var vE=Sn.unstable_scheduleCallback,Ty=Sn.unstable_cancelCallback,qk=Sn.unstable_shouldYield,Gk=Sn.unstable_requestPaint,ut=Sn.unstable_now,Kk=Sn.unstable_getCurrentPriorityLevel,Vm=Sn.unstable_ImmediatePriority,yE=Sn.unstable_UserBlockingPriority,qc=Sn.unstable_NormalPriority,Qk=Sn.unstable_LowPriority,_E=Sn.unstable_IdlePriority,Bd=null,ur=null;function Yk(t){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(Bd,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:Zk,Xk=Math.log,Jk=Math.LN2;function Zk(t){return t>>>=0,t===0?32:31-(Xk(t)/Jk|0)|0}var Uu=64,Fu=4194304;function Fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fa(a):(s&=o,s!==0&&(r=Fa(s)))}else o=n&~i,o!==0?r=Fa(o):s!==0&&(r=Fa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qn(e),i=1<<n,r|=t[n],e&=~i;return r}function eC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=eC(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function sp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wE(){var t=Uu;return Uu<<=1,!(Uu&4194240)&&(Uu=64),t}function Xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function nC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Le=0;function EE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var TE,Um,IE,SE,AE,op=!1,Bu=[],Si=null,Ai=null,ki=null,yl=new Map,_l=new Map,hi=[],rC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iy(t,e){switch(t){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":Ai=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":yl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(e.pointerId)}}function Ca(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Zl(e),e!==null&&Um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iC(t,e,n,r,i){switch(e){case"focusin":return Si=Ca(Si,t,e,n,r,i),!0;case"dragenter":return Ai=Ca(Ai,t,e,n,r,i),!0;case"mouseover":return ki=Ca(ki,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return yl.set(s,Ca(yl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_l.set(s,Ca(_l.get(s)||null,t,e,n,r,i)),!0}return!1}function kE(t){var e=ls(t.target);if(e!==null){var n=js(e);if(n!==null){if(e=n.tag,e===13){if(e=pE(n),e!==null){t.blockedOn=e,AE(t.priority,function(){IE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ap(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);tp=r,n.target.dispatchEvent(r),tp=null}else return e=Zl(n),e!==null&&Um(e),t.blockedOn=n,!1;e.shift()}return!0}function Sy(t,e,n){_c(t)&&n.delete(e)}function sC(){op=!1,Si!==null&&_c(Si)&&(Si=null),Ai!==null&&_c(Ai)&&(Ai=null),ki!==null&&_c(ki)&&(ki=null),yl.forEach(Sy),_l.forEach(Sy)}function ba(t,e){t.blockedOn===e&&(t.blockedOn=null,op||(op=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,sC)))}function wl(t){function e(i){return ba(i,t)}if(0<Bu.length){ba(Bu[0],t);for(var n=1;n<Bu.length;n++){var r=Bu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Si!==null&&ba(Si,t),Ai!==null&&ba(Ai,t),ki!==null&&ba(ki,t),yl.forEach(e),_l.forEach(e),n=0;n<hi.length;n++)r=hi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hi.length&&(n=hi[0],n.blockedOn===null);)kE(n),n.blockedOn===null&&hi.shift()}var Co=Qr.ReactCurrentBatchConfig,Kc=!0;function oC(t,e,n,r){var i=Le,s=Co.transition;Co.transition=null;try{Le=1,Fm(t,e,n,r)}finally{Le=i,Co.transition=s}}function aC(t,e,n,r){var i=Le,s=Co.transition;Co.transition=null;try{Le=4,Fm(t,e,n,r)}finally{Le=i,Co.transition=s}}function Fm(t,e,n,r){if(Kc){var i=ap(t,e,n,r);if(i===null)lf(t,e,r,Qc,n),Iy(t,r);else if(iC(i,t,e,n,r))r.stopPropagation();else if(Iy(t,r),e&4&&-1<rC.indexOf(t)){for(;i!==null;){var s=Zl(i);if(s!==null&&TE(s),s=ap(t,e,n,r),s===null&&lf(t,e,r,Qc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lf(t,e,r,null,n)}}var Qc=null;function ap(t,e,n,r){if(Qc=null,t=Mm(r),t=ls(t),t!==null)if(e=js(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qc=t,null}function CE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kk()){case Vm:return 1;case yE:return 4;case qc:case Qk:return 16;case _E:return 536870912;default:return 16}default:return 16}}var _i=null,Bm=null,wc=null;function bE(){if(wc)return wc;var t,e=Bm,n=e.length,r,i="value"in _i?_i.value:_i.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wc=i.slice(t,1<r?1-r:void 0)}function Ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zu(){return!0}function Ay(){return!1}function kn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zu:Ay,this.isPropagationStopped=Ay,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zu)},persist:function(){},isPersistent:zu}),e}var Xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zm=kn(Xo),Jl=tt({},Xo,{view:0,detail:0}),lC=kn(Jl),Jh,Zh,Ra,zd=tt({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$m,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ra&&(Ra&&t.type==="mousemove"?(Jh=t.screenX-Ra.screenX,Zh=t.screenY-Ra.screenY):Zh=Jh=0,Ra=t),Jh)},movementY:function(t){return"movementY"in t?t.movementY:Zh}}),ky=kn(zd),uC=tt({},zd,{dataTransfer:0}),cC=kn(uC),dC=tt({},Jl,{relatedTarget:0}),ef=kn(dC),hC=tt({},Xo,{animationName:0,elapsedTime:0,pseudoElement:0}),fC=kn(hC),pC=tt({},Xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mC=kn(pC),gC=tt({},Xo,{data:0}),Cy=kn(gC),vC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_C={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_C[t])?!!e[t]:!1}function $m(){return wC}var EC=tt({},Jl,{key:function(t){if(t.key){var e=vC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$m,charCode:function(t){return t.type==="keypress"?Ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TC=kn(EC),IC=tt({},zd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),by=kn(IC),SC=tt({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$m}),AC=kn(SC),kC=tt({},Xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),CC=kn(kC),bC=tt({},zd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RC=kn(bC),PC=[9,13,27,32],Hm=jr&&"CompositionEvent"in window,Ja=null;jr&&"documentMode"in document&&(Ja=document.documentMode);var xC=jr&&"TextEvent"in window&&!Ja,RE=jr&&(!Hm||Ja&&8<Ja&&11>=Ja),Ry=" ",Py=!1;function PE(t,e){switch(t){case"keyup":return PC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var uo=!1;function NC(t,e){switch(t){case"compositionend":return xE(e);case"keypress":return e.which!==32?null:(Py=!0,Ry);case"textInput":return t=e.data,t===Ry&&Py?null:t;default:return null}}function OC(t,e){if(uo)return t==="compositionend"||!Hm&&PE(t,e)?(t=bE(),wc=Bm=_i=null,uo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return RE&&e.locale!=="ko"?null:e.data;default:return null}}var DC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DC[t.type]:e==="textarea"}function NE(t,e,n,r){uE(r),e=Yc(e,"onChange"),0<e.length&&(n=new zm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Za=null,El=null;function LC(t){$E(t,0)}function $d(t){var e=fo(t);if(nE(e))return t}function MC(t,e){if(t==="change")return e}var OE=!1;if(jr){var tf;if(jr){var nf="oninput"in document;if(!nf){var Ny=document.createElement("div");Ny.setAttribute("oninput","return;"),nf=typeof Ny.oninput=="function"}tf=nf}else tf=!1;OE=tf&&(!document.documentMode||9<document.documentMode)}function Oy(){Za&&(Za.detachEvent("onpropertychange",DE),El=Za=null)}function DE(t){if(t.propertyName==="value"&&$d(El)){var e=[];NE(e,El,t,Mm(t)),fE(LC,e)}}function VC(t,e,n){t==="focusin"?(Oy(),Za=e,El=n,Za.attachEvent("onpropertychange",DE)):t==="focusout"&&Oy()}function jC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $d(El)}function UC(t,e){if(t==="click")return $d(e)}function FC(t,e){if(t==="input"||t==="change")return $d(e)}function BC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:BC;function Tl(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$f.call(e,i)||!Qn(t[i],e[i]))return!1}return!0}function Dy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ly(t,e){var n=Dy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dy(n)}}function LE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?LE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ME(){for(var t=window,e=$c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$c(t.document)}return e}function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zC(t){var e=ME(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&LE(n.ownerDocument.documentElement,n)){if(r!==null&&Wm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ly(n,s);var o=Ly(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $C=jr&&"documentMode"in document&&11>=document.documentMode,co=null,lp=null,el=null,up=!1;function My(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;up||co==null||co!==$c(r)||(r=co,"selectionStart"in r&&Wm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),el&&Tl(el,r)||(el=r,r=Yc(lp,"onSelect"),0<r.length&&(e=new zm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=co)))}function $u(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ho={animationend:$u("Animation","AnimationEnd"),animationiteration:$u("Animation","AnimationIteration"),animationstart:$u("Animation","AnimationStart"),transitionend:$u("Transition","TransitionEnd")},rf={},VE={};jr&&(VE=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Hd(t){if(rf[t])return rf[t];if(!ho[t])return t;var e=ho[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in VE)return rf[t]=e[n];return t}var jE=Hd("animationend"),UE=Hd("animationiteration"),FE=Hd("animationstart"),BE=Hd("transitionend"),zE=new Map,Vy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){zE.set(t,e),Vs(e,[t])}for(var sf=0;sf<Vy.length;sf++){var of=Vy[sf],HC=of.toLowerCase(),WC=of[0].toUpperCase()+of.slice(1);Wi(HC,"on"+WC)}Wi(jE,"onAnimationEnd");Wi(UE,"onAnimationIteration");Wi(FE,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(BE,"onTransitionEnd");Lo("onMouseEnter",["mouseout","mouseover"]);Lo("onMouseLeave",["mouseout","mouseover"]);Lo("onPointerEnter",["pointerout","pointerover"]);Lo("onPointerLeave",["pointerout","pointerover"]);Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function jy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Hk(r,e,void 0,t),t.currentTarget=null}function $E(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;jy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;jy(i,a,c),s=u}}}if(Wc)throw t=ip,Wc=!1,ip=null,t}function He(t,e){var n=e[pp];n===void 0&&(n=e[pp]=new Set);var r=t+"__bubble";n.has(r)||(HE(e,t,2,!1),n.add(r))}function af(t,e,n){var r=0;e&&(r|=4),HE(n,t,r,e)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function Il(t){if(!t[Hu]){t[Hu]=!0,Xw.forEach(function(n){n!=="selectionchange"&&(qC.has(n)||af(n,!1,t),af(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hu]||(e[Hu]=!0,af("selectionchange",!1,e))}}function HE(t,e,n,r){switch(CE(e)){case 1:var i=oC;break;case 4:i=aC;break;default:i=Fm}n=i.bind(null,e,n,t),i=void 0,!rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ls(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}fE(function(){var c=s,d=Mm(n),f=[];e:{var m=zE.get(t);if(m!==void 0){var E=zm,A=t;switch(t){case"keypress":if(Ec(n)===0)break e;case"keydown":case"keyup":E=TC;break;case"focusin":A="focus",E=ef;break;case"focusout":A="blur",E=ef;break;case"beforeblur":case"afterblur":E=ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ky;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=cC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=AC;break;case jE:case UE:case FE:E=fC;break;case BE:E=CC;break;case"scroll":E=lC;break;case"wheel":E=RC;break;case"copy":case"cut":case"paste":E=mC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=by}var k=(e&4)!==0,x=!k&&t==="scroll",S=k?m!==null?m+"Capture":null:m;k=[];for(var y=c,I;y!==null;){I=y;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,S!==null&&(O=vl(y,S),O!=null&&k.push(Sl(y,O,I)))),x)break;y=y.return}0<k.length&&(m=new E(m,A,null,n,d),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==tp&&(A=n.relatedTarget||n.fromElement)&&(ls(A)||A[Ur]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(A=n.relatedTarget||n.toElement,E=c,A=A?ls(A):null,A!==null&&(x=js(A),A!==x||A.tag!==5&&A.tag!==6)&&(A=null)):(E=null,A=c),E!==A)){if(k=ky,O="onMouseLeave",S="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=by,O="onPointerLeave",S="onPointerEnter",y="pointer"),x=E==null?m:fo(E),I=A==null?m:fo(A),m=new k(O,y+"leave",E,n,d),m.target=x,m.relatedTarget=I,O=null,ls(d)===c&&(k=new k(S,y+"enter",A,n,d),k.target=I,k.relatedTarget=x,O=k),x=O,E&&A)t:{for(k=E,S=A,y=0,I=k;I;I=eo(I))y++;for(I=0,O=S;O;O=eo(O))I++;for(;0<y-I;)k=eo(k),y--;for(;0<I-y;)S=eo(S),I--;for(;y--;){if(k===S||S!==null&&k===S.alternate)break t;k=eo(k),S=eo(S)}k=null}else k=null;E!==null&&Uy(f,m,E,k,!1),A!==null&&x!==null&&Uy(f,x,A,k,!0)}}e:{if(m=c?fo(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var F=MC;else if(xy(m))if(OE)F=FC;else{F=jC;var P=VC}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=UC);if(F&&(F=F(t,c))){NE(f,F,n,d);break e}P&&P(t,m,c),t==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Yf(m,"number",m.value)}switch(P=c?fo(c):window,t){case"focusin":(xy(P)||P.contentEditable==="true")&&(co=P,lp=c,el=null);break;case"focusout":el=lp=co=null;break;case"mousedown":up=!0;break;case"contextmenu":case"mouseup":case"dragend":up=!1,My(f,n,d);break;case"selectionchange":if($C)break;case"keydown":case"keyup":My(f,n,d)}var T;if(Hm)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else uo?PE(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(RE&&n.locale!=="ko"&&(uo||v!=="onCompositionStart"?v==="onCompositionEnd"&&uo&&(T=bE()):(_i=d,Bm="value"in _i?_i.value:_i.textContent,uo=!0)),P=Yc(c,v),0<P.length&&(v=new Cy(v,t,null,n,d),f.push({event:v,listeners:P}),T?v.data=T:(T=xE(n),T!==null&&(v.data=T)))),(T=xC?NC(t,n):OC(t,n))&&(c=Yc(c,"onBeforeInput"),0<c.length&&(d=new Cy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}$E(f,e)})}function Sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vl(t,n),s!=null&&r.unshift(Sl(t,s,i)),s=vl(t,e),s!=null&&r.push(Sl(t,s,i))),t=t.return}return r}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=vl(n,s),u!=null&&o.unshift(Sl(n,u,a))):i||(u=vl(n,s),u!=null&&o.push(Sl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GC=/\r\n?/g,KC=/\u0000|\uFFFD/g;function Fy(t){return(typeof t=="string"?t:""+t).replace(GC,`
`).replace(KC,"")}function Wu(t,e,n){if(e=Fy(e),Fy(t)!==e&&n)throw Error(H(425))}function Xc(){}var cp=null,dp=null;function hp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fp=typeof setTimeout=="function"?setTimeout:void 0,QC=typeof clearTimeout=="function"?clearTimeout:void 0,By=typeof Promise=="function"?Promise:void 0,YC=typeof queueMicrotask=="function"?queueMicrotask:typeof By<"u"?function(t){return By.resolve(null).then(t).catch(XC)}:fp;function XC(t){setTimeout(function(){throw t})}function uf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wl(e)}function Ci(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),sr="__reactFiber$"+Jo,Al="__reactProps$"+Jo,Ur="__reactContainer$"+Jo,pp="__reactEvents$"+Jo,JC="__reactListeners$"+Jo,ZC="__reactHandles$"+Jo;function ls(t){var e=t[sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ur]||n[sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zy(t);t!==null;){if(n=t[sr])return n;t=zy(t)}return e}t=n,n=t.parentNode}return null}function Zl(t){return t=t[sr]||t[Ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Wd(t){return t[Al]||null}var mp=[],po=-1;function qi(t){return{current:t}}function qe(t){0>po||(t.current=mp[po],mp[po]=null,po--)}function Ue(t,e){po++,mp[po]=t.current,t.current=e}var Vi={},qt=qi(Vi),un=qi(!1),Es=Vi;function Mo(t,e){var n=t.type.contextTypes;if(!n)return Vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function cn(t){return t=t.childContextTypes,t!=null}function Jc(){qe(un),qe(qt)}function $y(t,e,n){if(qt.current!==Vi)throw Error(H(168));Ue(qt,e),Ue(un,n)}function WE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,Vk(t)||"Unknown",i));return tt({},n,r)}function Zc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,Es=qt.current,Ue(qt,t),Ue(un,un.current),!0}function Hy(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=WE(t,e,Es),r.__reactInternalMemoizedMergedChildContext=t,qe(un),qe(qt),Ue(qt,t)):qe(un),Ue(un,n)}var br=null,qd=!1,cf=!1;function qE(t){br===null?br=[t]:br.push(t)}function eb(t){qd=!0,qE(t)}function Gi(){if(!cf&&br!==null){cf=!0;var t=0,e=Le;try{var n=br;for(Le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}br=null,qd=!1}catch(i){throw br!==null&&(br=br.slice(t+1)),vE(Vm,Gi),i}finally{Le=e,cf=!1}}return null}var mo=[],go=0,ed=null,td=0,Pn=[],xn=0,Ts=null,Rr=1,Pr="";function is(t,e){mo[go++]=td,mo[go++]=ed,ed=t,td=e}function GE(t,e,n){Pn[xn++]=Rr,Pn[xn++]=Pr,Pn[xn++]=Ts,Ts=t;var r=Rr;t=Pr;var i=32-qn(r)-1;r&=~(1<<i),n+=1;var s=32-qn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rr=1<<32-qn(e)+i|n<<i|r,Pr=s+t}else Rr=1<<s|n<<i|r,Pr=t}function qm(t){t.return!==null&&(is(t,1),GE(t,1,0))}function Gm(t){for(;t===ed;)ed=mo[--go],mo[go]=null,td=mo[--go],mo[go]=null;for(;t===Ts;)Ts=Pn[--xn],Pn[xn]=null,Pr=Pn[--xn],Pn[xn]=null,Rr=Pn[--xn],Pn[xn]=null}var In=null,yn=null,Qe=!1,Hn=null;function KE(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,yn=Ci(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ts!==null?{id:Rr,overflow:Pr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,yn=null,!0):!1;default:return!1}}function gp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vp(t){if(Qe){var e=yn;if(e){var n=e;if(!Wy(t,e)){if(gp(t))throw Error(H(418));e=Ci(n.nextSibling);var r=In;e&&Wy(t,e)?KE(r,n):(t.flags=t.flags&-4097|2,Qe=!1,In=t)}}else{if(gp(t))throw Error(H(418));t.flags=t.flags&-4097|2,Qe=!1,In=t}}}function qy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function qu(t){if(t!==In)return!1;if(!Qe)return qy(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hp(t.type,t.memoizedProps)),e&&(e=yn)){if(gp(t))throw QE(),Error(H(418));for(;e;)KE(t,e),e=Ci(e.nextSibling)}if(qy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Ci(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=In?Ci(t.stateNode.nextSibling):null;return!0}function QE(){for(var t=yn;t;)t=Ci(t.nextSibling)}function Vo(){yn=In=null,Qe=!1}function Km(t){Hn===null?Hn=[t]:Hn.push(t)}var tb=Qr.ReactCurrentBatchConfig;function Pa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Gu(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gy(t){var e=t._init;return e(t._payload)}function YE(t){function e(S,y){if(t){var I=S.deletions;I===null?(S.deletions=[y],S.flags|=16):I.push(y)}}function n(S,y){if(!t)return null;for(;y!==null;)e(S,y),y=y.sibling;return null}function r(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function i(S,y){return S=xi(S,y),S.index=0,S.sibling=null,S}function s(S,y,I){return S.index=I,t?(I=S.alternate,I!==null?(I=I.index,I<y?(S.flags|=2,y):I):(S.flags|=2,y)):(S.flags|=1048576,y)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,y,I,O){return y===null||y.tag!==6?(y=vf(I,S.mode,O),y.return=S,y):(y=i(y,I),y.return=S,y)}function u(S,y,I,O){var F=I.type;return F===lo?d(S,y,I.props.children,O,I.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ci&&Gy(F)===y.type)?(O=i(y,I.props),O.ref=Pa(S,y,I),O.return=S,O):(O=bc(I.type,I.key,I.props,null,S.mode,O),O.ref=Pa(S,y,I),O.return=S,O)}function c(S,y,I,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=yf(I,S.mode,O),y.return=S,y):(y=i(y,I.children||[]),y.return=S,y)}function d(S,y,I,O,F){return y===null||y.tag!==7?(y=vs(I,S.mode,O,F),y.return=S,y):(y=i(y,I),y.return=S,y)}function f(S,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=vf(""+y,S.mode,I),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Mu:return I=bc(y.type,y.key,y.props,null,S.mode,I),I.ref=Pa(S,null,y),I.return=S,I;case ao:return y=yf(y,S.mode,I),y.return=S,y;case ci:var O=y._init;return f(S,O(y._payload),I)}if(Ua(y)||Aa(y))return y=vs(y,S.mode,I,null),y.return=S,y;Gu(S,y)}return null}function m(S,y,I,O){var F=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:a(S,y,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Mu:return I.key===F?u(S,y,I,O):null;case ao:return I.key===F?c(S,y,I,O):null;case ci:return F=I._init,m(S,y,F(I._payload),O)}if(Ua(I)||Aa(I))return F!==null?null:d(S,y,I,O,null);Gu(S,I)}return null}function E(S,y,I,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(I)||null,a(y,S,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Mu:return S=S.get(O.key===null?I:O.key)||null,u(y,S,O,F);case ao:return S=S.get(O.key===null?I:O.key)||null,c(y,S,O,F);case ci:var P=O._init;return E(S,y,I,P(O._payload),F)}if(Ua(O)||Aa(O))return S=S.get(I)||null,d(y,S,O,F,null);Gu(y,O)}return null}function A(S,y,I,O){for(var F=null,P=null,T=y,v=y=0,_=null;T!==null&&v<I.length;v++){T.index>v?(_=T,T=null):_=T.sibling;var C=m(S,T,I[v],O);if(C===null){T===null&&(T=_);break}t&&T&&C.alternate===null&&e(S,T),y=s(C,y,v),P===null?F=C:P.sibling=C,P=C,T=_}if(v===I.length)return n(S,T),Qe&&is(S,v),F;if(T===null){for(;v<I.length;v++)T=f(S,I[v],O),T!==null&&(y=s(T,y,v),P===null?F=T:P.sibling=T,P=T);return Qe&&is(S,v),F}for(T=r(S,T);v<I.length;v++)_=E(T,S,v,I[v],O),_!==null&&(t&&_.alternate!==null&&T.delete(_.key===null?v:_.key),y=s(_,y,v),P===null?F=_:P.sibling=_,P=_);return t&&T.forEach(function(R){return e(S,R)}),Qe&&is(S,v),F}function k(S,y,I,O){var F=Aa(I);if(typeof F!="function")throw Error(H(150));if(I=F.call(I),I==null)throw Error(H(151));for(var P=F=null,T=y,v=y=0,_=null,C=I.next();T!==null&&!C.done;v++,C=I.next()){T.index>v?(_=T,T=null):_=T.sibling;var R=m(S,T,C.value,O);if(R===null){T===null&&(T=_);break}t&&T&&R.alternate===null&&e(S,T),y=s(R,y,v),P===null?F=R:P.sibling=R,P=R,T=_}if(C.done)return n(S,T),Qe&&is(S,v),F;if(T===null){for(;!C.done;v++,C=I.next())C=f(S,C.value,O),C!==null&&(y=s(C,y,v),P===null?F=C:P.sibling=C,P=C);return Qe&&is(S,v),F}for(T=r(S,T);!C.done;v++,C=I.next())C=E(T,S,v,C.value,O),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?v:C.key),y=s(C,y,v),P===null?F=C:P.sibling=C,P=C);return t&&T.forEach(function(D){return e(S,D)}),Qe&&is(S,v),F}function x(S,y,I,O){if(typeof I=="object"&&I!==null&&I.type===lo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Mu:e:{for(var F=I.key,P=y;P!==null;){if(P.key===F){if(F=I.type,F===lo){if(P.tag===7){n(S,P.sibling),y=i(P,I.props.children),y.return=S,S=y;break e}}else if(P.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ci&&Gy(F)===P.type){n(S,P.sibling),y=i(P,I.props),y.ref=Pa(S,P,I),y.return=S,S=y;break e}n(S,P);break}else e(S,P);P=P.sibling}I.type===lo?(y=vs(I.props.children,S.mode,O,I.key),y.return=S,S=y):(O=bc(I.type,I.key,I.props,null,S.mode,O),O.ref=Pa(S,y,I),O.return=S,S=O)}return o(S);case ao:e:{for(P=I.key;y!==null;){if(y.key===P)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(S,y.sibling),y=i(y,I.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else e(S,y);y=y.sibling}y=yf(I,S.mode,O),y.return=S,S=y}return o(S);case ci:return P=I._init,x(S,y,P(I._payload),O)}if(Ua(I))return A(S,y,I,O);if(Aa(I))return k(S,y,I,O);Gu(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(S,y.sibling),y=i(y,I),y.return=S,S=y):(n(S,y),y=vf(I,S.mode,O),y.return=S,S=y),o(S)):n(S,y)}return x}var jo=YE(!0),XE=YE(!1),nd=qi(null),rd=null,vo=null,Qm=null;function Ym(){Qm=vo=rd=null}function Xm(t){var e=nd.current;qe(nd),t._currentValue=e}function yp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bo(t,e){rd=t,Qm=vo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Qm!==t)if(t={context:t,memoizedValue:e,next:null},vo===null){if(rd===null)throw Error(H(308));vo=t,rd.dependencies={lanes:0,firstContext:t}}else vo=vo.next=t;return e}var us=null;function Jm(t){us===null?us=[t]:us.push(t)}function JE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fr(t,r)}function Fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var di=!1;function Zm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ZE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,be&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fr(t,n)}return i=r.interleaved,i===null?(e.next=e,Jm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fr(t,n)}function Tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}function Ky(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function id(t,e,n,r){var i=t.updateQueue;di=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,E=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var A=t,k=a;switch(m=e,E=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){f=A.call(E,f,m);break e}f=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,m=typeof A=="function"?A.call(E,f,m):A,m==null)break e;f=tt({},f,m);break e;case 2:di=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else E={eventTime:E,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ss|=o,t.lanes=o,t.memoizedState=f}}function Qy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var eu={},cr=qi(eu),kl=qi(eu),Cl=qi(eu);function cs(t){if(t===eu)throw Error(H(174));return t}function eg(t,e){switch(Ue(Cl,e),Ue(kl,t),Ue(cr,eu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jf(e,t)}qe(cr),Ue(cr,e)}function Uo(){qe(cr),qe(kl),qe(Cl)}function e1(t){cs(Cl.current);var e=cs(cr.current),n=Jf(e,t.type);e!==n&&(Ue(kl,t),Ue(cr,n))}function tg(t){kl.current===t&&(qe(cr),qe(kl))}var Ze=qi(0);function sd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var df=[];function ng(){for(var t=0;t<df.length;t++)df[t]._workInProgressVersionPrimary=null;df.length=0}var Ic=Qr.ReactCurrentDispatcher,hf=Qr.ReactCurrentBatchConfig,Is=0,et=null,vt=null,St=null,od=!1,tl=!1,bl=0,nb=0;function Ft(){throw Error(H(321))}function rg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function ig(t,e,n,r,i,s){if(Is=s,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ic.current=t===null||t.memoizedState===null?ob:ab,t=n(r,i),tl){s=0;do{if(tl=!1,bl=0,25<=s)throw Error(H(301));s+=1,St=vt=null,e.updateQueue=null,Ic.current=lb,t=n(r,i)}while(tl)}if(Ic.current=ad,e=vt!==null&&vt.next!==null,Is=0,St=vt=et=null,od=!1,e)throw Error(H(300));return t}function sg(){var t=bl!==0;return bl=0,t}function rr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?et.memoizedState=St=t:St=St.next=t,St}function Ln(){if(vt===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=St===null?et.memoizedState:St.next;if(e!==null)St=e,vt=t;else{if(t===null)throw Error(H(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},St===null?et.memoizedState=St=t:St=St.next=t}return St}function Rl(t,e){return typeof e=="function"?e(t):e}function ff(t){var e=Ln(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=vt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Is&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,et.lanes|=d,Ss|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Qn(r,e.memoizedState)||(ln=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,et.lanes|=s,Ss|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pf(t){var e=Ln(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function t1(){}function n1(t,e){var n=et,r=Ln(),i=e(),s=!Qn(r.memoizedState,i);if(s&&(r.memoizedState=i,ln=!0),r=r.queue,og(s1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||St!==null&&St.memoizedState.tag&1){if(n.flags|=2048,Pl(9,i1.bind(null,n,r,i,e),void 0,null),At===null)throw Error(H(349));Is&30||r1(n,e,i)}return i}function r1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i1(t,e,n,r){e.value=n,e.getSnapshot=r,o1(e)&&a1(t)}function s1(t,e,n){return n(function(){o1(e)&&a1(t)})}function o1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function a1(t){var e=Fr(t,1);e!==null&&Gn(e,t,1,-1)}function Yy(t){var e=rr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rl,lastRenderedState:t},e.queue=t,t=t.dispatch=sb.bind(null,et,t),[e.memoizedState,t]}function Pl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function l1(){return Ln().memoizedState}function Sc(t,e,n,r){var i=rr();et.flags|=t,i.memoizedState=Pl(1|e,n,void 0,r===void 0?null:r)}function Gd(t,e,n,r){var i=Ln();r=r===void 0?null:r;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,r!==null&&rg(r,o.deps)){i.memoizedState=Pl(e,n,s,r);return}}et.flags|=t,i.memoizedState=Pl(1|e,n,s,r)}function Xy(t,e){return Sc(8390656,8,t,e)}function og(t,e){return Gd(2048,8,t,e)}function u1(t,e){return Gd(4,2,t,e)}function c1(t,e){return Gd(4,4,t,e)}function d1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function h1(t,e,n){return n=n!=null?n.concat([t]):null,Gd(4,4,d1.bind(null,e,t),n)}function ag(){}function f1(t,e){var n=Ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function p1(t,e){var n=Ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function m1(t,e,n){return Is&21?(Qn(n,e)||(n=wE(),et.lanes|=n,Ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function rb(t,e){var n=Le;Le=n!==0&&4>n?n:4,t(!0);var r=hf.transition;hf.transition={};try{t(!1),e()}finally{Le=n,hf.transition=r}}function g1(){return Ln().memoizedState}function ib(t,e,n){var r=Pi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},v1(t))y1(e,n);else if(n=JE(t,e,n,r),n!==null){var i=tn();Gn(n,t,r,i),_1(n,e,r)}}function sb(t,e,n){var r=Pi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(v1(t))y1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Qn(a,o)){var u=e.interleaved;u===null?(i.next=i,Jm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=JE(t,e,i,r),n!==null&&(i=tn(),Gn(n,t,r,i),_1(n,e,r))}}function v1(t){var e=t.alternate;return t===et||e!==null&&e===et}function y1(t,e){tl=od=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}var ad={readContext:Dn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},ob={readContext:Dn,useCallback:function(t,e){return rr().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Xy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4194308,4,d1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=rr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ib.bind(null,et,t),[r.memoizedState,t]},useRef:function(t){var e=rr();return t={current:t},e.memoizedState=t},useState:Yy,useDebugValue:ag,useDeferredValue:function(t){return rr().memoizedState=t},useTransition:function(){var t=Yy(!1),e=t[0];return t=rb.bind(null,t[1]),rr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=et,i=rr();if(Qe){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),At===null)throw Error(H(349));Is&30||r1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xy(s1.bind(null,r,s,t),[t]),r.flags|=2048,Pl(9,i1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=rr(),e=At.identifierPrefix;if(Qe){var n=Pr,r=Rr;n=(r&~(1<<32-qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ab={readContext:Dn,useCallback:f1,useContext:Dn,useEffect:og,useImperativeHandle:h1,useInsertionEffect:u1,useLayoutEffect:c1,useMemo:p1,useReducer:ff,useRef:l1,useState:function(){return ff(Rl)},useDebugValue:ag,useDeferredValue:function(t){var e=Ln();return m1(e,vt.memoizedState,t)},useTransition:function(){var t=ff(Rl)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:t1,useSyncExternalStore:n1,useId:g1,unstable_isNewReconciler:!1},lb={readContext:Dn,useCallback:f1,useContext:Dn,useEffect:og,useImperativeHandle:h1,useInsertionEffect:u1,useLayoutEffect:c1,useMemo:p1,useReducer:pf,useRef:l1,useState:function(){return pf(Rl)},useDebugValue:ag,useDeferredValue:function(t){var e=Ln();return vt===null?e.memoizedState=t:m1(e,vt.memoizedState,t)},useTransition:function(){var t=pf(Rl)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:t1,useSyncExternalStore:n1,useId:g1,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _p(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kd={isMounted:function(t){return(t=t._reactInternals)?js(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tn(),i=Pi(t),s=Dr(r,i);s.payload=e,n!=null&&(s.callback=n),e=bi(t,s,i),e!==null&&(Gn(e,t,i,r),Tc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tn(),i=Pi(t),s=Dr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=bi(t,s,i),e!==null&&(Gn(e,t,i,r),Tc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),r=Pi(t),i=Dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=bi(t,i,r),e!==null&&(Gn(e,t,r,n),Tc(e,t,r))}};function Jy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Tl(n,r)||!Tl(i,s):!0}function w1(t,e,n){var r=!1,i=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(i=cn(e)?Es:qt.current,r=e.contextTypes,s=(r=r!=null)?Mo(t,i):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Kd.enqueueReplaceState(e,e.state,null)}function wp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Zm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dn(s):(s=cn(e)?Es:qt.current,i.context=Mo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_p(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Kd.enqueueReplaceState(i,i.state,null),id(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fo(t,e){try{var n="",r=e;do n+=Mk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ep(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ub=typeof WeakMap=="function"?WeakMap:Map;function E1(t,e,n){n=Dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ud||(ud=!0,xp=r),Ep(t,e)},n}function T1(t,e,n){n=Dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ep(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ep(t,e),typeof r!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function e_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ub;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ib.bind(null,t,e,n),e.then(t,t))}function t_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function n_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dr(-1,1),e.tag=2,bi(n,e,1))),n.lanes|=1),t)}var cb=Qr.ReactCurrentOwner,ln=!1;function Zt(t,e,n,r){e.child=t===null?XE(e,null,n,r):jo(e,t.child,n,r)}function r_(t,e,n,r,i){n=n.render;var s=e.ref;return bo(e,i),r=ig(t,e,n,r,s,i),n=sg(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(Qe&&n&&qm(e),e.flags|=1,Zt(t,e,r,i),e.child)}function i_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,I1(t,e,s,r,i)):(t=bc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Tl,n(o,r)&&t.ref===e.ref)return Br(t,e,i)}return e.flags|=1,t=xi(s,r),t.ref=e.ref,t.return=e,e.child=t}function I1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Tl(s,r)&&t.ref===e.ref)if(ln=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Br(t,e,i)}return Tp(t,e,n,r,i)}function S1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(_o,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ue(_o,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ue(_o,gn),gn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ue(_o,gn),gn|=r;return Zt(t,e,i,n),e.child}function A1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tp(t,e,n,r,i){var s=cn(n)?Es:qt.current;return s=Mo(e,s),bo(e,i),n=ig(t,e,n,r,s,i),r=sg(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Br(t,e,i)):(Qe&&r&&qm(e),e.flags|=1,Zt(t,e,n,i),e.child)}function s_(t,e,n,r,i){if(cn(n)){var s=!0;Zc(e)}else s=!1;if(bo(e,i),e.stateNode===null)Ac(t,e),w1(e,n,r),wp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=cn(n)?Es:qt.current,c=Mo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Zy(e,o,r,c),di=!1;var m=e.memoizedState;o.state=m,id(e,r,o,i),u=e.memoizedState,a!==r||m!==u||un.current||di?(typeof d=="function"&&(_p(e,n,d,r),u=e.memoizedState),(a=di||Jy(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ZE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dn(u):(u=cn(n)?Es:qt.current,u=Mo(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Zy(e,o,r,u),di=!1,m=e.memoizedState,o.state=m,id(e,r,o,i);var A=e.memoizedState;a!==f||m!==A||un.current||di?(typeof E=="function"&&(_p(e,n,E,r),A=e.memoizedState),(c=di||Jy(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ip(t,e,n,r,s,i)}function Ip(t,e,n,r,i,s){A1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hy(e,n,!1),Br(t,e,s);r=e.stateNode,cb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jo(e,t.child,null,s),e.child=jo(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=r.state,i&&Hy(e,n,!0),e.child}function k1(t){var e=t.stateNode;e.pendingContext?$y(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$y(t,e.context,!1),eg(t,e.containerInfo)}function o_(t,e,n,r,i){return Vo(),Km(i),e.flags|=256,Zt(t,e,n,r),e.child}var Sp={dehydrated:null,treeContext:null,retryLane:0};function Ap(t){return{baseLanes:t,cachePool:null,transitions:null}}function C1(t,e,n){var r=e.pendingProps,i=Ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ue(Ze,i&1),t===null)return vp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xd(o,r,0,null),t=vs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ap(n),e.memoizedState=Sp,t):lg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return db(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=xi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=xi(a,s):(s=vs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ap(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sp,r}return s=t.child,t=s.sibling,r=xi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lg(t,e){return e=Xd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ku(t,e,n,r){return r!==null&&Km(r),jo(e,t.child,null,n),t=lg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function db(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mf(Error(H(422))),Ku(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xd({mode:"visible",children:r.children},i,0,null),s=vs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&jo(e,t.child,null,o),e.child.memoizedState=Ap(o),e.memoizedState=Sp,s);if(!(e.mode&1))return Ku(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=mf(s,r,void 0),Ku(t,e,o,r)}if(a=(o&t.childLanes)!==0,ln||a){if(r=At,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fr(t,i),Gn(r,t,i,-1))}return pg(),r=mf(Error(H(421))),Ku(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Sb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,yn=Ci(i.nextSibling),In=e,Qe=!0,Hn=null,t!==null&&(Pn[xn++]=Rr,Pn[xn++]=Pr,Pn[xn++]=Ts,Rr=t.id,Pr=t.overflow,Ts=e),e=lg(e,r.children),e.flags|=4096,e)}function a_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yp(t.return,e,n)}function gf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function b1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Zt(t,e,r.children,n),r=Ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&a_(t,n,e);else if(t.tag===19)a_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ue(Ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gf(e,!0,n,null,s);break;case"together":gf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ac(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hb(t,e,n){switch(e.tag){case 3:k1(e),Vo();break;case 5:e1(e);break;case 1:cn(e.type)&&Zc(e);break;case 4:eg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ue(nd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ue(Ze,Ze.current&1),e.flags|=128,null):n&e.child.childLanes?C1(t,e,n):(Ue(Ze,Ze.current&1),t=Br(t,e,n),t!==null?t.sibling:null);Ue(Ze,Ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return b1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ue(Ze,Ze.current),r)break;return null;case 22:case 23:return e.lanes=0,S1(t,e,n)}return Br(t,e,n)}var R1,kp,P1,x1;R1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kp=function(){};P1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,cs(cr.current);var s=null;switch(n){case"input":i=Kf(t,i),r=Kf(t,r),s=[];break;case"select":i=tt({},i,{value:void 0}),r=tt({},r,{value:void 0}),s=[];break;case"textarea":i=Xf(t,i),r=Xf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xc)}Zf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ml.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ml.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&He("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};x1=function(t,e,n,r){n!==r&&(e.flags|=4)};function xa(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fb(t,e,n){var r=e.pendingProps;switch(Gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return cn(e.type)&&Jc(),Bt(e),null;case 3:return r=e.stateNode,Uo(),qe(un),qe(qt),ng(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Dp(Hn),Hn=null))),kp(t,e),Bt(e),null;case 5:tg(e);var i=cs(Cl.current);if(n=e.type,t!==null&&e.stateNode!=null)P1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Bt(e),null}if(t=cs(cr.current),qu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sr]=e,r[Al]=s,t=(e.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(i=0;i<Ba.length;i++)He(Ba[i],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":gy(r,s),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},He("invalid",r);break;case"textarea":yy(r,s),He("invalid",r)}Zf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wu(r.textContent,a,t),i=["children",""+a]):ml.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&He("scroll",r)}switch(n){case"input":Vu(r),vy(r,s,!0);break;case"textarea":Vu(r),_y(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sr]=e,t[Al]=r,R1(t,e,!1,!1),e.stateNode=t;e:{switch(o=ep(n,r),n){case"dialog":He("cancel",t),He("close",t),i=r;break;case"iframe":case"object":case"embed":He("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ba.length;i++)He(Ba[i],t);i=r;break;case"source":He("error",t),i=r;break;case"img":case"image":case"link":He("error",t),He("load",t),i=r;break;case"details":He("toggle",t),i=r;break;case"input":gy(t,r),i=Kf(t,r),He("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=tt({},r,{value:void 0}),He("invalid",t);break;case"textarea":yy(t,r),i=Xf(t,r),He("invalid",t);break;default:i=r}Zf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?lE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&oE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&gl(t,u):typeof u=="number"&&gl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ml.hasOwnProperty(s)?u!=null&&s==="onScroll"&&He("scroll",t):u!=null&&Nm(t,s,u,o))}switch(n){case"input":Vu(t),vy(t,r,!1);break;case"textarea":Vu(t),_y(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?So(t,!!r.multiple,s,!1):r.defaultValue!=null&&So(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)x1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=cs(Cl.current),cs(cr.current),qu(e)){if(r=e.stateNode,n=e.memoizedProps,r[sr]=e,(s=r.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:Wu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sr]=e,e.stateNode=r}return Bt(e),null;case 13:if(qe(Ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&yn!==null&&e.mode&1&&!(e.flags&128))QE(),Vo(),e.flags|=98560,s=!1;else if(s=qu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[sr]=e}else Vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Hn!==null&&(Dp(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ze.current&1?_t===0&&(_t=3):pg())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Uo(),kp(t,e),t===null&&Il(e.stateNode.containerInfo),Bt(e),null;case 10:return Xm(e.type._context),Bt(e),null;case 17:return cn(e.type)&&Jc(),Bt(e),null;case 19:if(qe(Ze),s=e.memoizedState,s===null)return Bt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xa(s,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sd(t),o!==null){for(e.flags|=128,xa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ue(Ze,Ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&ut()>Bo&&(e.flags|=128,r=!0,xa(s,!1),e.lanes=4194304)}else{if(!r)if(t=sd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Bt(e),null}else 2*ut()-s.renderingStartTime>Bo&&n!==1073741824&&(e.flags|=128,r=!0,xa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ut(),e.sibling=null,n=Ze.current,Ue(Ze,r?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return fg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function pb(t,e){switch(Gm(e),e.tag){case 1:return cn(e.type)&&Jc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Uo(),qe(un),qe(qt),ng(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tg(e),null;case 13:if(qe(Ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qe(Ze),null;case 4:return Uo(),null;case 10:return Xm(e.type._context),null;case 22:case 23:return fg(),null;case 24:return null;default:return null}}var Qu=!1,Ht=!1,mb=typeof WeakSet=="function"?WeakSet:Set,Y=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){st(t,e,r)}else n.current=null}function Cp(t,e,n){try{n()}catch(r){st(t,e,r)}}var l_=!1;function gb(t,e){if(cp=Kc,t=ME(),Wm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(dp={focusedElem:t,selectionRange:n},Kc=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,x=A.memoizedState,S=e.stateNode,y=S.getSnapshotBeforeUpdate(e.elementType===e.type?k:Bn(e.type,k),x);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(O){st(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return A=l_,l_=!1,A}function nl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cp(e,n,s)}i=i.next}while(i!==r)}}function Qd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N1(t){var e=t.alternate;e!==null&&(t.alternate=null,N1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sr],delete e[Al],delete e[pp],delete e[JC],delete e[ZC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O1(t){return t.tag===5||t.tag===3||t.tag===4}function u_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xc));else if(r!==4&&(t=t.child,t!==null))for(Rp(t,e,n),t=t.sibling;t!==null;)Rp(t,e,n),t=t.sibling}function Pp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pp(t,e,n),t=t.sibling;t!==null;)Pp(t,e,n),t=t.sibling}var Rt=null,zn=!1;function oi(t,e,n){for(n=n.child;n!==null;)D1(t,e,n),n=n.sibling}function D1(t,e,n){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(Bd,n)}catch{}switch(n.tag){case 5:Ht||yo(n,e);case 6:var r=Rt,i=zn;Rt=null,oi(t,e,n),Rt=r,zn=i,Rt!==null&&(zn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(zn?(t=Rt,n=n.stateNode,t.nodeType===8?uf(t.parentNode,n):t.nodeType===1&&uf(t,n),wl(t)):uf(Rt,n.stateNode));break;case 4:r=Rt,i=zn,Rt=n.stateNode.containerInfo,zn=!0,oi(t,e,n),Rt=r,zn=i;break;case 0:case 11:case 14:case 15:if(!Ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cp(n,e,o),i=i.next}while(i!==r)}oi(t,e,n);break;case 1:if(!Ht&&(yo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){st(n,e,a)}oi(t,e,n);break;case 21:oi(t,e,n);break;case 22:n.mode&1?(Ht=(r=Ht)||n.memoizedState!==null,oi(t,e,n),Ht=r):oi(t,e,n);break;default:oi(t,e,n)}}function c_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mb),e.forEach(function(r){var i=Ab.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,zn=!1;break e;case 3:Rt=a.stateNode.containerInfo,zn=!0;break e;case 4:Rt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Rt===null)throw Error(H(160));D1(s,o,i),Rt=null,zn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){st(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L1(e,t),e=e.sibling}function L1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),nr(t),r&4){try{nl(3,t,t.return),Qd(3,t)}catch(k){st(t,t.return,k)}try{nl(5,t,t.return)}catch(k){st(t,t.return,k)}}break;case 1:Fn(e,t),nr(t),r&512&&n!==null&&yo(n,n.return);break;case 5:if(Fn(e,t),nr(t),r&512&&n!==null&&yo(n,n.return),t.flags&32){var i=t.stateNode;try{gl(i,"")}catch(k){st(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rE(i,s),ep(a,o);var c=ep(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?lE(i,f):d==="dangerouslySetInnerHTML"?oE(i,f):d==="children"?gl(i,f):Nm(i,d,f,c)}switch(a){case"input":Qf(i,s);break;case"textarea":iE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?So(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?So(i,!!s.multiple,s.defaultValue,!0):So(i,!!s.multiple,s.multiple?[]:"",!1))}i[Al]=s}catch(k){st(t,t.return,k)}}break;case 6:if(Fn(e,t),nr(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){st(t,t.return,k)}}break;case 3:if(Fn(e,t),nr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wl(e.containerInfo)}catch(k){st(t,t.return,k)}break;case 4:Fn(e,t),nr(t);break;case 13:Fn(e,t),nr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dg=ut())),r&4&&c_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||d,Fn(e,t),Ht=c):Fn(e,t),nr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(f=Y=d;Y!==null;){switch(m=Y,E=m.child,m.tag){case 0:case 11:case 14:case 15:nl(4,m,m.return);break;case 1:yo(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){st(r,n,k)}}break;case 5:yo(m,m.return);break;case 22:if(m.memoizedState!==null){h_(f);continue}}E!==null?(E.return=m,Y=E):h_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=aE("display",o))}catch(k){st(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){st(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),nr(t),r&4&&c_(t);break;case 21:break;default:Fn(e,t),nr(t)}}function nr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O1(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gl(i,""),r.flags&=-33);var s=u_(t);Pp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=u_(t);Rp(t,a,o);break;default:throw Error(H(161))}}catch(u){st(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vb(t,e,n){Y=t,M1(t)}function M1(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ht;a=Qu;var c=Ht;if(Qu=o,(Ht=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?f_(i):u!==null?(u.return=o,Y=u):f_(i);for(;s!==null;)Y=s,M1(s),s=s.sibling;Y=i,Qu=a,Ht=c}d_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):d_(t)}}function d_(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Qd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&wl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Ht||e.flags&512&&bp(e)}catch(m){st(e,e.return,m)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function h_(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function f_(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qd(4,e)}catch(u){st(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){st(e,i,u)}}var s=e.return;try{bp(e)}catch(u){st(e,s,u)}break;case 5:var o=e.return;try{bp(e)}catch(u){st(e,o,u)}}}catch(u){st(e,e.return,u)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var yb=Math.ceil,ld=Qr.ReactCurrentDispatcher,ug=Qr.ReactCurrentOwner,On=Qr.ReactCurrentBatchConfig,be=0,At=null,ft=null,Nt=0,gn=0,_o=qi(0),_t=0,xl=null,Ss=0,Yd=0,cg=0,rl=null,on=null,dg=0,Bo=1/0,Cr=null,ud=!1,xp=null,Ri=null,Yu=!1,wi=null,cd=0,il=0,Np=null,kc=-1,Cc=0;function tn(){return be&6?ut():kc!==-1?kc:kc=ut()}function Pi(t){return t.mode&1?be&2&&Nt!==0?Nt&-Nt:tb.transition!==null?(Cc===0&&(Cc=wE()),Cc):(t=Le,t!==0||(t=window.event,t=t===void 0?16:CE(t.type)),t):1}function Gn(t,e,n,r){if(50<il)throw il=0,Np=null,Error(H(185));Xl(t,n,r),(!(be&2)||t!==At)&&(t===At&&(!(be&2)&&(Yd|=n),_t===4&&fi(t,Nt)),dn(t,r),n===1&&be===0&&!(e.mode&1)&&(Bo=ut()+500,qd&&Gi()))}function dn(t,e){var n=t.callbackNode;tC(t,e);var r=Gc(t,t===At?Nt:0);if(r===0)n!==null&&Ty(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ty(n),e===1)t.tag===0?eb(p_.bind(null,t)):qE(p_.bind(null,t)),YC(function(){!(be&6)&&Gi()}),n=null;else{switch(EE(r)){case 1:n=Vm;break;case 4:n=yE;break;case 16:n=qc;break;case 536870912:n=_E;break;default:n=qc}n=H1(n,V1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V1(t,e){if(kc=-1,Cc=0,be&6)throw Error(H(327));var n=t.callbackNode;if(Ro()&&t.callbackNode!==n)return null;var r=Gc(t,t===At?Nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=dd(t,r);else{e=r;var i=be;be|=2;var s=U1();(At!==t||Nt!==e)&&(Cr=null,Bo=ut()+500,gs(t,e));do try{Eb();break}catch(a){j1(t,a)}while(!0);Ym(),ld.current=s,be=i,ft!==null?e=0:(At=null,Nt=0,e=_t)}if(e!==0){if(e===2&&(i=sp(t),i!==0&&(r=i,e=Op(t,i))),e===1)throw n=xl,gs(t,0),fi(t,r),dn(t,ut()),n;if(e===6)fi(t,r);else{if(i=t.current.alternate,!(r&30)&&!_b(i)&&(e=dd(t,r),e===2&&(s=sp(t),s!==0&&(r=s,e=Op(t,s))),e===1))throw n=xl,gs(t,0),fi(t,r),dn(t,ut()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:ss(t,on,Cr);break;case 3:if(fi(t,r),(r&130023424)===r&&(e=dg+500-ut(),10<e)){if(Gc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fp(ss.bind(null,t,on,Cr),e);break}ss(t,on,Cr);break;case 4:if(fi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ut()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yb(r/1960))-r,10<r){t.timeoutHandle=fp(ss.bind(null,t,on,Cr),r);break}ss(t,on,Cr);break;case 5:ss(t,on,Cr);break;default:throw Error(H(329))}}}return dn(t,ut()),t.callbackNode===n?V1.bind(null,t):null}function Op(t,e){var n=rl;return t.current.memoizedState.isDehydrated&&(gs(t,e).flags|=256),t=dd(t,e),t!==2&&(e=on,on=n,e!==null&&Dp(e)),t}function Dp(t){on===null?on=t:on.push.apply(on,t)}function _b(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fi(t,e){for(e&=~cg,e&=~Yd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),r=1<<n;t[n]=-1,e&=~r}}function p_(t){if(be&6)throw Error(H(327));Ro();var e=Gc(t,0);if(!(e&1))return dn(t,ut()),null;var n=dd(t,e);if(t.tag!==0&&n===2){var r=sp(t);r!==0&&(e=r,n=Op(t,r))}if(n===1)throw n=xl,gs(t,0),fi(t,e),dn(t,ut()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ss(t,on,Cr),dn(t,ut()),null}function hg(t,e){var n=be;be|=1;try{return t(e)}finally{be=n,be===0&&(Bo=ut()+500,qd&&Gi())}}function As(t){wi!==null&&wi.tag===0&&!(be&6)&&Ro();var e=be;be|=1;var n=On.transition,r=Le;try{if(On.transition=null,Le=1,t)return t()}finally{Le=r,On.transition=n,be=e,!(be&6)&&Gi()}}function fg(){gn=_o.current,qe(_o)}function gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QC(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(Gm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jc();break;case 3:Uo(),qe(un),qe(qt),ng();break;case 5:tg(r);break;case 4:Uo();break;case 13:qe(Ze);break;case 19:qe(Ze);break;case 10:Xm(r.type._context);break;case 22:case 23:fg()}n=n.return}if(At=t,ft=t=xi(t.current,null),Nt=gn=e,_t=0,xl=null,cg=Yd=Ss=0,on=rl=null,us!==null){for(e=0;e<us.length;e++)if(n=us[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}us=null}return t}function j1(t,e){do{var n=ft;try{if(Ym(),Ic.current=ad,od){for(var r=et.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}od=!1}if(Is=0,St=vt=et=null,tl=!1,bl=0,ug.current=null,n===null||n.return===null){_t=1,xl=e,ft=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Nt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=t_(o);if(E!==null){E.flags&=-257,n_(E,o,a,s,e),E.mode&1&&e_(s,c,e),e=E,u=c;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){e_(s,c,e),pg();break e}u=Error(H(426))}}else if(Qe&&a.mode&1){var x=t_(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),n_(x,o,a,s,e),Km(Fo(u,a));break e}}s=u=Fo(u,a),_t!==4&&(_t=2),rl===null?rl=[s]:rl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=E1(s,u,e);Ky(s,S);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Ri===null||!Ri.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=T1(s,a,e);Ky(s,O);break e}}s=s.return}while(s!==null)}B1(n)}catch(F){e=F,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(!0)}function U1(){var t=ld.current;return ld.current=ad,t===null?ad:t}function pg(){(_t===0||_t===3||_t===2)&&(_t=4),At===null||!(Ss&268435455)&&!(Yd&268435455)||fi(At,Nt)}function dd(t,e){var n=be;be|=2;var r=U1();(At!==t||Nt!==e)&&(Cr=null,gs(t,e));do try{wb();break}catch(i){j1(t,i)}while(!0);if(Ym(),be=n,ld.current=r,ft!==null)throw Error(H(261));return At=null,Nt=0,_t}function wb(){for(;ft!==null;)F1(ft)}function Eb(){for(;ft!==null&&!qk();)F1(ft)}function F1(t){var e=$1(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?B1(t):ft=e,ug.current=null}function B1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pb(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,ft=null;return}}else if(n=fb(n,e,gn),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);_t===0&&(_t=5)}function ss(t,e,n){var r=Le,i=On.transition;try{On.transition=null,Le=1,Tb(t,e,n,r)}finally{On.transition=i,Le=r}return null}function Tb(t,e,n,r){do Ro();while(wi!==null);if(be&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nC(t,s),t===At&&(ft=At=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yu||(Yu=!0,H1(qc,function(){return Ro(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=Le;Le=1;var a=be;be|=4,ug.current=null,gb(t,n),L1(n,t),zC(dp),Kc=!!cp,dp=cp=null,t.current=n,vb(n),Gk(),be=a,Le=o,On.transition=s}else t.current=n;if(Yu&&(Yu=!1,wi=t,cd=i),s=t.pendingLanes,s===0&&(Ri=null),Yk(n.stateNode),dn(t,ut()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ud)throw ud=!1,t=xp,xp=null,t;return cd&1&&t.tag!==0&&Ro(),s=t.pendingLanes,s&1?t===Np?il++:(il=0,Np=t):il=0,Gi(),null}function Ro(){if(wi!==null){var t=EE(cd),e=On.transition,n=Le;try{if(On.transition=null,Le=16>t?16:t,wi===null)var r=!1;else{if(t=wi,wi=null,cd=0,be&6)throw Error(H(331));var i=be;for(be|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:nl(8,d,s)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var m=d.sibling,E=d.return;if(N1(d),d===c){Y=null;break}if(m!==null){m.return=E,Y=m;break}Y=E}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var x=k.sibling;k.sibling=null,k=x}while(k!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:nl(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,Y=S;break e}Y=s.return}}var y=t.current;for(Y=y;Y!==null;){o=Y;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,Y=I;else e:for(o=y;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qd(9,a)}}catch(F){st(a,a.return,F)}if(a===o){Y=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,Y=O;break e}Y=a.return}}if(be=i,Gi(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(Bd,t)}catch{}r=!0}return r}finally{Le=n,On.transition=e}}return!1}function m_(t,e,n){e=Fo(n,e),e=E1(t,e,1),t=bi(t,e,1),e=tn(),t!==null&&(Xl(t,1,e),dn(t,e))}function st(t,e,n){if(t.tag===3)m_(t,t,n);else for(;e!==null;){if(e.tag===3){m_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ri===null||!Ri.has(r))){t=Fo(n,t),t=T1(e,t,1),e=bi(e,t,1),t=tn(),e!==null&&(Xl(e,1,t),dn(e,t));break}}e=e.return}}function Ib(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Nt&n)===n&&(_t===4||_t===3&&(Nt&130023424)===Nt&&500>ut()-dg?gs(t,0):cg|=n),dn(t,e)}function z1(t,e){e===0&&(t.mode&1?(e=Fu,Fu<<=1,!(Fu&130023424)&&(Fu=4194304)):e=1);var n=tn();t=Fr(t,e),t!==null&&(Xl(t,e,n),dn(t,n))}function Sb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),z1(t,n)}function Ab(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),z1(t,n)}var $1;$1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,hb(t,e,n);ln=!!(t.flags&131072)}else ln=!1,Qe&&e.flags&1048576&&GE(e,td,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ac(t,e),t=e.pendingProps;var i=Mo(e,qt.current);bo(e,n),i=ig(null,e,r,t,i,n);var s=sg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(r)?(s=!0,Zc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zm(e),i.updater=Kd,e.stateNode=i,i._reactInternals=e,wp(e,r,t,n),e=Ip(null,e,r,!0,s,n)):(e.tag=0,Qe&&s&&qm(e),Zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ac(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Cb(r),t=Bn(r,t),i){case 0:e=Tp(null,e,r,t,n);break e;case 1:e=s_(null,e,r,t,n);break e;case 11:e=r_(null,e,r,t,n);break e;case 14:e=i_(null,e,r,Bn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),Tp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),s_(t,e,r,i,n);case 3:e:{if(k1(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ZE(t,e),id(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fo(Error(H(423)),e),e=o_(t,e,r,n,i);break e}else if(r!==i){i=Fo(Error(H(424)),e),e=o_(t,e,r,n,i);break e}else for(yn=Ci(e.stateNode.containerInfo.firstChild),In=e,Qe=!0,Hn=null,n=XE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vo(),r===i){e=Br(t,e,n);break e}Zt(t,e,r,n)}e=e.child}return e;case 5:return e1(e),t===null&&vp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hp(r,i)?o=null:s!==null&&hp(r,s)&&(e.flags|=32),A1(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&vp(e),null;case 13:return C1(t,e,n);case 4:return eg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jo(e,null,r,n):Zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),r_(t,e,r,i,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ue(nd,r._currentValue),r._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===i.children&&!un.current){e=Br(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Dr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bo(e,n),i=Dn(i),r=r(i),e.flags|=1,Zt(t,e,r,n),e.child;case 14:return r=e.type,i=Bn(r,e.pendingProps),i=Bn(r.type,i),i_(t,e,r,i,n);case 15:return I1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),Ac(t,e),e.tag=1,cn(r)?(t=!0,Zc(e)):t=!1,bo(e,n),w1(e,r,i),wp(e,r,i,n),Ip(null,e,r,!0,t,n);case 19:return b1(t,e,n);case 22:return S1(t,e,n)}throw Error(H(156,e.tag))};function H1(t,e){return vE(t,e)}function kb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,r){return new kb(t,e,n,r)}function mg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cb(t){if(typeof t=="function")return mg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dm)return 11;if(t===Lm)return 14}return 2}function xi(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case lo:return vs(n.children,i,s,e);case Om:o=8,i|=8;break;case Hf:return t=Nn(12,n,e,i|2),t.elementType=Hf,t.lanes=s,t;case Wf:return t=Nn(13,n,e,i),t.elementType=Wf,t.lanes=s,t;case qf:return t=Nn(19,n,e,i),t.elementType=qf,t.lanes=s,t;case eE:return Xd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jw:o=10;break e;case Zw:o=9;break e;case Dm:o=11;break e;case Lm:o=14;break e;case ci:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vs(t,e,n,r){return t=Nn(7,t,r,e),t.lanes=n,t}function Xd(t,e,n,r){return t=Nn(22,t,r,e),t.elementType=eE,t.lanes=n,t.stateNode={isHidden:!1},t}function vf(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function yf(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xh(0),this.expirationTimes=Xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gg(t,e,n,r,i,s,o,a,u){return t=new bb(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zm(s),t}function Rb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ao,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function W1(t){if(!t)return Vi;t=t._reactInternals;e:{if(js(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(cn(n))return WE(t,n,e)}return e}function q1(t,e,n,r,i,s,o,a,u){return t=gg(n,r,!0,t,i,s,o,a,u),t.context=W1(null),n=t.current,r=tn(),i=Pi(n),s=Dr(r,i),s.callback=e??null,bi(n,s,i),t.current.lanes=i,Xl(t,i,r),dn(t,r),t}function Jd(t,e,n,r){var i=e.current,s=tn(),o=Pi(i);return n=W1(n),e.context===null?e.context=n:e.pendingContext=n,e=Dr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=bi(i,e,o),t!==null&&(Gn(t,i,o,s),Tc(t,i,o)),o}function hd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function g_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vg(t,e){g_(t,e),(t=t.alternate)&&g_(t,e)}function Pb(){return null}var G1=typeof reportError=="function"?reportError:function(t){console.error(t)};function yg(t){this._internalRoot=t}Zd.prototype.render=yg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Jd(t,e,null,null)};Zd.prototype.unmount=yg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;As(function(){Jd(null,t,null,null)}),e[Ur]=null}};function Zd(t){this._internalRoot=t}Zd.prototype.unstable_scheduleHydration=function(t){if(t){var e=SE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hi.length&&e!==0&&e<hi[n].priority;n++);hi.splice(n,0,t),n===0&&kE(t)}};function _g(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function v_(){}function xb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=hd(o);s.call(c)}}var o=q1(e,r,t,0,null,!1,!1,"",v_);return t._reactRootContainer=o,t[Ur]=o.current,Il(t.nodeType===8?t.parentNode:t),As(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=hd(u);a.call(c)}}var u=gg(t,0,!1,null,null,!1,!1,"",v_);return t._reactRootContainer=u,t[Ur]=u.current,Il(t.nodeType===8?t.parentNode:t),As(function(){Jd(e,u,n,r)}),u}function th(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=hd(o);a.call(u)}}Jd(e,o,t,i)}else o=xb(n,e,t,i,r);return hd(o)}TE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fa(e.pendingLanes);n!==0&&(jm(e,n|1),dn(e,ut()),!(be&6)&&(Bo=ut()+500,Gi()))}break;case 13:As(function(){var r=Fr(t,1);if(r!==null){var i=tn();Gn(r,t,1,i)}}),vg(t,1)}};Um=function(t){if(t.tag===13){var e=Fr(t,134217728);if(e!==null){var n=tn();Gn(e,t,134217728,n)}vg(t,134217728)}};IE=function(t){if(t.tag===13){var e=Pi(t),n=Fr(t,e);if(n!==null){var r=tn();Gn(n,t,e,r)}vg(t,e)}};SE=function(){return Le};AE=function(t,e){var n=Le;try{return Le=t,e()}finally{Le=n}};np=function(t,e,n){switch(e){case"input":if(Qf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wd(r);if(!i)throw Error(H(90));nE(r),Qf(r,i)}}}break;case"textarea":iE(t,n);break;case"select":e=n.value,e!=null&&So(t,!!n.multiple,e,!1)}};dE=hg;hE=As;var Nb={usingClientEntryPoint:!1,Events:[Zl,fo,Wd,uE,cE,hg]},Na={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ob={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mE(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||Pb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Bd=Xu.inject(Ob),ur=Xu}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nb;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_g(e))throw Error(H(200));return Rb(t,e,null,n)};An.createRoot=function(t,e){if(!_g(t))throw Error(H(299));var n=!1,r="",i=G1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gg(t,1,!1,null,null,n,!1,r,i),t[Ur]=e.current,Il(t.nodeType===8?t.parentNode:t),new yg(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=mE(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return As(t)};An.hydrate=function(t,e,n){if(!eh(e))throw Error(H(200));return th(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!_g(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=G1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q1(e,null,t,1,n??null,i,!1,s,o),t[Ur]=e.current,Il(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zd(e)};An.render=function(t,e,n){if(!eh(e))throw Error(H(200));return th(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!eh(t))throw Error(H(40));return t._reactRootContainer?(As(function(){th(null,null,t,!1,function(){t._reactRootContainer=null,t[Ur]=null})}),!0):!1};An.unstable_batchedUpdates=hg;An.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!eh(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return th(t,e,n,!1,r)};An.version="18.3.1-next-f1338f8080-20240426";function K1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K1)}catch(t){console.error(t)}}K1(),Kw.exports=An;var wg=Kw.exports;const Db=Am(wg),Lb=Mw({__proto__:null,default:Db},[wg]);var y_=wg;zf.createRoot=y_.createRoot,zf.hydrateRoot=y_.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Je(){return Je=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Je.apply(this,arguments)}var dt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(dt||(dt={}));const __="popstate";function Mb(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=Yr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Nl("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:tu(s))}function r(i,s){ks(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return jb(e,n,r,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ks(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vb(){return Math.random().toString(36).substr(2,8)}function w_(t,e){return{usr:t.state,key:t.key,idx:e}}function Nl(t,e,n,r){return n===void 0&&(n=null),Je({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Yr(e):e,{state:n,key:e&&e.key||r||Vb()})}function tu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Yr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function jb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=dt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Je({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=dt.Pop;let x=d(),S=x==null?null:x-c;c=x,u&&u({action:a,location:k.location,delta:S})}function m(x,S){a=dt.Push;let y=Nl(k.location,x,S);n&&n(y,x),c=d()+1;let I=w_(y,c),O=k.createHref(y);try{o.pushState(I,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&u&&u({action:a,location:k.location,delta:1})}function E(x,S){a=dt.Replace;let y=Nl(k.location,x,S);n&&n(y,x),c=d();let I=w_(y,c),O=k.createHref(y);o.replaceState(I,"",O),s&&u&&u({action:a,location:k.location,delta:0})}function A(x){let S=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof x=="string"?x:tu(x);return y=y.replace(/ $/,"%20"),Ee(S,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,S)}let k={get action(){return a},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(__,f),u=x,()=>{i.removeEventListener(__,f),u=null}},createHref(x){return e(i,x)},createURL:A,encodeLocation(x){let S=A(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:E,go(x){return o.go(x)}};return k}var je;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(je||(je={}));const Ub=new Set(["lazy","caseSensitive","path","id","index","children"]);function Fb(t){return t.index===!0}function Ol(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],a=typeof i.id=="string"?i.id:o.join("-");if(Ee(i.index!==!0||!i.children,"Cannot specify children on an index route"),Ee(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Fb(i)){let u=Je({},i,e(i),{id:a});return r[a]=u,u}else{let u=Je({},i,e(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=Ol(i.children,e,o,r)),u}})}function as(t,e,n){return n===void 0&&(n="/"),Rc(t,e,n,!1)}function Rc(t,e,n,r){let i=typeof e=="string"?Yr(e):e,s=nu(i.pathname||"/",n);if(s==null)return null;let o=Q1(t);zb(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=Zb(s);a=Xb(o[u],c,r)}return a}function Bb(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Q1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ee(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ni([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Q1(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Qb(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of Y1(s.path))i(s,o,u)}),e}function Y1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Y1(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function zb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Yb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $b=/^:[\w-]+$/,Hb=3,Wb=2,qb=1,Gb=10,Kb=-2,E_=t=>t==="*";function Qb(t,e){let n=t.split("/"),r=n.length;return n.some(E_)&&(r+=Kb),e&&(r+=Wb),n.filter(i=>!E_(i)).reduce((i,s)=>i+($b.test(s)?Hb:s===""?qb:Gb),r)}function Yb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Xb(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=T_({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=T_({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ni([s,f.pathname]),pathnameBase:nR(Ni([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Ni([s,f.pathnameBase]))}return o}function T_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Jb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let k=a[f]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const A=a[f];return E&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Jb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ks(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Zb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ks(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function nu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function eR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yr(t):t;return{pathname:n?n.startsWith("/")?n:tR(n,e):e,search:rR(r),hash:iR(i)}}function tR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _f(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function X1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function J1(t,e){let n=X1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Z1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Yr(t):(i=Je({},t),Ee(!i.pathname||!i.pathname.includes("?"),_f("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),_f("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),_f("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=eR(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ni=t=>t.join("/").replace(/\/\/+/g,"/"),nR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,iR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Eg{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function nh(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const eT=["post","put","patch","delete"],sR=new Set(eT),oR=["get",...eT],aR=new Set(oR),lR=new Set([301,302,303,307,308]),uR=new Set([307,308]),wf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},cR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Oa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Tg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dR=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),tT="remix-router-transitions";function hR(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Ee(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let N=t.detectErrorBoundary;i=L=>({hasErrorBoundary:N(L)})}else i=dR;let s={},o=Ol(t.routes,i,void 0,s),a,u=t.basename||"/",c=t.unstable_dataStrategy||vR,d=t.unstable_patchRoutesOnMiss,f=Je({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),m=null,E=new Set,A=null,k=null,x=null,S=t.hydrationData!=null,y=as(o,t.history.location,u),I=null;if(y==null&&!d){let N=Jt(404,{pathname:t.history.location.pathname}),{matches:L,route:V}=N_(o);y=L,I={[V.id]:N}}y&&d&&Ir(y,o,t.history.location.pathname).active&&(y=null);let O;if(!y)O=!1,y=[];else if(y.some(N=>N.route.lazy))O=!1;else if(!y.some(N=>N.route.loader))O=!0;else if(f.v7_partialHydration){let N=t.hydrationData?t.hydrationData.loaderData:null,L=t.hydrationData?t.hydrationData.errors:null,V=B=>B.route.loader?typeof B.route.loader=="function"&&B.route.loader.hydrate===!0?!1:N&&N[B.route.id]!==void 0||L&&L[B.route.id]!==void 0:!0;if(L){let B=y.findIndex(K=>L[K.route.id]!==void 0);O=y.slice(0,B+1).every(V)}else O=y.every(V)}else O=t.hydrationData!=null;let F,P={historyAction:t.history.action,location:t.history.location,matches:y,initialized:O,navigation:wf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||I,fetchers:new Map,blockers:new Map},T=dt.Pop,v=!1,_,C=!1,R=new Map,D=null,b=!1,ye=!1,at=[],Yt=[],ge=new Map,W=0,ee=-1,ie=new Map,me=new Set,ce=new Map,ve=new Map,Pe=new Set,Me=new Map,Be=new Map,kt=new Map,Xi=!1;function Mh(){if(m=t.history.listen(N=>{let{action:L,location:V,delta:B}=N;if(Xi){Xi=!1;return}ks(Be.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=fa({currentLocation:P.location,nextLocation:V,historyAction:L});if(K&&B!=null){Xi=!0,t.history.go(B*-1),Zi(K,{state:"blocked",location:V,proceed(){Zi(K,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),t.history.go(B)},reset(){let Z=new Map(P.blockers);Z.set(K,Oa),pt({blockers:Z})}});return}return Zn(L,V)}),n){PR(e,R);let N=()=>xR(e,R);e.addEventListener("pagehide",N),D=()=>e.removeEventListener("pagehide",N)}return P.initialized||Zn(dt.Pop,P.location,{initialHydration:!0}),F}function $s(){m&&m(),D&&D(),E.clear(),_&&_.abort(),P.fetchers.forEach((N,L)=>qs(L)),P.blockers.forEach((N,L)=>Ks(L))}function Hs(N){return E.add(N),()=>E.delete(N)}function pt(N,L){L===void 0&&(L={}),P=Je({},P,N);let V=[],B=[];f.v7_fetcherPersist&&P.fetchers.forEach((K,Z)=>{K.state==="idle"&&(Pe.has(Z)?B.push(Z):V.push(Z))}),[...E].forEach(K=>K(P,{deletedFetchers:B,unstable_viewTransitionOpts:L.viewTransitionOpts,unstable_flushSync:L.flushSync===!0})),f.v7_fetcherPersist&&(V.forEach(K=>P.fetchers.delete(K)),B.forEach(K=>qs(K)))}function Jn(N,L,V){var B,K;let{flushSync:Z}=V===void 0?{}:V,ae=P.actionData!=null&&P.navigation.formMethod!=null&&$n(P.navigation.formMethod)&&P.navigation.state==="loading"&&((B=N.state)==null?void 0:B._isRedirect)!==!0,q;L.actionData?Object.keys(L.actionData).length>0?q=L.actionData:q=null:ae?q=P.actionData:q=null;let de=L.loaderData?P_(P.loaderData,L.loaderData,L.matches||[],L.errors):P.loaderData,ne=P.blockers;ne.size>0&&(ne=new Map(ne),ne.forEach((Ae,Oe)=>ne.set(Oe,Oa)));let te=v===!0||P.navigation.formMethod!=null&&$n(P.navigation.formMethod)&&((K=N.state)==null?void 0:K._isRedirect)!==!0;a&&(o=a,a=void 0),b||T===dt.Pop||(T===dt.Push?t.history.push(N,N.state):T===dt.Replace&&t.history.replace(N,N.state));let _e;if(T===dt.Pop){let Ae=R.get(P.location.pathname);Ae&&Ae.has(N.pathname)?_e={currentLocation:P.location,nextLocation:N}:R.has(N.pathname)&&(_e={currentLocation:N,nextLocation:P.location})}else if(C){let Ae=R.get(P.location.pathname);Ae?Ae.add(N.pathname):(Ae=new Set([N.pathname]),R.set(P.location.pathname,Ae)),_e={currentLocation:P.location,nextLocation:N}}pt(Je({},L,{actionData:q,loaderData:de,historyAction:T,location:N,initialized:!0,navigation:wf,revalidation:"idle",restoreScrollPosition:ma(N,L.matches||P.matches),preventScrollReset:te,blockers:ne}),{viewTransitionOpts:_e,flushSync:Z===!0}),T=dt.Pop,v=!1,C=!1,b=!1,ye=!1,at=[],Yt=[]}async function Ws(N,L){if(typeof N=="number"){t.history.go(N);return}let V=Lp(P.location,P.matches,u,f.v7_prependBasename,N,f.v7_relativeSplatPath,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:B,submission:K,error:Z}=I_(f.v7_normalizeFormMethod,!1,V,L),ae=P.location,q=Nl(P.location,B,L&&L.state);q=Je({},q,t.history.encodeLocation(q));let de=L&&L.replace!=null?L.replace:void 0,ne=dt.Push;de===!0?ne=dt.Replace:de===!1||K!=null&&$n(K.formMethod)&&K.formAction===P.location.pathname+P.location.search&&(ne=dt.Replace);let te=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,_e=(L&&L.unstable_flushSync)===!0,Ae=fa({currentLocation:ae,nextLocation:q,historyAction:ne});if(Ae){Zi(Ae,{state:"blocked",location:q,proceed(){Zi(Ae,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),Ws(N,L)},reset(){let Oe=new Map(P.blockers);Oe.set(Ae,Oa),pt({blockers:Oe})}});return}return await Zn(ne,q,{submission:K,pendingError:Z,preventScrollReset:te,replace:L&&L.replace,enableViewTransition:L&&L.unstable_viewTransition,flushSync:_e})}function aa(){if(gt(),pt({revalidation:"loading"}),P.navigation.state!=="submitting"){if(P.navigation.state==="idle"){Zn(P.historyAction,P.location,{startUninterruptedRevalidation:!0});return}Zn(T||P.historyAction,P.navigation.location,{overrideNavigation:P.navigation})}}async function Zn(N,L,V){_&&_.abort(),_=null,T=N,b=(V&&V.startUninterruptedRevalidation)===!0,Qs(P.location,P.matches),v=(V&&V.preventScrollReset)===!0,C=(V&&V.enableViewTransition)===!0;let B=a||o,K=V&&V.overrideNavigation,Z=as(B,L,u),ae=(V&&V.flushSync)===!0,q=Ir(Z,B,L.pathname);if(q.active&&q.matches&&(Z=q.matches),!Z){let{error:ke,notFoundMatches:lt,route:Xe}=Er(L.pathname);Jn(L,{matches:lt,loaderData:{},errors:{[Xe.id]:ke}},{flushSync:ae});return}if(P.initialized&&!ye&&IR(P.location,L)&&!(V&&V.submission&&$n(V.submission.formMethod))){Jn(L,{matches:Z},{flushSync:ae});return}_=new AbortController;let de=to(t.history,L,_.signal,V&&V.submission),ne;if(V&&V.pendingError)ne=[sl(Z).route.id,{type:je.error,error:V.pendingError}];else if(V&&V.submission&&$n(V.submission.formMethod)){let ke=await Vh(de,L,V.submission,Z,q.active,{replace:V.replace,flushSync:ae});if(ke.shortCircuited)return;if(ke.pendingActionResult){let[lt,Xe]=ke.pendingActionResult;if(vn(Xe)&&nh(Xe.error)&&Xe.error.status===404){_=null,Jn(L,{matches:ke.matches,loaderData:{},errors:{[lt]:Xe.error}});return}}Z=ke.matches||Z,ne=ke.pendingActionResult,K=Ef(L,V.submission),ae=!1,q.active=!1,de=to(t.history,de.url,de.signal)}let{shortCircuited:te,matches:_e,loaderData:Ae,errors:Oe}=await jh(de,L,Z,q.active,K,V&&V.submission,V&&V.fetcherSubmission,V&&V.replace,V&&V.initialHydration===!0,ae,ne);te||(_=null,Jn(L,Je({matches:_e||Z},x_(ne),{loaderData:Ae,errors:Oe})))}async function Vh(N,L,V,B,K,Z){Z===void 0&&(Z={}),gt();let ae=bR(L,V);if(pt({navigation:ae},{flushSync:Z.flushSync===!0}),K){let ne=await ts(B,L.pathname,N.signal);if(ne.type==="aborted")return{shortCircuited:!0};if(ne.type==="error"){let{error:te,notFoundMatches:_e,route:Ae}=ti(L.pathname,ne);return{matches:_e,pendingActionResult:[Ae.id,{type:je.error,error:te}]}}else if(ne.matches)B=ne.matches;else{let{notFoundMatches:te,error:_e,route:Ae}=Er(L.pathname);return{matches:te,pendingActionResult:[Ae.id,{type:je.error,error:_e}]}}}let q,de=za(B,L);if(!de.route.action&&!de.route.lazy)q={type:je.error,error:Jt(405,{method:N.method,pathname:L.pathname,routeId:de.route.id})};else if(q=(await ei("action",N,[de],B))[0],N.signal.aborted)return{shortCircuited:!0};if(hs(q)){let ne;return Z&&Z.replace!=null?ne=Z.replace:ne=C_(q.response.headers.get("Location"),new URL(N.url),u)===P.location.pathname+P.location.search,await wr(N,q,{submission:V,replace:ne}),{shortCircuited:!0}}if(ds(q))throw Jt(400,{type:"defer-action"});if(vn(q)){let ne=sl(B,de.route.id);return(Z&&Z.replace)!==!0&&(T=dt.Push),{matches:B,pendingActionResult:[ne.route.id,q]}}return{matches:B,pendingActionResult:[de.route.id,q]}}async function jh(N,L,V,B,K,Z,ae,q,de,ne,te){let _e=K||Ef(L,Z),Ae=Z||ae||L_(_e),Oe=!b&&(!f.v7_partialHydration||!de);if(B){if(Oe){let ze=la(te);pt(Je({navigation:_e},ze!==void 0?{actionData:ze}:{}),{flushSync:ne})}let pe=await ts(V,L.pathname,N.signal);if(pe.type==="aborted")return{shortCircuited:!0};if(pe.type==="error"){let{error:ze,notFoundMatches:Vt,route:De}=ti(L.pathname,pe);return{matches:Vt,loaderData:{},errors:{[De.id]:ze}}}else if(pe.matches)V=pe.matches;else{let{error:ze,notFoundMatches:Vt,route:De}=Er(L.pathname);return{matches:Vt,loaderData:{},errors:{[De.id]:ze}}}}let ke=a||o,[lt,Xe]=S_(t.history,P,V,Ae,L,f.v7_partialHydration&&de===!0,f.unstable_skipActionErrorRevalidation,ye,at,Yt,Pe,ce,me,ke,u,te);if(es(pe=>!(V&&V.some(ze=>ze.route.id===pe))||lt&&lt.some(ze=>ze.route.id===pe)),ee=++W,lt.length===0&&Xe.length===0){let pe=Gs();return Jn(L,Je({matches:V,loaderData:{},errors:te&&vn(te[1])?{[te[0]]:te[1].error}:null},x_(te),pe?{fetchers:new Map(P.fetchers)}:{}),{flushSync:ne}),{shortCircuited:!0}}if(Oe){let pe={};if(!B){pe.navigation=_e;let ze=la(te);ze!==void 0&&(pe.actionData=ze)}Xe.length>0&&(pe.fetchers=ua(Xe)),pt(pe,{flushSync:ne})}Xe.forEach(pe=>{ge.has(pe.key)&&Vn(pe.key),pe.controller&&ge.set(pe.key,pe.controller)});let ni=()=>Xe.forEach(pe=>Vn(pe.key));_&&_.signal.addEventListener("abort",ni);let{loaderResults:er,fetcherResults:jn}=await mt(P.matches,V,lt,Xe,N);if(N.signal.aborted)return{shortCircuited:!0};_&&_.signal.removeEventListener("abort",ni),Xe.forEach(pe=>ge.delete(pe.key));let Sr=O_([...er,...jn]);if(Sr){if(Sr.idx>=lt.length){let pe=Xe[Sr.idx-lt.length].key;me.add(pe)}return await wr(N,Sr.result,{replace:q}),{shortCircuited:!0}}let{loaderData:tr,errors:Mt}=R_(P,V,lt,er,te,Xe,jn,Me);Me.forEach((pe,ze)=>{pe.subscribe(Vt=>{(Vt||pe.done)&&Me.delete(ze)})}),f.v7_partialHydration&&de&&P.errors&&Object.entries(P.errors).filter(pe=>{let[ze]=pe;return!lt.some(Vt=>Vt.route.id===ze)}).forEach(pe=>{let[ze,Vt]=pe;Mt=Object.assign(Mt||{},{[ze]:Vt})});let Rn=Gs(),ri=Tu(ee),Ys=Rn||ri||Xe.length>0;return Je({matches:V,loaderData:tr,errors:Mt},Ys?{fetchers:new Map(P.fetchers)}:{})}function la(N){if(N&&!vn(N[1]))return{[N[0]]:N[1].data};if(P.actionData)return Object.keys(P.actionData).length===0?null:P.actionData}function ua(N){return N.forEach(L=>{let V=P.fetchers.get(L.key),B=Da(void 0,V?V.data:void 0);P.fetchers.set(L.key,B)}),new Map(P.fetchers)}function Eu(N,L,V,B){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ge.has(N)&&Vn(N);let K=(B&&B.unstable_flushSync)===!0,Z=a||o,ae=Lp(P.location,P.matches,u,f.v7_prependBasename,V,f.v7_relativeSplatPath,L,B==null?void 0:B.relative),q=as(Z,ae,u),de=Ir(q,Z,ae);if(de.active&&de.matches&&(q=de.matches),!q){bn(N,L,Jt(404,{pathname:ae}),{flushSync:K});return}let{path:ne,submission:te,error:_e}=I_(f.v7_normalizeFormMethod,!0,ae,B);if(_e){bn(N,L,_e,{flushSync:K});return}let Ae=za(q,ne);if(v=(B&&B.preventScrollReset)===!0,te&&$n(te.formMethod)){Uh(N,L,ne,Ae,q,de.active,K,te);return}ce.set(N,{routeId:L,path:ne}),ca(N,L,ne,Ae,q,de.active,K,te)}async function Uh(N,L,V,B,K,Z,ae,q){gt(),ce.delete(N);function de(De){if(!De.route.action&&!De.route.lazy){let pn=Jt(405,{method:q.formMethod,pathname:V,routeId:L});return bn(N,L,pn,{flushSync:ae}),!0}return!1}if(!Z&&de(B))return;let ne=P.fetchers.get(N);fn(N,RR(q,ne),{flushSync:ae});let te=new AbortController,_e=to(t.history,V,te.signal,q);if(Z){let De=await ts(K,V,_e.signal);if(De.type==="aborted")return;if(De.type==="error"){let{error:pn}=ti(V,De);bn(N,L,pn,{flushSync:ae});return}else if(De.matches){if(K=De.matches,B=za(K,V),de(B))return}else{bn(N,L,Jt(404,{pathname:V}),{flushSync:ae});return}}ge.set(N,te);let Ae=W,ke=(await ei("action",_e,[B],K))[0];if(_e.signal.aborted){ge.get(N)===te&&ge.delete(N);return}if(f.v7_fetcherPersist&&Pe.has(N)){if(hs(ke)||vn(ke)){fn(N,ui(void 0));return}}else{if(hs(ke))if(ge.delete(N),ee>Ae){fn(N,ui(void 0));return}else return me.add(N),fn(N,Da(q)),wr(_e,ke,{fetcherSubmission:q});if(vn(ke)){bn(N,L,ke.error);return}}if(ds(ke))throw Jt(400,{type:"defer-action"});let lt=P.navigation.location||P.location,Xe=to(t.history,lt,te.signal),ni=a||o,er=P.navigation.state!=="idle"?as(ni,P.navigation.location,u):P.matches;Ee(er,"Didn't find any matches after fetcher action");let jn=++W;ie.set(N,jn);let Sr=Da(q,ke.data);P.fetchers.set(N,Sr);let[tr,Mt]=S_(t.history,P,er,q,lt,!1,f.unstable_skipActionErrorRevalidation,ye,at,Yt,Pe,ce,me,ni,u,[B.route.id,ke]);Mt.filter(De=>De.key!==N).forEach(De=>{let pn=De.key,ga=P.fetchers.get(pn),Su=Da(void 0,ga?ga.data:void 0);P.fetchers.set(pn,Su),ge.has(pn)&&Vn(pn),De.controller&&ge.set(pn,De.controller)}),pt({fetchers:new Map(P.fetchers)});let Rn=()=>Mt.forEach(De=>Vn(De.key));te.signal.addEventListener("abort",Rn);let{loaderResults:ri,fetcherResults:Ys}=await mt(P.matches,er,tr,Mt,Xe);if(te.signal.aborted)return;te.signal.removeEventListener("abort",Rn),ie.delete(N),ge.delete(N),Mt.forEach(De=>ge.delete(De.key));let pe=O_([...ri,...Ys]);if(pe){if(pe.idx>=tr.length){let De=Mt[pe.idx-tr.length].key;me.add(De)}return wr(Xe,pe.result)}let{loaderData:ze,errors:Vt}=R_(P,P.matches,tr,ri,void 0,Mt,Ys,Me);if(P.fetchers.has(N)){let De=ui(ke.data);P.fetchers.set(N,De)}Tu(jn),P.navigation.state==="loading"&&jn>ee?(Ee(T,"Expected pending action"),_&&_.abort(),Jn(P.navigation.location,{matches:er,loaderData:ze,errors:Vt,fetchers:new Map(P.fetchers)})):(pt({errors:Vt,loaderData:P_(P.loaderData,ze,er,Vt),fetchers:new Map(P.fetchers)}),ye=!1)}async function ca(N,L,V,B,K,Z,ae,q){let de=P.fetchers.get(N);fn(N,Da(q,de?de.data:void 0),{flushSync:ae});let ne=new AbortController,te=to(t.history,V,ne.signal);if(Z){let ke=await ts(K,V,te.signal);if(ke.type==="aborted")return;if(ke.type==="error"){let{error:lt}=ti(V,ke);bn(N,L,lt,{flushSync:ae});return}else if(ke.matches)K=ke.matches,B=za(K,V);else{bn(N,L,Jt(404,{pathname:V}),{flushSync:ae});return}}ge.set(N,ne);let _e=W,Oe=(await ei("loader",te,[B],K))[0];if(ds(Oe)&&(Oe=await oT(Oe,te.signal,!0)||Oe),ge.get(N)===ne&&ge.delete(N),!te.signal.aborted){if(Pe.has(N)){fn(N,ui(void 0));return}if(hs(Oe))if(ee>_e){fn(N,ui(void 0));return}else{me.add(N),await wr(te,Oe);return}if(vn(Oe)){bn(N,L,Oe.error);return}Ee(!ds(Oe),"Unhandled fetcher deferred data"),fn(N,ui(Oe.data))}}async function wr(N,L,V){let{submission:B,fetcherSubmission:K,replace:Z}=V===void 0?{}:V;L.response.headers.has("X-Remix-Revalidate")&&(ye=!0);let ae=L.response.headers.get("Location");Ee(ae,"Expected a Location header on the redirect Response"),ae=C_(ae,new URL(N.url),u);let q=Nl(P.location,ae,{_isRedirect:!0});if(n){let Oe=!1;if(L.response.headers.has("X-Remix-Reload-Document"))Oe=!0;else if(Tg.test(ae)){const ke=t.history.createURL(ae);Oe=ke.origin!==e.location.origin||nu(ke.pathname,u)==null}if(Oe){Z?e.location.replace(ae):e.location.assign(ae);return}}_=null;let de=Z===!0?dt.Replace:dt.Push,{formMethod:ne,formAction:te,formEncType:_e}=P.navigation;!B&&!K&&ne&&te&&_e&&(B=L_(P.navigation));let Ae=B||K;if(uR.has(L.response.status)&&Ae&&$n(Ae.formMethod))await Zn(de,q,{submission:Je({},Ae,{formAction:ae}),preventScrollReset:v});else{let Oe=Ef(q,B);await Zn(de,q,{overrideNavigation:Oe,fetcherSubmission:K,preventScrollReset:v})}}async function ei(N,L,V,B){try{let K=await yR(c,N,L,V,B,s,i);return await Promise.all(K.map((Z,ae)=>{if(AR(Z)){let q=Z.result;return{type:je.redirect,response:ER(q,L,V[ae].route.id,B,u,f.v7_relativeSplatPath)}}return wR(Z)}))}catch(K){return V.map(()=>({type:je.error,error:K}))}}async function mt(N,L,V,B,K){let[Z,...ae]=await Promise.all([V.length?ei("loader",K,V,L):[],...B.map(q=>{if(q.matches&&q.match&&q.controller){let de=to(t.history,q.path,q.controller.signal);return ei("loader",de,[q.match],q.matches).then(ne=>ne[0])}else return Promise.resolve({type:je.error,error:Jt(404,{pathname:q.path})})})]);return await Promise.all([D_(N,V,Z,Z.map(()=>K.signal),!1,P.loaderData),D_(N,B.map(q=>q.match),ae,B.map(q=>q.controller?q.controller.signal:null),!0)]),{loaderResults:Z,fetcherResults:ae}}function gt(){ye=!0,at.push(...es()),ce.forEach((N,L)=>{ge.has(L)&&(Yt.push(L),Vn(L))})}function fn(N,L,V){V===void 0&&(V={}),P.fetchers.set(N,L),pt({fetchers:new Map(P.fetchers)},{flushSync:(V&&V.flushSync)===!0})}function bn(N,L,V,B){B===void 0&&(B={});let K=sl(P.matches,L);qs(N),pt({errors:{[K.route.id]:V},fetchers:new Map(P.fetchers)},{flushSync:(B&&B.flushSync)===!0})}function da(N){return f.v7_fetcherPersist&&(ve.set(N,(ve.get(N)||0)+1),Pe.has(N)&&Pe.delete(N)),P.fetchers.get(N)||cR}function qs(N){let L=P.fetchers.get(N);ge.has(N)&&!(L&&L.state==="loading"&&ie.has(N))&&Vn(N),ce.delete(N),ie.delete(N),me.delete(N),Pe.delete(N),P.fetchers.delete(N)}function Ji(N){if(f.v7_fetcherPersist){let L=(ve.get(N)||0)-1;L<=0?(ve.delete(N),Pe.add(N)):ve.set(N,L)}else qs(N);pt({fetchers:new Map(P.fetchers)})}function Vn(N){let L=ge.get(N);Ee(L,"Expected fetch controller: "+N),L.abort(),ge.delete(N)}function ha(N){for(let L of N){let V=da(L),B=ui(V.data);P.fetchers.set(L,B)}}function Gs(){let N=[],L=!1;for(let V of me){let B=P.fetchers.get(V);Ee(B,"Expected fetcher: "+V),B.state==="loading"&&(me.delete(V),N.push(V),L=!0)}return ha(N),L}function Tu(N){let L=[];for(let[V,B]of ie)if(B<N){let K=P.fetchers.get(V);Ee(K,"Expected fetcher: "+V),K.state==="loading"&&(Vn(V),ie.delete(V),L.push(V))}return ha(L),L.length>0}function Fh(N,L){let V=P.blockers.get(N)||Oa;return Be.get(N)!==L&&Be.set(N,L),V}function Ks(N){P.blockers.delete(N),Be.delete(N)}function Zi(N,L){let V=P.blockers.get(N)||Oa;Ee(V.state==="unblocked"&&L.state==="blocked"||V.state==="blocked"&&L.state==="blocked"||V.state==="blocked"&&L.state==="proceeding"||V.state==="blocked"&&L.state==="unblocked"||V.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+V.state+" -> "+L.state);let B=new Map(P.blockers);B.set(N,L),pt({blockers:B})}function fa(N){let{currentLocation:L,nextLocation:V,historyAction:B}=N;if(Be.size===0)return;Be.size>1&&ks(!1,"A router only supports one blocker at a time");let K=Array.from(Be.entries()),[Z,ae]=K[K.length-1],q=P.blockers.get(Z);if(!(q&&q.state==="proceeding")&&ae({currentLocation:L,nextLocation:V,historyAction:B}))return Z}function Er(N){let L=Jt(404,{pathname:N}),V=a||o,{matches:B,route:K}=N_(V);return es(),{notFoundMatches:B,route:K,error:L}}function ti(N,L){let V=L.partialMatches,B=V[V.length-1].route,K=Jt(400,{type:"route-discovery",routeId:B.id,pathname:N,message:L.error!=null&&"message"in L.error?L.error:String(L.error)});return{notFoundMatches:V,route:B,error:K}}function es(N){let L=[];return Me.forEach((V,B)=>{(!N||N(B))&&(V.cancel(),L.push(B),Me.delete(B))}),L}function Tr(N,L,V){if(A=N,x=L,k=V||null,!S&&P.navigation===wf){S=!0;let B=ma(P.location,P.matches);B!=null&&pt({restoreScrollPosition:B})}return()=>{A=null,x=null,k=null}}function pa(N,L){return k&&k(N,L.map(B=>Bb(B,P.loaderData)))||N.key}function Qs(N,L){if(A&&x){let V=pa(N,L);A[V]=x()}}function ma(N,L){if(A){let V=pa(N,L),B=A[V];if(typeof B=="number")return B}return null}function Ir(N,L,V){if(d)if(N){let B=N[N.length-1].route;if(B.path&&(B.path==="*"||B.path.endsWith("/*")))return{active:!0,matches:Rc(L,V,u,!0)}}else return{active:!0,matches:Rc(L,V,u,!0)||[]};return{active:!1,matches:null}}async function ts(N,L,V){let B=N,K=B.length>0?B[B.length-1].route:null;for(;;){let Z=a==null,ae=a||o;try{await gR(d,L,B,ae,s,i,kt,V)}catch(te){return{type:"error",error:te,partialMatches:B}}finally{Z&&(o=[...o])}if(V.aborted)return{type:"aborted"};let q=as(ae,L,u),de=!1;if(q){let te=q[q.length-1].route;if(te.index)return{type:"success",matches:q};if(te.path&&te.path.length>0)if(te.path==="*")de=!0;else return{type:"success",matches:q}}let ne=Rc(ae,L,u,!0);if(!ne||B.map(te=>te.route.id).join("-")===ne.map(te=>te.route.id).join("-"))return{type:"success",matches:de?q:null};if(B=ne,K=B[B.length-1].route,K.path==="*")return{type:"success",matches:B}}}function Ct(N){s={},a=Ol(N,i,void 0,s)}function Iu(N,L){let V=a==null;rT(N,L,a||o,s,i),V&&(o=[...o],pt({}))}return F={get basename(){return u},get future(){return f},get state(){return P},get routes(){return o},get window(){return e},initialize:Mh,subscribe:Hs,enableScrollRestoration:Tr,navigate:Ws,fetch:Eu,revalidate:aa,createHref:N=>t.history.createHref(N),encodeLocation:N=>t.history.encodeLocation(N),getFetcher:da,deleteFetcher:Ji,dispose:$s,getBlocker:Fh,deleteBlocker:Ks,patchRoutes:Iu,_internalFetchControllers:ge,_internalActiveDeferreds:Me,_internalSetRoutes:Ct},F}function fR(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Lp(t,e,n,r,i,s,o,a){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=Z1(i||".",J1(u,s),nu(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Ig(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Ni([n,d.pathname])),tu(d)}function I_(t,e,n,r){if(!r||!fR(r))return{path:n};if(r.formMethod&&!CR(r.formMethod))return{path:n,error:Jt(405,{method:r.formMethod})};let i=()=>({path:n,error:Jt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=iT(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!$n(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,A)=>{let[k,x]=A;return""+E+k+"="+x+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!$n(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}Ee(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Mp(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Mp(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=b_(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=b_(u)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if($n(d.formMethod))return{path:n,submission:d};let f=Yr(n);return e&&f.search&&Ig(f.search)&&u.append("index",""),f.search="?"+u,{path:tu(f),submission:d}}function pR(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function S_(t,e,n,r,i,s,o,a,u,c,d,f,m,E,A,k){let x=k?vn(k[1])?k[1].error:k[1].data:void 0,S=t.createURL(e.location),y=t.createURL(i),I=k&&vn(k[1])?k[0]:void 0,O=I?pR(n,I):n,F=k?k[1].statusCode:void 0,P=o&&F&&F>=400,T=O.filter((_,C)=>{let{route:R}=_;if(R.lazy)return!0;if(R.loader==null)return!1;if(s)return typeof R.loader!="function"||R.loader.hydrate?!0:e.loaderData[R.id]===void 0&&(!e.errors||e.errors[R.id]===void 0);if(mR(e.loaderData,e.matches[C],_)||u.some(ye=>ye===_.route.id))return!0;let D=e.matches[C],b=_;return A_(_,Je({currentUrl:S,currentParams:D.params,nextUrl:y,nextParams:b.params},r,{actionResult:x,unstable_actionStatus:F,defaultShouldRevalidate:P?!1:a||S.pathname+S.search===y.pathname+y.search||S.search!==y.search||nT(D,b)}))}),v=[];return f.forEach((_,C)=>{if(s||!n.some(at=>at.route.id===_.routeId)||d.has(C))return;let R=as(E,_.path,A);if(!R){v.push({key:C,routeId:_.routeId,path:_.path,matches:null,match:null,controller:null});return}let D=e.fetchers.get(C),b=za(R,_.path),ye=!1;m.has(C)?ye=!1:c.includes(C)?ye=!0:D&&D.state!=="idle"&&D.data===void 0?ye=a:ye=A_(b,Je({currentUrl:S,currentParams:e.matches[e.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:x,unstable_actionStatus:F,defaultShouldRevalidate:P?!1:a})),ye&&v.push({key:C,routeId:_.routeId,path:_.path,matches:R,match:b,controller:new AbortController})}),[T,v]}function mR(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function nT(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function A_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function gR(t,e,n,r,i,s,o,a){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,f)=>{a.aborted||rT(d,f,r,i,s)}}),o.set(u,c)),c&&SR(c)&&await c}finally{o.delete(u)}}function rT(t,e,n,r,i){if(t){var s;let o=r[t];Ee(o,"No route found to patch children into: routeId = "+t);let a=Ol(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...a):o.children=a}else{let o=Ol(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function k_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Ee(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";ks(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!Ub.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Je({},e(i),{lazy:void 0}))}function vR(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function yR(t,e,n,r,i,s,o,a){let u=r.reduce((f,m)=>f.add(m.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let m=u.has(f.route.id);return Je({},f,{shouldLoad:m,resolve:A=>(c.add(f.route.id),m?_R(e,n,f,s,o,A,a):Promise.resolve({type:je.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(f=>Ee(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,m)=>u.has(i[m].route.id))}async function _R(t,e,n,r,i,s,o){let a,u,c=d=>{let f,m=new Promise((k,x)=>f=x);u=()=>f(),e.signal.addEventListener("abort",u);let E=k=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...k!==void 0?[k]:[]),A;return s?A=s(k=>E(k)):A=(async()=>{try{return{type:"data",result:await E()}}catch(k){return{type:"error",result:k}}})(),Promise.race([A,m])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[m]=await Promise.all([c(d).catch(E=>{f=E}),k_(n.route,i,r)]);if(f!==void 0)throw f;a=m}else if(await k_(n.route,i,r),d=n.route[t],d)a=await c(d);else if(t==="action"){let f=new URL(e.url),m=f.pathname+f.search;throw Jt(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:je.data,result:void 0};else if(d)a=await c(d);else{let f=new URL(e.url),m=f.pathname+f.search;throw Jt(404,{pathname:m})}Ee(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:je.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return a}async function wR(t){let{result:e,type:n,status:r}=t;if(sT(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:je.error,error:a}}return n===je.error?{type:je.error,error:new Eg(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:je.data,data:o,statusCode:e.status,headers:e.headers}}if(n===je.error)return{type:je.error,error:e,statusCode:nh(e)?e.status:r};if(kR(e)){var i,s;return{type:je.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:je.data,data:e,statusCode:r}}function ER(t,e,n,r,i,s){let o=t.headers.get("Location");if(Ee(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Tg.test(o)){let a=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Lp(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function C_(t,e,n){if(Tg.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=nu(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function to(t,e,n,r){let i=t.createURL(iT(e)).toString(),s={signal:n};if(r&&$n(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Mp(r.formData):s.body=r.formData}return new Request(i,s)}function Mp(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function b_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function TR(t,e,n,r,i,s){let o={},a=null,u,c=!1,d={},f=r&&vn(r[1])?r[1].error:void 0;return n.forEach((m,E)=>{let A=e[E].route.id;if(Ee(!hs(m),"Cannot handle redirect results in processLoaderData"),vn(m)){let k=m.error;f!==void 0&&(k=f,f=void 0),a=a||{};{let x=sl(t,A);a[x.route.id]==null&&(a[x.route.id]=k)}o[A]=void 0,c||(c=!0,u=nh(m.error)?m.error.status:500),m.headers&&(d[A]=m.headers)}else ds(m)?(i.set(A,m.deferredData),o[A]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[A]=m.headers)):(o[A]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(d[A]=m.headers))}),f!==void 0&&r&&(a={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:u||200,loaderHeaders:d}}function R_(t,e,n,r,i,s,o,a){let{loaderData:u,errors:c}=TR(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:f,match:m,controller:E}=s[d];Ee(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let A=o[d];if(!(E&&E.signal.aborted))if(vn(A)){let k=sl(t.matches,m==null?void 0:m.route.id);c&&c[k.route.id]||(c=Je({},c,{[k.route.id]:A.error})),t.fetchers.delete(f)}else if(hs(A))Ee(!1,"Unhandled fetcher revalidation redirect");else if(ds(A))Ee(!1,"Unhandled fetcher deferred data");else{let k=ui(A.data);t.fetchers.set(f,k)}}return{loaderData:u,errors:c}}function P_(t,e,n,r){let i=Je({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function x_(t){return t?vn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function sl(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function N_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Jt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,a="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(a="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(a="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(a="Not Found",u='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Eg(t||500,a,new Error(u),!0)}function O_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(hs(n))return{result:n,idx:e}}}function iT(t){let e=typeof t=="string"?Yr(t):t;return tu(Je({},e,{hash:""}))}function IR(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function SR(t){return typeof t=="object"&&t!=null&&"then"in t}function AR(t){return sT(t.result)&&lR.has(t.result.status)}function ds(t){return t.type===je.deferred}function vn(t){return t.type===je.error}function hs(t){return(t&&t.type)===je.redirect}function kR(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function sT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function CR(t){return aR.has(t.toLowerCase())}function $n(t){return sR.has(t.toLowerCase())}async function D_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),d=c!=null&&!nT(c,u)&&(s&&s[u.route.id])!==void 0;if(ds(a)&&(i||d)){let f=r[o];Ee(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await oT(a,f,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function oT(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:je.data,data:t.deferredData.unwrappedData}}catch(i){return{type:je.error,error:i}}return{type:je.data,data:t.deferredData.data}}}function Ig(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function za(t,e){let n=typeof e=="string"?Yr(e).search:e.search;if(t[t.length-1].route.index&&Ig(n||""))return t[t.length-1];let r=X1(t);return r[r.length-1]}function L_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Ef(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function bR(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Da(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function RR(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function ui(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function PR(t,e){try{let n=t.sessionStorage.getItem(tT);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function xR(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(tT,JSON.stringify(n))}catch(r){ks(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fd(){return fd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fd.apply(this,arguments)}const rh=j.createContext(null),aT=j.createContext(null),ih=j.createContext(null),Sg=j.createContext(null),Zo=j.createContext({outlet:null,matches:[],isDataRoute:!1}),lT=j.createContext(null);function sh(){return j.useContext(Sg)!=null}function ru(){return sh()||Ee(!1),j.useContext(Sg).location}function uT(t){j.useContext(ih).static||j.useLayoutEffect(t)}function Kt(){let{isDataRoute:t}=j.useContext(Zo);return t?$R():NR()}function NR(){sh()||Ee(!1);let t=j.useContext(rh),{basename:e,future:n,navigator:r}=j.useContext(ih),{matches:i}=j.useContext(Zo),{pathname:s}=ru(),o=JSON.stringify(J1(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return uT(()=>{a.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Z1(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ni([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function OR(t,e,n,r){sh()||Ee(!1);let{navigator:i}=j.useContext(ih),{matches:s}=j.useContext(Zo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ru(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let k=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let E=as(t,{pathname:m});return jR(E&&E.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Ni([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Ni([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r)}function DR(){let t=zR(),e=nh(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const LR=j.createElement(DR,null);class MR extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(Zo.Provider,{value:this.props.routeContext},j.createElement(lT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VR(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(rh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Zo.Provider,{value:e},r)}function jR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:E}=n,A=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,A=!1,k=null,x=null;n&&(E=a&&f.route.id?a[f.route.id]:void 0,k=f.route.errorElement||LR,u&&(c<0&&m===0?(HR("route-fallback"),A=!0,x=null):c===m&&(A=!0,x=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),y=()=>{let I;return E?I=k:A?I=x:f.route.Component?I=j.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=d,j.createElement(VR,{match:f,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?j.createElement(MR,{location:n.location,revalidation:n.revalidation,component:k,error:E,children:y(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):y()},null)}var cT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(cT||{}),pd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pd||{});function UR(t){let e=j.useContext(rh);return e||Ee(!1),e}function FR(t){let e=j.useContext(aT);return e||Ee(!1),e}function BR(t){let e=j.useContext(Zo);return e||Ee(!1),e}function dT(t){let e=BR(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function zR(){var t;let e=j.useContext(lT),n=FR(pd.UseRouteError),r=dT(pd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function $R(){let{router:t}=UR(cT.UseNavigateStable),e=dT(pd.UseNavigateStable),n=j.useRef(!1);return uT(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,fd({fromRouteId:e},s)))},[t,e])}const M_={};function HR(t,e,n){M_[t]||(M_[t]=!0)}function WR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=dt.Pop,navigator:s,static:o=!1,future:a}=t;sh()&&Ee(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:fd({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Yr(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:A="default"}=r,k=j.useMemo(()=>{let x=nu(d,u);return x==null?null:{location:{pathname:x,search:f,hash:m,state:E,key:A},navigationType:i}},[u,d,f,m,E,A,i]);return k==null?null:j.createElement(ih.Provider,{value:c},j.createElement(Sg.Provider,{children:n,value:k}))}new Promise(()=>{});function qR(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:j.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:j.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:j.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function md(){return md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},md.apply(this,arguments)}const GR="6";try{window.__reactRouterVersion=GR}catch{}function KR(t,e){return hR({basename:void 0,future:md({},void 0,{v7_prependBasename:!0}),history:Mb({window:void 0}),hydrationData:QR(),routes:t,mapRouteProperties:qR,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function QR(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=md({},e,{errors:YR(e.errors)})),e}function YR(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Eg(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const XR=j.createContext({isTransitioning:!1}),JR=j.createContext(new Map),ZR="startTransition",V_=Ik[ZR],eP="flushSync",j_=Lb[eP];function tP(t){V_?V_(t):t()}function La(t){j_?j_(t):t()}let nP=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function rP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=j.useState(n.state),[o,a]=j.useState(),[u,c]=j.useState({isTransitioning:!1}),[d,f]=j.useState(),[m,E]=j.useState(),[A,k]=j.useState(),x=j.useRef(new Map),{v7_startTransition:S}=r||{},y=j.useCallback(T=>{S?tP(T):T()},[S]),I=j.useCallback((T,v)=>{let{deletedFetchers:_,unstable_flushSync:C,unstable_viewTransitionOpts:R}=v;_.forEach(b=>x.current.delete(b)),T.fetchers.forEach((b,ye)=>{b.data!==void 0&&x.current.set(ye,b.data)});let D=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!R||D){C?La(()=>s(T)):y(()=>s(T));return}if(C){La(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:R.currentLocation,nextLocation:R.nextLocation})});let b=n.window.document.startViewTransition(()=>{La(()=>s(T))});b.finished.finally(()=>{La(()=>{f(void 0),E(void 0),a(void 0),c({isTransitioning:!1})})}),La(()=>E(b));return}m?(d&&d.resolve(),m.skipTransition(),k({state:T,currentLocation:R.currentLocation,nextLocation:R.nextLocation})):(a(T),c({isTransitioning:!0,flushSync:!1,currentLocation:R.currentLocation,nextLocation:R.nextLocation}))},[n.window,m,d,x,y]);j.useLayoutEffect(()=>n.subscribe(I),[n,I]),j.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new nP)},[u]),j.useEffect(()=>{if(d&&o&&n.window){let T=o,v=d.promise,_=n.window.document.startViewTransition(async()=>{y(()=>s(T)),await v});_.finished.finally(()=>{f(void 0),E(void 0),a(void 0),c({isTransitioning:!1})}),E(_)}},[y,o,d,n.window]),j.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),j.useEffect(()=>{!u.isTransitioning&&A&&(a(A.state),c({isTransitioning:!0,flushSync:!1,currentLocation:A.currentLocation,nextLocation:A.nextLocation}),k(void 0))},[u.isTransitioning,A]),j.useEffect(()=>{},[]);let O=j.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:T=>n.navigate(T),push:(T,v,_)=>n.navigate(T,{state:v,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(T,v,_)=>n.navigate(T,{replace:!0,state:v,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[n]),F=n.basename||"/",P=j.useMemo(()=>({router:n,navigator:O,static:!1,basename:F}),[n,O,F]);return j.createElement(j.Fragment,null,j.createElement(rh.Provider,{value:P},j.createElement(aT.Provider,{value:i},j.createElement(JR.Provider,{value:x.current},j.createElement(XR.Provider,{value:u},j.createElement(WR,{basename:F,location:i.location,navigationType:i.historyAction,navigator:O,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?j.createElement(iP,{routes:n.routes,future:n.future,state:i}):e))))),null)}function iP(t){let{routes:e,future:n,state:r}=t;return OR(e,void 0,r,n)}var U_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(U_||(U_={}));var F_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(F_||(F_={}));const Ag="/assets/logo-CaG9nLj8.png",sP=()=>{const t=Kt(),e=r=>{r.preventDefault(),t("/signup")},n=r=>{r.preventDefault(),t("/login")};return g.jsx("div",{className:"background",children:g.jsx("div",{className:"overlay",children:g.jsxs("div",{className:"content",children:[g.jsx("img",{src:Ag,width:"87px",height:"80px"}),g.jsx("h1",{className:"heroTitle",children:"VaultKeep"}),g.jsx("p",{className:"heroDesc",children:"Your Secure Gateway to the Crypto World. Safeguard, Manage, and Grow Your Digital Assets with Confidence. "}),g.jsx("button",{className:"button",onClick:e,children:"Signup"}),g.jsx("button",{className:"buttonlog",onClick:n,children:"Login"})]})})})},B_=()=>{const t=Kt();return g.jsxs("div",{className:"bannerBg",children:[g.jsx("p",{className:"bannerTitle",children:"Lets help secure your funds & assets today."}),g.jsx("button",{className:"bannerButton",onClick:()=>{t("/signup")},children:"Sign up"})]})},oP=()=>{const t=Kt();return g.jsxs("div",{className:"AboutBg",children:[g.jsx("h1",{className:"titleAbout",children:"About VaultKeep"}),g.jsx("p",{className:"desc",children:"At VaultKeep, we are dedicated to providing a secure, user-friendly platform for managing your digital assets. Our mission is to empower users with the tools they need to navigate the world of cryptocurrency with ease and confidence. With cutting-edge security measures and a seamless interface, VaultKeep is your trusted partner in the crypto space. Join us on the path to financial independence and innovation."}),g.jsx("button",{className:"AboutButton",onClick:e=>{e.preventDefault(),t("/signup")},children:"Create wallet"})]})};function z_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z_(Object(n),!0).forEach(function(r){Et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function gd(t){"@babel/helpers - typeof";return gd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gd(t)}function aP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lP(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function uP(t,e,n){return e&&lP(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kg(t,e){return dP(t)||fP(t,e)||hT(t,e)||mP()}function iu(t){return cP(t)||hP(t)||hT(t)||pP()}function cP(t){if(Array.isArray(t))return Vp(t)}function dP(t){if(Array.isArray(t))return t}function hP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fP(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(u){s=!0,a=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function hT(t,e){if(t){if(typeof t=="string")return Vp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vp(t,e)}}function Vp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function pP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $_=function(){},Cg={},fT={},pT=null,mT={mark:$_,measure:$_};try{typeof window<"u"&&(Cg=window),typeof document<"u"&&(fT=document),typeof MutationObserver<"u"&&(pT=MutationObserver),typeof performance<"u"&&(mT=performance)}catch{}var gP=Cg.navigator||{},H_=gP.userAgent,W_=H_===void 0?"":H_,ji=Cg,Ge=fT,q_=pT,Ju=mT;ji.document;var Xr=!!Ge.documentElement&&!!Ge.head&&typeof Ge.addEventListener=="function"&&typeof Ge.createElement=="function",gT=~W_.indexOf("MSIE")||~W_.indexOf("Trident/"),Zu,ec,tc,nc,rc,zr="___FONT_AWESOME___",jp=16,vT="fa",yT="svg-inline--fa",Cs="data-fa-i2svg",Up="data-fa-pseudo-element",vP="data-fa-pseudo-element-pending",bg="data-prefix",Rg="data-icon",G_="fontawesome-i2svg",yP="async",_P=["HTML","HEAD","STYLE","SCRIPT"],_T=function(){try{return!0}catch{return!1}}(),We="classic",ot="sharp",Pg=[We,ot];function su(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[We]}})}var Dl=su((Zu={},Et(Zu,We,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Et(Zu,ot,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Zu)),Ll=su((ec={},Et(ec,We,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Et(ec,ot,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ec)),Ml=su((tc={},Et(tc,We,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Et(tc,ot,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),tc)),wP=su((nc={},Et(nc,We,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Et(nc,ot,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),nc)),EP=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,wT="fa-layers-text",TP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,IP=su((rc={},Et(rc,We,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Et(rc,ot,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),rc)),ET=[1,2,3,4,5,6,7,8,9,10],SP=ET.concat([11,12,13,14,15,16,17,18,19,20]),AP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vl=new Set;Object.keys(Ll[We]).map(Vl.add.bind(Vl));Object.keys(Ll[ot]).map(Vl.add.bind(Vl));var kP=[].concat(Pg,iu(Vl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fs.GROUP,fs.SWAP_OPACITY,fs.PRIMARY,fs.SECONDARY]).concat(ET.map(function(t){return"".concat(t,"x")})).concat(SP.map(function(t){return"w-".concat(t)})),ol=ji.FontAwesomeConfig||{};function CP(t){var e=Ge.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function bP(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ge&&typeof Ge.querySelector=="function"){var RP=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];RP.forEach(function(t){var e=kg(t,2),n=e[0],r=e[1],i=bP(CP(n));i!=null&&(ol[r]=i)})}var TT={styleDefault:"solid",familyDefault:"classic",cssPrefix:vT,replacementClass:yT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ol.familyPrefix&&(ol.cssPrefix=ol.familyPrefix);var zo=Q(Q({},TT),ol);zo.autoReplaceSvg||(zo.observeMutations=!1);var J={};Object.keys(TT).forEach(function(t){Object.defineProperty(J,t,{enumerable:!0,set:function(n){zo[t]=n,al.forEach(function(r){return r(J)})},get:function(){return zo[t]}})});Object.defineProperty(J,"familyPrefix",{enumerable:!0,set:function(e){zo.cssPrefix=e,al.forEach(function(n){return n(J)})},get:function(){return zo.cssPrefix}});ji.FontAwesomeConfig=J;var al=[];function PP(t){return al.push(t),function(){al.splice(al.indexOf(t),1)}}var ai=jp,or={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xP(t){if(!(!t||!Xr)){var e=Ge.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ge.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ge.head.insertBefore(e,r),t}}var NP="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jl(){for(var t=12,e="";t-- >0;)e+=NP[Math.random()*62|0];return e}function ea(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xg(t){return t.classList?ea(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function IT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OP(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(IT(t[n]),'" ')},"").trim()}function oh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ng(t){return t.size!==or.size||t.x!==or.x||t.y!==or.y||t.rotate!==or.rotate||t.flipX||t.flipY}function DP(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function LP(t){var e=t.transform,n=t.width,r=n===void 0?jp:n,i=t.height,s=i===void 0?jp:i,o=t.startCentered,a=o===void 0?!1:o,u="";return a&&gT?u+="translate(".concat(e.x/ai-r/2,"em, ").concat(e.y/ai-s/2,"em) "):a?u+="translate(calc(-50% + ".concat(e.x/ai,"em), calc(-50% + ").concat(e.y/ai,"em)) "):u+="translate(".concat(e.x/ai,"em, ").concat(e.y/ai,"em) "),u+="scale(".concat(e.size/ai*(e.flipX?-1:1),", ").concat(e.size/ai*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var MP=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ST(){var t=vT,e=yT,n=J.cssPrefix,r=J.replacementClass,i=MP;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var K_=!1;function Tf(){J.autoAddCss&&!K_&&(xP(ST()),K_=!0)}var VP={mixout:function(){return{dom:{css:ST,insertCss:Tf}}},hooks:function(){return{beforeDOMElementCreation:function(){Tf()},beforeI2svg:function(){Tf()}}}},$r=ji||{};$r[zr]||($r[zr]={});$r[zr].styles||($r[zr].styles={});$r[zr].hooks||($r[zr].hooks={});$r[zr].shims||($r[zr].shims=[]);var Wn=$r[zr],AT=[],jP=function t(){Ge.removeEventListener("DOMContentLoaded",t),vd=1,AT.map(function(e){return e()})},vd=!1;Xr&&(vd=(Ge.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ge.readyState),vd||Ge.addEventListener("DOMContentLoaded",jP));function UP(t){Xr&&(vd?setTimeout(t,0):AT.push(t))}function ou(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?IT(t):"<".concat(e," ").concat(OP(r),">").concat(s.map(ou).join(""),"</").concat(e,">")}function Q_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var If=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=a(d,e[c],c,e);return d};function FP(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Fp(t){var e=FP(t);return e.length===1?e[0].toString(16):null}function BP(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Y_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Bp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Y_(e);typeof Wn.hooks.addPack=="function"&&!i?Wn.hooks.addPack(t,Y_(e)):Wn.styles[t]=Q(Q({},Wn.styles[t]||{}),s),t==="fas"&&Bp("fa",e)}var ic,sc,oc,wo=Wn.styles,zP=Wn.shims,$P=(ic={},Et(ic,We,Object.values(Ml[We])),Et(ic,ot,Object.values(Ml[ot])),ic),Og=null,kT={},CT={},bT={},RT={},PT={},HP=(sc={},Et(sc,We,Object.keys(Dl[We])),Et(sc,ot,Object.keys(Dl[ot])),sc);function WP(t){return~kP.indexOf(t)}function qP(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!WP(i)?i:null}var xT=function(){var e=function(s){return If(wo,function(o,a,u){return o[u]=If(a,s,{}),o},{})};kT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(u){return typeof u=="number"});a.forEach(function(u){i[u.toString(16)]=o})}return i}),CT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(u){return typeof u=="string"});a.forEach(function(u){i[u]=o})}return i}),PT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(u){i[u]=o}),i});var n="far"in wo||J.autoFetchSvg,r=If(zP,function(i,s){var o=s[0],a=s[1],u=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:u}),i},{names:{},unicodes:{}});bT=r.names,RT=r.unicodes,Og=ah(J.styleDefault,{family:J.familyDefault})};PP(function(t){Og=ah(t.styleDefault,{family:J.familyDefault})});xT();function Dg(t,e){return(kT[t]||{})[e]}function GP(t,e){return(CT[t]||{})[e]}function ps(t,e){return(PT[t]||{})[e]}function NT(t){return bT[t]||{prefix:null,iconName:null}}function KP(t){var e=RT[t],n=Dg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ui(){return Og}var Lg=function(){return{prefix:null,iconName:null,rest:[]}};function ah(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?We:n,i=Dl[r][t],s=Ll[r][t]||Ll[r][i],o=t in Wn.styles?t:null;return s||o||null}var X_=(oc={},Et(oc,We,Object.keys(Ml[We])),Et(oc,ot,Object.keys(Ml[ot])),oc);function lh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Et(e,We,"".concat(J.cssPrefix,"-").concat(We)),Et(e,ot,"".concat(J.cssPrefix,"-").concat(ot)),e),o=null,a=We;(t.includes(s[We])||t.some(function(c){return X_[We].includes(c)}))&&(a=We),(t.includes(s[ot])||t.some(function(c){return X_[ot].includes(c)}))&&(a=ot);var u=t.reduce(function(c,d){var f=qP(J.cssPrefix,d);if(wo[d]?(d=$P[a].includes(d)?wP[a][d]:d,o=d,c.prefix=d):HP[a].indexOf(d)>-1?(o=d,c.prefix=ah(d,{family:a})):f?c.iconName=f:d!==J.replacementClass&&d!==s[We]&&d!==s[ot]&&c.rest.push(d),!i&&c.prefix&&c.iconName){var m=o==="fa"?NT(c.iconName):{},E=ps(c.prefix,c.iconName);m.prefix&&(o=null),c.iconName=m.iconName||E||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!wo.far&&wo.fas&&!J.autoFetchSvg&&(c.prefix="fas")}return c},Lg());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&a===ot&&(wo.fass||J.autoFetchSvg)&&(u.prefix="fass",u.iconName=ps(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||o==="fa")&&(u.prefix=Ui()||"fas"),u}var QP=function(){function t(){aP(this,t),this.definitions={}}return uP(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=Q(Q({},n.definitions[a]||{}),o[a]),Bp(a,o[a]);var u=Ml[We][a];u&&Bp(u,o[a]),xT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,u=o.iconName,c=o.icon,d=c[2];n[a]||(n[a]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][u]=c}),n}}]),t}(),J_=[],Eo={},Po={},YP=Object.keys(Po);function XP(t,e){var n=e.mixoutsTo;return J_=t,Eo={},Object.keys(Po).forEach(function(r){YP.indexOf(r)===-1&&delete Po[r]}),J_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),gd(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Eo[o]||(Eo[o]=[]),Eo[o].push(s[o])})}r.provides&&r.provides(Po)}),n}function zp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Eo[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function bs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Eo[t]||[];i.forEach(function(s){s.apply(null,n)})}function Hr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Po[t]?Po[t].apply(null,e):void 0}function $p(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ui();if(e)return e=ps(n,e)||e,Q_(OT.definitions,n,e)||Q_(Wn.styles,n,e)}var OT=new QP,JP=function(){J.autoReplaceSvg=!1,J.observeMutations=!1,bs("noAuto")},ZP={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xr?(bs("beforeI2svg",e),Hr("pseudoElements2svg",e),Hr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;J.autoReplaceSvg===!1&&(J.autoReplaceSvg=!0),J.observeMutations=!0,UP(function(){tx({autoReplaceSvgRoot:n}),bs("watch",e)})}},ex={icon:function(e){if(e===null)return null;if(gd(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ps(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ah(e[0]);return{prefix:r,iconName:ps(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(J.cssPrefix,"-"))>-1||e.match(EP))){var i=lh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ui(),iconName:ps(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Ui();return{prefix:s,iconName:ps(s,e)||e}}}},Cn={noAuto:JP,config:J,dom:ZP,parse:ex,library:OT,findIconDefinition:$p,toHtml:ou},tx=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ge:n;(Object.keys(Wn.styles).length>0||J.autoFetchSvg)&&Xr&&J.autoReplaceSvg&&Cn.dom.i2svg({node:r})};function uh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ou(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Xr){var r=Ge.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function nx(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Ng(o)&&n.found&&!r.found){var a=n.width,u=n.height,c={x:a/u/2,y:.5};i.style=oh(Q(Q({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function rx(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(J.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Q(Q({},i),{},{id:o}),children:r}]}]}function Mg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,u=t.title,c=t.maskId,d=t.titleId,f=t.extra,m=t.watchable,E=m===void 0?!1:m,A=r.found?r:n,k=A.width,x=A.height,S=i==="fak",y=[J.replacementClass,s?"".concat(J.cssPrefix,"-").concat(s):""].filter(function(_){return f.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(f.classes).join(" "),I={children:[],attributes:Q(Q({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(x)})},O=S&&!~f.classes.indexOf("fa-fw")?{width:"".concat(k/x*16*.0625,"em")}:{};E&&(I.attributes[Cs]=""),u&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(d||jl())},children:[u]}),delete I.attributes.title);var F=Q(Q({},I),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:Q(Q({},O),f.styles)}),P=r.found&&n.found?Hr("generateAbstractMask",F)||{children:[],attributes:{}}:Hr("generateAbstractIcon",F)||{children:[],attributes:{}},T=P.children,v=P.attributes;return F.children=T,F.attributes=v,a?rx(F):nx(F)}function Z_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,u=a===void 0?!1:a,c=Q(Q(Q({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});u&&(c[Cs]="");var d=Q({},o.styles);Ng(i)&&(d.transform=LP({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var f=oh(d);f.length>0&&(c.style=f);var m=[];return m.push({tag:"span",attributes:c,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function ix(t){var e=t.content,n=t.title,r=t.extra,i=Q(Q(Q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=oh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Sf=Wn.styles;function Hp(t){var e=t[0],n=t[1],r=t.slice(4),i=kg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(J.cssPrefix,"-").concat(fs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(fs.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(J.cssPrefix,"-").concat(fs.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var sx={found:!1,width:512,height:512};function ox(t,e){!_T&&!J.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Wp(t,e){var n=e;return e==="fa"&&J.styleDefault!==null&&(e=Ui()),new Promise(function(r,i){if(Hr("missingIconAbstract"),n==="fa"){var s=NT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Sf[e]&&Sf[e][t]){var o=Sf[e][t];return r(Hp(o))}ox(t,e),r(Q(Q({},sx),{},{icon:J.showMissingIcons&&t?Hr("missingIconAbstract")||{}:{}}))})}var e0=function(){},qp=J.measurePerformance&&Ju&&Ju.mark&&Ju.measure?Ju:{mark:e0,measure:e0},$a='FA "6.5.2"',ax=function(e){return qp.mark("".concat($a," ").concat(e," begins")),function(){return DT(e)}},DT=function(e){qp.mark("".concat($a," ").concat(e," ends")),qp.measure("".concat($a," ").concat(e),"".concat($a," ").concat(e," begins"),"".concat($a," ").concat(e," ends"))},Vg={begin:ax,end:DT},Pc=function(){};function t0(t){var e=t.getAttribute?t.getAttribute(Cs):null;return typeof e=="string"}function lx(t){var e=t.getAttribute?t.getAttribute(bg):null,n=t.getAttribute?t.getAttribute(Rg):null;return e&&n}function ux(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(J.replacementClass)}function cx(){if(J.autoReplaceSvg===!0)return xc.replace;var t=xc[J.autoReplaceSvg];return t||xc.replace}function dx(t){return Ge.createElementNS("http://www.w3.org/2000/svg",t)}function hx(t){return Ge.createElement(t)}function LT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?dx:hx:n;if(typeof t=="string")return Ge.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(LT(o,{ceFn:r}))}),i}function fx(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var xc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(LT(i),n)}),n.getAttribute(Cs)===null&&J.keepOriginalSource){var r=Ge.createComment(fx(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~xg(n).indexOf(J.replacementClass))return xc.replace(e);var i=new RegExp("".concat(J.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,u){return u===J.replacementClass||u.match(i)?a.toSvg.push(u):a.toNode.push(u),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ou(a)}).join(`
`);n.setAttribute(Cs,""),n.innerHTML=o}};function n0(t){t()}function MT(t,e){var n=typeof e=="function"?e:Pc;if(t.length===0)n();else{var r=n0;J.mutateApproach===yP&&(r=ji.requestAnimationFrame||n0),r(function(){var i=cx(),s=Vg.begin("mutate");t.map(i),s(),n()})}}var jg=!1;function VT(){jg=!0}function Gp(){jg=!1}var yd=null;function r0(t){if(q_&&J.observeMutations){var e=t.treeCallback,n=e===void 0?Pc:e,r=t.nodeCallback,i=r===void 0?Pc:r,s=t.pseudoElementsCallback,o=s===void 0?Pc:s,a=t.observeMutationsRoot,u=a===void 0?Ge:a;yd=new q_(function(c){if(!jg){var d=Ui();ea(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!t0(f.addedNodes[0])&&(J.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&J.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&t0(f.target)&&~AP.indexOf(f.attributeName))if(f.attributeName==="class"&&lx(f.target)){var m=lh(xg(f.target)),E=m.prefix,A=m.iconName;f.target.setAttribute(bg,E||d),A&&f.target.setAttribute(Rg,A)}else ux(f.target)&&i(f.target)})}}),Xr&&yd.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function px(){yd&&yd.disconnect()}function mx(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function gx(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=lh(xg(t));return i.prefix||(i.prefix=Ui()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=GP(i.prefix,t.innerText)||Dg(i.prefix,Fp(t.innerText))),!i.iconName&&J.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function vx(t){var e=ea(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return J.autoA11y&&(n?e["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(r||jl()):(e["aria-hidden"]="true",e.focusable="false")),e}function yx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:or,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function i0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gx(t),r=n.iconName,i=n.prefix,s=n.rest,o=vx(t),a=zp("parseNodeAttributes",{},t),u=e.styleParser?mx(t):[];return Q({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:or,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:o}},a)}var _x=Wn.styles;function jT(t){var e=J.autoReplaceSvg==="nest"?i0(t,{styleParser:!1}):i0(t);return~e.extra.classes.indexOf(wT)?Hr("generateLayersText",t,e):Hr("generateSvgReplacementMutation",t,e)}var Fi=new Set;Pg.map(function(t){Fi.add("fa-".concat(t))});Object.keys(Dl[We]).map(Fi.add.bind(Fi));Object.keys(Dl[ot]).map(Fi.add.bind(Fi));Fi=iu(Fi);function s0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xr)return Promise.resolve();var n=Ge.documentElement.classList,r=function(f){return n.add("".concat(G_,"-").concat(f))},i=function(f){return n.remove("".concat(G_,"-").concat(f))},s=J.autoFetchSvg?Fi:Pg.map(function(d){return"fa-".concat(d)}).concat(Object.keys(_x));s.includes("fa")||s.push("fa");var o=[".".concat(wT,":not([").concat(Cs,"])")].concat(s.map(function(d){return".".concat(d,":not([").concat(Cs,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ea(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var u=Vg.begin("onTree"),c=a.reduce(function(d,f){try{var m=jT(f);m&&d.push(m)}catch(E){_T||E.name==="MissingIcon"&&console.error(E)}return d},[]);return new Promise(function(d,f){Promise.all(c).then(function(m){MT(m,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(function(m){u(),f(m)})})}function wx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jT(t).then(function(n){n&&MT([n],e)})}function Ex(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:$p(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:$p(i||{})),t(r,Q(Q({},n),{},{mask:i}))}}var Tx=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?or:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,u=a===void 0?null:a,c=n.maskId,d=c===void 0?null:c,f=n.title,m=f===void 0?null:f,E=n.titleId,A=E===void 0?null:E,k=n.classes,x=k===void 0?[]:k,S=n.attributes,y=S===void 0?{}:S,I=n.styles,O=I===void 0?{}:I;if(e){var F=e.prefix,P=e.iconName,T=e.icon;return uh(Q({type:"icon"},e),function(){return bs("beforeDOMElementCreation",{iconDefinition:e,params:n}),J.autoA11y&&(m?y["aria-labelledby"]="".concat(J.replacementClass,"-title-").concat(A||jl()):(y["aria-hidden"]="true",y.focusable="false")),Mg({icons:{main:Hp(T),mask:u?Hp(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:P,transform:Q(Q({},or),i),symbol:o,title:m,maskId:d,titleId:A,extra:{attributes:y,styles:O,classes:x}})})}},Ix={mixout:function(){return{icon:Ex(Tx)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=s0,n.nodeCallback=wx,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ge:r,s=n.callback,o=s===void 0?function(){}:s;return s0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,u=r.transform,c=r.symbol,d=r.mask,f=r.maskId,m=r.extra;return new Promise(function(E,A){Promise.all([Wp(i,a),d.iconName?Wp(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var x=kg(k,2),S=x[0],y=x[1];E([n,Mg({icons:{main:S,mask:y},prefix:a,iconName:i,transform:u,symbol:c,maskId:f,title:s,titleId:o,extra:m,watchable:!0})])}).catch(A)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,u=oh(a);u.length>0&&(i.style=u);var c;return Ng(o)&&(c=Hr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},Sx={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return uh({type:"layer"},function(){bs("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(u){o=o.concat(u.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(J.cssPrefix,"-layers")].concat(iu(s)).join(" ")},children:o}]})}}}},Ax={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,u=r.attributes,c=u===void 0?{}:u,d=r.styles,f=d===void 0?{}:d;return uh({type:"counter",content:n},function(){return bs("beforeDOMElementCreation",{content:n,params:r}),ix({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(J.cssPrefix,"-layers-counter")].concat(iu(a))}})})}}}},kx={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?or:i,o=r.title,a=o===void 0?null:o,u=r.classes,c=u===void 0?[]:u,d=r.attributes,f=d===void 0?{}:d,m=r.styles,E=m===void 0?{}:m;return uh({type:"text",content:n},function(){return bs("beforeDOMElementCreation",{content:n,params:r}),Z_({content:n,transform:Q(Q({},or),s),title:a,extra:{attributes:f,styles:E,classes:["".concat(J.cssPrefix,"-layers-text")].concat(iu(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,u=null;if(gT){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();a=d.width/c,u=d.height/c}return J.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Z_({content:n.innerHTML,width:a,height:u,transform:s,title:i,extra:o,watchable:!0})])}}},Cx=new RegExp('"',"ug"),o0=[1105920,1112319];function bx(t){var e=t.replace(Cx,""),n=BP(e,0),r=n>=o0[0]&&n<=o0[1],i=e.length===2?e[0]===e[1]:!1;return{value:Fp(i?e[0]:e),isSecondary:r||i}}function a0(t,e){var n="".concat(vP).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ea(t.children),o=s.filter(function(T){return T.getAttribute(Up)===e})[0],a=ji.getComputedStyle(t,e),u=a.getPropertyValue("font-family").match(TP),c=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){var f=a.getPropertyValue("content"),m=~["Sharp"].indexOf(u[2])?ot:We,E=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?Ll[m][u[2].toLowerCase()]:IP[m][c],A=bx(f),k=A.value,x=A.isSecondary,S=u[0].startsWith("FontAwesome"),y=Dg(E,k),I=y;if(S){var O=KP(k);O.iconName&&O.prefix&&(y=O.iconName,E=O.prefix)}if(y&&!x&&(!o||o.getAttribute(bg)!==E||o.getAttribute(Rg)!==I)){t.setAttribute(n,I),o&&t.removeChild(o);var F=yx(),P=F.extra;P.attributes[Up]=e,Wp(y,E).then(function(T){var v=Mg(Q(Q({},F),{},{icons:{main:T,mask:Lg()},prefix:E,iconName:I,extra:P,watchable:!0})),_=Ge.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_,t.firstChild):t.appendChild(_),_.outerHTML=v.map(function(C){return ou(C)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Rx(t){return Promise.all([a0(t,"::before"),a0(t,"::after")])}function Px(t){return t.parentNode!==document.head&&!~_P.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Up)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function l0(t){if(Xr)return new Promise(function(e,n){var r=ea(t.querySelectorAll("*")).filter(Px).map(Rx),i=Vg.begin("searchPseudoElements");VT(),Promise.all(r).then(function(){i(),Gp(),e()}).catch(function(){i(),Gp(),n()})})}var xx={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=l0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ge:r;J.searchPseudoElements&&l0(i)}}},u0=!1,Nx={mixout:function(){return{dom:{unwatch:function(){VT(),u0=!0}}}},hooks:function(){return{bootstrap:function(){r0(zp("mutationObserverCallbacks",{}))},noAuto:function(){px()},watch:function(n){var r=n.observeMutationsRoot;u0?Gp():r0(zp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},c0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Ox={mixout:function(){return{parse:{transform:function(n){return c0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=c0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(u," ").concat(c," ").concat(d)},m={transform:"translate(".concat(o/2*-1," -256)")},E={outer:a,inner:f,path:m};return{tag:"g",attributes:Q({},E.outer),children:[{tag:"g",attributes:Q({},E.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Q(Q({},r.icon.attributes),E.path)}]}]}}}},Af={x:0,y:0,width:"100%",height:"100%"};function d0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Dx(t){return t.tag==="g"?t.children:[t]}var Lx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?lh(i.split(" ").map(function(o){return o.trim()})):Lg();return s.prefix||(s.prefix=Ui()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,u=n.transform,c=s.width,d=s.icon,f=o.width,m=o.icon,E=DP({transform:u,containerWidth:f,iconWidth:c}),A={tag:"rect",attributes:Q(Q({},Af),{},{fill:"white"})},k=d.children?{children:d.children.map(d0)}:{},x={tag:"g",attributes:Q({},E.inner),children:[d0(Q({tag:d.tag,attributes:Q(Q({},d.attributes),E.path)},k))]},S={tag:"g",attributes:Q({},E.outer),children:[x]},y="mask-".concat(a||jl()),I="clip-".concat(a||jl()),O={tag:"mask",attributes:Q(Q({},Af),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,S]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Dx(m)},O]};return r.push(F,{tag:"rect",attributes:Q({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(y,")")},Af)}),{children:r,attributes:i}}}},Mx={provides:function(e){var n=!1;ji.matchMedia&&(n=ji.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Q(Q({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Q(Q({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:Q(Q({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:Q(Q({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Q(Q({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:Q(Q({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Q(Q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:Q(Q({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Q(Q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Vx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},jx=[VP,Ix,Sx,Ax,kx,xx,Nx,Ox,Lx,Mx,Vx];XP(jx,{mixoutsTo:Cn});Cn.noAuto;Cn.config;Cn.library;Cn.dom;var Kp=Cn.parse;Cn.findIconDefinition;Cn.toHtml;var Ux=Cn.icon;Cn.layer;Cn.text;Cn.counter;var UT={exports:{}},Fx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Bx=Fx,zx=Bx;function FT(){}function BT(){}BT.resetWarningCache=FT;var $x=function(){function t(r,i,s,o,a,u){if(u!==zx){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:BT,resetWarningCache:FT};return n.PropTypes=n,n};UT.exports=$x();var Hx=UT.exports;const we=Am(Hx);function h0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ir(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?h0(Object(n),!0).forEach(function(r){To(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _d(t){"@babel/helpers - typeof";return _d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_d(t)}function To(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Wx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function qx(t,e){if(t==null)return{};var n=Wx(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Qp(t){return Gx(t)||Kx(t)||Qx(t)||Yx()}function Gx(t){if(Array.isArray(t))return Yp(t)}function Kx(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Qx(t,e){if(t){if(typeof t=="string")return Yp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yp(t,e)}}function Yp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Yx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xx(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,f=t.pulse,m=t.fixedWidth,E=t.inverse,A=t.border,k=t.listItem,x=t.flip,S=t.size,y=t.rotation,I=t.pull,O=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":m,"fa-inverse":E,"fa-border":A,"fa-li":k,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},To(e,"fa-".concat(S),typeof S<"u"&&S!==null),To(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),To(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),To(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(O).map(function(F){return O[F]?F:null}).filter(function(F){return F})}function Jx(t){return t=t-0,t===t}function zT(t){return Jx(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Zx=["style"];function eN(t){return t.charAt(0).toUpperCase()+t.slice(1)}function tN(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=zT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[eN(i)]=s:e[i]=s,e},{})}function $T(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return $T(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=tN(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[zT(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=qx(n,Zx);return i.attrs.style=ir(ir({},i.attrs.style),o),t.apply(void 0,[e.tag,ir(ir({},i.attrs),a)].concat(Qp(r)))}var HT=!1;try{HT=!0}catch{}function nN(){if(!HT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function f0(t){if(t&&_d(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kp.icon)return Kp.icon(t);if(t===null)return null;if(t&&_d(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function kf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?To({},t,e):{}}var p0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},_n=Ne.forwardRef(function(t,e){var n=ir(ir({},p0),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,d=f0(r),f=kf("classes",[].concat(Qp(Xx(n)),Qp((o||"").split(" ")))),m=kf("transform",typeof n.transform=="string"?Kp.transform(n.transform):n.transform),E=kf("mask",f0(i)),A=Ux(d,ir(ir(ir(ir({},f),m),E),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!A)return nN("Could not find icon",d),null;var k=A.abstract,x={ref:e};return Object.keys(n).forEach(function(S){p0.hasOwnProperty(S)||(x[S]=n[S])}),rN(k[0],x)});_n.displayName="FontAwesomeIcon";_n.propTypes={beat:we.bool,border:we.bool,beatFade:we.bool,bounce:we.bool,className:we.string,fade:we.bool,flash:we.bool,mask:we.oneOfType([we.object,we.array,we.string]),maskId:we.string,fixedWidth:we.bool,inverse:we.bool,flip:we.oneOf([!0,!1,"horizontal","vertical","both"]),icon:we.oneOfType([we.object,we.array,we.string]),listItem:we.bool,pull:we.oneOf(["right","left"]),pulse:we.bool,rotation:we.oneOf([0,90,180,270]),shake:we.bool,size:we.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:we.bool,spinPulse:we.bool,spinReverse:we.bool,symbol:we.oneOfType([we.bool,we.string]),title:we.string,titleId:we.string,transform:we.oneOfType([we.string,we.object]),swapOpacity:we.bool};var rN=$T.bind(null,Ne.createElement),iN={prefix:"fas",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"]},sN={prefix:"fas",iconName:"address-book",icon:[512,512,[62138,"contact-book"],"f2b9","M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"]},oN={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Ei=oN,aN={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]};const lN=()=>g.jsxs("div",{className:"contactDiv",children:[g.jsx("h1",{className:"contactTitle",children:"Contact Us"}),g.jsxs("div",{className:"contactBox",children:[g.jsxs("div",{className:"contactItem",children:[g.jsx(_n,{icon:iN,size:"lg",color:"blue"}),g.jsx("p",{className:"textItem",children:"VaultKeep@VaultKeep.online"})]}),g.jsxs("div",{className:"contactItem",children:[g.jsx(_n,{icon:sN,size:"lg",color:"blue"}),g.jsx("p",{className:"textItem",children:"2850 W Main St, Alaska"})]})]})]}),uN="/assets/credit-CqynKYQT.gif",cN="/assets/credit-card-77DgrgvV.gif",dN="/assets/payment-CvNX97jl.gif",WT=()=>g.jsxs("div",{className:"instructionBg",children:[g.jsx("h1",{className:"instructionTitle",children:"Get Started"}),g.jsx("p",{className:"instructionDesc",children:" in 3 steps"}),g.jsxs("div",{className:"starter",children:[g.jsxs("div",{className:"starter1",children:[g.jsx("div",{children:g.jsx("img",{src:uN,width:"75px",height:"73px"})}),g.jsx("h5",{className:"cardTitle",children:"Sign Up"}),g.jsx("p",{className:"cardDesc",children:"Create an Account to get started."})]}),g.jsxs("div",{className:"starter2",children:[g.jsx("div",{children:g.jsx("img",{src:cN,width:"75px",height:"73px"})}),g.jsx("h5",{className:"cardTitle",children:"Safe Wallet"}),g.jsx("p",{className:"cardDesc",children:"a safe and secure multi chain is uniquely created for you"})]}),g.jsxs("div",{className:"starter3",children:[g.jsx("div",{children:g.jsx("img",{src:dN,width:"78px",height:"73px"})}),g.jsx("h5",{className:"cardTitle",children:"Transactions"}),g.jsx("p",{className:"cardDesc",children:"transactions are safely monitored and completed on multi-chains"})]})]})]}),qT=()=>g.jsxs("div",{className:"plansDiv",children:[g.jsxs("div",{className:"plansTitleDiv",children:[g.jsx("h1",{className:"plansTitle",children:"Safe & Secure"}),g.jsx("p",{className:"plansDesc",children:"start transactions on blockchains with confidence"})]}),g.jsx("div",{className:"plans",children:g.jsxs("div",{className:"plansBox",children:[g.jsx("p",{className:"plansBoxTitle",children:"VaultKeep"}),g.jsxs("div",{className:"plansContent",children:[g.jsx(_n,{icon:Ei,color:"lightblue"}),g.jsx("p",{className:"funding",children:"Multi-Currency Support: Manage a diverse portfolio with support for multiple cryptocurrencies in one wallet."})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(_n,{icon:Ei,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Instant Exchange: Swiftly exchange one cryptocurrency for another without leaving the app."})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(_n,{icon:Ei,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Advanced Encryption: State-of-the-art encryption to protect your funds and personal information."})]}),g.jsxs("div",{className:"plansContent",children:[g.jsx(_n,{icon:Ei,color:"lightblue"}),g.jsx("p",{className:"plansDesc",children:"Real-Time Price Alerts: Stay informed with customizable alerts for market price changes and trends."})]})]})})]}),hN="/assets/safe-tru0fKw2.gif",fN=()=>g.jsx("div",{className:"talkBoardDiv",children:g.jsxs("div",{className:"talkBoardSection",children:[g.jsxs("div",{className:"talkBoardItem1",children:[g.jsx("h2",{className:"talkTitle",children:"Try us today"}),g.jsx("p",{className:"talkDesc",children:"Our aim is to empower you with the power and security needed to make informed financial decisions and trade with confidence."})]}),g.jsx("div",{className:"talkBoardItem2",children:g.jsx("img",{src:hN,className:"talkBoardImage"})})]})}),Qt=()=>g.jsx("div",{className:"footerBox",children:g.jsxs("div",{className:"footerContent",children:[g.jsx(_n,{icon:aN,color:"blue"}),g.jsx("p",{className:"footerText",children:"2024 VaultKeep inc."}),g.jsx("div",{className:"social"})]})}),pN=()=>g.jsxs("div",{className:"home",children:[g.jsx(sP,{}),g.jsx(B_,{}),g.jsx(oP,{}),g.jsx(WT,{}),g.jsx(qT,{}),g.jsx(B_,{}),g.jsx(fN,{}),g.jsx(lN,{}),g.jsx(Qt,{})]});var m0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},KT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(GT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new gN;const m=s<<2|a>>4;if(r.push(m),c!==64){const E=a<<4&240|c>>2;if(r.push(E),f!==64){const A=c<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vN=function(t){const e=GT(t);return KT.encodeByteArray(e,!0)},wd=function(t){return vN(t).replace(/\./g,"")},QT=function(t){try{return KT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=()=>yN().__FIREBASE_DEFAULTS__,wN=()=>{if(typeof process>"u"||typeof m0>"u")return;const t=m0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&QT(t[1]);return e&&JSON.parse(e)},ch=()=>{try{return _N()||wN()||EN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},YT=t=>{var e,n;return(n=(e=ch())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XT=t=>{const e=YT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},JT=()=>{var t;return(t=ch())===null||t===void 0?void 0:t.config},ZT=t=>{var e;return(e=ch())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wd(JSON.stringify(n)),wd(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function SN(){var t;const e=(t=ch())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CN(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bN(){return!SN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RN(){try{return typeof indexedDB=="object"}catch{return!1}}function PN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN="FirebaseError";class _r extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xN,Object.setPrototypeOf(this,_r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,au.prototype.create)}}class au{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?NN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _r(i,a,r)}}function NN(t,e){return t.replace(ON,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ON=/\{\$([^}]+)}/g;function DN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ed(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(g0(s)&&g0(o)){if(!Ed(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function g0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ha(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Wa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LN(t,e){const n=new MN(t,e);return n.subscribe.bind(n)}class MN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cf),i.error===void 0&&(i.error=Cf),i.complete===void 0&&(i.complete=Cf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){return t&&t._delegate?t._delegate:t}let Bi=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new TN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FN(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UN(t){return t===os?void 0:t}function FN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const zN={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},$N=Se.INFO,HN={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},WN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=HN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ug{constructor(e){this.name=e,this._logLevel=$N,this._logHandler=WN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const qN=(t,e)=>e.some(n=>t instanceof n);let v0,y0;function GN(){return v0||(v0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KN(){return y0||(y0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tI=new WeakMap,Xp=new WeakMap,nI=new WeakMap,bf=new WeakMap,Fg=new WeakMap;function QN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Oi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tI.set(n,t)}).catch(()=>{}),Fg.set(e,t),e}function YN(t){if(Xp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xp.set(t,e)}let Jp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Oi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XN(t){Jp=t(Jp)}function JN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rf(this),e,...n);return nI.set(r,e.sort?e.sort():[e]),Oi(r)}:KN().includes(t)?function(...e){return t.apply(Rf(this),e),Oi(tI.get(this))}:function(...e){return Oi(t.apply(Rf(this),e))}}function ZN(t){return typeof t=="function"?JN(t):(t instanceof IDBTransaction&&YN(t),qN(t,GN())?new Proxy(t,Jp):t)}function Oi(t){if(t instanceof IDBRequest)return QN(t);if(bf.has(t))return bf.get(t);const e=ZN(t);return e!==t&&(bf.set(t,e),Fg.set(e,t)),e}const Rf=t=>Fg.get(t);function e2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Oi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Oi(o.result),u.oldVersion,u.newVersion,Oi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const t2=["get","getKey","getAll","getAllKeys","count"],n2=["put","add","delete","clear"],Pf=new Map;function _0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pf.get(e))return Pf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=n2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||t2.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Pf.set(e,s),s}XN(t=>({...t,get:(e,n,r)=>_0(e,n)||t.get(e,n,r),has:(e,n)=>!!_0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function i2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zp="@firebase/app",w0="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Ug("@firebase/app"),s2="@firebase/app-compat",o2="@firebase/analytics-compat",a2="@firebase/analytics",l2="@firebase/app-check-compat",u2="@firebase/app-check",c2="@firebase/auth",d2="@firebase/auth-compat",h2="@firebase/database",f2="@firebase/database-compat",p2="@firebase/functions",m2="@firebase/functions-compat",g2="@firebase/installations",v2="@firebase/installations-compat",y2="@firebase/messaging",_2="@firebase/messaging-compat",w2="@firebase/performance",E2="@firebase/performance-compat",T2="@firebase/remote-config",I2="@firebase/remote-config-compat",S2="@firebase/storage",A2="@firebase/storage-compat",k2="@firebase/firestore",C2="@firebase/vertexai-preview",b2="@firebase/firestore-compat",R2="firebase",P2="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="[DEFAULT]",x2={[Zp]:"fire-core",[s2]:"fire-core-compat",[a2]:"fire-analytics",[o2]:"fire-analytics-compat",[u2]:"fire-app-check",[l2]:"fire-app-check-compat",[c2]:"fire-auth",[d2]:"fire-auth-compat",[h2]:"fire-rtdb",[f2]:"fire-rtdb-compat",[p2]:"fire-fn",[m2]:"fire-fn-compat",[g2]:"fire-iid",[v2]:"fire-iid-compat",[y2]:"fire-fcm",[_2]:"fire-fcm-compat",[w2]:"fire-perf",[E2]:"fire-perf-compat",[T2]:"fire-rc",[I2]:"fire-rc-compat",[S2]:"fire-gcs",[A2]:"fire-gcs-compat",[k2]:"fire-fst",[b2]:"fire-fst-compat",[C2]:"fire-vertex","fire-js":"fire-js",[R2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Map,N2=new Map,tm=new Map;function E0(t,e){try{t.container.addComponent(e)}catch(n){Rs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(tm.has(e))return Rs.debug(`There were multiple attempts to register component ${e}.`),!1;tm.set(e,t);for(const n of Td.values())E0(n,t);for(const n of N2.values())E0(n,t);return!0}function dh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ar(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Di=new au("app","Firebase",O2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Di.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=P2;function rI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:em,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Di.create("bad-app-name",{appName:String(i)});if(n||(n=JT()),!n)throw Di.create("no-options");const s=Td.get(i);if(s){if(Ed(n,s.options)&&Ed(r,s.config))return s;throw Di.create("duplicate-app",{appName:i})}const o=new BN(i);for(const u of tm.values())o.addComponent(u);const a=new D2(n,r,o);return Td.set(i,a),a}function Bg(t=em){const e=Td.get(t);if(!e&&t===em&&JT())return rI();if(!e)throw Di.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let i=(r=x2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rs.warn(a.join(" "));return}Ps(new Bi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="firebase-heartbeat-database",M2=1,Ul="firebase-heartbeat-store";let xf=null;function iI(){return xf||(xf=e2(L2,M2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ul)}catch(n){console.warn(n)}}}}).catch(t=>{throw Di.create("idb-open",{originalErrorMessage:t.message})})),xf}async function V2(t){try{const n=(await iI()).transaction(Ul),r=await n.objectStore(Ul).get(sI(t));return await n.done,r}catch(e){if(e instanceof _r)Rs.warn(e.message);else{const n=Di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rs.warn(n.message)}}}async function T0(t,e){try{const r=(await iI()).transaction(Ul,"readwrite");await r.objectStore(Ul).put(e,sI(t)),await r.done}catch(n){if(n instanceof _r)Rs.warn(n.message);else{const r=Di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rs.warn(r.message)}}}function sI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=1024,U2=30*24*60*60*1e3;class F2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=I0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=U2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=I0(),{heartbeatsToSend:r,unsentEntries:i}=B2(this._heartbeatsCache.heartbeats),s=wd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function I0(){return new Date().toISOString().substring(0,10)}function B2(t,e=j2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),S0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),S0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class z2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RN()?PN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await V2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return T0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return T0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function S0(t){return wd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(t){Ps(new Bi("platform-logger",e=>new r2(e),"PRIVATE")),Ps(new Bi("heartbeat",e=>new F2(e),"PRIVATE")),dr(Zp,w0,t),dr(Zp,w0,"esm2017"),dr("fire-js","")}$2("");var H2="firebase",W2="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr(H2,W2,"app");function zg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function oI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q2=oI,aI=new au("auth","Firebase",oI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new Ug("@firebase/auth");function G2(t,...e){Id.logLevel<=Se.WARN&&Id.warn(`Auth (${Us}): ${t}`,...e)}function Nc(t,...e){Id.logLevel<=Se.ERROR&&Id.error(`Auth (${Us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,...e){throw $g(t,...e)}function hr(t,...e){return $g(t,...e)}function lI(t,e,n){const r=Object.assign(Object.assign({},q2()),{[e]:n});return new au("auth","Firebase",r).create(e,{appName:t.name})}function Lr(t){return lI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $g(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aI.create(t,...e)}function le(t,e,...n){if(!t)throw $g(e,...n)}function xr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nc(e),new Error(e)}function Wr(t,e){t||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function K2(){return A0()==="http:"||A0()==="https:"}function A0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(K2()||AN()||"connection"in navigator)?navigator.onLine:!0}function Y2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wr(n>e,"Short delay should be less than long delay!"),this.isMobile=IN()||kN()}get(){return Q2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e){Wr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=new uu(3e4,6e4);function Jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zr(t,e,n,r,i={}){return cI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=lu(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),uI.fetch()(dI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function cI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},X2),e);try{const i=new eO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ac(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ac(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ac(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ac(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw lI(t,d,c);Yn(t,d)}}catch(i){if(i instanceof _r)throw i;Yn(t,"network-request-failed",{message:String(i)})}}async function cu(t,e,n,r,i={}){const s=await Zr(t,e,n,r,i);return"mfaPendingCredential"in s&&Yn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hg(t.config,i):`${t.config.apiScheme}://${i}`}function Z2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hr(this.auth,"network-request-failed")),J2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ac(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hr(t,e,r);return i.customData._tokenResponse=n,i}function k0(t){return t!==void 0&&t.enterprise!==void 0}class tO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Z2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function nO(t,e){return Zr(t,"GET","/v2/recaptchaConfig",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rO(t,e){return Zr(t,"POST","/v1/accounts:delete",e)}async function hI(t,e){return Zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iO(t,e=!1){const n=Tt(t),r=await n.getIdToken(e),i=Wg(r);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ll(Nf(i.auth_time)),issuedAtTime:ll(Nf(i.iat)),expirationTime:ll(Nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nf(t){return Number(t)*1e3}function Wg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nc("JWT malformed, contained fewer than 3 sections"),null;try{const i=QT(n);return i?JSON.parse(i):(Nc("Failed to decode base64 JWT payload"),null)}catch(i){return Nc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function C0(t){const e=Wg(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _r&&sO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ll(this.lastLoginAt),this.creationTime=ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fl(t,hI(n,{idToken:r}));le(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fI(s.providerUserInfo):[],a=lO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function aO(t){const e=Tt(t);await Sd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fI(t){return t.map(e=>{var{providerId:n}=e,r=zg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uO(t,e){const n=await cI(t,{},async()=>{const r=lu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=dI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cO(t,e){return Zr(t,"POST","/v2/accounts:revokeToken",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):C0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=C0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xo;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(le(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fl(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iO(this,e)}reload(){return aO(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ar(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await Fl(this,rO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:O,isAnonymous:F,providerData:P,stsTokenManager:T}=n;le(I&&T,e,"internal-error");const v=xo.fromJSON(this.name,T);le(typeof I=="string",e,"internal-error"),li(f,e.name),li(m,e.name),le(typeof O=="boolean",e,"internal-error"),le(typeof F=="boolean",e,"internal-error"),li(E,e.name),li(A,e.name),li(k,e.name),li(x,e.name),li(S,e.name),li(y,e.name);const _=new Nr({uid:I,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:F,photoURL:A,phoneNumber:E,tenantId:k,stsTokenManager:v,createdAt:S,lastLoginAt:y});return P&&Array.isArray(P)&&(_.providerData=P.map(C=>Object.assign({},C))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new xo;i.updateFromServerResponse(n);const s=new Nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sd(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];le(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new xo;a.updateFromIdToken(r);const u=new Nr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=new Map;function Or(t){Wr(t instanceof Function,"Expected a class definition");let e=b0.get(t);return e?(Wr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pI.type="NONE";const R0=pI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e,n){return`firebase:${t}:${e}:${n}`}class No{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new No(Or(R0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Or(R0);const o=Oc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Nr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new No(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new No(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_I(e))return"Blackberry";if(wI(e))return"Webos";if(qg(e))return"Safari";if((e.includes("chrome/")||gI(e))&&!e.includes("edge/"))return"Chrome";if(yI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mI(t=Lt()){return/firefox\//i.test(t)}function qg(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gI(t=Lt()){return/crios\//i.test(t)}function vI(t=Lt()){return/iemobile/i.test(t)}function yI(t=Lt()){return/android/i.test(t)}function _I(t=Lt()){return/blackberry/i.test(t)}function wI(t=Lt()){return/webos/i.test(t)}function hh(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dO(t=Lt()){var e;return hh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hO(){return CN()&&document.documentMode===10}function EI(t=Lt()){return hh(t)||yI(t)||wI(t)||_I(t)||/windows phone/i.test(t)||vI(t)}function fO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t,e=[]){let n;switch(t){case"Browser":n=P0(Lt());break;case"Worker":n=`${P0(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mO(t,e={}){return Zr(t,"GET","/v2/passwordPolicy",Jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=6;class vO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new x0(this),this.idTokenSubscription=new x0(this),this.beforeStateQueue=new pO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hI(this,{idToken:e}),r=await Nr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ar(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Y2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ar(this.app))return Promise.reject(Lr(this));const n=e?Tt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ar(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ar(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mO(this),n=new vO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new au("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Or(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[Or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&G2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ki(t){return Tt(t)}class x0{constructor(e){this.auth=e,this.observer=null,this.addObserver=LN(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _O(t){fh=t}function II(t){return fh.loadJS(t)}function wO(){return fh.recaptchaEnterpriseScript}function EO(){return fh.gapiScript}function TO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const IO="recaptcha-enterprise",SO="NO_RECAPTCHA";class AO{constructor(e){this.type=IO,this.auth=Ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{nO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new tO(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;k0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(SO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&k0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=wO();u.length!==0&&(u+=a),II(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function N0(t,e,n,r=!1){const i=new AO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ad(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await N0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await N0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t,e){const n=dh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ed(s,e??{}))return i;Yn(i,"already-initialized")}return n.initialize({options:e})}function CO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bO(t,e,n){const r=Ki(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=SI(e),{host:o,port:a}=RO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),PO()}function SI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RO(t){const e=SI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:O0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:O0(o)}}}function O0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,n){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}async function xO(t,e){return Zr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t,e){return cu(t,"POST","/v1/accounts:signInWithPassword",Jr(t,e))}async function OO(t,e){return Zr(t,"POST","/v1/accounts:sendOobCode",Jr(t,e))}async function DO(t,e){return OO(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LO(t,e){return cu(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}async function MO(t,e){return cu(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Gg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ad(e,n,"signInWithPassword",NO);case"emailLink":return LO(e,{email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ad(e,r,"signUpPassword",xO);case"emailLink":return MO(e,{idToken:n,email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(t,e){return cu(t,"POST","/v1/accounts:signInWithIdp",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO="http://localhost";class xs extends Gg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Oo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Oo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oo(e,n)}buildRequest(){const e={requestUri:VO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UO(t){const e=Ha(Wa(t)).link,n=e?Ha(Wa(e)).deep_link_id:null,r=Ha(Wa(t)).deep_link_id;return(r?Ha(Wa(r)).link:null)||r||n||e||t}class Kg{constructor(e){var n,r,i,s,o,a;const u=Ha(Wa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=jO((i=u.mode)!==null&&i!==void 0?i:null);le(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UO(e);try{return new Kg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.providerId=ta.PROVIDER_ID}static credential(e,n){return Bl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kg.parseLink(n);return le(r,"argument-error"),Bl._fromEmailAndCode(e,r.code,r.tenantId)}}ta.PROVIDER_ID="password";ta.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ta.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du extends AI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends du{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends du{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mi.credential(n,r)}catch{return null}}}mi.GOOGLE_SIGN_IN_METHOD="google.com";mi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends du{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.GITHUB_SIGN_IN_METHOD="github.com";gi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends du{constructor(){super("twitter.com")}static credential(e,n){return xs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vi.credential(n,r)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(t,e){return cu(t,"POST","/v1/accounts:signUp",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nr._fromIdTokenResponse(e,r,i),o=D0(r);return new Ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=D0(r);return new Ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function D0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends _r{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kd(e,n,r,i)}}function kI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kd._fromErrorAndOperation(t,s,e,r):s})}async function BO(t,e,n=!1){const r=await Fl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ns._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO(t,e,n=!1){const{auth:r}=t;if(ar(r.app))return Promise.reject(Lr(r));const i="reauthenticate";try{const s=await Fl(t,kI(r,i,e,t),n);le(s.idToken,r,"internal-error");const o=Wg(s.idToken);le(o,r,"internal-error");const{sub:a}=o;return le(t.uid===a,r,"user-mismatch"),Ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e,n=!1){if(ar(t.app))return Promise.reject(Lr(t));const r="signIn",i=await kI(t,r,e),s=await Ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $O(t,e){return CI(Ki(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t){const e=Ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HO(t,e,n){const r=Ki(t);await Ad(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",DO)}async function WO(t,e,n){if(ar(t.app))return Promise.reject(Lr(t));const r=Ki(t),o=await Ad(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FO).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&bI(t),u}),a=await Ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function qO(t,e,n){return ar(t.app)?Promise.reject(Lr(t)):$O(Tt(t),ta.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bI(t),r})}function GO(t,e,n,r){return Tt(t).onIdTokenChanged(e,n,r)}function KO(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}const Cd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cd,"1"),this.storage.removeItem(Cd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(){const t=Lt();return qg(t)||hh(t)}const YO=1e3,XO=10;class PI extends RI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QO()&&fO(),this.fallbackToPolling=EI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}PI.type="LOCAL";const JO=PI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI extends RI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xI.type="SESSION";const NI=xI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await ZO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Qg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(){return window}function tD(t){fr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(){return typeof fr().WorkerGlobalScope<"u"&&typeof fr().importScripts=="function"}async function nD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iD(){return OI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="firebaseLocalStorageDb",sD=1,bd="firebaseLocalStorage",LI="fbase_key";class hu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mh(t,e){return t.transaction([bd],e?"readwrite":"readonly").objectStore(bd)}function oD(){const t=indexedDB.deleteDatabase(DI);return new hu(t).toPromise()}function im(){const t=indexedDB.open(DI,sD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bd,{keyPath:LI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bd)?e(r):(r.close(),await oD(),e(await im()))})})}async function L0(t,e,n){const r=mh(t,!0).put({[LI]:e,value:n});return new hu(r).toPromise()}async function aD(t,e){const n=mh(t,!1).get(e),r=await new hu(n).toPromise();return r===void 0?null:r.value}function M0(t,e){const n=mh(t,!0).delete(e);return new hu(n).toPromise()}const lD=800,uD=3;class MI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await im(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return OI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(iD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nD(),!this.activeServiceWorker)return;this.sender=new eD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await im();return await L0(e,Cd,"1"),await M0(e,Cd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>L0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>M0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mh(i,!1).getAll();return new hu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}MI.type="LOCAL";const cD=MI;new uu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t,e){return e?Or(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg extends Gg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hD(t){return CI(t.auth,new Yg(t),t.bypassAuthState)}function fD(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),zO(n,new Yg(t),t.bypassAuthState)}async function pD(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),BO(n,new Yg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hD;case"linkViaPopup":case"linkViaRedirect":return pD;case"reauthViaPopup":case"reauthViaRedirect":return fD;default:Yn(this.auth,"internal-error")}}resolve(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=new uu(2e3,1e4);class Io extends VI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Wr(this.filter.length===1,"Popup operations only handle one event");const e=Qg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mD.get())};e()}}Io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="pendingRedirect",Dc=new Map;class vD extends VI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dc.get(this.auth._key());if(!e){try{const r=await yD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dc.set(this.auth._key(),e)}return this.bypassAuthState||Dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yD(t,e){const n=ED(e),r=wD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _D(t,e){Dc.set(t._key(),e)}function wD(t){return Or(t._redirectPersistence)}function ED(t){return Oc(gD,t.config.apiKey,t.name)}async function TD(t,e,n=!1){if(ar(t.app))return Promise.reject(Lr(t));const r=Ki(t),i=dD(r,e),o=await new vD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=10*60*1e3;class SD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ID&&this.cachedEventUids.clear(),this.cachedEventUids.has(V0(e))}saveEventToCache(e){this.cachedEventUids.add(V0(e)),this.lastProcessedEventTime=Date.now()}}function V0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kD(t,e={}){return Zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bD=/^https?/;async function RD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kD(t);for(const n of e)try{if(PD(n))return}catch{}Yn(t,"unauthorized-domain")}function PD(t){const e=nm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bD.test(n))return!1;if(CD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=new uu(3e4,6e4);function j0(){const t=fr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ND(t){return new Promise((e,n)=>{var r,i,s;function o(){j0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{j0(),n(hr(t,"network-request-failed"))},timeout:xD.get()})}if(!((i=(r=fr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fr().gapi)===null||s===void 0)&&s.load)o();else{const a=TO("iframefcb");return fr()[a]=()=>{gapi.load?o():n(hr(t,"network-request-failed"))},II(`${EO()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Lc=null,e})}let Lc=null;function OD(t){return Lc=Lc||ND(t),Lc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=new uu(5e3,15e3),LD="__/auth/iframe",MD="emulator/auth/iframe",VD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UD(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hg(e,MD):`https://${t.config.authDomain}/${LD}`,r={apiKey:e.apiKey,appName:t.name,v:Us},i=jD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lu(r).slice(1)}`}async function FD(t){const e=await OD(t),n=fr().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:UD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hr(t,"network-request-failed"),a=fr().setTimeout(()=>{s(o)},DD.get());function u(){fr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zD=500,$D=600,HD="_blank",WD="http://localhost";class U0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qD(t,e,n,r=zD,i=$D){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},BD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Lt().toLowerCase();n&&(a=gI(c)?HD:n),mI(c)&&(e=e||WD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,A])=>`${m}${E}=${A},`,"");if(dO(c)&&a!=="_self")return GD(e||"",a),new U0(null);const f=window.open(e||"",a,d);le(f,t,"popup-blocked");try{f.focus()}catch{}return new U0(f)}function GD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD="__/auth/handler",QD="emulator/auth/handler",YD=encodeURIComponent("fac");async function F0(t,e,n,r,i,s){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Us,eventId:i};if(e instanceof AI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof du){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${YD}=${encodeURIComponent(u)}`:"";return`${XD(t)}?${lu(a).slice(1)}${c}`}function XD({config:t}){return t.emulator?Hg(t,QD):`https://${t.authDomain}/${KD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="webStorageSupport";class JD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NI,this._completeRedirectFn=TD,this._overrideRedirectResult=_D}async _openPopup(e,n,r,i){var s;Wr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await F0(e,n,r,nm(),i);return qD(e,o,Qg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await F0(e,n,r,nm(),i);return tD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FD(e),r=new SD(e);return n.register("authEvent",i=>(le(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Of,{type:Of},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Of];o!==void 0&&n(!!o),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EI()||qg()||hh()}}const ZD=JD;var B0="@firebase/auth",z0="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nL(t){Ps(new Bi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TI(t)},c=new yO(r,i,s,u);return CO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new Bi("auth-internal",e=>{const n=Ki(e.getProvider("auth").getImmediate());return(r=>new eL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(B0,z0,tL(t)),dr(B0,z0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=5*60,iL=ZT("authIdTokenMaxAge")||rL;let $0=null;const sL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iL)return;const i=n==null?void 0:n.token;$0!==i&&($0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oL(t=Bg()){const e=dh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kO(t,{popupRedirectResolver:ZD,persistence:[cD,JO,NI]}),r=ZT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sL(s.toString());KO(n,o,()=>o(n.currentUser)),GO(n,a=>o(a))}}const i=YT("auth");return i&&bO(n,`http://${i}`),n}function aL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_O({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nL("Browser");var H0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ys,UI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function _(){}_.prototype=v.prototype,T.D=v.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(C,R,D){for(var b=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)b[ye-2]=arguments[ye];return v.prototype[R].apply(C,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,_){_||(_=0);var C=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)C[R]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(R=0;16>R;++R)C[R]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=T.g[0],_=T.g[1],R=T.g[2];var D=T.g[3],b=v+(D^_&(R^D))+C[0]+3614090360&4294967295;v=_+(b<<7&4294967295|b>>>25),b=D+(R^v&(_^R))+C[1]+3905402710&4294967295,D=v+(b<<12&4294967295|b>>>20),b=R+(_^D&(v^_))+C[2]+606105819&4294967295,R=D+(b<<17&4294967295|b>>>15),b=_+(v^R&(D^v))+C[3]+3250441966&4294967295,_=R+(b<<22&4294967295|b>>>10),b=v+(D^_&(R^D))+C[4]+4118548399&4294967295,v=_+(b<<7&4294967295|b>>>25),b=D+(R^v&(_^R))+C[5]+1200080426&4294967295,D=v+(b<<12&4294967295|b>>>20),b=R+(_^D&(v^_))+C[6]+2821735955&4294967295,R=D+(b<<17&4294967295|b>>>15),b=_+(v^R&(D^v))+C[7]+4249261313&4294967295,_=R+(b<<22&4294967295|b>>>10),b=v+(D^_&(R^D))+C[8]+1770035416&4294967295,v=_+(b<<7&4294967295|b>>>25),b=D+(R^v&(_^R))+C[9]+2336552879&4294967295,D=v+(b<<12&4294967295|b>>>20),b=R+(_^D&(v^_))+C[10]+4294925233&4294967295,R=D+(b<<17&4294967295|b>>>15),b=_+(v^R&(D^v))+C[11]+2304563134&4294967295,_=R+(b<<22&4294967295|b>>>10),b=v+(D^_&(R^D))+C[12]+1804603682&4294967295,v=_+(b<<7&4294967295|b>>>25),b=D+(R^v&(_^R))+C[13]+4254626195&4294967295,D=v+(b<<12&4294967295|b>>>20),b=R+(_^D&(v^_))+C[14]+2792965006&4294967295,R=D+(b<<17&4294967295|b>>>15),b=_+(v^R&(D^v))+C[15]+1236535329&4294967295,_=R+(b<<22&4294967295|b>>>10),b=v+(R^D&(_^R))+C[1]+4129170786&4294967295,v=_+(b<<5&4294967295|b>>>27),b=D+(_^R&(v^_))+C[6]+3225465664&4294967295,D=v+(b<<9&4294967295|b>>>23),b=R+(v^_&(D^v))+C[11]+643717713&4294967295,R=D+(b<<14&4294967295|b>>>18),b=_+(D^v&(R^D))+C[0]+3921069994&4294967295,_=R+(b<<20&4294967295|b>>>12),b=v+(R^D&(_^R))+C[5]+3593408605&4294967295,v=_+(b<<5&4294967295|b>>>27),b=D+(_^R&(v^_))+C[10]+38016083&4294967295,D=v+(b<<9&4294967295|b>>>23),b=R+(v^_&(D^v))+C[15]+3634488961&4294967295,R=D+(b<<14&4294967295|b>>>18),b=_+(D^v&(R^D))+C[4]+3889429448&4294967295,_=R+(b<<20&4294967295|b>>>12),b=v+(R^D&(_^R))+C[9]+568446438&4294967295,v=_+(b<<5&4294967295|b>>>27),b=D+(_^R&(v^_))+C[14]+3275163606&4294967295,D=v+(b<<9&4294967295|b>>>23),b=R+(v^_&(D^v))+C[3]+4107603335&4294967295,R=D+(b<<14&4294967295|b>>>18),b=_+(D^v&(R^D))+C[8]+1163531501&4294967295,_=R+(b<<20&4294967295|b>>>12),b=v+(R^D&(_^R))+C[13]+2850285829&4294967295,v=_+(b<<5&4294967295|b>>>27),b=D+(_^R&(v^_))+C[2]+4243563512&4294967295,D=v+(b<<9&4294967295|b>>>23),b=R+(v^_&(D^v))+C[7]+1735328473&4294967295,R=D+(b<<14&4294967295|b>>>18),b=_+(D^v&(R^D))+C[12]+2368359562&4294967295,_=R+(b<<20&4294967295|b>>>12),b=v+(_^R^D)+C[5]+4294588738&4294967295,v=_+(b<<4&4294967295|b>>>28),b=D+(v^_^R)+C[8]+2272392833&4294967295,D=v+(b<<11&4294967295|b>>>21),b=R+(D^v^_)+C[11]+1839030562&4294967295,R=D+(b<<16&4294967295|b>>>16),b=_+(R^D^v)+C[14]+4259657740&4294967295,_=R+(b<<23&4294967295|b>>>9),b=v+(_^R^D)+C[1]+2763975236&4294967295,v=_+(b<<4&4294967295|b>>>28),b=D+(v^_^R)+C[4]+1272893353&4294967295,D=v+(b<<11&4294967295|b>>>21),b=R+(D^v^_)+C[7]+4139469664&4294967295,R=D+(b<<16&4294967295|b>>>16),b=_+(R^D^v)+C[10]+3200236656&4294967295,_=R+(b<<23&4294967295|b>>>9),b=v+(_^R^D)+C[13]+681279174&4294967295,v=_+(b<<4&4294967295|b>>>28),b=D+(v^_^R)+C[0]+3936430074&4294967295,D=v+(b<<11&4294967295|b>>>21),b=R+(D^v^_)+C[3]+3572445317&4294967295,R=D+(b<<16&4294967295|b>>>16),b=_+(R^D^v)+C[6]+76029189&4294967295,_=R+(b<<23&4294967295|b>>>9),b=v+(_^R^D)+C[9]+3654602809&4294967295,v=_+(b<<4&4294967295|b>>>28),b=D+(v^_^R)+C[12]+3873151461&4294967295,D=v+(b<<11&4294967295|b>>>21),b=R+(D^v^_)+C[15]+530742520&4294967295,R=D+(b<<16&4294967295|b>>>16),b=_+(R^D^v)+C[2]+3299628645&4294967295,_=R+(b<<23&4294967295|b>>>9),b=v+(R^(_|~D))+C[0]+4096336452&4294967295,v=_+(b<<6&4294967295|b>>>26),b=D+(_^(v|~R))+C[7]+1126891415&4294967295,D=v+(b<<10&4294967295|b>>>22),b=R+(v^(D|~_))+C[14]+2878612391&4294967295,R=D+(b<<15&4294967295|b>>>17),b=_+(D^(R|~v))+C[5]+4237533241&4294967295,_=R+(b<<21&4294967295|b>>>11),b=v+(R^(_|~D))+C[12]+1700485571&4294967295,v=_+(b<<6&4294967295|b>>>26),b=D+(_^(v|~R))+C[3]+2399980690&4294967295,D=v+(b<<10&4294967295|b>>>22),b=R+(v^(D|~_))+C[10]+4293915773&4294967295,R=D+(b<<15&4294967295|b>>>17),b=_+(D^(R|~v))+C[1]+2240044497&4294967295,_=R+(b<<21&4294967295|b>>>11),b=v+(R^(_|~D))+C[8]+1873313359&4294967295,v=_+(b<<6&4294967295|b>>>26),b=D+(_^(v|~R))+C[15]+4264355552&4294967295,D=v+(b<<10&4294967295|b>>>22),b=R+(v^(D|~_))+C[6]+2734768916&4294967295,R=D+(b<<15&4294967295|b>>>17),b=_+(D^(R|~v))+C[13]+1309151649&4294967295,_=R+(b<<21&4294967295|b>>>11),b=v+(R^(_|~D))+C[4]+4149444226&4294967295,v=_+(b<<6&4294967295|b>>>26),b=D+(_^(v|~R))+C[11]+3174756917&4294967295,D=v+(b<<10&4294967295|b>>>22),b=R+(v^(D|~_))+C[2]+718787259&4294967295,R=D+(b<<15&4294967295|b>>>17),b=_+(D^(R|~v))+C[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(R+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+D&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var _=v-this.blockSize,C=this.B,R=this.h,D=0;D<v;){if(R==0)for(;D<=_;)i(this,T,D),D+=this.blockSize;if(typeof T=="string"){for(;D<v;)if(C[R++]=T.charCodeAt(D++),R==this.blockSize){i(this,C),R=0;break}}else for(;D<v;)if(C[R++]=T[D++],R==this.blockSize){i(this,C),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var _=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=_&255,_/=256;for(this.u(T),T=Array(16),v=_=0;4>v;++v)for(var C=0;32>C;C+=8)T[_++]=this.g[v]>>>C&255;return T};function s(T,v){var _=a;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=v(T)}function o(T,v){this.h=v;for(var _=[],C=!0,R=T.length-1;0<=R;R--){var D=T[R]|0;C&&D==v||(_[R]=D,C=!1)}this.g=_}var a={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return x(c(-T));for(var v=[],_=1,C=0;T>=_;C++)v[C]=T/_|0,_*=4294967296;return new o(v,0)}function d(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return x(d(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=c(Math.pow(v,8)),C=f,R=0;R<T.length;R+=8){var D=Math.min(8,T.length-R),b=parseInt(T.substring(R,R+D),v);8>D?(D=c(Math.pow(v,D)),C=C.j(D).add(c(b))):(C=C.j(_),C=C.add(c(b)))}return C}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var T=0,v=1,_=0;_<this.g.length;_++){var C=this.i(_);T+=(0<=C?C:4294967296+C)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(k(this))return"-"+x(this).toString(T);for(var v=c(Math.pow(T,6)),_=this,C="";;){var R=O(_,v).g;_=S(_,R.j(v));var D=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=R,A(_))return D+C;for(;6>D.length;)D="0"+D;C=D+C}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=S(this,T),k(T)?-1:A(T)?0:1};function x(T){for(var v=T.g.length,_=[],C=0;C<v;C++)_[C]=~T.g[C];return new o(_,~T.h).add(m)}t.abs=function(){return k(this)?x(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],C=0,R=0;R<=v;R++){var D=C+(this.i(R)&65535)+(T.i(R)&65535),b=(D>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);C=b>>>16,D&=65535,b&=65535,_[R]=b<<16|D}return new o(_,_[_.length-1]&-2147483648?-1:0)};function S(T,v){return T.add(x(v))}t.j=function(T){if(A(this)||A(T))return f;if(k(this))return k(T)?x(this).j(x(T)):x(x(this).j(T));if(k(T))return x(this.j(x(T)));if(0>this.l(E)&&0>T.l(E))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,_=[],C=0;C<2*v;C++)_[C]=0;for(C=0;C<this.g.length;C++)for(var R=0;R<T.g.length;R++){var D=this.i(C)>>>16,b=this.i(C)&65535,ye=T.i(R)>>>16,at=T.i(R)&65535;_[2*C+2*R]+=b*at,y(_,2*C+2*R),_[2*C+2*R+1]+=D*at,y(_,2*C+2*R+1),_[2*C+2*R+1]+=b*ye,y(_,2*C+2*R+1),_[2*C+2*R+2]+=D*ye,y(_,2*C+2*R+2)}for(C=0;C<v;C++)_[C]=_[2*C+1]<<16|_[2*C];for(C=v;C<2*v;C++)_[C]=0;return new o(_,0)};function y(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function I(T,v){this.g=T,this.h=v}function O(T,v){if(A(v))throw Error("division by zero");if(A(T))return new I(f,f);if(k(T))return v=O(x(T),v),new I(x(v.g),x(v.h));if(k(v))return v=O(T,x(v)),new I(x(v.g),v.h);if(30<T.g.length){if(k(T)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var _=m,C=v;0>=C.l(T);)_=F(_),C=F(C);var R=P(_,1),D=P(C,1);for(C=P(C,2),_=P(_,2);!A(C);){var b=D.add(C);0>=b.l(T)&&(R=R.add(_),D=b),C=P(C,1),_=P(_,1)}return v=S(T,R.j(v)),new I(R,v)}for(R=f;0<=T.l(v);){for(_=Math.max(1,Math.floor(T.m()/v.m())),C=Math.ceil(Math.log(_)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),D=c(_),b=D.j(v);k(b)||0<b.l(T);)_-=C,D=c(_),b=D.j(v);A(D)&&(D=m),R=R.add(D),T=S(T,b)}return new I(R,T)}t.A=function(T){return O(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],C=0;C<v;C++)_[C]=this.i(C)&T.i(C);return new o(_,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],C=0;C<v;C++)_[C]=this.i(C)|T.i(C);return new o(_,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),_=[],C=0;C<v;C++)_[C]=this.i(C)^T.i(C);return new o(_,this.h^T.h)};function F(T){for(var v=T.g.length+1,_=[],C=0;C<v;C++)_[C]=T.i(C)<<1|T.i(C-1)>>>31;return new o(_,T.h)}function P(T,v){var _=v>>5;v%=32;for(var C=T.g.length-_,R=[],D=0;D<C;D++)R[D]=0<v?T.i(D+_)>>>v|T.i(D+_+1)<<32-v:T.i(D+_);return new o(R,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,UI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ys=o}).apply(typeof H0<"u"?H0:typeof self<"u"?self:typeof window<"u"?window:{});var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FI,BI,qa,zI,Mc,sm,$I,HI,WI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof lc=="object"&&lc];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in p))break e;p=p[M]}l=l[l.length-1],w=p[l],h=h(w),h!=w&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,w=!1,M={next:function(){if(!w&&p<l.length){var U=p++;return{value:h(U,l[U]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),l.apply(h,M)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function E(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var w=p.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function A(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(w,M,U){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return h.prototype[M].apply(w,G)}}function k(l){const h=l.length;if(0<h){const p=Array(h);for(let w=0;w<h;w++)p[w]=l[w];return p}return[]}function x(l,h){for(let p=1;p<arguments.length;p++){const w=arguments[p];if(u(w)){const M=l.length||0,U=w.length||0;l.length=M+U;for(let G=0;G<U;G++)l[M+G]=w[G]}else l.push(w)}}class S{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function P(l,h,p){for(const w in l)h.call(p,l[w],w,l)}function T(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function v(l){const h={};for(const p in l)h[p]=l[p];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,h){let p,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(p in w)l[p]=w[p];for(let U=0;U<_.length;U++)p=_[U],Object.prototype.hasOwnProperty.call(w,p)&&(l[p]=w[p])}}function R(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function D(l){a.setTimeout(()=>{throw l},0)}function b(){var l=ee;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class ye{constructor(){this.h=this.g=null}add(h,p){const w=at.get();w.set(h,p),this.h?this.h.next=w:this.g=w,this.h=w}}var at=new S(()=>new Yt,l=>l.reset());class Yt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,W=!1,ee=new ye,ie=()=>{const l=a.Promise.resolve(void 0);ge=()=>{l.then(me)}};var me=()=>{for(var l;l=b();){try{l.h.call(l.g)}catch(p){D(p)}var h=at;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}W=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Pe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function Me(l,h){if(ve.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(F){e:{try{O(h.nodeName);var M=!0;break e}catch{}M=!1}M||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Be[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Me.aa.h.call(this)}}A(Me,ve);var Be={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),Xi=0;function Mh(l,h,p,w,M){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!w,this.ha=M,this.key=++Xi,this.da=this.fa=!1}function $s(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Hs(l){this.src=l,this.g={},this.h=0}Hs.prototype.add=function(l,h,p,w,M){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var G=Jn(l,h,w,M);return-1<G?(h=l[G],p||(h.fa=!1)):(h=new Mh(h,this.src,U,!!w,M),h.fa=p,l.push(h)),h};function pt(l,h){var p=h.type;if(p in l.g){var w=l.g[p],M=Array.prototype.indexOf.call(w,h,void 0),U;(U=0<=M)&&Array.prototype.splice.call(w,M,1),U&&($s(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Jn(l,h,p,w){for(var M=0;M<l.length;++M){var U=l[M];if(!U.da&&U.listener==h&&U.capture==!!p&&U.ha==w)return M}return-1}var Ws="closure_lm_"+(1e6*Math.random()|0),aa={};function Zn(l,h,p,w,M){if(Array.isArray(h)){for(var U=0;U<h.length;U++)Zn(l,h[U],p,w,M);return null}return p=ei(p),l&&l[kt]?l.K(h,p,c(w)?!!w.capture:!!w,M):Vh(l,h,p,!1,w,M)}function Vh(l,h,p,w,M,U){if(!h)throw Error("Invalid event type");var G=c(M)?!!M.capture:!!M,Ve=ca(l);if(Ve||(l[Ws]=Ve=new Hs(l)),p=Ve.add(h,p,w,G,U),p.proxy)return p;if(w=jh(),p.proxy=w,w.src=l,w.listener=p,l.addEventListener)Pe||(M=G),M===void 0&&(M=!1),l.addEventListener(h.toString(),w,M);else if(l.attachEvent)l.attachEvent(Eu(h.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return p}function jh(){function l(p){return h.call(l.src,l.listener,p)}const h=Uh;return l}function la(l,h,p,w,M){if(Array.isArray(h))for(var U=0;U<h.length;U++)la(l,h[U],p,w,M);else w=c(w)?!!w.capture:!!w,p=ei(p),l&&l[kt]?(l=l.i,h=String(h).toString(),h in l.g&&(U=l.g[h],p=Jn(U,p,w,M),-1<p&&($s(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete l.g[h],l.h--)))):l&&(l=ca(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Jn(h,p,w,M)),(p=-1<l?h[l]:null)&&ua(p))}function ua(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[kt])pt(h.i,l);else{var p=l.type,w=l.proxy;h.removeEventListener?h.removeEventListener(p,w,l.capture):h.detachEvent?h.detachEvent(Eu(p),w):h.addListener&&h.removeListener&&h.removeListener(w),(p=ca(h))?(pt(p,l),p.h==0&&(p.src=null,h[Ws]=null)):$s(l)}}}function Eu(l){return l in aa?aa[l]:aa[l]="on"+l}function Uh(l,h){if(l.da)l=!0;else{h=new Me(h,this);var p=l.listener,w=l.ha||l.src;l.fa&&ua(l),l=p.call(w,h)}return l}function ca(l){return l=l[Ws],l instanceof Hs?l:null}var wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ei(l){return typeof l=="function"?l:(l[wr]||(l[wr]=function(h){return l.handleEvent(h)}),l[wr])}function mt(){ce.call(this),this.i=new Hs(this),this.M=this,this.F=null}A(mt,ce),mt.prototype[kt]=!0,mt.prototype.removeEventListener=function(l,h,p,w){la(this,l,h,p,w)};function gt(l,h){var p,w=l.F;if(w)for(p=[];w;w=w.F)p.push(w);if(l=l.M,w=h.type||h,typeof h=="string")h=new ve(h,l);else if(h instanceof ve)h.target=h.target||l;else{var M=h;h=new ve(w,l),C(h,M)}if(M=!0,p)for(var U=p.length-1;0<=U;U--){var G=h.g=p[U];M=fn(G,w,!0,h)&&M}if(G=h.g=l,M=fn(G,w,!0,h)&&M,M=fn(G,w,!1,h)&&M,p)for(U=0;U<p.length;U++)G=h.g=p[U],M=fn(G,w,!1,h)&&M}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],w=0;w<p.length;w++)$s(p[w]);delete l.g[h],l.h--}}this.F=null},mt.prototype.K=function(l,h,p,w){return this.i.add(String(l),h,!1,p,w)},mt.prototype.L=function(l,h,p,w){return this.i.add(String(l),h,!0,p,w)};function fn(l,h,p,w){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var M=!0,U=0;U<h.length;++U){var G=h[U];if(G&&!G.da&&G.capture==p){var Ve=G.listener,bt=G.ha||G.src;G.fa&&pt(l.i,G),M=Ve.call(bt,w)!==!1&&M}}return M&&!w.defaultPrevented}function bn(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function da(l){l.g=bn(()=>{l.g=null,l.i&&(l.i=!1,da(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class qs extends ce{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:da(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ji(l){ce.call(this),this.h=l,this.g={}}A(Ji,ce);var Vn=[];function ha(l){P(l.g,function(h,p){this.g.hasOwnProperty(p)&&ua(h)},l),l.g={}}Ji.prototype.N=function(){Ji.aa.N.call(this),ha(this)},Ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gs=a.JSON.stringify,Tu=a.JSON.parse,Fh=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ks(){}Ks.prototype.h=null;function Zi(l){return l.h||(l.h=l.i())}function fa(){}var Er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ti(){ve.call(this,"d")}A(ti,ve);function es(){ve.call(this,"c")}A(es,ve);var Tr={},pa=null;function Qs(){return pa=pa||new mt}Tr.La="serverreachability";function ma(l){ve.call(this,Tr.La,l)}A(ma,ve);function Ir(l){const h=Qs();gt(h,new ma(h))}Tr.STAT_EVENT="statevent";function ts(l,h){ve.call(this,Tr.STAT_EVENT,l),this.stat=h}A(ts,ve);function Ct(l){const h=Qs();gt(h,new ts(h,l))}Tr.Ma="timingevent";function Iu(l,h){ve.call(this,Tr.Ma,l),this.size=h}A(Iu,ve);function N(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function L(){this.g=!0}L.prototype.xa=function(){this.g=!1};function V(l,h,p,w,M,U){l.info(function(){if(l.g)if(U)for(var G="",Ve=U.split("&"),bt=0;bt<Ve.length;bt++){var Re=Ve[bt].split("=");if(1<Re.length){var jt=Re[0];Re=Re[1];var Ut=jt.split("_");G=2<=Ut.length&&Ut[1]=="type"?G+(jt+"="+Re+"&"):G+(jt+"=redacted&")}}else G=null;else G=U;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+h+`
`+p+`
`+G})}function B(l,h,p,w,M,U,G){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+h+`
`+p+`
`+U+" "+G})}function K(l,h,p,w){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+ae(l,p)+(w?" "+w:"")})}function Z(l,h){l.info(function(){return"TIMEOUT: "+h})}L.prototype.info=function(){};function ae(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var w=p[l];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var U=M[0];if(U!="noop"&&U!="stop"&&U!="close")for(var G=1;G<M.length;G++)M[G]=""}}}}return Gs(p)}catch{return h}}var q={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},de={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ne;function te(){}A(te,Ks),te.prototype.g=function(){return new XMLHttpRequest},te.prototype.i=function(){return{}},ne=new te;function _e(l,h,p,w){this.j=l,this.i=h,this.l=p,this.R=w||1,this.U=new Ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}var Oe={},ke={};function lt(l,h,p){l.L=1,l.v=Cu(Ar(h)),l.m=p,l.P=!0,Xe(l,null)}function Xe(l,h){l.F=Date.now(),jn(l),l.A=Ar(l.v);var p=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),zv(p.i,"t",w),l.C=0,p=l.j.J,l.h=new Ae,l.g=oy(l.j,p?h:null,!l.m),0<l.O&&(l.M=new qs(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,w=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Vn[0]=M.toString()),M=Vn);for(var U=0;U<M.length;U++){var G=Zn(p,M[U],w||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Ir(),V(l.i,l.u,l.A,l.l,l.R,l.m)}_e.prototype.ca=function(l){l=l.target;const h=this.M;h&&kr(l)==3?h.j():this.Y(l)},_e.prototype.Y=function(l){try{if(l==this.g)e:{const Ut=kr(this.g);var h=this.g.Ba();const Zs=this.g.Z();if(!(3>Ut)&&(Ut!=3||this.g&&(this.h.h||this.g.oa()||Qv(this.g)))){this.J||Ut!=4||h==7||(h==8||0>=Zs?Ir(3):Ir(2)),tr(this);var p=this.g.Z();this.X=p;t:if(ni(this)){var w=Qv(this.g);l="";var M=w.length,U=kr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),Mt(this);var G="";break t}this.h.i=new a.TextDecoder}for(h=0;h<M;h++)this.h.h=!0,l+=this.h.i.decode(w[h],{stream:!(U&&h==M-1)});w.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,B(this.i,this.u,this.A,this.l,this.R,Ut,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,bt=this.g;if((Ve=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Ve)){var Re=Ve;break t}}Re=null}if(p=Re)K(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ri(this,p);else{this.o=!1,this.s=3,Ct(12),Rn(this),Mt(this);break e}}if(this.P){p=!0;let Un;for(;!this.J&&this.C<G.length;)if(Un=er(this,G),Un==ke){Ut==4&&(this.s=4,Ct(14),p=!1),K(this.i,this.l,null,"[Incomplete Response]");break}else if(Un==Oe){this.s=4,Ct(15),K(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else K(this.i,this.l,Un,null),ri(this,Un);if(ni(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ut!=4||G.length!=0||this.h.h||(this.s=1,Ct(16),p=!1),this.o=this.o&&p,!p)K(this.i,this.l,G,"[Invalid Chunked Response]"),Rn(this),Mt(this);else if(0<G.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Hh(jt),jt.M=!0,Ct(11))}}else K(this.i,this.l,G,null),ri(this,G);Ut==4&&Rn(this),this.o&&!this.J&&(Ut==4?ny(this.j,this):(this.o=!1,jn(this)))}else ok(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),Rn(this),Mt(this)}}}catch{}finally{}};function ni(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function er(l,h){var p=l.C,w=h.indexOf(`
`,p);return w==-1?ke:(p=Number(h.substring(p,w)),isNaN(p)?Oe:(w+=1,w+p>h.length?ke:(h=h.slice(w,w+p),l.C=w+p,h)))}_e.prototype.cancel=function(){this.J=!0,Rn(this)};function jn(l){l.S=Date.now()+l.I,Sr(l,l.I)}function Sr(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=N(m(l.ba,l),h)}function tr(l){l.B&&(a.clearTimeout(l.B),l.B=null)}_e.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Z(this.i,this.A),this.L!=2&&(Ir(),Ct(17)),Rn(this),this.s=2,Mt(this)):Sr(this,this.S-l)};function Mt(l){l.j.G==0||l.J||ny(l.j,l)}function Rn(l){tr(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,ha(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function ri(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||De(p.h,l))){if(!l.K&&De(p.h,l)&&p.G==3){try{var w=p.Da.g.parse(h)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Nu(p),Pu(p);else break e;$h(p),Ct(18)}}else p.za=M[1],0<p.za-p.T&&37500>M[2]&&p.F&&p.v==0&&!p.C&&(p.C=N(m(p.Za,p),6e3));if(1>=Vt(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else rs(p,11)}else if((l.K||p.g==l)&&Nu(p),!y(h))for(M=p.Da.g.parse(h),h=0;h<M.length;h++){let Re=M[h];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const jt=Re[3];jt!=null&&(p.la=jt,p.j.info("VER="+p.la));const Ut=Re[4];Ut!=null&&(p.Aa=Ut,p.j.info("SVER="+p.Aa));const Zs=Re[5];Zs!=null&&typeof Zs=="number"&&0<Zs&&(w=1.5*Zs,p.L=w,p.j.info("backChannelRequestTimeoutMs_="+w)),w=p;const Un=l.g;if(Un){const Du=Un.g?Un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Du){var U=w.h;U.g||Du.indexOf("spdy")==-1&&Du.indexOf("quic")==-1&&Du.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(pn(U,U.h),U.h=null))}if(w.D){const Wh=Un.g?Un.g.getResponseHeader("X-HTTP-Session-Id"):null;Wh&&(w.ya=Wh,$e(w.I,w.D,Wh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),w=p;var G=l;if(w.qa=sy(w,w.J?w.ia:null,w.W),G.K){ga(w.h,G);var Ve=G,bt=w.L;bt&&(Ve.I=bt),Ve.B&&(tr(Ve),jn(Ve)),w.g=G}else ey(w);0<p.i.length&&xu(p)}else Re[0]!="stop"&&Re[0]!="close"||rs(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?rs(p,7):zh(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}Ir(4)}catch{}}var Ys=class{constructor(l,h){this.g=l,this.map=h}};function pe(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ze(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Vt(l){return l.h?1:l.g?l.g.size:0}function De(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function pn(l,h){l.g?l.g.add(h):l.h=h}function ga(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}pe.prototype.cancel=function(){if(this.i=Su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Su(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return k(l.i)}function WA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,w=0;w<p;w++)h.push(l[w]);return h}h=[],p=0;for(w in l)h[p++]=l[w];return h}function qA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const w in l)h[p++]=w;return h}}}function Mv(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=qA(l),w=WA(l),M=w.length,U=0;U<M;U++)h.call(void 0,w[U],p&&p[U],l)}var Vv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GA(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var w=l[p].indexOf("="),M=null;if(0<=w){var U=l[p].substring(0,w);M=l[p].substring(w+1)}else U=l[p];h(U,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ns(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ns){this.h=l.h,Au(this,l.j),this.o=l.o,this.g=l.g,ku(this,l.s),this.l=l.l;var h=l.i,p=new _a;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),jv(this,p),this.m=l.m}else l&&(h=String(l).match(Vv))?(this.h=!1,Au(this,h[1]||"",!0),this.o=va(h[2]||""),this.g=va(h[3]||"",!0),ku(this,h[4]),this.l=va(h[5]||"",!0),jv(this,h[6]||"",!0),this.m=va(h[7]||"")):(this.h=!1,this.i=new _a(null,this.h))}ns.prototype.toString=function(){var l=[],h=this.j;h&&l.push(ya(h,Uv,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(ya(h,Uv,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(ya(p,p.charAt(0)=="/"?YA:QA,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",ya(p,JA)),l.join("")};function Ar(l){return new ns(l)}function Au(l,h,p){l.j=p?va(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function ku(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function jv(l,h,p){h instanceof _a?(l.i=h,ZA(l.i,l.h)):(p||(h=ya(h,XA)),l.i=new _a(h,l.h))}function $e(l,h,p){l.i.set(h,p)}function Cu(l){return $e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function va(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ya(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,KA),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function KA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Uv=/[#\/\?@]/g,QA=/[#\?:]/g,YA=/[#\?]/g,XA=/[#\?@]/g,JA=/#/g;function _a(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function ii(l){l.g||(l.g=new Map,l.h=0,l.i&&GA(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=_a.prototype,t.add=function(l,h){ii(this),this.i=null,l=Xs(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Fv(l,h){ii(l),h=Xs(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Bv(l,h){return ii(l),h=Xs(l,h),l.g.has(h)}t.forEach=function(l,h){ii(this),this.g.forEach(function(p,w){p.forEach(function(M){l.call(h,M,w,this)},this)},this)},t.na=function(){ii(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let w=0;w<h.length;w++){const M=l[w];for(let U=0;U<M.length;U++)p.push(h[w])}return p},t.V=function(l){ii(this);let h=[];if(typeof l=="string")Bv(this,l)&&(h=h.concat(this.g.get(Xs(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return ii(this),this.i=null,l=Xs(this,l),Bv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function zv(l,h,p){Fv(l,h),0<p.length&&(l.i=null,l.g.set(Xs(l,h),k(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var w=h[p];const U=encodeURIComponent(String(w)),G=this.V(w);for(w=0;w<G.length;w++){var M=U;G[w]!==""&&(M+="="+encodeURIComponent(String(G[w]))),l.push(M)}}return this.i=l.join("&")};function Xs(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function ZA(l,h){h&&!l.j&&(ii(l),l.i=null,l.g.forEach(function(p,w){var M=w.toLowerCase();w!=M&&(Fv(this,w),zv(this,M,p))},l)),l.j=h}function ek(l,h){const p=new L;if(a.Image){const w=new Image;w.onload=E(si,p,"TestLoadImage: loaded",!0,h,w),w.onerror=E(si,p,"TestLoadImage: error",!1,h,w),w.onabort=E(si,p,"TestLoadImage: abort",!1,h,w),w.ontimeout=E(si,p,"TestLoadImage: timeout",!1,h,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else h(!1)}function tk(l,h){const p=new L,w=new AbortController,M=setTimeout(()=>{w.abort(),si(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(M),U.ok?si(p,"TestPingServer: ok",!0,h):si(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(M),si(p,"TestPingServer: error",!1,h)})}function si(l,h,p,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(p)}catch{}}function nk(){this.g=new Fh}function rk(l,h,p){const w=p||"";try{Mv(l,function(M,U){let G=M;c(M)&&(G=Gs(M)),h.push(w+U+"="+encodeURIComponent(G))})}catch(M){throw h.push(w+"type="+encodeURIComponent("_badmap")),M}}function wa(l){this.l=l.Ub||null,this.j=l.eb||!1}A(wa,Ks),wa.prototype.g=function(){return new bu(this.l,this.j)},wa.prototype.i=function(l){return function(){return l}}({});function bu(l,h){mt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(bu,mt),t=bu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Ta(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ea(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ta(this)),this.g&&(this.readyState=3,Ta(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$v(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function $v(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Ea(this):Ta(this),this.readyState==3&&$v(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ea(this))},t.Qa=function(l){this.g&&(this.response=l,Ea(this))},t.ga=function(){this.g&&Ea(this)};function Ea(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ta(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function Ta(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(bu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Hv(l){let h="";return P(l,function(p,w){h+=w,h+=":",h+=p,h+=`\r
`}),h}function Bh(l,h,p){e:{for(w in p){var w=!1;break e}w=!0}w||(p=Hv(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):$e(l,h,p))}function it(l){mt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(it,mt);var ik=/^https?$/i,sk=["POST","PUT"];t=it.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ne.g(),this.v=this.o?Zi(this.o):Zi(ne),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(U){Wv(this,U);return}if(l=p||"",p=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)p.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())p.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),M=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(sk,h,void 0))||w||M||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,G]of p)this.g.setRequestHeader(U,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kv(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Wv(this,U)}};function Wv(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,qv(l),Ru(l)}function qv(l){l.A||(l.A=!0,gt(l,"complete"),gt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,gt(this,"complete"),gt(this,"abort"),Ru(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ru(this,!0)),it.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Gv(this):this.bb())},t.bb=function(){Gv(this)};function Gv(l){if(l.h&&typeof o<"u"&&(!l.v[1]||kr(l)!=4||l.Z()!=2)){if(l.u&&kr(l)==4)bn(l.Ea,0,l);else if(gt(l,"readystatechange"),kr(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var w;if(w=G===0){var M=String(l.D).match(Vv)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),w=!ik.test(M?M.toLowerCase():"")}p=w}if(p)gt(l,"complete"),gt(l,"success");else{l.m=6;try{var U=2<kr(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",qv(l)}}finally{Ru(l)}}}}function Ru(l,h){if(l.g){Kv(l);const p=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||gt(l,"ready");try{p.onreadystatechange=w}catch{}}}function Kv(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function kr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<kr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Tu(h)}};function Qv(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ok(l){const h={};l=(l.g&&2<=kr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(y(l[w]))continue;var p=R(l[w]);const M=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=h[M]||[];h[M]=U,U.push(p)}T(h,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ia(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Yv(l){this.Aa=0,this.i=[],this.j=new L,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ia("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ia("baseRetryDelayMs",5e3,l),this.cb=Ia("retryDelaySeedMs",1e4,l),this.Wa=Ia("forwardChannelMaxRetries",2,l),this.wa=Ia("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new pe(l&&l.concurrentRequestLimit),this.Da=new nk,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yv.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,w){Ct(0),this.W=l,this.H=h||{},p&&w!==void 0&&(this.H.OSID=p,this.H.OAID=w),this.F=this.X,this.I=sy(this,null,this.W),xu(this)};function zh(l){if(Xv(l),l.G==3){var h=l.U++,p=Ar(l.I);if($e(p,"SID",l.K),$e(p,"RID",h),$e(p,"TYPE","terminate"),Sa(l,p),h=new _e(l,l.j,h),h.L=2,h.v=Cu(Ar(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=oy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),jn(h)}iy(l)}function Pu(l){l.g&&(Hh(l),l.g.cancel(),l.g=null)}function Xv(l){Pu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Nu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function xu(l){if(!ze(l.h)&&!l.s){l.s=!0;var h=l.Ga;ge||ie(),W||(ge(),W=!0),ee.add(h,l),l.B=0}}function ak(l,h){return Vt(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=N(m(l.Ga,l,h),ry(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new _e(this,this.j,l);let U=this.o;if(this.S&&(U?(U=v(U),C(U,this.S)):U=this.S),this.m!==null||this.O||(M.H=U,U=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var w=this.i[p];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(h+=w,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Zv(this,M,h),p=Ar(this.I),$e(p,"RID",l),$e(p,"CVER",22),this.D&&$e(p,"X-HTTP-Session-Id",this.D),Sa(this,p),U&&(this.O?h="headers="+encodeURIComponent(String(Hv(U)))+"&"+h:this.m&&Bh(p,this.m,U)),pn(this.h,M),this.Ua&&$e(p,"TYPE","init"),this.P?($e(p,"$req",h),$e(p,"SID","null"),M.T=!0,lt(M,p,null)):lt(M,p,h),this.G=2}}else this.G==3&&(l?Jv(this,l):this.i.length==0||ze(this.h)||Jv(this))};function Jv(l,h){var p;h?p=h.l:p=l.U++;const w=Ar(l.I);$e(w,"SID",l.K),$e(w,"RID",p),$e(w,"AID",l.T),Sa(l,w),l.m&&l.o&&Bh(w,l.m,l.o),p=new _e(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Zv(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),pn(l.h,p),lt(p,w,h)}function Sa(l,h){l.H&&P(l.H,function(p,w){$e(h,w,p)}),l.l&&Mv({},function(p,w){$e(h,w,p)})}function Zv(l,h,p){p=Math.min(l.i.length,p);var w=l.l?m(l.l.Na,l.l,l):null;e:{var M=l.i;let U=-1;for(;;){const G=["count="+p];U==-1?0<p?(U=M[0].g,G.push("ofs="+U)):U=0:G.push("ofs="+U);let Ve=!0;for(let bt=0;bt<p;bt++){let Re=M[bt].g;const jt=M[bt].map;if(Re-=U,0>Re)U=Math.max(0,M[bt].g-100),Ve=!1;else try{rk(jt,G,"req"+Re+"_")}catch{w&&w(jt)}}if(Ve){w=G.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,w}function ey(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ge||ie(),W||(ge(),W=!0),ee.add(h,l),l.v=0}}function $h(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=N(m(l.Fa,l),ry(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,ty(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=N(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),Pu(this),ty(this))};function Hh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function ty(l){l.g=new _e(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Ar(l.qa);$e(h,"RID","rpc"),$e(h,"SID",l.K),$e(h,"AID",l.T),$e(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&$e(h,"TO",l.ja),$e(h,"TYPE","xmlhttp"),Sa(l,h),l.m&&l.o&&Bh(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Cu(Ar(h)),p.m=null,p.P=!0,Xe(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Pu(this),$h(this),Ct(19))};function Nu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ny(l,h){var p=null;if(l.g==h){Nu(l),Hh(l),l.g=null;var w=2}else if(De(l.h,h))p=h.D,ga(l.h,h),w=1;else return;if(l.G!=0){if(h.o)if(w==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var M=l.B;w=Qs(),gt(w,new Iu(w,p)),xu(l)}else ey(l);else if(M=h.s,M==3||M==0&&0<h.X||!(w==1&&ak(l,h)||w==2&&$h(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),M){case 1:rs(l,5);break;case 4:rs(l,10);break;case 3:rs(l,6);break;default:rs(l,2)}}}function ry(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function rs(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),w=l.Xa;const M=!w;w=new ns(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Au(w,"https"),Cu(w),M?ek(w.toString(),p):tk(w.toString(),p)}else Ct(2);l.G=0,l.l&&l.l.sa(h),iy(l),Xv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function iy(l){if(l.G=0,l.ka=[],l.l){const h=Su(l.h);(h.length!=0||l.i.length!=0)&&(x(l.ka,h),x(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function sy(l,h,p){var w=p instanceof ns?Ar(p):new ns(p);if(w.g!="")h&&(w.g=h+"."+w.g),ku(w,w.s);else{var M=a.location;w=M.protocol,h=h?h+"."+M.hostname:M.hostname,M=+M.port;var U=new ns(null);w&&Au(U,w),h&&(U.g=h),M&&ku(U,M),p&&(U.l=p),w=U}return p=l.D,h=l.ya,p&&h&&$e(w,p,h),$e(w,"VER",l.la),Sa(l,w),w}function oy(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new it(new wa({eb:p})):new it(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ay(){}t=ay.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ou(){}Ou.prototype.g=function(l,h){return new mn(l,h)};function mn(l,h){mt.call(this),this.g=new Yv(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Js(this)}A(mn,mt),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){zh(this.g)},mn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Gs(l),l=p);h.i.push(new Ys(h.Ya++,l)),h.G==3&&xu(h)},mn.prototype.N=function(){this.g.l=null,delete this.j,zh(this.g),delete this.g,mn.aa.N.call(this)};function ly(l){ti.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}A(ly,ti);function uy(){es.call(this),this.status=1}A(uy,es);function Js(l){this.g=l}A(Js,ay),Js.prototype.ua=function(){gt(this.g,"a")},Js.prototype.ta=function(l){gt(this.g,new ly(l))},Js.prototype.sa=function(l){gt(this.g,new uy)},Js.prototype.ra=function(){gt(this.g,"b")},Ou.prototype.createWebChannel=Ou.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,WI=function(){return new Ou},HI=function(){return Qs()},$I=Tr,sm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},q.NO_ERROR=0,q.TIMEOUT=8,q.HTTP_ERROR=6,Mc=q,de.COMPLETE="complete",zI=de,fa.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",mt.prototype.listen=mt.prototype.K,qa=fa,BI=wa,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,FI=it}).apply(typeof lc<"u"?lc:typeof self<"u"?self:typeof window<"u"?window:{});const W0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Ug("@firebase/firestore");function Ma(){return Os.logLevel}function X(t,...e){if(Os.logLevel<=Se.DEBUG){const n=e.map(Xg);Os.debug(`Firestore (${na}): ${t}`,...n)}}function qr(t,...e){if(Os.logLevel<=Se.ERROR){const n=e.map(Xg);Os.error(`Firestore (${na}): ${t}`,...n)}}function $o(t,...e){if(Os.logLevel<=Se.WARN){const n=e.map(Xg);Os.warn(`Firestore (${na}): ${t}`,...n)}}function Xg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: `+t;throw qr(e),new Error(e)}function Fe(t,e){t||ue()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends _r{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class uL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cL{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new qI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new $t(e)}}class dL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new fL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function Ho(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new wt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new wt(0,0))}static max(){return new he(new wt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ye extends zl{construct(e,n,r){return new Ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ye(n)}static emptyPath(){return new Ye([])}}const gL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends zl{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return gL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new re(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new re(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Ye.fromString(e))}static fromName(e){return new oe(Ye.fromString(e).popFirst(5))}static empty(){return new oe(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Ye(e.slice()))}}function vL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new wt(n+1,0):new wt(n,r));return new zi(i,oe.empty(),e)}function yL(t){return new zi(t.readTime,t.key,-1)}class zi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zi(he.min(),oe.empty(),-1)}static max(){return new zi(he.max(),oe.empty(),-1)}}function _L(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==wL)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function TL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jg.oe=-1;function gh(t){return t==null}function Rd(t){return t===0&&1/t==-1/0}function IL(t){return typeof t=="number"&&Number.isInteger(t)&&!Rd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function KI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.comparator=e,this.root=n||Pt.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uc(this.root,e,this.comparator,!0)}}class uc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Pt.RED,this.left=i??Pt.EMPTY,this.right=s??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new G0(this.data.getIterator())}getIteratorFrom(e){return new G0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ot(this.comparator);return n.data=e,n}}class G0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new wn([])}unionWith(e){let n=new Ot(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new QI("Invalid base64 string: "+s):s}}(e);return new Gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const SL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $i(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=SL.exec(t);if(Fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ds(t){return typeof t=="string"?Gt.fromBase64String(t):Gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ev(t){const e=t.mapValue.fields.__previous_value__;return Zg(e)?ev(e):e}function $l(t){const e=$i(t.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Hl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Hl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zg(t)?4:kL(t)?9007199254740991:10:ue()}function gr(t,e){if(t===e)return!0;const n=Ls(t);if(n!==Ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $l(t).isEqual($l(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=$i(i.timestampValue),a=$i(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ds(i.bytesValue).isEqual(Ds(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ht(i.geoPointValue.latitude)===ht(s.geoPointValue.latitude)&&ht(i.geoPointValue.longitude)===ht(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ht(i.integerValue)===ht(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ht(i.doubleValue),a=ht(s.doubleValue);return o===a?Rd(o)===Rd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ho(t.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(q0(o)!==q0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!gr(o[u],a[u])))return!1;return!0}(t,e);default:return ue()}}function Wl(t,e){return(t.values||[]).find(n=>gr(n,e))!==void 0}function Wo(t,e){if(t===e)return 0;const n=Ls(t),r=Ls(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ht(s.integerValue||s.doubleValue),u=ht(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return K0(t.timestampValue,e.timestampValue);case 4:return K0($l(t),$l(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ds(s),u=Ds(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=xe(a[c],u[c]);if(d!==0)return d}return xe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=xe(ht(s.latitude),ht(o.latitude));return a!==0?a:xe(ht(s.longitude),ht(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=Wo(a[c],u[c]);if(d)return d}return xe(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===cc.mapValue&&o===cc.mapValue)return 0;if(s===cc.mapValue)return 1;if(o===cc.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=xe(u[f],d[f]);if(m!==0)return m;const E=Wo(a[u[f]],c[d[f]]);if(E!==0)return E}return xe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function K0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=$i(t),r=$i(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function qo(t){return om(t)}function om(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$i(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=om(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${om(n.fields[o])}`;return i+"}"}(t.mapValue):ue()}function am(t){return!!t&&"integerValue"in t}function tv(t){return!!t&&"arrayValue"in t}function Q0(t){return!!t&&"nullValue"in t}function Y0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vc(t){return!!t&&"mapValue"in t}function ul(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ul(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ul(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ul(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ul(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new an(ul(this.value))}}function YI(t){const e=[];return Fs(t.fields,(n,r)=>{const i=new xt([n]);if(Vc(r)){const s=YI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Wt(e,0,he.min(),he.min(),he.min(),an.empty(),0)}static newFoundDocument(e,n,r,i){return new Wt(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Wt(e,2,n,he.min(),he.min(),an.empty(),0)}static newUnknownDocument(e,n){return new Wt(e,3,n,he.min(),he.min(),an.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.position=e,this.inclusive=n}}function X0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Wo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function J0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n="asc"){this.field=e,this.dir=n}}function CL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{}class yt extends XI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RL(e,n,r):n==="array-contains"?new NL(e,r):n==="in"?new OL(e,r):n==="not-in"?new DL(e,r):n==="array-contains-any"?new LL(e,r):new yt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PL(e,r):new xL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wo(n,this.value)):n!==null&&Ls(this.value)===Ls(n)&&this.matchesComparison(Wo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vr extends XI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new vr(e,n)}matches(e){return JI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function JI(t){return t.op==="and"}function ZI(t){return bL(t)&&JI(t)}function bL(t){for(const e of t.filters)if(e instanceof vr)return!1;return!0}function lm(t){if(t instanceof yt)return t.field.canonicalString()+t.op.toString()+qo(t.value);if(ZI(t))return t.filters.map(e=>lm(e)).join(",");{const e=t.filters.map(n=>lm(n)).join(",");return`${t.op}(${e})`}}function eS(t,e){return t instanceof yt?function(r,i){return i instanceof yt&&r.op===i.op&&r.field.isEqual(i.field)&&gr(r.value,i.value)}(t,e):t instanceof vr?function(r,i){return i instanceof vr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&eS(o,i.filters[a]),!0):!1}(t,e):void ue()}function tS(t){return t instanceof yt?function(n){return`${n.field.canonicalString()} ${n.op} ${qo(n.value)}`}(t):t instanceof vr?function(n){return n.op.toString()+" {"+n.getFilters().map(tS).join(" ,")+"}"}(t):"Filter"}class RL extends yt{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class PL extends yt{constructor(e,n){super(e,"in",n),this.keys=nS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xL extends yt{constructor(e,n){super(e,"not-in",n),this.keys=nS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class NL extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tv(n)&&Wl(n.arrayValue,this.value)}}class OL extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wl(this.value.arrayValue,n)}}class DL extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wl(this.value.arrayValue,n)}}class LL extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Z0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ML(t,e,n,r,i,s,o)}function nv(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qo(r)).join(",")),e.ue=n}return e.ue}function rv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!J0(t.startAt,e.startAt)&&J0(t.endAt,e.endAt)}function um(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function VL(t,e,n,r,i,s,o,a){return new vh(t,e,n,r,i,s,o,a)}function iv(t){return new vh(t)}function ew(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jL(t){return t.collectionGroup!==null}function cl(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ot(xt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new xd(s,r))}),n.has(xt.keyField().canonicalString())||e.ce.push(new xd(xt.keyField(),r))}return e.ce}function pr(t){const e=fe(t);return e.le||(e.le=UL(e,cl(t))),e.le}function UL(t,e){if(t.limitType==="F")return Z0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new xd(i.field,s)});const n=t.endAt?new Pd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pd(t.startAt.position,t.startAt.inclusive):null;return Z0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cm(t,e,n){return new vh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yh(t,e){return rv(pr(t),pr(e))&&t.limitType===e.limitType}function rS(t){return`${nv(pr(t))}|lt:${t.limitType}`}function ro(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tS(i)).join(", ")}]`),gh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qo(i)).join(",")),`Target(${r})`}(pr(t))}; limitType=${t.limitType})`}function _h(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):oe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of cl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=X0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,cl(r),i)||r.endAt&&!function(o,a,u){const c=X0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,cl(r),i))}(t,e)}function FL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iS(t){return(e,n)=>{let r=!1;for(const i of cl(t)){const s=BL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BL(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Wo(u,c):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return KI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=new nt(oe.comparator);function Gr(){return zL}const sS=new nt(oe.comparator);function Ga(...t){let e=sS;for(const n of t)e=e.insert(n.key,n);return e}function oS(t){let e=sS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ms(){return dl()}function aS(){return dl()}function dl(){return new ra(t=>t.toString(),(t,e)=>t.isEqual(e))}const $L=new nt(oe.comparator),HL=new Ot(oe.comparator);function Ie(...t){let e=HL;for(const n of t)e=e.add(n);return e}const WL=new Ot(xe);function qL(){return WL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rd(e)?"-0":e}}function uS(t){return{integerValue:""+t}}function GL(t,e){return IL(e)?uS(e):lS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this._=void 0}}function KL(t,e,n){return t instanceof Nd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zg(s)&&(s=ev(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ql?dS(t,e):t instanceof Gl?hS(t,e):function(i,s){const o=cS(i,s),a=tw(o)+tw(i.Pe);return am(o)&&am(i.Pe)?uS(a):lS(i.serializer,a)}(t,e)}function QL(t,e,n){return t instanceof ql?dS(t,e):t instanceof Gl?hS(t,e):n}function cS(t,e){return t instanceof Od?function(r){return am(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Nd extends wh{}class ql extends wh{constructor(e){super(),this.elements=e}}function dS(t,e){const n=fS(e);for(const r of t.elements)n.some(i=>gr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gl extends wh{constructor(e){super(),this.elements=e}}function hS(t,e){let n=fS(e);for(const r of t.elements)n=n.filter(i=>!gr(i,r));return{arrayValue:{values:n}}}class Od extends wh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function tw(t){return ht(t.integerValue||t.doubleValue)}function fS(t){return tv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ql&&i instanceof ql||r instanceof Gl&&i instanceof Gl?Ho(r.elements,i.elements,gr):r instanceof Od&&i instanceof Od?gr(r.Pe,i.Pe):r instanceof Nd&&i instanceof Nd}(t.transform,e.transform)}class XL{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Eh{}function pS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gS(t.key,Kn.none()):new mu(t.key,t.data,Kn.none());{const n=t.data,r=an.empty();let i=new Ot(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qi(t.key,r,new wn(i.toArray()),Kn.none())}}function JL(t,e,n){t instanceof mu?function(i,s,o){const a=i.value.clone(),u=rw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Qi?function(i,s,o){if(!jc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=rw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function hl(t,e,n,r){return t instanceof mu?function(s,o,a,u){if(!jc(s.precondition,o))return a;const c=s.value.clone(),d=iw(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qi?function(s,o,a,u){if(!jc(s.precondition,o))return a;const c=iw(s.fieldTransforms,u,o),d=o.data;return d.setAll(mS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return jc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ZL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cS(r.transform,i||null);s!=null&&(n===null&&(n=an.empty()),n.set(r.field,s))}return n||null}function nw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ho(r,i,(s,o)=>YL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mu extends Eh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qi extends Eh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rw(t,e,n){const r=new Map;Fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,QL(o,a,n[i]))}return r}function iw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KL(s,o,e))}return r}class gS extends Eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eM extends Eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&JL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=hl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=hl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=pS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,(n,r)=>nw(n,r))&&Ho(this.baseMutations,e.baseMutations,(n,r)=>nw(n,r))}}class sv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Fe(e.mutations.length===r.length);let i=function(){return $L}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sv(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Ce;function iM(t){switch(t){default:return ue();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function vS(t){if(t===void 0)return qr("GRPC error has no .code"),z.UNKNOWN;switch(t){case ct.OK:return z.OK;case ct.CANCELLED:return z.CANCELLED;case ct.UNKNOWN:return z.UNKNOWN;case ct.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ct.INTERNAL:return z.INTERNAL;case ct.UNAVAILABLE:return z.UNAVAILABLE;case ct.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ct.NOT_FOUND:return z.NOT_FOUND;case ct.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ct.ABORTED:return z.ABORTED;case ct.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ct.DATA_LOSS:return z.DATA_LOSS;default:return ue()}}(Ce=ct||(ct={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=new ys([4294967295,4294967295],0);function sw(t){const e=sM().encode(t),n=new UI;return n.update(e),new Uint8Array(n.digest())}function ow(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ys([n,r],0),new ys([i,s],0)]}class ov{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ka(`Invalid padding: ${n}`);if(r<0)throw new Ka(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ka(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ka(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ys.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ys.fromNumber(r)));return i.compare(oM)===1&&(i=new ys([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=sw(e),[r,i]=ow(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ov(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=sw(e),[r,i]=ow(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,gu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Th(he.min(),i,new nt(xe),Gr(),Ie())}}class gu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gu(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class yS{constructor(e,n){this.targetId=e,this.me=n}}class _S{constructor(e,n,r=Gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class aw{constructor(){this.fe=0,this.ge=uw(),this.pe=Gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ie(),n=Ie(),r=Ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ue()}}),new gu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=uw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class aM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Gr(),this.qe=lw(),this.Qe=new nt(xe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(um(s))if(r===0){const o=new oe(s.path);this.Ue(n,o,Wt.newNoDocument(o,he.min()))}else Fe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ds(r).toUint8Array()}catch(u){if(u instanceof QI)return $o("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ov(o,i,s)}catch(u){return $o(u instanceof Ka?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&um(a.target)){const u=new oe(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Wt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Ie();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Th(e,n,this.Qe,this.ke,r);return this.ke=Gr(),this.qe=lw(),this.Qe=new nt(xe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new aw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ot(xe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new aw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function lw(){return new nt(oe.comparator)}function uw(){return new nt(oe.comparator)}const lM={asc:"ASCENDING",desc:"DESCENDING"},uM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cM={and:"AND",or:"OR"};class dM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dm(t,e){return t.useProto3Json||gh(e)?e:{value:e}}function Dd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hM(t,e){return Dd(t,e.toTimestamp())}function mr(t){return Fe(!!t),he.fromTimestamp(function(n){const r=$i(n);return new wt(r.seconds,r.nanos)}(t))}function av(t,e){return hm(t,e).canonicalString()}function hm(t,e){const n=function(i){return new Ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ES(t){const e=Ye.fromString(t);return Fe(kS(e)),e}function fm(t,e){return av(t.databaseId,e.path)}function Df(t,e){const n=ES(e);if(n.get(1)!==t.databaseId.projectId)throw new re(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(IS(n))}function TS(t,e){return av(t.databaseId,e)}function fM(t){const e=ES(t);return e.length===4?Ye.emptyPath():IS(e)}function pm(t){return new Ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IS(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cw(t,e,n){return{name:fm(t,e),fields:n.value.mapValue.fields}}function pM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Fe(d===void 0||typeof d=="string"),Gt.fromBase64String(d||"")):(Fe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Gt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?z.UNKNOWN:vS(c.code);return new re(d,c.message||"")}(o);n=new _S(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Df(t,r.document.name),s=mr(r.document.updateTime),o=r.document.createTime?mr(r.document.createTime):he.min(),a=new an({mapValue:{fields:r.document.fields}}),u=Wt.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Uc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Df(t,r.document),s=r.readTime?mr(r.readTime):he.min(),o=Wt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Uc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Df(t,r.document),s=r.removedTargetIds||[];n=new Uc([],s,i,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new rM(i,s),a=r.targetId;n=new yS(a,o)}}return n}function mM(t,e){let n;if(e instanceof mu)n={update:cw(t,e.key,e.value)};else if(e instanceof gS)n={delete:fm(t,e.key)};else if(e instanceof Qi)n={update:cw(t,e.key,e.data),updateMask:SM(e.fieldMask)};else{if(!(e instanceof eM))return ue();n={verify:fm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Nd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ql)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Od)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ue()}(t,e.precondition)),n}function gM(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?mr(i.updateTime):mr(s);return o.isEqual(he.min())&&(o=mr(s)),new XL(o,i.transformResults||[])}(n,e))):[]}function vM(t,e){return{documents:[TS(t,e.path)]}}function yM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TS(t,i);const s=function(c){if(c.length!==0)return AS(vr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:io(m.field),direction:EM(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=dm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function _M(t){let e=fM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Fe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=SS(f);return m instanceof vr&&ZI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(A){return new xd(so(A.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,gh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new Pd(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new Pd(E,m)}(n.endAt)),VL(e,i,o,s,a,"F",u,c)}function wM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=so(n.unaryFilter.field);return yt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=so(n.unaryFilter.field);return yt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=so(n.unaryFilter.field);return yt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=so(n.unaryFilter.field);return yt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return yt.create(so(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vr.create(n.compositeFilter.filters.map(r=>SS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function EM(t){return lM[t]}function TM(t){return uM[t]}function IM(t){return cM[t]}function io(t){return{fieldPath:t.canonicalString()}}function so(t){return xt.fromServerFormat(t.fieldPath)}function AS(t){return t instanceof yt?function(n){if(n.op==="=="){if(Y0(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NAN"}};if(Q0(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Y0(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NOT_NAN"}};if(Q0(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(n.field),op:TM(n.op),value:n.value}}}(t):t instanceof vr?function(n){const r=n.getFilters().map(i=>AS(i));return r.length===1?r[0]:{compositeFilter:{op:IM(n.op),filters:r}}}(t):ue()}function SM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n,r,i,s=he.min(),o=he.min(),a=Gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e){this.ct=e}}function kM(t){const e=_M({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(){this._n=new bM}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(zi.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(zi.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class bM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ot(Ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ot(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Go(0)}static Ln(){return new Go(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(){this.changes=new ra(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&hl(r.mutation,i,wn.empty(),wt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const i=ms();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ga();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ms();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Gr();const o=dl(),a=function(){return dl()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Qi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),hl(d.mutation,c,d.mutation.getFieldMask(),wt.now())):o.set(c.key,wn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new PM(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=dl();let i=new nt((o,a)=>o-a),s=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||wn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||Ie()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=aS();d.forEach(m=>{if(!s.has(m)){const E=pS(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(ms());let a=-1,u=s;return o.next(c=>$.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Ie())).next(d=>({batchId:a,changes:oS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let i=Ga();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ga();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,u=>{const c=function(f,m){return new vh(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Wt.newInvalidDocument(d)))});let a=Ga();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&hl(d.mutation,c,wn.empty(),wt.now()),_h(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mr(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:kM(i.bundledQuery),readTime:mr(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(){this.overlays=new nt(oe.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ms();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=ms(),s=n.length+1,o=new oe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new nt((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ms(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=ms(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nM(n,r));let s=this.hr.get(n);s===void 0&&(s=Ie(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(){this.Pr=new Ot(It.Ir),this.Tr=new Ot(It.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new It(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new It(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new oe(new Ye([])),r=new It(n,e),i=new It(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new oe(new Ye([])),r=new It(n,e),i=new It(n,e+1);let s=Ie();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new It(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class It{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return oe.comparator(e.key,n.key)||xe(e.pr,n.pr)}static Er(e,n){return xe(e.pr,n.pr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ot(It.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new It(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new It(n,0),i=new It(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ot(xe);return n.forEach(i=>{const s=new It(i,0),o=new It(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;oe.isDocumentKey(s)||(s=s.child(""));const o=new It(new oe(s),0);let a=new Ot(xe);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),$.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Fe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const s=new It(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new It(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e){this.vr=e,this.docs=function(){return new nt(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Wt.newInvalidDocument(n))}getEntries(e,n){let r=Gr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Wt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Gr();const o=n.path,a=new oe(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_L(yL(d),r)<=0||(i.has(d.key)||_h(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ue()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MM(this)}getSize(e){return $.resolve(this.size)}}class MM extends RM{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e){this.persistence=e,this.Mr=new ra(n=>nv(n),rv),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Or=0,this.Nr=new lv,this.targetCount=0,this.Lr=Go.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Go(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e,n){this.Br={},this.overlays={},this.kr=new Jg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new VM(this),this.indexManager=new CM,this.remoteDocumentCache=function(i){return new LM(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new AM(n),this.$r=new NM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new DM(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new UM(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class UM extends EL{constructor(e){super(),this.currentSequenceNumber=e}}class uv{constructor(e){this.persistence=e,this.zr=new lv,this.jr=null}static Hr(e){return new uv(e)}get Jr(){if(this.jr)return this.jr;throw ue()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=oe.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Ie(),i=Ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return bN()?8:TL(Lt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new FM;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Ma()<=Se.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ro(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(Ma()<=Se.DEBUG&&X("QueryEngine","Query:",ro(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ma()<=Se.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ro(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(n))):$.resolve())}ji(e,n){if(ew(n))return $.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cm(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ie(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,cm(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return ew(n)||i.isEqual(he.min())?$.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?$.resolve(null):(Ma()<=Se.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ro(n)),this.es(e,o,n,vL(i,-1)).next(a=>a))})}Zi(e,n){let r=new Ot(iS(e));return n.forEach((i,s)=>{_h(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Ma()<=Se.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ro(n)),this.zi.getDocumentsMatchingQuery(e,n,zi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new nt(xe),this.rs=new ra(s=>nv(s),rv),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xM(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function $M(t,e,n,r){return new zM(t,e,n,r)}async function CS(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function HM(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let E=$.resolve();return m.forEach(A=>{E=E.next(()=>d.getEntry(u,A)).next(k=>{const x=c.docVersions.get(A);Fe(x!==null),k.version.compareTo(x)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Ie();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function bS(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function WM(t,e){const n=fe(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(Gt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(k,x,S){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,E,d)&&a.push(n.Qr.updateTargetData(s,E))});let u=Gr(),c=Ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(qM(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(he.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function qM(t,e,n){let r=Ie(),i=Ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Gr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(he.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function GM(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KM(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ti(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function mm(t,e,n){const r=fe(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pu(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function dw(t,e,n){const r=fe(t);let i=he.min(),s=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=fe(u),m=f.rs.get(d);return m!==void 0?$.resolve(f.ns.get(m)):f.Qr.getTargetData(c,d)}(r,o,pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:he.min(),n?s:Ie())).next(a=>(QM(r,FL(e),a),{documents:a,hs:s})))}function QM(t,e,n){let r=t.ss.get(e)||he.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class hw{constructor(){this.activeTargetIds=qL()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YM{constructor(){this.no=new hw,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new hw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc=null;function Lf(){return dc===null?dc=function(){return 268435456+Math.round(2147483648*Math.random())}():dc++,"0x"+dc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="WebChannelConnection";class e4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Lf(),u=this.vo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(X("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw $o("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+na}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=JM[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Lf();return new Promise((o,a)=>{const u=new FI;u.setWithCredentials(!0),u.listenOnce(zI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Mc.NO_ERROR:const d=u.getResponseJson();X(zt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Mc.TIMEOUT:X(zt,`RPC '${e}' ${s} timed out`),a(new re(z.DEADLINE_EXCEEDED,"Request time out"));break;case Mc.HTTP_ERROR:const f=u.getStatus();if(X(zt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const A=function(x){const S=x.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(S)>=0?S:z.UNKNOWN}(E.status);a(new re(A,E.message))}else a(new re(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new re(z.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{X(zt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);X(zt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Lf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=WI(),a=HI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new BI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");X(zt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,E=!1;const A=new ZM({lo:x=>{E?X(zt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(X(zt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),X(zt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},ho:()=>f.close()}),k=(x,S,y)=>{x.listen(S,I=>{try{y(I)}catch(O){setTimeout(()=>{throw O},0)}})};return k(f,qa.EventType.OPEN,()=>{E||(X(zt,`RPC '${e}' stream ${i} transport opened.`),A.mo())}),k(f,qa.EventType.CLOSE,()=>{E||(E=!0,X(zt,`RPC '${e}' stream ${i} transport closed`),A.po())}),k(f,qa.EventType.ERROR,x=>{E||(E=!0,$o(zt,`RPC '${e}' stream ${i} transport errored:`,x),A.po(new re(z.UNAVAILABLE,"The operation could not be completed")))}),k(f,qa.EventType.MESSAGE,x=>{var S;if(!E){const y=x.data[0];Fe(!!y);const I=y,O=I.error||((S=I[0])===null||S===void 0?void 0:S.error);if(O){X(zt,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let P=function(_){const C=ct[_];if(C!==void 0)return vS(C)}(F),T=O.message;P===void 0&&(P=z.INTERNAL,T="Unknown error status: "+F+" with message "+O.message),E=!0,A.po(new re(P,T)),f.close()}else X(zt,`RPC '${e}' stream ${i} received:`,y),A.yo(y)}}),k(a,$I.STAT_EVENT,x=>{x.stat===sm.PROXY?X(zt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===sm.NOPROXY&&X(zt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function Mf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t){return new dM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new RS(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(qr(n.toString()),qr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new re(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class t4 extends PS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=pM(this.serializer,e),r=function(s){if(!("targetChange"in s))return he.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?mr(o.readTime):he.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=pm(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=um(u)?{documents:vM(s,u)}:{query:yM(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wS(s,o.resumeToken);const c=dm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(he.min())>0){a.readTime=Dd(s,o.snapshotVersion.toTimestamp());const c=dm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=wM(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=pm(this.serializer),n.removeTarget=e,this.i_(n)}}class n4 extends PS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=gM(e.writeResults,e.commitTime),r=mr(e.commitTime);return this.listener.A_(r,n)}return Fe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=pm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mM(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new re(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,hm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re(z.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,hm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(z.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class i4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(qr(n),this.y_=!1):X("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Bs(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=fe(u);c.M_.add(4),await vu(c),c.N_.set("Unknown"),c.M_.delete(4),await Sh(c)}(this))})}),this.N_=new i4(r,i)}}async function Sh(t){if(Bs(t))for(const e of t.x_)await e(!0)}async function vu(t){for(const e of t.x_)await e(!1)}function xS(t,e){const n=fe(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),pv(n)?fv(n):ia(n).Xo()&&hv(n,e))}function dv(t,e){const n=fe(t),r=ia(n);n.F_.delete(e),r.Xo()&&NS(n,e),n.F_.size===0&&(r.Xo()?r.n_():Bs(n)&&n.N_.set("Unknown"))}function hv(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ia(t).P_(e)}function NS(t,e){t.L_.xe(e),ia(t).I_(e)}function fv(t){t.L_=new aM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ia(t).start(),t.N_.w_()}function pv(t){return Bs(t)&&!ia(t).Zo()&&t.F_.size>0}function Bs(t){return fe(t).M_.size===0}function OS(t){t.L_=void 0}async function o4(t){t.N_.set("Online")}async function a4(t){t.F_.forEach((e,n)=>{hv(t,e)})}async function l4(t,e){OS(t),pv(t)?(t.N_.D_(e),fv(t)):t.N_.set("Unknown")}async function u4(t,e,n){if(t.N_.set("Online"),e instanceof _S&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ld(t,r)}else if(e instanceof Uc?t.L_.Ke(e):e instanceof yS?t.L_.He(e):t.L_.We(e),!n.isEqual(he.min()))try{const r=await bS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(Gt.EMPTY_BYTE_STRING,d.snapshotVersion)),NS(s,u);const f=new Ti(d.target,u,c,d.sequenceNumber);hv(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Ld(t,r)}}async function Ld(t,e,n){if(!pu(e))throw e;t.M_.add(1),await vu(t),t.N_.set("Offline"),n||(n=()=>bS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Sh(t)})}function DS(t,e){return e().catch(n=>Ld(t,n,e))}async function Ah(t){const e=fe(t),n=Hi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;c4(e);)try{const i=await GM(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,d4(e,i)}catch(i){await Ld(e,i)}LS(e)&&MS(e)}function c4(t){return Bs(t)&&t.v_.length<10}function d4(t,e){t.v_.push(e);const n=Hi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function LS(t){return Bs(t)&&!Hi(t).Zo()&&t.v_.length>0}function MS(t){Hi(t).start()}async function h4(t){Hi(t).V_()}async function f4(t){const e=Hi(t);for(const n of t.v_)e.d_(n.mutations)}async function p4(t,e,n){const r=t.v_.shift(),i=sv.from(r,e,n);await DS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ah(t)}async function m4(t,e){e&&Hi(t).E_&&await async function(r,i){if(function(o){return iM(o)&&o!==z.ABORTED}(i.code)){const s=r.v_.shift();Hi(r).t_(),await DS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ah(r)}}(t,e),LS(t)&&MS(t)}async function pw(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Bs(n);n.M_.add(3),await vu(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Sh(n)}async function g4(t,e){const n=fe(t);e?(n.M_.delete(2),await Sh(n)):e||(n.M_.add(2),await vu(n),n.N_.set("Unknown"))}function ia(t){return t.B_||(t.B_=function(n,r,i){const s=fe(n);return s.f_(),new t4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:o4.bind(null,t),To:a4.bind(null,t),Ao:l4.bind(null,t),h_:u4.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),pv(t)?fv(t):t.N_.set("Unknown")):(await t.B_.stop(),OS(t))})),t.B_}function Hi(t){return t.k_||(t.k_=function(n,r,i){const s=fe(n);return s.f_(),new n4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:h4.bind(null,t),Ao:m4.bind(null,t),R_:f4.bind(null,t),A_:p4.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Ah(t)):(await t.k_.stop(),t.v_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new mv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gv(t,e){if(qr("AsyncQueue",`${e}: ${t}`),pu(t))return new re(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=Ga(),this.sortedSet=new nt(this.comparator)}static emptySet(e){return new Do(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Do)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Do;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.q_=new nt(oe.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ue():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ko{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ko(e,n,Do.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class y4{constructor(){this.queries=new ra(e=>rS(e),yh),this.onlineState="Unknown",this.z_=new Set}}async function VS(t,e){const n=fe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new v4,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=gv(o,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&vv(n)}async function jS(t,e){const n=fe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _4(t,e){const n=fe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&vv(n)}function w4(t,e,n){const r=fe(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function vv(t){t.z_.forEach(e=>{e.next()})}var gm,gw;(gw=gm||(gm={})).J_="default",gw.Cache="cache";class US{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ko(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==gm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.key=e}}class BS{constructor(e){this.key=e}}class E4{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ie(),this.mutatedKeys=Ie(),this.Ia=iS(e),this.Ta=new Do(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new mw,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=_h(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let x=!1;m&&E?m.data.isEqual(E.data)?A!==k&&(r.track({type:3,doc:E}),x=!0):this.Ra(m,E)||(r.track({type:2,doc:E}),x=!0,(u&&this.Ia(E,u)>0||c&&this.Ia(E,c)<0)&&(a=!0)):!m&&E?(r.track({type:0,doc:E}),x=!0):m&&!E&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(a=!0)),x&&(E?(o=o.add(E),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(E,A){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return k(E)-k(A)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Ko(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new mw,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ie(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new BS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new FS(r))}),n}pa(e){this.la=e.hs,this.Pa=Ie();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Ko.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class T4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class I4{constructor(e){this.key=e,this.wa=!1}}class S4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ra(a=>rS(a),yh),this.Da=new Map,this.Ca=new Set,this.va=new nt(oe.comparator),this.Fa=new Map,this.Ma=new lv,this.xa={},this.Oa=new Map,this.Na=Go.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function A4(t,e,n=!0){const r=GS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await zS(r,e,n,!0),i}async function k4(t,e){const n=GS(t);await zS(n,e,!0,!1)}async function zS(t,e,n,r){const i=await KM(t.localStore,pr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await C4(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&xS(t.remoteStore,i),a}async function C4(t,e,n,r,i){t.Ba=(f,m,E)=>async function(k,x,S,y){let I=x.view.da(S);I.Xi&&(I=await dw(k.localStore,x.query,!1).then(({documents:T})=>x.view.da(T,I)));const O=y&&y.targetChanges.get(x.targetId),F=y&&y.targetMismatches.get(x.targetId)!=null,P=x.view.applyChanges(I,k.isPrimaryClient,O,F);return yw(k,x.targetId,P.fa),P.snapshot}(t,f,m,E);const s=await dw(t.localStore,e,!0),o=new E4(e,s.hs),a=o.da(s.documents),u=gu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);yw(t,n,c.fa);const d=new T4(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function b4(t,e,n){const r=fe(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!yh(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&dv(r.remoteStore,i.targetId),vm(r,i.targetId)}).catch(fu)):(vm(r,i.targetId),await mm(r.localStore,i.targetId,!0))}async function R4(t,e){const n=fe(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),dv(n.remoteStore,r.targetId))}async function P4(t,e,n){const r=V4(t);try{const i=await function(o,a){const u=fe(o),c=wt.now(),d=a.reduce((E,A)=>E.add(A.key),Ie());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=Gr(),k=Ie();return u.os.getEntries(E,d).next(x=>{A=x,A.forEach((S,y)=>{y.isValidDocument()||(k=k.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,A)).next(x=>{f=x;const S=[];for(const y of a){const I=ZL(y,f.get(y.key).overlayedDocument);I!=null&&S.push(new Qi(y.key,I,YI(I.value.mapValue),Kn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,S,a)}).next(x=>{m=x;const S=x.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(E,x.batchId,S)})}).then(()=>({batchId:m.batchId,changes:oS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new nt(xe)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await yu(r,i.changes),await Ah(r.remoteStore)}catch(i){const s=gv(i,"Failed to persist write");n.reject(s)}}async function $S(t,e){const n=fe(t);try{const r=await WM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Fe(o.wa):i.removedDocuments.size>0&&(Fe(o.wa),o.wa=!1))}),await yu(n,r,e)}catch(r){await fu(r)}}function vw(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=fe(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&vv(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x4(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new nt(oe.comparator);o=o.insert(s,Wt.newNoDocument(s,he.min()));const a=Ie().add(s),u=new Th(he.min(),new Map,new nt(xe),o,a);await $S(r,u),r.va=r.va.remove(s),r.Fa.delete(e),yv(r)}else await mm(r.localStore,e,!1).then(()=>vm(r,e,n)).catch(fu)}async function N4(t,e){const n=fe(t),r=e.batch.batchId;try{const i=await HM(n.localStore,e);WS(n,r,null),HS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yu(n,i)}catch(i){await fu(i)}}async function O4(t,e,n){const r=fe(t);try{const i=await function(o,a){const u=fe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Fe(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);WS(r,e,n),HS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yu(r,i)}catch(i){await fu(i)}}function HS(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function WS(t,e,n){const r=fe(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function vm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||qS(t,r)})}function qS(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(dv(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),yv(t))}function yw(t,e,n){for(const r of n)r instanceof FS?(t.Ma.addReference(r.key,e),D4(t,r)):r instanceof BS?(X("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||qS(t,r.key)):ue()}function D4(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Ca.add(r),yv(t))}function yv(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new oe(Ye.fromString(e)),r=t.Na.next();t.Fa.set(r,new I4(n)),t.va=t.va.insert(n,r),xS(t.remoteStore,new Ti(pr(iv(n.path)),r,"TargetPurposeLimboResolution",Jg.oe))}}async function yu(t,e,n){const r=fe(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=cv.Ki(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=fe(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(c,m=>$.forEach(m.qi,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>$.forEach(m.Qi,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!pu(f))throw f;X("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.ns.get(m),A=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(A);d.ns=d.ns.insert(m,k)}}}(r.localStore,s))}async function L4(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await CS(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new re(z.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yu(n,r.us)}}function M4(t,e){const n=fe(t),r=n.Fa.get(e);if(r&&r.wa)return Ie().add(r.key);{let i=Ie();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function GS(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$S.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=M4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x4.bind(null,e),e.Sa.h_=_4.bind(null,e.eventManager),e.Sa.ka=w4.bind(null,e.eventManager),e}function V4(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=N4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=O4.bind(null,e),e}class _w{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ih(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $M(this.persistence,new BM,e.initialUser,this.serializer)}createPersistence(e){return new jM(uv.Hr,this.serializer)}createSharedClientState(e){return new YM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class j4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=L4.bind(null,this.syncEngine),await g4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new y4}()}createDatastore(e){const n=Ih(e.databaseInfo.databaseId),r=function(s){return new e4(s)}(e.databaseInfo);return function(s,o,a,u){return new r4(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new s4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>vw(this.syncEngine,n,0),function(){return fw.D()?new fw:new XM}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new S4(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=fe(r);X("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await vu(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):qr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$t.UNAUTHENTICATED,this.clientId=GI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vf(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await CS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ww(t,e){t.asyncQueue.verifyOperationInProgress();const n=await B4(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>pw(e.remoteStore,i)),t._onlineComponents=e}function F4(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function B4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!F4(n))throw n;$o("Error using user provided cache. Falling back to memory cache: "+n),await Vf(t,new _w)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Vf(t,new _w);return t._offlineComponents}async function QS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await ww(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await ww(t,new j4))),t._onlineComponents}function z4(t){return QS(t).then(e=>e.syncEngine)}async function YS(t){const e=await QS(t),n=e.eventManager;return n.onListen=A4.bind(null,e.syncEngine),n.onUnlisten=b4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=k4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=R4.bind(null,e.syncEngine),n}function $4(t,e,n={}){const r=new Mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new KS({next:m=>{o.enqueueAndForget(()=>jS(s,f));const E=m.docs.has(a);!E&&m.fromCache?c.reject(new re(z.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new re(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new US(iv(a.path),d,{includeMetadataChanges:!0,ra:!0});return VS(s,f)}(await YS(t),t.asyncQueue,e,n,r)),r.promise}function H4(t,e,n={}){const r=new Mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new KS({next:m=>{o.enqueueAndForget(()=>jS(s,f)),m.fromCache&&u.source==="server"?c.reject(new re(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new US(a,d,{includeMetadataChanges:!0,ra:!0});return VS(s,f)}(await YS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t,e,n){if(!n)throw new re(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function W4(t,e,n,r){if(e===!0&&r===!0)throw new re(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tw(t){if(!oe.isDocumentKey(t))throw new re(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iw(t){if(oe.isDocumentKey(t))throw new re(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _v(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function yr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_v(t);throw new re(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}W4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lL;switch(r.type){case"firstParty":return new hL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ew.get(n);r&&(X("ComponentProvider","Removing Datastore"),Ew.delete(n),r.terminate())}(this),Promise.resolve()}}function q4(t,e,n,r={}){var i;const s=(t=yr(t,kh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=$t.MOCK_USER;else{a=eI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new re(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new $t(c)}t._authCredentials=new uL(new qI(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ch(this.firestore,e,this._query)}}class hn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class Li extends Ch{constructor(e,n,r){super(e,n,iv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new oe(e))}withConverter(e){return new Li(this.firestore,e,this._path)}}function bh(t,e,...n){if(t=Tt(t),JS("collection","path",e),t instanceof kh){const r=Ye.fromString(e,...n);return Iw(r),new Li(t,null,r)}{if(!(t instanceof hn||t instanceof Li))throw new re(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ye.fromString(e,...n));return Iw(r),new Li(t.firestore,null,r)}}function zs(t,e,...n){if(t=Tt(t),arguments.length===1&&(e=GI.newId()),JS("doc","path",e),t instanceof kh){const r=Ye.fromString(e,...n);return Tw(r),new hn(t,null,new oe(r))}{if(!(t instanceof hn||t instanceof Li))throw new re(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ye.fromString(e,...n));return Tw(r),new hn(t.firestore,t instanceof Li?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new RS(this,"async_queue_retry"),this.hu=()=>{const n=Mf();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Mf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Mf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Mr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!pu(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw qr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=mv.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ue()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class sa extends kh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new G4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ZS(this),this._firestoreClient.terminate()}}function K4(t,e){const n=typeof t=="object"?t:Bg(),r=typeof t=="string"?t:"(default)",i=dh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=XT("firestore");s&&q4(i,...s)}return i}function wv(t){return t._firestoreClient||ZS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ZS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new AL(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,XS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new U4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qo(Gt.fromBase64String(e))}catch(n){throw new re(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qo(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4=/^__.*__$/;class Y4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms):new mu(e,this.data,n,this.fieldTransforms)}}class eA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Iv{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Iv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Md(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(tA(this.fu)&&Q4.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class X4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ih(e)}Fu(e,n,r,i=!1){return new Iv({fu:e,methodName:n,vu:r,path:xt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sv(t){const e=t._freezeSettings(),n=Ih(t._databaseId);return new X4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nA(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Av("Data must be an object, but it was:",o,r);const a=rA(r,o);let u,c;if(s.merge)u=new wn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=ym(e,f,n);if(!o.contains(m))throw new re(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);sA(d,m)||d.push(m)}u=new wn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new Y4(new an(a),u,c)}class Ph extends Ev{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ph}}function J4(t,e,n,r){const i=t.Fu(1,e,n);Av("Data must be an object, but it was:",i,r);const s=[],o=an.empty();Fs(r,(u,c)=>{const d=kv(e,u,n);c=Tt(c);const f=i.Su(d);if(c instanceof Ph)s.push(d);else{const m=xh(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new wn(s);return new eA(o,a,i.fieldTransforms)}function Z4(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[ym(e,r,n)],u=[i];if(s.length%2!=0)throw new re(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(ym(e,s[m])),u.push(s[m+1]);const c=[],d=an.empty();for(let m=a.length-1;m>=0;--m)if(!sA(c,a[m])){const E=a[m];let A=u[m];A=Tt(A);const k=o.Su(E);if(A instanceof Ph)c.push(E);else{const x=xh(A,k);x!=null&&(c.push(E),d.set(E,x))}}const f=new wn(c);return new eA(d,f,o.fieldTransforms)}function xh(t,e){if(iA(t=Tt(t)))return Av("Unsupported field value:",e,t),rA(t,e);if(t instanceof Ev)return function(r,i){if(!tA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=xh(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=wt.fromDate(r);return{timestampValue:Dd(i.serializer,s)}}if(r instanceof wt){const s=new wt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dd(i.serializer,s)}}if(r instanceof Tv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qo)return{bytesValue:wS(i.serializer,r._byteString)};if(r instanceof hn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:av(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${_v(r)}`)}(t,e)}function rA(t,e){const n={};return KI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fs(t,(r,i)=>{const s=xh(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function iA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof Tv||t instanceof Qo||t instanceof hn||t instanceof Ev)}function Av(t,e,n){if(!iA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=_v(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function ym(t,e,n){if((e=Tt(e))instanceof Rh)return e._internalPath;if(typeof e=="string")return kv(t,e);throw Md("Field path arguments must be of type string or ",t,!1,void 0,n)}const eV=new RegExp("[~\\*/\\[\\]]");function kv(t,e,n){if(e.search(eV)>=0)throw Md(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rh(...e.split("."))._internalPath}catch{throw Md(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Md(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new re(z.INVALID_ARGUMENT,a+t+u)}function sA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(aA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tV extends oA{data(){return super.data()}}function aA(t,e){return typeof e=="string"?kv(t,e):e instanceof Rh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rV{convertValue(e,n="none"){switch(Ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Tv(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ev(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($l(e));default:return null}}convertTimestamp(e){const n=$i(e);return new wt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ye.fromString(e);Fe(kS(r));const i=new Hl(r.get(1),r.get(3)),s=new oe(r.popFirst(5));return i.isEqual(n)||qr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uA extends oA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(aA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fc extends uA{data(e={}){return super.data(e)}}class iV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fc(this._firestore,this._userDataWriter,r.key,r,new Qa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Fc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Fc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:sV(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){t=yr(t,hn);const e=yr(t.firestore,sa);return $4(wv(e),t._key).then(n=>lV(e,t,n))}class cA extends rV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,n)}}function oV(t){t=yr(t,Ch);const e=yr(t.firestore,sa),n=wv(e),r=new cA(e);return nV(t._query),H4(n,t._query).then(i=>new iV(e,r,t,i))}function aV(t,e,n){t=yr(t,hn);const r=yr(t.firestore,sa),i=lA(t.converter,e);return bv(r,[nA(Sv(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Kn.none())])}function dA(t,e,n,...r){t=yr(t,hn);const i=yr(t.firestore,sa),s=Sv(i);let o;return o=typeof(e=Tt(e))=="string"||e instanceof Rh?Z4(s,"updateDoc",t._key,e,n,r):J4(s,"updateDoc",t._key,e),bv(i,[o.toMutation(t._key,Kn.exists(!0))])}function hA(t,e){const n=yr(t.firestore,sa),r=zs(t),i=lA(t.converter,e);return bv(n,[nA(Sv(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Kn.exists(!1))]).then(()=>r)}function bv(t,e){return function(r,i){const s=new Mr;return r.asyncQueue.enqueueAndForget(async()=>P4(await z4(r),i,s)),s.promise}(wv(t),e)}function lV(t,e,n){const r=n.docs.get(e._key),i=new cA(t);return new uA(t,i,e._key,r,new Qa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){na=i})(Us),Ps(new Bi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new sa(new cL(r.getProvider("auth-internal")),new pL(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),dr(W0,"4.6.4",e),dr(W0,"4.6.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="firebasestorage.googleapis.com",pA="storageBucket",uV=2*60*1e3,cV=10*60*1e3,dV=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends _r{constructor(e,n,r=0){super(jf(e),`Firebase Storage: ${n} (${jf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ke||(Ke={}));function jf(t){return"storage/"+t}function Rv(){const t="An unknown error occurred, please check the error payload for server response.";return new rt(Ke.UNKNOWN,t)}function hV(t){return new rt(Ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function fV(t){return new rt(Ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(Ke.UNAUTHENTICATED,t)}function mV(){return new rt(Ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gV(t){return new rt(Ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function mA(){return new rt(Ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gA(){return new rt(Ke.CANCELED,"User canceled the upload/download.")}function vV(t){return new rt(Ke.INVALID_URL,"Invalid URL '"+t+"'.")}function yV(t){return new rt(Ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function _V(){return new rt(Ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pA+"' property when initializing the app?")}function vA(){return new rt(Ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wV(){return new rt(Ke.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function EV(){return new rt(Ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TV(t){return new rt(Ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _m(t){return new rt(Ke.INVALID_ARGUMENT,t)}function yA(){return new rt(Ke.APP_DELETED,"The Firebase app was deleted.")}function IV(t){return new rt(Ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fl(t,e){return new rt(Ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Va(t){throw new rt(Ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=En.makeFromUrl(e,n)}catch{return new En(e,"")}if(r.path==="")return r;throw yV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},k=n===fA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",S=new RegExp(`^https?://${k}/${i}/${x}`,"i"),I=[{regex:a,indices:u,postModify:s},{regex:E,indices:A,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<I.length;O++){const F=I[O],P=F.regex.exec(e);if(P){const T=P[F.indices.bucket];let v=P[F.indices.path];v||(v=""),r=new En(T,v),F.postModify(r);break}}if(r==null)throw vV(e);return r}}class SV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AV(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...x){c||(c=!0,e.apply(null,x))}function f(x){i=setTimeout(()=>{i=null,t(E,u())},x)}function m(){s&&clearTimeout(s)}function E(x,...S){if(c){m();return}if(x){m(),d.call(null,x,...S);return}if(u()||o){m(),d.call(null,x,...S);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let A=!1;function k(x){A||(A=!0,m(),!c&&(i!==null?(x||(a=2),clearTimeout(i),f(0)):x||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function kV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t){return t!==void 0}function bV(t){return typeof t=="function"}function RV(t){return typeof t=="object"&&!Array.isArray(t)}function Nh(t){return typeof t=="string"||t instanceof String}function Aw(t){return Pv()&&t instanceof Blob}function Pv(){return typeof Blob<"u"}function kw(t,e,n,r){if(r<e)throw _m(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _m(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function _A(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _s;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_s||(_s={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(e,n,r,i,s,o,a,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,A)=>{this.resolve_=E,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new hc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===_s.NO_ERROR,u=s.getStatus();if(!a||wA(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===_s.ABORT;r(!1,new hc(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new hc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());CV(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Rv();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?yA():gA();o(u)}else{const u=mA();o(u)}};this.canceled_?n(!1,new hc(!1,null,!0)):this.backoffId_=AV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function xV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function DV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function LV(t,e,n,r,i,s,o=!0){const a=_A(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return OV(c,e),xV(c,n),NV(c,s),DV(c,r),new PV(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VV(...t){const e=MV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Pv())return new Blob(t);throw new rt(Ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UV(t){if(typeof atob>"u")throw TV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uf{constructor(e,n){this.data=e,this.contentType=n||null}}function FV(t,e){switch(t){case lr.RAW:return new Uf(EA(e));case lr.BASE64:case lr.BASE64URL:return new Uf(TA(t,e));case lr.DATA_URL:return new Uf(zV(e),$V(e))}throw Rv()}function EA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function BV(t){let e;try{e=decodeURIComponent(t)}catch{throw fl(lr.DATA_URL,"Malformed data URL.")}return EA(e)}function TA(t,e){switch(t){case lr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw fl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case lr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw fl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=UV(e)}catch(i){throw i.message.includes("polyfill")?i:fl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class IA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw fl(lr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=HV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function zV(t){const e=new IA(t);return e.base64?TA(lr.BASE64,e.rest):BV(e.rest)}function $V(t){return new IA(t).contentType}function HV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){let r=0,i="";Aw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Aw(this.data_)){const r=this.data_,i=jV(r,e,n);return i===null?null:new yi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new yi(r,!0)}}static getBlob(...e){if(Pv()){const n=e.map(r=>r instanceof yi?r.data_:r);return new yi(VV.apply(null,n))}else{const n=e.map(o=>Nh(o)?FV(lr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new yi(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t){let e;try{e=JSON.parse(t)}catch{return null}return RV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function AA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GV(t,e){return e}class Xt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||GV}}let fc=null;function KV(t){return!Nh(t)||t.length<2?t:AA(t)}function kA(){if(fc)return fc;const t=[];t.push(new Xt("bucket")),t.push(new Xt("generation")),t.push(new Xt("metageneration")),t.push(new Xt("name","fullPath",!0));function e(s,o){return KV(o)}const n=new Xt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Xt("size");return i.xform=r,t.push(i),t.push(new Xt("timeCreated")),t.push(new Xt("updated")),t.push(new Xt("md5Hash",null,!0)),t.push(new Xt("cacheControl",null,!0)),t.push(new Xt("contentDisposition",null,!0)),t.push(new Xt("contentEncoding",null,!0)),t.push(new Xt("contentLanguage",null,!0)),t.push(new Xt("contentType",null,!0)),t.push(new Xt("metadata","customMetadata",!0)),fc=t,fc}function QV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new En(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function YV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return QV(r,t),r}function CA(t,e,n){const r=SA(e);return r===null?null:YV(t,r,n)}function XV(t,e,n,r){const i=SA(e);if(i===null||!Nh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),E=_u(m,n,r),A=_A({alt:"media",token:c});return E+A})[0]}function bA(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class oa{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){if(!t)throw Rv()}function xv(t,e){function n(r,i){const s=CA(t,i,e);return Vr(s!==null),s}return n}function JV(t,e){function n(r,i){const s=CA(t,i,e);return Vr(s!==null),XV(s,i,t.host,t._protocol)}return n}function wu(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=mV():i=pV():n.getStatus()===402?i=fV(t.bucket):n.getStatus()===403?i=gV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function RA(t){const e=wu(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=hV(t.path)),s.serverResponse=i.serverResponse,s}return n}function ZV(t,e,n){const r=e.fullServerUrl(),i=_u(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new oa(i,s,xv(t,n),o);return a.errorHandler=RA(e),a}function ej(t,e,n){const r=e.fullServerUrl(),i=_u(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new oa(i,s,JV(t,n),o);return a.errorHandler=RA(e),a}function tj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function PA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=tj(null,e)),r}function nj(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let O=0;O<2;O++)I=I+Math.random().toString().slice(2);return I}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=PA(e,r,i),d=bA(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",E=yi.getBlob(f,r,m);if(E===null)throw vA();const A={name:c.fullPath},k=_u(s,t.host,t._protocol),x="POST",S=t.maxUploadRetryTime,y=new oa(k,x,xv(t,n),S);return y.urlParams=A,y.headers=o,y.body=E.uploadData(),y.errorHandler=wu(e),y}class Vd{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Nv(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Vr(!1)}return Vr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function rj(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=PA(e,r,i),a={name:o.fullPath},u=_u(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=bA(o,n),m=t.maxUploadRetryTime;function E(k){Nv(k);let x;try{x=k.getResponseHeader("X-Goog-Upload-URL")}catch{Vr(!1)}return Vr(Nh(x)),x}const A=new oa(u,c,E,m);return A.urlParams=a,A.headers=d,A.body=f,A.errorHandler=wu(e),A}function ij(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=Nv(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Vr(!1)}f||Vr(!1);const m=Number(f);return Vr(!isNaN(m)),new Vd(m,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,u=new oa(n,o,s,a);return u.headers=i,u.errorHandler=wu(e),u}const Cw=256*1024;function sj(t,e,n,r,i,s,o,a){const u=new Vd(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw wV();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const f=u.current,m=f+d;let E="";d===0?E="finalize":c===d?E="upload, finalize":E="upload";const A={"X-Goog-Upload-Command":E,"X-Goog-Upload-Offset":`${u.current}`},k=r.slice(f,m);if(k===null)throw vA();function x(O,F){const P=Nv(O,["active","final"]),T=u.current+d,v=r.size();let _;return P==="final"?_=xv(e,s)(O,F):_=null,new Vd(T,v,P==="final",_)}const S="POST",y=e.maxUploadRetryTime,I=new oa(n,S,x,y);return I.headers=A,I.body=k.uploadData(),I.progressCallback=a||null,I.errorHandler=wu(t),I}const sn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ff(t){switch(t){case"running":case"pausing":case"canceling":return sn.RUNNING;case"paused":return sn.PAUSED;case"success":return sn.SUCCESS;case"canceled":return sn.CANCELED;case"error":return sn.ERROR;default:return sn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(e,n,r){if(bV(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class aj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_s.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_s.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_s.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Va("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Va("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Va("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Va("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Va("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lj extends aj{initXhr(){this.xhr_.responseType="text"}}function oo(){return new lj}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=kA(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ke.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(wA(i.status,[]))if(s)i=mA();else{this.sleepTime=Math.max(this.sleepTime*2,dV),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ke.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=rj(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,oo,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=ij(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,oo,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Cw*this._chunkMultiplier,n=new Vd(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=sj(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,oo,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Cw*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=ZV(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,oo,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=nj(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,oo,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=gA(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ff(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new oj(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ff(this._state)){case sn.SUCCESS:no(this._resolve.bind(null,this.snapshot))();break;case sn.CANCELED:case sn.ERROR:const n=this._reject;no(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ff(this._state)){case sn.RUNNING:case sn.PAUSED:e.next&&no(e.next.bind(e,this.snapshot))();break;case sn.SUCCESS:e.complete&&no(e.complete.bind(e))();break;case sn.CANCELED:case sn.ERROR:e.error&&no(e.error.bind(e,this._error))();break;default:e.error&&no(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this._service=e,n instanceof En?this._location=n:this._location=En.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ms(e,n)}get root(){const e=new En(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AA(this._location.path)}get storage(){return this._service}get parent(){const e=WV(this._location.path);if(e===null)return null;const n=new En(this._location.bucket,e);return new Ms(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw IV(e)}}function cj(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new uj(t,new yi(e),n)}function dj(t){t._throwIfRoot("getDownloadURL");const e=ej(t.storage,t._location,kA());return t.storage.makeRequestWithTokens(e,oo).then(n=>{if(n===null)throw EV();return n})}function hj(t,e){const n=qV(t._location.path,e),r=new En(t._location.bucket,n);return new Ms(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fj(t){return/^[A-Za-z]+:\/\//.test(t)}function pj(t,e){return new Ms(t,e)}function xA(t,e){if(t instanceof Ov){const n=t;if(n._bucket==null)throw _V();const r=new Ms(n,n._bucket);return e!=null?xA(r,e):r}else return e!==void 0?hj(t,e):t}function mj(t,e){if(e&&fj(e)){if(t instanceof Ov)return pj(t,e);throw _m("To use ref(service, url), the first argument must be a Storage instance.")}else return xA(t,e)}function bw(t,e){const n=e==null?void 0:e[pA];return n==null?null:En.makeFromBucketSpec(n,t)}function gj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:eI(i,t.app.options.projectId))}class Ov{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=fA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uV,this._maxUploadRetryTime=cV,this._requests=new Set,i!=null?this._bucket=En.makeFromBucketSpec(i,this._host):this._bucket=bw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=En.makeFromBucketSpec(this._url,e):this._bucket=bw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ms(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new SV(yA());{const o=LV(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Rw="@firebase/storage",Pw="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="storage";function vj(t,e,n){return t=Tt(t),cj(t,e,n)}function yj(t){return t=Tt(t),dj(t)}function _j(t,e){return t=Tt(t),mj(t,e)}function wj(t=Bg(),e){t=Tt(t);const r=dh(t,NA).getImmediate({identifier:e}),i=XT("storage");return i&&Ej(r,...i),r}function Ej(t,e,n,r={}){gj(t,e,n,r)}function Tj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ov(n,r,i,e,Us)}function Ij(){Ps(new Bi(NA,Tj,"PUBLIC").setMultipleInstances(!0)),dr(Rw,Pw,""),dr(Rw,Pw,"esm2017")}Ij();const Sj={apiKey:"AIzaSyBbtB0zS6jGmwWPQYDrAI6plgVhdLXdJ3o",authDomain:"vaultkeep-6a04f.firebaseapp.com",projectId:"vaultkeep-6a04f",storageBucket:"vaultkeep-6a04f.appspot.com",messagingSenderId:"24487673147",appId:"1:24487673147:web:bf7117ce9f27ab0feb4b1e",measurementId:"G-CWJM3VQR3E"},Dv=rI(Sj),Yi=oL(Dv),Kr=K4(Dv),Aj=wj(Dv);function OA(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=OA(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Ii(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=OA(t))&&(r&&(r+=" "),r+=e);return r}const Kl=t=>typeof t=="number"&&!isNaN(t),ws=t=>typeof t=="string",Tn=t=>typeof t=="function",Bc=t=>ws(t)||Tn(t)?t:null,wm=t=>j.isValidElement(t)||ws(t)||Tn(t)||Kl(t);function kj(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Oh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:u,preventExitTransition:c,done:d,nodeRef:f,isIn:m,playToast:E}=o;const A=r?`${e}--${u}`:e,k=r?`${n}--${u}`:n,x=j.useRef(0);return j.useLayoutEffect(()=>{const S=f.current,y=A.split(" "),I=O=>{O.target===f.current&&(E(),S.removeEventListener("animationend",I),S.removeEventListener("animationcancel",I),x.current===0&&O.type!=="animationcancel"&&S.classList.remove(...y))};S.classList.add(...y),S.addEventListener("animationend",I),S.addEventListener("animationcancel",I)},[]),j.useEffect(()=>{const S=f.current,y=()=>{S.removeEventListener("animationend",y),i?kj(S,d,s):d()};m||(c?y():(x.current=1,S.className+=` ${k}`,S.addEventListener("animationend",y)))},[m]),Ne.createElement(Ne.Fragment,null,a)}}function xw(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const en=new Map;let Ql=[];const Em=new Set,Cj=t=>Em.forEach(e=>e(t)),DA=()=>en.size>0;function LA(t,e){var n;if(e)return!((n=en.get(e))==null||!n.isToastActive(t));let r=!1;return en.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function MA(t,e){wm(t)&&(DA()||Ql.push({content:t,options:e}),en.forEach(n=>{n.buildToast(t,e)}))}function Nw(t,e){en.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function bj(t){const{subscribe:e,getSnapshot:n,setProps:r}=j.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const u=function(d,f,m){let E=1,A=0,k=[],x=[],S=[],y=f;const I=new Map,O=new Set,F=()=>{S=Array.from(I.values()),O.forEach(v=>v())},P=v=>{x=v==null?[]:x.filter(_=>_!==v),F()},T=v=>{const{toastId:_,onOpen:C,updateId:R,children:D}=v.props,b=R==null;v.staleId&&I.delete(v.staleId),I.set(_,v),x=[...x,v.props.toastId].filter(ye=>ye!==v.staleId),F(),m(xw(v,b?"added":"updated")),b&&Tn(C)&&C(j.isValidElement(D)&&D.props)};return{id:d,props:y,observe:v=>(O.add(v),()=>O.delete(v)),toggle:(v,_)=>{I.forEach(C=>{_!=null&&_!==C.props.toastId||Tn(C.toggle)&&C.toggle(v)})},removeToast:P,toasts:I,clearQueue:()=>{A-=k.length,k=[]},buildToast:(v,_)=>{if((ce=>{let{containerId:ve,toastId:Pe,updateId:Me}=ce;const Be=ve?ve!==d:d!==1,kt=I.has(Pe)&&Me==null;return Be||kt})(_))return;const{toastId:C,updateId:R,data:D,staleId:b,delay:ye}=_,at=()=>{P(C)},Yt=R==null;Yt&&A++;const ge={...y,style:y.toastStyle,key:E++,...Object.fromEntries(Object.entries(_).filter(ce=>{let[ve,Pe]=ce;return Pe!=null})),toastId:C,updateId:R,data:D,closeToast:at,isIn:!1,className:Bc(_.className||y.toastClassName),bodyClassName:Bc(_.bodyClassName||y.bodyClassName),progressClassName:Bc(_.progressClassName||y.progressClassName),autoClose:!_.isLoading&&(W=_.autoClose,ee=y.autoClose,W===!1||Kl(W)&&W>0?W:ee),deleteToast(){const ce=I.get(C),{onClose:ve,children:Pe}=ce.props;Tn(ve)&&ve(j.isValidElement(Pe)&&Pe.props),m(xw(ce,"removed")),I.delete(C),A--,A<0&&(A=0),k.length>0?T(k.shift()):F()}};var W,ee;ge.closeButton=y.closeButton,_.closeButton===!1||wm(_.closeButton)?ge.closeButton=_.closeButton:_.closeButton===!0&&(ge.closeButton=!wm(y.closeButton)||y.closeButton);let ie=v;j.isValidElement(v)&&!ws(v.type)?ie=j.cloneElement(v,{closeToast:at,toastProps:ge,data:D}):Tn(v)&&(ie=v({closeToast:at,toastProps:ge,data:D}));const me={content:ie,props:ge,staleId:b};y.limit&&y.limit>0&&A>y.limit&&Yt?k.push(me):Kl(ye)?setTimeout(()=>{T(me)},ye):T(me)},setProps(v){y=v},setToggle:(v,_)=>{I.get(v).toggle=_},isToastActive:v=>x.some(_=>_===v),getSnapshot:()=>y.newestOnTop?S.reverse():S}}(o,s,Cj);en.set(o,u);const c=u.observe(a);return Ql.forEach(d=>MA(d.content,d.options)),Ql=[],()=>{c(),en.delete(o)}},setProps(a){var u;(u=en.get(o))==null||u.setProps(a)},getSnapshot(){var a;return(a=en.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=j.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:u}=a.props;o.has(u)||o.set(u,[]),o.get(u).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:LA,count:i==null?void 0:i.length}}function Rj(t){const[e,n]=j.useState(!1),[r,i]=j.useState(!1),s=j.useRef(null),o=j.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:f}=t;var m,E;function A(){n(!0)}function k(){n(!1)}function x(I){const O=s.current;o.canDrag&&O&&(o.didMove=!0,e&&k(),o.delta=t.draggableDirection==="x"?I.clientX-o.start:I.clientY-o.start,o.start!==I.clientX&&(o.canCloseOnClick=!1),O.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,O.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function S(){document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",S);const I=s.current;if(o.canDrag&&o.didMove&&I){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();I.style.transition="transform 0.2s, opacity 0.2s",I.style.removeProperty("transform"),I.style.removeProperty("opacity")}}(E=en.get((m={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||E.setToggle(m.id,m.fn),j.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||k(),window.addEventListener("focus",A),window.addEventListener("blur",k),()=>{window.removeEventListener("focus",A),window.removeEventListener("blur",k)}},[t.pauseOnFocusLoss]);const y={onPointerDown:function(I){if(t.draggable===!0||t.draggable===I.pointerType){o.didMove=!1,document.addEventListener("pointermove",x),document.addEventListener("pointerup",S);const O=s.current;o.canCloseOnClick=!0,o.canDrag=!0,O.style.transition="none",t.draggableDirection==="x"?(o.start=I.clientX,o.removalDistance=O.offsetWidth*(t.draggablePercent/100)):(o.start=I.clientY,o.removalDistance=O.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(I){const{top:O,bottom:F,left:P,right:T}=s.current.getBoundingClientRect();I.nativeEvent.type!=="touchend"&&t.pauseOnHover&&I.clientX>=P&&I.clientX<=T&&I.clientY>=O&&I.clientY<=F?k():A()}};return a&&u&&(y.onMouseEnter=k,t.stacked||(y.onMouseLeave=A)),f&&(y.onClick=I=>{d&&d(I),o.canCloseOnClick&&c()}),{playToast:A,pauseToast:k,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:y}}function Pj(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:u,progress:c,rtl:d,isIn:f,theme:m}=t;const E=s||u&&c===0,A={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(A.transform=`scaleX(${c})`);const k=Ii("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),x=Tn(o)?o({rtl:d,type:i,defaultClassName:k}):Ii(k,o),S={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{f&&r()}};return Ne.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":E},Ne.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${i}`}),Ne.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:x,style:A,...S}))}let xj=1;const VA=()=>""+xj++;function Nj(t){return t&&(ws(t.toastId)||Kl(t.toastId))?t.toastId:VA()}function pl(t,e){return MA(t,e),e.toastId}function jd(t,e){return{...e,type:e&&e.type||t,toastId:Nj(e)}}function pc(t){return(e,n)=>pl(e,jd(t,n))}function se(t,e){return pl(t,jd("default",e))}se.loading=(t,e)=>pl(t,jd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),se.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=ws(i)?se.loading(i,n):se.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,f,m)=>{if(f==null)return void se.dismiss(r);const E={type:d,...a,...n,data:m},A=ws(f)?{render:f}:f;return r?se.update(r,{...E,...A}):se(A.render,{...E,...A}),m},c=Tn(t)?t():t;return c.then(d=>u("success",o,d)).catch(d=>u("error",s,d)),c},se.success=pc("success"),se.info=pc("info"),se.error=pc("error"),se.warning=pc("warning"),se.warn=se.warning,se.dark=(t,e)=>pl(t,jd("default",{theme:"dark",...e})),se.dismiss=function(t){(function(e){var n;if(DA()){if(e==null||ws(n=e)||Kl(n))en.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=en.get(e.containerId);r?r.removeToast(e.id):en.forEach(i=>{i.removeToast(e.id)})}}else Ql=Ql.filter(r=>e!=null&&r.options.toastId!==e)})(t)},se.clearWaitingQueue=function(t){t===void 0&&(t={}),en.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},se.isActive=LA,se.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=en.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:VA()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,pl(o,s)}},se.done=t=>{se.update(t,{progress:1})},se.onChange=function(t){return Em.add(t),()=>{Em.delete(t)}},se.play=t=>Nw(!0,t),se.pause=t=>Nw(!1,t);const Oj=typeof window<"u"?j.useLayoutEffect:j.useEffect,mc=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return Ne.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Bf={info:function(t){return Ne.createElement(mc,{...t},Ne.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return Ne.createElement(mc,{...t},Ne.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return Ne.createElement(mc,{...t},Ne.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return Ne.createElement(mc,{...t},Ne.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Ne.createElement("div",{className:"Toastify__spinner"})}},Dj=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=Rj(t),{closeButton:o,children:a,autoClose:u,onClick:c,type:d,hideProgressBar:f,closeToast:m,transition:E,position:A,className:k,style:x,bodyClassName:S,bodyStyle:y,progressClassName:I,progressStyle:O,updateId:F,role:P,progress:T,rtl:v,toastId:_,deleteToast:C,isIn:R,isLoading:D,closeOnClick:b,theme:ye}=t,at=Ii("Toastify__toast",`Toastify__toast-theme--${ye}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":v},{"Toastify__toast--close-on-click":b}),Yt=Tn(k)?k({rtl:v,position:A,type:d,defaultClassName:at}):Ii(at,k),ge=function(me){let{theme:ce,type:ve,isLoading:Pe,icon:Me}=me,Be=null;const kt={theme:ce,type:ve};return Me===!1||(Tn(Me)?Be=Me({...kt,isLoading:Pe}):j.isValidElement(Me)?Be=j.cloneElement(Me,kt):Pe?Be=Bf.spinner():(Xi=>Xi in Bf)(ve)&&(Be=Bf[ve](kt))),Be}(t),W=!!T||!u,ee={closeToast:m,type:d,theme:ye};let ie=null;return o===!1||(ie=Tn(o)?o(ee):j.isValidElement(o)?j.cloneElement(o,ee):function(me){let{closeToast:ce,theme:ve,ariaLabel:Pe="close"}=me;return Ne.createElement("button",{className:`Toastify__close-button Toastify__close-button--${ve}`,type:"button",onClick:Me=>{Me.stopPropagation(),ce(Me)},"aria-label":Pe},Ne.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Ne.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(ee)),Ne.createElement(E,{isIn:R,done:C,position:A,preventExitTransition:n,nodeRef:r,playToast:s},Ne.createElement("div",{id:_,onClick:c,"data-in":R,className:Yt,...i,style:x,ref:r},Ne.createElement("div",{...R&&{role:P},className:Tn(S)?S({type:d}):Ii("Toastify__toast-body",S),style:y},ge!=null&&Ne.createElement("div",{className:Ii("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},ge),Ne.createElement("div",null,a)),ie,Ne.createElement(Pj,{...F&&!W?{key:`pb-${F}`}:{},rtl:v,theme:ye,delay:u,isRunning:e,isIn:R,closeToast:m,hide:f,type:d,style:O,className:I,controlledProgress:W,progress:T||0})))},Dh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},Lj=Oh(Dh("bounce",!0));Oh(Dh("slide",!0));Oh(Dh("zoom"));Oh(Dh("flip"));const Mj={position:"top-right",transition:Lj,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Mn(t){let e={...Mj,...t};const n=t.stacked,[r,i]=j.useState(!0),s=j.useRef(null),{getToastToRender:o,isToastActive:a,count:u}=bj(e),{className:c,style:d,rtl:f,containerId:m}=e;function E(k){const x=Ii("Toastify__toast-container",`Toastify__toast-container--${k}`,{"Toastify__toast-container--rtl":f});return Tn(c)?c({position:k,rtl:f,defaultClassName:x}):Ii(x,Bc(c))}function A(){n&&(i(!0),se.play())}return Oj(()=>{if(n){var k;const x=s.current.querySelectorAll('[data-in="true"]'),S=12,y=(k=e.position)==null?void 0:k.includes("top");let I=0,O=0;Array.from(x).reverse().forEach((F,P)=>{const T=F;T.classList.add("Toastify__toast--stacked"),P>0&&(T.dataset.collapsed=`${r}`),T.dataset.pos||(T.dataset.pos=y?"top":"bot");const v=I*(r?.2:1)+(r?0:S*P);T.style.setProperty("--y",`${y?v:-1*v}px`),T.style.setProperty("--g",`${S}`),T.style.setProperty("--s",""+(1-(r?O:0))),I+=T.offsetHeight,O+=.025})}},[r,u,n]),Ne.createElement("div",{ref:s,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),se.pause())},onMouseLeave:A},o((k,x)=>{const S=x.length?{...d}:{...d,pointerEvents:"none"};return Ne.createElement("div",{className:E(k),style:S,key:`container-${k}`},x.map(y=>{let{content:I,props:O}=y;return Ne.createElement(Dj,{...O,stacked:n,collapseAll:A,isIn:a(O.toastId,O.containerId),style:O.style,key:`toast-${O.key}`},I)}))}))}const Vj="/assets/sign-4czaFtvg.gif",jj=()=>{const t=Kt(),[e,n]=j.useState(""),[r,i]=j.useState(""),[s,o]=j.useState(""),a=async(c,d,f)=>{try{await WO(c,d,f),se.success("🦄 Successful signup",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/update")}catch(m){o(m.message),se.error(`🦄 ${s}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},u=async c=>{c.preventDefault(),se.info("🦄 Creating Account",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),await a(Yi,e,r)};return g.jsxs("div",{children:[g.jsxs("div",{className:"authBackground",children:[g.jsx("div",{className:"signGif",children:g.jsx("img",{src:Vj,width:"130px",height:"130px",alt:"Sign Gif"})}),g.jsx("h2",{className:"authTitle",children:"Create Account"}),g.jsx("p",{className:"authParagraph",children:"Welcome, sign up to continue"}),g.jsxs("div",{className:"authDetails",children:[g.jsx("input",{className:"authInput",onChange:c=>n(c.target.value),placeholder:"Email",type:"email",required:!0}),g.jsx("input",{className:"authInput",placeholder:"Password",onChange:c=>i(c.target.value),type:"password",required:!0}),g.jsx("p",{onClick:()=>t("/forgot"),className:"authParagraph",children:"Forgot password?"}),g.jsx("button",{className:"authButton",onClick:u,children:"Sign Up"}),g.jsx("p",{className:"authParagraph last",onClick:()=>t("/login"),children:"Already signed up? Login"})]})]}),g.jsx(Mn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(Qt,{})]})},Uj="/assets/log-C5Xo4Pxw.png",Fj=()=>{const t=Kt(),[e,n]=j.useState(),[r,i]=j.useState(),[s,o]=j.useState(),a=async(c,d,f)=>{try{await qO(c,d,f),se("🦄 Successful login",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/profile")}catch(m){o(`error loggin${m.message}`),se(`🦄 ${s}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},u=async c=>{c.preventDefault(),se("🦄 Logging in..",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),await a(Yi,e,r)};return g.jsxs("div",{children:[g.jsxs("div",{className:"authBackground",children:[g.jsx("div",{className:"signGif",children:g.jsx("img",{src:Uj,width:"130px",height:"130px"})}),g.jsx("h2",{className:"authTitle",children:"Sign In"}),g.jsx("p",{className:"authParagraph",children:"Welcome back, Login to continue"}),g.jsxs("div",{className:"authDetails",children:[g.jsx("input",{className:"authInput",onChange:c=>{n(c.target.value)},placeholder:"email",type:"email",required:!0}),g.jsx("input",{className:"authInput",placeholder:"password",onChange:c=>{i(c.target.value)},type:"password",required:!0}),g.jsx("p",{className:"authParagraph",onClick:()=>{t("/forgot")},children:"forgot password?"}),g.jsx("button",{className:"authButton",onClick:u,children:"Sign In"}),g.jsx("p",{className:"authParagraph last",onClick:()=>{t("/signup")},children:"Not signed Up? Sign up"})]})]}),g.jsx(Mn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(Qt,{})]})},Bj="/assets/forgot-aqvkMv1L.gif",zj=()=>{const t=Kt(),[e,n]=j.useState(),[r,i]=j.useState(),s=async(a,u)=>{try{await HO(a,u),se(`🦄 recovery email has been sent to ${u}`,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/login")}catch(c){i(`error sending mail${c.message}`),se(`🦄 ${r}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},o=async a=>{a.preventDefault(),se("🦄 sending recovery email.",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),await s(Yi,e)};return g.jsxs("div",{children:[g.jsxs("div",{className:"authBackground",children:[g.jsx("div",{className:"signGif",children:g.jsx("img",{src:Bj,width:"130px",height:"130px"})}),g.jsx("h2",{className:"authTitle",children:"Forgot Password"}),g.jsx("p",{className:"authParagraph",children:"Lets get you back on board"}),g.jsxs("div",{className:"authDetails",children:[g.jsx("input",{className:"authInput",placeholder:"email",onChange:a=>{n(a.target.value)},type:"email",required:!0}),g.jsx("button",{className:"authButton",onClick:o,children:"Recover Password"}),g.jsx("p",{className:"authParagraph last",onClick:()=>{t("/signup")},children:"Not signedup?, Signup"})]})]}),g.jsx(Mn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(Qt,{})]})},$j="/assets/update-B2xoCSrc.gif",Hj=()=>{const t=Kt(),[e,n]=j.useState(""),[r,i]=j.useState(""),[s,o]=j.useState(""),[a,u]=j.useState(""),c=async()=>{console.log("clicked");const d=Yi.currentUser;if(d){const f=d.uid,m=bh(Kr,"Users");try{await aV(zs(m,f),{userName:e,country:r,email:d.email,phone:s,userId:f,credit:0,btcBalance:0,subbed:!1,userMessages:"Nothing here yet",userSubscriptions:[]}),se.success("🦄 Saved Successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/profile")}catch(E){u(`Error saving details: ${E.message}`),se.error(`🦄 ${a}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),t("/login")}}else u("You are not logged in"),se.error("🦄 You are not logged in",{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),t("/login")};return g.jsxs("div",{children:[g.jsxs("div",{className:"authBackground",children:[g.jsx("div",{className:"signGif",children:g.jsx("img",{src:$j,width:"130px",height:"130px",alt:"Update Gif"})}),g.jsx("h2",{className:"authTitle",children:"Update Info"}),g.jsxs("div",{className:"authDetails",children:[g.jsx("input",{className:"authInput",placeholder:"Username",onChange:d=>n(d.target.value),type:"text",required:!0}),g.jsx("input",{className:"authInput",placeholder:"Country",onChange:d=>i(d.target.value),type:"text",required:!0}),g.jsx("input",{className:"authInput",placeholder:"Phone",onChange:d=>o(d.target.value),type:"tel",required:!0}),g.jsx("button",{type:"button",className:"authButton",onClick:c,children:"Save details"})]})]}),g.jsx(Mn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(Qt,{})]})},zc="/assets/btcoin-BJEYQk3I.png",Wj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChUlEQVR4nO2b224TMRCGvUGcwnPAy1Aogh4knqIHECpXhauWBq5AkEK5KZRHItCWF0AqrcL9h4adJa7bDZA4Bx9+yVLi3Uj7fzsza3sdYyYkoADuaytMSqI0/4qe3gENk6j5dCBQbz5+CPzdfLwQKM2/cYx+r/mMnlvEfOffAk+s7+vAy+gigXrzDTVtAyiigwA8rwttF0CfVHlhQhXQrcvr8wDUQDgxoQp4qhBablGrA2BBaOlvTx2LRvQBkITIAMgRQE6BtGvA455/1kxqAm4AB9quT/p6srKysn4LuAbMAivAo0jaMnAbaJo6UU5AHgLHxKsfwOqZ1SbKBYo90tHHUxAo77wteTa3gY1IWls92Vqxc/7YWbK6bCKTeAJ2nHRoGi0OlfZjNO9AOLT8zkjnA6vjtYlcmg69NCCxefkZv2QA5Aggp8B4agBwCVjUQVcH+Kmto30Lck6UNQC45zyC6iQDlrvRAAAu6EuO/9XWKN4LTgJAi8G1GTQAyrAfVneCBEBZ8NwJyCD65rMwjhPAIv40HyKATx4BfAgRwFePADohAuh6BNBNHcBJiAC+eATwOUQAex4B7IYIYMEjgLkQAVzUNcZhdRjkQEgkszoPAGZN4JOhrSHMb4zgesYOoAE8G8D8ZhTT4Uoyq/vHmrDvO+ynZlWYsjDOy9henu06WOrqZ+mbk3NGfA15WZxJRcA0KEcAOQXW3RRYtTraJnIB25bfZem4ZXUcRP56/IquMVa6KZ1N3SxQaSdGCGr+veXzCLhaHbTToJqAtKdgd5evtu3cedGSu0NMNg6lot3zdooVujfQTofYJGG/1PdPmZQ1QQqjbC6c9O4uX028zPzJeUu/ALjNmx6nGxbCAAAAAElFTkSuQmCC",qj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgklEQVR4nO2au27UQBSG3ZCHWIIEBcpLQJMGIcLrkKQGJY8CilbpCKEIAZzbg4QiBRIkNKk+dNiz0cTYHo9v6/GeT5pij8e/Z34fn5n1bpIYhmEYhmEUALwGjoE/xIeM+QuwkdQB2GE8vKtz54Vb4A0wyRz/Ry1n8693Tw+4mMfkLvqumxeXMQObOgeCMoFZ2gubVQbclKp6IQY4x7b08FHIgG70pEndAQOnQFr0OVSvgQGSCcK1T79tA7JpXTbILg14qId/+/Tv0OopbC3CgEwN+ObT8Ghv13kENvSkW32GJj0bcOYYcOzTyIvrnd92iuCrygYIsnTgIenIgKqa2XgJb33aZZlw5NSEmAy40bGH3fkqDNWApC/o2ADg3LmT6TIacNrWKjAkA1Lge1296A0owwxQxpYBqZvyId8FMhuhOItgyDmjLIJNDCjCDFDqGtga1Lhg2TnLYkC6VPuAJnqZInhS1M8Xj9mAdHTLYBn2CCilLlkGJMvzCAAn85gUxCgNAB4BU3kfr20fWKuiJ8tl1KsAs8n/5H8kthqqF6MBU+3yUSas7UBje6F6MRpwrV1WM1mR+wvNGA240i6PndgTjV0F1oCzGA34oF0OgRVtnzX23qcn7wCiXgWAdWcCL4CXzuf1UL3YM+CBZsBh1QwI/UY5uhoQSmyrwK/AGnDedDyLMGBfuxzoxKV90tjUpwd8LVgFct8sD9GAtZKd4NNQPV+/wRkg6O5vTzY+2qZ5kx+tASGYAUpBEbzwGVUU7wy6N2D+P8V7q0A0+4C+9RZhwA+95rOW9GpPAHiup1+2MZZKALsMj52kL5jt7XedTFgkl/rP9pXeDDAMwzAMI4mdvwrCXToyB6GmAAAAAElFTkSuQmCC",Gj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB40lEQVR4nO3YwY4MURTG8SvCmhgMaw/A0kis2fAGEm9gLFlOGCKsPIewFCsmDIYEM8EDzEiEYGEQwk9u53RS6VS3Tkp336b+q0qf06e+r09X3XtPSi0tLR2wHZfxRrlsYDFrTb3gkunhYp2B7C5zOBUK5kLjRl2wQyoc/XT+LQPYgtN4gE/4iDs43rT2yA1gG24N+O9ebVJ/HAauRZl3OIUd2Ikz+BKxs0UawAH8wDccrImfwC9sYrZEAwtR4vqAnBuRc75EA0tR4uiAnNyFzN0SDbyNEvsG5Mx2n5ESDWziJ7b+4S2V+d7gPh2GD/xHHVia9mdgYYi30M3IOVf6OnCoJn4ybvEZe4sz0LMSv4+VOK/CuzCPrxGbTw0w4b3QlSb1R26gZzd6P3ajH3Abx5rWHouBUWOAge6JbC4VCo6ExvW6YD4sTwsX+k0lFiudKJH1LL52KtHyL4JHWE7TiiBNK1oDE6btwKRpOzBp2g6MAzzEU+wZdiHLufGd5TRpsBI613oP63UGck7kZh6nSYPdeBGCXmN/PwPxy6/Gxy+bTKnHYqJqIMSvFSe+x8TzqonKQaQqPufMpBLBTMXEq4qB7vWzYsV3iWHWk5rjYPnie0ysTKX4FMRIMU+s7+XrUd3oN7hl/B5HupLLAAAAAElFTkSuQmCC",Kj=()=>{const t=Kt(),[e,n]=j.useState(null),r=j.useCallback(async i=>{try{const s=zs(Kr,"Users",i),o=await Cv(s);o.exists()?n(o.data()):se.error("User data not found")}catch(s){se.error("Error fetching user data: "+s.message)}},[]);return j.useEffect(()=>{const i=Yi.currentUser;if(i){const s=i.uid;r(s)}},[r]),g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"profile",children:[g.jsxs("div",{className:"arrange",children:[g.jsx("div",{className:"signGif",children:g.jsx("img",{src:Ag,width:"73px",height:"70px",alt:"Sign Gif"})}),g.jsx("div",{className:"profileTitleDiv",children:g.jsx("p",{className:"profileTitle",children:(e==null?void 0:e.userName)||"User1"})})]}),g.jsxs("div",{className:"cardsSection",children:[g.jsx("div",{className:"card",children:g.jsx("div",{className:"card1",children:g.jsxs("div",{className:"profileDetails",children:[g.jsxs("h4",{className:"userName",children:["$",(e==null?void 0:e.credit)||"0"]}),g.jsxs("p",{className:"userEmail",children:[(e==null?void 0:e.btcBalance)||"0"," BTC"]}),g.jsx("p",{className:"wallet",children:"1ForhbCfMBnU5m5fYBTneHhzHwNGYKh62v"})]})})}),g.jsxs("div",{className:"actions",children:[g.jsxs("div",{className:"itemBox",onClick:()=>t("/send"),children:[g.jsx("div",{className:"item",children:g.jsx("img",{src:Wj,height:25,width:25,alt:"Send"})}),g.jsx("p",{className:"actionText",children:"Send"})]}),g.jsxs("div",{className:"itemBox",onClick:()=>t("/deposit"),children:[g.jsx("div",{className:"item",children:g.jsx("img",{src:Gj,height:25,width:25,alt:"Receive"})}),g.jsx("p",{className:"actionText",children:"Receive"})]}),g.jsxs("div",{className:"itemBox",onClick:()=>t("/withdrawals"),children:[g.jsx("div",{className:"item",children:g.jsx("img",{src:qj,height:25,width:25,alt:"Withdraw"})}),g.jsx("p",{className:"actionText",children:"Withdraw"})]})]})]}),g.jsxs("div",{className:"assetCard",children:[g.jsx("p",{className:"assetTitle",children:"Assets"}),g.jsxs("div",{className:"assetHead",children:[g.jsx("img",{src:zc,height:55,alt:"Bitcoin"}),g.jsx("p",{className:"assetTitle",children:"Bitcoin"}),g.jsxs("p",{className:"assetPrice",children:[(e==null?void 0:e.btcBalance)||"0.00"," BTC"]})]})]}),g.jsxs("div",{className:"assetCard",children:[g.jsx("p",{className:"assetTitle",children:"Recent transactions"}),g.jsxs("div",{className:"assetHead",children:[g.jsx("img",{src:zc,height:55,alt:"Bitcoin"}),g.jsx("p",{className:"depositBox",children:"BTC deposit successful"}),g.jsx("p",{className:"assetPrice",children:"0.015 BTC"})]}),g.jsxs("div",{className:"assetHead",children:[g.jsx("img",{src:zc,height:55,alt:"Bitcoin"}),g.jsx("p",{className:"depositBox",children:"BTC deposit successful"}),g.jsx("p",{className:"assetPrice",children:"0.00519289 BTC"})]})]})]}),g.jsx(Mn,{position:"top-center",autoClose:2500,hideProgressBar:!1}),g.jsx(Qt,{})]})},Xn=()=>g.jsx("div",{className:"divStyle",children:g.jsx("ul",{className:"listStyle",children:g.jsx("li",{className:"item",children:g.jsx("img",{src:Ag,width:"57px",height:"57px"})})})}),jA="/assets/btc-B9PuLlK6.png",UA="/assets/usdtlogo-DMWlymel.png",Qj=()=>{const t=Kt(),e=ru();return g.jsxs(g.Fragment,{children:[g.jsx(Xn,{}),g.jsxs("div",{className:"cryptoDiv",children:[g.jsxs("div",{className:"cryptoTitleDiv",children:[g.jsx("h1",{className:"cryptoTitle",children:"Crypto payments"}),g.jsx("p",{className:"cryptoParagraph",children:"select a payment crypto"})]}),g.jsx("div",{className:"cryptoTable",children:g.jsxs("div",{className:"rows",children:[g.jsxs("div",{className:"tab",onClick:n=>{n.preventDefault(),t("/deposit",{state:{cryptoType:"usdt",price:e.state.price,package:e.state.package}})},children:[g.jsx("img",{src:UA,className:"cryptoLogo"}),g.jsx("p",{children:"Usdt"})]}),g.jsxs("div",{className:"tab",onClick:n=>{n.preventDefault(),t("/deposit",{state:{cryptoType:"btc",price:e.state.price,package:e.state.package}})},children:[g.jsx("img",{src:jA,className:"cryptoLogo"}),g.jsx("p",{children:"Btc"})]})]})})]}),g.jsx(Qt,{})]})},Yj=()=>{const t=Kt();return g.jsxs("div",{className:"consultMainCard",children:[g.jsx("h2",{className:"consultMainTitle",children:" Available Services"}),g.jsxs("div",{className:"consultCard",children:[g.jsx("h3",{className:"consultTitle",children:"Phone Consultation"}),g.jsx("p",{className:"consultTime",children:"7 mins."}),g.jsx("p",{className:"consultPrice",children:"$50"}),g.jsx("button",{className:"select",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"consultation",price:"50"}})},children:"Select"})]}),g.jsxs("div",{className:"consultCard",children:[g.jsx("h3",{className:"consultTitle",children:"Phone Consultation"}),g.jsx("p",{className:"consultTime",children:"10+ mins."}),g.jsx("p",{className:"consultPrice",children:"$100"}),g.jsx("button",{className:"select",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"consultation",price:"100"}})},children:"Select"})]}),g.jsxs("div",{className:"consultCard",children:[g.jsx("h3",{className:"consultTitle",children:"Grants Access"}),g.jsx("p",{className:"consultTime",children:"Get access to government grants and citizens funding."}),g.jsx("p",{className:"consultPrice",children:"$1000"}),g.jsx("button",{className:"select",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"grant",price:"1000"}})},children:"Select"})]}),g.jsxs("div",{className:"consultCard",children:[g.jsx("h3",{className:"consultTitle",children:"Business Funds Access"}),g.jsx("p",{className:"consultTime",children:"Secure access to business fundings."}),g.jsx("p",{className:"consultPrice",children:"$1000"}),g.jsx("button",{className:"select",onClick:e=>{e.preventDefault(),t("/payment",{state:{package:"business",price:"1000"}})},children:"Select"})]})]})},Xj=()=>g.jsxs(g.Fragment,{children:[g.jsx(Xn,{}),g.jsx(qT,{}),g.jsx(Yj,{}),g.jsx(Qt,{})]});var Lh={},Jj=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(i){t.addRange(i)}),e&&e.focus()}},Zj=Jj,Ow={"text/plain":"Text","text/html":"Url",default:"Text"},eU="Copy to clipboard: #{key}, Enter";function tU(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function nU(t,e){var n,r,i,s,o,a,u=!1;e||(e={}),n=e.debug||!1;try{i=Zj(),s=document.createRange(),o=document.getSelection(),a=document.createElement("span"),a.textContent=t,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(d){if(d.stopPropagation(),e.format)if(d.preventDefault(),typeof d.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=Ow[e.format]||Ow.default;window.clipboardData.setData(f,t)}else d.clipboardData.clearData(),d.clipboardData.setData(e.format,t);e.onCopy&&(d.preventDefault(),e.onCopy(d.clipboardData))}),document.body.appendChild(a),s.selectNodeContents(a),o.addRange(s);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),r=tU("message"in e?e.message:eU),window.prompt(r,t)}}finally{o&&(typeof o.removeRange=="function"?o.removeRange(s):o.removeAllRanges()),a&&document.body.removeChild(a),i()}return u}var rU=nU;function Tm(t){"@babel/helpers - typeof";return Tm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tm(t)}Object.defineProperty(Lh,"__esModule",{value:!0});Lh.CopyToClipboard=void 0;var gc=FA(j),iU=FA(rU),sU=["text","onCopy","options","children"];function FA(t){return t&&t.__esModule?t:{default:t}}function Dw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Lw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Dw(Object(n),!0).forEach(function(r){Lv(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oU(t,e){if(t==null)return{};var n=aU(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function aU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function uU(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function cU(t,e,n){return e&&uU(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function dU(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Im(t,e)}function Im(t,e){return Im=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Im(t,e)}function hU(t){var e=pU();return function(){var r=Ud(t),i;if(e){var s=Ud(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return fU(this,i)}}function fU(t,e){if(e&&(Tm(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return BA(t)}function BA(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function pU(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ud(t){return Ud=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ud(t)}function Lv(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var zA=function(t){dU(n,t);var e=hU(n);function n(){var r;lU(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Lv(BA(r),"onClick",function(a){var u=r.props,c=u.text,d=u.onCopy,f=u.children,m=u.options,E=gc.default.Children.only(f),A=(0,iU.default)(c,m);d&&d(c,A),E&&E.props&&typeof E.props.onClick=="function"&&E.props.onClick(a)}),r}return cU(n,[{key:"render",value:function(){var i=this.props;i.text,i.onCopy,i.options;var s=i.children,o=oU(i,sU),a=gc.default.Children.only(s);return gc.default.cloneElement(a,Lw(Lw({},o),{},{onClick:this.onClick}))}}]),n}(gc.default.PureComponent);Lh.CopyToClipboard=zA;Lv(zA,"defaultProps",{onCopy:void 0,options:void 0});var mU=Lh,Sm=mU.CopyToClipboard;Sm.CopyToClipboard=Sm;var gU=Sm;const vU=()=>{const t=Kt(),[e,n]=j.useState(""),[r,i]=j.useState(""),[s,o]=j.useState("");j.useCallback(async()=>{const u=Yi.currentUser;if(console.log(s),!u){o("You are not logged in"),se.error("🦄 You are not logged in",{theme:"dark"});return}const c=u.uid;i(c),console.log(r);const d=Date.now();try{const f=await hA(bh(Kr,"Packages"),{userId:c,price:location.state.price,package:location.state.package,approved:!1,date:d,receiptUrl:"",subscriptionId:""});await dA(zs(Kr,"Packages",f.id),{subscriptionId:f.id}),se.success("🦄  Payment is processing",{theme:"light"}),setTimeout(()=>{t("/proof",{state:{plan:location.state.plan,amount:location.state.amount,docId:f.id,type:location.state.cryptoType}})},3e3)}catch(f){o(`Error saving details: ${f.message}`),se.error(`🦄 ${f.message}`,{theme:"dark"})}},[location.state,t]);const a=j.useCallback(u=>{n({btc:"3GNtWqSsGe2GUZLCHHx9w3hj2f8hwcbjhA",ltc:"ltc1qscyyf9uz5awsfa3z3v3gdahsfs9wxas4r5hpxv",bnb:"0xcF3c05327e3928f5F2dc900c7e35aB0Ec8AF1793",trx:"TDZSuxiYMnrAeEyXxaJF8r2Ey3zV4XPbzs",usdt:"EQCA1BI4QRZ8qYmskSRDzJmkucGodYRTZCf_b9hckjla6dZl",eth:"0xcF3c05327e3928f5F2dc900c7e35aB0Ec8AF1793"}[u]||"Unknown crypto type")},[]);return j.useEffect(()=>{var u;(u=location.state)!=null&&u.cryptoType&&a(location.state.cryptoType)},[location.state,a]),g.jsxs(g.Fragment,{children:[g.jsx(Xn,{}),g.jsx("div",{className:"deposit",children:g.jsxs("div",{className:"depositDiv",children:[g.jsx("h1",{className:"depositTitle",children:"Deposits"}),g.jsxs("div",{className:"depositAddressCard",children:[g.jsx("h3",{className:"depositHead",children:g.jsx("img",{src:zc,width:60,height:60})}),g.jsx("div",{className:"depositCryptoCard",children:g.jsx("p",{className:"depositHead"})}),g.jsxs("div",{className:"depositAddress",children:[g.jsx("p",{className:"planAddress",children:"Deposit Address:"}),g.jsx("p",{className:"address",children:"1ForhbCfMBnU5m5fYBTneHhzHwNGYKh62v"})]})]}),g.jsx(gU.CopyToClipboard,{text:e,onCopy:()=>se.success("🦄 Address has been copied",{theme:"light"}),children:g.jsx("button",{className:"copy",children:"Copy Address"})}),g.jsx("button",{className:"continue",onClick:()=>{se.info("🦄 Deposit is being confirmed",{theme:"light"}),t("/profile")},children:"Continue"})]})}),g.jsx(Mn,{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"light"}),g.jsx(Qt,{})]})},yU=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(0),[i,s]=j.useState(""),[o,a]=j.useState(""),u=ru(),c=Kt(),d=async E=>{console.log(i),console.log(`doc Id is: ${u.state.docId}`);const A=zs(Kr,"Packages",u.state.docId);try{await dA(A,{receiptUrl:E}),se("🦄 Saved Successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),c("/profile")}catch(k){a(`error saving details${k.message}`),se(`🦄 ${o}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},f=E=>{e(E.target.files[0])},m=()=>{t||alert("choose an image to submit");const E=_j(Aj,`/receipts/${t.name}`),A=vj(E,t);A.on("state_changed",k=>{const x=Math.round(k.bytesTransferred/k.totalBytes*100);r(x)},k=>{se(`🦄 error uploading ${k.message}`,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},()=>{se("🦄 receipt uploaded",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),yj(A.snapshot.ref).then(k=>{s(k),d(k)})})};return g.jsxs(g.Fragment,{children:[g.jsx(Xn,{}),g.jsxs("div",{className:"central",children:[g.jsx("h1",{className:"payTitle",children:"Payment Information"}),g.jsx("p",{className:"payPara",children:"Submit payment information/receipts"}),g.jsxs("div",{className:"imgDiv",children:[g.jsx("p",{className:"payDesc",children:"Choose an image/screenshot"}),g.jsx("input",{type:"file",onChange:f,className:"file",accept:"image/*"}),g.jsxs("p",{className:"percent",children:[n,"%"]})]}),g.jsx("div",{className:"submitDiv",children:g.jsx("button",{className:"submitBtn",onClick:m,children:"Submit receipt"})})]}),g.jsx(Qt,{}),g.jsx(Mn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})},_U=()=>{const t=Kt();j.useEffect(()=>{},[]);const e=async n=>{n.preventDefault(),se("🦄 payment is being processed",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{t("/profile")},4e3)};return g.jsxs(g.Fragment,{children:[g.jsx(Xn,{}),g.jsx("div",{className:"withdrawals",children:g.jsxs("div",{className:"depositDiv",children:[g.jsx("h1",{className:"depositTitle",children:"Withdrawals"}),g.jsx("div",{className:"withdrawCard"}),g.jsxs("div",{className:"inputDiv",children:[g.jsx("input",{className:"input",type:"text",placeholder:"amount",required:!0}),g.jsx("input",{className:"input",type:"text",placeholder:"enter crypto address",required:!0})]}),g.jsx("button",{className:"continue",onClick:e,children:"Continue"})]})}),g.jsx(Mn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(Qt,{})]})},wU=()=>g.jsxs(g.Fragment,{children:[g.jsx(Xn,{}),g.jsxs("div",{className:"workDiv",children:[g.jsx("h1",{className:"title",children:"How it works"}),g.jsx(WT,{}),g.jsxs("div",{className:"tutorialDiv",children:[g.jsxs("div",{className:"item",children:[g.jsx(_n,{icon:Ei,size:"lg",color:"blue"}),g.jsx("p",{className:"itemText",children:"Create an account"})]}),g.jsxs("div",{className:"item",children:[g.jsx(_n,{icon:Ei,size:"lg",color:"blue"}),g.jsx("p",{className:"itemText",children:"Choose a service"})]}),g.jsxs("div",{className:"item",children:[g.jsx(_n,{icon:Ei,size:"lg",color:"blue"}),g.jsx("p",{className:"itemText",children:"Select payment method"})]}),g.jsxs("div",{className:"item",children:[g.jsx(_n,{icon:Ei,size:"lg",color:"blue"}),g.jsx("p",{className:"itemText",children:"Track your progress via dashboard"})]})]})]}),g.jsx(Qt,{})]}),EU=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(0),[i,s]=j.useState({}),o=async d=>{const f=zs(Kr,"Users",d),m=await Cv(f);m.exists()&&(console.log("Document data:",m.data()),s(m.data()),m.update({btcBalance:n,credit:n}).then(()=>{console.log("Document successfully updated!")}).catch(E=>{console.error("Error updating document: ",E)}))},a=async()=>{try{const f=(await oV(bh(Kr,"Users"))).docs.map(m=>({...m.data(),id:m.id}));e(f)}catch(d){console.error("Error fetching subscriptions: ",d.message)}};j.useEffect(()=>{a()},[]);const u=({uid:d,btc:f,credit:m,email:E})=>g.jsxs("div",{className:"reqBox",children:[g.jsxs("div",{className:"reqInfo",children:[g.jsx("p",{className:"infoId",children:d}),g.jsxs("p",{className:"info",children:["$",m]}),g.jsxs("p",{className:"info",children:[f,"BTC"]}),g.jsx("p",{className:"info",children:E})]}),g.jsx("div",{className:"input",children:g.jsx("input",{className:"input",placeholder:"Amount to add",onChange:A=>{r(A.target.value)},type:"number"})}),g.jsx("div",{className:"buttonDiv",children:g.jsx("button",{className:"button",onClick:()=>{o(d)},children:"Boost gain"})})]}),c=()=>g.jsx("div",{children:t.map(d=>g.jsx(u,{btc:d.btcBalance,email:d.email,credit:d.credit,uid:d.userId},d.id))});return g.jsxs(g.Fragment,{children:[g.jsx(Xn,{}),g.jsx("div",{className:"central",children:g.jsxs("div",{className:"titleDiv",children:[g.jsx("h3",{className:"main",children:"Admin DashBoard"}),g.jsx("p",{className:"descTitle",children:"User Receipts"}),g.jsx("div",{className:"innerBox",children:g.jsx(c,{})}),g.jsx(Mn,{position:"top-center",autoClose:3e3,hideProgressBar:!1})]})})]})},$A="/assets/masterlogo-CKfSWtT3.png",HA="/assets/visalogo-DjYsDOJr.png",TU=()=>{const t=Kt(),e=ru();return g.jsxs(g.Fragment,{children:[g.jsx(Xn,{}),g.jsxs("div",{className:"cryptoDiv",children:[g.jsxs("div",{className:"cryptoTitleDiv",children:[g.jsx("h1",{className:"cryptoTitle",children:"Payments"}),g.jsx("p",{className:"cryptoParagraph",children:"select how to pay."})]}),g.jsxs("div",{className:"cryptoTable",children:[g.jsxs("div",{className:"payBox",children:[g.jsxs("div",{className:"cardIcons",children:[" ",g.jsx("img",{src:HA,className:"cardIconItem"}),g.jsx("img",{src:$A,className:"cardIconItem"})]}),g.jsx("button",{className:"selection",onClick:n=>{n.preventDefault(),t("/card",{state:{price:e.state.price,package:e.state.package}})},children:"Pay via card"})]}),g.jsxs("div",{className:"payBox",children:[g.jsxs("div",{className:"cardIcons",children:[" ",g.jsx("img",{src:jA,className:"cardIconItem"}),g.jsx("img",{src:UA,className:"cardIconItem"})]}),g.jsx("button",{className:"selection",onClick:n=>{n.preventDefault(),t("/cryptoselect",{state:{price:e.state.price,package:e.state.package}})},children:"Pay via crypto"})]})]})]}),g.jsx(Qt,{})]})},IU="/assets/americanLogo-CaPYbvx4.jpg",SU=()=>{const t=Kt(),[e,n]=j.useState(""),[r,i]=j.useState(""),[s,o]=j.useState(""),[a,u]=j.useState(),[c,d]=j.useState(),f=async m=>{console.log("clicked"),m.preventDefault();const E=Yi.currentUser;if(E!==null){const A=E.uid;u(A);const k=bh(Kr,"Cards");try{await hA(k),se("🦄 Payment processed successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),t("/profile")}catch(x){d(`error processing details${x.message}`),se(`🦄 ${c}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}}else d("youre not logged in"),se(`🦄 ${c}`,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),t("/login")};return g.jsxs("div",{children:[g.jsx(Xn,{}),g.jsxs("div",{className:"authBackground",children:[g.jsx("div",{className:"signGif"}),g.jsxs("div",{className:"authDetails",children:[g.jsxs("div",{className:"payment",children:[g.jsx("h2",{className:"authTitle",children:"Pay with card"}),g.jsxs("div",{className:"logos",children:[g.jsx("img",{src:IU,width:"37px",height:"27px"}),g.jsx("img",{src:HA,width:"37px",height:"27px"}),g.jsx("img",{src:$A,width:"37px",height:"27px"})]})]}),g.jsx("input",{className:"authInput",placeholder:"Credit card no.",onChange:m=>{n(m.target.value)},type:"name",required:!0}),g.jsx("input",{className:"authInput",placeholder:"cvv",onChange:m=>{i(m.target.value)},type:"name",required:!0}),g.jsx("input",{className:"authInput",placeholder:"passcode",onChange:m=>{o(m.target.value)},type:"number",required:!0}),g.jsx("input",{className:"authInput",placeholder:"exp date",onChange:m=>{o(m.target.value)},type:"number",required:!0}),g.jsx("button",{type:"button",className:"authButton",onClick:m=>{f(m)},children:"Pay"})]})]}),g.jsx(Mn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(Qt,{})]})},AU=()=>{const[t,e]=j.useState("Nothing here yet"),[n,r]=j.useState(null),i=j.useCallback(async s=>{try{const o=zs(Kr,"Users",s),a=await Cv(o);a.exists()?r(a.data()):se.error("User data not found")}catch{se.error("Error fetching user data")}},[]);return j.useEffect(()=>{const s=Yi.currentUser;if(s){const o=s.uid;i(o),e(n.userMessages)}},[n]),g.jsxs(g.Fragment,{children:[g.jsx(Xn,{}),g.jsx("div",{className:"messageDiv",children:g.jsxs("div",{className:"messageBox",children:[g.jsx("h2",{className:"progressTitle",children:"Track Progress"}),g.jsx("p",{className:"progressDesc",children:"track your repair/funding process here"}),g.jsx("p",{className:"trackMessage",children:t})]})}),g.jsx(Mn,{position:"top-center",autoClose:3e3,hideProgressBar:!1}),g.jsx(Qt,{})]})},kU=()=>{const t=Kt();j.useEffect(()=>{},[]);const e=async n=>{n.preventDefault(),se("🦄 payment is being processed",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{t("/profile")},4e3)};return g.jsxs(g.Fragment,{children:[g.jsx(Xn,{}),g.jsx("div",{className:"send",children:g.jsxs("div",{className:"depositDiv",children:[g.jsx("h1",{className:"depositTitle",children:"Send crypto"}),g.jsx("div",{className:"withdrawCard"}),g.jsxs("div",{className:"inputDiv",children:[g.jsx("input",{className:"input",type:"text",placeholder:"amount",required:!0}),g.jsx("input",{className:"input",type:"text",placeholder:"enter crypto address",required:!0})]}),g.jsx("button",{className:"continue",onClick:e,children:"Continue"})]})}),g.jsx(Mn,{position:"top-center",autoClose:1e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),g.jsx(Qt,{})]})},CU=KR([{path:"/",element:g.jsx(pN,{})},{path:"signup",element:g.jsx(jj,{})},{path:"login",element:g.jsx(Fj,{})},{path:"forgot",element:g.jsx(zj,{})},{path:"update",element:g.jsx(Hj,{})},{path:"profile",element:g.jsx(Kj,{})},{path:"subs",element:g.jsx(Xj,{})},{path:"cryptoselect",element:g.jsx(Qj,{})},{path:"deposit",element:g.jsx(vU,{})},{path:"proof",element:g.jsx(yU,{})},{path:"withdrawals",element:g.jsx(_U,{})},{path:"works",element:g.jsx(wU,{})},{path:"admin",element:g.jsx(EU,{})},{path:"payment",element:g.jsx(TU,{})},{path:"card",element:g.jsx(SU,{})},{path:"progress",element:g.jsx(AU,{})},{path:"send",element:g.jsx(kU,{})}]);zf.createRoot(document.getElementById("root")).render(g.jsx(Ne.StrictMode,{children:g.jsx(rP,{router:CU})}));
