import{S as q,i as x,s as B,o as d,f as p,q as $,r as c,h as X,v as r,z as L,n as P,l as T,P as Q,u as U,e as M,m as O,t as H,B as R,C as V,j as D,D as Z,k as A,J as ee,K as te,L as ae}from"./vendor.6ad128b1.js";import{a as W,b as Y,d as se}from"./index.5a680764.js";function le(s){let e,t,a,l,i,n,o,f,u,g,h,_,b,v,w,C,k,m,N,S,y,E,K,I;return{c(){e=d("div"),t=d("div"),a=d("div"),a.textContent="Base Experience",l=p(),i=d("div"),n=$(s[1]),o=p(),f=d("div"),f.textContent="the base experience",u=p(),g=d("div"),h=d("div"),h.textContent="Weight",_=p(),b=d("div"),v=$(s[0]),w=p(),C=d("div"),C.textContent="The weight of the pokemon",k=p(),m=d("div"),N=d("div"),N.textContent="Height",S=p(),y=d("div"),E=$(s[2]),K=p(),I=d("div"),I.textContent="The height of the pokemon",c(a,"class","stat-title"),c(i,"class","stat-value"),c(f,"class","stat-desc"),c(t,"class","stat"),c(h,"class","stat-title"),c(b,"class","stat-value"),c(C,"class","stat-desc text-primary"),c(g,"class","stat"),c(N,"class","stat-title"),c(y,"class","stat-value"),c(I,"class","stat-desc text-primary"),c(m,"class","stat"),c(e,"class","w-full shadow stats mt-5")},m(z,j){X(z,e,j),r(e,t),r(t,a),r(t,l),r(t,i),r(i,n),r(t,o),r(t,f),r(e,u),r(e,g),r(g,h),r(g,_),r(g,b),r(b,v),r(g,w),r(g,C),r(e,k),r(e,m),r(m,N),r(m,S),r(m,y),r(y,E),r(m,K),r(m,I)},p(z,[j]){j&2&&L(n,z[1]),j&1&&L(v,z[0]),j&4&&L(E,z[2])},i:P,o:P,d(z){z&&T(e)}}}function ie(s,e,t){let{weight:a=pokemon.weight}=e,{baseXP:l=pokemon.base_experience}=e,{height:i=pokemon.height}=e;return s.$$set=n=>{"weight"in n&&t(0,a=n.weight),"baseXP"in n&&t(1,l=n.baseXP),"height"in n&&t(2,i=n.height)},[a,l,i]}class ne extends q{constructor(e){super();x(this,e,ie,le,B,{weight:0,baseXP:1,height:2})}}function F(s,e,t){const a=s.slice();return a[1]=e[t],a}function G(s){let e,t,a,l=s[1].stat.name+"",i,n,o,f=s[1].base_stat+"",u,g,h,_,b;return{c(){e=d("li"),t=d("div"),a=d("h4"),i=$(l),n=p(),o=d("h4"),u=$(f),g=p(),h=d("progress"),b=p(),c(a,"class","capitalize"),c(o,"class","capitalize"),c(t,"class","flex flex-row gap-2"),c(h,"class","progress progress-primary bg-secondary"),c(h,"max","100"),h.value=_=s[1].base_stat,c(e,"class","")},m(v,w){X(v,e,w),r(e,t),r(t,a),r(a,i),r(t,n),r(t,o),r(o,u),r(e,g),r(e,h),r(e,b)},p(v,w){w&1&&l!==(l=v[1].stat.name+"")&&L(i,l),w&1&&f!==(f=v[1].base_stat+"")&&L(u,f),w&1&&_!==(_=v[1].base_stat)&&(h.value=_)},d(v){v&&T(e)}}}function re(s){let e,t,a,l,i=s[0],n=[];for(let o=0;o<i.length;o+=1)n[o]=G(F(s,i,o));return{c(){e=d("div"),t=d("h3"),t.textContent="Stats",a=p(),l=d("ul");for(let o=0;o<n.length;o+=1)n[o].c();c(t,"class","uppercase font-bold"),c(l,"class","grid grid-cols-2 gap-3"),c(e,"class","md:w-1/2")},m(o,f){X(o,e,f),r(e,t),r(e,a),r(e,l);for(let u=0;u<n.length;u+=1)n[u].m(l,null)},p(o,[f]){if(f&1){i=o[0];let u;for(u=0;u<i.length;u+=1){const g=F(o,i,u);n[u]?n[u].p(g,f):(n[u]=G(g),n[u].c(),n[u].m(l,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=i.length}},i:P,o:P,d(o){o&&T(e),Q(n,o)}}}function oe(s,e,t){let{statuses:a}=e;return s.$$set=l=>{"statuses"in l&&t(0,a=l.statuses)},[a]}class ce extends q{constructor(e){super();x(this,e,oe,re,B,{statuses:0})}}function J(s){let e;switch(s){case"grass":e="green-500";break;case"fire":e="orange-500";break;case"flying":e="violet-300";break;case"dragon":e="indigo-700";break;case"fairy":e="rose-400";break;case"ice":e="cyan-200";break;case"normal":e="stone-500";break;case"fighting":e="red-500";break;case"eletric":e="yellow-400";break;case"dark":e="yellow-800";break;case"bug":e="lime-500";break;case"ghost":e="violet-600";break;case"ground":e="yellow-700";break;case"poison":e="purple-500";break;case"psychic":e="pink-500";break;case"rock":e="orange-400";break;case"steel":e="zync-400";break;case"water":e="blue-500";break;default:e="red-500";break}return e}function de(s){let e,t,a,l;return{c(){e=d("figure"),t=d("img"),c(t,"class","filter drop-shadow-2xl"),U(t.src,a=s[0])||c(t,"src",a),c(t,"alt",s[1]),c(e,"class",l="bg-gradient-to-r "+s[2]+" "+s[3])},m(i,n){X(i,e,n),r(e,t)},p(i,[n]){n&1&&!U(t.src,a=i[0])&&c(t,"src",a),n&2&&c(t,"alt",i[1]),n&12&&l!==(l="bg-gradient-to-r "+i[2]+" "+i[3])&&c(e,"class",l)},i:P,o:P,d(i){i&&T(e)}}}function ue(s,e,t){let a,l,{sprite:i}=e,{altName:n}=e,{tipo:o}=e;return o.length==1?a=`from-${J(o[0])}`:(a=`from-${J(o[0])}`,l=`to-${J(o[1])}`,console.log(o)),s.$$set=f=>{"sprite"in f&&t(0,i=f.sprite),"altName"in f&&t(1,n=f.altName),"tipo"in f&&t(4,o=f.tipo)},[i,n,a,l,o]}class fe extends q{constructor(e){super();x(this,e,ue,de,B,{sprite:0,altName:1,tipo:4})}}function he(s){let e,t,a,l,i,n=s[0].name+"",o,f,u,g,h,_,b,v,w,C;return t=new fe({props:{tipo:s[1],altName:s[0].name,sprite:s[0].sprites.other["official-artwork"].front_default}}),h=new ce({props:{statuses:s[0].stats}}),b=new ne({props:{baseXP:s[0].base_experience,weight:s[0].weight,height:s[0].height}}),{c(){e=d("div"),M(t.$$.fragment),a=p(),l=d("div"),i=d("h3"),o=$(n),f=$(" : "),u=$(s[2]),g=p(),M(h.$$.fragment),_=p(),M(b.$$.fragment),c(i,"class","card-title uppercase font-bold tracking-widest"),c(l,"class","card-body"),c(e,"class","card md:card-side shadow-red-400 bg-base-200 shadow-2xl mb-32 md:mb-5")},m(k,m){X(k,e,m),O(t,e,null),r(e,a),r(e,l),r(l,i),r(i,o),r(i,f),r(i,u),r(l,g),O(h,l,null),r(l,_),O(b,l,null),C=!0},p(k,[m]){s=k;const N={};m&1&&(N.altName=s[0].name),m&1&&(N.sprite=s[0].sprites.other["official-artwork"].front_default),t.$set(N),(!C||m&1)&&n!==(n=s[0].name+"")&&L(o,n);const S={};m&1&&(S.statuses=s[0].stats),h.$set(S);const y={};m&1&&(y.baseXP=s[0].base_experience),m&1&&(y.weight=s[0].weight),m&1&&(y.height=s[0].height),b.$set(y)},i(k){C||(H(t.$$.fragment,k),H(h.$$.fragment,k),H(b.$$.fragment,k),R(()=>{w&&w.end(1),v=V(e,Y,{x:-400,duration:2e3,easing:W}),v.start()}),C=!0)},o(k){D(t.$$.fragment,k),D(h.$$.fragment,k),D(b.$$.fragment,k),v&&v.invalidate(),w=Z(e,Y,{x:200,duration:2e3,easing:W}),C=!1},d(k){k&&T(e),A(t),A(h),A(b),k&&w&&w.end()}}}function ge(s,e,t){let{pokemon:a}=e,l=a.types.map(n=>n.type.name),i=l.length==1?l[0]:`${l[0]}, ${l[1]}`;return s.$$set=n=>{"pokemon"in n&&t(0,a=n.pokemon)},[a,l,i]}class me extends q{constructor(e){super();x(this,e,ge,he,B,{pokemon:0})}}function pe(s){let e,t,a,l,i,n,o,f,u,g=s[4]+"",h;return{c(){e=d("div"),t=d("div"),a=d("div"),a.innerHTML="<h1>Oh! No</h1>",l=p(),i=d("p"),i.textContent="You almost got him.",n=p(),o=d("br"),f=p(),u=d("p"),h=$(g),c(a,"class","card-title"),c(t,"class","card-body"),c(e,"class","card bg-red-500 shadow-2xl")},m(_,b){X(_,e,b),r(e,t),r(t,a),r(t,l),r(t,i),r(t,n),r(t,o),r(t,f),r(t,u),r(u,h)},p:P,i:P,o:P,d(_){_&&T(e)}}}function be(s){let e,t;return e=new me({props:{pokemon:s[3]}}),{c(){M(e.$$.fragment)},m(a,l){O(e,a,l),t=!0},p:P,i(a){t||(H(e.$$.fragment,a),t=!0)},o(a){D(e.$$.fragment,a),t=!1},d(a){A(e,a)}}}function ke(s){let e;return{c(){e=d("div"),e.innerHTML=`<div class="card-body"><div class="card-title"><h1>Loading Pokemons</h1></div> 
        <p>Almost there...</p></div>`,c(e,"class","card bg-base-300 shadow-2xl")},m(t,a){X(t,e,a)},p:P,i:P,o:P,d(t){t&&T(e)}}}function ve(s){let e,t,a={ctx:s,current:null,token:null,hasCatch:!0,pending:ke,then:be,catch:pe,value:3,error:4,blocks:[,,,]};return ee(s[0](),a),{c(){e=d("div"),a.block.c(),c(e,"class","m-5")},m(l,i){X(l,e,i),a.block.m(e,a.anchor=null),a.mount=()=>e,a.anchor=null,t=!0},p(l,[i]){s=l,te(a,s,i)},i(l){t||(H(a.block),t=!0)},o(l){for(let i=0;i<3;i+=1){const n=a.blocks[i];D(n)}t=!1},d(l){l&&T(e),a.block.d(),a.token=null,a=null}}}function _e(s,e,t){let{id:a}=e;async function l(){const i=`https://pokeapi.co/api/v2/pokemon/${a}`;return(await se.get(i)).data}return l(),ae.title=`Pokedex - ${a}`,s.$$set=i=>{"id"in i&&t(1,a=i.id)},[l,a]}class Ce extends q{constructor(e){super();x(this,e,_e,ve,B,{id:1})}}export{Ce as default};