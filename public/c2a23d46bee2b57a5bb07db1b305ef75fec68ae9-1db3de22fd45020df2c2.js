(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[170],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!o(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!o(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!o(e[l[s]],i[l[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),m.canUseDOM?t(s):n&&(s=n(s))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",c),m}}},3766:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.imgSource,n=e.title,a=e.contentText;return r.createElement("div",{className:"MainContentClass isLeft animated fadeInLeft faster wow"},r.createElement("div",{className:"MainContentBoxClass doLeft"},r.createElement("h3",{className:"ContentTitleClass"},r.createElement("b",null,n)),r.createElement("hr",{style:{borderColor:"#eeeeee"}}),r.createElement("br",null),r.createElement("p",{className:"MainContentText",dangerouslySetInnerHTML:{__html:a}})),r.createElement("img",{className:"ContentImage doRight",src:t}))}},3741:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.imgSource,n=e.title,a=e.contentText;return r.createElement("div",{className:"MainContentClass animated fadeInRight faster wow"},r.createElement("img",{className:"ContentImage",src:t}),r.createElement("div",{className:"MainContentBoxClass"},r.createElement("h3",{className:"ContentTitleClass"},r.createElement("b",null,n)),r.createElement("hr",{style:{borderColor:"#eeeeee"}}),r.createElement("br",null),r.createElement("p",{className:"MainContentText",dangerouslySetInnerHTML:{__html:a}})))}},8900:function(e,t,n){"use strict";n.d(t,{Z:function(){return we}});var r=n(7294),a=n(5444);function o(){var e=!1;return r.createElement("span",{id:"Hamburger",className:"fa fa-bars",onClick:function(){var t=document.getElementById("Nav");e?function(t){t.classList.add("animated"),t.classList.add("fadeOutUp"),setTimeout((function(){t.style.display="none"}),500),e=!1}(t):function(t){t.classList.remove("animated"),t.classList.remove("fadeOutUp"),t.style.display="block",t.style.zIndex=1e3,t.classList.add("animated"),t.classList.add("fadeInDown"),e=!0}(t)}})}function i(){var e=!1;function t(e){var t=document.getElementById("Header"),n=document.getElementById("Title"),r=document.getElementById("Title_Text"),a=document.getElementById("LightSwitch"),o=document.getElementById("Nav_Container"),i=document.getElementById("Hamburger"),c=document.getElementById("Nav"),s=document.getElementById("Services"),l=document.getElementById("Industries"),u=document.getElementById("About"),m=document.getElementById("People");e?(t.className="HeaderDark",n.className="TitleDark",r.className="Title_TextDark",a.className="LightSwitcDark",o.className="Nav_ContainerDark",i.className="HamburgerDark fa fa-bars",c.className="NavDark",s.className="ServicesDark",l.className="IndustriesDark",u.className="AboutDark",m.className="PeopleDark",e=!1):(t.className="",n.className="",r.className="",a.className="",o.className="",i.className="fa fa-bars",c.className="",s.className="",l.className="",u.className="",m.className="",e=!0)}return r.createElement("div",{id:"Header"},r.createElement(a.rU,{to:"/",id:"top"}),r.createElement(a.rU,{to:"/"},r.createElement("img",{src:"../../img/logo.png",id:"Logo",alt:"logo.png"})),r.createElement("span",{onClick:function(){e?(document.body.style.background="#fffdfa",document.body.style.color="black",console.log("Going light!"),t(!1),e=!1):(document.body.style.backgroundColor="#111111",document.body.style.color="white",console.log("Going dark!"),null!=document.getElementById("Footer")&&(document.getElementById("Footer").style.backgroundColor="black",document.getElementById("Footer").style.color="white !important"),t(!0),e=!0)},id:"LightSwitch",className:""},r.createElement("span",{className:"fas fa-lightbulb"})),r.createElement("h2",{id:"Title",className:""},r.createElement(a.rU,{to:"/",id:"Title_Text",className:""}," Nelgara Pty Ltd ")),r.createElement("div",{id:"Nav_Container",className:""},r.createElement(o,null)),r.createElement("ul",{id:"Nav"},r.createElement(a.rU,{to:"/services",id:"Services"},r.createElement("li",{className:"animate fadeInLeft wow","data-wow-delay":"0.25s"},r.createElement("b",null,r.createElement("p",null,"Services")))),r.createElement(a.rU,{to:"/industries",id:"Industries"},r.createElement("li",{className:"animate fadeInLeft wow","data-wow-delay":"0.50s"},r.createElement("b",null,r.createElement("p",null,"Industries")))),r.createElement(a.rU,{to:"/contactus",id:"About"},r.createElement("li",{className:"animate fadeInLeft wow","data-wow-delay":"0.75s"},r.createElement("b",null,r.createElement("p",null,"Contact Us")))),r.createElement(a.rU,{to:"/people",id:"People"},r.createElement("li",{className:"animate fadeInLeft wow","data-wow-delay":"1s"},r.createElement("b",null,r.createElement("p",null,"People"))))))}function c(){return r.createElement("div",{id:"Footer"},r.createElement("div",{className:"column"},r.createElement("div",{className:"row"},r.createElement(a.rU,{to:"/index"},r.createElement("img",{src:"img/logo.png",className:"FooterImage"}))),r.createElement("div",{className:"row"}),r.createElement("div",{className:"row"})),r.createElement("div",{className:"column"},r.createElement("div",{className:"row"},r.createElement("h2",null,r.createElement(a.rU,{to:"/index",style:{textDecoration:"none"}}," Nelgara Pty Ltd "))),r.createElement("div",{className:"row"},r.createElement("h6",{className:"copyrightText"},"Copyright &#169 Nelgara Pty Ltd 2021 ")),r.createElement("div",{className:"row"},r.createElement(a.rU,{to:"/index",id:"terms"},"Terms and Conditions"))),r.createElement("div",{className:"column"},r.createElement("div",{className:"row"}),r.createElement("div",{className:"row"},r.createElement(a.rU,{to:"/index"},"TEL: +61 (0)434 33 161")),r.createElement("div",{className:"row"})))}function s(e){var t=e.title;return r.createElement("div",{id:"videoContainer"},r.createElement("script",{src:"https://fast.wistia.com/embed/medias/24fkx58xfu.jsonp?wvideo=hashedid",async:!0}),r.createElement("script",{src:"https://fast.wistia.com/assets/external/E-v1.js",async:!0}),r.createElement("h1",{id:"BannerId"},r.createElement("b",null,t)),r.createElement("div",{className:"wistia_responsive_padding",style:{padding:"56.25% 0 0 0",position:"relative"}},r.createElement("div",{className:"wistia_responsive_wrapper",style:{height:"100%",left:0,position:"absolute",top:0,width:"100%"}},r.createElement("div",{className:"wistia_embed wistia_async_24fkx58xfu videoFoam=true",style:{height:"100%",position:"relative",width:"100%"}},r.createElement("div",{className:"wistia_swatch",style:{height:"100%",left:0,opacity:0,overflow:"hidden",position:"absolute",top:0,transition:"opacity 200ms",width:"100%"}},r.createElement("img",{src:"https://fast.wistia.com/embed/medias/24fkx58xfu/swatch",style:{filter:"blur(5px)",height:"100%",objectFit:"contain",width:"100%"},alt:"banner.png","aria-hidden":"true",onLoad:function(e){e.target.parentNode.style.opacity=1}}))))))}var l,u,m,d,f=n(5697),p=n.n(f),y=n(4839),h=n.n(y),g=n(2993),b=n.n(g),v=n(6494),E=n.n(v),w="bodyAttributes",T="htmlAttributes",C="titleAttributes",N={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},A=(Object.keys(N).map((function(e){return N[e]})),"charset"),S="cssText",O="href",k="http-equiv",I="innerHTML",L="itemprop",x="name",P="property",j="rel",_="src",M="target",B={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",H="defer",R="encodeSpecialCharacters",U="onChangeClientState",F="titleTemplate",q=Object.keys(B).reduce((function(e,t){return e[B[t]]=t,e}),{}),z=[N.NOSCRIPT,N.SCRIPT,N.STYLE],Y="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=re(e,N.TITLE),n=re(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=re(e,D);return t||r||void 0},X=function(e){return re(e,U)||function(){}},ee=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},te=function(e,t){return t.filter((function(e){return void 0!==e[N.BASE]})).map((function(e){return e[N.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},ne=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&se("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===j&&"canonical"===e[n].toLowerCase()||s===j&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==I&&c!==S&&c!==L||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=E()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},re=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ae=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){ae(e)}),0)}),oe=function(e){return clearTimeout(e)},ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ae:n.g.requestAnimationFrame||ae,ce="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||oe:n.g.cancelAnimationFrame||oe,se=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},le=null,ue=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,m=e.title,d=e.titleAttributes;fe(N.BODY,r),fe(N.HTML,a),de(m,d);var f={baseTag:pe(N.BASE,n),linkTags:pe(N.LINK,o),metaTags:pe(N.META,i),noscriptTags:pe(N.NOSCRIPT,c),scriptTags:pe(N.SCRIPT,l),styleTags:pe(N.STYLE,u)},p={},y={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(y[e]=f[e].oldTags)})),t&&t(),s(e,p,y)},me=function(e){return Array.isArray(e)?e.join(""):e},de=function(e,t){void 0!==e&&document.title!==e&&(document.title=me(e)),fe(N.TITLE,t)},fe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Y),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var m=o.length-1;m>=0;m--)n.removeAttribute(o[m]);a.length===o.length?n.removeAttribute(Y):n.getAttribute(Y)!==i.join(",")&&n.setAttribute(Y,i.join(","))}},pe=function(e,t){var n=document.head||document.querySelector(N.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===I)n.innerHTML=t.innerHTML;else if(r===S)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Y,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ye=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)},ge=function(e,t,n){switch(e){case N.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[Y]=!0,o=he(n,a),[r.createElement(N.TITLE,o,e)];var e,n,a,o},toString:function(){return function(e,t,n,r){var a=ye(n),o=me(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Q(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case w:case T:return{toComponent:function(){return he(t)},toString:function(){return ye(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,o=((a={key:n})[Y]=!0,a);return Object.keys(t).forEach((function(e){var n=B[e]||e;if(n===I||n===S){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),r.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===I||e===S)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Q(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},be=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,m=void 0===u?"":u,d=e.titleAttributes;return{base:ge(N.BASE,t,r),bodyAttributes:ge(w,n,r),htmlAttributes:ge(T,a,r),link:ge(N.LINK,o,r),meta:ge(N.META,i,r),noscript:ge(N.NOSCRIPT,c,r),script:ge(N.SCRIPT,s,r),style:ge(N.STYLE,l,r),title:ge(N.TITLE,{title:m,titleAttributes:d},r)}},ve=h()((function(e){return{baseTag:te([O,M],e),bodyAttributes:ee(w,e),defer:re(e,H),encode:re(e,R),htmlAttributes:ee(T,e),linkTags:ne(N.LINK,[j,O],e),metaTags:ne(N.META,[x,A,k,P,L],e),noscriptTags:ne(N.NOSCRIPT,[I],e),onChangeClientState:X(e),scriptTags:ne(N.SCRIPT,[_,I],e),styleTags:ne(N.STYLE,[S],e),title:$(e),titleAttributes:ee(C,e)}}),(function(e){le&&ce(le),e.defer?le=ie((function(){ue(e,(function(){le=null}))})):(ue(e),le=null)}),be)((function(){return null})),Ee=(u=ve,d=m=function(e){function t(){return G(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!b()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case N.SCRIPT:case N.NOSCRIPT:return{innerHTML:t};case N.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Z({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case N.TITLE:return Z({},a,((t={})[r.type]=i,t.titleAttributes=Z({},o),t));case N.BODY:return Z({},a,{bodyAttributes:Z({},o)});case N.HTML:return Z({},a,{htmlAttributes:Z({},o)})}return Z({},a,((n={})[r.type]=Z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Z({},t);return Object.keys(e).forEach((function(t){var r;n=Z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(W(r,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case N.LINK:case N.META:case N.NOSCRIPT:case N.SCRIPT:case N.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),a=Z({},n);return t&&(a=this.mapChildrenToProps(t,a)),r.createElement(u,a)},J(t,null,[{key:"canUseDOM",set:function(e){u.canUseDOM=e}}]),t}(r.Component),m.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=u.peek,m.rewind=function(){var e=u.rewind();return e||(e=be({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},d);Ee.renderStatic=Ee.rewind;function we(e){var t=e.children,n=e.title;return r.createElement("div",{className:"MasterLayout"},r.createElement(Ee,null,r.createElement("meta",{charset:"utf-8"}),r.createElement("meta",{name:"google-site-verification",content:"txgKmeRnG--tbzmjs6dsxKpFw-x3RCL2t_jCDioBfDo"}),r.createElement("meta",{name:"google-site-verification",content:"xkHDb2_zgTzNpDumgrN7J39GOzcAilbnu3ZnP9G_Q8A"}),r.createElement("meta",{property:"title",content:n+" | Nelgara Pty Ltd"}),r.createElement("meta",{name:"description",content:"Nelgara Pty Ltd is an Australian commercial management consulting firm\r that leverages its significant industry experience to develop and apply\r best practice solutions."}),r.createElement("meta",{name:"keywords",content:"HTML, CSS, XML, JavaScript, Php, Nelgara, Nick, Noonan, Commercial, Construction, Services, Peter, Hooks, Katherine, James, Australian, Australia, Perth, Kallaroo, nelgara, australia, contruction services perth"}),r.createElement("meta",{name:"author",content:"James Nicholas Noonan"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.createElement("meta",{property:"url",content:"https://nelgara.com.au"}),r.createElement("meta",{property:"type",content:"website"}),r.createElement("meta",{property:"site_name",content:"Commercial Project Management Solutions | Nelgara Pty Ltd"}),r.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.0/css/all.css",integrity:"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",crossorigin:"anonymous"})),r.createElement(i,null),r.createElement(s,{title:n}),r.createElement("div",{className:"mainContent"},t),r.createElement(c,null))}}}]);
//# sourceMappingURL=c2a23d46bee2b57a5bb07db1b305ef75fec68ae9-1db3de22fd45020df2c2.js.map