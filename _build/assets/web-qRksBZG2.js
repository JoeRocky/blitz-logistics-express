const a={context:void 0,registry:void 0};function M(e){a.context=e}function He(){return{...a.context,id:`${a.context.id}${a.context.count++}-`,count:0}}const Be=(e,t)=>e===t,Z=Symbol("solid-proxy"),_e=Symbol("solid-track"),ee={equals:Be};let K=null,$e=ve;const j=1,Y=2,Pe={owned:null,cleanups:null,context:null,owner:null},oe={};var g=null;let c=null,Ge=null,w=null,C=null,A=null,se=0;function R(e,t){const n=w,s=g,i=e.length===0,r=t===void 0?s:t,l=i?Pe:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=i?e:()=>e(()=>O(()=>F(l)));g=l,w=null;try{return T(o,!0)}finally{w=n,g=s}}function V(e,t){t=t?Object.assign({},ee,t):ee;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(c&&c.running&&c.sources.has(n)?i=i(n.tValue):i=i(n.value)),Le(n,i));return[Ne.bind(n),s]}function we(e,t,n){const s=J(e,t,!0,j);U(s)}function H(e,t,n){const s=J(e,t,!1,j);U(s)}function ke(e,t,n){$e=Qe;const s=J(e,t,!1,j),i=B&&ge(B);i&&(s.suspense=i),(!n||!n.render)&&(s.user=!0),A?A.push(s):U(s)}function P(e,t,n){n=n?Object.assign({},ee,n):ee;const s=J(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,U(s),Ne.bind(s)}function qe(e){return e&&typeof e=="object"&&"then"in e}function Re(e,t,n){let s,i,r;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,r={}):(s=e,i=t,r={});let l=null,o=oe,f=null,d=!1,u=!1,h="initialValue"in r,y=typeof s=="function"&&P(s);const m=new Set,[S,$]=(r.storage||V)(r.initialValue),[N,L]=V(void 0),[E,k]=V(void 0,{equals:!1}),[v,I]=V(h?"ready":"unresolved");if(a.context){f=`${a.context.id}${a.context.count++}`;let b;r.ssrLoadFrom==="initial"?o=r.initialValue:a.load&&(b=a.load(f))&&(o=b)}function D(b,p,x,_){return l===b&&(l=null,_!==void 0&&(h=!0),(b===o||p===o)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(_,{value:p})),o=oe,c&&b&&d?(c.promises.delete(b),d=!1,T(()=>{c.running=!0,ye(p,x)},!1)):ye(p,x)),p}function ye(b,p){T(()=>{p===void 0&&$(()=>b),I(p!==void 0?"errored":h?"ready":"unresolved"),L(p);for(const x of m.keys())x.decrement();m.clear()},!1)}function ie(){const b=B&&ge(B),p=S(),x=N();if(x!==void 0&&!l)throw x;return w&&!w.user&&b&&we(()=>{E(),l&&(b.resolved&&c&&d?c.promises.add(l):m.has(b)||(b.increment(),m.add(b)))}),p}function re(b=!0){if(b!==!1&&u)return;u=!1;const p=y?y():s;if(d=c&&c.running,p==null||p===!1){D(l,O(S));return}c&&l&&c.promises.delete(l);const x=o!==oe?o:O(()=>i(p,{value:S(),refetching:b}));return qe(x)?(l=x,"value"in x?(x.status==="success"?D(l,x.value,void 0,p):D(l,void 0,void 0,p),x):(u=!0,queueMicrotask(()=>u=!1),T(()=>{I(h?"refreshing":"pending"),k()},!1),x.then(_=>D(x,_,void 0,p),_=>D(x,void 0,Ve(_),p)))):(D(l,x,void 0,p),x)}return Object.defineProperties(ie,{state:{get:()=>v()},error:{get:()=>N()},loading:{get(){const b=v();return b==="pending"||b==="refreshing"}},latest:{get(){if(!h)return ie();const b=N();if(b&&!l)throw b;return S()}}}),y?we(()=>re(!1)):re(!1),[ie,{refetch:re,mutate:$}]}function jt(e){return T(e,!1)}function O(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function Mt(e,t,n){const s=Array.isArray(e);let i,r=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let d=0;d<e.length;d++)o[d]=e[d]()}else o=e();if(r)return r=!1,l;const f=O(()=>t(o,i,l));return i=o,f}}function Vt(e){ke(()=>O(e))}function X(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Ue(e,t){K||(K=Symbol("error")),g=J(void 0,void 0,!0),g.context={...g.context,[K]:[t]},c&&c.running&&c.sources.add(g);try{return e()}catch(n){Q(n)}finally{g=g.owner}}function It(){return w}function fe(){return g}function Ke(e,t){const n=g,s=w;g=e,w=null;try{return T(t,!0)}catch(i){Q(i)}finally{g=n,w=s}}function Dt(e){if(c&&c.running)return e(),c.done;const t=w,n=g;return Promise.resolve().then(()=>{w=t,g=n;let s;return B&&(s=c||(c={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(i=>s.resolve=i)),s.running=!0),T(e,!1),w=g=null,s?s.done:void 0})}const[Ft,me]=V(!1);function Ye(e){A.push.apply(A,e),e.length=0}function Te(e,t){const n=Symbol("context");return{id:n,Provider:ze(n),defaultValue:e}}function ge(e){return g&&g.context&&g.context[e.id]!==void 0?g.context[e.id]:e.defaultValue}function Xe(e){const t=P(e),n=P(()=>ue(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let B;function We(){return B||(B=Te())}function Ne(){const e=c&&c.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===j)U(this);else{const t=C;C=null,T(()=>ne(this),!1),C=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return e&&c.sources.has(this)?this.tValue:this.value}function Le(e,t,n){let s=c&&c.running&&c.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(c){const i=c.running;(i||!n&&c.sources.has(e))&&(c.sources.add(e),e.tValue=t),i||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&T(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=c&&c.running;l&&c.disposed.has(r)||((l?!r.tState:!r.state)&&(r.pure?C.push(r):A.push(r),r.observers&&je(r)),l?r.tState=j:r.state=j)}if(C.length>1e6)throw C=[],new Error},!1)}return t}function U(e){if(!e.fn)return;F(e);const t=se;be(e,c&&c.running&&c.sources.has(e)?e.tValue:e.value,t),c&&!c.running&&c.sources.has(e)&&queueMicrotask(()=>{T(()=>{c&&(c.running=!0),w=g=e,be(e,e.tValue,t),w=g=null},!1)})}function be(e,t,n){let s;const i=g,r=w;w=g=e;try{s=e.fn(t)}catch(l){return e.pure&&(c&&c.running?(e.tState=j,e.tOwned&&e.tOwned.forEach(F),e.tOwned=void 0):(e.state=j,e.owned&&e.owned.forEach(F),e.owned=null)),e.updatedAt=n+1,Q(l)}finally{w=r,g=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Le(e,s,!0):c&&c.running&&e.pure?(c.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function J(e,t,n,s=j,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return c&&c.running&&(r.state=0,r.tState=s),g===null||g!==Pe&&(c&&c.running&&g.pure?g.tOwned?g.tOwned.push(r):g.tOwned=[r]:g.owned?g.owned.push(r):g.owned=[r]),r}function te(e){const t=c&&c.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===Y)return ne(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<se);){if(t&&c.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let i=e,r=n[s+1];for(;(i=i.owner)&&i!==r;)if(c.disposed.has(i))return}if((t?e.tState:e.state)===j)U(e);else if((t?e.tState:e.state)===Y){const i=C;C=null,T(()=>ne(e,n[0]),!1),C=i}}}function T(e,t){if(C)return e();let n=!1;t||(C=[]),A?n=!0:A=[],se++;try{const s=e();return Je(n),s}catch(s){n||(A=null),C=null,Q(s)}}function Je(e){if(C&&(ve(C),C=null),e)return;let t;if(c){if(!c.promises.size&&!c.queue.size){const s=c.sources,i=c.disposed;A.push.apply(A,c.effects),t=c.resolve;for(const r of A)"tState"in r&&(r.state=r.tState),delete r.tState;c=null,T(()=>{for(const r of i)F(r);for(const r of s){if(r.value=r.tValue,r.owned)for(let l=0,o=r.owned.length;l<o;l++)F(r.owned[l]);r.tOwned&&(r.owned=r.tOwned),delete r.tValue,delete r.tOwned,r.tState=0}me(!1)},!1)}else if(c.running){c.running=!1,c.effects.push.apply(c.effects,A),A=null,me(!0);return}}const n=A;A=null,n.length&&T(()=>$e(n),!1),t&&t()}function ve(e){for(let t=0;t<e.length;t++)te(e[t])}function Qe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:te(s)}if(a.context){if(a.count){a.effects||(a.effects=[]),a.effects.push(...e.slice(0,n));return}else a.effects&&(e=[...a.effects,...e],n+=a.effects.length,delete a.effects);M()}for(t=0;t<n;t++)te(e[t])}function ne(e,t){const n=c&&c.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];if(i.sources){const r=n?i.tState:i.state;r===j?i!==t&&(!i.updatedAt||i.updatedAt<se)&&te(i):r===Y&&ne(i,t)}}}function je(e){const t=c&&c.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=Y:s.state=Y,s.pure?C.push(s):A.push(s),s.observers&&je(s))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(c&&c.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)F(e.tOwned[t]);delete e.tOwned}Me(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}c&&c.running?e.tState=0:e.state=0}function Me(e,t){if(t||(e.tState=0,c.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Me(e.owned[n])}function Ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function pe(e,t,n){try{for(const s of t)s(e)}catch(s){Q(s,n&&n.owner||null)}}function Q(e,t=g){const n=K&&t&&t.context&&t.context[K],s=Ve(e);if(!n)throw s;A?A.push({fn(){pe(s,n,t)},state:j}):pe(s,n,t)}function ue(e){if(typeof e=="function"&&!e.length)return ue(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ue(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function ze(e,t){return function(s){let i;return H(()=>i=O(()=>(g.context={...g.context,[e]:s.value},Xe(()=>s.children))),void 0),i}}const Ze=Symbol("fallback");function xe(e){for(let t=0;t<e.length;t++)e[t]()}function et(e,t,n={}){let s=[],i=[],r=[],l=0,o=t.length>1?[]:null;return X(()=>xe(r)),()=>{let f=e()||[],d,u;return f[_e],O(()=>{let y=f.length,m,S,$,N,L,E,k,v,I;if(y===0)l!==0&&(xe(r),r=[],s=[],i=[],l=0,o&&(o=[])),n.fallback&&(s=[Ze],i[0]=R(D=>(r[0]=D,n.fallback())),l=1);else if(l===0){for(i=new Array(y),u=0;u<y;u++)s[u]=f[u],i[u]=R(h);l=y}else{for($=new Array(y),N=new Array(y),o&&(L=new Array(y)),E=0,k=Math.min(l,y);E<k&&s[E]===f[E];E++);for(k=l-1,v=y-1;k>=E&&v>=E&&s[k]===f[v];k--,v--)$[v]=i[k],N[v]=r[k],o&&(L[v]=o[k]);for(m=new Map,S=new Array(v+1),u=v;u>=E;u--)I=f[u],d=m.get(I),S[u]=d===void 0?-1:d,m.set(I,u);for(d=E;d<=k;d++)I=s[d],u=m.get(I),u!==void 0&&u!==-1?($[u]=i[d],N[u]=r[d],o&&(L[u]=o[d]),u=S[u],m.set(I,u)):r[d]();for(u=E;u<y;u++)u in $?(i[u]=$[u],r[u]=N[u],o&&(o[u]=L[u],o[u](u))):i[u]=R(h);i=i.slice(0,l=y),s=f.slice(0)}return i});function h(y){if(r[u]=y,o){const[m,S]=V(u);return o[u]=S,t(f[u],m)}return t(f[u])}}}let Ie=!1;function tt(){Ie=!0}function nt(e,t){if(Ie&&a.context){const n=a.context;M(He());const s=O(()=>e(t||{}));return M(n),s}return O(()=>e(t||{}))}function z(){return!0}const ce={get(e,t,n){return t===Z?n:e.get(t)},has(e,t){return t===Z?!0:e.has(t)},set:z,deleteProperty:z,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:z,deleteProperty:z}},ownKeys(e){return e.keys()}};function le(e){return(e=typeof e=="function"?e():e)?e:{}}function st(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ht(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&Z in o,e[l]=typeof o=="function"?(t=!0,P(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const f=le(e[o])[l];if(f!==void 0)return f}},has(l){for(let o=e.length-1;o>=0;o--)if(l in le(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(le(e[o])));return[...new Set(l)]}},ce);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const f=Object.getOwnPropertyNames(o);for(let d=f.length-1;d>=0;d--){const u=f[d];if(u==="__proto__"||u==="constructor")continue;const h=Object.getOwnPropertyDescriptor(o,u);if(!s[u])s[u]=h.get?{enumerable:!0,configurable:!0,get:st.bind(n[u]=[h.get.bind(o)])}:h.value!==void 0?h:void 0;else{const y=n[u];y&&(h.get?y.push(h.get.bind(o)):h.value!==void 0&&y.push(()=>h.value))}}}const i={},r=Object.keys(s);for(let l=r.length-1;l>=0;l--){const o=r[l],f=s[o];f&&f.get?Object.defineProperty(i,o,f):i[o]=f?f.value:void 0}return i}function it(e,...t){if(Z in e){const i=new Set(t.length>1?t.flat():t[0]),r=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},ce));return r.push(new Proxy({get(l){return i.has(l)?void 0:e[l]},has(l){return i.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!i.has(l))}},ce)),r}const n={},s=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const r=Object.getOwnPropertyDescriptor(e,i),l=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let o=!1,f=0;for(const d of t)d.includes(i)&&(o=!0,l?s[f][i]=r.value:Object.defineProperty(s[f],i,r)),++f;o||(l?n[i]=r.value:Object.defineProperty(n,i,r))}return[...s,n]}function Bt(e){let t,n;const s=i=>{const r=a.context;if(r){const[o,f]=V();a.count||(a.count=0),a.count++,(n||(n=e())).then(d=>{M(r),a.count--,f(()=>d.default),M()}),t=o}else if(!t){const[o]=Re(()=>(n||(n=e())).then(f=>f.default));t=o}let l;return P(()=>(l=t())&&O(()=>{if(!r)return l(i);const o=a.context;M(r);const f=l(i);return M(o),f}))};return s.preload=()=>n||((n=e()).then(i=>t=()=>i.default),n),s}let rt=0;function _t(){const e=a.context;return e?`${e.id}${e.count++}`:`cl-${rt++}`}const ot=e=>`Stale read from <${e}>.`;function Gt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(et(()=>e.each,e.children,t||void 0))}function qt(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return P(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?O(()=>i(t?s:()=>{if(!O(n))throw ot("Show");return e.when})):i}return e.fallback},void 0,void 0)}let q;function Rt(){q&&[...q].forEach(e=>e())}function Ut(e){let t;a.context&&a.load&&(t=a.load(a.context.id+a.context.count));const[n,s]=V(t,void 0);return q||(q=new Set),q.add(s),X(()=>q.delete(s)),P(()=>{let i;if(i=n()){const r=e.fallback;return typeof r=="function"&&r.length?O(()=>r(i,()=>s())):r}return Ue(()=>e.children,s)},void 0,void 0)}const lt=Te();function Kt(e){let t=0,n,s,i,r,l;const[o,f]=V(!1),d=We(),u={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:o,effects:[],resolved:!1},h=fe();if(a.context&&a.load){const S=a.context.id+a.context.count;let $=a.load(S);if($&&(typeof $!="object"||$.status!=="success"?i=$:a.gather(S)),i&&i!=="$$f"){const[N,L]=V(void 0,{equals:!1});r=N,i.then(()=>{if(a.done)return L();a.gather(S),M(s),L(),M()},E=>{l=E,L()})}}const y=ge(lt);y&&(n=y.register(u.inFallback));let m;return X(()=>m&&m()),nt(d.Provider,{value:u,get children(){return P(()=>{if(l)throw l;if(s=a.context,r)return r(),r=void 0;s&&i==="$$f"&&M();const S=P(()=>e.children);return P($=>{const N=u.inFallback(),{showContent:L=!0,showFallback:E=!0}=n?n():{};if((!N||i&&i!=="$$f")&&L)return u.resolved=!0,m&&m(),m=s=i=void 0,Ye(u.effects),S();if(E)return m?$:R(k=>(m=k,s&&(M({id:s.id+"f",count:0}),s=void 0),e.fallback),h)})})}})}const ft=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ut=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ft]),ct=new Set(["innerHTML","textContent","innerText","children"]),at=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),dt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ht(e,t){const n=dt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const gt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),yt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),wt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function mt(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,f=t[i-1].nextSibling,d=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const u=r<s?o?n[o-1].nextSibling:n[r-o]:f;for(;o<r;)e.insertBefore(n[o++],u)}else if(r===o)for(;l<i;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],u),t[i]=n[r]}else{if(!d){d=new Map;let h=o;for(;h<r;)d.set(n[h],h++)}const u=d.get(t[l]);if(u!=null)if(o<u&&u<r){let h=l,y=1,m;for(;++h<i&&h<r&&!((m=d.get(t[h]))==null||m!==u+y);)y++;if(y>u-o){const S=t[l];for(;o<u;)e.insertBefore(n[o++],S)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Se="_$DX_DELEGATE";function bt(e,t,n,s={}){let i;return R(r=>{i=r,t===document?e():de(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Yt(e,t,n){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},r=()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function pt(e,t=window.document){const n=t[Se]||(t[Se]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,De))}}function ae(e,t,n){a.context&&e.isConnected||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function xt(e,t,n,s){a.context&&e.isConnected||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function St(e,t){a.context&&e.isConnected||(t==null?e.removeAttribute("class"):e.className=t)}function At(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function Et(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,l;for(r=0,l=i.length;r<l;r++){const o=i[r];!o||o==="undefined"||t[o]||(Ae(e,o,!1),delete n[o])}for(r=0,l=s.length;r<l;r++){const o=s[r],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(Ae(e,o,!0),n[o]=f)}return n}function Ct(e,t,n){if(!t)return n?ae(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function Ot(e,t={},n,s){const i={};return s||H(()=>i.children=W(e,t.children,i.children)),H(()=>typeof t.ref=="function"?$t(t.ref,e):t.ref=e),H(()=>Pt(e,t,n,!0,i,!0)),i}function $t(e,t,n){return O(()=>e(t,n))}function de(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return W(e,t,s,n);H(i=>W(e,t(),i,n),s)}function Pt(e,t,n,s,i={},r=!1){t||(t={});for(const l in i)if(!(l in t)){if(l==="children")continue;i[l]=Ee(e,l,null,i[l],n,r)}for(const l in t){if(l==="children")continue;const o=t[l];i[l]=Ee(e,l,o,i[l],n,r)}}function kt(e,t,n={}){a.completed=globalThis._$HY.completed,a.events=globalThis._$HY.events,a.load=i=>globalThis._$HY.r[i],a.has=i=>i in globalThis._$HY.r,a.gather=i=>Oe(t,i),a.registry=new Map,a.context={id:n.renderId||"",count:0},Oe(t,n.renderId);const s=bt(e,t,[...t.childNodes],n);return a.context=null,s}function Tt(e){let t,n;return!a.context||!(t=a.registry.get(n=Lt()))?e():(a.completed&&a.completed.add(t),a.registry.delete(n),t)}function Xt(e){let t=e,n=0,s=[];if(a.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Wt(){a.events&&!a.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=a;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;De(s),t.shift()}}),a.events.queued=!0)}function Nt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ae(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function Ee(e,t,n,s,i,r){let l,o,f,d,u;if(t==="style")return Ct(e,n,s);if(t==="classList")return Et(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);s&&e.removeEventListener(h,s),n&&e.addEventListener(h,n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);s&&e.removeEventListener(h,s,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),y=gt.has(h);if(!y&&s){const m=Array.isArray(s)?s[0]:s;e.removeEventListener(h,m)}(y||n)&&(At(e,h,n,y),y&&pt([h]))}else if(t.slice(0,5)==="attr:")ae(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(f=ct.has(t))||!i&&((d=ht(t,e.tagName))||(o=ut.has(t)))||(l=e.nodeName.includes("-"))){if(u)t=t.slice(5),o=!0;else if(a.context&&e.isConnected)return n;t==="class"||t==="className"?St(e,n):l&&!o&&!f?e[Nt(t)]=n:e[d||t]=n}else{const h=i&&t.indexOf(":")>-1&&wt[t.split(":")[0]];h?xt(e,h,t,n):ae(e,at[t]||t,n)}return n}function De(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),a.registry&&!a.done&&(a.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function W(e,t,n,s,i){const r=!!a.context&&e.isConnected;if(r){!n&&(n=[...e.childNodes]);let f=[];for(let d=0;d<n.length;d++){const u=n[d];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():f.push(u)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(r)return n;if(l==="number"&&(t=t.toString()),o){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=G(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(r)return n;n=G(e,n,s)}else{if(l==="function")return H(()=>{let f=t();for(;typeof f=="function";)f=f();n=W(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],d=n&&Array.isArray(n);if(he(f,t,n,i))return H(()=>n=W(e,f,n,s,!0)),()=>n;if(r){if(!f.length)return n;if(s===void 0)return[...e.childNodes];let u=f[0],h=[u];for(;(u=u.nextSibling)!==s;)h.push(u);return n=h}if(f.length===0){if(n=G(e,n,s),o)return n}else d?n.length===0?Ce(e,f,s):mt(e,n,f):(n&&G(e),Ce(e,f));n=f}else if(t.nodeType){if(r&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=G(e,n,s,t);G(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function he(e,t,n,s){let i=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],f=n&&n[e.length],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=he(e,o,f)||i;else if(d==="function")if(s){for(;typeof o=="function";)o=o();i=he(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function Ce(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function G(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const f=o.parentNode===e;!r&&!l?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function Oe(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!a.registry.has(r)&&a.registry.set(r,i)}}function Lt(){const e=a.context;return`${e.id}${e.count++}`}const Jt=()=>{},Qt=!1,vt="http://www.w3.org/2000/svg";function Fe(e,t=!1){return t?document.createElementNS(vt,e):document.createElement(e)}const zt=(...e)=>(tt(),kt(...e));function Zt(e){const{useShadow:t}=e,n=document.createTextNode(""),s=()=>e.mount||document.body,i=fe();let r,l=!!a.context;return ke(()=>{l&&(fe().user=l=!1),r||(r=Ke(i,()=>P(()=>e.children)));const o=s();if(o instanceof HTMLHeadElement){const[f,d]=V(!1),u=()=>d(!0);R(h=>de(o,()=>f()?h():r(),null)),X(u)}else{const f=Fe(e.isSVG?"g":"div",e.isSVG),d=t&&f.attachShadow?f.attachShadow({mode:"open"}):f;Object.defineProperty(f,"_$host",{get(){return n.parentNode},configurable:!0}),de(d,r),o.appendChild(f),e.ref&&e.ref(f),X(()=>o.removeChild(f))}},void 0,{render:!l}),n}function en(e){const[t,n]=it(e,["component"]),s=P(()=>t.component);return P(()=>{const i=s();switch(typeof i){case"function":return O(()=>i(n));case"string":const r=yt.has(i),l=a.context?Tt():Fe(i,r);return Ot(l,n,r),l}})}export{Z as $,ae as A,Kt as B,zt as C,Ke as D,Ut as E,Dt as F,jt as G,Qt as H,Jt as I,Rt as J,_e as K,It as L,Gt as M,en as N,a as O,Zt as P,qt as S,P as a,nt as b,Xe as c,R as d,V as e,X as f,fe as g,pt as h,Tt as i,de as j,ke as k,Bt as l,Ht as m,it as n,Mt as o,Vt as p,Te as q,Wt as r,Ot as s,Yt as t,O as u,ge as v,_t as w,H as x,St as y,Xt as z};
