import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as n,l as s}from"./assets/vendor-78be7656.js";const a=document.querySelector("iframe"),e="videoplayer-current-time",t=new n(a,{loop:!0,fullscreen:!0,quality:"1080p"}),l=function(r){const o=r.seconds;localStorage.setItem(e,JSON.stringify(o))};t.on("timeupdate",s(l,1e3));t.setCurrentTime(JSON.parse(localStorage.getItem(e))||0);
//# sourceMappingURL=commonHelpers2.js.map