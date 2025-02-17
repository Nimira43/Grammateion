import{getAuth as w}from"@clerk/tanstack-start/server";import y from"tiny-invariant";import{defaultTransformer as p,isRedirect as m,isNotFound as g}from"@tanstack/react-router";import{b as _}from"./http.mjs";import"h3";import"unctx";import"node:async_hooks";function x(e,r,t){return Object.assign(e,{url:"https://localhost:3000"})}function F(e){return e instanceof Headers?new Headers(e):Array.isArray(e)?new Headers(e):typeof e=="object"?new Headers(e):new Headers}function b(...e){return e.reduce((r,t)=>{const n=F(t);for(const[s,a]of n.entries())r.set(s,a);return r},new Headers)}const O=[];function l(e,r){const t=r||e||{};return typeof t.method>"u"&&(t.method="GET"),{options:t,middleware:n=>l(void 0,Object.assign(t,{middleware:n})),validator:n=>l(void 0,Object.assign(t,{validator:n})),handler:(...n)=>{const[s,a]=n;Object.assign(t,{...s,extractedFn:s,serverFn:a}),y(s.url,"createServerFn must be called with a function that is marked with the 'use server' pragma. Are you using the @tanstack/start-vite-plugin ?");const i=[...t.middleware||[],H(t)];return Object.assign(async o=>h(i,"client",{...s,method:t.method,data:o?.data,headers:o?.headers,context:{}}).then(d=>{if(d.error)throw d.error;return d.result}),{...s,__executeServer:async o=>{const d=o instanceof FormData?S(o):o;return await h(i,"server",{...s,...d}).then(c=>({result:c.result,error:c.error,context:c.sendContext}))}})}}}function S(e){const r=e.get("__TSR_CONTEXT");if(e.delete("__TSR_CONTEXT"),typeof r!="string")return{context:{},data:e};try{return{context:p.parse(r),data:e}}catch{return{data:e}}}function T(e){const r=new Set,t=[],n=s=>{s.forEach(a=>{a.options.middleware&&n(a.options.middleware),r.has(a)||(r.add(a),t.push(a))})};return n(e),t}const f=async(e,r,t)=>e({...r,next:async(n={})=>t({...r,...n,context:{...r.context,...n.context},sendContext:{...r.sendContext,...n.sendContext??{}},headers:b(r.headers,n.headers),result:n.result!==void 0?n.result:r.result,error:n.error??r.error})});function E(e,r){if(e==null)return{};if("~standard"in e){const t=e["~standard"].validate(r);if(t instanceof Promise)throw new Error("Async validation not supported");if(t.issues)throw new Error(JSON.stringify(t.issues,void 0,2));return t.value}if("parse"in e)return e.parse(r);if(typeof e=="function")return e(r);throw new Error("Invalid validator type!")}async function h(e,r,t){const n=T([...O,...e]),s=async a=>{const i=n.shift();if(!i)return a;i.options.validator&&(r!=="client"||i.options.validateClient)&&(a.data=await E(i.options.validator,a.data));const o=r==="client"?i.options.client:i.options.server;return o?f(o,a,async d=>{const u=i.options.clientAfter;if(r==="client"&&u){const c=await s(d);return f(u,{...d,...c},v=>v)}return s(d).catch(c=>{if(m(c)||g(c))return{...d,error:c};throw c})}):s(a)};return s({...t,headers:t.headers||{},sendContext:t.sendContext||{},context:t.context||{}})}function H(e){return{_types:void 0,options:{validator:e.validator,validateClient:e.validateClient,client:async({next:r,sendContext:t,...n})=>{var s;const a=await((s=e.extractedFn)==null?void 0:s.call(e,{...n,context:t}));return r(a)},server:async({next:r,...t})=>{var n;const s=await((n=e.serverFn)==null?void 0:n.call(e,t));return r({...t,result:s})}}}}const M=l({method:"GET"}).handler(x(A),async()=>(await w(_()))?.userId);function A(e){return M.__executeServer(e)}export{A as $$function0,M as getSignedInUserId};
