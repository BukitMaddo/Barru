(self.AMP=self.AMP||[]).push({n:"amp-social-share",v:"2009190410002",f:(function(AMP,_){
'use strict';var h="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function m(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}m(this);"function"===typeof Symbol&&Symbol("x");var n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=n,u;function v(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var w=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function x(a){var b=Object.create(null);if(!a)return b;for(var c;c=w.exec(a);){var d=v(c[1],c[1]),e=c[2]?v(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var y=self.AMP_CONFIG||{},z=("string"==typeof y.cdnProxyRegex?new RegExp(y.cdnProxyRegex):y.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function A(a){if(self.document&&self.document.head&&(!self.location||!z.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}y.cdnUrl||A("runtime-host");y.geoApiUrl||A("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var B=self.__AMP_LOG;function C(){if(!B.user)throw Error("failed to call initLogConstructor");return B.user}function D(){if(B.dev)return B.dev;throw Error("failed to call initLogConstructor");}function E(a,b,c){return C().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function F(a,b){if(!b)return a;var c=a.split("#",2),d=c[0].split("?",2),e=d[0]+(d[1]?"?"+d[1]+"&"+b:"?"+b);return e+=c[1]?"#"+c[1]:""}function G(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var g=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(g))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")};function H(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){D().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function I(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;if(d.__AMP__EXPERIMENT_TOGGLES)var g=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);g=d.__AMP__EXPERIMENT_TOGGLES;if(d.AMP_CONFIG)for(var k in d.AMP_CONFIG){var f=d.AMP_CONFIG[k];"number"===typeof f&&0<=f&&1>=f&&(g[k]=Math.random()<f)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(k=d.AMP_CONFIG["allow-doc-opt-in"],
f=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){f=f.getAttribute("content").split(",");for(var l=0;l<f.length;l++)-1!=k.indexOf(f[l])&&(g[f[l]]=!0)}Object.assign(g,H(d));if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length)for(k=d.AMP_CONFIG["allow-url-opt-in"],d=x(d.location.originalHash||d.location.hash),f=0;f<k.length;f++)l=d["e-"+k[f]],"1"==l&&(g[k[f]]=!0),"0"==l&&(g[k[f]]=!1)}var U=!!g["ampdoc-fie"];e&&!U?b=J(c,b)?
K(c,b):null:(a=L(a),a=L(a),a=a.isSingleDoc()?a.win:a,b=J(a,b)?K(a,b):null);return b}function M(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return K(a,b)}function L(a){return a.nodeType?M((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function K(a,b){J(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function J(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function N(a){function b(a){return a}var c=a.dataset;a={};var d=/^param(.+)/,e;for(e in c){var g=e.match(d);if(g){var k=g[1][0].toLowerCase()+g[1].substr(1);a[b(k)]=c[e]}}return a}function O(a,b,c){try{var d=a.open(b,c,"resizable,scrollbars,width=640,height=480")}catch(g){D().error("DOM","Failed to open url on target: ",c,g)}if(!(c=d||"_top"==c)){var e;"number"!==typeof e&&(e=0);c=41<e+8?!1:-1!=="resizable,scrollbars,width=640,height=480".indexOf("noopener",e)}c||a.open(b,"_top")};var P;
P={twitter:{shareEndpoint:"https://twitter.com/intent/tweet",defaultParams:{text:"TITLE",url:"CANONICAL_URL"}},facebook:{shareEndpoint:"https://www.facebook.com/dialog/share",defaultParams:{href:"CANONICAL_URL"}},pinterest:{shareEndpoint:"https://www.pinterest.com/pin/create/button/",defaultParams:{url:"CANONICAL_URL",description:"TITLE"}},linkedin:{shareEndpoint:"https://www.linkedin.com/shareArticle",defaultParams:{url:"CANONICAL_URL",mini:"true"}},gplus:{obsolete:!0},email:{bindings:["recipient"],shareEndpoint:"mailto:RECIPIENT",
defaultParams:{subject:"TITLE",body:"CANONICAL_URL",recipient:""}},tumblr:{shareEndpoint:"https://www.tumblr.com/share/link",defaultParams:{name:"TITLE",url:"CANONICAL_URL"}},whatsapp:{shareEndpoint:"https://api.whatsapp.com/send",defaultParams:{text:"TITLE - CANONICAL_URL"}},line:{shareEndpoint:"https://social-plugins.line.me/lineit/share",defaultParams:{text:"TITLE",url:"CANONICAL_URL"}},sms:{shareEndpoint:"sms:",defaultParams:{body:"TITLE - CANONICAL_URL"}},system:{shareEndpoint:"navigator-share:",
defaultParams:{text:"TITLE",url:"CANONICAL_URL"}}};function Q(a){var b=!1;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function R(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.l={};a.o=null;a.c=null;a.m=null;a.j=null;return a}var S=AMP.BaseElement;R.prototype=h(S.prototype);R.prototype.constructor=R;if(t)t(R,S);else for(var T in S)if("prototype"!=T)if(Object.defineProperties){var V=Object.getOwnPropertyDescriptor(S,T);V&&Object.defineProperty(R,T,V)}else R[T]=S[T];R.A=S.prototype;R.prototype.isLayoutSupported=function(){return!0};R.prototype.prerenderAllowed=function(){return!0};
R.prototype.buildCallback=function(){var a=this,b=this.element,c=E(b.getAttribute("type"),"The type attribute is required. %s",b);E(!/\s/.test(c),"Space characters are not allowed in type attribute value. %s",b);this.o=M(this.win,"platform");var d="share"in this.win.navigator;if("system"===c){if(!d){Q(b);return}}else if(d&&this.win.document.querySelectorAll("amp-social-share[type=system][data-mode=replace]").length){Q(b);return}var e=P[c]||{};e.obsolete?(Q(b),C().warn("amp-social-share","Skipping obsolete share button "+
c)):(this.h=E(b.getAttribute("data-share-endpoint")||e.shareEndpoint,"The data-share-endpoint attribute is required. %s",b),Object.assign(this.l,e.defaultParams,N(b)),this.j=e.bindings,b.setAttribute("role","button"),b.hasAttribute("tabindex")||b.setAttribute("tabindex","0"),b.addEventListener("click",function(){W(a)}),b.addEventListener("keydown",this.w.bind(this)),b.classList.add("amp-social-share-"+c))};
R.prototype.layoutCallback=function(){var a=this;if(!this.h){u||(u=Promise.resolve(void 0));var b=u;return b}var c=F(this.h,G(this.l)),d=I(this.element,"url-replace"),e={};this.j&&this.j.forEach(function(b){var c=b.toUpperCase();e[c]=a.l[b]});return d.expandUrlAsync(c,e).then(function(b){a.c=b;var c=I(a.element,"url").parse(b).protocol,d="mailto:"===c,e="sms:"===c;a.m=a.o.isIos()&&(d||e)?"_top":a.element.hasAttribute("data-target")?a.element.getAttribute("data-target"):"_blank";e&&(a.c=a.c.replace("?",
"?&"))})};R.prototype.w=function(a){var b=a.key;if(" "==b||"Enter"==b)a.preventDefault(),W(this)};function W(a){E(a.c&&a.m,"Clicked before href is set.");var b=a.c,c=a.m;if("navigator-share:"===a.h){a=a.win.navigator;var d=b.substr(b.indexOf("?"));b=x(d);a.share(b).catch(function(a){C().warn("amp-social-share",a.message,d)})}else O(a.win,b,c)}(function(a){a.registerElement("amp-social-share",R,".amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-gplus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3l64.1 49.1-64.1 64.1V194.1zm.2 150.1l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 00325 122.47a102.38 102.38 0 01-29.46 8.07 51.47 51.47 0 0022.55-28.37 102.79 102.79 0 01-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0192.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0185 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 01-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 01-63.7 22 104.41 104.41 0 01-12.21-.74 145.21 145.21 0 0078.62 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 01-3.66 3.67h-52.69a3.6 3.6 0 01-2.53-1l-.06-.05v-.05a3.65 3.65 0 01-1-2.53v-81.96a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66v65.07h35.84a3.66 3.66 0 013.66 3.66zm31.8 0a3.65 3.65 0 01-3.66 3.65h-13.2a3.65 3.65 0 01-3.66-3.65v-81.92a3.66 3.66 0 013.66-3.66H217a3.66 3.66 0 013.66 3.66zm90.78 0a3.65 3.65 0 01-3.66 3.65h-13.19a3.67 3.67 0 01-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 01-.93-.9L254 229.56v48.66a3.66 3.66 0 01-3.67 3.65H237.1a3.65 3.65 0 01-3.66-3.65v-81.93a3.66 3.66 0 013.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 01.21.08l.12.06.19.11a.41.41 0 01.11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 01.22.22 3.58 3.58 0 01.28.37L290.89 245v-48.71a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66zm72.83-68.74a3.66 3.66 0 01-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 013.65 3.67v13.19a3.65 3.65 0 01-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 013.65 3.66v13.19a3.66 3.66 0 01-3.65 3.67h-52.7a3.66 3.66 0 01-2.53-1l-.05-.05a.12.12 0 01-.05-.05 3.65 3.65 0 01-1-2.53V196.3a3.6 3.6 0 011-2.52l.06-.07a3.63 3.63 0 012.54-1h52.7a3.66 3.66 0 013.65 3.67z' fill='%23fff' data-name='\u30ec\u30a4\u30e4\u30fc 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#32529f}.amp-social-share-pinterest{background-color:#e60023}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}\n/*# sourceURL=/extensions/amp-social-share/0.1/amp-social-share.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-social-share-0.1.js.map
