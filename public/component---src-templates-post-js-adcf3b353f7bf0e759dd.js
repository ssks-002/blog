/*! For license information please see component---src-templates-post-js-adcf3b353f7bf0e759dd.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_ghost=self.webpackChunkgatsby_starter_ghost||[]).push([[851],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},532:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return B}});var n=r(7294),o=r(8093),a=r.n(o),i=r(3964),c=r.n(i),l=r(5414),s=r(9800),u=r(9897);var p=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}))}));var d,f=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}))})),h=(d=function(e,t){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},d(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),m=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return h(t,e),t}(Error);function w(e,t){if(!e)throw new m(t)}function y(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(r)))}));return t.length>0?"?".concat(t.join("&")):""}var v=r(5900),g=r.n(v),b=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),E=function(){return E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},E.apply(this,arguments)},_=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(t){a(t)}}function c(e){try{l(n.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}l((n=n.apply(e,t||[])).next())}))},O=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},k=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},N=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},S=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},x=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function j(e,t,r){var n=t.height,o=t.width,a=k(t,["height","width"]),i=E({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return"".concat(e,"=").concat(i[e])})).join(", "));if(r)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),r(c))}catch(e){console.error(e)}}),1e3);return c}var C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,i=r.windowPosition,c=void 0===i?"windowCenter":i,l=r.windowWidth,s=void 0===l?550:l;j(e,E({height:a,width:s},"windowCenter"===c?S(s,a):x(s,a)),n)},t.handleClick=function(e){return _(t,void 0,void 0,(function(){var t,r,n,o,a,i,c,l,s,u;return O(this,(function(p){switch(p.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=o(i,l),n?[2]:(e.preventDefault(),r?(u=r(),N(u)?[4,u]:[3,2]):[3,2]);case 1:p.sent(),p.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return b(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,o=e.disabled,a=e.disabledStyle,i=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,k(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=g()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},r),d=E(E(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),o&&a);return n.createElement("button",E({},u,{"aria-label":u["aria-label"]||c,className:p,onClick:this.handleClick,ref:i,style:d}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(n.Component),P=C,A=function(){return A=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},A.apply(this,arguments)};var R=function(e,t,r,o){function a(a,i){var c=r(a),l=A({},a);return Object.keys(c).forEach((function(e){delete l[e]})),n.createElement(P,A({},o,l,{forwardedRef:i,networkName:e,networkLink:t,opts:r(a)}))}return a.displayName="ShareButton-".concat(e),(0,n.forwardRef)(a)};var H=R("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,c=void 0===i?[]:i;return w(e,"twitter.url"),w(Array.isArray(a),"twitter.hashtags is not an array"),w(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+y({url:e,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),L=function(){return L=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},L.apply(this,arguments)},D=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function q(e){var t=function(t){var r=t.bgStyle,o=t.borderRadius,a=t.iconFillColor,i=t.round,c=t.size,l=D(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return n.createElement("svg",L({viewBox:"0 0 64 64",width:c,height:c},l),i?n.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):n.createElement("rect",{width:"64",height:"64",rx:o,ry:o,fill:e.color,style:r}),n.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var M=q({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var z=R("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return w(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+y({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),W=q({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"}),I=r(5143),B=function(e){var t=e.data,r=e.location,o=e.pageContext,i=o.prev,d=o.next,h=t.ghostPost,m=h.primary_author.twitter.substring(1),w=h.tags,y=t.relatepost.edges,v="/post/"+i.slug,g="/post/"+d.slug,b=h.childHtmlRehype.tableOfContents,E={root:null,rootMargin:"-10% 0px -80% 0px",threshold:.15};return(0,n.useEffect)((function(){var e=Array.from(document.querySelectorAll(".content-body > h1")),t=Array.from(document.querySelectorAll(".content-body > h2")),r=Array.from(document.querySelectorAll(".content-body > h3")),n=e.concat(t,r),o=new IntersectionObserver((function(e){e.forEach((function(e){if(e.isIntersecting){var t=document.querySelector(".toc-item.active");t&&t.classList.remove("active");var r=document.querySelector('a[href="#'+e.target.id+'"]');r&&r.classList.add("active")}}))}),E);n.forEach((function(e){o.observe(e)}))}),[]),n.createElement(n.Fragment,null,n.createElement(u.U,{data:t,location:r,type:"article"}),n.createElement(l.q,null,n.createElement("style",{type:"text/css"},""+h.codeinjection_styles)),n.createElement(s.Ar,{location:"post",toc:b,prev:i,prevurl:v,next:d,nexturl:g},n.createElement("main",{className:"site-main"},n.createElement("figure",{className:"post-feature-image"},h.feature_image&&n.createElement("img",{src:h.feature_image,alt:h.feature_image_alt?h.feature_image_alt:h.title})),n.createElement("div",{className:"container"},n.createElement("h1",{className:"post-title"},h.title," "),n.createElement("div",{className:"post-date-container"},n.createElement("figure",{className:"post-date-box",id:"published_at"},n.createElement(p,{className:"post-date-icon",id:"calender-icon"}),n.createElement("time",{className:"post-date"},c()(h.published_at).format("YYYY年MM月DD日"))),h.published_at!==h.updated_at&&n.createElement("figure",{className:"post-date-box",id:"updated_at"},n.createElement(f,{className:"post-date-icon",id:"refresh-icon"}),n.createElement("time",{className:"post-date"},c()(h.updated_at).format("YYYY年MM月DD日")))),n.createElement(a(),{query:"(min-width: 800px)"},n.createElement("div",{className:"Layout"},n.createElement("article",{className:"content"},n.createElement("figcaption",{className:"post-feature-image-caption"},h.feature_image_caption),n.createElement("div",{className:"post-tag-list"},n.createElement(s.hS,{tag:h.primary_tag}),w&&w.map((function(e,t){return 0!==t&&n.createElement(s.Aj,{tag:e})}))),n.createElement("section",{className:"post-full-content"},n.createElement("section",{className:"content-body load-external-scripts",dangerouslySetInnerHTML:{__html:h.html}})),n.createElement("section",{className:"share"},n.createElement("div",{className:"social-links__icon"},n.createElement(H,{url:I.siteUrl+"/post/"+h.slug+"/",title:h.title,via:m},n.createElement(M,{borderRadius:5,size:50}))),n.createElement("div",{className:"social-links__icon"},n.createElement(z,{url:I.siteUrl+"/post/"+h.slug+"/"},n.createElement(W,{borderRadius:5,size:50})))),n.createElement("div",{className:"post-author"},n.createElement(s.cP,{author:h.primary_author})),n.createElement("div",{className:"relate-posts"},n.createElement("h1",{className:"relate-posts-headline"},"関連記事"),y.length?n.createElement("section",null,y.map((function(e){var t=e.node;return n.createElement(s.SD,{id:t.id,post:t})}))):n.createElement("section",null,n.createElement("p",null,"ありませんでした 😢")))),n.createElement("div",{className:"sidebar"},n.createElement("div",{className:"sidebar-container"},n.createElement("div",{className:"sidebar-box"},n.createElement(s.o5,{toc:b,prev:i,prevurl:v,next:d,nexturl:g})))))),n.createElement(a(),{query:"(max-width: 800px)"},n.createElement("article",{className:"content"},n.createElement("figcaption",{className:"post-feature-image-caption"},h.feature_image_caption),n.createElement("div",{className:"post-tag-list"},n.createElement(s.hS,{tag:h.primary_tag}),w&&w.map((function(e,t){return 0!==t&&n.createElement(s.Aj,{tag:e})}))),n.createElement("section",{className:"post-full-content"},n.createElement("section",{className:"content-body load-external-scripts",dangerouslySetInnerHTML:{__html:h.html}})),n.createElement("section",{className:"share"},n.createElement("div",{className:"social-links__icon"},n.createElement(H,{url:I.siteUrl+"/post/"+h.slug+"/",title:h.title,via:m},n.createElement(M,{borderRadius:5,size:50}))),n.createElement("div",{className:"social-links__icon"},n.createElement(z,{url:I.siteUrl+"/post/"+h.slug+"/"},n.createElement(W,{borderRadius:5,size:50})))),n.createElement("div",{className:"post-author"},n.createElement(s.cP,{author:h.primary_author})),n.createElement("div",{className:"relate-posts"},n.createElement("h1",{className:"relate-posts-headline"},"関連記事"),y.length?n.createElement("section",null,y.map((function(e){var t=e.node;return n.createElement(s.SD,{id:t.id,post:t})}))):n.createElement("section",null,n.createElement("p",null,"ありませんでした 😢")))))))))}}}]);
//# sourceMappingURL=component---src-templates-post-js-adcf3b353f7bf0e759dd.js.map