/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

;/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = global || self, factory(global.bootstrap = {}, global.jQuery));
}(this, (function (exports, $) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(EVENT_CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(CLASS_NAME_SHOW);

      if (!$(element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.5.0';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$(button).hasClass(CLASS_NAME_BUTTON)) {
      button = $(button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'LABEL' && inputBtn && inputBtn.type === 'checkbox') {
        event.preventDefault(); // work around event sent to label and input
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(SELECTOR_BUTTON)[0];
    $(button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.0';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default), config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $(this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $.Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $(indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(CLASS_NAME_SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $(activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $(nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2(_objectSpread2({}, Default), $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread2(_objectSpread2({}, _config), config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.0';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(EVENT_SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $.Event(EVENT_HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $(trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$1), config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$1), $this.data()), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.0
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

  var timeoutDuration = function () {
    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
      if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        return 1;
      }
    }
    return 0;
  }();

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  /**
   * Returns the reference node of the reference object, or the reference object itself.
   * @method
   * @memberof Popper.Utils
   * @param {Element|Object} reference - the reference element (the popper will be relative to this)
   * @returns {Element} parent
   */
  function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
  }

  var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var round = Math.round,
        floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right)
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

      // flips variation if reference element overflows boundaries
      var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      // flips variation if popper content overflows boundaries
      var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

      var flippedVariation = flippedVariationByRef || flippedVariationByContent;

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport',
      /**
       * @prop {Boolean} flipVariations=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the reference element overlaps its boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariations: false,
      /**
       * @prop {Boolean} flipVariationsByContent=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the popper element overlaps its reference boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariationsByContent: false
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedules an update. It will run on the next UI update available.
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.0';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || $(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || !$(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), $(this._element).data()), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $(this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($(this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2(_objectSpread2({}, popperConfig), this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $(parent).removeClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $(this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          $(parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.0';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$2);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(EVENT_FOCUSIN);
      $(this._element).removeClass(CLASS_NAME_SHOW$3);
      $(this._element).off(EVENT_CLICK_DISMISS);
      $(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $(document).off(EVENT_FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$3), config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(EVENT_HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$3), $(this).data()), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.0';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2(_objectSpread2({}, defaultBsConfig), this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2(_objectSpread2({}, this.config), {}, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), dataAttributes), typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.0';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2(_objectSpread2({}, Tooltip.Default), {}, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2(_objectSpread2({}, Tooltip.DefaultType), {}, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.0';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$6), typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $(this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.0';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(CLASS_NAME_ACTIVE$3) || $(this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(SELECTOR_ACTIVE_UL) : $(container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $(active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $(element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $(dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.5.0';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(EVENT_SHOW$4);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $(_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$4);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $(this._element).off(EVENT_CLICK_DISMISS$1);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$7), $(this._element).data()), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $(_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.bundle.js.map

;/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>',{
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $( '<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap( $( '<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
		html.attr( 'height', height );
		html.attr( 'width', width );
		if (video.type === 'youtube') {
			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
		} else if (video.type === 'vimeo') {
			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
		} else if (video.type === 'vzaar') {
			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
		}

		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

;(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.createEvent = function(event, bubble, cancel, detail) {
      var customEvent;
      if (bubble == null) {
        bubble = false;
      }
      if (cancel == null) {
        cancel = false;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };

    Util.prototype.emitEvent = function(elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if (("on" + event) in (elem != null)) {
        return elem["on" + event]();
      }
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null,
      scrollContainer: null
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.resetAnimation = bind(this.resetAnimation, this);
      this.start = bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      this.animationNameCache = new WeakMap();
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    WOW.prototype.init = function() {
      var ref;
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, j, len, ref;
      this.stopped = false;
      this.boxes = (function() {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      this.all = (function() {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var k, len1, node, record, results;
            results = [];
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];
              results.push((function() {
                var l, len2, ref1, results1;
                ref1 = record.addedNodes || [];
                results1 = [];
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];
                  results1.push(this.doSync(node));
                }
                return results1;
              }).call(_this));
            }
            return results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, j, len, ref, results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      ref = element.querySelectorAll("." + this.config.boxClass);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          results.push(this.scrolled = true);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      box.className = box.className + " " + this.config.animateClass;
      if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);
      this.util().addEvent(box, 'animationend', this.resetAnimation);
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
      return box;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, j, len, ref, results;
      ref = this.boxes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        results.push(box.style.visibility = 'visible');
      }
      return results;
    };

    WOW.prototype.resetAnimation = function(event) {
      var target;
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;
        return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, results, value, vendor;
      results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        results.push((function() {
          var j, len, ref, results1;
          ref = this.vendors;
          results1 = [];
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];
            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var j, len, ref, result, style, vendor;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      ref = this.vendors;
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName, error;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);

;/*! skrollr 0.6.26 (2014-06-08) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ft=r.forceHeight!==!1,ft&&(Vt=r.scale||1),mt=r.mobileDeceleration||x,dt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||E,vt={targetTop:it.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Mt)&&($t=t,Mt=e,_t=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.26"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(B=n.match(e)||+n==n&&t[n].match(e))break;if(!B)return B=G="",r;B=B[0],"-"===B.slice(0,1)?(G=B,B={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(Gt||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=dt,f=yt,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==A&&b!==F?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Vt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&H in i?(x=i[H],k=lt[x].styleAttr,w=lt[x].classAttr):(x=i[H]=Bt++,k=i.style.cssText,w=Ct(i)),lt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},pt.topDiff||(pt.done&&pt.done.call(it,!1),pt=r),it},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(it,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Gt?Kt=s.min(s.max(t,0),Ot):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ot},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),wt(),Dt(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Ot=0,Vt=1,ut=r,mt=r,zt="down",qt=-1,Mt=0,$t=0,_t=!1,pt=r,dt=r,gt=r,vt=r,ht=r,Bt=0,yt=r,Gt=!1,Kt=0,Tt=r};var X=function(){var n,i,l,c,d,g,v,h,y,T,b,S;St(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,I.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:I.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,it.setScrollTop(Kt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/mt),F=E*A+.5*mt*A*A,C=it.getScrollTop()-F,D=0;C>Ot?(D=(Ot-C)/F,C=Ot):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=At();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=m,ft&&!l.isEnd&&l.frame>Ot&&(Ot=l.frame);for(Ot=s.max(Ot,Ft()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Ot-l.offset+m);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(xt(c,p.eventType,zt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(xt(c,y.eventType,zt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=nt(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=rt(A.props[o].value,F.props[o].value,C),a=nt(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===zt?xt(c,A.eventType,zt):xt(c,F.eventType,zt),s.lastFrameIndex=E);break}}},Z=function(){_t&&(_t=!1,Et());var e,t,n=it.getScrollTop(),o=Pt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:Lt,endTime:Lt+gt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/gt),n=0|vt.startTop+t*vt.topDiff)}if(Gt&&st&&i.setStyle(st,"transform","translate(0, "+-Kt+"px) "+Tt),ht||qt!==n){zt=n>qt?"down":qt>n?"up":zt,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Ot,direction:zt},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}Lt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(V),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ct(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(z,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},kt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=Yt.length;r>t;t++)e=Yt[t],kt(e.element,e.name,e.listener);Yt=[]},xt=function(e,t,r){ct.keyframe&&ct.keyframe.call(it,e,t,r)},Et=function(){var e=it.getScrollTop();Ot=0,ft&&!Gt&&(a.style.height=""),j(),ft&&!Gt&&(a.style.height=Ot+o.clientHeight+"px"),Gt?it.setScrollTop(s.min(it.getScrollTop(),Ot)):it.setScrollTop(e,!0),ht=!0},At=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ft=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ct=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=It(i).replace(It(o[l])," ");i=Ht(i);for(var c=0,f=n.length;f>c;c++)-1===It(i).indexOf(It(n[c]))&&(i+=" "+n[c]);t[a]=Ht(i)},Ht=function(e){return e.replace(P,"")},It=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Ot=0,Vt=1,zt="down",qt=-1,Lt=Pt(),Mt=0,$t=0,_t=!1,Bt=0,Gt=!1,Kt=0,Yt=[];"function"==typeof define&&define.amd?define("skrollr",function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);
;/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  }
  var $window = $(window);

  var $prior_appeared;

  function process() {
    check_lock = false;
    for (var index = 0; index < selectors.length; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared) {
        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);

;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));
;/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {
        factory(root.jQuery);
    }
}(this, function ($) {
    $.fn.appear = function(fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function() {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
}));

;/********************************************
	-	THEMEPUNCH TOOLS Ver. 6.0     -
	 Last Update of Tools 12.02.2019
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 6.0.0
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/

(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.9",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipetp=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipetp")}}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}return G};f.fn.swipetp.version=y;f.fn.swipetp.defaults=n;f.fn.swipetp.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipetp.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipetp.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipetp.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipetp.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,aw){var aA=(a||d||!aw.fallbackToMouseEvents),K=aA?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",az=aA?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=aA?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=aA?null:"mouseleave",aE=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ah=0,aQ=null,ac=0,a2=0,a0=0,H=1,ar=0,aK=0,N=null;var aS=f(a5);var aa="start";var X=0;var aR=null;var U=0,a3=0,a6=0,ae=0,O=0;var aX=null,ag=null;try{aS.bind(K,aO);aS.bind(aE,ba)}catch(al){f.error("events not supported "+K+","+aE+" on jQuery.swipetp")}this.enable=function(){aS.bind(K,aO);aS.bind(aE,ba);return aS};this.disable=function(){aL();return aS};this.destroy=function(){aL();aS.data(C,null);aS=null};this.option=function(bd,bc){if(aw[bd]!==undefined){if(bc===undefined){return aw[bd]}else{aw[bd]=bc}}else{f.error("Option "+bd+" does not exist on jQuery.swipetp.options")}return null};function aO(be){if(aC()){return}if(f(be.target).closest(aw.excludedElements,aS).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{be.preventDefault()}ah=0;aQ=null;aK=null;ac=0;a2=0;a0=0;H=1;ar=0;aR=ak();N=ab();S();if(!bg||(X===aw.fingers||aw.fingers===i)||aY()){aj(0,bc);U=au();if(X==2){aj(1,bg[1]);a2=a0=av(aR[0].start,aR[1].start)}if(aw.swipeStatus||aw.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(aw.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);if(aw.hold){bd=aw.hold.call(aS,bf,bf.target)}},this),aw.longTapThreshold)}ap(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||an()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aI(bd);a3=au();if(bj){X=bj.length}if(aw.hold){clearTimeout(ag)}aa=k;if(X==2){if(a2==0){aj(1,bj[1]);a2=a0=av(aR[0].start,aR[1].start)}else{aI(bj[1]);a0=av(aR[0].end,aR[1].end);aK=at(aR[0].end,aR[1].end)}H=a8(a2,a0);ar=Math.abs(a2-a0)}if((X===aw.fingers||aw.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);am(bf,aQ);ah=aT(bg.start,bg.end);ac=aN();aJ(aQ,ah);if(aw.swipeStatus||aw.pinchStatus){be=P(bi,aa)}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var bc=true;if(aw.triggerOnTouchLeave){var bh=aZ(this);bc=F(bg.end,bh)}if(!aw.triggerOnTouchEnd&&bc){aa=aD(k)}else{if(aw.triggerOnTouchLeave&&!bc){aa=aD(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length){G();return true}}if(an()){X=ae}a3=au();ac=aN();if(bb()||!ao()){aa=q;P(bd,aa)}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&aa===k)){bc.preventDefault();aa=h;P(bd,aa)}else{if(!aw.triggerOnTouchEnd&&a7()){aa=h;aG(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}ap(false);return null}function ba(){X=0;a3=0;U=0;a2=0;a0=0;H=1;S();ap(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(aw.triggerOnTouchLeave){aa=aD(h);P(bd,aa)}}function aL(){aS.unbind(K,aO);aS.unbind(aE,ba);aS.unbind(az,a4);aS.unbind(V,M);if(T){aS.unbind(T,L)}ap(false)}function aD(bg){var bf=bg;var be=aB();var bd=ao();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&aw.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if((J()||W())||(Q()||aY())){if(J()||W()){bd=aG(be,bc,l)}if((Q()||aY())&&bd!==false){bd=aG(be,bc,t)}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)}else{if(aq()&&bd!==false){bd=aG(be,bc,b)}else{if(ai()&&bd!==false){bd=aG(be,bc,B)}}}}if(bc===q){ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aG(bf,bc,be){var bd;if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ac||0,X,aR]);if(aw.swipeStatus){bd=aw.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ac||0,X,aR);if(bd===false){return false}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ac,X,aR]);if(aw.swipe){bd=aw.swipe.call(aS,bf,aQ,ah,ac,X,aR);if(bd===false){return false}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ac,X,aR]);if(aw.swipeLeft){bd=aw.swipeLeft.call(aS,bf,aQ,ah,ac,X,aR)}break;case o:aS.trigger("swipeRight",[aQ,ah,ac,X,aR]);if(aw.swipeRight){bd=aw.swipeRight.call(aS,bf,aQ,ah,ac,X,aR)}break;case e:aS.trigger("swipeUp",[aQ,ah,ac,X,aR]);if(aw.swipeUp){bd=aw.swipeUp.call(aS,bf,aQ,ah,ac,X,aR)}break;case x:aS.trigger("swipeDown",[aQ,ah,ac,X,aR]);if(aw.swipeDown){bd=aw.swipeDown.call(aS,bf,aQ,ah,ac,X,aR)}break}}}if(be==t){aS.trigger("pinchStatus",[bc,aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchStatus){bd=aw.pinchStatus.call(aS,bf,bc,aK||null,ar||0,ac||0,X,H,aR);if(bd===false){return false}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchIn){bd=aw.pinchIn.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break;case A:aS.trigger("pinchOut",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchOut){bd=aw.pinchOut.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aX);clearTimeout(ag);if(Z()&&!I()){O=au();aX=setTimeout(f.proxy(function(){O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}},this),aw.doubleTapThreshold)}else{O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("doubletap",[bf.target]);if(aw.doubleTap){bd=aw.doubleTap.call(aS,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("longtap",[bf.target]);if(aw.longTap){bd=aw.longTap.call(aS,bf,bf.target)}}}}}return bd}function ao(){var bc=true;if(aw.threshold!==null){bc=ah>=aw.threshold}return bc}function bb(){var bc=false;if(aw.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=aw.cancelThreshold}return bc}function af(){if(aw.pinchThreshold!==null){return ar>=aw.pinchThreshold}return true}function aB(){var bc;if(aw.maxTimeThreshold){if(ac>=aw.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function am(bc,bd){if(aw.preventDefaultEvents===false){return}if(aw.allowPageScroll===m){bc.preventDefault()}else{var be=aw.allowPageScroll===s;switch(bd){case p:if((aw.swipeLeft&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((aw.swipeRight&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((aw.swipeUp&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((aw.swipeDown&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aP();var bc=Y();var be=af();return bd&&bc&&be}function aY(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function Q(){return !!(a9()&&aY())}function aW(){var bf=aB();var bh=ao();var be=aP();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function J(){return !!(aW()&&W())}function aP(){return((X===aw.fingers||aw.fingers===i)||!a)}function Y(){return aR[0].end.x!==0}function a7(){return !!(aw.tap)}function Z(){return !!(aw.doubleTap)}function aV(){return !!(aw.longTap)}function R(){if(O==null){return false}var bc=au();return(Z()&&((bc-O)<=aw.doubleTapThreshold))}function I(){return R()}function ay(){return((X===1||!a)&&(isNaN(ah)||ah<aw.threshold))}function a1(){return((ac>aw.longTapThreshold)&&(ah<r))}function ai(){return !!(ay()&&a7())}function aH(){return !!(R()&&Z())}function aq(){return !!(a1()&&aV())}function G(){a6=au();ae=event.touches.length+1}function S(){a6=0;ae=0}function an(){var bc=false;if(a6){var bd=au()-a6;if(bd<=aw.fingerReleaseThreshold){bc=true}}return bc}function aC(){return !!(aS.data(C+"_intouch")===true)}function ap(bc){if(bc===true){aS.bind(az,a4);aS.bind(V,M);if(T){aS.bind(T,L)}}else{aS.unbind(az,a4,false);aS.unbind(V,M,false);if(T){aS.unbind(T,L,false)}}aS.data(C+"_intouch",bc===true)}function aj(bd,bc){var be=bc.identifier!==undefined?bc.identifier:0;aR[bd].identifier=be;aR[bd].start.x=aR[bd].end.x=bc.pageX||bc.clientX;aR[bd].start.y=aR[bd].end.y=bc.pageY||bc.clientY;return aR[bd]}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bd){for(var bc=0;bc<aR.length;bc++){if(aR[bc].identifier==bd){return aR[bc]}}}function ak(){var bc=[];for(var bd=0;bd<=5;bd++){bc.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bc}function aJ(bc,bd){bd=Math.max(bd,aU(bc));N[bc].distance=bd}function aU(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=ax(p);bc[o]=ax(o);bc[e]=ax(e);bc[x]=ax(x);return bc}function ax(bc){return{direction:bc,distance:0}}function aN(){return a3-U}function av(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function at(){if(H<1){return A}else{return c}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aF(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aM(bd,bc){var be=aF(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function au(){var bc=new Date();return bc.getTime()}function aZ(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));

if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

var RS_CacheGS = window.GreenSockGlobals, RS_CacheGS_queue = window._gsQueue,RS_Cache_define = window._gsDefine; window._gsDefine = null;delete window._gsDefine;var punchgs = window.GreenSockGlobals = {};

/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c],b):e[c%e.length];delete a.cycle},f=function(a){if("function"==typeof a)return a;var b="object"==typeof a?a:{each:a},c=b.ease,d=b.from||0,e=b.base||0,f={},g=isNaN(d),h=b.axis,i={center:.5,end:1}[d]||0;return function(a,j,k){var l,m,n,o,p,q,r,s,t,u=(k||b).length,v=f[u];if(!v){if(t="auto"===b.grid?0:(b.grid||[1/0])[0],!t){for(r=-(1/0);r<(r=k[t++].getBoundingClientRect().left)&&u>t;);t--}for(v=f[u]=[],l=g?Math.min(t,u)*i-.5:d%t,m=g?u*i/t-.5:d/t|0,r=0,s=1/0,q=0;u>q;q++)n=q%t-l,o=m-(q/t|0),v[q]=p=h?Math.abs("y"===h?o:n):Math.sqrt(n*n+o*o),p>r&&(r=p),s>p&&(s=p);v.max=r-s,v.min=s,v.v=u=b.amount||b.each*(t>u?u-1:h?"y"===h?u/t:t:Math.max(t,u/t))||0,v.b=0>u?e-u:e}return u=(v[a]-v.min)/v.max,v.b+(c?c.getRatio(u):u)*v.v}},g=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=g.prototype.render},h=1e-8,i=c._internals,j=i.isSelector,k=i.isArray,l=g.prototype=c.to({},.1,{}),m=[];g.version="2.1.3",l.constructor=g,l.kill()._gc=!1,g.killTweensOf=g.killDelayedCallsTo=c.killTweensOf,g.getTweensOf=c.getTweensOf,g.lagSmoothing=c.lagSmoothing,g.ticker=c.ticker,g.render=c.render,g.distribute=f,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},l.updateTo=function(a,b){var d,e=this,f=e.ratio,g=e.vars.immediateRender||a.immediateRender;b&&e._startTime<e._timeline._time&&(e._startTime=e._timeline._time,e._uncache(!1),e._gc?e._enabled(!0,!1):e._timeline.insert(e,e._startTime-e._delay));for(d in a)e.vars[d]=a[d];if(e._initted||g)if(b)e._initted=!1,g&&e.render(0,!0,!0);else if(e._gc&&e._enabled(!0,!1),e._notifyPluginsOfEnabled&&e._firstPT&&c._onPluginEvent("_onDisable",e),e._time/e._duration>.998){var h=e._totalTime;e.render(0,!0,!1),e._initted=!1,e.render(h,!0,!1)}else if(e._initted=!1,e._init(),e._time>0||g)for(var i,j=1/(1-f),k=e._firstPT;k;)i=k.s+k.c,k.c*=j,k.s=i-k.c,k=k._next;return e},l.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,g,j,k,l,m,n,o,p=this,q=p._dirty?p.totalDuration():p._totalDuration,r=p._time,s=p._totalTime,t=p._cycle,u=p._duration,v=p._rawPrevTime;if(a>=q-h&&a>=0?(p._totalTime=q,p._cycle=p._repeat,p._yoyo&&0!==(1&p._cycle)?(p._time=0,p.ratio=p._ease._calcEnd?p._ease.getRatio(0):0):(p._time=u,p.ratio=p._ease._calcEnd?p._ease.getRatio(1):1),p._reversed||(e=!0,f="onComplete",d=d||p._timeline.autoRemoveChildren),0===u&&(p._initted||!p.vars.lazy||d)&&(p._startTime===p._timeline._duration&&(a=0),(0>v||0>=a&&a>=-h||v===h&&"isPause"!==p.data)&&v!==a&&(d=!0,v>h&&(f="onReverseComplete")),p._rawPrevTime=n=!b||a||v===a?a:h)):h>a?(p._totalTime=p._time=p._cycle=0,p.ratio=p._ease._calcEnd?p._ease.getRatio(0):0,(0!==s||0===u&&v>0)&&(f="onReverseComplete",e=p._reversed),a>-h?a=0:0>a&&(p._active=!1,0===u&&(p._initted||!p.vars.lazy||d)&&(v>=0&&(d=!0),p._rawPrevTime=n=!b||a||v===a?a:h)),p._initted||(d=!0)):(p._totalTime=p._time=a,0!==p._repeat&&(j=u+p._repeatDelay,p._cycle=p._totalTime/j>>0,0!==p._cycle&&p._cycle===p._totalTime/j&&a>=s&&p._cycle--,p._time=p._totalTime-p._cycle*j,p._yoyo&&0!==(1&p._cycle)&&(p._time=u-p._time,o=p._yoyoEase||p.vars.yoyoEase,o&&(p._yoyoEase||(o!==!0||p._initted?p._yoyoEase=o=o===!0?p._ease:o instanceof Ease?o:Ease.map[o]:(o=p.vars.ease,p._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,p.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),p.ratio=o?1-o.getRatio((u-p._time)/u):0)),p._time>u?p._time=u:p._time<0&&(p._time=0)),p._easeType&&!o?(k=p._time/u,l=p._easeType,m=p._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),p.ratio=1===l?1-k:2===l?k:p._time/u<.5?k/2:1-k/2):o||(p.ratio=p._ease.getRatio(p._time/u))),r===p._time&&!d&&t===p._cycle)return void(s!==p._totalTime&&p._onUpdate&&(b||p._callback("onUpdate")));if(!p._initted){if(p._init(),!p._initted||p._gc)return;if(!d&&p._firstPT&&(p.vars.lazy!==!1&&p._duration||p.vars.lazy&&!p._duration))return p._time=r,p._totalTime=s,p._rawPrevTime=v,p._cycle=t,i.lazyTweens.push(p),void(p._lazy=[a,b]);!p._time||e||o?e&&this._ease._calcEnd&&!o&&(p.ratio=p._ease.getRatio(0===p._time?0:1)):p.ratio=p._ease.getRatio(p._time/u)}for(p._lazy!==!1&&(p._lazy=!1),p._active||!p._paused&&p._time!==r&&a>=0&&(p._active=!0),0===s&&(2===p._initted&&a>0&&p._init(),p._startAt&&(a>=0?p._startAt.render(a,!0,d):f||(f="_dummyGS")),p.vars.onStart&&(0!==p._totalTime||0===u)&&(b||p._callback("onStart"))),g=p._firstPT;g;)g.f?g.t[g.p](g.c*p.ratio+g.s):g.t[g.p]=g.c*p.ratio+g.s,g=g._next;p._onUpdate&&(0>a&&p._startAt&&p._startTime&&p._startAt.render(a,!0,d),b||(p._totalTime!==s||f)&&p._callback("onUpdate")),p._cycle!==t&&(b||p._gc||p.vars.onRepeat&&p._callback("onRepeat")),f&&(!p._gc||d)&&(0>a&&p._startAt&&!p._onUpdate&&p._startTime&&p._startAt.render(a,!0,d),e&&(p._timeline.autoRemoveChildren&&p._enabled(!1,!1),p._active=!1),!b&&p.vars[f]&&p._callback(f),0===u&&p._rawPrevTime===h&&n!==h&&(p._rawPrevTime=0))},g.to=function(a,b,c){return new g(a,b,c)},g.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new g(a,b,c)},g.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new g(a,b,d)},g.staggerTo=g.allTo=function(a,b,h,i,l,n,o){var p,q,r,s,t=[],u=f(h.stagger||i),v=h.cycle,w=(h.startAt||m).cycle;for(k(a)||("string"==typeof a&&(a=c.selector(a)||a),j(a)&&(a=d(a))),a=a||[],p=a.length-1,r=0;p>=r;r++){q={};for(s in h)q[s]=h[s];if(v&&(e(q,a,r),null!=q.duration&&(b=q.duration,delete q.duration)),w){w=q.startAt={};for(s in h.startAt)w[s]=h.startAt[s];e(q.startAt,a,r)}q.delay=u(r,a[r],a)+(q.delay||0),r===p&&l&&(q.onComplete=function(){h.onComplete&&h.onComplete.apply(h.onCompleteScope||this,arguments),l.apply(o||h.callbackScope||this,n||m)}),t[r]=new g(a[r],b,q)}return t},g.staggerFrom=g.allFrom=function(a,b,c,d,e,f,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,g.staggerTo(a,b,c,d,e,f,h)},g.staggerFromTo=g.allFromTo=function(a,b,c,d,e,f,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,g.staggerTo(a,b,d,e,f,h,i)},g.delayedCall=function(a,b,c,d,e){return new g(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},g.set=function(a,b){return new g(a,0,b)},g.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var n=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(n(f,b)),e=d.length),f=f._next;return d},o=g.getAllTweens=function(b){return n(a._rootTimeline,b).concat(n(a._rootFramesTimeline,b))};g.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=o(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},g.killChildTweensOf=function(a,b){if(null!=a){var e,f,h,l,m,n=i.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),j(a)&&(a=d(a)),k(a))for(l=a.length;--l>-1;)g.killChildTweensOf(a[l],b);else{e=[];for(h in n)for(f=n[h].target.parentNode;f;)f===a&&(e=e.concat(n[h].tweens)),f=f.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var p=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=o(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return g.pauseAll=function(a,b,c){p(!0,a,b,c)},g.resumeAll=function(a,b,c){p(!1,a,b,c)},g.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||h,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},l.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this.duration()?this._time/this._duration:this.ratio},l.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},l.time=function(a,b){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var c=this._duration,d=this._cycle,e=d*(c+this._repeatDelay);return a>c&&(a=c),this.totalTime(this._yoyo&&1&d?c-a+e:this._repeat?a+e:a,b)},l.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},l.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},l.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},l.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},g},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a);var c,d,e=this,f=e.vars;e._labels={},e.autoRemoveChildren=!!f.autoRemoveChildren,e.smoothChildTiming=!!f.smoothChildTiming,e._sortChildren=!0,e._onUpdate=f.onUpdate;for(d in f)c=f[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(f[d]=e._swapSelfInParams(c));i(f.tweens)&&e.add(f.tweens,0,f.align,f.stagger)},e=1e-8,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c],b):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=function(a,b,c,d){var e="immediateRender";return e in b||(b[e]=!(c&&c[e]===!1||d)),b},r=function(a){if("function"==typeof a)return a;var b="object"==typeof a?a:{each:a},c=b.ease,d=b.from||0,e=b.base||0,f={},g=isNaN(d),h=b.axis,i={center:.5,end:1}[d]||0;return function(a,j,k){var l,m,n,o,p,q,r,s,t,u=(k||b).length,v=f[u];if(!v){if(t="auto"===b.grid?0:(b.grid||[1/0])[0],!t){for(r=-(1/0);r<(r=k[t++].getBoundingClientRect().left)&&u>t;);t--}for(v=f[u]=[],l=g?Math.min(t,u)*i-.5:d%t,m=g?u*i/t-.5:d/t|0,r=0,s=1/0,q=0;u>q;q++)n=q%t-l,o=m-(q/t|0),v[q]=p=h?Math.abs("y"===h?o:n):Math.sqrt(n*n+o*o),p>r&&(r=p),s>p&&(s=p);v.max=r-s,v.min=s,v.v=u=b.amount||b.each*(t>u?u-1:h?"y"===h?u/t:t:Math.max(t,u/t))||0,v.b=0>u?e-u:e}return u=(v[a]-v.min)/v.max,v.b+(c?c.getRatio(u):u)*v.v}},s=d.prototype=new b;return d.version="2.1.3",d.distribute=r,s.constructor=d,s.kill()._gc=s._forcingPlayhead=s._hasPause=!1,s.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},s.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,q(this,d)),e)},s.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return e=q(this,e,d),b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},s.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),s=r(e.stagger||f),t=e.startAt,u=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),o=0;o<a.length;o++)l=m(e),t&&(l.startAt=m(t),t.cycle&&n(l.startAt,a,o)),u&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,s(o,a[o],a));return this.add(q,g)},s.staggerFrom=function(a,b,c,d,e,f,g,h){return c.runBackwards=!0,this.staggerTo(a,b,q(this,c),d,e,f,g,h)},s.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,this.staggerTo(a,b,q(this,d,c),e,f,g,h,i)},s.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},s.set=function(a,b,d){return this.add(new c(a,0,q(this,b,null,!0)),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},s.add=function(e,f,g,h){var j,k,l,m,n,o,p=this;if("number"!=typeof f&&(f=p._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),p.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return p._uncache(!0)}if("string"==typeof e)return p.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(p,e,f),(e._time||!e._duration&&e._initted)&&(j=(p.rawTime()-e._startTime)*e._timeScale,(!e._duration||Math.abs(Math.max(0,Math.min(e.totalDuration(),j)))-e._totalTime>1e-5)&&e.render(j,!1,!1)),(p._gc||p._time===p._duration)&&!p._paused&&p._duration<p.duration())for(n=p,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return p},s.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},s._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},s.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},s.insert=s.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},s.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},s.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},s.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},s.removeLabel=function(a){return delete this._labels[a],this},s.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},s._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},s.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},s.stop=function(){return this.paused(!0)},s.gotoAndPlay=function(a,b){return this.play(a,b)},s.gotoAndStop=function(a,b){return this.pause(a,b)},s.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n,o=this,p=o._time,q=o._dirty?o.totalDuration():o._totalDuration,r=o._startTime,s=o._timeScale,t=o._paused;if(p!==o._time&&(a+=o._time-p),o._hasPause&&!o._forcingPlayhead&&!b){if(a>p)for(d=o._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===o._rawPrevTime||(l=d),d=d._next;else for(d=o._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(o._time=o._totalTime=a=l._startTime,n=o._startTime+(o._reversed?o._duration-a:a)/o._timeScale)}if(a>=q-e&&a>=0)o._totalTime=o._time=q,o._reversed||o._hasPausedChild()||(f=!0,h="onComplete",i=!!o._timeline.autoRemoveChildren,0===o._duration&&(0>=a&&a>=-e||o._rawPrevTime<0||o._rawPrevTime===e)&&o._rawPrevTime!==a&&o._first&&(i=!0,o._rawPrevTime>e&&(h="onReverseComplete"))),o._rawPrevTime=o._duration||!b||a||o._rawPrevTime===a?a:e,a=q+1e-4;else if(e>a)if(o._totalTime=o._time=0,a>-e&&(a=0),(0!==p||0===o._duration&&o._rawPrevTime!==e&&(o._rawPrevTime>0||0>a&&o._rawPrevTime>=0))&&(h="onReverseComplete",f=o._reversed),0>a)o._active=!1,o._timeline.autoRemoveChildren&&o._reversed?(i=f=!0,h="onReverseComplete"):o._rawPrevTime>=0&&o._first&&(i=!0),o._rawPrevTime=a;else{if(o._rawPrevTime=o._duration||!b||a||o._rawPrevTime===a?a:e,0===a&&f)for(d=o._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,o._initted||(i=!0)}else o._totalTime=o._time=o._rawPrevTime=a;if(o._time!==p&&o._first||c||i||l){if(o._initted||(o._initted=!0),o._active||!o._paused&&o._time!==p&&a>0&&(o._active=!0),0===p&&o.vars.onStart&&(0===o._time&&o._duration||b||o._callback("onStart")),m=o._time,m>=p)for(d=o._first;d&&(g=d._next,m===o._time&&(!o._paused||t));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&(o.pause(),o._pauseTime=n),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=o._last;d&&(g=d._prev,m===o._time&&(!o._paused||t));){if(d._active||d._startTime<=p&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>o._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,o.pause(),o._pauseTime=n}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}o._onUpdate&&(b||(j.length&&k(),o._callback("onUpdate"))),h&&(o._gc||(r===o._startTime||s!==o._timeScale)&&(0===o._time||q>=o.totalDuration())&&(f&&(j.length&&k(),o._timeline.autoRemoveChildren&&o._enabled(!1,!1),o._active=!1),!b&&o.vars[h]&&o._callback(h)))}},s._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},s.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},s.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},s.recent=function(){return this._recent},s._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},s.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},s._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},s.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},s.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},s._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},s.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},s.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},s.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this,f=e._last,g=999999999999;f;)b=f._prev,f._dirty&&f.totalDuration(),f._startTime>g&&e._sortChildren&&!f._paused&&!e._calculatingDuration?(e._calculatingDuration=1,e.add(f,f._startTime-f._delay),e._calculatingDuration=0):g=f._startTime,f._startTime<0&&!f._paused&&(d-=f._startTime,e._timeline.smoothChildTiming&&(e._startTime+=f._startTime/e._timeScale,e._time-=f._startTime,e._totalTime-=f._startTime,e._rawPrevTime-=f._startTime),e.shiftChildren(-f._startTime,!1,-9999999999),g=0),c=f._startTime+f._totalDuration/f._timeScale,c>d&&(d=c),f=b;e._duration=e._totalDuration=d,e._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},s.paused=function(b){if(b===!1&&this._paused)for(var c=this._first;c;)c._startTime===this._time&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},s.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},s.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!!this.vars.yoyo,this._dirty=!0},e=1e-8,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="2.1.3",k.invalidate=function(){return this._yoyo=!!this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o,p=this,q=p._time,r=p._dirty?p.totalDuration():p._totalDuration,s=p._duration,t=p._totalTime,u=p._startTime,v=p._timeScale,w=p._rawPrevTime,x=p._paused,y=p._cycle;if(q!==p._time&&(a+=p._time-q),a>=r-e&&a>=0)p._locked||(p._totalTime=r,p._cycle=p._repeat),p._reversed||p._hasPausedChild()||(f=!0,j="onComplete",k=!!p._timeline.autoRemoveChildren,0===p._duration&&(0>=a&&a>=-e||0>w||w===e)&&w!==a&&p._first&&(k=!0,w>e&&(j="onReverseComplete"))),p._rawPrevTime=p._duration||!b||a||p._rawPrevTime===a?a:e,p._yoyo&&1&p._cycle?p._time=a=0:(p._time=s,a=s+1e-4);else if(e>a)if(p._locked||(p._totalTime=p._cycle=0),p._time=0,a>-e&&(a=0),(0!==q||0===s&&w!==e&&(w>0||0>a&&w>=0)&&!p._locked)&&(j="onReverseComplete",f=p._reversed),0>a)p._active=!1,p._timeline.autoRemoveChildren&&p._reversed?(k=f=!0,j="onReverseComplete"):w>=0&&p._first&&(k=!0),p._rawPrevTime=a;else{if(p._rawPrevTime=s||!b||a||p._rawPrevTime===a?a:e,0===a&&f)for(d=p._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,p._initted||(k=!0)}else 0===s&&0>w&&(k=!0),p._time=p._rawPrevTime=a,p._locked||(p._totalTime=a,0!==p._repeat&&(l=s+p._repeatDelay,p._cycle=p._totalTime/l>>0,p._cycle&&p._cycle===p._totalTime/l&&a>=t&&p._cycle--,p._time=p._totalTime-p._cycle*l,p._yoyo&&1&p._cycle&&(p._time=s-p._time),p._time>s?(p._time=s,a=s+1e-4):p._time<0?p._time=a=0:a=p._time));if(p._hasPause&&!p._forcingPlayhead&&!b){if(a=p._time,a>q||p._repeat&&y!==p._cycle)for(d=p._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===p._rawPrevTime||(m=d),d=d._next;else for(d=p._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(o=p._startTime+(p._reversed?p._duration-m._startTime:m._startTime)/p._timeScale,m._startTime<s&&(p._time=p._rawPrevTime=a=m._startTime,p._totalTime=a+p._cycle*(p._totalDuration+p._repeatDelay)))}if(p._cycle!==y&&!p._locked){var z=p._yoyo&&0!==(1&y),A=z===(p._yoyo&&0!==(1&p._cycle)),B=p._totalTime,C=p._cycle,D=p._rawPrevTime,E=p._time;if(p._totalTime=y*s,p._cycle<y?z=!z:p._totalTime+=s,p._time=q,p._rawPrevTime=0===s?w-1e-4:w,p._cycle=y,p._locked=!0,q=z?0:s,p.render(q,b,0===s),b||p._gc||p.vars.onRepeat&&(p._cycle=C,p._locked=!1,p._callback("onRepeat")),q!==p._time)return;if(A&&(p._cycle=y,p._locked=!0,q=z?s+1e-4:-1e-4,p.render(q,!0,!1)),p._locked=!1,p._paused&&!x)return;p._time=E,p._totalTime=B,p._cycle=C,p._rawPrevTime=D}if(!(p._time!==q&&p._first||c||k||m))return void(t!==p._totalTime&&p._onUpdate&&(b||p._callback("onUpdate")));if(p._initted||(p._initted=!0),p._active||!p._paused&&p._totalTime!==t&&a>0&&(p._active=!0),0===t&&p.vars.onStart&&(0===p._totalTime&&p._totalDuration||b||p._callback("onStart")),n=p._time,n>=q)for(d=p._first;d&&(i=d._next,n===p._time&&(!p._paused||x));)(d._active||d._startTime<=p._time&&!d._paused&&!d._gc)&&(m===d&&(p.pause(),p._pauseTime=o),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=p._last;d&&(i=d._prev,n===p._time&&(!p._paused||x));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>p._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,p.pause(),p._pauseTime=o}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}p._onUpdate&&(b||(g.length&&h(),p._callback("onUpdate"))),j&&(p._locked||p._gc||(u===p._startTime||v!==p._timeScale)&&(0===p._time||r>=p.totalDuration())&&(f&&(g.length&&h(),p._timeline.autoRemoveChildren&&p._enabled(!1,!1),p._active=!1),!b&&p.vars[j]&&p._callback(j)))},k.getActive=function(a,b,c){var d,e,f=[],g=this.getChildren(a||null==a,b||null==a,!!c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var c=this._duration,d=this._cycle,e=d*(c+this._repeatDelay);return a>c&&(a=c),this.totalTime(this._yoyo&&1&d?c-a+e:this._repeat?a+e:a,b)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+e)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],
s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.9",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m,n=this._segCount,o=this._func,p=this._target,q=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,m=b*this._length,e=this._li,m>this._l2&&n-1>e){for(j=n-1;j>e&&(this._l2=k[++e])<=m;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(m<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=m;);0===e&&m<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,m-=this._l1,e=this._si,m>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=m;);this._s1=l[e-1],this._si=e}else if(m<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=m;);0===e&&m<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=1===b?1:(e+(m-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?n-1:n*b>>0,h=(b-c*(1/n))*n;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,p)),o[f]?p[f](i):p[f]=i;if(this._autoRotate){var r,s,t,u,v,w,x,y=this._autoRotate;for(e=y.length;--e>-1;)f=y[e][2],w=y[e][3]||0,x=y[e][4]===!0?1:a,g=this._beziers[y[e][0]],r=this._beziers[y[e][1]],g&&r&&(g=g[c],r=r[c],s=g.a+(g.b-g.a)*h,u=g.b+(g.c-g.b)*h,s+=(u-s)*h,u+=(g.c+(g.d-g.c)*h-u)*h,t=r.a+(r.b-r.a)*h,v=r.b+(r.c-r.b)*h,t+=(v-t)*h,v+=(r.c+(r.d-r.c)*h-v)*h,i=q?Math.atan2(v-t,u-s)*x+w:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,p)),o[f]?p[f](i):p[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="2.1.3",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,w=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,x=/(?:\d|\-|\+|=|#|\.)*/g,y=/opacity *= *([^)]*)/i,z=/opacity:([^;]*)/i,A=/alpha\(opacity *=.+?\)/i,B=/^(rgb|hsl)/,C=/([A-Z])/g,D=/-([a-z])/gi,E=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,F=function(a,b){return b.toUpperCase()},G=/(?:Left|Right|Width)/i,H=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,I=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,J=/,(?=[^\)]*(?:\(|$))/gi,K=/[\s,\(]/i,L=Math.PI/180,M=180/Math.PI,N={},O={style:{}},P=_gsScope.document||{createElement:function(){return O}},Q=function(a,b){var c=P.createElementNS?P.createElementNS(b||"http://www.w3.org/1999/xhtml",a):P.createElement(a);return c.style?c:P.createElement(a)},R=Q("div"),S=Q("img"),T=g._internals={_specialProps:i},U=(_gsScope.navigator||{}).userAgent||"",V=function(){var a=U.indexOf("Android"),b=Q("a");return m=-1!==U.indexOf("Safari")&&-1===U.indexOf("Chrome")&&(-1===a||parseFloat(U.substr(a+8,2))>3),o=m&&parseFloat(U.substr(U.indexOf("Version/")+8,2))<6,n=-1!==U.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),W=function(a){return y.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},X=function(a){_gsScope.console&&console.log(a)},Y="",Z="",$=function(a,b){b=b||R;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Z=3===d?"ms":c[d],Y="-"+Z.toLowerCase()+"-",Z+a):null},_="undefined"!=typeof window?window:P.defaultView||{getComputedStyle:function(){}},aa=function(a){return _.getComputedStyle(a)},ba=g.getStyle=function(a,b,c,d,e){var f;return V||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||aa(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(C,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):W(a)},ca=T.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=G.test(c),l=a,m=R.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+ba(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||P.body,-1!==ba(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(R),h=parseFloat(R[k?"offsetWidth":"offsetHeight"]),l.removeChild(R),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=ca(a,c,d,e,!0))}else i=aa(a).lineHeight,a.style.lineHeight=d,h=parseFloat(aa(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},da=T.calculateOffset=function(a,b,c){if("absolute"!==ba(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=ba(a,"margin"+d,c);return a["offset"+d]-(ca(a,b,parseFloat(e),e.replace(x,""))||0)},ea=function(a,b){var c,d,e,f={};if(b=b||aa(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Fa===e)&&(f[e.replace(D,F)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ea===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(D,F)]=b[c]);return V||(f.opacity=W(a)),d=Ta(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ha&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},fa=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(w,"")?f:0:da(a,g),void 0!==j[g]&&(h=new ua(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ga={width:["Left","Right"],height:["Top","Bottom"]},ha=["marginLeft","marginRight","marginTop","marginBottom"],ia=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||aa(a))[b]||0;if(a.getCTM&&Qa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ga[b],f=e.length;for(c=c||aa(a,null);--f>-1;)d-=parseFloat(ba(a,"padding"+e[f],c,!0))||0,d-=parseFloat(ba(a,"border"+e[f]+"Width",c,!0))||0;return d},ja=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ja(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(w,"")),b.oy=parseFloat(f.replace(w,"")),b.v=a),b||a},ka=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},la=function(a,b){"function"==typeof a&&(a=a(r,q));var c="string"==typeof a&&"="===a.charAt(1);return"string"==typeof a&&"v"===a.charAt(a.length-2)&&(a=(c?a.substr(0,2):0)+window["inner"+("vh"===a.substr(-2)?"Height":"Width")]*(parseFloat(c?a.substr(2):a)/100)),null==a?b:c?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ma=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:M)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},na={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},oa=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},pa=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),na[a])c=na[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=oa(g+1/3,d,e),c[1]=oa(g,d,e),c[2]=oa(g-1/3,d,e);else c=a.match(s)||na.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=na.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},qa=function(a,b){var c,d,e,f=a.match(ra)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=pa(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},ra="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in na)ra+="|"+j+"\\b";ra=new RegExp(ra+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];ra.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=qa(a[0],b),a[1]=qa(a[1],b)),ra.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var sa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(ra)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&J.test(a)){for(o=a.replace(J,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(ra)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&J.test(a)){for(f=a.replace(J,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(","===j?u:v)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return(h&&"none"!==a?a.substr(0,a.indexOf(b[0]))||h:h)+b.join(j)+i}:function(a){return a}},ta=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},ua=(T._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=i.r(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod.call(this._tween,h.rotation,this.t,this._tween):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),va=(T._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=N;for(c._transform=null,N=b,d=k=c.parse(a,b,d,e),N=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new ua(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new ua(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},T.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof va||f.push(this.n),this.r=j?"function"==typeof j?j:Math.round:j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),wa=function(a,b,c,d,e,f){var g=new va(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},xa=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new va(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&ra.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(J,", ").split(" "),E=E.join(" ").replace(J,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,ra.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m]+"",x=parseFloat(p),x||0===x)h.appendXtra("",x,ka(u,x),u.replace(t,""),G&&-1!==u.indexOf("px")?Math.round:!1,!0);else if(e&&ra.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&V,z=u,p=pa(p,C),u=pa(u,C),y=p.length+u.length>6,y&&!V&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(V||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ka(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ka(u[1],p[1]),"%,",!1).appendXtra("",p[2],ka(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",Math.round,!0).appendXtra("",p[1],u[1]-p[1],",",Math.round).appendXtra("",p[2],u[2]-p[2],y?",":B,Math.round),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),ra.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ka(w[n],A),"",G&&"px"===p.substr(z+A.length,2)?Math.round:!1,0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},ya=9;for(j=va.prototype,j.l=j.pr=0;--ya>0;)j["xn"+ya]=0,j["xs"+ya]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new va(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var za=function(a,b){b=b||{},this.p=b.prefix?$(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||sa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.allowFunc=b.allowFunc,this.pr=b.priority||0},Aa=T._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new za(f[d],b)},Ba=T._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";Aa(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(X("Error: "+b+" js file not loaded."),f)}})}};j=za.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(J.test(c)||J.test(b)?(h=b.replace(J,"|").split("|"),i=c.replace(J,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return xa(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(ba(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){Aa(a,{parser:function(a,d,e,f,g,h,i){var j=new va(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Ca,Da="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ea=$("transform"),Fa=Y+"transform",Ga=$("transformOrigin"),Ha=null!==$("perspective"),Ia=T.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ha?g.defaultForce3D||"auto":!1},Ja=_gsScope.SVGElement,Ka=function(a,b,c){var d,e=P.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},La=P.documentElement||{},Ma=function(){var a,b,c,d=p||/Android/i.test(U)&&!_gsScope.chrome;return P.createElementNS&&La.appendChild&&!d&&(a=Ka("svg",La),b=Ka("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ga]="50% 50%",b.style[Ea]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ha),La.removeChild(a)),d}(),Na=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Sa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ja(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Ra&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Oa=function(a){var b,c=Q("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(La.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Oa}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),La.removeChild(c),this.style.cssText=f,b},Pa=function(a){try{return a.getBBox()}catch(b){return Oa.call(a,!0)}},Qa=function(a){return!(!Ja||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Pa(a))},Ra=[1,0,0,1,0,0],Sa=function(a,b){var c,d,e,f,g,h,i,j=a._gsTransform||new Ia,k=1e5,l=a.style;if(Ea?d=ba(a,Fa,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(H),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),j.x||0,j.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,Ea&&c&&!a.offsetParent&&a!==La&&(f=l.display,l.display="block",i=a.parentNode,i&&a.offsetParent||(g=1,h=a.nextSibling,La.appendChild(a)),d=ba(a,Fa,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?l.display=f:Xa(l,"display"),g&&(h?i.insertBefore(a,h):i?i.appendChild(a):La.removeChild(a))),(j.svg||a.getCTM&&Qa(a))&&(c&&-1!==(l[Ea]+"").indexOf("matrix")&&(d=l[Ea],c=0),e=a.getAttribute("transform"),c&&e&&(e=a.transform.baseVal.consolidate().matrix,d="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")",c=0)),c)return Ra;for(e=(d||"").match(s)||[],ya=e.length;--ya>-1;)f=Number(e[ya]),e[ya]=(g=f-(f|=0))?(g*k+(0>g?-.5:.5)|0)/k+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ta=T.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ia:new Ia,n=m.scaleX<0,o=2e-5,p=1e5,q=Ha?parseFloat(ba(a,Ga,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Qa(a)),m.svg&&(Na(a,ba(a,Ga,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Ca=g.useSVGTransformAttr||Ma),f=Sa(a),f!==Ra){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],L=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*M,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,L=E*-w+L*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*M,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,L=A*w+L*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*M,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*M,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=L?1/(0>L?-L:L):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Ha||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*M:m.rotation||0,l=R||S?Math.atan2(R,S)*M+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Ha&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Ca&&a.style[Ea]?b.delayedCall(.001,function(){Xa(a.style,Ea)}):!Ca&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Ua=function(a){var b,c,d=this.data,e=-d.rotation*L,f=e+d.skewX*L,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(I,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||y.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var w,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),ya=0;4>ya;ya++)z=ha[ya],w=m[z],c=-1!==w.indexOf("px")?parseFloat(w):ca(this.t,z,parseFloat(w),w.replace(x,""))||0,A=c!==d[z]?2>ya?-d.ieOffsetX:-d.ieOffsetY:2>ya?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===ya||2===ya?1:B)))+"px"}}},Va=T.set3DTransformRatio=T.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,K=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Ca&&K||!Ha)return void(B||P||K?(B*=L,x=P*L,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*L),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*L),b=Math.sqrt(1+b*b),c*=b,f*=b)),K&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Ca&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",K&&Ca?this.t.setAttribute("transform","matrix("+u):A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=L,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*L,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*L),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*L),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||K))return void(A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*L,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*L,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||K)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),K&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),
C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ea]=u};j=Ia.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j=i.scale&&"function"==typeof i.scale?i.scale:0;j&&(i.scale=j(r,a));var k,l,m,n,o,p,s,t,u,v=a._gsTransform,w=a.style,x=1e-6,y=Da.length,z=i,A={},B="transformOrigin",C=Ta(a,e,!0,z.parseTransform),D=z.transform&&("function"==typeof z.transform?z.transform(r,q):z.transform);if(C.skewType=z.skewType||C.skewType||g.defaultSkewType,d._transform=C,"rotationZ"in z&&(z.rotation=z.rotationZ),D&&"string"==typeof D&&Ea)l=R.style,l[Ea]=D,l.display="block",l.position="absolute",-1!==D.indexOf("%")&&(l.width=ba(a,"width"),l.height=ba(a,"height")),P.body.appendChild(R),k=Ta(R,null,!1),"simple"===C.skewType&&(k.scaleY*=Math.cos(k.skewX*L)),C.svg&&(p=C.xOrigin,s=C.yOrigin,k.x-=C.xOffset,k.y-=C.yOffset,(z.transformOrigin||z.svgOrigin)&&(D={},Na(a,ja(z.transformOrigin),D,z.svgOrigin,z.smoothOrigin,!0),p=D.xOrigin,s=D.yOrigin,k.x-=D.xOffset-C.xOffset,k.y-=D.yOffset-C.yOffset),(p||s)&&(t=Sa(R,!0),k.x-=p-(p*t[0]+s*t[2]),k.y-=s-(p*t[1]+s*t[3]))),P.body.removeChild(R),k.perspective||(k.perspective=C.perspective),null!=z.xPercent&&(k.xPercent=la(z.xPercent,C.xPercent)),null!=z.yPercent&&(k.yPercent=la(z.yPercent,C.yPercent));else if("object"==typeof z){if(k={scaleX:la(null!=z.scaleX?z.scaleX:z.scale,C.scaleX),scaleY:la(null!=z.scaleY?z.scaleY:z.scale,C.scaleY),scaleZ:la(z.scaleZ,C.scaleZ),x:la(z.x,C.x),y:la(z.y,C.y),z:la(z.z,C.z),xPercent:la(z.xPercent,C.xPercent),yPercent:la(z.yPercent,C.yPercent),perspective:la(z.transformPerspective,C.perspective)},o=z.directionalRotation,null!=o)if("object"==typeof o)for(l in o)z[l]=o[l];else z.rotation=o;"string"==typeof z.x&&-1!==z.x.indexOf("%")&&(k.x=0,k.xPercent=la(z.x,C.xPercent)),"string"==typeof z.y&&-1!==z.y.indexOf("%")&&(k.y=0,k.yPercent=la(z.y,C.yPercent)),k.rotation=ma("rotation"in z?z.rotation:"shortRotation"in z?z.shortRotation+"_short":C.rotation,C.rotation,"rotation",A),Ha&&(k.rotationX=ma("rotationX"in z?z.rotationX:"shortRotationX"in z?z.shortRotationX+"_short":C.rotationX||0,C.rotationX,"rotationX",A),k.rotationY=ma("rotationY"in z?z.rotationY:"shortRotationY"in z?z.shortRotationY+"_short":C.rotationY||0,C.rotationY,"rotationY",A)),k.skewX=ma(z.skewX,C.skewX),k.skewY=ma(z.skewY,C.skewY)}for(Ha&&null!=z.force3D&&(C.force3D=z.force3D,n=!0),m=C.force3D||C.z||C.rotationX||C.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,m||null==z.scale||(k.scaleZ=1);--y>-1;)u=Da[y],D=k[u]-C[u],(D>x||-x>D||null!=z[u]||null!=N[u])&&(n=!0,f=new va(C,u,C[u],D,f),u in A&&(f.e=A[u]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return D="function"==typeof z.transformOrigin?z.transformOrigin(r,q):z.transformOrigin,C.svg&&(D||z.svgOrigin)&&(p=C.xOffset,s=C.yOffset,Na(a,ja(D),k,z.svgOrigin,z.smoothOrigin),f=wa(C,"xOrigin",(v?C:k).xOrigin,k.xOrigin,f,B),f=wa(C,"yOrigin",(v?C:k).yOrigin,k.yOrigin,f,B),(p!==C.xOffset||s!==C.yOffset)&&(f=wa(C,"xOffset",v?p:C.xOffset,C.xOffset,f,B),f=wa(C,"yOffset",v?s:C.yOffset,C.yOffset,f,B)),D="0px 0px"),(D||Ha&&m&&C.zOrigin)&&(Ea?(n=!0,u=Ga,D||(D=(ba(a,u,e,!1,"50% 50%")+"").split(" "),D=D[0]+" "+D[1]+" "+C.zOrigin+"px"),D+="",f=new va(w,u,0,0,f,-1,B),f.b=w[u],f.plugin=h,Ha?(l=C.zOrigin,D=D.split(" "),C.zOrigin=(D.length>2?parseFloat(D[2]):l)||0,f.xs0=f.e=D[0]+" "+(D[1]||"50%")+" 0px",f=new va(C,"zOrigin",0,0,f,-1,f.n),f.b=l,f.xs0=f.e=C.zOrigin):f.xs0=f.e=D):ja(D+"",C)),n&&(d._transformType=C.svg&&Ca||!m&&3!==this._transformType?2:3),j&&(i.scale=j),f},allowFunc:!0,prefix:!0}),Aa("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Aa("clipPath",{defaultValue:"inset(0%)",prefix:!0,multi:!0,formatter:sa("inset(0% 0% 0% 0%)",!1,!0)}),Aa("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=$(y[j])),m=l=ba(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=ca(a,"borderLeft",o,t),w=ca(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=ca(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=xa(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:sa("0px 0px 0px 0px",!1,!0)}),Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return xa(a.style,c,this.format(ba(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:sa("0px 0px",!1,!0)}),Aa("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||aa(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=ba(a,"backgroundImage").replace(E,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),S.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-S.width:a.offsetHeight-S.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ja}),Aa("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="","co"===a.substr(0,2)?a:ja(-1===a.indexOf(" ")?a+" "+a:a)}}),Aa("perspective",{defaultValue:"0px",prefix:!0}),Aa("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Aa("transformStyle",{prefix:!0}),Aa("backfaceVisibility",{prefix:!0}),Aa("userSelect",{prefix:!0}),Aa("margin",{parser:ta("marginTop,marginRight,marginBottom,marginLeft")}),Aa("padding",{parser:ta("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Aa("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(ba(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),Aa("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Aa("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),Aa("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=ba(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(x,"");return"px"!==j&&(h=parseFloat(h)/ca(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+ba(a,"borderTopStyle",e,!1,"solid")+" "+ba(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(ra)||["#000"])[0]}}),Aa("borderWidth",{parser:ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Aa("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new va(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Wa=function(a){var b,c=this.t,d=c.filter||ba(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!ba(this.data,"filter")):(c.filter=d.replace(A,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(y,"opacity="+e))};Aa("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(ba(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===ba(a,"visibility",e)&&0!==b&&(h=0),V?f=new va(i,"opacity",h,b-h,f):(f=new va(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Wa),j&&(f=new va(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Xa=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(C,"-$1").toLowerCase())):a.removeAttribute(b))},Ya=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Xa(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};Aa("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new va(a,d,0,0,g,2),g.setRatio=Ya,g.pr=-11,c=!0,g.b=o,k=ea(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=fa(a,k,ea(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText!==p&&(a.style.cssText=p),g=g.xfirst=f.parse(a,j.difs,g,h)}});var Za=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ga:i[c].p),Xa(g,c);e&&(Xa(g,Ea),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(Aa("clearProps",{parser:function(a,b,d,e,f){return f=new va(a,d,0,0,f,2),f.setRatio=Za,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),ya=j.length;ya--;)Ba(j[ya]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=aa(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,y,A=a.style;if(l&&""===A.zIndex&&(n=ba(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ea(a,e),A.cssText=t+";"+b,n=fa(a,n,ea(a)).difs,!V&&z.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(y=3===this._transformType,Ea?m&&(l=!0,""===A.zIndex&&(w=ba(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(y?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new va(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ea?Va:Ua,x.data=this._transform||Ta(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],h=i[g],"function"!=typeof n||h&&h.allowFunc||(n=n(r,q)),h)c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",aa(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=ba(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&B.test(n)?(s||(n=pa(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=xa(u,g,m,n,!0,"transparent",c,0,f)):s&&K.test(n)?c=xa(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ia(a,g,e),o="px"):"left"===g||"top"===g?(j=da(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(x,"")):(l=parseFloat(n),p=s?n.replace(x,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=ca(a,g,j,o),"%"===p?(j/=ca(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=ca(a,g,1,p):"px"!==p&&(l=ca(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new va(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):X("invalid "+g+" tween value: "+b[g]):(c=new va(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=e.r(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=e.r(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ta(this._target,e,!0),this._transformType=this._transform.svg&&Ca||!a&&3!==this._transformType?2:3};var $a=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new va(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=$a,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&(b.r=a[b.p]),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var _a=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)_a(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ea(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||_a(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,_a(a,k,m),i.render(c,!0,!0),_a(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=fa(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){var b=1>a?Math.pow(10,(a+"").length-2):1;return function(c){return(Math.round(c/a)*a*b|0)/b}},c=function(a,b){for(;a;)a.f||a.blob||(a.m=b||Math.round),a=a._next},d=a.prototype;d._onInitAllProps=function(){var a,d,e,f,g=this._tween,h=g.vars.roundProps,i={},j=g._propLookup.roundProps;if("object"!=typeof h||h.push)for("string"==typeof h&&(h=h.split(",")),e=h.length;--e>-1;)i[h[e]]=Math.round;else for(f in h)i[f]=b(h[f]);for(f in i)for(a=g._firstPT;a;)d=a._next,a.pg?a.t._mod(i):a.n===f&&(2===a.f&&a.t?c(a.t._firstPT,i[f]):(this._add(a.t,f,a.s,a.c,i[f]),d&&(d._prev=a._prev),a._prev?a._prev._next=d:g._firstPT===a&&(g._firstPT=d),a._next=a._prev=null,g._propLookup[f]=j)),a=d;return!1},d._add=function(a,b,c,d,e){this._addTween(a,b,c,c+d,b,e||Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e,f=_gsScope.GreenSockGlobals||_gsScope,g=f.com.greensock,h=2*Math.PI,i=Math.PI/2,j=g._class,k=function(b,c){var d=j("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},l=a.register||function(){},m=function(a,b,c,d,e){var f=j("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return l(f,a),f},n=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},o=function(b,c){var d=j("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},p=m("Back",o("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),o("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),o("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),q=j("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),r=q.prototype=new a;return r.constructor=q,r.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},q.ease=new q(.7,.7),r.config=q.config=function(a,b,c){return new q(a,b,c)},b=j("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),r=b.prototype=new a,r.constructor=b,r.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},r.config=b.config=function(a,c){return new b(a,c)},c=j("easing.ExpoScaleEase",function(a,b,c){this._p1=Math.log(b/a),this._p2=b-a,this._p3=a,this._ease=c},!0),r=c.prototype=new a,r.constructor=c,r.getRatio=function(a){return this._ease&&(a=this._ease.getRatio(a)),(this._p3*Math.exp(this._p1*a)-this._p3)/this._p2},r.config=c.config=function(a,b,d){return new c(a,b,d)},d=j("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),m=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--m>-1;)c=o?Math.random():1/l*m,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:m%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new n(1,1,null),m=l;--m>-1;)g=j[m],h=new n(g.x,g.y,h);this._prev=new n(0,0,0!==h.t?h:h.next)},!0),r=d.prototype=new a,r.constructor=d,r.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},r.config=function(a){return new d(a)},d.ease=new d,m("Bounce",k("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),k("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),k("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),m("Circ",k("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),k("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),k("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),e=function(b,c,d){var e=j("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/h*(Math.asin(1/this._p1)||0),this._p2=h/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},m("Elastic",e("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),e("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),e("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),m("Expo",k("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),k("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),k("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),m("Sine",k("SineOut",function(a){return Math.sin(a*i)}),k("SineIn",function(a){return-Math.cos(a*i)+1}),k("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),j("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),l(f.SlowMo,"SlowMo","ease,"),l(d,"RoughEase","ease,"),l(b,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a,f=e[b];if(f)return"undefined"!=typeof module&&module.exports&&(module.exports=f),f;var g,h,i,j,k,l=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},m=l("com.greensock"),n=1e-8,o=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},p=function(){},q=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),r={},s=function(d,f,g,h){this.sc=r[d]?r[d].sc:[],r[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var k,m,n,o,p=f.length,q=p;--p>-1;)(k=r[f[p]]||new s(f[p],[])).gsClass?(i[p]=k.gsClass,q--):j&&k.sc.push(this);if(0===q&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=l(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},t=a._gsDefine=function(a,b,c,d){return new s(a,b,c,d)},u=m._class=function(a,b,c){return b=b||function(){},t(a,[],function(){return b},c),b};t.globals=e;var v=[0,0,1,1],w=u("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?v.concat(b):v},!0),x=w.map={},y=w.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?u("easing."+f,null,!0):m.easing[f]||{},g=k.length;--g>-1;)h=k[g],x[f+"."+h]=x[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(i=w.prototype,i._calcEnd=!1,i.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},g=["Linear","Quad","Cubic","Quart","Quint,Strong"],h=g.length;--h>-1;)i=g[h]+",Power"+h,y(new w(null,null,1,h),i,"easeOut",!0),y(new w(null,null,2,h),i,"easeIn"+(0===h?",easeNone":"")),y(new w(null,null,3,h),i,"easeInOut");x.linear=m.easing.Linear.easeIn,x.swing=m.easing.Quad.easeInOut;var z=u("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});i=z.prototype,i.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],i=0;for(this!==j||k||j.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===i&&f.pr<e&&(i=g+1);h.splice(i,0,{c:b,s:c,up:d,pr:e})},i.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},i.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var A=a.requestAnimationFrame,B=a.cancelAnimationFrame,C=Date.now||function(){return(new Date).getTime()},D=C();for(g=["ms","moz","webkit","o"],h=g.length;--h>-1&&!A;)A=a[g[h]+"RequestAnimationFrame"],B=a[g[h]+"CancelAnimationFrame"]||a[g[h]+"CancelRequestAnimationFrame"];u("Ticker",function(a,b){var c,e,f,g,h,i=this,l=C(),m=b!==!1&&A?"auto":!1,o=500,q=33,r="tick",s=function(a){var b,d,j=C()-D;j>o&&(l+=j-q),D+=j,i.time=(D-l)/1e3,b=i.time-h,(!c||b>0||a===!0)&&(i.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&i.dispatchEvent(r)};z.call(i),i.time=i.frame=0,i.tick=function(){s(!0)},i.lagSmoothing=function(a,b){return arguments.length?(o=a||1/n,void(q=Math.min(b,o,0))):1/n>o},i.sleep=function(){null!=f&&(m&&B?B(f):clearTimeout(f),e=p,f=null,i===j&&(k=!1))},i.wake=function(a){null!==f?i.sleep():a?l+=-D+(D=C()):i.frame>10&&(D=C()-o+5),e=0===c?p:m&&A?A:function(a){return setTimeout(a,1e3*(h-i.time)+1|0)},i===j&&(k=!0),s(2)},i.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void i.wake()):c},i.useRAF=function(a){return arguments.length?(i.sleep(),m=a,void i.fps(c)):m},i.fps(a),setTimeout(function(){"auto"===m&&i.frame<5&&"hidden"!==(d||{}).visibilityState&&i.useRAF(!1)},1500)}),i=m.Ticker.prototype=new m.events.EventDispatcher,i.constructor=m.Ticker;var E=u("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=!!b.immediateRender,this.data=b.data,this._reversed=!!b.reversed,Z){k||j.wake();var c=this.vars.useFrames?Y:Z;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});j=E.ticker=new m.Ticker,i=E.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var F=function(){k&&C()-D>2e3&&("hidden"!==(d||{}).visibilityState||!j.lagSmoothing())&&j.wake();var a=setTimeout(F,2e3);a.unref&&a.unref()};F(),i.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},i.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},i.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},i.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},i.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},i.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},i.render=function(a,b,c){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-n},i._enabled=function(a,b){return k||j.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(a,b){return this._enabled(!1,!1)},i.kill=function(a,b){return this._kill(a,b),this},i._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},i._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},i._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},i.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=q(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},i.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},i.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},i.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},i.totalTime=function(a,b,c){if(k||j.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),
e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(K.length&&_(),this.render(a,b,!1),K.length&&_())}return this},i.progress=i.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},i.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},i.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},i.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||n,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},i.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(k||a||j.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var G=u("core.SimpleTimeline",function(a){E.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});i=G.prototype=new E,i.constructor=G,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=this.rawTime()-(a._timeline.rawTime()-a._pauseTime)),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},i._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},i.rawTime=function(){return k||j.wake(),this._totalTime};var H=u("TweenLite",function(b,c,d){if(E.call(this,c,d),this.render=H.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:H.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?X[H.defaultOverwrite]:"number"==typeof i?i>>0:X[i],(h||b instanceof Array||b.push&&q(b))&&"number"!=typeof b[0])for(this._targets=g=o(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(o(f))):(this._siblings[e]=aa(f,this,!1),1===i&&this._siblings[e].length>1&&ca(f,this,null,1,this._siblings[e])):(f=g[e--]=H.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=aa(b,this,!1),1===i&&this._siblings.length>1&&ca(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-n,this.render(Math.min(0,-this._delay)))},!0),I=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},J=function(a,b){var c,d={};for(c in a)W[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!T[c]||T[c]&&T[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};i=H.prototype=new E,i.constructor=H,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,H.version="2.1.3",H.defaultEase=i._ease=new w(null,null,1,1),H.defaultOverwrite="auto",H.ticker=j,H.autoSleep=120,H.lagSmoothing=function(a,b){j.lagSmoothing(a,b)},H.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(H.selector=c,c(b)):(d||(d=a.document),d?d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b):b)};var K=[],L={},M=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=/[\+-]=-?[\.\d]/,O=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m.call(this._tween,b,this._target||c.t,this._tween):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},P=function(a){return(1e3*a|0)/1e3+""},Q=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(M)||[],f=b.match(M)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:P}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=O,N.test(b)&&(l.end=null),l},R=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=Q(m,n?parseFloat(o.s)+o.c+(o.s+"").replace(/[0-9\-\.]/g,""):d,h||H.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},S=H._internals={isArray:q,isSelector:I,lazyTweens:K,blobDif:Q},T=H._plugins={},U=S.tweenLookup={},V=0,W=S.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1,stagger:1},X={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},Y=E._rootFramesTimeline=new G,Z=E._rootTimeline=new G,$=30,_=S.lazyRender=function(){var a,b,c=K.length;for(L={},a=0;c>a;a++)b=K[a],b&&b._lazy!==!1&&(b.render(b._lazy[0],b._lazy[1],!0),b._lazy=!1);K.length=0};Z._startTime=j.time,Y._startTime=j.frame,Z._active=Y._active=!0,setTimeout(_,1),E._updateRoot=H.render=function(){var a,b,c;if(K.length&&_(),Z.render((j.time-Z._startTime)*Z._timeScale,!1,!1),Y.render((j.frame-Y._startTime)*Y._timeScale,!1,!1),K.length&&_(),j.frame>=$){$=j.frame+(parseInt(H.autoSleep,10)||120);for(c in U){for(b=U[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete U[c]}if(c=Z._first,(!c||c._paused)&&H.autoSleep&&!Y._first&&1===j._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||j.sleep()}}},j.addEventListener("tick",E._updateRoot);var aa=function(a,b,c){var d,e,f=a._gsTweenID;if(U[f||(a._gsTweenID=f="t"+V++)]||(U[f]={target:a,tweens:[]}),b&&(d=U[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return U[f].tweens},ba=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=H.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},ca=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+n,l=[],m=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||da(b,0,o),0===da(h,j,o)&&(l[m++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2*n||(l[m++]=h)));for(f=m;--f>-1;)if(h=l[f],i=h._firstPT,2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted&&i){if(2!==d&&!ba(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},da=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*n>f-b?n:(f+=a.totalDuration()/a._timeScale/e)>b+n?0:f-b-n};i._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease,l=this._startAt;if(g.startAt){l&&(l.render(-1,!0),l.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=H.to(this.target||{},0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(l)l.render(-1,!0),l.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)W[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=H.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof w?k:"function"==typeof k?new w(k,g.easeParams):x[k]||H.defaultEase:H.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&H._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},i._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;L[b._gsTweenID]&&_(),this.vars.css||b.style&&b!==a&&b.nodeType&&T.css&&this.vars.autoCSS!==!1&&J(this.vars,b);for(g in this.vars)if(l=this.vars[g],W[g])l&&(l instanceof Array||l.push&&q(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(T[g]&&(j=new T[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=R.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&ca(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[b._gsTweenID]=!0),i)},i.render=function(a,b,c){var d,e,f,g,h=this,i=h._time,j=h._duration,k=h._rawPrevTime;if(a>=j-n&&a>=0)h._totalTime=h._time=j,h.ratio=h._ease._calcEnd?h._ease.getRatio(1):1,h._reversed||(d=!0,e="onComplete",c=c||h._timeline.autoRemoveChildren),0===j&&(h._initted||!h.vars.lazy||c)&&(h._startTime===h._timeline._duration&&(a=0),(0>k||0>=a&&a>=-n||k===n&&"isPause"!==h.data)&&k!==a&&(c=!0,k>n&&(e="onReverseComplete")),h._rawPrevTime=g=!b||a||k===a?a:n);else if(n>a)h._totalTime=h._time=0,h.ratio=h._ease._calcEnd?h._ease.getRatio(0):0,(0!==i||0===j&&k>0)&&(e="onReverseComplete",d=h._reversed),a>-n?a=0:0>a&&(h._active=!1,0===j&&(h._initted||!h.vars.lazy||c)&&(k>=0&&(k!==n||"isPause"!==h.data)&&(c=!0),h._rawPrevTime=g=!b||a||k===a?a:n)),(!h._initted||h._startAt&&h._startAt.progress())&&(c=!0);else if(h._totalTime=h._time=a,h._easeType){var l=a/j,m=h._easeType,o=h._easePower;(1===m||3===m&&l>=.5)&&(l=1-l),3===m&&(l*=2),1===o?l*=l:2===o?l*=l*l:3===o?l*=l*l*l:4===o&&(l*=l*l*l*l),h.ratio=1===m?1-l:2===m?l:.5>a/j?l/2:1-l/2}else h.ratio=h._ease.getRatio(a/j);if(h._time!==i||c){if(!h._initted){if(h._init(),!h._initted||h._gc)return;if(!c&&h._firstPT&&(h.vars.lazy!==!1&&h._duration||h.vars.lazy&&!h._duration))return h._time=h._totalTime=i,h._rawPrevTime=k,K.push(h),void(h._lazy=[a,b]);h._time&&!d?h.ratio=h._ease.getRatio(h._time/j):d&&h._ease._calcEnd&&(h.ratio=h._ease.getRatio(0===h._time?0:1))}for(h._lazy!==!1&&(h._lazy=!1),h._active||!h._paused&&h._time!==i&&a>=0&&(h._active=!0),0===i&&(h._startAt&&(a>=0?h._startAt.render(a,!0,c):e||(e="_dummyGS")),h.vars.onStart&&(0!==h._time||0===j)&&(b||h._callback("onStart"))),f=h._firstPT;f;)f.f?f.t[f.p](f.c*h.ratio+f.s):f.t[f.p]=f.c*h.ratio+f.s,f=f._next;h._onUpdate&&(0>a&&h._startAt&&a!==-1e-4&&h._startAt.render(a,!0,c),b||(h._time!==i||d||c)&&h._callback("onUpdate")),e&&(!h._gc||c)&&(0>a&&h._startAt&&!h._onUpdate&&a!==-1e-4&&h._startAt.render(a,!0,c),d&&(h._timeline.autoRemoveChildren&&h._enabled(!1,!1),h._active=!1),!b&&h.vars[e]&&h._callback(e),0===j&&h._rawPrevTime===n&&g!==n&&(h._rawPrevTime=0))}},i._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:H.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline,n=this._firstPT;if((q(b)||I(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(H.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!ba(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&n&&this._enabled(!1,!1)}}return i},i.invalidate=function(){this._notifyPluginsOfEnabled&&H._onPluginEvent("_onDisable",this);var a=this._time;return this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],E.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-n,this.render(a,!1,this.vars.lazy!==!1)),this},i._enabled=function(a,b){if(k||j.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=aa(d[c],this,!0);else this._siblings=aa(this.target,this,!0)}return E.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?H._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},H.to=function(a,b,c){return new H(a,b,c)},H.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new H(a,b,c)},H.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new H(a,b,d)},H.delayedCall=function(a,b,c,d,e){return new H(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},H.set=function(a,b){return new H(a,0,b)},H.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:H.selector(a)||a;var c,d,e,f;if((q(a)||I(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(H.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=aa(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},H.killTweensOf=H.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=H.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ea=u("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ea.prototype},!0);if(i=ea.prototype,ea.version="1.19.0",ea.API=2,i._firstPT=null,i._addTween=R,i.setRatio=O,i._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},i._mod=i._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},H._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ea.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ea.API&&(T[(new a[b])._propName]=a[b]);return!0},t.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=u("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ea.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ea(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ea.activate([g]),g},g=a._gsQueue){for(h=0;h<g.length;h++)g[h]();for(i in r)r[i].func||a.console.log("GSAP encountered missing dependency: "+i)}k=!1}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");

/* CUSTOM BOUNCE */
/*!
 * VERSION: 0.2.1
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomBounce",["easing.CustomEase"],function(a){var b,c=function(a){var b,c=a.length,d=1/a[c-2],e=1e3;for(b=2;c>b;b+=2)a[b]=(a[b]*d*e|0)/e;a[c-2]=1},d=function(b,c){this.vars=c=c||{},c.squash&&(this.squash=new a(c.squashID||b+"-squash")),a.call(this,b),this.bounce=this,this.update(c)};return d.prototype=b=new a,b.constructor=d,b.update=function(b){b=b||this.vars;var d,e,f,g,h,i,j,k=.999,l=Math.min(k,b.strength||.7),m=l,n=(b.squash||0)/100,o=n,p=1/.03,q=.2,r=1,s=.1,t=[0,0,.07,0,.1,1,.1,1],u=[0,0,0,0,.1,0,.1,0];for(h=0;200>h&&(q*=m*((m+1)/2),r*=l*l,i=s+q,f=s+.49*q,g=1-r,d=s+r/p,e=f+.8*(f-d),n&&(s+=n,d+=n,f+=n,e+=n,i+=n,j=n/o,u.push(s-n,0,s-n,j,s-n/2,j,s,j,s,0,s,0,s,j*-.6,s+(i-s)/6,0,i,0),t.push(s-n,1,s,1,s,1),n*=l*l),t.push(s,1,d,g,f,g,e,g,i,1,i,1),l*=.95,p=r/(i-e),s=i,!(g>k));h++);if(b.endAtStart){if(f=-.1,t.unshift(f,1,f,1,-.07,0),o)for(n=2.5*o,f-=n,t.unshift(f,1,f,1,f,1),u.splice(0,6),u.unshift(f,0,f,0,f,1,f+n/2,1,f+n,1,f+n,0,f+n,0,f+n,-.6,f+n+.033,0),h=0;h<u.length;h+=2)u[h]-=f;for(h=0;h<t.length;h+=2)t[h]-=f,t[h+1]=1-t[h+1]}return n&&(c(u),u[2]="C"+u[2],this.squash||(this.squash=new a(b.squashID||this.id+"-squash")),this.squash.setData("M"+u.join(","))),c(t),t[2]="C"+t[2],this.setData("M"+t.join(","))},d.create=function(a,b){return new d(a,b)},d.version="0.2.1",d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("./CustomEase.min.js"),require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite","CustomEase"],b)}("CustomBounce");


/* CUSTOM EASE */
/*!
 * VERSION: 0.2.2
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomEase",["easing.Ease"],function(a){var b=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,c=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,d=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,e=/[cLlsS]/g,f="CustomEase only accepts Cubic Bezier data.",g=function(a,b,c,d,e,f,h,i,j,k,l){var m,n=(a+c)/2,o=(b+d)/2,p=(c+e)/2,q=(d+f)/2,r=(e+h)/2,s=(f+i)/2,t=(n+p)/2,u=(o+q)/2,v=(p+r)/2,w=(q+s)/2,x=(t+v)/2,y=(u+w)/2,z=h-a,A=i-b,B=Math.abs((c-h)*A-(d-i)*z),C=Math.abs((e-h)*A-(f-i)*z);return k||(k=[{x:a,y:b},{x:h,y:i}],l=1),k.splice(l||k.length-1,0,{x:x,y:y}),(B+C)*(B+C)>j*(z*z+A*A)&&(m=k.length,g(a,b,n,o,t,u,x,y,j,k,l),g(x,y,v,w,r,s,h,i,j,k,l+1+(k.length-m))),k},h=function(a){var b,e,g,h,i,j,k,l,m,n,o,p=(a+"").replace(d,function(a){var b=+a;return 1e-4>b&&b>-1e-4?0:b}).match(c)||[],q=[],r=0,s=0,t=p.length,u=2;for(b=0;t>b;b++)if(m=h,isNaN(p[b])?(h=p[b].toUpperCase(),i=h!==p[b]):b--,e=+p[b+1],g=+p[b+2],i&&(e+=r,g+=s),b||(k=e,l=g),"M"===h)j&&j.length<8&&(q.length-=1,u=0),r=k=e,s=l=g,j=[e,g],u=2,q.push(j),b+=2,h="L";else if("C"===h)j||(j=[0,0]),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+1*p[b+3],j[u++]=s+1*p[b+4],j[u++]=r+=1*p[b+5],j[u++]=s+=1*p[b+6],b+=6;else if("S"===h)"C"===m||"S"===m?(n=r-j[u-4],o=s-j[u-3],j[u++]=r+n,j[u++]=s+o):(j[u++]=r,j[u++]=s),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+=1*p[b+3],j[u++]=s+=1*p[b+4],b+=4;else{if("L"!==h&&"Z"!==h)throw f;"Z"===h&&(e=k,g=l,j.closed=!0),("L"===h||Math.abs(r-e)>.5||Math.abs(s-g)>.5)&&(j[u++]=r+(e-r)/3,j[u++]=s+(g-s)/3,j[u++]=r+2*(e-r)/3,j[u++]=s+2*(g-s)/3,j[u++]=e,j[u++]=g,"L"===h&&(b+=2)),r=e,s=g}return q[0]},i=function(a){var b,c=a.length,d=999999999999;for(b=1;c>b;b+=6)+a[b]<d&&(d=+a[b]);return d},j=function(a,b,c){c||0===c||(c=Math.max(+a[a.length-1],+a[1]));var d,e=-1*+a[0],f=-c,g=a.length,h=1/(+a[g-2]+e),j=-b||(Math.abs(+a[g-1]-+a[1])<.01*(+a[g-2]-+a[0])?i(a)+f:+a[g-1]+f);for(j=j?1/j:-h,d=0;g>d;d+=2)a[d]=(+a[d]+e)*h,a[d+1]=(+a[d+1]+f)*j},k=function(a){var b=this.lookup[a*this.l|0]||this.lookup[this.l-1];return b.nx<a&&(b=b.n),b.y+(a-b.x)/b.cx*b.cy},l=function(b,c,d){this._calcEnd=!0,this.id=b,b&&(a.map[b]=this),this.getRatio=k,this.setData(c,d)},m=l.prototype=new a;return m.constructor=l,m.setData=function(a,c){a=a||"0,0,1,1";var d,i,k,l,m,n,o,p,q,r,s=a.match(b),t=1,u=[];if(c=c||{},r=c.precision||1,this.data=a,this.lookup=[],this.points=u,this.fast=1>=r,(e.test(a)||-1!==a.indexOf("M")&&-1===a.indexOf("C"))&&(s=h(a)),d=s.length,4===d)s.unshift(0,0),s.push(1,1),d=8;else if((d-2)%6)throw f;for((0!==+s[0]||1!==+s[d-2])&&j(s,c.height,c.originY),this.rawBezier=s,l=2;d>l;l+=6)i={x:+s[l-2],y:+s[l-1]},k={x:+s[l+4],y:+s[l+5]},u.push(i,k),g(i.x,i.y,+s[l],+s[l+1],+s[l+2],+s[l+3],k.x,k.y,1/(2e5*r),u,u.length-1);for(d=u.length,l=0;d>l;l++)o=u[l],p=u[l-1]||o,o.x>p.x||p.y!==o.y&&p.x===o.x||o===p?(p.cx=o.x-p.x,p.cy=o.y-p.y,p.n=o,p.nx=o.x,this.fast&&l>1&&Math.abs(p.cy/p.cx-u[l-2].cy/u[l-2].cx)>2&&(this.fast=!1),p.cx<t&&(p.cx?t=p.cx:(p.cx=.001,l===d-1&&(p.x-=.001,t=Math.min(t,.001),this.fast=!1)))):(u.splice(l--,1),d--);if(d=1/t+1|0,this.l=d,m=1/d,n=0,o=u[0],this.fast){for(l=0;d>l;l++)q=l*m,o.nx<q&&(o=u[++n]),i=o.y+(q-o.x)/o.cx*o.cy,this.lookup[l]={x:q,cx:m,y:i,cy:0,nx:9},l&&(this.lookup[l-1].cy=i-this.lookup[l-1].y);this.lookup[d-1].cy=u[u.length-1].y-i}else{for(l=0;d>l;l++)o.nx<l*m&&(o=u[++n]),this.lookup[l]=o;n<u.length-1&&(this.lookup[l-1]=u[u.length-2])}return this._calcEnd=1!==u[u.length-1].y||0!==u[0].y,this},m.getRatio=k,m.getSVGData=function(a){return l.getSVGData(this,a)},l.create=function(a,b,c){return new l(a,b,c)},l.version="0.2.2",l.bezierToPoints=g,l.get=function(b){return a.map[b]},l.getSVGData=function(b,c){c=c||{};var d,e,f,g,h,i,j,k,l,m,n=1e3,o=c.width||100,p=c.height||100,q=c.x||0,r=(c.y||0)+p,s=c.path;if(c.invert&&(p=-p,r=0),b=b.getRatio?b:a.map[b]||console.log("No ease found: ",b),b.rawBezier){for(d=[],j=b.rawBezier.length,f=0;j>f;f+=2)d.push(((q+b.rawBezier[f]*o)*n|0)/n+","+((r+b.rawBezier[f+1]*-p)*n|0)/n);d[0]="M"+d[0],d[1]="C"+d[1]}else for(d=["M"+q+","+r],j=Math.max(5,200*(c.precision||1)),g=1/j,j+=2,k=5/j,l=((q+g*o)*n|0)/n,m=((r+b.getRatio(g)*-p)*n|0)/n,e=(m-r)/(l-q),f=2;j>f;f++)h=((q+f*g*o)*n|0)/n,i=((r+b.getRatio(f*g)*-p)*n|0)/n,(Math.abs((i-m)/(h-l)-e)>k||f===j-1)&&(d.push(l+","+m),e=(i-m)/(h-l)),l=h,m=i;return s&&("string"==typeof s?document.querySelector(s):s).setAttribute("d",d.join(" ")),d.join(" ")},l},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("CustomEase");

/* CUSTOM WIGGLE */
/*!
 * VERSION: 0.2.1
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomWiggle",["easing.CustomEase","easing.Ease"],function(a,b){var c,d={easeOut:new a("","M0,1,C0.7,1,0.6,0,1,0"),easeInOut:new a("","M0,0,C0.104,0,0.242,1,0.444,1,0.644,1,0.608,0,1,0"),anticipate:new a("","M0,0,C0,0.222,0.024,0.386,0.06,0.402,0.181,0.455,0.647,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1"),uniform:new a("","M0,0,C0,0.95,0.01,1,0.01,1,0.01,1,1,1,1,1,1,1,1,0.01,1,0")},e=new a,f=function(c,d){return c=c.getRatio?c:b.map[c]||new a("",c),c.rawBezier||!d?c:{getRatio:function(a){return 1-c.getRatio(a)}}},g=function(b,c){this.vars=c||{},a.call(this,b),this.update(this.vars)};return g.prototype=c=new a,c.constructor=g,c.update=function(a){a=a||this.vars;var b,c,g,h,i,j,k,l,m,n=0|(a.wiggles||10),o=1/n,p=o/2,q="anticipate"===a.type,r=d[a.type]||d.easeOut,s=e,t=1e3;if(q&&(s=r,r=d.easeOut),a.timingEase&&(s=f(a.timingEase)),a.amplitudeEase&&(r=f(a.amplitudeEase,!0)),j=s.getRatio(p),k=q?-r.getRatio(p):r.getRatio(p),l=[0,0,j/4,0,j/2,k,j,k],"random"===a.type){for(l.length=4,b=s.getRatio(o),c=2*Math.random()-1,m=2;n>m;m++)p=b,k=c,b=s.getRatio(o*m),c=2*Math.random()-1,g=Math.atan2(c-l[l.length-3],b-l[l.length-4]),h=Math.cos(g)*o,i=Math.sin(g)*o,l.push(p-h,k-i,p,k,p+h,k+i);l.push(b,0,1,0)}else{for(m=1;n>m;m++)l.push(s.getRatio(p+o/2),k),p+=o,k=(k>0?-1:1)*r.getRatio(m*o),j=s.getRatio(p),l.push(s.getRatio(p-o/2),k,j,k);l.push(s.getRatio(p+o/4),k,s.getRatio(p+o/4),0,1,0)}for(m=l.length;--m>-1;)l[m]=(l[m]*t|0)/t;l[2]="C"+l[2],this.setData("M"+l.join(","))},g.create=function(a,b){return new g(a,b)},g.version="0.2.1",g.eases=d,g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("./CustomEase.min.js"),require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite","CustomEase"],b)}("CustomWiggle");


/*!
 * VERSION: 0.7.0
 * DATE: 2019-02-07
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=_gsScope.document||{},g="undefined"!=typeof a?a:f.defaultView||{getComputedStyle:function(){}},h=function(a){return g.getComputedStyle(a)},i=/([A-Z])/g,j=function(a,b,c,d){var e;return(c=c||h(a,null))?(a=c.getPropertyValue(b.replace(i,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},k=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},l=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],k(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},m=function(a,b){for(var c,d=b.length;--d>-1;)if(c=b[d],a.substr(0,c.length)===c)return c.length},n=/(?:\r|\n|\t\t)/g,o=/(?:\s\s+)/g,p=55296,q=56319,r=56320,s=127462,t=127487,u=127995,v=127999,w=function(a){return(a.charCodeAt(0)-p<<10)+(a.charCodeAt(1)-r)+65536},x=f.all&&!f.addEventListener,y=" style='position:relative;display:inline-block;"+(x?"*display:inline;*zoom:1;'":"'"),z=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+y+(a?" class='"+a+(c?d++:"")+"'>":">")}},A=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=A.selector(a)),!a)throw"cannot split a null element.";this.elements=k(a)?l(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},B=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)B(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},C=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},D=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},E=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},F=function(a){var b,c,d=D(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?F(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},G=function(a,b,c,d,e,g,i){var k,l,m,n,o,p,q,r,s,t,u,v,w=h(a),x=j(a,"paddingLeft",w),y=-999,z=j(a,"borderBottomWidth",w)+j(a,"borderTopWidth",w),A=j(a,"borderLeftWidth",w)+j(a,"borderRightWidth",w),D=j(a,"paddingTop",w)+j(a,"paddingBottom",w),G=j(a,"paddingLeft",w)+j(a,"paddingRight",w),H=.2*j(a,"fontSize"),I=j(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.tag?b.tag:b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++"),V=[];for(U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&("BR"!==n.nodeName||0===k)&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,E(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&(n.nextSibling&&"BR"===n.nextSibling.nodeName||0===k)&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n.nextSibling&&" "===n.nextSibling.textContent&&!n.nextSibling.nextSibling&&V.push(n.nextSibling),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&E(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),"span"===N&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&("span"===N&&(n.style.display="inline"),J.push(n))):P||S?(n.parentNode&&n.parentNode.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);for(k=V.length;--k>-1;)V[k].parentNode.removeChild(V[k]);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(F(t),B(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(i>a.clientHeight&&(a.style.height=i-D+"px",a.clientHeight<i&&(a.style.height=i+z+"px")),g>a.clientWidth&&(a.style.width=g-G+"px",a.clientWidth<g&&(a.style.width=g+A+"px"))),C(c,J),Q&&C(d,K),C(e,L)},H=function(a,b,c,d){var g,h,i,j,k,l,r,x,y,z,A=b.tag?b.tag:b.span?"span":"div",C=b.type||b.split||"chars,words,lines",D=-1!==C.indexOf("chars"),E="absolute"===b.position||b.absolute===!0,F=b.wordDelimiter||" ",G=" "!==F?"":E?"&#173; ":" ",H="</"+A+">",I=!0,J=b.specialChars?"function"==typeof b.specialChars?b.specialChars:m:null,K=f.createElement("div"),L=a.parentNode;for(L.insertBefore(K,a),K.textContent=a.nodeValue,L.removeChild(a),a=K,g=e(a),r=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(o," ").replace(n,"")),r&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?G:"")+c(),i=0;k>i;i++)if(l=g.charAt(i),J&&(z=J(g.substr(i),b.specialChars)))l=g.substr(i,z||1),h+=D&&" "!==l?d()+l+"</"+A+">":l,i+=z-1;else if(l===F&&g.charAt(i-1)!==F&&i){for(h+=I?H:"",I=!1;g.charAt(i+1)===F;)h+=G,i++;i===k-1?h+=G:")"!==g.charAt(i+1)&&(h+=G+c(),I=!0)}else"{"===l&&"{{LT}}"===g.substr(i,6)?(h+=D?d()+"{{LT}}</"+A+">":"{{LT}}",i+=5):l.charCodeAt(0)>=p&&l.charCodeAt(0)<=q||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(x=w(g.substr(i,2)),y=w(g.substr(i+2,2)),j=x>=s&&t>=x&&y>=s&&t>=y||y>=u&&v>=y?4:2,h+=D&&" "!==l?d()+g.substr(i,j)+"</"+A+">":g.substr(i,j),i+=j-1):h+=D&&" "!==l?d()+l+"</"+A+">":l;a.outerHTML=h+(I?H:""),r&&B(L,"{{LT}}","<")},I=function(a,b,c,d){var e,f,g=D(a.childNodes),h=g.length,i="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(i&&3!==f.nodeType&&"inline"===j(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,I(f,b,c,d));return b.absolute=i,void(a._isSplit=!0)}H(a,b,c,d)},J=A.prototype;J.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.tag?a.tag:a.span?"span":"div",g=z(a.wordsClass,f),h=z(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,I(d,a,g,h),G(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},J.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},A.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(A.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},A.version="0.7.0"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?module.exports=b():"function"==typeof define&&define.amd&&define([],b)}("SplitText");

/* CREATE CUSTOM EASE */
punchgs.SFXBounceLite = punchgs.CustomBounce.create("SFXBounceLite", { strength:0.3 ,squash:1, squashID:"SFXBounceLite-squash"});
punchgs.SFXBounceSolid = punchgs.CustomBounce.create("SFXBounceSolid", { strength:0.5,squash:2,squashID:"SFXBounceSolid-squash"});
punchgs.SFXBounceStrong = punchgs.CustomBounce.create("SFXBounceStrong", { strength:0.7,squash:3,squashID:"SFXBounceStrong-squash"});
punchgs.SFXBounceExtrem = punchgs.CustomBounce.create("SFXBounceExtrem", { strength:0.9,squash:4,squashID:"SFXBounceExtrem-squash"});

punchgs.BounceLite = punchgs.CustomBounce.create("BounceLite", { strength:0.3 });
punchgs.BounceSolid = punchgs.CustomBounce.create("BounceSolid", { strength:0.5});
punchgs.BounceStrong = punchgs.CustomBounce.create("BounceStrong", { strength:0.7});
punchgs.BounceExtrem = punchgs.CustomBounce.create("BounceExtrem", { strength:0.9});

try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;
	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = RS_CacheGS;
	window._gsQueue = RS_CacheGS_queue;
	window._gsDefine = RS_Cache_define;
	} catch(e) {}


(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};		
})(jQuery);

;/*!

  - Slider Revolution 6.0 JavaScript Plugin -

..........................xXXXXX.................
................. xXXXXX..xXXXXX..xXXXXX.........
..................xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........

				VERSION: 6.1.3
			   DATE: 2019-09-18
    @author: Krisztian Horvath, ThemePunch OHG.


UPDATES AND DOCS AT: 
https://www.themepunch.com/support-center
			
GET LICENSE AT: 
https://codecanyon.net/item/slider-revolution-responsive-wordpress-plugin/2751380?ref=themepunch

LICENSE:
Copyright (c) 2009-2019, ThemePunch. All rights reserved.
This work is subject to the terms at https://codecanyon.net/licenses/standard (Regular / Extended)

*/
!function(e,t){"use strict";var i;e.fn.extend({revolution:function(a){return this.each(function(){for(var o=document.getElementsByClassName("rs-p-wp-fix");o[0];)o[0].parentNode.removeChild(o[0]);var s=this.id=this.id===t?"rs_module_"+Math.round(1e7*Math.random()):this.id;e.fn.revolution[s]=W(a),(i=e.fn.revolution)[s].c=e(this),i[s].cpar=i[s].c.parent(),i[s].canvas=i[s].c.find("rs-slides"),i[s].dimensionReCheck={},i[s].stopAfterLoops!=t&&i[s].stopAfterLoops>-1?i[s].looptogo=i[s].stopAfterLoops:i[s].looptogo="disabled",window._T=i[s],i[s].BUG_safari_clipPath="Safari"===i.get_browser()&&i.get_browser_version()>"12",i[s].BUG_ie_clipPath="Edge"===i.get_browser()||"IE"===i.get_browser(),i[s].anyid=[],i[s].indexhelper=0,i[s].level=0,i[s].rtl=e("body").hasClass("rtl"),i[s].minHeight=i[s].minHeight!=t&&""!==i[s].minHeight?parseInt(i[s].minHeight,0):0,i[s].isEdge="Edge"===i.get_browser(),r(s),"hero"==i[s].sliderType&&i[s].c.find("rs-slide").each(function(t){t>0&&e(this).remove()}),i[s].navigation.use="hero"!==i[s].sliderType&&("carousel"==i[s].sliderType||i[s].navigation.keyboardNavigation||"on"==i[s].navigation.mouseScrollNavigation||"carousel"==i[s].navigation.mouseScrollNavigation||i[s].navigation.touch.touchenabled||i[s].navigation.arrows.enable||i[s].navigation.bullets.enable||i[s].navigation.thumbnails.enable||i[s].navigation.tabs.enable),i[s].c.find("rs-bgvideo").each(function(){"RS-BGVIDEO"!==this.tagName||this.id!==t&&""!==this.id||(this.id="rs-bg-video-"+Math.round(1e6*Math.random()))}),punchgs.force3D="auto",c(s)})},getRSVersion:function(e){var t,i,a=window.SliderRevolutionVersion;if(!e){for(var r in t=i="---------------------------------------------------------\n",t+="    Currently Loaded Slider Revolution & SR Modules :\n"+i,a)a.hasOwnProperty(r)&&(t+=a[r].alias+": "+a[r].ver+"\n");t+=i}return e?a:t},revremoveslide:function(t){return this.each(function(){var a=this.id;if(!(t<0||t>i[a].slideamount)&&i[a]&&i[a].slides.length>0&&(t>0||t<=i[a].slides.length)){var r=i.gA(i[a].slides[t],"key");i[a].slideamount=i[a].slideamount-1,i[a].realslideamount=i[a].realslideamount-1,s("rs-bullet",r,a),s("rs-tab",r,a),s("rs-thumb",r,a),e(i[a].slides[t]).remove(),i[a].slides=o(i[a].slides,t),i[a].carousel&&i[a].carousel.slides&&(i[a].carousel.slides=o(i[a].carousel.slides,t)),i[a].thumbs=o(i[a].thumbs,t),i.updateNavIndexes&&i.updateNavIndexes(a),t<=i[a].pr_active_key&&(i[a].pr_active_key=i[a].pr_active_key-1)}})},revaddcallback:function(e){return this.each(function(){i[this.id]&&(i[this.id].callBackArray===t&&(i[this.id].callBackArray=[]),i[this.id].callBackArray.push(e))})},revgetparallaxproc:function(){if(i[this[0].id])return i[this[0].id].scrollproc},revdebugmode:function(){},revscroll:function(t){return this.each(function(){var i=e(this);e("body,html").animate({scrollTop:i.offset().top+i.height()-t+"px"},{duration:400})})},revredraw:function(){return this.each(function(){m(this.id)})},revkill:function(){return this.each(function(){var a=this.id;punchgs.TweenMax.killDelayedCallsTo(i.showHideNavElements),i[a].c.data("conthover",1),i[a].c.data("conthoverchanged",1),i[a].c.trigger("revolution.slide.onpause");var r=i[a].cpar.find("rs-progress");i[a].c[0].opt;i[a].tonpause=!0,i[a].c.trigger("stoptimer"),i[a].sliderisrunning=!1;var o="resize.revslider-"+i[a].c.attr("id");e(window).unbind(o),punchgs.TweenMax.killTweensOf(i[a].c.find("*"),!1),punchgs.TweenMax.killTweensOf(i[a].c,!1),i[a].c.unbind("hover, mouseover, mouseenter,mouseleave, resize"),o="resize.revslider-"+i[a].c.attr("id"),e(window).off(o),i[a].c.find("*").each(function(){var i=e(this);i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),i.off("on, hover, mouseenter,mouseleave,mouseover, resize"),i.data("mySplitText",null),i.data("ctl",null),i.data("tween")!=t&&i.data("tween").kill(),i.data("pztl")!=t&&i.data("pztl").kill(),i.data("timeline_out")!=t&&i.data("timeline_out").kill(),i.data("timeline")!=t&&i.data("timeline").kill(),i.remove(),i.empty(),i=null}),punchgs.TweenMax.killTweensOf(i[a].c.find("*"),!1),punchgs.TweenMax.killTweensOf(i[a].c,!1),r.remove();try{i[a].c.closest("rs-fullwidth-wrap").remove()}catch(e){}try{i[a].c.closest("rs-module-wrap").remove()}catch(e){}try{i[a].c.remove()}catch(e){}i[a].c.empty(),i[a].c.html(),i[a].c=null})},revpause:function(){return this.each(function(){var a=e(this);a!=t&&a.length>0&&e("body").find("#"+a.attr("id")).length>0&&(a.data("conthover",1),a.data("conthoverchanged",1),a.trigger("revolution.slide.onpause"),i[this.id].tonpause=!0,a.trigger("stoptimer"))})},revresume:function(){return this.each(function(){if(i[this.id]!==t){var a=e(this);a.data("conthover",0),a.data("conthoverchanged",1),a.trigger("revolution.slide.onresume"),i[this.id].tonpause=!1,a.trigger("starttimer")}})},revmodal:function(a){var r=this instanceof e?this[0]:this,o=r.id;i[r.id]!==t&&i.revModal(o,a)},revstart:function(){var a=this instanceof e?this[0]:this;return i[a.id]===t?(console.log("Slider is Not Existing"),!1):i[a.id].sliderisrunning?(console.log("Slider Is Running Already"),!1):(i[a.id].c=e(a),i[a.id].canvas=i[a.id].c.find("rs-slides"),h(a.id),!0)},revnext:function(){return this.each(function(){i[this.id]!==t&&i.callingNewSlide(this.id,1,"carousel"===i[this.id].sliderType)})},revprev:function(){return this.each(function(){i[this.id]!==t&&i.callingNewSlide(this.id,-1,"carousel"===i[this.id].sliderType)})},revmaxslide:function(){return e(this).find("rs-slide").length},revcurrentslide:function(){if(i[e(this)[0].id]!==t)return parseInt(i[e(this)[0].id].pr_active_key,0)+1},revlastslide:function(){return e(this).find("rs-slide").length},revshowslide:function(e){return this.each(function(){i[this.id]!==t&&e!==t&&i.callingNewSlide(this.id,"to"+(e-1))})},revcallslidewithid:function(e){return this.each(function(){i[this.id]!==t&&i.callingNewSlide(this.id,e,"carousel"===i[this.id].sliderType)})}}),i=e.fn.revolution,e.extend(!0,i,{sA:function(e,t,i){e&&e.setAttribute&&e.setAttribute("data-"+t,i)},gA:function(e,i,a){return e.hasAttribute&&e.hasAttribute("data-"+i)&&e.getAttribute("data-"+i)!==t&&null!==e.getAttribute("data-"+i)?e.getAttribute("data-"+i):a!==t?a:t},updateFixedScrollTimes:function(e){!0===i[e].sbtimeline.set&&!0===i[e].sbtimeline.fixed&&"auto"!==i[e].sliderLayout&&(i[e].sbtimeline.rest=i[e].duration-i[e].sbtimeline.fixEnd,i[e].sbtimeline.time=i[e].duration-(i[e].sbtimeline.fixStart+i[e].sbtimeline.rest),i[e].sbtimeline.extended=i[e].sbtimeline.time/10)},callContWidthManager:function(e){g(e)},showModalCover:function(a,r,o){switch(o){case"show":var s;r.spin!==t&&"off"!==r.spin&&(s=i.buildSpinner(a,"spinner"+r.spin,r.spinc,"modalspinner")),r.bg!==t&&!1!==r.bg&&"false"!==r.bg&&"transparent"!==r.bg?(i[a].modalLoader=e('<rs-modal-cover data-rid="'+a+'" id="'+a+'_modal_bg"></rs-modal-cover>'),e("body").append(i[a].modalLoader),punchgs.TweenMax.set(i[a].modalLoader,{display:"none",background:r.bg,opacity:0}),punchgs.TweenMax.to(i[a].modalLoader,.5,{display:"block",opacity:1,ease:punchgs.Power3.easeInOut}),s!==t&&i[a].modalLoader.append(s)):s!==t&&i[a].c.append(s);break;case"hide":i[a].modalLoader!==t?(i[a].modalLoader.find(".modalspinner").remove(),punchgs.TweenMax.to(i[a].modalLoader,2,{delay:1,display:"none",opacity:0,ease:punchgs.Power3.easeIn})):i[a].c.find(".modalspinner").remove()}},revModal:function(a,r){if(a!==t&&i[a]!==t)switch(r.mode){case"show":r.slide=r.slide===t?"to0":r.slide,i[a].modal.bodyclass!==t&&i[a].modal.bodyclass.length>=0&&document.body.classList.add(i[a].modal.bodyclass),punchgs.TweenMax.to(i[a].modal.bg,2,{display:"block",opacity:1,ease:punchgs.Power3.easeInOut}),punchgs.TweenMax.set(i[a].modal.c,{display:"auto"===i[a].sliderLayout?"inline-block":"block",opacity:0}),punchgs.TweenMax.set(i[a].cpar,{display:"block",opacity:1});punchgs.TweenMax.fromTo({a:0},.01,{a:0},{a:10,ease:punchgs.Power3.easeInOut,onComplete:function(){i[a].sliderisrunning?i.callingNewSlide(a,r.slide):("to0"!==r.slide&&(i[a].startWithSlideKey=r.slide),h(a))}}),punchgs.TweenMax.fromTo([i[a].modal.c],.01,{opacity:0},{opacity:1,delay:.5,ease:punchgs.Power3.easeInOut,onComplete:function(){}}),window.overscrollhistory=document.body.style.overflow,document.body.style.overflow="hidden";break;case"close":M(a),document.body.style.overflow=window.overscrollhistory,i[a].modal.bodyclass!==t&&i[a].modal.bodyclass.length>=0&&document.body.classList.remove(i[a].modal.bodyclass),punchgs.TweenMax.to(i[a].modal.bg,2,{display:"none",opacity:0,ease:punchgs.Power3.easeInOut}),punchgs.TweenMax.to(i[a].modal.c,.3,{display:"none",delay:.5,opacity:0,onComplete:function(){punchgs.TweenMax.set(i[a].cpar,{display:"none",opacity:0}),e(document).trigger("revolution.all.resize")}});break;case"init":if(window.RS_60_MODALS=window.RS_60_MODALS===t?[]:window.RS_60_MODALS,-1===e.inArray(i[a].modal.alias,window.RS_60_MODALS)&&window.RS_60_MODALS.push(i[a].modal.alias),i[a].modal.listener===t){i[a].modal.c=e("#"+a+"_modal"),i[a].modal.bg=e('<rs-modal-cover data-rid="'+a+'" id="'+a+'_modal_bg"></rs-modal-cover>'),"auto"===i[a].sliderLayout&&i[a].modal.cover?e("body").append(i[a].modal.bg):i[a].modal.c.append(i[a].modal.bg),i[a].modal.c[0].className+="rs-modal-"+i[a].sliderLayout;var o={left:"auto"===i[a].sliderLayout?"center"===i[a].modal.horizontal?"50%":"left"===i[a].modal.horizontal?"0px":"auto":"0px",right:"auto"===i[a].sliderLayout?"center"===i[a].modal.horizontal?"auto":"left"===i[a].modal.horizontal?"auto":"0px":"0px",top:"auto"===i[a].sliderLayout||"fullwidth"===i[a].sliderLayout?"middle"===i[a].modal.vertical?"50%":"top"===i[a].modal.vertical?"0px":"auto":"0px",bottom:"auto"===i[a].sliderLayout||"fullwidth"===i[a].sliderLayout?"middle"===i[a].modal.vertical?"auto":"top"===i[a].modal.vertical?"auto":"0px":"0px",y:("auto"===i[a].sliderLayout||"fullwidth"===i[a].sliderLayout)&&"middle"===i[a].modal.vertical?"-50%":0,x:"auto"===i[a].sliderLayout&&"center"===i[a].modal.horizontal?"-50%":0};"-50%"===o.y&&(o.filter="blur(0px)"),punchgs.TweenMax.set(i[a].modal.c,"auto"===i[a].sliderLayout||"fullscreen"===i[a].sliderLayout?e.extend(!0,o,{opacity:0,display:"none"}):{opacity:0,display:"none"}),"fullwidth"===i[a].sliderLayout&&punchgs.TweenMax.set(i[a].modal.c.find("rs-module-wrap"),o),!1!==i[a].modal.cover&&"false"!==i[a].modal.cover||(i[a].modal.coverColor="transparent"),punchgs.TweenMax.set(i[a].modal.bg,{display:"none",background:i[a].modal.coverColor,opacity:0}),e(document).on("RS_OPENMODAL_"+i[a].modal.alias,function(e,t){i.revModal(a,{mode:"show",slide:t})}),e(document).on("click","rs-modal-cover",function(){i.revModal(i.gA(this,"rid"),{mode:"close"})}),i[a].modal.listener=!0}}},smartConvertDivs:function(e){var t="";if("string"==typeof e&&e.indexOf("#")>=0){var i=e.split(","),a=i.length-1;for(var r in i)t="string"==typeof i[r]&&"#"===i[r][0]?t+i[r][1]/i[r][3]*100+"%"+(r<a?",":""):t+i[r]+(r<a?",":"")}else t=e;return t},revToResp:function(e,i,a,r){if((e=e===t?a:e)!==t){if(r=r===t?",":r,"boolean"!=typeof e&&("object"!=typeof e||Array.isArray(e))){try{e=e.replace(/[[\]]/g,"").replace(/\'/g,"").split(r)}catch(e){}for(e=Array.isArray(e)?e:[e];e.length<i;)e[e.length]=e[e.length-1]}return e}},updateVisibleArea:function(a){for(var r in i[a].viewPort.visible_area=i.revToResp(i[a].viewPort.visible_area,i[a].rle,"200px"),i[a].viewPort.vaType=new Array(4),i[a].viewPort.visible_area)i[a].viewPort.visible_area.hasOwnProperty(r)&&(e.isNumeric(i[a].viewPort.visible_area[r])&&(i[a].viewPort.visible_area[r]+="%"),i[a].viewPort.visible_area[r]!==t&&(i[a].viewPort.vaType[r]=i[a].viewPort.visible_area[r].indexOf("%")>=0?"%":"px"),i[a].viewPort.visible_area[r]=parseInt(i[a].viewPort.visible_area[r],0),i[a].viewPort.visible_area[r]="%"==i[a].viewPort.vaType[r]?i[a].viewPort.visible_area[r]/100:i[a].viewPort.visible_area[r])},fontLoaded:function(e){return i.monoWidth=i.monoWidth===t?n("monospace"):i.monoWidth,i.sansWidth=i.sansWidth===t?n("sans-serif"):i.sansWidth,i.serifWidth=i.serifWidth===t?n("serif"):i.serifWidth,i.monoWidth!==n(e+",monospace")||i.sansWidth!==n(e+",sans-serif")||i.serifWidth!==n(e+",serif")},getversion:function(){return"Slider Revolution 6.1.1"},currentSlideIndex:function(e){return i[e].pr_active_key},simp:function(e,t,i){var a=Math.abs(e)-Math.floor(Math.abs(e/t))*t;return i?a:e<0?-1*a:a},iOSVersion:function(){return!!(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))&&navigator.userAgent.match(/OS 4_\d like Mac OS X/i)},isIE:function(t,i){var a=e('<div style="display:none;"/>').appendTo(e("body"));a.html("\x3c!--[if "+(i||"")+" IE "+(t||"")+"]><a>&nbsp;</a><![endif]--\x3e");var r=a.find("a").length;return a.remove(),r},is_mobile:function(){var e=["android","webos","iphone","ipad","blackberry","Android","webos","iPod","iPhone","iPad","Blackberry","BlackBerry"],t=!1;for(var i in e)e.hasOwnProperty(i)&&(t=!!(t||navigator.userAgent.split(e[i]).length>1)||t);return t},is_android:function(){var e=["android","Android"],t=!1;for(var i in e)e.hasOwnProperty(i)&&(t=!!(t||navigator.userAgent.split(e[i]).length>1)||t);return t},callBackHandling:function(t,a,r){i[t].callBackArray&&e.each(i[t].callBackArray,function(e,t){t&&t.inmodule&&t.inmodule===a&&t.atposition&&t.atposition===r&&t.callback&&t.callback.call()})},get_browser:function(){var e,t=navigator.userAgent,i=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(i[1])?(e=/\brv[ :]+(\d+)/g.exec(t)||[],"IE"):"Chrome"===i[1]&&null!=(e=t.match(/\b(OPR|Edge)\/(\d+)/))?e[1].replace("OPR","Opera"):(i=i[2]?[i[1],i[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&i.splice(1,1,e[1]),i[0])},get_browser_version:function(){var e,t=navigator.appName,i=navigator.userAgent,a=i.match(/(edge|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=i.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[t,navigator.appVersion,"-?"])[1]},isFirefox:function(e){return i[e].isFirefox=i[e].isFirefox===t?"Firefox"===i.get_browser():i[e].isFirefox,i[e].isFirefox},isSafari11:function(){return"safari"===e.trim(i.get_browser().toLowerCase())&&parseFloat(i.get_browser_version())>=11},getHorizontalOffset:function(e,t){var i=d(e,".outer-left"),a=d(e,".outer-right");return"left"==t?i:"right"==t?a:i+a},getComingSlide:function(a,r){var o=i[a].pr_next_key!==t?i[a].pr_next_key:i[a].pr_processing_key!==t?i[a].pr_processing_key:i[a].pr_active_key,s=0;if(s=0,i[a].pr_active_slide!==t&&i[a].pr_active_slide.hasClass("not-in-nav")&&(o=i[a].pr_lastshown_key),r!==t&&e.isNumeric(r)||r!==t&&r.match(/to/g))s=1===r||-1===r?parseInt(o,0)+r<0?i[a].slideamount-1:parseInt(o,0)+r>=i[a].slideamount?0:parseInt(o,0)+r:(r=e.isNumeric(r)?r:parseInt(r.split("to")[1],0))<0?0:r>i[a].slideamount-1?i[a].slideamount-1:r;else if(r)for(var n in i[a].slides)i[a].slides.hasOwnProperty(n)&&(s=i[a].slides&&i[a].slides[n]&&i.gA(i[a].slides[n],"key")===r?n:s);return{nindex:s,aindex:o}},callingNewSlide:function(e,a,r){var o=i.getComingSlide(e,a);i[e].pr_next_key=o.nindex,i[e].sdir=i[e].pr_next_key<i[e].pr_active_key?1:0,r&&i[e].carousel!==t&&(i[e].carousel.focused=i[e].pr_next_key),i[e].ctNavElement?i[e].ctNavElement=!1:i[e].c.trigger("revolution.nextslide.waiting"),(o.aindex===i[e].pr_next_key&&o.aindex===i[e].pr_lastshown_key||i[e].pr_next_key!==o.aindex&&-1!=i[e].pr_next_key)&&O(e,r)},getLoadObj:function(e,a){var r=i[e].loadqueue.filter(function(e){return e.src===a})[0];return r===t?{src:a}:r},updateDimensions:function(e){i[e].lastconw=i[e].conw,i[e].lastconh=i[e].conh,i[e].conw=i[e].c.width(),i[e].conh=i[e].infullscreenmode?i[e].minHeight:i[e].c.height(),i[e].ulw=i[e].canvas.width(),i[e].ulh=i[e].canvas.height()},setSize:function(a,r){var o,s=parseInt(i[a].top_outer||0)+parseInt(i[a].bottom_outer||0),n="carousel"==i[a].sliderType?parseInt(i[a].carousel.padding_top||0,0):0,l="carousel"==i[a].sliderType?parseInt(i[a].carousel.padding_bottom||0,0):0,d=0,c=0,p=0,u=i[a].pr_processing_key||i[a].pr_active_key||0,h=i[a].pr_active_key||0;if(i[a].minHeight=i[a].minHeight===t?0:i[a].minHeight||0,i[a].paddings=i[a].paddings===t?{top:parseInt(i[a].cpar.css("paddingTop"),0)||0,bottom:parseInt(i[a].cpar.css("paddingBottom"),0)||0}:i[a].paddings,i[a].rowzones&&i[a].rowzones.length>0){if(i[a].rowzones[u]!==t)for(o=0;o<i[a].rowzones[u].length;o++)d+=i[a].rowzones[u][o][0].offsetHeight;if(h!==u)for(o=0;o<i[a].rowzones[h].length;o++)c+=i[a].rowzones[h][o][0].offsetHeight}if(i[a].srowzones&&i[a].srowzones.length>0)for(o=0;o<i[a].srowzones.length;o++)p+=i[a].srowzones[o][0].offsetHeight;d=d<p?p:d;var g=Math.max(Math.max(i[a].minHeight,i[a].gridheight[i[a].level]),d);if(g=0!==i[a].maxHeight?Math.min(i[a].maxHeight,g):g,"fullwidth"!=i[a].sliderLayout||i[a].autoHeight||punchgs.TweenMax.set(i[a].c,{maxHeight:g+"px"}),i[a].c.css({marginTop:n,marginBottom:l}),i[a].width=i[a].canvas.width(),i[a].height=i[a].canvas.height(),"fullscreen"==i[a].sliderLayout||i[a].infullscreenmode){var f=e(window).height();if(i[a].fullScreenOffsetContainer!=t){var m=(""+i[a].fullScreenOffsetContainer).split(",");for(var v in m)m.hasOwnProperty(v)&&(f-=e(m[v]).outerHeight(!0)||0)}i[a].fullScreenOffset!=t&&!e.isNumeric(i[a].fullScreenOffset)&&i[a].fullScreenOffset.split("%").length>1?f-=e(window).height()*parseInt(i[a].fullScreenOffset,0)/100:i[a].fullScreenOffset!=t&&i[a].fullScreenOffset.length>0&&e.isNumeric(parseInt(i[a].fullScreenOffset,0))&&(f-=parseInt(i[a].fullScreenOffset,0)),i[a].height=Math.max(d,Math.max(f-s,i[a].minHeight)),h!==u&&(i[a].currentSlideHeight=Math.max(c,Math.max(f-s,i[a].minHeight)),i[a].slides[h].style.maxHeight=i[a].currentSlideHeight!==i[a].height?i[a].currentSlideHeight+"px":"none"),i[a].cpar.height(i[a].height),i[a].c.css({height:"100%"})}else i[a].height=Math.round(i[a].gridheight[i[a].level]*(i[a].keepBPHeight?1:i[a].width/i[a].gridwidth[i[a].level])),i[a].height=Math.max(d,Math.max(i[a].autoHeight?i[a].height:Math.min(i[a].height,i[a].gridheight[i[a].level]),i[a].minHeight)),!1!==r&&i[a].c.height(i[a].height);var b=n+l+s+i[a].height+i[a].paddings.top+i[a].paddings.bottom,w={height:b};if(!1!==r&&(i[a].c.closest("rs-fullwidth-wrap").find("rs-fw-forcer").css(w),i[a].c.closest("rs-module-wrap").css(w)),i[a].sbtimeline.set&&i[a].sbtimeline.fixed&&(i[a].curheight=b,i[a].sbtimeline.extended===t&&i.updateFixedScrollTimes(a),punchgs.TweenMax.set(i[a].forcer,{height:2*b+i[a].sbtimeline.extended})),i[a].middleZones&&i[a].middleZones.length>0&&i[a].middleZones[u]!==t)for(o=0;o<i[a].middleZones[u].length;o++)i[a].middleZones[u][o].style.top=Math.round(b/2-i[a].middleZones[u][o].offsetHeight/2)+"px";if(i[a].smiddleZones&&i[a].smiddleZones.length>0)for(o=0;o<i[a].smiddleZones.length;o++)i[a].smiddleZones[o].style.top=Math.round(b/2-i[a].smiddleZones[o].offsetHeight/2)+"px";y(a)},enterInViewPort:function(a){i[a].waitForCountDown&&(j(a),i[a].waitForCountDown=!1),i[a].waitForFirstSlide&&(O(a),i[a].waitForFirstSlide=!1,setTimeout(function(){i[a].c.removeClass("tp-waitforfirststart")},500)),"playing"!=i[a].sliderlaststatus&&i[a].sliderlaststatus!=t||i[a].c.trigger("starttimer"),i[a].lastplayedvideos!=t&&i[a].lastplayedvideos.length>0&&e.each(i[a].lastplayedvideos,function(e,t){i.playVideo(t,a)})},leaveViewPort:function(a){i[a].sliderlaststatus=i[a].sliderstatus,i[a].c.trigger("stoptimer"),i[a].playingvideos!=t&&i[a].playingvideos.length>0&&(i[a].lastplayedvideos=e.extend(!0,[],i[a].playingvideos),i[a].playingvideos&&e.each(i[a].playingvideos,function(e,t){i[a].leaveViewPortBasedStop=!0,i.stopVideo&&i.stopVideo(t,a)}))},unToggleState:function(e){if(e!==t)for(var i=0;i<e.length;i++)try{document.getElementById(e[i]).classList.remove("rs-tc-active")}catch(e){}},toggleState:function(e){if(e!==t)for(var i=0;i<e.length;i++)try{document.getElementById(e[i]).classList.add("rs-tc-active")}catch(e){}},swaptoggleState:function(e){if(e!=t&&e.length>0)for(var a=0;a<e.length;a++){var r=document.getElementById(e[a]);if(i.gA(r,"toggletimestamp")!==t&&(new Date).getTime()-i.gA(r,"toggletimestamp")<250)return;i.sA(r,"toggletimestamp",(new Date).getTime()),null!==r&&(r.className.indexOf("rs-tc-active")>=0?r.classList.remove("rs-tc-active"):r.classList.add("rs-tc-active"))}},lastToggleState:function(e){var i;if(e!==t)for(var a=0;a<e.length;a++){var r=document.getElementById(e[a]);i=!0===i||null!==r&&r.className.indexOf("rs-tc-active")>=0||i}return i},revCheckIDS:function(a,r){if(i.gA(r,"idcheck")===t){for(;-1!=e.inArray(r.id,i[a].anyid);)console.log("Warning !! Double Id in Slider "+a+": "+r.id),r.id=r.id+"_"+Math.round(9999*Math.random());i[a].anyid.push(r.id)}i.sA(r,"idcheck",!0)},buildSpinner:function(i,a,r,o){var s;if("off"!==a){o=o===t?"":o,r=r===t?"#ffffff":r;var n=parseInt(a.replace("spinner",""),10);if(isNaN(n)||n<6){var l='style="background-color:'+r+'"',d=o===t||3!==n&&4!=n?"":l;s=e("<rs-loader "+(o===t||1!==n&&2!=n?"":l)+' class="'+a+" "+o+'"><div '+d+' class="dot1"></div><div '+d+' class="dot2"></div><div '+d+' class="bounce1"></div><div '+d+' class="bounce2"></div><div '+d+' class="bounce3"></div></rs-loader>')}else{var c,p='<div class="rs-spinner-inner"';if(7===n)-1!==r.search("#")?(c=r.replace("#",""),c="rgba("+parseInt(c.substring(0,2),16)+", "+parseInt(c.substring(2,4),16)+", "+parseInt(c.substring(4,6),16)+", "):-1!==r.search("rgb")&&(c=r.substring(r.indexOf("(")+1,r.lastIndexOf(")")).split(",")).length>2&&(c="rgba("+c[0].trim()+", "+c[1].trim()+", "+c[2].trim()+", "),c&&"string"==typeof c&&(p+=' style="border-top-color: '+c+"0.65); border-bottom-color: "+c+"0.15); border-left-color: "+c+"0.65); border-right-color: "+c+'0.15)"');else 12===n&&(p+=' style="background:'+r+'"');p+=">";for(var u=[10,0,4,2,5,9,0,4,4,2][n-6],h=0;h<u;h++)h>0&&(p+=" "),p+='<span style="background:'+r+'"></span>';s=e('<rs-loader class="'+a+" "+o+'">'+(p+="</div>")+"</div></rs-loader>")}return s}}});var a=i.is_mobile(),r=(i.is_android(),function(e){i[e].responsiveLevels=i.revToResp(i[e].responsiveLevels,i[e].rle),i[e].visibilityLevels=i.revToResp(i[e].visibilityLevels,i[e].rle),i[e].responsiveLevels[0]=9999,i[e].rle=i[e].responsiveLevels.length||1,i[e].gridwidth=i.revToResp(i[e].gridwidth,i[e].rle),i[e].gridheight=i.revToResp(i[e].gridheight,i[e].rle),i[e].editorheight!==t&&(i[e].editorheight=i.revToResp(i[e].editorheight,i[e].rle)),l(e),y(e);var a=Math.max(i[e].minHeight,i[e].gridheight[i[e].level]*i[e].bw);i[e].editorheight!==t&&(a=Math.max(a,i[e].editorheight[i[e].level]*i[e].bw)),punchgs.TweenMax.set(i[e].c,{height:a})}),o=function(t,i){var a=[];return e.each(t,function(e,t){e!=i&&a.push(t)}),a},s=function(t,a,r){i[r].c.find(t).each(function(){var t=e(this);t.data("key")===a&&t.remove()})},n=function(e){window.revFontTestcontainer==t&&(window.revFontTestcontainer=document.createElement("span"),window.revFontTestcontainer.innerHTML=Array(100).join("wi"),window.revFontTestcontainer.style.cssText=["position:absolute","width:auto","font-size:128px","left:-99999px"].join(" !important;")),window.revFontTestcontainer.style.fontFamily=e,document.body.appendChild(window.revFontTestcontainer);var i=window.revFontTestcontainer.clientWidth;return document.body.removeChild(window.revFontTestcontainer),i},l=function(t,a){var r=9999,o=0,s=0,n=e(window).width(),l=a&&9999==i[t].responsiveLevels?i[t].visibilityLevels:i[t].responsiveLevels;l&&l.length&&e.each(l,function(e,a){n<a&&(0==o||o>parseInt(a))&&(r=parseInt(a),i[t].level=e,o=parseInt(a)),n>a&&o<a&&(o=parseInt(a),s=e)}),o<r&&(i[t].level=s),i[t].levelForced=i[t].level},d=function(t,i){var a=0;return t.find(i).each(function(){var t=e(this);!t.hasClass("tp-forcenotvisible")&&a<t.outerWidth()&&(a=t.outerWidth())}),a},c=function(r){if(r===t||i[r]===t||i[r].c===t)return!1;window._rs_firefox13=!1,window._rs_ie=window._rs_ie===t?!e.support.opacity:window._rs_ie,window._rs_ie9=window._rs_ie9===t?9==document.documentMode:window._rs_ie9;var o=e.fn.jquery.split("."),s=parseFloat(o[0]),n=parseFloat(o[1]);1==s&&n<7&&i[r].c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+o+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),s>1&&(window._rs_ie=!1),i[r].cpar!==t&&i[r].cpar.data("aimg")!=t&&("enabled"==i[r].cpar.data("aie8")&&i.isIE(8)||"enabled"==i[r].cpar.data("amobile")&&a)&&i[r].c.html('<img class="tp-slider-alternative-image" src="'+i[r].cpar.data("aimg")+'">'),i[r].realslideamount=i[r].slideamount=0;var l=i[r].canvas[0].getElementsByTagName("rs-slide");for(var d in l)l.hasOwnProperty(d)&&("on"==i.gA(l[d],"hsom")&&a?l[d].classList.add("removeslidenow"):(i.gA(l[d],"invisible")||1==i.gA(l[d],"invisible")?l[d].classList.add("not-in-nav"):i[r].slideamount++,i[r].realslideamount++,i.sA(l[d],"originalindex",i[r].realslideamount),i.sA(l[d],"origindex",i[r].realslideamount-1)));i[r].canvas.find(".removeslidenow").each(function(){e(this).remove()}),i[r].canvas.find(".not-in-nav").each(function(){e(this).appendTo(i[r].canvas)}),i[r].canvas.css({visibility:"visible"}),i[r].slayers=i[r].c.find("rs-static-layers"),i[r].slayers.length>0&&i.sA(i[r].slayers[0],"key","staticlayers"),!0===i[r].modal.useAsModal&&(i[r].cpar.wrap('<rs-modal id="'+i[r].c[0].id+'_modal"></rs-modal>'),i[r].modal.c=i[r].cpar.closest("rs-modal"),i[r].modal.c.appendTo(e("body")),i[r].modal!==t&&i[r].modal.alias!==t&&i.revModal(r,{mode:"init"})),1!=i[r].waitForInit&&1!=i[r].modal.useAsModal&&h(r)},p=function(){e("body").data("rs-fullScreenMode",!e("body").data("rs-fullScreenMode")),e("body").data("rs-fullScreenMode")&&setTimeout(function(){e(window).trigger("resize")},200)},u=function(e,a,r){return i.gA(e,"lazyload")!==t?i.gA(e,"lazyload"):i[r].lazyloaddata!==t&&i[r].lazyloaddata.length>0&&i.gA(e,i[r].lazyloaddata)!==t?i.gA(e,i[r].lazyloaddata):i.gA(e,"lazy-src")!==t?i.gA(e,"lazy-src"):i.gA(e,"lazy-wpfc-original-src")!==t?i.gA(e,"lazy-wpfc-original-src"):i.gA(e,"lazy")!==t?i.gA(e,"lazy"):a},h=function(r){if(i[r]!==t){if(i[r].sliderisrunning=!0,e(document).on("revolution.all.resize",function(){i[r].sliderisrunning&&m(r)}),i[r].shuffle){for(var o=i[r].canvas.find("rs-slide:first-child"),s=i.gA(o[0],"firstanim"),n=0;n<i[r].slideamount;n++)i[r].canvas.find("rs-slide:eq("+Math.round(Math.random()*i[r].slideamount)+")").prependTo(i[r].canvas);i.sA(i[r].canvas.find("rs-slide:first-child")[0],"firstanim",s)}for(var d in i[r].slides=i[r].canvas[0].getElementsByTagName("rs-slide"),i[r].thumbs=new Array(i[r].slides.length),i[r].slots=4,i[r].firststart=1,i[r].loadqueue=[],i[r].syncload=0,i.updateDimensions(r),i[r].slides)if(i[r].slides.hasOwnProperty(d)&&"length"!==d){var c=i[r].slides[d],h=c.getElementsByClassName(".rev-slidebg");h=0===h.length?c.getElementsByTagName("img")[0]:h,i.gA(c,"key")===t&&i.sA(c,"key","rs-"+Math.round(999999*Math.random()));var v={params:Array(12),id:i.gA(c,"key"),src:i.gA(c,"thumb")!==t?i.gA(c,"thumb"):u(h,h.src,r)};i.gA(c,"title")===t&&i.sA(c,"title",""),i.gA(c,"description")===t&&i.sA(c,"description",""),v.params[0]={from:RegExp("\\{\\{title\\}\\}","g"),to:i.gA(c,"title")},v.params[1]={from:RegExp("\\{\\{description\\}\\}","g"),to:i.gA(c,"description")};for(var y=1;y<=10;y++)i.gA(c,"p"+y)!==t?v.params[y+1]={from:RegExp("\\{\\{param"+y+"\\}\\}","g"),to:i.gA(c,"p"+y)}:v.params[y+1]={from:RegExp("\\{\\{param"+y+"\\}\\}","g"),to:""};if(i[r].thumbs[d]=v,i.gA(c,"link")!=t||i.gA(c,"linktoslide")!==t){var w=i.gA(c,"link")!==t?i.gA(c,"link"):"slide",_="slide"!=w?"no":i.gA(c,"linktoslide"),x=i.gA(c,"seoz");if(_!=t&&"no"!=_&&"next"!=_&&"prev"!=_)for(var k in i[r].slides)i[r].slides.hasOwnProperty(k)&&parseInt(i.gA(i[r].slides[k],"origindex"),0)+1==i.gA(c,"linktoslide")&&(_=i.gA(i[r].slides[k],"key"));e(c).append('<rs-layer class="rs-layer slidelink" style="z-index:'+("back"===x?0:"front"===x?60:x!==t?parseInt(x,0):100)+';" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide"'+("no"==_?"":"  data-actions='"+("scroll_under"===_?"o:click;a:scrollbelow;offset:100px;":"prev"===_?"o:click;a:jumptoslide;slide:prev;d:0.2;":"next"===_?"o:click;a:jumptoslide;slide:next;d:0.2;":"o:click;a:jumptoslide;slide:"+_+";d:0.2;")+"'")+" data-frame_1='e:Power3.easeInOut;st:100;sp:100' data-frame_999='e:Power3.easeInOut;o:0;st:w;sp:100'><a "+("slide"!=w?' target="'+(i.gA(c,"target")||"_self")+'" href="'+w+'"':"")+"><span></span></a></rs-layer>")}}if(i[r].simplifyAll&&(i.isIE(8)||i.iOSVersion())&&(i[r].c.find(".rs-layer").each(function(){var t=e(this);t.removeClass("customin customout").addClass("fadein fadeout"),t.data("splitin",""),t.data("speed",400)}),i[r].slides.each(function(){var t=e(this);t.data("transition","fade"),t.data("masterspeed",500),t.data("slotamount",1),(t.find(".rev-slidebg")||t.find(">img").first()).data("panzoom",null)})),window._rs_desktop=window._rs_desktop===t?!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i):window._rs_desktop,i[r].autoHeight="fullscreen"==i[r].sliderLayout||i[r].autoHeight,"fullwidth"!=i[r].sliderLayout||i[r].autoHeight||i[r].c.css({maxHeight:i[r].gridheight[i[r].level]+"px"}),"auto"==i[r].sliderLayout||0!=i[r].c.closest("rs-fullwidth-wrap").length||"fullscreen"===i[r].sliderLayout&&1==i[r].disableForceFullWidth)i[r].topc=i[r].cpar;else{var T=i[r].cpar[0].style.marginTop,L=i[r].cpar[0].style.marginBottom;T=T===t||""===T?"":"margin-top:"+T+";",L=L===t||""===L?"":"margin-bottom:"+L+";",i[r].topc=e('<rs-fullwidth-wrap id="'+i[r].c[0].id+'_forcefullwidth" style="'+T+L+'"></rs-fullwidth-wrap>'),i[r].forcer=e('<rs-fw-forcer style="height:'+i[r].cpar.height()+'px"></rs-fw-forcer>'),i[r].topc.append(i[r].forcer),i[r].topc.insertBefore(i[r].cpar),i[r].cpar.detach(),i[r].cpar.css({marginTop:"0px",marginBottom:"0px",position:"absolute"}),i[r].cpar.prependTo(i[r].topc)}if(i[r].forceOverflow&&i[r].topc[0].classList.add("rs-forceoverflow"),"carousel"===i[r].sliderType&&i[r].c.css({overflow:"visible"}),0!==i[r].maxHeight&&punchgs.TweenMax.set([i[r].cpar,i[r].c,i[r].topc],{maxHeight:i[r].maxHeight+"px"}),i[r].fixedOnTop&&punchgs.TweenMax.set(i[r].topc,{position:"fixed",top:"0px",left:"0px",pointerEvents:"none",zIndex:5e3}),i[r].shadow!==t&&i[r].shadow>0&&i[r].cpar.addClass("tp-shadow"+i[r].shadow).append('<div class="tp-shadowcover" style="background-color:'+i[r].cpar.css("backgroundColor")+";background-image:"+i[r].cpar.css("backgroundImage")+'"></div>'),l(r),!i[r].c.hasClass("revslider-initialised")){i[r].c[0].classList.add("revslider-initialised"),i[r].c[0].id=i[r].c[0].id===t?"revslider-"+Math.round(1e3*Math.random()+5):i[r].c[0].id,i.revCheckIDS(r,i[r].c[0]),i[r].origcd=parseInt(i[r].duration,0),i[r].scrolleffect._L=[],i[r].sbas=i[r].sbas===t?{}:i[r].sbas,i[r].layers=i[r].layers||{},i[r].sortedLayers=i[r].sortedLayers||{},i[r].c.detach(),i[r].c.find("rs-layer, rs-row, rs-column, rs-group,  rs-bgvideo, .rs-layer").each(function(){var a,o,s=e(this),n=s.data();if(n.startclasses=this.className,n.startclasses=n.startclasses===t||null===n.startclasses?"":n.startclasses,n.animationonscroll=!!i[r].sbtimeline.set&&i[r].sbtimeline.layers,n.animationonscroll=!0===n.animationonscroll||"true"==n.animationonscroll,n.filteronscroll=!!i[r].scrolleffect.set&&i[r].scrolleffect.layers,n.pxundermask=n.startclasses.indexOf("rs-pxmask")>=0&&"off"!==i[r].parallax.type&&n.startclasses.indexOf("rs-pxl-")>=0,n.noPevents=n.startclasses.indexOf("rs-noevents")>=0,n.sba)for(var l in a=n.sba.split(";"))a.hasOwnProperty(l)&&("t"==(o=a[l].split(":"))[0]&&(n.animationonscroll=o[1],"false"==o[1]&&(n.animOnScrollForceDisable=!0)),"e"==o[0]&&(n.filteronscroll=o[1]),"so"==o[0]&&(n.scrollBasedOffset=parseInt(o[1])/1e3));if("true"!=n.animationonscroll&&1!=n.animationonscroll||(n.startclasses+=" rs-sba",s[0].className+=" rs-sba"),n.startclasses.indexOf("rs-layer-static")>=0&&i.handleStaticLayers&&i.handleStaticLayers(s,r),"RS-BGVIDEO"!==s[0].tagName){if(s[0].classList.add("rs-layer"),"column"===n.type&&(n.columnwidth="33.33%",n.verticalalign="top",n.column!==t))for(var d in a=n.column.split(";"))a.hasOwnProperty(d)&&("w"===(o=a[d].split(":"))[0]&&(n.columnwidth=o[1]),"a"===o[0]&&(n.verticalalign=o[1]));var c=n.startclasses.indexOf("slidelink")>=0?"width:100% !important;height:100% !important;":"",p="column"!==n.type?"":n.verticalalign===t?" vertical-align:top;":" vertical-align:"+n.verticalalign+";",u="row"===n.type||"column"===n.type?"position:relative;":"position:absolute;",h="",g="row"===n.type?"rs-row-wrap":"column"===n.type?"rs-column-wrap":"group"===n.type?"rs-group-wrap":"rs-layer-wrap",f="",m="",v=(n.noPevents,";pointer-events:none");for(var y in"row"===n.type||"column"===n.type||"group"===n.type?(s[0].classList.remove("tp-resizeme"),"column"===n.type&&(n.width="auto",s[0].group="row",punchgs.TweenMax.set(s,{width:"auto"}),n.filteronscroll=!1)):(f="display:"+("inline-block"===s[0].style.display?"inline-block":"block")+";",s.closest("rs-column").length>0?(s[0].group="column",n.filteronscroll=!1):s.closest("rs-group-wrap").length>0&&(s[0].group="group",n.filteronscroll=!1)),n.wrpcls!==t&&(h=h+" "+n.wrpcls),n.wrpid!==t&&(m='id="'+n.wrpid+'"'),n.maskinuse=!1,n)n.maskinuse&&n.hasOwnProperty(y)&&(n.maskinuse=y.indexOf("_mask")>0);s.wrap("<"+g+" "+m+' class="rs-parallax-wrap '+h+'" style="'+p+" "+c+u+f+v+'"><rs-loop-wrap style="'+c+u+f+'"><rs-mask-wrap style="'+c+u+f+'">'+(n.pxundermask?"<rs-px-mask></rs-px-mask>":"")+"</rs-mask-wrap></rs-loop-wrap></"+g+">"),!0!==n.filteronscroll&&"true"!=n.filteronscroll||i[r].scrolleffect._L.push(s.parent()),s[0].id=s[0].id===t?"layer-"+Math.round(999999999*Math.random()):s[0].id,i.revCheckIDS(r,s[0]),"column"===n.type&&s.closest(".rs-parallax-wrap").append('<rs-cbg-mask-wrap><rs-column-bg id="'+s[0].id+'_rs_cbg"></rs-column-bg></rs-cbg-mask-wrap>'),"text"===n.type&&s[0].getElementsByTagName("iframe").length>0&&s[0].classList.add("rs-ii-o"),punchgs.TweenMax.set(s,{visibility:"hidden"}),i[r].BUG_safari_clipPath&&s[0].classList.add("rs-pelock")}i.gA(s[0],"actions")&&i.checkActions&&i.checkActions(s,r,i[r]),!i.checkVideoApis||window.rs_addedvim&&window.rs_addedyt||i[r].youtubeapineeded&&i[r].vimeoapineeded||i.checkVideoApis(s,r)}),i.checkActions&&i.checkActions(t,r),i[r].c.prependTo(i[r].cpar),i[r].c[0].addEventListener("mouseenter",function(){i[r].c.trigger("tp-mouseenter"),i[r].overcontainer=!0},{passive:!0}),i[r].c[0].addEventListener("mouseover",function(){i[r].c.trigger("tp-mouseover"),i[r].overcontainer=!0},{passive:!0}),i[r].c[0].addEventListener("mouseleave",function(){i[r].c.trigger("tp-mouseleft"),i[r].overcontainer=!1},{passive:!0}),i[r].c.find(".rs-layer video").each(function(t){var i=e(this);i.removeClass("video-js vjs-default-skin"),i.attr("preload",""),i.css({display:"none"})}),"standard"!==i[r].sliderType&&(i[r].lazyType="all"),i[r].rs_static_layer=i[r].c[0].getElementsByTagName("rs-static-layers"),i[r].rs_static_layer.length>0&&(I(i[r].rs_static_layer[0],r,0,!0),A(i[r].rs_static_layer[0],r,function(){i[r]!==t&&i[r].c.find("rs-static-layers img").each(function(){this.src=i.getLoadObj(r,i.gA(this,"src")!=t?i.gA(this,"src"):this.src).src})})),i[r].rowzones=[],i[r].middleZones=[];var R=B("#")[0];if(R.length<9&&R.split("slide").length>1&&-1==R.indexOf("slider")){var S=parseInt(R.split("slide")[1],0);e.isNumeric(parseInt(S,0))&&((S=parseInt(S,0))<1&&(S=1),S>i[r].slideamount&&(S=i[r].slideamount),i[r].startWithSlide=S-1)}i[r].loader=i.buildSpinner(r,i[r].spinner,i[r].spinnerclr),i[r].c.append(i[r].loader);var z=window.getComputedStyle(i[r].c[0].parentNode,null);i[r].c.height(z.height),0===i[r].c.find("rs-progress").length&&i[r].c.append('<rs-progress style="visibility:hidden"></rs-progress>'),i[r].c.find("rs-progress").css({width:"0%"}),i[r].canvas.css({display:"block"}),b(r),i[r].slides=i[r].canvas.find("rs-slide").not(".rs-not-in-nav"),i[r].inli=i[r].canvas.find("rs-slide.rs-not-in-nav"),("off"!==i[r].parallax.type||i[r].scrolleffect.set||i[r].sbtimeline.set)&&i.checkForParallax&&i.checkForParallax(r),i.setSize(r,!1),"hero"!==i[r].sliderType&&i.createNavigation&&i[r].navigation.use&&i.createNavigation(r),i.resizeThumbsTabs&&i.resizeThumbsTabs&&i[r].navigation.use&&i.resizeThumbsTabs(r),g(r);var M=i[r].viewPort;i[r].inviewport=!1,M!=t&&M.enable&&i.scrollTicker&&i.scrollTicker(r),i[r].slides.each(function(t){var a=e(this);i[r].rowzones[t]=[],i[r].middleZones[t]=[],a.find("rs-zone").each(function(){i[r].rowzones[t].push(e(this)),this.className.indexOf("rev_row_zone_middle")>=0&&i[r].middleZones[t].push(this)}),((M.enable&&i[r].inviewport||!M.enable)&&"all"==i[r].lazyType||"smart"==i[r].lazyType&&(0==t||1==t||t==i[r].slideamount||t==i[r].slideamount-1))&&(I(a[0],r,t),A(a[0],r,function(){}))}),i[r].srowzones=[],i[r].smiddleZones=[],i[r].slayers.find("rs-zone").each(function(){i[r].srowzones.push(e(this)),this.className.indexOf("rev_row_zone_middle")>=0&&i[r].smiddleZones.push(this)}),"carousel"===i[r].sliderType&&i.prepareCarousel&&(punchgs.TweenMax.set(i[r].canvas,{scale:1,perspective:1200,transformStyle:"flat",opacity:0}),i.prepareCarousel(r,new punchgs.TimelineLite,t,0),i[r].onlyPreparedSlide=!0),setTimeout(function(){!M.enable||M.enable&&i[r].inviewport||M.enable&&!i[r].inviewport&&"wait"!==M.outof?O(r):(i[r].c.addClass("tp-waitforfirststart"),i[r].waitForFirstSlide=!0,M.presize&&(i[r].pr_next_slide=e(i[r].slides[0]),I(i[r].pr_next_slide[0],r,0,!0),A(i[r].pr_next_slide.find(".tp-layers"),r,function(){i.animateTheLayers&&i.animateTheLayers({slide:i[r].pr_next_key,id:r,mode:"preset"})}))),i.manageNavigation&&i[r].navigation.use&&i.manageNavigation(r),i[r].slideamount>1&&(!M.enable||M.enable&&i[r].inviewport?j(r):i[r].waitForCountDown=!0),setTimeout(function(){i[r]!==t&&i[r].c.trigger("revolution.slide.onloaded")},50)},i[r].startDelay),i[r].startDelay=0,e("body").data("rs-fullScreenMode",!1),window.addEventListener("fullscreenchange",p,{passive:!0}),window.addEventListener("mozfullscreenchange",p,{passive:!0}),window.addEventListener("webkitfullscreenchange",p,{passive:!0});var C="resize.revslider-"+i[r].c.attr("id");e(window).on(C,function(){if(i[r]!==t){if(i[r].c==t)return!1;0!=e("body").find(i[r].c)&&(l(r),g(r));var o=!1;if("fullscreen"==i[r].sliderLayout){var s=e(window).height();"mobile"==i[r].fallbacks.ignoreHeightChanges&&a||"always"==i[r].fallbacks.ignoreHeightChanges?(i[r].fallbacks.ignoreHeightChangesSize=i[r].fallbacks.ignoreHeightChangesSize==t?0:i[r].fallbacks.ignoreHeightChangesSize,o=s!=i[r].lastwindowheight&&Math.abs(s-i[r].lastwindowheight)>i[r].fallbacks.ignoreHeightChangesSize):o=s!=i[r].lastwindowheight}(i[r].c.outerWidth(!0)!=i[r].width||i[r].c.is(":hidden")||o)&&(i[r].lastwindowheight=e(window).height(),m(r))}}),f(r),g(r),i[r].fallbacks.disableFocusListener||"true"==i[r].fallbacks.disableFocusListener||!0===i[r].fallbacks.disableFocusListener||(i[r].c.addClass("rev_redraw_on_blurfocus"),N())}}},g=function(a){var r=i.getHorizontalOffset(i[a].c,"left");if("auto"===i[a].sliderLayout||"fullscreen"===i[a].sliderLayout&&!0===i[a].disableForceFullWidth?"fullscreen"==i[a].sliderLayout&&1==i[a].disableForceFullWidth?punchgs.TweenMax.set(i[a].cpar,{left:0,width:"auto"}):punchgs.TweenMax.set(i[a].canvas,{left:"carousel"===i[a].sliderType?0:r,width:i[a].c.width()-i.getHorizontalOffset(i[a].c,"both")}):punchgs.TweenMax.set(i[a].cpar,{left:0-Math.ceil(i[a].c.closest("rs-fullwidth-wrap").offset().left-r)+"px",width:e(window).width()-i.getHorizontalOffset(i[a].c,"both")}),"auto"===i[a].sliderLayout&&i[a].modal!==t&&i[a].modal.useAsModal){var o=Math.min(i[a].gridwidth[i[a].level],window.innerWidth);punchgs.TweenMax.set([i[a].modal.c,i[a].canvas],{width:o})}i[a].slayers&&"fullwidth"!=i[a].sliderLayout&&"fullscreen"!=i[a].sliderLayout&&punchgs.TweenMax.set(i[a].slayers,{left:r})},f=function(a,r){e(window).width()<i[a].hideSliderAtLimit?(i[a].c.trigger("stoptimer"),i.sA(i[a].cpar[0],"displaycache","none"!=i[a].cpar.css("display")?i[a].cpar.css("display"):i.gA(i[a].cpar[0],"displaycache")),i[a].cpar.css({display:"none"})):i[a].c.is(":hidden")&&r&&(i.gA(i[a].cpar[0],"displaycache")!=t&&"none"!=i.gA(i[a].cpar[0],"displaycache")?i[a].cpar.css({display:i.gA(i[a].cpar[0],"displaycache")}):i[a].cpar.css({display:"block"}),i[a].c.trigger("restarttimer"),setTimeout(function(){m(a)},150)),i.hideUnHideNav&&i[a].navigation.use&&i.hideUnHideNav(a)},m=function(r){if(i[r].c===t)return!1;i[r].dimensionReCheck={},i[r].c.trigger("revolution.slide.beforeredraw"),1==i[r].infullscreenmode&&(i[r].minHeight=e(window).height()),a&&(i[r].lastMobileHeight=window.innerHeight),l(r),i.resizeThumbsTabs&&!0!==i.resizeThumbsTabs(r)||(f(r,!0),g(r),"carousel"==i[r].sliderType&&i.prepareCarousel(r,!0),i.setSize(r),i.updateDimensions(r),"standard"===i[r].sliderType&&i[r].mtl!==t&&i.animateSlide({recall:!0,id:r}),"carousel"===i[r].sliderType&&i[r].lastconw!=i[r].conw&&(clearTimeout(i[r].pcartimer),i[r].pcartimer=setTimeout(function(){i.prepareCarousel(r,!0),"carousel"==i[r].sliderType&&i[r].carousel.showLayersAllTime&&e.each(i[r].slides,function(e){i.animateTheLayers&&i.animateTheLayers({slide:e,id:r,mode:"rebuild"})})},100),i[r].lastconw=i[r].conw),i.animateTheLayers&&(i[r].pr_processing_key!==t?i.animateTheLayers({slide:i[r].pr_processing_key,id:r,mode:"rebuild"}):i[r].pr_active_key!==t&&i.animateTheLayers({slide:i[r].pr_active_key,id:r,mode:"rebuild"}),i.scrollHandling&&i.scrollHandling(r,!0)),v(r,i[r].pr_next_bg),"carousel"!==i[r].sliderType&&v(r,i[r].pr_active_bg),i.manageNavigation&&i.manageNavigation(r)),i[r].c.trigger("revolution.slide.afterdraw"),setTimeout(function(){g(r)},19)},v=function(e,a){a&&a.data("panzoom")!==t&&i.startPanZoom(a,e,a.data("pztl")!==t?a.data("pztl").progress():0)},y=function(e){i[e].bw=i[e].width/i[e].gridwidth[i[e].level],i[e].bh=i[e].height/i[e].gridheight[i[e].level],i[e].bw=isNaN(i[e].bw)?1:i[e].bw,i[e].bh=isNaN(i[e].bh)?1:i[e].bh,i[e].bh>i[e].bw?i[e].bh=i[e].bw:i[e].bw=i[e].bh,(i[e].bh>1||i[e].bw>1)&&(i[e].bw=1,i[e].bh=1)},b=function(a){i[a].autoHeight&&punchgs.TweenMax.set([i[a].c,i[a].cpar],{maxHeight:"none"}),punchgs.TweenMax.set(i[a].canvas,{overflow:"hidden",width:"100%",height:"100%",maxHeight:i[a].autoHeight?"none":i[a].cpar.css("maxHeight")}),"carousel"===i[a].sliderType&&(i[a].canvas.css({overflow:"visible"}).wrap("<rs-carousel-wrap></rs-carousel-wrap>"),i[a].cpar.prepend("<rs-carousel-space></rs-carousel-space>").append("<rs-carousel-space></rs-carousel-space>"),i.prepareCarousel(a)),i[a].startWithSlide=i[a].startWithSlide===t?t:"carousel"===i[a].sliderType?parseInt(i[a].startWithSlide):parseInt(i[a].startWithSlide)+1,i[a].cpar.css({overflow:"visible"}),i[a].scrolleffect.bgs=[];for(var r=0;r<i[a].slides.length;r++){var o=e(i[a].slides[r]),s=o.find(">img"),n=o.find("rs-bgvideo");s.detach(),n.detach(),(i[a].startWithSlide!=t&&i.gA(i[a].slides[r],"originalindex")==i[a].startWithSlide||i[a].startWithSlide===t&&0==r)&&(i[a].pr_next_key=o.index()),punchgs.TweenMax.set(o,{width:"100%",height:"100%",overflow:"hidden"}),s.wrap("<rs-sbg-px><rs-sbg-wrap></rs-sbg-wrap></rs-sbg-px>");var l=s.closest("rs-sbg-wrap"),d=o.data("mediafilter"),c=w(s.data(),a,s[0].style.backgroundColor),p=c.bgcolor!==t&&c.bgcolor.indexOf("gradient")>=0,h=c.bgcolor!==t&&c.bgcolor.indexOf("gradient")>=0?"background:"+c.bgcolor+";":"background-color:"+c.bgcolor+";";l.append('<canvas class="bgcanvas"></canvas>'),c.src=s[0].src,c.lazyload=u(s[0],t,a),c.slidebgimage=!0,d="none"===d||d===t?"":d,n.length>0&&(n.addClass("defaultvid").css({zIndex:30}),n.appendTo(l),d!==t&&""!==d&&"none"!==d&&n.addClass(d),c.parallax!=t&&(n.data("parallax",c.parallax),n.data("showcoveronpause","on"),n.data("mediafilter",d))),"none"!=i[a].dottedOverlay&&i[a].dottedOverlay!=t&&l.append('<rs-dotted class="'+i[a].dottedOverlay+'"></rs-dotted>'),h+=(p?"":"background-repeat:"+c.bgrepeat+";background-image:url("+c.src+");background-size:"+c.bgfit+";background-position:"+c.bgposition+";")+"width:100%;height:100%;",h+="standard"===i[a].sliderType||"undefined"===i[a].sliderType?"opacity:0;":"",s.data("mediafilter",d),d=s.data("panzoom")!==t?"":d;var g=e("<rs-sbg "+(c.lazyload!==t?'data-lazyload="'+c.lazyload+'"':"")+' src="'+c.src+'" class="'+d+'" data-bgcolor="'+c.bgcolor+'" style="'+h+'"></rs-sbg>');l.append(g);var f=document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - "+s.get(0).outerHTML);s.replaceWith(f),l.data(c),g.data(c),i.gA(o[0],"sba")===t&&i.sA(o[0],"sba","");var m={},v=i.gA(o[0],"sba").split(";");for(var y in v)if(v.hasOwnProperty(y)){var b=v[y].split(":");switch(b[0]){case"f":m.f=b[1];break;case"b":m.b=b[1];break;case"g":m.g=b[1];break;case"t":m.s=b[1]}}i.sA(o[0],"scroll-based",!!i[a].sbtimeline.set&&(m.s!==t&&m.s)),i[a].scrolleffect.set?(i[a].scrolleffect.bgs.push({fade:m.f!==t?m.f:!!i[a].scrolleffect.slide&&i[a].scrolleffect.fade,blur:m.b!==t?m.b:!!i[a].scrolleffect.slide&&i[a].scrolleffect.blur,grayscale:m.g!==t?m.g:!!i[a].scrolleffect.slide&&i[a].scrolleffect.grayscale,c:l.wrap("<rs-sbg-effectwrap></rs-sbg-effectwrap>").parent()}),o.prepend(l.parent().parent())):o.prepend(l.parent())}},w=function(r,o,s){r.bg=r.bg===t?"":r.bg;var n=r.bg.split(";"),l={bgposition:"50% 50%",bgfit:"cover",bgrepeat:"no-repeat",bgcolor:s||"transparent"};for(var d in n)if(n.hasOwnProperty(d)){var c=n[d].split(":"),p=c[0],u=c[1],h="";switch(p){case"p":h="bgposition";break;case"f":h="bgfit";break;case"r":h="bgrepeat";break;case"c":h="bgcolor"}h!==t&&(l[h]=u)}return i[o].fallbacks.panZoomDisableOnMobile&&a&&(l.panzoom=null,l.bgfit="cover"),e.extend(!0,r,l)},_=function(e,t){t.find(".slot, .slot-circle-wrapper").each(function(){}),i[e].transition=0},x=function(e){var i=e;return e!=t&&e.length>0&&(i=e.split("?")[0]),i},k=function(e){var i=e;return e!=t&&e.length>0&&(i=i.replace(document.location.protocol,"")),i},T=function(e,t){var i=e.split("/"),a=t.split("/");i.pop();for(var r=0;r<a.length;r++)"."!=a[r]&&(".."==a[r]?i.pop():i.push(a[r]));return i.join("/")},L=function(e,a,r){if(i[a]!==t){for(var o in i[a].syncload--,i[a].loadqueue)if(i[a].loadqueue.hasOwnProperty(o)&&"loaded"!==i[a].loadqueue[o].progress){var s=i[a].loadqueue[o].src!==t?i[a].loadqueue[o].src.replace(/\.\.\/\.\.\//gi,""):i[a].loadqueue[o].src;(s===e.src||k(s)===k(e.src)||x(document.location.protocol+s)===x(decodeURIComponent(e.src))||x(document.location.origin+s)===x(decodeURIComponent(e.src))||x(self.location.href.substring(0,self.location.href.length-1)+s)===x(decodeURIComponent(e.src))||x(T(self.location.href,i[a].loadqueue[o].src))===x(decodeURIComponent(e.src))||x(document.location.origin+"/"+s)===x(decodeURIComponent(e.src))||x(self.location.href.substring(0,self.location.href.length-1)+"/"+s)===x(decodeURIComponent(e.src))||x(i[a].loadqueue[o].src)===x(decodeURIComponent(e.src))||"file://"===window.location.origin&&x(e.src).match(new RegExp(s)))&&(i[a].loadqueue[o].img=e,i[a].loadqueue[o].progress=r,i[a].loadqueue[o].width=e.width,i[a].loadqueue[o].height=e.height)}R(a)}},R=function(t){4!=i[t].syncload&&i[t].loadqueue&&e.each(i[t].loadqueue,function(a,r){if("prepared"==r.progress&&i[t].syncload<=4){if(i[t].syncload++,"img"==r.type){var o=new Image;o.crossOrigin="",o.onload=function(){L(this,t,"loaded"),r.error=!1},o.onerror=function(){L(this,t,"failed"),r.error=!0},o.src=r.src,r.starttoload=e.now()}else e.get(r.src,function(e){r.innerHTML=(new XMLSerializer).serializeToString(e.documentElement),r.progress="loaded",i[t].syncload--,R(t)}).fail(function(){r.progress="failed",i[t].syncload--,R(t)});r.progress="inload"}})},I=function(a,r,o,s){if(a!==t&&0!==a.length){var n=a.querySelectorAll("img, rs-sbg, .rs-svg");for(var l in n)if(n.hasOwnProperty(l)){var d=u(n[l],t,r),c=d!==t?d:i.gA(n[l],"svg_src")!=t?i.gA(n[l],"svg_src"):n[l].src===t?e(n[l]).data("src"):n[l].src,p=i.gA(n[l],"svg_src")!=t?"svg":"img";c!==t&&0==i[r].loadqueue.filter(function(e){return e.src===c}).length&&i[r].loadqueue.push({src:c,index:l,starttoload:e.now(),type:p||"img",prio:o,progress:n[l].complete&&c===n[l].src?"loaded":"prepared",static:s,width:n[l].complete&&c===n[l].src?n[l].width:t,height:n[l].complete&&c===n[l].src?n[l].height:t})}R(r)}},A=function(r,o,s){if(r!==t&&0!==r.length&&i[o]!==t){var n=!1,l=r.querySelectorAll("img, rs-sbg, .rs-svg");for(var d in l)if(l.hasOwnProperty(d)&&"length"!==d&&!(l[d].className.indexOf("rs-pzimg")>=0)){var c=e(l[d]).data(),p=u(l[d],t,o),h=p!==t?p:i.gA(l[d],"svg_src")!=t?i.gA(l[d],"svg_src"):l[d].src===t?e(l[d]).data("src"):l[d].src,g=i.getLoadObj(o,h);if(i.sA(l[d],"src-rs-ref",h),c.loaded===t&&g!==t&&g.progress&&"loaded"==g.progress){if(l[d].src=g.src,"img"==g.type){if(c.slidebgimage){-1==g.src.indexOf("images/transparent.png")&&-1==g.src.indexOf("assets/transparent.png")||c.bgcolor===t?l[d].style.backgroundImage='url("'+g.src+'")':c.bgcolor!==t&&(l[d].style.background=c.bgcolor),i.sA(r,"owidth",g.width),i.sA(r,"oheight",g.height);var f=r.getElementsByTagName("rs-sbg-wrap");f.length>0&&(i.sA(f[0],"owidth",g.width),i.sA(f[0],"oheight",g.height))}}else"svg"==g.type&&"loaded"==g.progress&&(l[d].innerHTML=g.innerHTML);c.loaded=!0}g&&g.progress&&g.progress.match(/inprogress|inload|prepared/g)&&(!g.error&&e.now()-g.starttoload<3e3?n=!0:(g.progress="failed",g.reported_img||(g.reported_img=!0,console.log(h+"  Could not be loaded !")))),1!=i[o].youtubeapineeded||window.YT&&YT.Player!=t||(n=z("youtube",o)),1!=i[o].vimeoapineeded||window.Vimeo||(n=z("vimeo",o))}!a&&i[o].audioqueue&&i[o].audioqueue.length>0&&e.each(i[o].audioqueue,function(t,i){i.status&&"prepared"===i.status&&e.now()-i.start<i.waittime&&(n=!0)}),e.each(i[o].loadqueue,function(t,i){!0===i.static&&("loaded"!=i.progress&&"done"!==i.progress||"failed"===i.progress)&&("failed"!=i.progress||i.reported?!i.error&&e.now()-i.starttoload<5e3?n=!0:i.reported||(i.reported=S(i.src,i.error)):i.reported=S(i.src,i.error))}),n?punchgs.TweenMax.delayedCall(.18,A,[r,o,s]):punchgs.TweenMax.delayedCall(.18,s)}},S=function(e,t){return console.log("Static Image "+e+"  Could not be loaded in time. Error Exists:"+t),!0},z=function(t,a){if(e.now()-i[a][t+"starttime"]>5e3&&1!=i[a][t+"warning"]){i[a][t+"warning"]=!0;var r=t+" Api Could not be loaded !";"https:"===location.protocol&&(r+=" Please Check and Renew SSL Certificate !"),console.error(r),i[a].c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+r+"</strong></div>")}return!0},M=function(a){i[a]!==t&&(i[a].pr_active_slide=e(i[a].slides[i[a].pr_active_key]),i[a].pr_next_slide=e(i[a].slides[i[a].pr_processing_key]),i[a].pr_active_bg=i[a].pr_active_slide.find("rs-sbg-wrap"),i[a].pr_next_bg=i[a].pr_next_slide.find("rs-sbg-wrap"),punchgs.TweenMax.to([i[a].pr_active_bg,i[a].pr_next_bg],.5,{opacity:0}),punchgs.TweenMax.set(i[a].pr_active_slide,{zIndex:18}),punchgs.TweenMax.set(i[a].pr_next_slide,{autoAlpha:0,zIndex:20}),i[a].tonpause=!1,i.removeTheLayers&&i[a].pr_active_key!==t&&i.removeTheLayers(i[a].pr_active_slide,a,!0),i[a].firststart=1,setTimeout(function(){delete i[a].pr_active_key,delete i[a].pr_processing_key},200))},O=function(a,r){if(i[a]!==t)if(clearTimeout(i[a].waitWithSwapSlide),i[a].pr_processing_key===t){if(i[a].startWithSlideKey!==t&&(i[a].pr_next_key=i.getComingSlide(a,i[a].startWithSlideKey).nindex,delete i[a].startWithSlideKey),i[a].pr_active_slide=e(i[a].slides[i[a].pr_active_key]),i[a].pr_next_slide=e(i[a].slides[i[a].pr_next_key]),i[a].pr_next_key==i[a].pr_active_key&&!0!==i[a].onlyPreparedSlide)return delete i[a].pr_next_key;!0===i[a].onlyPreparedSlide&&(i[a].onlyPreparedSlide=!1),i[a].pr_processing_key=i[a].pr_next_key,i[a].pr_cache_pr_next_key=i[a].pr_next_key,delete i[a].pr_next_key,i[a].pr_next_slide!==t&&i[a].pr_next_slide[0]!==t&&i.gA(i[a].pr_next_slide[0],"hal")!==t&&i.sA(i[a].pr_next_slide[0],"sofacounter",i.gA(i[a].pr_next_slide[0],"sofacounter")===t?1:parseInt(i.gA(i[a].pr_next_slide[0],"sofacounter"),0)+1),i[a].stopLoop&&i[a].pr_processing_key==i[a].lastslidetoshow-1&&(i[a].c.find("rs-progress").css({visibility:"hidden"}),i[a].c.trigger("revolution.slide.onstop"),i[a].noloopanymore=1),i[a].pr_next_slide.index()===i[a].slideamount-1&&i[a].looptogo>0&&"disabled"!==i[a].looptogo&&(i[a].looptogo--,i[a].looptogo<=0&&(i[a].stopLoop=!0)),i[a].tonpause=!0,i[a].c.trigger("stoptimer"),"off"===i[a].spinner&&(i[a].loader!==t?i[a].loader.css({display:"none"}):i[a].loadertimer=setTimeout(function(){i[a].loader!==t&&i[a].loader.css({display:"block"})},18)),I(i[a].pr_next_slide[0],a,1),i.preLoadAudio&&i.preLoadAudio(i[a].pr_next_slide,a,1),A(i[a].pr_next_slide[0],a,function(){i[a]!==t&&(i[a].pr_next_slide.find("rs-bgvideo").each(function(){var t=e(this);t.hasClass("HasListener")||(t.data("bgvideo",1),i.manageVideoLayer&&i.manageVideoLayer(t,a)),0==t.find(".rs-fullvideo-cover").length&&t.append('<div class="rs-fullvideo-cover"></div>')}),C(i[a].pr_next_slide.find("rs-sbg"),a,r))}),g(a)}else i[a].waitWithSwapSlide=setTimeout(function(){O(a,r)},18)},C=function(a,r,o){if(i[r]!==t){if(i[r].pr_active_slide=e(i[r].slides[i[r].pr_active_key]),i[r].pr_next_slide=e(i[r].slides[i[r].pr_processing_key]),i[r].pr_active_bg=i[r].pr_active_slide.find("rs-sbg-wrap"),i[r].pr_next_bg=i[r].pr_next_slide.find("rs-sbg-wrap"),i[r].tonpause=!1,clearTimeout(i[r].loadertimer),i[r].loader!==t&&i[r].loader.css({display:"none"}),i.setSize(r),i.manageNavigation&&i[r].navigation.use&&i.manageNavigation(r,!1),i[r].c.trigger("revolution.slide.onbeforeswap",{slider:r,slideIndex:parseInt(i[r].pr_active_key,0)+1,slideLIIndex:i[r].pr_active_key,nextSlideIndex:parseInt(i[r].pr_processing_key,0)+1,nextSlideLIIndex:i[r].pr_processing_key,nextslide:i[r].pr_next_slide,slide:i[r].pr_active_slide,currentslide:i[r].pr_active_slide,prevslide:i[r].pr_lastshown_key!==t?i[r].slides[i[r].pr_lastshown_key]:""}),i[r].transition=1,i[r].stopByVideo=!1,i[r].pr_next_slide[0]!==t&&i.gA(i[r].pr_next_slide[0],"duration")!=t&&""!=i.gA(i[r].pr_next_slide[0],"duration")?i[r].duration=parseInt(i.gA(i[r].pr_next_slide[0],"duration"),0):i[r].duration=i[r].origcd,i[r].pr_next_slide[0]===t||"true"!=i.gA(i[r].pr_next_slide[0],"ssop")&&!0!==i.gA(i[r].pr_next_slide[0],"ssop")?i[r].ssop=!1:i[r].ssop=!0,i[r].sbtimeline.set&&i[r].sbtimeline.fixed&&i.updateFixedScrollTimes(r),i[r].c.trigger("nulltimer"),i[r].sdir=i[r].pr_processing_key<i[r].pr_active_key?1:0,"arrow"==i[r].sc_indicator&&(0==i[r].pr_active_key&&i[r].pr_processing_key==i[r].slideamount-1&&(i[r].sdir=1),i[r].pr_active_key==i[r].slideamount-1&&0==i[r].pr_processing_key&&(i[r].sdir=0)),i[r].lsdir=i[r].sdir,i[r].pr_active_key!=i[r].pr_processing_key&&1!=i[r].firststart&&"carousel"!==i[r].sliderType&&i.removeTheLayers&&i.removeTheLayers(i[r].pr_active_slide,r),i[r].pr_next_slide.hasClass("rs-pause-timer-once")||i[r].pr_next_slide.hasClass("rs-pause-timer-always")?i[r].stopByVideo=!0:i[r].c.trigger("restarttimer"),i[r].pr_next_slide.removeClass("rs-pause-timer-once"),i[r].pr_next_slide[0]!==t&&i.sA(i[r].c[0],"slideactive",i.gA(i[r].pr_next_slide[0],"key")),"carousel"==i[r].sliderType)i[r].mtl=new punchgs.TimelineLite,i.prepareCarousel(r,i[r].mtl),P(r),i[r].transition=0;else{i[r].mtl=new punchgs.TimelineLite({onComplete:function(){P(r)}}),i[r].mtl.add(punchgs.TweenMax.set(i[r].pr_next_bg.find("rs-sbg"),{opacity:0})),i[r].mtl.pause(),i.animateTheLayers&&(i[r].pr_next_key!==t?i.animateTheLayers({slide:i[r].pr_next_key,id:r,mode:"preset"}):i[r].pr_processing_key!==t?i.animateTheLayers({slide:i[r].pr_processing_key,id:r,mode:"preset"}):i[r].pr_active_key!==t&&i.animateTheLayers({slide:i[r].pr_active_key,id:r,mode:"preset"})),1==i[r].firststart&&(punchgs.TweenMax.set(i[r].pr_active_slide,{autoAlpha:0}),i[r].firststart=0),punchgs.TweenMax.set(i[r].pr_active_slide,{zIndex:18}),punchgs.TweenMax.set(i[r].pr_next_slide,{autoAlpha:0,zIndex:20}),"prepared"==i.gA(i[r].pr_next_slide[0],"differentissplayed")&&(i.sA(i[r].pr_next_slide[0],"differentissplayed","done"),i.sA(i[r].pr_next_slide[0],"anim",i.gA(i[r].pr_next_slide[0],"savedanim"))),i.gA(i[r].pr_next_slide[0],"firstanim")!=t&&"done"!=i.gA(i[r].pr_next_slide[0],"differentissplayed")&&(i.sA(i[r].pr_next_slide[0],"savedanim",i.gA(i[r].pr_next_slide[0],"anim")),i.sA(i[r].pr_next_slide[0],"anim",i.gA(i[r].pr_next_slide[0],"firstanim")),i.sA(i[r].pr_next_slide[0],"differentissplayed","prepared"));var s=function(e){var i=(e=e===t?"t:random":e).split(";"),a={};for(var r in i)if(i.hasOwnProperty(r)){var o=i[r].split(":"),s=o[0],n=o[1],l="transition";switch(s){case"ei":l="easein";break;case"eo":l="easeout";break;case"s":l="masterspeed";break;case"sl":l="slotamount";break;case"r":l="rotate"}s!==t&&n!==t&&(a[l]=n.split(","))}a.transition===t&&(a={transition:["fade"]});return a}(i.gA(i[r].pr_next_slide[0],"anim"));i.sA(i[r].pr_next_slide[0],"ntrid","on"==i.gA(i[r].pr_next_slide[0],"rndtrans")?Math.round(80*Math.random()):parseInt(i.gA(i[r].pr_next_slide[0],"ntrid"),0)+1||0),i.sA(i[r].pr_next_slide[0],"ntrid",s.transition===t||i.gA(i[r].pr_next_slide[0],"ntrid")==s.transition.length?0:i.gA(i[r].pr_next_slide[0],"ntrid")),i.animateSlide({animation:s,ntrid:i.gA(i[r].pr_next_slide[0],"ntrid"),id:r}),i[r].pr_next_bg.data("panzoom")!==t&&(i.startPanZoom(i[r].pr_next_bg,r),i[r].mtl.add(punchgs.TweenMax.set(i[r].pr_next_bg,{autoAlpha:0,immediateRender:!0}),0)),i[r].mtl.pause()}i.scrollHandling&&i[r].mtl!==t&&(i.scrollHandling(r,!0,0),i[r].mtl.eventCallback("onUpdate",function(){i.scrollHandling(r,!0,0,!0)})),"off"!=i[r].parallax.type&&i[r].parallax.firstgo==t&&i.scrollHandling&&(i[r].parallax.firstgo=!0,i[r].lastscrolltop=-999,i.scrollHandling(r,!0,0),setTimeout(function(){i[r]!==t&&(i[r].lastscrolltop=-999,i.scrollHandling(r,!0,0))},70),setTimeout(function(){i[r]!==t&&(i[r].lastscrolltop=-999,i.scrollHandling(r,!0,0))},100)),i.animateTheLayers?"carousel"===i[r].sliderType?i[r].carousel.showLayersAllTime?(e.each(i[r].slides,function(e){i[r].carousel.allLayersStarted?i.animateTheLayers({slide:e,id:r,mode:"rebuild"}):i.animateTheLayers({slide:e,id:r,mode:"start"})}),i[r].carousel.allLayersStarted=!0):(0!==i[r].firststart?i.animateTheLayers({slide:0,id:r,mode:"start"}):!0!==o&&i.animateTheLayers({slide:i[r].pr_next_key!==t?i[r].pr_next_key:i[r].pr_processing_key!==t?i[r].pr_processing_key:i[r].pr_active_key,id:r,mode:"start"}),i[r].firststart=0):i.animateTheLayers({slide:i[r].pr_next_key!==t?i[r].pr_next_key:i[r].pr_processing_key!==t?i[r].pr_processing_key:i[r].pr_active_key,id:r,mode:"start"}):i[r].mtl!=t&&setTimeout(function(){i[r].mtl.resume()},18),punchgs.TweenMax.to(i[r].pr_next_slide,.001,{autoAlpha:1})}};var P=function(r){if(i[r]!==t&&(i[r].firstSlideAvailable===t&&(i[r].firstSlideAvailable=!0,i.showFirstTime!==t&&i.showFirstTime(r)),"carousel"===i[r].sliderType||(punchgs.TweenMax.to(i[r].pr_next_bg.find("rs-sbg"),.001,{zIndex:20,autoAlpha:1,onComplete:function(){_(r,i[r].pr_next_slide)}}),i[r].pr_next_slide.index()!=i[r].pr_active_slide.index()&&punchgs.TweenMax.to(i[r].pr_active_slide,.2,{zIndex:18,autoAlpha:0,onComplete:function(){_(r,i[r].pr_active_slide)}})),i[r].pr_active_key=i[r].pr_processing_key!==t?i[r].pr_processing_key:i[r].pr_active_key,delete i[r].pr_processing_key,"scroll"!=i[r].parallax.type&&"scroll+mouse"!=i[r].parallax.type&&"mouse+scroll"!=i[r].parallax.type||(i[r].lastscrolltop=-999,i.scrollHandling(r)),i[r].mtldiff=i[r].mtl.time(),delete i[r].mtl,i[r].pr_active_key!==t)){i.gA(i[r].slides[i[r].pr_active_key],"sloop")!==t&&function(e){if(i[e]!==t){i[e].sloops=i[e].sloops===t?{}:i[e].sloops;var a=i.gA(i[e].slides[i[e].pr_active_key],"key"),r=i[e].sloops[a];if(r===t){r={s:2500,e:4500,r:"unlimited"};var o=i.gA(i[e].slides[i[e].pr_active_key],"sloop").split(";");for(var s in o)if(o.hasOwnProperty(s)){var n=o[s].split(":");switch(n[0]){case"s":r.s=parseInt(n[1],0)/1e3;break;case"e":r.e=parseInt(n[1],0)/1e3;break;case"r":r.r=n[1]}}r.r="unlimited"===r.r?-1:parseInt(r.r,0),i[e].sloops[a]=r,r.key=a}r.ct={time:r.s},r.tl=new punchgs.TimelineMax({}),r.timer=punchgs.TweenMax.fromTo(r.ct,r.e-r.s,{time:r.s},{time:r.e,ease:punchgs.Linear.easeNone,onRepeat:function(){for(var a in i[e].layers[r.key])i[e].layers[r.key].hasOwnProperty(a)&&i[e]._L[a].timeline.play(r.s);var o=i[e].c.find("rs-progress");o!==t&&o[0]!==t&&o[0].tween!==t&&o[0].tween.time(r.s)},onUpdate:function(){},onComplete:function(){}}).repeat(r.r),r.tl.add(r.timer,r.s),r.tl.time(i[e].mtldiff)}}(r),i[r].c.find(".active-rs-slide").removeClass("active-rs-slide"),e(i[r].slides[i[r].pr_active_key]).addClass("active-rs-slide"),i.sA(i[r].c[0],"slideactive",i.gA(i[r].slides[i[r].pr_active_key],"key")),i[r].pr_active_bg.data("pztl")!=t&&(i[r].pr_active_bg.data("pztl").reverse(),i[r].pr_active_bg.data("pztl").timeScale(25)),i[r].pr_next_bg.data("panzoom")!==t&&(i[r].pr_next_bg.data("pztl")!=t?(i[r].pr_next_bg.data("pztl").timeScale(1),i[r].pr_next_bg.data("pztl").play()):i.startPanZoom(i[r].pr_next_bg,r)),i[r].pr_next_slide.find("rs-bgvideo").each(function(t){if(a&&!i[r].fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var o=e(this);i.resetVideo(o,r,!1,!0),punchgs.TweenMax.fromTo(o,.25,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:.05,onComplete:function(){i.animcompleted&&i.animcompleted(o,r)}})}),i[r].pr_active_bg.find("rs-bgvideo").each(function(t){if(a&&!i[r].fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var o=e(this);i.stopVideo&&(i.resetVideo(o,r),i.stopVideo(o,r)),punchgs.TweenMax.to(o,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:.2})});var o={slider:r,slideIndex:parseInt(i[r].pr_active_key,0)+1,slideLIIndex:i[r].pr_active_key,slide:i[r].pr_next_slide,currentslide:i[r].pr_next_slide,prevSlideIndex:i[r].pr_lastshown_key!==t&&parseInt(i[r].pr_lastshown_key,0)+1,prevSlideLIIndex:i[r].pr_lastshown_key!==t&&parseInt(i[r].pr_lastshown_key,0),prevSlide:i[r].pr_lastshown_key!==t&&i[r].slides[i[r].pr_lastshown_key]};if(i[r].c.trigger("revolution.slide.onchange",o),i[r].c.trigger("revolution.slide.onafterswap",o),i[r].pr_lastshown_key=i[r].pr_active_key,i[r].startWithSlide!==t&&"done"!==i[r].startWithSlide&&"carousel"===i[r].sliderType){for(var s=i[r].startWithSlide,n=0;n<=i[r].slides.length-1;n++)i[r].slides[n]!==t&&i[r].slides[n][0]!==t&&i.gA(i[r].slides[n][0],"originalindex")===i[r].startWithSlide&&(s=n);0!==s&&i.callingNewSlide(r,s),i[r].startWithSlide="done"}i[r].duringslidechange=!1,i[r].pr_active_slide.length>0&&0!=i.gA(i[r].pr_active_slide[0],"hal")&&i.gA(i[r].pr_active_slide[0],"hal")<=i.gA(i[r].pr_active_slide[0],"sofacounter")&&i[r].c.revremoveslide(i[r].pr_active_slide.index());var l=i[r].pr_processing_key||i[r].pr_active_key||0;i[r].rowzones!=t&&(l=l>i[r].rowzones.length?i[r].rowzones.length:l),i[r].rowzones!=t&&i[r].rowzones.length>0&&i[r].rowzones[l]!=t&&l>=0&&l<=i[r].rowzones.length&&i[r].rowzones[l].length>0&&i.setSize(r),delete i[r].sc_indicator,delete i[r].sc_indicator_dir,i[r].firstLetItFree===t&&(i.scrollHandling&&i.scrollHandling(r,!0),i[r].firstLetItFree=!0)}},j=function(r){i[r].loop=0,i[r].stopAtSlide!=t&&i[r].stopAtSlide>-1?i[r].lastslidetoshow=i[r].stopAtSlide:i[r].lastslidetoshow=999,i[r].stopLoop=!1,0==i[r].looptogo&&(i[r].stopLoop=!0);var o=i[r].c.find("rs-progress");i[r].c.on("stoptimer",function(){var t=e(this).find("rs-progress");t[0].tween.pause(),i[r].disableProgressBar&&t.css({visibility:"hidden"}),i[r].sliderstatus="paused",i.unToggleState(i[r].slidertoggledby)}),i[r].c.on("starttimer",function(){i[r].forcepaused||(1!=i[r].conthover&&1!=i[r].stopByVideo&&i[r].width>i[r].hideSliderAtLimit&&1!=i[r].tonpause&&1!=i[r].overnav&&1!=i[r].ssop&&(1===i[r].noloopanymore||i[r].viewPort.enable&&!i[r].inviewport||(o.css({visibility:"visible"}),o[0].tween.resume(),i[r].sliderstatus="playing")),i[r].disableProgressBar&&o.css({visibility:"hidden"}),i.toggleState(i[r].slidertoggledby))}),i[r].c.on("restarttimer",function(){if(!i[r].forcepaused){var t=e(this).find("rs-progress");if(i[r].mouseoncontainer&&"on"==i[r].navigation.onHoverStop&&!a)return!1;1===i[r].noloopanymore||i[r].viewPort.enable&&!i[r].inviewport||1==i[r].ssop||(t.css({visibility:"visible"}),t[0].tween.kill(),t[0].tween=punchgs.TweenMax.fromTo(t,i[r].duration/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}),i[r].sliderstatus="playing"),i[r].disableProgressBar&&t.css({visibility:"hidden"}),i.toggleState(i[r].slidertoggledby)}}),i[r].c.on("nulltimer",function(){o[0].tween.kill(),o[0].tween=punchgs.TweenMax.fromTo(o,i[r].duration/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}),o[0].tween.pause(0),i[r].disableProgressBar&&o.css({visibility:"hidden"}),i[r].sliderstatus="paused"});var s=function(){0==e("body").find(i[r].c).length&&(!function(t){i[t].c.children().each(function(){try{e(this).die("click")}catch(e){}try{e(this).die("mouseenter")}catch(e){}try{e(this).die("mouseleave")}catch(e){}try{e(this).unbind("hover")}catch(e){}});try{i[t].c.die("click","mouseenter","mouseleave")}catch(e){}clearInterval(i[t].cdint),i[t].c=null}(r),clearInterval(i[r].cdint)),i[r].c.trigger("revolution.slide.slideatend"),1==i[r].c.data("conthoverchanged")&&(i[r].conthover=i[r].c.data("conthover"),i[r].c.data("conthoverchanged",0)),i.callingNewSlide(r,1)};o[0].tween=punchgs.TweenMax.fromTo(o,i[r].duration/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}),i[r].slideamount>1&&(0!=i[r].stopAfterLoops||1!=i[r].stopAtSlide)?i[r].c.trigger("starttimer"):(i[r].noloopanymore=1,i[r].c.trigger("nulltimer")),i[r].c.on("tp-mouseenter",function(){i[r].mouseoncontainer=!0,1!=i[r].navigation.onHoverStop||a||(i[r].c.trigger("stoptimer"),i[r].c.trigger("revolution.slide.onpause"))}),i[r].c.on("tp-mouseleft",function(){i[r].mouseoncontainer=!1,1!=i[r].c.data("conthover")&&1==i[r].navigation.onHoverStop&&(1==i[r].viewPort.enable&&i[r].inviewport||0==i[r].viewPort.enable)&&(i[r].c.trigger("revolution.slide.onresume"),i[r].c.trigger("starttimer"))})},Q=function(){e(".rev_redraw_on_blurfocus").each(function(){var e=this.id;if(i[e]==t||i[e].c==t||0===i[e].c.length)return!1;1!=i[e].windowfocused&&(i[e].windowfocused=!0,punchgs.TweenMax.delayedCall(.3,function(){i[e].fallbacks.nextSlideOnWindowFocus&&i[e].c.revnext(),i[e].c.revredraw(),"playing"==i[e].lastsliderstatus&&i[e].c.revresume(),i[e].c.trigger("revolution.slide.tabfocused")}))})},H=function(){document.hasFocus()||e(".rev_redraw_on_blurfocus").each(function(){i[this.id].windowfocused=!1,i[this.id].lastsliderstatus=i[this.id].sliderstatus,i[this.id].c.revpause(),i[this.id].pr_next_bg!==t&&i[this.id].pr_next_bg.data("panzoom")!==t&&i.stopPanZoom(i[this.id].pr_next_bg,i[this.id]),i[this.id].pr_active_bg!==t&&i[this.id].pr_active_bg.data("panzoom")!==t&&i.stopPanZoom(i[this.id].pr_active_bg,i[this.id]),i[this.id].c.trigger("revolution.slide.tabblured")})},N=function(){var i=document.documentMode===t,a=window.chrome;1!==e("body").data("revslider_focus_blur_listener")&&(e("body").data("revslider_focus_blur_listener",1),i&&!a?e(window).on("focusin",function(){Q()}).on("focusout",function(){H()}):window.addEventListener?(window.addEventListener("focus",function(e){Q()},{capture:!1,passive:!0}),window.addEventListener("blur",function(e){H()},{capture:!1,passive:!0})):(window.attachEvent("focus",function(e){Q()}),window.attachEvent("blur",function(e){H()})))},B=function(e){for(var t,i=[],a=window.location.href.slice(window.location.href.indexOf(e)+1).split("_"),r=0;r<a.length;r++)a[r]=a[r].replace("%3D","="),t=a[r].split("="),i.push(t[0]),i[t[0]]=t[1];return i},D=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},W=function(i){return function(i){for(var a in i.minHeight=i.minHeight!==t?"none"===i.minHeight||"0"===i.minHeight||"0px"===i.minHeight||""==i.minHeight||" "==i.minHeight?0:parseInt(i.minHeight,0):0,i.maxHeight="none"===i.maxHeight||"0"===i.maxHeight?0:parseInt(i.maxHeight,0),i.carousel.maxVisibleItems=i.carousel.maxVisibleItems<1?999:i.carousel.maxVisibleItems,i.carousel.vertical_align="top"===i.carousel.vertical_align?"0%":"bottom"===i.carousel.vertical_align?"100%":"50%",i.carousel.space=parseInt(i.carousel.space,0),i.carousel.maxOpacity=parseInt(i.carousel.maxOpacity,0),i.carousel.maxRotation=parseInt(i.carousel.maxRotation,0),i.carousel.minScale=parseInt(i.carousel.minScale,0),i.carousel.speed=parseInt(i.carousel.speed,0),i.navigation.maintypes=["arrows","tabs","thumbnails","bullets"],i.navigation.maintypes)i.navigation.maintypes.hasOwnProperty(a)&&i.navigation[i.navigation.maintypes[a]]!==t&&(i.navigation[i.navigation.maintypes[a]].animDelay=parseInt(i.navigation[i.navigation.maintypes[a]].animDelay,0)/1e3,i.navigation[i.navigation.maintypes[a]].animSpeed=parseInt(i.navigation[i.navigation.maintypes[a]].animSpeed,0)/1e3);if(e.isNumeric(i.scrolleffect.tilt)||-1!==i.scrolleffect.tilt.indexOf("%")&&(i.scrolleffect.tilt=parseInt(i.scrolleffect.tilt)),i.scrolleffect.tilt=i.scrolleffect.tilt/100,i.navigation.thumbnails.position="outer-horizontal"==i.navigation.thumbnails.position?"bottom"==i.navigation.thumbnails.v_align?"outer-bottom":"outer-top":"outer-vertical"==i.navigation.thumbnails.position?"left"==i.navigation.thumbnails.h_align?"outer-left":"outer-right":i.navigation.thumbnails.position,i.navigation.tabs.position="outer-horizontal"==i.navigation.tabs.position?"bottom"==i.navigation.tabs.v_align?"outer-bottom":"outer-top":"outer-vertical"==i.navigation.tabs.position?"left"==i.navigation.tabs.h_align?"outer-left":"outer-right":i.navigation.tabs.position,i.sbtimeline.speed=parseInt(i.sbtimeline.speed,0)/1e3||.5,!0===i.sbtimeline.set&&!0===i.sbtimeline.fixed&&"auto"!==i.sliderLayout?(i.sbtimeline.fixStart=parseInt(i.sbtimeline.fixStart),i.sbtimeline.fixEnd=parseInt(i.sbtimeline.fixEnd)):i.sbtimeline.fixed=!1,i.startDelay=parseInt(i.startDelay,0)||0,i.navigation!==t&&i.navigation.arrows!=t&&i.navigation.arrows.hide_under!=t&&(i.navigation.arrows.hide_under=parseInt(i.navigation.arrows.hide_under)),i.navigation!==t&&i.navigation.bullets!=t&&i.navigation.bullets.hide_under!=t&&(i.navigation.bullets.hide_under=parseInt(i.navigation.bullets.hide_under)),i.navigation!==t&&i.navigation.thumbnails!=t&&i.navigation.thumbnails.hide_under!=t&&(i.navigation.thumbnails.hide_under=parseInt(i.navigation.thumbnails.hide_under)),i.navigation!==t&&i.navigation.tabs!=t&&i.navigation.tabs.hide_under!=t&&(i.navigation.tabs.hide_under=parseInt(i.navigation.tabs.hide_under)),i.navigation!==t&&i.navigation.arrows!=t&&i.navigation.arrows.hide_over!=t&&(i.navigation.arrows.hide_over=parseInt(i.navigation.arrows.hide_over)),i.navigation!==t&&i.navigation.bullets!=t&&i.navigation.bullets.hide_over!=t&&(i.navigation.bullets.hide_over=parseInt(i.navigation.bullets.hide_over)),i.navigation!==t&&i.navigation.thumbnails!=t&&i.navigation.thumbnails.hide_over!=t&&(i.navigation.thumbnails.hide_over=parseInt(i.navigation.thumbnails.hide_over)),i.navigation!==t&&i.navigation.tabs!=t&&i.navigation.tabs.hide_over!=t&&(i.navigation.tabs.hide_over=parseInt(i.navigation.tabs.hide_over)),i.lazyloaddata!==t&&i.lazyloaddata.length>0&&i.lazyloaddata.indexOf("-")>0){var r=i.lazyloaddata.split("-");for(i.lazyloaddata=r[0],a=1;a<r.length;a++)i.lazyloaddata+=D(r[a])}return i.duration=parseInt(i.duration),i}(e.extend(!0,{sliderType:"standard",sliderLayout:"auto",dottedOverlay:"none",duration:9e3,modal:{useAsModal:!1,cover:!0,coverColor:"rgba(0,0,0,0.5)",horizontal:"center",vertical:"middle"},navigation:{keyboardNavigation:!1,keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:!0,mouseScrollReverse:"default",touch:{touchenabled:!1,touchOnDesktop:!1,swipe_treshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:!1},arrows:{style:"",enable:!1,hide_onmobile:!1,hide_under:0,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_over:9999,tmp:"",rtl:!1,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0,container:"slider"},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0,container:"slider"}},bullets:{enable:!1,hide_onmobile:!1,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",h_align:"center",v_align:"bottom",space:5,h_offset:0,v_offset:20,tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',container:"slider",rtl:!1,style:""},thumbnails:{container:"slider",rtl:!1,style:"",enable:!1,width:100,height:50,min_width:100,wrapper_padding:2,wrapper_color:"transparent",tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,position:"inner",space:2,h_align:"center",v_align:"bottom",h_offset:0,v_offset:20},tabs:{container:"slider",rtl:!1,style:"",enable:!1,width:100,min_width:100,height:50,wrapper_padding:10,wrapper_color:"transparent",tmp:'<span class="tp-tab-image"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!1,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,space:0,position:"inner",h_align:"center",v_align:"bottom",h_offset:0,v_offset:20}},responsiveLevels:4064,visibilityLevels:[2048,1024,778,480],gridwidth:960,gridheight:500,minHeight:0,maxHeight:0,keepBPHeight:!1,forceOverflow:!1,fixedOnTop:!1,autoHeight:!1,gridEQModule:!1,disableForceFullWidth:!1,fullScreenOffsetContainer:"",fullScreenOffset:"0",hideLayerAtLimit:0,hideAllLayerAtLimit:0,hideSliderAtLimit:0,disableProgressBar:!1,stopAtSlide:-1,stopAfterLoops:0,shadow:0,startDelay:0,lazyType:"smart",spinner:"off",shuffle:!1,viewPort:{enable:!1,outof:"wait",visible_area:"200px",presize:!1},fallbacks:{isJoomla:!1,panZoomDisableOnMobile:!1,simplifyAll:!0,nextSlideOnWindowFocus:!1,disableFocusListener:!1,ignoreHeightChanges:"off",ignoreHeightChangesSize:0,allowHTML5AutoPlayOnAndroid:!0},parallax:{type:"off",levels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],origo:"enterpoint",disable_onmobile:!1,ddd_shadow:!1,ddd_bgfreeze:!1,ddd_overflow:"visible",ddd_layer_overflow:"visible",ddd_z_correction:65,speed:400,speedbg:0,speedls:0},scrolleffect:{set:!1,fade:!1,blur:!1,scale:!1,grayscale:!1,maxblur:10,layers:!1,slide:!1,direction:"both",multiplicator:1.35,multiplicator_layers:.5,tilt:30,mobile:!1},sbtimeline:{set:!1,fixed:!1,fixStart:0,fixEnd:0,layers:!1,slide:!1,ease:"Linear.easeNone",speed:500},carousel:{easing:punchgs.Power3.easeInOut,speed:800,showLayersAllTime:!1,horizontal_align:"center",vertical_align:"center",infinity:!1,space:0,maxVisibleItems:3,stretch:!1,fadeout:!0,maxRotation:0,maxOpacity:100,minScale:0,vary_fade:!1,vary_rotation:!1,vary_scale:!1,border_radius:"0px",padding_top:0,padding_bottom:0},extensions:"extensions/",extensions_suffix:".min.js",stopLoop:!1,waitForInit:!1},i))}}(jQuery),function($,undefined){"use strict";var _R=jQuery.fn.revolution;jQuery.extend(!0,_R,{checkActions:function(e,t){e===undefined?moduleEnterLeaveActions(t):checkActions_intern(e,t)}});var moduleEnterLeaveActions=function(e){!_R[e].moduleActionsPrepared&&_R[e].c[0].getElementsByClassName("rs-on-sh").length>0&&(_R[e].c.on("tp-mouseenter",function(){_R[e].mouseoncontainer=!0;var t,i=_R[e].pr_next_key!==undefined?_R[e].pr_next_key:_R[e].pr_processing_key!==undefined?_R[e].pr_processing_key:_R[e].pr_active_key!==undefined?_R[e].pr_active_key:_R[e].pr_next_key;if("none"!==i&&i!==undefined){if((i=_R.gA(_R[e].slides[i],"key"))!==undefined&&_R[e].layers[i])for(t in _R[e].layers[i])_R[e].layers[i][t].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[e].layers[i][t]),frame:"frame_1",mode:"trigger",id:e});for(t in _R[e].layers.static)_R[e].layers.static[t].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[e].layers.static[t]),frame:"frame_1",mode:"trigger",id:e})}}),_R[e].c.on("tp-mouseleft",function(){_R[e].mouseoncontainer=!0;var t,i=_R[e].pr_next_key!==undefined?_R[e].pr_next_key:_R[e].pr_processing_key!==undefined?_R[e].pr_processing_key:_R[e].pr_active_key!==undefined?_R[e].pr_active_key:_R[e].pr_next_key;if("none"!==i&&i!==undefined){if((i=_R.gA(_R[e].slides[i],"key"))!==undefined&&_R[e].layers[i])for(t in _R[e].layers[i])_R[e].layers[i][t].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[e].layers[i][t]),frame:"frame_999",mode:"trigger",id:e});for(t in _R[e].layers.static)_R[e].layers.static[t].className.indexOf("rs-on-sh")>=0&&_R.renderLayerAnimation({layer:jQuery(_R[e].layers.static[t]),frame:"frame_999",mode:"trigger",id:e})}})),_R[e].moduleActionsPrepared=!0},checkActions_intern=function(layer,id){var actions=_R.gA(layer[0],"actions"),_L=layer.data();for(var ei in actions=actions.split("||"),layer.addClass("rs-waction"),_L.events=_L.events===undefined?[]:_L.events,actions)if(actions.hasOwnProperty(ei)){var event=getEventParams(actions[ei].split(";"));_L.events.push(event),_R[id].fullscreen_esclistener||"exitfullscreen"!=event.action&&"togglefullscreen"!=event.action||(jQuery(document).keyup(function(e){27==e.keyCode&&jQuery("#rs-go-fullscreen").length>0&&layer.trigger(event.on)}),_R[id].fullscreen_esclistener=!0);var targetlayer="backgroundvideo"==event.layer?jQuery("rs-bgvideo"):"firstvideo"==event.layer?jQuery("rs-slide").find(".rs-layer-video"):jQuery("#"+event.layer);switch(-1!=jQuery.inArray(event.action,["toggleslider","toggle_mute_video","toggle_global_mute_video","togglefullscreen"])&&(_L._togglelisteners=!0),event.action){case"togglevideo":jQuery.each(targetlayer,function(){updateToggleByList(jQuery(this),"videotoggledby",layer[0].id)});break;case"togglelayer":jQuery.each(targetlayer,function(){updateToggleByList(jQuery(this),"layertoggledby",layer[0].id),jQuery(this).data("triggered_startstatus",event.togglestate)});break;case"toggle_global_mute_video":case"toggle_mute_video":jQuery.each(targetlayer,function(){updateToggleByList(jQuery(this),"videomutetoggledby",layer[0].id)});break;case"toggleslider":_R[id].slidertoggledby==undefined&&(_R[id].slidertoggledby=[]),_R[id].slidertoggledby.push(layer[0].id);break;case"togglefullscreen":_R[id].fullscreentoggledby==undefined&&(_R[id].fullscreentoggledby=[]),_R[id].fullscreentoggledby.push(layer[0].id)}}_R[id].actionsPrepared=!0,layer.on("click mouseenter mouseleave",function(e){for(var i in _L.events)if(_L.events.hasOwnProperty(i)&&_L.events[i].on===e.type){var event=_L.events[i];if("click"===event.on&&layer.hasClass("tp-temporarydisabled"))return!1;var targetlayer="backgroundvideo"==event.layer?jQuery(_R[id].slides[_R[id].pr_active_key]).find("rs-sbg-wrap rs-bgvideo"):"firstvideo"==event.layer?jQuery(_R[id].slides[_R[id].pr_active_key]).find(".rs-layer-video").first():jQuery("#"+event.layer),tex=targetlayer.length>0;switch(event.action){case"nextframe":case"prevframe":case"gotoframe":case"togglelayer":case"toggleframes":case"startlayer":case"stoplayer":if(targetlayer[0]===undefined)continue;var _=_R[id]._L[targetlayer[0].id],frame=event.frame,tou="triggerdelay";if("click"===e.type&&_.clicked_time_stamp!==undefined&&(new Date).getTime()-_.clicked_time_stamp<300)return;if("mouseenter"===e.type&&_.mouseentered_time_stamp!==undefined&&(new Date).getTime()-_.mouseentered_time_stamp<300)return;if("mouseleave"===e.type&&_.mouseleaveed_time_stamp!==undefined&&(new Date).getTime()-_.mouseleaveed_time_stamp<300)return;if(clearTimeout(_.triggerdelayIn),clearTimeout(_.triggerdelayOut),clearTimeout(_.triggerdelay),"click"===e.type&&(_.clicked_time_stamp=(new Date).getTime()),"mouseenter"===e.type&&(_.mouseentered_time_stamp=(new Date).getTime()),"mouseleave"===e.type&&(_.mouseleaveed_time_stamp=(new Date).getTime()),"nextframe"===event.action||"prevframe"===event.action){_.forda=_.forda===undefined?getFordWithAction(_):_.forda;var inx=jQuery.inArray(_.currentframe,_.ford);for("nextframe"===event.action&&inx++,"prevframe"===event.action&&inx--;"skip"!==_.forda[inx]&&inx>0&&inx<_.forda.length-1;)"nextframe"===event.action&&inx++,"prevframe"===event.action&&inx--,inx=Math.min(Math.max(0,inx),_.forda.length-1);frame=_.ford[inx]}jQuery.inArray(event.action,["toggleframes","togglelayer","startlayer","stoplayer"])>=0&&(_.triggeredstate="startlayer"===event.action||"togglelayer"===event.action&&"frame_1"!==_.currentframe||"toggleframes"===event.action&&_.currentframe!==event.frameN,frame=_.triggeredstate?"toggleframes"===event.action?event.frameN:"frame_1":"toggleframes"===event.action?event.frameM:"frame_999",tou=_.triggeredstate?"triggerdelayIn":"triggerdelayOut",_.triggeredstate?_R.toggleState(_.layertoggledby):(_R.stopVideo&&_R.stopVideo(targetlayer,id),_R.unToggleState(_.layertoggledby)));var pars={layer:targetlayer,frame:frame,mode:"trigger",id:id};!0===event.children&&(pars.updateChildren=!0,pars.fastforward=!0),_R.renderLayerAnimation&&(clearTimeout(_[tou]),_[tou]=setTimeout(function(e){_R.renderLayerAnimation(e)},1e3*event.delay,pars));break;case"playvideo":tex&&_R.playVideo(targetlayer,id);break;case"stopvideo":tex&&_R.stopVideo&&_R.stopVideo(targetlayer,id);break;case"togglevideo":tex&&(_R.isVideoPlaying(targetlayer,id)?_R.stopVideo&&_R.stopVideo(targetlayer,id):_R.playVideo(targetlayer,id));break;case"mutevideo":tex&&_R.Mute(targetlayer,id,!0);break;case"unmutevideo":tex&&_R.Mute&&_R.Mute(targetlayer,id,!1);break;case"toggle_mute_video":tex&&(_R.Mute(targetlayer,id)?_R.Mute(targetlayer,id,!1):_R.Mute&&_R.Mute(targetlayer,id,!0));break;case"toggle_global_mute_video":var pvl=_R[id].playingvideos!=undefined&&_R[id].playingvideos.length>0;pvl&&(_R[id].globalmute?jQuery.each(_R[id].playingvideos,function(e,t){_R.Mute&&_R.Mute(t,id,!1)}):jQuery.each(_R[id].playingvideos,function(e,t){_R.Mute&&_R.Mute(t,id,!0)})),_R[id].globalmute=!_R[id].globalmute;break;default:punchgs.TweenLite.delayedCall(event.delay,function(targetlayer,id,event,layer){switch(event.action){case"openmodal":if(event.modalslide=event.modalslide===undefined?0:event.modalslide,window.RS_60_MODALS===undefined||-1==jQuery.inArray(event.modal,window.RS_60_MODALS)){_R.showModalCover(id,event,"show");var data={action:"revslider_ajax_call_front",client_action:"get_slider_html",token:_R[id].ajaxNonce,alias:event.modal,usage:"modal"};jQuery.ajax({type:"post",url:_R[id].ajaxUrl,dataType:"json",data:data,success:function(e,t,i){1==e.success&&(jQuery("body").append(e.data),setTimeout(function(){_R.showModalCover(id,event,"hide"),jQuery(document).trigger("RS_OPENMODAL_"+event.modal,event.modalslide)},49))},error:function(e){console.log("Modal Can not be Loaded"),console.log(e)}})}else jQuery(document).trigger("RS_OPENMODAL_"+event.modal,event.modalslide);break;case"closemodal":_R.revModal(id,{mode:"close"});break;case"callback":eval(event.callback);break;case"simplelink":window.open(event.url,event.target);break;case"simulateclick":targetlayer.length>0&&targetlayer.click();break;case"toggleclass":targetlayer.length>0&&targetlayer.toggleClass(event.classname);break;case"scrollbelow":case"scrollto":layer.addClass("tp-scrollbelowslider");var doc=jQuery(document),off="scrollbelow"===event.action?(getOffContH(_R[id].fullScreenOffsetContainer)||0)-(parseInt(event.offset,0)||0)||0:0-(parseInt(event.offset,0)||0),c="scrollbelow"===event.action?_R[id].c:jQuery("#"+event.id),ctop=c.length>0?c.offset().top:0,sobj={_y:window.pageYOffset!==document.documentElement.scrollTop?0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop:window.pageYOffset};ctop+="scrollbelow"===event.action?jQuery(_R[id].slides[0]).height():0,punchgs.TweenLite.to(sobj,event.speed/1e3,{_y:ctop-off,ease:event.ease,onUpdate:function(){doc.scrollTop(sobj._y)}});break;case"jumptoslide":switch(event.slide.toLowerCase()){case"+1":case"next":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=0,_R.callingNewSlide(id,1,"carousel"===_R[id].sliderType);break;case"previous":case"prev":case"-1":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=1,_R.callingNewSlide(id,-1,"carousel"===_R[id].sliderType);break;case"first":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=1,_R.callingNewSlide(id,0,"carousel"===_R[id].sliderType);break;case"last":_R[id].sc_indicator="arrow",_R[id].sc_indicator_dir=0,_R.callingNewSlide(id,_R[id].slideamount-1,"carousel"===_R[id].sliderType);break;default:var ts=jQuery.isNumeric(event.slide)?parseInt(event.slide,0):event.slide;_R.callingNewSlide(id,ts,"carousel"===_R[id].sliderType)}break;case"toggleslider":_R[id].noloopanymore=0,"playing"==_R[id].sliderstatus?(_R[id].c.revpause(),_R[id].forcepaused=!0,_R.unToggleState(_R[id].slidertoggledby)):(_R[id].forcepaused=!1,_R[id].c.revresume(),_R.toggleState(_R[id].slidertoggledby));break;case"pauseslider":_R[id].c.revpause(),_R.unToggleState(_R[id].slidertoggledby);break;case"playslider":_R[id].noloopanymore=0,_R[id].c.revresume(),_R.toggleState(_R[id].slidertoggledby);break;case"gofullscreen":case"exitfullscreen":case"togglefullscreen":var gf;jQuery(".rs-go-fullscreen").length>0&&("togglefullscreen"==event.action||"exitfullscreen"==event.action)?(jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen"),gf=_R[id].c.closest("rs-fullwidth-wrap").length>0?_R[id].c.closest("rs-fullwidth-wrap"):_R[id].c.closest("rs-module-wrap"),_R[id].minHeight=_R[id].oldminheight,_R[id].infullscreenmode=!1,_R[id].c.revredraw(),jQuery(window).trigger("resize"),_R.unToggleState(_R[id].fullscreentoggledby)):0!=jQuery(".rs-go-fullscreen").length||"togglefullscreen"!=event.action&&"gofullscreen"!=event.action||(gf=_R[id].c.closest("rs-fullwidth-wrap").length>0?_R[id].c.closest("rs-fullwidth-wrap"):_R[id].c.closest("rs-module-wrap"),gf.addClass("rs-go-fullscreen"),_R[id].oldminheight=_R[id].minHeight,_R[id].minHeight=jQuery(window).height(),_R[id].infullscreenmode=!0,_R[id].c.revredraw(),jQuery(window).trigger("resize"),_R.toggleState(_R[id].fullscreentoggledby));break;default:_R[id].c.trigger("layeraction",[event.action,layer,event])}},[targetlayer,id,event,layer])}}})};function getFordWithAction(e){var t=[];for(var i in e.ford)e.frames[e.ford[i]].timeline.waitoncall?t.push(e.ford[i]):t.push("skip");return t}function updateToggleByList(e,t,i){var a=e.data(t);a===undefined&&(a=[]),a.push(i),e.data(t,a)}function getEventParams(e){var t={on:"click",delay:0,ease:"Power2.easeOut",speed:400};for(var i in e)if(e.hasOwnProperty(i)){var a=e[i].split(":");switch(a[0]){case"modal":t.modal=a[1];break;case"ms":t.modalslide=a[1];break;case"m":t.frameM=a[1];break;case"n":t.frameN=a[1];break;case"o":t.on="click"===a[1]||"c"===a[1]?"click":"ml"===a[1]||"mouseleave"===a[1]?"mouseleave":"mouseenter"===a[1]||"me"===a[1]?"mouseenter":a[1];break;case"d":t.delay=parseInt(a[1],0)/1e3,t.delay="NaN"===t.delay||isNaN(t.delay)?0:t.delay;break;case"a":t.action=a[1];break;case"f":t.frame=a[1];break;case"slide":t.slide=a[1];break;case"layer":t.layer=a[1];break;case"sp":t.speed=parseInt(a[1],0);break;case"e":t.ease=a[1];break;case"ls":t.togglestate=a[1];break;case"offset":t.offset=a[1];break;case"call":t.callback=a[1];break;case"url":t.url="";for(var r=1;r<a.length;r++)t.url+=a[r]+(r===a.length-1?"":":");break;case"target":t.target=a[1];break;case"class":t.classname=a[1];break;case"ch":t.children="true"==a[1]||1==a[1]||"t"==a[1];break;default:a[0].length>0&&""!==a[0]&&(t[a[0]]=a[1])}}return t}var getOffContH=function(e){if(e==undefined)return 0;if(e.split(",").length>1){var t=e.split(","),i=0;return t&&jQuery.each(t,function(e,t){jQuery(t).length>0&&(i+=jQuery(t).outerHeight(!0))}),i}return jQuery(e).height()}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution;jQuery.extend(!0,t,{prepareCarousel:function(e,o,n,l){void 0!==e&&(n=t[e].carousel.lastdirection=a(n,t[e].carousel.lastdirection),i(e),t[e].carousel.slide_offset_target=s(e),void 0!==l?r(e,n,!1,0):null==o?t.carouselToEvalPosition(e,n):r(e,n,!1))},carouselToEvalPosition:function(e,i){var o=t[e].carousel;i=o.lastdirection=a(i,o.lastdirection);var s="center"===o.horizontal_align?(o.wrapwidth/2-o.slide_width/2-o.slide_globaloffset)/o.slide_width:(0-o.slide_globaloffset)/o.slide_width,n=t.simp(s,t[e].slideamount,!1),l=n-Math.floor(n),d=0,c=-1*(Math.ceil(n)-n),p=-1*(Math.floor(n)-n);d=l>=.3&&"left"===i||l>=.7&&"right"===i?c:l<.3&&"left"===i||l<.7&&"right"===i?p:d,d=o.infinity?d:n<0?n:s>t[e].slideamount-1?s-(t[e].slideamount-1):d,o.slide_offset_target=d*o.slide_width,o.slide_offset_target!==o.slide_offset_targetCACHE&&(0!==Math.abs(o.slide_offset_target)?r(e,i,!0):t.organiseCarousel(e,i),o.slide_offset_targetCACHE=o.slide_offset_target)},organiseCarousel:function(e,i,a,r){i=void 0===i||"down"==i||"up"==i||null===i||jQuery.isEmptyObject(i)?"left":i;for(var o=t[e].carousel,s=[],n=t[e].slides.length,l=0;l<n;l++){var d=l*o.slide_width+o.slide_offset;o.infinity&&(d=(d=d>o.wrapwidth-o.inneroffset&&"right"==i?o.slide_offset-(t[e].slides.length-l)*o.slide_width:d)<0-o.inneroffset-o.slide_width&&"left"==i?d+o.maxwidth:d),s[l]=d}var c=999,p=0,u=t[e].ulw;t[e].slides&&jQuery.each(t[e].slides,function(r,l){var d=s[r],h={};o.infinity&&(d=(d=d>o.wrapwidth-o.inneroffset+o.slide_width&&"left"===i?s[0]-(n-r)*o.slide_width:d)<0-o.inneroffset-3*o.slide_width?"left"==i?d+o.maxwidth:"right"===i?s[n-1]+(r+1)*o.slide_width:d:d,(u=u>d?d:u)>0&&d>o.wrapwidth&&(d=o.slide_offset-(t[e].slides.length-r)*o.slide_width)),h.left=d+o.inneroffset;var g="center"===o.horizontal_align?(Math.abs(o.wrapwidth/2)-(h.left+o.slide_width/2))/o.slide_width:(o.inneroffset-h.left)/o.slide_width,f="center"===o.horizontal_align?2:1;if((a&&Math.abs(g)<c||0===g)&&(c=Math.abs(g),o.focused=r),h.width=o.slide_width,h.x=0,h.transformPerspective=1200,h.transformOrigin="50% "+o.vertical_align,o.fadeout)if(o.vary_fade)h.autoAlpha=1-Math.abs(o.maxOpacity/100/Math.ceil(o.maxVisibleItems/f)*g);else switch(o.horizontal_align){case"center":h.autoAlpha=Math.abs(g)<Math.ceil(o.maxVisibleItems/f-1)?1:1-(Math.abs(g)-Math.floor(Math.abs(g)));break;case"left":h.autoAlpha=g<1&&g>0?1-g:Math.abs(g)>o.maxVisibleItems-1?1-(Math.abs(g)-(o.maxVisibleItems-1)):1;break;case"right":h.autoAlpha=g>-1&&g<0?1-Math.abs(g):g>o.maxVisibleItems-1?1-(Math.abs(g)-(o.maxVisibleItems-1)):1}else h.autoAlpha=Math.abs(g)<Math.ceil(o.maxVisibleItems/f)?1:0;void 0!==o.minScale&&o.minScale>0&&(o.vary_scale?h.scale=1-Math.abs(o.minScale/100/Math.ceil(o.maxVisibleItems/f)*g):h.scale=g>=1||g<=-1?1-o.minScale/100:(100-o.minScale*Math.abs(g))/100,p=(p=g*(h.width-h.width*h.scale)/2)>300?300:p),void 0!==o.maxRotation&&0!=Math.abs(o.maxRotation)&&(o.vary_rotation?(h.rotationY=Math.abs(o.maxRotation)-Math.abs((1-Math.abs(1/Math.ceil(o.maxVisibleItems/f)*g))*o.maxRotation),h.autoAlpha=Math.abs(h.rotationY)>90?0:h.autoAlpha):h.rotationY=g>=1||g<=-1?o.maxRotation:Math.abs(g)*o.maxRotation,h.rotationY=g<0?-1*h.rotationY:h.rotationY),h.x=-1*o.space*g,h.left=Math.floor(h.left),h.x=Math.floor(h.x),void 0!==h.scale&&(h.x=h.x+p),h.zIndex=Math.round(100-Math.abs(5*g)),h.force3D=!0,h.transformStyle="3D"!=t[e].parallax.type&&"3d"!=t[e].parallax.type?"flat":"preserve-3d",punchgs.TweenLite.set(l,h)}),r&&(o.focused=void 0===o.focused?0:o.focused,o.oldfocused=void 0===o.oldfocused?0:o.oldfocused,t[e].pr_next_key=o.focused,o.focused!==o.oldfocused&&t.animateTheLayers&&(t.removeTheLayers(jQuery(t[e].slides[o.oldfocused]),e),t.animateTheLayers({slide:o.focused,id:e,mode:t[e].carousel.allLayersStarted?"rebuild":"start"})),o.oldfocused=o.focused,t[e].c.trigger("revolution.nextslide.waiting"))}});var i=function(e){void 0===t[e].bw&&t.setSize(e);var i=t[e].carousel,a=t.getHorizontalOffset(t[e].c,"left"),r=t.getHorizontalOffset(t[e].c,"right");void 0===i.wrap&&function(e){var i=t[e].carousel;i.infbackup=i.infinity,i.maxVisiblebackup=i.maxVisibleItems,i.slide_globaloffset="none",i.slide_offset=0,i.wrap=t[e].c.find("rs-carousel-wrap"),0!==i.maxRotation&&("3D"!==t[e].parallax.type&&"3d"!==t[e].parallax.type||punchgs.TweenLite.set(i.wrap,{perspective:"1600px",transformStyle:"preserve-3d"})),void 0!==i.border_radius&&parseInt(i.border_radius,0)>0&&punchgs.TweenLite.set(t[e].c.find("rs-slide"),{borderRadius:i.border_radius})}(e),i.slide_width=!0!==i.stretch?t[e].gridwidth[t[e].level]*(0===t[e].bw?1:t[e].bw):t[e].c.width(),i.slide_height=!0!==i.stretch?t[e].gridheight[t[e].level]*(0===t[e].bw?1:t[e].bw):t[e].c.height(),i.maxwidth=t[e].slideamount*i.slide_width,i.maxVisiblebackup>t[e].slides.length+1&&(i.maxVisibleItems=t[e].slides.length+2),i.wrapwidth=i.maxVisibleItems*i.slide_width+(i.maxVisibleItems-1)*i.space,i.wrapwidth="auto"!=t[e].sliderLayout?i.wrapwidth>t[e].c.width()?t[e].c.width():i.wrapwidth:i.wrapwidth>t[e].canvas.width()?t[e].canvas.width():i.wrapwidth,i.infinity=!(i.wrapwidth>=i.maxwidth)&&i.infbackup,i.wrapoffset="center"===i.horizontal_align?(t[e].c.width()-r-a-i.wrapwidth)/2:0,i.wrapoffset="auto"!=t[e].sliderLayout&&t[e].outernav?0:i.wrapoffset<a?a:i.wrapoffset;var o="3D"==t[e].parallax.type||"3d"==t[e].parallax.type?"visible":"hidden";"right"===i.horizontal_align?punchgs.TweenLite.set(i.wrap,{left:"auto",right:i.wrapoffset+"px",width:i.wrapwidth,overflow:o}):punchgs.TweenLite.set(i.wrap,{right:"auto",left:i.wrapoffset+"px",width:i.wrapwidth,overflow:o}),i.inneroffset="right"===i.horizontal_align?i.wrapwidth-i.slide_width:0,i.realoffset=Math.abs(i.wrap.position().left),i.windhalf=jQuery(window).width()/2},a=function(e,t){return null===e||jQuery.isEmptyObject(e)?t:void 0===e?"right":e},r=function(e,i,r,o){var s=t[e].carousel;i=s.lastdirection=a(i,s.lastdirection);var n={},l=r?punchgs.Power2.easeOut:s.easing;n.from=0,n.to=s.slide_offset_target,o=void 0===o?s.speed/1e3:o,0!==(o=r?o*(Math.abs(n.to)/s.wrapwidth):o)&&o<.1&&Math.abs(n.to)>25&&(o=.3),void 0!==s.positionanim&&s.positionanim.pause(),s.positionanim=punchgs.TweenLite.to(n,o,{from:n.to,onUpdate:function(){s.slide_offset=s.slide_globaloffset+n.from,s.slide_offset=t.simp(s.slide_offset,s.maxwidth),t.organiseCarousel(e,i,!1,!1)},onComplete:function(){s.slide_globaloffset=s.infinity?t.simp(s.slide_globaloffset+s.slide_offset_target,s.maxwidth):s.slide_globaloffset+s.slide_offset_target,s.slide_offset=t.simp(s.slide_offset,s.maxwidth),t.organiseCarousel(e,i,!1,!0),void 0!==s.focused&&r&&t.callingNewSlide(e,jQuery(t[e].slides[s.focused]).data("key"),!0),"carousel"!==t[e].sliderType||t[e].carousel.fadein||(punchgs.TweenLite.to(t[e].canvas,1,{scale:1,opacity:1}),t[e].carousel.fadein=!0),t[e].c.trigger("revolution.slide.carouselchange",{slider:e,slideIndex:parseInt(t[e].pr_active_key,0)+1,slideLIIndex:t[e].pr_active_key,slide:t[e].pr_next_slide,currentslide:t[e].pr_next_slide,prevSlideIndex:void 0!==t[e].pr_lastshown_key&&parseInt(t[e].pr_lastshown_key,0)+1,prevSlideLIIndex:void 0!==t[e].pr_lastshown_key&&parseInt(t[e].pr_lastshown_key,0),prevSlide:void 0!==t[e].pr_lastshown_key&&t[e].slides[t[e].pr_lastshown_key]})},ease:l})},o=function(e,t){return Math.abs(e)>Math.abs(t)?e>0?e-Math.abs(Math.floor(e/t)*t):e+Math.abs(Math.floor(e/t)*t):e},s=function(e){var i,a,r,s,n,l=0,d=t[e].carousel;if(void 0!==d.positionanim&&d.positionanim.kill(),"none"==d.slide_globaloffset)d.slide_globaloffset=l="center"===d.horizontal_align?d.wrapwidth/2-d.slide_width/2:0;else{d.slide_globaloffset=d.slide_offset,d.slide_offset=0;var c=t[e].pr_processing_key,p="center"===d.horizontal_align?(d.wrapwidth/2-d.slide_width/2-d.slide_globaloffset)/d.slide_width:(0-d.slide_globaloffset)/d.slide_width;p=t.simp(p,t[e].slideamount,!1),c=(c=c>=0?c:t[e].pr_active_key)>=0?c:0,l=d.infinity?(i=p,a=c,r=t[e].slideamount,n=a-r-i,s=o(s=a-i,r),n=o(n,r),-(Math.abs(s)>Math.abs(n)?n:s)):p-c,l*=d.slide_width}return l}}(jQuery),function(e){"use strict";var t=["chars","words","lines"],i=jQuery.fn.revolution;i.is_mobile(),i.is_android();jQuery.extend(!0,i,{checkLayerDimensions:function(e){var t=!1;for(var a in i[e.id].layers[e.skey])if(i[e.id].layers[e.skey].hasOwnProperty(a)&&!t){var r=i[e.id].layers[e.skey][a],o=i[e.id]._L[r.id];o.eow!==r.offsetWidth&&"true"!==i.gA(r,"vary-layer-dims")&&(t=!0),o.lastknownwidth=o.eow,o.lastknownheight=o.eoh}return t},initLayer:function(e){var t,a,r,o=e.id,s=e.skey;for(var n in i[o]._L=void 0===i[o]._L?{}:i[o]._L,i[o].layers[s])if(i[o].layers[s].hasOwnProperty(n)){var l="carousel"===i[o].sliderType?0:i[o].width/2-i[o].gridwidth[i[o].level]*i[o].bw/2,d=0,c=i[o].layers[s][n],h=jQuery(c),g=i.gA(c,"initialised")?i[o]._L[c.id]:h.data();if(void 0===i.gA(c,"initialised")){if(i.revCheckIDS(o,c),i[o]._L[c.id]=g,g.ford=void 0===g.ford?"frame_0;frame_1;frame_999":g.ford,g.ford=";"==g.ford[g.ford.length-1]?g.ford.substring(0,g.ford.length-1):g.ford,g.ford=g.ford.split(";"),void 0!==g.clip)for(t in g.clipPath={use:!1,origin:"l",type:"rectangle"},g.clip=g.clip.split(";"),g.clip)g.clip.hasOwnProperty(t)&&("u"==(a=g.clip[t].split(":"))[0]&&(g.clipPath.use="true"==a[1]),"o"==a[0]&&(g.clipPath.origin=a[1]),"t"==a[0]&&(g.clipPath.type=a[1]));if(g.frames=w(g,o),g.c=h,g.p=h.closest(".rs-parallax-wrap"),g.lp=h.closest("rs-loop-wrap"),g.m=h.closest("rs-mask-wrap"),g.triggercache=void 0===g.triggercache?"reset":g.triggercache,g.rsp_bd=void 0===g.rsp_bd?"column"===g.type||"row"===g.type?"off":"on":g.rsp_bd,g.rsp_o=void 0===g.rsp_o?"on":g.rsp_o,g.basealign=void 0===g.basealign?"grid":g.basealign,g.group="group"!==g.type&&h.closest("rs-group-wrap").length>0?"group":"column"!==g.type&&h.closest("rs-column").length>0?"column":"row"!==g.type&&h.closest("rs-row").length>0?"row":void 0,g._lig="group"===g.group?h.closest("rs-group"):"column"===g.group?h.closest("rs-column"):"row"===g.group?h.closest("rs-row"):void 0,g._ligid=void 0!==g._lig?g._lig[0].id:void 0,g._column="RS-COLUMN"===h[0].tagName?h.closest("rs-column-wrap"):"none",g._row="RS-COLUMN"===h[0].tagName&&h.closest("rs-row"),g._ingroup="group"===g.group,g._incolumn="column"===g.group,g._inrow="row"===g.group,(g._ingroup||g._incolumn)&&g._lig[0].className.indexOf("rs-sba")>=0&&(!1!==g.animationonscroll||void 0===g.frames.loop)&&!0!==g.animOnScrollForceDisable&&(g.animationonscroll=!0,h[0].className+=" rs-sba",i[o].sbas[s][c.id]=h[0]),g.animOnScrollRepeats=0,g._isgroup="RS-GROUP"===h[0].tagName,g.type=g.type||"none","row"===g.type&&void 0===g.cbreak&&(g.cbreak=2),g._isnotext=-1!==jQuery.inArray(g.type,["video","image","audio","shape"]),g._mediatag="html5"==g.audio?"audio":"video",g.img=h.find("img"),g.deepiframe=h[0].getElementsByTagName("iframe"),g.deepmedia=h[0].getElementsByTagName(g._mediatag),g.layertype="image"===g.type?"image":h[0].className.indexOf("rs-layer-video")>=0||h[0].className.indexOf("rs-layer-audio")>=0||g.deepiframe.length>0&&(g.deepiframe[0].src.toLowerCase().indexOf("youtube")>0||g.deepiframe[0].src.toLowerCase().indexOf("vimeo")>0)||g.deepmedia.length>0?"video":"html",g.deepiframe.length>0&&i.sA(g.deepiframe[0],"layertype",g.layertype),"column"===g.type&&(g.cbg=g.p.find("rs-column-bg"),g.cbgmask=g.p.find("rs-cbg-mask-wrap")),g._slidelink=h[0].className.indexOf("slidelink")>=0,g._isstatic=h[0].className.indexOf("rs-layer-static")>=0,g.slidekey=g._isstatic?"staticlayers":s,g._togglelisteners=h.find(".rs-toggled-content").length>0,g.bgcol=void 0===g.bgcol?h[0].style.background.indexOf("gradient")>=0?h[0].style.background:h.css("backgroundColor"):g.bgcol,g.bgcol=0===g.bgcol.indexOf("rgba(0, 0, 0, 0)")&&g.bgcol.length>18?g.bgcol.replace("rgba(0, 0, 0, 0)",""):g.bgcol,g.zindex=h.css("z-Index"),g._togglelisteners&&h.click(function(){i.swaptoggleState([this.id])}),void 0!==g.border)for(t in g.border=g.border.split(";"),g.bordercolor="transparent",g.border)if(g.border.hasOwnProperty(t))switch((a=g.border[t].split(":"))[0]){case"boc":g.bordercolor=a[1];break;case"bow":g.borderwidth=i.revToResp(a[1],4,0);break;case"bos":g.borderstyle=i.revToResp(a[1],4,0);break;case"bor":g.borderradius=i.revToResp(a[1],4,0)}if("svg"===g.type&&(g.svg=h.find("svg"),g.svgPath=g.svg.find("path"),g.svgI=p(g.svgi,o),g.svgH=p(g.svgh,o)),void 0!==g.btrans){var f=g.btrans;for(t in g.btrans={rX:0,rY:0,rZ:0,o:1},f=f.split(";"))if(f.hasOwnProperty(t))switch((a=f[t].split(":"))[0]){case"rX":g.btrans.rX=a[1];break;case"rY":g.btrans.rY=a[1];break;case"rZ":g.btrans.rZ=a[1];break;case"o":g.btrans.o=a[1]}}if(void 0!==g.tsh)for(t in g.tshadow={c:"rgba(0,0,0,0.25)",v:0,h:0,b:0},g.tsh=g.tsh.split(";"),g.tsh)if(g.tsh.hasOwnProperty(t))switch((a=g.tsh[t].split(":"))[0]){case"c":g.tshadow.c=a[1];break;case"h":g.tshadow.h=a[1];break;case"v":g.tshadow.v=a[1];break;case"b":g.tshadow.b=a[1]}if(void 0!==g.tst)for(t in g.tstroke={c:"rgba(0,0,0,0.25)",w:1},g.tst=g.tst.split(";"),g.tst)if(g.tst.hasOwnProperty(t))switch((a=g.tst[t].split(":"))[0]){case"c":g.tstroke.c=a[1];break;case"w":g.tstroke.w=a[1]}if(void 0!==g.bsh)for(t in g.bshadow={e:"c",c:"rgba(0,0,0,0.25)",v:0,h:0,b:0,s:0},g.bsh=g.bsh.split(";"),g.bsh)if(g.bsh.hasOwnProperty(t))switch((a=g.bsh[t].split(":"))[0]){case"c":g.bshadow.c=a[1];break;case"h":g.bshadow.h=a[1];break;case"v":g.bshadow.v=a[1];break;case"b":g.bshadow.b=a[1];break;case"s":g.bshadow.s=a[1];break;case"e":g.bshadow.e=a[1]}if(void 0!==g.dim)for(t in g.dim=g.dim.split(";"),g.dim)if(g.dim.hasOwnProperty(t))switch((a=g.dim[t].split(":"))[0]){case"w":g.width=a[1];break;case"h":g.height=a[1];break;case"maxw":g.maxwidth=a[1];break;case"maxh":g.maxheight=a[1];break;case"minw":g.minwidth=a[1];break;case"minh":g.minheight=a[1]}if(void 0!==g.xy)for(t in g.xy=g.xy.split(";"),g.xy)if(g.xy.hasOwnProperty(t))switch((a=g.xy[t].split(":"))[0]){case"x":g.x=a[1].replace("px","");break;case"y":g.y=a[1].replace("px","");break;case"xo":g.hoffset=a[1].replace("px","");break;case"yo":g.voffset=a[1].replace("px","")}if(!g._isnotext&&void 0!==g.text)for(t in g.text=g.text.split(";"),g.text)if(g.text.hasOwnProperty(t))switch((a=g.text[t].split(":"))[0]){case"w":g.whitespace=a[1];break;case"td":g.textDecoration=a[1];break;case"c":g.clear=a[1];break;case"f":g.float=a[1];break;case"s":g.fontsize=a[1];break;case"l":g.lineheight=a[1];break;case"ls":g.letterspacing=a[1];break;case"fw":g.fontweight=a[1];break;case"a":g.textalign=a[1]}if(void 0!==g.flcr)for(t in g.flcr=g.flcr.split(";"),g.flcr)if(g.flcr.hasOwnProperty(t))switch((a=g.flcr[t].split(":"))[0]){case"c":g.clear=a[1];break;case"f":g.float=a[1]}if(void 0!==g.padding)for(t in g.padding=g.padding.split(";"),g.padding)if(g.padding.hasOwnProperty(t))switch((a=g.padding[t].split(":"))[0]){case"t":g.paddingtop=a[1];break;case"b":g.paddingbottom=a[1];break;case"l":g.paddingleft=a[1];break;case"r":g.paddingright=a[1]}if(void 0!==g.margin)for(t in g.margin=g.margin.split(";"),g.margin)if(g.margin.hasOwnProperty(t))switch((a=g.margin[t].split(":"))[0]){case"t":g.margintop=a[1];break;case"b":g.marginbottom=a[1];break;case"l":g.marginleft=a[1];break;case"r":g.marginright=a[1]}if(void 0!==g.spike&&(g.spike=I(g.spike)),void 0!==g.corners)for(t in r=g.corners.split(";"),g.corners={},r)r.hasOwnProperty(t)&&r[t].length>0&&(g.corners[r[t]]=jQuery("<"+r[t]+"></"+r[t]+">"),g.c.append(g.corners[r[t]]));g.textalign=u(g.textalign),g.vbility=i.revToResp(g.vbility,i[o].rle,!0),g.hoffset=i.revToResp(g.hoffset,i[o].rle,0),g.voffset=i.revToResp(g.voffset,i[o].rle,0),g.x=i.revToResp(g.x,i[o].rle,"l"),g.y=i.revToResp(g.y,i[o].rle,"t"),k(h,0,o),i.sA(c,"initialised",!0)}var m="grid"===g.basealign?i[o].width:"carousel"!==i[o].sliderType||g._isstatic?i[o].ulw:i[o].carousel.slide_width,v="grid"===g.basealign?i[o].height:("carousel"!==i[o].sliderType||g._isstatic,i[o].ulh),y=g.x[i[o].level],b=g.y[i[o].level];if(d="slide"===g.basealign?0:Math.max(0,"fullscreen"==i[o].sliderLayout?v/2-i[o].gridheight[i[o].level]*(i[o].keepBPHeight?1:i[o].bh)/2:i[o].autoHeight||null!=i[o].minHeight&&i[o].minHeight>0?i[o].conh/2-i[o].gridheight[i[o].level]*i[o].bh/2:d),l="slide"===g.basealign?0:Math.max(0,l),"slide"!==g.basealign&&"carousel"===i[o].sliderType&&g._isstatic&&void 0!==i[o].carousel&&void 0!==i[o].carousel.horizontal_align&&(l=Math.max(0,"center"===i[o].carousel.horizontal_align?0+(i[o].ulw-i[o].gridwidth[i[o].level]*i[o].bw)/2:"right"===i[o].carousel.horizontal_align?i[o].ulw-i[o].gridwidth[i[o].level]*i[o].bw:l)),"updateposition"!==e.mode){if(0==g.vbility[i[o].levelForced]||"f"==g.vbility[i[o].levelForced]||m<i[o].hideLayerAtLimit&&"on"==g.layeronlimit||m<i[o].hideAllLayerAtLimit?g.p[0].classList.add("rs-layer-hidden"):g.p[0].classList.remove("rs-layer-hidden"),g.poster=null==g.poster&&void 0!==g.thumbimage?g.thumbimage:g.poster,"image"===g.layertype)if("cover-proportional"===g.img.data("c")){i.sA(g.img[0],"owidth",i.gA(g.img[0],"owidth",g.img[0].width)),i.sA(g.img[0],"oheight",i.gA(g.img[0],"oheight",g.img[0].height));var _=i.gA(g.img[0],"owidth")/i.gA(g.img[0],"oheight"),x=m/v;_>x&&_<=1||_<x&&_>1?punchgs.TweenMax.set(g.img,{width:"100%",height:"auto",left:"c"===y||"center"===y?"50%":"left"===y||"l"===y?"0":"auto",right:"r"===y||"right"===y?"0":"auto",top:"c"===b||"center"===b?"50%":"top"===b||"t"===b?"0":"auto",bottom:"b"===b||"bottom"===b?"0":"auto",x:"c"===y||"center"===y?"-50%":"0",y:"c"===b||"center"===y?"-50%":"0",position:"absolute"}):punchgs.TweenMax.set(g.img,{height:"100%",width:"auto",left:"c"===y||"center"===y?"50%":"left"===y||"l"===y?"0":"auto",right:"r"===y||"right"===y?"0":"auto",top:"c"===b||"center"===b?"50%":"top"===b||"t"===b?"0":"auto",bottom:"b"===b||"bottom"===b?"0":"auto",x:"c"===y||"center"===y?"-50%":"0",y:"c"===b||"center"===y?"-50%":"0",position:"absolute"})}else{var L="auto"!==g.width[i[o].level]||isNaN(g.width[i[o].level])&&g.width[i[o].level].indexOf("%")>=0?"100%":"auto",A="auto"!==g.height[i[o].level]||isNaN(g.height[i[o].level])&&g.height[i[o].level].indexOf("%")>=0?"100%":"auto";punchgs.TweenMax.set(g.img,{width:L,height:A})}else if("video"===g.layertype){i.manageVideoLayer&&!g.videoLayerManaged&&i.manageVideoLayer(h,o),"rebuild"!==e.mode&&i.resetVideo&&i.resetVideo(h,o,e.mode),null!=g.aspectratio&&g.aspectratio.split(":").length>1&&(1==g.bgvideo||1==g.forcecover)&&i.prepareCoveredVideo(o,h),g.media=void 0===g.media?g.deepiframe.length>0?jQuery(g.deepiframe[0]):jQuery(g.deepmedia[0]):g.media,g.html5vid=void 0===g.html5vid?!(g.deepiframe.length>0):g.html5vid;var S=h[0].className.indexOf("coverscreenvideo")>=0;g.media.css({display:"block"});var z=g.width[i[o].level],M=g.height[i[o].level];z="auto"===z?z:!jQuery.isNumeric(z)&&z.indexOf("%")>0?g._incolumn||g._ingroup?"100%":"grid"===g.basealign?i[o].gridwidth[i[o].level]*i[o].bw:m:"off"!==g.rsp_bd?parseFloat(z)*i[o].bw+"px":parseFloat(z)+"px",M="auto"===M?M:!jQuery.isNumeric(M)&&M.indexOf("%")>0?"grid"===g.basealign?i[o].gridheight[i[o].level]*i[o].bw:v:"off"!==g.rsp_bd?parseFloat(M)*i[o].bh+"px":parseFloat(M)+"px";var O=T(h,o);if(g._incolumn&&"100%"===z&&"auto"===M&&void 0!==g.ytid){g.vd=void 0===g.vd?i[o].videos[h[0].id].ratio.split(":").length>1?i[o].videos[h[0].id].ratio.split(":")[0]/i[o].videos[h[0].id].ratio.split(":")[1]:1:g.vd;var C=h.width()/g.vd;punchgs.TweenLite.set(h,{height:C+"px"}),g.heightSetByVideo=!0}else-1!=h[0].className.indexOf("rs-fsv")||S?(l=0,d=0,g.x=i.revToResp(0,i[o].rle,0),g.y=i.revToResp(0,i[o].rle,0),h.css({width:m,height:i[o].autoHeight?i[o].conh:v})):punchgs.TweenMax.set(h,{paddingTop:Math.round(O.paddingTop*i[o].bh)+"px",paddingBottom:Math.round(O.paddingBottom*i[o].bh)+"px",paddingLeft:Math.round(O.paddingLeft*i[o].bw)+"px",paddingRight:Math.round(O.paddingRight*i[o].bw)+"px",marginTop:O.marginTop*i[o].bh+"px",marginBottom:O.marginBottom*i[o].bh+"px",marginLeft:O.marginLeft*i[o].bw+"px",marginRight:O.marginRight*i[o].bw+"px",borderTopWidth:Math.round(O.borderTopWidth*i[o].bh)+"px",borderBottomWidth:Math.round(O.borderBottomWidth*i[o].bh)+"px",borderLeftWidth:Math.round(O.borderLeftWidth*i[o].bw)+"px",borderRightWidth:Math.round(O.borderRightWidth*i[o].bw)+"px",width:z,height:M}),(0==g.html5vid&&!S||1!=g.forcecover&&!h.hasClass("rs-fsv")&&!S)&&(g.media.width(z),g.media.height(M)),g._ingroup&&null!=z&&!jQuery.isNumeric(z)&&z.indexOf("%")>0&&punchgs.TweenMax.set([g.lp,g.p,g.m],{minWidth:z})}g._slidelink||R(h,o,0,g.rsp_bd),"on"===g.rsp_ch&&"row"!==g.type&&"column"!==g.type&&"group"!==g.type&&h.find("*").each(function(){var e=jQuery(this);"true"!==i.gA(this,"stylerecorder")&&!0!==i.gA(this,"stylerecorder")&&k(e,"rekursive",o),R(e,o,"rekursive",g.rsp_bd)})}if("preset"!==e.mode){if(g.eow=h.outerWidth(!0),g.eoh=h.outerHeight(!0),g.eow<=0&&void 0!==g.lastknownwidth&&(g.eow=g.lastknownwidth),g.eoh<=0&&void 0!==g.lastknownheight&&(g.eoh=g.lastknownheight),("text"===g.type||"button"===g.type)&&void 0!==g.corners){for(r in g.corners)if(g.corners.hasOwnProperty(r)){g.corners[r].css("borderWidth",g.eoh+"px");var P="rs-fcrt"===r||"rs-fcr"===r;g.corners[r].css("border"+(P?"Right":"Left"),"0px solid transparent"),g.corners[r].css("border"+("rs-fcrt"==r||"rs-bcr"==r?"Bottom":"Top")+"Color",g.bgcol)}g.eow=h.outerWidth(!0)}0==g.eow&&0==g.eoh&&(g.eow=i[o].ulw,g.eoh=i[o].ulh);var j="on"===g.rsp_o?parseInt(g.voffset[i[o].level],0)*i[o].bw:parseInt(g.voffset[i[o].level],0),Q="on"===g.rsp_o?parseInt(g.hoffset[i[o].level],0)*i[o].bw:parseInt(g.hoffset[i[o].level],0),H="grid"===g.basealign?i[o].gridwidth[i[o].level]*i[o].bw:m,N="grid"===g.basealign?i[o].gridheight[i[o].level]*(i[o].keepBPHeight?1:i[o].bh):v;(1==i[o].gridEQModule||void 0!==g._lig&&"row"!==g.type&&"column"!==g.type&&"group"!==g.type)&&(H=void 0!==g._lig?g._lig.width():i[o].ulw,N=void 0!==g._lig?g._lig.height():i[o].ulh,l=0,d=0),y="c"===y||"m"===y||"center"===y||"middle"===y?H/2-g.eow/2+Q:"l"===y||"left"===y?Q:"r"===y||"right"===y?H-g.eow-Q:"off"!==g.rsp_o?y*i[o].bw:y,b="m"===b||"c"===b||"center"===b||"middle"===b?N/2-g.eoh/2+j:"t"===b||"top"==b?j:"b"===b||"bottom"==b?N-g.eoh-j:"off"!==g.rsp_o?b*i[o].bw:b,y=g._slidelink?0:i[o].rtl&&"100%"!==g.width[i[o].level]?y+g.eow:y,g.calcx=parseInt(y,0)+l,g.calcy=parseInt(b,0)+d,"row"!==g.type&&"column"!==g.type?punchgs.TweenMax.set(g.p,{zIndex:g.zindex,top:g.calcy,left:g.calcx,overwrite:"auto"}):"row"!==g.type?punchgs.TweenMax.set(g.p,{zIndex:g.zindex,width:g.columnwidth,top:0,left:0,overwrite:"auto"}):"row"===g.type&&(punchgs.TweenMax.set(g.p,{zIndex:g.zindex,width:"grid"===g.basealign?H+"px":"100%",top:0,left:l,overwrite:"auto"}),g.cbreak<=i[o].level?h[0].classList.add("rev_break_columns"):h[0].classList.remove("rev_break_columns")),void 0!==g.blendmode&&punchgs.TweenMax.set(g.p,{mixBlendMode:g.blendmode}),void 0!==g.frame_loop&&punchgs.TweenMax.set(g.lp,{minWidth:g.eow,minHeight:g.eoh}),g._ingroup&&(void 0!==g._groupw&&!jQuery.isNumeric(g._groupw)&&g._groupw.indexOf("%")>0&&punchgs.TweenMax.set([g.lp,g.p,g.m],{minWidth:g._groupw}),void 0!==g._grouph&&!jQuery.isNumeric(g._grouph)&&g._grouph.indexOf("%")>0&&punchgs.TweenMax.set([g.lp,g.p,g.m],{minHeight:g._grouph}))}}},animcompleted:function(e,t){if(void 0!==i[t].videos){var a=i[t].videos[e[0].id];null!=a&&null!=a.type&&"none"!=a.type&&(1==a.aplay||"true"==a.aplay||"on"==a.aplay||"1sttime"==a.aplay?("carousel"===i[t].sliderType&&e.closest("rs-slide").index()!=i[t].pr_active_key||i.playVideo(e,t),i.toggleState(e.data("videotoggledby")),(a.aplay1||"1sttime"==a.aplay)&&(a.aplay1=!1,a.aplay=!1)):("no1sttime"==a.aplay&&(a.aplay=!0),i.unToggleState(e.data("videotoggledby"))))}},handleStaticLayers:function(e,t){var a=0,r=i[t].realslideamount+1;if(void 0!==i.gA(e[0],"onslides")){var o=i.gA(e[0],"onslides").split(";");for(var s in o)if(o.hasOwnProperty(s)){var n=o[s].split(":");"s"===n[0]&&(a=parseInt(n[1],0)),"e"===n[0]&&(r=parseInt(n[1],0))}}a=Math.max(0,a),r=Math.min(i[t].realslideamount,r<0?i[t].realslideamount:r),r=1!==a&&0!==a||r!==i[t].realslideamount?r:i[t].realslideamount+1,e.data("startslide",a),e.data("endslide",r),i.sA(e[0],"startslide",a),i.sA(e[0],"endslide",r)},animateTheLayers:function(e){if(void 0===e.slide)return!1;var t=e.id;if(void 0===i[t].slides[e.slide])return!1;if("carousel"===i[t].sliderType){if("start"===e.mode&&"start"===i[t].lastATLmode){if(e.slide===i[t].lastATLslide&&(new Date).getTime()-i[t].lastATLtime<1500)return;i[t].lastATLtime=(new Date).getTime()}i[t].lastATLmode=e.mode,i[t].lastATLslide=e.slide}var a=i.gA(i[t].slides[e.slide],"key"),r=i[t].pr_processing_key||i[t].pr_active_key||0;if(i[t].layers=i[t].layers||{},i[t].layers[a]=void 0===i[t].layers[a]?x(jQuery(i[t].slides[e.slide]),"rs-layer"):i[t].layers[a],i[t].layers.static=void 0===i[t].layers.static?x(jQuery(i[t].c.find("rs-static-layers")),"rs-layer"):i[t].layers.static,i[t].sbas[a]=void 0===i[t].sbas[a]?x(jQuery(i[t].slides[e.slide]),"rs-sba"):i[t].sbas[a],i.updateDimensions(t),void 0!==a&&i[t].layers[a]&&i.initLayer({id:t,skey:a,mode:e.mode,animcompleted:"rebuild"===e.mode&&"carousel"===i[t].sliderType&&i[t].carousel.showLayersAllTime}),i[t].layers.static&&i.initLayer({id:t,skey:"static",mode:e.mode,animcompleted:"rebuild"===e.mode&&"carousel"===i[t].sliderType&&i[t].carousel.showLayersAllTime}),void 0===i[t].dimensionReCheck[a]&&(setTimeout(function(){void 0!==a&&i[t].layers[a]&&i.checkLayerDimensions({id:t,skey:a})&&i.initLayer({id:t,skey:a,mode:"updateposition"}),i[t].layers.static&&i.checkLayerDimensions({id:t,skey:"static"})&&i.initLayer({id:t,skey:"static",mode:"updateposition"})},200),i[t].dimensionReCheck[a]=!0),(void 0!==i[t].rowzones&&i[t].rowzones.length>0&&r>=0&&i[t].rowzones[Math.min(r,i[t].rowzones.length)].length>0||void 0!==i[t].srowzones&&i[t].srowzones.length>0||void 0!==i[t].smiddleZones&&i[t].smiddleZones.length>0)&&(i.setSize(t),i.updateDimensions(t),i.initLayer({id:t,skey:a,mode:"updateposition"}),i.initLayer({id:t,skey:"static",mode:"updateposition"}),"start"!==e.mode&&"preset"!==e.mode||i.manageNavigation(t)),void 0!==a&&i[t].layers[a])for(var o in i[t].layers[a])i[t].layers[a].hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers[a][o]),id:t,mode:e.mode});if(i[t].layers.static)for(var o in i[t].layers.static)i[t].layers.static.hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers.static[o]),id:t,mode:e.mode});null!=i[t].mtl&&setTimeout(function(){null!=i[t].mtl&&i[t].mtl.resume()},30)},removeTheLayers:function(e,t,a){var r=i.gA(e[0],"key");if(i[t].sloops&&i[t].sloops[r]&&i[t].sloops[r].tl&&i[t].sloops[r].tl.stop(),"carousel"===i[t].sliderType&&i[t].carousel.showLayersAllTime);else{for(var o in i[t].layers[r])i[t].layers[r].hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers[r][o]),frame:"frame_999",mode:"continue",remove:!0,id:t,allforce:a});for(var o in i[t].layers.static)i[t].layers.static.hasOwnProperty(o)&&i.renderLayerAnimation({layer:jQuery(i[t].layers.static[o]),frame:"frame_999",mode:"continue",remove:!0,id:t,allforce:a})}},renderLayerAnimation:function(e){var d=e.layer,c=e.id,p=i[c].level,u=i[c]._L[d[0].id],f=void 0!==u.timeline?u.timeline.time():void 0,b=!1,w=!1,_="none";if("preset"!==e.mode||!0===u.frames.frame_1.timeline.waitoncall||void 0!==u.scrollBasedOffset||!0===u.forceRender){if("trigger"==e.mode&&(u.triggeredFrame=e.frame),u._isstatic){var x="carousel"===i[c].sliderType&&void 0!==i[c].carousel.oldfocused?i[c].carousel.oldfocused:void 0===i[c].pr_lastshown_key?1:parseInt(i[c].pr_lastshown_key,0)+1,k="carousel"===i[c].sliderType?void 0===i[c].pr_next_key?0===x?1:x:parseInt(i[c].pr_next_key,0)+1:void 0===i[c].pr_processing_key?x:parseInt(i[c].pr_processing_key,0)+1,T=x>=u.startslide&&x<=u.endslide,L=k>=u.startslide&&k<=u.endslide;if(_=x===u.endslide&&"continue"===e.mode||("continue"===e.mode||x===u.endslide)&&"none",!0===e.allforce||!0===_);else{if("preset"===e.mode&&(u.elementHovered||!L))return;if("rebuild"===e.mode&&!T&&!L)return;if("start"===e.mode&&L&&"frame_1"===u.lastRequestedMainFrame)return;if("continue"===e.mode&&"frame_999"===e.frame&&L)return;if("start"===e.mode&&!L)return}}else"start"===e.mode&&"keep"!==u.triggercache&&(u.triggeredFrame=void 0);for(var R in"start"===e.mode&&void 0!==u.layerLoop&&(u.layerLoop.count=0),"start"===e.mode&&(e.frame=void 0===u.triggeredFrame?0:u.triggeredFrame),"continue"!==e.mode&&"trigger"!==e.mode&&void 0!==u.timeline&&u.timeline.pause(0),"continue"!==e.mode&&"trigger"!==e.mode||void 0===u.timeline||u.timeline.pause(),u.timeline=new punchgs.TimelineMax({paused:!0}),"text"!==u.type&&"button"!==u.type||void 0!==u.splitText&&(void 0!==u.splitTextFix||"start"!==e.mode&&"preset"!==e.mode)||(h({layer:d,id:c}),"start"===e.mode&&(u.splitTextFix=!0)),u.ford)if(u.ford.hasOwnProperty(R)){var I=u.ford[R],A=!1;if("frame_0"!==I&&"frame_hover"!==I&&"loop"!==I){if("frame_999"===I&&!u.frames[I].timeline.waitoncall&&u.frames[I].timeline.start>=i[c].duration&&!0!==e.remove&&(u.frames[I].timeline.waitoncall=!0),"start"===e.mode&&"keep"!==u.triggercache&&(u.frames[I].timeline.callstate=u.frames[I].timeline.waitoncall?"waiting":""),"trigger"===e.mode&&u.frames[I].timeline.waitoncall&&(I===e.frame?(u.frames[I].timeline.triggered=!0,u.frames[I].timeline.callstate="called"):u.frames[I].timeline.triggered=!1),"rebuild"===e.mode||u.frames[I].timeline.triggered||(u.frames[I].timeline.callstate=u.frames[I].timeline.waitoncall?"waiting":""),!1!==e.fastforward){if(("continue"===e.mode||"trigger"===e.mode)&&!1===w&&I!==e.frame)continue;if(("rebuild"===e.mode||"preset"===e.mode)&&!1===w&&void 0!==u.triggeredFrame&&I!==u.triggeredFrame)continue;(I===e.frame||"rebuild"===e.mode&&I===u.triggeredFrame)&&(w=!0)}else I===e.frame&&(w=!0);if(I!==e.frame&&u.frames[I].timeline.waitoncall&&"called"!==u.frames[I].timeline.callstate&&(b=!0),I!==e.frame&&w&&(b=!0===b&&u.frames[I].timeline.waitoncall?"skiprest":!0!==b&&b),void 0===u.hideonfirststart&&"frame_1"===I&&u.frames[I].timeline.waitoncall&&(u.hideonfirststart=!0),b&&"waiting"===u.frames[I].timeline.callstate&&"preset"===e.mode&&1!=u.firstTimeRendered)A=!0,u.firstTimeRendered=!0;else if("skiprest"===b||"called"!==u.frames[I].timeline.callstate&&b&&e.toframe!==I)continue;if("frame_999"!==I||!1!==_||"continue"!==e.mode&&"start"!==e.mode&&"rebuild"!==e.mode){u.fff="frame_1"===I&&("trigger"!==e.mode||"frame_999"===u.currentframe||"frame_0"===u.currentframe||void 0===u.currentframe),A||(u.frames[I].timeline.callstate="called",u.currentframe=I);var S=u.frames[I],z=u.fff?u.frames.frame_0:void 0,M=new punchgs.TimelineMax,O=new punchgs.TimelineMax,C=u.c,P=void 0!==S.sfx&&g(S.sfx.effect,u.m,S.timeline.ease),j=S.timeline.speed/1e3,Q=0,H=m({id:c,frame:S,layer:d,ease:S.timeline.ease,splitAmount:C.length,target:I,forcefilter:void 0!==u.frames.frame_hover&&void 0!==u.frames.frame_hover.filter}),N=u.fff?m({id:c,frame:z,layer:d,ease:S.timeline.ease,splitAmount:C.length,target:"frame_0"}):void 0,B=void 0!==S.mask?m({id:c,frame:{transform:{x:S.mask.x,y:S.mask.y}},layer:d,ease:H.ease,target:"mask"}):void 0,D=void 0!==B&&u.fff?m({id:c,frame:{transform:{x:z.mask.x,y:z.mask.y}},layer:d,ease:H.ease,target:"frommask"}):void 0,W=H.ease;"block"===P.type&&(P.ft[0].background=S.sfx.fxc,M.add(punchgs.TweenMax.fromTo(P.bmask_in,j/2,P.ft[0],P.ft[1],0)),M.add(punchgs.TweenMax.fromTo(P.bmask_in,j/2,P.ft[1],P.t,j/2)),"frame_0"===I||"frame_1"===I?N.opacity=0:"frame_999"===I&&M.add(O.staggerFromTo(C,.05,{autoAlpha:1},{autoAlpha:0,delay:j/2},0),.001)),void 0!==S.color?H.color=S.color:void 0!==u.color&&"npc"!==u.color[p]&&(H.color=u.color[p]),void 0!==z&&void 0!==z.color?N.color=z.color:void 0!==z&&void 0!==u.color&&"npc"!==u.color[p]&&(N.color=u.color[p]),void 0!==S.bgcolor?S.bgcolor.indexOf("gradient")>=0?H.background=S.bgcolor:H.backgroundColor=S.bgcolor:!0===u.bgcolinuse&&(u.bgcol.indexOf("gradient")>=0?H.background=u.bgcol:H.backgroundColor=u.bgcol),void 0!==z&&(void 0!==z.bgcolor?z.bgcolor.indexOf("gradient")>=0?N.background=z.bgcolor:N.backgroundColor=z.bgcolor:!0===u.bgcolinuse&&(u.bgcol.indexOf("gradient")>=0?N.background=u.bgcol:N.backgroundColor=u.bgcol));var V=0;if(void 0!==u.splitText&&!1!==u.splitText)for(var Y in t)if(void 0===S[t[Y]]||u.quickRendering)u.fff?M.add(O.fromTo(u.splitText[t[Y]],j,{immediateRender:!1,color:N.color},{color:H.color},0),0):M.add(O.to(u.splitText[t[Y]],j,{color:H.color},0),0);else{var F=y(u.splitText[t[Y]],S[t[Y]].dir),E=m({id:c,frame:S,source:t[Y],ease:W,layer:d,splitAmount:F.length,target:I+"_"+t[Y]}),X=u.fff?m({id:c,frame:z,ease:E.ease,source:t[Y],layer:d,splitAmount:F.length,target:"frame_0_"+t[Y]}):void 0;Q=void 0===S[t[Y]].delay?.05:S[t[Y]].delay/100,E.color=H.color,void 0!==N&&(X.color=N.color);var Z=v(jQuery.extend(!0,{},E)),q=u.fff?v(jQuery.extend(!0,{},X)):void 0;delete Z.dir,Z.data={splitted:!0},void 0!==q&&delete q.dir,u.fff?M.add(O.staggerFromTo(F,j,q,Z,u.frames[I].split?Q:0,0),0):M.add(O.staggerTo(F,j,Z,u.frames[I].split?Q:0,0),0),V=F.length>V?F.length:V}j+=u.frames[I].split?Q*V:0,u.pxundermask||void 0!==B&&(void 0!==z&&"hidden"===z.mask.overflow||"hidden"===S.mask.overflow)?(M.add(punchgs.TweenMax.to(u.m,.001,{overflow:"hidden"}),0),"column"===u.type&&M.add(punchgs.TweenMax.to(u.cbgmask,.001,{overflow:"hidden"}),0),u.btrans&&(D&&(D.rotationX=u.btrans.rX,D.rotationY=u.btrans.rY,D.rotationZ=u.btrans.rZ,D.opacity=u.btrans.o),B.rotationX=u.btrans.rX,B.rotationY=u.btrans.rY,B.rotationZ=u.btrans.rZ,B.opacity=u.btrans.o),u.fff?M.add(punchgs.TweenMax.fromTo([u.m,u.cbgmask],j,jQuery.extend(!0,{},D),jQuery.extend(!0,{},B)),.001):M.add(punchgs.TweenMax.to([u.m,u.cbgmask],j,jQuery.extend(!0,{},B)),.001)):void 0!==u.btrans?M.add(punchgs.TweenMax.to(u.m,.001,{x:0,y:0,filter:"none",opacity:u.btrans.o,rotationX:u.btrans.rX,rotationY:u.btrans.rY,rotationZ:u.btrans.rZ,overflow:"visible"}),0):M.add(punchgs.TweenMax.to(u.m,.001,{clearProps:"transform",overflow:"visible"}),0),H.force3D="auto",u.fff?(H.visibility="visible",void 0!==u.cbg&&M.fromTo(u.cbg,j,N,H,0),i[c].BUG_safari_clipPath&&(N.clipPath||H.clipPath||u.spike)&&(N.z&&parseInt(N.z,10)||(N.z=-1e-4),H.z&&parseInt(H.z,10)||(H.z=0)),void 0!==u.cbg&&"column"===u.type?M.fromTo(C,j,a(N),a(H),0):M.fromTo(C,j,N,H,0)):(void 0!==u.cbg&&M.to(u.cbg,j,H,0),!i[c].BUG_safari_clipPath||!H.clipPath&&!u.spike||H.z&&parseInt(H.z,10)||(H.z=0-.01*Math.random()),void 0!==u.cbg&&"column"===u.type?M.to(C,j,a(H),0):M.to(C,j,H,0)),void 0!==W&&"object"!=typeof W&&W.indexOf("SFXBounce")>=0&&M.to(C,j,{scaleY:.5,scaleX:1.3,ease:H.ease+"-squash",transformOrigin:"bottom"},1e-4);var G="trigger"!==e.mode&&(!0!==b&&"skiprest"!==b||"rebuild"!==e.mode)||e.frame===I||void 0===S.timeline.start||!jQuery.isNumeric(S.timeline.start)?"+=0"===S.timeline.start||void 0===S.timeline.start?"+=0.005":parseInt(S.timeline.start,0)/1e3:"+="+parseInt(S.timeline.startRelative,0)/1e3;u.timeline.addLabel(I,G),u.timeline.add(M,G),u.timeline.addLabel(I+"_end","+=0.01"),M.eventCallback("onStart",o,[{id:c,frame:I,L:d}]),"true"==u.animationonscroll||1==u.animationonscroll?(M.eventCallback("onUpdate",s,[{id:c,frame:I,L:d}]),M.smoothChildTiming=!0):M.eventCallback("onUpdate",s,[{id:c,frame:I,L:d}]),M.eventCallback("onComplete",n,[{id:c,frame:I,L:d}])}}}if(void 0!==u.frames.loop){var U=u.frames.loop.frame_0,J=u.frames.loop.frame_999,K=new punchgs.TimelineMax({}),$=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_move}),ee=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_rotate}),te=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_scale}),ie=new punchgs.TimelineMax({repeat:-1,yoyo:u.frames.loop.timeline.yoyo_filter}),ae=parseInt(u.frames.loop.timeline.speed,0)/1e3,re=parseInt(u.frames.loop.timeline.start)/1e3||0,oe=re+.2;if(K.add($,0),K.add(ee,0),K.add(te,0),K.add(ie,0),J.originX=U.originX,J.originY=U.originY,J.originZ=U.originZ,u.frames.loop.timeline.curved){var se=parseInt(u.frames.loop.timeline.radiusAngle,0)||0,ne=[{x:(U.x-U.xr)*i[c].bw,y:0,z:(U.z-U.zr)*i[c].bw},{x:0,y:(U.y+U.yr)*i[c].bw,z:0},{x:(J.x+J.xr)*i[c].bw,y:0,z:(J.z+J.zr)*i[c].bw},{x:0,y:(J.y-J.yr)*i[c].bw,z:0}],le={type:"thru",curviness:u.frames.loop.timeline.curviness,values:[],autoRotate:u.frames.loop.timeline.autoRotate};for(var de in ne)ne.hasOwnProperty(de)&&(le.values[de]=ne[se],se=++se==ne.length?0:se);u.timeline.fromTo(u.lp,.2,{"-webkit-filter":"blur("+(U.blur||0)+"px) grayscale("+(U.grayscale||0)+"%) brightness("+(U.brightness||100)+"%)",filter:"blur("+(U.blur||0)+"px) grayscale("+(U.grayscale||0)+"%) brightness("+(U.brightness||100)+"%)",x:0,y:0,z:0,minWidth:u._incolumn||u._ingroup?"100%":void 0===u.eow?0:u.eow,minHeight:u._incolumn||u._ingroup?"100%":void 0===u.eoh?0:u.eoh,scaleX:1,scaleY:1,skew:0,rotationX:0,rotationY:0,rotationZ:0,transformPerspective:600,transformOrigin:J.originX+" "+J.originY+" "+J.originZ,opacity:1},{x:le.values[3].x,y:le.values[3].y,z:le.values[3].z,scaleX:U.scaleX,skewX:U.skewX,skewY:U.skewY,scaleY:U.scaleY,rotationX:U.rotationX,rotationY:U.rotationY,rotationZ:U.rotationZ,"-webkit-filter":"blur("+parseInt(U.blur,0)+"px) grayscale("+parseInt(U.grayscale,0)+"%) brightness("+parseInt(U.brightness,0)+"%)",filter:"blur("+parseInt(U.blur,0)+"px) grayscale("+parseInt(U.grayscale,0)+"%) brightness("+parseInt(U.brightness,0)+"%)",ease:punchgs.Sine.easeInOut,opacity:U.opacity},re),$.to(u.lp,u.frames.loop.timeline.yoyo_move?ae/2:ae,{bezier:le,ease:u.frames.loop.timeline.ease})}else u.timeline.fromTo(u.lp,.2,{"-webkit-filter":"blur("+(U.blur||0)+"px) grayscale("+(U.grayscale||0)+"%) brightness("+(U.brightness||100)+"%)",filter:"blur("+(U.blur||0)+"px) grayscale("+(U.grayscale||0)+"%) brightness("+(U.brightness||100)+"%)",x:0,y:0,z:0,minWidth:u._incolumn||u._ingroup?"100%":void 0===u.eow?0:u.eow,minHeight:u._incolumn||u._ingroup?"100%":void 0===u.eoh?0:u.eoh,scaleX:1,scaleY:1,skew:0,rotationX:0,rotationY:0,rotationZ:0,transformPerspective:600,transformOrigin:J.originX+" "+J.originY+" "+J.originZ,opacity:1},{x:U.x*i[c].bw,y:U.y*i[c].bw,z:U.z*i[c].bw,scaleX:U.scaleX,skewX:U.skewX,skewY:U.skewY,scaleY:U.scaleY,rotationX:U.rotationX,rotationY:U.rotationY,rotationZ:U.rotationZ,ease:punchgs.Sine.easeOut,opacity:U.opacity,"-webkit-filter":"blur("+parseInt(U.blur||0,0)+"px) grayscale("+parseInt(U.grayscale||0,0)+"%) brightness("+parseInt(U.brightness||100,0)+"%)",filter:"blur("+parseInt(U.blur||0,0)+"px) grayscale("+parseInt(U.grayscale||0,0)+"%) brightness("+parseInt(U.brightness||100,0)+"%)"},re),$.to(u.lp,u.frames.loop.timeline.yoyo_move?ae/2:ae,{x:J.x*i[c].bw,y:J.y*i[c].bw,z:J.z*i[c].bw,ease:u.frames.loop.timeline.ease});ee.to(u.lp,u.frames.loop.timeline.yoyo_rotate?ae/2:ae,{rotationX:J.rotationX,rotationY:J.rotationY,rotationZ:J.rotationZ,ease:u.frames.loop.timeline.ease}),te.to(u.lp,u.frames.loop.timeline.yoyo_scale?ae/2:ae,{scaleX:J.scaleX,scaleY:J.scaleY,skewX:J.skewX,skewY:J.skewY,ease:u.frames.loop.timeline.ease});var ce={opacity:J.opacity||1,ease:u.frames.loop.timeline.ease,"-webkit-filter":"blur("+(J.blur||0)+"px) grayscale("+(J.grayscale||0)+"%) brightness("+(J.brightness||100)+"%)",filter:"blur("+(J.blur||0)+"px) grayscale("+(J.grayscale||0)+"%) brightness("+(J.brightness||100)+"%)"};ie.to(u.lp,u.frames.loop.timeline.yoyo_filter?ae/2:ae,ce),u.timeline.add(K,oe)}if(void 0!==u.frames.frame_hover&&("start"===e.mode||void 0===u.hoverframeadded)){u.hoverframeadded=!0;var pe=u.frames.frame_hover.timeline.speed/1e3;pe=0===pe?1e-5:pe,u.hoverlistener||(u.hoverlistener=!0,jQuery(document).on("mouseenter mousemove",("column"===u.type?"#"+u.cbg[0].id+",":"")+"#"+u.c[0].id,function(e){if(("mousemove"!==e.type||!0!==u.ignoremousemove)&&u.readyForHover){if(u.ignoremousemove=!0,u.elementHovered=!0,u.hovertimeline||(u.hovertimeline=new punchgs.TimelineMax),u.hovertimeline.to([u.m,u.cbgmask],pe,{overflow:u.frames.frame_hover.mask?"hidden":"visible"},0),"column"===u.type&&u.hovertimeline.to(u.cbg,pe,jQuery.extend(!0,{},l(u.frames.frame_hover,u.cbg)),0),u.hovertimeline.pause(),"text"!==u.type&&"button"!==u.type||void 0===u.splitText||!1===u.splitText||u.hovertimeline.to([u.splitText.lines,u.splitText.words,u.splitText.chars],pe,{color:u.frames.frame_hover.color,ease:u.frames.frame_hover.transform.ease},0),"column"===u.type?u.hovertimeline.to(u.c,pe,a(jQuery.extend(!0,{},l(u.frames.frame_hover,u.c))),0):u.hovertimeline.to(u.c,pe,jQuery.extend(!0,{},l(u.frames.frame_hover,u.c)),0),"svg"===u.type){u.svgHTemp=jQuery.extend(!0,{},u.svgH);var t=Array.isArray(u.svgHTemp.fill)?u.svgHTemp.fill[i[c].level]:u.svgHTemp.fill;u.svgHTemp.fill=t,u.hovertimeline.to(u.svg,pe,u.svgHTemp,0),u.hovertimeline.to(u.svgPath,pe,{fill:t},0)}u.hovertimeline.play()}}),jQuery(document).on("mouseleave",("column"===u.type?"#"+u.cbg[0].id+",":"")+"#"+u.c[0].id,function(){u.elementHovered=!1,u.readyForHover&&void 0!==u.hovertimeline&&(u.hovertimeline.reverse(),u.hovertimeline.eventCallback("onReverseComplete",r,[{id:c,L:d}]))}))}if(A||(u.lastRequestedMainFrame="start"===e.mode?"frame_1":"continue"===e.mode?e.frame:u.lastRequestedMainFrame),void 0!==e.totime?u.tSTART=e.totime:void 0!==f&&void 0===e.frame?u.tSTART=f:void 0!==e.frame?u.tSTART=e.frame:u.tSTART=0,0===u.tSTART&&void 0===u.startedAnimOnce&&void 0===u.leftstage&&void 0===u.startedAnimOnce&&!0===u.hideonfirststart&&"preset"===e.mode&&(i[c]._L[d[0].id].p[0].classList.add("rs-forcehidden"),u.hideonfirststart=!1),"frame_999"!==u.tSTART&&"frame_999"!==u.triggeredFrame||!u.leftstage&&void 0!==u.startedAnimOnce){if("true"!=u.animationonscroll&&1!=u.animationonscroll?u.timeline.play(u.tSTART):u.timeline.time(u.tSTART),jQuery.inArray(u.type,["group","row","column"])>=0&&!0===e.updateChildren){if(void 0===u.childrenJS)for(var Y in u.childrenJS={},i[c]._L)void 0!==i[c]._L[Y]._lig&&void 0!==i[c]._L[Y]._lig[0]&&i[c]._L[Y]._lig[0].id===d[0].id&&i[c]._L[Y]._lig[0].id!==i[c]._L[Y].c[0].id&&(u.childrenJS[i[c]._L[Y].c[0].id]=i[c]._L[Y].c);var ue=void 0===e.totime?void 0!==u.frames[e.frame].timeline.startAbsolute?parseInt(u.frames[e.frame].timeline.startAbsolute,0)/1e3:void 0!==u.frames[e.frame].timeline.start?jQuery.isNumeric(u.frames[e.frame].timeline.start)?parseInt(u.frames[e.frame].timeline.start,0)/1e3:e.totime:.001:e.totime;for(var Y in u.childrenJS)u.childrenJS.hasOwnProperty(Y)&&i.renderLayerAnimation({layer:u.childrenJS[Y],fastforward:!1,id:c,mode:"continue",updateChildren:!0,totime:ue})}}else;}}});var a=function(e){var t=jQuery.extend(!0,{},e);return delete t.backgroundColor,delete t.background,delete t.backgroundImage,delete t.borderSize,delete t.borderStyle,t},r=function(e){i[e.id]._L[e.L[0].id].textDecoration&&punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c,{textDecoration:i[e.id]._L[e.L[0].id].textDecoration})},o=function(e){i[e.id].BUG_safari_clipPath&&e.L[0].classList.remove("rs-pelock"),(i[e.id]._L[e.L[0].id]._ingroup||i[e.id]._L[e.L[0].id]._incolumn||i[e.id]._L[e.L[0].id]._inrow)&&void 0!==i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid]&&void 0!==i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timeline&&(i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timeline.isActive()||void 0===i[e.id]._L[e.L[0].id]||void 0===i[e.id]._L[e.L[0].id].frames[i[e.id]._L[e.L[0].id].timeline.currentLabel()]||(null==i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timezone||i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timezone.to<=parseInt(i[e.id]._L[e.L[0].id].frames[i[e.id]._L[e.L[0].id].timeline.currentLabel()].timeline.start,0))&&!0!==i[e.id]._L[e.L[0].id].animOnScrollForceDisable&&i[e.id]._L[e.L[0].id].timeline.pause());var t=i[e.id]._L[e.L[0].id],a=t.hovertimeline;a&&a.time()>0&&(a.pause(),a.time(0),a.kill(),delete t.hovertimeline),i[e.id]._L[e.L[0].id].p[0].classList.remove("rs-forcehidden");var r={};if(i[e.id]._L[e.L[0].id].ignoremousemove=!1,i[e.id]._L[e.L[0].id].leftstage=!1,i[e.id]._L[e.L[0].id].readyForHover=!1,r.layer=e.L,void 0!==i[e.id]._L[e.L[0].id].layerLoop&&i[e.id]._L[e.L[0].id].layerLoop.from===e.frame&&i[e.id]._L[e.L[0].id].layerLoop.count++,"frame_999"!==e.frame&&(i[e.id]._L[e.L[0].id].startedAnimOnce=!0,punchgs.TweenMax.set([i[e.id]._L[e.L[0].id].c,i[e.id]._L[e.L[0].id].l,i[e.id]._L[e.L[0].id].m],{visibility:"visible"}),punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p,{pointerEvents:i[e.id]._L[e.L[0].id].noPevents?"none":"auto",visibility:"visible"})),r.eventtype="frame_0"===e.frame||"frame_1"===e.frame?"enterstage":"frame_999"===e.frame?"leavestage":"framestarted","enterstage"===r.eventtype){var o=i[e.id].pr_processing_key||i[e.id].pr_active_key||0,s=0;if(i[e.id].middleZones&&i[e.id].middleZones.length>0&&void 0!==i[e.id].middleZones[o])for(s=0;s<i[e.id].middleZones[o].length;s++)i[e.id].middleZones[o][s].style.top=Math.round(i[e.id].height/2-i[e.id].middleZones[o][s].offsetHeight/2)+"px";if(i[e.id].smiddleZones&&i[e.id].smiddleZones.length>0)for(s=0;s<i[e.id].smiddleZones.length;s++)i[e.id].smiddleZones[s].style.top=Math.round(i[e.id].height/2-i[e.id].smiddleZones[s].offsetHeight/2)+"px"}r.layertype=i[e.id]._L[e.L[0].id].type,r.frame_index=e.frame,r.layersettings=i[e.id]._L[e.L[0].id],i[e.id].c.trigger("revolution.layeraction",[r]),"enterstage"===r.eventtype&&i.toggleState(i[e.id]._L[e.L[0].id].layertoggledby),"frame_1"===e.frame&&i.animcompleted(e.L,e.id)},s=function(e){"frame_999"===e.frame&&(i[e.id]._L[e.L[0].id].leftstage&&i[e.id]._L[e.L[0].id].p[0].classList.remove("rs-forcehidden"),i[e.id]._L[e.L[0].id].leftstage=!1,punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c,{visibility:"visible"}),punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p,{pointerEvents:i[e.id]._L[e.L[0].id].noPevents?"none":"auto",visibility:"visible"}))},n=function(e){var t=!0;if("column"===i[e.id]._L[e.L[0].id].type||"row"===i[e.id]._L[e.L[0].id].type||"group"===i[e.id]._L[e.L[0].id].type){var a=i[e.id]._L[e.L[0].id].timeline.currentLabel(),r=jQuery.inArray(a,i[e.id]._L[e.L[0].id].ford);r++,r=i[e.id]._L[e.L[0].id].ford.length>r?i[e.id]._L[e.L[0].id].ford[r]:a,void 0!==i[e.id]._L[e.L[0].id].frames[r]&&void 0!==i[e.id]._L[e.L[0].id].frames[a]&&(i[e.id]._L[e.L[0].id].timezone={from:parseInt(i[e.id]._L[e.L[0].id].frames[a].timeline.startAbsolute,0),to:parseInt(i[e.id]._L[e.L[0].id].frames[r].timeline.startAbsolute,0)})}if("frame_999"===e.frame)punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c,{visibility:"hidden"}),punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p,{pointerEvents:"none",visibility:"hidden"}),t=!1;else if(i[e.id].isEdge&&"shape"===i[e.id]._L[e.L[0].id].type){var o=i[e.id]._L[e.L[0].id].c[0].style.opacity;i[e.id]._L[e.L[0].id].c[0].style.opacity=o-1e-4,punchgs.TweenLite.set(i[e.id]._L[e.L[0].id].c[0],{opacity:o-.001,delay:.05}),punchgs.TweenLite.set(i[e.id]._L[e.L[0].id].c[0],{opacity:o,delay:.1})}var s={};s.layer=e.L,s.eventtype="frame_0"===e.frame||"frame_1"===e.frame?"enteredstage":"frame_999"===e.frame?"leftstage":"frameended",i[e.id]._L[e.L[0].id].readyForHover=!0,s.layertype=i[e.id]._L[e.L[0].id].type,s.frame_index=e.frame,s.layersettings=i[e.id]._L[e.L[0].id],i[e.id].c.trigger("revolution.layeraction",[s]),"frame_999"===e.frame&&"leftstage"===s.eventtype&&(i[e.id]._L[e.L[0].id].leftstage=!0,i[e.id]._L[e.L[0].id].p[0].classList.add("rs-forcehidden")),"leftstage"===s.eventtype&&void 0!==i[e.id].videos&&void 0!==i[e.id].videos[e.L[0].id]&&i.stopVideo&&i.stopVideo(e.L,e.id),"column"===i[e.id]._L[e.L[0].id].type&&punchgs.TweenMax.to(i[e.id]._L[e.L[0].id].cbg,.01,{visibility:"visible"}),"leftstage"===s.eventtype&&(i.unToggleState(e.layertoggledby),"video"===i[e.id]._L[e.L[0].id].type&&i.resetVideo&&setTimeout(function(){i.resetVideo(e.L,e.id)},100)),i[e.id].BUG_safari_clipPath&&!t&&e.L[0].classList.add("rs-pelock"),void 0!==i[e.id]._L[e.L[0].id].layerLoop&&i[e.id]._L[e.L[0].id].layerLoop.to===e.frame&&(-1==i[e.id]._L[e.L[0].id].layerLoop.repeat||i[e.id]._L[e.L[0].id].layerLoop.repeat>i[e.id]._L[e.L[0].id].layerLoop.count)&&i.renderLayerAnimation({layer:i[e.id]._L[e.L[0].id].c,frame:i[e.id]._L[e.L[0].id].layerLoop.from,updateChildren:i[e.id]._L[e.L[0].id].layerLoop.children,mode:"continue",fastforward:!0===i[e.id]._L[e.L[0].id].layerLoop.keep,id:e.id})},l=function(e,t){var i=jQuery.extend(!0,{},e.transform);return(i.originX||i.originY||i.originZ)&&(i.transformOrigin=(void 0===i.originX?"50%":i.originX)+" "+(void 0===i.originY?"50%":i.originY)+" "+(void 0===i.originZ?"50%":i.originZ),delete i.originX,delete i.originY,delete i.originZ),void 0!==e&&void 0!==e.filter&&(i["-webkit-filter"]="blur("+(e.filter.blur||0)+"px) grayscale("+(e.filter.grayscale||0)+"%) brightness("+(e.filter.brightness||100)+"%)",i.filter="blur("+(e.filter.blur||0)+"px) grayscale("+(e.filter.grayscale||0)+"%) brightness("+(e.filter.brightness||100)+"%)"),i.color=void 0===i.color?"rgba(255,255,255,1)":i.color,i.force3D="auto",i.backgroundImage&&"string"==typeof i.backgroundImage&&-1!==i.backgroundImage.search("gradient")&&180!==c(t.css("backgroundImage"))&&180===c(i.backgroundImage)&&(i.backgroundImage=d(i.backgroundImage,180)),i},d=function(e,t){var i=(e=e.split("("))[0];return e.shift(),i+"("+t+"deg, "+e.join("(")},c=function(e){if(-1!==e.search("deg,")){var t=e.split("deg,")[0];if(-1!==t.search(/\(/))return parseInt(t.split("(")[1],10)}return 180},p=function(e,t){e=void 0===e?"":e.split(";");var a={fill:i.revToResp("#ffffff",i[t].rle),stroke:"transparent","stroke-width":"0px","stroke-dasharray":"0","stroke-dashoffset":"0"};for(var r in e)if(e.hasOwnProperty(r)){var o=e[r].split(":");switch(o[0]){case"c":a.fill=i.revToResp(o[1],i[t].rle,void 0,"||");break;case"sw":a["stroke-width"]=o[1];break;case"sc":a.stroke=o[1];break;case"so":a["stroke-dashoffset"]=o[1];break;case"sa":a["stroke-dasharray"]=o[1]}}return a},u=function(e){return"c"===e?"center":"l"===e?"left":"r"===e?"right":e},h=function(e){var t=i[e.id]._L[e.layer[0].id],a=!1;if(t.splitText&&!1!==t.splitText&&t.splitText.revert(),"text"===t.type||"button"===t.type){for(var r in t.frames)if(void 0!==t.frames[r].chars||void 0!==t.frames[r].words||void 0!==t.frames[r].lines){a=!0;break}t.splitText=!!a&&new punchgs.SplitText(t.c,{type:"lines,words,chars",wordsClass:"rs_splitted_words",linesClass:"rs_splitted_lines",charsClass:"rs_splitted_chars"})}else t.splitText=!1},g=function(e,t,i){if(void 0!==e&&e.indexOf("block")>=0){var a={};switch(0===t.find(".tp-blockmask_in").length&&(t.append('<div class="tp-blockmask_in"></div>'),t.append('<div class="tp-blockmask_out"></div>')),i=void 0===i?punchgs.Power3.easeInOut:i,a.ft=[{scaleY:1,scaleX:0,transformOrigin:"0% 50%"},{scaleY:1,scaleX:1,ease:i,immediateRender:!1}],a.t={scaleY:1,scaleX:0,transformOrigin:"100% 50%",ease:i,immediateRender:!1},a.bmask_in=t.find(".tp-blockmask_in"),a.bmask_out=t.find(".tp-blockmask_out"),a.type="block",e){case"blocktoleft":case"blockfromright":a.ft[0].transformOrigin="100% 50%",a.t.transformOrigin="0% 50%";break;case"blockfromtop":case"blocktobottom":a.ft=[{scaleX:1,scaleY:0,transformOrigin:"50% 0%"},{scaleX:1,scaleY:1,ease:i,immediateRender:!1}],a.t={scaleX:1,scaleY:0,transformOrigin:"50% 100%",ease:i,immediateRender:!1};break;case"blocktotop":case"blockfrombottom":a.ft=[{scaleX:1,scaleY:0,transformOrigin:"50% 100%"},{scaleX:1,scaleY:1,ease:i,immediateRender:!1}],a.t={scaleX:1,scaleY:0,transformOrigin:"50% 0%",ease:i,immediateRender:!1}}return a.ft[1].overwrite="auto",a.t.overwrite="auto",a}return!1},f=function(e,t,a,r,o){return 0===i[o].sdir||void 0===t?e:("mask"===a?r="x"===r?"mX":"y"===r?"mY":r:"chars"===a?r="x"===r?"cX":"y"===r?"cY":"dir"===r?"cD":r:"words"===a?r="x"===r?"wX":"y"===r?"wY":"dir"===r?"wD":r:"lines"===a&&(r="x"===r?"lX":"y"===r?"lY":"dir"===r?"lD":r),void 0===t[r]||!1===t[r]?e:void 0!==t&&!0===t[r]?"t"===e||"top"===e?"b":"b"===e||"bottom"===e?"t":"l"===e||"left"===e?"r":"r"===e||"right"===e?"l":-1*e:void 0)},m=function(e){var t=i[e.id]._L[e.layer[0].id],a=void 0===e.source?jQuery.extend(!0,{},e.frame.transform):jQuery.extend(!0,{},e.frame[e.source]),r={originX:"50%",originY:"50%",originZ:"0"},o=i[e.id].conw,s=i[e.id].conh;for(var n in a)if(a.hasOwnProperty(n))if(a[n]="object"==typeof a[n]?a[n][i[e.id].level]:a[n],"inherit"===a[n]||"delay"===n||"direction"===n||"use"===n)delete a[n];else if("originX"===n||"originY"===n||"originZ"===n)r[n]=a[n],delete a[n];else if(jQuery.isNumeric(a[n],0))a[n]=f(a[n],e.frame.reverse,e.target,n,e.id,e.id);else if("r"===a[n][0]&&"a"===a[n][1]&&"random"!==a[n]){a[n]=a[n].replace("ran(","").replace(")","");var l=a[n].indexOf("%")>=0?"%":"",d=a[n].split("|");if(d[0]=parseFloat(d[0]),d[1]=parseFloat(d[1]),void 0!==e.splitAmount&&e.splitAmount>1){a[n]="["+(Math.random()*(d[1]-d[0])+d[0])+l;for(var c=0;c<e.splitAmount;c++)a[n]=a[n]+"|"+(Math.random()*(d[1]-d[0])+d[0])+l;a[n]=a[n]+"]"}else a[n]=Math.random()*(d[1]-d[0])+d[0]+l}else{a[n]=a[n].replace("[","").replace("]",""),a[n]=a[n].replace("cyc(","").replace(")","");var p=parseInt(a[n],0);if(a[n].indexOf("%")>=0&&jQuery.isNumeric(p))"x"==n?a[n]=f(t.eow*p/100,e.frame.reverse,e.target,n,e.id):"y"==n&&(a[n]=f(t.eoh*p/100,e.frame.reverse,e.target,n,e.id));else switch(a[n]=f(a[n],e.frame.reverse,e.target,n,e.id,e.id),a[n]){case"t":case"top":a[n]=0-t.eoh-("column"===t.type?0:t.calcy);break;case"b":case"bottom":a[n]=s-("column"===t.type?0:t.calcy);break;case"l":case"left":a[n]=0-t.eow-("column"===t.type?0:t.calcx);break;case"r":case"right":a[n]=o-("column"===t.type?0:t.calcx);break;case"m":case"c":case"middle":case"center":"x"===n&&(a[n]=f(o/2-("column"===t.type?0:t.calcx)-t.eow/2,e.frame.reverse,e.target,n,e.id)),"y"===n&&(a[n]=f(s/2-("column"===t.type?0:t.calcy)-t.eoh/2,e.frame.reverse,e.target,n,e.id))}}if(a.transformOrigin=r.originX+" "+r.originY+" "+r.originZ,!i[e.id].BUG_ie_clipPath&&void 0!==a.clip&&void 0!==t.clipPath&&t.clipPath.use){var u="rectangle"==t.clipPath.type,h=parseInt(a.clip,0),g=100-parseInt(a.clipB,0),m=Math.round(h/2);switch(t.clipPath.origin){case"invh":a.clipPath="polygon(0% 0%, 0% 100%, "+h+"% 100%, "+h+"% 0%, 100% 0%, 100% 100%, "+g+"% 100%, "+g+"% 0%, 0% 0%)";break;case"invv":a.clipPath="polygon(100% 0%, 0% 0%, 0% "+h+"%, 100% "+h+"%, 100% 100%, 0% 100%, 0% "+g+"%, 100% "+g+"%, 100% 0%)";break;case"cv":a.clipPath=u?"polygon("+(50-m)+"% 0%, "+(50+m)+"% 0%, "+(50+m)+"% 100%, "+(50-m)+"% 100%)":"circle("+h+"% at 50% 50%)";break;case"ch":a.clipPath=u?"polygon(0% "+(50-m)+"%, 0% "+(50+m)+"%, 100% "+(50+m)+"%, 100% "+(50-m)+"%)":"circle("+h+"% at 50% 50%)";break;case"l":a.clipPath=u?"polygon(0% 0%, "+h+"% 0%, "+h+"% 100%, 0% 100%)":"circle("+h+"% at 0% 50%)";break;case"r":a.clipPath=u?"polygon("+(100-h)+"% 0%, 100% 0%, 100% 100%, "+(100-h)+"% 100%)":"circle("+h+"% at 100% 50%)";break;case"t":a.clipPath=u?"polygon(0% 0%, 100% 0%, 100% "+h+"%, 0% "+h+"%)":"circle("+h+"% at 50% 0%)";break;case"b":a.clipPath=u?"polygon(0% 100%, 100% 100%, 100% "+(100-h)+"%, 0% "+(100-h)+"%)":"circle("+h+"% at 50% 100%)";break;case"lt":a.clipPath=u?"polygon(0% 0%,"+2*h+"% 0%, 0% "+2*h+"%)":"circle("+h+"% at 0% 0%)";break;case"lb":a.clipPath=u?"polygon(0% "+(100-2*h)+"%, 0% 100%,"+2*h+"% 100%)":"circle("+h+"% at 0% 100%)";break;case"rt":a.clipPath=u?"polygon("+(100-2*h)+"% 0%, 100% 0%, 100% "+2*h+"%)":"circle("+h+"% at 100% 0%)";break;case"rb":a.clipPath=u?"polygon("+(100-2*h)+"% 100%, 100% 100%, 100% "+(100-2*h)+"%)":"circle("+h+"% at 100% 100%)";break;case"clr":a.clipPath=u?"polygon(0% 0%, 0% "+h+"%, "+(100-h)+"% 100%, 100% 100%, 100% "+(100-h)+"%, "+h+"% 0%)":"circle("+h+"% at 50% 50%)";break;case"crl":a.clipPath=u?"polygon(0% "+(100-h)+"%, 0% 100%, "+h+"% 100%, 100% "+h+"%, 100% 0%, "+(100-h)+"% 0%)":"circle("+h+"% at 50% 50%)"}a["-webkit-clip-path"]=a.clipPath,delete a.clip}else delete a.clip;return"mask"!==e.target&&(void 0===e.frame||void 0===e.frame.filter&&!e.forcefilter||(a["-webkit-filter"]="blur("+(null==e.frame.filter?0:e.frame.filter.blur||0)+"px) grayscale("+(null==e.frame.filter?0:e.frame.filter.grayscale||0)+"%) brightness("+(null==e.frame.filter?100:e.frame.filter.brightness||100)+"%)",a.filter="blur("+(null==e.frame.filter?0:e.frame.filter.blur||0)+"px) grayscale("+(null==e.frame.filter?0:e.frame.filter.grayscale||0)+"%) brightness("+(null==e.frame.filter?100:e.frame.filter.brightness||100)+"%)"),jQuery.inArray(e.source,["chars","words","lines"])>=0&&(void 0!==e.frame[e.source].blur||e.forcefilter)&&(a["-webkit-filter"]="blur("+(parseInt(e.frame[e.source].blur,0)||0)+"px) grayscale("+(parseInt(e.frame[e.source].grayscale,0)||0)+"%) brightness("+(parseInt(e.frame[e.source].brightness,0)||100)+"%)",a.filter="blur("+(parseInt(e.frame[e.source].blur,0)||0)+"px) grayscale("+(parseInt(e.frame[e.source].grayscale,0)||0)+"%) brightness("+(parseInt(e.frame[e.source].brightness,0)||100)+"%)")),a.ease=void 0!==a.ease?a.ease:void 0===a.ease&&void 0!==e.ease||void 0!==a.ease&&void 0!==e.ease&&"inherit"===a.ease?e.ease:e.frame.timeline.ease,a.ease=void 0===a.ease||"default"===a.ease?punchgs.Power3.easeInOut:a.ease,a},v=function(e){var t;for(var i in e)"string"==typeof e[i]&&e[i].indexOf("|")>=0&&((t=void 0===t?{}:t)[i]=e[i].replace("[","").replace("]","").split("|"),delete e[i]);return void 0!==t&&(e.cycle=t),e},y=function(e,t){var i,a,r,o=e.length-1,s=[];switch(t){case"forward":case"f":case"random":case"r":for(i=0;i<=o;i++)s.push(i);"random"!==t&&"r"!==t||(s=function(e){for(var t,i,a=e.length;0!==a;)i=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[i],e[i]=t;return e}(s));break;case"b":case"backward":for(i=0;i<=o;i++)s.push(o-i);break;case"m":case"middletoedge":var n=Math.ceil(o/2);for(r=n-1,a=n+1,s.push(n),i=0;i<n;i++)r>=0&&s.push(r),a<=o&&s.push(a),r--,a++;break;case"e":case"edgetomiddle":for(r=o,a=0,i=0;i<=Math.floor(o/2);i++)s.push(r),a<r&&s.push(a),r--,a++;break;default:for(i=0;i<=o;i++)s.push(i)}var l=[];for(var d in s)s.hasOwnProperty(d)&&l.push(e[s[d]]);return l},b=function(e,t,a,r,o){var s,n,l={},d={},c={};for(var p in r=void 0===r?"transform":r,"loop"===o?(c.autoRotate=!1,c.yoyo_filter=!1,c.yoyo_rotate=!1,c.yoyo_move=!1,c.yoyo_scale=!1,c.curved=!1,c.curviness=2,c.ease="Linear.easeNone",c.speed=1e3,c.st=0,l.x=0,l.y=0,l.z=0,l.xr=0,l.yr=0,l.zr=0,l.scaleX=1,l.scaleY=1,l.originX="50%",l.originY="50%",l.originZ="0",l.rotationX="0deg",l.rotationY="0deg",l.rotationZ="0deg"):(c.speed=300,a?c.ease="default":l.ease="default"),"sfx"===o&&(l.fxc="#ffffff"),e=e.split(";"))if(e.hasOwnProperty(p)){var u=e[p].split(":");switch(u[0]){case"u":l.use="true"===u[1]||"t"===u[1]||fasle;break;case"c":s=u[1];break;case"fxc":l.fxc=u[1];break;case"bgc":n=u[1];break;case"auto":l.auto="t"===u[1]||void 0===u[1]||"true"===u[1];break;case"o":l.opacity=u[1];break;case"oX":l.originX=u[1];break;case"oY":l.originY=u[1];break;case"oZ":l.originZ=u[1];break;case"sX":l.scaleX=u[1];break;case"sY":l.scaleY=u[1];break;case"skX":l.skewX=u[1];break;case"skY":l.skewY=u[1];break;case"rX":l.rotationX=u[1];break;case"rY":l.rotationY=u[1];break;case"rZ":l.rotationZ=u[1];break;case"sc":l.color=u[1];break;case"se":l.effect=u[1];break;case"bos":l.borderStyle=u[1];break;case"boc":l.borderColor=u[1];break;case"td":l.textDecoration=u[1];break;case"zI":l.zIndex=u[1];break;case"tp":l.transformPerspective=u[1];break;case"cp":l.clip=parseInt(u[1],0);break;case"cpb":l.clipB=parseInt(u[1],0);break;case"fpr":l.fpr="t"===u[1]||"true"===u[1]||!0===u[1];break;case"aR":c.autoRotate="t"==u[1];break;case"rA":c.radiusAngle=u[1];break;case"yyf":c.yoyo_filter="t"==u[1];break;case"yym":c.yoyo_move="t"==u[1];break;case"yyr":c.yoyo_rotate="t"==u[1];break;case"yys":c.yoyo_scale="t"==u[1];break;case"crd":c.curved="t"==u[1];break;case"x":l.x="reverse"===o?"t"===u[1]||!0===u[1]||"true"==u[1]:"loop"===o?parseInt(u[1],0):i.revToResp(u[1],i[t].rle);break;case"y":l.y="reverse"===o?"t"===u[1]||!0===u[1]||"true"==u[1]:"loop"===o?parseInt(u[1],0):i.revToResp(u[1],i[t].rle);break;case"z":l.z="loop"===o?parseInt(u[1],0):i.revToResp(u[1],i[t].rle);break;case"bow":l.borderWidth=i.revToResp(u[1],4,0).toString().replace(/,/g," ");break;case"bor":l.borderRadius=i.revToResp(u[1],4,0).toString().replace(/,/g," ");break;case"m":l.mask="t"===u[1]||"f"!==u[1]&&u[1];break;case"xR":l.xr=parseInt(u[1],0);break;case"yR":l.yr=parseInt(u[1],0);break;case"zR":l.zr=parseInt(u[1],0);break;case"blu":"loop"===o?l.blur=parseInt(u[1],0):d.blur=parseInt(u[1],0);break;case"gra":"loop"===o?l.grayscale=parseInt(u[1],0):d.grayscale=parseInt(u[1],0);break;case"bri":"loop"===o?l.brightness=parseInt(u[1],0):d.brightness=parseInt(u[1],0);break;case"sp":c.speed=parseInt(u[1],0);break;case"d":l.delay=parseInt(u[1],0);break;case"crns":c.curviness=parseInt(u[1],0);break;case"st":c.start="w"===u[1]||"a"===u[1]?"+=0":u[1],c.waitoncall="w"===u[1]||"a"===u[1];break;case"sA":c.startAbsolute=u[1];break;case"sR":c.startRelative=u[1];break;case"e":a?c.ease=u[1]:l.ease=u[1];break;default:u[0].length>0&&(l[u[0]]="t"===u[1]||"f"!==u[1]&&u[1])}}var h={timeline:c};return jQuery.isEmptyObject(d)||("split"===o?l=jQuery.extend(!0,l,d):h.filter=d),"split"===o&&void 0===l.dir&&(l.dir="forward"),jQuery.isEmptyObject(s)||(h.color=s),jQuery.isEmptyObject(n)||(h.bgcolor=n),h[r]=l,h},w=function(e,t){var a={},r=0;if(void 0===window.rdF0){var o=b("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;dir:forward;d:5",t).transform;window.rdF0=window.rdF1={transform:b("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;tp:600px",t,!0).transform,mask:b("x:0;y:0",t,!0).transform,chars:jQuery.extend(!0,{blur:0,grayscale:0,brightness:100},o),words:jQuery.extend(!0,{blur:0,grayscale:0,brightness:100},o),lines:jQuery.extend(!0,{blur:0,grayscale:0,brightness:100},o)},window.rdF1.transform.opacity=window.rdF1.chars.opacity=window.rdF1.words.opacity=window.rdF1.lines.opacity=window.rdF1.transform.scaleX=window.rdF1.chars.scaleX=window.rdF1.words.scaleX=window.rdF1.lines.scaleX=window.rdF1.transform.scaleY=window.rdF1.chars.scaleY=window.rdF1.words.scaleY=window.rdF1.lines.scaleY=1}for(var r in void 0===e.frame_0&&(e.frame_0="x:0"),void 0===e.frame_1&&(e.frame_1="x:0"),e.ford)if(e.ford.hasOwnProperty(r)){var s=e.ford[r];if(e[s]){if(a[s]=b(e[s],t,!0),void 0!==a[s].bgcolor&&(e.bgcolinuse=!0),i[t].BUG_ie_clipPath&&void 0!==e.clipPath&&e.clipPath.use&&void 0!==a[s].transform.clip){var n="rectangle"===e.clipPath.type?100-parseInt(a[s].transform.clip):100-Math.min(100,2*parseInt(a[s].transform.clip));switch(e.clipPath.origin){case"clr":case"rb":case"rt":case"r":e[s+"_mask"]="u:t;x:"+n+"%;y:0px;",a[s].transform.x=i.revToResp("-"+n+"%",i[t].rle);break;case"crl":case"lb":case"lt":case"cv":case"l":e[s+"_mask"]="u:t;x:-"+n+"%;y:0px;",a[s].transform.x=i.revToResp(n+"%",i[t].rle);break;case"ch":case"t":e[s+"_mask"]="u:t;y:-"+n+"%;y:0px;",a[s].transform.y=i.revToResp(n+"%",i[t].rle);break;case"b":e[s+"_mask"]="u:t;y:"+n+"%;y:0px;",a[s].transform.y=i.revToResp("-"+n+"%",i[t].rle)}delete a[s].transform.clip,delete a[s].transform.clipB,e.maskinuse=!0}e[s+"_mask"]&&(a[s].mask=b(e[s+"_mask"],t).transform),null!=a[s].mask&&a[s].mask.use?(a[s].mask.x=void 0===a[s].mask.x?0:a[s].mask.x,a[s].mask.y=void 0===a[s].mask.y?0:a[s].mask.y,delete a[s].mask.use,a[s].mask.overflow="hidden"):a[s].mask={ease:"default",overflow:"visible"},e[s+"_chars"]&&(a[s].chars=b(e[s+"_chars"],t,void 0,void 0,"split").transform),e[s+"_words"]&&(a[s].words=b(e[s+"_words"],t,void 0,void 0,"split").transform),e[s+"_lines"]&&(a[s].lines=b(e[s+"_lines"],t,void 0,void 0,"split").transform),(e[s+"_chars"]||e[s+"_words"]||e[s+"_lines"])&&(a[s].split=!0),a.frame_0=void 0===a.frame_0?{transform:{}}:a.frame_0,a[s].transform.auto&&(a[s].transform=jQuery.extend(!0,{},a.frame_0.transform),a[s].transform.opacity=void 0===a[s].transform.opacity?0:a[s].transform.opacity,void 0!==a.frame_0.filter&&(a[s].filter=jQuery.extend(!0,{},a.frame_0.filter)),void 0!==a.frame_0.mask&&(a[s].mask=jQuery.extend(!0,{},a.frame_0.mask)),void 0!==a.frame_0.chars&&(a[s].chars=jQuery.extend(!0,{},a.frame_0.chars)),void 0!==a.frame_0.words&&(a[s].words=jQuery.extend(!0,{},a.frame_0.words)),void 0!==a.frame_0.lines&&(a[s].lines=jQuery.extend(!0,{},a.frame_0.lines))),e[s+"_sfx"]&&(a[s].sfx=b(e[s+"_sfx"],t,!1,void 0,"sfx").transform),e[s+"_reverse"]&&(a[s].reverse=b(e[s+"_reverse"],t,!1,void 0,"reverse").transform)}}if(a.frame_0.split&&(a.frame_1.split=!0),void 0!==a.frame_0.transform.fpr&&(e.forceRender=a.frame_0.transform.fpr,delete a.frame_0.transform.fpr),void 0===e.frame_hover&&void 0===e.svgh||(a.frame_hover=b(void 0===e.frame_hover?"":e.frame_hover,t),a.frame_hover.transform.color=a.frame_hover.color,void 0===a.frame_hover.transform.color&&delete a.frame_hover.transform.color,void 0!==a.frame_hover.bgcolor&&a.frame_hover.bgcolor.indexOf("gradient")>=0?a.frame_hover.transform.backgroundImage=a.frame_hover.bgcolor:void 0!==a.frame_hover.bgcolor&&(a.frame_hover.transform.backgroundColor=a.frame_hover.bgcolor),void 0!==a.frame_hover.bgcolor&&(e.bgcolinuse=!0),a.frame_hover.transform.opacity=void 0===a.frame_hover.transform.opacity?1:a.frame_hover.transform.opacity,a.frame_hover.mask=void 0!==a.frame_hover.transform.mask&&a.frame_hover.transform.mask,delete a.frame_hover.transform.mask,void 0!==a.frame_hover.transform&&((a.frame_hover.transform.borderWidth||a.frame_hover.transform.borderStyle)&&(a.frame_hover.transform.borderColor=void 0===a.frame_hover.transform.borderColor?"transparent":a.frame_hover.transform.borderColor),"none"!==a.frame_hover.transform.borderStyle&&void 0===a.frame_hover.transform.borderWidth&&(a.frame_hover.transform.borderWidth=i.revToResp(0,4,0).toString().replace(/,/g," ")),void 0===e.bordercolor&&void 0!==a.frame_hover.transform.borderColor&&(e.bordercolor="transparent"),void 0===e.borderwidth&&void 0!==a.frame_hover.transform.borderWidth&&(e.borderwidth=i.revToResp(a.frame_hover.transform.borderWidth,4,0)),void 0===e.borderstyle&&void 0!==a.frame_hover.transform.borderStyle&&(e.borderstyle=i.revToResp(a.frame_hover.transform.borderStyle,4,0)))),void 0!==e.tloop){e.layerLoop={from:"frame_1",to:"frame_999",repeat:-1,keep:!0,children:!0};var l=e.tloop.split(";");for(var r in l)if(l.hasOwnProperty(r)){var d=l[r].split(":");switch(d[0]){case"f":e.layerLoop.from=d[1];break;case"t":e.layerLoop.to=d[1];break;case"k":e.layerLoop.keep=d[1];break;case"r":e.layerLoop.repeat=parseInt(d[1],0);break;case"c":e.layerLoop.children=d[1]}}e.layerLoop.count=0}for(var r in(e.loop_0||e.loop_999)&&(a.loop=b(e.loop_999,t,!0,"frame_999","loop"),a.loop.frame_0=b(e.loop_0||"",t,!1,void 0,"loop").transform),a.frame_0.transform.opacity=void 0===a.frame_0.transform.opacity?0:a.frame_0.transform.opacity,a.frame_1.transform.opacity=void 0===a.frame_1.transform.opacity?1:a.frame_1.transform.opacity,a.frame_999.transform.opacity=void 0===a.frame_999.transform.opacity?"inherit":a.frame_999.transform.opacity,a.frame_0.transform.transformPerspective=void 0===a.frame_0.transform.transformPerspective?"600px":a.frame_0.transform.transformPerspective,e.clipPath&&e.clipPath.use&&(a.frame_0.transform.clip=void 0===a.frame_0.transform.clip?100:parseInt(a.frame_0.transform.clip),a.frame_1.transform.clip=void 0===a.frame_1.transform.clip?100:parseInt(a.frame_1.transform.clip)),e.resetfilter=!1,a)void 0!==a[r].filter&&(e.resetfilter=!0);return e.resetfilter&&(a.frame_0.filter=jQuery.extend(!0,{},a.frame_0.filter),a.frame_0.filter.blur=void 0===a.frame_0.filter.blur?0:a.frame_0.filter.blur,a.frame_0.filter.brightness=void 0===a.frame_0.filter.brightness?100:a.frame_0.filter.brightness,a.frame_0.filter.grayscale=void 0===a.frame_0.filter.grayscale?0:a.frame_0.filter.grayscale),void 0!==a.frame_0.filter&&(a.frame_1.filter=jQuery.extend(!0,{},a.frame_1.filter),void 0!==a.frame_0.filter.blur&&0!==a.frame_1.filter.blur&&(a.frame_1.filter.blur=void 0===a.frame_1.filter.blur?0:a.frame_1.filter.blur),void 0!==a.frame_0.filter.brightness&&100!==a.frame_1.filter.brightness&&(a.frame_1.filter.brightness=void 0===a.frame_1.filter.brightness?100:a.frame_1.filter.brightness),void 0!==a.frame_0.filter.grayscale&&0!==a.frame_1.filter.grayscale&&(a.frame_1.filter.grayscale=void 0===a.frame_1.filter.grayscale?0:a.frame_1.filter.grayscale)),_(a)},_=function(e){var t,i={},a=["transform","words","chars","lines","mask"];for(var r in e)"loop"!==r&&"frame_hover"!==r&&(i=jQuery.extend(!0,i,e[r]));for(var r in e)if(e.hasOwnProperty(r)&&"loop"!==r&&"frame_hover"!==r){for(t in i.transform)i.transform.hasOwnProperty(t)&&(i.transform[t]=void 0===e[r].transform[t]?"frame_0"===r?window.rdF0.transform[t]:"frame_1"===r?window.rdF1.transform[t]:i.transform[t]:e[r].transform[t],e[r].transform[t]=void 0===e[r].transform[t]?i.transform[t]:e[r].transform[t]);for(var o=1;o<=4;o++)for(t in i[a[o]])i[a[o]].hasOwnProperty(t)&&(e[r][a[o]]=void 0===e[r][a[o]]?{}:e[r][a[o]],i[a[o]][t]=void 0===e[r][a[o]][t]?"frame_0"===r?window.rdF0[a[o]][t]:"frame_1"===r?window.rdF1[a[o]][t]:i[a[o]][t]:e[r][a[o]][t],e[r][a[o]][t]=void 0===e[r][a[o]][t]?i[a[o]][t]:e[r][a[o]][t])}return e},x=function(e,t){if(0===e.length)return{};for(var i=e[0].getElementsByClassName(t),a={},r=0;r<i.length;r++)a[i[r].id]=i[r];return a},k=function(e,t,a){if("BR"==e[0].nodeName||"br"==e[0].tagName||"object"!=typeof e[0].className&&e[0].className.indexOf("rs_splitted_")>=0)return!1;i.sA(e[0],"stylerecorder",!0);var r=window.getComputedStyle(e[0],null),o=void 0!==e[0].id&&void 0!==i[a]._L[e[0].id]?i[a]._L[e[0].id]:e.data(),s="rekursive"===t?e.closest(".rs-layer"):void 0,n=void 0!==s&&r.fontSize===s.css("fontSize")&&r.fontWeight===s.css("fontWeight")&&r.lineHeight===s.css("lineHeight"),l=n?void 0!==s[0].id&&void 0!==i[a]._L[s[0].id]?i[a]._L[s[0].id]:s.data():void 0,d=0;o.basealign=void 0===o.basealign?"grid":o.basealign,o._isnotext||(o.fontSize=i.revToResp(n?void 0===l.fontsize?parseInt(s.css("fontSize"),0)||20:l.fontsize:void 0===o.fontsize?"rekursive"!==t?20:"inherit":o.fontsize,i[a].rle),o.fontWeight=i.revToResp(n?void 0===l.fontweight?s.css("fontWeight")||"inherit":l.fontweight:void 0===o.fontweight?e.css("fontWeight")||"inherit":o.fontweight,i[a].rle),o.whiteSpace=i.revToResp(n?void 0===l.whitespace?"nowrap":l.whitespace:void 0===o.whitespace?"nowrap":o.whitespace,i[a].rle),o.textAlign=i.revToResp(n?void 0===l.textalign?"left":l.textalign:void 0===o.textalign?"left":o.textalign,i[a].rle),o.letterSpacing=i.revToResp(n?void 0===l.letterspacing?parseInt(s.css("letterSpacing"),0)||"inherit":l.letterspacing:void 0===o.letterspacing?parseInt(e.css("letterSpacing"),0)||"inherit":o.letterspacing,i[a].rle),o.textDecoration=n?void 0===l.textDecoration?"none":l.textDecoration:void 0===o.textDecoration?"none":o.textDecoration,d=25,d=void 0!==s&&"I"===e[0].tagName?"inherit":d,void 0!==o.tshadow&&(o.tshadow.b=i.revToResp(o.tshadow.b,i[a].rle),o.tshadow.h=i.revToResp(o.tshadow.h,i[a].rle),o.tshadow.v=i.revToResp(o.tshadow.v,i[a].rle))),void 0!==o.bshadow&&(o.bshadow.b=i.revToResp(o.bshadow.b,i[a].rle),o.bshadow.h=i.revToResp(o.bshadow.h,i[a].rle),o.bshadow.v=i.revToResp(o.bshadow.v,i[a].rle),o.bshadow.s=i.revToResp(o.bshadow.s,i[a].rle)),o.display=n?void 0===l.display?s.css("display"):l.display:void 0===o.display?e.css("display"):o.display,o.float=i.revToResp(n?void 0===l.float?s.css("float")||"none":l.float:void 0===o.float?"none":o.float,i[a].rle),o.clear=i.revToResp(n?void 0===l.clear?s.css("clear")||"none":l.clear:void 0===o.clear?"none":o.clear,i[a].rle),o.lineHeight=i.revToResp(e.is("img")||-1!=jQuery.inArray(o.layertype,["video","image","audio"])?d:n?void 0===l.lineheight?parseInt(s.css("lineHeight"),0)||d:l.lineheight:void 0===o.lineheight?d:o.lineheight,i[a].rle),o.zIndex=n?void 0===l.zindex?parseInt(s.css("zIndex"),0)||"inherit":l.zindex:void 0===o.zindex?parseInt(e.css("zIndex"),0)||"inherit":o.zindex,o.paddingTop=i.revToResp(void 0===o.paddingtop?parseInt(r.paddingTop,0)||0:o.paddingtop,i[a].rle),o.paddingBottom=i.revToResp(void 0===o.paddingbottom?parseInt(r.paddingBottom,0)||0:o.paddingbottom,i[a].rle),o.paddingLeft=i.revToResp(void 0===o.paddingleft?parseInt(r.paddingLeft,0)||0:o.paddingleft,i[a].rle),o.paddingRight=i.revToResp(void 0===o.paddingright?parseInt(r.paddingRight,0)||0:o.paddingright,i[a].rle),o.marginTop=i.revToResp(void 0===o.margintop?parseInt(r.marginTop,0)||0:o.margintop,i[a].rle),o.marginBottom=i.revToResp(void 0===o.marginbottom?parseInt(r.marginBottom,0)||0:o.marginbottom,i[a].rle),o.marginLeft=i.revToResp(void 0===o.marginleft?parseInt(r.marginLeft,0)||0:o.marginleft,i[a].rle),o.marginRight=i.revToResp(void 0===o.marginright?parseInt(r.marginRight,0)||0:o.marginright,i[a].rle),o.borderTopWidth=void 0===o.borderwidth?parseInt(r.borderTopWidth,0)||0:o.borderwidth[0],o.borderBottomWidth=void 0===o.borderwidth?parseInt(r.borderBottomWidth,0)||0:o.borderwidth[2],o.borderLeftWidth=void 0===o.borderwidth?parseInt(r.borderLeftWidth,0)||0:o.borderwidth[3],o.borderRightWidth=void 0===o.borderwidth?parseInt(r.borderRightWidth,0)||0:o.borderwidth[1],o.borderTopLeftRadius=i.revToResp(void 0===o.borderradius?r.borderTopLeftRadius||0:o.borderradius[0],i[a].rle),o.borderTopRightRadius=i.revToResp(void 0===o.borderradius?r.borderTopRightRadius||0:o.borderradius[1],i[a].rle),o.borderBottomLeftRadius=i.revToResp(void 0===o.borderradius?r.borderBottomLeftRadius||0:o.borderradius[3],i[a].rle),o.borderBottomRightRadius=i.revToResp(void 0===o.borderradius?r.borderBottomRightRadius||0:o.borderradius[2],i[a].rle),o.borderStyle=i.revToResp(void 0===o.borderstyle?r.borderStyle||0:o.borderstyle,i[a].rle),o.borderBottomColor=void 0===o.bordercolor?r["border-bottom-color"]:o.bordercolor,o.borderTopColor=void 0===o.bordercolor?r["border-top-color"]:o.bordercolor,o.borderLeftColor=void 0===o.bordercolor?r["border-left-color"]:o.bordercolor,o.borderRightColor=void 0===o.bordercolor?r["border-right-color"]:o.bordercolor,"rekursive"!==t?(o.color=i.revToResp(void 0===o.color?"#ffffff":o.color,i[a].rle,void 0,"||"),o.minWidth=i.revToResp(void 0===o.minwidth?parseInt(r.minWidth,0)||0:o.minwidth,i[a].rle),o.minHeight=i.revToResp(void 0===o.minheight?parseInt(r.minHeight,0)||0:o.minheight,i[a].rle),o.width=i.revToResp(void 0===o.width?"auto":i.smartConvertDivs(o.width),i[a].rle),o.height=i.revToResp(void 0===o.height?"auto":i.smartConvertDivs(o.height),i[a].rle),o.maxWidth=i.revToResp(void 0===o.maxwidth?parseInt(r.maxWidth,0)||"none":o.maxwidth,i[a].rle),o.maxHeight=i.revToResp(-1!==jQuery.inArray(o.type,["column","row"])?"none":void 0!==o.maxheight?parseInt(r.maxHeight,0)||"none":o.maxheight,i[a].rle)):"html"===o.layertype&&(o.width=i.revToResp(e[0].width,i[a].rle),o.height=i.revToResp(e[0].height,i[a].rle)),o.styleProps={background:e[0].style.background,"background-color":e[0].style["background-color"],color:e[0].style.color,cursor:e[0].style.cursor,"font-style":e[0].style["font-style"]},null==o.bshadow&&(o.styleProps.boxShadow=e[0].style.boxShadow),""!==o.styleProps.background&&void 0!==o.styleProps.background&&o.styleProps.background!==o.styleProps["background-color"]||delete o.styleProps.background,""==o.styleProps.color&&(o.styleProps.color=r.color)},T=function(e,t){if(void 0!==e){if("BR"==e[0].nodeName||"br"==e[0].tagName)return!1;var a=i[t].level,r=void 0!==e[0]&&void 0!==e[0].id&&void 0!==i[t]._L[e[0].id]?i[t]._L[e[0].id]:e.data(),o={basealign:void 0===(r=void 0===r.basealign?e.closest("rs-layer").data():r).basealign?"grid":r.basealign,lineHeight:void 0===r.basealign?"inherit":parseInt(r.lineHeight[a]),color:void 0===r.color?void 0:r.color[a],width:void 0===r.width?void 0:"a"===r.width[a]?"auto":r.width[a],height:void 0===r.height?void 0:"a"===r.height[a]?"auto":r.height[a],minWidth:void 0===r.minWidth?void 0:"n"===r.minWidth[a]?"none":r.minWidth[a],minHeight:void 0===r.minHeight?void 0:"n"==r.minHeight[a]?"none":r.minHeight[a],maxWidth:void 0===r.maxWidth?void 0:"n"==r.maxWidth[a]?"none":r.maxWidth[a],maxHeight:void 0===r.maxHeight?void 0:"n"==r.maxHeight[a]?"none":r.maxHeight[a],paddingTop:r.paddingTop[a],paddingBottom:parseInt(r.paddingBottom[a]),paddingLeft:parseInt(r.paddingLeft[a]),paddingRight:parseInt(r.paddingRight[a]),marginTop:parseInt(r.marginTop[a]),marginBottom:parseInt(r.marginBottom[a]),marginLeft:parseInt(r.marginLeft[a]),marginRight:parseInt(r.marginRight[a]),borderTopWidth:parseInt(r.borderTopWidth),borderBottomWidth:parseInt(r.borderBottomWidth),borderLeftWidth:parseInt(r.borderLeftWidth),borderRightWidth:parseInt(r.borderRightWidth),borderTopLeftRadius:r.borderTopLeftRadius[a],borderTopRightRadius:r.borderTopRightRadius[a],borderBottomLeftRadius:r.borderBottomLeftRadius[a],borderBottomRightRadius:r.borderBottomRightRadius[a],borderStyle:r.borderStyle[a],float:r.float[a],clear:r.clear[a]};return o.borderTopColor=r.borderTopColor,o.borderBottomColor=r.borderBottomColor,o.borderLeftColor=r.borderLeftColor,o.borderRightColor=r.borderRightColor,r._isnotext||(o.textDecoration=r.textDecoration,o.fontSize=parseInt(r.fontSize[a]),o.fontWeight=parseInt(r.fontWeight[a]),o.letterSpacing=parseInt(r.letterSpacing[a])||0,o.textAlign=r.textAlign[a],o.whiteSpace=r.whiteSpace[a],o.whiteSpace="normal"===o.whiteSpace&&"auto"===o.width&&!0!==r._incolumn?"nowrap":o.whiteSpace,o.display=r.display,void 0!==r.tshadow&&(o.textShadow=parseInt(r.tshadow.h[a],0)+"px "+parseInt(r.tshadow.v[a],0)+"px "+r.tshadow.b[a]+" "+r.tshadow.c),void 0!==r.tstroke&&(o.textStroke=parseInt(r.tstroke.w,0)+"px "+r.tstroke.c)),void 0!==r.bshadow&&(o.boxShadow=parseInt(r.bshadow.h[a],0)+"px "+parseInt(r.bshadow.v[a],0)+"px "+parseInt(r.bshadow.b[a],0)+"px "+parseInt(r.bshadow.s[a],0)+"px "+r.bshadow.c),o}},L=function(e,t,i,a,r){var o=jQuery.isNumeric(e)||void 0===e?"":e.indexOf("px")>=0?"px":e.indexOf("%")>=0?"%":"";return e=jQuery.isNumeric(parseInt(e))?parseInt(e):e,e=null==(e="full"===(e=jQuery.isNumeric(e)?e*t+o:e)?a:"auto"===e||"none"===e?i:e)?r:e},R=function(e,t,a,r){var o=i[t]._L[e[0].id];o=void 0===o?{}:o;var s=e[0].className;if("object"==typeof s&&(s=""),void 0!==e&&void 0!==e[0]&&(s.indexOf("rs_splitted")>=0||"BR"==e[0].nodeName||"br"==e[0].tagName||e[0].tagName.indexOf("FCR")>0||e[0].tagName.indexOf("BCR")>0))return!1;var n,l,d,c,p=T(e,t),u="off"===r?1:i[t].bw,h="off"===r?1:i[t].bh,g="column"!==o.type?{t:p.marginTop,b:p.marginBottom,l:p.marginLeft,r:p.marginRight}:{t:0,b:0,l:0,r:0};if("column"===o.type&&punchgs.TweenMax.set(o._column,{paddingTop:Math.round(p.marginTop*h)+"px",paddingBottom:Math.round(p.marginBottom*h)+"px",paddingLeft:Math.round(p.marginLeft*u)+"px",paddingRight:Math.round(p.marginRight*u)+"px"}),-1===s.indexOf("rs_splitted_")){var f={paddingTop:Math.round(p.paddingTop*h)+"px",paddingBottom:Math.round(p.paddingBottom*h)+"px",paddingLeft:Math.round(p.paddingLeft*u)+"px",paddingRight:Math.round(p.paddingRight*u)+"px",borderTopLeftRadius:p.borderTopLeftRadius,borderTopRightRadius:p.borderTopRightRadius,borderBottomLeftRadius:p.borderBottomLeftRadius,borderBottomRightRadius:p.borderBottomRightRadius,overwrite:"auto"};if(o._incolumn||(f.marginTop="row"===o.type?0:g.t*h+"px",f.marginBottom="row"===o.type?0:g.b*h+"px",f.marginLeft="row"===o.type?0:g.l*u+"px",f.marginRight="row"===o.type?0:g.r*u+"px"),void 0!==o.spike&&(f["clip-path"]=f["-webkit-clip-path"]=o.spike),p.boxShadow&&(f.boxShadow=p.boxShadow),"column"!==o.type&&(void 0!==p.borderStyle&&"none"!==p.borderStyle&&(0!==p.borderTopWidth||p.borderBottomWidth>0||p.borderLeftWidth>0||p.borderRightWidth>0)?(f.borderTopWidth=Math.round(p.borderTopWidth*h)+"px",f.borderBottomWidth=Math.round(p.borderBottomWidth*h)+"px",f.borderLeftWidth=Math.round(p.borderLeftWidth*u)+"px",f.borderRightWidth=Math.round(p.borderRightWidth*u)+"px",f.borderStyle=p.borderStyle,f.borderTopColor=p.borderTopColor,f.borderBottomColor=p.borderBottomColor,f.borderLeftColor=p.borderLeftColor,f.borderRightColor=p.borderRightColor):("none"===p.borderStyle&&(f.borderStyle="none"),f.borderTopColor=p.borderTopColor,f.borderBottomColor=p.borderBottomColor,f.borderLeftColor=p.borderLeftColor,f.borderRightColor=p.borderRightColor)),"shape"!==o.type&&"image"!==o.type||0===p.borderTopLeftRadius&&0===p.borderTopRightRadius&&0===p.borderBottomLeftRadius&&0===p.borderBottomRightRadius||(f.overflow="hidden"),o._isnotext||(f.fontSize=Math.round(p.fontSize*u)+"px",f.fontWeight=p.fontWeight,f.letterSpacing=p.letterSpacing*u+"px",f.lineHeight=Math.round(p.lineHeight*h)+"px",f.textAlign=p.textAlign,p.textShadow&&(f.textShadow=p.textShadow),p.textStroke&&(f["-webkit-text-stroke"]=p.textStroke)),"column"===o.type&&(void 0===o.cbg_set&&(o.cbg_set=o.styleProps["background-color"],o.cbg_set=""==o.cbg_set||void 0===o.cbg_set||0==o.cbg_set.length?"transparent":o.cbg_set,o.cbg_img=e.css("backgroundImage"),o.cbg_img_r=e.css("backgroundRepeat"),o.cbg_img_p=e.css("backgroundPosition"),o.cbg_img_s=e.css("backgroundSize"),o.cbg_o=o.bgopacity?1:o.bgopacity,punchgs.TweenMax.set(e,{backgroundColor:"transparent",backgroundImage:""})),f.backgroundColor="transparent",f.backgroundImage="none"),o._isstatic&&o.elementHovered&&(n=e.data("frames"))&&n.frame_hover&&n.frame_hover.transform)for(l in f)f.hasOwnProperty(l)&&n.frame_hover.transform.hasOwnProperty(l)&&delete f[l];if("IFRAME"==e[0].nodeName&&"html"===i.gA(e[0],"layertype")&&(d="slide"==p.basealign?i[t].ulw:i[t].gridwidth[i[t].level],c="slide"==p.basealign?i[t].ulh:i[t].gridheight[i[t].level],f.width=!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.width:d*parseInt(p.width,0)/100:L(p.width,u,"auto",d,"auto"),f.height=!jQuery.isNumeric(p.height)&&p.height.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.height:c*parseInt(p.height,0)/100:L(p.height,h,"auto",d,"auto")),punchgs.TweenMax.set(e,f),"rekursive"!=a){d="slide"==p.basealign?i[t].ulw:i[t].gridwidth[i[t].level],c="slide"==p.basealign?i[t].ulh:i[t].gridheight[i[t].level];var m=!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.width:d*parseInt(p.width,0)/100:L(p.width,u,"auto",d,"auto"),v=!jQuery.isNumeric(p.height)&&p.height.indexOf("%")>=0?!o._isstatic||o._incolumn||o._ingroup?p.height:c*parseInt(p.height,0)/100:L(p.height,h,"auto",d,"auto"),y={maxWidth:L(p.maxWidth,u,"none",d,"none"),maxHeight:L(p.maxHeight,h,"none",c,"none"),minWidth:L(p.minWidth,u,"0px",d,0),minHeight:L(p.minHeight,h,"0px",c,0),height:v,width:m,overwrite:"auto"};if(1==o.heightSetByVideo&&delete y.height,o._incolumn?(punchgs.TweenMax.set([o.p],{minWidth:m,maxWidth:m,marginTop:g.t*h+"px",marginBottom:g.b*h+"px",marginLeft:g.l*u+"px",marginRight:g.r*u+"px",float:p.float,clear:p.clear}),punchgs.TweenMax.set("block"===p.display?[o.lp]:[o.lp,o.m],{width:"100%"}),y.width=!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0?"100%":m,"image"===o.type&&punchgs.TweenMax.set(o.img,{width:y.width})):!jQuery.isNumeric(p.width)&&p.width.indexOf("%")>=0&&(punchgs.TweenMax.set([o.p],{minWidth:"slide"===o.basealign||!0===o._ingroup?m:i[t].gridwidth[i[t].level]*i[t].bw+"px"}),punchgs.TweenMax.set([o.lp,o.m],{width:"100%"})),!jQuery.isNumeric(p.height)&&p.height.indexOf("%")>=0&&(punchgs.TweenMax.set([o.p],{minHeight:"slide"===o.basealign||!0===o._ingroup?v:i[t].gridheight[i[t].level]*i[t].bw+"px"}),punchgs.TweenMax.set([o.lp,o.m],{height:"100%"})),o._isnotext||(y.whiteSpace=p.whiteSpace,y.textAlign=p.textAlign,y.textDecoration=p.textDecoration),"npc"!=p.color&&void 0!==p.color&&(y.color=p.color),o._ingroup&&(o._groupw=y.minWidth,o._grouph=y.minHeight),"row"===o.type&&(jQuery.isNumeric(y.minHeight)||y.minHeight.indexOf("px")>=0)&&"0px"!==y.minHeight&&0!==y.minHeight&&"0"!==y.minHeight&&"none"!==y.minHeight?y.height=y.minHeight:"row"===o.type&&(y.height="auto"),o._isstatic&&o.elementHovered&&(n=e.data("frames"))&&n.frame_hover&&n.frame_hover.transform)for(l in y)y.hasOwnProperty(l)&&n.frame_hover.transform.hasOwnProperty(l)&&delete y[l];"image"===o.type&&(!jQuery.isNumeric(y.width)&&y.width.indexOf("%")>=0&&(y.width="100%"),!jQuery.isNumeric(y.height)&&y.height.indexOf("%")>=0&&(y.height="100%")),o._isgroup&&(!jQuery.isNumeric(y.width)&&y.width.indexOf("%")>=0&&(y.width="100%"),punchgs.TweenMax.set(o.p,{height:y.height})),punchgs.TweenMax.set(e,y),null!=o.svg_src&&void 0!==o.svgI&&("string"==typeof o.svgI.fill&&(o.svgI.fill=[o.svgI.fill]),o.svgTemp=jQuery.extend(!0,{},o.svgI),o.svgTemp.fill=o.svgTemp.fill[i[t].level],punchgs.TweenMax.set(o.svg,o.svgTemp),punchgs.TweenMax.set(o.svgPath,{fill:o.svgI.fill[i[t].level]}))}"row"===o.type&&(f={paddingTop:g.t*h+"px",paddingBottom:g.b*h+"px",paddingLeft:g.l*u+"px",paddingRight:g.r*u+"px"},punchgs.TweenMax.set(o.p,f)),"column"===o.type&&o.cbg&&o.cbg.length>0&&(o.cbg[0].style.backgroundSize=o.cbg_img_s,punchgs.TweenMax.set(o.cbg,{cursor:o.styleProps.cursor,borderTopWidth:Math.round(p.borderTopWidth*h)+"px",borderBottomWidth:Math.round(p.borderBottomWidth*h)+"px",borderLeftWidth:Math.round(p.borderLeftWidth*u)+"px",borderRightWidth:Math.round(p.borderRightWidth*u)+"px",borderStyle:p.borderStyle,borderTopColor:p.borderTopColor,borderBottomColor:p.borderBottomColor,borderLeftColor:p.borderLeftColor,borderRightColor:p.borderRightColor,borderTopLeftRadius:p.borderTopLeftRadius,borderTopRightRadius:p.borderTopRightRadius,borderBottomLeftRadius:p.borderBottomLeftRadius,borderBottomRightRadius:p.borderBottomRightRadius,backgroundColor:o.cbg_set,backgroundImage:o.cbg_img,backgroundRepeat:o.cbg_img_r,backgroundPosition:o.cbg_img_p,opacity:o.cbg_o}),punchgs.TweenMax.set(o.cbgmask,{top:p.marginTop*h+"px",left:p.marginLeft*u+"px",right:p.marginRight*u+"px",bottom:p.marginBottom*h+"px"}))}},I=function(e){var t={l:"none",lw:10,r:"none",rw:10};for(var i in e=e.split(";"))if(e.hasOwnProperty(i)){var a=e[i].split(":");switch(a[0]){case"l":t.l=a[1];break;case"r":t.r=a[1];break;case"lw":t.lw=a[1];break;case"rw":t.rw=a[1]}}return"polygon("+A(t.l,0,parseFloat(t.lw))+","+A(t.r,100,100-parseFloat(t.rw),!0)+")"},A=function(e,t,i,a){var r;switch(e){case"none":r=t+"% 100%,"+t+"% 0%";break;case"top":r=i+"% 100%,"+t+"% 0%";break;case"middle":r=i+"% 100%,"+t+"% 50%,"+i+"% 0%";break;case"bottom":r=t+"% 100%,"+i+"% 0%";break;case"two":r=i+"% 100%,"+t+"% 75%,"+i+"% 50%,"+t+"% 25%,"+i+"% 0%";break;case"three":r=t+"% 100%,"+i+"% 75%,"+t+"% 50%,"+i+"% 25%,"+t+"% 0%";break;case"four":r=t+"% 100%,"+i+"% 87.5%,"+t+"% 75%,"+i+"% 62.5%,"+t+"% 50%,"+i+"% 37.5%,"+t+"% 25%,"+i+"% 12.5%,"+t+"% 0%";break;case"five":r=t+"% 100%,"+i+"% 90%,"+t+"% 80%,"+i+"% 70%,"+t+"% 60%,"+i+"% 50%,"+t+"% 40%,"+i+"% 30%,"+t+"% 20%,"+i+"% 10%,"+t+"% 0%"}if(a){var o=r.split(",");for(var i in r="",o)o.hasOwnProperty(i)&&(r+=o[o.length-1-i]+(i<o.length-1?",":""))}return r}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution,i=t.is_mobile();function a(e,i){var a=new Object({single:".tp-"+i,c:t[e].cpar.find(".tp-"+i+"s")});return a.mask=a.c.find(".tp-"+i+"-mask"),a.wrap=a.c.find(".tp-"+i+"s-inner-wrapper"),a}jQuery.extend(!0,t,{hideUnHideNav:function(e){var i=t[e].c.width(),a=t[e].navigation.arrows,r=t[e].navigation.bullets,o=t[e].navigation.thumbnails,s=t[e].navigation.tabs;p(a)&&k(t[e].c.find(".tparrows"),a.hide_under,i,a.hide_over),p(r)&&k(t[e].c.find(".tp-bullets"),r.hide_under,i,r.hide_over),p(o)&&k(o.c,o.hide_under,i,o.hide_over),p(s)&&k(s.c,s.hide_under,i,s.hide_over),x(e)},resizeThumbsTabs:function(e,i){if(void 0!==t[e]&&t[e].navigation.use&&(t[e].navigation&&t[e].navigation.bullets.enable||t[e].navigation&&t[e].navigation.tabs.enable||t[e].navigation&&t[e].navigation.thumbnails.enable)){var a=(jQuery(window).width()-480)/500,r=new punchgs.TimelineLite,s=t[e].navigation.tabs,n=t[e].navigation.thumbnails,l=t[e].navigation.bullets;if(r.pause(),a=a>1?1:a<0?0:a,p(s)&&(i||s.width>s.min_width)&&o(a,r,t[e].c,s,t[e].slideamount,"tab"),p(n)&&(i||n.width>n.min_width)&&o(a,r,t[e].c,n,t[e].slideamount,"thumb"),p(l)&&i){var d=t[e].c.find(".tp-bullets");d.find(".tp-bullet").each(function(e){var t=jQuery(this),i=e+1,a=t.outerWidth()+parseInt(void 0===l.space?0:l.space,0),r=t.outerHeight()+parseInt(void 0===l.space?0:l.space,0);"vertical"===l.direction?(t.css({top:(i-1)*r+"px",left:"0px"}),d.css({height:(i-1)*r+t.outerHeight(),width:t.outerWidth()})):(t.css({left:(i-1)*a+"px",top:"0px"}),d.css({width:(i-1)*a+t.outerWidth(),height:t.outerHeight()}))})}r.play(),x(e)}return!0},updateNavIndexes:function(e){var i=t[e].c;function a(e){i.find(e).lenght>0&&i.find(e).each(function(e){jQuery(this).data("liindex",e)})}a("rs-tab"),a("rs-bullet"),a("rs-thumb"),t.resizeThumbsTabs(e,!0),t.manageNavigation(e)},manageNavigation:function(e,i){if(t[e].navigation.use){var a=t.getHorizontalOffset(t[e].cpar,"left"),o=t.getHorizontalOffset(t[e].cpar,"right");p(t[e].navigation.bullets)&&("fullscreen"!=t[e].sliderLayout&&"fullwidth"!=t[e].sliderLayout&&(t[e].navigation.bullets.h_offset_old=void 0===t[e].navigation.bullets.h_offset_old?parseInt(t[e].navigation.bullets.h_offset,0):t[e].navigation.bullets.h_offset_old,t[e].navigation.bullets.h_offset="center"===t[e].navigation.bullets.h_align?t[e].navigation.bullets.h_offset_old+a/2-o/2:t[e].navigation.bullets.h_offset_old+a-o),b(t[e].c.find(".tp-bullets"),t[e].navigation.bullets,e)),p(t[e].navigation.thumbnails)&&b(t[e].navigation.thumbnails.c,t[e].navigation.thumbnails,e),p(t[e].navigation.tabs)&&b(t[e].navigation.tabs.c,t[e].navigation.tabs,e),p(t[e].navigation.arrows)&&("fullscreen"!=t[e].sliderLayout&&"fullwidth"!=t[e].sliderLayout&&(t[e].navigation.arrows.left.h_offset_old=void 0===t[e].navigation.arrows.left.h_offset_old?parseInt(t[e].navigation.arrows.left.h_offset,0):t[e].navigation.arrows.left.h_offset_old,t[e].navigation.arrows.left.h_offset="right"===t[e].navigation.arrows.left.h_align?t[e].navigation.arrows.left.h_offset_old+o:t[e].navigation.arrows.left.h_offset_old+a,t[e].navigation.arrows.right.h_offset_old=void 0===t[e].navigation.arrows.right.h_offset_old?parseInt(t[e].navigation.arrows.right.h_offset,0):t[e].navigation.arrows.right.h_offset_old,t[e].navigation.arrows.right.h_offset="right"===t[e].navigation.arrows.right.h_align?t[e].navigation.arrows.right.h_offset_old+o:t[e].navigation.arrows.right.h_offset_old+a),b(t[e].c.find(".tp-leftarrow.tparrows"),t[e].navigation.arrows.left,e),b(t[e].c.find(".tp-rightarrow.tparrows"),t[e].navigation.arrows.right,e)),!1!==i&&(p(t[e].navigation.thumbnails)&&r(t[e].navigation.thumbnails,e),p(t[e].navigation.tabs)&&r(t[e].navigation.tabs,e))}},showFirstTime:function(e){h(e),t.callContWidthManager(e)},createNavigation:function(e){var o=t[e].navigation.arrows,l=t[e].navigation.bullets,f=t[e].navigation.thumbnails,v=t[e].navigation.tabs,y=p(o),b=p(l),x=p(f),k=p(v);s(e),n(e),y&&(m(o,e),o.c=t[e].cpar.find(".tparrows")),t[e].slides.each(function(i){if(-1===this.className.indexOf("not-in-nav")){var a=jQuery(t[e].slides[t[e].slides.length-1-i]),r=jQuery(this);b&&(t[e].navigation.bullets.rtl?w(t[e].c,l,a,e):w(t[e].c,l,r,e)),x&&(t[e].navigation.thumbnails.rtl?_(t[e].c,f,a,"tp-thumb",e):_(t[e].c,f,r,"tp-thumb",e)),k&&(t[e].navigation.tabs.rtl?_(t[e].c,v,a,"tp-tab",e):_(t[e].c,v,r,"tp-tab",e))}}),b&&(l.c=t[e].cpar.find(".tp-bullets")),x&&jQuery.extend(!0,f,a(e,"thumb")),k&&jQuery.extend(!0,v,a(e,"tab")),t[e].c.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(i){if(void 0!==t[e].pr_next_key||void 0!==t[e].pr_active_key){var a=void 0===t[e].pr_next_key?void 0===t[e].pr_cache_pr_next_key?t[e].pr_active_key:t[e].pr_cache_pr_next_key:t[e].pr_next_key,s=t.gA(t[e].slides[a],"key");t[e].c.find(".tp-bullet").each(function(){t.gA(this,"key")===s?this.classList.add("selected"):this.classList.remove("selected")}),t[e].cpar.find(".tp-thumb, .tp-tab").each(function(){t.gA(this,"key")===s?(this.classList.add("selected"),"RS-TAB"===this.nodeName?r(v,e):r(f,e)):this.classList.remove("selected")});var n=0,l=!1;t[e].thumbs&&jQuery.each(t[e].thumbs,function(e,t){n=!1===l?e:n,l=void 0!==t&&t.id===s||e===s||l});var d=n>0?n-1:t[e].slideamount-1,c=n+1==t[e].slideamount?0:n+1;if(!0===o.enable){var p=o.tmp;if(null!=t[e].thumbs[d]&&jQuery.each(t[e].thumbs[d].params,function(e,t){p=p.replace(t.from,t.to)}),o.left.j.html(p),p=o.tmp,c>t[e].slideamount)return;void 0!==t[e].thumbs[c]&&(jQuery.each(t[e].thumbs[c].params,function(e,t){p=p.replace(t.from,t.to)}),o.right.j.html(p),o.rtl?(punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[c].src+")"}),punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[d].src+")"})):(punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[d].src+")"}),punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+t[e].thumbs[c].src+")"})))}}}),c(o),c(l),c(f),c(v),t[e].cpar.on("mouseenter mousemove",function(a){t[e].cpar.hasClass("tp-mouseover")||(t[e].cpar.addClass("tp-mouseover"),t[e].firstSlideAvailable&&(h(e),i&&(u(t[e].hideAllNavElementTimer),t[e].hideAllNavElementTimer=setTimeout(function(){t[e].cpar.removeClass("tp-mouseover"),g(e)},150))))}),t[e].cpar.on("mouseleave ",function(){t[e].cpar.removeClass("tp-mouseover"),g(e)}),x&&d(f.c,e),k&&d(v.c,e),"carousel"===t[e].sliderType&&d(t[e].c,e,!0),(t[e].navigation.touch.touchOnDesktop||t[e].navigation.touch.touchenabled&&i)&&d(t[e].c,e,"swipebased")}});var r=function(e,i){var a="vertical"===e.direction?e.mask.find(e.single).first().outerHeight(!0)+e.space:e.mask.find(e.single).first().outerWidth(!0)+e.space,r="vertical"===e.direction?e.mask.height():e.mask.width(),o=e.mask.find(e.single+".selected").data("liindex");o=(o=void 0===o?0:o)>0&&1===t[i].sdir?o-1:o;var s=r/a,n="vertical"===e.direction?e.mask.height():e.mask.width(),l=0-o*a,d="vertical"===e.direction?e.wrap.height():e.wrap.width(),c=l<0-(d-n)?0-(d-n):l,p=t.gA(e.wrap[0],"offset");s>2&&(c=l-(p+a)<=0?l-(p+a)<0-a?p:c+a:c,c=l-a+p+r<a&&l+(Math.round(s)-2)*a<p?l+(Math.round(s)-2)*a:c),c="vertical"!==e.direction&&e.mask.width()>=e.wrap.width()||"vertical"===e.direction&&e.mask.height()>=e.wrap.height()?0:c<0-(d-n)?0-(d-n):c>0?0:c,e.c.hasClass("dragged")||("vertical"===e.direction?e.wrap.data("tmmove",punchgs.TweenLite.to(e.wrap,.5,{top:c+"px",ease:punchgs.Power3.easeInOut})):e.wrap.data("tmmove",punchgs.TweenLite.to(e.wrap,.5,{left:c+"px",ease:punchgs.Power3.easeInOut})),e.wrap.data("offset",c))},o=function(e,t,i,a,r,o){var s=i.parent().find(".tp-"+o+"s"),n=s.find(".tp-"+o+"s-inner-wrapper"),l=s.find(".tp-"+o+"-mask"),d=a.width*e<a.min_width?a.min_width:Math.round(a.width*e),c=Math.round(d/a.width*a.height),p="vertical"===a.direction?d:d*r+a.space*(r-1),u="vertical"===a.direction?c*r+a.space*(r-1):c,h="vertical"===a.direction?{width:d+"px"}:{height:c+"px"};t.add(punchgs.TweenLite.set(s,h)),t.add(punchgs.TweenLite.set(n,{width:p+"px",height:u+"px"})),t.add(punchgs.TweenLite.set(l,{width:p+"px",height:u+"px"}));var g=n.find(".tp-"+o);return g&&jQuery.each(g,function(e,i){"vertical"===a.direction?t.add(punchgs.TweenLite.set(i,{top:e*(c+parseInt(void 0===a.space?0:a.space,0)),width:d+"px",height:c+"px"})):"horizontal"===a.direction&&t.add(punchgs.TweenLite.set(i,{left:e*(d+parseInt(void 0===a.space?0:a.space,0)),width:d+"px",height:c+"px"}))}),t},s=function(e){!0===t[e].navigation.keyboardNavigation&&jQuery(document).keydown(function(i){("horizontal"==t[e].navigation.keyboard_direction&&39==i.keyCode||"vertical"==t[e].navigation.keyboard_direction&&40==i.keyCode)&&(t[e].sc_indicator="arrow",t[e].sc_indicator_dir=0,t.callingNewSlide(e,1)),("horizontal"==t[e].navigation.keyboard_direction&&37==i.keyCode||"vertical"==t[e].navigation.keyboard_direction&&38==i.keyCode)&&(t[e].sc_indicator="arrow",t[e].sc_indicator_dir=1,t.callingNewSlide(e,-1))})},n=function(e){if(!0===t[e].navigation.mouseScrollNavigation||"on"===t[e].navigation.mouseScrollNavigation||"carousel"===t[e].navigation.mouseScrollNavigation){t[e].isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),t[e].isSafari=!!navigator.userAgent.match(/safari/i),t[e].ischrome=!!navigator.userAgent.match(/chrome/i);var i=t[e].ischrome?-49:t[e].isIEEleven||t[e].isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,a=t[e].ischrome?49:t[e].isIEEleven||t[e].isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;t[e].c.on("mousewheel DOMMouseScroll",function(r){var o,s,n,l,d,c=(o=r.originalEvent,s=0,n=0,l=0,d=0,"detail"in o&&(n=o.detail),"wheelDelta"in o&&(n=-o.wheelDelta/120),"wheelDeltaY"in o&&(n=-o.wheelDeltaY/120),"wheelDeltaX"in o&&(s=-o.wheelDeltaX/120),"axis"in o&&o.axis===o.HORIZONTAL_AXIS&&(s=n,n=0),l=1*s,d=1*n,"deltaY"in o&&(d=o.deltaY),"deltaX"in o&&(l=o.deltaX),(l||d)&&o.deltaMode&&(o.deltaMode,l*=1,d*=1),l&&!s&&(s=l<1?-1:1),d&&!n&&(n=d<1?-1:1),((d=navigator.userAgent.match(/mozilla/i)?10*d:d)>300||d<-300)&&(d/=10),{spinX:s,spinY:n,pixelX:l,pixelY:d}),p=!0,u=0==t[e].pr_active_key||0==t[e].pr_processing_key,h=t[e].pr_active_key==t[e].slideamount-1||t[e].pr_processing_key==t[e].slideamount-1;"carousel"==t[e].navigation.mouseScrollNavigation&&(u=h=!1),void 0===t[e].pr_processing_key?c.pixelY<i?(u||(t[e].sc_indicator="arrow","reverse"!==t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=1,t.callingNewSlide(e,-1)),p=!1),h||(t[e].sc_indicator="arrow","reverse"===t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=0,t.callingNewSlide(e,1)),p=!1)):c.pixelY>a&&(h||(t[e].sc_indicator="arrow","reverse"!==t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=0,t.callingNewSlide(e,1)),p=!1),u||(t[e].sc_indicator="arrow","reverse"===t[e].navigation.mouseScrollReverse&&(t[e].sc_indicator_dir=1,t.callingNewSlide(e,-1)),p=!1)):p=!1;var g=t[e].c.offset().top-jQuery("body").scrollTop(),f=g+t[e].c.height();return"carousel"!=t[e].navigation.mouseScrollNavigation?("reverse"!==t[e].navigation.mouseScrollReverse&&(g>0&&c.pixelY>0||f<jQuery(window).height()&&c.pixelY<0)&&(p=!0),"reverse"===t[e].navigation.mouseScrollReverse&&(g<0&&c.pixelY<0||f>jQuery(window).height()&&c.pixelY>0)&&(p=!0)):p=!1,p?void 0:(r.preventDefault(r),!1)})}},l=function(e,t,a){return!0===(e=i?jQuery(a.target).closest(e).length||jQuery(a.srcElement).closest(e).length:jQuery(a.toElement).closest(e).length||jQuery(a.originalTarget).closest(e).length)||1===e?1:0},d=function(e,a,r){var o=t[a].carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),o.Limit="endless";var s=e,n="vertical"===t[a].navigation.thumbnails.direction||"vertical"===t[a].navigation.tabs.direction?"none":"vertical",d=t[a].navigation.touch.swipe_direction||"horizontal";n="swipebased"==r&&"vertical"==d?"none":r?"vertical":n,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults={}),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",s.swipetp({allowPageScroll:n,triggerOnTouchLeave:!0,treshold:t[a].navigation.touch.swipe_treshold,fingers:t[a].navigation.touch.swipe_min_touches>5?1:t[a].navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(r,s,n,c,p,u,h){var g=l("rs-module-wrap",0,r),f=l(".tp-thumbs",0,r),m=l(".tp-tabs",0,r),v=!!jQuery(this).attr("class").match(/tp-tabs|tp-thumb/gi);if("carousel"===t[a].sliderType&&(("move"===s||"end"===s||"cancel"==s)&&t[a].dragStartedOverSlider&&!t[a].dragStartedOverThumbs&&!t[a].dragStartedOverTabs||"start"===s&&g>0&&0===f&&0===m)){if(i&&("up"===n||"down"===n))return;switch(void 0!==o.positionanim&&o.positionanim.pause(),t[a].dragStartedOverSlider=!0,c=n&&n.match(/left|up/g)?Math.round(-1*c):c=Math.round(1*c),s){case"start":void 0!==o.positionanim&&(o.positionanim.kill(),o.slide_globaloffset="off"===o.infinity?o.slide_offset:t.simp(o.slide_offset,o.maxwidth)),o.overpull="none",o.wrap.addClass("dragged");break;case"move":if(Math.abs(c)>=10||t[a].carousel.isDragged){if(t[a].carousel.isDragged=!0,t[a].c.find(".rs-waction").addClass("tp-temporarydisabled"),o.slide_offset="off"===o.infinity?o.slide_globaloffset+c:t.simp(o.slide_globaloffset+c,o.maxwidth),"off"===o.infinity){var y="center"===o.horizontal_align?(o.wrapwidth/2-o.slide_width/2-o.slide_offset)/o.slide_width:(0-o.slide_offset)/o.slide_width;"none"!==o.overpull&&0!==o.overpull||!(y<0||y>t[a].slideamount-1)?y>=0&&y<=t[a].slideamount-1&&(y>=0&&c>o.overpull||y<=t[a].slideamount-1&&c<o.overpull)&&(o.overpull=0):o.overpull=c,o.slide_offset=y<0?o.slide_offset+(o.overpull-c)/1.1+Math.sqrt(Math.abs((o.overpull-c)/1.1)):y>t[a].slideamount-1?o.slide_offset+(o.overpull-c)/1.1-Math.sqrt(Math.abs((o.overpull-c)/1.1)):o.slide_offset}t.organiseCarousel(a,n,!0,!0)}break;case"end":case"cancel":t[a].carousel.isDragged=!1,o.slide_globaloffset=o.slide_offset,o.wrap.removeClass("dragged"),t.carouselToEvalPosition(a,n),t[a].dragStartedOverSlider=!1,t[a].dragStartedOverThumbs=!1,t[a].dragStartedOverTabs=!1,setTimeout(function(){t[a].c.find(".rs-waction").removeClass("tp-temporarydisabled")},19)}}else{if(("move"!==s&&"end"!==s&&"cancel"!=s||t[a].dragStartedOverSlider||!t[a].dragStartedOverThumbs&&!t[a].dragStartedOverTabs)&&!("start"===s&&g>0&&(f>0||m>0))){if("end"==s&&!v){if(t[a].sc_indicator="arrow","horizontal"==d&&"left"==n||"vertical"==d&&"up"==n)return t[a].sc_indicator_dir=0,t.callingNewSlide(a,1),!1;if("horizontal"==d&&"right"==n||"vertical"==d&&"down"==n)return t[a].sc_indicator_dir=1,t.callingNewSlide(a,-1),!1}return t[a].dragStartedOverSlider=!1,t[a].dragStartedOverThumbs=!1,t[a].dragStartedOverTabs=!1,!0}f>0&&(t[a].dragStartedOverThumbs=!0),m>0&&(t[a].dragStartedOverTabs=!0);var b=t[a].dragStartedOverThumbs?".tp-thumbs":".tp-tabs",w=t[a].dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",_=t[a].dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",x=t[a].dragStartedOverThumbs?".tp-thumb":".tp-tab",k=t[a].dragStartedOverThumbs?t[a].navigation.thumbnails:t[a].navigation.tabs;c=n&&n.match(/left|up/g)?Math.round(-1*c):c=Math.round(1*c);var T=e.parent().find(w),L=T.find(_),R=k.direction,I="vertical"===R?L.height():L.width(),A="vertical"===R?T.height():T.width(),S="vertical"===R?T.find(x).first().outerHeight(!0)+k.space:T.find(x).first().outerWidth(!0)+k.space,z=void 0===L.data("offset")?0:parseInt(L.data("offset"),0),M=0;switch(s){case"start":e.parent().find(b).addClass("dragged"),z="vertical"===R?L.position().top:L.position().left,L.data("offset",z),L.data("tmmove")&&L.data("tmmove").pause();break;case"move":if(I<=A)return!1;M=(M=z+c)>0?"horizontal"===R?M-L.width()*(M/L.width()*M/L.width()):M-L.height()*(M/L.height()*M/L.height()):M;var O="vertical"===R?0-(L.height()-T.height()):0-(L.width()-T.width());M=M<O?"horizontal"===R?M+L.width()*(M-O)/L.width()*(M-O)/L.width():M+L.height()*(M-O)/L.height()*(M-O)/L.height():M,"vertical"===R?punchgs.TweenLite.set(L,{top:M+"px"}):punchgs.TweenLite.set(L,{left:M+"px"});break;case"end":case"cancel":if(v)return M=z+c,M=(M="vertical"===R?M<0-(L.height()-T.height())?0-(L.height()-T.height()):M:M<0-(L.width()-T.width())?0-(L.width()-T.width()):M)>0?0:M,M=Math.abs(c)>S/10?c<=0?Math.floor(M/S)*S:Math.ceil(M/S)*S:c<0?Math.ceil(M/S)*S:Math.floor(M/S)*S,M=(M="vertical"===R?M<0-(L.height()-T.height())?0-(L.height()-T.height()):M:M<0-(L.width()-T.width())?0-(L.width()-T.width()):M)>0?0:M,"vertical"===R?punchgs.TweenLite.to(L,.5,{top:M+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(L,.5,{left:M+"px",ease:punchgs.Power3.easeOut}),M=M||("vertical"===R?L.position().top:L.position().left),L.data("offset",M),L.data("distance",c),setTimeout(function(){t[a].dragStartedOverSlider=!1,t[a].dragStartedOverThumbs=!1,t[a].dragStartedOverTabs=!1},100),e.parent().find(b).removeClass("dragged"),!1}}}})},c=function(e){e.hide_delay=jQuery.isNumeric(parseInt(e.hide_delay,0))?e.hide_delay:.2,e.hide_delay_mobile=jQuery.isNumeric(parseInt(e.hide_delay_mobile,0))?e.hide_delay_mobile:.2},p=function(e){return e&&e.enable},u=function(e){clearTimeout(e)},h=function(e){var i=t[e].navigation.maintypes;for(var a in i)i.hasOwnProperty(a)&&p(t[e].navigation[i[a]])&&(u(t[e].navigation[i[a]].showCall),t[e].navigation[i[a]].showCall=setTimeout(function(i){u(i.hideCall),i.hide_onleave&&!t[e].cpar.hasClass("tp-mouseover")||(void 0===i.tween?i.tween=f(i):i.tween.play())},t[e].navigation[i[a]].hide_onleave&&!t[e].cpar.hasClass("tp-mouseover")?0:parseInt(t[e].navigation[i[a]].animDelay),t[e].navigation[i[a]]))},g=function(e,a){var r=t[e].navigation.maintypes;for(var o in r)r.hasOwnProperty(o)&&void 0!==t[e].navigation[r[o]]&&t[e].navigation[r[o]].hide_onleave&&p(t[e].navigation[r[o]])&&(u(t[e].navigation[r[o]].hideCall),t[e].navigation[r[o]].hideCall=setTimeout(function(e){u(e.showCall),e.tween&&e.tween.reverse()},i?parseInt(t[e].navigation[r[o]].hide_delay_mobile,0):parseInt(t[e].navigation[r[o]].hide_delay,0),t[e].navigation[r[o]]))},f=function(e){e.speed=void 0===e.speed?.5:e.speed,e.anims=[],void 0!==e.anim&&void 0===e.left&&e.anims.push(e.anim),void 0!==e.left&&e.anims.push(e.left.anim),void 0!==e.right&&e.anims.push(e.right.anim);var t=new punchgs.TimelineLite;for(var i in t.add(punchgs.TweenLite.to(e.c,e.speed,{autoAlpha:1,opacity:1,ease:punchgs.Power3.easeInOut}),0),e.anims)if(e.anims.hasOwnProperty(i))switch(e.anims[i]){case"left":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginLeft:-50},{marginLeft:0,ease:punchgs.Power3.easeInOut}),0);break;case"right":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginLeft:50},{marginLeft:0,ease:punchgs.Power3.easeInOut}),0);break;case"top":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginTop:-50},{marginTop:0,ease:punchgs.Power3.easeInOut}),0);break;case"bottom":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{marginTop:50},{marginTop:0,ease:punchgs.Power3.easeInOut}),0);break;case"zoomin":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{scale:.5},{scale:1,ease:punchgs.Power3.easeInOut}),0);break;case"zoomout":t.add(punchgs.TweenLite.fromTo(e.c[i],e.speed,{scale:1.2},{scale:1,ease:punchgs.Power3.easeInOut}),0)}return t.play(),t},m=function(e,i){e.style=void 0===e.style?"":e.style,e.left.style=void 0===e.left.style?"":e.left.style,e.right.style=void 0===e.right.style?"":e.right.style,0===t[i].c.find(".tp-leftarrow.tparrows").length&&t[i].c.append('<rs-arrow style="opacity:0" class="tp-leftarrow tparrows '+e.style+" "+e.left.style+'">'+e.tmp+"</rs-arrow>"),0===t[i].c.find(".tp-rightarrow.tparrows").length&&t[i].c.append('<rs-arrow style="opacity:0"  class="tp-rightarrow tparrows '+e.style+" "+e.right.style+'">'+e.tmp+"</rs-arrow>");var a=t[i].c.find(".tp-leftarrow.tparrows"),r=t[i].c.find(".tp-rightarrow.tparrows");e.rtl?(a.click(function(){"carousel"===t[i].sliderType&&(t[i].ctNavElement=!0),t[i].sc_indicator="arrow",t[i].sc_indicator_dir=0,t[i].c.revnext()}),r.click(function(){"carousel"===t[i].sliderType&&(t[i].ctNavElement=!0),t[i].sc_indicator="arrow",t[i].sc_indicator_dir=1,t[i].c.revprev()})):(r.click(function(){"carousel"===t[i].sliderType&&(t[i].ctNavElement=!0),t[i].sc_indicator="arrow",t[i].sc_indicator_dir=0,t[i].c.revnext()}),a.click(function(){"carousel"===t[i].sliderType&&(t[i].ctNavElement=!0),t[i].sc_indicator="arrow",t[i].sc_indicator_dir=1,t[i].c.revprev()})),e.right.j=t[i].c.find(".tp-rightarrow.tparrows"),e.left.j=t[i].c.find(".tp-leftarrow.tparrows"),e.padding_top=parseInt(t[i].carousel.padding_top||0,0),e.padding_bottom=parseInt(t[i].carousel.padding_bottom||0,0),b(a,e.left,i),b(r,e.right,i),"outer-left"!=e.position&&"outer-right"!=e.position||(t[i].outernav=!0)},v=function(e,i,a){var r=e.outerHeight(!0),o=null==t[a]?0:0==t[a].conh?t[a].height:t[a].conh,s="layergrid"==i.container?"fullscreen"==t[a].sliderLayout?t[a].height/2-t[a].gridheight[t[a].level]*t[a].bh/2:t[a].autoHeight||null!=t[a].minHeight&&t[a].minHeight>0?o/2-t[a].gridheight[t[a].level]*t[a].bh/2:0:0,n="top"===i.v_align?{top:"0px",y:Math.round(i.v_offset+s)+"px"}:"center"===i.v_align?{top:"50%",y:Math.round(0-r/2+i.v_offset)+"px"}:{top:"100%",y:Math.round(0-(r+i.v_offset+s))+"px"};e.hasClass("outer-bottom")||punchgs.TweenLite.set(e,n)},y=function(e,i,a){var r=e.outerWidth(!0),o="layergrid"===i.container?t[a].width/2-t[a].gridwidth[t[a].level]*t[a].bw/2:0,s="left"===i.h_align?{left:"0px",x:Math.round(i.h_offset+o)+"px"}:"center"===i.h_align?{left:"50%",x:Math.round(0-r/2+i.h_offset)+"px"}:{left:"100%",x:Math.round(0-(r+i.h_offset+o))+"px"};punchgs.TweenLite.set(e,s)},b=function(e,i,a){var r="fullwidth"==t[a].sliderLayout||"fullscreen"==t[a].sliderLayout,o=r?t[a].c.width():t[a].topc.width(),s=t[a].c.height();if(v(e,i,a),y(e,i,a),"outer-left"===i.position&&r?punchgs.TweenLite.set(e,{left:0-e.outerWidth()+"px",x:i.h_offset+"px"}):"outer-right"===i.position&&r&&punchgs.TweenLite.set(e,{right:0-e.outerWidth()+"px",x:i.h_offset+"px"}),e.hasClass("tp-thumbs")||e.hasClass("tp-tabs")){var n=e.data("wr_padding"),l=e.data("maxw"),d=e.data("maxh"),c=e.hasClass("tp-thumbs")?e.find(".tp-thumb-mask"):e.find(".tp-tab-mask"),p=parseInt(i.padding_top||0,0),u=parseInt(i.padding_bottom||0,0),h={},g={};l>o&&"outer-left"!==i.position&&"outer-right"!==i.position?(h.left="0px",h.x=0,h.maxWidth=o-2*n+"px",g.maxWidth=o-2*n+"px"):(h.maxWidth=l,g.maxWidth=o+"px"),d+2*n>s&&"outer-bottom"!==i.position&&"outer-top"!==i.position?(h.top="0px",h.y=0,h.maxHeight=p+u+(s-2*n)+"px",g.maxHeight=p+u+(s-2*n)+"px"):(h.maxHeight=d+"px",g.maxHeight=d+"px"),i.span?("layergrid"==i.container&&"outer-left"!==i.position&&"outer-right"!==i.position&&(p=u=0),"vertical"===i.direction?(h.maxHeight=p+u+(s-2*n)+"px",h.height=p+u+(s-2*n)+"px",h.top=0-p,h.y=0,g.maxHeight=p+u+Math.min(d,s-2*n)+"px",punchgs.TweenLite.set(e,h),punchgs.TweenLite.set(c,g),v(c,i,a)):"horizontal"===i.direction&&(h.maxWidth="100%",h.width=o-2*n+"px",h.left=0,h.x=0,g.maxWidth=l>=o?"100%":Math.min(l,o)+"px",punchgs.TweenLite.set(e,h),punchgs.TweenLite.set(c,g),y(c,i,a))):(punchgs.TweenLite.set(e,h),punchgs.TweenLite.set(c,g))}},w=function(e,i,a,r){0===e.find(".tp-bullets").length&&(i.style=void 0===i.style?"":i.style,e.append('<rs-bullets style="opacity:0"  class="tp-bullets '+i.style+" "+i.direction+'"></rs-bullets>'));var o=e.find(".tp-bullets"),s=a.data("key"),n=i.tmp;void 0!==t[r].thumbs[a.index()]&&jQuery.each(t[r].thumbs[a.index()].params,function(e,t){n=n.replace(t.from,t.to)}),o.append('<rs-bullet data-key="'+s+'" class="justaddedbullet tp-bullet">'+n+"</rs-bullet>");var l=e.find(".justaddedbullet"),d=e.find(".tp-bullet").length,c=l.outerWidth()+parseInt(void 0===i.space?0:i.space,0),p=l.outerHeight()+parseInt(void 0===i.space?0:i.space,0);"vertical"===i.direction?(l.css({top:(d-1)*p+"px",left:"0px"}),o.css({height:(d-1)*p+l.outerHeight(),width:l.outerWidth()})):(l.css({left:(d-1)*c+"px",top:"0px"}),o.css({width:(d-1)*c+l.outerWidth(),height:l.outerHeight()})),void 0!==t[r].thumbs[a.index()]&&l.find(".tp-bullet-image").css({backgroundImage:"url("+t[r].thumbs[a.index()].src+")"}),l.click(function(){t[r].sc_indicator="bullet",e.revcallslidewithid(s),e.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),l.removeClass("justaddedbullet"),i.padding_top=parseInt(t[r].carousel.padding_top||0,0),i.padding_bottom=parseInt(t[r].carousel.padding_bottom||0,0),"outer-left"!=i.position&&"outer-right"!=i.position||(t[r].outernav=!0),o.addClass("nav-pos-hor-"+i.h_align),o.addClass("nav-pos-ver-"+i.v_align),o.addClass("nav-dir-"+i.direction),b(o,i,r)},_=function(e,i,a,r,o){var s="tp-thumb"===r?".tp-thumbs":".tp-tabs",n="tp-thumb"===r?".tp-thumb-mask":".tp-tab-mask",l="tp-thumb"===r?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",d="tp-thumb"===r?".tp-thumb":".tp-tab",c="tp-thumb"===r?".tp-thumb-image":".tp-tab-image",p="tp-thumb"===r?"rs-thumb":"rs-tab";if(i.visibleAmount=i.visibleAmount>t[o].slideamount?t[o].slideamount:i.visibleAmount,i.sliderLayout=t[o].sliderLayout,0===e.parent().find(s).length){i.style=void 0===i.style?"":i.style;var u="<"+p+'s style="opacity:0" class="'+r+"s "+(!0===i.span?"tp-span-wrapper":"")+" "+i.position+" "+i.style+'"><rs-navmask class="'+r+'-mask"><'+p+'s-wrap class="'+r+'s-inner-wrapper" style="position:relative;"></'+p+"s-wrap></rs-navmask></"+p+"s>";"outer-top"===i.position?e.parent().prepend(u):"outer-bottom"===i.position?e.after(u):e.append(u),"outer-left"!==i.position&&"outer-right"!==i.position||punchgs.TweenLite.set(t[o].c,{overflow:"visible"}),i.padding_top=parseInt(t[o].carousel.padding_top||0,0),i.padding_bottom=parseInt(t[o].carousel.padding_bottom||0,0),"outer-left"!=i.position&&"outer-right"!=i.position||(t[o].outernav=!0)}var h=a.data("key"),g=e.parent().find(s),f=g.find(n),m=f.find(l),v="horizontal"===i.direction?i.width*i.visibleAmount+i.space*(i.visibleAmount-1):i.width,y="horizontal"===i.direction?i.height:i.height*i.visibleAmount+i.space*(i.visibleAmount-1),w=i.tmp;void 0!==t[o].thumbs[a.index()]&&jQuery.each(t[o].thumbs[a.index()].params,function(e,t){w=w.replace(t.from,t.to)}),m.append("<"+p+' data-liindex="'+a.index()+'" data-key="'+h+'" class="justaddedthumb '+r+'" style="width:'+i.width+"px;height:"+i.height+'px;">'+w+"<"+p+">");var _=g.find(".justaddedthumb"),x=g.find(d).length,k=_.outerWidth()+parseInt(void 0===i.space?0:i.space,0),T=_.outerHeight()+parseInt(void 0===i.space?0:i.space,0);_.find(c).css({backgroundImage:"url("+t[o].thumbs[a.index()].src+")"}),"vertical"===i.direction?(_.css({top:(x-1)*T+"px",left:"0px"}),m.css({height:(x-1)*T+_.outerHeight(),width:_.outerWidth()})):(_.css({left:(x-1)*k+"px",top:"0px"}),m.css({width:(x-1)*k+_.outerWidth(),height:_.outerHeight()})),g.data("maxw",v),g.data("maxh",y),g.data("wr_padding",i.wrapper_padding);var L="outer-top"===i.position||"outer-bottom"===i.position?"relative":"absolute";f.css({maxWidth:v+"px",maxHeight:y+"px",overflow:"hidden",position:"relative"}),g.css({maxWidth:v+"px",maxHeight:y+"px",overflow:"visible",position:L,background:i.wrapper_color,padding:i.wrapper_padding+"px",boxSizing:"contet-box"}),_.click(function(){t[o].sc_indicator="bullet";var i=e.parent().find(l).data("distance");i=void 0===i?0:i,Math.abs(i)<10&&(e.revcallslidewithid(h),e.parent().find(s).removeClass("selected"),jQuery(this).addClass("selected"))}),_.removeClass("justaddedthumb"),g.addClass("nav-pos-hor-"+i.h_align),g.addClass("nav-pos-ver-"+i.v_align),g.addClass("nav-dir-"+i.direction),b(g,i,o),t.callContWidthManager(o)},x=function(e){var i=t[e].cpar.find(".outer-top"),a=t[e].cpar.find(".outer-bottom");t[e].top_outer=i.hasClass("tp-forcenotvisible")?0:i.outerHeight()||0,t[e].bottom_outer=a.hasClass("tp-forcenotvisible")?0:a.outerHeight()||0},k=function(e,t,i,a){t>i||i>a?e.addClass("tp-forcenotvisible"):e.removeClass("tp-forcenotvisible")}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution;jQuery.extend(!0,t,{stopPanZoom:function(e){null!=e.data("pztl")&&e.data("pztl").pause()},startPanZoom:function(e,i,a){var r=e.data(),o=e.find("rs-sbg"),s=o.data("lazyload")||o.data("src"),n=(r.owidth,r.oheight,"carousel"===t[i].sliderType?t[i].carousel.slide_width:t[i].canvas.width()),l=t[i].canvas.height();if(void 0!==r.panzoom&&null!==r.panzoom){if(e.data("pztl")&&e.data("pztl").kill(),a=a||0,0==e.find(".rs-pzimg").length){var d=o.data("mediafilter");d=void 0===d?"":d,e.append('<rs-pzimg-wrap class="'+d+'" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;display:block"><img class="rs-pzimg" src="'+s+'" style="position:absolute;" width="'+r.owidth+'" height="'+r.oheight+'"></rs-pzimg-wrap>'),e.data("pzimg",e.find(".rs-pzimg"))}var c=function(e,t,i,a,r,o,s){var n=e*i,l=t*i,d=Math.abs(a-n),c=Math.abs(r-l),p=new Object;return p.l=(0-o)*d,p.r=p.l+n,p.t=(0-s)*c,p.b=p.t+l,p.h=o,p.v=s,p};null!=e.data("pztl")&&(e.data("pztl").kill(),e.removeData("pztl"));var p=e.data("pzimg"),u=p.parent(),h=function(e,t,i){var a=void 0===i.panvalues?jQuery.extend(!0,{},function(e){var t=e.panzoom.split(";"),i={duration:10,ease:"Linear.easeNone",scalestart:1,scaleend:1,rotatestart:.01,rotateend:0,blurstart:0,blurend:0,offsetstart:"0/0",offsetend:"0/0"};for(var a in t)if(t.hasOwnProperty(a)){var r=t[a].split(":"),o=r[0],s=r[1];switch(o){case"d":i.duration=parseInt(s,0)/1e3;break;case"e":i.ease=s;break;case"ss":i.scalestart=parseInt(s,0)/100;break;case"se":i.scaleend=parseInt(s,0)/100;break;case"rs":i.rotatestart=parseInt(s,0);break;case"re":i.rotateend=parseInt(s,0);break;case"bs":i.blurstart=parseInt(s,0);break;case"be":i.blurend=parseInt(s,0);break;case"os":i.offsetstart=s;break;case"oe":i.offsetend=s}}return i.offsetstart=i.offsetstart.split("/")||[0,0],i.offsetend=i.offsetend.split("/")||[0,0],i.rotatestart=0===i.rotatestart?.01:i.rotatestart,e.panvalues=i,e.bgposition="center center"==e.bgposition?"50% 50%":e.bgposition,i}(i)):jQuery.extend(!0,{},i.panvalues),r=a.offsetstart,o=a.offsetend,s={start:{width:e,height:e/i.owidth*i.oheight,rotation:a.rotatestart+"deg",scale:a.scalestart,transformOrigin:i.bgposition},starto:{},end:{rotation:a.rotateend+"deg",scale:a.scaleend},endo:{}};a.scalestart,i.owidth,i.oheight,a.scaleend,i.owidth,i.oheight;if(s.start.height<t){var n=t/s.start.height;s.start.height=t,s.start.width=s.start.width*n}var l=function(e,t,i,a){var r=e.bgposition.split(" ")||"center center",o="center"==r[0]?"50%":"left"==r[0]||"left"==r[1]?"0%":"right"==r[0]||"right"==r[1]?"100%":r[0],s="center"==r[1]?"50%":"top"==r[0]||"top"==r[1]?"0%":"bottom"==r[0]||"bottom"==r[1]?"100%":r[1];o=parseInt(o,0)/100||0,s=parseInt(s,0)/100||0;var n=new Object;return n.start=c(a.start.width,a.start.height,a.start.scale,t,i,o,s),n.end=c(a.start.width,a.start.height,a.end.scale,t,i,o,s),n}(i,e,t,s);r[0]=parseFloat(r[0])+l.start.l,o[0]=parseFloat(o[0])+l.end.l,r[1]=parseFloat(r[1])+l.start.t,o[1]=parseFloat(o[1])+l.end.t;var d=l.start.r-l.start.l,p=l.start.b-l.start.t,u=l.end.r-l.end.l,h=l.end.b-l.end.t;return r[0]=r[0]>0?0:d+r[0]<e?e-d:r[0],o[0]=o[0]>0?0:u+o[0]<e?e-u:o[0],r[1]=r[1]>0?0:p+r[1]<t?t-p:r[1],o[1]=o[1]>0?0:h+o[1]<t?t-h:o[1],s.starto.x=r[0]+"px",s.starto.y=r[1]+"px",s.endo.x=o[0]+"px",s.endo.y=o[1]+"px",s.end.ease=s.endo.ease=a.ease,s.end.force3D=s.endo.force3D=!0,s}(n,l,r),g=new punchgs.TimelineLite;if(g.pause(),h.start.transformOrigin="0% 0%",h.starto.transformOrigin="0% 0%",r.panvalues.duration=NaN===r.panvalues.duration||void 0===r.panvalues.duration?10:r.panvalues.duration,g.add(punchgs.TweenLite.fromTo(p,r.panvalues.duration,h.start,h.end),0),g.add(punchgs.TweenLite.fromTo(u,r.panvalues.duration,h.starto,h.endo),0),void 0!==r.panvalues.blurstart&&void 0!==r.panvalues.blurend&&(0!==r.panvalues.blurstart||0!==r.panvalues.blurend)){var f={a:r.panvalues.blurstart},m={a:r.panvalues.blurend,ease:h.endo.ease},v=new punchgs.TweenLite(f,r.panvalues.duration,m);v.eventCallback("onUpdate",function(e){punchgs.TweenLite.set(e,{filter:"blur("+f.a+"px)",webkitFilter:"blur("+f.a+"px)"})},[u]),g.add(v,0)}g.progress(a),g.play(),e.data("pztl",g)}}})}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution,i=t.is_mobile();jQuery.extend(!0,t,{checkForParallax:function(e){var a=t[e].parallax;if(!a.done){if(a.done=!0,i&&a.disable_onmobile)return!1;if(("3D"==a.type||"3d"==a.type)&&(punchgs.TweenLite.set(t[e].c,{overflow:a.ddd_overflow}),punchgs.TweenLite.set(t[e].canvas,{overflow:a.ddd_overflow}),"carousel"!=t[e].sliderType&&a.ddd_shadow)){var r=jQuery('<div class="dddwrappershadow"></div>');punchgs.TweenLite.set(r,{force3D:"auto",transformPerspective:1600,transformOrigin:"50% 50%",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:0}),t[e].c.prepend(r)}t[e].slides.each(function(){n(jQuery(this))}),("3D"==a.type||"3d"==a.type)&&t[e].c.find("rs-static-layers").length>0&&(punchgs.TweenLite.set(t[e].c.find("rs-static-layers"),{top:0,left:0,width:"100%",height:"100%"}),n(t[e].c.find("rs-static-layers"))),a.pcontainers=[],a.pcontainer_depths=[],a.bgcontainers=[],a.bgcontainer_depths=[],a.speed=void 0===a.speed?0:parseInt(a.speed,0),a.speedbg=void 0===a.speedbg?0:parseInt(a.speedbg,0),a.speedls=void 0===a.speedls?0:parseInt(a.speedls,0),t[e].c.find("rs-slide rs-sbg-wrap, rs-slide rs-bgvideo").each(function(){var i=jQuery(this),r=i.data("parallax");void 0!==(r="on"==r||!0===r?1:r)&&"off"!==r&&!1!==r&&(a.bgcontainers.push(i.closest("rs-sbg-px")),a.bgcontainer_depths.push(t[e].parallax.levels[parseInt(r,0)-1]/100))});for(var o=1;o<=a.levels.length;o++)t[e].c.find(".rs-pxl-"+o).each(function(){var e=jQuery(this),t=this.className.indexOf("rs-pxmask")>=0?e.closest("rs-px-mask"):e.closest(".rs-parallax-wrap");t.data("parallaxlevel",a.levels[o-1]),t.addClass("tp-parallax-container"),a.pcontainers.push(t),a.pcontainer_depths.push(a.levels[o-1])});"mouse"!=a.type&&"mousescroll"!=a.type&&"3D"!=a.type&&"3d"!=a.type||(t[e].c.mouseenter(function(i){var a=t[e].c.offset().top,r=t[e].c.offset().left;void 0!==t[e].pr_active_key&&(t.sA(t[e].slides[t[e].pr_active_key],"enterx",i.pageX-r),t.sA(t[e].slides[t[e].pr_active_key],"entery",i.pageY-a))}),t[e].c.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath",function(i,r){var o=r&&r.li?r.li:jQuery(t[e].slides[t[e].pr_active_key]);if("enterpoint"==a.origo){var s=t[e].c.offset().top,n=t[e].c.offset().left;null==o.data("enterx")&&o.data("enterx",i.pageX-n),null==o.data("entery")&&o.data("entery",i.pageY-s);var l=o.data("enterx")||i.pageX-n,d=o.data("entery")||i.pageY-s,c=l-(i.pageX-n),p=d-(i.pageY-s),u=a.speed/1e3||.4}else s=t[e].c.offset().top,n=t[e].c.offset().left,c=t[e].conw/2-(i.pageX-n),p=t[e].conh/2-(i.pageY-s),u=a.speed/1e3||3;"mouseleave"==i.type&&(c=a.ddd_lasth||0,p=a.ddd_lastv||0,u=1.5);for(var h=0;h<a.pcontainers.length;h++){var g=a.pcontainers[h],f=a.pcontainer_depths[h],m="3D"==a.type||"3d"==a.type?f/200:f/100,v=c*m,y=p*m;"mousescroll"==a.type?punchgs.TweenLite.to(g,u,{force3D:"auto",x:v,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(g,u,{force3D:"auto",x:v,y:y,ease:punchgs.Power3.easeOut,overwrite:"all"})}if("3D"==a.type||"3d"==a.type){var b="rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";"carousel"===t[e].sliderType&&(b="rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"),t[e].c.find(b).each(function(){var r=jQuery(this),o=a.levels[a.levels.length-1]/200,s=c*o,n=p*o,l=0==t[e].conw?0:Math.round(c/t[e].conw*o*100)||0,d=0==t[e].conh?0:Math.round(p/t[e].conh*o*100)||0,h=r.closest("rs-slide"),g=0,f=!1;r.hasClass("dddwrapper-layer")&&(g=a.ddd_z_correction||65,f=!0),r.hasClass("dddwrapper-layer")&&(s=0,n=0),h.index()===t[e].pr_active_key||"carousel"!=t[e].sliderType?!a.ddd_bgfreeze||f?punchgs.TweenLite.to(r,u,{rotationX:d,rotationY:-l,x:s,z:g,y:n,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,x:0,y:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==i.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}),i&&(window.ondeviceorientation=function(i){var r=Math.round(i.beta||0)-70,o=Math.round(i.gamma||0),s=jQuery(t[e].slides[t[e].pr_active_key]);if(jQuery(window).width()>jQuery(window).height()){var n=o;o=r,r=n}var l=t[e].c.width(),d=t[e].c.height(),c=360/l*o,p=180/d*r,u=a.speed/1e3||3,h=[];if(s.find(".tp-parallax-container").each(function(e){h.push(jQuery(this))}),t[e].c.find("rs-static-layers .tp-parallax-container").each(function(){h.push(jQuery(this))}),jQuery.each(h,function(){var e=jQuery(this),t=parseInt(e.data("parallaxlevel"),0)/100,i=c*t*2,a=p*t*4;punchgs.TweenLite.to(e,u,{force3D:"auto",x:i,y:a,ease:punchgs.Power3.easeOut,overwrite:"all"})}),"3D"==a.type||"3d"==a.type){var g="rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";"carousel"===t[e].sliderType&&(g="rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"),t[e].c.find(g).each(function(){var r=jQuery(this),o=a.levels[a.levels.length-1]/200,s=c*o,n=p*o*3,l=0==t[e].conw?0:Math.round(c/t[e].conw*o*500)||0,d=0==t[e].conh?0:Math.round(p/t[e].conh*o*700)||0,h=r.closest("rs-slide"),g=0,f=!1;r.hasClass("dddwrapper-layer")&&(g=a.ddd_z_correction||65,f=!0),r.hasClass("dddwrapper-layer")&&(s=0,n=0),h.hasClass("active-rs-slide")||"carousel"!=t[e].sliderType?!a.ddd_bgfreeze||f?punchgs.TweenLite.to(r,u,{rotationX:d,rotationY:-l,x:s,z:g,y:n,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,rotationX:0,z:0,ease:punchgs.Power3.easeOut,overwrite:"all"}):punchgs.TweenLite.to(r,.5,{force3D:"auto",rotationY:0,z:0,x:0,y:0,rotationX:0,ease:punchgs.Power3.easeOut,overwrite:"all"}),"mouseleave"==i.type&&punchgs.TweenLite.to(jQuery(this),3.8,{z:0,ease:punchgs.Power3.easeOut})})}}));var s=t[e].scrolleffect;s.set&&(s.multiplicator_layers=parseFloat(s.multiplicator_layers),s.multiplicator=parseFloat(s.multiplicator)),void 0!==s._L&&0===s._L.length&&(s._L=!1),void 0!==s.bgs&&0===s.bgs.length&&(s.bgs=!1),t.scrollTicker(e)}function n(i){if("3D"==a.type||"3d"==a.type){i.find("rs-sbg-wrap").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'),i.find(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:'+a.ddd_layer_overflow+';"></div>'),i.find(".rs-pxl-tobggroup").closest(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');var r=i.find(".dddwrapper"),o=i.find(".dddwrapper-layer");i.find(".dddwrapper-layertobggroup").appendTo(r),"carousel"==t[e].sliderType&&(a.ddd_shadow&&r.addClass("dddwrappershadow"),punchgs.TweenLite.set(r,{borderRadius:t[e].carousel.border_radius})),punchgs.TweenLite.set(i,{overflow:"visible",transformStyle:"preserve-3d",perspective:1600}),punchgs.TweenLite.set(r,{force3D:"auto",transformOrigin:"50% 50%",transformStyle:"preserve-3d",transformPerspective:1600}),punchgs.TweenLite.set(o,{force3D:"auto",transformOrigin:"50% 50%",zIndex:5,transformStyle:"flat",transformPerspective:1600}),punchgs.TweenLite.set(t[e].canvas,{transformStyle:"preserve-3d",transformPerspective:1600})}}},scrollTicker:function(e){1!=t[e].scrollTicker&&(t[e].scrollTicker=!0,i?(punchgs.TweenLite.ticker.fps(150),punchgs.TweenLite.ticker.addEventListener("tick",function(){t.scrollHandling(e)},t[e].c,!1,1)):document.addEventListener("scroll",function(i){t.scrollHandling(e,!0)},{passive:!0})),t.scrollHandling(e,!0)},scrollHandling:function(e,a,r,o){if(void 0!==t[e]){if(t[e].lastwindowheight=t[e].lastwindowheight||window.innerHeight,t[e].conh=0===t[e].conh||void 0===t[e].conh?t[e].infullscreenmode?t[e].minHeight:t[e].c.height():t[e].conh,t[e].lastscrolltop==window.scrollY&&!t[e].duringslidechange&&!a)return!1;punchgs.TweenLite.delayedCall(.2,function(e,i){t[e].lastscrolltop=i},[e,window.scrollY]);var s=void 0!==t[e].topc?t[e].topc[0].getBoundingClientRect():0===t[e].c.height()?t[e].cpar[0].getBoundingClientRect():t[e].c[0].getBoundingClientRect(),n=t[e].viewPort,l=t[e].parallax,d=t[e].slides[void 0===t[e].pr_active_key?0:t[e].pr_active_key];s.hheight=0===s.height?0===t[e].c.height()?t[e].cpar.height():t[e].c.height():s.height;var c=s.top<0||s.hheight>t[e].lastwindowheight?s.top/s.hheight:s.bottom>t[e].lastwindowheight?(s.bottom-t[e].lastwindowheight)/s.hheight:0,p=t[e].fixedOnTop?Math.min(1,Math.max(0,window.scrollY/t[e].lastwindowheight)):Math.min(1,Math.max(0,1-(s.top+s.hheight)/(s.hheight+t[e].lastwindowheight))),u=s.top>=0&&s.top<=t[e].lastwindowheight||s.top<=0&&s.bottom>=0||s.top<=0&&s.bottom>=0;t[e].scrollproc=c,t.callBackHandling&&t.callBackHandling(e,"parallax","start");var h=Math.max(0,1-Math.abs(c));if(u?t[e].sbtimeline.fixed?(t[e].curheight=void 0===t[e].curheight?t[e].cpar.height():t[e].curheight,void 0===t[e].sbtimeline.rest&&t.updateFixedScrollTimes(e),s.top>=0&&s.top<=t[e].lastwindowheight?(p=t[e].sbtimeline.fixStart*(1-s.top/t[e].lastwindowheight)/1e3,t[e].topc.removeClass("rs-fixedscrollon"),punchgs.TweenLite.set(t[e].cpar,{top:0})):s.top<=0&&s.bottom>=t[e].curheight?(t[e].topc.addClass("rs-fixedscrollon"),punchgs.TweenLite.set(t[e].cpar,{top:0}),p=(t[e].sbtimeline.fixStart+t[e].sbtimeline.time*(Math.abs(s.top)/(s.hheight-t[e].curheight)))/1e3):(punchgs.TweenLite.set(t[e].cpar,{top:s.height-t[e].curheight}),t[e].topc.removeClass("rs-fixedscrollon"),p=(t[e].sbtimeline.fixEnd+t[e].sbtimeline.rest*(1-s.bottom/t[e].curheight))/1e3)):p=t[e].duration*p/1e3:t[e].sbtimeline.fixed&&(t[e].topc.removeClass("rs-fixedscrollon"),punchgs.TweenLite.set(t[e].cpar,{top:0})),n.enable&&(void 0===t[e].viewPort.vaType&&t.updateVisibleArea(e),"%"===n.vaType[t[e].level]&&n.visible_area[t[e].level]<=h||"px"===n.vaType[t[e].level]&&(s.top<=0&&s.bottom>=t[e].lastwindowheight||s.top>=0&&s.bottom<=t[e].lastwindowheight||s.top>=0&&s.top<t[e].lastwindowheight-n.visible_area[t[e].level]||s.bottom>=n.visible_area[t[e].level]&&s.bottom<t[e].lastwindowheight)?t[e].inviewport||(t[e].inviewport=!0,t.enterInViewPort(e)):t[e].inviewport&&(t[e].inviewport=!1,t.leaveViewPort(e))),u&&void 0!==d&&void 0!==t.gA(d,"key")&&!0!==o)for(var g in t[e].sbas[t.gA(d,"key")])void 0===t[e]._L[g]||void 0===t[e]._L[g].timeline||1!=t[e]._L[g].animationonscroll&&"true"!=t[e]._L[g].animationonscroll||(void 0!==t[e]._L[g].scrollBasedOffset&&(p+=t[e]._L[g].scrollBasedOffset),p>0&&t[e]._L[g].animOnScrollRepeats<5?(t[e]._L[g].timeline.time(p),t[e]._L[g].animOnScrollRepeats++):punchgs.TweenMax.to(t[e]._L[g].timeline,t[e].sbtimeline.speed,{time:p,ease:t[e].sbtimeline.ease}));if(i&&l.disable_onmobile)return!1;if("3d"!=l.type&&"3D"!=l.type){if(("scroll"==l.type||"mousescroll"==l.type)&&l.pcontainers)for(var f=0;f<l.pcontainers.length;f++)if(l.pcontainers[f].length>0){var m=l.pcontainers[f],v=l.pcontainer_depths[f]/100,y=Math.round(c*(-v*t[e].conh)*10)/10||0,b=void 0!==r?r:l.speedls/1e3||0;m.data("parallaxoffset",y),punchgs.TweenLite.to(m,b,{overwrite:"auto",force3D:"auto",y:y})}if(l.bgcontainers)for(f=0;f<l.bgcontainers.length;f++){var w=l.bgcontainers[f];y=c*(-l.bgcontainer_depths[f]*t[e].conh)||0,b=void 0!==r?r:l.speedbg/1e3||.015;b=void 0!==t[e].parallax.lastBGY&&0===b&&Math.abs(y-t[e].parallax.lastBGY)>50?.15:b,punchgs.TweenLite.to(w,b,{position:"absolute",top:"0px",left:"0px",backfaceVisibility:"hidden",force3D:"true",y:y+"px"}),t[e].parallax.lastBGY=y}}var _=t[e].scrolleffect;if(_.set&&(!_.mobile||!i)){var x=Math.abs(c)-_.tilt/100;if(x=x<0?0:x,!1!==_._L){var k=1-x*_.multiplicator_layers,T={force3D:"true"};if("top"==_.direction&&c>=0&&(k=1),"bottom"==_.direction&&c<=0&&(k=1),k=k>1?1:k<0?0:k,_.fade&&(T.opacity=k),_.scale){var L=k;T.scale=1-L+1}if(_.blur){var R=(1-k)*_.maxblur;T["-webkit-filter"]="blur("+R+"px)",T.filter="blur("+R+"px)"}if(_.grayscale){var I="grayscale("+100*(1-k)+"%)";T["-webkit-filter"]=void 0===T["-webkit-filter"]?I:T["-webkit-filter"]+" "+I,T.filter=void 0===T.filter?I:T.filter+" "+I}punchgs.TweenLite.set(_._L,T)}if(!1!==_.bgs){k=1-x*_.multiplicator,T={backfaceVisibility:"hidden",force3D:"true"};for(var A in"top"==_.direction&&c>=0&&(k=1),"bottom"==_.direction&&c<=0&&(k=1),k=k>1?1:k<0?0:k,_.bgs)if(_.bgs.hasOwnProperty(A)){if(_.bgs[A].fade&&(T.opacity=k),_.bgs[A].blur){R=(1-k)*_.maxblur;T["-webkit-filter"]="blur("+R+"px)",T.filter="blur("+R+"px)"}if(_.bgs[A].grayscale){I="grayscale("+100*(1-k)+"%)";T["-webkit-filter"]=void 0===T["-webkit-filter"]?I:T["-webkit-filter"]+" "+I,T.filter=void 0===T.filter?I:T.filter+" "+I}punchgs.TweenLite.set(_.bgs[A].c,T)}}}t.callBackHandling&&t.callBackHandling(e,"parallax","end")}}})}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution;jQuery.extend(!0,t,{animateSlide:function(e){return a(e)}});var i=function(e,t){var i;return void 0!==(i=jQuery.isArray(e)?e.length>=t?e[t]:e[e.length-1]:e)&&jQuery.isNumeric(i)?parseInt(e,0):i},a=function(e){var a=e.id,n="arrow"==t[a].sc_indicator?void 0===t[a].sc_indicator_dir?t[a].sdir:t[a].sc_indicator_dir:t[a].sdir,l=!0===e.recall?jQuery.extend(!0,{},t[a].lastSliderTransition):function(e,i,a){var r="Power1.easeIn",o="Power1.easeOut",s="Power1.easeInOut",n="Power2.easeIn",l="Power2.easeOut",d="Power2.easeInOut",c="Power3.easeInOut",p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],u=[17,18,19,20,21,22,23,24,25,27],h=0,g=1,f=0,m=[["boxslide",0,0,10,"box",!1,null,0,o,o,1e3,6],["boxrandomrotate",0,1,10,"box",!1,null,60,o,o,1e3,6],["boxfade",1,0,10,"box",!1,null,1,s,s,1e3,5],["slotslide-horizontal",2,0,0,"horizontal",!0,!1,2,d,d,1e3,3],["slotslide-vertical",3,0,0,"vertical",!0,!1,3,d,d,1e3,3],["curtain-1",4,3,0,"horizontal",!0,!0,4,o,o,900,5],["curtain-2",5,3,0,"horizontal",!0,!0,5,o,o,900,5],["curtain-3",6,3,25,"horizontal",!0,!0,6,o,o,900,5],["slotzoom-horizontal",7,0,0,"horizontal",!0,!0,7,o,o,1e3,7],["slotzoom-vertical",8,0,0,"vertical",!0,!0,8,l,l,1e3,8],["slotzoom-mixed",8,1,0,"vertical",!0,!0,59,l,l,1e3,8],["slotfade-horizontal",9,0,0,"horizontal",!0,null,9,d,d,1500,10],["slotfade-vertical",10,0,0,"vertical",!0,null,10,d,d,1500,10],["crossfade-horizontal",9,0,0,"horizontal",!0,null,9,d,d,0,10],["crossfade-vertical",10,0,0,"vertical",!0,null,10,d,d,0,10],["fade",11,0,1,"horizontal",!0,null,11,d,d,1e3,1],["crossfade",11,1,1,"horizontal",!0,null,11,d,d,1e3,1],["fadethroughdark",11,2,1,"horizontal",!0,null,11,d,d,1e3,1],["fadethroughlight",11,3,1,"horizontal",!0,null,11,d,d,1e3,1],["fadethroughtransparent",11,4,1,"horizontal",!0,null,11,d,d,1e3,1],["slideleft",12,0,1,"horizontal",!0,!0,12,c,c,1e3,1],["slideup",13,0,1,"horizontal",!0,!0,13,c,c,1e3,1],["slidedown",14,0,1,"horizontal",!0,!0,14,c,c,1e3,1],["slideright",15,0,1,"horizontal",!0,!0,15,c,c,1e3,1],["slideoverleft",12,7,1,"horizontal",!0,!0,12,c,c,1e3,1],["slideoverup",13,7,1,"horizontal",!0,!0,13,c,c,1e3,1],["slideoverdown",14,7,1,"horizontal",!0,!0,14,c,c,1e3,1],["slideoverright",15,7,1,"horizontal",!0,!0,15,c,c,1e3,1],["slideremoveleft",12,8,1,"horizontal",!0,!0,12,c,c,1e3,1],["slideremoveup",13,8,1,"horizontal",!0,!0,13,c,c,1e3,1],["slideremovedown",14,8,1,"horizontal",!0,!0,14,c,c,1e3,1],["slideremoveright",15,8,1,"horizontal",!0,!0,15,c,c,1e3,1],["papercut",16,0,0,"vertical",null,!0,16,c,c,1e3,2],["3dcurtain-horizontal",17,0,20,"vertical",!0,!0,17,s,s,2e3,7],["3dcurtain-vertical",18,0,10,"horizontal",!0,!0,18,s,s,2e3,7],["cubic",19,0,20,"horizontal",!1,!0,19,d,d,1e3,1],["cube",19,0,20,"horizontal",!1,!0,20,d,d,1e3,1],["flyin",20,0,4,"vertical",!1,!0,21,"Power3.easeOut",c,1e3,1],["turnoff",21,0,1,"horizontal",!1,!0,22,c,c,1e3,1],["incube",22,0,20,"horizontal",!1,!0,23,d,d,1e3,1],["cubic-horizontal",23,0,20,"vertical",!1,!0,24,d,d,1e3,1],["cube-horizontal",23,0,20,"vertical",!1,!0,25,d,d,1e3,1],["incube-horizontal",24,0,20,"vertical",!1,!0,26,d,d,1e3,1],["turnoff-vertical",25,0,1,"horizontal",!1,!0,27,d,d,1e3,1],["fadefromright",12,1,1,"horizontal",!0,!0,28,d,d,1e3,1],["fadefromleft",15,1,1,"horizontal",!0,!0,29,d,d,1e3,1],["fadefromtop",14,1,1,"horizontal",!0,!0,30,d,d,1e3,1],["fadefrombottom",13,1,1,"horizontal",!0,!0,31,d,d,1e3,1],["fadetoleftfadefromright",12,2,1,"horizontal",!0,!0,32,d,d,1e3,1],["fadetorightfadefromleft",15,2,1,"horizontal",!0,!0,33,d,d,1e3,1],["fadetobottomfadefromtop",14,2,1,"horizontal",!0,!0,34,d,d,1e3,1],["fadetotopfadefrombottom",13,2,1,"horizontal",!0,!0,35,d,d,1e3,1],["parallaxtoright",15,3,1,"horizontal",!0,!0,36,d,d,1500,1],["parallaxtoleft",12,3,1,"horizontal",!0,!0,37,d,d,1500,1],["parallaxtotop",14,3,1,"horizontal",!0,!0,38,d,d,1500,1],["parallaxtobottom",13,3,1,"horizontal",!0,!0,39,d,d,1500,1],["scaledownfromright",12,4,1,"horizontal",!0,!0,40,d,n,1e3,1],["scaledownfromleft",15,4,1,"horizontal",!0,!0,41,d,n,1e3,1],["scaledownfromtop",14,4,1,"horizontal",!0,!0,42,d,n,1e3,1],["scaledownfrombottom",13,4,1,"horizontal",!0,!0,43,d,n,1e3,1],["zoomout",13,5,1,"horizontal",!0,!0,44,d,d,1e3,1],["zoomin",13,6,1,"horizontal",!0,!0,45,d,d,1e3,1],["slidingoverlayup",27,0,1,"horizontal",!0,!0,47,s,o,2e3,1],["slidingoverlaydown",28,0,1,"horizontal",!0,!0,48,s,o,2e3,1],["slidingoverlayright",30,0,1,"horizontal",!0,!0,49,s,o,2e3,1],["slidingoverlayleft",29,0,1,"horizontal",!0,!0,50,s,o,2e3,1],["parallaxcirclesup",31,0,1,"horizontal",!0,!0,51,d,r,1500,1],["parallaxcirclesdown",32,0,1,"horizontal",!0,!0,52,d,r,1500,1],["parallaxcirclesright",33,0,1,"horizontal",!0,!0,53,d,r,1500,1],["parallaxcirclesleft",34,0,1,"horizontal",!0,!0,54,d,r,1500,1],["notransition",26,0,1,"horizontal",!0,null,46,d,n,1e3,1],["parallaxright",15,3,1,"horizontal",!0,!0,55,d,n,1500,1],["parallaxleft",12,3,1,"horizontal",!0,!0,56,d,n,1500,1],["parallaxup",14,3,1,"horizontal",!0,!0,57,d,r,1500,1],["parallaxdown",13,3,1,"horizontal",!0,!0,58,d,r,1500,1],["grayscale",11,5,1,"horizontal",!0,null,11,d,d,1e3,1],["grayscalecross",11,6,1,"horizontal",!0,null,11,d,d,1e3,1],["brightness",11,7,1,"horizontal",!0,null,11,d,d,1e3,1],["brightnesscross",11,8,1,"horizontal",!0,null,11,d,d,1e3,1],["blurlight",11,9,1,"horizontal",!0,null,11,d,d,1e3,1],["blurlightcross",11,10,1,"horizontal",!0,null,11,d,d,1e3,1],["blurstrong",11,9,1,"horizontal",!0,null,11,d,d,1e3,1],["blurstrongcross",11,10,1,"horizontal",!0,null,11,d,d,1e3,1]];return t[e].duringslidechange=!0,jQuery.each(["parallaxcircles","slidingoverlay","slide","slideover","slideremove","parallax","parralaxto"],function(e,t){i==t+"horizontal"&&(i=1!=a?t+"left":t+"right"),i==t+"vertical"&&(i=1!=a?t+"up":t+"down")}),"random"==i?i=Math.min(Math.round(Math.random()*(m.length-1)),m.length-1):"random-static"==i?i=p[Math.min(Math.round(Math.random()*p.length-1),p.length-1)]:"random-premium"==i&&(i=u[Math.min(Math.round(Math.random()*u.length-1),u.length-1)]),1==t[e].isJoomla&&null!=window.MooTools&&-1!=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45].indexOf(i)&&(i=u[Math.max(0,Math.min(u.length-1,Math.round(Math.random()*(u.length-2))+1))]),jQuery.each(m,function(e,t){t[0]!=i&&t[7]!=i||(h=t[1],g=t[2],f=e)}),{nTR:h=Math.max(0,Math.min(30,h)),TR:m[f],trC:g}}(a,e.animation.transition[e.ntrid],n),d=t[a].pr_next_bg&&void 0!==t[a].pr_next_bg.data("panzoom")&&(l.nTR<11||17==l.nTR||18===l.nTR||l.nTR>=27&&l.nTR<=30)?11:l.nTR;!0!==e.recall?(t[a].lastSliderAnimation=jQuery.extend(!0,{},e.animation),t[a].lastSliderTransition=jQuery.extend(!0,{},l)):e.animation=jQuery.extend(!0,{},t[a].lastSliderAnimation);var c=!0===e.recall?l.ntrid:e.ntrid||0,p=i(e.animation.masterspeed,c);p=(p="default"===p||"d"===p?l.TR[10]:"random"===p?Math.round(1e3*Math.random()+300):null!=p?parseInt(p,0):l.TR[10])>t[a].duration?t[a].duration:p,t[a].rotate=i(e.animation.rotate,c),t[a].rotate=null==t[a].rotate||"default"==t[a].rotate||"d"==t[a].rotate?0:999==t[a].rotate||"random"==t[a].rotate?Math.round(360*Math.random()):t[a].rotate,t[a].rotate=window._rs_ie||window._rs_ie9?0:t[a].rotate,(d<11||16===d||17===d||18===d||l.nTR>=27&&l.nTR<=30)&&(t[a].slots=i(e.animation.slotamount,c),t[a].slots=null==t[a].slots||"default"==t[a].slots||"d"==t[a].slots?l.TR[11]:"random"==t[a].slots?Math.round(12*Math.random()+4):t[a].slots,t[a].slots=t[a].slots<1?"boxslide"==l.TR[0]?Math.round(6*Math.random()+3):"boxslide"==l.TR[0]||"flyin"==l.TR[0]?Math.round(4*Math.random()+1):t[a].slots:t[a].slots,t[a].slots=(4==d||5==d||6==d)&&t[a].slots<3?3:t[a].slots,t[a].slots=0!=l.TR[3]?Math.min(t[a].slots,l.TR[3]):t[a].slots,t[a].slots=9==d?t[a].width/t[a].slots:10==d?t[a].height/t[a].slots:t[a].slots,t[a].slots=jQuery.inArray(d,[19,20,21,22,23,24,25,27])>=0?1:t[a].slots,t[a].slots=3!=d&&8!=d&&10!=d||"vertical"!==l.TR[4]?t[a].slots:t[a].slots+2,null!=l.TR[6]&&s(t[a].pr_active_bg,a,l.TR[6],l.TR[4]),null!=l.TR[5]&&s(t[a].pr_next_bg,a,l.TR[5],l.TR[4]),t[a].mtl.delay(.075));var u=7===d||16===d||8===d||17===d||18===d?0:1,h=d<11||17===d||18===d?0:1;t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"),{scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,top:0,left:0,x:0,y:0,clearProps:"filter, transform",opacity:u}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"),{scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,top:0,left:0,x:0,y:0,clearProps:"filter, transform",opacity:h}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg,{transformOrigin:"50% 50% 0",transformPerspective:600,scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,autoAlpha:1,top:0,left:0,x:0,y:0,clearProps:"filter, transform"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg,{transformOrigin:"50% 50% 0",transformPerspective:600,scale:1,rotationX:0,rotationY:0,rotationZ:0,z:0,autoAlpha:1,top:0,left:0,x:0,y:0,clearProps:"filter, transform"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.parent(),{backgroundColor:"transparent"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.parent(),{backgroundColor:"transparent"}),0);var g=i(e.animation.easein,c),f=i(e.animation.easeout,c);if(g="default"===g||"d"===g?l.TR[8]||punchgs.Power2.easeInOut:g||l.TR[8]||punchgs.Power2.easeInOut,f="default"===f||"d"===f?l.TR[9]||punchgs.Power2.easeInOut:f||l.TR[9]||punchgs.Power2.easeInOut,d>=31){var m={canvas:t[a].pr_next_bg[0].getElementsByClassName("bgcanvas")[0]};if(m.ctx=m.canvas.getContext("2d"),m.oBG_next=t[a].pr_next_bg[0].getElementsByTagName("rs-sbg")[0],m.img_next=t.getLoadObj(a,t.gA(m.oBG_next,"src-rs-ref")),m.col_next=t.gA(m.oBG_next,"bgcolor"),void 0!==t[a].pr_active_bg[0]&&(m.oBG_act=t[a].pr_active_bg[0].getElementsByTagName("rs-sbg")[0],m.img_act=t.getLoadObj(a,t.gA(m.oBG_act,"src-rs-ref")),m.col_act=t.gA(m.oBG_act,"bgcolor")),m.ctx.clearRect(0,0,m.canvas.width,m.canvas.height),m.canvas.width=t[a].width,m.canvas.height=t[a].height,m.canvas.style.background="transparent",m.canvas.style.display="block",m.oBG_next.style.display="none",void 0!==m.col_next&&m.col_next.indexOf("gradient")>=0&&(m.col_next="transparent"),void 0!==m.col_act&&m.col_act.indexOf("gradient")>=0&&(m.col_act="transparent"),31===d){for(var v="transparent"!==m.col_next&&void 0!==m.col_next?{x:0,y:0,width:t[a].width,height:t[a].height}:r("contain"===m.oBG_next.style.backgroundSize,t[a].width,t[a].height,m.img_next.width,m.img_next.height),y=void 0===m.oBG_act?void 0:"transparent"!==m.col_act&&void 0!==m.col_act?{x:0,y:0,width:t[a].width,height:t[a].height}:r("contain"===m.oBG_act.style.backgroundSize,t[a].width,t[a].height,m.img_act.width,m.img_act.height),b=t[a].width/t[a].slots,w=b/2,_=t[a].height,x=[],k=0;k<t[a].slots+1;k++)x.push({mt:_,it:_/4,ml:0,o:2});t[a].mtl.add(punchgs.TweenMax.staggerTo(x,2*p/1e3,{mt:0,it:0,ml:w,o:0,ease:punchgs.Power3.easeOut,onUpdate:function(){var e=0;m.ctx.clearRect(0,0,m.canvas.width,m.canvas.height);for(var i=0;i<t[a].slots+1;i++){var r=x[i].mt,s=x[i].ml,n=x[i].it,l=x[i].mt-_,d=x[i].ml+w,c=x[i].it-_/4;o({ctx:m.ctx,poly:[[e-w+s,0+r],[e+w+1+s,0+r],[e+1+s,_+r],[e-b+s,_+r]],bg:{overlay:"rgba(0,0,0,"+x[i].o+")",img:m.img_next.img,col:m.col_next,offsetx:v.x,offsety:v.y+n,width:v.width,height:v.height}}),void 0!==m.col_act&&(m.oBG_act.style.display="none",o({ctx:m.ctx,poly:[[e-w+d,0+l],[e+w+1+d,0+l],[e+1+d,_+l],[e-b+d,_+l]],bg:{overlay:"rgba(0,0,0,"+(1-x[i].o)+")",img:m.img_act.img,col:m.col_act,offsetx:y.x,offsety:y.y+c,width:y.width,height:y.height}})),e+=b}}},.2,function(){m.ctx.clearRect(0,0,m.canvas.width,m.canvas.height),m.canvas.style.display="none",m.oBG_next.style.display="block"}),0)}}if(0==d){var T=Math.ceil(t[a].height/t[a].sloth),L=0;t[a].pr_next_bg.find(".slotslide").each(function(e){L=++L===T?0:L,t[a].rotate=1===l.trC?45:t[a].rotate,t[a].mtl.add(punchgs.TweenLite.from(this,p/2e3,{opacity:0,transformStyle:"flat",transformPerspective:600,scale:0,rotationZ:0!==t[a].rotate?Math.random()*t[a].rotate-t[a].rotate/2:0,force3D:"auto",ease:g}),(10*e+30*L)/3e3)})}else if(1==d)t[a].pr_next_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.from(this,(Math.random()*p+300)/1e3,{autoAlpha:0,force3D:"auto",rotation:t[a].rotate,ease:g}),(500*Math.random()+200)/1e3)});else if(2==d||3==d)t[a].pr_active_bg.find(".slotslide").each(function(){t[a].mtl.add(punchgs.TweenLite.to(this,p/1e3,{top:3===d?t[a].sloth:0,left:2===d?t[a].slotw:0,ease:g,force3D:"auto",rotation:0-t[a].rotate}),0)}),t[a].pr_next_bg.find(".slotslide").each(function(){t[a].mtl.add(punchgs.TweenLite.from(this,p/1e3,{top:3==d?1===n?0-t[a].sloth:t[a].sloth:0,left:2==d?1===n?0-t[a].slotw:t[a].slotw:0,ease:g,force3D:"auto",rotation:t[a].rotate}),0)});else if(4==d||5==d||6==d){var R=new punchgs.TimelineLite,I=p/1e3-p/1e3/t[a].slots;t[a].slots-=t[a].slots%2==1?1:0,t[a].pr_active_bg.find(".slotslide").each(function(e){var i=6!==d?e:e>t[a].slots/2?t[a].slots-e:e;R.add(punchgs.TweenLite.to(this,I,{transformPerspective:600,force3D:"auto",top:1!==n?t[a].height:-t[a].height,opacity:.75,rotation:t[a].rotate,ease:g,delay:(5!==d?i:t[a].slots-i)*(I/t[a].slots)/(6===d?1.3:1)}),0),t[a].mtl.add(R,0)}),t[a].pr_next_bg.find(".slotslide").each(function(e){var i=6!==d?e:e>t[a].slots/2?t[a].slots-e:e;R.add(punchgs.TweenLite.from(this,I,{top:1==n?t[a].height:-t[a].height,opacity:.75,rotation:t[a].rotate,force3D:"auto",ease:punchgs.eo,delay:(5!==d?i:t[a].slots-i)*(I/t[a].slots)/(6===d?1.3:1)}),0),t[a].mtl.add(R,0)})}else if(7==d||8==d)p=Math.min(t[a].duration||p,p),t[a].pr_active_bg.find(".slotslide").each(function(e){var i=e>t[a].slots/2?t[a].slots-e:e;t[a].mtl.add(punchgs.TweenLite.to(this.getElementsByTagName("div"),p/1e3,{x:8===d&&0===l.trC?0:i*t[a].slotw/3,y:8===d&&0===l.trC?i*t[a].sloth/3:0,ease:g,transformPerspective:600,force3D:"auto",filter:"blur(2px)",scale:1.2,opacity:0}),0)}),t[a].pr_next_bg.find(".slotslide").each(function(e){var i=e>t[a].slots/2?t[a].slots-e:e;t[a].mtl.add(punchgs.TweenLite.fromTo(this.getElementsByTagName("div"),p/1e3,{x:8===d&&0===l.trC?0:0-i*t[a].slotw/3,y:8===d&&0===l.trC?0-i*t[a].sloth/3:0,filter:"blur(2px)",opacity:0,transformPerspective:600,scale:1.2},{x:0,y:0,ease:f,force3D:"auto",scale:1,filter:"blur(0px)",opacity:1,rotation:0}),0)});else if(9==d||10==d){var A=t[a].pr_next_bg[0].getElementsByClassName("slotslide"),S=p-p/1.8;for(k=0;k<A.length;k++)t[a].mtl.add(punchgs.TweenLite.fromTo(A[k],(p-k*(S/t[a].slots))/1e3,{opacity:0,force3D:"auto",transformPerspective:600},{opacity:1,ease:"Linear.easeNone",delay:k*(S/t[a].slots)/1e3}),0)}else if(11==d){l.trC=Math.min(12,l.trC);var z=2==l.trC?"#000000":3==l.trC?"#ffffff":"transparent";switch(l.trC){case 0:t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:g}),0);break;case 1:t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:g}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,{autoAlpha:1},{autoAlpha:0,force3D:"auto",ease:g}),0);break;case 2:case 3:case 4:t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.parent(),{backgroundColor:z,force3D:"auto"}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.parent(),{backgroundColor:"transparent",force3D:"auto"}),0),t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,p/2e3,{autoAlpha:0,force3D:"auto",ease:g}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/2e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:g}),p/2e3);break;case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:var M="blur("+(jQuery.inArray(l.trC,[9,10])>=0?5:jQuery.inArray(l.trC,[11,12])>=0?10:0)+"px) grayscale("+(jQuery.inArray(l.trC,[5,6,7,8])>=0?100:0)+"%) brightness("+(jQuery.inArray(l.trC,[7,8])>=0?300:0)+"%)",O="blur(0px) grayscale(0%) brightness(100%)";t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{autoAlpha:0,filter:M,"-webkit-filter":M},{autoAlpha:1,filter:O,"-webkit-filter":O,force3D:"auto",ease:g}),0),jQuery.inArray(l.trC,[6,8,10])>=0&&t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,{autoAlpha:1,filter:O,"-webkit-filter":O},{autoAlpha:0,force3D:"auto",ease:g,filter:M,"-webkit-filter":M}),0)}t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"),{autoAlpha:1}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"),{autoAlpha:1}),0)}else if(12==d||13==d||14==d||15==d){var C=3==l.trC?p/1300:p/1e3,P=p/1e3,j=5==l.trC||6==l.trC?0:t[a].width,Q=5==l.trC||6==l.trC?0:t[a].currentSlideHeight,H=12==d?j:15==d?0-j:0,N=13==d?5==l.trC||6==l.trC?0:t[a].height:14==d?5==l.trC||6==l.trC?0:0-t[a].height:0,B=1==l.trC||2==l.trC||5==l.trC||6==l.trC?0:1,D=4==l.trC||5==l.trC?.6:6==l.trC?1.4:1,W=5==l.trC?1.4:6==l.trC?.6:1;if(7!=l.trC&&4!=l.trC||(j=0,Q=0),8==l.trC?(t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:15}),0),t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_next_bg,.01,{overflow:"hidden",left:0,top:0,x:0,y:0,scale:1,autoAlpha:1,rotation:0,overwrite:!0,immediateRender:!0,force3D:"auto"}),0)):(t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:15}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.from(t[a].pr_next_bg,C,{left:H,top:N,overflow:"hidden",scale:W,autoAlpha:B,rotation:t[a].rotate,ease:g,force3D:"auto"}),0)),1!=l.trC)switch(d){case 12:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,P,{left:0-j+"px",overflow:"hidden",force3D:"auto",scale:D,autoAlpha:B,rotation:t[a].rotate,ease:f}),0);break;case 15:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,P,{left:j+"px",overflow:"hidden",force3D:"auto",scale:D,autoAlpha:B,rotation:t[a].rotate,ease:f}),0);break;case 13:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,P,{top:0-Q+"px",overflow:"hidden",force3D:"auto",scale:D,autoAlpha:B,rotation:t[a].rotate,ease:f}),0);break;case 14:t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,P,{top:Q+"px",overflow:"hidden",force3D:"auto",scale:D,autoAlpha:B,rotation:t[a].rotate,ease:f}),0)}}else if(16==d){var V=1===n?"80% 50% 0":"20%  50% 0";t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:15}),0),t[a].pr_active_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.fromTo(this,p/1e3,{left:0,rotationZ:0,opacity:1,top:0,z:0,scale:1},{opacity:1,left:1===n?0==e?-t[a].width/1.6:-t[a].width/1.8:0===e?t[a].width/1.6:t[a].width/1.8,rotationZ:1===n?0===e?-35:25:0===e?25:-35,z:0,top:0==e?"-120%":"140%",scale:.8,force3D:"auto",transformPerspective:600,transformOrigin:V,delay:0,ease:g}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(this,p/2e3,{opacity:1},{opacity:0,delay:p/2e3}),0)}),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3-p/7e3,{x:100*Math.random()-50,opacity:1,scale:.9,rotationZ:10*Math.random()-5},{x:0,opacity:1,scale:1,rotationZ:0,ease:g,force3D:"auto",delay:p/7e3}),0)}else if(17==d||18==d)t[a].pr_next_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.fromTo(this,p/t[a].slots/1e3,{opacity:0,top:0,left:0,rotationY:17===d?0:90,scale:1,rotationX:17===d?-90:0,force3D:"auto",transformPerspective:600,transformOrigin:17===d?"top center":"center left"},{opacity:1,top:0,left:0,rotationX:0,rotationY:0,force3D:"auto",ease:f,delay:e*(p/t[a].slots/2e3)}),0)}),t[a].pr_active_bg.find(".slotslide").each(function(e){t[a].mtl.add(punchgs.TweenLite.fromTo(this,p/t[a].slots/1e3,{opacity:1,rotationY:0,scale:1,rotationX:0,force3D:"auto",transformPerspective:600,transformOrigin:17===d?"bottom center":"center right"},{opacity:0,rotationX:17===d?110:0,rotationY:17===d?0:110,force3D:"auto",ease:g,delay:e*(p/t[a].slots/2e3)}),0)});else if(19==d||22==d||23==d||24==d){t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide,{zIndex:20}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide,{zIndex:10}),0);V=19===d?"center center -"+t[a].height/2:22===d?"center center "+t[a].height/2:23===d?"center center -"+t[a].width/2:"center center "+t[a].width/2;punchgs.TweenLite.set(t[a].c,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{rotationX:19==d||22===d?1==n?-90:90:0,rotationY:23==d||24===d?1==n?-90:90:0,left:0,top:0,scale:1,x:0,y:0,overflow:"hidden",autoAlpha:1,transformStyle:"flat",backfaceVisibility:"hidden",force3D:"auto",transformPerspective:1200,transformOrigin:V},{overflow:"hidden",left:0,autoAlpha:1,rotationX:0,rotationY:0,top:0,scale:1,delay:0,ease:g,transformStyle:"flat",backfaceVisibility:"hidden",force3D:"auto",transformPerspective:1200,transformOrigin:V}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/2e3,{z:19==d||23===d?-200:0},{z:19===d||23===d?0:-200,ease:"Power3.easeInOut",delay:19===d||23===d?p/2e3:0}),0),22!==d&&24!==d||t[a].mtl.add(punchgs.TweenLite.fromTo([t[a].pr_active_bg,t[a].pr_next_bg],p/2e3,{z:-200},{z:0,ease:"Power2.easeIn",delay:p/2e3}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/2e3,{z:0},{z:-200,ease:"Power3.easeInOut",delay:0,force3D:"auto"}),0),19!==d&&23!==d||t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/2e3,{autoAlpha:1},{autoAlpha:0,ease:"LinearEase.none",delay:p/2e3,force3D:"auto"}),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,{overflow:"hidden",rotationX:0,rotationY:0,rotationZ:0,top:0,left:0,scale:1,transformStyle:"flat",backfaceVisibility:"hidden",force3D:"auto",transformPerspective:1200,transformOrigin:V},{rotationX:19===d||22===d?1==n?90:-90:0,rotationY:23===d||24===d?1==n?90:-90:0,overflow:"hidden",top:0,scale:1,delay:0,force3D:"auto",ease:g,transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:1200,transformOrigin:V}),0)}else if(20==d){V=1===n?"20% ":"80% ";V+="60% -50%",t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{left:1===n?-t[a].width:t[a].width,rotationX:20,z:-t[a].width,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:V,rotationY:1===n?50:-50},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:0,ease:g}),0),V=1!=n?"20% ":"80% ",V+="60% -50%",t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,{autoAlpha:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:V,rotationY:0},{autoAlpha:1,rotationX:20,top:0,z:-t[a].width,left:1!=n?-t[a].width/1.2:t[a].width/1.2,force3D:"auto",rotationY:1===n?-50:50,delay:0,ease:"Power2.easeInOut"}),0)}else if(21==d||25==d){var Y=25===d?t[a].rotate:1===n?90:-90,F=25===d?1===n?-90:90:t[a].rotate;V=1===n?25===d?"center top 0":"left center 0":25===d?"center bottom 0":"right center 0";t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,p/1e3,{transformStyle:"flat",rotationX:F,top:0,left:0,autoAlpha:0,force3D:"auto",transformPerspective:1200,transformOrigin:V,rotationY:Y},{autoAlpha:1,rotationX:0,rotationY:0,ease:g}),0),V=1===n?25===d?"center bottom 0":"right center 0":25===d?"center top 0":"left center 0",Y=25!==d?-Y:Y,F=25!==d?F:-F,t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,{rotationX:0,rotationY:0,transformStyle:"flat",transformPerspective:1200,force3D:"auto"},{immediateRender:!0,rotationX:F,transformOrigin:V,rotationY:Y,ease:f}),0)}else if(26==d)p=0,t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg,.001,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:g}),0),t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg,.001,{autoAlpha:0,force3D:"auto",ease:g}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"),{autoAlpha:1}),0),t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"),{autoAlpha:1}),0);else if(27==d||28==d||29==d||30==d){var E=t[a].pr_next_bg.find(".slot"),X=27==d||29==d?"-100%":"+100%",Z=27==d||29==d?"+100%":"-100%",q=27==d||29==d?"-80%":"80%",G=27==d||29==d?"+80%":"-80%",U=27==d||29==d?"+10%":"-10%",J={overwrite:"all"},K={autoAlpha:0,zIndex:1,force3D:"auto",ease:g},$={position:"inherit",autoAlpha:0,overwrite:"all",zIndex:1},ee={autoAlpha:1,force3D:"auto",ease:f},te={overwrite:"all",zIndex:2,opacity:1,autoAlpha:1},ie={autoAlpha:1,force3D:"auto",overwrite:"all",ease:g},ae={overwrite:"all",zIndex:2,autoAlpha:1},re={autoAlpha:1,force3D:"auto",ease:g},oe=1==(27==d||28==d?1:2)?"y":"x";J[oe]="0px",K[oe]=X,$[oe]=U,ee[oe]="0%",te[oe]=Z,ie[oe]=X,ae[oe]=q,re[oe]=G,E.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg,p/1e3,J,K),0),t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg.find("rs-sbg"),p/2e3,$,ee),p/2e3),t[a].mtl.add(punchgs.TweenLite.fromTo(E,p/1e3,te,ie),0),t[a].mtl.add(punchgs.TweenLite.fromTo(E.find(".slotslide div"),p/1e3,ae,re),0)}},r=function(e,t,i,a,r){const o=a/r,s=t/i;let n=t,l=i;return(e?o>s:o<s)?l=n/o:n=l*o,{width:n,height:l,x:(t-n)/2,y:(i-l)/2}},o=function(e){e.ctx.save(),e.ctx.beginPath(),e.ctx.moveTo(e.poly[0][0],e.poly[0][1]);for(var t=1;t<e.poly.length;t++)e.ctx.lineTo(e.poly[t][0],e.poly[t][1]);e.ctx.closePath(),e.ctx.lineWidth=2,e.ctx.stroke(),e.ctx.clip(),void 0!==e.bg.img&&e.ctx.drawImage(e.bg.img,e.bg.offsetx,e.bg.offsety,e.bg.width,e.bg.height),"transparent"!==e.bg.col&&void 0!==e.bg.col&&(e.ctx.fillStyle=e.bg.col,e.ctx.fillRect(e.bg.offsetx,e.bg.offsety,e.bg.width,e.bg.height)),void 0!==e.bg.overlay&&(e.ctx.fillStyle=e.bg.overlay,e.ctx.fillRect(e.bg.offsetx,e.bg.offsety,e.bg.width,e.bg.height)),e.ctx.restore()},s=function(e,i,a,r){var o=e.find("rs-sbg"),s=o.data("mediafilter"),n=e.data("zoomstart"),l=e.data("rotationstart");null!=o.data("currotate")&&(l=o.data("currotate")),null!=o.data("curscale")&&"box"==r?n=100*o.data("curscale"):null!=o.data("curscale")&&(n=o.data("curscale")),function(e,i){t[i].slotw=Math.ceil(t[i].width/t[i].slots),"fullscreen"==t[i].sliderLayout?t[i].sloth=Math.ceil(jQuery(window).height()/t[i].slots):t[i].sloth=Math.ceil(t[i].height/t[i].slots),t[i].autoHeight&&void 0!==e&&""!==e&&(t[i].sloth=Math.ceil(e.height()/t[i].slots))}(o,i);var d=void 0!==o[0]&&void 0!==o[0].dataset&&void 0!==o[0].dataset.lazyload?o[0].dataset.lazyload:o.attr("src"),c=t[i].width,p=t[i].autoHeight?t[i].c.height():t[i].height,u=o.data("fxof"),h=0,g=e.data("bgcolor")||o.css("backgroundColor"),f=e.data("bgfit")||"cover",m=e.data("bgrepeat")||"no-repeat",v=e.data("bgposition")||"center center",y=void 0!==g&&g.indexOf("gradient")>=0?"background:"+g:"background-color:"+g+";background-image:url("+d+");background-repeat:"+m+";background-size:"+f+";background-position:"+v,b="";if(u=null==u?0:u,e.find(".slot").each(function(){jQuery(this).remove()}),"box"===r)for(var w=0,_=0,x=0;x<t[i].slots;x++){_=0;for(var k=0;k<t[i].slots;k++)b+='<div class="slot" style="'+(null!=n&&null!=l?"transform:rotateZ("+l+"deg)":"")+";position:absolute;overflow:hidden;top:"+(0+_)+"px;left:"+(u+w)+"px;width:"+t[i].slotw+"px;height:"+t[i].sloth+'px;"><div class="slotslide '+s+'" data-x="'+w+'" data-y="'+_+'" style="position:absolute;top:0px;left:0px;width:'+t[i].slotw+"px;height:"+t[i].sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-_)+"px;left:"+(0-w)+"px;width:"+c+"px;height:"+p+"px;"+y+';"></div></div></div>',_+=t[i].sloth;w+=t[i].slotw}else if("horizontal"===r){if(!a)h=0-t[i].slotw;for(k=0;k<t[i].slots;k++)b+='<div class="slot" style="'+(null!=n&&null!=l?"transform:rotateZ("+l+"deg)":"")+";position:absolute;overflow:hidden;top:0px;left:"+(u+k*t[i].slotw)+"px;width:"+(t[i].slotw+.3)+"px;height:"+p+'px"><div class="slotslide '+s+'" style="position:absolute;top:0px;left:'+h+"px;width:"+(t[i].slotw+.6)+"px;height:"+p+'px;overflow:hidden;"><div style="position:absolute;top:0px;left:'+(0-k*t[i].slotw)+"px;width:"+c+"px;height:"+p+"px;"+y+';"></div></div></div>'}if("vertical"===r){if(!a)h=0-t[i].sloth;for(k=0;k<t[i].slots;k++)b+='<div class="slot" style="'+(null!=n&&null!=l?"transform:rotateZ("+l+"deg)":"")+";position:absolute;overflow:hidden;top:"+(0+k*t[i].sloth)+"px;left:"+u+"px;width:"+c+"px;height:"+t[i].sloth+'px"><div class="slotslide '+s+'" style="position:absolute;top:'+h+"px;left:0px;width:"+c+"px;height:"+t[i].sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-k*t[i].sloth)+"px;left:0px;width:"+c+"px;height:"+p+"px;"+y+';"></div></div></div>'}e.append(b)}}(jQuery),function(e){"use strict";var t=jQuery.fn.revolution,i=t.is_mobile();t.is_android();function a(e){return null==e?-1:jQuery.isNumeric(e)?e:e.split(":").length>1?60*parseInt(e.split(":")[0],0)+parseInt(e.split(":")[1],0):e}jQuery.extend(!0,t,{preLoadAudio:function(e,i){t[i].videos=void 0===t[i].videos?{}:t[i].videos,e.find(".rs-layer-audio").each(function(){var e=jQuery(this),a=t[i].videos[e[0].id]=void 0===t[i].videos[e[0].id]?y(e.data(),"audio"):t[i].videos[e[0].id],r={};0===e.find("audio").length&&(r.src=null!=a.mp4?a.mp4:"",r.pre=a.pload||"",this.id=void 0===this.id||""===this.id?e.attr("audio-layer-"+Math.round(199999*Math.random())):this.id,r.id=this.id,r.status="prepared",r.start=jQuery.now(),r.waittime=void 0!==a.ploadwait?1e3*a.ploadwait:5e3,"auto"!=r.pre&&"canplaythrough"!=r.pre&&"canplay"!=r.pre&&"progress"!=r.pre||(void 0===t[i].audioqueue&&(t[i].audioqueue=[]),t[i].audioqueue.push(r),t.manageVideoLayer(e,i)))})},preLoadAudioDone:function(e,i,a){var r=t[i].videos[e[0].id];t[i].audioqueue&&t[i].audioqueue.length>0&&jQuery.each(t[i].audioqueue,function(e,t){r.mp4!==t.src||t.pre!==a&&"auto"!==t.pre||(t.status="loaded")})},resetVideo:function(e,a,r,o){var s=t[a].videos[e[0].id];switch(s.type){case"youtube":s.rwd&&null!=s.player&&void 0!==s.player.seekTo&&(s.player.seekTo(-1==s.ssec?0:s.ssec),s.player.pauseVideo()),0!=e.find("rs-poster").length||s.bgvideo||"preset"===r||punchgs.TweenLite.to(e.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"vimeo":void 0!==s.vimeoplayer&&!o&&s.rwd&&(0!==s.ssec&&-1!==s.ssec||s.bgvideo||e.find("rs-poster").length>0)&&(s.vimeoplayer.setCurrentTime(-1==s.ssec?0:s.ssec),s.vimeoplayer.pause()),0!=e.find("rs-poster").length||s.bgvideo||"preset"===r||punchgs.TweenLite.to(e.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"html5":if(i&&s.notonmobile)return!1;punchgs.TweenLite.to(s.jvideo,.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),!s.rwd||e.hasClass("videoisplaying")||isNaN(s.video.duration)||(s.video.currentTime=-1==s.ssec?0:s.ssec),("mute"==s.volume||t.lastToggleState(e.videomutetoggledby)||!0===t[a].globalmute)&&(s.video.muted=!0)}},Mute:function(e,i,a){var r=!1,o=t[i].videos[e[0].id];switch(o.type){case"youtube":o.player&&(!0===a&&o.player.mute(),!1===a&&l(o,parseInt(o.volcache,0)),r=o.player.isMuted());break;case"vimeo":o.volcachecheck||(o.volcache=o.volcache>1?o.volcache/100:o.volcache,o.volcachecheck=!0),o.volume=!0===a?"mute":!1===a?o.volcache:o.volume,void 0!==a&&null!=o.vimeoplayer&&n(o,!0===a?0:o.volcache),r="mute"==o.volume||0===o.volume;break;case"html5":o.volcachecheck||(o.volcache=o.volcache>1?o.volcache/100:o.volcache,o.volcachecheck=!0),o.video.volume=o.volcache,void 0!==a&&o.video&&(o.video.muted=a),r=void 0!==o.video?o.video.muted:r}if(void 0===a)return r},stopVideo:function(e,i){if(void 0!==t[i]&&void 0!==t[i]){var a=t[i].videos[e[0].id];if(void 0!==a)switch(t[i].leaveViewPortBasedStop||(t[i].lastplayedvideos=[]),t[i].leaveViewPortBasedStop=!1,a.type){case"youtube":if(void 0===a.player||2===a.player.getPlayerState()||5===a.player.getPlayerState())return;a.player.pauseVideo(),a.youtubepausecalled=!0,setTimeout(function(){a.youtubepausecalled=!1},80);break;case"vimeo":if(void 0===a.vimeoplayer)return;a.vimeoplayer.pause(),a.vimeopausecalled=!0,setTimeout(function(){a.vimeopausecalled=!1},80);break;case"html5":a.video&&a.video.pause()}}},playVideo:function(e,i){var a=t[i].videos[e[0].id];switch(clearTimeout(a.videoplaywait),a.type){case"youtube":if(0==e.find("iframe").length)e.append(a.videomarkup),h(e,i,!0);else if(null!=a.player.playVideo){var o=a.player.getCurrentTime();a.nseTriggered&&(o=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>o&&a.player.seekTo(a.ssec),!0!==a.youtubepausecalled&&p(a)}else a.videoplaywait=setTimeout(function(){!0!==a.youtubepausecalled&&t.playVideo(e,i)},50);break;case"vimeo":0==e.find("iframe").length?(delete a.vimeoplayer,e.append(a.videomarkup),h(e,i,!0)):e.hasClass("rs-apiready")?(a.vimeoplayer=null==a.vimeoplayer?new Vimeo.Player(e.find("iframe").attr("id")):a.vimeoplayer,a.vimeoplayer.getPaused()?setTimeout(function(){var r=void 0===a.currenttime?0:a.currenttime;a.nseTriggered&&(r=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>r&&a.vimeoplayer.setCurrentTime(a.ssec),("mute"==a.volume||0===a.volume||t.lastToggleState(e.data("videomutetoggledby"))||!0===t[i].globalmute)&&(a.volumetoken=!0,a.vimeoplayer.setVolume(0)),c(a.vimeoplayer)},510):a.videoplaywait=setTimeout(function(){!0!==a.vimeopausecalled&&t.playVideo(e,i)},50)):a.videoplaywait=setTimeout(function(){!0!==a.vimeopausecalled&&t.playVideo(e,i)},100);break;case"html5":if(a.metaloaded){d(a.video);o=a.video.currentTime;a.nseTriggered&&(o=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>o&&(a.video.currentTime=a.ssec)}else r(a.video,"loadedmetadata",function(e){t.resetVideo(e,i),a.video.play();var r=a.video.currentTime;a.nseTriggered&&(r=-1,a.nseTriggered=!1),-1!=a.ssec&&a.ssec>r&&(a.video.currentTime=a.ssec)}(e))}},isVideoPlaying:function(e,i){var a=!1;return null!=t[i].playingvideos&&jQuery.each(t[i].playingvideos,function(t,i){e.attr("id")==i.attr("id")&&(a=!0)}),a},removeMediaFromList:function(e,t){w(e,t)},prepareCoveredVideo:function(e,i){var a=t[e].videos[i[0].id];if(t.updateDimensions(e),void 0===a.vimeoid||void 0!==a.vimeoplayerloaded){if(a.ifr=i.find("iframe, video"),a.vd=a.ratio.split(":").length>1?a.ratio.split(":")[0]/a.ratio.split(":")[1]:1,0===t[e].conw||0===t[e].conh)return t.setSize(e),clearTimeout(a.resizelistener),void(a.resizelistener=setTimeout(function(){t.prepareCoveredVideo(e,i)},100));var r=t[e].conw/t[e].conh,o=r/a.vd*100,s=a.vd/r*100;"html5"===a.type&&"Edge"!==t.get_browser()&&"IE"!==t.get_browser()&&(s=100,o=100),"Edge"===t.get_browser()?r>a.vd?punchgs.TweenLite.set(a.ifr,{minWidth:"100%",height:o+"%",x:"-50%",y:"-50%",top:"50%",left:"50%",position:"absolute"}):punchgs.TweenLite.set(a.ifr,{minHeight:"100%",width:s+"%",x:"-50%",y:"-50%",top:"50%",left:"50%",position:"absolute"}):r>a.vd?punchgs.TweenLite.set(a.ifr,{height:o+"%",width:"100%",top:-(o-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.set(a.ifr,{width:s+"%",height:"100%",left:-(s-100)/2+"%",top:"0px",position:"absolute"}),a.ifr.hasClass("resizelistener")||(a.ifr.addClass("resizelistener"),jQuery(window).resize(function(){t.prepareCoveredVideo(e,i),clearTimeout(a.resizelistener),a.resizelistener=setTimeout(function(){t.prepareCoveredVideo(e,i)},90)}))}},checkVideoApis:function(e,i){location.protocol;if(!t[i].youtubeapineeded&&((null!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(t[i].youtubeapineeded=!0),t[i].youtubeapineeded&&!window.rs_addedyt)){t[i].youtubestarttime=jQuery.now(),window.rs_addedyt=!0;var a=document.createElement("script"),r=document.getElementsByTagName("script")[0],o=!0;a.src="https://www.youtube.com/iframe_api",jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(o=!1)}),o&&r.parentNode.insertBefore(a,r)}if(!t[i].vimeoapineeded&&((null!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(t[i].vimeoapineeded=!0),t[i].vimeoapineeded&&!window.rs_addedvim)){t[i].vimeostarttime=jQuery.now(),window.rs_addedvim=!0;var s=document.createElement("script");r=document.getElementsByTagName("script")[0],o=!0;s.src="https://player.vimeo.com/api/player.js",jQuery("head").find("*").each(function(){"https://player.vimeo.com/api/player.js"==jQuery(this).attr("src")&&(o=!1)}),o&&r.parentNode.insertBefore(s,r)}},manageVideoLayer:function(e,a){if(!0===t.gA(e[0],"videoLayerManaged")||"true"===t.gA(e[0],"videoLayerManaged"))return!1;t[a].videos=void 0===t[a].videos?{}:t[a].videos;var o=t[a].videos[e[0].id]=void 0===t[a].videos[e[0].id]?y(e.data()):t[a].videos[e[0].id];if(o.audio=void 0!==o.audio&&o.audio,i&&o.opom)0==e.find("rs-poster").length&&e.append('<rs-poster class="noSwipe" style="background-image:url('+o.poster+');"></rs-poster>');else{switch(o.id=e[0].id,o.pload="auto"===o.pload||"canplay"===o.pload||"canplaythrough"===o.pload||"progress"===o.pload?"auto":o.pload,o.type=null!=o.mp4||null!=o.webm?"html5":null!=o.ytid&&String(o.ytid).length>1?"youtube":null!=o.vimeoid&&String(o.vimeoid).length>1?"vimeo":"none",o.newtype="html5"==o.type&&0==e.find(o.audio?"audio":"video").length?"html5":"youtube"==o.type&&0==e.find("iframe").length?"youtube":"vimeo"==o.type&&0==e.find("iframe").length?"vimeo":"none",!o.audio&&"1sttime"==o.aplay&&o.pausetimer&&o.bgvideo&&e.closest("rs-slide").addClass("rs-pause-timer-once"),o.audio||!o.bgvideo||!o.pausetimer||1!=o.aplay&&"true"!=o.aplay&&"no1sttime"!=o.aplay||e.closest("rs-slide").addClass("rs-pause-timer-always"),o.noInt&&e.addClass("rs-nointeraction"),o.newtype){case"html5":o.audio&&e.addClass("rs-audio"),o.tag=o.audio?"audio":"video";var s="video"===o.tag&&(t.is_mobile()||t.isSafari11())?o.aplay||"true"===o.aplay?"muted playsinline autoplay":o.inline?" playsinline":"":"",n="<"+o.tag+" "+s+" "+(o.controls?" controls ":"")+' style="'+("Edge"!==t.get_browser()?"object-fit:cover;background-size:cover;opacity:0;width:100%; height:100%":"")+'" class="" '+(o.loop?"loop":"")+' preload="'+o.pload+'">';"video"===o.tag&&null!=o.webm&&"firefox"==t.get_browser().toLowerCase()&&(n=n+'<source src="'+o.webm+'" type="video/webm" />'),null!=o.mp4&&(n=n+'<source src="'+o.mp4+'" type="'+("video"===o.tag?"video/mp4":"audio/mpeg")+'" />'),null!=o.ogv&&(n=n+'<source src="'+o.mp4+'" type="'+o.tag+'/ogg" />'),n+="</"+o.tag+">",o.videomarkup=n,i&&o.notonmobile||t.isIE(8)||e.append(n),e.find(o.tag).parent().hasClass("html5vid")||e.find(o.tag).wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'),o.jvideo=e.find(o.tag),o.video=o.jvideo[0],o.html5vid=o.jvideo.parent(),o.metaloaded||r(o.video,"loadedmetadata",function(e){m(e,a),t.resetVideo(e,a)}(e));break;case"youtube":o.controls||(o.vatr=o.vatr.replace("controls=1","controls=0"),-1==o.vatr.toLowerCase().indexOf("controls")&&(o.vatr=o.vatr+"&controls=0")),(o.inline||"RS-BGVIDEO"===e[0].tagName)&&(o.vatr=o.vatr+"&playsinline=1"),-1!=o.ssec&&(o.vatr+="&start="+o.ssec),-1!=o.esec&&(o.vatr+="&end="+o.esec);var l=o.vatr.split("origin=https://");o.vatrnew=l.length>1?l[0]+"origin=https://"+(self.location.href.match(/www/gi)&&!l[1].match(/www/gi)?"www."+l[1]:l[1]):o.vatr,o.videomarkup='<iframe allow="autoplay; fullscreen" type="text/html" src="https://www.youtube-nocookie.com/embed/'+o.ytid+"?"+o.vatrnew+'" '+(!0===o.afs?"allowfullscreen":"")+' width="100%" height="100%" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';break;case"vimeo":o.controls?(o.vatr=o.vatr.replace("background=0","background=1"),-1==o.vatr.toLowerCase().indexOf("background")&&(o.vatr=o.vatr+"&background=1")):(o.vatr=o.vatr.replace("background=1","background=0"),-1==o.vatr.toLowerCase().indexOf("background")&&(o.vatr=o.vatr+"&background=0")),o.vatr="autoplay="+(!0===o.aplay?1:0)+"&"+o.vatr,i&&(o.vatr="muted=1&"+o.vatr),o.loop&&(o.vatr="loop=1&"+o.vatr),o.videomarkup='<iframe  allow="autoplay; fullscreen" src="https://player.vimeo.com/video/'+o.vimeoid+"?"+o.vatr+'" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:visible;100%;height:100%"></iframe>'}if(!(null!=o.poster&&o.poster.length>2)||i&&o.npom){if(i&&o.notonmobile)return!1;0!=e.find("iframe").length||"youtube"!=o.type&&"vimeo"!=o.type||(delete o.vimeoplayer,e.append(o.videomarkup),h(e,a,!1))}else 0==e.find("rs-poster").length&&e.append('<rs-poster class="noSwipe" style="background-image:url('+o.poster+');"></rs-poster>'),0==e.find("iframe").length&&e.find("rs-poster").click(function(){if(t.playVideo(e,a),i){if(o.notonmobile)return!1;punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut})}});"none"!==o.doverlay&&void 0!==o.doverlay&&(o.bgvideo?1!=e.closest("rs-sbg-wrap").find("rs-dotted").length&&e.closest("rs-sbg-wrap").append('<rs-dotted class="'+o.doverlay+'"></rs-dotted>'):1!=e.find("rs-dotted").length&&e.append('<rs-dotted class="'+o.doverlay+'"></rs-dotted>')),t.sA(e[0],"videoLayerManaged",!0),o.bgvideo&&punchgs.TweenLite.set(e.find("video, iframe"),{opacity:0})}}});var r=function(e,t,i){e.addEventListener?e.addEventListener(t,i,{capture:!1,passive:!0}):e.attachEvent(t,i,{capture:!1,passive:!0})},o=function(e,t,i){var a={};return a.video=e,a.type=t,a.settings=i,a},s=function(e,i){var a=t[e].videos[i[0].id];(a.bgvideo||a.fcover)&&(a.fcover&&i.removeClass("rs-fsv").addClass("coverscreenvideo"),(void 0===a.ratio||a.ratio.split(":").length<=1)&&(a.ratio="16:9"),t.prepareCoveredVideo(e,i))},n=function(e,t){var i=e.vimeoplayer;i.getPaused().then(function(a){e.volumetoken=!0;var r=!a,o=i.setVolume(t);void 0!==o&&o.then(function(t){i.getPaused().then(function(t){r===t&&(e.volume="mute",e.volumetoken=!0,i.setVolume(0),i.play())}).catch(function(e){console.log("Get Paused Function Failed for Vimeo Volume Changes Inside the Promise")})}).catch(function(t){r&&(e.volume="mute",e.volumetoken=!0,i.setVolume(0),i.play())})}).catch(function(){console.log("Get Paused Function Failed for Vimeo Volume Changes")})},l=function(e,t){var i=e.player.getPlayerState();"mute"===t?e.player.mute():(e.player.unMute(),e.player.setVolume(t)),setTimeout(function(){1===i&&1!==e.player.getPlayerState()&&(e.player.mute(),e.player.playVideo())},39)},d=function(e){var t=e.play();void 0!==t&&t.then(function(e){}).catch(function(t){e.pause()})},c=function(e){var t=e.play();void 0!==t&&t.then(function(e){}).catch(function(t){_.volumetoken=!0,e.setVolume(0),e.play()})},p=function(e){e.player.playVideo(),setTimeout(function(){1!==e.player.getPlayerState()&&3!==e.player.getPlayerState()&&(e.volume="mute",e.player.mute(),e.player.playVideo())},39)},u=function(e,i,a){e.vimeostarted=!0,e.nextslidecalled=!1,punchgs.TweenLite.to(i.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(i.find("iframe"),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),t[a].c.trigger("revolution.slide.onvideoplay",o(e.vimeoplayer,"vimeo",e)),t[a].stopByVideo=e.pausetimer,b(i,a),"mute"==e.volume||0===e.volume||t.lastToggleState(i.data("videomutetoggledby"))||!0===t[a].globalmute?(e.volumetoken=!0,e.vimeoplayer.setVolume(0)):n(e,parseInt(e.volcache,0)/100||.75),t.toggleState(e.videotoggledby)},h=function(e,a,r){var n=t[a].videos[e[0].id],d="iframe"+Math.round(1e5*Math.random()+1);if(n.ifr=e.find("iframe"),s(a,e),n.ifr.attr("id",d),n.startvideonow=r,n.videolistenerexist){if(r)switch(n.type){case"youtube":p(n),-1!=n.ssec&&n.player.seekTo(n.ssec);break;case"vimeo":c(n.vimeoplayer),-1!=n.ssec&&n.vimeoplayer.seekTo(n.ssec)}}else switch(n.type){case"youtube":n.player=new YT.Player(d,{events:{onStateChange:function(i){i.data==YT.PlayerState.PLAYING?(punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(n.ifr,.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==n.volume||0===n.volume||t.lastToggleState(e.data("videomutetoggledby"))||!0===t[a].globalmute?n.player.mute():l(n,parseInt(n.volcache,0)||75),t[a].stopByVideo=!0,b(e,a),n.pausetimer?t[a].c.trigger("stoptimer"):t[a].stopByVideo=!1,t[a].c.trigger("revolution.slide.onvideoplay",o(n.player,"youtube",n)),t.toggleState(n.videotoggledby)):(0==i.data&&n.loop&&(-1!=n.ssec&&n.player.seekTo(n.ssec),p(n),t.toggleState(n.videotoggledby)),f()||0!=i.data&&2!=i.data||!(n.scop&&e.find("rs-poster").length>0||n.bgvideo&&e.find(".rs-fullvideo-cover").length>0)||(n.bgvideo?punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"),.1,{opacity:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(e.find("rs-poster"),.1,{opacity:1,visibility:"visible",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(n.ifr,.1,{opacity:0,ease:punchgs.Power3.easeInOut})),-1!=i.data&&3!=i.data&&(t[a].stopByVideo=!1,t[a].tonpause=!1,w(e,a),t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.player,"youtube",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)),0==i.data&&n.nse?(g(),n.nseTriggered=!0,t[a].c.revnext(),w(e,a)):(w(e,a),t[a].stopByVideo=!1,3!==i.data&&(-1!=n.lasteventdata&&3!=n.lasteventdata&&void 0!==n.lasteventdata||-1!=i.data&&3!=i.data)&&t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.player,"youtube",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby))),n.lasteventdata=i.data},onReady:function(a){var r,o=t.is_mobile(),s=e.hasClass("rs-layer-video");!o&&(!t.isSafari11()||o&&s)||"RS-BGVIDEO"!==e[0].tagName&&(!s||!0!==n.aplay&&"true"!==n.aplay)||(r=!0,n.player.setVolume(0),n.volume="mute",n.player.mute(),clearTimeout(e.data("mobilevideotimr")),e.data("mobilevideotimr",setTimeout(function(){p(n)},500))),r||"mute"!=n.volume||(n.player.setVolume(0),n.player.mute()),e.addClass("rs-apiready"),null==n.speed&&1===n.speed||a.target.setPlaybackRate(parseFloat(n.speed)),e.find("rs-poster").unbind("click"),e.find("rs-poster").click(function(){i||p(n)}),n.startvideonow&&(p(n),-1!=n.ssec&&n.player.seekTo(n.ssec)),n.videolistenerexist=!0}}});break;case"vimeo":for(var h,m=n.ifr.attr("src"),v={},y=m,_=/([^&=]+)=([^&]*)/g;h=_.exec(y);)v[decodeURIComponent(h[1])]=decodeURIComponent(h[2]);m=(m=null!=v.player_id?m.replace(v.player_id,d):m+"&player_id="+d).replace(/&api=0|&api=1/g,"");var x,k=t.is_mobile(),T=k||t.isSafari11(),L="RS-BGVIDEO"===e[0].tagName;if(T&&L&&(m+="&background=1"),n.ifr.attr("src",m),n.vimeoplayer=void 0===n.vimeoplayer||!1===n.vimeoplayer?new Vimeo.Player(d):n.vimeoplayer,T)L?x=!0:(n.aplay||"true"===n.aplay)&&(k&&(n.aplay=!1),x=!0),x&&(n.volumetoken=!0,n.vimeoplayer.setVolume(0),n.volume="mute");n.vimeoplayer.on("play",function(t){n.vimeostarted||u(n,e,a)}),n.vimeoplayer.on("loaded",function(t){var i={};n.vimeoplayer.getVideoWidth().then(function(t){i.width=t,void 0!==i.width&&void 0!==i.height&&(n.ratio=i.width+":"+i.height,n.vimeoplayerloaded=!0,s(a,e))}),n.vimeoplayer.getVideoHeight().then(function(t){i.height=t,void 0!==i.width&&void 0!==i.height&&(n.ratio=i.width+":"+i.height,n.vimeoplayerloaded=!0,s(a,e))}),n.startvideonow&&("mute"===n.volume&&(n.volumetoken=!0,n.vimeoplayer.setVolume(0)),c(n.vimeoplayer),-1!=n.ssec&&n.vimeoplayer.setCurrentTime(n.ssec))}),e.addClass("rs-apiready"),n.vimeoplayer.on("volumechange",function(e){n.volumetoken&&(n.volume=e.volume),n.volumetoken=!1}),n.vimeoplayer.on("timeupdate",function(i){n.vimeostarted||u(n,e,a),n.pausetimer&&"playing"==t[a].sliderstatus&&(t[a].stopByVideo=!0,t[a].c.trigger("stoptimer")),n.currenttime=i.seconds,0!=n.esec&&-1!==n.esec&&n.esec<i.seconds&&!0!==n.nextslidecalled&&(n.loop?(c(n.vimeoplayer),n.vimeoplayer.setCurrentTime(-1!==n.ssec?n.ssec:0)):(n.nse&&(n.nseTriggered=!0,n.nextslidecalled=!0,t[a].c.revnext()),n.vimeoplayer.pause()))}),n.vimeoplayer.on("ended",function(i){n.vimeostarted=!1,w(e,a),t[a].stopByVideo=!1,t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.vimeoplayer,"vimeo",n)),n.nse&&(n.nseTriggered=!0,t[a].c.revnext()),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)}),n.vimeoplayer.on("pause",function(i){n.vimeostarted=!1,(n.scop&&e.find("rs-poster").length>0||n.bgvideo&&e.find(".rs-fullvideo-cover").length>0)&&(n.bgvideo?punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"),.1,{opacity:1,force3D:"auto",ease:punchgs.Power3.easeInOut}):punchgs.TweenLite.to(e.find("rs-poster"),.1,{opacity:1,visibility:"visible",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find("iframe"),.1,{opacity:0,ease:punchgs.Power3.easeInOut})),t[a].stopByVideo=!1,t[a].tonpause=!1,w(e,a),t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.vimeoplayer,"vimeo",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)}),e.find("rs-poster").unbind("click"),e.find("rs-poster").click(function(){if(!i)return c(n.vimeoplayer),!1}),n.videolistenerexist=!0}},g=function(){document.exitFullscreen&&document.fullscreen?document.exitFullscreen():document.mozCancelFullScreen&&document.mozFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitIsFullScreen&&document.webkitExitFullscreen()},f=function(){if(void 0!==window.fullScreen)return window.fullScreen;if(void 0!==document.fullscreen)return document.fullscreen;if(void 0!==document.mozFullScreen)return document.mozFullScreen;if(void 0!==document.webkitIsFullScreen)return document.webkitIsFullScreen;var e=jQuery.browser.webkit&&/Apple Computer/.test(navigator.vendor)?42:5;return screen.width==window.innerWidth&&Math.abs(screen.height-window.innerHeight)<e},m=function(e,a,s){var n=t[a].videos[e[0].id];if(i&&n.notonmobile)return!1;n.metaloaded=!0,n.control&&!n.audio||(0!=e.find(".tp-video-play-button").length||i||e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),e.find("video, rs-poster, .tp-video-play-button").click(function(){e.hasClass("videoisplaying")?n.video.pause():n.video.play()})),(n.fcover||e.hasClass("rs-fsv")||n.bgvideo)&&(n.fcover||n.bgvideo?(n.html5vid.addClass("fullcoveredvideo"),void 0!==n.ratio&&1!=n.ratio.split(":").length||(n.ratio="16:9"),t.prepareCoveredVideo(a,e)):n.html5vid.addClass("rs-fsv")),r(n.video,"canplaythrough",function(){t.preLoadAudioDone(e,a,"canplaythrough")}),r(n.video,"canplay",function(){t.preLoadAudioDone(e,a,"canplay")}),r(n.video,"progress",function(){t.preLoadAudioDone(e,a,"progress")}),r(n.video,"timeupdate",function(e){0!=n.esec&&-1!=n.esec&&n.esec<n.video.currentTime&&!n.nextslidecalled&&(n.loop?(n.video.play(),n.video.currentTime=-1===n.ssec?0:n.ssec):(n.nse&&(n.nseTriggered=!0,n.nextslidecalled=!0,t[a].jcnah=!0,t[a].c.revnext(),setTimeout(function(){t[a].jcnah=!1},1e3)),n.video.pause()))}),r(n.video,"play",function(){n.nextslidecalled=!1,n.volume=null!=n.volume&&"mute"!=n.volume?parseFloat(n.volcache):n.volume,n.volcache=null!=n.volcache&&"mute"!=n.volcache?parseFloat(n.volcache):n.volcache,t.is_mobile()||t.isSafari11()||(!0===t[a].globalmute?n.video.muted=!0:n.video.muted="mute"==n.volume,n.volcache=jQuery.isNumeric(n.volcache)&&n.volcache>1?n.volcache/100:n.volcache,"mute"==n.volume?n.video.muted=!0:null!=n.volcache&&(n.video.volume=n.volcache)),e.addClass("videoisplaying"),b(e,a),!0!==n.pausetimer||"audio"==n.tag?(t[a].stopByVideo=!1,t[a].c.trigger("revolution.slide.onvideostop",o(n.video,"html5",n))):(t[a].stopByVideo=!0,t[a].c.trigger("revolution.slide.onvideoplay",o(n.video,"html5",n))),n.pausetimer&&"playing"==t[a].sliderstatus&&(t[a].stopByVideo=!0,t[a].c.trigger("stoptimer")),punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:0,visibility:"hidden",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(n.tag),.3,{opacity:1,display:"block",ease:punchgs.Power3.easeInOut}),t.toggleState(n.videotoggledby)}),r(n.video,"pause",function(i){!f()&&e.find("rs-poster").length>0&&n.scop&&(punchgs.TweenLite.to(e.find("rs-poster"),.3,{opacity:1,visibility:"visible",force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(e.find(n.tag),.3,{opacity:0,ease:punchgs.Power3.easeInOut})),e.removeClass("videoisplaying"),t[a].stopByVideo=!1,w(e,a),"audio"!=n.tag&&t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.video,"html5",n)),null!=t[a].videoIsPlaying&&t[a].videoIsPlaying.attr("id")!=e.attr("id")||t.unToggleState(n.videotoggledby)}),r(n.video,"ended",function(){g(),w(e,a),t[a].stopByVideo=!1,w(e,a),"audio"!=n.tag&&t[a].c.trigger("starttimer"),t[a].c.trigger("revolution.slide.onvideostop",o(n.video,"html5",e.data())),n.nse&&n.video.currentTime>0&&(1==!t[a].jcnah&&(n.nseTriggered=!0,t[a].c.revnext(),t[a].jcnah=!0),setTimeout(function(){t[a].jcnah=!1},1500)),e.removeClass("videoisplaying")})},v=function(e){return"t"===e||!0===e||"true"===e||"f"!==e&&!1!==e&&"false"!==e&&e},y=function(e,t){e.audio="audio"===t;var i=void 0===e.video?[]:e.video.split(";"),r={volume:e.audio?1:"mute",pload:"auto",ratio:"16:9",loop:!0,aplay:"true",fcover:1===e.bgvideo,afs:!0,controls:!1,nse:!0,npom:!1,opom:!1,inline:!0,notonmobile:!1,start:-1,end:-1,doverlay:"none",scop:!1,rwd:!0,speed:1,ploadwait:5,stopAV:1!==e.bgvideo,noInt:!1,volcache:75};for(var o in i)if(i.hasOwnProperty(o)){var s=i[o].split(":");switch(s[0]){case"v":r.volume=s[1];break;case"vd":r.volcache=s[1];break;case"p":r.pload=s[1];break;case"ar":r.ratio=s[1]+(void 0!==s[2]?":"+s[2]:"");break;case"ap":r.aplay=v(s[1]);break;case"fc":r.fcover=v(s[1]);break;case"afs":r.afs=v(s[1]);break;case"vc":r.controls=s[1];break;case"nse":r.nse=v(s[1]);break;case"npom":r.npom=v(s[1]);break;case"opom":r.opom=v(s[1]);break;case"t":r.vtype=s[1];break;case"inl":r.inline=v(s[1]);break;case"nomo":r.notonmobile=v(s[1]);break;case"sta":r.start=s[1]+(void 0!==s[2]?":"+s[2]:"");break;case"end":r.end=s[1]+(void 0!==s[2]?":"+s[2]:"");break;case"do":r.doverlay=s[1];break;case"scop":r.scop=v(s[1]);break;case"rwd":r.rwd=v(s[1]);break;case"sp":r.speed=s[1];break;case"vw":r.ploadwait=parseInt(s[1],0)||5;break;case"sav":r.stopAV=v(s[1]);break;case"noint":r.noInt=v(s[1]);break;case"l":r.loopcache=s[1],r.loop="loop"===s[1]||"loopandnoslidestop"===s[1]||"none"!==s[1]&&v(s[1]);break;case"ptimer":r.pausetimer=v(s[1])}}return void 0!==e.bgvideo&&(r.bgvideo=e.bgvideo),void 0===e.bgvideo||!1!==r.fcover&&"false"!==r.fcover||(r.doverlay="none"),r.noInt&&(r.controls=!1),void 0!==e.mp4&&(r.mp4=e.mp4),void 0!==e.videomp4&&(r.mp4=e.videomp4),void 0!==e.ytid&&(r.ytid=e.ytid),void 0!==e.ogv&&(r.ogv=e.ogv),void 0!==e.webm&&(r.webm=e.webm),void 0!==e.vimeoid&&(r.vimeoid=e.vimeoid),void 0!==e.vatr&&(r.vatr=e.vatr),void 0!==e.videoattributes&&(r.vatr=e.videoattributes),void 0!==e.poster&&(r.poster=e.poster),r.aplay="true"===r.aplay||r.aplay,r.aplay=1!=e.audio&&r.aplay,1===r.bgvideo&&(r.volume="mute"),r.ssec=a(r.start),r.esec=a(r.end),r.pausetimer=void 0===r.pausetimer?"loopandnoslidestop"!==r.loopcache:r.pausetimer,r.inColumn=e._incolumn,r.audio=e.audio,!0!==r.loop&&"true"!==r.loop||!0!==r.nse&&"true"!==r.nse||(r.loop=!1),r},b=function(e,i){if(t[i].playingvideos=void 0===t[i].playingvideos?new Array:t[i].playingvideos,t[i].videos[e[0].id].stopAV&&void 0!==t[i].playingvideos&&t[i].playingvideos.length>0)for(var a in t[i].lastplayedvideos=jQuery.extend(!0,[],t[i].playingvideos),t[i].playingvideos)t[i].playingvideos.hasOwnProperty(a)&&t.stopVideo(t[i].playingvideos[a],i);t[i].playingvideos.push(e),t[i].videoIsPlaying=e},w=function(e,i){void 0!==t[i]&&void 0!==t[i]&&null!=t[i].playingvideos&&jQuery.inArray(e,t[i].playingvideos)>=0&&t[i].playingvideos.splice(jQuery.inArray(e,t[i].playingvideos),1)}}(jQuery);
;/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!function(i){if("function"==typeof define&&define.amd)define(["jquery"],i);else if("object"==typeof module&&module.exports){var t=require("jquery");i(t),module.exports=t}else i(jQuery)}(function(i){function t(i){this.init(i)}t.prototype={value:0,size:180,startAngle:-Math.PI,thickness:"auto",fill:{color:"#8e989f"},emptyFill:"rgba(50, 119, 247, 0.2)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=i("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var t=this.canvas;if(t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d"),window.devicePixelRatio>1){var e=window.devicePixelRatio;t.style.width=t.style.height=this.size+"px",t.width=t.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){function t(){var t=i("<canvas>")[0];t.width=e.size,t.height=e.size,t.getContext("2d").drawImage(g,0,0,r,r),e.arcFill=e.ctx.createPattern(t,"no-repeat"),e.drawFrame(e.lastFrameValue)}var e=this,a=this.fill,n=this.ctx,r=this.size;if(!a)throw Error("The fill is not specified!");if("string"==typeof a&&(a={color:a}),a.color&&(this.arcFill=a.color),a.gradient){var s=a.gradient;if(1==s.length)this.arcFill=s[0];else if(s.length>1){for(var l=a.gradientAngle||0,o=a.gradientDirection||[r/2*(1-Math.cos(l)),r/2*(1+Math.sin(l)),r/2*(1+Math.cos(l)),r/2*(1-Math.sin(l))],h=n.createLinearGradient.apply(n,o),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1);i.isArray(d)&&(u=d[1],d=d[0]),h.addColorStop(u,d)}this.arcFill=h}}if(a.image){var g;a.image instanceof Image?g=a.image:(g=new Image,g.src=a.image),g.complete?t():g.onload=t}},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){if(0!==i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;t.save(),t.beginPath(),this.reverse?t.arc(e,e,e-a/2,n-2*Math.PI*i,n):t.arc(e,e,e-a/2,n,n+2*Math.PI*i),t.lineWidth=a,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()}},drawEmptyArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;i<1&&(t.save(),t.beginPath(),i<=0?t.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?t.arc(e,e,e-a/2,n,n-2*Math.PI*i):t.arc(e,e,e-a/2,n+2*Math.PI*i,n),t.lineWidth=a,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var e=this,a=this.el,n=i(this.canvas);n.stop(!0,!1),a.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=e.animationStartValue*(1-i)+t*i;e.drawFrame(n),a.trigger("circle-animation-progress",[i,n])}})).promise().always(function(){a.trigger("circle-animation-end")})},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i){return i<.5?(i=2*i,.5*i*i*i):(i=2-2*i,1-.5*i*i*i)},i.fn.circleProgress=function(e,a){var n="circle-progress",r=this.data(n);if("widget"==e){if(!r)throw Error('Calling "widget" method on not initialized instance is forbidden');return r.canvas}if("value"==e){if(!r)throw Error('Calling "value" method on not initialized instance is forbidden');if("undefined"==typeof a)return r.getValue();var s=arguments[1];return this.each(function(){i(this).data(n).setValue(s)})}return this.each(function(){var a=i(this),r=a.data(n),s=i.isPlainObject(e)?e:{};if(r)r.init(s);else{var l=i.extend({},a.data());"string"==typeof l.fill&&(l.fill=JSON.parse(l.fill)),"string"==typeof l.animation&&(l.animation=JSON.parse(l.animation)),s=i.extend(l,s),s.el=a,r=new t(s),a.data(n,r)}})}});
!function(i){if("function"==typeof define&&define.amd)define(["jquery"],i);else if("object"==typeof module&&module.exports){var t=require("jquery");i(t),module.exports=t}else i(jQuery)}(function(i){function t(i){this.init(i)}t.prototype={value:0,size:180,startAngle:-Math.PI,thickness:"auto",fill:{color:"#8e989f"},emptyFill:"rgba(50, 119, 247, 0.2)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=i("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var t=this.canvas;if(t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d"),window.devicePixelRatio>1){var e=window.devicePixelRatio;t.style.width=t.style.height=this.size+"px",t.width=t.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){function t(){var t=i("<canvas>")[0];t.width=e.size,t.height=e.size,t.getContext("2d").drawImage(g,0,0,r,r),e.arcFill=e.ctx.createPattern(t,"no-repeat"),e.drawFrame(e.lastFrameValue)}var e=this,a=this.fill,n=this.ctx,r=this.size;if(!a)throw Error("The fill is not specified!");if("string"==typeof a&&(a={color:a}),a.color&&(this.arcFill=a.color),a.gradient){var s=a.gradient;if(1==s.length)this.arcFill=s[0];else if(s.length>1){for(var l=a.gradientAngle||0,o=a.gradientDirection||[r/2*(1-Math.cos(l)),r/2*(1+Math.sin(l)),r/2*(1+Math.cos(l)),r/2*(1-Math.sin(l))],h=n.createLinearGradient.apply(n,o),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1);i.isArray(d)&&(u=d[1],d=d[0]),h.addColorStop(u,d)}this.arcFill=h}}if(a.image){var g;a.image instanceof Image?g=a.image:(g=new Image,g.src=a.image),g.complete?t():g.onload=t}},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){if(0!==i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;t.save(),t.beginPath(),this.reverse?t.arc(e,e,e-a/2,n-2*Math.PI*i,n):t.arc(e,e,e-a/2,n,n+2*Math.PI*i),t.lineWidth=a,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()}},drawEmptyArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;i<1&&(t.save(),t.beginPath(),i<=0?t.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?t.arc(e,e,e-a/2,n,n-2*Math.PI*i):t.arc(e,e,e-a/2,n+2*Math.PI*i,n),t.lineWidth=a,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var e=this,a=this.el,n=i(this.canvas);n.stop(!0,!1),a.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=e.animationStartValue*(1-i)+t*i;e.drawFrame(n),a.trigger("circle-animation-progress",[i,n])}})).promise().always(function(){a.trigger("circle-animation-end")})},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i){return i<.5?(i=2*i,.5*i*i*i):(i=2-2*i,1-.5*i*i*i)},i.fn.circleProgress=function(e,a){var n="circle-progress",r=this.data(n);if("widget"==e){if(!r)throw Error('Calling "widget" method on not initialized instance is forbidden');return r.canvas}if("value"==e){if(!r)throw Error('Calling "value" method on not initialized instance is forbidden');if("undefined"==typeof a)return r.getValue();var s=arguments[1];return this.each(function(){i(this).data(n).setValue(s)})}return this.each(function(){var a=i(this),r=a.data(n),s=i.isPlainObject(e)?e:{};if(r)r.init(s);else{var l=i.extend({},a.data());"string"==typeof l.fill&&(l.fill=JSON.parse(l.fill)),"string"==typeof l.animation&&(l.animation=JSON.parse(l.animation)),s=i.extend(l,s),s.el=a,r=new t(s),a.data(n,r)}})}});
;/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});
;/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),s.isBoxSizeOuter=r,i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,I=d&&r,x=t(s.width);x!==!1&&(a.width=x+(I?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(I?0:y+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+z),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;o.indexOf("%")!=-1&&(s=s/100*a.width),n.indexOf("%")!=-1&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),n&&!this.isTransitioning)return void this.layoutPosition();var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t);
}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});
;/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */
//# sourceMappingURL=swiper.min.js.map

;/*!
 * # Range slider for Semantic UI.
 * 
 */
 
;(function ( $, window, document, undefined ) {

    "use strict";
    
    $.fn.range = function(parameters) {

        

        
    
        var
            $allModules    = $(this),
            
            offset         = 10,
            
            query          = arguments[0],
        methodInvoked  = (typeof query == 'string'),
        queryArguments = [].slice.call(arguments, 1)
        ;
        
      $allModules
        .each(function() {
                
                var
                    settings          = ( $.isPlainObject(parameters) )
                        ? $.extend(true, {}, $.fn.range.settings, parameters)
                        : $.extend({}, $.fn.range.settings),
    
                    namespace       = settings.namespace,
                    min             = settings.min,
                    max             = settings.max,
                    step            = settings.step,
                    start           = settings.start,
                    input           = settings.input,
    
                    eventNamespace  = '.' + namespace,
                    moduleNamespace = 'module-' + namespace,
    
                    $module         = $(this),
    
                    element         = this,
                    instance        = $module.data(moduleNamespace),
                    
                    inner,
                    thumb,
                    trackLeft,
                    precision,
                    
                    module
                ;
                
                module = {
                    
                    initialize: function() {
                        module.instantiate();
                        module.sanitize();
                    },
                    
                    instantiate: function() {
                        instance = module;
                        $module
                            .data(moduleNamespace, module)
                        ;
                        $(element).html("<div class='inner'><div class='track'></div><div class='track-fill'></div><div class='thumb'></div></div>");
                        inner = $(element).children('.inner')[0];
                        thumb = $(element).find('.thumb')[0];
                        trackLeft = $(element).find('.track-fill')[0];
                        // find precision of step, used in calculating the value
                        module.determinePrecision();
                        // set start location
                        module.setValuePosition(settings.start);
                        // event listeners
                        $(element).find('.track, .thumb, .inner').on('mousedown', function(event) {
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            $(this).closest(".range").trigger('mousedown', event);
                        });
                        $(element).find('.track, .thumb, .inner').on('touchstart', function(event) {
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            $(this).closest(".range").trigger('touchstart', event);
                        });
                        $(element).on('mousedown', function(event, originalEvent) {
                            module.rangeMousedown(event, false, originalEvent);
                        });
                        $(element).on('touchstart', function(event, originalEvent) {
                            module.rangeMousedown(event, true, originalEvent);
                        });
                    },
    
                    sanitize: function() {
                        if (typeof settings.min != 'number') {
                            settings.min = parseInt(settings.min) || 0;
                        }
                        if (typeof settings.max != 'number') {
                            settings.max = parseInt(settings.max) || false;
                        }
                        if (typeof settings.start != 'number') {
                            settings.start = parseInt(settings.start) || 0;
                        }
                    },
    
                    determinePrecision: function() {
                        var split = String(settings.step).split('.');
                        var decimalPlaces;
                        if(split.length == 2) {
                            decimalPlaces = split[1].length;
                        } else {
                            decimalPlaces = 0;
                        }
                        precision = Math.pow(10, decimalPlaces);
                    },
                    
                    determineValue: function(startPos, endPos, currentPos) {
                        var ratio = (currentPos - startPos) / (endPos - startPos);
                        var range = settings.max - settings.min;
                        var difference = Math.round(ratio * range / step) * step;
                        // Use precision to avoid ugly Javascript floating point rounding issues
                        // (like 35 * .01 = 0.35000000000000003)
                        difference = Math.round(difference * precision) / precision;
                        return difference + settings.min;
                    },
    
                    determinePosition: function(value) {
                        var ratio = (value - settings.min) / (settings.max - settings.min);
                        return Math.round(ratio * $(inner).width()) + $(trackLeft).position().left - offset;
                    },
    
                    setValue: function(newValue, triggeredByUser) {
                        if(typeof triggeredByUser === 'undefined') {
                            triggeredByUser = true;
                        }
                        if(settings.input) {
                            $(settings.input).val(newValue);
                        }
                        if(settings.onChange) {
                            settings.onChange(newValue, {triggeredByUser: triggeredByUser});
                        }
                    },
    
                    setPosition: function(value) {
                        $(thumb).css({left: String(value) + 'px'});
                        $(trackLeft).css({width: String(value + offset) + 'px'});
                    },
    
                    rangeMousedown: function(mdEvent, isTouch, originalEvent) {
                        if( !$(element).hasClass('disabled') ) {
                            mdEvent.preventDefault();
                            var left = $(inner).offset().left;
                            var right = left + $(inner).width();
                            var pageX;
                            if(isTouch) {
                                pageX = originalEvent.originalEvent.touches[0].pageX;
                            } else {
                                pageX = (typeof mdEvent.pageX != 'undefined') ? mdEvent.pageX : originalEvent.pageX;
                            }
                            var value = module.determineValue(left, right, pageX);
                            if(pageX >= left && pageX <= right) {
                                module.setPosition(pageX - left - offset);
                                module.setValue(value);
                            }
                            var rangeMousemove = function(mmEvent) {
                                mmEvent.preventDefault();
                                if(isTouch) {
                                    pageX = mmEvent.originalEvent.touches[0].pageX;
                                } else {
                                    pageX = mmEvent.pageX;
                                }
                                value = module.determineValue(left, right, pageX);
                                if(pageX >= left && pageX <= right) {
                                    if(value >= settings.min && value <= settings.max) {
                                        module.setPosition(pageX - left - offset);
                                        module.setValue(value);
                                    }
                                }
                            }
                            var rangeMouseup = function(muEvent) {
                                if(isTouch) {
                                    $(document).off('touchmove', rangeMousemove);
                                    $(document).off('touchend', rangeMouseup);
                                } else {
                                    $(document).off('mousemove', rangeMousemove);
                                    $(document).off('mouseup', rangeMouseup);
                                }
                            }
                            if(isTouch) {
                                $(document).on('touchmove', rangeMousemove);
                                $(document).on('touchend', rangeMouseup);
                            }
                            else {
                                $(document).on('mousemove', rangeMousemove);
                                $(document).on('mouseup', rangeMouseup);
                            }
                        }
                    },
                    
                    setValuePosition: function(val, triggeredByUser) {
                        if(typeof triggeredByUser === 'undefined') {
                            triggeredByUser = true;
                        }
                        var position = module.determinePosition(val);
                        module.setPosition(position);
                        module.setValue(val, triggeredByUser);
                    },
                    
                    invoke: function(query) {
                        switch(query) {
                            case 'set value':
                                if(queryArguments.length > 0) {
                                    instance.setValuePosition(queryArguments[0], false);
                                }
                                break;
                        }
                    },
                
                };
                
          if(methodInvoked) {
            if(instance === undefined) {
              module.initialize();
            }
            module.invoke(query);
          }
          else {
            module.initialize();
          }
                
        })
      ;
      
      return this;
    
    };
    
    $.fn.range.settings = {
    
      name         : 'Range',
      namespace    : 'range',
    
        min          : 0,
        max          : false,
        step         : 1,
        start        : 0,
        input        : false,
        
        onChange     : function(value){},
    
    };
    
    
    })( jQuery, window, document );
    
;