(this["webpackJsonpprint-mtg"]=this["webpackJsonpprint-mtg"]||[]).push([[0],[,,,,,,function(e,t,r){e.exports=r(19)},,,,,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(5),o=r.n(c),s=(r(11),r(1)),l=r.n(s),i=r(3),u=r(2);function m(){return(m=Object(i.a)(l.a.mark((function e(t,r,a,n){var c,o,s,i,u,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"===typeof t){e.next=2;break}return e.abrupt("return");case 2:return c=encodeURI("https://api.scryfall.com/cards/search?&q="+t+"&unique=prints&order=released&dir="+(n?"desc":"asc")),o={Origin:"http://localhost:3000"},e.next=6,fetch(c,{method:"GET",headers:o}).then((function(e){return e.json()})).catch((function(e){return console.error(e)}));case 6:if("list"===(null===(s=e.sent)||void 0===s?void 0:s.object)){e.next=11;break}return e.abrupt("return",null);case 11:if(0!==s.total_cards){e.next=15;break}return e.abrupt("return",null);case 15:if(1!==s.total_cards){e.next=19;break}return e.abrupt("return",s.data[0]);case 19:if(i=s.data.filter((function(e){return e.name.toUpperCase()===t.toUpperCase()})),!r){e.next=26;break}if(!((u=i.filter((function(e){return e.promo}))).length>0)){e.next=24;break}return e.abrupt("return",u[0]);case 24:e.next=30;break;case 26:if(!a){e.next=30;break}if(!((m=i.filter((function(e){return!e.promo}))).length>0)){e.next=30;break}return e.abrupt("return",m[0]);case 30:if(!(i.length>0)){e.next=34;break}return e.abrupt("return",i[0]);case 34:return e.abrupt("return",s.data[0]);case 35:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=function(e,t,r,a){return m.apply(this,arguments)},f=n.a.createContext(),p=["sideboard","maybeboard",""],g=function(e){var t=Object(a.useState)("opt"),r=Object(u.a)(t,2),c=r[0],o=r[1],s=Object(a.useState)([]),m=Object(u.a)(s,2),g=m[0],b=m[1],h=Object(a.useState)([]),v=Object(u.a)(h,2),E=v[0],k=v[1],w=Object(a.useState)(!1),N=Object(u.a)(w,2),x=N[0],C=N[1],j=Object(a.useState)(!1),O=Object(u.a)(j,2),P=O[0],y=O[1],L=Object(a.useState)(!1),S=Object(u.a)(L,2),B=S[0],_=S[1],I=Object(a.useState)(!0),T=Object(u.a)(I,2),q=T[0],D=T[1],M=Object(a.useState)(!1),R=Object(u.a)(M,2),U=R[0],F=R[1];function G(){return(G=Object(i.a)(l.a.mark((function e(t){var r,a,n,c,s,u,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(C(!0),r=/^([0-9]*)[\s]*([\w ',+]+)*$/gm,a=[];null!==(n=r.exec(t));)n.index===r.lastIndex&&r.lastIndex++,p.includes(null===(c=n[0])||void 0===c?void 0:c.trim().toLowerCase())||a.push({searchText:null===(s=n[0])||void 0===s?void 0:s.trim(),quantity:n[1]?n[1]:1,name:null===(u=n[2])||void 0===u?void 0:u.trim(),images:null});return m=[],e.next=7,Promise.all(a.map(function(){var e=Object(i.a)(l.a.mark((function e(t,r){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t.name,P,B,q,U);case 2:null==(n=e.sent)||"error"===n.object?m.push(t.searchText+" could not be found \r\n"):U&&(null===(a=n.image_uris)||void 0===a?void 0:a.border_crop)?t.images=n.image_uris.border_crop:t.images=n.card_faces?n.card_faces.map((function(e){return e.image_uris.large})):[n.image_uris.large];case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()));case 7:k(a),o(t),b(m),C(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement(f.Provider,{value:{deckList:c,setDeckList:o,foundCards:E,setFoundCards:k,findCards:function(e){return G.apply(this,arguments)},errors:g,setErrors:b,prefersPromo:P,setPrefersPromo:y,prefersNonPromo:B,setPrefersNonPromo:_,prefersNewest:q,setPrefersNewest:D,cropBorders:U,setCropBorders:F,isLoading:x}},e.children)};r(13);var b=function(){var e=Object(a.useContext)(f),t=e.isLoading,r=e.errors;return n.a.createElement("div",{className:"header"},n.a.createElement("header",{className:"appHeader"},"Print Magic Cards"),0===r.length?n.a.createElement("p",null," ",t?"Loading...":"Enter Your Decklist"):null)},h=(r(14),function(e){var t=e.id,r=e.name,a=e.checked,c=e.onChange,o=e.optionLabels,s=e.small,l=e.disabled;return n.a.createElement("div",{className:"toggle-switch"+(s?" small-switch":"")},n.a.createElement("input",{type:"checkbox",name:r,className:"toggle-switch-checkbox",id:t,checked:a,onChange:function(e){return c(e.target.checked)},disabled:l}),t?n.a.createElement("label",{className:"toggle-switch-label",tabIndex:l?-1:1,onKeyDown:function(e){return function(e){32===e.keyCode&&(e.preventDefault(),c(!a))}(e)},htmlFor:t},n.a.createElement("span",{className:l?"toggle-switch-inner toggle-switch-disabled":"toggle-switch-inner","data-yes":o[0],"data-no":o[1],tabIndex:-1}),n.a.createElement("span",{className:l?"toggle-switch-switch toggle-switch-disabled":"toggle-switch-switch",tabIndex:-1})):null)});h.defaultProps={optionLabels:["Yes","No"]};var v=h;r(15);var E=function(){var e=Object(a.useContext)(f),t=e.prefersPromo,r=e.setPrefersPromo,c=e.prefersNonPromo,o=e.setPrefersNonPromo,s=e.prefersNewest,l=e.setPrefersNewest,i=e.cropBorders,u=e.setCropBorders;return n.a.createElement("div",{className:"settingsContainer"},n.a.createElement("div",{className:"promosToggle"},n.a.createElement("label",{className:"toggleLabel"},"Prefer Promo "),n.a.createElement(v,{id:"promo",small:!0,checked:t,onChange:function(e){e&&o(!1),r(e)}})),n.a.createElement("div",{className:"promosToggle"},n.a.createElement("label",{className:"toggleLabel"},"Prefer Non Promo"),n.a.createElement(v,{id:"nonPromo",small:!0,checked:c,onChange:function(e){e&&r(!1),o(e)}})),n.a.createElement("div",{className:"promosToggle"},n.a.createElement("label",{className:"toggleLabel"},"Prefer Newer"),n.a.createElement(v,{id:"newest",small:!0,checked:s,onChange:l})),n.a.createElement("div",{className:"promosToggle"},n.a.createElement("label",{className:"toggleLabel"},"Crop Borders"),n.a.createElement(v,{id:"clip",small:!0,checked:i,onChange:u})))};r(16);var k=function(){var e=Object(a.useContext)(f),t=e.findCards,r=e.isLoading,c=e.errors,o=e.setErrors,s=Object(a.useState)(""),m=Object(u.a)(s,2),d=m[0],p=m[1];function g(){return(g=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=3;break}return o(["Enter a decklist to begin"]),e.abrupt("return");case 3:t(d);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.createElement("div",{className:"inputContainer"},c.length>0?c.map((function(e,t){return n.a.createElement("div",{className:"errorBanner",key:"error "+t},n.a.createElement("button",{className:"translucentButton",onClick:function(){o(c.slice(0,t).concat(c.slice(t+1,c.length)))}},"X"),n.a.createElement("div",{className:"errorMessage"},e),n.a.createElement("div",null))})):null,r?null:n.a.createElement("div",{className:"inputContainer"},n.a.createElement("textarea",{placeholder:"Enter your decklist here in the following format:\n1 Opt\n1 Remand\n1 Reverberate\n...",onChange:function(e){o([]),p(e.target.value)},value:d}),n.a.createElement(E,null),n.a.createElement("button",{className:"submitButton",onClick:function(){!function(){g.apply(this,arguments)}()}},"Submit")))};r(17);var w=function(){var e,t,r=Object(a.useContext)(f),c=r.foundCards,o=r.isLoading,s=c.filter((function(e){var t;return(null===(t=e.images)||void 0===t?void 0:t.length)>0})).map((function(e){for(var t=[],r=0;r<e.quantity;r++)t.push(e.images);return t.flat()})).flat(),l=(e=s,t=9,Array.from({length:Math.ceil(e.length/t)},(function(r,a){return e.slice(a*t,a*t+t)})));return n.a.createElement("div",{className:"cardPreview"},l.map((function(e,t){return o?null:n.a.createElement("div",{className:"cardGroup",key:t},e.map((function(e,t){return n.a.createElement("div",{className:"cardContainer",key:t},n.a.createElement("img",{src:e,alt:e}))})))})))};r(18);var N=function(){return n.a.createElement(g,null,n.a.createElement("div",{className:"app"},n.a.createElement(b,null),n.a.createElement(k,null),n.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.5a2c27e0.chunk.js.map