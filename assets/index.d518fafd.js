import{b as v,S as u,i as c,s as l,c as $,p as b,g as k,a as x,d as E,R as L,e as d,f as P,m as p,h as C,n as O,t as m,j as f,k as _,l as R,H as w}from"./vendor.6ad128b1.js";const j=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}};j();"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js");const A="modulepreload",h={},I="/",a=function(r,s){return!s||s.length===0?r():Promise.all(s.map(o=>{if(o=`${I}${o}`,o in h)return;h[o]=!0;const t=o.endsWith(".css"),e=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${e}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":A,t||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),t)return new Promise((g,y)=>{n.addEventListener("load",g),n.addEventListener("error",y)})})).then(()=>r())},S={root:!0,ownMeta:{preload:"proximity"},children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/_fallback",component:()=>a(()=>import("./_fallback.ececa1dd.js"),["assets/_fallback.ececa1dd.js","assets/_fallback.2f571c87.css","assets/vendor.6ad128b1.js"]).then(i=>i.default)},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/index",id:"_index",component:()=>a(()=>import("./index.f7f81bc7.js"),["assets/index.f7f81bc7.js","assets/vendor.6ad128b1.js","assets/index.5a680764.js","assets/pokeStore.d7988eec.js"]).then(i=>i.default)},{isDir:!0,ext:"",children:[{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/pokemon/:id",id:"_pokemon__id",component:()=>a(()=>import("./_id_.b1854d6c.js"),["assets/_id_.b1854d6c.js","assets/vendor.6ad128b1.js","assets/index.5a680764.js"]).then(i=>i.default)}],meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/pokemon"}],isLayout:!0,meta:{preload:"proximity",recursive:!0,prerender:!0},path:"/",id:"__layout",component:()=>a(()=>import("./_layout.380aba61.js"),["assets/_layout.380aba61.js","assets/vendor.6ad128b1.js","assets/index.5a680764.js","assets/pokeStore.d7988eec.js"]).then(i=>i.default)},{tree:W,routes:D}=v(S);function T(i){return $(),b(),k(),x(),E(),[]}class V extends u{constructor(r){super();c(this,r,T,null,l,{})}}function q(i){let r,s,o,t;return r=new V({}),o=new L({props:{routes:D}}),{c(){d(r.$$.fragment),s=P(),d(o.$$.fragment)},m(e,n){p(r,e,n),C(e,s,n),p(o,e,n),t=!0},p:O,i(e){t||(m(r.$$.fragment,e),m(o.$$.fragment,e),t=!0)},o(e){f(r.$$.fragment,e),f(o.$$.fragment,e),t=!1},d(e){_(r,e),e&&R(s),_(o,e)}}}class F extends u{constructor(r){super();c(this,r,null,q,l,{})}}w(F,{target:document.body},"routify-app");
