(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,l){if(e===l)return!0;if(e&&l&&"object"==typeof e&&"object"==typeof l){if(e.constructor!==l.constructor)return!1;var o,c,u,s;if(Array.isArray(e)){if((o=e.length)!=l.length)return!1;for(c=o;0!=c--;)if(!i(e[c],l[c]))return!1;return!0}if(n&&e instanceof Map&&l instanceof Map){if(e.size!==l.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!l.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!i(c.value[1],l.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&l instanceof Set){if(e.size!==l.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!l.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(l)){if((o=e.length)!=l.length)return!1;for(c=o;0!=c--;)if(e[c]!==l[c])return!1;return!0}if(e.constructor===RegExp)return e.source===l.source&&e.flags===l.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===l.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===l.toString();if((o=(u=Object.keys(e)).length)!==Object.keys(l).length)return!1;for(c=o;0!=c--;)if(!Object.prototype.hasOwnProperty.call(l,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=o;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!i(e[u[c]],l[u[c]]))return!1;return!0}return e!=e&&l!=l}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},866:function(e,t,n){"use strict";var r,a=n(294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var l=a.prototype;return l.UNSAFE_componentWillMount=function(){u.push(this),s()},l.componentDidUpdate=function(){s()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},l.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return l(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(m,"canUseDOM",o),m}}},418:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ce}});var r,a,i,l,o=n(294),c=n(697),u=n.n(c),s=n(866),m=n.n(s),d=n(993),f=n.n(d),p=n(494),h=n.n(p),E="bodyAttributes",b="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(v).map((function(e){return v[e]})),"charset"),C="cssText",T="href",w="http-equiv",A="innerHTML",S="itemprop",k="name",O="property",I="rel",N="src",L="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",x="defer",j="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",B=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),F=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="data-react-helmet",Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Z(e,v.TITLE),n=Z(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,P);return t||r||void 0},G=function(e){return Z(e,_)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),l=0;l<i.length;l++){var o=i[l],c=o.toLowerCase();-1===t.indexOf(c)||n===I&&"canonical"===e[n].toLowerCase()||c===I&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(o)||o!==A&&o!==C&&o!==S||(n=o)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),l=0;l<i.length;l++){var o=i[l],c=h()({},r[o],a[o]);r[o]=c}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,l=e.metaTags,o=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,m=e.title,d=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,a),oe(m,d);var f={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,l),noscriptTags:ue(v.NOSCRIPT,o),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},p={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),c(e,p,h)},le=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),a=r?r.split(","):[],i=[].concat(a),l=Object.keys(t),o=0;o<l.length;o++){var c=l[o],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var s=i.indexOf(c);-1!==s&&i.splice(s,1)}for(var m=i.length-1;m>=0;m--)n.removeAttribute(i[m]);a.length===i.length?n.removeAttribute(D):n.getAttribute(D)!==l.join(",")&&n.setAttribute(D,l.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],l=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];n.setAttribute(r,o)}n.setAttribute(D,"true"),a.some((function(e,t){return l=t,n.isEqualNode(e)}))?a.splice(l,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,a=me(n,r),[o.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),i=le(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case E:case b:return{toComponent:function(){return me(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===A||n===C){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===C)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",l=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(l?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,l=e.metaTags,o=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,m=void 0===s?"":s,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(E,n,r),htmlAttributes:de(b,a,r),link:de(v.LINK,i,r),meta:de(v.META,l,r),noscript:de(v.NOSCRIPT,o,r),script:de(v.SCRIPT,c,r),style:de(v.STYLE,u,r),title:de(v.TITLE,{title:m,titleAttributes:d},r)}},pe=m()((function(e){return{baseTag:J([T,L],e),bodyAttributes:V(E,e),defer:Z(e,x),encode:Z(e,j),htmlAttributes:V(b,e),linkTags:$(v.LINK,[I,T],e),metaTags:$(v.META,[k,g,w,O,S],e),noscriptTags:$(v.NOSCRIPT,[A],e),onChangeClientState:G(e),scriptTags:$(v.SCRIPT,[N,A],e),styleTags:$(v.STYLE,[C],e),title:K(e),titleAttributes:V(y,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),fe)((function(){return null})),he=(a=pe,l=i=function(e){function t(){return H(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(r.type){case v.TITLE:return q({},a,((t={})[r.type]=l,t.titleAttributes=q({},i),t));case v.BODY:return q({},a,{bodyAttributes:q({},i)});case v.HTML:return q({},a,{htmlAttributes:q({},i)})}return q({},a,((n={})[r.type]=q({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(U(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.createElement(a,r)},W(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(o.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},l);he.renderStatic=he.rewind;var Ee=n(444);function be(){return o.createElement(Ee.rU,{to:"#img1",id:"ToTopButton","aria-label":"To top button"},o.createElement("i",{className:"fas fa-arrow-up"}))}function ye(e){var t=e.children;return o.createElement("div",{className:"MasterLayout"},o.createElement(be,null),o.createElement(he,{htmlAttributes:{lang:"en"}},o.createElement("title",null,"Quick & Cheap Hair Cuts Perth | Hairdressing | Quick Cut"),o.createElement("meta",{charset:"utf-8"}),o.createElement("meta",{property:"title",content:"Quick & Cheap Hair Cuts Perth | Hairdressing | Quick Cut"}),o.createElement("meta",{name:"description",content:"Quick & Cheap Hair Cuts in Perth. No booking hair-dressing services."}),o.createElement("meta",{name:"author",content:"James Nicholas Noonan"}),o.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),o.createElement("meta",{property:"url",content:"https://nelgara.com.au"}),o.createElement("meta",{property:"type",content:"website"}),o.createElement("meta",{property:"site_name",content:"Quick & Cheap Hair Cuts Perth | Hairdressing | Quick Cut"}),o.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.0/css/all.css",integrity:"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",crossorigin:"anonymous"})),t)}function ve(){var e=["/img/QuickCuts_FirstShoot-Whitfords_FullRes_5.jpg","/img/QuickCuts_FirstShoot-Whitfords_FullRes_20.jpg","/img/QuickCuts_FirstShoot-Whitfords_FullRes_32.jpg","/img/QuickCuts_FirstShoot-Whitfords_FullRes_39.jpg","/img/QuickCuts_FirstShoot-Whitfords_FullRes_40.jpg"],t=1,n=e.length,r=e[0];function a(){t=t+1>n?1:t+1,console.log("Index:"+t),c(t);var e=document.getElementById("BA_Content");e.classList.add("animated"),e.classList.add("fadeOutLeft"),l(e,"Right")}function i(){c(t=t-1<=0?n:t-1);var e=document.getElementById("BA_Content");e.classList.add("animated"),e.classList.add("fadeOutRight"),l(e,"Left")}function l(n,r){setTimeout((function(){var a;n.classList.remove("animated"),n.classList.remove("fadeOutLeft"),n.classList.remove("fadeOutRight"),n.classList.add("animated"),n.classList.add("fadeIn"+r),a=t-1,document.getElementById("CarouselContentImage").style.backgroundImage="url("+e[a]+")",setTimeout((function(){n.classList.remove("animated"),n.classList.remove("fadeInLeft"),n.classList.remove("fadeInRight")}),1e3)}),700)}function c(e){document.getElementById("Carousel_Info_Box").innerHTML=e+"/"+n}return o.createElement("div",{id:"BA_Carousel"},o.createElement("div",{id:"Carousel_Controls"},o.createElement("div",{id:"Carousel_Control_Left","aria-label":"Left Chevron Container",className:"Control_Button",role:"button",tabIndex:"-20",onClick:i,onKeyDown:i},o.createElement("i",{className:"fas fa-chevron-left","aria-label":"Left Chevron Button"})),o.createElement("div",{id:"Carousel_Control_Right",className:"Control_Button","aria-label":"Right Chevron Container",role:"button",tabIndex:"-21",onClick:a,onKeyDown:a},o.createElement("i",{className:"fas fa-chevron-left"})),o.createElement("div",{className:"Carousel_Info"},o.createElement("span",{id:"Carousel_Info_Box"},t,"/5"))),o.createElement("div",{id:"BA_Content"},o.createElement("div",{id:"ConentContainerMiddle",className:"BeforeAfter DontRotate"},o.createElement("div",{id:"IntroContentBox",className:"DontRotate CenterMargin"},o.createElement("div",{id:"MainContent"},o.createElement("h3",{id:"MainConentTitleRight"},"Model"),o.createElement("hr",{id:"hrRight"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",{id:"CarouselContentImage",style:{backgroundImage:"url("+r+")"}}),o.createElement("br",null)),o.createElement("br",null))))))}function ge(){return o.createElement("div",{className:"Fullpage"},o.createElement("div",{className:"PeelParrallax img1",id:"img1"},o.createElement("div",{id:"PeelParrallaxNav"},o.createElement("div",{id:"IconContainer"},o.createElement("div",{id:"Nav"},o.createElement(Ee.rU,{to:"#img2"},o.createElement("p",null,"Times")),o.createElement(Ee.rU,{to:"#img3"},o.createElement("p",null,"Details")),o.createElement(Ee.rU,{to:"#img4"},o.createElement("p",null,"Maps")),o.createElement(Ee.rU,{to:"#img6"},o.createElement("p",null,"Gallery")),o.createElement(Ee.rU,{to:"#FooterText"},o.createElement("p",null,"FAQ")))),o.createElement("div",{id:"SocialIcons"},o.createElement("div",null,"Whitfords:",o.createElement("div",null,o.createElement(Ee.rU,{to:"https://www.facebook.com/quickcutWA"},o.createElement("div",{className:"SocialIconImage Facebook"})),o.createElement(Ee.rU,{to:"https://g.page/qyickcutw?share"},o.createElement("div",{className:"SocialIconImage GMB"})))),o.createElement("div",null,"Dianella:",o.createElement("div",null,o.createElement(Ee.rU,{to:"https://www.instagram.com/quickcuts_dianella/"},o.createElement("div",{className:"SocialIconImage Insta"})),o.createElement(Ee.rU,{to:"https://www.facebook.com/quickcutd"},o.createElement("div",{className:"SocialIconImage Facebook"})),o.createElement(Ee.rU,{to:"https://g.page/quickcutd?share"},o.createElement("div",{className:"SocialIconImage GMB"}))))),o.createElement("button",{id:"MobileNavButton",className:"hamburger hamburger--elastic","aria-label":"Mobile Menu Drop down button",onClick:function(e){var t=document.getElementById("MobileNavButton"),n=document.getElementById("Nav");"none"===n.style.display||""===n.style.display?(n.style.display="grid",n.style.animation="SlideIn .6s ease",t.classList.add("is-active")):(t.classList.remove("is-active"),n.animate([{height:"0px"}],{duration:300}),setTimeout((function(){n.style.display="none"}),300))}},o.createElement("span",{className:"hamburger-box"},o.createElement("span",{className:"hamburger-inner"}))),o.createElement("a",{href:"tel:0403243478",id:"Phone"},"✆")),o.createElement("div",{className:"Spacer"}),o.createElement("div",{id:"ConentContainer"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h1",{id:"MainConentTitle"},"Quick & Cheap"),o.createElement("h2",{id:"MainConentTitle"},"Professional Haircuts Perth"),o.createElement("hr",null),o.createElement("br",null),o.createElement("p",null,"We specialise in a quick professional hair cutting service, from $10 ~ 10 Min*"),o.createElement("br",null))))),o.createElement("div",{className:"PeelParrallax img2",id:"img2"},o.createElement("div",{id:"ConentContainerRight"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleRight"},"Whitfords Opening Times"),o.createElement("hr",{id:"hrRight"}),o.createElement("br",null),o.createElement("div",null,o.createElement("ul",{className:"TimeContainer"},o.createElement("li",null,"Monday: 9am to 5pm"),o.createElement("li",null,"Tuesday: 9am to 5pm"),o.createElement("li",null,"Wednesday: 9am to 5pm"),o.createElement("li",null,"Thursday: 9am to 5:30pm"),o.createElement("li",null,"Friday: 9am to 5pm"),o.createElement("li",null,"Saturday: 9am to 5pm"),o.createElement("li",null,"Sunday: Closed")),o.createElement("br",null))))),o.createElement("div",{id:"ConentContainerLeft"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleLeft"},"Dianella Opening Times"),o.createElement("hr",{id:"hrLeft"}),o.createElement("br",null),o.createElement("div",null,o.createElement("ul",{className:"TimeContainer"},o.createElement("li",null,"Monday: 9am to 5:30pm"),o.createElement("li",null,"Tuesday: 9am to 5:30pm"),o.createElement("li",null,"Wednesday: 9am to 5:30pm"),o.createElement("li",null,"Thursday: 9am to 5:30pm"),o.createElement("li",null,"Friday: 9am to 5:30pm"),o.createElement("li",null,"Saturday: 9am to 5pm"),o.createElement("li",null,"Sunday: 11am to 5pm")),o.createElement("br",null)))))),o.createElement("div",{className:"PeelParrallax img3",id:"img3"},o.createElement("div",{id:"ConentContainerRight"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleRight"},"Whitfords Details"),o.createElement("hr",{id:"hrRight"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",null,"Phone:",o.createElement("br",null),o.createElement("br",null),"0403 243 478",o.createElement("br",null),o.createElement("br",null),"Address:",o.createElement("br",null),o.createElement("br",null),"Shop 9,470 Westfield Whitfords, Whitfords Avenue Hillarys 6025",o.createElement("br",null),o.createElement("br",null),"Manager:",o.createElement("br",null),o.createElement("br",null),"Email:jngo@jgup.com.au"),o.createElement("br",null))))),o.createElement("div",{id:"ConentContainerLeft"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleLeft"},"Dianella Details"),o.createElement("hr",{id:"hrLeft"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",null,"Phone:",o.createElement("br",null),o.createElement("br",null),"0403 243 478",o.createElement("br",null),o.createElement("br",null),"Address:",o.createElement("br",null),o.createElement("br",null),"Shop 40, Dianella Plaza, 366 Grand Promenade Dianella 6059",o.createElement("br",null),o.createElement("br",null),"Manager:",o.createElement("br",null),o.createElement("br",null),"Email: jngo@jgup.com.au"),o.createElement("br",null)))))),o.createElement("div",{className:"PeelParrallax img4",id:"img4"},o.createElement("div",{id:"ConentContainerRight"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleRight"},"Whitfords On Maps"),o.createElement("hr",{id:"hrRight"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",{className:"iframeContainer"},o.createElement("iframe",{title:"Whitfords Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.030448945579!2d115.74898611515749!3d-31.796920081279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ab649bed9a45%3A0xaf8e27dfbcb3ab1c!2sQuickCut%20Whitfords!5e0!3m2!1sen!2sau!4v1626785614418!5m2!1sen!2sau",width:"600",height:"450",allowFullScreen:"",loading:"lazy"})),o.createElement("br",null))))),o.createElement("div",{id:"ConentContainerLeft"},o.createElement("div",{id:"IntroContentBox"},o.createElement("div",{id:"MainContent"},o.createElement("h2",{id:"MainConentTitleLeft"},"Dianella On Maps"),o.createElement("hr",{id:"hrLeft"}),o.createElement("br",null),o.createElement("div",null,o.createElement("div",{className:"iframeContainer",id:"ContentContainerLeftContent"},o.createElement("iframe",{title:"Dianella Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.416902906192!2d115.87057521515985!3d-31.895268181247328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa0d0e5a0c265bd6!2sQuickCut%20Dianella!5e0!3m2!1sen!2sau!4v1626785581824!5m2!1sen!2sau",width:"600",height:"450",allowFullScreen:"",loading:"lazy"})),o.createElement("br",null)))))),o.createElement("div",{className:"PeelParrallax img6",id:"img6"},o.createElement("div",{className:"carouselHeader Gallery"},o.createElement("div",{id:"IntroContentBox",className:"DontRotate"},o.createElement("div",{id:"MainContent"},o.createElement("h3",{id:"MainConentTitle",style:"padding-bottom: 30px;"},"Gallery"),o.createElement("br",null)))),o.createElement(ve,null)),o.createElement("div",{className:"PeelParrallax img5"},o.createElement("div",{id:"Footer"},o.createElement("hr",{id:"FooterRibben"}),o.createElement("div",{id:"FooterContent"},o.createElement("div",{id:"FooterText"},o.createElement("h3",{className:"FAQTitle"},"Frequently Asked Questions:"),o.createElement("br",null),o.createElement("br",null),o.createElement("ul",{id:"FooterFaq"},o.createElement("li",null,"Does Quick Cuts currently offer any products?"),o.createElement("li",{className:"answer"},"    -    No Quick Cuts does not sell any products."),o.createElement("li",null,"Does Quick Cuts currently offer any bookings?"),o.createElement("li",{className:"answer"},"    -    No Quick Cuts does not offer any bookings."),o.createElement("li",null,"Is Quick Cuts a walk in only business?"),o.createElement("li",{className:"answer"},"    -    Yes Quick Cuts is a walk in business.")),o.createElement("br",null),o.createElement("br",null),"Thanks for visiting Quick Cuts!",o.createElement("br",null),o.createElement("br",null),"Please save us in your bookmarks!",o.createElement("br",null),o.createElement("br",null),o.createElement("br",null),o.createElement(Ee.rU,{to:"#img1",className:"FAQTitle"},"Back To Top"))))))}function Ce(){return o.createElement(ye,null,o.createElement(ge,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-83e456d7cd7d346b9dfd.js.map