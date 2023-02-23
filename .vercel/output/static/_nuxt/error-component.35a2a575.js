import{d as h,h as s,i as R,c as p,u as w,o as E,a as V,b as H,t as I,e as v,w as x,f as g,g as B}from"./entry.f6939452.js";import{c as P,a as D,b as f,d as j,u as N,e as z,f as M,g as _,h as O}from"./light.09fd0cdb.js";import{u as T,N as $}from"./Icon.01f5c08c.js";import{_ as k}from"./Button.6a3fc2f6.js";const Z=h({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),K={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},F=e=>{const{textColorDisabled:o,iconColor:r,textColor2:a,fontSizeSmall:C,fontSizeMedium:i,fontSizeLarge:c,fontSizeHuge:d}=e;return Object.assign(Object.assign({},K),{fontSizeSmall:C,fontSizeMedium:i,fontSizeLarge:c,fontSizeHuge:d,textColor:o,iconColor:r,extraTextColor:a})},q={name:"Empty",common:P,self:F},A=q,G=D("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[f("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[j("+",[f("description",`
 margin-top: 8px;
 `)])]),f("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),f("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),J=Object.assign(Object.assign({},z.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Q=h({name:"Empty",props:J,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=N(e),a=z("Empty","-empty",G,A,e,o),{localeRef:C}=T("Empty"),i=R(M,null),c=p(()=>{var t,n,u;return(t=e.description)!==null&&t!==void 0?t:(u=(n=i==null?void 0:i.mergedComponentPropsRef.value)===null||n===void 0?void 0:n.Empty)===null||u===void 0?void 0:u.description}),d=p(()=>{var t,n;return((n=(t=i==null?void 0:i.mergedComponentPropsRef.value)===null||t===void 0?void 0:t.Empty)===null||n===void 0?void 0:n.renderIcon)||(()=>s(Z,null))}),m=p(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{[_("iconSize",t)]:u,[_("fontSize",t)]:y,textColor:b,iconColor:L,extraTextColor:S}}=a.value;return{"--n-icon-size":u,"--n-font-size":y,"--n-bezier":n,"--n-text-color":b,"--n-icon-color":L,"--n-extra-text-color":S}}),l=r?O("empty",p(()=>{let t="";const{size:n}=e;return t+=n[0],t}),m,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:d,localizedDescription:p(()=>c.value||C.value.description),cssVars:r?void 0:m,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:r}=this;return r==null||r(),s("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${o}-empty__icon`},e.icon?e.icon():s($,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${o}-empty__extra`},e.extra()):null)}}),U={class:"pt-10"},W={class:"text-2xl text-center mb-2"},te=h({__name:"error",props:{error:Object},setup(e){const o=e;console.log(o.error),w();const r=()=>window.location.href=o.error.url,a=()=>B({redirect:"/"});return(C,i)=>{var m;const c=k,d=Q;return E(),V("div",U,[H("h1",W," 出了点错 - "+I((m=o.error)==null?void 0:m.statusCode),1),v(d,{description:"你什么也找不到"},{extra:x(()=>[v(c,{onClick:r},{default:x(()=>[g("重试")]),_:1}),v(c,{onClick:a},{default:x(()=>[g("回到首页")]),_:1})]),_:1})])}}});export{te as default};
