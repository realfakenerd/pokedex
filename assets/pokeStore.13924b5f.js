import{L as n}from"./vendor.145d1034.js";import{d as r}from"./index.4872d49b.js";const i=n([]);let e=!1;const l=async()=>{if(e)return;const o="https://pokeapi.co/api/v2/pokemon?limit=150",a=(await(await r.get(o)).data).results.map((s,t)=>({name:s.name,id:t+1,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${t+1}.png`}));i.set(a),e=!0};export{l as f,i as p};
