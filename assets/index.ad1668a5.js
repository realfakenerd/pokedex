import{b as d,S as p,i as m,s as f,R as _,c as h,m as y,n as g,t as v,a as x,d as E,H as L}from"./vendor.c76e3634.js";const k=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};k();"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js",{scope:"/"});const P="modulepreload",u={},b="/",a=function(r,s){return!s||s.length===0?r():Promise.all(s.map(t=>{if(t=`${b}${t}`,t in u)return;u[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":P,e||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),e)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",l)})})).then(()=>r())},$={root:!0,ownMeta:{preload:"proximity"},children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/_fallback",component:()=>a(()=>import("./_fallback.5f3d5180.js"),["assets/_fallback.5f3d5180.js","assets/_fallback.2f571c87.css","assets/vendor.c76e3634.js"]).then(n=>n.default)},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/index",id:"_index",component:()=>a(()=>import("./index.31356194.js"),["assets/index.31356194.js","assets/vendor.c76e3634.js","assets/index.0cd78d9e.js","assets/pokeStore.21188376.js"]).then(n=>n.default)},{isDir:!0,ext:"",children:[{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/pokemon/:id",id:"_pokemon__id",component:()=>a(()=>import("./_id_.42e305f5.js"),["assets/_id_.42e305f5.js","assets/vendor.c76e3634.js","assets/index.0cd78d9e.js"]).then(n=>n.default)}],meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/pokemon"}],isLayout:!0,meta:{preload:"proximity",recursive:!0,prerender:!0},path:"/",id:"__layout",component:()=>a(()=>import("./_layout.3c83f094.js"),["assets/_layout.3c83f094.js","assets/vendor.c76e3634.js","assets/index.0cd78d9e.js","assets/pokeStore.21188376.js"]).then(n=>n.default)},{tree:I,routes:O}=d($);function R(n){let r,s;return r=new _({props:{routes:O}}),{c(){h(r.$$.fragment)},m(t,e){y(r,t,e),s=!0},p:g,i(t){s||(v(r.$$.fragment,t),s=!0)},o(t){x(r.$$.fragment,t),s=!1},d(t){E(r,t)}}}class j extends p{constructor(r){super();m(this,r,null,R,f,{})}}L(j,{target:document.body},"routify-app");
