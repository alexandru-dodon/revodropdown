let e=!1,t=!1;const n="undefined"!=typeof window?window:{},l=n.document||{head:{}},s={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},o=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=(e,t,n)=>{n&&n.map((([n,l,o])=>{const c=a(e,n),i=r(t,o),f=u(n);s.ael(c,l,i,f),(t.o=t.o||[]).push((()=>s.rel(c,l,i,f)))}))},r=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){Y(e)}},a=(e,t)=>4&t?l:e,u=e=>0!=(2&e),f="http://www.w3.org/1999/xlink",d=new WeakMap,p=e=>"sc-"+e.p,y={},$=e=>"object"==(e=typeof e)||"function"===e,h=(e,t,...n)=>{let l=null,s=null,o=!1,c=!1,i=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!$(l))&&(l+=""),o&&c?i[i.length-1].$+=l:i.push(o?w(null,l):l),c=o)};if(r(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,i,b);const a=w(e,null);return a.h=t,i.length>0&&(a.m=i),a.g=s,a},w=(e,t)=>({t:0,v:e,$:t,j:null,m:null,h:null,g:null}),m={},b={forEach:(e,t)=>e.map(g).forEach(t),map:(e,t)=>e.map(g).map(t).map(v)},g=e=>({vattrs:e.h,vchildren:e.m,vkey:e.g,vname:e.k,vtag:e.v,vtext:e.$}),v=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),h(e.vtag,t,...e.vchildren||[])}const t=w(e.vtag,e.vtext);return t.h=e.vattrs,t.m=e.vchildren,t.g=e.vkey,t.k=e.vname,t},j=(e,t,l,o,c,i)=>{if(l!==o){let r=X(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,n=O(l),s=O(o);t.remove(...n.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!n.includes(e))))}else if("style"===t){for(const t in l)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)l&&o[t]===l[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("key"===t);else if("ref"===t)o&&o(e);else if(r||"o"!==t[0]||"n"!==t[1]){const n=$(o);if((r||n&&null!==o)&&!c)try{if(e.tagName.includes("-"))e[t]=o;else{let n=null==o?"":o;"list"===t?r=!1:null!=l&&e[t]==n||(e[t]=n)}}catch(e){}let s=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,s=!0),null==o||!1===o?!1===o&&""!==e.getAttribute(t)||(s?e.removeAttributeNS(f,t):e.removeAttribute(t)):(!r||4&i||c)&&!n&&(o=!0===o?"":o,s?e.setAttributeNS(f,t,o):e.setAttribute(t,o))}else t="-"===t[2]?t.slice(3):X(n,a)?a.slice(2):a[2]+t.slice(3),l&&s.rel(e,t,l,!1),o&&s.ael(e,t,o,!1)}},k=/\s/,O=e=>e?e.split(k):[],S=(e,t,n,l)=>{const s=11===t.j.nodeType&&t.j.host?t.j.host:t.j,o=e&&e.h||y,c=t.h||y;for(l in o)l in c||j(s,l,o[l],void 0,n,t.t);for(l in c)j(s,l,o[l],c[l],n,t.t)},M=(t,n,s)=>{let o,c,i=n.m[s],r=0;if(null!==i.$)o=i.j=l.createTextNode(i.$);else{if(e||(e="svg"===i.v),o=i.j=l.createElementNS(e?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i.v),e&&"foreignObject"===i.v&&(e=!1),S(null,i,e),i.m)for(r=0;r<i.m.length;++r)c=M(t,i,r),c&&o.appendChild(c);"svg"===i.v?e=!1:"foreignObject"===o.tagName&&(e=!0)}return o},x=(e,t,n,l,s,o)=>{let c,i=e;for(;s<=o;++s)l[s]&&(c=M(null,n,s),c&&(l[s].j=c,i.insertBefore(c,t)))},C=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.j,L(l),s.remove())},P=(e,t)=>e.v===t.v&&e.g===t.g,E=(t,n)=>{const l=n.j=t.j,s=t.m,o=n.m,c=n.v,i=n.$;null===i?(e="svg"===c||"foreignObject"!==c&&e,S(t,n,e),null!==s&&null!==o?((e,t,n,l)=>{let s,o,c=0,i=0,r=0,a=0,u=t.length-1,f=t[0],d=t[u],p=l.length-1,y=l[0],$=l[p];for(;c<=u&&i<=p;)if(null==f)f=t[++c];else if(null==d)d=t[--u];else if(null==y)y=l[++i];else if(null==$)$=l[--p];else if(P(f,y))E(f,y),f=t[++c],y=l[++i];else if(P(d,$))E(d,$),d=t[--u],$=l[--p];else if(P(f,$))E(f,$),e.insertBefore(f.j,d.j.nextSibling),f=t[++c],$=l[--p];else if(P(d,y))E(d,y),e.insertBefore(d.j,f.j),d=t[--u],y=l[++i];else{for(r=-1,a=c;a<=u;++a)if(t[a]&&null!==t[a].g&&t[a].g===y.g){r=a;break}r>=0?(o=t[r],o.v!==y.v?s=M(t&&t[i],n,r):(E(o,y),t[r]=void 0,s=o.j),y=l[++i]):(s=M(t&&t[i],n,i),y=l[++i]),s&&f.j.parentNode.insertBefore(s,f.j)}c>u?x(e,null==l[p+1]?null:l[p+1].j,n,l,i,p):i>p&&C(t,c,u)})(l,s,n,o):null!==o?(null!==t.$&&(l.textContent=""),x(l,null,n,o,0,o.length-1)):null!==s&&C(s,0,s.length-1),e&&"svg"===c&&(e=!1)):t.$!==i&&(l.data=i)},L=e=>{e.h&&e.h.ref&&e.h.ref(null),e.m&&e.m.map(L)},R=(e,t,n)=>{const l=(e=>J(e).O)(e);return{emit:e=>T(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},T=(e,t,n)=>{const l=s.ce(t,n);return e.dispatchEvent(l),l},W=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},A=(e,t)=>{if(e.t|=16,!(4&e.t))return W(e,e.M),re((()=>F(e,t)));e.t|=512},F=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>N(n,e,t))),e.u=null),l=N(n,"componentWillLoad")),V(l,(()=>H(e,n,t)))},H=async(e,t,n)=>{const s=e.O,o=s["s-rc"];n&&(e=>{const t=e.C;((e,t)=>{let n=p(t),s=te.get(n);if(e=11===e.nodeType?e:l,s)if("string"==typeof s){let t,o=d.get(e=e.head||e);o||d.set(e,o=new Set),o.has(n)||(t=l.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s])})(e.O.getRootNode(),t)})(e);((e,t)=>{const n=e.O,l=e.P||w(null,null),s=(e=>e&&e.v===m)(t)?t:h(null,null,t);s.v=null,s.t|=4,e.P=s,s.j=l.j=n,E(l,s)})(e,U(e,t)),o&&(o.map((e=>e())),s["s-rc"]=void 0);{const t=s["s-p"],n=()=>q(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},U=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(t){Y(t,e.O)}return t},q=e=>{const t=e.O,n=e.M;N(e.i,"componentDidRender"),64&e.t||(e.t|=64,_(t),e.L(t),n||D()),e.R(t),e.S&&(e.S(),e.S=void 0),512&e.t&&ie((()=>A(e,!1))),e.t&=-517},D=()=>{_(l.documentElement),ie((()=>T(n,"appload",{detail:{namespace:"revo-dropdown"}})))},N=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){Y(e)}},V=(e,t)=>e&&e.then?e.then(t):t(),_=e=>e.classList.add("hydrated"),z=(e,t,n)=>{if(t.T){e.watchers&&(t.W=e.watchers);const l=Object.entries(t.T),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>J(this).A.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=J(e),o=s.O,c=s.A.get(t),i=s.t,r=s.i;if(n=((e,t)=>null==e||$(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.T[t][0]),!(8&i&&void 0!==c||n===c)&&(s.A.set(t,n),r)){if(l.W&&128&i){const e=l.W[t];e&&e.map((e=>{try{r[e](n,c,t)}catch(e){Y(e,o)}}))}2==(18&i)&&A(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=J(this);return n.F.then((()=>n.i[e](...t)))}})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){s.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},B=e=>{N(e,"connectedCallback")},G=(e,t={})=>{const o=[],r=t.exclude||[],a=n.customElements,u=l.head,f=u.querySelector("meta[charset]"),d=l.createElement("style"),y=[];let $,h=!0;Object.assign(s,t),s.l=new URL(t.resourcesUrl||"./",l.baseURI).href,e.map((e=>e[1].map((t=>{const n={t:t[0],p:t[1],T:t[2],H:t[3]};n.T=t[2],n.H=t[3],n.W={};const l=n.p,u=class extends HTMLElement{constructor(e){super(e),Q(e=this,n)}connectedCallback(){$&&(clearTimeout($),$=null),h?y.push(this):s.jmp((()=>(e=>{if(0==(1&s.t)){const t=J(e),n=t.C,l=()=>{};if(1&t.t)i(e,t,n.H),B(t.i);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){W(t,t.M=n);break}}n.T&&Object.entries(n.T).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=ee(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.W=s.watchers,z(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){Y(e)}t.t&=-9,t.t|=128,e(),B(t.i)}if(s.style){let e=s.style;const t=p(n);if(!te.has(t)){const l=()=>{};((e,t,n)=>{let l=te.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,te.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,i=()=>A(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){s.jmp((()=>(()=>{if(0==(1&s.t)){const e=J(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),N(t,"disconnectedCallback")}})()))}componentOnReady(){return J(this).U}};n.q=e[0],r.includes(l)||a.get(l)||(o.push(l),a.define(l,z(u,n,1)))})))),d.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),u.insertBefore(d,f?f.nextSibling:u.firstChild),h=!1,y.length?y.map((e=>e.connectedCallback())):s.jmp((()=>$=setTimeout(D,30)))},I=new WeakMap,J=e=>I.get(e),K=(e,t)=>I.set(t.i=e,t),Q=(e,t)=>{const n={t:0,O:e,C:t,A:new Map};return n.F=new Promise((e=>n.R=e)),n.U=new Promise((e=>n.L=e)),e["s-p"]=[],e["s-rc"]=[],i(e,n,t.H),I.set(e,n)},X=(e,t)=>t in e,Y=(e,t)=>(0,console.error)(e,t),Z=new Map,ee=e=>{const t=e.p.replace(/-/g,"_"),n=e.q,l=Z.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(Z.set(n,e),e[t])),Y)},te=new Map,ne=[],le=[],se=(e,n)=>l=>{e.push(l),t||(t=!0,n&&4&s.t?ie(ce):s.raf(ce))},oe=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Y(e)}e.length=0},ce=()=>{oe(ne),oe(le),(t=ne.length>0)&&s.raf(ce)},ie=e=>o().then(e),re=se(le,!0);export{m as H,G as b,R as c,h,o as p,K as r}