const c={context:void 0,registry:void 0};function $(e){c.context=e}function Me(){return{...c.context,id:`${c.context.id}${c.context.count++}-`,count:0}}const Ve=(e,t)=>e===t,X=Symbol("solid-proxy"),W={equals:Ve};let q=null,Se=$e;const T=1,G=2,Ee={owned:null,cleanups:null,context:null,owner:null},ne={};var d=null;let u=null,De=null,y=null,E=null,x=null,J=0;function Ae(e,t){const n=y,s=d,i=e.length===0,r=t===void 0?s:t,o=i?Ee:{owned:null,cleanups:null,context:r?r.context:null,owner:r},l=i?e:()=>e(()=>A(()=>v(o)));d=o,y=null;try{return O(l,!0)}finally{y=n,d=s}}function k(e,t){t=t?Object.assign({},W,t):W;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(u&&u.running&&u.sources.has(n)?i=i(n.tValue):i=i(n.value)),Te(n,i));return[Pe.bind(n),s]}function de(e,t,n){const s=U(e,t,!0,T);B(s)}function M(e,t,n){const s=U(e,t,!1,T);B(s)}function Pt(e,t,n){Se=Ue;const s=U(e,t,!1,T),i=V&&fe(V);i&&(s.suspense=i),s.user=!0,x?x.push(s):B(s)}function C(e,t,n){n=n?Object.assign({},W,n):W;const s=U(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,B(s),Pe.bind(s)}function Fe(e){return e&&typeof e=="object"&&"then"in e}function He(e,t,n){let s,i,r;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,r={}):(s=e,i=t,r={});let o=null,l=ne,f=null,g=!1,a=!1,h="initialValue"in r,m=typeof s=="function"&&C(s);const S=new Set,[P,N]=(r.storage||k)(r.initialValue),[j,L]=k(void 0),[_,Z]=k(void 0,{equals:!1}),[ue,ce]=k(h?"ready":"unresolved");if(c.context){f=`${c.context.id}${c.context.count++}`;let w;r.ssrLoadFrom==="initial"?l=r.initialValue:c.load&&(w=c.load(f))&&(l=w)}function D(w,p,b,F){return o===w&&(o=null,F!==void 0&&(h=!0),(w===l||p===l)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(F,{value:p})),l=ne,u&&w&&g?(u.promises.delete(w),g=!1,O(()=>{u.running=!0,ae(p,b)},!1)):ae(p,b)),p}function ae(w,p){O(()=>{p===void 0&&N(()=>w),ce(p!==void 0?"errored":h?"ready":"unresolved"),L(p);for(const b of S.keys())b.decrement();S.clear()},!1)}function ee(){const w=V&&fe(V),p=P(),b=j();if(b!==void 0&&!o)throw b;return y&&!y.user&&w&&de(()=>{_(),o&&(w.resolved&&u&&g?u.promises.add(o):S.has(w)||(w.increment(),S.add(w)))}),p}function te(w=!0){if(w!==!1&&a)return;a=!1;const p=m?m():s;if(g=u&&u.running,p==null||p===!1){D(o,A(P));return}u&&o&&u.promises.delete(o);const b=l!==ne?l:A(()=>i(p,{value:P(),refetching:w}));return Fe(b)?(o=b,"value"in b?(b.status==="success"?D(o,b.value,void 0,p):D(o,void 0,void 0,p),b):(a=!0,queueMicrotask(()=>a=!1),O(()=>{ce(h?"refreshing":"pending"),Z()},!1),b.then(F=>D(b,F,void 0,p),F=>D(b,void 0,ve(F),p)))):(D(o,b,void 0,p),b)}return Object.defineProperties(ee,{state:{get:()=>ue()},error:{get:()=>j()},loading:{get(){const w=ue();return w==="pending"||w==="refreshing"}},latest:{get(){if(!h)return ee();const w=j();if(w&&!o)throw w;return P()}}}),m?de(()=>te(!1)):te(!1),[ee,{refetch:te,mutate:N}]}function Tt(e){return O(e,!1)}function A(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function $t(e,t,n){const s=Array.isArray(e);let i,r=n&&n.defer;return o=>{let l;if(s){l=Array(e.length);for(let g=0;g<e.length;g++)l[g]=e[g]()}else l=e();if(r)return r=!1,o;const f=A(()=>t(l,i,o));return i=l,f}}function Ce(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Ie(e,t){q||(q=Symbol("error")),d=U(void 0,void 0,!0),d.context={...d.context,[q]:[t]},u&&u.running&&u.sources.add(d);try{return e()}catch(n){K(n)}finally{d=d.owner}}function Be(){return d}function Nt(e,t){const n=d,s=y;d=e,y=null;try{return O(t,!0)}catch(i){K(i)}finally{d=n,y=s}}function kt(e){if(u&&u.running)return e(),u.done;const t=y,n=d;return Promise.resolve().then(()=>{y=t,d=n;let s;return V&&(s=u||(u={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(i=>s.resolve=i)),s.running=!0),O(e,!1),y=d=null,s?s.done:void 0})}const[vt,he]=k(!1);function _e(e){x.push.apply(x,e),e.length=0}function Oe(e,t){const n=Symbol("context");return{id:n,Provider:Ke(n),defaultValue:e}}function fe(e){return d&&d.context&&d.context[e.id]!==void 0?d.context[e.id]:e.defaultValue}function qe(e){const t=C(e),n=C(()=>ie(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let V;function Ge(){return V||(V=Oe())}function Pe(){const e=u&&u.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===T)B(this);else{const t=E;E=null,O(()=>z(this),!1),E=t}if(y){const t=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(t)):(y.sources=[this],y.sourceSlots=[t]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return e&&u.sources.has(this)?this.tValue:this.value}function Te(e,t,n){let s=u&&u.running&&u.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(u){const i=u.running;(i||!n&&u.sources.has(e))&&(u.sources.add(e),e.tValue=t),i||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&O(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=u&&u.running;o&&u.disposed.has(r)||((o?!r.tState:!r.state)&&(r.pure?E.push(r):x.push(r),r.observers&&Ne(r)),o?r.tState=T:r.state=T)}if(E.length>1e6)throw E=[],new Error},!1)}return t}function B(e){if(!e.fn)return;v(e);const t=J;ge(e,u&&u.running&&u.sources.has(e)?e.tValue:e.value,t),u&&!u.running&&u.sources.has(e)&&queueMicrotask(()=>{O(()=>{u&&(u.running=!0),y=d=e,ge(e,e.tValue,t),y=d=null},!1)})}function ge(e,t,n){let s;const i=d,r=y;y=d=e;try{s=e.fn(t)}catch(o){return e.pure&&(u&&u.running?(e.tState=T,e.tOwned&&e.tOwned.forEach(v),e.tOwned=void 0):(e.state=T,e.owned&&e.owned.forEach(v),e.owned=null)),e.updatedAt=n+1,K(o)}finally{y=r,d=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Te(e,s,!0):u&&u.running&&e.pure?(u.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function U(e,t,n,s=T,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:n};return u&&u.running&&(r.state=0,r.tState=s),d===null||d!==Ee&&(u&&u.running&&d.pure?d.tOwned?d.tOwned.push(r):d.tOwned=[r]:d.owned?d.owned.push(r):d.owned=[r]),r}function Q(e){const t=u&&u.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===G)return z(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);){if(t&&u.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let i=e,r=n[s+1];for(;(i=i.owner)&&i!==r;)if(u.disposed.has(i))return}if((t?e.tState:e.state)===T)B(e);else if((t?e.tState:e.state)===G){const i=E;E=null,O(()=>z(e,n[0]),!1),E=i}}}function O(e,t){if(E)return e();let n=!1;t||(E=[]),x?n=!0:x=[],J++;try{const s=e();return Re(n),s}catch(s){n||(x=null),E=null,K(s)}}function Re(e){if(E&&($e(E),E=null),e)return;let t;if(u){if(!u.promises.size&&!u.queue.size){const s=u.sources,i=u.disposed;x.push.apply(x,u.effects),t=u.resolve;for(const r of x)"tState"in r&&(r.state=r.tState),delete r.tState;u=null,O(()=>{for(const r of i)v(r);for(const r of s){if(r.value=r.tValue,r.owned)for(let o=0,l=r.owned.length;o<l;o++)v(r.owned[o]);r.tOwned&&(r.owned=r.tOwned),delete r.tValue,delete r.tOwned,r.tState=0}he(!1)},!1)}else if(u.running){u.running=!1,u.effects.push.apply(u.effects,x),x=null,he(!0);return}}const n=x;x=null,n.length&&O(()=>Se(n),!1),t&&t()}function $e(e){for(let t=0;t<e.length;t++)Q(e[t])}function Ue(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:Q(s)}if(c.context){if(c.count){c.effects||(c.effects=[]),c.effects.push(...e.slice(0,n));return}else c.effects&&(e=[...c.effects,...e],n+=c.effects.length,delete c.effects);$()}for(t=0;t<n;t++)Q(e[t])}function z(e,t){const n=u&&u.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];if(i.sources){const r=n?i.tState:i.state;r===T?i!==t&&(!i.updatedAt||i.updatedAt<J)&&Q(i):r===G&&z(i,t)}}}function Ne(e){const t=u&&u.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=G:s.state=G,s.pure?E.push(s):x.push(s),s.observers&&Ne(s))}}function v(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(u&&u.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)v(e.tOwned[t]);delete e.tOwned}ke(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)v(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}u&&u.running?e.tState=0:e.state=0}function ke(e,t){if(t||(e.tState=0,u.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)ke(e.owned[n])}function ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ye(e,t,n){try{for(const s of t)s(e)}catch(s){K(s,n&&n.owner||null)}}function K(e,t=d){const n=q&&t&&t.context&&t.context[q],s=ve(e);if(!n)throw s;x?x.push({fn(){ye(s,n,t)},state:T}):ye(s,n,t)}function ie(e){if(typeof e=="function"&&!e.length)return ie(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ie(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ke(e,t){return function(s){let i;return M(()=>i=A(()=>(d.context={...d.context,[e]:s.value},qe(()=>s.children))),void 0),i}}let je=!1;function Ye(){je=!0}function Xe(e,t){if(je&&c.context){const n=c.context;$(Me());const s=A(()=>e(t||{}));return $(n),s}return A(()=>e(t||{}))}function Y(){return!0}const re={get(e,t,n){return t===X?n:e.get(t)},has(e,t){return t===X?!0:e.has(t)},set:Y,deleteProperty:Y,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Y,deleteProperty:Y}},ownKeys(e){return e.keys()}};function se(e){return(e=typeof e=="function"?e():e)?e:{}}function We(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function jt(...e){let t=!1;for(let o=0;o<e.length;o++){const l=e[o];t=t||!!l&&X in l,e[o]=typeof l=="function"?(t=!0,C(l)):l}if(t)return new Proxy({get(o){for(let l=e.length-1;l>=0;l--){const f=se(e[l])[o];if(f!==void 0)return f}},has(o){for(let l=e.length-1;l>=0;l--)if(o in se(e[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<e.length;l++)o.push(...Object.keys(se(e[l])));return[...new Set(o)]}},re);const n={},s=Object.create(null);for(let o=e.length-1;o>=0;o--){const l=e[o];if(!l)continue;const f=Object.getOwnPropertyNames(l);for(let g=f.length-1;g>=0;g--){const a=f[g];if(a==="__proto__"||a==="constructor")continue;const h=Object.getOwnPropertyDescriptor(l,a);if(!s[a])s[a]=h.get?{enumerable:!0,configurable:!0,get:We.bind(n[a]=[h.get.bind(l)])}:h.value!==void 0?h:void 0;else{const m=n[a];m&&(h.get?m.push(h.get.bind(l)):h.value!==void 0&&m.push(()=>h.value))}}}const i={},r=Object.keys(s);for(let o=r.length-1;o>=0;o--){const l=r[o],f=s[l];f&&f.get?Object.defineProperty(i,l,f):i[l]=f?f.value:void 0}return i}function Qe(e,...t){if(X in e){const i=new Set(t.length>1?t.flat():t[0]),r=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},re));return r.push(new Proxy({get(o){return i.has(o)?void 0:e[o]},has(o){return i.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!i.has(o))}},re)),r}const n={},s=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const r=Object.getOwnPropertyDescriptor(e,i),o=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let l=!1,f=0;for(const g of t)g.includes(i)&&(l=!0,o?s[f][i]=r.value:Object.defineProperty(s[f],i,r)),++f;l||(o?n[i]=r.value:Object.defineProperty(n,i,r))}return[...s,n]}function Lt(e){let t,n;const s=i=>{const r=c.context;if(r){const[l,f]=k();c.count||(c.count=0),c.count++,(n||(n=e())).then(g=>{$(r),c.count--,f(()=>g.default),$()}),t=l}else if(!t){const[l]=He(()=>(n||(n=e())).then(f=>f.default));t=l}let o;return C(()=>(o=t())&&A(()=>{if(!r)return o(i);const l=c.context;$(r);const f=o(i);return $(l),f}))};return s.preload=()=>n||((n=e()).then(i=>t=()=>i.default),n),s}const ze=e=>`Stale read from <${e}>.`;function Mt(e){const t=e.keyed,n=C(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return C(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?A(()=>i(t?s:()=>{if(!A(n))throw ze("Show");return e.when})):i}return e.fallback},void 0,void 0)}let I;function Vt(){I&&[...I].forEach(e=>e())}function Dt(e){let t;c.context&&c.load&&(t=c.load(c.context.id+c.context.count));const[n,s]=k(t,void 0);return I||(I=new Set),I.add(s),Ce(()=>I.delete(s)),C(()=>{let i;if(i=n()){const r=e.fallback;return typeof r=="function"&&r.length?A(()=>r(i,()=>s())):r}return Ie(()=>e.children,s)},void 0,void 0)}const Je=Oe();function Ft(e){let t=0,n,s,i,r,o;const[l,f]=k(!1),g=Ge(),a={increment:()=>{++t===1&&f(!0)},decrement:()=>{--t===0&&f(!1)},inFallback:l,effects:[],resolved:!1},h=Be();if(c.context&&c.load){const P=c.context.id+c.context.count;let N=c.load(P);if(N&&(typeof N!="object"||N.status!=="success"?i=N:c.gather(P)),i&&i!=="$$f"){const[j,L]=k(void 0,{equals:!1});r=j,i.then(()=>{if(c.done)return L();c.gather(P),$(s),L(),$()},_=>{o=_,L()})}}const m=fe(Je);m&&(n=m.register(a.inFallback));let S;return Ce(()=>S&&S()),Xe(g.Provider,{value:a,get children(){return C(()=>{if(o)throw o;if(s=c.context,r)return r(),r=void 0;s&&i==="$$f"&&$();const P=C(()=>e.children);return C(N=>{const j=a.inFallback(),{showContent:L=!0,showFallback:_=!0}=n?n():{};if((!j||i&&i!=="$$f")&&L)return a.resolved=!0,S&&S(),S=s=i=void 0,_e(a.effects),P();if(_)return S?N:Ae(Z=>(S=Z,s&&($({id:s.id+"f",count:0}),s=void 0),e.fallback),h)})})}})}const Ze=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],et=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ze]),tt=new Set(["innerHTML","textContent","innerText","children"]),nt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),st=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function it(e,t){const n=st[e];return typeof n=="object"?n[t]?n.$:void 0:n}const rt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ot=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),lt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ft(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,f=t[i-1].nextSibling,g=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const a=r<s?l?n[l-1].nextSibling:n[r-l]:f;for(;l<r;)e.insertBefore(n[l++],a)}else if(r===l)for(;o<i;)(!g||!g.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],a),t[i]=n[r]}else{if(!g){g=new Map;let h=l;for(;h<r;)g.set(n[h],h++)}const a=g.get(t[o]);if(a!=null)if(l<a&&a<r){let h=o,m=1,S;for(;++h<i&&h<r&&!((S=g.get(t[h]))==null||S!==a+m);)m++;if(m>a-l){const P=t[o];for(;l<a;)e.insertBefore(n[l++],P)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const we="_$DX_DELEGATE";function ut(e,t,n,s={}){let i;return Ae(r=>{i=r,t===document?e():mt(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Ht(e,t,n){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},r=()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function ct(e,t=window.document){const n=t[we]||(t[we]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,Le))}}function oe(e,t,n){c.context&&e.isConnected||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function at(e,t,n,s){c.context&&e.isConnected||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function dt(e,t){c.context&&e.isConnected||(t==null?e.removeAttribute("class"):e.className=t)}function ht(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function gt(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,o;for(r=0,o=i.length;r<o;r++){const l=i[r];!l||l==="undefined"||t[l]||(pe(e,l,!1),delete n[l])}for(r=0,o=s.length;r<o;r++){const l=s[r],f=!!t[l];!l||l==="undefined"||n[l]===f||!f||(pe(e,l,!0),n[l]=f)}return n}function yt(e,t,n){if(!t)return n?oe(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function wt(e,t={},n,s){const i={};return s||M(()=>i.children=R(e,t.children,i.children)),M(()=>typeof t.ref=="function"?pt(t.ref,e):t.ref=e),M(()=>bt(e,t,n,!0,i,!0)),i}function pt(e,t,n){return A(()=>e(t,n))}function mt(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);M(i=>R(e,t(),i,n),s)}function bt(e,t,n,s,i={},r=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=me(e,o,null,i[o],n,r)}for(const o in t){if(o==="children")continue;const l=t[o];i[o]=me(e,o,l,i[o],n,r)}}function xt(e,t,n={}){c.completed=globalThis._$HY.completed,c.events=globalThis._$HY.events,c.load=i=>globalThis._$HY.r[i],c.has=i=>i in globalThis._$HY.r,c.gather=i=>xe(t,i),c.registry=new Map,c.context={id:n.renderId||"",count:0},xe(t,n.renderId);const s=ut(e,t,[...t.childNodes],n);return c.context=null,s}function St(e){let t,n;return!c.context||!(t=c.registry.get(n=At()))?e():(c.completed&&c.completed.add(t),c.registry.delete(n),t)}function It(e){let t=e,n=0,s=[];if(c.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Bt(){c.events&&!c.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=c;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;Le(s),t.shift()}}),c.events.queued=!0)}function Et(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function pe(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function me(e,t,n,s,i,r){let o,l,f,g,a;if(t==="style")return yt(e,n,s);if(t==="classList")return gt(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);s&&e.removeEventListener(h,s),n&&e.addEventListener(h,n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);s&&e.removeEventListener(h,s,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),m=rt.has(h);if(!m&&s){const S=Array.isArray(s)?s[0]:s;e.removeEventListener(h,S)}(m||n)&&(ht(e,h,n,m),m&&ct([h]))}else if(t.slice(0,5)==="attr:")oe(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(f=tt.has(t))||!i&&((g=it(t,e.tagName))||(l=et.has(t)))||(o=e.nodeName.includes("-"))){if(a)t=t.slice(5),l=!0;else if(c.context&&e.isConnected)return n;t==="class"||t==="className"?dt(e,n):o&&!l&&!f?e[Et(t)]=n:e[g||t]=n}else{const h=i&&t.indexOf(":")>-1&&lt[t.split(":")[0]];h?at(e,h,t,n):oe(e,nt[t]||t,n)}return n}function Le(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),c.registry&&!c.done&&(c.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function R(e,t,n,s,i){const r=!!c.context&&e.isConnected;if(r){!n&&(n=[...e.childNodes]);let f=[];for(let g=0;g<n.length;g++){const a=n[g];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():f.push(a)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(r)return n;if(o==="number"&&(t=t.toString()),l){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=H(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(r)return n;n=H(e,n,s)}else{if(o==="function")return M(()=>{let f=t();for(;typeof f=="function";)f=f();n=R(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[],g=n&&Array.isArray(n);if(le(f,t,n,i))return M(()=>n=R(e,f,n,s,!0)),()=>n;if(r){if(!f.length)return n;if(s===void 0)return[...e.childNodes];let a=f[0],h=[a];for(;(a=a.nextSibling)!==s;)h.push(a);return n=h}if(f.length===0){if(n=H(e,n,s),l)return n}else g?n.length===0?be(e,f,s):ft(e,n,f):(n&&H(e),be(e,f));n=f}else if(t.nodeType){if(r&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=H(e,n,s,t);H(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function le(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],f=n&&n[e.length],g;if(!(l==null||l===!0||l===!1))if((g=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=le(e,l,f)||i;else if(g==="function")if(s){for(;typeof l=="function";)l=l();i=le(e,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||i}else e.push(l),i=!0;else{const a=String(l);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return i}function be(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function H(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const f=l.parentNode===e;!r&&!o?f?e.replaceChild(i,l):e.insertBefore(i,n):f&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function xe(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!c.registry.has(r)&&c.registry.set(r,i)}}function At(){const e=c.context;return`${e.id}${e.count++}`}const _t=()=>{},qt=!1,Ct="http://www.w3.org/2000/svg";function Ot(e,t=!1){return t?document.createElementNS(Ct,e):document.createElement(e)}const Gt=(...e)=>(Ye(),xt(...e));function Rt(e){const[t,n]=Qe(e,["component"]),s=C(()=>t.component);return C(()=>{const i=s();switch(typeof i){case"function":return A(()=>i(n));case"string":const r=ot.has(i),o=c.context?St():Ot(i,r);return wt(o,n,r),o}})}export{kt as A,Tt as B,qt as C,_t as D,Dt as E,Vt as F,Pt as G,Rt as H,Mt as S,C as a,Xe as b,qe as c,Ae as d,k as e,Ce as f,Be as g,ct as h,St as i,mt as j,Ft as k,Lt as l,jt as m,Gt as n,$t as o,It as p,oe as q,Bt as r,wt as s,Ht as t,A as u,Qe as v,Nt as w,fe as x,Oe as y,M as z};
