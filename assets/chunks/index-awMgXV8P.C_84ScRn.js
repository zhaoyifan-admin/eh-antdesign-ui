import{P as R,K as M,s as G,aT as X,aU as k,aV as w,v as W,Y as N,w as x,u as L,z as D}from"./theme.bwHCcudh.js";import{d as B,a as E,o as P,U as T,c as g,g as F,X as U,S as V}from"./framework.CnBtgCY9.js";const K=Symbol("rowContextKey"),Y=n=>{V(K,n)},z=n=>{const{componentCls:s}=n;return{[s]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},H=n=>{const{componentCls:s}=n;return{[s]:{position:"relative",maxWidth:"100%",minHeight:1}}},I=(n,s)=>((v,a)=>{const{componentCls:l,gridColumns:c}=v,i={};for(let o=c;o>=0;o--)o===0?(i[`${l}${a}-${o}`]={display:"none"},i[`${l}-push-${o}`]={insetInlineStart:"auto"},i[`${l}-pull-${o}`]={insetInlineEnd:"auto"},i[`${l}${a}-push-${o}`]={insetInlineStart:"auto"},i[`${l}${a}-pull-${o}`]={insetInlineEnd:"auto"},i[`${l}${a}-offset-${o}`]={marginInlineEnd:0},i[`${l}${a}-order-${o}`]={order:0}):(i[`${l}${a}-${o}`]={display:"block",flex:`0 0 ${o/c*100}%`,maxWidth:o/c*100+"%"},i[`${l}${a}-push-${o}`]={insetInlineStart:o/c*100+"%"},i[`${l}${a}-pull-${o}`]={insetInlineEnd:o/c*100+"%"},i[`${l}${a}-offset-${o}`]={marginInlineStart:o/c*100+"%"},i[`${l}${a}-order-${o}`]={order:o});return i})(n,s),q=L("Grid",n=>[z(n)]),J=L("Grid",n=>{const s=D(n,{gridColumns:24}),v={"-sm":s.screenSMMin,"-md":s.screenMDMin,"-lg":s.screenLGMin,"-xl":s.screenXLMin,"-xxl":s.screenXXLMin};return[H(s),I(s,""),I(s,"-xs"),Object.keys(v).map(a=>((l,c,i)=>({[`@media (min-width: ${c}px)`]:x({},I(l,i))}))(s,v[a],a)).reduce((a,l)=>x(x({},a),l),{})]}),Q=B({compatConfig:{MODE:3},name:"ARow",inheritAttrs:!1,props:{align:M([String,Object]),justify:M([String,Object]),prefixCls:String,gutter:M([Number,Array,Object],0),wrap:{type:Boolean,default:void 0}},setup(n,s){let{slots:v,attrs:a}=s;const{prefixCls:l,direction:c}=G("row",n),[i,o]=q(l);let b;const y=X(),h=E({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),j=E({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),S=t=>g(()=>{if(typeof n[t]=="string")return n[t];if(typeof n[t]!="object")return"";for(let r=0;r<w.length;r++){const e=w[r];if(!j.value[e])continue;const f=n[t][e];if(f!==void 0)return f}return""}),$=S("align"),m=S("justify"),p=k();P(()=>{b=y.value.subscribe(t=>{j.value=t;const r=n.gutter||0;(!Array.isArray(r)&&typeof r=="object"||Array.isArray(r)&&(typeof r[0]=="object"||typeof r[1]=="object"))&&(h.value=t)})}),T(()=>{y.value.unsubscribe(b)});const u=g(()=>{const t=[void 0,void 0],{gutter:r=0}=n;return(Array.isArray(r)?r:[r,void 0]).forEach((e,f)=>{if(typeof e=="object")for(let O=0;O<w.length;O++){const A=w[O];if(h.value[A]&&e[A]!==void 0){t[f]=e[A];break}}else t[f]=e}),t});Y({gutter:u,supportFlexGap:p,wrap:g(()=>n.wrap)});const C=g(()=>W(l.value,{[`${l.value}-no-wrap`]:n.wrap===!1,[`${l.value}-${m.value}`]:m.value,[`${l.value}-${$.value}`]:$.value,[`${l.value}-rtl`]:c.value==="rtl"},a.class,o.value)),d=g(()=>{const t=u.value,r={},e=t[0]!=null&&t[0]>0?t[0]/-2+"px":void 0,f=t[1]!=null&&t[1]>0?t[1]/-2+"px":void 0;return e&&(r.marginLeft=e,r.marginRight=e),p.value?r.rowGap=`${t[1]}px`:f&&(r.marginTop=f,r.marginBottom=f),r});return()=>{var t;return i(F("div",N(N({},a),{},{class:C.value,style:x(x({},d.value),a.style)}),[(t=v.default)===null||t===void 0?void 0:t.call(v)]))}}}),_=["xs","sm","md","lg","xl","xxl"],te=B({compatConfig:{MODE:3},name:"ACol",inheritAttrs:!1,props:{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]},setup(n,s){let{slots:v,attrs:a}=s;const{gutter:l,supportFlexGap:c,wrap:i}=U(K,{gutter:g(()=>{}),wrap:g(()=>{}),supportFlexGap:g(()=>{})}),{prefixCls:o,direction:b}=G("col",n),[y,h]=J(o),j=g(()=>{const{span:$,order:m,offset:p,push:u,pull:C}=n,d=o.value;let t={};return _.forEach(r=>{let e={};const f=n[r];typeof f=="number"?e.span=f:typeof f=="object"&&(e=f||{}),t=x(x({},t),{[`${d}-${r}-${e.span}`]:e.span!==void 0,[`${d}-${r}-order-${e.order}`]:e.order||e.order===0,[`${d}-${r}-offset-${e.offset}`]:e.offset||e.offset===0,[`${d}-${r}-push-${e.push}`]:e.push||e.push===0,[`${d}-${r}-pull-${e.pull}`]:e.pull||e.pull===0,[`${d}-rtl`]:b.value==="rtl"})}),W(d,{[`${d}-${$}`]:$!==void 0,[`${d}-order-${m}`]:m,[`${d}-offset-${p}`]:p,[`${d}-push-${u}`]:u,[`${d}-pull-${C}`]:C},t,a.class,h.value)}),S=g(()=>{const{flex:$}=n,m=l.value,p={};if(m&&m[0]>0){const u=m[0]/2+"px";p.paddingLeft=u,p.paddingRight=u}if(m&&m[1]>0&&!c.value){const u=m[1]/2+"px";p.paddingTop=u,p.paddingBottom=u}return $&&(p.flex=function(u){return typeof u=="number"?`${u} ${u} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(u)?`0 0 ${u}`:u}($),i.value!==!1||p.minWidth||(p.minWidth=0)),p});return()=>{var $;return y(F("div",N(N({},a),{},{class:j.value,style:[S.value,a.style]}),[($=v.default)===null||$===void 0?void 0:$.call(v)]))}}}),re=R(Q);export{Q,re as r,te as t};
