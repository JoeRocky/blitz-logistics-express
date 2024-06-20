import{isServer as g,createComponent as C,spread as m,useAssets as T,ssr as b,escape as h}from"solid-js/web";import{createContext as N,createUniqueId as x,useContext as $,createRenderEffect as O,onCleanup as j,sharedConfig as E}from"solid-js";const k="Rasch Logistics Express",I="+49 159 01409372",H="Montag bis Freitag",L="08:00 bis 20:00 Uhr",R="unknown@email.com",U="?",_="? ?",z="? ?",F="?",y=N(),v=["title","meta"],p=[],f=["name","http-equiv","content","charset","media"].concat(["property"]),l=(n,t)=>{const e=Object.fromEntries(Object.entries(n.props).filter(([r])=>t.includes(r)).sort());return(Object.hasOwn(e,"name")||Object.hasOwn(e,"property"))&&(e.name=e.name||e.property,delete e.property),n.tag+JSON.stringify(e)};function P(){if(!E.context){const e=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(e,r=>r.parentNode.removeChild(r))}const n=new Map;function t(e){if(e.ref)return e.ref;let r=document.querySelector(`[data-sm="${e.id}"]`);return r?(r.tagName.toLowerCase()!==e.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(e.tag)),r.removeAttribute("data-sm")):r=document.createElement(e.tag),r}return{addTag(e){if(v.indexOf(e.tag)!==-1){const s=e.tag==="title"?p:f,a=l(e,s);n.has(a)||n.set(a,[]);let i=n.get(a),u=i.length;i=[...i,e],n.set(a,i);let d=t(e);e.ref=d,m(d,e.props);let c=null;for(var r=u-1;r>=0;r--)if(i[r]!=null){c=i[r];break}return d.parentNode!=document.head&&document.head.appendChild(d),c&&c.ref&&c.ref.parentNode&&document.head.removeChild(c.ref),u}let o=t(e);return e.ref=o,m(o,e.props),o.parentNode!=document.head&&document.head.appendChild(o),-1},removeTag(e,r){const o=e.tag==="title"?p:f,s=l(e,o);if(e.ref){const a=n.get(s);if(a){if(e.ref.parentNode){e.ref.parentNode.removeChild(e.ref);for(let i=r-1;i>=0;i--)a[i]!=null&&document.head.appendChild(a[i].ref)}a[r]=null,n.set(s,a)}else e.ref.parentNode&&e.ref.parentNode.removeChild(e.ref)}}}}function w(){const n=[];return T(()=>b(S(n))),{addTag(t){if(v.indexOf(t.tag)!==-1){const e=t.tag==="title"?p:f,r=l(t,e),o=n.findIndex(s=>s.tag===t.tag&&l(s,e)===r);o!==-1&&n.splice(o,1)}return n.push(t),n.length},removeTag(t,e){}}}const J=n=>{const t=g?w():P();return C(y.Provider,{value:t,get children(){return n.children}})},M=(n,t,e)=>(A({tag:n,props:t,setting:e,id:x(),get name(){return t.name||t.property}}),null);function A(n){const t=$(y);if(!t)throw new Error("<MetaProvider /> should be in the tree");O(()=>{const e=t.addTag(n);j(()=>t.removeTag(n,e))})}function S(n){return n.map(t=>{const r=Object.keys(t.props).map(s=>s==="children"?"":` ${s}="${h(t.props[s],!0)}"`).join("");let o=t.props.children;return Array.isArray(o)&&(o=o.join("")),t.setting?.close?`<${t.tag} data-sm="${t.id}"${r}>${t.setting?.escape?h(o):o||""}</${t.tag}>`:`<${t.tag} data-sm="${t.id}"${r}/>`}).join("")}const V=n=>M("title",n,{escape:!0,close:!0});export{J as M,V as T,L as a,z as b,k as c,R as e,U as g,H as o,I as p,_ as s,F as u};
