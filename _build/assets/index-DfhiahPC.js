const c={context:void 0,registry:void 0};function $(e){c.context=e}function Ie(){return{...c.context,id:`${c.context.id}${c.context.count++}-`,count:0}}const _e=(e,n)=>e===n,ne=Symbol("solid-proxy"),X={equals:_e};let F=null,Fe=ve;const N=1,B=2,Oe={owned:null,cleanups:null,context:null,owner:null},ee={};var d=null;let u=null,Be=null,y=null,A=null,S=null,W=0;function Te(e,n){const t=y,s=d,i=e.length===0,r=n===void 0?s:n,l=i?Oe:{owned:null,cleanups:null,context:r?r.context:null,owner:r},o=i?e:()=>e(()=>C(()=>j(l)));d=l,y=null;try{return E(o,!0)}finally{y=t,d=s}}function v(e,n){n=n?Object.assign({},X,n):X;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(u&&u.running&&u.sources.has(t)?i=i(t.tValue):i=i(t.value)),$e(t,i));return[Ne.bind(t),s]}function de(e,n,t){const s=J(e,n,!0,N);K(s)}function k(e,n,t){const s=J(e,n,!1,N);K(s)}function T(e,n,t){t=t?Object.assign({},X,t):X;const s=J(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,K(s),Ne.bind(s)}function Ue(e){return e&&typeof e=="object"&&"then"in e}function De(e,n,t){let s,i,r;arguments.length===2&&typeof n=="object"||arguments.length===1?(s=!0,i=e,r={}):(s=e,i=n,r={});let l=null,o=ee,f=null,h=!1,a=!1,g="initialValue"in r,w=typeof s=="function"&&T(s);const x=new Set,[O,P]=(r.storage||v)(r.initialValue),[L,q]=v(void 0),[_,Q]=v(void 0,{equals:!1}),[fe,ce]=v(g?"ready":"unresolved");if(c.context){f=`${c.context.id}${c.context.count++}`;let p;r.ssrLoadFrom==="initial"?o=r.initialValue:c.load&&(p=c.load(f))&&(o=p)}function M(p,m,b,V){return l===p&&(l=null,V!==void 0&&(g=!0),(p===o||m===o)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(V,{value:m})),o=ee,u&&p&&h?(u.promises.delete(p),h=!1,E(()=>{u.running=!0,ae(m,b)},!1)):ae(m,b)),m}function ae(p,m){E(()=>{m===void 0&&P(()=>p),ce(m!==void 0?"errored":g?"ready":"unresolved"),q(m);for(const b of x.keys())b.decrement();x.clear()},!1)}function z(){const p=U&&ue(U),m=O(),b=L();if(b!==void 0&&!l)throw b;return y&&!y.user&&p&&de(()=>{_(),l&&(p.resolved&&u&&h?u.promises.add(l):x.has(p)||(p.increment(),x.add(p)))}),m}function Z(p=!0){if(p!==!1&&a)return;a=!1;const m=w?w():s;if(h=u&&u.running,m==null||m===!1){M(l,C(O));return}u&&l&&u.promises.delete(l);const b=o!==ee?o:C(()=>i(m,{value:O(),refetching:p}));return Ue(b)?(l=b,"value"in b?(b.status==="success"?M(l,b.value,void 0,m):M(l,void 0,void 0,m),b):(a=!0,queueMicrotask(()=>a=!1),E(()=>{ce(g?"refreshing":"pending"),Q()},!1),b.then(V=>M(b,V,void 0,m),V=>M(b,void 0,Le(V),m)))):(M(l,b,void 0,m),b)}return Object.defineProperties(z,{state:{get:()=>fe()},error:{get:()=>L()},loading:{get(){const p=fe();return p==="pending"||p==="refreshing"}},latest:{get(){if(!g)return z();const p=L();if(p&&!l)throw p;return O()}}}),w?de(()=>Z(!1)):Z(!1),[z,{refetch:Z,mutate:P}]}function vt(e){return E(e,!1)}function C(e){if(y===null)return e();const n=y;y=null;try{return e()}finally{y=n}}function kt(e,n,t){const s=Array.isArray(e);let i,r=t&&t.defer;return l=>{let o;if(s){o=Array(e.length);for(let h=0;h<e.length;h++)o[h]=e[h]()}else o=e();if(r)return r=!1,l;const f=C(()=>n(o,i,l));return i=o,f}}function oe(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Ke(e,n){F||(F=Symbol("error")),d=J(void 0,void 0,!0),d.context={...d.context,[F]:[n]},u&&u.running&&u.sources.add(d);try{return e()}catch(t){R(t)}finally{d=d.owner}}function Re(){return d}function jt(e,n){const t=d,s=y;d=e,y=null;try{return E(n,!0)}catch(i){R(i)}finally{d=t,y=s}}function Lt(e){if(u&&u.running)return e(),u.done;const n=y,t=d;return Promise.resolve().then(()=>{y=n,d=t;let s;return U&&(s=u||(u={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(i=>s.resolve=i)),s.running=!0),E(e,!1),y=d=null,s?s.done:void 0})}const[qt,he]=v(!1);function Ye(e){S.push.apply(S,e),e.length=0}function le(e,n){const t=Symbol("context");return{id:t,Provider:Je(t),defaultValue:e}}function ue(e){return d&&d.context&&d.context[e.id]!==void 0?d.context[e.id]:e.defaultValue}function Xe(e){const n=T(e),t=T(()=>se(n()));return t.toArray=()=>{const s=t();return Array.isArray(s)?s:s!=null?[s]:[]},t}let U;function Ge(){return U||(U=le())}function Ne(){const e=u&&u.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===N)K(this);else{const n=A;A=null,E(()=>G(this),!1),A=n}if(y){const n=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(n)):(y.sources=[this],y.sourceSlots=[n]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return e&&u.sources.has(this)?this.tValue:this.value}function $e(e,n,t){let s=u&&u.running&&u.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,n)){if(u){const i=u.running;(i||!t&&u.sources.has(e))&&(u.sources.add(e),e.tValue=n),i||(e.value=n)}else e.value=n;e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=u&&u.running;l&&u.disposed.has(r)||((l?!r.tState:!r.state)&&(r.pure?A.push(r):S.push(r),r.observers&&ke(r)),l?r.tState=N:r.state=N)}if(A.length>1e6)throw A=[],new Error},!1)}return n}function K(e){if(!e.fn)return;j(e);const n=W;ge(e,u&&u.running&&u.sources.has(e)?e.tValue:e.value,n),u&&!u.running&&u.sources.has(e)&&queueMicrotask(()=>{E(()=>{u&&(u.running=!0),y=d=e,ge(e,e.tValue,n),y=d=null},!1)})}function ge(e,n,t){let s;const i=d,r=y;y=d=e;try{s=e.fn(n)}catch(l){return e.pure&&(u&&u.running?(e.tState=N,e.tOwned&&e.tOwned.forEach(j),e.tOwned=void 0):(e.state=N,e.owned&&e.owned.forEach(j),e.owned=null)),e.updatedAt=t+1,R(l)}finally{y=r,d=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?$e(e,s,!0):u&&u.running&&e.pure?(u.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=t)}function J(e,n,t,s=N,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:d?d.context:null,pure:t};return u&&u.running&&(r.state=0,r.tState=s),d===null||d!==Oe&&(u&&u.running&&d.pure?d.tOwned?d.tOwned.push(r):d.tOwned=[r]:d.owned?d.owned.push(r):d.owned=[r]),r}function Pe(e){const n=u&&u.running;if((n?e.tState:e.state)===0)return;if((n?e.tState:e.state)===B)return G(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<W);){if(n&&u.disposed.has(e))return;(n?e.tState:e.state)&&t.push(e)}for(let s=t.length-1;s>=0;s--){if(e=t[s],n){let i=e,r=t[s+1];for(;(i=i.owner)&&i!==r;)if(u.disposed.has(i))return}if((n?e.tState:e.state)===N)K(e);else if((n?e.tState:e.state)===B){const i=A;A=null,E(()=>G(e,t[0]),!1),A=i}}}function E(e,n){if(A)return e();let t=!1;n||(A=[]),S?t=!0:S=[],W++;try{const s=e();return We(t),s}catch(s){t||(S=null),A=null,R(s)}}function We(e){if(A&&(ve(A),A=null),e)return;let n;if(u){if(!u.promises.size&&!u.queue.size){const s=u.sources,i=u.disposed;S.push.apply(S,u.effects),n=u.resolve;for(const r of S)"tState"in r&&(r.state=r.tState),delete r.tState;u=null,E(()=>{for(const r of i)j(r);for(const r of s){if(r.value=r.tValue,r.owned)for(let l=0,o=r.owned.length;l<o;l++)j(r.owned[l]);r.tOwned&&(r.owned=r.tOwned),delete r.tValue,delete r.tOwned,r.tState=0}he(!1)},!1)}else if(u.running){u.running=!1,u.effects.push.apply(u.effects,S),S=null,he(!0);return}}const t=S;S=null,t.length&&E(()=>Fe(t),!1),n&&n()}function ve(e){for(let n=0;n<e.length;n++)Pe(e[n])}function G(e,n){const t=u&&u.running;t?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];if(i.sources){const r=t?i.tState:i.state;r===N?i!==n&&(!i.updatedAt||i.updatedAt<W)&&Pe(i):r===B&&G(i,n)}}}function ke(e){const n=u&&u.running;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(n?!s.tState:!s.state)&&(n?s.tState=B:s.state=B,s.pure?A.push(s):S.push(s),s.observers&&ke(s))}}function j(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const r=i.pop(),l=t.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,t.observerSlots[s]=l)}}if(u&&u.running&&e.pure){if(e.tOwned){for(n=e.tOwned.length-1;n>=0;n--)j(e.tOwned[n]);delete e.tOwned}je(e,!0)}else if(e.owned){for(n=e.owned.length-1;n>=0;n--)j(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}u&&u.running?e.tState=0:e.state=0}function je(e,n){if(n||(e.tState=0,u.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)je(e.owned[t])}function Le(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ye(e,n,t){try{for(const s of n)s(e)}catch(s){R(s,t&&t.owner||null)}}function R(e,n=d){const t=F&&n&&n.context&&n.context[F],s=Le(e);if(!t)throw s;S?S.push({fn(){ye(s,t,n)},state:N}):ye(s,t,n)}function se(e){if(typeof e=="function"&&!e.length)return se(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=se(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function Je(e,n){return function(s){let i;return k(()=>i=C(()=>(d.context={...d.context,[e]:s.value},Xe(()=>s.children))),void 0),i}}let qe=!1;function Qe(){qe=!0}function Me(e,n){if(qe&&c.context){const t=c.context;$(Ie());const s=C(()=>e(n||{}));return $(t),s}return C(()=>e(n||{}))}function Y(){return!0}const ze={get(e,n,t){return n===ne?t:e.get(n)},has(e,n){return n===ne?!0:e.has(n)},set:Y,deleteProperty:Y,getOwnPropertyDescriptor(e,n){return{configurable:!0,enumerable:!0,get(){return e.get(n)},set:Y,deleteProperty:Y}},ownKeys(e){return e.keys()}};function te(e){return(e=typeof e=="function"?e():e)?e:{}}function Ze(){for(let e=0,n=this.length;e<n;++e){const t=this[e]();if(t!==void 0)return t}}function Mt(...e){let n=!1;for(let l=0;l<e.length;l++){const o=e[l];n=n||!!o&&ne in o,e[l]=typeof o=="function"?(n=!0,T(o)):o}if(n)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const f=te(e[o])[l];if(f!==void 0)return f}},has(l){for(let o=e.length-1;o>=0;o--)if(l in te(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(te(e[o])));return[...new Set(l)]}},ze);const t={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const f=Object.getOwnPropertyNames(o);for(let h=f.length-1;h>=0;h--){const a=f[h];if(a==="__proto__"||a==="constructor")continue;const g=Object.getOwnPropertyDescriptor(o,a);if(!s[a])s[a]=g.get?{enumerable:!0,configurable:!0,get:Ze.bind(t[a]=[g.get.bind(o)])}:g.value!==void 0?g:void 0;else{const w=t[a];w&&(g.get?w.push(g.get.bind(o)):g.value!==void 0&&w.push(()=>g.value))}}}const i={},r=Object.keys(s);for(let l=r.length-1;l>=0;l--){const o=r[l],f=s[o];f&&f.get?Object.defineProperty(i,o,f):i[o]=f?f.value:void 0}return i}function Vt(e){let n,t;const s=i=>{const r=c.context;if(r){const[o,f]=v();c.count||(c.count=0),c.count++,(t||(t=e())).then(h=>{$(r),c.count--,f(()=>h.default),$()}),n=o}else if(!n){const[o]=De(()=>(t||(t=e())).then(f=>f.default));n=o}let l;return T(()=>(l=n())&&C(()=>{if(!r)return l(i);const o=c.context;$(r);const f=l(i);return $(o),f}))};return s.preload=()=>t||((t=e()).then(i=>n=()=>i.default),t),s}let et=0;function tt(){const e=c.context;return e?`${e.id}${e.count++}`:`cl-${et++}`}const nt=e=>`Stale read from <${e}>.`;function Ht(e){const n=e.keyed,t=T(()=>e.when,void 0,{equals:(s,i)=>n?s===i:!s==!i});return T(()=>{const s=t();if(s){const i=e.children;return typeof i=="function"&&i.length>0?C(()=>i(n?s:()=>{if(!C(t))throw nt("Show");return e.when})):i}return e.fallback},void 0,void 0)}let I;function It(){I&&[...I].forEach(e=>e())}function _t(e){let n;c.context&&c.load&&(n=c.load(c.context.id+c.context.count));const[t,s]=v(n,void 0);return I||(I=new Set),I.add(s),oe(()=>I.delete(s)),T(()=>{let i;if(i=t()){const r=e.fallback;return typeof r=="function"&&r.length?C(()=>r(i,()=>s())):r}return Ke(()=>e.children,s)},void 0,void 0)}const st=le();function Ft(e){let n=0,t,s,i,r,l;const[o,f]=v(!1),h=Ge(),a={increment:()=>{++n===1&&f(!0)},decrement:()=>{--n===0&&f(!1)},inFallback:o,effects:[],resolved:!1},g=Re();if(c.context&&c.load){const O=c.context.id+c.context.count;let P=c.load(O);if(P&&(typeof P!="object"||P.status!=="success"?i=P:c.gather(O)),i&&i!=="$$f"){const[L,q]=v(void 0,{equals:!1});r=L,i.then(()=>{if(c.done)return q();c.gather(O),$(s),q(),$()},_=>{l=_,q()})}}const w=ue(st);w&&(t=w.register(a.inFallback));let x;return oe(()=>x&&x()),Me(h.Provider,{value:a,get children(){return T(()=>{if(l)throw l;if(s=c.context,r)return r(),r=void 0;s&&i==="$$f"&&$();const O=T(()=>e.children);return T(P=>{const L=a.inFallback(),{showContent:q=!0,showFallback:_=!0}=t?t():{};if((!L||i&&i!=="$$f")&&q)return a.resolved=!0,x&&x(),x=s=i=void 0,Ye(a.effects),O();if(_)return x?P:Te(Q=>(x=Q,s&&($({id:s.id+"f",count:0}),s=void 0),e.fallback),g)})})}})}const it=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],rt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...it]),ot=new Set(["innerHTML","textContent","innerText","children"]),lt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ut=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ft(e,n){const t=ut[e];return typeof t=="object"?t[n]?t.$:void 0:t}const ct=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),at={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function dt(e,n,t){let s=t.length,i=n.length,r=s,l=0,o=0,f=n[i-1].nextSibling,h=null;for(;l<i||o<r;){if(n[l]===t[o]){l++,o++;continue}for(;n[i-1]===t[r-1];)i--,r--;if(i===l){const a=r<s?o?t[o-1].nextSibling:t[r-o]:f;for(;o<r;)e.insertBefore(t[o++],a)}else if(r===o)for(;l<i;)(!h||!h.has(n[l]))&&n[l].remove(),l++;else if(n[l]===t[r-1]&&t[o]===n[i-1]){const a=n[--i].nextSibling;e.insertBefore(t[o++],n[l++].nextSibling),e.insertBefore(t[--r],a),n[i]=t[r]}else{if(!h){h=new Map;let g=o;for(;g<r;)h.set(t[g],g++)}const a=h.get(n[l]);if(a!=null)if(o<a&&a<r){let g=l,w=1,x;for(;++g<i&&g<r&&!((x=h.get(n[g]))==null||x!==a+w);)w++;if(w>a-o){const O=n[l];for(;o<a;)e.insertBefore(t[o++],O)}else e.replaceChild(t[o++],n[l++])}else l++;else n[l++].remove()}}}const pe="_$DX_DELEGATE";function ht(e,n,t,s={}){let i;return Te(r=>{i=r,n===document?e():St(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function Bt(e,n,t){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},r=()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function gt(e,n=window.document){const t=n[pe]||(n[pe]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];t.has(r)||(t.add(r),n.addEventListener(r,Ve))}}function ie(e,n,t){c.context&&e.isConnected||(t==null?e.removeAttribute(n):e.setAttribute(n,t))}function yt(e,n,t,s){c.context&&e.isConnected||(s==null?e.removeAttributeNS(n,t):e.setAttributeNS(n,t,s))}function pt(e,n){c.context&&e.isConnected||(n==null?e.removeAttribute("class"):e.className=n)}function mt(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=r=>i.call(e,t[1],r))}else e.addEventListener(n,t)}function wt(e,n,t={}){const s=Object.keys(n||{}),i=Object.keys(t);let r,l;for(r=0,l=i.length;r<l;r++){const o=i[r];!o||o==="undefined"||n[o]||(we(e,o,!1),delete t[o])}for(r=0,l=s.length;r<l;r++){const o=s[r],f=!!n[o];!o||o==="undefined"||t[o]===f||!f||(we(e,o,!0),t[o]=f)}return t}function bt(e,n,t){if(!n)return t?ie(e,"style"):n;const s=e.style;if(typeof n=="string")return s.cssText=n;typeof t=="string"&&(s.cssText=t=void 0),t||(t={}),n||(n={});let i,r;for(r in t)n[r]==null&&s.removeProperty(r),delete t[r];for(r in n)i=n[r],i!==t[r]&&(s.setProperty(r,i),t[r]=i);return t}function me(e,n={},t,s){const i={};return s||k(()=>i.children=D(e,n.children,i.children)),k(()=>typeof n.ref=="function"?xt(n.ref,e):n.ref=e),k(()=>At(e,n,t,!0,i,!0)),i}function xt(e,n,t){return C(()=>e(n,t))}function St(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return D(e,n,s,t);k(i=>D(e,n(),i,t),s)}function At(e,n,t,s,i={},r=!1){n||(n={});for(const l in i)if(!(l in n)){if(l==="children")continue;i[l]=be(e,l,null,i[l],t,r)}for(const l in n){if(l==="children")continue;const o=n[l];i[l]=be(e,l,o,i[l],t,r)}}function Et(e,n,t={}){c.completed=globalThis._$HY.completed,c.events=globalThis._$HY.events,c.load=i=>globalThis._$HY.r[i],c.has=i=>i in globalThis._$HY.r,c.gather=i=>Se(n,i),c.registry=new Map,c.context={id:t.renderId||"",count:0},Se(n,t.renderId);const s=ht(e,n,[...n.childNodes],t);return c.context=null,s}function Ut(e){let n,t;return!c.context||!(n=c.registry.get(t=Ot()))?e():(c.completed&&c.completed.add(n),c.registry.delete(t),n)}function Dt(e){let n=e,t=0,s=[];if(c.context)for(;n;){if(n.nodeType===8){const i=n.nodeValue;if(i==="$")t++;else if(i==="/"){if(t===0)return[n,s];t--}}s.push(n),n=n.nextSibling}return[n,s]}function Kt(){c.events&&!c.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=c;for(n.queued=!1;n.length;){const[t,s]=n[0];if(!e.has(t))return;Ve(s),n.shift()}}),c.events.queued=!0)}function Ct(e){return e.toLowerCase().replace(/-([a-z])/g,(n,t)=>t.toUpperCase())}function we(e,n,t){const s=n.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],t)}function be(e,n,t,s,i,r){let l,o,f,h,a;if(n==="style")return bt(e,t,s);if(n==="classList")return wt(e,t,s);if(t===s)return s;if(n==="ref")r||t(e);else if(n.slice(0,3)==="on:"){const g=n.slice(3);s&&e.removeEventListener(g,s),t&&e.addEventListener(g,t)}else if(n.slice(0,10)==="oncapture:"){const g=n.slice(10);s&&e.removeEventListener(g,s,!0),t&&e.addEventListener(g,t,!0)}else if(n.slice(0,2)==="on"){const g=n.slice(2).toLowerCase(),w=ct.has(g);if(!w&&s){const x=Array.isArray(s)?s[0]:s;e.removeEventListener(g,x)}(w||t)&&(mt(e,g,t,w),w&&gt([g]))}else if(n.slice(0,5)==="attr:")ie(e,n.slice(5),t);else if((a=n.slice(0,5)==="prop:")||(f=ot.has(n))||!i&&((h=ft(n,e.tagName))||(o=rt.has(n)))||(l=e.nodeName.includes("-"))){if(a)n=n.slice(5),o=!0;else if(c.context&&e.isConnected)return t;n==="class"||n==="className"?pt(e,t):l&&!o&&!f?e[Ct(n)]=t:e[h||n]=t}else{const g=i&&n.indexOf(":")>-1&&at[n.split(":")[0]];g?yt(e,g,n,t):ie(e,lt[n]||n,t)}return t}function Ve(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),c.registry&&!c.done&&(c.done=_$HY.done=!0);t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function D(e,n,t,s,i){const r=!!c.context&&e.isConnected;if(r){!t&&(t=[...e.childNodes]);let f=[];for(let h=0;h<t.length;h++){const a=t[h];a.nodeType===8&&a.data.slice(0,2)==="!$"?a.remove():f.push(a)}t=f}for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,o=s!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(r)return t;if(l==="number"&&(n=n.toString()),o){let f=t[0];f&&f.nodeType===3?f.data!==n&&(f.data=n):f=document.createTextNode(n),t=H(e,t,s,f)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(r)return t;t=H(e,t,s)}else{if(l==="function")return k(()=>{let f=n();for(;typeof f=="function";)f=f();t=D(e,f,t,s)}),()=>t;if(Array.isArray(n)){const f=[],h=t&&Array.isArray(t);if(re(f,n,t,i))return k(()=>t=D(e,f,t,s,!0)),()=>t;if(r){if(!f.length)return t;if(s===void 0)return[...e.childNodes];let a=f[0],g=[a];for(;(a=a.nextSibling)!==s;)g.push(a);return t=g}if(f.length===0){if(t=H(e,t,s),o)return t}else h?t.length===0?xe(e,f,s):dt(e,t,f):(t&&H(e),xe(e,f));t=f}else if(n.nodeType){if(r&&n.parentNode)return t=o?[n]:n;if(Array.isArray(t)){if(o)return t=H(e,t,s,n);H(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function re(e,n,t,s){let i=!1;for(let r=0,l=n.length;r<l;r++){let o=n[r],f=t&&t[e.length],h;if(!(o==null||o===!0||o===!1))if((h=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=re(e,o,f)||i;else if(h==="function")if(s){for(;typeof o=="function";)o=o();i=re(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const a=String(o);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return i}function xe(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function H(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let r=!1;for(let l=n.length-1;l>=0;l--){const o=n[l];if(i!==o){const f=o.parentNode===e;!r&&!l?f?e.replaceChild(i,o):e.insertBefore(i,t):f&&o.remove()}else r=!0}}else e.insertBefore(i,t);return[i]}function Se(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const i=t[s],r=i.getAttribute("data-hk");(!n||r.startsWith(n))&&!c.registry.has(r)&&c.registry.set(r,i)}}function Ot(){const e=c.context;return`${e.id}${e.count++}`}const Rt=()=>{},Yt=!1,Xt=(...e)=>(Qe(),Et(...e)),He=le(),Tt=["title","meta"],Ae=[],Ee=["name","http-equiv","content","charset","media"].concat(["property"]),Ce=(e,n)=>{const t=Object.fromEntries(Object.entries(e.props).filter(([s])=>n.includes(s)).sort());return(Object.hasOwn(t,"name")||Object.hasOwn(t,"property"))&&(t.name=t.name||t.property,delete t.property),e.tag+JSON.stringify(t)};function Nt(){if(!c.context){const t=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(t,s=>s.parentNode.removeChild(s))}const e=new Map;function n(t){if(t.ref)return t.ref;let s=document.querySelector(`[data-sm="${t.id}"]`);return s?(s.tagName.toLowerCase()!==t.tag&&(s.parentNode&&s.parentNode.removeChild(s),s=document.createElement(t.tag)),s.removeAttribute("data-sm")):s=document.createElement(t.tag),s}return{addTag(t){if(Tt.indexOf(t.tag)!==-1){const r=t.tag==="title"?Ae:Ee,l=Ce(t,r);e.has(l)||e.set(l,[]);let o=e.get(l),f=o.length;o=[...o,t],e.set(l,o);let h=n(t);t.ref=h,me(h,t.props);let a=null;for(var s=f-1;s>=0;s--)if(o[s]!=null){a=o[s];break}return h.parentNode!=document.head&&document.head.appendChild(h),a&&a.ref&&a.ref.parentNode&&document.head.removeChild(a.ref),f}let i=n(t);return t.ref=i,me(i,t.props),i.parentNode!=document.head&&document.head.appendChild(i),-1},removeTag(t,s){const i=t.tag==="title"?Ae:Ee,r=Ce(t,i);if(t.ref){const l=e.get(r);if(l){if(t.ref.parentNode){t.ref.parentNode.removeChild(t.ref);for(let o=s-1;o>=0;o--)l[o]!=null&&document.head.appendChild(l[o].ref)}l[s]=null,e.set(r,l)}else t.ref.parentNode&&t.ref.parentNode.removeChild(t.ref)}}}}const Gt=e=>{const n=Nt();return Me(He.Provider,{value:n,get children(){return e.children}})},$t=(e,n,t)=>(Pt({tag:e,props:n,setting:t,id:tt(),get name(){return n.name||n.property}}),null);function Pt(e){const n=ue(He);if(!n)throw new Error("<MetaProvider /> should be in the tree");k(()=>{const t=n.addTag(e);oe(()=>n.removeTag(e,t))})}const Wt=e=>$t("title",e,{escape:!0,close:!0});export{Ft as A,Xt as B,Dt as C,_t as E,Gt as M,Ht as S,Wt as T,le as a,v as b,T as c,k as d,vt as e,C as f,Re as g,It as h,Yt as i,Me as j,Xe as k,Te as l,oe as m,gt as n,kt as o,Ut as p,me as q,jt as r,Lt as s,Mt as t,ue as u,Rt as v,St as w,Kt as x,Bt as y,Vt as z};
