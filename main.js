(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),i=r.n(t),o=r(645),a=r.n(o)()(i());a.push([n.id,"* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    'Open Sans',\n    'Helvetica Neue',\n    sans-serif;\n  color: var(--primary-color-text);\n}\n:root {\n  --primary-color-dark: #0b0c1eff;\n  --primary-color-darker: rgb(5, 5, 12);\n  --primary-color-light: #151638ff;\n  --primary-color-lighter: #171829ff;\n  --primary-color-active: #0095ffff;\n  --primary-color-outline: #919199ff;\n  --primary-color-active-2: rgb(255, 187, 0);\n  --primary-color-text: #ffffffff;\n  --primary-border-radius: 2rem;\n  --primary-padding: 20px;\n}\nbody {\n  background-color: var(--primary-color-darker);\n  min-height: 100vh;\n  max-width: 1200px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 25px;\n  gap: 25px;\n}\nmain.container {\n  width: min(fit-content, 100%);\n  height: fit-content;\n  border-radius: var(--primary-border-radius);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: var(--primary-padding);\n}\n.search > * {\n  border: none;\n  background-color: transparent;\n}\n.search {\n  display: flex;\n  height: 100px;\n  align-items: center;\n  width: min(912px, 100%);\n  background-color: var(--primary-color-dark);\n  border-radius: 1000px;\n  overflow: hidden;\n  padding: 10px;\n}\n.search-icon {\n  font-size: 35px;\n  width: 70px;\n  height: 70px;\n  background-color: var(--primary-color-light);\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.input {\n  flex-grow: 1;\n  font-size: 45px;\n  padding-left: 50px;\n}\n.input::placeholder {\n  color: var(--primary-color-text);\n}\n.input:focus,\n.input:active {\n  border: none;\n  outline: none;\n}\n.main-info {\n  align-self: stretch;\n  padding: var(--primary-padding);\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px;\n  justify-content: center;\n}\n.location {\n  font-size: 45px;\n  text-align: center;\n  padding: var(--primary-padding);\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  align-items: flex-end;\n  filter: drop-shadow(0px 0px 25px #ffffff6e);\n}\n.location .region {\n  font-size: 18px;\n  font-style: italic;\n}\n.location .country {\n  font-size: 18px;\n  color: var(--primary-color-active);\n  font-style: italic;\n}\n.info-card {\n  align-self: flex-start;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.card-image {\n  width: 150px;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 60px;\n  filter: drop-shadow(0px 0px 50px #ffffff6d);\n}\n.card-image img {\n  padding: 40px;\n}\n.card-stats .amount {\n  font-size: 90px;\n  font-weight: bolder;\n  filter: drop-shadow(0px 0px 50px #ffffff65);\n}\n.card-stats {\n  display: flex;\n}\n.card-stats .scale {\n  font-size: 25px;\n  color: var(--primary-color-active);\n}\n.switch {\n  --switch-width: 90px;\n  --swtich-height: 40px;\n  width: var(--switch-width);\n  height: var(--swtich-height);\n  position: relative;\n  border-radius: var(--primary-border-radius);\n  align-self: flex-end;\n}\n.switch input {\n  display: none;\n}\n.switch input,\n.switch div {\n  height: 100%;\n  width: 100%;\n  border: none;\n}\n.switch div {\n  background-color: var(--primary-color-lighter);\n  border-radius: var(--primary-border-radius);\n}\n.switch div::after {\n  background-color: var(--primary-color-active);\n  width: var(--swtich-height);\n  height: var(--swtich-height);\n  border-radius: var(--primary-border-radius);\n  position: absolute;\n  content: '°C';\n  top: 0;\n  right: calc(var(--switch-width) - var(--swtich-height));\n  transition: 0.4s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.switch input:checked + div::after {\n  right: 0px;\n  content: '°F';\n}\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},a=[],c=0;c<n.length;c++){var d=n[c],s=t.base?d[0]+t.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=r(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=i(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,i){var o=t(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=r(o[a]);e[c].references--}for(var d=t(n,i),s=0;s<o.length;s++){var l=r(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var i=e[t];if(void 0!==i)return i.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),i=r.n(t),o=r(569),a=r.n(o),c=r(565),d=r.n(c),s=r(216),l=r.n(s),u=r(589),p=r.n(u),f=r(426),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".info-card .card-stats .amount"),y=document.querySelector(".info-card .card-stats .scale"),g=document.querySelector(".location .name"),x=document.querySelector(".location .region"),v=document.querySelector(".location .country"),b=document.querySelector(".info-card .card-info"),w=document.querySelector(".search .input"),q=document.querySelector(".info-card .card-image img"),S=document.querySelector(".humidity .card-stats .amount"),T=document.querySelector(".humidity .card-info"),k=document.querySelector(".wind-speed .card-stats .amount"),C=document.querySelector(".wind-speed .card-info"),z=document.querySelector(".air-quality .card-stats .amount"),j=document.querySelector(".air-quality .card-info"),E=document.querySelector("#temperature-toggle");let M=0;const _=n=>{(async n=>(await fetch(`https://api.weatherapi.com/v1/current.json?key=fbaf5237221c4603adf154400232809&q=${n}&aqi=yes`,{mode:"cors"})).json())(n).then((n=>{var e,r,t;L(n.current.temp_c,!E.checked),M=n.current.temp_c,g.innerText=n.location.name,x.innerText=n.location.region,v.innerText=n.location.country,b.innerText=n.current.condition.text,q.src=n.current.condition.icon,S.innerText=n.current.humidity,T.innerText=(e=n.current.humidity)<=20?"Too dry":e<=60?"Comfortable humidity":e<=100?"Too humid":void 0,k.innerText=n.current.wind_kph,C.innerText=(r=n.current.wind_kph)<=2?"Calm":r<=5?"Light air":r<=10?"Light breeze":r<=28?"Moderate breeze":r<=49?"Strong breeze":r<=61||r<=75?"High wind":r<=80?"Strong wind":r<=80?"Very strong wind":"Hurricane force",z.innerText=n.current.air_quality["gb-defra-index"],j.innerText=(t=n.current.air_quality["gb-defra-index"])<=1?"Good air quality":t<=3?"Decent air quality":t<=5?"Bad air quality":t<=8?"Really bad air quality":t<=10?"Extremly bad air quality":void 0}))};_("lebanon"),document.addEventListener("keydown",(n=>{""!==w.value&&"Enter"===n.key&&n.target===w&&_(w.value)}));const I=(n,e)=>{h.innerText=n,y.innerText=e};function L(n,e){I(e?n:9*n/5+32,e?"°C":"°F")}E.addEventListener("change",(n=>{L(M,!n.target.checked)}))})()})();