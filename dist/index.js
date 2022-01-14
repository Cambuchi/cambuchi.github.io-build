(()=>{"use strict";var n={559:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"#buttons {\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: center;\n  justify-content: space-evenly;\n  width: 900px;\n  \n}\n\n#buttons a {\n  text-decoration: none;\n  font-size: 24px;\n  font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen,Ubuntu,Cantarell,open sans,helvetica neue,sans-serif;\n  font-weight: 700;\n  line-height: 60px;\n  padding: 0px;\n  margin: 0px;\n}\n\n.btn {\n  color: rgb(218, 218, 219);\n  width: 175px;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  padding: 10px 0px;\n  border-radius: 10px;\n  box-shadow: 5px 5px 10px black;\n  transition: all 0.25s ease;\n  background: linear-gradient(to right, #dda0a0 34%, #3d3d3d 65%);\n  background-size: 300% 100%;\n  background-position:right bottom;\n}\n\n.btn:hover, .btn:active, .btn:focus {\n  background-position:left bottom;\n  color: #1b1b1b;\n}\n\n@media only screen and (max-width: 1000px) {\n  #buttons {\n    width: 95vw;\n  }\n  #buttons a {\n    line-height: 50px;\n    font-size: 20px;\n  }\n  .btn {\n    width: 125px;\n    padding: 0px 0px;\n  }\n}\n",""]);const s=a},581:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,".guest {\n  color: #dddda0;\n}\n\n.site {\n  color: #dda0dd;\n}\n\n.path {\n  color: #a0dda0;\n}\n\n.input {\n  color: #a0d9dd;\n}\n\n#terminal-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n  box-shadow: 5px 5px 10px black;\n  margin-top: 20px;\n}\n\n#terminal-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #252525;\n  width: 900px;\n  height: 50px;\n  border-radius: 10px 10px 0 0;\n}\n\n#terminal-header-text {\n  color: rgb(218, 218, 219);\n}\n\n#terminal {\n  display: flex;\n  flex-direction: column;\n  width: 900px;\n  height: 500px;\n  background: #3d3d3d;\n  border-radius: 0 0 10px 10px;\n  color: rgb(218, 218, 219);\n  padding: 25px;\n  gap: 20px;\n}\n\n#terminal a {\n  color: #dda0a0;\n  text-decoration: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.typing-demo {\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 2px solid;\n  border-color: transparent;\n}\n\n@keyframes typing {\n  from {\n    width: 0\n  }\n}\n    \n@keyframes blink {\n  50% {\n    border-color: rgb(218, 218, 219);\n  }\n}\n\n@media only screen and (max-width: 1000px) {\n  #terminal-container {\n    width: 95vw;\n    margin-top: 0px;\n    \n  }\n  #terminal-header {\n    width: 95vw;\n    height: 50px;\n    font-size: .85rem;\n  }\n  #terminal {\n    width: 95vw;\n    height: auto;\n    padding: 15px 10px;\n    gap: 5px;\n    line-height: 25px;\n    font-size: .85rem;\n  }\n}",""]);const s=a},177:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),l=t.n(s),d=new URL(t(611),t.b),c=a()(o()),p=l()(d);c.push([n.id,"/*//////////////////*/\n /* CSS FOR CONTENT */\n /*/////////////////*/\n\n @font-face {\n  font-family: 'JetBrains Mono';\n  src: url("+p+") format('truetype');\n  font-style: normal;\n}\n\n#content {\n  margin-top: 60px;\n  display: flex;\n  flex-direction: column;\n  padding: 60px 10vh;\n  font-family: 'JetBrains Mono', sans-serif;\n  width: 100vw;\n  max-width: 100%;\n  z-index: 1;\n  align-items: center;\n  justify-content: center;\n}\n\n@media only screen and (max-width: 1000px) {\n  #content {\n    width: 100vw;\n    padding: 2vh 10px;\n  }\n}",""]);const u=c},348:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"/*/////////////////*/\n /* CSS FOR FOOTER */\n /*////////////////*/\n\n #footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: stretch;\n  background: #282828;\n  color: rgb(218, 218, 219);\n  font-size: 0.75rem;\n  height: 2.5vh;\n  position: sticky;\n  top: 100vh;\n  flex-shrink: 0;\n  z-index: 1;\n}\n\n@media only screen and (max-width: 750px) {\n  #footer {\n\n    font-size: 0.75rem;\n    height: 4.5vh;\n    position: sticky;\n    top: 100vh;\n    flex-shrink: 0;\n  }\n}",""]);const s=a},497:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),l=t.n(s),d=new URL(t(178),t.b),c=a()(o()),p=l()(d);c.push([n.id,"/*/////////////////*/\n /* CSS FOR HEADER */\n /*////////////////*/\n\n@font-face {\n  font-family: 'segoe ui';\n  src: url("+p+") format('truetype');\n  font-style: normal;\n}\n\n#header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #1d1e20;\n  height: 67px;\n  padding-bottom: 7px;\n  position: fixed;\n  width: 100vw;\n  max-width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n}\n\n.title {\n  color: rgb(218, 218, 219);\n  font-size: 24px;\n  font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,Oxygen,Ubuntu,Cantarell,open sans,helvetica neue,sans-serif;\n  font-weight: 700;\n  line-height: 60px;\n  padding: 0px;\n  margin: 0px;\n}\n\n@media only screen and (max-width: 1000px) {\n  #header {\n    height: 57px;\n  }\n  .title {\n    font-size: 20px;\n  }\n}",""]);const u=c},756:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"/*//////////////*/\n /* GENERAL CSS */\n/*//////////////*/\n\nhtml {\n  overflow-y: scroll;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background: #1d1e20;\n}",""]);const s=a},943:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\r\n\r\n/*\r\nDocument\r\n========\r\n*/\r\n\r\n/**\r\nUse a better box model (opinionated).\r\n*/\r\n\r\n*,\r\n::before,\r\n::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n/**\r\nUse a more readable tab size (opinionated).\r\n*/\r\n\r\nhtml {\r\n\t-moz-tab-size: 4;\r\n\ttab-size: 4;\r\n}\r\n\r\n/**\r\n1. Correct the line height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n*/\r\n\r\nhtml {\r\n\tline-height: 1.15; /* 1 */\r\n\t-webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/*\r\nSections\r\n========\r\n*/\r\n\r\n/**\r\nRemove the margin in all browsers.\r\n*/\r\n\r\nbody {\r\n\tmargin: 0;\r\n}\r\n\r\n/**\r\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n*/\r\n\r\nbody {\r\n\tfont-family:\r\n\t\tsystem-ui,\r\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\r\n\t\t'Segoe UI',\r\n\t\tRoboto,\r\n\t\tHelvetica,\r\n\t\tArial,\r\n\t\tsans-serif,\r\n\t\t'Apple Color Emoji',\r\n\t\t'Segoe UI Emoji';\r\n}\r\n\r\n/*\r\nGrouping content\r\n================\r\n*/\r\n\r\n/**\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n*/\r\n\r\nhr {\r\n\theight: 0; /* 1 */\r\n\tcolor: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nText-level semantics\r\n====================\r\n*/\r\n\r\n/**\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr[title] {\r\n\ttext-decoration: underline dotted;\r\n}\r\n\r\n/**\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n\tfont-weight: bolder;\r\n}\r\n\r\n/**\r\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n2. Correct the odd 'em' font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n\tfont-family:\r\n\t\tui-monospace,\r\n\t\tSFMono-Regular,\r\n\t\tConsolas,\r\n\t\t'Liberation Mono',\r\n\t\tMenlo,\r\n\t\tmonospace; /* 1 */\r\n\tfont-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n\tfont-size: 80%;\r\n}\r\n\r\n/**\r\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n\tfont-size: 75%;\r\n\tline-height: 0;\r\n\tposition: relative;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nsub {\r\n\tbottom: -0.25em;\r\n}\r\n\r\nsup {\r\n\ttop: -0.5em;\r\n}\r\n\r\n/*\r\nTabular data\r\n============\r\n*/\r\n\r\n/**\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n*/\r\n\r\ntable {\r\n\ttext-indent: 0; /* 1 */\r\n\tborder-color: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nForms\r\n=====\r\n*/\r\n\r\n/**\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n\tfont-family: inherit; /* 1 */\r\n\tfont-size: 100%; /* 1 */\r\n\tline-height: 1.15; /* 1 */\r\n\tmargin: 0; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n1. Remove the inheritance of text transform in Firefox.\r\n*/\r\n\r\nbutton,\r\nselect { /* 1 */\r\n\ttext-transform: none;\r\n}\r\n\r\n/**\r\nCorrect the inability to style clickable types in iOS and Safari.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n\t-webkit-appearance: button;\r\n}\r\n\r\n/**\r\nRemove the inner border and padding in Firefox.\r\n*/\r\n\r\n::-moz-focus-inner {\r\n\tborder-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nRestore the focus styles unset by the previous rule.\r\n*/\r\n\r\n:-moz-focusring {\r\n\toutline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\nRemove the additional ':invalid' styles in Firefox.\r\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n\tbox-shadow: none;\r\n}\r\n\r\n/**\r\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\r\n*/\r\n\r\nlegend {\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/**\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n\theight: auto;\r\n}\r\n\r\n/**\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n\t-webkit-appearance: textfield; /* 1 */\r\n\toutline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n\t-webkit-appearance: none;\r\n}\r\n\r\n/**\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to 'inherit' in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n\t-webkit-appearance: button; /* 1 */\r\n\tfont: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nInteractive\r\n===========\r\n*/\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n\tdisplay: list-item;\r\n}\r\n\r\nhtml {\r\n\t/* Declare your font family type in the html selector, then your font-family in the body selector */\r\n\tfont-family: Arial, sans-serif;\r\n\r\n\t/* Make base font-size 100% of browser font-size */\r\n\tfont-size: 100%;\r\n\r\n\t/* Declare your box-sizing here, then inherit the box sizing below in the *, *::before and *::after selector */\r\n\t/* https://css-tricks.com/box-sizing */\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: inherit; /* See line 20 */\r\n}\r\n\r\nbody {\r\n\t/* Declare your default font stack here */\r\n\tfont-family: Arial, sans-serif;\r\n\r\n\t/* Better text rendering - font-smoothing has not been officially declared, but can still be useful */\r\n\ttext-rendering: geometricPrecision;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nimg {\r\n\t/* For responsive images that adjust & adapt */\r\n\t/*height: auto;*/\r\n\t/*max-width: 100%;*/\r\n\r\n\t/* This isn't needed, but as a user, I get frustrated when I highlight text and the image gets highlighted too */\r\n\tuser-select: none;\r\n}\r\n\r\nbutton {\r\n\tcolor: inherit; /* By default, buttons don't inherit the font colour, this is a useful default to override */\r\n}\r\n\r\na, button {\r\n\ttouch-action: manipulation; /* Element doesn't want double-tap on mobile to zoom */\r\n}\r\n\r\nsvg {\r\n\t/* Make the SVGs fit the parent container by default */\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\r\n\t/* Optional - make the SVG's fill be the same as the inherited color */\r\n\tfill: currentColor;\r\n\r\n\t/* Prevent the SVG from altering cursor interaction */\r\n\tpointer-events: none;\r\n}",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],d=r.base?l[0]+r.base:l[0],c=i[d]||0,p="".concat(d," ").concat(c);i[d]=c+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var l=r(n,o),d=0;d<i.length;d++){var c=t(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},611:(n,e,t)=>{n.exports=t.p+"e1766c4845e992bb88b6.ttf"},178:(n,e,t)=>{n.exports=t.p+"142593ecca549715e938.ttf"},294:(n,e,t)=>{n.exports=t.p+"184a3ef9578d5c2d5859.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),l=t.n(s),d=t(216),c=t.n(d),p=t(589),u=t.n(p),m=t(943),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=c(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(756),b={};b.styleTagTransform=u(),b.setAttributes=l(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=c(),e()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals,t(294);var g=t(497),x={};x.styleTagTransform=u(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=c(),e()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;var y=t(177),v={};v.styleTagTransform=u(),v.setAttributes=l(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=c(),e()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;var w=t(348),C={};C.styleTagTransform=u(),C.setAttributes=l(),C.insert=a().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=c(),e()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals;var k=t(559),E={};E.styleTagTransform=u(),E.setAttributes=l(),E.insert=a().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=c(),e()(k.Z,E),k.Z&&k.Z.locals&&k.Z.locals;var S=t(581),z={};z.styleTagTransform=u(),z.setAttributes=l(),z.insert=a().bind(null,"head"),z.domAPI=o(),z.insertStyleElement=c(),e()(S.Z,z),S.Z&&S.Z.locals&&S.Z.locals;const A={"cam.location":"San Jose, CA","cam.interests":'["D&D", "VR", "Cooking", "Coding"]',"cam.education":"B.A. Sociology - Princeton University","cam.skills":'["Javascript", "Python", "Bash", "Webpack", "git", "CAD/CAM"]',"cam.contact":{LinkedIn:"https://www.linkedin.com/in/cam-nguyen-6a1ab257/",GitHub:"https://github.com/Cambuchi"}},T=n=>{if(n>11)return;const e=document.getElementById("terminal").children,t=e[n];";"===e[n].textContent[-1]?(t.classList.remove("hidden"),t.style.width=`${t.textContent.length+1}ch`,t.style.animation=`typing 2.5s steps(${t.textContent.length+1}), blink .5s step-end 5 alternate`,t.classList.add("typing-demo"),t.onanimationend=()=>{T(n+1),t.onanimationend=null}):">"===e[n].textContent[0]?(t.classList.remove("hidden"),t.style.width=`${t.textContent.length+1}ch`,t.style.animation=`typing 1.5s steps(${t.textContent.length+1}), blink .5s step-end 3 alternate`,t.classList.add("typing-demo"),t.onanimationend=()=>{T(n+1),t.onanimationend=null}):(e[n].classList.remove("hidden"),setTimeout((()=>{T(n+1),t.onanimationend=null}),250))};(()=>{const n=document.body,e=(()=>{const n=document.createElement("div");n.id="header";const e=document.createElement("p");return e.classList="title",e.textContent="cam nguyen | home",n.append(e),n})(),t=(()=>{const n=document.createElement("div");n.id="content";const e=document.createElement("div");e.id="terminal-container";const t=document.createElement("div");t.id="terminal-header";const r=document.createElement("div");r.id="terminal-header-text",r.textContent="guest@cambuchi.github.io:$ ~ /home",t.append(r),e.append(t);const o=document.createElement("div");return o.id="terminal",e.append(o),n.append(e),n})(),r=(()=>{const n=document.createElement("div");n.id="buttons";const e=document.createElement("a");e.id="blog-btn",e.classList="btn",e.href="https://cambuchi.github.io/blog",e.textContent="blog",e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer noopener");const t=document.createElement("a");return t.id="resume-btn",t.classList="btn",t.href="https://cambuchi.github.io/resume/",t.textContent="resume",t.setAttribute("target","_blank"),t.setAttribute("rel","noreferrer noopener"),n.append(e),n.append(t),n})(),o=(()=>{const n=document.createElement("div");return n.id="footer",n.textContent="Copyright © 2021 Cam Nguyen",n})();n.prepend(o),n.prepend(r),n.prepend(t),n.prepend(e)})(),(()=>{const n=document.getElementById("terminal"),e=(()=>{let n=document.createElement("div"),e=document.createElement("span");e.classList="guest",e.textContent="guest";let t=document.createElement("span");t.classList="site",t.textContent="cambuchi.github.io";let r=document.createElement("span");return r.classList="path",r.textContent="/home ",n.append(e),n.insertAdjacentText("beforeend","@"),n.append(t),n.insertAdjacentText("beforeend",":$ ~ "),n.append(r),n})();let t=document.createElement("span");t.id="launch",t.classList="input",t.classList.add("hidden"),t.style.display="inline-flex",t.textContent="node introduction.js",e.append(t),n.append(e);let r=document.createElement("div");r.classList="input",r.classList.add("hidden"),r.textContent="> const cam = Cambuchi(human, 'he/him');",n.append(r),Object.keys(A).forEach((e=>{if("cam.contact"!=e){const t=document.createElement("div");t.textContent=`> ${e}`,t.classList="hidden",t.classList.add("input"),n.append(t);const r=document.createElement("div");r.classList.add("hidden"),"["===A[e][0]?r.textContent=A[e]:r.textContent=`"${A[e]}"`,n.append(r)}else if("cam.contact"===e){const t=document.createElement("div");t.textContent=`> ${e}`,t.classList="hidden",t.classList.add("input"),n.append(t);const r=document.createElement("div");r.classList.add("hidden");const o=document.createElement("span");o.textContent='["';const i=document.createElement("span");i.textContent='", "';const a=document.createElement("span");a.textContent='"]';let s=Object.keys(A[e]);for(let n of s){const t=document.createElement("a");t.href=A[e][n],t.textContent=n,t.setAttribute("target","_blank"),t.setAttribute("rel","noreferrer noopener"),"LinkedIn"===n?(r.append(o),r.append(t),r.append(i)):"GitHub"===n&&(r.append(t),r.append(a))}n.append(r)}}))})(),(()=>{const n=document.getElementById("launch");document.getElementById("terminal").children,n.classList.remove("hidden"),n.style.width=`${n.textContent.length+2}ch`,n.style.animation=`typing 2s steps(${n.textContent.length+2}), blink .5s step-end 4 alternate`,n.classList.add("typing-demo"),n.onanimationend=()=>{setTimeout((()=>{T(1),n.onanimationend=null}),350)}})()})()})();