import{S as z,i as H,s as O,e as d,f as p,g as $,h as c,k as X,l as r,r as L,n as P,o as T,L as R,O as W,j as Y,c as E,m as I,t as q,w as V,x as Z,a as B,y as ee,d as M,D as te,E as ae,F as se}from"./vendor.1ed6c3d0.js";import{a as G,b as J,d as le}from"./index.1de48656.js";function ie(s){let e,t,a,l,i,n,o,u,f,g,h,_,k,v,w,y,b,m,N,S,C,A,U,D;return{c(){e=d("div"),t=d("div"),a=d("div"),a.textContent="Base Experience",l=p(),i=d("div"),n=$(s[1]),o=p(),u=d("div"),u.textContent="the base experience",f=p(),g=d("div"),h=d("div"),h.textContent="Weight",_=p(),k=d("div"),v=$(s[0]),w=p(),y=d("div"),y.textContent="The weight of the pokemon",b=p(),m=d("div"),N=d("div"),N.textContent="Height",S=p(),C=d("div"),A=$(s[2]),U=p(),D=d("div"),D.textContent="The height of the pokemon",c(a,"class","stat-title"),c(i,"class","stat-value"),c(u,"class","stat-desc"),c(t,"class","stat"),c(h,"class","stat-title"),c(k,"class","stat-value"),c(y,"class","stat-desc text-primary"),c(g,"class","stat"),c(N,"class","stat-title"),c(C,"class","stat-value"),c(D,"class","stat-desc text-primary"),c(m,"class","stat"),c(e,"class","w-full shadow stats mt-5")},m(x,j){X(x,e,j),r(e,t),r(t,a),r(t,l),r(t,i),r(i,n),r(t,o),r(t,u),r(e,f),r(e,g),r(g,h),r(g,_),r(g,k),r(k,v),r(g,w),r(g,y),r(e,b),r(e,m),r(m,N),r(m,S),r(m,C),r(C,A),r(m,U),r(m,D)},p(x,[j]){j&2&&L(n,x[1]),j&1&&L(v,x[0]),j&4&&L(A,x[2])},i:P,o:P,d(x){x&&T(e)}}}function ne(s,e,t){let{weight:a=pokemon.weight}=e,{baseXP:l=pokemon.base_experience}=e,{height:i=pokemon.height}=e;return s.$$set=n=>{"weight"in n&&t(0,a=n.weight),"baseXP"in n&&t(1,l=n.baseXP),"height"in n&&t(2,i=n.height)},[a,l,i]}class re extends z{constructor(e){super();H(this,e,ne,ie,O,{weight:0,baseXP:1,height:2})}}function K(s,e,t){const a=s.slice();return a[1]=e[t],a}function Q(s){let e,t,a,l=s[1].stat.name+"",i,n,o,u=s[1].base_stat+"",f,g,h,_,k;return{c(){e=d("li"),t=d("div"),a=d("h4"),i=$(l),n=p(),o=d("h4"),f=$(u),g=p(),h=d("progress"),k=p(),c(a,"class","capitalize"),c(o,"class","capitalize"),c(t,"class","flex flex-row gap-2"),c(h,"class","progress progress-primary bg-secondary"),c(h,"max","100"),h.value=_=s[1].base_stat,c(e,"class","")},m(v,w){X(v,e,w),r(e,t),r(t,a),r(a,i),r(t,n),r(t,o),r(o,f),r(e,g),r(e,h),r(e,k)},p(v,w){w&1&&l!==(l=v[1].stat.name+"")&&L(i,l),w&1&&u!==(u=v[1].base_stat+"")&&L(f,u),w&1&&_!==(_=v[1].base_stat)&&(h.value=_)},d(v){v&&T(e)}}}function oe(s){let e,t,a,l,i=s[0],n=[];for(let o=0;o<i.length;o+=1)n[o]=Q(K(s,i,o));return{c(){e=d("div"),t=d("h3"),t.textContent="Stats",a=p(),l=d("ul");for(let o=0;o<n.length;o+=1)n[o].c();c(t,"class","uppercase font-bold"),c(l,"class","grid grid-cols-2 gap-3"),c(e,"class","md:w-1/2")},m(o,u){X(o,e,u),r(e,t),r(e,a),r(e,l);for(let f=0;f<n.length;f+=1)n[f].m(l,null)},p(o,[u]){if(u&1){i=o[0];let f;for(f=0;f<i.length;f+=1){const g=K(o,i,f);n[f]?n[f].p(g,u):(n[f]=Q(g),n[f].c(),n[f].m(l,null))}for(;f<n.length;f+=1)n[f].d(1);n.length=i.length}},i:P,o:P,d(o){o&&T(e),R(n,o)}}}function ce(s,e,t){let{statuses:a}=e;return s.$$set=l=>{"statuses"in l&&t(0,a=l.statuses)},[a]}class de extends z{constructor(e){super();H(this,e,ce,oe,O,{statuses:0})}}function F(s){let e;switch(s){case"grass":e="green-500";break;case"fire":e="orange-500";break;case"flying":e="violet-300";break;case"dragon":e="indigo-700";break;case"fairy":e="rose-400";break;case"ice":e="cyan-200";break;case"normal":e="stone-500";break;case"fighting":e="red-500";break;case"eletric":e="yellow-400";break;case"dark":e="yellow-800";break;case"bug":e="lime-500";break;case"ghost":e="violet-600";break;case"ground":e="yellow-700";break;case"poison":e="purple-500";break;case"psychic":e="pink-500";break;case"rock":e="orange-400";break;case"steel":e="zync-400";break;case"water":e="blue-500";break;default:e="red-500";break}return e}function fe(s){let e,t,a,l;return{c(){e=d("figure"),t=d("img"),c(t,"width","475"),c(t,"height","475"),W(t,"width","475"),W(t,"height","475"),c(t,"class","filter drop-shadow-2xl"),Y(t.src,a=s[0])||c(t,"src",a),c(t,"alt",s[1]),c(e,"class",l="bg-gradient-to-r "+s[2]+" "+s[3])},m(i,n){X(i,e,n),r(e,t)},p(i,[n]){n&1&&!Y(t.src,a=i[0])&&c(t,"src",a),n&2&&c(t,"alt",i[1]),n&12&&l!==(l="bg-gradient-to-r "+i[2]+" "+i[3])&&c(e,"class",l)},i:P,o:P,d(i){i&&T(e)}}}function ue(s,e,t){let a,l,{sprite:i}=e,{altName:n}=e,{tipo:o}=e;return o.length==1?a=`from-${F(o[0])}`:(a=`from-${F(o[0])}`,l=`to-${F(o[1])}`,console.log(o)),s.$$set=u=>{"sprite"in u&&t(0,i=u.sprite),"altName"in u&&t(1,n=u.altName),"tipo"in u&&t(4,o=u.tipo)},[i,n,a,l,o]}class he extends z{constructor(e){super();H(this,e,ue,fe,O,{sprite:0,altName:1,tipo:4})}}function ge(s){let e,t,a,l,i,n=s[0].name+"",o,u,f,g,h,_,k,v,w,y;return t=new he({props:{tipo:s[1],altName:s[0].name,sprite:s[0].sprites.other["official-artwork"].front_default}}),h=new de({props:{statuses:s[0].stats}}),k=new re({props:{baseXP:s[0].base_experience,weight:s[0].weight,height:s[0].height}}),{c(){e=d("div"),E(t.$$.fragment),a=p(),l=d("div"),i=d("h3"),o=$(n),u=$(" : "),f=$(s[2]),g=p(),E(h.$$.fragment),_=p(),E(k.$$.fragment),c(i,"class","card-title uppercase font-bold tracking-widest"),c(l,"class","card-body"),c(e,"class","card md:card-side shadow-red-400 bg-base-200 shadow-2xl mb-32 md:mb-5")},m(b,m){X(b,e,m),I(t,e,null),r(e,a),r(e,l),r(l,i),r(i,o),r(i,u),r(i,f),r(l,g),I(h,l,null),r(l,_),I(k,l,null),y=!0},p(b,[m]){s=b;const N={};m&1&&(N.altName=s[0].name),m&1&&(N.sprite=s[0].sprites.other["official-artwork"].front_default),t.$set(N),(!y||m&1)&&n!==(n=s[0].name+"")&&L(o,n);const S={};m&1&&(S.statuses=s[0].stats),h.$set(S);const C={};m&1&&(C.baseXP=s[0].base_experience),m&1&&(C.weight=s[0].weight),m&1&&(C.height=s[0].height),k.$set(C)},i(b){y||(q(t.$$.fragment,b),q(h.$$.fragment,b),q(k.$$.fragment,b),V(()=>{w&&w.end(1),v=Z(e,J,{x:-400,duration:2e3,easing:G}),v.start()}),y=!0)},o(b){B(t.$$.fragment,b),B(h.$$.fragment,b),B(k.$$.fragment,b),v&&v.invalidate(),w=ee(e,J,{x:200,duration:2e3,easing:G}),y=!1},d(b){b&&T(e),M(t),M(h),M(k),b&&w&&w.end()}}}function me(s,e,t){let{pokemon:a}=e,l=a.types.map(n=>n.type.name),i=l.length==1?l[0]:`${l[0]}, ${l[1]}`;return s.$$set=n=>{"pokemon"in n&&t(0,a=n.pokemon)},[a,l,i]}class pe extends z{constructor(e){super();H(this,e,me,ge,O,{pokemon:0})}}function ke(s){let e,t,a,l,i,n,o,u,f,g=s[4]+"",h;return{c(){e=d("div"),t=d("div"),a=d("div"),a.innerHTML="<h1>Oh! No</h1>",l=p(),i=d("p"),i.textContent="You almost got him.",n=p(),o=d("br"),u=p(),f=d("p"),h=$(g),c(a,"class","card-title"),c(t,"class","card-body"),c(e,"class","card bg-red-500 shadow-2xl")},m(_,k){X(_,e,k),r(e,t),r(t,a),r(t,l),r(t,i),r(t,n),r(t,o),r(t,u),r(t,f),r(f,h)},p:P,i:P,o:P,d(_){_&&T(e)}}}function be(s){let e,t;return e=new pe({props:{pokemon:s[3]}}),{c(){E(e.$$.fragment)},m(a,l){I(e,a,l),t=!0},p:P,i(a){t||(q(e.$$.fragment,a),t=!0)},o(a){B(e.$$.fragment,a),t=!1},d(a){M(e,a)}}}function ve(s){let e;return{c(){e=d("div"),e.innerHTML=`<div class="card-body"><div class="card-title"><h1>Loading Pokemons</h1></div> 
        <p>Almost there...</p></div>`,c(e,"class","card bg-base-300 shadow-2xl")},m(t,a){X(t,e,a)},p:P,i:P,o:P,d(t){t&&T(e)}}}function _e(s){let e,t,a={ctx:s,current:null,token:null,hasCatch:!0,pending:ve,then:be,catch:ke,value:3,error:4,blocks:[,,,]};return te(s[0](),a),{c(){e=d("div"),a.block.c(),c(e,"class","m-5")},m(l,i){X(l,e,i),a.block.m(e,a.anchor=null),a.mount=()=>e,a.anchor=null,t=!0},p(l,[i]){s=l,ae(a,s,i)},i(l){t||(q(a.block),t=!0)},o(l){for(let i=0;i<3;i+=1){const n=a.blocks[i];B(n)}t=!1},d(l){l&&T(e),a.block.d(),a.token=null,a=null}}}function we(s,e,t){let{id:a}=e;async function l(){const i=`https://pokeapi.co/api/v2/pokemon/${a}`;return(await le.get(i)).data}return l(),se.title=`Pokedex - ${a}`,s.$$set=i=>{"id"in i&&t(1,a=i.id)},[l,a]}class Ce extends z{constructor(e){super();H(this,e,we,_e,O,{id:1})}}export{Ce as default};