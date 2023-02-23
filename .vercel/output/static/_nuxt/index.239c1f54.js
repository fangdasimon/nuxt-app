import{n as b,c as T,r as I,j as L,u as U,d as D,O as V,k as j,v as $,x as M,h as O,P as W,Q as K,I as J,J as Q,o as w,a as B,t as A,R as X,F as G,S as Y,e as N,w as P,f as R,b as Z}from"./entry.f6939452.js";import{u as ee}from"./asyncData.1d7e214d.js";import{_ as te}from"./Button.6a3fc2f6.js";import"./light.09fd0cdb.js";const re={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function se(n,s={}){s={...re,...s};const r=E(s);return r.dispatch(n),r.toString()}function E(n){const s=[];let r=[];const e=t=>{s.push(t)};return{toString(){return s.join("")},getContext(){return r},dispatch(t){return n.replacer&&(t=n.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){const a=/\[object (.*)]/i,o=Object.prototype.toString.call(t),u=a.exec(o),i=u?u[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let l=null;if((l=r.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+l+"]");if(r.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")if(this["_"+i])this["_"+i](t);else{if(n.ignoreUnknown)return e("["+i+"]");throw new Error('Unknown object type "'+i+'"')}else{let f=Object.keys(t);n.unorderedObjects&&(f=f.sort()),n.respectType!==!1&&!z(t)&&f.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(f=f.filter(function(d){return!n.excludeKeys(d)})),e("object:"+f.length+":");for(const d of f)this.dispatch(d),e(":"),n.excludeValues||this.dispatch(t[d]),e(",")}},_array(t,a){if(a=typeof a<"u"?a:n.unorderedArrays!==!1,e("array:"+t.length+":"),!a||t.length<=1){for(const i of t)this.dispatch(i);return}const o=[],u=t.map(i=>{const l=E(n);return l.dispatch(i),o.push(l.getContext()),l.toString()});return r=[...r,...o],u.sort(),this._array(u,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),z(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const a=[...t];return this._array(a,n.unorderedSets!==!1)},_set(t){e("set:");const a=[...t];return this._array(a,n.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function z(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class k{constructor(s,r){s=this.words=s||[],this.sigBytes=r!==void 0?r:s.length*4}toString(s){return(s||ne).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new k([...this.words])}}const ne={stringify(n){const s=[];for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},ae={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,a=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=t<<16|a<<8|o;for(let i=0;i<4&&e*8+i*6<n.sigBytes*8;i++)r.push(s.charAt(u>>>6*(3-i)&63))}return r.join("")}},ie={parse(n){const s=n.length,r=[];for(let e=0;e<s;e++)r[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new k(r,s)}},oe={parse(n){return ie.parse(unescape(encodeURIComponent(n)))}};class ce{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new k,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=oe.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=a}return new k(r,a)}}class le extends ce{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const ue=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],fe=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],v=[];class de extends le{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new k([...ue])}_doProcessBlock(s,r){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],u=e[3],i=e[4],l=e[5],f=e[6],d=e[7];for(let c=0;c<64;c++){if(c<16)v[c]=s[r+c]|0;else{const x=v[c-15],m=(x<<25|x>>>7)^(x<<14|x>>>18)^x>>>3,_=v[c-2],H=(_<<15|_>>>17)^(_<<13|_>>>19)^_>>>10;v[c]=m+v[c-7]+H+v[c-16]}const p=i&l^~i&f,h=t&a^t&o^a&o,g=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),S=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),C=d+S+p+fe[c]+v[c],y=g+h;d=f,f=l,l=i,i=u+C|0,u=o,o=a,a=t,t=C+y|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+u|0,e[4]=e[4]+i|0,e[5]=e[5]+l|0,e[6]=e[6]+f|0,e[7]=e[7]+d|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function he(n){return new de().finalize(n).toString(ae)}function pe(n,s={}){const r=typeof n=="string"?n:se(n,s);return he(r).slice(0,10)}function ye(n,s,r){const[e={},t]=typeof s=="string"?[{},s]:[s,r],a=e.key||pe([t,b(e.baseURL),typeof n=="string"?n:"",b(e.params||e.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const o=a===t?"$f"+a:a,u=T(()=>{let m=n;return typeof m=="function"&&(m=m()),b(m)}),{server:i,lazy:l,default:f,transform:d,pick:c,watch:p,immediate:h,...g}=e,S=I({...g,cache:typeof e.cache=="boolean"?void 0:e.cache}),C={server:i,lazy:l,default:f,transform:d,pick:c,immediate:h,watch:[S,u,...p||[]]};let y;return ee(o,()=>{var _;return(_=y==null?void 0:y.abort)==null||_.call(y),y=typeof AbortController<"u"?new AbortController:{},typeof u.value=="string"&&u.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(u.value,{signal:y.signal,...S})},C)}const q=globalThis.requestIdleCallback||(n=>{const s=Date.now(),r={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-s))};return setTimeout(()=>{n(r)},1)}),_e=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),ge=n=>{const s=L();s.isHydrating?s.hooks.hookOnce("app:suspense:resolve",()=>{q(n)}):q(n)};async function F(n,s=U()){if(s._routePreloaded||(s._routePreloaded=new Set),s._routePreloaded.has(n))return;const r=s._preloadPromises=s._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>F(n,s));s._routePreloaded.add(n);const e=s.resolve(n).matched.map(t=>{var a;return(a=t.components)==null?void 0:a.default}).filter(t=>typeof t=="function");for(const t of e){const a=Promise.resolve(t()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}const me=(...n)=>n.find(s=>s!==void 0),ve="noopener noreferrer";function be(n){const s=n.componentName||"NuxtLink";return D({name:s,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(r,{slots:e}){const t=U(),a=T(()=>r.to||r.href||""),o=T(()=>r.external||r.target&&r.target!=="_self"?!0:typeof a.value=="object"?!1:a.value===""||V(a.value,!0)),u=j(!1),i=j(null);if(r.prefetch!==!1&&r.noPrefetch!==!0&&typeof a.value=="string"&&r.target!=="_blank"&&!Be()){const f=L();let d,c=null;$(()=>{const p=we();ge(()=>{d=q(()=>{var h;(h=i==null?void 0:i.value)!=null&&h.tagName&&(c=p.observe(i.value,async()=>{c==null||c(),c=null,await Promise.all([f.hooks.callHook("link:prefetch",a.value).catch(()=>{}),!o.value&&F(a.value,t).catch(()=>{})]),u.value=!0}))})})}),M(()=>{d&&_e(d),c==null||c(),c=null})}return()=>{var p,h;if(!o.value)return O(W("RouterLink"),{ref:g=>{i.value=g==null?void 0:g.$el},to:a.value,...u.value&&!r.custom?{class:r.prefetchedClass||n.prefetchedClass}:{},activeClass:r.activeClass||n.activeClass,exactActiveClass:r.exactActiveClass||n.exactActiveClass,replace:r.replace,ariaCurrentValue:r.ariaCurrentValue,custom:r.custom},e.default);const l=typeof a.value=="object"?((p=t.resolve(a.value))==null?void 0:p.href)??null:a.value||null,f=r.target||null,d=r.noRel?null:me(r.rel,n.externalRelAttribute,l?ve:"")||null,c=()=>K(l,{replace:r.replace});return r.custom?e.default?e.default({href:l,navigate:c,route:t.resolve(l),rel:d,target:f,isExternal:o.value,isActive:!1,isExactActive:!1}):null:O("a",{ref:i,href:l,rel:d,target:f},(h=e.default)==null?void 0:h.call(e))}}})}const xe=be({componentName:"NuxtLink"});function we(){const n=L();if(n._observer)return n._observer;let s=null;const r=new Map,e=(a,o)=>(s||(s=new IntersectionObserver(u=>{for(const i of u){const l=r.get(i.target);(i.isIntersecting||i.intersectionRatio>0)&&l&&l()}})),r.set(a,o),s.observe(a),()=>{r.delete(a),s.unobserve(a),r.size===0&&(s.disconnect(),s=null)});return n._observer={observe:e}}function Be(){const n=navigator.connection;return!!(n&&(n.saveData||/2g/.test(n.effectiveType)))}const ke={class:"flex items-center flex-col gap-2 py-4"},Se={key:0},Ce={key:1},Ae={key:2},Ne={class:"text-slate-500"},qe=D({__name:"index",async setup(n){let s,r;J({title:"文章列表"});const e=j(1),{data:t,pending:a,error:o,refresh:u}=([s,r]=Q(()=>ye(()=>`/api/posts?page=${e.value}`,"$pqtWcjQkdb")),s=await s,r(),s);function i(){e.value--,u()}function l(){e.value++,u()}return(f,d)=>{const c=xe,p=te;return w(),B("div",ke,[b(o)?(w(),B("div",Se,A(b(o).message),1)):X("",!0),b(a)?(w(),B("div",Ce,"加载中...")):(w(),B("div",Ae,[(w(!0),B(G,null,Y(b(t),h=>(w(),B("div",{key:h.id},[N(c,{class:"text-lg",to:`/detail/${h.id}`},{default:P(()=>[R(A(h.title),1)]),_:2},1032,["to"]),Z("p",Ne,"发布于: "+A(h.date),1)]))),128)),N(p,{onClick:i},{default:P(()=>[R("上一页")]),_:1}),N(p,{onClick:l},{default:P(()=>[R("下一页")]),_:1})]))])}}});export{qe as default};
