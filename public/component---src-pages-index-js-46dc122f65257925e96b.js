(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function l(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var o,c,u,s;if(Array.isArray(e)){if((o=e.length)!=i.length)return!1;for(c=o;0!=c--;)if(!l(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!l(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((o=e.length)!=i.length)return!1;for(c=o;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((o=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=o;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=o;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!l(e[u[c]],i[u[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return l(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},866:function(e,t,n){"use strict";var r,a=n(294),l=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return l.createElement(r,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",o),m}}},418:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ce}});var r,a,l,i,o=n(294),c=n(697),u=n.n(c),s=n(866),m=n.n(s),d=n(993),f=n.n(d),E=n(494),p=n.n(E),h="bodyAttributes",b="htmlAttributes",v="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(y).map((function(e){return y[e]})),"charset"),C="cssText",T="href",w="http-equiv",A="innerHTML",S="itemprop",k="name",O="property",N="rel",M="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",L="defer",j="encodeSpecialCharacters",B="onChangeClientState",R="titleTemplate",H=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),F=[y.NOSCRIPT,y.SCRIPT,y.STYLE],D="data-react-helmet",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Z(e,y.TITLE),n=Z(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,x);return t||r||void 0},G=function(e){return Z(e,B)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var l=r[a].toLowerCase();if(-1!==e.indexOf(l)&&n[l])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,l=Object.keys(e),i=0;i<l.length;i++){var o=l[i],c=o.toLowerCase();-1===t.indexOf(c)||n===N&&"canonical"===e[n].toLowerCase()||c===N&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(o)||o!==A&&o!==C&&o!==S||(n=o)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var l=Object.keys(a),i=0;i<l.length;i++){var o=l[i],c=p()({},r[o],a[o]);r[o]=c}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,le=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,o=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,m=e.title,d=e.titleAttributes;ce(y.BODY,r),ce(y.HTML,a),oe(m,d);var f={baseTag:ue(y.BASE,n),linkTags:ue(y.LINK,l),metaTags:ue(y.META,i),noscriptTags:ue(y.NOSCRIPT,o),scriptTags:ue(y.SCRIPT,u),styleTags:ue(y.STYLE,s)},E={},p={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(p[e]=f[e].oldTags)})),t&&t(),c(e,E,p)},ie=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(y.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),a=r?r.split(","):[],l=[].concat(a),i=Object.keys(t),o=0;o<i.length;o++){var c=i[o],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var s=l.indexOf(c);-1!==s&&l.splice(s,1)}for(var m=l.length-1;m>=0;m--)n.removeAttribute(l[m]);a.length===l.length?n.removeAttribute(D):n.getAttribute(D)!==i.join(",")&&n.setAttribute(D,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),l=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];n.setAttribute(r,o)}n.setAttribute(D,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):l.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:l}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,a=me(n,r),[o.createElement(y.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),l=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(l,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(l,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case b:return{toComponent:function(){return me(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===A||n===C){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===C)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),l=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+l+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,o=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,m=void 0===s?"":s,d=e.titleAttributes;return{base:de(y.BASE,t,r),bodyAttributes:de(h,n,r),htmlAttributes:de(b,a,r),link:de(y.LINK,l,r),meta:de(y.META,i,r),noscript:de(y.NOSCRIPT,o,r),script:de(y.SCRIPT,c,r),style:de(y.STYLE,u,r),title:de(y.TITLE,{title:m,titleAttributes:d},r)}},Ee=m()((function(e){return{baseTag:J([T,P],e),bodyAttributes:V(h,e),defer:Z(e,L),encode:Z(e,j),htmlAttributes:V(b,e),linkTags:$(y.LINK,[N,T],e),metaTags:$(y.META,[k,g,w,O,S],e),noscriptTags:$(y.NOSCRIPT,[A],e),onChangeClientState:G(e),scriptTags:$(y.SCRIPT,[M,A],e),styleTags:$(y.STYLE,[C],e),title:K(e),titleAttributes:V(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){le(e,(function(){ae=null}))})):(le(e),ae=null)}),fe)((function(){return null})),pe=(a=Ee,i=l=function(e){function t(){return Q(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,l=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,l))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,l=e.newChildProps,i=e.nestedChildren;switch(r.type){case y.TITLE:return U({},a,((t={})[r.type]=i,t.titleAttributes=U({},l),t));case y.BODY:return U({},a,{bodyAttributes:U({},l)});case y.HTML:return U({},a,{htmlAttributes:U({},l)})}return U({},a,((n={})[r.type]=U({},l),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,l=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(W(a,["children"]));switch(n.warnOnInvalidChildren(e,l),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:l})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.createElement(a,r)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(o.Component),l.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},l.defaultProps={defer:!0,encodeSpecialCharacters:!0},l.peek=a.peek,l.rewind=function(){var e=a.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);pe.renderStatic=pe.rewind;var he=n(444);function be(){return o.createElement(he.rU,{to:"#img1",id:"ToTopButton","aria-label":"To top button"},o.createElement("i",{className:"fas fa-arrow-up"}))}function ve(e){var t=e.children;return o.createElement("div",{className:"MasterLayout"},o.createElement(be,null),o.createElement(pe,{htmlAttributes:{lang:"en"}},o.createElement("title",null,"Quick & Cheap Hair Cuts Perth | Hairdressing | Quick Cut"),o.createElement("meta",{charset:"utf-8"}),o.createElement("meta",{property:"title",content:"Quick & Cheap Hair Cuts Perth | Hairdressing | Quick Cut"}),o.createElement("meta",{name:"description",content:"Quick & Cheap Hair Cuts in Perth. No booking hair-dressing services."}),o.createElement("meta",{name:"author",content:"James Nicholas Noonan"}),o.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),o.createElement("meta",{property:"url",content:"https://nelgara.com.au"}),o.createElement("meta",{property:"type",content:"website"}),o.createElement("meta",{property:"site_name",content:"Quick & Cheap Hair Cuts Perth | Hairdressing | Quick Cut"}),o.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.0/css/all.css",integrity:"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",crossorigin:"anonymous"})),t)}function ye(){return o.createElement("div",{id:"BA_Carousel"},o.createElement("div",{className:"carouselContaioner"},o.createElement("div",{className:"carouselInfo"}),o.createElement("div",{className:"carouselMessage"}),o.createElement("img",{src:"./img/Before.png",alt:"Before image"})))}function ge(){return o.createElement("div",{className:"Fullpage"},o.createElement("div",{className:"PeelParrallax img1",id:"img1"},o.createElement("div",{id:"PeelParrallaxNav"},o.createElement("div",{id:"IconContainer"},o.createElement("div",{id:"Nav"},o.createElement(he.rU,{to:"#img2"},o.createElement("p",null,"Times")),o.createElement(he.rU,{to:"#img3"},o.createElement("p",null,"Details")),o.createElement(he.rU,{to:"#img4"},o.createElement("p",null,"Maps")),o.createElement(he.rU,{to:"#img6"},o.createElement("p",null,"Before/After")),o.createElement(he.rU,{to:"#FooterText"},o.createElement("p",null,"FAQ")))),o.createElement("div",{id:"SocialIcons"},o.createElement("div",null,"Whitfords:",o.createElement("div",null,o.createElement(he.rU,{to:"https://www.facebook.com/quickcutWA"},o.createElement("div",{className:"SocialIconImage Facebook"})),o.createElement(he.rU,{to:"https://g.page/qyickcutw?share"},o.createElement("div",{className:"SocialIconImage GMB"})))),o.createElement("div",null,"Dianella:",o.createElement("div",null,o.createElement(he.rU,{to:"https://www.instagram.com/quickcuts_dianella/"},o.createElement("div",{className:"SocialIconImage Insta"})),o.createElement(he.rU,{to:"https://www.facebook.com/quickcutd"},o.createElement("div",{className:"SocialIconImage Facebook"})),o.createElement(he.rU,{to:"https://g.page/quickcutd?share"},o.createElement("div",{className:"SocialIconImage GMB"}))))),o.createElement("button",{id:"MobileNavButton",className:"hamburger hamburger--elastic","aria-label":"Mobile Menu Drop down button",onClick:function(e){var t=document.getElementById("MobileNavButton"),n=document.getElementById("Nav");"none"===n.style.display||""===n.style.display?(n.style.display="grid",n.style.animation="SlideIn .6s ease",t.classList.add("is-active")):(t.classList.remove("is-active"),n.animate([{height:"0px"}],{duration:300}),setTimeout((function(){n.style.display="none"}),300))}},o.createElement("span",{className:"hamburger-box"},o.createElement("span",{className:"hamburger-inner"}))),o.createElement("a",{href:"tel:040324347",id:"Phone"},"✆")),o.createElement("div",{className:"Spacer"}),o.createElement("div",{id:"ConentContainer"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h1",{id:"MainConentTitle"},"Quick & Cheap"),o.createElement("h2",{id:"MainConentTitle"},"Professional Haircuts Perth"),o.createElement("hr",null),o.createElement("br",null),o.createElement("p",null,"We specialise in a quick professional hair cutting service, from $10 ~ 10 Min*"),o.createElement("br",null))))),o.createElement("div",{className:"PeelParrallax img2",id:"img2"},o.createElement("div",{id:"ConentContainerRight"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleRight"},"Whitfords Opening Times"),o.createElement("hr",{id:"hrRight"}),o.createElement("br",null),o.createElement("div",null,o.createElement("ul",{className:"TimeContainer"},o.createElement("li",null,"Monday: 9am to 5pm"),o.createElement("li",null,"Tuesday: 9am to 5pm"),o.createElement("li",null,"Wednesday: 9am to 5pm"),o.createElement("li",null,"Thursday: 9am to 5:30pm"),o.createElement("li",null,"Friday: 9am to 5pm"),o.createElement("li",null,"Saturday: 9am to 5pm"),o.createElement("li",null,"Sunday: 11am to 5pm")),o.createElement("br",null))))),o.createElement("div",{id:"ConentContainerLeft"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleLeft"},"Dianella Opening Times"),o.createElement("hr",{id:"hrLeft"}),o.createElement("br",null),o.createElement("div",null,o.createElement("ul",{className:"TimeContainer"},o.createElement("li",null,"Monday: 9am to 5pm"),o.createElement("li",null,"Tuesday: 9am to 5pm"),o.createElement("li",null,"Wednesday: 9am to 5pm"),o.createElement("li",null,"Thursday: 9am to 5:30pm"),o.createElement("li",null,"Friday: 9am to 5pm"),o.createElement("li",null,"Saturday: 9am to 5pm"),o.createElement("li",null,"Sunday: 11am to 5pm")),o.createElement("br",null))))),o.createElement("div",{className:"Spacer"})),o.createElement("div",{className:"PeelParrallax img3",id:"img3"},o.createElement("div",{id:"ConentContainerRight"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleRight"},"Whitfords Details"),o.createElement("hr",{id:"hrRight"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",null,o.createElement("u",null,"Phone:"),o.createElement("br",null),o.createElement("br",null),"0403 243 478",o.createElement("br",null),o.createElement("br",null),o.createElement("u",null,"Address:"),o.createElement("br",null),o.createElement("br",null),"Shop 9,470 Westfield Whitfords, Whitfords Avenue Hillarys 6025",o.createElement("br",null),o.createElement("br",null),o.createElement("u",null,"Manager:"),o.createElement("br",null),o.createElement("br",null),"Email:jngo@jgup.com.au"),o.createElement("br",null))))),o.createElement("div",{id:"ConentContainerLeft"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleLeft"},"Dianella Details"),o.createElement("hr",{id:"hrLeft"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",null,o.createElement("u",null,"Phone:"),o.createElement("br",null),o.createElement("br",null),"0403 243 478",o.createElement("br",null),o.createElement("br",null),o.createElement("u",null,"Address:"),o.createElement("br",null),o.createElement("br",null),"Shop 40, Dianella Plaza, 366 Grand Promenade Dianella 6059",o.createElement("br",null),o.createElement("br",null),o.createElement("u",null,"Manager:"),o.createElement("br",null),o.createElement("br",null),"Email: jngo@jgup.com.au"),o.createElement("br",null))))),o.createElement("div",{className:"Spacer"})),o.createElement("div",{className:"PeelParrallax img4",id:"img4"},o.createElement("div",{id:"ConentContainerRight"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleRight"},"Whitfords On Maps"),o.createElement("hr",{id:"hrRight"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",{className:"iframeContainer"},o.createElement("iframe",{title:"Whitfords Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.030448945579!2d115.74898611515749!3d-31.796920081279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ab649bed9a45%3A0xaf8e27dfbcb3ab1c!2sQuickCut%20Whitfords!5e0!3m2!1sen!2sau!4v1626785614418!5m2!1sen!2sau",width:"600",height:"450",allowFullScreen:"",loading:"lazy"})),o.createElement("br",null))))),o.createElement("div",{id:"ConentContainerLeft"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleLeft"},"Dianella On Maps"),o.createElement("hr",{id:"hrLeft"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",{className:"iframeContainer",id:"ContentContainerLeftContent"},o.createElement("iframe",{title:"Dianella Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.416902906192!2d115.87057521515985!3d-31.895268181247328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa0d0e5a0c265bd6!2sQuickCut%20Dianella!5e0!3m2!1sen!2sau!4v1626785581824!5m2!1sen!2sau",width:"600",height:"450",allowFullScreen:"",loading:"lazy"})),o.createElement("br",null))))),o.createElement("div",{className:"Spacer"})),o.createElement("div",{className:"PeelParrallax img6",id:"img6"},o.createElement("div",{className:"Spacer"}),o.createElement("div",{id:"ConentContainer"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h3",{id:"MainConentTitle"},"Before and After Shot"),o.createElement("h2",{id:"MainConentTitle"},"Professional Haircuts Perth"),o.createElement("hr",null),o.createElement("br",null),o.createElement("p",null))))),o.createElement("div",{className:"PeelParrallax img5"},o.createElement("div",{id:"ConentContainerRight"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h3",{id:"MainConentTitleRight"},"Hair Cut After"),o.createElement("hr",{id:"hrRight"}),o.createElement("br",null),o.createElement("div",null,o.createElement(ye,null),o.createElement("div",{className:"Before"}),o.createElement("br",null)),o.createElement("br",null)))),o.createElement("div",{id:"ConentContainerLeft"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h3",{id:"MainConentTitleLeft"},"Hair Cut Before"),o.createElement("hr",{id:"hrLeft"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",{className:"After"}),o.createElement("br",null)),o.createElement("br",null)))),o.createElement("div",{className:"Spacer"}),o.createElement("div",{id:"ConentContainerRight"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h3",{id:"MainConentTitleRight"},"Hair Cut After"),o.createElement("hr",{id:"hrRight"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",{className:"Before"}),o.createElement("br",null)),o.createElement("br",null)))),o.createElement("div",{id:"ConentContainerLeft"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h3",{id:"MainConentTitleLeft"},"Hair Cut Before"),o.createElement("hr",{id:"hrLeft"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",{className:"After"}),o.createElement("br",null)),o.createElement("br",null)))),o.createElement("div",{className:"Spacer"}),o.createElement("div",{id:"ConentContainerRight"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h3",{id:"MainConentTitleRight"},"Hair Cut After"),o.createElement("hr",{id:"hrRight"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",{className:"Before"}),o.createElement("br",null)),o.createElement("br",null)))),o.createElement("div",{id:"ConentContainerLeft"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h3",{id:"MainConentTitleLeft"},"Hair Cut Before"),o.createElement("hr",{id:"hrLeft"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",{className:"After"}),o.createElement("br",null)),o.createElement("br",null)))),o.createElement("div",{className:"Spacer"}),o.createElement("div",{className:"Spacer"}),o.createElement("div",{id:"Footer"},o.createElement("hr",{id:"FooterRibben"}),o.createElement("div",{id:"FooterContent"},o.createElement("div",{id:"FooterText"},"Thanks for visiting Quick Cuts!",o.createElement("br",null),o.createElement("br",null),"Please save us in your bookmarks!",o.createElement("br",null),o.createElement("br",null),o.createElement("br",null),o.createElement("h3",{className:"FAQTitle"},o.createElement("u",null,"Frequently Asked Questions:")),o.createElement("br",null),o.createElement("br",null),o.createElement("ul",{id:"FooterFaq"},o.createElement("li",null,"Does Quick Cuts currently offer any products?"),o.createElement("li",null,"    -    No Quick Cuts does not sell any products."),o.createElement("li",null,"Does Quick Cuts currently offer any bookings?"),o.createElement("li",null,"    -    No Quick Cuts does not offer any bookings."),o.createElement("li",null,"Is Quick Cuts a walk in only business?"),o.createElement("li",null,"    -    Yes Quick Cuts is a walk in business.")),o.createElement("br",null),o.createElement("br",null),o.createElement(he.rU,{to:"#img1",className:"FAQTitle"},"Back To Top")))),o.createElement("div",{className:"Spacer"})))}function Ce(){return o.createElement(ve,null,o.createElement(ge,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-46dc122f65257925e96b.js.map