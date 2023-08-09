globalThis.global = globalThis;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/ssr.js
function h() {
}
function E(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function m(t) {
  return t();
}
function $() {
  return /* @__PURE__ */ Object.create(null);
}
function b(t) {
  t.forEach(m);
}
function O(t, n) {
  return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function";
}
function R(t, ...n) {
  if (t == null) {
    for (const o2 of n)
      o2(void 0);
    return h;
  }
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function S(t) {
  return t ?? "";
}
function a(t) {
  i = t;
}
function l() {
  if (!i)
    throw new Error("Function called outside component initialization");
  return i;
}
function T(t, n) {
  return l().$$.context.set(t, n), n;
}
function A(t) {
  return l().$$.context.get(t);
}
function g(t) {
  return t?.length !== void 0 ? t : Array.from(t);
}
function d(t, n = false) {
  const e = String(t), o2 = n ? y : w;
  o2.lastIndex = 0;
  let u3 = "", r4 = 0;
  for (; o2.test(e); ) {
    const c2 = o2.lastIndex - 1, s2 = e[c2];
    u3 += e.substring(r4, c2) + (s2 === "&" ? "&amp;" : s2 === '"' ? "&quot;" : "&lt;"), r4 = c2 + 1;
  }
  return u3 + e.substring(r4);
}
function x(t) {
  return typeof t == "string" || t && typeof t == "object" ? d(t, true) : t;
}
function C(t, n) {
  t = g(t);
  let e = "";
  for (let o2 = 0; o2 < t.length; o2 += 1)
    e += n(t[o2], o2);
  return e;
}
function G(t, n) {
  if (!t || !t.$$render)
    throw n === "svelte:component" && (n += " this={...}"), new Error(`<${n}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${n}>.`);
  return t;
}
function I(t) {
  function n(e, o2, u3, r4, c2) {
    const s2 = i, p3 = { on_destroy: f, context: new Map(c2 || (s2 ? s2.$$.context : [])), on_mount: [], before_update: [], after_update: [], callbacks: $() };
    a({ $$: p3 });
    const _ = t(e, o2, u3, r4);
    return a(s2), _;
  }
  return { render: (e = {}, { $$slots: o2 = {}, context: u3 = /* @__PURE__ */ new Map() } = {}) => {
    f = [];
    const r4 = { title: "", head: "", css: /* @__PURE__ */ new Set() }, c2 = n(r4, e, {}, o2, u3);
    return b(f), { html: c2, css: { code: Array.from(r4.css).map((s2) => s2.code).join(`
`), map: null }, head: r4.title + r4.head };
  }, $$render: n };
}
function M(t, n, e) {
  if (n == null || e && !n)
    return "";
  const o2 = e && n === true ? "" : `="${d(n, true)}"`;
  return ` ${t}${o2}`;
}
function j(t) {
  return Object.keys(t).filter((n) => t[n]).map((n) => `${n}: ${x(t[n])};`).join(" ");
}
function N(t) {
  const n = j(t);
  return n ? ` style="${n}"` : "";
}
var i, y, w, q, f;
var init_ssr = __esm({
  ".svelte-kit/output/server/chunks/ssr.js"() {
    y = /[&"]/g;
    w = /[&<]/g;
    q = { $$render: () => "" };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => b3
});
var o, c, r, i2, f2, v, b3;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_ssr();
    o = "/_app/immutable/assets/pokeball.1e97330e.svg";
    c = "/_app/immutable/assets/PokePin.26d0fc8e.svg";
    r = "/_app/immutable/assets/PokeHeart.fc89398b.svg";
    i2 = "/_app/immutable/assets/Perfil.fa1b9cbe.svg";
    f2 = { code: "nav.svelte-9icey0{@apply bg-surface-variant text-label-large text-on-surface-variant flex min-h-[72px] w-full items-center justify-between border-t px-8 py-0;;border-color:#e6e6e6}a.svelte-9icey0{@apply flex flex-col place-items-center;;display:flex;gap:-2px}", map: null };
    v = I((a3, l2, p3, s2) => (a3.css.add(f2), `<nav class="svelte-9icey0" data-svelte-h="svelte-2wdxjq"><a href="/" class="svelte-9icey0"><img${M("src", o, 0)} alt="pokeball icon"> <span>Poked\xE9x</span></a> <a href="pokepn" class="svelte-9icey0"><img${M("src", c, 0)} alt="pokepin"> <span>Regions</span></a> <a href="pokepn" class="svelte-9icey0"><img${M("src", r, 0)} alt="pokeheart"> <span>Favorites</span></a> <a href="pokepn" class="svelte-9icey0"><img${M("src", i2, 0)} alt="perfil"> <span>Profile</span></a> </nav>`));
    b3 = I((a3, l2, p3, s2) => `<main class="min-h-[100dvh]">${s2.default ? s2.default({}) : ""}</main> <footer class="fixed bottom-0 left-0 z-50 w-full">${G(v, "Navbar").$$render(a3, {}, {}, {})}</footer>`);
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ?? (component_cache = (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default);
    imports = ["_app/immutable/nodes/0.1a7208d7.js", "_app/immutable/chunks/scheduler.9c5f2736.js", "_app/immutable/chunks/index.bc42b1b4.js"];
    stylesheets = ["_app/immutable/assets/0.83e21d61.css"];
    fonts = ["_app/immutable/assets/poppins-devanagari-400-normal.478b3ab7.woff2", "_app/immutable/assets/poppins-devanagari-400-normal.aa135e25.woff", "_app/immutable/assets/poppins-latin-ext-400-normal.cb8bdeab.woff2", "_app/immutable/assets/poppins-latin-ext-400-normal.8090b590.woff", "_app/immutable/assets/poppins-latin-400-normal.7d93459d.woff2", "_app/immutable/assets/poppins-latin-400-normal.2db0a254.woff", "_app/immutable/assets/poppins-devanagari-500-normal.721c714f.woff2", "_app/immutable/assets/poppins-devanagari-500-normal.bcd6da7c.woff", "_app/immutable/assets/poppins-latin-ext-500-normal.5f9d6298.woff2", "_app/immutable/assets/poppins-latin-ext-500-normal.bc24119c.woff", "_app/immutable/assets/poppins-latin-500-normal.cd36de20.woff2", "_app/immutable/assets/poppins-latin-500-normal.6f35fc59.woff"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => d2
});
var u2, p2, d2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_ssr();
    u2 = () => {
      const s2 = A("__svelte__");
      return { page: { subscribe: s2.page.subscribe }, navigating: { subscribe: s2.navigating.subscribe }, updated: s2.updated };
    };
    p2 = { subscribe(s2) {
      return u2().page.subscribe(s2);
    } };
    d2 = I((s2, a3, g2, i3) => {
      let e, r4;
      return r4 = R(p2, (o2) => e = o2), r4(), `<h1>${d(e.status)}</h1> <p>${d(e.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ?? (component_cache2 = (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default);
    imports2 = ["_app/immutable/nodes/1.e5e2ff07.js", "_app/immutable/chunks/scheduler.9c5f2736.js", "_app/immutable/chunks/index.bc42b1b4.js", "_app/immutable/chunks/singletons.dcbdcdf6.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => r2
});
var r2;
var init_page_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_page.ts.js"() {
    r2 = async ({ fetch: s2 }) => {
      const o2 = await (await s2("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")).json();
      return o2.results = o2.results.map(async (t) => await (await s2(t.url)).json()), { pokemones: o2 };
    };
  }
});

// .svelte-kit/output/server/chunks/Icon.js
var r3, w2;
var init_Icon = __esm({
  ".svelte-kit/output/server/chunks/Icon.js"() {
    init_ssr();
    r3 = { code: "svg.svelte-1t7dlvs{--fallback:rgb(var(--bg-color));fill:var(--fill-color, var(--fallback))}", map: null };
    w2 = I((h4, l2, t, m2) => {
      let { name: c2 = "" } = l2, { fill: a3 = "" } = l2, { width: o2 = null } = l2, { height: v2 = null } = l2, e = { box: { w: 0, h: 0 }, svg: "" };
      return l2.name === void 0 && t.name && c2 !== void 0 && t.name(c2), l2.fill === void 0 && t.fill && a3 !== void 0 && t.fill(a3), l2.width === void 0 && t.width && o2 !== void 0 && t.width(o2), l2.height === void 0 && t.height && v2 !== void 0 && t.height(v2), h4.css.add(r3), `<svg class="${d(S(l2.class), true) + " svelte-1t7dlvs"}"${M("height", v2 ?? e?.box.h, 0)}${M("width", o2 ?? e?.box.w, 0)} viewBox="${"0 0 " + d(e?.box.w, true) + " " + d(e?.box.h, true)}"${N({ "--fill-color": a3 })}><!-- HTML_TAG_START -->${e?.svg}<!-- HTML_TAG_END --></svg>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => j2
});
function a2(t, s2 = true, l2 = false) {
  return s2 ? l2 ? `var(--color-${t}-hover)` : `var(--color-${t})` : l2 ? `var(--color-on-${t}-hover)` : `var(--color-on-${t})`;
}
var h3, k, w3, j2;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_ssr();
    init_Icon();
    h3 = { code: ".poke-container.svelte-12bm907.svelte-12bm907{@apply bg-surface-variant relative inline-flex min-h-[118px] min-w-[403px] rounded-2xl;}.image-section.svelte-12bm907.svelte-12bm907{background-color:rgb(var(--bg-color));color:rgb(var(--on-color));@apply relative flex min-h-[102px] min-w-[126px] items-center justify-center rounded-xl transition-colors;}.image-section.svelte-12bm907>div.svelte-12bm907{@apply absolute inset-0 z-0 flex h-full w-full items-center justify-center;}.image-section.svelte-12bm907>figure.svelte-12bm907{@apply z-10 max-h-[94px] max-w-[94px];}.image-section.svelte-12bm907 img.svelte-12bm907{image-rendering:pixelated}.info-section.svelte-12bm907.svelte-12bm907{@apply inline-flex w-full flex-col items-start justify-center gap-1 p-4 pl-6;}.pokepill.svelte-12bm907.svelte-12bm907{background-color:rgb(var(--bg-color));color:rgb(var(--on-color));@apply inline-flex w-1/2 rounded-full px-1.5 py-1;}.pokepill.svelte-12bm907>div.svelte-12bm907{@apply inline-flex items-center gap-1.5;}.pokepill.svelte-12bm907 figure.svelte-12bm907{@apply bg-inverse-surface inline-flex rounded-full p-1;}.pokepill.svelte-12bm907 span.svelte-12bm907{@apply text-label-small capitalize;}", map: null };
    k = I((t, s2, l2, f4) => {
      let { id: o2 = 0 } = s2, { pokemontypes: e } = s2, { pokename: r4 } = s2, { sprites: n } = s2;
      return s2.id === void 0 && l2.id && o2 !== void 0 && l2.id(o2), s2.pokemontypes === void 0 && l2.pokemontypes && e !== void 0 && l2.pokemontypes(e), s2.pokename === void 0 && l2.pokename && r4 !== void 0 && l2.pokename(r4), s2.sprites === void 0 && l2.sprites && n !== void 0 && l2.sprites(n), t.css.add(h3), `<section class="poke-container group svelte-12bm907"${N({ "--bg-color": a2(e[0].type.name), "--bg-color-hover": a2(e[0].type.name, true, true), "--on-color": a2(e[0].type.name, false), "--on-color-hover": a2(e[0].type.name, false, true) })}><section class="info-section svelte-12bm907"><hgroup class="text-on-surface-variant flex flex-col items-start justify-start transition-colors group-hover:text-[rgb(var(--bg-color))]"><a${M("href", `/pokemon/${r4}`, 0)} class="text-title-small group-hover:underline">N\xBA ${d(o2 < 100 ? o2 < 10 ? `00${o2}` : `0${o2}` : o2)}</a> <h1 class="text-title-large capitalize">${d(r4)}</h1></hgroup> <div class="inline-flex w-full items-start justify-start gap-1"><section class="pokepill svelte-12bm907"><div class="svelte-12bm907"><figure class="svelte-12bm907">${G(w2, "Icon").$$render(t, { name: e[0].type.name }, {}, {})}</figure> <span class="svelte-12bm907">${d(e[0].type.name)}</span></div></section> ${e.length > 1 ? `<section class="pokepill svelte-12bm907"${N({ "--bg-color": a2(e[1].type.name, true, false), "--bg-color-hover": a2(e[1].type.name, true, true), "--on-color": a2(e[1].type.name, false, false), "--on-color-hover": a2(e[1].type.name, false, true) })}><div class="svelte-12bm907"><figure class="svelte-12bm907">${G(w2, "Icon").$$render(t, { name: e[1].type.name }, {}, {})}</figure> <span class="svelte-12bm907">${d(e[1].type.name)}</span></div></section>` : ""}</div></section> <section class="image-section svelte-12bm907"><div class="svelte-12bm907">${G(w2, "Icon").$$render(t, { fill: "#ccc", class: "h-[94px] w-[94px]", name: e[0].type.name }, {}, {})}</div> <figure class="svelte-12bm907"><img width="256" height="256" loading="lazy"${M("src", n, 0)}${M("alt", r4, 0)} class="svelte-12bm907"></figure></section> <button class="bg-surface/30 ring-on-surface absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full ring-2 backdrop-blur-sm" data-svelte-h="svelte-1y8p4a1"><svg width="16" height="16" viewBox="0 0 16 16" class="stroke-on-surface fill-none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M13.8931 3.07309C13.5526 2.73242 13.1483 2.46218 12.7033 2.27781C12.2584 2.09343 11.7814 1.99854 11.2998 1.99854C10.8181 1.99854 10.3412 2.09343 9.89618 2.27781C9.45121 2.46218 9.04692 2.73242 8.70642 3.07309L7.99975 3.77975L7.29309 3.07309C6.60529 2.38529 5.67244 1.99889 4.69975 1.99889C3.72706 1.99889 2.79422 2.38529 2.10642 3.07309C1.41863 3.76088 1.03223 4.69373 1.03223 5.66642C1.03223 6.63911 1.41863 7.57196 2.10642 8.25975L2.81309 8.96642L7.99975 14.1531L13.1864 8.96642L13.8931 8.25975C14.2337 7.91925 14.504 7.51496 14.6884 7.06999C14.8727 6.62502 14.9676 6.14808 14.9676 5.66642C14.9676 5.18476 14.8727 4.70782 14.6884 4.26285C14.504 3.81788 14.2337 3.41359 13.8931 3.07309V3.07309Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button> </section>`;
    });
    w3 = I((t, s2, l2, f4) => '<div class="border-outline inline-flex h-20 w-full min-w-[360px] items-center justify-center border-b px-4" data-svelte-h="svelte-1s7pk0d"><div class="ring-primary-container h-12 w-full min-w-[328px] rounded-3xl px-4 py-3.5 ring-2"><div class="inline-flex w-full items-center justify-start"><input placeholder="Procurar P\xF3kemon..." class="placeholder:text-on-surface w-full bg-transparent outline-none"></div></div></div>');
    j2 = I((t, s2, l2, f4) => {
      let { data: o2 } = s2;
      const { pokemones: e } = o2;
      return s2.data === void 0 && l2.data && o2 !== void 0 && l2.data(o2), `${t.head += `<!-- HEAD_svelte-402a3u_START --><link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">${t.title = "<title>Pok\xE9dex</title>", ""}<!-- HEAD_svelte-402a3u_END -->`, ""} ${G(w3, "SearchBar").$$render(t, {}, {}, {})} <section class="my-2 flex flex-col gap-2 px-2">${C(e.results, (r4, n) => `${function(p3) {
        return E(p3) ? (p3.then(null, h), ' <div class="rounded-xl animate-pulse bg-surface-variant min-w-[403px] min-h-[118px]"></div> ') : function(m2) {
          return ` ${G(k, "PokeCard").$$render(t, { pokename: m2.name, pokemontypes: m2.types, sprites: m2.sprites.front_default, id: n + 1 }, {}, {})} `;
        }(p3);
      }(r4)}`)}</section>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3,
  universal: () => page_ts_exports,
  universal_id: () => universal_id
});
var index3, component_cache3, component3, universal_id, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page_ts();
    index3 = 2;
    component3 = async () => component_cache3 ?? (component_cache3 = (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default);
    universal_id = "src/routes/+page.ts";
    imports3 = ["_app/immutable/nodes/2.b9af31a6.js", "_app/immutable/chunks/scheduler.9c5f2736.js", "_app/immutable/chunks/index.bc42b1b4.js", "_app/immutable/chunks/Icon.9c6ab8c0.js", "_app/immutable/chunks/preload-helper.a4192956.js"];
    stylesheets3 = ["_app/immutable/assets/2.9073298b.css", "_app/immutable/assets/Icon.9599749a.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/pokemon/_id_/_page.ts.js
var page_ts_exports2 = {};
__export(page_ts_exports2, {
  load: () => s
});
var s;
var init_page_ts2 = __esm({
  ".svelte-kit/output/server/entries/pages/pokemon/_id_/_page.ts.js"() {
    s = async ({ params: a3, fetch: o2 }) => ({ pokemon: await (await o2(`https://pokeapi.co/api/v2/pokemon/${a3.id}`)).json() });
  }
});

// .svelte-kit/output/server/entries/pages/pokemon/_id_/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => z3
});
var f3, z3;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/pokemon/_id_/_page.svelte.js"() {
    init_ssr();
    init_Icon();
    f3 = { code: "header.svelte-mz29m9.svelte-mz29m9{@apply relative flex min-h-[308px] w-full flex-col items-center justify-between overflow-hidden;}header.svelte-mz29m9 img.svelte-mz29m9{image-rendering:pixelated;image-resolution:from-image 300dpi}.header-background.svelte-mz29m9.svelte-mz29m9{background-color:rgb(var(--bg-color));color:rgb(var(--on-color));@apply absolute bottom-[10%] -z-20 h-[500px] w-[500px] rounded-full;}.header-background.svelte-mz29m9 div.svelte-mz29m9{@apply absolute bottom-[5%] left-1/2 -z-10 -translate-x-1/2 transform;}.buttons-section.svelte-mz29m9.svelte-mz29m9{@apply inline-flex w-full items-center justify-between pl-4 pr-8 pt-5;}", map: null };
    z3 = I((s2, n, i3, w4) => {
      let { data: l2 } = n;
      const { pokemon: e } = l2, t = e.id, c2 = e.sprites.versions?.["generation-vii"].icons.front_default;
      function r4(d3 = true, m2 = false, a3 = 0) {
        return d3 ? m2 ? `var(--color-${e.types[a3].type.name}-hover)` : `var(--color-${e.types[a3].type.name})` : m2 ? `var(--color-on-${e.types[a3].type.name}-hover)` : `var(--color-on-${e.types[a3].type.name})`;
      }
      return n.data === void 0 && i3.data && l2 !== void 0 && i3.data(l2), s2.css.add(f3), `${s2.head += `<!-- HEAD_svelte-ul2p60_START -->${s2.title = `<title>${d(e.name.toUpperCase())}</title>`, ""}<link rel="shortcut icon"${M("href", c2, 0)}><!-- HEAD_svelte-ul2p60_END -->`, ""} <header class="svelte-mz29m9"${N({ "--bg-color": r4(), "--bg-color-hover": r4(true, true), "--on-color": r4(false), "--on-color-hover": r4(false, true) })}><section class="buttons-section svelte-mz29m9" data-svelte-h="svelte-147d45x"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M22.168 12.6665L15.8346 18.9998L22.168 25.3332" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M24.3151 5.37802C23.7192 4.78186 23.0117 4.30894 22.233 3.98629C21.4543 3.66363 20.6197 3.49756 19.7768 3.49756C18.9339 3.49756 18.0992 3.66363 17.3205 3.98629C16.5418 4.30894 15.8343 4.78186 15.2384 5.37802L14.0018 6.61469L12.7651 5.37802C11.5615 4.17438 9.92897 3.49818 8.22677 3.49818C6.52456 3.49818 4.89207 4.17438 3.68843 5.37802C2.48479 6.58166 1.80859 8.21415 1.80859 9.91636C1.80859 11.6186 2.48479 13.251 3.68843 14.4547L4.9251 15.6914L14.0018 24.768L23.0784 15.6914L24.3151 14.4547C24.9113 13.8588 25.3842 13.1513 25.7068 12.3726C26.0295 11.5939 26.1956 10.7593 26.1956 9.91636C26.1956 9.07345 26.0295 8.23881 25.7068 7.46011C25.3842 6.68141 24.9113 5.9739 24.3151 5.37802V5.37802Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></section> <section class="header-background svelte-mz29m9"><div class="svelte-mz29m9">${G(w2, "Icon").$$render(s2, { width: 204, height: 204, fill: "#ccc", name: e.types[0].type.name }, {}, {})}</div></section> <figure><img width="142" height="153" src="${"https://projectpokemon.org/images/normal-sprite/" + d(e.name, true) + ".gif"}" alt="${d(e.name, true) + " gif"}" class="svelte-mz29m9"></figure></header> <section><hgroup><h1 class="text-headline-large capitalize">${d(e.name)}</h1> <h2>N\xBA ${d(t < 100 ? t < 10 ? `00${t}` : `0${t}` : t)}</h2></hgroup> </section>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4,
  universal: () => page_ts_exports2,
  universal_id: () => universal_id2
});
var index4, component_cache4, component4, universal_id2, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page_ts2();
    index4 = 3;
    component4 = async () => component_cache4 ?? (component_cache4 = (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default);
    universal_id2 = "src/routes/pokemon/[id]/+page.ts";
    imports4 = ["_app/immutable/nodes/3.3a7c2fd1.js", "_app/immutable/chunks/scheduler.9c5f2736.js", "_app/immutable/chunks/index.bc42b1b4.js", "_app/immutable/chunks/Icon.9c6ab8c0.js", "_app/immutable/chunks/preload-helper.a4192956.js"];
    stylesheets4 = ["_app/immutable/assets/3.8cfbe3be.css", "_app/immutable/assets/Icon.9599749a.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_ssr();
var p = "";
var u = p;
var h2 = { base: p, assets: u };
function C2() {
  p = h2.base, u = h2.assets;
}
var x2 = {};
function T2(n) {
}
function U(n) {
  x2 = n;
}
var b2 = I((n, t, e, g2) => {
  let { stores: o2 } = t, { page: d3 } = t, { constructors: s2 } = t, { components: a3 = [] } = t, { form: r4 } = t, { data_0: c2 = null } = t, { data_1: m2 = null } = t;
  T("__svelte__", o2), o2.page.notify, t.stores === void 0 && e.stores && o2 !== void 0 && e.stores(o2), t.page === void 0 && e.page && d3 !== void 0 && e.page(d3), t.constructors === void 0 && e.constructors && s2 !== void 0 && e.constructors(s2), t.components === void 0 && e.components && a3 !== void 0 && e.components(a3), t.form === void 0 && e.form && r4 !== void 0 && e.form(r4), t.data_0 === void 0 && e.data_0 && c2 !== void 0 && e.data_0(c2), t.data_1 === void 0 && e.data_1 && m2 !== void 0 && e.data_1(m2);
  let i3, _;
  do
    i3 = true, o2.page.set(d3), _ = `  ${s2[1] ? `${G(s2[0] || q, "svelte:component").$$render(n, { data: c2, this: a3[0] }, { this: (l2) => {
      a3[0] = l2, i3 = false;
    } }, { default: () => `${G(s2[1] || q, "svelte:component").$$render(n, { data: m2, form: r4, this: a3[1] }, { this: (l2) => {
      a3[1] = l2, i3 = false;
    } }, {})}` })}` : `${G(s2[0] || q, "svelte:component").$$render(n, { data: c2, form: r4, this: a3[0] }, { this: (l2) => {
      a3[0] = l2, i3 = false;
    } }, {})}`} `;
  while (!i3);
  return _;
});
var z = { app_template_contains_nonce: false, csp: { mode: "auto", directives: { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, reportOnly: { "upgrade-insecure-requests": false, "block-all-mixed-content": false } }, csrf_check_origin: true, track_server_fetches: false, embedded: false, env_public_prefix: "PUBLIC_", env_private_prefix: "", hooks: null, preload_strategy: "modulepreload", root: b2, service_worker: false, templates: { app: ({ head: n, body: t, assets: e, nonce: g2, env: o2 }) => `<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1" />
		<link rel="apple-touch-icon" sizes="180x180" href="` + e + `/apple-touch-icon.png" />
		<link rel="mask-icon" href="` + e + `/safari-pinned-tab.svg" color="#000" />
		<meta name="msapplication-TileColor" content="#ff1616" />
		<meta name="msapplication-TileImage" content="` + e + `/mstile-144x144.png" />
		<meta name="theme-color" content="#0008ff" />
		<link type="application/manifest+json" rel="manifest" href="` + e + `/manifest.json" />

		` + n + `
	</head>

	<body class="bg-background text-on-background dark" data-sveltekit-preload-data="hover">
		<div id="svelte" style="display: contents">` + t + `</div>
	</body>
</html>
`, error: ({ status: n, message: t }) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>` + t + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + n + `</span>
			<div class="message">
				<h1>` + t + `</h1>
			</div>
		</div>
	</body>
</html>
` }, version_hash: "x0bh1w" };
function B() {
  return {};
}

// .svelte-kit/output/server/index.js
init_ssr();
var Dt = "/_svelte_kit_assets";
var Ve = /* @__PURE__ */ new Set(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"]);
var zt = /* @__PURE__ */ new Set(["GET", "POST", "HEAD"]);
function $e(e, t) {
  const r4 = [];
  e.split(",").forEach((a3, i3) => {
    const c2 = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(a3);
    if (c2) {
      const [, d3, o2, u3 = "1"] = c2;
      r4.push({ type: d3, subtype: o2, q: +u3, i: i3 });
    }
  }), r4.sort((a3, i3) => a3.q !== i3.q ? i3.q - a3.q : a3.subtype === "*" != (i3.subtype === "*") ? a3.subtype === "*" ? 1 : -1 : a3.type === "*" != (i3.type === "*") ? a3.type === "*" ? 1 : -1 : a3.i - i3.i);
  let n, s2 = 1 / 0;
  for (const a3 of t) {
    const [i3, c2] = a3.split("/"), d3 = r4.findIndex((o2) => (o2.type === i3 || o2.type === "*") && (o2.subtype === c2 || o2.subtype === "*"));
    d3 !== -1 && d3 < s2 && (n = a3, s2 = d3);
  }
  return n;
}
function Ht(e, ...t) {
  const r4 = e.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return t.includes(r4.toLowerCase());
}
function Be(e) {
  return Ht(e, "application/x-www-form-urlencoded", "multipart/form-data", "text/plain");
}
var I2 = class {
  constructor(t, r4) {
    this.status = t, typeof r4 == "string" ? this.body = { message: r4 } : r4 ? this.body = r4 : this.body = { message: `Error: ${t}` };
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var D = class {
  constructor(t, r4) {
    this.status = t, this.location = r4;
  }
};
var ve = class {
  constructor(t, r4) {
    this.status = t, this.data = r4;
  }
};
function Ut(e, t, r4) {
  const n = {}, s2 = e.slice(1);
  let a3 = 0;
  for (let i3 = 0; i3 < t.length; i3 += 1) {
    const c2 = t[i3];
    let d3 = s2[i3 - a3];
    if (c2.chained && c2.rest && a3 && (d3 = s2.slice(i3 - a3, i3 + 1).filter((o2) => o2).join("/"), a3 = 0), d3 === void 0) {
      c2.rest && (n[c2.name] = "");
      continue;
    }
    if (!c2.matcher || r4[c2.matcher](d3)) {
      n[c2.name] = d3;
      const o2 = t[i3 + 1], u3 = s2[i3 + 1];
      o2 && !o2.rest && o2.optional && u3 && c2.chained && (a3 = 0);
      continue;
    }
    if (c2.optional && c2.chained) {
      a3++;
      continue;
    }
    return;
  }
  if (!a3)
    return n;
}
function ke(e, t) {
  if (isNaN(e) || e < 400 || e > 599)
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${e} is invalid`);
  return new I2(e, t);
}
function Ee(e, t) {
  const r4 = JSON.stringify(e), n = new Headers(t?.headers);
  return n.has("content-length") || n.set("content-length", Ze.encode(r4).byteLength.toString()), n.has("content-type") || n.set("content-type", "application/json"), new Response(r4, { ...t, headers: n });
}
var Ze = new TextEncoder();
function A2(e, t) {
  const r4 = new Headers(t?.headers);
  if (!r4.has("content-length")) {
    const n = Ze.encode(e);
    return r4.set("content-length", n.byteLength.toString()), new Response(n, { ...t, headers: r4 });
  }
  return new Response(e, { ...t, headers: r4 });
}
function Lt(e) {
  return e instanceof Error || e && e.name && e.message ? e : new Error(JSON.stringify(e));
}
function Xe(e, t) {
  return A2(`${t} method not allowed`, { status: 405, headers: { allow: Mt(e).join(", ") } });
}
function Mt(e) {
  const t = Array.from(Ve).filter((r4) => r4 in e);
  return ("GET" in e || "HEAD" in e) && t.push("HEAD"), t;
}
function je(e, t, r4) {
  let n = e.templates.error({ status: t, message: r4 });
  return A2(n, { headers: { "content-type": "text/html; charset=utf-8" }, status: t });
}
async function Pe(e, t, r4) {
  r4 = r4 instanceof I2 ? r4 : Lt(r4);
  const n = r4 instanceof I2 ? r4.status : 500, s2 = await P(e, t, r4), a3 = $e(e.request.headers.get("accept") || "text/html", ["application/json", "text/html"]);
  return e.isDataRequest || a3 === "application/json" ? Ee(s2, { status: n }) : je(t, n, s2.message);
}
async function P(e, t, r4) {
  return r4 instanceof I2 ? r4.body : await t.hooks.handleError({ error: r4, event: e }) ?? { message: e.route.id != null ? "Internal Error" : "Not Found" };
}
function se(e, t) {
  return new Response(void 0, { status: e, headers: { location: t } });
}
function Ye(e, t) {
  return t.path ? `Data returned from \`load\` while rendering ${e.route.id} is not serializable: ${t.message} (data${t.path})` : t.path === "" ? `Data returned from \`load\` while rendering ${e.route.id} is not a plain object` : t.message;
}
function Ke(e) {
  const t = [];
  return e.uses && e.uses.dependencies.size > 0 && t.push(`"dependencies":${JSON.stringify(Array.from(e.uses.dependencies))}`), e.uses && e.uses.params.size > 0 && t.push(`"params":${JSON.stringify(Array.from(e.uses.params))}`), e.uses?.parent && t.push('"parent":1'), e.uses?.route && t.push('"route":1'), e.uses?.url && t.push('"url":1'), `"uses":{${t.join(",")}}`;
}
async function Wt(e, t, r4) {
  const n = e.request.method;
  let s2 = t[n];
  if (!s2 && n === "HEAD" && (s2 = t.GET), !s2)
    return Xe(t, n);
  const a3 = t.prerender ?? r4.prerender_default;
  if (a3 && (t.POST || t.PATCH || t.PUT || t.DELETE))
    throw new Error("Cannot prerender endpoints that have mutative methods");
  if (r4.prerendering && !a3) {
    if (r4.depth > 0)
      throw new Error(`${e.route.id} is not prerenderable`);
    return new Response(void 0, { status: 204 });
  }
  try {
    let i3 = await s2(e);
    if (!(i3 instanceof Response))
      throw new Error(`Invalid response from route ${e.url.pathname}: handler should return a Response object`);
    return r4.prerendering && (i3 = new Response(i3.body, { status: i3.status, statusText: i3.statusText, headers: new Headers(i3.headers) }), i3.headers.set("x-sveltekit-prerender", String(a3))), i3;
  } catch (i3) {
    if (i3 instanceof D)
      return new Response(void 0, { status: i3.status, headers: { location: i3.location } });
    throw i3;
  }
}
function Jt(e) {
  const { method: t, headers: r4 } = e.request;
  if (Ve.has(t) && !zt.has(t))
    return true;
  if (t === "POST" && r4.get("x-sveltekit-action") === "true")
    return false;
  const n = e.request.headers.get("accept") ?? "*/*";
  return $e(n, ["*", "text/html"]) !== "text/html";
}
function Ce(e) {
  return e.filter((t) => t != null);
}
function Se(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e;
}
function Ft(e) {
  return e.split("%25").map(decodeURI).join("%25");
}
function Gt(e) {
  for (const t in e)
    e[t] = decodeURIComponent(e[t]);
  return e;
}
var Vt = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function Bt(e, t) {
  const r4 = new URL(e);
  for (const n of Vt)
    Object.defineProperty(r4, n, { get() {
      return t(), e[n];
    }, enumerable: true, configurable: true });
  return r4[Symbol.for("nodejs.util.inspect.custom")] = (n, s2, a3) => a3(e, s2), Zt(r4), r4;
}
function Zt(e) {
  Object.defineProperty(e, "hash", { get() {
    throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead");
  } });
}
function Qe(e) {
  for (const t of ["search", "searchParams"])
    Object.defineProperty(e, t, { get() {
      throw new Error(`Cannot access url.${t} on a page with prerendering enabled`);
    } });
}
var xe = "/__data.json";
function Xt(e) {
  return e.endsWith(xe);
}
function Yt(e) {
  return e.replace(/\/$/, "") + xe;
}
function Ne(e) {
  return e.slice(0, -xe.length);
}
var Kt = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
var F = class extends Error {
  constructor(t, r4) {
    super(t), this.name = "DevalueError", this.path = r4.join("");
  }
};
function W(e) {
  return Object(e) !== e;
}
var Qt = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function et(e) {
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Qt;
}
function re(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function er(e) {
  switch (e) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return e < " " ? `\\u${e.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function z2(e) {
  let t = "", r4 = 0;
  const n = e.length;
  for (let s2 = 0; s2 < n; s2 += 1) {
    const a3 = e[s2], i3 = er(a3);
    i3 && (t += e.slice(r4, s2) + i3, r4 = s2 + 1);
  }
  return `"${r4 === 0 ? e : t + e.slice(r4)}"`;
}
var le = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var tr = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var rr = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function G2(e, t) {
  const r4 = /* @__PURE__ */ new Map(), n = [], s2 = /* @__PURE__ */ new Map();
  function a3(o2) {
    if (typeof o2 == "function")
      throw new F("Cannot stringify a function", n);
    if (!W(o2)) {
      if (r4.has(o2)) {
        r4.set(o2, r4.get(o2) + 1);
        return;
      }
      if (r4.set(o2, 1), t) {
        const l2 = t(o2);
        if (typeof l2 == "string") {
          s2.set(o2, l2);
          return;
        }
      }
      switch (re(o2)) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          o2.forEach((l2, _) => {
            n.push(`[${_}]`), a3(l2), n.pop();
          });
          break;
        case "Set":
          Array.from(o2).forEach(a3);
          break;
        case "Map":
          for (const [l2, _] of o2)
            n.push(`.get(${W(l2) ? fe(l2) : "..."})`), a3(_), n.pop();
          break;
        default:
          if (!et(o2))
            throw new F("Cannot stringify arbitrary non-POJOs", n);
          if (Object.getOwnPropertySymbols(o2).length > 0)
            throw new F("Cannot stringify POJOs with symbolic keys", n);
          for (const l2 in o2)
            n.push(`.${l2}`), a3(o2[l2]), n.pop();
      }
    }
  }
  a3(e);
  const i3 = /* @__PURE__ */ new Map();
  Array.from(r4).filter((o2) => o2[1] > 1).sort((o2, u3) => u3[1] - o2[1]).forEach((o2, u3) => {
    i3.set(o2[0], nr(u3));
  });
  function c2(o2) {
    if (i3.has(o2))
      return i3.get(o2);
    if (W(o2))
      return fe(o2);
    if (s2.has(o2))
      return s2.get(o2);
    const u3 = re(o2);
    switch (u3) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${c2(o2.valueOf())})`;
      case "RegExp":
        return `new RegExp(${z2(o2.source)}, "${o2.flags}")`;
      case "Date":
        return `new Date(${o2.getTime()})`;
      case "Array":
        const l2 = o2.map((p3, h4) => h4 in o2 ? c2(p3) : ""), _ = o2.length === 0 || o2.length - 1 in o2 ? "" : ",";
        return `[${l2.join(",")}${_}]`;
      case "Set":
      case "Map":
        return `new ${u3}([${Array.from(o2).map(c2).join(",")}])`;
      default:
        const f4 = `{${Object.keys(o2).map((p3) => `${or(p3)}:${c2(o2[p3])}`).join(",")}}`;
        return Object.getPrototypeOf(o2) === null ? Object.keys(o2).length > 0 ? `Object.assign(Object.create(null),${f4})` : "Object.create(null)" : f4;
    }
  }
  const d3 = c2(e);
  if (i3.size) {
    const o2 = [], u3 = [], l2 = [];
    return i3.forEach((_, f4) => {
      if (o2.push(_), s2.has(f4)) {
        l2.push(s2.get(f4));
        return;
      }
      if (W(f4)) {
        l2.push(fe(f4));
        return;
      }
      switch (re(f4)) {
        case "Number":
        case "String":
        case "Boolean":
          l2.push(`Object(${c2(f4.valueOf())})`);
          break;
        case "RegExp":
          l2.push(f4.toString());
          break;
        case "Date":
          l2.push(`new Date(${f4.getTime()})`);
          break;
        case "Array":
          l2.push(`Array(${f4.length})`), f4.forEach((p3, h4) => {
            u3.push(`${_}[${h4}]=${c2(p3)}`);
          });
          break;
        case "Set":
          l2.push("new Set"), u3.push(`${_}.${Array.from(f4).map((p3) => `add(${c2(p3)})`).join(".")}`);
          break;
        case "Map":
          l2.push("new Map"), u3.push(`${_}.${Array.from(f4).map(([p3, h4]) => `set(${c2(p3)}, ${c2(h4)})`).join(".")}`);
          break;
        default:
          l2.push(Object.getPrototypeOf(f4) === null ? "Object.create(null)" : "{}"), Object.keys(f4).forEach((p3) => {
            u3.push(`${_}${ar(p3)}=${c2(f4[p3])}`);
          });
      }
    }), u3.push(`return ${d3}`), `(function(${o2.join(",")}){${u3.join(";")}}(${l2.join(",")}))`;
  } else
    return d3;
}
function nr(e) {
  let t = "";
  do
    t = le[e % le.length] + t, e = ~~(e / le.length) - 1;
  while (e >= 0);
  return rr.test(t) ? `${t}0` : t;
}
function sr(e) {
  return Kt[e] || e;
}
function tt(e) {
  return e.replace(tr, sr);
}
function or(e) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e) ? e : tt(JSON.stringify(e));
}
function ar(e) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e) ? `.${e}` : `[${tt(JSON.stringify(e))}]`;
}
function fe(e) {
  if (typeof e == "string")
    return z2(e);
  if (e === void 0)
    return "void 0";
  if (e === 0 && 1 / e < 0)
    return "-0";
  const t = String(e);
  return typeof e == "number" ? t.replace(/^(-)?0\./, "$1.") : typeof e == "bigint" ? e + "n" : t;
}
var rt = -1;
var ir = -2;
var cr = -3;
var ur = -4;
var lr = -5;
var nt = -6;
function ne(e, t) {
  const r4 = [], n = /* @__PURE__ */ new Map(), s2 = [];
  for (const o2 in t)
    s2.push({ key: o2, fn: t[o2] });
  const a3 = [];
  let i3 = 0;
  function c2(o2) {
    if (typeof o2 == "function")
      throw new F("Cannot stringify a function", a3);
    if (n.has(o2))
      return n.get(o2);
    if (o2 === void 0)
      return rt;
    if (Number.isNaN(o2))
      return cr;
    if (o2 === 1 / 0)
      return ur;
    if (o2 === -1 / 0)
      return lr;
    if (o2 === 0 && 1 / o2 < 0)
      return nt;
    const u3 = i3++;
    n.set(o2, u3);
    for (const { key: _, fn: f4 } of s2) {
      const y2 = f4(o2);
      if (y2)
        return r4[u3] = `["${_}",${c2(y2)}]`, u3;
    }
    let l2 = "";
    if (W(o2))
      l2 = de(o2);
    else
      switch (re(o2)) {
        case "Number":
        case "String":
        case "Boolean":
          l2 = `["Object",${de(o2)}]`;
          break;
        case "BigInt":
          l2 = `["BigInt",${o2}]`;
          break;
        case "Date":
          l2 = `["Date","${o2.toISOString()}"]`;
          break;
        case "RegExp":
          const { source: f4, flags: y2 } = o2;
          l2 = y2 ? `["RegExp",${z2(f4)},"${y2}"]` : `["RegExp",${z2(f4)}]`;
          break;
        case "Array":
          l2 = "[";
          for (let p3 = 0; p3 < o2.length; p3 += 1)
            p3 > 0 && (l2 += ","), p3 in o2 ? (a3.push(`[${p3}]`), l2 += c2(o2[p3]), a3.pop()) : l2 += ir;
          l2 += "]";
          break;
        case "Set":
          l2 = '["Set"';
          for (const p3 of o2)
            l2 += `,${c2(p3)}`;
          l2 += "]";
          break;
        case "Map":
          l2 = '["Map"';
          for (const [p3, h4] of o2)
            a3.push(`.get(${W(p3) ? de(p3) : "..."})`), l2 += `,${c2(p3)},${c2(h4)}`;
          l2 += "]";
          break;
        default:
          if (!et(o2))
            throw new F("Cannot stringify arbitrary non-POJOs", a3);
          if (Object.getOwnPropertySymbols(o2).length > 0)
            throw new F("Cannot stringify POJOs with symbolic keys", a3);
          if (Object.getPrototypeOf(o2) === null) {
            l2 = '["null"';
            for (const p3 in o2)
              a3.push(`.${p3}`), l2 += `,${z2(p3)},${c2(o2[p3])}`, a3.pop();
            l2 += "]";
          } else {
            l2 = "{";
            let p3 = false;
            for (const h4 in o2)
              p3 && (l2 += ","), p3 = true, a3.push(`.${h4}`), l2 += `${z2(h4)}:${c2(o2[h4])}`, a3.pop();
            l2 += "}";
          }
      }
    return r4[u3] = l2, u3;
  }
  const d3 = c2(e);
  return d3 < 0 ? `${d3}` : `[${r4.join(",")}]`;
}
function de(e) {
  const t = typeof e;
  return t === "string" ? z2(e) : e instanceof String ? z2(e.toString()) : e === void 0 ? rt.toString() : e === 0 && 1 / e < 0 ? nt.toString() : t === "bigint" ? `["BigInt","${e}"]` : String(e);
}
function st(e) {
  return $e(e.request.headers.get("accept") ?? "*/*", ["application/json", "text/html"]) === "application/json" && e.request.method === "POST";
}
async function fr(e, t, r4) {
  const n = r4?.actions;
  if (!n) {
    const s2 = ke(405, "POST method not allowed. No actions exist for this page");
    return Z({ type: "error", error: await P(e, t, s2) }, { status: s2.status, headers: { allow: "GET" } });
  }
  it(n);
  try {
    const s2 = await ct(e, n);
    return s2 instanceof ve ? Z({ type: "failure", status: s2.status, data: qe(s2.data, e.route.id) }) : Z({ type: "success", status: s2 ? 200 : 204, data: qe(s2, e.route.id) });
  } catch (s2) {
    const a3 = s2;
    return a3 instanceof D ? at(a3) : Z({ type: "error", error: await P(e, t, ot(a3)) }, { status: a3 instanceof I2 ? a3.status : 500 });
  }
}
function ot(e) {
  return e instanceof ve ? new Error('Cannot "throw fail()". Use "return fail()"') : e;
}
function at(e) {
  return Z({ type: "redirect", status: e.status, location: e.location });
}
function Z(e, t) {
  return Ee(e, t);
}
function dr(e) {
  return e.request.method === "POST";
}
async function pr(e, t) {
  const r4 = t?.actions;
  if (!r4)
    return e.setHeaders({ allow: "GET" }), { type: "error", error: ke(405, "POST method not allowed. No actions exist for this page") };
  it(r4);
  try {
    const n = await ct(e, r4);
    return n instanceof ve ? { type: "failure", status: n.status, data: n.data } : { type: "success", status: 200, data: n };
  } catch (n) {
    const s2 = n;
    return s2 instanceof D ? { type: "redirect", status: s2.status, location: s2.location } : { type: "error", error: ot(s2) };
  }
}
function it(e) {
  if (e.default && Object.keys(e).length > 1)
    throw new Error("When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions");
}
async function ct(e, t) {
  const r4 = new URL(e.request.url);
  let n = "default";
  for (const a3 of r4.searchParams)
    if (a3[0].startsWith("/")) {
      if (n = a3[0].slice(1), n === "default")
        throw new Error('Cannot use reserved action name "default"');
      break;
    }
  const s2 = t[n];
  if (!s2)
    throw new Error(`No action with name '${n}' found`);
  if (!Be(e.request))
    throw new Error(`Actions expect form-encoded data (received ${e.request.headers.get("content-type")})`);
  return s2(e);
}
function hr(e, t) {
  return ut(e, G2, t);
}
function qe(e, t) {
  return ut(e, ne, t);
}
function ut(e, t, r4) {
  try {
    return t(e);
  } catch (n) {
    const s2 = n;
    if ("path" in s2) {
      let a3 = `Data returned from action inside ${r4} is not serializable: ${s2.message}`;
      throw s2.path !== "" && (a3 += ` (data.${s2.path})`), new Error(a3);
    }
    throw s2;
  }
}
async function lt(e) {
  for (const t in e)
    if (typeof e[t]?.then == "function")
      return Object.fromEntries(await Promise.all(Object.entries(e).map(async ([r4, n]) => [r4, await n])));
  return e;
}
var Ie = "x-sveltekit-invalidated";
async function Oe({ event: e, state: t, node: r4, parent: n, track_server_fetches: s2 }) {
  if (!r4?.server)
    return null;
  const a3 = { dependencies: /* @__PURE__ */ new Set(), params: /* @__PURE__ */ new Set(), parent: false, route: false, url: false }, i3 = Bt(e.url, () => {
    a3.url = true;
  });
  t.prerendering && Qe(i3);
  const c2 = await r4.server.load?.call(null, { ...e, fetch: (o2, u3) => {
    const l2 = new URL(o2 instanceof Request ? o2.url : o2, e.url);
    return s2 && a3.dependencies.add(l2.href), e.fetch(o2, u3);
  }, depends: (...o2) => {
    for (const u3 of o2) {
      const { href: l2 } = new URL(u3, e.url);
      a3.dependencies.add(l2);
    }
  }, params: new Proxy(e.params, { get: (o2, u3) => (a3.params.add(u3), o2[u3]) }), parent: async () => (a3.parent = true, n()), route: new Proxy(e.route, { get: (o2, u3) => (a3.route = true, o2[u3]) }), url: i3 });
  return { type: "data", data: c2 ? await lt(c2) : null, uses: a3, slash: r4.server.trailingSlash };
}
async function ft({ event: e, fetched: t, node: r4, parent: n, server_data_promise: s2, state: a3, resolve_opts: i3, csr: c2 }) {
  const d3 = await s2;
  if (!r4?.universal?.load)
    return d3?.data ?? null;
  const o2 = await r4.universal.load.call(null, { url: e.url, params: e.params, data: d3?.data ?? null, route: e.route, fetch: _r(e, a3, t, c2, i3), setHeaders: e.setHeaders, depends: () => {
  }, parent: n });
  return o2 ? await lt(o2) : null;
}
function _r(e, t, r4, n, s2) {
  return async (a3, i3) => {
    const c2 = a3 instanceof Request && a3.body ? a3.clone().body : null, d3 = a3 instanceof Request && [...a3.headers].length ? new Headers(a3.headers) : i3?.headers;
    let o2 = await e.fetch(a3, i3);
    const u3 = new URL(a3 instanceof Request ? a3.url : a3, e.url), l2 = u3.origin === e.url.origin;
    let _;
    if (l2)
      t.prerendering && (_ = { response: o2, body: null }, t.prerendering.dependencies.set(u3.pathname, _));
    else if ((a3 instanceof Request ? a3.mode : i3?.mode ?? "cors") === "no-cors")
      o2 = new Response("", { status: o2.status, statusText: o2.statusText, headers: o2.headers });
    else {
      const p3 = o2.headers.get("access-control-allow-origin");
      if (!p3 || p3 !== e.url.origin && p3 !== "*")
        throw new Error(`CORS error: ${p3 ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`);
    }
    const f4 = new Proxy(o2, { get(y2, p3, h4) {
      async function w4() {
        const g2 = await y2.text();
        if (!g2 || typeof g2 == "string") {
          const m2 = Number(y2.status);
          if (isNaN(m2))
            throw new Error(`response.status is not a number. value: "${y2.status}" type: ${typeof y2.status}`);
          r4.push({ url: l2 ? u3.href.slice(e.url.origin.length) : u3.href, method: e.request.method, request_body: a3 instanceof Request && c2 ? await yr(c2) : i3?.body, request_headers: d3, response_body: g2, response: y2 });
        }
        return _ && (_.body = g2), g2;
      }
      return p3 === "arrayBuffer" ? async () => {
        const g2 = await y2.arrayBuffer();
        return _ && (_.body = new Uint8Array(g2)), g2;
      } : p3 === "text" ? w4 : p3 === "json" ? async () => JSON.parse(await w4()) : Reflect.get(y2, p3, y2);
    } });
    if (n) {
      const y2 = o2.headers.get;
      o2.headers.get = (p3) => {
        const h4 = p3.toLowerCase(), w4 = y2.call(o2.headers, h4);
        if (w4 && !h4.startsWith("x-sveltekit-") && !s2.filterSerializedResponseHeaders(h4, w4))
          throw new Error(`Failed to get response header "${h4}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${e.route.id})`);
        return w4;
      };
    }
    return f4;
  };
}
async function yr(e) {
  let t = "";
  const r4 = e.getReader(), n = new TextDecoder();
  for (; ; ) {
    const { done: s2, value: a3 } = await r4.read();
    if (s2)
      break;
    t += n.decode(a3);
  }
  return t;
}
var M2 = [];
function mr(e, t) {
  return { subscribe: _e(e, t).subscribe };
}
function _e(e, t = h) {
  let r4;
  const n = /* @__PURE__ */ new Set();
  function s2(c2) {
    if (O(e, c2) && (e = c2, r4)) {
      const d3 = !M2.length;
      for (const o2 of n)
        o2[1](), M2.push(o2, e);
      if (d3) {
        for (let o2 = 0; o2 < M2.length; o2 += 2)
          M2[o2][0](M2[o2 + 1]);
        M2.length = 0;
      }
    }
  }
  function a3(c2) {
    s2(c2(e));
  }
  function i3(c2, d3 = h) {
    const o2 = [c2, d3];
    return n.add(o2), n.size === 1 && (r4 = t(s2, a3) || h), c2(e), () => {
      n.delete(o2), n.size === 0 && r4 && (r4(), r4 = null);
    };
  }
  return { set: s2, update: a3, subscribe: i3 };
}
function dt(...e) {
  let t = 5381;
  for (const r4 of e)
    if (typeof r4 == "string") {
      let n = r4.length;
      for (; n; )
        t = t * 33 ^ r4.charCodeAt(--n);
    } else if (ArrayBuffer.isView(r4)) {
      const n = new Uint8Array(r4.buffer, r4.byteOffset, r4.byteLength);
      let s2 = n.length;
      for (; s2; )
        t = t * 33 ^ n[--s2];
    } else
      throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36);
}
var pt = { "&": "&amp;", '"': "&quot;" };
var wr = new RegExp(`[${Object.keys(pt).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`, "g");
function ht(e) {
  return `"${e.replace(wr, (r4) => r4.length === 2 ? r4 : pt[r4] ?? `&#${r4.charCodeAt(0)};`)}"`;
}
var _t = { "<": "\\u003C", "\u2028": "\\u2028", "\u2029": "\\u2029" };
var gr = new RegExp(`[${Object.keys(_t).join("")}]`, "g");
function br(e, t, r4 = false) {
  const n = {};
  let s2 = null, a3 = null, i3 = false;
  for (const [u3, l2] of e.response.headers)
    t(u3, l2) && (n[u3] = l2), u3 === "cache-control" ? s2 = l2 : u3 === "age" ? a3 = l2 : u3 === "vary" && l2.trim() === "*" && (i3 = true);
  const c2 = { status: e.response.status, statusText: e.response.statusText, headers: n, body: e.response_body }, d3 = JSON.stringify(c2).replace(gr, (u3) => _t[u3]), o2 = ['type="application/json"', "data-sveltekit-fetched", `data-url=${ht(e.url)}`];
  if (e.request_headers || e.request_body) {
    const u3 = [];
    e.request_headers && u3.push([...new Headers(e.request_headers)].join(",")), e.request_body && u3.push(e.request_body), o2.push(`data-hash="${dt(...u3)}"`);
  }
  if (!r4 && e.method === "GET" && s2 && !i3) {
    const u3 = /s-maxage=(\d+)/g.exec(s2) ?? /max-age=(\d+)/g.exec(s2);
    if (u3) {
      const l2 = +u3[1] - +(a3 ?? "0");
      o2.push(`data-ttl="${l2}"`);
    }
  }
  return `<script ${o2.join(" ")}>${d3}<\/script>`;
}
var H = JSON.stringify;
var $r = new TextEncoder();
function De(e) {
  ye[0] || vr();
  const t = yt.slice(0), r4 = kr(e);
  for (let s2 = 0; s2 < r4.length; s2 += 16) {
    const a3 = r4.subarray(s2, s2 + 16);
    let i3, c2, d3, o2 = t[0], u3 = t[1], l2 = t[2], _ = t[3], f4 = t[4], y2 = t[5], p3 = t[6], h4 = t[7];
    for (let w4 = 0; w4 < 64; w4++)
      w4 < 16 ? i3 = a3[w4] : (c2 = a3[w4 + 1 & 15], d3 = a3[w4 + 14 & 15], i3 = a3[w4 & 15] = (c2 >>> 7 ^ c2 >>> 18 ^ c2 >>> 3 ^ c2 << 25 ^ c2 << 14) + (d3 >>> 17 ^ d3 >>> 19 ^ d3 >>> 10 ^ d3 << 15 ^ d3 << 13) + a3[w4 & 15] + a3[w4 + 9 & 15] | 0), i3 = i3 + h4 + (f4 >>> 6 ^ f4 >>> 11 ^ f4 >>> 25 ^ f4 << 26 ^ f4 << 21 ^ f4 << 7) + (p3 ^ f4 & (y2 ^ p3)) + ye[w4], h4 = p3, p3 = y2, y2 = f4, f4 = _ + i3 | 0, _ = l2, l2 = u3, u3 = o2, o2 = i3 + (u3 & l2 ^ _ & (u3 ^ l2)) + (u3 >>> 2 ^ u3 >>> 13 ^ u3 >>> 22 ^ u3 << 30 ^ u3 << 19 ^ u3 << 10) | 0;
    t[0] = t[0] + o2 | 0, t[1] = t[1] + u3 | 0, t[2] = t[2] + l2 | 0, t[3] = t[3] + _ | 0, t[4] = t[4] + f4 | 0, t[5] = t[5] + y2 | 0, t[6] = t[6] + p3 | 0, t[7] = t[7] + h4 | 0;
  }
  const n = new Uint8Array(t.buffer);
  return mt(n), wt(n);
}
var yt = new Uint32Array(8);
var ye = new Uint32Array(64);
function vr() {
  function e(r4) {
    return (r4 - Math.floor(r4)) * 4294967296;
  }
  let t = 2;
  for (let r4 = 0; r4 < 64; t++) {
    let n = true;
    for (let s2 = 2; s2 * s2 <= t; s2++)
      if (t % s2 === 0) {
        n = false;
        break;
      }
    n && (r4 < 8 && (yt[r4] = e(t ** (1 / 2))), ye[r4] = e(t ** (1 / 3)), r4++);
  }
}
function mt(e) {
  for (let t = 0; t < e.length; t += 4) {
    const r4 = e[t + 0], n = e[t + 1], s2 = e[t + 2], a3 = e[t + 3];
    e[t + 0] = a3, e[t + 1] = s2, e[t + 2] = n, e[t + 3] = r4;
  }
}
function kr(e) {
  const t = $r.encode(e), r4 = t.length * 8, n = 512 * Math.ceil((r4 + 65) / 512), s2 = new Uint8Array(n / 8);
  s2.set(t), s2[t.length] = 128, mt(s2);
  const a3 = new Uint32Array(s2.buffer);
  return a3[a3.length - 2] = Math.floor(r4 / 4294967296), a3[a3.length - 1] = r4, a3;
}
var N2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function wt(e) {
  const t = e.length;
  let r4 = "", n;
  for (n = 2; n < t; n += 3)
    r4 += N2[e[n - 2] >> 2], r4 += N2[(e[n - 2] & 3) << 4 | e[n - 1] >> 4], r4 += N2[(e[n - 1] & 15) << 2 | e[n] >> 6], r4 += N2[e[n] & 63];
  return n === t + 1 && (r4 += N2[e[n - 2] >> 2], r4 += N2[(e[n - 2] & 3) << 4], r4 += "=="), n === t && (r4 += N2[e[n - 2] >> 2], r4 += N2[(e[n - 2] & 3) << 4 | e[n - 1] >> 4], r4 += N2[(e[n - 1] & 15) << 2], r4 += "="), r4;
}
var ze = new Uint8Array(16);
function Er() {
  return crypto.getRandomValues(ze), wt(ze);
}
var jr = /* @__PURE__ */ new Set(["self", "unsafe-eval", "unsafe-hashes", "unsafe-inline", "none", "strict-dynamic", "report-sample", "wasm-unsafe-eval", "script"]);
var Sr = /^(nonce|sha\d\d\d)-/;
var _e2, _t2, _s, _o, _r2, _n, _a;
var gt = class {
  constructor(t, r4, n) {
    __privateAdd(this, _e2, void 0);
    __privateAdd(this, _t2, void 0);
    __privateAdd(this, _s, void 0);
    __privateAdd(this, _o, void 0);
    __privateAdd(this, _r2, void 0);
    __privateAdd(this, _n, void 0);
    __privateAdd(this, _a, void 0);
    __privateSet(this, _e2, t), __privateSet(this, _o, r4);
    const s2 = __privateGet(this, _o);
    __privateSet(this, _r2, []), __privateSet(this, _n, []);
    const a3 = s2["script-src"] || s2["default-src"], i3 = s2["style-src"] || s2["default-src"];
    __privateSet(this, _t2, !!a3 && a3.filter((c2) => c2 !== "unsafe-inline").length > 0), __privateSet(this, _s, !!i3 && i3.filter((c2) => c2 !== "unsafe-inline").length > 0), this.script_needs_nonce = __privateGet(this, _t2) && !__privateGet(this, _e2), this.style_needs_nonce = __privateGet(this, _s) && !__privateGet(this, _e2), __privateSet(this, _a, n);
  }
  add_script(t) {
    __privateGet(this, _t2) && (__privateGet(this, _e2) ? __privateGet(this, _r2).push(`sha256-${De(t)}`) : __privateGet(this, _r2).length === 0 && __privateGet(this, _r2).push(`nonce-${__privateGet(this, _a)}`));
  }
  add_style(t) {
    __privateGet(this, _s) && (__privateGet(this, _e2) ? __privateGet(this, _n).push(`sha256-${De(t)}`) : __privateGet(this, _n).length === 0 && __privateGet(this, _n).push(`nonce-${__privateGet(this, _a)}`));
  }
  get_header(t = false) {
    const r4 = [], n = { ...__privateGet(this, _o) };
    __privateGet(this, _n).length > 0 && (n["style-src"] = [...n["style-src"] || n["default-src"] || [], ...__privateGet(this, _n)]), __privateGet(this, _r2).length > 0 && (n["script-src"] = [...n["script-src"] || n["default-src"] || [], ...__privateGet(this, _r2)]);
    for (const s2 in n) {
      if (t && (s2 === "frame-ancestors" || s2 === "report-uri" || s2 === "sandbox"))
        continue;
      const a3 = n[s2];
      if (!a3)
        continue;
      const i3 = [s2];
      Array.isArray(a3) && a3.forEach((c2) => {
        jr.has(c2) || Sr.test(c2) ? i3.push(`'${c2}'`) : i3.push(c2);
      }), r4.push(i3.join(" "));
    }
    return r4.join("; ");
  }
};
_e2 = new WeakMap();
_t2 = new WeakMap();
_s = new WeakMap();
_o = new WeakMap();
_r2 = new WeakMap();
_n = new WeakMap();
_a = new WeakMap();
var xr = class extends gt {
  get_meta() {
    const t = this.get_header(true);
    if (t)
      return `<meta http-equiv="content-security-policy" content=${ht(t)}>`;
  }
};
var Or = class extends gt {
  constructor(t, r4, n) {
    if (super(t, r4, n), Object.values(r4).filter((s2) => !!s2).length > 0) {
      const s2 = r4["report-to"]?.length ?? 0 > 0, a3 = r4["report-uri"]?.length ?? 0 > 0;
      if (!s2 && !a3)
        throw Error("`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both");
    }
  }
};
var Tr = class {
  constructor({ mode: t, directives: r4, reportOnly: n }, { prerender: s2 }) {
    __publicField(this, "nonce", Er());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const a3 = t === "hash" || t === "auto" && s2;
    this.csp_provider = new xr(a3, r4, this.nonce), this.report_only_provider = new Or(a3, n, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(t) {
    this.csp_provider.add_script(t), this.report_only_provider.add_script(t);
  }
  add_style(t) {
    this.csp_provider.add_style(t), this.report_only_provider.add_style(t);
  }
};
function He() {
  let e, t;
  return { promise: new Promise((n, s2) => {
    e = n, t = s2;
  }), fulfil: e, reject: t };
}
function bt() {
  const e = [He()];
  return { iterator: { [Symbol.asyncIterator]() {
    return { next: async () => {
      const t = await e[0].promise;
      return t.done || e.shift(), t;
    } };
  } }, push: (t) => {
    e[e.length - 1].fulfil({ value: t, done: false }), e.push(He());
  }, done: () => {
    e[e.length - 1].fulfil({ done: true });
  } };
}
var Rr = { ...mr(false), check: () => false };
var Ue = new TextEncoder();
async function X({ branch: e, fetched: t, options: r4, manifest: n, state: s2, page_config: a3, status: i3, error: c2 = null, event: d3, resolve_opts: o2, action_result: u3 }) {
  if (s2.prerendering) {
    if (r4.csp.mode === "nonce")
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    if (r4.app_template_contains_nonce)
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
  }
  const { client: l2 } = n._, _ = new Set(l2.imports), f4 = new Set(l2.stylesheets), y2 = new Set(l2.fonts), p3 = /* @__PURE__ */ new Set(), h4 = /* @__PURE__ */ new Map();
  let w4;
  const g2 = u3?.type === "success" || u3?.type === "failure" ? u3.data ?? null : null;
  let m2 = p, v2 = u, b4 = H(p);
  if (s2.prerendering?.fallback || (m2 = d3.url.pathname.slice(p.length).split("/").slice(2).map(() => "..").join("/") || ".", b4 = `new URL(${H(m2)}, location).pathname.slice(0, -1)`, (!u || u[0] === "/" && u !== Dt) && (v2 = m2)), a3.ssr) {
    const k2 = { stores: { page: _e(null), navigating: _e(null), updated: Rr }, constructors: await Promise.all(e.map(({ node: x3 }) => x3.component())), form: g2 };
    let j3 = {};
    for (let x3 = 0; x3 < e.length; x3 += 1)
      j3 = { ...j3, ...e[x3].data }, k2[`data_${x3}`] = j3;
    k2.page = { error: c2, params: d3.params, route: d3.route, status: i3, url: d3.url, data: j3, form: g2 };
    try {
      w4 = r4.root.render(k2);
    } finally {
      C2();
    }
    for (const { node: x3 } of e) {
      for (const T3 of x3.imports)
        _.add(T3);
      for (const T3 of x3.stylesheets)
        f4.add(T3);
      for (const T3 of x3.fonts)
        y2.add(T3);
      x3.inline_styles && Object.entries(await x3.inline_styles()).forEach(([T3, Q]) => h4.set(T3, Q));
    }
  } else
    w4 = { head: "", html: "", css: { code: "", map: null } };
  let $2 = "", E2 = w4.html;
  const S2 = new Tr(r4.csp, { prerender: !!s2.prerendering }), O2 = (k2) => k2.startsWith("/") ? p + k2 : `${v2}/${k2}`;
  if (h4.size > 0) {
    const k2 = Array.from(h4.values()).join(`
`), j3 = [];
    S2.style_needs_nonce && j3.push(` nonce="${S2.nonce}"`), S2.add_style(k2), $2 += `
	<style${j3.join("")}>${k2}</style>`;
  }
  for (const k2 of f4) {
    const j3 = O2(k2), x3 = ['rel="stylesheet"'];
    if (h4.has(k2))
      x3.push("disabled", 'media="(max-width: 0)"');
    else if (o2.preload({ type: "css", path: j3 })) {
      const T3 = ['rel="preload"', 'as="style"'];
      p3.add(`<${encodeURI(j3)}>; ${T3.join(";")}; nopush`);
    }
    $2 += `
		<link href="${j3}" ${x3.join(" ")}>`;
  }
  for (const k2 of y2) {
    const j3 = O2(k2);
    if (o2.preload({ type: "font", path: j3 })) {
      const T3 = ['rel="preload"', 'as="font"', `type="font/${k2.slice(k2.lastIndexOf(".") + 1)}"`, `href="${j3}"`, "crossorigin"];
      $2 += `
		<link ${T3.join(" ")}>`;
    }
  }
  const L = `__sveltekit_${r4.version_hash}`, { data: V, chunks: K } = Ar(d3, r4, e.map((k2) => k2.server_data), L);
  if (a3.ssr && a3.csr && (E2 += `
			${t.map((k2) => br(k2, o2.filterSerializedResponseHeaders, !!s2.prerendering)).join(`
			`)}`), a3.csr) {
    const k2 = Array.from(_, (R2) => O2(R2)).filter((R2) => o2.preload({ type: "js", path: R2 }));
    for (const R2 of k2)
      p3.add(`<${encodeURI(R2)}>; rel="modulepreload"; nopush`), r4.preload_strategy !== "modulepreload" ? $2 += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${R2}">` : s2.prerendering && ($2 += `
		<link rel="modulepreload" href="${R2}">`);
    const j3 = [], x3 = [u && `assets: ${H(u)}`, `base: ${b4}`, `env: ${H(x2)}`].filter(Boolean);
    K && (j3.push("const deferred = new Map();"), x3.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`), x3.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`)), j3.push(`${L} = {
						${x3.join(`,
						`)}
					};`);
    const T3 = ["app", "element"];
    if (j3.push("const element = document.currentScript.parentElement;"), a3.ssr) {
      const R2 = { form: "null", error: "null" };
      j3.push(`const data = ${V};`), g2 && (R2.form = hr(g2, d3.route.id)), c2 && (R2.error = G2(c2));
      const ce = [`node_ids: [${e.map(({ node: Rt }) => Rt.index).join(", ")}]`, "data", `form: ${R2.form}`, `error: ${R2.error}`];
      i3 !== 200 && ce.push(`status: ${i3}`), r4.embedded && ce.push(`params: ${G2(d3.params)}`, `route: ${H(d3.route)}`), T3.push(`{
							${ce.join(`,
							`)}
						}`);
    }
    if (j3.push(`Promise.all([
						import(${H(O2(l2.start))}),
						import(${H(O2(l2.app))})
					]).then(([kit, app]) => {
						kit.start(${T3.join(", ")});
					});`), r4.service_worker) {
      const R2 = "";
      j3.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${O2("service-worker.js")}'${R2});
						});
					}`);
    }
    const Q = `
				{
					${j3.join(`

					`)}
				}
			`;
    S2.add_script(Q), E2 += `
			<script${S2.script_needs_nonce ? ` nonce="${S2.nonce}"` : ""}>${Q}<\/script>
		`;
  }
  const B2 = new Headers({ "x-sveltekit-page": "true", "content-type": "text/html" });
  if (s2.prerendering) {
    const k2 = [], j3 = S2.csp_provider.get_meta();
    j3 && k2.push(j3), s2.prerendering.cache && k2.push(`<meta http-equiv="cache-control" content="${s2.prerendering.cache}">`), k2.length > 0 && ($2 = k2.join(`
`) + $2);
  } else {
    const k2 = S2.csp_provider.get_header();
    k2 && B2.set("content-security-policy", k2);
    const j3 = S2.report_only_provider.get_header();
    j3 && B2.set("content-security-policy-report-only", j3), p3.size && B2.set("link", Array.from(p3).join(", "));
  }
  $2 += w4.head;
  const Tt = r4.templates.app({ head: $2, body: E2, assets: v2, nonce: S2.nonce, env: x2 }), ie = await o2.transformPageChunk({ html: Tt, done: true }) || "";
  return K || B2.set("etag", `"${dt(ie)}"`), K ? new Response(new ReadableStream({ async start(k2) {
    k2.enqueue(Ue.encode(ie + `
`));
    for await (const j3 of K)
      k2.enqueue(Ue.encode(j3));
    k2.close();
  }, type: "bytes" }), { headers: { "content-type": "text/html" } }) : A2(ie, { status: i3, headers: B2 });
}
function Ar(e, t, r4, n) {
  let s2 = 1, a3 = 0;
  const { iterator: i3, push: c2, done: d3 } = bt();
  function o2(u3) {
    if (typeof u3?.then == "function") {
      const l2 = s2++;
      return a3 += 1, u3.then((_) => ({ data: _ })).catch(async (_) => ({ error: await P(e, t, _) })).then(async ({ data: _, error: f4 }) => {
        a3 -= 1;
        let y2;
        try {
          y2 = G2({ id: l2, data: _, error: f4 }, o2);
        } catch {
          f4 = await P(e, t, new Error(`Failed to serialize promise while rendering ${e.route.id}`)), _ = void 0, y2 = G2({ id: l2, data: _, error: f4 }, o2);
        }
        c2(`<script>${n}.resolve(${y2})<\/script>
`), a3 === 0 && d3();
      }), `${n}.defer(${l2})`;
    }
  }
  try {
    return { data: `[${r4.map((l2) => l2 ? `{"type":"data","data":${G2(l2.data, o2)},${Ke(l2)}${l2.slash ? `,"slash":${JSON.stringify(l2.slash)}` : ""}}` : "null").join(",")}]`, chunks: a3 > 0 ? i3 : null };
  } catch (u3) {
    throw new Error(Ye(e, u3));
  }
}
function q2(e, t) {
  return e.reduce((r4, n) => n?.universal?.[t] ?? n?.server?.[t] ?? r4, void 0);
}
async function $t({ event: e, options: t, manifest: r4, state: n, status: s2, error: a3, resolve_opts: i3 }) {
  const c2 = [];
  try {
    const d3 = [], o2 = await r4._.nodes[0](), u3 = q2([o2], "ssr") ?? true, l2 = q2([o2], "csr") ?? true;
    if (u3) {
      n.error = true;
      const _ = Oe({ event: e, state: n, node: o2, parent: async () => ({}), track_server_fetches: t.track_server_fetches }), f4 = await _, y2 = await ft({ event: e, fetched: c2, node: o2, parent: async () => ({}), resolve_opts: i3, server_data_promise: _, state: n, csr: l2 });
      d3.push({ node: o2, server_data: f4, data: y2 }, { node: await r4._.nodes[1](), data: null, server_data: null });
    }
    return await X({ options: t, manifest: r4, state: n, page_config: { ssr: u3, csr: q2([o2], "csr") ?? true }, status: s2, error: await P(e, t, a3), branch: d3, fetched: c2, event: e, resolve_opts: i3 });
  } catch (d3) {
    return d3 instanceof D ? se(d3.status, d3.location) : je(t, d3 instanceof I2 ? d3.status : 500, (await P(e, t, d3)).message);
  }
}
function Pr(e) {
  let t = false, r4;
  return () => t ? r4 : (t = true, r4 = e());
}
var Le = new TextEncoder();
async function Cr(e, t, r4, n, s2, a3, i3) {
  if (!t.page)
    return new Response(void 0, { status: 404 });
  try {
    const c2 = [...t.page.layouts, t.page.leaf], d3 = a3 ?? c2.map(() => true);
    let o2 = false;
    const u3 = new URL(e.url);
    u3.pathname = Se(u3.pathname, i3);
    const l2 = { ...e, url: u3 }, _ = c2.map((g2, m2) => Pr(async () => {
      try {
        if (o2)
          return { type: "skip" };
        const v2 = g2 == null ? g2 : await n._.nodes[g2]();
        return Oe({ event: l2, state: s2, node: v2, parent: async () => {
          const b4 = {};
          for (let $2 = 0; $2 < m2; $2 += 1) {
            const E2 = await _[$2]();
            E2 && Object.assign(b4, E2.data);
          }
          return b4;
        }, track_server_fetches: r4.track_server_fetches });
      } catch (v2) {
        throw o2 = true, v2;
      }
    })), f4 = _.map(async (g2, m2) => d3[m2] ? g2() : { type: "skip" });
    let y2 = f4.length;
    const p3 = await Promise.all(f4.map((g2, m2) => g2.catch(async (v2) => {
      if (v2 instanceof D)
        throw v2;
      return y2 = Math.min(y2, m2 + 1), { type: "error", error: await P(e, r4, v2), status: v2 instanceof I2 ? v2.status : void 0 };
    }))), { data: h4, chunks: w4 } = vt(e, r4, p3);
    return w4 ? new Response(new ReadableStream({ async start(g2) {
      g2.enqueue(Le.encode(h4));
      for await (const m2 of w4)
        g2.enqueue(Le.encode(m2));
      g2.close();
    }, type: "bytes" }), { headers: { "content-type": "text/sveltekit-data", "cache-control": "private, no-store" } }) : me(h4);
  } catch (c2) {
    const d3 = c2;
    return d3 instanceof D ? we(d3) : me(await P(e, r4, d3), 500);
  }
}
function me(e, t = 200) {
  return A2(typeof e == "string" ? e : JSON.stringify(e), { status: t, headers: { "content-type": "application/json", "cache-control": "private, no-store" } });
}
function we(e) {
  return me({ type: "redirect", location: e.location });
}
function vt(e, t, r4) {
  let n = 1, s2 = 0;
  const { iterator: a3, push: i3, done: c2 } = bt(), d3 = { Promise: (o2) => {
    if (typeof o2?.then == "function") {
      const u3 = n++;
      s2 += 1;
      let l2 = "data";
      return o2.catch(async (_) => (l2 = "error", P(e, t, _))).then(async (_) => {
        let f4;
        try {
          f4 = ne(_, d3);
        } catch {
          const p3 = await P(e, t, new Error(`Failed to serialize promise while rendering ${e.route.id}`));
          l2 = "error", f4 = ne(p3, d3);
        }
        s2 -= 1, i3(`{"type":"chunk","id":${u3},"${l2}":${f4}}
`), s2 === 0 && c2();
      }), u3;
    }
  } };
  try {
    return { data: `{"type":"data","nodes":[${r4.map((u3) => u3 ? u3.type === "error" || u3.type === "skip" ? JSON.stringify(u3) : `{"type":"data","data":${ne(u3.data, d3)},${Ke(u3)}${u3.slash ? `,"slash":${JSON.stringify(u3.slash)}` : ""}}` : "null").join(",")}]}
`, chunks: s2 > 0 ? a3 : null };
  } catch (o2) {
    throw new Error(Ye(e, o2));
  }
}
var Nr = 10;
async function qr(e, t, r4, n, s2, a3) {
  if (s2.depth > Nr)
    return A2(`Not found: ${e.url.pathname}`, { status: 404 });
  if (st(e)) {
    const i3 = await n._.nodes[t.leaf]();
    return fr(e, r4, i3?.server);
  }
  try {
    const i3 = await Promise.all([...t.layouts.map((m2) => m2 == null ? m2 : n._.nodes[m2]()), n._.nodes[t.leaf]()]), c2 = i3.at(-1);
    let d3 = 200, o2;
    if (dr(e)) {
      if (o2 = await pr(e, c2.server), o2?.type === "redirect")
        return se(o2.status, o2.location);
      if (o2?.type === "error") {
        const m2 = o2.error;
        d3 = m2 instanceof I2 ? m2.status : 500;
      }
      o2?.type === "failure" && (d3 = o2.status);
    }
    const u3 = i3.some((m2) => m2?.server), l2 = Yt(e.url.pathname), _ = q2(i3, "prerender") ?? false;
    if (_) {
      if (c2.server?.actions)
        throw new Error("Cannot prerender pages with actions");
    } else if (s2.prerendering)
      return new Response(void 0, { status: 204 });
    s2.prerender_default = _;
    const f4 = [];
    if (q2(i3, "ssr") === false)
      return await X({ branch: [], fetched: f4, page_config: { ssr: false, csr: q2(i3, "csr") ?? true }, status: d3, error: null, event: e, options: r4, manifest: n, state: s2, resolve_opts: a3 });
    const y2 = [];
    let p3 = null;
    const h4 = i3.map((m2, v2) => {
      if (p3)
        throw p3;
      return Promise.resolve().then(async () => {
        try {
          if (m2 === c2 && o2?.type === "error")
            throw o2.error;
          return await Oe({ event: e, state: s2, node: m2, parent: async () => {
            const b4 = {};
            for (let $2 = 0; $2 < v2; $2 += 1) {
              const E2 = await h4[$2];
              E2 && Object.assign(b4, await E2.data);
            }
            return b4;
          }, track_server_fetches: r4.track_server_fetches });
        } catch (b4) {
          throw p3 = b4, p3;
        }
      });
    }), w4 = q2(i3, "csr") ?? true, g2 = i3.map((m2, v2) => {
      if (p3)
        throw p3;
      return Promise.resolve().then(async () => {
        try {
          return await ft({ event: e, fetched: f4, node: m2, parent: async () => {
            const b4 = {};
            for (let $2 = 0; $2 < v2; $2 += 1)
              Object.assign(b4, await g2[$2]);
            return b4;
          }, resolve_opts: a3, server_data_promise: h4[v2], state: s2, csr: w4 });
        } catch (b4) {
          throw p3 = b4, p3;
        }
      });
    });
    for (const m2 of h4)
      m2.catch(() => {
      });
    for (const m2 of g2)
      m2.catch(() => {
      });
    for (let m2 = 0; m2 < i3.length; m2 += 1) {
      const v2 = i3[m2];
      if (v2)
        try {
          const b4 = await h4[m2], $2 = await g2[m2];
          y2.push({ node: v2, server_data: b4, data: $2 });
        } catch (b4) {
          const $2 = b4;
          if ($2 instanceof D) {
            if (s2.prerendering && u3) {
              const O2 = JSON.stringify({ type: "redirect", location: $2.location });
              s2.prerendering.dependencies.set(l2, { response: A2(O2), body: O2 });
            }
            return se($2.status, $2.location);
          }
          const E2 = $2 instanceof I2 ? $2.status : 500, S2 = await P(e, r4, $2);
          for (; m2--; )
            if (t.errors[m2]) {
              const O2 = t.errors[m2], L = await n._.nodes[O2]();
              let V = m2;
              for (; !y2[V]; )
                V -= 1;
              return await X({ event: e, options: r4, manifest: n, state: s2, resolve_opts: a3, page_config: { ssr: true, csr: true }, status: E2, error: S2, branch: Ce(y2.slice(0, V + 1)).concat({ node: L, data: null, server_data: null }), fetched: f4 });
            }
          return je(r4, E2, S2.message);
        }
      else
        y2.push(null);
    }
    if (s2.prerendering && u3) {
      let { data: m2, chunks: v2 } = vt(e, r4, y2.map((b4) => b4?.server_data));
      if (v2)
        for await (const b4 of v2)
          m2 += b4;
      s2.prerendering.dependencies.set(l2, { response: A2(m2), body: m2 });
    }
    return await X({ event: e, options: r4, manifest: n, state: s2, resolve_opts: a3, page_config: { csr: q2(i3, "csr") ?? true, ssr: true }, status: d3, error: null, branch: Ce(y2), action_result: o2, fetched: f4 });
  } catch (i3) {
    return await $t({ event: e, options: r4, manifest: n, state: s2, status: 500, error: i3, resolve_opts: a3 });
  }
}
var ee = Dr;
var kt = zr;
var Ir = Object.prototype.toString;
var te = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function Dr(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var r4 = {}, n = t || {}, s2 = n.decode || Hr, a3 = 0; a3 < e.length; ) {
    var i3 = e.indexOf("=", a3);
    if (i3 === -1)
      break;
    var c2 = e.indexOf(";", a3);
    if (c2 === -1)
      c2 = e.length;
    else if (c2 < i3) {
      a3 = e.lastIndexOf(";", i3 - 1) + 1;
      continue;
    }
    var d3 = e.slice(a3, i3).trim();
    if (r4[d3] === void 0) {
      var o2 = e.slice(i3 + 1, c2).trim();
      o2.charCodeAt(0) === 34 && (o2 = o2.slice(1, -1)), r4[d3] = Mr(o2, s2);
    }
    a3 = c2 + 1;
  }
  return r4;
}
function zr(e, t, r4) {
  var n = r4 || {}, s2 = n.encode || Ur;
  if (typeof s2 != "function")
    throw new TypeError("option encode is invalid");
  if (!te.test(e))
    throw new TypeError("argument name is invalid");
  var a3 = s2(t);
  if (a3 && !te.test(a3))
    throw new TypeError("argument val is invalid");
  var i3 = e + "=" + a3;
  if (n.maxAge != null) {
    var c2 = n.maxAge - 0;
    if (isNaN(c2) || !isFinite(c2))
      throw new TypeError("option maxAge is invalid");
    i3 += "; Max-Age=" + Math.floor(c2);
  }
  if (n.domain) {
    if (!te.test(n.domain))
      throw new TypeError("option domain is invalid");
    i3 += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!te.test(n.path))
      throw new TypeError("option path is invalid");
    i3 += "; Path=" + n.path;
  }
  if (n.expires) {
    var d3 = n.expires;
    if (!Lr(d3) || isNaN(d3.valueOf()))
      throw new TypeError("option expires is invalid");
    i3 += "; Expires=" + d3.toUTCString();
  }
  if (n.httpOnly && (i3 += "; HttpOnly"), n.secure && (i3 += "; Secure"), n.priority) {
    var o2 = typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority;
    switch (o2) {
      case "low":
        i3 += "; Priority=Low";
        break;
      case "medium":
        i3 += "; Priority=Medium";
        break;
      case "high":
        i3 += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (n.sameSite) {
    var u3 = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
    switch (u3) {
      case true:
        i3 += "; SameSite=Strict";
        break;
      case "lax":
        i3 += "; SameSite=Lax";
        break;
      case "strict":
        i3 += "; SameSite=Strict";
        break;
      case "none":
        i3 += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return i3;
}
function Hr(e) {
  return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
}
function Ur(e) {
  return encodeURIComponent(e);
}
function Lr(e) {
  return Ir.call(e) === "[object Date]" || e instanceof Date;
}
function Mr(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
function Wr(e, t, r4) {
  const n = e.headers.get("cookie") ?? "", s2 = ee(n, { decode: (_) => _ }), i3 = Se(t.pathname, r4).split("/").slice(0, -1).join("/") || "/", c2 = {}, d3 = { httpOnly: true, sameSite: "lax", secure: !(t.hostname === "localhost" && t.protocol === "http:") }, o2 = { get(_, f4) {
    const y2 = c2[_];
    if (y2 && pe(t.hostname, y2.options.domain) && he(t.pathname, y2.options.path))
      return y2.value;
    const p3 = f4?.decode || decodeURIComponent;
    return ee(n, { decode: p3 })[_];
  }, getAll(_) {
    const f4 = _?.decode || decodeURIComponent, y2 = ee(n, { decode: f4 });
    for (const p3 of Object.values(c2))
      pe(t.hostname, p3.options.domain) && he(t.pathname, p3.options.path) && (y2[p3.name] = p3.value);
    return Object.entries(y2).map(([p3, h4]) => ({ name: p3, value: h4 }));
  }, set(_, f4, y2 = {}) {
    l2(_, f4, { ...d3, ...y2 });
  }, delete(_, f4 = {}) {
    o2.set(_, "", { ...f4, maxAge: 0 });
  }, serialize(_, f4, y2) {
    return kt(_, f4, { ...d3, ...y2 });
  } };
  function u3(_, f4) {
    const y2 = { ...s2 };
    for (const p3 in c2) {
      const h4 = c2[p3];
      if (!pe(_.hostname, h4.options.domain) || !he(_.pathname, h4.options.path))
        continue;
      const w4 = h4.options.encode || encodeURIComponent;
      y2[h4.name] = w4(h4.value);
    }
    if (f4) {
      const p3 = ee(f4, { decode: (h4) => h4 });
      for (const h4 in p3)
        y2[h4] = p3[h4];
    }
    return Object.entries(y2).map(([p3, h4]) => `${p3}=${h4}`).join("; ");
  }
  function l2(_, f4, y2) {
    const p3 = y2.path ?? i3;
    c2[_] = { name: _, value: f4, options: { ...y2, path: p3 } };
  }
  return { cookies: o2, new_cookies: c2, get_cookie_header: u3, set_internal: l2 };
}
function pe(e, t) {
  if (!t)
    return true;
  const r4 = t[0] === "." ? t.slice(1) : t;
  return e === r4 ? true : e.endsWith("." + r4);
}
function he(e, t) {
  if (!t)
    return true;
  const r4 = t.endsWith("/") ? t.slice(0, -1) : t;
  return e === r4 ? true : e.startsWith(r4 + "/");
}
function Me(e, t) {
  for (const r4 of t) {
    const { name: n, value: s2, options: a3 } = r4;
    e.append("set-cookie", kt(n, s2, a3));
  }
}
var oe = { exports: {} };
var J = { decodeValues: true, map: false, silent: false };
function ge(e) {
  return typeof e == "string" && !!e.trim();
}
function be(e, t) {
  var r4 = e.split(";").filter(ge), n = r4.shift(), s2 = Jr(n), a3 = s2.name, i3 = s2.value;
  t = t ? Object.assign({}, J, t) : J;
  try {
    i3 = t.decodeValues ? decodeURIComponent(i3) : i3;
  } catch (d3) {
    console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + i3 + "'. Set options.decodeValues to false to disable this feature.", d3);
  }
  var c2 = { name: a3, value: i3 };
  return r4.forEach(function(d3) {
    var o2 = d3.split("="), u3 = o2.shift().trimLeft().toLowerCase(), l2 = o2.join("=");
    u3 === "expires" ? c2.expires = new Date(l2) : u3 === "max-age" ? c2.maxAge = parseInt(l2, 10) : u3 === "secure" ? c2.secure = true : u3 === "httponly" ? c2.httpOnly = true : u3 === "samesite" ? c2.sameSite = l2 : c2[u3] = l2;
  }), c2;
}
function Jr(e) {
  var t = "", r4 = "", n = e.split("=");
  return n.length > 1 ? (t = n.shift(), r4 = n.join("=")) : r4 = e, { name: t, value: r4 };
}
function Et(e, t) {
  if (t = t ? Object.assign({}, J, t) : J, !e)
    return t.map ? {} : [];
  if (e.headers)
    if (typeof e.headers.getSetCookie == "function")
      e = e.headers.getSetCookie();
    else if (e.headers["set-cookie"])
      e = e.headers["set-cookie"];
    else {
      var r4 = e.headers[Object.keys(e.headers).find(function(s2) {
        return s2.toLowerCase() === "set-cookie";
      })];
      !r4 && e.headers.cookie && !t.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = r4;
    }
  if (Array.isArray(e) || (e = [e]), t = t ? Object.assign({}, J, t) : J, t.map) {
    var n = {};
    return e.filter(ge).reduce(function(s2, a3) {
      var i3 = be(a3, t);
      return s2[i3.name] = i3, s2;
    }, n);
  } else
    return e.filter(ge).map(function(s2) {
      return be(s2, t);
    });
}
function Fr(e) {
  if (Array.isArray(e))
    return e;
  if (typeof e != "string")
    return [];
  var t = [], r4 = 0, n, s2, a3, i3, c2;
  function d3() {
    for (; r4 < e.length && /\s/.test(e.charAt(r4)); )
      r4 += 1;
    return r4 < e.length;
  }
  function o2() {
    return s2 = e.charAt(r4), s2 !== "=" && s2 !== ";" && s2 !== ",";
  }
  for (; r4 < e.length; ) {
    for (n = r4, c2 = false; d3(); )
      if (s2 = e.charAt(r4), s2 === ",") {
        for (a3 = r4, r4 += 1, d3(), i3 = r4; r4 < e.length && o2(); )
          r4 += 1;
        r4 < e.length && e.charAt(r4) === "=" ? (c2 = true, r4 = i3, t.push(e.substring(n, a3)), n = r4) : r4 = a3 + 1;
      } else
        r4 += 1;
    (!c2 || r4 >= e.length) && t.push(e.substring(n, e.length));
  }
  return t;
}
oe.exports = Et;
oe.exports.parse = Et;
var Gr = oe.exports.parseString = be;
var Vr = oe.exports.splitCookiesString = Fr;
function Br({ event: e, options: t, manifest: r4, state: n, get_cookie_header: s2, set_internal: a3 }) {
  return async (i3, c2) => {
    const d3 = We(i3, c2, e.url);
    let o2 = (i3 instanceof Request ? i3.mode : c2?.mode) ?? "cors", u3 = (i3 instanceof Request ? i3.credentials : c2?.credentials) ?? "same-origin";
    return await t.hooks.handleFetch({ event: e, request: d3, fetch: async (l2, _) => {
      const f4 = We(l2, _, e.url), y2 = new URL(f4.url);
      if (f4.headers.has("origin") || f4.headers.set("origin", e.url.origin), l2 !== d3 && (o2 = (l2 instanceof Request ? l2.mode : _?.mode) ?? "cors", u3 = (l2 instanceof Request ? l2.credentials : _?.credentials) ?? "same-origin"), (f4.method === "GET" || f4.method === "HEAD") && (o2 === "no-cors" && y2.origin !== e.url.origin || y2.origin === e.url.origin) && f4.headers.delete("origin"), y2.origin !== e.url.origin) {
        if (`.${y2.hostname}`.endsWith(`.${e.url.hostname}`) && u3 !== "omit") {
          const E2 = s2(y2, f4.headers.get("cookie"));
          E2 && f4.headers.set("cookie", E2);
        }
        return fetch(f4);
      }
      const p3 = u || p, h4 = decodeURIComponent(y2.pathname), w4 = (h4.startsWith(p3) ? h4.slice(p3.length) : h4).slice(1), g2 = `${w4}/index.html`, m2 = r4.assets.has(w4), v2 = r4.assets.has(g2);
      if (m2 || v2) {
        const E2 = m2 ? w4 : g2;
        if (n.read) {
          const S2 = m2 ? r4.mimeTypes[w4.slice(w4.lastIndexOf("."))] : "text/html";
          return new Response(n.read(E2), { headers: S2 ? { "content-type": S2 } : {} });
        }
        return await fetch(f4);
      }
      if (u3 !== "omit") {
        const E2 = s2(y2, f4.headers.get("cookie"));
        E2 && f4.headers.set("cookie", E2);
        const S2 = e.request.headers.get("authorization");
        S2 && !f4.headers.has("authorization") && f4.headers.set("authorization", S2);
      }
      f4.headers.has("accept") || f4.headers.set("accept", "*/*"), f4.headers.has("accept-language") || f4.headers.set("accept-language", e.request.headers.get("accept-language"));
      const b4 = await Ot(f4, t, r4, { ...n, depth: n.depth + 1 }), $2 = b4.headers.get("set-cookie");
      if ($2)
        for (const E2 of Vr($2)) {
          const { name: S2, value: O2, ...L } = Gr(E2);
          a3(S2, O2, L);
        }
      return b4;
    } });
  };
}
function We(e, t, r4) {
  return e instanceof Request ? e : new Request(typeof e == "string" ? new URL(e, r4) : e, t);
}
function Y(e) {
  function t(r4, n) {
    if (r4)
      for (const s2 in r4) {
        if (s2[0] === "_" || e.has(s2))
          continue;
        const a3 = [...e.values()], i3 = Zr(s2, n?.slice(n.lastIndexOf("."))) ?? `valid exports are ${a3.join(", ")}, or anything with a '_' prefix`;
        throw new Error(`Invalid export '${s2}'${n ? ` in ${n}` : ""} (${i3})`);
      }
  }
  return t;
}
function Zr(e, t = ".js") {
  const r4 = [];
  if (ae.has(e) && r4.push(`+layout${t}`), jt.has(e) && r4.push(`+page${t}`), Te.has(e) && r4.push(`+layout.server${t}`), St.has(e) && r4.push(`+page.server${t}`), xt.has(e) && r4.push(`+server${t}`), r4.length > 0)
    return `'${e}' is a valid export in ${r4.slice(0, -1).join(", ")}${r4.length > 1 ? " or " : ""}${r4.at(-1)}`;
}
var ae = /* @__PURE__ */ new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
var jt = /* @__PURE__ */ new Set([...ae, "entries"]);
var Te = /* @__PURE__ */ new Set([...ae]);
var St = /* @__PURE__ */ new Set([...Te, "actions", "entries"]);
var xt = /* @__PURE__ */ new Set(["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS", "HEAD", "prerender", "trailingSlash", "config", "entries"]);
var rn = Y(ae);
var nn = Y(jt);
var sn = Y(Te);
var on = Y(St);
var an = Y(xt);
var Je = ({ html: e }) => e;
var Fe = () => false;
var Ge = ({ type: e }) => e === "js" || e === "css";
var Xr = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var Yr = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function Ot(e, t, r4, n) {
  const s2 = new URL(e.url);
  if (t.csrf_check_origin && Be(e) && (e.method === "POST" || e.method === "PUT" || e.method === "PATCH" || e.method === "DELETE") && e.headers.get("origin") !== s2.origin) {
    const w4 = ke(403, `Cross-site ${e.method} form submissions are forbidden`);
    return e.headers.get("accept") === "application/json" ? Ee(w4.body, { status: w4.status }) : A2(w4.body.message, { status: w4.status });
  }
  let a3;
  try {
    a3 = Ft(s2.pathname);
  } catch {
    return A2("Malformed URI", { status: 400 });
  }
  let i3 = null, c2 = {};
  if (p && !n.prerendering?.fallback) {
    if (!a3.startsWith(p))
      return A2("Not found", { status: 404 });
    a3 = a3.slice(p.length) || "/";
  }
  const d3 = Xt(a3);
  let o2;
  if (d3 && (a3 = Ne(a3) || "/", s2.pathname = Ne(s2.pathname) || "/", o2 = s2.searchParams.get(Ie)?.split("").map((h4) => h4 === "1"), s2.searchParams.delete(Ie)), !n.prerendering?.fallback) {
    const h4 = await r4._.matchers();
    for (const w4 of r4._.routes) {
      const g2 = w4.pattern.exec(a3);
      if (!g2)
        continue;
      const m2 = Ut(g2, w4.params, h4);
      if (m2) {
        i3 = w4, c2 = Gt(m2);
        break;
      }
    }
  }
  let u3;
  const l2 = {};
  let _ = {};
  const f4 = { cookies: null, fetch: null, getClientAddress: n.getClientAddress || (() => {
    throw new Error("@sveltejs/adapter-vercel does not specify getClientAddress. Please raise an issue");
  }), locals: {}, params: c2, platform: n.platform, request: e, route: { id: i3?.id ?? null }, setHeaders: (h4) => {
    for (const w4 in h4) {
      const g2 = w4.toLowerCase(), m2 = h4[w4];
      if (g2 === "set-cookie")
        throw new Error("Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies");
      if (g2 in l2)
        throw new Error(`"${w4}" header is already set`);
      l2[g2] = m2, n.prerendering && g2 === "cache-control" && (n.prerendering.cache = m2);
    }
  }, url: s2, isDataRequest: d3, isSubRequest: n.depth > 0 };
  let y2 = { transformPageChunk: Je, filterSerializedResponseHeaders: Fe, preload: Ge };
  try {
    if (i3) {
      if (s2.pathname === p || s2.pathname === p + "/")
        u3 = "always";
      else if (i3.page) {
        const b4 = await Promise.all([...i3.page.layouts.map(($2) => $2 == null ? $2 : r4._.nodes[$2]()), r4._.nodes[i3.page.leaf]()]);
        u3 = q2(b4, "trailingSlash");
      } else
        i3.endpoint && (u3 = (await i3.endpoint()).trailingSlash);
      if (!d3) {
        const b4 = Se(s2.pathname, u3 ?? "never");
        if (b4 !== s2.pathname && !n.prerendering?.fallback)
          return new Response(void 0, { status: 308, headers: { "x-sveltekit-normalize": "1", location: (b4.startsWith("//") ? s2.origin + b4 : b4) + (s2.search === "?" ? "" : s2.search) } });
      }
    }
    const { cookies: h4, new_cookies: w4, get_cookie_header: g2, set_internal: m2 } = Wr(e, s2, u3 ?? "never");
    _ = w4, f4.cookies = h4, f4.fetch = Br({ event: f4, options: t, manifest: r4, state: n, get_cookie_header: g2, set_internal: m2 }), n.prerendering && !n.prerendering.fallback && Qe(s2);
    const v2 = await t.hooks.handle({ event: f4, resolve: (b4, $2) => p3(b4, $2).then((E2) => {
      for (const S2 in l2) {
        const O2 = l2[S2];
        E2.headers.set(S2, O2);
      }
      return Me(E2.headers, Object.values(_)), n.prerendering && b4.route.id !== null && E2.headers.set("x-sveltekit-routeid", encodeURI(b4.route.id)), E2;
    }) });
    if (v2.status === 200 && v2.headers.has("etag")) {
      let b4 = e.headers.get("if-none-match");
      b4?.startsWith('W/"') && (b4 = b4.substring(2));
      const $2 = v2.headers.get("etag");
      if (b4 === $2) {
        const E2 = new Headers({ etag: $2 });
        for (const S2 of ["cache-control", "content-location", "date", "expires", "vary", "set-cookie"]) {
          const O2 = v2.headers.get(S2);
          O2 && E2.set(S2, O2);
        }
        return new Response(void 0, { status: 304, headers: E2 });
      }
    }
    if (d3 && v2.status >= 300 && v2.status <= 308) {
      const b4 = v2.headers.get("location");
      if (b4)
        return we(new D(v2.status, b4));
    }
    return v2;
  } catch (h4) {
    if (h4 instanceof D) {
      const w4 = d3 ? we(h4) : i3?.page && st(f4) ? at(h4) : se(h4.status, h4.location);
      return Me(w4.headers, Object.values(_)), w4;
    }
    return await Pe(f4, t, h4);
  }
  async function p3(h4, w4) {
    try {
      if (w4) {
        if ("ssr" in w4)
          throw new Error("ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197");
        y2 = { transformPageChunk: w4.transformPageChunk || Je, filterSerializedResponseHeaders: w4.filterSerializedResponseHeaders || Fe, preload: w4.preload || Ge };
      }
      if (n.prerendering?.fallback)
        return await X({ event: h4, options: t, manifest: r4, state: n, page_config: { ssr: false, csr: true }, status: 200, error: null, branch: [], fetched: [], resolve_opts: y2 });
      if (i3) {
        const g2 = h4.request.method;
        let m2;
        if (d3)
          m2 = await Cr(h4, i3, t, r4, n, o2, u3 ?? "never");
        else if (i3.endpoint && (!i3.page || Jt(h4)))
          m2 = await Wt(h4, await i3.endpoint(), n);
        else if (i3.page)
          if (Xr.has(g2))
            m2 = await qr(h4, i3.page, t, r4, n, y2);
          else {
            const v2 = new Set(Yr);
            if ((await r4._.nodes[i3.page.leaf]())?.server?.actions && v2.add("POST"), g2 === "OPTIONS")
              m2 = new Response(null, { status: 204, headers: { allow: Array.from(v2.values()).join(", ") } });
            else {
              const $2 = [...v2].reduce((E2, S2) => (E2[S2] = true, E2), {});
              m2 = Xe($2, g2);
            }
          }
        else
          throw new Error("This should never happen");
        if (e.method === "GET" && i3.page && i3.endpoint) {
          const v2 = m2.headers.get("vary")?.split(",")?.map((b4) => b4.trim().toLowerCase());
          v2?.includes("accept") || v2?.includes("*") || (m2 = new Response(m2.body, { status: m2.status, statusText: m2.statusText, headers: new Headers(m2.headers) }), m2.headers.append("Vary", "Accept"));
        }
        return m2;
      }
      return n.error ? A2("Internal Server Error", { status: 500 }) : n.depth === 0 ? await $t({ event: h4, options: t, manifest: r4, state: n, status: 404, error: new Error(`Not found: ${h4.url.pathname}`), resolve_opts: y2 }) : n.prerendering ? A2("not found", { status: 404 }) : await fetch(e);
    } catch (g2) {
      return await Pe(h4, t, g2);
    } finally {
      h4.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      }, h4.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function Kr(e, { public_prefix: t, private_prefix: r4 }) {
  return Object.fromEntries(Object.entries(e).filter(([n]) => n.startsWith(r4) && (t === "" || !n.startsWith(t))));
}
function Qr(e, { public_prefix: t, private_prefix: r4 }) {
  return Object.fromEntries(Object.entries(e).filter(([n]) => n.startsWith(t) && (r4 === "" || !n.startsWith(r4))));
}
var _e3, _t3;
var cn = class {
  constructor(t) {
    __privateAdd(this, _e3, void 0);
    __privateAdd(this, _t3, void 0);
    __privateSet(this, _e3, z), __privateSet(this, _t3, t);
  }
  async init({ env: t }) {
    if (T2(Kr(t, { public_prefix: __privateGet(this, _e3).env_public_prefix, private_prefix: __privateGet(this, _e3).env_private_prefix })), U(Qr(t, { public_prefix: __privateGet(this, _e3).env_public_prefix, private_prefix: __privateGet(this, _e3).env_private_prefix })), !__privateGet(this, _e3).hooks)
      try {
        const r4 = await B();
        __privateGet(this, _e3).hooks = { handle: r4.handle || (({ event: n, resolve: s2 }) => s2(n)), handleError: r4.handleError || (({ error: n }) => console.error(n)), handleFetch: r4.handleFetch || (({ request: n, fetch: s2 }) => s2(n)) };
      } catch (r4) {
        throw r4;
      }
  }
  async respond(t, r4) {
    if (!(t instanceof Request))
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    return Ot(t, __privateGet(this, _e3), __privateGet(this, _t3), { ...r4, error: false, depth: 0 });
  }
};
_e3 = new WeakMap();
_t3 = new WeakMap();

// .svelte-kit/vercel-tmp/fn/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ?? (value = value = fn());
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set([".htaccess", "android-chrome-192x192.png", "android-chrome-512x512.png", "apple-touch-icon-120x120-precomposed.png", "apple-touch-icon-120x120.png", "apple-touch-icon-152x152-precomposed.png", "apple-touch-icon-152x152.png", "apple-touch-icon-180x180-precomposed.png", "apple-touch-icon-180x180.png", "apple-touch-icon-60x60-precomposed.png", "apple-touch-icon-60x60.png", "apple-touch-icon-76x76-precomposed.png", "apple-touch-icon-76x76.png", "apple-touch-icon-precomposed.png", "apple-touch-icon.png", "browserconfig.xml", "favicon.ico", "manifest.json", "mstile-144x144.png", "mstile-150x150.png", "mstile-310x150.png", "mstile-310x310.png", "mstile-70x70.png", "pokeball-icon.svg", "safari-pinned-tab.svg", "search-icon.svg"]),
    mimeTypes: { ".png": "image/png", ".xml": "application/xml", ".ico": "image/vnd.microsoft.icon", ".json": "application/json", ".svg": "image/svg+xml" },
    _: {
      client: { "start": "_app/immutable/entry/start.27df6174.js", "app": "_app/immutable/entry/app.05bf1095.js", "imports": ["_app/immutable/entry/start.27df6174.js", "_app/immutable/chunks/scheduler.9c5f2736.js", "_app/immutable/chunks/singletons.dcbdcdf6.js", "_app/immutable/entry/app.05bf1095.js", "_app/immutable/chunks/preload-helper.a4192956.js", "_app/immutable/chunks/scheduler.9c5f2736.js", "_app/immutable/chunks/index.bc42b1b4.js"], "stylesheets": [], "fonts": [] },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/pokemon/[id]",
          pattern: /^\/pokemon\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      }
    }
  };
})();

// .svelte-kit/vercel-tmp/fn/edge.js
var server = new cn(manifest);
var initialized = server.init({
  env: (
    /** @type {Record<string, string>} */
    process.env
  )
});
var edge_default = async (request, context) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return (
        /** @type {string} */
        request.headers.get("x-forwarded-for")
      );
    },
    platform: {
      context
    }
  });
};
export {
  edge_default as default
};
/*!
* cookie
* Copyright(c) 2012-2014 Roman Shtylman
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
//# sourceMappingURL=index.js.map
