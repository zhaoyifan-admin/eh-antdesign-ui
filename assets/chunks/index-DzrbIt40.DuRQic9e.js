function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/index-CZQLqKMF.C8kteIlD.js","assets/chunks/theme.bwHCcudh.js","assets/chunks/framework.CnBtgCY9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as k,a as _,e as o,f as p,i as y,F as f,D as t,j as a,v as r,k as n,J as c,H as u,I as h,p as b,ah as x,ai as I}from"./framework.CnBtgCY9.js";import{G as w}from"./index-DVHMpBA7.C5JfUmN1.js";import{t as C}from"./index-CA2jvmFk.CVBnSFZv.js";import"./theme.bwHCcudh.js";import"./ExclamationCircleFilled-CYiklCbm.CVtOJcdL.js";import"./index-awMgXV8P.C_84ScRn.js";const g=k({name:"eh-components-form-item"}),D=k({...g,props:{columns:{default:()=>({})},dataSource:{default:()=>[]},disabled:{type:Boolean,default:!1},formType:{default:""},options:{default:()=>({showMenu:!0,showLeftMenu:!0,showRightMenu:!0})},search:{default:()=>({})},size:{default:"middle"}},setup($){const i=x(()=>I(()=>import("./index-CZQLqKMF.C8kteIlD.js"),__vite__mapDeps([0,1,2]))),l=_();return(s,F)=>{const d=w,m=C;return o(!0),p(f,null,y(s.columns,(e,z)=>(o(),p(f,{key:z},[s.formType==="search"?(o(),t(m,{key:0,span:e.span||s.options.searchSpan||6},{default:a(()=>[e.children?r("",!0):(o(),t(d,{key:0,"has-feedback":e.feedback,name:e.dataIndex,rules:[{required:!0,message:`请输入 ${e.title}`}]},{label:a(()=>[n(s.$slots,e.dataIndex+"searchLabel",{ehscope:{row:e,size:s.size}},()=>[c(u(e.title),1)])]),default:a(()=>[n(s.$slots,e.dataIndex+"Edit",{ehscope:{row:e,size:s.size}},()=>[(o(),t(h(b(i)),{ref_for:!0,ref_key:"globalComponentsRef",ref:l,colitem:e,disabled:s.disabled,options:s.options,size:s.size,Form:s.search},null,8,["colitem","disabled","options","size","Form"]))])]),_:2},1032,["has-feedback","name","rules"]))]),_:2},1032,["span"])):r("",!0),s.formType==="modal"?(o(),t(m,{key:1,span:e.span||s.options.span||12},{default:a(()=>[e.children?r("",!0):(o(),t(d,{key:0,"has-feedback":e.feedback,name:e.dataIndex,rules:[{required:!0,message:`请输入 ${e.title}`}]},{label:a(()=>[n(s.$slots,e.dataIndex+"Label",{ehscope:{row:e,size:s.size}},()=>[c(u(e.title),1)])]),default:a(()=>[n(s.$slots,e.dataIndex+"Edit",{ehscope:{row:e,size:s.size}},()=>[(o(),t(h(b(i)),{ref_for:!0,ref_key:"globalComponentsRef",ref:l,colitem:e,disabled:s.disabled,options:s.options,size:s.size,Form:s.search},null,8,["colitem","disabled","options","size","Form"]))])]),_:2},1032,["has-feedback","name","rules"]))]),_:2},1032,["span"])):r("",!0)],64))),128)}}});export{D as default};
